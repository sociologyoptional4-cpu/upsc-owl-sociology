import { describe, expect, it } from 'vitest'

import { isSafeHref, safeHref, validateHref } from '@/lib/href'

describe('isSafeHref', () => {
  it.each(['/about', '/current-affairs/2026-11-21', 'https://t.me/aum', 'http://pib.gov.in/x'])(
    'accepts %s',
    (href) => expect(isSafeHref(href)).toBe(true),
  )
  it.each(['javascript:alert(1)', 'data:text/html,hi', '//evil.com', 'ftp://x', 'about'])(
    'rejects %s',
    (href) => expect(isSafeHref(href)).toBe(false),
  )
})

describe('safeHref / validateHref', () => {
  it('returns undefined for unsafe links', () => {
    expect(safeHref('javascript:void(0)')).toBeUndefined()
    expect(safeHref(null)).toBeUndefined()
  })
  it('allows empty optional values and reports a message otherwise', () => {
    expect(validateHref('')).toBe(true)
    expect(validateHref('/ok')).toBe(true)
    expect(validateHref('javascript:x')).toMatch(/https/)
  })
})
