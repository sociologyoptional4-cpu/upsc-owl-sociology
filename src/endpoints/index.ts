import type { Endpoint, PayloadRequest, Where } from 'payload'
import { z } from 'zod'

import { hasTopicNotes } from '@/lib/notes/has-topic-notes'
import { hasRole } from '@/access/roles'
import { countPendingReview, countQueuedBlogJobs } from '@/lib/admin/review-helpers'
import { bulkReviewSchema, ingestBatchSchema, reviewActionSchema } from '@/lib/ingest/schema'
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

type ReviewInput = z.infer<typeof reviewActionSchema>

async function applyReviewAction(req: PayloadRequest, id: number, input: ReviewInput): Promise<{ doc?: unknown; error?: string; status?: number }> {
  if (input.kind === 'topic') {
    const existing = await req.payload.findByID({ collection: 'topics', id, overrideAccess: true, draft: true, depth: 0 })
    if (input.action === 'reopen') {
      if (existing.reviewStatus !== 'rejected' || !existing.layout?.length) return { error: 'Rejected topic note ka layout clear ho chuka hai; pipeline dubara draft banayega', status: 409 }
      const doc = await req.payload.update({ collection: 'topics', id, draft: true, data: { reviewStatus: 'pending', rejectReason: null }, overrideAccess: true })
      return { doc }
    }
    if (existing.reviewStatus !== 'pending' || existing._status !== 'draft' || !existing.layout?.length) return { error: 'No pending topic draft found', status: 409 }
    const data = input.action === 'approve'
      ? { reviewStatus: 'approved' as const, rejectReason: null, _status: 'published' as const }
      : { layout: [], reviewStatus: 'rejected' as const, rejectReason: input.reason, _status: 'published' as const }
    const doc = await req.payload.update({ collection: 'topics', id, draft: false, data, overrideAccess: true })
    return { doc }
  }
  const existing = await req.payload.findByID({ collection: 'current-affairs', id, overrideAccess: true, draft: true })
  if (input.action === 'reopen') {
    if (existing._status !== 'draft' || existing.reviewStatus !== 'rejected') return { error: 'No rejected current-affairs draft found', status: 409 }
    const doc = await req.payload.update({ collection: 'current-affairs', id, draft: true, data: { reviewStatus: 'pending', rejectReason: null, _status: 'draft' }, overrideAccess: true })
    return { doc }
  }
  const canApprove = existing._status === 'draft' && (existing.reviewStatus === 'pending' || existing.reviewStatus === 'rejected')
  const canReject = existing._status === 'draft' && existing.reviewStatus === 'pending'
  if (input.action === 'approve' && !canApprove) return { error: 'No pending current-affairs draft found', status: 409 }
  if (input.action === 'reject' && !canReject) return { error: 'No pending current-affairs draft found', status: 409 }
  const doc = input.action === 'approve'
    ? await req.payload.update({ collection: 'current-affairs', id, draft: false, data: { reviewStatus: 'approved', rejectReason: null, _status: 'published' }, overrideAccess: true })
    : await req.payload.update({ collection: 'current-affairs', id, draft: true, data: { reviewStatus: 'rejected', rejectReason: input.reason, _status: 'draft' }, overrideAccess: true })
  return { doc }
}

async function review(req: PayloadRequest): Promise<Response> {
  if (!allowed(req, 'admin', 'editor')) return fail('Unauthorized', 401)
  const id = Number(req.routeParams?.id)
  if (!Number.isSafeInteger(id) || id < 1) return fail('Invalid id')
  let body: unknown
  try { body = req.json ? await req.json() : null } catch { return fail('Invalid JSON') }
  const parsed = reviewActionSchema.safeParse(body)
  if (!parsed.success) return fail(parsed.error.issues.map((issue) => issue.message).join('; '))
  try {
    const result = await applyReviewAction(req, id, parsed.data)
    if (result.error) return fail(result.error, result.status ?? 409)
    return response(true, result.doc, null)
  } catch (error) {
    req.payload.logger?.error(`Review action failed for item ${id}: ${error instanceof Error ? error.message : 'unknown error'}`)
    return fail('Publish nahi ho paya. Dobara try karo; agar phir bhi error aaye to admin ko batayein.', 500)
  }
}

async function bulkReview(req: PayloadRequest): Promise<Response> {
  if (!allowed(req, 'admin', 'editor')) return fail('Unauthorized', 401)
  let body: unknown
  try { body = req.json ? await req.json() : null } catch { return fail('Invalid JSON') }
  const parsed = bulkReviewSchema.safeParse(body)
  if (!parsed.success) return fail(parsed.error.issues.map((issue) => issue.message).join('; '))
  const approved: { id: number; kind: 'ca' | 'topic' }[] = []
  const failed: { id: number; kind: 'ca' | 'topic'; error: string }[] = []
  for (const item of parsed.data.items) {
    try {
      const res = await applyReviewAction(req, item.id, { action: parsed.data.action, kind: item.kind })
      if (res.error) failed.push({ ...item, error: res.error })
      else approved.push(item)
    } catch (error) {
      failed.push({ ...item, error: error instanceof Error ? error.message : 'Action failed' })
    }
  }
  return response(true, { approved, failed }, null)
}

type QueueStatus = 'pending' | 'rejected' | 'approved'

function parseQueueStatus(url: string | undefined): QueueStatus {
  const status = url ? new URL(url, 'http://localhost').searchParams.get('status') : null
  return status === 'rejected' || status === 'approved' ? status : 'pending'
}

function mapCaQueueDoc(doc: Record<string, unknown>, status: QueueStatus) {
  const date = formatDateIST(String(doc.date))
  const topics = Array.isArray(doc.topics) ? doc.topics : []
  const thinkers = Array.isArray(doc.thinkers) ? doc.thinkers : []
  const sources = Array.isArray(doc.sources) ? doc.sources : []
  const aiMeta = (typeof doc.aiMeta === 'object' && doc.aiMeta ? doc.aiMeta : {}) as Record<string, unknown>
  return {
    kind: 'ca' as const,
    id: Number(doc.id),
    headline: String(doc.headline ?? ''),
    date,
    relevance: typeof aiMeta.relevance === 'number' ? aiMeta.relevance : null,
    summary: typeof doc.summary === 'string' ? doc.summary : null,
    sources: sources.map((s) => ({ name: String((s as { name?: string }).name ?? ''), url: String((s as { url?: string }).url ?? '') })),
    topics: topics.flatMap((value) => {
      if (typeof value !== 'object' || !value) return []
      const t = value as { title?: string; slug?: string; unit?: unknown }
      const unit = typeof t.unit === 'object' && t.unit ? (t.unit as { slug?: string; paper?: unknown }) : null
      const paper = unit && typeof unit.paper === 'object' && unit.paper ? (unit.paper as { slug?: string; code?: string }) : null
      if (!unit || !paper || (paper.code !== 'P1' && paper.code !== 'P2')) return []
      return [{ title: t.title ?? '', slug: t.slug ?? '', href: `/syllabus/${paper.slug}/${unit.slug}/${t.slug}`, paper: paper.code }]
    }),
    thinkers: thinkers.flatMap((value) => {
      if (typeof value !== 'object' || !value) return []
      const th = value as { name?: string; slug?: string }
      return [{ name: th.name ?? '', slug: th.slug ?? '', href: `/thinkers/${th.slug}` }]
    }),
    model: typeof aiMeta.model === 'string' ? aiMeta.model : null,
    promptVersion: typeof aiMeta.promptVersion === 'string' ? aiMeta.promptVersion : null,
    createdAt: String(doc.createdAt ?? ''),
    previewHref: `/api/preview?collection=current-affairs&id=${doc.id}`,
    reviewStatus: (doc.reviewStatus as QueueStatus | undefined) ?? status,
    rejectReason: typeof doc.rejectReason === 'string' ? doc.rejectReason : null,
    liveHref: status === 'approved' && doc.slug ? `/current-affairs/${date}/${String(doc.slug)}` : null,
  }
}

async function reviewQueue(req: PayloadRequest): Promise<Response> {
  if (!allowed(req, 'admin', 'editor')) return fail('Unauthorized', 401)
  const status = parseQueueStatus(req.url)
  const caWhere: Where = status === 'pending'
    ? { and: [{ reviewStatus: { equals: 'pending' } }, { _status: { equals: 'draft' } }] }
    : status === 'rejected'
      ? { reviewStatus: { equals: 'rejected' } }
      : { and: [{ reviewStatus: { equals: 'approved' } }, { _status: { equals: 'published' } }] }
  const topicWhere: Where = status === 'pending'
    ? { and: [{ reviewStatus: { equals: 'pending' } }, { _status: { equals: 'draft' } }] }
    : { reviewStatus: { equals: 'rejected' } }

  const [result, topicResult] = await Promise.all([
    req.payload.find({
      collection: 'current-affairs',
      where: caWhere,
      limit: status === 'approved' ? 25 : 50,
      sort: status === 'approved' ? '-updatedAt' : '-aiMeta.relevance,-date',
      depth: 2,
      overrideAccess: true,
      draft: status !== 'approved',
    }),
    status === 'approved'
      ? Promise.resolve({ docs: [] })
      : req.payload.find({ collection: 'topics', where: topicWhere, limit: 100, sort: 'order', depth: 2, overrideAccess: true, draft: true }),
  ])

  const currentAffairs = result.docs.map((doc) => mapCaQueueDoc(doc as unknown as Record<string, unknown>, status))
  const topicDrafts = topicResult.docs
    .filter((doc) => (status === 'pending' ? doc.reviewStatus === 'pending' && Boolean(doc.layout?.length) : doc.reviewStatus === 'rejected'))
    .map((doc) => {
      const unit = typeof doc.unit === 'object' && doc.unit ? doc.unit : null
      const paper = unit && typeof unit.paper === 'object' && unit.paper ? unit.paper : null
      return {
        kind: 'topic' as const, id: Number(doc.id), headline: doc.title, date: String(doc.updatedAt ?? doc.createdAt).slice(0, 10),
        relevance: null, summary: doc.summary ?? null, sources: [], topics: [], thinkers: [],
        model: doc.aiMeta?.model ?? null, promptVersion: doc.aiMeta?.promptVersion ?? null, createdAt: String(doc.createdAt),
        previewHref: paper && unit ? `/api/preview?collection=topics&id=${doc.id}` : '/syllabus',
        reviewStatus: (doc.reviewStatus as QueueStatus | undefined) ?? status,
        rejectReason: doc.rejectReason ?? null,
        liveHref: null,
      }
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
    return Boolean(paper && (paper.code === 'P1' || paper.code === 'P2') && !hasTopicNotes(topic) && topic.reviewStatus !== 'pending')
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
  if (hasTopicNotes(topic) || topic.reviewStatus === 'pending') return fail('Topic already has content awaiting review', 409)
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
  const [runs, pending, published, queuedBlogJobs] = await Promise.all([
    req.payload.find({ collection: 'pipeline-runs', where: { startedAt: { greater_than_equal: since } }, limit: 100, sort: '-startedAt', overrideAccess: true }),
    countPendingReview(req.payload),
    req.payload.count({ collection: 'current-affairs', where: { and: [{ _status: { equals: 'published' } }, { date: { greater_than_equal: `${date}T00:00:00+05:30` } }, { date: { less_than: nextDate.toISOString() } }] }, overrideAccess: true }),
    countQueuedBlogJobs(req.payload),
  ])
  const last = runs.docs[0]
  const daily = new Map<string, number>()
  for (const run of runs.docs) {
    const day = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(run.startedAt))
    daily.set(day, (daily.get(day) ?? 0) + (run.costUsd ?? 0))
  }
  return response(true, { lastRun: last ? { startedAt: last.startedAt, finishedAt: last.finishedAt ?? null, status: last.status, counts: last.counts ?? {}, costUsd: last.costUsd ?? 0, errors: last.errors ?? [] } : null, pendingReview: pending.total, publishedToday: published.totalDocs, queuedBlogJobs, costLast7Days: [...daily].sort(([a], [b]) => a.localeCompare(b)).map(([day, usd]) => ({ date: day, usd })) }, null)
}

async function coverage(req: PayloadRequest): Promise<Response> {
  if (!allowed(req, 'admin', 'editor')) return fail('Unauthorized', 401)
  const [topics, caDocs] = await Promise.all([
    req.payload.find({
      collection: 'topics',
      limit: 1000,
      depth: 2,
      select: { title: true, slug: true, unit: true, layout: true, notebookContent: true, notebookContentHinglish: true },
      overrideAccess: true,
    }),
    req.payload.find({
      collection: 'current-affairs',
      where: { _status: { equals: 'published' } },
      limit: 2000,
      sort: '-date',
      depth: 0,
      select: { topics: true, date: true },
      overrideAccess: true,
    }),
  ])
  const caStats = new Map<number, { count: number; lastDate: string | null }>()
  for (const doc of caDocs.docs) {
    const day = doc.date ? formatDateIST(String(doc.date)) : null
    for (const rel of doc.topics ?? []) {
      const id = typeof rel === 'number' ? rel : rel.id
      const prev = caStats.get(id)
      if (!prev) caStats.set(id, { count: 1, lastDate: day })
      else caStats.set(id, { count: prev.count + 1, lastDate: prev.lastDate ?? day })
    }
  }
  const rows = topics.docs.flatMap((topic) => {
    const unit = typeof topic.unit === 'object' ? topic.unit : null
    const paper = unit && typeof unit.paper === 'object' ? unit.paper : null
    if (!unit || !paper || (paper.slug !== 'paper-1' && paper.slug !== 'paper-2')) return []
    const stat = caStats.get(topic.id) ?? { count: 0, lastDate: null }
    return [{
      paper: paper.slug === 'paper-1' ? 'P1' : 'P2',
      unitTitle: unit.title,
      topicTitle: topic.title,
      topicHref: `/syllabus/${paper.slug}/${unit.slug}/${topic.slug}`,
      caCount: stat.count,
      hasNotes: hasTopicNotes(topic),
      lastCaDate: stat.lastDate,
    }]
  })
  return response(true, rows, null)
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
  endpoint('/admin/review/bulk', 'post', bulkReview), endpoint('/admin/review/:id', 'post', review), endpoint('/admin/today', 'get', today), endpoint('/admin/coverage', 'get', coverage),
  endpoint('/pipeline/sources', 'get', pipelineSources), endpoint('/pipeline/sources/:id', 'patch', pipelineSources), endpoint('/pipeline/spend', 'get', pipelineSpend),
]
