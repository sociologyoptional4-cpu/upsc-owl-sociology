import 'server-only'

import { getPayloadClient } from '@/lib/queries'
import type { DigestView, QuizView } from './types'

export async function getQuizView(date: string): Promise<QuizView | null> {
  const payload = await getPayloadClient()
  const found = await payload.find({ collection: 'quizzes', where: { and: [{ date: { equals: date } }, { _status: { equals: 'published' } }] }, limit: 1, depth: 2, overrideAccess: false, draft: false })
  const quiz = found.docs[0]
  if (!quiz) return null
  return { date: String(quiz.date).slice(0, 10), items: (quiz.items ?? []).map((item) => {
    const affair = typeof item.caId === 'object' ? item.caId : null
    return { question: item.question, options: (item.options ?? []).map(({ text }) => text), answerIndex: item.answerIndex, explanation: item.explanation, caHref: affair ? `/current-affairs/${String(affair.date).slice(0, 10)}/${affair.slug}` : '/current-affairs' }
  }) }
}

export async function getDigestView(type: string, key: string): Promise<DigestView | null> {
  if (type !== 'weekly' && type !== 'monthly') return null
  const payload = await getPayloadClient()
  const found = await payload.find({ collection: 'digests', where: { and: [{ type: { equals: type } }, { key: { equals: key } }, { _status: { equals: 'published' } }] }, limit: 1, depth: 3, overrideAccess: false, draft: false })
  const digest = found.docs[0]
  if (!digest) return null
  return { type, key: digest.key, title: type === 'weekly' ? `Weekly digest ${key}` : `Monthly digest ${key}`, range: digest.range, intro: digest.intro ?? '', groups: (digest.groups ?? []).flatMap((group) => {
    const topic = typeof group.topic === 'object' ? group.topic : null
    if (!topic) return []
    const unit = typeof topic.unit === 'object' ? topic.unit : null
    const paper = unit && typeof unit.paper === 'object' ? unit.paper : null
    const chips = { title: topic.title, slug: topic.slug ?? '', href: paper && unit ? `/syllabus/${paper.slug}/${unit.slug}/${topic.slug}` : '/syllabus', paper: paper?.code === 'P2' ? 'P2' as const : 'P1' as const }
    const items = (group.items ?? []).flatMap((item) => typeof item === 'object' ? [{ id: item.id, headline: item.headline, slug: item.slug ?? '', date: String(item.date).slice(0, 10), href: `/current-affairs/${String(item.date).slice(0, 10)}/${item.slug}`, summary: item.summary ?? null, paper: item.paper ?? null, topics: [], thinkers: [], isAiGenerated: item.isAiGenerated ?? false, sourceNames: item.sources.map(({ name }) => name) }] : [])
    return [{ topic: chips, items }]
  }), pdfUrl: typeof digest.pdf === 'object' && digest.pdf ? digest.pdf.url ?? null : null, prev: null, next: null }
}
