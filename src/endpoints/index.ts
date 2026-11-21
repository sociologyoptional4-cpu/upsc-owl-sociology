import type { Endpoint, PayloadRequest, Where } from 'payload'
import { z } from 'zod'

import { hasRole } from '@/access/roles'
import { ingestBatchSchema, reviewActionSchema, type IngestItem } from '@/lib/ingest/schema'
import { sourceHash } from '@/lib/ingest/hash'
import { markdownToLexical } from '@/lib/ingest/markdownToLexical'
import { formatDateIST } from '@/lib/data/issue'

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

function toLayout(item: IngestItem, req: PayloadRequest): Promise<Record<string, unknown>[]> {
  return Promise.all(item.layout.map(async (block) => {
    if (block.blockType !== 'richText') return block as Record<string, unknown>
    const { markdown, ...rest } = block
    return { ...rest, content: await markdownToLexical(req.payload, markdown) }
  }))
}

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
      const [topics, thinkers] = await Promise.all([
        req.payload.find({ collection: 'topics', where: { slug: { in: item.topicSlugs } }, limit: 100, depth: 0, overrideAccess: true }),
        req.payload.find({ collection: 'thinkers', where: { slug: { in: item.thinkerSlugs } }, limit: 100, depth: 0, overrideAccess: true }),
      ])
      if (topics.docs.length !== new Set(item.topicSlugs).size || thinkers.docs.length !== new Set(item.thinkerSlugs).size) throw new Error('unknown topic or thinker slug')
      const layout = await toLayout(item, req)
      const publish = settings.autoPublish === true && item.relevance >= (settings.autoPublishMinRelevance ?? 0.8)
      const doc = await req.payload.create({ collection: 'current-affairs', draft: !publish, context: { ingestValidated: true }, data: {
        headline: item.headline, date: `${item.date}T00:00:00.000Z`, paper: item.paper, topics: topics.docs.map((topic) => topic.id),
        thinkers: thinkers.docs.map((thinker) => thinker.id), sources: item.sources, summary: item.summary, layout: layout as never,
        isAiGenerated: true, reviewStatus: 'pending', sourceHash: hash, embedding: item.embedding,
        aiMeta: { model: item.model, promptVersion: item.promptVersion, relevance: item.relevance, costUsd: item.costUsd }, _status: publish ? 'published' : 'draft',
      } })
      created.push(Number(doc.id))
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
  const result = await req.payload.find({ collection: 'current-affairs', where: { reviewStatus: { equals: 'pending' } }, limit: 50, sort: '-aiMeta.relevance,-date', depth: 2, overrideAccess: true })
  const data = result.docs.map((doc) => ({
    id: Number(doc.id), headline: doc.headline, date: formatDateIST(String(doc.date)), relevance: doc.aiMeta?.relevance ?? null, summary: doc.summary ?? null,
    sources: doc.sources.map(({ name, url }) => ({ name, url })), topics: (doc.topics ?? []).flatMap((value) => {
      if (typeof value !== 'object') return []
      const unit = typeof value.unit === 'object' ? value.unit : null
      const paper = unit && typeof unit.paper === 'object' ? unit.paper : null
      if (!unit || !paper || (paper.code !== 'P1' && paper.code !== 'P2')) return []
      return [{ title: value.title, slug: value.slug ?? '', href: `/syllabus/${paper.slug}/${unit.slug}/${value.slug}`, paper: paper.code }]
    }), thinkers: (doc.thinkers ?? []).flatMap((value) => typeof value === 'object' ? [{ name: value.name, slug: value.slug ?? '', href: `/thinkers/${value.slug}` }] : []), model: doc.aiMeta?.model ?? null,
    promptVersion: doc.aiMeta?.promptVersion ?? null, createdAt: String(doc.createdAt), previewHref: `/api/preview?collection=current-affairs&id=${doc.id}&secret=${encodeURIComponent(process.env.PREVIEW_SECRET ?? '')}`,
  }))
  return response(true, data, null)
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
  endpoint('/ingest/batch', 'post', ingest), endpoint('/admin/review-queue', 'get', reviewQueue),
  endpoint('/admin/review/:id', 'post', review), endpoint('/admin/today', 'get', today), endpoint('/admin/coverage', 'get', coverage),
  endpoint('/pipeline/sources', 'get', pipelineSources), endpoint('/pipeline/sources/:id', 'patch', pipelineSources), endpoint('/pipeline/spend', 'get', pipelineSpend),
]
