const VERIFIED_SEARCH_BOT_RE =
  /\b(googlebot|google-inspectiontool|googleother|bingbot|bingpreview|duckduckbot|applebot|slurp)\b/i

const BLOCKED_SCRAPER_UA_RE =
  /\b(curl|wget|python-requests|python-urllib|httpx|aiohttp|scrapy|headlesschrome|headless|phantomjs|puppeteer|playwright|selenium|go-http-client|libwww-perl|apache-httpclient|node-fetch|undici|axios|gptbot|ccbot|bytespider|claudebot|amazonbot|anthropic-ai|omgili|diffbot|petalbot)\b/i

const COLLECTION_ROOTS = new Set(['/api/topics', '/api/units', '/api/papers'])

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
