import { describe, expect, it } from 'vitest'

import { TEMPLATES } from '@/lib/blog/import/templates'
import { toQuizRows } from '@/lib/blog/postQuiz'
import { buildGlossary, termSlug, termsFromLayout, termsFromLexical } from '@/lib/data/glossary-build'
import { normalizeQuery } from '@/lib/data/search-query'

const src = (n: number) => ({ title: `Post ${n}`, href: `/blog/p${n}` })
const keyTerm = (term: string, meaning: string) => ({ type: 'block', fields: { blockType: 'keyTerm', term, meaning } })

describe('glossary', () => {
  it('collects keyTerm blocks from lexical and keyTerms tables from layouts', () => {
    const lex = termsFromLexical({ root: { children: [keyTerm('Anomie', 'Normlessness'), { type: 'paragraph', children: [keyTerm(' ', 'x')] }] } }, src(1))
    expect(lex.map((t) => t.term)).toEqual(['Anomie'])
    const table = termsFromLayout([{ blockType: 'keyTerms', rows: [{ term: 'Alienation', meaning: 'Marx ka concept', thinker: 'Marx' }] }, { blockType: 'summary' }], src(2))
    expect(table[0]).toMatchObject({ term: 'Alienation', thinker: 'Marx' })
    expect(termsFromLayout(null, src(3))).toEqual([])
  })
  it('merges duplicates, keeps every source once and groups A-Z with # last', () => {
    const letters = buildGlossary([
      { term: 'anomie', meaning: 'first', source: src(1) },
      { term: 'Anomie ', meaning: 'second', source: src(2) },
      { term: 'Anomie', meaning: 'third', source: src(1) },
      { term: 'Caste', meaning: 'jati', source: src(3) },
      { term: '2-step flow', meaning: 'media', source: src(4) },
    ])
    expect(letters.map((l) => l.letter)).toEqual(['A', 'C', '#'])
    expect(letters[0]!.terms[0]).toMatchObject({ meaning: 'first', sources: [src(1), src(2)] })
  })
  it('makes url-safe slugs', () => {
    expect(termSlug('Sanskritisation (M.N. Srinivas)')).toBe('sanskritisation-m-n-srinivas')
  })
})

describe('normalizeQuery', () => {
  it('cleans wildcards and whitespace, rejects too-short input', () => {
    expect(normalizeQuery('  anomie%_  ')).toBe('anomie')
    expect(normalizeQuery('a')).toBe('')
    expect(normalizeQuery(['x'])).toBe('')
    expect(normalizeQuery('x'.repeat(200))).toHaveLength(80)
  })
})

describe('post quiz rows', () => {
  const item = { question: 'Anomie kisne diya?', options: ['Marx', 'Durkheim', 'Weber', 'Mead'], answerIndex: 1, explanation: 'Durkheim ne diya.' }
  it('maps model output to posts.quiz rows and keeps max 3', () => {
    const rows = toQuizRows({ items: [item, item, item, item] })
    expect(rows).toHaveLength(3)
    expect(rows[0]!.options).toEqual([{ text: 'Marx' }, { text: 'Durkheim' }, { text: 'Weber' }, { text: 'Mead' }])
  })
  it('rejects 3 options or an out-of-range answer', () => {
    expect(() => toQuizRows({ items: [{ ...item, options: ['a', 'b', 'c'] }] })).toThrow()
    expect(() => toQuizRows({ items: [{ ...item, answerIndex: 4 }] })).toThrow()
  })
})

describe('templates', () => {
  it('every template has markdown and at least one block with placeholders', () => {
    for (const [key, segments] of Object.entries(TEMPLATES)) {
      expect(segments.some((s) => 'md' in s), key).toBe(true)
      expect(segments.some((s) => 'block' in s), key).toBe(true)
      expect(JSON.stringify(segments)).toContain('[')
    }
  })
})
