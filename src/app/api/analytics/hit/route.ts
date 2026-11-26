import { createHash } from 'node:crypto'
import { NextResponse } from 'next/server'
import { z } from 'zod'

import { extractReferrerHost, getIstDay, isBotUserAgent, normalizeVisitPath, recordSiteVisit } from '@/lib/analytics/site-visits'
import { getPayloadClient } from '@/lib/queries'

const hitSchema = z.object({
  path: z.string().min(1).max(400),
  referrer: z.string().max(600).optional().nullable(),
  utmSource: z.string().max(120).optional().nullable(),
  visitorId: z.string().max(120).optional().nullable(),
  device: z.enum(['mobile', 'desktop', 'tablet']).optional(),
})

/** Records anonymous daily frontend page hits into `site_visits` for the admin dashboard. */
export async function POST(req: Request) {
  const ua = req.headers.get('user-agent') || ''
  if (isBotUserAgent(ua)) {
    return NextResponse.json({ ok: true, ignored: 'bot' })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = hitSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }

  const path = normalizeVisitPath(parsed.data.path)
  if (!path) {
    return NextResponse.json({ ok: true, ignored: 'internal' })
  }

  const visitDay = getIstDay()
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'anon'
  const rawIdentity = parsed.data.visitorId?.trim() || `${ip}|${ua.slice(0, 80)}`
  const visitorHash = createHash('sha256').update(`${visitDay}:${rawIdentity}`).digest('hex').slice(0, 32)
  const siteHost = req.headers.get('host') || undefined

  try {
    const payload = await getPayloadClient()
    await recordSiteVisit(payload, {
      visitDay,
      visitorHash,
      path,
      referrer: extractReferrerHost(parsed.data.referrer, siteHost),
      utmSource: parsed.data.utmSource?.trim().slice(0, 100) || null,
      device: parsed.data.device ?? 'desktop',
    })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Failed to record visit' }, { status: 500 })
  }
}
