import { describe, expect, it } from 'vitest'

import { contentStats, readiness, runChecklist, type ChecklistInput } from '@/lib/blog/checklist'

const para = (text: string) => ({ type: 'paragraph', children: [{ type: 'text', text }] })
const doc = (words: number, h2 = 0) => ({ root: { children: [...Array.from({ length: h2 }, () => ({ type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Heading' }] })), para('shabd '.repeat(words))] } })
const base: ChecklistInput = { title: 'Durkheim ka anomie concept samjho', seoTitle: '', seoDescription: 'x'.repeat(140), focusKeyword: 'anomie', excerpt: '', hasCover: true, hasCategory: true, topicCount: 1, tagCount: 3, faqCount: 2, content: doc(400, 3) }

describe('contentStats', () => {
  it('counts words and h2 headings from lexical json', () => {
    expect(contentStats(doc(50, 2))).toEqual({ words: 52, headings: 2 })
    expect(contentStats(null)).toEqual({ words: 0, headings: 0 })
  })
})

describe('runChecklist', () => {
  it('is ready when everything is filled', () => {
    expect(readiness(runChecklist(base))).toBe('ready')
  })
  it('blocks thin posts', () => {
    expect(readiness(runChecklist({ ...base, content: doc(40) }))).toBe('blocked')
  })
  it('warns about missing cover, keyword not in title and short description', () => {
    const checks = runChecklist({ ...base, hasCover: false, focusKeyword: 'alienation', seoDescription: 'short' })
    const failed = checks.filter((c) => !c.ok).map((c) => c.id)
    expect(failed).toEqual(expect.arrayContaining(['cover', 'keyword', 'desc']))
    expect(readiness(checks)).toBe('almost')
  })
  it('falls back to excerpt for description and to title when no SEO title', () => {
    const checks = runChecklist({ ...base, seoDescription: '', excerpt: 'e'.repeat(130) })
    expect(checks.find((c) => c.id === 'desc')!.ok).toBe(true)
    expect(checks.find((c) => c.id === 'title-len')!.label).toBe(`Title ${base.title.length}/60`)
  })
})
