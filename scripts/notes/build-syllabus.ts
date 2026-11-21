import 'dotenv/config'
import { getPayload, type Payload } from 'payload'
import config from '@payload-config'
import { LEGACY_UNIT_SLUGS, SYLLABUS } from './syllabus'

async function findOrCreatePaper(payload: Payload, code: 'P1' | 'P2'): Promise<number> {
  const slug = code === 'P1' ? 'paper-1' : 'paper-2'
  const result = await payload.find({ collection: 'papers', where: { code: { equals: code } }, limit: 1, overrideAccess: true })
  if (result.docs[0]) return result.docs[0].id
  const doc = await payload.create({ collection: 'papers', data: { code, slug, title: code === 'P1' ? 'Paper 1: Fundamentals of Sociology' : 'Paper 2: Indian Society — Structure and Change' }, overrideAccess: true })
  return doc.id
}

async function upsertUnit(payload: Payload, paperId: number, paperCode: 'P1' | 'P2', unit: (typeof SYLLABUS)[number]['units'][number], order: number): Promise<number> {
  const found = await payload.find({ collection: 'units', where: { and: [{ slug: { equals: unit.slug } }, { paper: { equals: paperId } }] }, limit: 1, overrideAccess: true })
  const data = { title: unit.title, slug: unit.slug, number: order, paper: paperId, order, section: unit.section ?? (paperCode === 'P2' ? sectionFor(order) : null) }
  const doc = found.docs[0]
    ? await payload.update({ collection: 'units', id: found.docs[0].id, data, overrideAccess: true })
    : await payload.create({ collection: 'units', data, overrideAccess: true })
  return doc.id
}

function sectionFor(order: number): string {
  return order <= 5 ? 'A' : order <= 8 ? 'B' : 'C'
}

async function upsertTopic(payload: Payload, unitId: number, topic: (typeof SYLLABUS)[number]['units'][number]['topics'][number], order: number): Promise<void> {
  const found = await payload.find({ collection: 'topics', where: { slug: { equals: topic.slug } }, limit: 1, overrideAccess: true, draft: true })
  const existing = found.docs[0]
  const data = { title: topic.title, unit: unitId, order, ...(existing?.layout?.length ? {} : { _status: 'published' as const, layout: [] }) }
  if (existing) await payload.update({ collection: 'topics', id: existing.id, data, overrideAccess: true, context: { disableRevalidate: true } })
  else await payload.create({ collection: 'topics', data: { ...data, slug: topic.slug }, overrideAccess: true, context: { disableRevalidate: true } })
}

async function main(): Promise<void> {
  const payload = await getPayload({ config })
  let unitCount = 0
  let topicCount = 0
  for (const paper of SYLLABUS) {
    const paperId = await findOrCreatePaper(payload, paper.code)
    for (const [unitIndex, unit] of paper.units.entries()) {
      const unitId = await upsertUnit(payload, paperId, paper.code, unit, unitIndex + 1)
      unitCount += 1
      for (const [topicIndex, topic] of unit.topics.entries()) { await upsertTopic(payload, unitId, topic, topicIndex + 1); topicCount += 1 }
    }
  }
  for (const slug of LEGACY_UNIT_SLUGS) {
    const legacy = await payload.find({ collection: 'units', where: { slug: { equals: slug } }, limit: 1, overrideAccess: true })
    if (legacy.docs[0]) await payload.update({ collection: 'units', id: legacy.docs[0].id, data: { order: 99, section: null }, overrideAccess: true })
  }
  payload.logger.info(`Syllabus ready: ${unitCount} units, ${topicCount} official topics`)
  await payload.destroy()
}

try {
  await main()
} catch (error: unknown) {
  console.error(error instanceof Error ? error.stack : 'Syllabus build failed')
  process.exit(1)
}
