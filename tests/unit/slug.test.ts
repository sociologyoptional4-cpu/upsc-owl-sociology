import { describe, expect, it } from 'vitest'

import { isReservedTopLevelSlug, joinPath, pathToHref, slugify } from '@/lib/slug'

describe('slugify', () => {
  it('lowercases and hyphenates words', () => {
    expect(slugify('Caste System in India')).toBe('caste-system-in-india')
  })
  it('strips accents and symbols', () => {
    expect(slugify('Durkheim’s “Anomie” & Society!')).toBe('durkheim-s-anomie-and-society')
  })
  it('drops Devanagari, so Hindi titles need an explicit slug', () => {
    expect(slugify('जाति व्यवस्था')).toBe('')
  })
  it('caps length without a trailing hyphen', () => {
    const slug = slugify('a '.repeat(100))
    expect(slug.length).toBeLessThanOrEqual(80)
    expect(slug.endsWith('-')).toBe(false)
  })
})

describe('joinPath / pathToHref', () => {
  it('returns the slug when there is no parent', () => {
    expect(joinPath(null, 'about')).toBe('about')
  })
  it('nests under the parent path', () => {
    expect(joinPath('/guides/', 'answer-writing')).toBe('guides/answer-writing')
  })
  it('maps the home page to the root URL', () => {
    expect(pathToHref('home')).toBe('/')
    expect(pathToHref('guides/answer-writing')).toBe('/guides/answer-writing')
  })
})

describe('isReservedTopLevelSlug', () => {
  it('blocks slugs owned by typed routes', () => {
    expect(isReservedTopLevelSlug('admin')).toBe(true)
    expect(isReservedTopLevelSlug('current-affairs')).toBe(true)
  })
  it('allows ordinary page slugs', () => {
    expect(isReservedTopLevelSlug('about')).toBe(false)
  })
})
