import 'server-only'

import type { Media, Paper, Topic, Unit } from '@/payload-types'
import type { LexNode, LexRoot } from '@/lib/blog/text'
import { mapTopicChip } from '@/lib/data/mappers'
import type { BlogMedia, PaperCode, ResolvedBlogBlocks, TopicChip } from '@/lib/data/types'
import { urls } from '@/lib/data/urls'
import { getPayloadClient } from '@/lib/queries'

type IdBuckets = {
  thinkers: Set<number>
  topics: Set<number>
  pyqs: Set<number>
  media: Set<number>
}

const isObj = <T extends { id: number }>(v: unknown): v is T =>
  typeof v === 'object' && v !== null && 'id' in v

const isPaper = (v: unknown): v is PaperCode => v === 'P1' || v === 'P2'

function addId(set: Set<number>, val: unknown): void {
  if (typeof val === 'number') set.add(val)
  else if (isObj<{ id: number }>(val)) set.add(val.id)
}

function mapMedia(doc: Media | null | undefined): BlogMedia | null {
  if (!doc?.url) return null
  return { url: doc.url, alt: doc.alt || 'Notebook figure', width: doc.width ?? 1200, height: doc.height ?? 1500 }
}

function collectBlockIds(content: unknown): IdBuckets {
  const buckets: IdBuckets = { thinkers: new Set(), topics: new Set(), pyqs: new Set(), media: new Set() }
  const walk = (node: LexNode): void => {
    if (node.type === 'block' || node.type === 'inlineBlock') {
      const f = node.fields ?? {}
      addId(buckets.thinkers, f.thinker)
      addId(buckets.topics, f.topic)
      addId(buckets.media, f.image)
      if (Array.isArray(f.pyqs)) for (const p of f.pyqs) addId(buckets.pyqs, p)
      if (Array.isArray(f.items)) {
        for (const item of f.items) if (typeof item === 'object' && item !== null) addId(buckets.media, (item as { image?: unknown }).image)
      }
    }
    for (const child of node.children ?? []) walk(child)
  }
  const root = (content as LexRoot)?.root
  if (root) walk(root)
  return buckets
}

/** Resolves thinker, topic, PYQ, and media IDs referenced inside topic `notebookContent` Lexical blocks. */
export async function resolveNotebookBlocks(content: unknown): Promise<ResolvedBlogBlocks> {
  const resolved: ResolvedBlogBlocks = { thinkers: {}, topics: {}, pyqs: {}, media: {} }
  const ids = collectBlockIds(content)
  if (!ids.thinkers.size && !ids.topics.size && !ids.pyqs.size && !ids.media.size) return resolved

  const payload = await getPayloadClient()
  const [thinkers, topics, pyqs, media] = await Promise.all([
    ids.thinkers.size ? payload.find({ collection: 'thinkers', where: { id: { in: [...ids.thinkers] } }, limit: ids.thinkers.size, depth: 0, overrideAccess: true }) : { docs: [] },
    ids.topics.size ? payload.find({ collection: 'topics', where: { id: { in: [...ids.topics] } }, limit: ids.topics.size, depth: 2, overrideAccess: true }) : { docs: [] },
    ids.pyqs.size ? payload.find({ collection: 'pyqs', where: { id: { in: [...ids.pyqs] } }, limit: ids.pyqs.size, depth: 0, overrideAccess: true }) : { docs: [] },
    ids.media.size ? payload.find({ collection: 'media', where: { id: { in: [...ids.media] } }, limit: ids.media.size, depth: 0, overrideAccess: true }) : { docs: [] },
  ])

  for (const t of thinkers.docs) if (t.slug) resolved.thinkers[t.id] = { name: t.name, slug: t.slug, href: urls.thinker(t.slug), era: t.era ?? null }
  for (const t of topics.docs) { const chip: TopicChip | null = mapTopicChip(t as Topic & { unit?: Unit & { paper?: Paper } }); if (chip) resolved.topics[t.id] = chip }
  for (const p of pyqs.docs) if (isPaper(p.paper)) resolved.pyqs[p.id] = { id: p.id, year: p.year, paper: p.paper, marks: p.marks, question: p.question }
  for (const m of media.docs) { const mapped = mapMedia(m); if (mapped) resolved.media[m.id] = mapped }
  return resolved
}
