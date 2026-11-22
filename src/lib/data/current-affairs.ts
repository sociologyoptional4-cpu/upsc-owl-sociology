import 'server-only'

import { cache } from 'react'
import type { CurrentAffair } from '@/payload-types'
import type { Where } from 'payload'
import { getPayloadClient } from '@/lib/queries'
import type { CAArticle, CACard, IssueSummary, Paginated, PaperCode } from './types'
import { mapCACard } from './mappers'
import { formatDateIST, issueSummary } from './issue'
import { urls } from './urls'

export type CAListParams = { page?: number; limit?: number; paper?: PaperCode; topic?: string; thinker?: string; month?: string }
const dateValue = formatDateIST

export const getCAList = cache(async (params: CAListParams = {}): Promise<Paginated<CACard>> => {
  const payload = await getPayloadClient()
  const page = Math.max(1, params.page ?? 1)
  const limit = Math.min(48, Math.max(1, params.limit ?? 12))
  const and: Where[] = [{ _status: { equals: 'published' } }]
  if (params.paper) and.push({ paper: { equals: params.paper } })
  if (params.topic) and.push({ 'topics.slug': { equals: params.topic } })
  if (params.thinker) and.push({ 'thinkers.slug': { equals: params.thinker } })
  if (params.month) and.push({ date: { greater_than_equal: `${params.month}-01`, less_than: `${params.month}-32` } })
  const result = await payload.find({ collection: 'current-affairs', where: { and }, page, limit, sort: '-date', depth: 3, draft: false, overrideAccess: false })
  return { items: result.docs.map(mapCACard), page: result.page ?? page, totalPages: result.totalPages, total: result.totalDocs }
})

export const getIssue = cache(async (date: string): Promise<{ issue: IssueSummary; items: CACard[] } | null> => {
  const payload = await getPayloadClient()
  const result = await payload.find({ collection: 'current-affairs', where: { and: [{ date: { equals: date } }, { _status: { equals: 'published' } }] }, limit: 100, sort: '-date', depth: 3, draft: false, overrideAccess: false })
  return result.docs.length ? { issue: issueSummary(date, result.totalDocs), items: result.docs.map(mapCACard) } : null
})

export const getRecentIssues = cache(async (limit = 30): Promise<IssueSummary[]> => {
  const payload = await getPayloadClient()
  const result = await payload.find({ collection: 'current-affairs', where: { _status: { equals: 'published' } }, limit: 500, sort: '-date', depth: 0, select: { date: true }, draft: false, overrideAccess: false })
  const counts = new Map<string, number>()
  for (const doc of result.docs) { const date = dateValue(doc.date); counts.set(date, (counts.get(date) ?? 0) + 1) }
  return [...counts].slice(0, limit).map(([date, count]) => issueSummary(date, count))
})

export const getCAArticle = cache(async (date: string, slug: string, preview = false): Promise<CAArticle | null> => {
  const payload = await getPayloadClient()
  const conditions: Where[] = [{ date: { equals: date } }, { slug: { equals: slug } }]
  if (!preview) conditions.push({ _status: { equals: 'published' } })
  const found = await payload.find({ collection: 'current-affairs', where: { and: conditions }, limit: 1, depth: 3, draft: preview, overrideAccess: preview })
  const doc = found.docs[0]
  if (!doc) return null
  const [older, newer] = await Promise.all([
    payload.find({ collection: 'current-affairs', where: { and: [{ _status: { equals: 'published' } }, { or: [{ date: { less_than: doc.date } }, { date: { equals: doc.date }, id: { less_than: doc.id } }] }] }, limit: 1, sort: '-date,-id', depth: 0, draft: false, overrideAccess: false }),
    payload.find({ collection: 'current-affairs', where: { and: [{ _status: { equals: 'published' } }, { or: [{ date: { greater_than: doc.date } }, { date: { equals: doc.date }, id: { greater_than: doc.id } }] }] }, limit: 1, sort: 'date,id', depth: 0, draft: false, overrideAccess: false }),
  ])
  const link = (item: (typeof older.docs)[number] | undefined) => item?.slug ? { href: urls.article(formatDateIST(item.date), item.slug), headline: item.headline } : null
  const card = mapCACard(doc)
  return { ...card, seo: { title: doc.seo?.title ?? null, description: doc.seo?.description ?? null }, sources: doc.sources.map(({ name, url }) => ({ name, url })), layout: doc.layout ?? [], prev: link(older.docs[0]), next: link(newer.docs[0]) }
})

export const getCAStaticParams = cache(async (limit = 100): Promise<{ date: string; slug: string }[]> => {
  const payload = await getPayloadClient()
  const result = await payload.find({ collection: 'current-affairs', where: { _status: { equals: 'published' } }, limit, sort: '-date', depth: 0, select: { date: true, slug: true }, draft: false, overrideAccess: false })
  return result.docs.filter((item) => item.slug).map((item) => ({ date: formatDateIST(item.date), slug: item.slug! }))
})

export type CADoc = CurrentAffair
