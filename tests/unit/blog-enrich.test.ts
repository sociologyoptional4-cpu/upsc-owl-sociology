import { describe, expect, it } from 'vitest'

import { buildSnippets, plainNote, topSnippets } from '@/lib/blog/corpus'
import { checkPreservation } from '@/lib/blog/preserve'
import { applyMarkers, stripUnknownMarkers, unmark, type LexNode } from '@/lib/blog/text'

const text = (value: string): LexNode => ({ type: 'text', text: value, format: 0 })

describe('enrich markers', () => {
  it('maps each marker to its colour/highlight state', () => {
    const [root] = applyMarkers([{ type: 'paragraph', children: [text('a ==core== b {{eg|chai}} c {{trap|bias}} d {{thinker:karl-marx|Marx}} e')] }])
    const kids = root.children ?? []
    const states = kids.map((k) => k.$?.highlight ?? k.children?.[0]?.$?.color ?? '-')
    expect(states).toEqual(['-', 'yellow', '-', 'mint', '-', 'pink', '-', 'plum', '-'])
    expect(kids[7].fields?.url).toBe('/thinkers/karl-marx')
  })

  it('drops unknown thinker markers but keeps the text', () => {
    const md = stripUnknownMarkers('{{thinker:karl-marx|Marx}} and {{thinker:ghost|Ghost}}', new Set(['karl-marx']))
    expect(md).toBe('{{thinker:karl-marx|Marx}} and Ghost')
  })

  it('keeps link markers only for paths from the memory pack', () => {
    const md = stripUnknownMarkers('{{link:/current-affairs/2026-01-01/a|ok}} {{link:/evil|bad}}', new Set(), new Set(['/current-affairs/2026-01-01/a']))
    expect(md).toBe('{{link:/current-affairs/2026-01-01/a|ok}} bad')
    const [p] = applyMarkers([{ type: 'paragraph', children: [text('{{link:/current-affairs/x|read}}')] }])
    expect(p.children?.[0].fields?.url).toBe('/current-affairs/x')
  })

  it('removes markers from block text and notes snippets', () => {
    expect(unmark('{{thinker:emile-durkheim|Durkheim}} and ==core== {{eg|chai}}')).toBe('Durkheim and core chai')
    expect(plainNote('[[thinker:Auguste Comte]] said **==order==**')).toBe('Auguste Comte said order')
  })
})

describe('enrichment gate', () => {
  const original = 'Weber studied rationalisation in 1905 across Germany.'
  const opts = { minWordRatio: 0.6, knownText: 'Durkheim wrote about anomie in 1897.' }
  it('accepts a simplified rewrite that keeps names and numbers', () => {
    expect(checkPreservation(original, 'Weber studied rationalisation in 1905 in Germany.', [], opts).ok).toBe(true)
  })
  it('rejects a lost number', () => {
    expect(checkPreservation(original, 'Weber studied rationalisation in Germany.', [], opts).ok).toBe(false)
  })
  it('accepts a number and name that come from the notes context', () => {
    expect(checkPreservation(original, `${original} Later Durkheim wrote about anomie in 1897.`, [], opts).ok).toBe(true)
  })
  it('rejects an invented number and name', () => {
    expect(checkPreservation(original, `${original} Foucault wrote in 1975.`, [], opts).ok).toBe(false)
  })
  it('reports lost numbers instead of failing when softNumberLoss is on', () => {
    const result = checkPreservation(original, 'Weber studied rationalisation in Germany.', [], { ...opts, softNumberLoss: true })
    expect(result.ok).toBe(true)
    expect(result.lostNumbers).toContain('1905')
  })
})

describe('notes corpus', () => {
  it('builds snippets from the notebooks and ranks by overlap', () => {
    expect(buildSnippets().length).toBeGreaterThan(20)
    expect(topSnippets('The Industrial Revolution and the French Revolution created modernity, capitalism and urban slums').length).toBeGreaterThan(0)
  })
})

describe('studio helpers', () => {
  it('clamps over-long organizer fields instead of failing', async () => {
    const { clampOrganize } = await import('@/lib/blog/organize')
    const { organizeOutputSchema } = await import('@/blocks/blog/schema')
    const raw = {
      seoDescription: 'word '.repeat(60),
      tags: Array.from({ length: 12 }, (_, i) => `tag-${i}`),
      faq: Array.from({ length: 9 }, (_, i) => ({ question: `Q${i}?`, answer: `A${i}` })),
      topicSlugs: ['a', 'b', 'c', 'd', 'e'],
      social: { telegram: 'x '.repeat(600), linkedin: 'y '.repeat(900), xThread: Array.from({ length: 12 }, (_, i) => `tweet ${i}`) },
      excerpt: 'e '.repeat(200),
    }
    const out = organizeOutputSchema.parse(clampOrganize(raw))
    expect(out.seoDescription.length).toBeLessThanOrEqual(160)
    expect(out.social.telegram.length).toBeLessThanOrEqual(900)
    expect(out.social.linkedin.length).toBeLessThanOrEqual(1500)
    expect(out.tags.length).toBeLessThanOrEqual(6)
    expect(out.faq.length).toBeLessThanOrEqual(5)
    expect(out.topicSlugs.length).toBeLessThanOrEqual(3)
    expect(out.social.xThread.length).toBeLessThanOrEqual(8)
  })

  it('inserts an image at the end of the heading section it belongs to', async () => {
    const { insertionIndex } = await import('@/lib/blog/images')
    const h = (t: string): LexNode => ({ type: 'heading', tag: 'h2', children: [text(t)] })
    const p = (): LexNode => ({ type: 'paragraph', children: [text('x')] })
    const nodes = [h('Weber and rationalisation'), p(), p(), h('Durkheim'), p()]
    expect(insertionIndex(nodes, '## Weber and rationalisation')).toBe(3)
    expect(insertionIndex(nodes, 'Unknown')).toBe(5)
  })

  it('builds an image prompt from the validated labels only', async () => {
    const { imagePrompt } = await import('@/lib/blog/images')
    const prompt = imagePrompt({ afterHeading: 'a', kind: 'mindmap', title: 'Weber', labels: ['Rules', 'Efficiency', 'Iron cage'], caption: '' })
    expect(prompt).toContain('mind map')
    expect(prompt).toContain('"Iron cage"')
  })

  it('maps only allowed Commons licences', async () => {
    const { mapLicense } = await import('@/lib/blog/photos')
    expect(mapLicense('CC BY-SA 4.0')).toBe('cc-by-sa')
    expect(mapLicense('CC BY 2.0')).toBe('cc-by')
    expect(mapLicense('CC0')).toBe('cc0')
    expect(mapLicense('Public domain')).toBe('public-domain')
    expect(mapLicense('Fair use')).toBeNull()
  })
})
