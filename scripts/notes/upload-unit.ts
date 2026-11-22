import 'dotenv/config'
import path from 'node:path'
import { getPayload, type Payload } from 'payload'
import config from '@payload-config'

import { unit01Notebook } from '@/data/notes/unit-01'
import { buildNotebookLexical } from '@/lib/notes/notebook-builder'
import type { NotebookSection, UnitNotebookSpec } from '@/lib/notes/notebook-types'
import { mapPyqToTopic } from '../pyq/mapping'

const UNIT_SPECS: Record<string, UnitNotebookSpec> = {
  'sociology-the-discipline': unit01Notebook,
}

function parseUnitSlug(): string {
  const flag = process.argv.slice(2).find((arg) => arg.startsWith('--unit='))
  return flag ? flag.slice('--unit='.length) : 'sociology-the-discipline'
}

async function ensureMediaAsset(
  payload: Payload,
  assetFile: string,
  alt: string,
  cache: Map<string, number>,
): Promise<number> {
  const cached = cache.get(assetFile)
  if (cached !== undefined) return cached

  const existing = await payload.find({
    collection: 'media',
    where: { alt: { equals: alt } },
    limit: 1,
    overrideAccess: true,
  })
  if (existing.docs[0]) {
    cache.set(assetFile, existing.docs[0].id)
    return existing.docs[0].id
  }

  const filePath = path.resolve(process.cwd(), 'public/assets/infographics', assetFile)
  const created = await payload.create({
    collection: 'media',
    data: { alt, license: 'own', credit: 'UPSC OWL Sociology' },
    filePath,
    overrideAccess: true,
  })
  cache.set(assetFile, created.id)
  return created.id
}

function collectAssetRefs(spec: UnitNotebookSpec): Map<string, string> {
  const assets = new Map<string, string>()
  for (const item of spec.infographics) assets.set(item.assetFile, item.alt)
  for (const topic of spec.topics) {
    for (const section of topic.sections) {
      if ((section as NotebookSection).kind === 'figure') {
        const fig = section as Extract<NotebookSection, { kind: 'figure' }>
        if (!assets.has(fig.assetFile)) assets.set(fig.assetFile, fig.alt)
      }
    }
  }
  return assets
}

async function fixUnit1MappedPyqs(
  payload: Payload,
  unitId: number,
  topicsBySlug: Map<string, number>,
): Promise<number> {
  const pyqs = await payload.find({
    collection: 'pyqs',
    where: { unit: { equals: unitId } },
    limit: 100,
    depth: 0,
    overrideAccess: true,
    draft: true,
  })
  let fixed = 0
  for (const pyq of pyqs.docs) {
    const targetSlug = mapPyqToTopic(1, pyq.question)
    const targetId = targetSlug ? topicsBySlug.get(targetSlug) : undefined
    const currentIds = (pyq.topics ?? []).map((t) => (typeof t === 'number' ? t : t.id))
    if (targetId && (currentIds.length !== 1 || currentIds[0] !== targetId)) {
      await payload.update({
        collection: 'pyqs',
        id: pyq.id,
        data: { topics: [targetId], _status: 'published' },
        overrideAccess: true,
        draft: false,
        context: { disableRevalidate: true },
      })
      fixed += 1
    }
  }
  return fixed
}

async function uploadUnit(payload: Payload, spec: UnitNotebookSpec): Promise<void> {
  const [unitsRes, thinkersRes, topicsRes] = await Promise.all([
    payload.find({ collection: 'units', where: { slug: { equals: spec.unitSlug } }, limit: 20, depth: 1, overrideAccess: true }),
    payload.find({ collection: 'thinkers', limit: 200, depth: 0, overrideAccess: true, draft: true }),
    payload.find({ collection: 'topics', limit: 500, depth: 0, overrideAccess: true, draft: true }),
  ])

  const unitDoc = unitsRes.docs.find((u) => typeof u.paper === 'object' && u.paper?.code === spec.paperCode)
  if (!unitDoc) throw new Error(`Unit not found for ${spec.paperCode}:${spec.unitSlug}`)

  const thinkersBySlug = new Map(thinkersRes.docs.flatMap((t) => (t.slug ? [[t.slug, t.id] as const] : [])))
  const topicsBySlug = new Map(topicsRes.docs.flatMap((t) => (t.slug ? [[t.slug, t.id] as const] : [])))
  const mediaByAsset = new Map<string, number>()

  for (const [assetFile, alt] of collectAssetRefs(spec)) {
    await ensureMediaAsset(payload, assetFile, alt, mediaByAsset)
  }

  await payload.update({
    collection: 'units',
    id: unitDoc.id,
    data: {
      overview: spec.overview,
      studySequence: spec.studySequence.map((s) => ({ step: s.step, detail: s.detail ?? undefined })),
      mindMap: spec.mindMap as unknown as Record<string, unknown>,
      infographics: spec.infographics.map((item) => ({
        title: item.title,
        caption: item.caption,
        badge: item.badge,
        image: mediaByAsset.get(item.assetFile) ?? undefined,
        staticSrc: `/assets/infographics/${item.assetFile}`,
      })),
    },
    overrideAccess: true,
    context: { disableRevalidate: true },
  })

  for (const topicSpec of spec.topics) {
    const topicId = topicsBySlug.get(topicSpec.topicSlug)
    if (!topicId) throw new Error(`Topic not found: ${topicSpec.topicSlug}`)
    const lexical = await buildNotebookLexical(payload, topicSpec.sections, { thinkersBySlug, mediaByAsset })
    await payload.update({
      collection: 'topics',
      id: topicId,
      data: {
        _status: 'published',
        reviewStatus: 'approved',
        summary: topicSpec.summary,
        notebookContent: lexical as never,
        mindMap: topicSpec.mindMap as unknown as Record<string, unknown>,
        pyqAnswers: topicSpec.pyqAnswers.map((ans) => ({
          year: ans.year,
          paper: ans.paper,
          marks: ans.marks,
          question: ans.question,
          theme: ans.theme ?? undefined,
          intro: ans.intro,
          points: ans.points.map((text) => ({ text })),
          thinkers: ans.thinkers ?? undefined,
          example: ans.example ?? undefined,
          conclusion: ans.conclusion,
        })),
        thinkers: topicSpec.thinkerSlugs.map((s) => thinkersBySlug.get(s)).filter((id): id is number => id !== undefined),
        relatedTopics: topicSpec.relatedTopicSlugs.map((s) => topicsBySlug.get(s)).filter((id): id is number => id !== undefined),
      },
      overrideAccess: true,
      draft: false,
      context: { disableRevalidate: true },
    })
  }

  const fixedPyqs = spec.paperCode === 'P1' && unitDoc.number === 1 ? await fixUnit1MappedPyqs(payload, unitDoc.id, topicsBySlug) : 0
  payload.logger.info(`Uploaded unit "${spec.unitSlug}": ${spec.topics.length} topics, ${mediaByAsset.size} media assets, ${fixedPyqs} PYQ topic fixes.`)
}

const unitSlug = parseUnitSlug()
const spec = UNIT_SPECS[unitSlug]
if (!spec) {
  console.error(`No notebook spec registered for unit "${unitSlug}"`)
  process.exit(1)
}

const payload = await getPayload({ config })
try {
  await uploadUnit(payload, spec)
} finally {
  await payload.destroy()
}
