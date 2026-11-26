import { sql } from '@payloadcms/db-postgres'
import type { Payload } from 'payload'

export type DeviceKind = 'mobile' | 'desktop' | 'tablet'

export type PeriodStats = {
  uniqueUsers: number
  pageViews: number
}

export type DailyVisitPoint = {
  day: string
  uniqueUsers: number
  pageViews: number
}

export type BreakdownItem = {
  label: string
  views: number
  uniqueUsers: number
}

export type DeviceBreakdown = Record<DeviceKind, number>

export type VisitorAnalyticsSummary = {
  today: PeriodStats
  yesterday: PeriodStats
  last7Days: PeriodStats
  last30Days: PeriodStats
  dailySeries: DailyVisitPoint[]
  topPages: BreakdownItem[]
  topSources: BreakdownItem[]
  devices: DeviceBreakdown
}

const BOT_UA_RE = /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|whatsapp|headlesschrome|lighthouse|curl|wget|python-requests|vercel/i
let tableEnsured = false

/** Returns YYYY-MM-DD in Asia/Kolkata timezone (IST) so daily counts match Indian study hours. */
export function getIstDay(date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date)
}

function getPastIstDays(days: number, from = new Date()): string[] {
  const out: string[] = []
  for (let offset = days - 1; offset >= 0; offset -= 1) {
    const d = new Date(from.getTime() - offset * 86_400_000)
    out.push(getIstDay(d))
  }
  return out
}

export function isBotUserAgent(ua: string): boolean {
  return BOT_UA_RE.test(ua)
}

/** Normalizes visited path and excludes internal admin, API, and static framework paths. */
export function normalizeVisitPath(raw: string): string | null {
  const cleaned = raw.split('#')[0]?.split('?')[0]?.trim() ?? ''
  if (!cleaned.startsWith('/')) return null
  if (cleaned.startsWith('/admin') || cleaned.startsWith('/api') || cleaned.startsWith('/_next')) return null
  const normalized = cleaned.length > 1 ? cleaned.replace(/\/+$/, '') : '/'
  return normalized.slice(0, 300)
}

/** Extracts a concise referrer source label ('Direct' for empty or self-referrals). */
export function extractReferrerHost(raw: string | null | undefined, siteHost?: string): string {
  const trimmed = raw?.trim()
  if (!trimmed) return 'Direct'
  try {
    const host = new URL(trimmed).hostname.replace(/^www\./, '').toLowerCase()
    if (!host) return 'Direct'
    if (siteHost && host === siteHost.replace(/^www\./, '').toLowerCase()) return 'Direct'
    if (host === 'sociology4upsc.com' || host.endsWith('.sociology4upsc.com') || host === 'localhost') return 'Direct'
    return host.slice(0, 120)
  } catch {
    return 'Direct'
  }
}

type DrizzleLike = {
  execute: (query: ReturnType<typeof sql>) => Promise<unknown>
}

function extractRows<T>(result: unknown): T[] {
  if (Array.isArray(result)) return result as T[]
  if (result && typeof result === 'object' && 'rows' in result && Array.isArray((result as { rows: unknown }).rows)) {
    return (result as { rows: T[] }).rows
  }
  return []
}

function getExecutor(payload: Payload): DrizzleLike {
  return (payload.db as unknown as { drizzle: DrizzleLike }).drizzle
}

/** Ensures the site_visits table exists even if a local dev DB skipped SQL migrations. */
export async function ensureSiteVisitsTable(payload: Payload): Promise<void> {
  if (tableEnsured) return
  const db = getExecutor(payload)
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "site_visits" (
      "id" serial PRIMARY KEY NOT NULL,
      "visit_day" varchar NOT NULL,
      "visitor_hash" varchar NOT NULL,
      "path" varchar NOT NULL,
      "referrer" varchar DEFAULT 'Direct' NOT NULL,
      "utm_source" varchar,
      "device" varchar DEFAULT 'desktop' NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );
    CREATE INDEX IF NOT EXISTS "site_visits_day_idx" ON "site_visits" USING btree ("visit_day");
    CREATE INDEX IF NOT EXISTS "site_visits_day_visitor_idx" ON "site_visits" USING btree ("visit_day", "visitor_hash");
    CREATE INDEX IF NOT EXISTS "site_visits_day_path_idx" ON "site_visits" USING btree ("visit_day", "path");
  `)
  tableEnsured = true
}

export async function recordSiteVisit(
  payload: Payload,
  input: {
    visitDay: string
    visitorHash: string
    path: string
    referrer: string
    utmSource: string | null
    device: DeviceKind
  },
): Promise<void> {
  await ensureSiteVisitsTable(payload)
  const db = getExecutor(payload)
  await db.execute(sql`
    INSERT INTO "site_visits" ("visit_day", "visitor_hash", "path", "referrer", "utm_source", "device")
    VALUES (${input.visitDay}, ${input.visitorHash}, ${input.path}, ${input.referrer}, ${input.utmSource}, ${input.device})
  `)
}

export async function getVisitorAnalyticsSummary(payload: Payload): Promise<VisitorAnalyticsSummary> {
  await ensureSiteVisitsTable(payload)
  const db = getExecutor(payload)
  const days14 = getPastIstDays(14)
  const days30 = getPastIstDays(30)
  const today = days14[days14.length - 1]!
  const yesterday = days14[days14.length - 2]!
  const start7 = days14[days14.length - 7]!
  const start14 = days14[0]!
  const start30 = days30[0]!

  const [dailyRes, summary30Res, pagesRes, sourcesRes, devicesRes] = await Promise.all([
    db.execute(sql`
      SELECT visit_day, COUNT(DISTINCT visitor_hash)::int AS unique_users, COUNT(*)::int AS page_views
      FROM site_visits
      WHERE visit_day >= ${start14}
      GROUP BY visit_day
      ORDER BY visit_day ASC
    `),
    db.execute(sql`
      SELECT
        COUNT(DISTINCT CASE WHEN visit_day >= ${start7} THEN visitor_hash END)::int AS users_7d,
        COUNT(CASE WHEN visit_day >= ${start7} THEN 1 END)::int AS views_7d,
        COUNT(DISTINCT visitor_hash)::int AS users_30d,
        COUNT(*)::int AS views_30d
      FROM site_visits
      WHERE visit_day >= ${start30}
    `),
    db.execute(sql`
      SELECT path AS label, COUNT(*)::int AS views, COUNT(DISTINCT visitor_hash)::int AS unique_users
      FROM site_visits
      WHERE visit_day >= ${start7}
      GROUP BY path
      ORDER BY views DESC
      LIMIT 8
    `),
    db.execute(sql`
      SELECT COALESCE(NULLIF(utm_source, ''), referrer, 'Direct') AS label,
             COUNT(*)::int AS views,
             COUNT(DISTINCT visitor_hash)::int AS unique_users
      FROM site_visits
      WHERE visit_day >= ${start7}
      GROUP BY 1
      ORDER BY views DESC
      LIMIT 6
    `),
    db.execute(sql`
      SELECT device, COUNT(DISTINCT visitor_hash)::int AS unique_users
      FROM site_visits
      WHERE visit_day >= ${start7}
      GROUP BY device
    `),
  ])

  const dailyRows = extractRows<{ visit_day: string; unique_users: number; page_views: number }>(dailyRes)
  const dailyMap = new Map(dailyRows.map((r) => [r.visit_day, { uniqueUsers: Number(r.unique_users) || 0, pageViews: Number(r.page_views) || 0 }]))
  const dailySeries: DailyVisitPoint[] = days14.map((day) => ({ day, ...(dailyMap.get(day) ?? { uniqueUsers: 0, pageViews: 0 }) }))

  const sumRow = extractRows<{ users_7d: number; views_7d: number; users_30d: number; views_30d: number }>(summary30Res)[0]
  const deviceRows = extractRows<{ device: string; unique_users: number }>(devicesRes)
  const devices: DeviceBreakdown = { mobile: 0, desktop: 0, tablet: 0 }
  for (const row of deviceRows) {
    if (row.device === 'mobile' || row.device === 'desktop' || row.device === 'tablet') {
      devices[row.device] = Number(row.unique_users) || 0
    }
  }

  return {
    today: dailyMap.get(today) ?? { uniqueUsers: 0, pageViews: 0 },
    yesterday: dailyMap.get(yesterday) ?? { uniqueUsers: 0, pageViews: 0 },
    last7Days: { uniqueUsers: Number(sumRow?.users_7d) || 0, pageViews: Number(sumRow?.views_7d) || 0 },
    last30Days: { uniqueUsers: Number(sumRow?.users_30d) || 0, pageViews: Number(sumRow?.views_30d) || 0 },
    dailySeries,
    topPages: extractRows<{ label: string; views: number; unique_users: number }>(pagesRes).map((r) => ({
      label: r.label,
      views: Number(r.views) || 0,
      uniqueUsers: Number(r.unique_users) || 0,
    })),
    topSources: extractRows<{ label: string; views: number; unique_users: number }>(sourcesRes).map((r) => ({
      label: r.label || 'Direct',
      views: Number(r.views) || 0,
      uniqueUsers: Number(r.unique_users) || 0,
    })),
    devices,
  }
}
