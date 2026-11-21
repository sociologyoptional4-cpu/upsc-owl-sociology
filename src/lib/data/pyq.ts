import 'server-only'
import { cache } from 'react'
import type { Paper, Pyq, Thinker, Topic, Unit } from '@/payload-types'
import type { Where } from 'payload'
import { getPayloadClient } from '@/lib/queries'
import type { PaperCode, PyqBankData, PyqItem, TopicChip, ThinkerChip } from './types'
import { parsePyqParams, type PyqParams } from './pyq-params'
type PopTopic = Topic & { unit?: number | (Unit & { paper?: number | Paper }) }
const docs = <T extends { id: number }>(values: (number | T)[] | null | undefined): T[] => (values ?? []).filter((value): value is T => typeof value === 'object' && value !== null)

function mapItem(pyq: Pyq & { topics?: (number | PopTopic)[]; thinkers?: (number | Thinker)[] }): PyqItem {
  const topics: TopicChip[] = docs(pyq.topics).flatMap((topic) => {
    const unit = typeof topic.unit === 'object' ? topic.unit : null
    const paper = unit && typeof unit.paper === 'object' ? unit.paper : null
    return unit?.slug && topic.slug && (paper?.code === 'P1' || paper?.code === 'P2') ? [{ title: topic.title, slug: topic.slug, paper: paper.code as PaperCode, href: `/syllabus/${paper.slug}/${unit.slug}/${topic.slug}` }] : []
  })
  const thinkers: ThinkerChip[] = docs(pyq.thinkers).flatMap((thinker) => thinker.slug ? [{ name: thinker.name, slug: thinker.slug, href: `/thinkers/${thinker.slug}` }] : [])
  return { id: pyq.id, year: pyq.year, paper: pyq.paper as PaperCode, qno: pyq.qno, marks: pyq.marks, question: pyq.question, topics, thinkers }
}

export { parsePyqParams }
export const getPyqBank = cache(async (input: PyqParams = {}): Promise<PyqBankData> => {
  const parsed = parsePyqParams(input as Record<string, unknown>)
  if (!parsed.success) throw new Error('Invalid PYQ filter parameters')
  const { paper, topic, year, page, limit } = parsed.data
  const payload = await getPayloadClient()
  const conditions: Where[] = [{ _status: { equals: 'published' } }]
  if (paper) conditions.push({ paper: { equals: paper } })
  if (year) conditions.push({ year: { equals: year } })
  if (topic) conditions.push({ 'topics.slug': { equals: topic } })
  const [result, all] = await Promise.all([
    payload.find({ collection: 'pyqs', where: { and: conditions }, limit, page, sort: '-year,qno', depth: 3, overrideAccess: false, draft: false }),
    payload.find({ collection: 'pyqs', where: { _status: { equals: 'published' } }, limit: 1000, depth: 2, overrideAccess: false, draft: false }),
  ])
  const years = new Map<number, number>(); const topics = new Map<string, { title: string; count: number }>()
  for (const row of all.docs) {
    years.set(row.year, (years.get(row.year) ?? 0) + 1)
    for (const related of docs(row.topics as (number | PopTopic)[])) if (related.slug) {
      const previous = topics.get(related.slug)
      topics.set(related.slug, { title: related.title, count: (previous?.count ?? 0) + 1 })
    }
  }
  return { items: result.docs.map((doc) => mapItem(doc as Pyq & { topics?: (number | PopTopic)[]; thinkers?: (number | Thinker)[] })), total: result.totalDocs, page: result.page ?? page, totalPages: result.totalPages, filters: { ...(paper ? { paper } : {}), ...(topic ? { topic } : {}), ...(year ? { year } : {}) }, facets: { years: [...years].map(([year, count]) => ({ year, count })).sort((a, b) => b.year - a.year), topics: [...topics].map(([slug, value]) => ({ slug, ...value })).sort((a, b) => a.title.localeCompare(b.title)) } }
})

export const getTopicPyqs = cache(async (topicSlug: string, limit = 10): Promise<PyqItem[]> => {
  if (!topicSlug || topicSlug.length > 120 || !Number.isInteger(limit) || limit < 1 || limit > 50) return []
  const payload = await getPayloadClient()
  const result = await payload.find({ collection: 'pyqs', where: { and: [{ 'topics.slug': { equals: topicSlug } }, { _status: { equals: 'published' } }] }, limit, sort: '-year,qno', depth: 3, overrideAccess: false, draft: false })
  return result.docs.map((doc) => mapItem(doc as Pyq & { topics?: (number | PopTopic)[]; thinkers?: (number | Thinker)[] }))
})
