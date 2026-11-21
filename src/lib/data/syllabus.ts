import 'server-only'

import { cache } from 'react'
import type { Paper, Topic, Unit } from '@/payload-types'
import { getPayloadClient } from '@/lib/queries'
import type { PaperCode, SyllabusPaper, TopicDetail, TopicChip } from './types'
import { relationDocs } from './types'
import { mapCACard, mapTopicChip, mapThinkerChip } from './mappers'
import { urls } from './urls'

type UnitWithPaper = Unit & { paper: number | Paper }
const isDoc = <T extends { id: number }>(value: number | T): value is T => typeof value === 'object' && value !== null

export const getSyllabusTree = cache(async (): Promise<SyllabusPaper[]> => {
  const payload = await getPayloadClient()
  const [papers, units, topics, affairs] = await Promise.all([
    payload.find({ collection: 'papers', limit: 100, depth: 0, sort: 'code', overrideAccess: false, draft: false }),
    payload.find({ collection: 'units', limit: 500, depth: 1, sort: 'number', overrideAccess: false, draft: false }),
    payload.find({ collection: 'topics', where: { _status: { equals: 'published' } }, limit: 1000, depth: 2, sort: 'title', overrideAccess: false, draft: false }),
    payload.find({ collection: 'current-affairs', where: { _status: { equals: 'published' } }, limit: 1000, depth: 0, select: { topics: true }, overrideAccess: false, draft: false }),
  ])
  const counts = new Map<number, number>()
  for (const ca of affairs.docs) for (const id of ca.topics ?? []) { const key = typeof id === 'number' ? id : id.id; counts.set(key, (counts.get(key) ?? 0) + 1) }
  return papers.docs.map((paper) => {
    const paperSlug = paper.slug ?? ''
    const paperUnits = units.docs.filter((unit) => isDoc(unit.paper) && unit.paper.id === paper.id)
    return { code: paper.code as PaperCode, title: paper.title, slug: paperSlug, href: urls.paper(paperSlug), units: paperUnits.map((unit) => {
      const unitTopics = topics.docs.filter((topic) => isDoc(topic.unit) && topic.unit.id === unit.id)
      return { number: unit.number, title: unit.title, slug: unit.slug ?? '', href: urls.unit(paperSlug, unit.slug ?? ''), topics: unitTopics.map((topic) => ({ title: topic.title, slug: topic.slug ?? '', href: urls.topic(paperSlug, unit.slug ?? '', topic.slug ?? ''), caCount: counts.get(topic.id) ?? 0 })) }
    }) }
  })
})

export const getTopicDetail = cache(async (paperSlug: string, unitSlug: string, topicSlug: string): Promise<TopicDetail | null> => {
  const payload = await getPayloadClient()
  const found = await payload.find({ collection: 'topics', where: { and: [{ slug: { equals: topicSlug } }, { _status: { equals: 'published' } }] }, limit: 1, depth: 3, draft: false, overrideAccess: false })
  const topic = found.docs[0]
  if (!topic || !isDoc(topic.unit) || !isDoc(topic.unit.paper) || topic.unit.slug !== unitSlug || topic.unit.paper.slug !== paperSlug) return null
  const [affairs, related] = await Promise.all([
    payload.find({ collection: 'current-affairs', where: { and: [{ topics: { contains: topic.id } }, { _status: { equals: 'published' } }] }, limit: 6, sort: '-date', depth: 3, draft: false, overrideAccess: false }),
    Promise.resolve(relationDocs(topic.relatedTopics)),
  ])
  const paper = topic.unit.paper.code as PaperCode
  const topicChip: TopicChip = { title: topic.title, slug: topic.slug ?? '', href: urls.topic(paperSlug, unitSlug, topic.slug ?? ''), paper }
  const crumbs = [{ label: 'Syllabus', href: '/syllabus' }, { label: topic.unit.paper.title, href: urls.paper(paperSlug) }, { label: topic.unit.title, href: urls.unit(paperSlug, unitSlug) }, { label: topic.title, href: topicChip.href }]
  return { title: topic.title, slug: topic.slug ?? '', href: topicChip.href, summary: topic.summary ?? null, paper, breadcrumbs: crumbs, layout: topic.layout ?? [], thinkers: relationDocs(topic.thinkers).map(mapThinkerChip).filter((item): item is NonNullable<typeof item> => item !== null), relatedTopics: related.map((item) => mapTopicChip(item as Topic & { unit: UnitWithPaper })).filter((item): item is TopicChip => item !== null), latestCA: affairs.docs.map(mapCACard), caCount: affairs.totalDocs }
})

export const getTopicStaticParams = cache(async (): Promise<{ paper: string; path: string[] }[]> => {
  const tree = await getSyllabusTree()
  return tree.flatMap((paper) => paper.units.flatMap((unit) => unit.topics.map((topic) => ({ paper: paper.slug, path: [unit.slug, topic.slug] }))))
})
