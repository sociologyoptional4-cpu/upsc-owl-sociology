import type { Payload } from 'payload'

import type { IngestItem } from '@/lib/ingest/schema'
import { markdownToLexical } from '@/lib/ingest/markdownToLexical'

export type DraftSettings = { autoPublish?: boolean; autoPublishMinRelevance?: number }
export type DraftExtras = { seo?: { title?: string; description?: string }; forceDraft?: boolean }

async function toLayout(payload: Payload, item: IngestItem): Promise<Record<string, unknown>[]> {
  return Promise.all(item.layout.map(async (block) => {
    if (block.blockType !== 'richText') return block as Record<string, unknown>
    const { markdown, ...rest } = block
    return { ...rest, content: await markdownToLexical(payload, markdown) }
  }))
}

export async function updateCurrentAffairDraft(payload: Payload, id: number, item: IngestItem, hash: string, feedback: string, seo?: { title: string; description: string }): Promise<void> {
  const [topics, thinkers] = await Promise.all([
    payload.find({ collection: 'topics', where: { slug: { in: item.topicSlugs } }, limit: 100, depth: 0, overrideAccess: true }),
    payload.find({ collection: 'thinkers', where: { slug: { in: item.thinkerSlugs } }, limit: 100, depth: 0, overrideAccess: true }),
  ])
  if (topics.docs.length !== new Set(item.topicSlugs).size || thinkers.docs.length !== new Set(item.thinkerSlugs).size) throw new Error('unknown topic or thinker slug')
  await payload.update({ collection: 'current-affairs', id, draft: true, overrideAccess: true, data: {
    headline: item.headline, date: `${item.date}T00:00:00.000Z`, paper: item.paper, topics: topics.docs.map((topic) => topic.id),
    thinkers: thinkers.docs.map((thinker) => thinker.id), sources: item.sources, summary: item.summary, layout: await toLayout(payload, item) as never,
    isAiGenerated: true, reviewStatus: 'pending', rejectReason: feedback, sourceHash: hash, embedding: item.embedding,
    aiMeta: { model: item.model, promptVersion: item.promptVersion, relevance: item.relevance, costUsd: item.costUsd }, _status: 'draft',
    ...(seo ? { seo } : {}),
  } })
}

/**
 * Single creation path for AI-written current affairs (daily pipeline + smart paste).
 * Slugs must exist in the DB; throws otherwise. Returns the new doc id.
 */
export async function createCurrentAffairDraft(payload: Payload, item: IngestItem, hash: string, settings: DraftSettings, extras: DraftExtras = {}): Promise<number> {
  const [topics, thinkers] = await Promise.all([
    payload.find({ collection: 'topics', where: { slug: { in: item.topicSlugs } }, limit: 100, depth: 0, overrideAccess: true }),
    payload.find({ collection: 'thinkers', where: { slug: { in: item.thinkerSlugs } }, limit: 100, depth: 0, overrideAccess: true }),
  ])
  if (topics.docs.length !== new Set(item.topicSlugs).size || thinkers.docs.length !== new Set(item.thinkerSlugs).size) throw new Error('unknown topic or thinker slug')
  const layout = await toLayout(payload, item)
  const publish = !extras.forceDraft && settings.autoPublish === true && item.relevance >= (settings.autoPublishMinRelevance ?? 0.8)
  const doc = await payload.create({ collection: 'current-affairs', draft: !publish, context: { ingestValidated: true }, overrideAccess: true, data: {
    headline: item.headline, date: `${item.date}T00:00:00.000Z`, paper: item.paper, topics: topics.docs.map((topic) => topic.id),
    thinkers: thinkers.docs.map((thinker) => thinker.id), sources: item.sources, summary: item.summary, layout: layout as never,
    isAiGenerated: true, reviewStatus: 'pending', sourceHash: hash, embedding: item.embedding,
    aiMeta: { model: item.model, promptVersion: item.promptVersion, relevance: item.relevance, costUsd: item.costUsd }, _status: publish ? 'published' : 'draft',
    ...(extras.seo ? { seo: extras.seo } : {}),
  } })
  return Number(doc.id)
}
