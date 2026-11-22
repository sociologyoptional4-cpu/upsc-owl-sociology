import type { Payload } from 'payload'

import { urls } from '@/lib/data/urls'

import { buildSnippets, topSnippets, type Snippet } from './corpus'

export type PyqRef = { id: number; year: number; paper: string; marks: number; question: string }
export type CaRef = { id: number; headline: string; summary: string; path: string }
export type PostLinks = { topicIds: number[]; topicSlugs: string[]; thinkerIds: number[]; unitIds: number[] }
export type MemoryPack = { notes: Snippet[]; pyqs: PyqRef[]; currentAffairs: CaRef[] }

const WORD = /[\p{L}\p{N}]{5,}/gu
const tokens = (text: string): Set<string> => new Set(text.toLowerCase().match(WORD) ?? [])
const overlap = (a: Set<string>, text: string): number => [...tokens(text)].filter((word) => a.has(word)).length

/** Keep the best `limit` items with at least `min` shared long words. */
export function rank<T>(items: T[], textOf: (item: T) => string, post: string, limit: number, min = 2): T[] {
  const words = tokens(post)
  return items
    .map((item) => ({ item, score: overlap(words, textOf(item)) }))
    .filter((entry) => entry.score >= min)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.item)
}

const NO_LINKS: PostLinks = { topicIds: [], topicSlugs: [], thinkerIds: [], unitIds: [] }

/** Memory pack for one post: notes, past-year questions and current affairs, each with a server-known id. */
export async function loadMemoryPack(payload: Payload, postText: string, links: PostLinks = NO_LINKS): Promise<MemoryPack> {
  const [pyqs, cas] = await Promise.all([
    payload.find({ collection: 'pyqs', limit: 1000, depth: 0, pagination: false, overrideAccess: true, select: { year: true, paper: true, marks: true, question: true, topics: true, thinkers: true, unit: true } }),
    payload.find({ collection: 'current-affairs', where: { reviewStatus: { equals: 'approved' } }, limit: 300, depth: 0, pagination: false, overrideAccess: true, sort: '-date', select: { headline: true, summary: true, date: true, slug: true } }),
  ])
  const idOf = (v: unknown): number | null => (typeof v === 'number' ? v : typeof v === 'object' && v !== null ? ((v as { id?: number }).id ?? null) : null)
  const linked = (list: unknown, ids: number[]): boolean => Array.isArray(list) && list.some((v) => ids.includes(idOf(v) ?? -1))
  const related = new Set(pyqs.docs.filter((p) => linked(p.topics, links.topicIds) || linked(p.thinkers, links.thinkerIds) || (links.unitIds.length > 0 && links.unitIds.includes(idOf(p.unit) ?? -1))).map((p) => p.id))
  const pyqRefs = pyqs.docs.map((p) => ({ id: p.id, year: p.year, paper: p.paper, marks: p.marks, question: p.question }))
  const caRefs = cas.docs.flatMap((c) => (c.slug && c.date ? [{ id: c.id, headline: c.headline, summary: c.summary ?? '', path: urls.article(String(c.date).slice(0, 10), c.slug) }] : []))
  const post = tokens(postText)
  return {
    notes: [...topSnippets(postText, 6, buildSnippets().filter((x) => links.topicSlugs.includes(x.topicSlug))), ...topSnippets(postText)].filter((x, i, all) => all.findIndex((y) => y.text === x.text) === i).slice(0, 8),
    pyqs: [...pyqRefs.filter((p) => related.has(p.id)).sort((a, b) => overlap(post, b.question) - overlap(post, a.question)).slice(0, 4), ...rank(pyqRefs.filter((p) => !related.has(p.id)), (p) => p.question, postText, 2)],
    currentAffairs: rank(caRefs, (c) => `${c.headline} ${c.summary}`, postText, 3),
  }
}

/** Text the deterministic gate may treat as "known" (so facts taken from memory are allowed). */
export const packKnownText = (pack: MemoryPack): string =>
  [...pack.notes.map((s) => s.text), ...pack.pyqs.map((p) => `${p.year} ${p.paper} ${p.marks} ${p.question}`), ...pack.currentAffairs.map((c) => `${c.headline} ${c.summary}`)].join('\n')
