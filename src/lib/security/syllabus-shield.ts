export const SYLLABUS_WINDOW_MS = 60_000
export const SYLLABUS_MAX_DISTINCT_PAGES = 18
export const MAX_TRACKED_CLIENTS = 5_000

const VERIFIED_SEARCH_BOT_RE =
  /\b(googlebot|google-inspectiontool|googleother|bingbot|bingpreview|duckduckbot|applebot|slurp)\b/i

const BLOCKED_SCRAPER_UA_RE =
  /\b(curl|wget|python-requests|python-urllib|httpx|aiohttp|scrapy|headlesschrome|headless|phantomjs|puppeteer|playwright|selenium|go-http-client|libwww-perl|apache-httpclient|node-fetch|undici|axios|gptbot|ccbot|bytespider|claudebot|amazonbot|anthropic-ai|omgili|diffbot|petalbot)\b/i

const COLLECTION_ROOTS = new Set(['/api/topics', '/api/units', '/api/papers'])

const clientHits = new Map<string, Map<string, number>>()
let lastGlobalPrune = 0

/** Returns true for legitimate search engine crawlers that must index syllabus pages cleanly. */
export function isVerifiedSearchBot(userAgent: string | null): boolean {
  if (!userAgent) return false
  return VERIFIED_SEARCH_BOT_RE.test(userAgent)
}

/** Blocks empty UAs and known scrapers/AI dataset crawlers while allowing real search bots. */
export function isBlockedScraperUa(userAgent: string | null): boolean {
  if (isVerifiedSearchBot(userAgent)) return false
  if (!userAgent || userAgent.trim().length < 6) return true
  return BLOCKED_SCRAPER_UA_RE.test(userAgent)
}

/** Normalizes a syllabus pathname for distinct-page tracking. */
export function normalizeSyllabusPath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '')
  return (trimmed || '/').toLowerCase()
}

function pruneBucket(bucket: Map<string, number>, now: number): void {
  for (const [path, ts] of bucket.entries()) {
    if (now - ts > SYLLABUS_WINDOW_MS) bucket.delete(path)
  }
}

/** Clears expired entries across client buckets and bounds in-memory map size. */
export function pruneExpired(now: number): void {
  for (const [key, bucket] of clientHits.entries()) {
    pruneBucket(bucket, now)
    if (bucket.size === 0) clientHits.delete(key)
  }
  while (clientHits.size > MAX_TRACKED_CLIENTS) {
    const oldestKey = clientHits.keys().next().value
    if (oldestKey === undefined) break
    clientHits.delete(oldestKey)
  }
  lastGlobalPrune = now
}

export type RateLimitResult = {
  allowed: boolean
  count: number
  retryAfterSeconds: number
}

/** Tracks distinct syllabus pages hit per client in a 60s sliding window. */
export function checkSyllabusRateLimit(
  clientKey: string,
  pathname: string,
  now = Date.now(),
): RateLimitResult {
  if (now - lastGlobalPrune >= SYLLABUS_WINDOW_MS || clientHits.size >= MAX_TRACKED_CLIENTS) {
    pruneExpired(now)
  }

  let bucket = clientHits.get(clientKey)
  if (!bucket) {
    bucket = new Map<string, number>()
    clientHits.set(clientKey, bucket)
  } else {
    pruneBucket(bucket, now)
  }

  bucket.set(normalizeSyllabusPath(pathname), now)

  if (bucket.size > SYLLABUS_MAX_DISTINCT_PAGES) {
    let oldestTs = now
    for (const ts of bucket.values()) {
      if (ts < oldestTs) oldestTs = ts
    }
    const retryAfterSeconds = Math.max(1, Math.ceil((oldestTs + SYLLABUS_WINDOW_MS - now) / 1000))
    return { allowed: false, count: bucket.size, retryAfterSeconds }
  }

  return { allowed: true, count: bucket.size, retryAfterSeconds: 0 }
}

/** Detects bulk syllabus API queries (collection root, high limit, or deep relation dumps). */
export function isBulkSyllabusApiRequest(pathname: string, searchParams: URLSearchParams): boolean {
  const cleanPath = pathname.replace(/\/+$/, '')
  if (COLLECTION_ROOTS.has(cleanPath)) return true
  const limitRaw = searchParams.get('limit')
  const depthRaw = searchParams.get('depth')
  const limit = limitRaw !== null ? Number(limitRaw) : NaN
  const depth = depthRaw !== null ? Number(depthRaw) : NaN
  if (Number.isFinite(limit) && limit > 10) return true
  if (Number.isFinite(depth) && depth > 1) return true
  return false
}
