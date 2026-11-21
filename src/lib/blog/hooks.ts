import type { CollectionAfterChangeHook, CollectionBeforeChangeHook, PayloadRequest } from 'payload'

import { revalidateAfterChange, topicPaths } from '@/hooks/payload/revalidate'
import { postBlog } from '@/lib/telegram/postBlog'
import { getServerSideURL } from '@/lib/url'

import { pingIndexNow } from './indexnow'
import { appendLexical, markdownToBlogLexical } from './markdown'
import type { LexNode } from './text'
import { contentHash, lexicalToPlain, readingTimeMinutes } from './text'

type Doc = Record<string, unknown> & { id?: number; _status?: 'draft' | 'published' }
type Lex = { root: LexNode }

const idOf = (value: unknown): number | null =>
  typeof value === 'number' ? value : typeof value === 'object' && value !== null && typeof (value as { id?: unknown }).id === 'number' ? (value as { id: number }).id : null

/** ChatGPT-paste → content, reading time, content hash, publishedAt, default author. */
export const prepareBlogPost: CollectionBeforeChangeHook = async ({ data, originalDoc, req }) => {
  const next: Record<string, unknown> = { ...data }
  const pasted = typeof next.importMarkdown === 'string' ? next.importMarkdown.trim() : ''
  if (pasted) {
    const converted = await markdownToBlogLexical(req.payload, pasted)
    const existing = (next.content ?? originalDoc?.content) as Lex | undefined
    next.content = existing && lexicalToPlain(existing).trim() ? appendLexical(existing, converted) : converted
  }
  delete next.importMarkdown

  const plain = lexicalToPlain((next.content ?? originalDoc?.content) as Lex | undefined)
  next.readingTime = plain ? readingTimeMinutes(plain) : 0
  const hash = contentHash(`${String(next.title ?? originalDoc?.title ?? '')}\n${plain}`)
  if (hash !== originalDoc?.contentHash && plain && !req.context?.skipBlogOrganize) {
    next.contentHash = hash
    next.aiStatus = 'queued'
  }
  if (!next.author && !originalDoc?.author && req.user) next.author = req.user.id
  if (next._status === 'published' && !next.publishedAt && !originalDoc?.publishedAt) next.publishedAt = new Date().toISOString()
  return next
}

/** Public URLs affected by a post (hub, post, category, tags, linked topics, sitemap, rss). */
export async function postPaths(doc: Doc, req: PayloadRequest): Promise<string[]> {
  const slug = typeof doc.slug === 'string' ? doc.slug : ''
  const paths = ['/blog', '/blog/rss.xml', '/sitemap.xml', '/']
  if (slug) paths.push(`/blog/${slug}`)
  const categoryId = idOf(doc.category)
  if (categoryId) {
    const category = await req.payload.findByID({ collection: 'blog-categories', id: categoryId, depth: 0, overrideAccess: true }).catch(() => null)
    if (category?.slug) paths.push(`/blog/category/${category.slug}`)
  }
  const tagIds = (Array.isArray(doc.tags) ? doc.tags : []).map(idOf).filter((id): id is number => id !== null)
  if (tagIds.length) {
    const tags = await req.payload.find({ collection: 'blog-tags', where: { id: { in: tagIds } }, limit: tagIds.length, depth: 0, overrideAccess: true })
    for (const tag of tags.docs) if (tag.slug) paths.push(`/blog/tag/${tag.slug}`)
  }
  const topicIds = (Array.isArray(doc.topics) ? doc.topics : []).map(idOf).filter((id): id is number => id !== null)
  for (const id of topicIds) {
    const topic = await req.payload.findByID({ collection: 'topics', id, depth: 0, overrideAccess: true }).catch(() => null)
    if (topic) paths.push(...(await topicPaths(topic as unknown as Doc, req)))
  }
  return paths
}

export const revalidatePost = revalidateAfterChange(postPaths)

/** Queue an organizer job when the text changed (dedupes against a pending job). */
export const queueOrganize: CollectionAfterChangeHook = async ({ doc, previousDoc, req }) => {
  if (req.context?.skipBlogOrganize || doc.aiStatus !== 'queued' || doc.contentHash === previousDoc?.contentHash) return doc
  try {
    const pending = await req.payload.find({
      collection: 'payload-jobs',
      where: { and: [{ taskSlug: { equals: 'blog-organize' } }, { completedAt: { exists: false } }, { hasError: { not_equals: true } }, { 'input.postId': { equals: doc.id } }] },
      limit: 1, depth: 0, overrideAccess: true,
    })
    if (pending.docs.length === 0) await req.payload.jobs.queue({ task: 'blog-organize', input: { postId: doc.id } })
  } catch (error) {
    req.payload.logger.error(`blog-organize queue failed: ${error instanceof Error ? error.message : 'unknown error'}`)
  }
  return doc
}

/** IndexNow ping on every published save; Telegram only on first publish. Both fail soft. */
export const announcePost: CollectionAfterChangeHook = async ({ doc, previousDoc, req, context }) => {
  if (doc._status !== 'published' || context?.skipExternal) return doc
  const url = `${getServerSideURL()}/blog/${doc.slug}`
  try { await pingIndexNow([url, `${getServerSideURL()}/blog`]) } catch (error) {
    req.payload.logger.warn(`IndexNow failed: ${error instanceof Error ? error.message : 'unknown'}`)
  }
  const firstPublish = previousDoc?._status !== 'published'
  if (!firstPublish || doc.telegramPostedAt) return doc
  try {
    const social = (doc.aiSuggestions as { social?: { telegram?: string }; acceptedTelegram?: boolean } | null) ?? null
    const sent = await postBlog(req.payload, { title: String(doc.title), excerpt: doc.excerpt as string | null, url, telegramText: social?.acceptedTelegram ? social.social?.telegram : null })
    if (sent) {
      await req.payload.update({ collection: 'posts', id: doc.id, data: { telegramPostedAt: new Date().toISOString() }, overrideAccess: true, context: { skipExternal: true, skipBlogOrganize: true, disableRevalidate: true } })
    }
  } catch (error) {
    req.payload.logger.error(`Blog Telegram post failed: ${error instanceof Error ? error.message : 'unknown'}`)
  }
  return doc
}
