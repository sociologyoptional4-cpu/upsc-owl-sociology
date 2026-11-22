import { describe, expect, it } from 'vitest'

import { DEFAULT_NAV, resolveNav } from '@/lib/data/nav-defaults'

describe('resolveNav', () => {
  it('uses the defaults when the CMS menu is empty or missing', () => {
    expect(resolveNav([])).toEqual(DEFAULT_NAV)
    expect(resolveNav(undefined)).toEqual(DEFAULT_NAV)
    expect(resolveNav([{ label: '', href: '/x' }])).toEqual(DEFAULT_NAV)
  })

  it('keeps a custom menu and appends /blog when it is missing', () => {
    expect(resolveNav([{ label: 'Syllabus', href: '/syllabus' }])).toEqual([
      { label: 'Syllabus', href: '/syllabus' },
      { label: 'Blog', href: '/blog' },
    ])
  })

  it('does not duplicate /blog', () => {
    const items = [{ label: 'Blog', href: '/blog' }]
    expect(resolveNav(items)).toEqual(items)
  })
})
