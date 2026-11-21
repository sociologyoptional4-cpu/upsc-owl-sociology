import { describe, expect, it } from 'vitest'
import { sourceHash, normalizeSourceUrl, cosineSimilarity } from '@/lib/ingest/hash'
import { ingestBatchSchema } from '@/lib/ingest/schema'
import { sanitizeMarkdown } from '@/lib/ingest/markdownToLexical'

describe('ingest utilities', () => {
  it('normalizes tracking parameters and fragments before hashing', () => {
    expect(normalizeSourceUrl('https://News.example/story/?utm_source=x&id=1#top')).toBe('https://news.example/story?id=1')
    expect(sourceHash('https://news.example/story?utm_campaign=a')).toBe(sourceHash('https://news.example/story'))
  })
  it('computes cosine similarity for stored numeric embeddings', () => {
    expect(cosineSimilarity([1, 0], [1, 0])).toBe(1)
    expect(cosineSimilarity([1, 0], [0, 1])).toBe(0)
  })
  it('strips raw HTML and unsafe markdown links', () => {
    expect(sanitizeMarkdown('<script>alert(1)</script> Safe [x](javascript:alert(1)) [ok](https://example.org)')).toBe('alert(1) Safe x [ok](https://example.org)')
    expect(sanitizeMarkdown('# H1\n## H2\n#### H4')).toBe('H1\n## H2\nH4')
  })
  it('rejects malformed ingest payloads and accepts a valid minimal batch', () => {
    const item = { headline: 'A sufficiently long headline', date: '2026-11-21', paper: 'P1', topicSlugs: [], thinkerSlugs: [], sources: [{ name: 'Source', url: 'https://example.org/story' }], summary: 'A summary', relevance: 0.7, promptVersion: 'writer.v1', model: 'gpt-4.1-mini', costUsd: 0, layout: [{ blockType: 'callout', tone: 'tip', body: 'A valid note' }] }
    expect(ingestBatchSchema.safeParse({ runId: 1, items: [item] }).success).toBe(true)
    expect(ingestBatchSchema.safeParse({ runId: 1, items: [{ ...item, date: 'yesterday' }] }).success).toBe(false)
    expect(ingestBatchSchema.safeParse({ runId: 1, items: [{ ...item, date: '2026-02-30' }] }).success).toBe(false)
  })
})
