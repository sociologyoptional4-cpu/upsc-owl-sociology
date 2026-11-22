import type { Endpoint, PayloadRequest, Where } from 'payload'
import { z } from 'zod'

import { hasRole } from '@/access/roles'
import { ingestBatchSchema, reviewActionSchema, type IngestItem } from '@/lib/ingest/schema'
import { sourceHash } from '@/lib/ingest/hash'
import { markdownToLexical } from '@/lib/ingest/markdownToLexical'
import { createCurrentAffairDraft } from '@/lib/ingest/createDraft'
import { formatDateIST } from '@/lib/data/issue'
import { blogEndpoints } from './blog'
import { smartEndpoints } from './smart'
import { importEndpoints } from './importer'
import { noteOutputSchema, tablesWithinLimits } from '@/pipeline/notes/schema'

const windows = new Map<string, { start: number; count: number }>()
const response = (success: boolean, data: unknown, error: string | null, status = 200) => Response.json({ success, data, error }, { status })
const allowed = (req: PayloadRequest, ...roles: ('admin' | 'editor' | 'ai-bot')[]) => hasRole(req.user as { role?: 'admin' | 'editor' | 'ai-bot' } | null, ...roles)
const limited = (req: PayloadRequest): boolean => {
  const id = req.user?.id ? String(req.user.id) : req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  const now = Date.now()
  const entry = windows.get(id)
  if (!entry || now - entry.start >= 60_000) { windows.set(id, { start: now, count: 1 }); return false }
  entry.count += 1
  return entry.count > 10
}
const fail = (message: string, status = 400) => response(false, null, message, status)

async function ingest(req: PayloadRequest): Promise<Response> {
  if (!allowed(req, 'ai-bot', 'admin')) return fail('Unauthorized', 401)
  if (limited(req)) return fail('Rate limit exceeded', 429)
  const contentLength = Number(req.headers.get('content-length') ?? 0)
  if (contentLength > 1_000_000) return fail('Request body too large', 413)
  if (!req.text) return fail('Request body unavailable', 400)
  const raw = await req.text()
  if (new TextEncoder().encode(raw).byteLength > 1_000_000) return fail('Request body too large', 413)
  let json: unknown
  try { json = JSON.parse(raw) } catch { return fail('Invalid JSON') }
  const parsed = ingestBatchSchema.safeParse(json)
  if (!parsed.success) return fail(parsed.error.issues.map(({ path, message }) => `${path.join('.')}: ${message}`).join('; '))
  const created: number[] = []
  const skipped: { headline: string; reason: string }[] = []
  const settings = await req.payload.findGlobal({ slug: 'site-settings', overrideAccess: true }) as { autoPublish?: boolean; autoPublishMinRelevance?: number }
  for (const item of parsed.data.items) {
    try {
      const hash = sourceHash(item.sources[0]!.url)
      const existing = await req.payload.find({ collection: 'current-affairs', where: { sourceHash: { equals: hash } }, limit: 1, overrideAccess: true })
      if (existing.docs.length) { skipped.push({ headline: item.headline, reason: 'duplicate source' }); continue }
      created.push(await createCurrentAffairDraft(req.payload, item, hash, settings))
    } catch (error) {
      skipped.push({ headline: item.headline, reason: error instanceof Error ? error.message : 'item failed' })
    }
  }
  return response(true, { created, skipped }, null)
}

async function review(req: PayloadRequest): Promise<Response> {
  if (!allowed(req, 'admin', 'editor')) return fail('Unauthorized', 401)
  const id = Number(req.routeParams?.id)
  if (!Number.isSafeInteger(id) || id < 1) return fail('Invalid id')
  let body: unknown
  try { body = req.json ? await req.json() : null } catch { return fail('Invalid JSON') }
  const parsed = reviewActionSchema.safeParse(body)
  if (!parsed.success) return fail(parsed.error.issues.map((issue) => issue.message).join('; '))
  if (parsed.data.kind === 'topic') {
    const existing = await req.payload.findByID({ collection: 'topics', id, overrideAccess: true, draft: true, depth: 0 })
    if (existing.reviewStatus !== 'pending' || !existing.layout?.length) return fail('No pending topic draft found', 409)
    if (parsed.data.action === 'approve') {
      const doc = await req.payload.update({ collection: 'topics', id, draft: false, data: { reviewStatus: 'approved', rejectReason: null, _status: 'published' }, overrideAccess: true })
      return response(true, doc, null)
    }
    const doc = await req.payload.update({ collection: 'topics', id, draft: false, data: { layout: existing.layout?.length ? [] : existing.layout, reviewStatus: 'rejected', rejectReason: parsed.data.reason, _status: 'published' }, overrideAccess: true })
    return response(true, doc, null)
  }
  await req.payload.findByID({ collection: 'current-affairs', id, overrideAccess: true })
  if (parsed.data.action === 'approve') {
    const doc = await req.payload.update({ collection: 'current-affairs', id, data: { reviewStatus: 'approved', rejectReason: null, _status: 'published' }, overrideAccess: true })
    return response(true, doc, null)
  }
  const doc = await req.payload.update({ collection: 'current-affairs', id, data: { reviewStatus: 'rejected', rejectReason: parsed.data.reason, _status: 'draft' }, overrideAccess: true })
  return response(true, doc, null)
}

async function reviewQueue(req: PayloadRequest): Promise<Response> {
  if (!allowed(req, 'admin', 'editor')) return fail('Unauthorized', 401)
  const [result, topicResult] = await Promise.all([
    req.payload.find({ collection: 'current-affairs', where: { reviewStatus: { equals: 'pending' } }, limit: 50, sort: '-aiMeta.relevance,-date', depth: 2, overrideAccess: true }),
    req.payload.find({ collection: 'topics', where: { reviewStatus: { equals: 'pending' } }, limit: 100, sort: 'order', depth: 2, overrideAccess: true, draft: true }),
  ])
  const currentAffairs = result.docs.map((doc) => ({
    kind: 'ca' as const, id: Number(doc.id), headline: doc.headline, date: formatDateIST(String(doc.date)), relevance: doc.aiMeta?.relevance ?? null, summary: doc.summary ?? null,
    sources: doc.sources.map(({ name, url }) => ({ name, url })), topics: (doc.topics ?? []).flatMap((value) => {
      if (typeof value !== 'object') return []
      const unit = typeof value.unit === 'object' ? value.unit : null
      const paper = unit && typeof unit.paper === 'object' ? unit.paper : null
      if (!unit || !paper || (paper.code !== 'P1' && paper.code !== 'P2')) return []
      return [{ title: value.title, slug: value.slug ?? '', href: `/syllabus/${paper.slug}/${unit.slug}/${value.slug}`, paper: paper.code }]
    }), thinkers: (doc.thinkers ?? []).flatMap((value) => typeof value === 'object' ? [{ name: value.name, slug: value.slug ?? '', href: `/thinkers/${value.slug}` }] : []), model: doc.aiMeta?.model ?? null,
    promptVersion: doc.aiMeta?.promptVersion ?? null, createdAt: String(doc.createdAt), previewHref: `/api/preview?collection=current-affairs&id=${doc.id}&secret=${encodeURIComponent(process.env.PREVIEW_SECRET ?? '')}`,
  }))
  const topicDrafts = topicResult.docs.filter((doc) => doc.reviewStatus === 'pending' && Boolean(doc.layout?.length)).map((doc) => {
    const unit = typeof doc.unit === 'object' && doc.unit ? doc.unit : null
    const paper = unit && typeof unit.paper === 'object' && unit.paper ? unit.paper : null
    return { kind: 'topic' as const, id: Number(doc.id), headline: doc.title, date: String(doc.updatedAt ?? doc.createdAt).slice(0, 10), relevance: null, summary: doc.summary ?? null, sources: [], topics: [], thinkers: [], model: doc.aiMeta?.model ?? null, promptVersion: doc.aiMeta?.promptVersion ?? null, createdAt: String(doc.createdAt), previewHref: paper && unit ? `/api/preview?collection=topics&id=${doc.id}&secret=${encodeURIComponent(process.env.PREVIEW_SECRET ?? '')}` : '/syllabus' }
  })
  return response(true, [...currentAffairs, ...topicDrafts].sort((a, b) => b.date.localeCompare(a.date)), null)
}

const noteRequestSchema = z.object({ topicId: z.number().int().positive(), note: noteOutputSchema, model: z.string().min(1).max(120), promptVersion: z.string().min(1).max(80), costUsd: z.number().min(0).max(100) }).strict()

async function nextNoteTopics(req: PayloadRequest): Promise<Response> {
  if (!allowed(req, 'ai-bot', 'admin')) return fail('Unauthorized', 401)
  const limit = Math.min(5, Math.max(1, Number(new URL(req.url ?? '/', 'http://localhost').searchParams.get('limit') ?? 5) || 5))
  const { docs } = await req.payload.find({ collection: 'topics', where: { _status: { equals: 'published' } }, limit: 1000, sort: 'order', depth: 2, overrideAccess: true, draft: true })
  const topics = docs.filter((topic) => {
    const unit = typeof topic.unit === 'object' ? topic.unit : null
    const paper = unit && typeof unit.paper === 'object' ? unit.paper : null
    return Boolean(paper && (paper.code === 'P1' || paper.code === 'P2') && !topic.layout?.length && topic.reviewStatus !== 'pending')
  }).sort((a, b) => {
    const au = typeof a.unit === 'object' ? a.unit : null; const bu = typeof b.unit === 'object' ? b.unit : null
    const ap = au && typeof au.paper === 'object' ? au.paper : null; const bp = bu && typeof bu.paper === 'object' ? bu.paper : null
    return (ap?.code ?? '').localeCompare(bp?.code ?? '') || (au?.order ?? 99) - (bu?.order ?? 99) || (a.order ?? 99) - (b.order ?? 99)
  }).slice(0, limit)
  const data = await Promise.all(topics.map(async (topic) => {
    const unit = typeof topic.unit === 'object' ? topic.unit : null
    const paper = unit && typeof unit.paper === 'object' ? unit.paper : null
    const pyqs = await req.payload.find({ collection: 'pyqs', where: { and: [{ topics: { contains: topic.id } }, { _status: { equals: 'published' } }] }, limit: 50, sort: '-year', depth: 0, overrideAccess: true })
    const thinkers = Array.isArray(topic.thinkers) ? topic.thinkers.filter((thinker): thinker is Exclude<typeof thinker, number> => typeof thinker === 'object' && thinker !== null) : []
    return { id: Number(topic.id), slug: topic.slug ?? '', title: topic.title, unitTitle: unit?.title ?? '', paper: paper?.code as 'P1' | 'P2', pyqs: pyqs.docs.map(({ year, question }) => ({ year, question })), allowedThinkerSlugs: thinkers.flatMap((thinker) => thinker.slug ? [thinker.slug] : []) }
  }))
  return response(true, { topics: data }, null)
}

async function ingestNote(req: PayloadRequest): Promise<Response> {
  if (!allowed(req, 'ai-bot', 'admin')) return fail('Unauthorized', 401)
  if (limited(req)) return fail('Rate limit exceeded', 429)
  if (Number(req.headers.get('content-length') ?? 0) > 1_000_000) return fail('Request body too large', 413)
  const raw = req.text ? await req.text() : ''
  if (new TextEncoder().encode(raw).byteLength > 1_000_000) return fail('Request body too large', 413)
  let json: unknown
  try { json = JSON.parse(raw) } catch { return fail('Invalid JSON') }
  const parsed = noteRequestSchema.safeParse(json)
  if (!parsed.success) return fail(parsed.error.issues.map((issue) => issue.message).join('; '))
  if (!tablesWithinLimits(parsed.data.note.bodyMarkdown)) return fail('Markdown tables exceed the allowed size')
  const topic = await req.payload.findByID({ collection: 'topics', id: parsed.data.topicId, overrideAccess: true, draft: true, depth: 1 })
  if (topic.layout?.length || topic.reviewStatus === 'pending') return fail('Topic already has content awaiting review', 409)
  const unit = typeof topic.unit === 'object' ? topic.unit : null
  if (!unit) return fail('Topic has no unit')
  const [pyqs, settings] = await Promise.all([
    req.payload.find({ collection: 'pyqs', where: { and: [{ topics: { contains: topic.id } }, { _status: { equals: 'published' } }] }, limit: 50, sort: '-year', depth: 0, overrideAccess: true }),
    req.payload.findGlobal({ slug: 'site-settings', overrideAccess: true }) as Promise<{ pipelineEnabled?: boolean; maxDailyUsd?: number }>,
  ])
  const thinkerSlugs = parsed.data.note.thinkerSlugs
  const thinkers = thinkerSlugs.length ? await req.payload.find({ collection: 'thinkers', where: { slug: { in: thinkerSlugs } }, limit: 10, overrideAccess: true, depth: 0 }) : { docs: [] }
  if (!settings.pipelineEnabled) return fail('Pipeline is disabled', 409)
  if (thinkers.docs.length !== parsed.data.note.thinkerSlugs.length) return fail('Unknown thinker slug')
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date())
  const from = new Date(`${today}T00:00:00+05:30`).toISOString()
  const spend = await req.payload.find({ collection: 'pipeline-runs', where: { startedAt: { greater_than_equal: from } }, limit: 100, overrideAccess: true })
  const spent = spend.docs.reduce((sum, run) => sum + (run.costUsd ?? 0), 0)
  if (spent + parsed.data.costUsd > ((settings as { maxDailyUsd?: number }).maxDailyUsd ?? 1)) return fail('Daily budget reached', 429)
  const content = await markdownToLexical(req.payload, parsed.data.note.bodyMarkdown)
  const layout: Record<string, unknown>[] = [
    { blockType: 'summary', heading: 'Ek nazar mein', points: parsed.data.note.points.map((text) => ({ text })) },
    { blockType: 'richText', content },
    { blockType: 'keyTerms', caption: 'Key terms', rows: parsed.data.note.keyTerms },
  ]
  if (pyqs.docs.length) layout.push({ blockType: 'pyqList', heading: 'UPSC mein kab-kab pucha gaya', items: pyqs.docs.map((item) => ({ year: item.year, marks: item.marks, question: item.question })) })
  layout.push({ blockType: 'callout', tone: 'tip', title: 'Answer-writing tip', body: parsed.data.note.answerTip })
  const saved = await req.payload.update({ collection: 'topics', id: topic.id, draft: true, overrideAccess: true, context: { disableRevalidate: true }, data: { summary: parsed.data.note.summary, thinkers: thinkers.docs.map((thinker) => thinker.id), layout: layout as never, reviewStatus: 'pending', rejectReason: null, aiMeta: { model: parsed.data.model, promptVersion: parsed.data.promptVersion, costUsd: parsed.data.costUsd } } })
  return response(true, { id: saved.id, reviewStatus: saved.reviewStatus }, null)
}

async function today(req: PayloadRequest): Promise<Response> {
  if (!allowed(req, 'admin', 'editor')) return fail('Unauthorized', 401)
  const now = new Date()
  const date = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).format(now)
  const nextDate = new Date(`${date}T00:00:00+05:30`)
  nextDate.setDate(nextDate.getDate() + 1)
  const since = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString()
  const [runs, pending, published] = await Promise.all([
    req.payload.find({ collection: 'pipeline-runs', where: { startedAt: { greater_than_equal: since } }, limit: 100, sort: '-startedAt', overrideAccess: true }),
    req.payload.count({ collection: 'current-affairs', where: { reviewStatus: { equals: 'pending' } }, overrideAccess: true }),
    req.payload.count({ collection: 'current-affairs', where: { and: [{ _status: { equals: 'published' } }, { date: { greater_than_equal: `${date}T00:00:00.000Z` } }, { date: { less_than: nextDate.toISOString() } }] }, overrideAccess: true }),
  ])
  const last = runs.docs[0]
  const daily = new Map<string, number>()
  for (const run of runs.docs) {
    const day = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(run.startedAt))
    daily.set(day, (daily.get(day) ?? 0) + (run.costUsd ?? 0))
  }
  return response(true, { lastRun: last ? { startedAt: last.startedAt, finishedAt: last.finishedAt ?? null, status: last.status, counts: last.counts ?? {}, costUsd: last.costUsd ?? 0, errors: last.errors ?? [] } : null, pendingReview: pending.totalDocs, publishedToday: published.totalDocs, costLast7Days: [...daily].sort(([a], [b]) => a.localeCompare(b)).map(([day, usd]) => ({ date: day, usd })) }, null)
}

async function coverage(req: PayloadRequest): Promise<Response> {
  if (!allowed(req, 'admin', 'editor')) return fail('Unauthorized', 401)
  const topics = await req.payload.find({ collection: 'topics', limit: 1000, depth: 2, overrideAccess: true })
  const rows = await Promise.all(topics.docs.map(async (topic) => {
    const unit = typeof topic.unit === 'object' ? topic.unit : null
    const paper = unit && typeof unit.paper === 'object' ? unit.paper : null
    if (!unit || !paper || (paper.slug !== 'paper-1' && paper.slug !== 'paper-2')) return null
    const where: Where = { and: [{ topics: { contains: topic.id } }, { _status: { equals: 'published' } }] }
    const [count, latest] = await Promise.all([
      req.payload.count({ collection: 'current-affairs', where, overrideAccess: true }),
      req.payload.find({ collection: 'current-affairs', where, limit: 1, sort: '-date', depth: 0, overrideAccess: true }),
    ])
    return { paper: paper.slug === 'paper-1' ? 'P1' : 'P2', unitTitle: unit.title, topicTitle: topic.title, topicHref: `/syllabus/${paper.slug}/${unit.slug}/${topic.slug}`, caCount: count.totalDocs, hasNotes: Boolean(topic.layout?.length), lastCaDate: latest.docs[0]?.date ? String(latest.docs[0].date).slice(0, 10) : null }
  }))
  return response(true, rows.filter((row): row is NonNullable<typeof row> => row !== null), null)
}

async function pipelineSources(req: PayloadRequest): Promise<Response> {
  if (!allowed(req, 'admin', 'ai-bot')) return fail('Unauthorized', 401)
  const id = req.routeParams?.id
  if (id) {
    let body: unknown
    try { body = req.json ? await req.json() : null } catch { return fail('Invalid JSON') }
    const parsed = z.object({ lastFetchedAt: z.string().datetime(), lastError: z.string().max(1000).nullable() }).strict().safeParse(body)
    if (!parsed.success) return fail('Invalid source status')
    const updated = await req.payload.update({ collection: 'sources', id: Number(id), data: parsed.data, overrideAccess: true })
    return response(true, updated, null)
  }
  const result = await req.payload.find({ collection: 'sources', where: { active: { equals: true } }, limit: 100, depth: 0, overrideAccess: true })
  return response(true, result, null)
}

async function pipelineSpend(req: PayloadRequest): Promise<Response> {
  if (!allowed(req, 'admin', 'ai-bot')) return fail('Unauthorized', 401)
  const date = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date())
  const from = new Date(`${date}T00:00:00+05:30`).toISOString()
  const to = new Date(new Date(from).getTime() + 24 * 60 * 60 * 1000).toISOString()
  const runs = await req.payload.find({ collection: 'pipeline-runs', where: { and: [{ startedAt: { greater_than_equal: from } }, { startedAt: { less_than: to } }] }, limit: 100, depth: 0, overrideAccess: true })
  return response(true, { costUsd: runs.docs.reduce((sum, run) => sum + (run.costUsd ?? 0), 0) }, null)
}

const endpoint = (path: string, method: Endpoint['method'], handler: Endpoint['handler']): Endpoint => ({ path, method, handler })
export const endpoints: Endpoint[] = [
  ...blogEndpoints,
  ...smartEndpoints,
  ...importEndpoints,
  endpoint('/ingest/batch', 'post', ingest), endpoint('/ingest/notes/next', 'get', nextNoteTopics), endpoint('/ingest/notes', 'post', ingestNote), endpoint('/admin/review-queue', 'get', reviewQueue),
  endpoint('/admin/review/:id', 'post', review), endpoint('/admin/today', 'get', today), endpoint('/admin/coverage', 'get', coverage),
  endpoint('/pipeline/sources', 'get', pipelineSources), endpoint('/pipeline/sources/:id', 'patch', pipelineSources), endpoint('/pipeline/spend', 'get', pipelineSpend),
]
