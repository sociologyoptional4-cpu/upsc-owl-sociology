import 'server-only'

import { cache } from 'react'
import { draftMode } from 'next/headers'
import type { Media, Paper, Topic, Unit } from '@/payload-types'
import { extractToc } from '@/lib/blog/text'
import { getPayloadClient } from '@/lib/queries'
import { mindMapDataSchema, pyqAnswerItemSchema, type MindMapData, type PyqAnswerItem, type UnitInfographic, type UnitStudyStep } from '@/lib/notes/notebook-types'
import { resolveNotebookBlocks } from '@/lib/notes/resolve-blocks'
import type { PaperCode, SyllabusPaper, TopicChip, TopicDetail, UnitPageData } from './types'
import { relationDocs } from './types'
import { mapCACard, mapThinkerChip, mapTopicChip } from './mappers'
import { urls } from './urls'
import { compareOrder } from './syllabus-order'
import { getTopicPosts } from './blog'

type UnitWithPaper = Unit & { paper: number | Paper }
const isDoc = <T extends { id: number }>(value: number | T | null | undefined): value is T => typeof value === 'object' && value !== null

function countByTopicId(docs: { topics?: (number | { id: number })[] | null }[]): Map<number, number> {
  const counts = new Map<number, number>()
  for (const doc of docs) {
    for (const item of doc.topics ?? []) {
      const id = typeof item === 'number' ? item : item.id
      counts.set(id, (counts.get(id) ?? 0) + 1)
    }
  }
  return counts
}

function parseMindMap(raw: unknown): MindMapData | null {
  const parsed = mindMapDataSchema.safeParse(raw)
  return parsed.success ? parsed.data : null
}

function parsePyqAnswers(raw: Topic['pyqAnswers']): PyqAnswerItem[] {
  if (!Array.isArray(raw)) return []
  return raw.flatMap((row) => {
    const points = Array.isArray(row.points) ? row.points.map((pt) => (typeof pt === 'string' ? pt : pt.text)) : []
    const parsed = pyqAnswerItemSchema.safeParse({
      year: row.year,
      paper: row.paper,
      marks: row.marks,
      question: row.question,
      theme: row.theme ?? null,
      intro: row.intro,
      points,
      thinkers: row.thinkers ?? null,
      example: row.example ?? null,
      conclusion: row.conclusion,
    })
    return parsed.success ? [parsed.data] : []
  })
}

function normalizeMediaUrl(url: string | null | undefined): string {
  if (!url) return ''
  return url.replace(/^https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?/, '')
}

function mapUnitInfographics(raw: Unit['infographics']): UnitInfographic[] {
  if (!Array.isArray(raw)) return []
  return raw.flatMap((row) => {
    const media = isDoc<Media>(row.image) ? row.image : null
    const url = row.staticSrc || normalizeMediaUrl(media?.url)
    if (!url) return []
    return [{
      title: row.title,
      caption: row.caption ?? null,
      badge: row.badge ?? null,
      url,
      width: media?.width ?? 819,
      height: media?.height ?? 1024,
    }]
  })
}

export const getSyllabusTree = cache(async (): Promise<SyllabusPaper[]> => {
  const payload = await getPayloadClient()
  const [papers, units, topics, affairs, pyqs] = await Promise.all([
    payload.find({ collection: 'papers', limit: 100, depth: 0, sort: 'code', overrideAccess: false, draft: false }),
    payload.find({ collection: 'units', limit: 500, depth: 1, sort: 'order', overrideAccess: false, draft: false }),
    payload.find({ collection: 'topics', where: { _status: { equals: 'published' } }, limit: 1000, depth: 2, sort: 'order', overrideAccess: false, draft: false }),
    payload.find({ collection: 'current-affairs', where: { _status: { equals: 'published' } }, limit: 1000, depth: 0, select: { topics: true }, overrideAccess: false, draft: false }),
    payload.find({ collection: 'pyqs', where: { _status: { equals: 'published' } }, limit: 2000, depth: 0, select: { topics: true }, overrideAccess: false, draft: false }),
  ])
  const caCounts = countByTopicId(affairs.docs)
  const pyqCounts = countByTopicId(pyqs.docs)

  return papers.docs.map((paper) => {
    const paperSlug = paper.slug ?? ''
    const paperUnits = units.docs.filter((unit) => isDoc(unit.paper) && unit.paper.id === paper.id).sort(compareOrder)
    return {
      code: paper.code as PaperCode,
      title: paper.title,
      slug: paperSlug,
      href: urls.paper(paperSlug),
      units: paperUnits.map((unit) => {
        const unitTopics = topics.docs.filter((topic) => isDoc(topic.unit) && topic.unit.id === unit.id).sort(compareOrder)
        return {
          number: unit.number,
          title: unit.title,
          slug: unit.slug ?? '',
          href: urls.unit(paperSlug, unit.slug ?? ''),
          topics: unitTopics.map((topic) => ({
            title: topic.title,
            slug: topic.slug ?? '',
            href: urls.topic(paperSlug, unit.slug ?? '', topic.slug ?? ''),
            caCount: caCounts.get(topic.id) ?? 0,
            summary: topic.summary ?? null,
            pyqCount: pyqCounts.get(topic.id) ?? 0,
            hasNotes: Boolean(topic.notebookContent) || (topic.layout?.length ?? 0) > 0,
          })),
        }
      }),
    }
  })
})

export const getUnitPageData = cache(async (paperSlug: string, unitSlug: string): Promise<UnitPageData | null> => {
  const tree = await getSyllabusTree()
  const paper = tree.find((item) => item.slug === paperSlug)
  const unit = paper?.units.find((item) => item.slug === unitSlug)
  if (!paper || !unit) return null

  const payload = await getPayloadClient()
  const found = await payload.find({ collection: 'units', where: { slug: { equals: unitSlug } }, limit: 20, depth: 1, overrideAccess: false })
  const unitDoc = found.docs.find((doc) => isDoc(doc.paper) && doc.paper.slug === paperSlug)
  const studySequence: UnitStudyStep[] = (unitDoc?.studySequence ?? []).map((item) => ({
    step: item.step,
    detail: item.detail ?? null,
  }))
  const totalPyqs = unit.topics.reduce((sum, item) => sum + (item.pyqCount ?? 0), 0)

  return {
    paper: { code: paper.code, title: paper.title, slug: paper.slug, href: paper.href },
    unit,
    overview: unitDoc?.overview ?? null,
    studySequence,
    mindMap: parseMindMap(unitDoc?.mindMap),
    infographics: mapUnitInfographics(unitDoc?.infographics),
    totalPyqs,
  }
})

export const getTopicDetail = cache(async (paperSlug: string, unitSlug: string, topicSlug: string): Promise<TopicDetail | null> => {
  const payload = await getPayloadClient()
  const isPreview = (await draftMode()).isEnabled
  const found = await payload.find({
    collection: 'topics',
    where: { and: [{ slug: { equals: topicSlug } }, ...(!isPreview ? [{ _status: { equals: 'published' } }] : [])] },
    limit: 1,
    depth: 3,
    draft: isPreview,
    overrideAccess: isPreview,
  })
  const topic = found.docs[0]
  if (!topic || !isDoc(topic.unit) || !isDoc(topic.unit.paper) || topic.unit.slug !== unitSlug || topic.unit.paper.slug !== paperSlug) return null

  const [affairs, posts, resolvedBlocks, tree] = await Promise.all([
    payload.find({ collection: 'current-affairs', where: { and: [{ topics: { contains: topic.id } }, { _status: { equals: 'published' } }] }, limit: 6, sort: '-date', depth: 3, draft: false, overrideAccess: false }),
    getTopicPosts(topic.id, 4),
    topic.notebookContent ? resolveNotebookBlocks(topic.notebookContent) : Promise.resolve(undefined),
    getSyllabusTree(),
  ])

  const unitTopics = tree.find((p) => p.slug === paperSlug)?.units.find((u) => u.slug === unitSlug)?.topics ?? []
  const idx = unitTopics.findIndex((item) => item.slug === topicSlug)
  const prevTopic = idx > 0 ? { title: unitTopics[idx - 1]!.title, href: unitTopics[idx - 1]!.href } : null
  const nextTopic = idx >= 0 && idx < unitTopics.length - 1 ? { title: unitTopics[idx + 1]!.title, href: unitTopics[idx + 1]!.href } : null

  const paper = topic.unit.paper.code as PaperCode
  const topicChip: TopicChip = { title: topic.title, slug: topic.slug ?? '', href: urls.topic(paperSlug, unitSlug, topic.slug ?? ''), paper }
  const crumbs = [{ label: 'Syllabus', href: '/syllabus' }, { label: topic.unit.paper.title, href: urls.paper(paperSlug) }, { label: topic.unit.title, href: urls.unit(paperSlug, unitSlug) }, { label: topic.title, href: topicChip.href }]

  return {
    title: topic.title,
    slug: topic.slug ?? '',
    href: topicChip.href,
    summary: topic.summary ?? null,
    paper,
    breadcrumbs: crumbs,
    layout: topic.layout ?? [],
    thinkers: relationDocs(topic.thinkers).map(mapThinkerChip).filter((item): item is NonNullable<typeof item> => item !== null),
    relatedTopics: relationDocs(topic.relatedTopics).map((item) => mapTopicChip(item as Topic & { unit: UnitWithPaper })).filter((item): item is TopicChip => item !== null),
    latestCA: affairs.docs.map(mapCACard),
    caCount: affairs.totalDocs,
    posts,
    notebookContent: topic.notebookContent ?? undefined,
    resolvedBlocks,
    toc: topic.notebookContent ? extractToc(topic.notebookContent) : [],
    mindMap: parseMindMap(topic.mindMap),
    pyqAnswers: parsePyqAnswers(topic.pyqAnswers),
    prevTopic,
    nextTopic,
  }
})

export const getTopicStaticParams = cache(async (): Promise<{ paper: string; path: string[] }[]> => {
  const tree = await getSyllabusTree()
  return tree.flatMap((paper) => [
    ...paper.units.map((unit) => ({ paper: paper.slug, path: [unit.slug] })),
    ...paper.units.flatMap((unit) => unit.topics.map((topic) => ({ paper: paper.slug, path: [unit.slug, topic.slug] }))),
  ])
})
