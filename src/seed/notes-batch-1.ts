/**
 * Import batch-1 topic notes (Paper 1, Units 1-2) with their PYQs.
 * Run: npx payload run src/seed/notes-batch-1.ts   (idempotent: updates topics by slug)
 */
import fs from 'node:fs'
import path from 'node:path'

import type { Payload } from 'payload'
import { getPayload } from 'payload'

import config from '@payload-config'
import { markdownToLexical } from '@/lib/ingest/markdownToLexical'

import { NOTES, type NoteSeed } from './notes/unit1-2'

type Pyq = { unit: number; year: number; question: string }

const PYQ_FILE = path.resolve(process.cwd(), 'data/pyq/paper1-2013-2025.jsonl')
const CTX = { disableRevalidate: true }

// Most specific topics first; the last topic of each unit is the fallback.
const MATCH_ORDER: Record<number, string[]> = {
  1: ['sociology-and-common-sense', 'modernity-and-emergence-of-sociology', 'scope-and-other-social-sciences'],
  2: ['positivism-and-its-critique', 'fact-value-and-objectivity', 'non-positivist-methodologies', 'theoretical-strands-of-methodology', 'science-and-scientific-method'],
}

function readPyqs(): Pyq[] {
  return fs
    .readFileSync(PYQ_FILE, 'utf8')
    .split('\n')
    .filter((line) => line.trim())
    .map((line) => JSON.parse(line) as Pyq)
}

function assignPyqs(pyqs: Pyq[]): Map<string, Pyq[]> {
  const bySlug = new Map(NOTES.map((n) => [n.slug, n]))
  const result = new Map<string, Pyq[]>()
  for (const pyq of pyqs) {
    const order = MATCH_ORDER[pyq.unit]
    if (!order) continue
    const text = pyq.question.toLowerCase()
    const slug = order.find((s) => bySlug.get(s)?.pyqKeywords.some((k) => text.includes(k))) ?? order[order.length - 1]
    result.set(slug, [...(result.get(slug) ?? []), pyq])
  }
  return result
}

async function ensureUnit(payload: Payload, unit: NoteSeed['unit'], paperId: number): Promise<number> {
  const found = await payload.find({ collection: 'units', where: { slug: { equals: unit.slug } }, limit: 1, depth: 0 })
  if (found.docs[0]) return found.docs[0].id
  const created = await payload.create({ collection: 'units', data: { ...unit, paper: paperId, order: unit.number }, draft: false })
  return created.id
}

async function thinkerIds(payload: Payload, slugs: string[]): Promise<number[]> {
  if (slugs.length === 0) return []
  const { docs } = await payload.find({ collection: 'thinkers', where: { slug: { in: slugs } }, limit: slugs.length, depth: 0, draft: true })
  return docs.map((d) => d.id)
}

async function buildLayout(payload: Payload, note: NoteSeed, pyqs: Pyq[]) {
  const layout: Record<string, unknown>[] = [
    { blockType: 'summary', heading: 'Ek nazar mein', points: note.points.map((text) => ({ text })) },
    { blockType: 'richText', content: await markdownToLexical(payload, note.body) },
    { blockType: 'keyTerms', caption: 'Key terms', rows: note.keyTerms },
  ]
  if (pyqs.length > 0) layout.push({ blockType: 'pyqList', heading: 'UPSC mein kab-kab pucha gaya', items: pyqs.map((q) => ({ year: q.year, question: q.question.replace(/\s+/g, ' ').trim() })) })
  layout.push({ blockType: 'callout', tone: 'tip', title: 'Answer-writing tip', body: note.answerTip })
  return layout
}

async function upsertNote(payload: Payload, note: NoteSeed, unitId: number, pyqs: Pyq[]): Promise<string> {
  const data = {
    title: note.title,
    slug: note.slug,
    unit: unitId,
    summary: note.summary,
    thinkers: await thinkerIds(payload, note.thinkerSlugs),
    layout: (await buildLayout(payload, note, pyqs)) as never,
    _status: 'published' as const,
  }
  const existing = await payload.find({ collection: 'topics', where: { slug: { equals: note.slug } }, limit: 1, depth: 0, draft: true })
  if (existing.docs[0]) {
    await payload.update({ collection: 'topics', id: existing.docs[0].id, data, context: CTX })
    return `updated  ${note.slug} (${pyqs.length} PYQs)`
  }
    await payload.create({ collection: 'topics', data: { ...data, order: NOTES.filter((item) => item.unit.slug === note.unit.slug).findIndex((item) => item.slug === note.slug) + 1 }, context: CTX, draft: false })
  return `created  ${note.slug} (${pyqs.length} PYQs)`
}

try {
  const payload = await getPayload({ config })
  const paper = await payload.find({ collection: 'papers', where: { code: { equals: 'P1' } }, limit: 1, depth: 0 })
  const paperId = paper.docs[0]?.id
  if (!paperId) throw new Error('Paper P1 missing: run `npm run seed` first')
  const pyqsBySlug = assignPyqs(readPyqs())
  for (const note of NOTES) {
    const unitId = await ensureUnit(payload, note.unit, paperId)
    payload.logger.info(await upsertNote(payload, note, unitId, pyqsBySlug.get(note.slug) ?? []))
  }
  payload.logger.info('notes batch 1 complete')
  process.exit(0)
} catch (error: unknown) {
  console.error('notes batch 1 failed:', error)
  process.exit(1)
}
