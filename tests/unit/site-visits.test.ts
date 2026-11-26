import { describe, expect, it } from 'vitest'

import { extractReferrerHost, getIstDay, isBotUserAgent, normalizeVisitPath } from '@/lib/analytics/site-visits'

describe('site-visits analytics helpers', () => {
  it('formats IST day string cleanly', () => {
    const day = getIstDay(new Date('2026-11-26T20:00:00.000Z'))
    expect(day).toBe('2026-11-27')
  })

  it('normalizes valid paths and ignores admin/api/framework routes', () => {
    expect(normalizeVisitPath('/')).toBe('/')
    expect(normalizeVisitPath('/syllabus/paper-1/?utm_source=google#top')).toBe('/syllabus/paper-1')
    expect(normalizeVisitPath('/admin/collections/posts')).toBeNull()
    expect(normalizeVisitPath('/api/billing/status')).toBeNull()
    expect(normalizeVisitPath('/_next/static/chunk.js')).toBeNull()
  })

  it('extracts clean external referrer hosts and detects bots', () => {
    expect(extractReferrerHost('')).toBe('Direct')
    expect(extractReferrerHost('https://sociology4upsc.com/blog/test')).toBe('Direct')
    expect(extractReferrerHost('https://www.google.com/search?q=upsc')).toBe('google.com')
    expect(extractReferrerHost('https://t.me/sociologyoptional4')).toBe('t.me')

    expect(isBotUserAgent('Mozilla/5.0 (compatible; Googlebot/2.1)')).toBe(true)
    expect(isBotUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)')).toBe(false)
  })
})
