import type { Payload } from 'payload'
import { z } from 'zod'

import { organizeOutputSchema, type OrganizeOutput } from '@/blocks/blog/schema'
import { urls } from '@/lib/data/urls'
import { env } from '@/lib/env'

import { blogCost, budgetExhausted, logBlogRun, type Usage } from './ledger'
import { lexicalToPlain, type LexRoot } from './text'

export const ORGANIZE_PROMPT_VERSION = 'blog-organize.v1'
const MAX_WORDS = 6000

type Ref = { id: number; slug: string; title: string }
export type Allowed = {
  topics: (Ref & { href: string })[]
  units: Ref[]
  thinkers: Ref[]
  tags: Ref[]
  categories: Ref[]
  papers: (Ref & { code: string })[]
  links: { href: string; label: string }[]
}

export type CleanOrganize = OrganizeOutput & { newTags: string[] }

/**
 * Server-side gate for the model output: unknown slugs/hrefs are dropped, anchors must
 * appear verbatim in the post, tags split into existing vs. new. Pure → unit tested.
 */
export function sanitizeOrganize(output: OrganizeOutput, allowed: Allowed, plain: string): CleanOrganize {
  const keep = (slugs: string[], list: { slug: string }[]) => slugs.filter((slug) => list.some((item) => item.slug === slug))
  const tagTitles = new Set(allowed.tags.map((tag) => tag.title.toLowerCase()))
  const hrefs = new Set(allowed.links.map((link) => link.href))
  return {
    ...output,
    paperCodes: output.paperCodes.filter((code) => allowed.papers.some((paper) => paper.code === code)),
    unitSlugs: keep(output.unitSlugs, allowed.units),
    topicSlugs: keep(output.topicSlugs, allowed.topics).slice(0, 3),
    thinkerSlugs: keep(output.thinkerSlugs, allowed.thinkers),
    category: allowed.categories.find((c) => c.title === output.category || c.slug === output.category)?.title,
    tags: output.tags.filter((tag) => tagTitles.has(tag.toLowerCase())),
    newTags: output.tags.filter((tag) => !tagTitles.has(tag.toLowerCase())),
    internalLinks: output.internalLinks.filter((link) => hrefs.has(link.href) && plain.includes(link.anchorText)),
  }
}

export async function loadAllowed(payload: Payload, excludePostId?: number): Promise<Allowed> {
  const [topics, units, thinkers, tags, categories, papers, posts] = await Promise.all([
    payload.find({ collection: 'topics', limit: 1000, depth: 2, overrideAccess: true, pagination: false, select: { title: true, slug: true, unit: true } }),
    payload.find({ collection: 'units', limit: 1000, depth: 0, overrideAccess: true, pagination: false, select: { title: true, slug: true } }),
    payload.find({ collection: 'thinkers', limit: 1000, depth: 0, overrideAccess: true, pagination: false, select: { name: true, slug: true } }),
    payload.find({ collection: 'blog-tags', limit: 1000, depth: 0, overrideAccess: true, pagination: false, select: { title: true, slug: true } }),
    payload.find({ collection: 'blog-categories', limit: 1000, depth: 0, overrideAccess: true, pagination: false, select: { title: true, slug: true } }),
    payload.find({ collection: 'papers', limit: 1000, depth: 0, overrideAccess: true, pagination: false, select: { title: true, slug: true, code: true } }),
    payload.find({ collection: 'posts', where: { _status: { equals: 'published' } }, limit: 200, depth: 0, overrideAccess: true, draft: false, select: { title: true, slug: true } }),
  ])
  const topicRefs = topics.docs.flatMap((topic) => {
    const unit = typeof topic.unit === 'object' && topic.unit ? topic.unit : null
    const paper = unit && typeof unit.paper === 'object' && unit.paper ? unit.paper : null
    return topic.slug && unit?.slug && paper?.slug ? [{ id: topic.id, slug: topic.slug, title: topic.title, href: urls.topic(paper.slug, unit.slug, topic.slug) }] : []
  })
  const thinkerRefs = thinkers.docs.flatMap((t) => (t.slug ? [{ id: t.id, slug: t.slug, title: t.name }] : []))
  return {
    topics: topicRefs,
    units: units.docs.flatMap((u) => (u.slug ? [{ id: u.id, slug: u.slug, title: u.title }] : [])),
    thinkers: thinkerRefs,
    tags: tags.docs.flatMap((t) => (t.slug ? [{ id: t.id, slug: t.slug, title: t.title }] : [])),
    categories: categories.docs.flatMap((c) => (c.slug ? [{ id: c.id, slug: c.slug, title: c.title }] : [])),
    papers: papers.docs.flatMap((p) => (p.slug && p.code ? [{ id: p.id, slug: p.slug, title: p.title, code: p.code }] : [])),
    links: [
      ...topicRefs.map((t) => ({ href: t.href, label: t.title })),
      ...thinkerRefs.map((t) => ({ href: urls.thinker(t.slug), label: t.title })),
      ...posts.docs.filter((p) => p.id !== excludePostId && p.slug).map((p) => ({ href: `/blog/${p.slug}`, label: p.title })),
    ],
  }
}

const SYSTEM = `You organise a UPSC Sociology Optional blog post (Hinglish, Roman script) for the website "UPSC OWL Sociology".
Return ONLY one JSON object matching the schema. Rules:
- Choose paperCodes, unitSlugs, topicSlugs (max 3), thinkerSlugs ONLY from the allowed lists. Never invent a slug.
- category: one title from allowedCategories. tags: prefer allowedTags; you may add up to 2 new short tags.
- excerpt ≤ 300 chars; seoTitle ≤ 60; seoDescription 120-160 chars; focusKeyword = 2-4 words.
- faq: up to 5 Q/A strictly answerable from the post. No new facts, numbers or names.
- internalLinks: anchorText MUST be an exact phrase from the post; href MUST be from allowedLinks.
- social: xThread (≤ 8 tweets ≤ 280 chars), instagramSlides (≤ 8), linkedin, telegram (≤ 900 chars). Use only facts present in the post.`

export async function callDeepSeek(system: string, user: string): Promise<{ content: string; usage: Usage }> {
  const response = await fetch(`${env.DEEPSEEK_BASE_URL ?? 'https://api.deepseek.com'}/chat/completions`, {
    method: 'POST',
    headers: { authorization: `Bearer ${env.DEEPSEEK_API_KEY ?? ''}`, 'content-type': 'application/json' },
    body: JSON.stringify({ model: env.SCORER_MODEL ?? 'deepseek-flash', max_tokens: 12000, chat_template_kwargs: { thinking: false }, response_format: { type: 'json_object' }, messages: [{ role: 'system', content: system }, { role: 'user', content: user }] }),
  })
  if (!response.ok) throw new Error(`DeepSeek request failed (${response.status})`)
  const body = (await response.json()) as { choices?: { finish_reason?: string; message?: { content?: string } }[]; usage?: { prompt_tokens?: number; completion_tokens?: number } }
  const content = body.choices?.[0]?.message?.content
  if (!content) throw new Error(`DeepSeek returned no content (finish_reason: ${body.choices?.[0]?.finish_reason ?? 'unknown'})`)
  return { content, usage: { input: body.usage?.prompt_tokens ?? 0, output: body.usage?.completion_tokens ?? 0 } }
}

async function generate(plain: string, title: string, allowed: Allowed): Promise<{ output: OrganizeOutput; usage: Usage }> {
  const words = plain.split(/\s+/)
  const text = words.length > MAX_WORDS ? words.slice(0, MAX_WORDS).join(' ') : plain
  const shape = JSON.stringify(z.toJSONSchema(organizeOutputSchema, { target: 'draft-7' }))
  const system = `${SYSTEM}\n\nJSON Schema:\n${shape}`
  const user = JSON.stringify({
    title, text,
    allowedPaperCodes: allowed.papers.map((p) => p.code), allowedUnitSlugs: allowed.units.map((u) => u.slug),
    allowedTopics: allowed.topics.map((t) => ({ slug: t.slug, title: t.title })), allowedThinkers: allowed.thinkers.map((t) => ({ slug: t.slug, name: t.title })),
    allowedCategories: allowed.categories.map((c) => c.title), allowedTags: allowed.tags.map((t) => t.title),
    allowedLinks: allowed.links.slice(0, 300),
  })
  const usage: Usage = { input: 0, output: 0 }
  let hint = ''
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const result = await callDeepSeek(hint ? `${system}\n\nFix the previous invalid output: ${hint}` : system, user)
    usage.input += result.usage.input; usage.output += result.usage.output
    try {
      return { output: organizeOutputSchema.parse(clampOrganize(JSON.parse(result.content))), usage }
    } catch (error) {
      hint = error instanceof z.ZodError ? error.issues.slice(0, 6).map((i) => `${i.path.join('.')}: ${i.message}`).join('; ') : 'not valid JSON'
    }
  }
  throw new Error(`Organizer output invalid: ${hint}`)
}

const cut = (value: unknown, max: number): unknown => {
  if (typeof value !== 'string' || value.length <= max) return value
  const head = value.slice(0, max)
  return head.slice(0, Math.max(head.lastIndexOf(' '), Math.floor(max * 0.6))).trimEnd()
}
const cutAll = (list: unknown, maxLen: number, maxItems?: number): unknown => {
  if (!Array.isArray(list)) return list
  const sliced = typeof maxItems === 'number' ? list.slice(0, maxItems) : list
  return sliced.map((item) => cut(item, maxLen))
}

/** Models overshoot length/array limits; trim instead of failing the whole run. Pure → unit tested. */
export function clampOrganize(raw: unknown): unknown {
  if (typeof raw !== 'object' || raw === null) return raw
  const r = raw as Record<string, unknown>
  const social = (typeof r.social === 'object' && r.social !== null ? r.social : {}) as Record<string, unknown>
  const slides = Array.isArray(social.instagramSlides)
    ? social.instagramSlides.slice(0, 8).map((x) => (typeof x === 'object' && x !== null ? { ...x, title: cut((x as Record<string, unknown>).title, 80), text: cut((x as Record<string, unknown>).text, 240) } : x))
    : social.instagramSlides
  const faq = Array.isArray(r.faq)
    ? r.faq.slice(0, 5).map((x) => (typeof x === 'object' && x !== null ? { ...x, question: cut((x as Record<string, unknown>).question, 200), answer: cut((x as Record<string, unknown>).answer, 800) } : x))
    : r.faq
  const internalLinks = Array.isArray(r.internalLinks)
    ? r.internalLinks.slice(0, 8).map((x) => (typeof x === 'object' && x !== null ? { ...x, anchorText: cut((x as Record<string, unknown>).anchorText, 80), href: cut((x as Record<string, unknown>).href, 300) } : x))
    : r.internalLinks
  return {
    ...r,
    unitSlugs: Array.isArray(r.unitSlugs) ? r.unitSlugs.slice(0, 4) : r.unitSlugs,
    topicSlugs: Array.isArray(r.topicSlugs) ? r.topicSlugs.slice(0, 3) : r.topicSlugs,
    thinkerSlugs: Array.isArray(r.thinkerSlugs) ? r.thinkerSlugs.slice(0, 6) : r.thinkerSlugs,
    excerpt: cut(r.excerpt, 300), seoTitle: cut(r.seoTitle, 60), seoDescription: cut(r.seoDescription, 160), focusKeyword: cut(r.focusKeyword, 80), category: cut(r.category, 80),
    tags: cutAll(r.tags, 40, 6), faq, internalLinks,
    social: { ...social, xThread: cutAll(social.xThread, 280, 8), instagramSlides: slides, linkedin: cut(social.linkedin, 1500), telegram: cut(social.telegram, 900) },
  }
}

const isEmpty = (value: unknown): boolean => value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0)
const CTX = { skipBlogOrganize: true, disableRevalidate: true, skipExternal: true }

/** Fills only EMPTY fields; everything else lands in `aiSuggestions` for the owner to accept (D16). */
export async function organizePost(payload: Payload, postId: number): Promise<{ applied: string[] }> {
  const startedAt = new Date()
  const doc = await payload.findByID({ collection: 'posts', id: postId, draft: true, depth: 0, overrideAccess: true })
  const plain = lexicalToPlain(doc.content as LexRoot)
  const usage: Usage = { input: 0, output: 0 }
  try {
    if (!plain) throw new Error('post has no text yet')
    if (await budgetExhausted(payload)) throw new Error('daily AI budget exhausted (site-settings.maxDailyUsd)')
    const allowed = await loadAllowed(payload, postId)
    const generated = await generate(plain, doc.title, allowed)
    usage.input = generated.usage.input; usage.output = generated.usage.output
    const clean = sanitizeOrganize(generated.output, allowed, plain)

    const applied: string[] = []
    const data: Record<string, unknown> = {}
    const pick = <T extends { slug: string; id: number }>(slugs: string[], list: T[]) => slugs.map((s) => list.find((i) => i.slug === s)?.id).filter((id): id is number => typeof id === 'number')
    const set = (field: string, value: unknown) => { if (!isEmpty(value)) { data[field] = value; applied.push(field) } }
    if (isEmpty(doc.excerpt)) set('excerpt', clean.excerpt)
    const seo = (doc.seo ?? {}) as Record<string, unknown>
    const nextSeo = { ...seo }
    for (const [key, value] of [['title', clean.seoTitle], ['description', clean.seoDescription], ['focusKeyword', clean.focusKeyword]] as const) {
      if (isEmpty(seo[key]) && value) { nextSeo[key] = value; applied.push(`seo.${key}`) }
    }
    if (applied.some((a) => a.startsWith('seo.'))) data.seo = nextSeo
    if (isEmpty(doc.category)) set('category', allowed.categories.find((c) => c.title === clean.category)?.id)
    if (isEmpty(doc.tags)) set('tags', allowed.tags.filter((t) => clean.tags.some((n) => n.toLowerCase() === t.title.toLowerCase())).map((t) => t.id))
    if (isEmpty(doc.papers)) set('papers', allowed.papers.filter((p) => clean.paperCodes.includes(p.code as 'P1' | 'P2')).map((p) => p.id))
    if (isEmpty(doc.units)) set('units', pick(clean.unitSlugs, allowed.units))
    if (isEmpty(doc.topics)) set('topics', pick(clean.topicSlugs, allowed.topics))
    if (isEmpty(doc.thinkers)) set('thinkers', pick(clean.thinkerSlugs, allowed.thinkers))

    data.aiStatus = 'done'
    data.aiSuggestions = { generatedAt: new Date().toISOString(), promptVersion: ORGANIZE_PROMPT_VERSION, applied, newTags: clean.newTags, internalLinks: clean.internalLinks, faq: clean.faq, social: clean.social, accepted: {} }
    await payload.update({ collection: 'posts', id: postId, data, draft: true, overrideAccess: true, context: CTX })
    await logBlogRun(payload, { startedAt, ok: true, costUsd: blogCost('deepseek', usage), usage, promptVersion: ORGANIZE_PROMPT_VERSION })
    return { applied }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'organize failed'
    await payload.update({ collection: 'posts', id: postId, data: { aiStatus: 'failed', aiSuggestions: { ...((doc.aiSuggestions as object | null) ?? {}), error: message } }, draft: true, overrideAccess: true, context: CTX }).catch(() => null)
    await logBlogRun(payload, { startedAt, ok: false, costUsd: blogCost('deepseek', usage), usage, error: message, promptVersion: ORGANIZE_PROMPT_VERSION }).catch(() => null)
    throw error
  }
}
