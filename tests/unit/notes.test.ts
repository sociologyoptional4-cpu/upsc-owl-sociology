import { describe, expect, it } from 'vitest'

import { mapPyqToTopic } from '../../scripts/pyq/mapping'
import { SYLLABUS } from '../../scripts/notes/syllabus'
import { sharesLongRun } from '@/pipeline/notes/copy-guard'
import { noteOutputSchema, tablesWithinLimits } from '@/pipeline/notes/schema'
import { compareOrder } from '@/lib/data/syllabus-order'
import { parsePyqParams } from '@/lib/data/pyq-params'
import { parsePyqJsonl } from '../../scripts/pyq/read-data'
import fs from 'node:fs'
import path from 'node:path'

describe('mapPyqToTopic', () => {
  it('maps Unit 4 by thinker name, ignoring the bad "G H Mead" subtopic', () => {
    expect(mapPyqToTopic(4, 'Discuss Weber’s concept of ideal type.')).toBe('max-weber-social-action-bureaucracy')
    expect(mapPyqToTopic(4, 'Explain Merton’s idea of reference groups.')).toBe('robert-merton-functions-deviance')
    expect(mapPyqToTopic(4, 'How does Durkheim explain suicide?')).toBe('emile-durkheim-social-fact-suicide')
  })
  it('falls back to the last topic of the unit', () => {
    expect(mapPyqToTopic(1, 'Is sociology a discipline?')).toBe('scope-and-other-social-sciences')
  })
  it('returns null for an unknown unit', () => {
    expect(mapPyqToTopic(42, 'x')).toBeNull()
  })
  it('only maps to slugs that exist in the official syllabus', () => {
    const slugs = new Set(SYLLABUS.flatMap((p) => p.units.flatMap((u) => u.topics.map((t) => t.slug))))
    for (let unit = 1; unit <= 10; unit += 1) {
      const slug = mapPyqToTopic(unit, 'generic question text')
      expect(slug && slugs.has(slug)).toBe(true)
    }
  })
})

describe('syllabus data', () => {
  it('has unique topic and unit slugs', () => {
    const topics = SYLLABUS.flatMap((p) => p.units.flatMap((u) => u.topics.map((t) => t.slug)))
    const units = SYLLABUS.flatMap((p) => p.units.map((u) => u.slug))
    expect(new Set(topics).size).toBe(topics.length)
    expect(new Set(units).size).toBe(units.length)
  })
  it('sorts units and topics by explicit exam order rather than title or number', () => {
    expect([{ order: 3, title: 'A' }, { order: 1, title: 'Z' }, { order: 2, title: 'B' }].sort(compareOrder).map((item) => item.order)).toEqual([1, 2, 3])
  })
})

describe('PYQ import and filters', () => {
  it('parses the complete 365-question JSONL source', () => {
    const file = path.resolve(process.cwd(), 'data/pyq/paper1-2013-2025.jsonl')
    const rows = parsePyqJsonl(fs.readFileSync(file, 'utf8'))
    expect(rows).toHaveLength(365)
    expect(new Set(rows.map(({ year, qno }) => `${year}:${qno}`)).size).toBe(365)
  })
  it('validates supported bank filters and rejects invalid values', () => {
    expect(parsePyqParams({ paper: 'P1', year: '2025', page: '2' }).success).toBe(true)
    expect(parsePyqParams({ paper: 'P3', limit: '500' }).success).toBe(false)
  })
})

describe('copy guard', () => {
  const source = 'the enlightenment was a philosophical movement that promoted the power of human reason to solve all human problems'
  it('flags a 12-word shared run', () => {
    expect(sharesLongRun('Yahan: the enlightenment was a philosophical movement that promoted the power of human reason. Bas.', source)).toBe(true)
  })
  it('allows short overlaps', () => {
    expect(sharesLongRun('Enlightenment ne human reason ki power pe zor diya.', source)).toBe(false)
  })
})

describe('note output schema', () => {
  const base = {
    summary: 'Ye topic modern samaj ke badlaav ko samajhne ka framework deta hai, thinkers ke saath.',
    points: ['Point one is here.', 'Point two is here.', 'Point three is here.'],
    bodyMarkdown: '## Intro\n' + 'Hinglish explanation sentence. '.repeat(30),
    keyTerms: [{ term: 'A', meaning: 'Meaning A.' }, { term: 'B', meaning: 'Meaning B.' }, { term: 'C', meaning: 'Meaning C.' }],
    answerTip: 'Intro mein definition, body mein do thinkers, conclusion mein Indian example likho.',
    thinkerSlugs: ['karl-marx'],
  }
  it('accepts a valid note', () => {
    expect(noteOutputSchema.safeParse(base).success).toBe(true)
  })
  it('rejects raw HTML and h1 headings', () => {
    expect(noteOutputSchema.safeParse({ ...base, bodyMarkdown: base.bodyMarkdown + '<script>x</script>' }).success).toBe(false)
    expect(noteOutputSchema.safeParse({ ...base, bodyMarkdown: '# Big\n' + base.bodyMarkdown }).success).toBe(false)
  })
  it('limits table size', () => {
    const small = '| A | B |\n|---|---|\n| 1 | 2 |'
    const wide = '| A | B | C | D | E |\n|---|---|---|---|---|\n| 1 | 2 | 3 | 4 | 5 |'
    expect(tablesWithinLimits(small)).toBe(true)
    expect(tablesWithinLimits(wide)).toBe(false)
  })
})
