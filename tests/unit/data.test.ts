import { describe, expect, it } from 'vitest'
import type { CurrentAffair } from '@/payload-types'
import { formatDateIST, issueNumber } from '@/lib/data/issue'
import { mapCACard } from '@/lib/data/mappers'
import { dateParamSchema, paperRouteSchema, slugParamSchema } from '@/lib/data/route-schemas'
import { urls } from '@/lib/data/urls'

describe('data URL builders', () => {
  it('builds canonical public URLs', () => {
    expect(urls.article('2026-11-21', 'sample-story')).toBe('/current-affairs/2026-11-21/sample-story')
    expect(urls.topic('paper-2', 'caste-system', 'perspectives-on-caste')).toBe('/syllabus/paper-2/caste-system/perspectives-on-caste')
    expect(urls.thinker('karl-marx')).toBe('/thinkers/karl-marx')
  })
})

describe('issue number', () => {
  it('counts whole days from launch with day one as issue one', () => {
    expect(issueNumber('2026-11-21')).toBe(1)
    expect(issueNumber('2026-11-23')).toBe(3)
  })
})

describe('formatDateIST', () => {
  it('formats UTC timestamps as the calendar date in Asia/Kolkata', () => {
    expect(formatDateIST('2026-11-20T19:00:00.000Z')).toBe('2026-11-21')
  })
})

describe('route parameter schemas', () => {
  it('accepts expected dates and slugs and rejects malformed values', () => {
    expect(dateParamSchema.safeParse('2026-11-21').success).toBe(true)
    expect(dateParamSchema.safeParse('2026/11/21').success).toBe(false)
    expect(slugParamSchema.safeParse('karl-marx').success).toBe(true)
    expect(slugParamSchema.safeParse('Karl Marx').success).toBe(false)
    expect(paperRouteSchema.safeParse({ paper: 'paper-2', path: ['caste-system'] }).success).toBe(true)
  })
})

describe('mapCACard', () => {
  it('maps a Payload document into a plain card view model', () => {
    const document = { id: 7, headline: 'Sample', slug: 'sample', date: '2026-11-21T00:00:00.000Z', paper: 'P2', summary: 'Summary', sources: [{ name: 'PIB', url: 'https://pib.gov.in' }, { name: 'PRS', url: 'https://prsindia.org' }], topics: [], thinkers: [], isAiGenerated: true } as unknown as CurrentAffair
    expect(mapCACard(document)).toEqual({ id: 7, headline: 'Sample', slug: 'sample', date: '2026-11-21', href: '/current-affairs/2026-11-21/sample', summary: 'Summary', paper: 'P2', topics: [], thinkers: [], isAiGenerated: true, sourceNames: ['PIB', 'PRS'] })
  })

  it('uses empty relation arrays when relations are missing', () => {
    const document = { id: 8, headline: 'Sparse', date: '2026-11-22T00:00:00.000Z', sources: [] } as unknown as CurrentAffair
    expect(mapCACard(document).topics).toEqual([])
    expect(mapCACard(document).thinkers).toEqual([])
  })
})
