import fs from 'node:fs'
import path from 'node:path'
import type { Endpoint, Payload, PayloadRequest } from 'payload'
import { z } from 'zod'

import { hasRole } from '@/access/roles'
import { unit01Notebook } from '@/data/notes/unit-01'
import { buildNotebookLexical } from '@/lib/notes/notebook-builder'
import type { NotebookSection } from '@/lib/notes/notebook-types'
import { mapPyqToTopic } from '../../scripts/pyq/mapping'

type PortraitAsset = { slug: string; name: string; status: 'ok' | 'none'; file: string | null; license: 'public-domain' | 'cc0' | 'cc-by' | 'cc-by-sa' | null; attribution: string | null; author: string | null; sourceUrl: string | null }
type ImportSummary = { portraits: number; media: number; unitTopics: number; pyqLinks: number }

const input = z.object({ scope: z.enum(['all', 'portraits', 'unit-1']).default('all') }).strict()
const ctx = { disableRevalidate: true }
const respond = (success: boolean, data: unknown, error: string | null, status = 200) => Response.json({ success, data, error }, { status })

function repoFile(...parts: string[]): string {
  return path.join(process.cwd(), ...parts)
}

async function upsertPortraits(payload: Payload, summary: ImportSummary): Promise<void> {
  const assets = JSON.parse(fs.readFileSync(repoFile('src', 'data', 'thinker-assets.json'), 'utf8')) as PortraitAsset[]
  const available = assets.filter((item): item is PortraitAsset & { file: string; license: NonNullable<PortraitAsset['license']> } => item.status === 'ok' && item.file !== null && item.license !== null)
  for (const asset of available) {
    const filename = path.basename(asset.file)
    const filePath = repoFile('public', asset.file.slice(1))
    const media = await payload.find({ collection: 'media', where: { filename: { equals: filename } }, limit: 1, depth: 0, overrideAccess: true })
    const data = { alt: `Portrait of ${asset.name}`, license: asset.license, credit: asset.attribution ?? asset.author ?? undefined, sourceUrl: asset.sourceUrl ?? undefined }
    const mediaDoc = media.docs[0]
    if (mediaDoc) await payload.update({ collection: 'media', id: mediaDoc.id, data, filePath, overwriteExistingFiles: true, overrideAccess: true, context: ctx })
    const mediaId = mediaDoc?.id ?? (await payload.create({ collection: 'media', data, filePath, overrideAccess: true, context: ctx })).id
    if (!mediaDoc) summary.media += 1
    const thinkers = await payload.find({ collection: 'thinkers', where: { slug: { equals: asset.slug } }, limit: 1, depth: 0, overrideAccess: true, draft: true })
    const thinker = thinkers.docs[0]
    if (thinker) await payload.update({ collection: 'thinkers', id: thinker.id, data: { portrait: mediaId, _status: 'published' }, overrideAccess: true, context: ctx })
    else await payload.create({ collection: 'thinkers', data: { name: asset.name, slug: asset.slug, portrait: mediaId, _status: 'published' }, overrideAccess: true, context: ctx })
    summary.portraits += 1
  }
}

function assetsForUnit(): Map<string, string> {
  const refs = new Map<string, string>()
  for (const item of unit01Notebook.infographics) refs.set(item.assetFile, item.alt)
  for (const topic of unit01Notebook.topics) for (const section of [...topic.sections, ...topic.sectionsHinglish]) {
    if ((section as NotebookSection).kind === 'figure') {
      const figure = section as Extract<NotebookSection, { kind: 'figure' }>
      refs.set(figure.assetFile, figure.alt)
    }
  }
  return refs
}

async function ensureUnitMedia(payload: Payload, summary: ImportSummary): Promise<Map<string, number>> {
  const ids = new Map<string, number>()
  for (const [file, alt] of assetsForUnit()) {
    const existing = await payload.find({ collection: 'media', where: { alt: { equals: alt } }, limit: 1, depth: 0, overrideAccess: true })
    const hit = existing.docs[0]
    const doc = hit ?? await payload.create({ collection: 'media', data: { alt, license: 'own', credit: 'UPSC OWL Sociology' }, filePath: repoFile('public', 'assets', 'infographics', file), overrideAccess: true, context: ctx })
    if (!hit) summary.media += 1
    ids.set(file, doc.id)
  }
  return ids
}

async function importUnitOne(payload: Payload, summary: ImportSummary): Promise<void> {
  const [units, thinkers, topics] = await Promise.all([
    payload.find({ collection: 'units', where: { slug: { equals: unit01Notebook.unitSlug } }, limit: 20, depth: 1, overrideAccess: true }),
    payload.find({ collection: 'thinkers', limit: 200, depth: 0, overrideAccess: true, draft: true }),
    payload.find({ collection: 'topics', limit: 500, depth: 0, overrideAccess: true, draft: true }),
  ])
  const unit = units.docs.find((item) => typeof item.paper === 'object' && item.paper?.code === unit01Notebook.paperCode)
  if (!unit) throw new Error('Production Unit 1 record was not found')
  const thinkerIds = new Map(thinkers.docs.flatMap((item) => item.slug ? [[item.slug, item.id] as const] : []))
  const topicIds = new Map(topics.docs.flatMap((item) => item.slug ? [[item.slug, item.id] as const] : []))
  const mediaIds = await ensureUnitMedia(payload, summary)
  await payload.update({ collection: 'units', id: unit.id, overrideAccess: true, context: ctx, data: {
    overview: unit01Notebook.overview, overviewHinglish: unit01Notebook.overviewHinglish,
    studySequence: unit01Notebook.studySequence.map((step) => ({ step: step.step, detail: step.detail ?? undefined })),
    studySequenceHinglish: unit01Notebook.studySequenceHinglish as unknown as Record<string, unknown>[], mindMap: unit01Notebook.mindMap as unknown as Record<string, unknown>, mindMapHinglish: unit01Notebook.mindMapHinglish as unknown as Record<string, unknown>,
    infographics: unit01Notebook.infographics.map((item) => ({ title: item.title, titleHinglish: item.titleHinglish, caption: item.caption, captionHinglish: item.captionHinglish, badge: item.badge, badgeHinglish: item.badgeHinglish, image: mediaIds.get(item.assetFile), staticSrc: `/assets/infographics/${item.assetFile}` })),
  } })
  for (const spec of unit01Notebook.topics) {
    const id = topicIds.get(spec.topicSlug)
    if (!id) throw new Error(`Production topic not found: ${spec.topicSlug}`)
    const [english, hinglish] = await Promise.all([buildNotebookLexical(payload, spec.sections, { thinkersBySlug: thinkerIds, mediaByAsset: mediaIds }), buildNotebookLexical(payload, spec.sectionsHinglish, { thinkersBySlug: thinkerIds, mediaByAsset: mediaIds })])
    await payload.update({ collection: 'topics', id, draft: false, overrideAccess: true, context: ctx, data: {
      _status: 'published', reviewStatus: 'approved', summary: spec.summary, summaryHinglish: spec.summaryHinglish, notebookContent: english as never, notebookContentHinglish: hinglish as never, mindMap: spec.mindMap as unknown as Record<string, unknown>, mindMapHinglish: spec.mindMapHinglish as unknown as Record<string, unknown>,
      pyqAnswers: spec.pyqAnswers.map((answer) => ({ year: answer.year, paper: answer.paper, marks: answer.marks, question: answer.question, theme: answer.theme ?? undefined, intro: answer.intro, points: answer.points.map((text) => ({ text })), thinkers: answer.thinkers ?? undefined, example: answer.example ?? undefined, conclusion: answer.conclusion })), pyqAnswersHinglish: spec.pyqAnswersHinglish as unknown as Record<string, unknown>[],
      thinkers: spec.thinkerSlugs.map((slug) => thinkerIds.get(slug)).filter((id): id is number => id !== undefined), relatedTopics: spec.relatedTopicSlugs.map((slug) => topicIds.get(slug)).filter((id): id is number => id !== undefined),
    } })
    summary.unitTopics += 1
  }
  const pyqs = await payload.find({ collection: 'pyqs', where: { unit: { equals: unit.id } }, limit: 100, depth: 0, overrideAccess: true, draft: true })
  for (const pyq of pyqs.docs) {
    const id = topicIds.get(mapPyqToTopic(1, pyq.question) ?? '')
    const current = (pyq.topics ?? []).map((value) => typeof value === 'number' ? value : value.id)
    if (id && (current.length !== 1 || current[0] !== id)) { await payload.update({ collection: 'pyqs', id: pyq.id, draft: false, overrideAccess: true, context: ctx, data: { topics: [id], _status: 'published' } }); summary.pyqLinks += 1 }
  }
}

const handler: Endpoint['handler'] = async (req: PayloadRequest) => {
  if (!hasRole(req.user as { role?: 'admin' } | null, 'admin')) return respond(false, null, 'Admin login required.', 401)
  const parsed = input.safeParse(await req.json?.())
  if (!parsed.success) return respond(false, null, 'Invalid import scope.', 400)
  const summary: ImportSummary = { portraits: 0, media: 0, unitTopics: 0, pyqLinks: 0 }
  try {
    if (parsed.data.scope !== 'unit-1') await upsertPortraits(req.payload, summary)
    if (parsed.data.scope !== 'portraits') await importUnitOne(req.payload, summary)
    return respond(true, summary, null)
  } catch (error) { req.payload.logger.error(`repo content import failed: ${error instanceof Error ? error.message : 'unknown error'}`); return respond(false, null, 'Import failed. Check deployment logs.', 500) }
}

export const repoContentImportEndpoints: Endpoint[] = [{ path: '/admin/import-repo-content', method: 'post', handler }]
