import 'server-only'

import { cache } from 'react'
import type { Thinker } from '@/payload-types'
import { getPayloadClient } from '@/lib/queries'
import type { ThinkerCard, ThinkerDetail, TopicChip } from './types'
import { mapCACard, mapTopicChip } from './mappers'
import { LIGHT_POPULATE } from './syllabus'
import { urls } from './urls'

type ThinkerDoc = Thinker & { portrait?: number | ({ url?: string | null; alt?: string | null; width?: number | null; height?: number | null } & { id: number }) | null }
function mapThinker(doc: ThinkerDoc): ThinkerCard {
  const media = typeof doc.portrait === 'object' && doc.portrait ? doc.portrait : null
  return { name: doc.name, slug: doc.slug ?? '', href: urls.thinker(doc.slug ?? ''), era: doc.era ?? null,
    portrait: media?.url ? { url: media.url, alt: media.alt ?? doc.name, width: media.width ?? 1, height: media.height ?? 1 } : null,
    keyIdeas: (doc.keyIdeas ?? []).map((item) => item.idea) }
}

export const getThinkers = cache(async (): Promise<ThinkerCard[]> => {
  const payload = await getPayloadClient()
  const result = await payload.find({ collection: 'thinkers', where: { _status: { equals: 'published' } }, limit: 500, sort: 'name', depth: 1, draft: false, overrideAccess: false })
  return result.docs.map((doc) => mapThinker(doc as ThinkerDoc))
})

export const getThinkerDetail = cache(async (slug: string): Promise<ThinkerDetail | null> => {
  const payload = await getPayloadClient()
  const result = await payload.find({ collection: 'thinkers', where: { and: [{ slug: { equals: slug } }, { _status: { equals: 'published' } }] }, limit: 1, depth: 2, draft: false, overrideAccess: false })
  const thinker = result.docs[0] as ThinkerDoc | undefined
  if (!thinker) return null
  const [affairs, topics] = await Promise.all([
    payload.find({ collection: 'current-affairs', where: { and: [{ thinkers: { contains: thinker.id } }, { _status: { equals: 'published' } }] }, limit: 6, sort: '-date', depth: 3, populate: LIGHT_POPULATE, draft: false, overrideAccess: false }),
    payload.find({ collection: 'topics', where: { and: [{ thinkers: { contains: thinker.id } }, { _status: { equals: 'published' } }] }, limit: 200, depth: 2, select: { title: true, slug: true, unit: true, order: true, createdAt: true, updatedAt: true }, populate: LIGHT_POPULATE, sort: 'title', draft: false, overrideAccess: false }),
  ])
  const chips = topics.docs.map((topic) => mapTopicChip(topic)).filter((item): item is TopicChip => item !== null)
  return { ...mapThinker(thinker), layout: thinker.layout ?? [], latestCA: affairs.docs.map(mapCACard), topics: chips }
})
