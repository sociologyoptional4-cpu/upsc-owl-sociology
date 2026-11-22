import 'dotenv/config'
import path from 'node:path'
import { getPayload, type Payload } from 'payload'
import config from '@payload-config'

import { ALL_UNIT_NOTEBOOKS, UNIT_NOTEBOOKS_BY_SLUG } from '@/data/notes'
import { buildNotebookLexical } from '@/lib/notes/notebook-builder'
import type { NotebookSection, UnitNotebookSpec } from '@/lib/notes/notebook-types'
import { mapPyqToTopic } from '../pyq/mapping'

function parseTargetUnits(): UnitNotebookSpec[] {
  const args = process.argv.slice(2)
  const unitsArg = process.env.UNITS ?? args.find((a) => a.startsWith('--units='))?.slice('--units='.length)
  if (unitsArg) {
    return unitsArg
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
      .map((slug) => {
        const spec = UNIT_NOTEBOOKS_BY_SLUG[slug]
        if (!spec) throw new Error(`No notebook spec registered for unit "${slug}"`)
        return spec
      })
  }
  const unitArg = process.env.UNIT ?? args.find((a) => a.startsWith('--unit='))?.slice('--unit='.length)
  const slug = unitArg || 'sociology-the-discipline'
  if (slug === 'all') return ALL_UNIT_NOTEBOOKS
  const spec = UNIT_NOTEBOOKS_BY_SLUG[slug]
  if (!spec) throw new Error(`No notebook spec registered for unit "${slug}"`)
  return [spec]
}

const normQ = (q: string): string => q.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().slice(0, 140)

async function ensureMediaAsset(
  payload: Payload,
  assetFile: string,
  alt: string,
  cache: Map<string, number>,
): Promise<number> {
  const cached = cache.get(assetFile)
  if (cached !== undefined) return cached

  const byFilename = await payload.find({
    collection: 'media',
    where: { filename: { equals: assetFile } },
    limit: 1,
    overrideAccess: true,
  })
  if (byFilename.docs[0]) {
    cache.set(assetFile, byFilename.docs[0].id)
    return byFilename.docs[0].id
  }

  const byAlt = await payload.find({
    collection: 'media',
    where: { alt: { equals: alt } },
    limit: 1,
    overrideAccess: true,
  })
  if (byAlt.docs[0]) {
    cache.set(assetFile, byAlt.docs[0].id)
    return byAlt.docs[0].id
  }

  const filePath = path.resolve(process.cwd(), 'public/assets/infographics', assetFile)
  const created = await payload.create({
    collection: 'media',
    data: { alt, license: 'own', credit: 'UPSC OWL Sociology' },
    filePath,
    overwriteExistingFiles: true,
    overrideAccess: true,
  })
  cache.set(assetFile, created.id)
  return created.id
}

function collectAssetRefs(spec: UnitNotebookSpec): Map<string, string> {
  const assets = new Map<string, string>()
  for (const item of spec.infographics) assets.set(item.assetFile, item.alt)
  for (const topic of spec.topics) {
    for (const section of [...topic.sections, ...topic.sectionsHinglish]) {
      if ((section as NotebookSection).kind === 'figure') {
        const fig = section as Extract<NotebookSection, { kind: 'figure' }>
        if (!assets.has(fig.assetFile)) assets.set(fig.assetFile, fig.alt)
      }
    }
  }
  return assets
}

async function syncUnitPyqs(
  payload: Payload,
  spec: UnitNotebookSpec,
  unitDoc: { id: number; number: number },
  topicsBySlug: Map<string, number>,
): Promise<number> {
  const targetTopicByPyq = new Map<string, number>()
  for (const topicSpec of spec.topics) {
    const tId = topicsBySlug.get(topicSpec.topicSlug)
    if (!tId) continue
    for (const ans of topicSpec.pyqAnswers) {
      targetTopicByPyq.set(`${ans.year}:${normQ(ans.question)}`, tId)
    }
  }

  const existing = await payload.find({
    collection: 'pyqs',
    where: { unit: { equals: unitDoc.id } },
    limit: 500,
    depth: 0,
    overrideAccess: true,
    draft: true,
  })

  if (spec.paperCode === 'P1') {
    let fixed = 0
    for (const pyq of existing.docs) {
      const byExact = targetTopicByPyq.get(`${pyq.year}:${normQ(pyq.question)}`)
      const fallbackSlug = mapPyqToTopic(unitDoc.number, pyq.question)
      const targetId = byExact ?? (fallbackSlug ? topicsBySlug.get(fallbackSlug) : undefined)
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

  // P2: idempotently upsert curated PYQs per topic without duplicating existing rows
  const byKey = new Map(existing.docs.map((p) => [`${p.year}:${normQ(p.question)}`, p]))
  let synced = 0
  let seq = 1
  for (const topicSpec of spec.topics) {
    const tId = topicsBySlug.get(topicSpec.topicSlug)
    if (!tId) continue
    for (const ans of topicSpec.pyqAnswers) {
      const key = `${ans.year}:${normQ(ans.question)}`
      const hit = byKey.get(key)
      const qno = `P2-U${String(unitDoc.number).padStart(2, '0')}-${String(seq).padStart(2, '0')}`
      seq += 1
      const data = {
        year: ans.year,
        paper: 'P2' as const,
        qno,
        marks: ans.marks,
        question: ans.question,
        unit: unitDoc.id,
        topics: [tId],
        _status: 'published' as const,
      }
      if (hit) {
        const curIds = (hit.topics ?? []).map((t) => (typeof t === 'number' ? t : t.id))
        if (curIds.length !== 1 || curIds[0] !== tId || hit.marks !== ans.marks) {
          await payload.update({ collection: 'pyqs', id: hit.id, data, overrideAccess: true, draft: false, context: { disableRevalidate: true } })
          synced += 1
        }
      } else {
        await payload.create({ collection: 'pyqs', data, overrideAccess: true, draft: false, context: { disableRevalidate: true } })
        synced += 1
      }
    }
  }
  return synced
}

async function uploadUnit(
  payload: Payload,
  spec: UnitNotebookSpec,
  thinkersBySlug: Map<string, number>,
  topicsBySlug: Map<string, number>,
  mediaByAsset: Map<string, number>,
): Promise<void> {
  const unitsRes = await payload.find({
    collection: 'units',
    where: { slug: { equals: spec.unitSlug } },
    limit: 20,
    depth: 1,
    overrideAccess: true,
  })
  const unitDoc = unitsRes.docs.find((u) => typeof u.paper === 'object' && u.paper?.code === spec.paperCode)
  if (!unitDoc) throw new Error(`Unit not found for ${spec.paperCode}:${spec.unitSlug}`)

  for (const [assetFile, alt] of collectAssetRefs(spec)) {
    await ensureMediaAsset(payload, assetFile, alt, mediaByAsset)
  }

  await payload.update({
    collection: 'units',
    id: unitDoc.id,
    data: {
      overview: spec.overview,
      overviewHinglish: spec.overviewHinglish,
      studySequence: spec.studySequence.map((s) => ({ step: s.step, detail: s.detail ?? undefined })),
      studySequenceHinglish: spec.studySequenceHinglish as unknown as Record<string, unknown>[],
      mindMap: spec.mindMap as unknown as Record<string, unknown>,
      mindMapHinglish: spec.mindMapHinglish as unknown as Record<string, unknown>,
      infographics: spec.infographics.map((item) => ({
        title: item.title,
        titleHinglish: item.titleHinglish,
        caption: item.caption,
        captionHinglish: item.captionHinglish,
        badge: item.badge,
        badgeHinglish: item.badgeHinglish,
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
    const [lexicalEn, lexicalHi] = await Promise.all([
      buildNotebookLexical(payload, topicSpec.sections, { thinkersBySlug, mediaByAsset }),
      buildNotebookLexical(payload, topicSpec.sectionsHinglish, { thinkersBySlug, mediaByAsset }),
    ])
    await payload.update({
      collection: 'topics',
      id: topicId,
      data: {
        _status: 'published',
        reviewStatus: 'approved',
        summary: topicSpec.summary,
        summaryHinglish: topicSpec.summaryHinglish,
        notebookContent: lexicalEn as never,
        notebookContentHinglish: lexicalHi as never,
        mindMap: topicSpec.mindMap as unknown as Record<string, unknown>,
        mindMapHinglish: topicSpec.mindMapHinglish as unknown as Record<string, unknown>,
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
        pyqAnswersHinglish: topicSpec.pyqAnswersHinglish as unknown as Record<string, unknown>[],
        thinkers: topicSpec.thinkerSlugs.map((s) => thinkersBySlug.get(s)).filter((id): id is number => id !== undefined),
        relatedTopics: topicSpec.relatedTopicSlugs.map((s) => topicsBySlug.get(s)).filter((id): id is number => id !== undefined),
      },
      overrideAccess: true,
      draft: false,
      context: { disableRevalidate: true },
    })
  }

  const pyqSync = await syncUnitPyqs(payload, spec, unitDoc, topicsBySlug)
  payload.logger.info(
    `Uploaded bilingual unit "${spec.unitSlug}" (${spec.paperCode}): ${spec.topics.length} topics (EN+HI), ${mediaByAsset.size} cached media, ${pyqSync} PYQ updates.`,
  )
}

const specs = parseTargetUnits()
const payload = await getPayload({ config })
try {
  const [thinkersRes, topicsRes] = await Promise.all([
    payload.find({ collection: 'thinkers', limit: 200, depth: 0, overrideAccess: true, draft: true }),
    payload.find({ collection: 'topics', limit: 500, depth: 0, overrideAccess: true, draft: true }),
  ])
  const thinkersBySlug = new Map(thinkersRes.docs.flatMap((t) => (t.slug ? [[t.slug, t.id] as const] : [])))
  const topicsBySlug = new Map(topicsRes.docs.flatMap((t) => (t.slug ? [[t.slug, t.id] as const] : [])))
  const mediaByAsset = new Map<string, number>()

  for (const spec of specs) {
    await uploadUnit(payload, spec, thinkersBySlug, topicsBySlug, mediaByAsset)
  }
} finally {
  await payload.destroy()
}