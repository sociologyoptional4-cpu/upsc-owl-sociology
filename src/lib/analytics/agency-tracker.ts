export const AGENCY_BRAND_ID = 'brand_a2e5ec39'

export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const
export type UtmKey = (typeof UTM_KEYS)[number]
export type UtmParams = Partial<Record<UtmKey, string>>

export const UTM_STORAGE_KEY = 'upscowl_utm_attribution_v1'

declare global {
  interface Window {
    agencyTrackPurchase?: (amount: number) => void
  }
}

/**
 * Resolves the Agency OS tracker origin from `NEXT_PUBLIC_AGENCY_TRACKER_ORIGIN`,
 * defaulting to `http://localhost:3010` in non-production environments.
 */
export function getAgencyTrackerOrigin(): string | null {
  const configured = process.env.NEXT_PUBLIC_AGENCY_TRACKER_ORIGIN?.trim()
  if (configured && /^https?:\/\/.+/i.test(configured)) {
    return configured.replace(/\/+$/, '')
  }
  if (process.env.NODE_ENV !== 'production') {
    return 'http://localhost:3010'
  }
  return null
}

/** Builds the Agency OS analytics tracker script URL when an origin is configured. */
export function getAgencyTrackerScriptUrl(): string | null {
  const origin = getAgencyTrackerOrigin()
  if (!origin) return null
  return `${origin}/api/analytics/tracker.js?brandId=${AGENCY_BRAND_ID}`
}

/** Extracts UTM parameters present in a URL query string without inventing empty values. */
export function parseUtmSearch(search: string): UtmParams {
  const params = new URLSearchParams(search)
  const found: UtmParams = {}
  for (const key of UTM_KEYS) {
    const val = params.get(key)?.trim()
    if (val) found[key] = val
  }
  return found
}

/** Reads previously stored UTM attribution parameters from sessionStorage. */
export function readStoredUtmParams(): UtmParams {
  if (typeof window === 'undefined') return {}
  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY)
    const parsed = raw ? (JSON.parse(raw) as UtmParams) : {}
    const out: UtmParams = {}
    for (const key of UTM_KEYS) {
      const val = parsed[key] ?? window.sessionStorage.getItem(key) ?? undefined
      if (typeof val === 'string' && val.trim()) out[key] = val.trim()
    }
    return out
  } catch {
    return {}
  }
}

/**
 * Captures UTM params on landing and preserves them in sessionStorage across internal navigation.
 * Clean URLs without UTM query strings never erase earlier landing attribution.
 */
export function captureUtmParams(search: string): UtmParams {
  if (typeof window === 'undefined') return {}
  const incoming = parseUtmSearch(search)
  const existing = readStoredUtmParams()
  if (Object.keys(incoming).length === 0) return existing
  const merged: UtmParams = { ...existing, ...incoming }
  try {
    window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(merged))
    for (const key of UTM_KEYS) {
      const val = merged[key]
      if (val) window.sessionStorage.setItem(key, val)
    }
  } catch {
    // Storage unavailable (private mode / blocked): fail gracefully
  }
  return merged
}

/** Fires Agency OS purchase attribution (`window.agencyTrackPurchase`) when available. */
export function trackAgencyPurchase(amountInr = 399): boolean {
  if (typeof window === 'undefined') return false
  if (typeof window.agencyTrackPurchase !== 'function') return false
  window.agencyTrackPurchase(amountInr)
  return true
}
