import { describe, expect, it } from 'vitest'

import {
  isAllowedHost,
  isBlockedScraperUa,
  isProtectedContentApiPath,
  isUnauthorizedHotlink,
  isVerifiedSearchBot,
} from '@/lib/security/syllabus-shield'

describe('anti-theft & anti-cloning shield', () => {
  it('allows Googlebot/Bingbot while blocking offline cloners, rippers, and AI scrapers', () => {
    expect(isVerifiedSearchBot('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)')).toBe(true)
    expect(isBlockedScraperUa('Mozilla/5.0 (compatible; Googlebot/2.1)')).toBe(false)

    expect(isBlockedScraperUa('Mozilla/4.5 (compatible; HTTrack 3.0x; Windows 98)')).toBe(true)
    expect(isBlockedScraperUa('SiteSucker/5.0')).toBe(true)
    expect(isBlockedScraperUa('Wget/1.21.4')).toBe(true)
    expect(isBlockedScraperUa('curl/8.4.0')).toBe(true)
    expect(isBlockedScraperUa('GPTBot/1.0')).toBe(true)
    expect(isBlockedScraperUa('PerplexityBot/1.0')).toBe(true)
    expect(isBlockedScraperUa('')).toBe(true)

    expect(
      isBlockedScraperUa(
        'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1',
      ),
    ).toBe(false)
  })

  it('locks down Payload content APIs while leaving student auth, billing, and analytics APIs open', () => {
    expect(isProtectedContentApiPath('/api/posts')).toBe(true)
    expect(isProtectedContentApiPath('/api/topics/12')).toBe(true)
    expect(isProtectedContentApiPath('/api/pyqs')).toBe(true)
    expect(isProtectedContentApiPath('/api/graphql')).toBe(true)

    expect(isProtectedContentApiPath('/api/auth/login')).toBe(false)
    expect(isProtectedContentApiPath('/api/billing/create-order')).toBe(false)
    expect(isProtectedContentApiPath('/api/analytics/hit')).toBe(false)
  })

  it('prevents third-party image/asset hotlinking while allowing own and search/social referrers', () => {
    expect(isUnauthorizedHotlink('https://evil-clone.example.com/page', 'sociology4upsc.com')).toBe(true)
    expect(isUnauthorizedHotlink('https://sociology4upsc.com/blog/karl-marx', 'sociology4upsc.com')).toBe(false)
    expect(isUnauthorizedHotlink('https://www.google.com/', 'sociology4upsc.com')).toBe(false)
    expect(isUnauthorizedHotlink(null, 'sociology4upsc.com')).toBe(false)
  })

  it('validates allowed origins and flags unauthorized clone hosts', () => {
    expect(isAllowedHost('sociology4upsc.com')).toBe(true)
    expect(isAllowedHost('www.sociology4upsc.com')).toBe(true)
    expect(isAllowedHost('upsc-owl-sociology-abc.vercel.app')).toBe(true)
    expect(isAllowedHost('localhost')).toBe(true)
    expect(isAllowedHost('127.0.0.1')).toBe(true)
    expect(isAllowedHost('fake-upsc-clone.xyz')).toBe(false)
  })
})
