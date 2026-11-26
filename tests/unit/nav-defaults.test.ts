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

  it('labels Unit 1 accurately and shows Syllabus / Full Notes', () => {
    const unit1 = DEFAULT_NAV.find((i) => i.href === '/syllabus/paper-1/sociology-the-discipline')
    const syllabus = DEFAULT_NAV.find((i) => i.href === '/syllabus')
    expect(unit1?.label).toBe('Unit 1 Infographics')
    expect(unit1?.label).not.toBe('Notes')
    expect(syllabus?.label).toBe('Syllabus / Full Notes')
  })

  it('does not duplicate /blog', () => {
    const items = [{ label: 'Blog', href: '/blog' }]
    expect(resolveNav(items)).toEqual(items)
  })
})
