import { afterEach, describe, expect, it, vi } from 'vitest'

import {
  AGENCY_BRAND_ID,
  UTM_STORAGE_KEY,
  captureUtmParams,
  getAgencyTrackerOrigin,
  getAgencyTrackerScriptUrl,
  parseUtmSearch,
  readStoredUtmParams,
  trackAgencyPurchase,
} from '@/lib/analytics/agency-tracker'

describe('agency-tracker', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
  })

  it('builds script URL from NEXT_PUBLIC_AGENCY_TRACKER_ORIGIN with localhost fallback in dev', () => {
    vi.stubEnv('NODE_ENV', 'test')
    vi.stubEnv('NEXT_PUBLIC_AGENCY_TRACKER_ORIGIN', '')
    expect(getAgencyTrackerOrigin()).toBe('http://localhost:3010')
    expect(getAgencyTrackerScriptUrl()).toBe(
      `http://localhost:3010/api/analytics/tracker.js?brandId=${AGENCY_BRAND_ID}`,
    )

    vi.stubEnv('NEXT_PUBLIC_AGENCY_TRACKER_ORIGIN', 'https://track.sociology4upsc.com/')
    expect(getAgencyTrackerOrigin()).toBe('https://track.sociology4upsc.com')
    expect(getAgencyTrackerScriptUrl()).toBe(
      `https://track.sociology4upsc.com/api/analytics/tracker.js?brandId=${AGENCY_BRAND_ID}`,
    )
  })

  it('parses and persists UTM parameters across clean internal navigations', () => {
    const store = new Map<string, string>()
    vi.stubGlobal('window', {
      sessionStorage: {
        getItem: (k: string) => store.get(k) ?? null,
        setItem: (k: string, v: string) => {
          store.set(k, v)
        },
      },
    })

    expect(parseUtmSearch('?utm_source=google&utm_medium=cpc&utm_campaign=socio_pro')).toEqual({
      utm_source: 'google',
      utm_medium: 'cpc',
      utm_campaign: 'socio_pro',
    })

    const captured = captureUtmParams('?utm_source=telegram&utm_medium=social&utm_campaign=launch&utm_content=cta1')
    expect(captured.utm_source).toBe('telegram')
    expect(store.get('utm_source')).toBe('telegram')
    expect(JSON.parse(store.get(UTM_STORAGE_KEY) || '{}')).toMatchObject({
      utm_source: 'telegram',
      utm_medium: 'social',
      utm_campaign: 'launch',
      utm_content: 'cta1',
    })

    // Navigating to a clean URL (/blog/... -> /pro) preserves previously captured UTMs
    const afterCleanNav = captureUtmParams('')
    expect(afterCleanNav.utm_source).toBe('telegram')
    expect(readStoredUtmParams()).toMatchObject({
      utm_source: 'telegram',
      utm_campaign: 'launch',
      utm_content: 'cta1',
    })
  })

  it('fires window.agencyTrackPurchase(399) when tracker function is present', () => {
    const trackSpy = vi.fn()
    vi.stubGlobal('window', { agencyTrackPurchase: trackSpy })
    expect(trackAgencyPurchase(399)).toBe(true)
    expect(trackSpy).toHaveBeenCalledWith(399)

    vi.stubGlobal('window', {})
    expect(trackAgencyPurchase(399)).toBe(false)
  })
})
