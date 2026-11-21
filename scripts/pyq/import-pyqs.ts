import type { Payload } from 'payload'
import { mapPyqToTopic } from './mapping'
import { pyqImportData, type SourcePyq } from './read-data'

export async function importPyqs(payload: Payload, rows: SourcePyq[]): Promise<{ total: number; created: number; updated: number }> {
  const papers = await payload.find({ collection: 'papers', where: { code: { equals: 'P1' } }, limit: 1, overrideAccess: true })
  if (!papers.docs[0]) throw new Error('Paper P1 is missing; run syllabus:build first')
  const units = await payload.find({ collection: 'units', where: { paper: { equals: papers.docs[0].id } }, limit: 100, depth: 0, overrideAccess: true })
  const topics = await payload.find({ collection: 'topics', limit: 1000, depth: 0, overrideAccess: true, draft: true })
  const unitByNumber = new Map(units.docs.map((unit) => [unit.number, unit.id]))
  const topicBySlug = new Map(topics.docs.map((topic) => [topic.slug, topic.id]))
  let created = 0
  let updated = 0
  for (const row of rows) {
    const unitId = unitByNumber.get(row.unit)
    if (!unitId) throw new Error(`Missing P1 unit ${row.unit}`)
    const topicSlug = mapPyqToTopic(row.unit, row.question)
    const topicId = topicSlug ? topicBySlug.get(topicSlug) : undefined
    const data = pyqImportData({ ...row, question: row.question.trim() }, unitId, topicId)
    const found = await payload.find({ collection: 'pyqs', where: { and: [{ year: { equals: row.year } }, { paper: { equals: 'P1' } }, { qno: { equals: row.qno } }] }, limit: 1, overrideAccess: true, draft: true })
    if (found.docs[0]) {
      await payload.update({ collection: 'pyqs', id: found.docs[0].id, data, overrideAccess: true, context: { disableRevalidate: true } })
      updated += 1
    } else {
      await payload.create({ collection: 'pyqs', data, overrideAccess: true, draft: false, context: { disableRevalidate: true } })
      created += 1
    }
  }
  return { total: rows.length, created, updated }
}
