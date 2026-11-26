const VERIFIED_SEARCH_BOT_RE =
  /\b(googlebot|google-inspectiontool|googleother|bingbot|bingpreview|duckduckbot|applebot|slurp)\b/i

const BLOCKED_SCRAPER_UA_RE =
  /\b(curl|wget|python-requests|python-urllib|httpx|aiohttp|scrapy|headlesschrome|headless|phantomjs|puppeteer|playwright|selenium|go-http-client|libwww-perl|apache-httpclient|node-fetch|undici|axios|httrack|sitesucker|webcopier|webcopy|cyotek|teleport|offline\s+explorer|archivebox|firecrawl|apify|colly|mechanize|gptbot|ccbot|bytespider|claudebot|amazonbot|anthropic-ai|perplexitybot|oai-searchbot|meta-externalagent|cohere-ai|ia_archiver|wayback|omgili|diffbot|petalbot)\b/i

export const PROTECTED_CONTENT_API_PREFIXES = [
  '/api/topics',
  '/api/units',
  '/api/papers',
  '/api/posts',
  '/api/current-affairs',
  '/api/pyqs',
  '/api/thinkers',
  '/api/pages',
  '/api/digests',
  '/api/quizzes',
  '/api/graphql',
  '/api/graphql-playground',
] as const

const ALLOWED_HOTLINK_HOST_RE = /(^|\.)(sociology4upsc\.com|vercel\.app|google\.[a-z.]+|bing\.com|t\.me|telegram\.org)$/i

/** Returns true for legitimate search engine crawlers that must index pages cleanly. */
export function isVerifiedSearchBot(userAgent: string | null): boolean {
  if (!userAgent) return false
  return VERIFIED_SEARCH_BOT_RE.test(userAgent)
}

/** Blocks empty UAs, offline cloners, rippers, headless browsers, and AI scrapers while allowing search bots. */
export function isBlockedScraperUa(userAgent: string | null): boolean {
  if (isVerifiedSearchBot(userAgent)) return false
  if (!userAgent || userAgent.trim().length < 6) return true
  return BLOCKED_SCRAPER_UA_RE.test(userAgent)
}

/** Returns true when pathname targets a Payload CMS content endpoint that scrapers dump. */
export function isProtectedContentApiPath(pathname: string): boolean {
  const clean = pathname.replace(/\/+$/, '') || '/'
  return PROTECTED_CONTENT_API_PREFIXES.some((prefix) => clean === prefix || clean.startsWith(`${prefix}/`))
}

/** Detects bulk query patterns on collection API endpoints. */
export function isBulkSyllabusApiRequest(pathname: string, searchParams: URLSearchParams): boolean {
  if (isProtectedContentApiPath(pathname)) {
    const segments = pathname.replace(/\/+$/, '').split('/').filter(Boolean)
    if (segments.length <= 2) return true
  }
  const limitRaw = searchParams.get('limit')
  const depthRaw = searchParams.get('depth')
  const limit = limitRaw !== null ? Number(limitRaw) : NaN
  const depth = depthRaw !== null ? Number(depthRaw) : NaN
  if (Number.isFinite(limit) && limit > 10) return true
  if (Number.isFinite(depth) && depth > 1) return true
  return false
}

/** Blocks third-party websites from hotlinking private media and infographics directly. */
export function isUnauthorizedHotlink(referer: string | null, requestHost: string | null): boolean {
  const cleanRef = referer?.trim()
  if (!cleanRef) return false
  try {
    const refHost = new URL(cleanRef).hostname.toLowerCase()
    const selfHost = requestHost?.split(':')[0]?.trim().toLowerCase()
    if (!refHost) return false
    if (selfHost && refHost === selfHost) return false
    if (refHost === 'localhost' || refHost === '127.0.0.1') return false
    return !ALLOWED_HOTLINK_HOST_RE.test(refHost)
  } catch {
    return false
  }
}

/** Returns true only for legitimate live & local origins; flags unauthorized mirrored clones. */
export function isAllowedHost(hostname: string): boolean {
  const clean = hostname.trim().toLowerCase().replace(/:\d+$/, '')
  if (!clean) return false
  if (clean === 'localhost' || clean === '127.0.0.1') return true
  if (clean === 'sociology4upsc.com' || clean === 'www.sociology4upsc.com') return true
  if (clean.endsWith('.sociology4upsc.com') || clean.endsWith('.vercel.app')) return true
  return false
}
