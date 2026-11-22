import type { Endpoint, Payload, PayloadRequest } from 'payload'
import { z } from 'zod'

import { hasRole, type Role } from '@/access/roles'
import { beautifyPost } from '@/lib/blog/beautify'
import { enrichPost } from '@/lib/blog/enrich'
import { attachImages } from '@/lib/blog/images'
import { insertLink, makeBlockNode } from '@/lib/blog/markdown'
import { organizePost } from '@/lib/blog/organize'
import type { LexNode } from '@/lib/blog/text'
import { slugify } from '@/lib/slug'

const windows = new Map<string, { start: number; count: number }>()
const respond = (success: boolean, data: unknown, error: string | null, status = 200) => Response.json({ success, data, error }, { status })
const limited = (req: PayloadRequest): boolean => {
  const id = String(req.user?.id ?? 'anon')
  const now = Date.now()
  const entry = windows.get(id)
  if (!entry || now - entry.start >= 60_000) { windows.set(id, { start: now, count: 1 }); return false }
  entry.count += 1
  return entry.count > 10
}

async function readBody(req: PayloadRequest): Promise<unknown | Response> {
  if (Number(req.headers.get('content-length') ?? 0) > 1_000_000) return respond(false, null, 'Request body too large', 413)
  if (!req.text) return respond(false, null, 'Request body unavailable', 400)
  const raw = await req.text()
  if (new TextEncoder().encode(raw).byteLength > 1_000_000) return respond(false, null, 'Request body too large', 413)
  try { return JSON.parse(raw) } catch { return respond(false, null, 'Invalid JSON', 400) }
}

function guarded<T extends z.ZodType>(schema: T, run: (req: PayloadRequest, input: z.infer<T>) => Promise<Response>): Endpoint['handler'] {
  return async (req) => {
    if (!hasRole(req.user as { role?: Role } | null, 'admin', 'editor')) return respond(false, null, 'Unauthorized', 401)
    if (limited(req)) return respond(false, null, 'Rate limit exceeded', 429)
    const body = await readBody(req)
    if (body instanceof Response) return body
    const parsed = schema.safeParse(body)
    if (!parsed.success) return respond(false, null, parsed.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; '), 400)
    try { return await run(req, parsed.data) } catch (error) { return respond(false, null, error instanceof Error ? error.message : 'Request failed', 500) }
  }
}

const postSchema = z.object({ postId: z.number().int().positive() })
const applySchema = postSchema.extend({
  kind: z.enum(['link', 'faq', 'tag', 'telegram']),
  index: z.number().int().min(0).max(20).optional(),
})

type Suggestions = {
  newTags?: string[]; internalLinks?: { anchorText: string; href: string }[]; faq?: { question: string; answer: string }[]
  social?: { telegram?: string }; accepted?: AcceptedSuggestions; acceptedTelegram?: boolean
}
type AcceptedSuggestions = { tags?: number[]; links?: number[]; faq?: number[]; telegram?: boolean }

function applyAllLinks(content: { root: LexNode }, links: Suggestions['internalLinks'], accepted: AcceptedSuggestions): { content: { root: LexNode }; done: number[] } {
  const done: number[] = []
  for (const [index, link] of (links ?? []).entries()) {
    if (accepted.links?.includes(index)) continue
    if (insertLink(content, link.anchorText, link.href)) done.push(index)
  }
  return { content, done }
}

function applyAllFaq(current: { question: string; answer: string }[], faq: Suggestions['faq'], accepted: AcceptedSuggestions): { items: { question: string; answer: string }[]; done: number[] } {
  const items = [...current]
  const done: number[] = []
  for (const [index, item] of (faq ?? []).entries()) {
    if (accepted.faq?.includes(index)) continue
    const duplicate = items.some((existing) => existing.question === item.question && existing.answer === item.answer)
    if (duplicate || items.length < 8) {
      if (!duplicate) items.push(item)
      done.push(index)
    }
  }
  return { items, done }
}

async function applyAllTags(payload: Payload, current: (number | { id: number })[], tags: string[], accepted: AcceptedSuggestions): Promise<{ ids: number[]; done: number[] }> {
  const ids = current.map((tag) => typeof tag === 'number' ? tag : tag.id)
  const done: number[] = []
  for (const [index, title] of tags.entries()) {
    if (accepted.tags?.includes(index) || ids.length >= 8) continue
    const slug = slugify(title)
    if (!slug) continue
    const found = await payload.find({ collection: 'blog-tags', where: { slug: { equals: slug } }, limit: 1, depth: 0, overrideAccess: true })
    const tag = found.docs[0] ?? await payload.create({ collection: 'blog-tags', data: { title }, overrideAccess: true })
    if (!ids.includes(tag.id)) ids.push(tag.id)
    done.push(index)
  }
  return { ids, done }
}

async function applyAll(req: PayloadRequest, input: z.infer<typeof postSchema>): Promise<Response> {
  const doc = await req.payload.findByID({ collection: 'posts', id: input.postId, draft: true, depth: 0, overrideAccess: true })
  const suggestions = (doc.aiSuggestions ?? {}) as Suggestions
  const accepted: AcceptedSuggestions = { ...(suggestions.accepted ?? {}) }
  const data: Record<string, unknown> = {}
  const source = doc.content ?? { root: { type: 'root', children: [] } }
  const links = applyAllLinks(structuredClone(source) as { root: LexNode }, suggestions.internalLinks, accepted)
  const faqs = applyAllFaq(doc.faq ?? [], suggestions.faq, accepted)
  const tags = await applyAllTags(req.payload, (doc.tags ?? []) as (number | { id: number })[], suggestions.newTags ?? [], accepted)
  if (links.done.length) { data.content = links.content; accepted.links = [...new Set([...(accepted.links ?? []), ...links.done])] }
  if (faqs.done.length) { data.faq = faqs.items; accepted.faq = [...new Set([...(accepted.faq ?? []), ...faqs.done])] }
  if (tags.done.length) { data.tags = tags.ids; accepted.tags = [...new Set([...(accepted.tags ?? []), ...tags.done])] }
  if (suggestions.social?.telegram) accepted.telegram = true
  data.aiSuggestions = { ...suggestions, accepted, acceptedTelegram: accepted.telegram ?? false }
  await req.payload.update({ collection: 'posts', id: input.postId, data, draft: true, overrideAccess: true, context: { skipBlogOrganize: true, disableRevalidate: true, skipExternal: true } })
  return respond(true, { links: links.done.length, faq: faqs.done.length, tags: tags.done.length }, null)
}

async function apply(req: PayloadRequest, input: z.infer<typeof applySchema>): Promise<Response> {
  const payload = req.payload
  const doc = await payload.findByID({ collection: 'posts', id: input.postId, draft: true, depth: 0, overrideAccess: true })
  const suggestions = (doc.aiSuggestions ?? {}) as Suggestions
  const accepted = { ...(suggestions.accepted ?? {}) } as Record<string, number[] | boolean>
  const data: Record<string, unknown> = {}
  const index = input.index ?? 0
  const mark = (key: string) => { accepted[key] = [...new Set([...((accepted[key] as number[] | undefined) ?? []), index])] }

  if (input.kind === 'link') {
    const link = suggestions.internalLinks?.[index]
    if (!link) return respond(false, null, 'Suggestion not found', 404)
    const content = structuredClone(doc.content) as { root: LexNode }
    if (!insertLink(content, link.anchorText, link.href)) return respond(false, null, 'Anchor text ab post mein plain text ke roop mein nahi mila', 409)
    data.content = content
    mark('links')
  } else if (input.kind === 'faq') {
    const item = suggestions.faq?.[index]
    if (!item) return respond(false, null, 'Suggestion not found', 404)
    data.faq = [...(doc.faq ?? []).map(({ question, answer }) => ({ question, answer })), item].slice(0, 8)
    mark('faq')
  } else if (input.kind === 'tag') {
    const title = suggestions.newTags?.[index]
    if (!title) return respond(false, null, 'Suggestion not found', 404)
    const existing = await payload.find({ collection: 'blog-tags', where: { slug: { equals: slugify(title) } }, limit: 1, depth: 0, overrideAccess: true })
    const tag = existing.docs[0] ?? (await payload.create({ collection: 'blog-tags', data: { title }, overrideAccess: true }))
    const current = (doc.tags ?? []).map((t) => (typeof t === 'number' ? t : t.id))
    data.tags = [...new Set([...current, tag.id])].slice(0, 8)
    mark('tags')
  } else {
    accepted.telegram = true
    data.aiSuggestions = { ...suggestions, accepted, acceptedTelegram: true }
  }
  if (!data.aiSuggestions) data.aiSuggestions = { ...suggestions, accepted }
  await payload.update({ collection: 'posts', id: input.postId, data, draft: true, overrideAccess: true, context: { skipBlogOrganize: true, disableRevalidate: true, skipExternal: true } })
  return respond(true, { kind: input.kind, index }, null)
}

const attachSchema = postSchema.extend({ mediaIds: z.array(z.number().int().positive()).min(1).max(10) })

/** Pasted/dropped images from the AI panel: first becomes the cover (if empty), the rest figure blocks at the end. */
async function attachMedia(req: PayloadRequest, input: z.infer<typeof attachSchema>): Promise<Response> {
  const media = await req.payload.find({ collection: 'media', where: { id: { in: input.mediaIds } }, limit: 10, depth: 0, overrideAccess: true })
  const ids = input.mediaIds.filter((id) => media.docs.some((m) => m.id === id && String(m.mimeType ?? '').startsWith('image/')))
  if (!ids.length) return respond(false, null, 'Image nahi mili', 400)
  const doc = await req.payload.findByID({ collection: 'posts', id: input.postId, draft: true, depth: 0, overrideAccess: true })
  const root = ((doc.content as { root?: LexNode } | null)?.root ?? { type: 'root', children: [] }) as LexNode
  // No cover yet: the first image becomes the cover only (showing it again as a figure would duplicate it on the page).
  const [coverId, ...rest] = doc.cover ? [null, ...ids] : ids
  const children = [...(root.children ?? []), ...rest.map((id) => makeBlockNode('figure', { image: id }))]
  await req.payload.update({ collection: 'posts', id: input.postId, draft: true, overrideAccess: true, context: { skipBlogOrganize: true, disableRevalidate: true, skipExternal: true }, data: { content: { root: { ...root, children } } as never, ...(coverId ? { cover: coverId } : {}) } })
  return respond(true, { added: ids.length }, null)
}

const endpoint = (path: string, handler: Endpoint['handler']): Endpoint => ({ path, method: 'post', handler })

export const blogEndpoints: Endpoint[] = [
  endpoint('/blog/organize', guarded(postSchema, async (req, input) => respond(true, await organizePost(req.payload, input.postId), null))),
  endpoint('/blog/beautify', guarded(postSchema, async (req, input) => respond(true, await beautifyPost(req.payload, input.postId), null))),
  endpoint('/blog/enrich', guarded(postSchema, async (req, input) => respond(true, await enrichPost(req.payload, input.postId), null))),
  endpoint('/blog/images', guarded(postSchema, async (req, input) => respond(true, await attachImages(req.payload, input.postId), null))),
  endpoint('/blog/attach-media', guarded(attachSchema, attachMedia)),
  endpoint('/blog/suggestions/apply', guarded(applySchema, apply)),
  endpoint('/blog/suggestions/apply-all', guarded(postSchema, applyAll)),
]
