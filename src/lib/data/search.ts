import 'server-only'

import { getPayloadClient } from '@/lib/queries'
import { formatDateIST } from './issue'
import { getGlossary } from './glossary'
import { normalizeQuery } from './search-query'
import { urls } from './urls'

export type SearchHit = { title: string; href: string; snippet: string | null }
export type SearchResults = { query: string; groups: { label: string; hits: SearchHit[] }[]; total: number }

const LIMIT = 8
const short = (v: unknown): string | null => (typeof v === 'string' && v.trim() ? v.replace(/\s+/g, ' ').trim().slice(0, 160) : null)

/** Simple published-only text search across blog, notes, current affairs, thinkers and the glossary. */
export async function siteSearch(raw: string): Promise<SearchResults> {
  const query = normalizeQuery(raw)
  if (!query) return { query: '', groups: [], total: 0 }
  const payload = await getPayloadClient()
  const published = { _status: { equals: 'published' } }
  const [posts, topics, ca, thinkers, glossary] = await Promise.all([
    payload.find({ collection: 'posts', where: { and: [published, { or: [{ title: { like: query } }, { excerpt: { like: query } }] }] }, limit: LIMIT, depth: 0, draft: false, overrideAccess: false, select: { title: true, slug: true, excerpt: true } }),
    payload.find({ collection: 'topics', where: { and: [published, { or: [{ title: { like: query } }, { summary: { like: query } }] }] }, limit: LIMIT, depth: 2, draft: false, overrideAccess: false, select: { title: true, slug: true, summary: true, unit: true } }),
    payload.find({ collection: 'current-affairs', where: { and: [published, { or: [{ headline: { like: query } }, { summary: { like: query } }] }] }, limit: LIMIT, sort: '-date', depth: 0, draft: false, overrideAccess: false, select: { headline: true, slug: true, summary: true, date: true } }),
    payload.find({ collection: 'thinkers', where: { name: { like: query } }, limit: 6, depth: 0, overrideAccess: false, select: { name: true, slug: true } }),
    getGlossary(),
  ])
  const lower = query.toLowerCase()
  const groups = [
    { label: 'Notes (syllabus topics)', hits: topics.docs.flatMap((t) => {
      const unit = typeof t.unit === 'object' && t.unit ? t.unit : null
      const paper = unit && typeof unit.paper === 'object' && unit.paper ? unit.paper : null
      return t.slug && unit?.slug && paper?.slug ? [{ title: t.title, href: urls.topic(paper.slug, unit.slug, t.slug), snippet: short(t.summary) }] : []
    }) },
    { label: 'Blog', hits: posts.docs.flatMap((p) => (p.slug ? [{ title: p.title, href: `/blog/${p.slug}`, snippet: short(p.excerpt) }] : [])) },
    { label: 'Current affairs', hits: ca.docs.flatMap((c) => (c.slug ? [{ title: c.headline, href: urls.article(formatDateIST(c.date), c.slug), snippet: short(c.summary) }] : [])) },
    { label: 'Thinkers', hits: thinkers.docs.flatMap((t) => (t.slug ? [{ title: t.name, href: urls.thinker(t.slug), snippet: null }] : [])) },
    { label: 'Glossary', hits: glossary.flatMap((l) => l.terms).filter((t) => t.term.toLowerCase().includes(lower)).slice(0, LIMIT).map((t) => ({ title: t.term, href: `/glossary#${t.slug}`, snippet: short(t.meaning) })) },
  ].filter((g) => g.hits.length > 0)
  return { query, groups, total: groups.reduce((sum, g) => sum + g.hits.length, 0) }
}
