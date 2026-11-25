import 'server-only'

import { cache } from 'react'
import type { Where } from 'payload'

import type { BlogCategory, BlogTag, Media, Paper, Post, Thinker, Topic, Unit, User } from '@/payload-types'
import { extractToc, type LexNode, type LexRoot } from '@/lib/blog/text'
import { getPayloadClient } from '@/lib/queries'

export { extractToc }

import type {
  BlogAuthor,
  BlogCard,
  BlogCategoryChip,
  BlogGapItem,
  BlogHubData,
  BlogListData,
  BlogMedia,
  BlogPastel,
  BlogPostDetail,
  BlogSeriesNav,
  BlogTagChip,
  PaperCode,
  PyqItem,
  ResolvedBlogBlocks,
  ThinkerChip,
  TopicChip,
} from './types'
import { relationDocs } from './types'
import { mapThinkerChip, mapTopicChip } from './mappers'
import { urls } from './urls'

const PAGE_SIZE = 12
const isObj = <T extends { id: number }>(v: unknown): v is T => typeof v === 'object' && v !== null && 'id' in v
const isPaper = (v: unknown): v is PaperCode => v === 'P1' || v === 'P2'
const toPastel = (v: unknown): BlogPastel => (v === 'yellow' || v === 'mint' || v === 'pink' ? v : 'lavender')

function mapMedia(doc: number | Media | null | undefined, fallbackAlt: string): BlogMedia | null {
  if (!isObj<Media>(doc) || !doc.url) return null
  return { url: doc.url, alt: doc.alt || fallbackAlt, width: doc.width ?? 1200, height: doc.height ?? 630 }
}

function mapCategory(doc: number | BlogCategory | null | undefined): BlogCategoryChip | null {
  if (!isObj<BlogCategory>(doc) || !doc.slug) return null
  return { id: doc.id, title: doc.title, slug: doc.slug, href: `/blog/category/${doc.slug}`, color: toPastel(doc.color), description: doc.description ?? null }
}

function mapTag(doc: number | BlogTag | null | undefined): BlogTagChip | null {
  if (!isObj<BlogTag>(doc) || !doc.slug) return null
  return { id: doc.id, title: doc.title, slug: doc.slug, href: `/blog/tag/${doc.slug}`, color: toPastel(doc.color) }
}

type PublicAuthor = Pick<User, 'id' | 'displayName' | 'bio' | 'avatar'>

function mapAuthor(doc: number | User | PublicAuthor | null | undefined): BlogAuthor | null {
  if (!isObj<User | PublicAuthor>(doc)) return null
  const name = doc.displayName?.trim() || 'UPSC OWL'
  return { id: doc.id, name, href: `/blog/author/${doc.id}`, bio: doc.bio ?? null, avatar: mapMedia(doc.avatar as Media | number | null, name) }
}

export function mapBlogCard(doc: Post): BlogCard {
  const slug = doc.slug ?? String(doc.id)
  const papers = relationDocs(doc.papers as (number | Paper)[] | null).map((p) => p.code).filter(isPaper)
  const topics = relationDocs(doc.topics as (number | Topic)[] | null).map((t) => mapTopicChip(t as Topic & { unit?: Unit & { paper?: Paper } })).filter((t): t is TopicChip => t !== null)
  const thinkers = relationDocs(doc.thinkers as (number | Thinker)[] | null).map(mapThinkerChip).filter((t): t is ThinkerChip => t !== null)
  return {
    id: doc.id, title: doc.title, slug, href: `/blog/${slug}`, excerpt: doc.excerpt ?? null,
    publishedAt: doc.publishedAt ?? doc.createdAt, updatedAt: doc.updatedAt, readingTime: doc.readingTime ?? 1,
    featured: Boolean(doc.featured), cover: mapMedia(doc.cover as Media | number | null, doc.title),
    category: mapCategory(doc.category as BlogCategory | number | null),
    tags: relationDocs(doc.tags as (number | BlogTag)[] | null).map(mapTag).filter((t): t is BlogTagChip => t !== null),
    papers: papers.length ? papers : [...new Set(topics.map((t) => t.paper))],
    topics, thinkers, author: mapAuthor(doc.author as User | number | null),
  }
}

async function resolveBlockRelations(content: unknown): Promise<ResolvedBlogBlocks> {
  const resolved: ResolvedBlogBlocks = { thinkers: {}, topics: {}, pyqs: {}, media: {} }
  const thinkerIds = new Set<number>()
  const topicIds = new Set<number>()
  const pyqIds = new Set<number>()
  const mediaIds = new Set<number>()
  const addId = (set: Set<number>, val: unknown) => {
    if (typeof val === 'number') set.add(val)
    else if (isObj<{ id: number }>(val)) set.add(val.id)
  }
  const walk = (node: LexNode): void => {
    if (node.type === 'block' || node.type === 'inlineBlock') {
      const f = node.fields ?? {}
      addId(thinkerIds, f.thinker)
      addId(topicIds, f.topic)
      addId(mediaIds, f.image)
      if (Array.isArray(f.images)) for (const row of f.images) addId(mediaIds, typeof row === 'object' && row !== null ? (row as { image?: unknown }).image : null)
      if (Array.isArray(f.pyqs)) for (const p of f.pyqs) addId(pyqIds, p)
    }
    for (const c of node.children ?? []) walk(c)
  }
  const root = (content as LexRoot)?.root
  if (root) walk(root)
  const payload = await getPayloadClient()
  const [thinkers, topics, pyqs, media] = await Promise.all([
    thinkerIds.size ? payload.find({ collection: 'thinkers', where: { id: { in: [...thinkerIds] } }, limit: thinkerIds.size, depth: 0, overrideAccess: true }) : { docs: [] },
    topicIds.size ? payload.find({ collection: 'topics', where: { id: { in: [...topicIds] } }, limit: topicIds.size, depth: 2, overrideAccess: true }) : { docs: [] },
    pyqIds.size ? payload.find({ collection: 'pyqs', where: { id: { in: [...pyqIds] } }, limit: pyqIds.size, depth: 0, overrideAccess: true }) : { docs: [] },
    mediaIds.size ? payload.find({ collection: 'media', where: { id: { in: [...mediaIds] } }, limit: mediaIds.size, depth: 0, overrideAccess: true }) : { docs: [] },
  ])
  for (const t of thinkers.docs) if (t.slug) resolved.thinkers[t.id] = { name: t.name, slug: t.slug, href: urls.thinker(t.slug), era: t.era ?? null }
  for (const t of topics.docs) { const chip = mapTopicChip(t as Topic); if (chip) resolved.topics[t.id] = chip }
  for (const p of pyqs.docs) if (isPaper(p.paper)) resolved.pyqs[p.id] = { id: p.id, year: p.year, paper: p.paper, marks: p.marks, question: p.question }
  for (const m of media.docs) { const mapped = mapMedia(m, m.alt); if (mapped) resolved.media[m.id] = mapped }
  return resolved
}

export const getBlogCategories = cache(async (): Promise<BlogCategoryChip[]> => {
  const payload = await getPayloadClient()
  const res = await payload.find({ collection: 'blog-categories', limit: 100, sort: 'title', depth: 0, overrideAccess: false })
  return res.docs.map(mapCategory).filter((c): c is BlogCategoryChip => c !== null)
})

export const getBlogTags = cache(async (): Promise<BlogTagChip[]> => {
  const payload = await getPayloadClient()
  const res = await payload.find({ collection: 'blog-tags', limit: 100, sort: 'title', depth: 0, overrideAccess: false })
  return res.docs.map(mapTag).filter((t): t is BlogTagChip => t !== null)
})

export const getBlogHub = cache(async (input: { page?: number; category?: string; paper?: PaperCode; unit?: string } = {}): Promise<BlogHubData> => {
  const payload = await getPayloadClient()
  const page = Math.max(1, input.page ?? 1)
  const [categories, tags, unitsRes, papersRes] = await Promise.all([
    getBlogCategories(), getBlogTags(),
    payload.find({ collection: 'units', limit: 200, depth: 1, sort: 'order', overrideAccess: false }),
    payload.find({ collection: 'papers', limit: 10, depth: 0, overrideAccess: false }),
  ])
  const clauses: Where[] = [{ _status: { equals: 'published' } }]
  const cat = input.category ? categories.find((c) => c.slug === input.category) : undefined
  if (cat) clauses.push({ category: { equals: cat.id } })
  const paperDoc = input.paper ? papersRes.docs.find((p) => p.code === input.paper) : undefined
  if (paperDoc) clauses.push({ papers: { contains: paperDoc.id } })
  const unitDoc = input.unit ? unitsRes.docs.find((u) => u.slug === input.unit) : undefined
  if (unitDoc) clauses.push({ units: { contains: unitDoc.id } })

  const [postsRes, featuredRes] = await Promise.all([
    payload.find({ collection: 'posts', where: { and: clauses }, page, limit: PAGE_SIZE, sort: '-publishedAt', depth: 3, draft: false, overrideAccess: false }),
    payload.find({ collection: 'posts', where: { and: [{ _status: { equals: 'published' } }, { featured: { equals: true } }] }, limit: 1, sort: '-publishedAt', depth: 3, draft: false, overrideAccess: false }),
  ])
  const items = postsRes.docs.map(mapBlogCard)
  const featured = featuredRes.docs[0] ? mapBlogCard(featuredRes.docs[0]) : items[0] ?? null
  const units = unitsRes.docs.flatMap((u) => {
    const p = isObj<Paper>(u.paper) && isPaper(u.paper.code) ? u.paper.code : null
    return u.slug && p ? [{ slug: u.slug, title: u.title, paper: p }] : []
  })
  return {
    featured, categories, tags, units,
    posts: { items, page: postsRes.page ?? page, totalPages: postsRes.totalPages, total: postsRes.totalDocs },
    filters: { page, category: cat?.slug, paper: input.paper, unit: unitDoc?.slug ?? undefined },
  }
})

export const getPost = cache(async (slug: string, preview = false): Promise<BlogPostDetail | null> => {
  const payload = await getPayloadClient()
  const clauses: Where[] = [{ slug: { equals: slug } }, ...(!preview ? [{ _status: { equals: 'published' } }] : [])]
  const found = await payload.find({ collection: 'posts', where: { and: clauses }, limit: 1, depth: 3, draft: preview, overrideAccess: preview })
  const doc = found.docs[0]
  if (!doc) return null
  const card = mapBlogCard(doc)
  const topicIds = relationDocs(doc.topics as (number | Topic)[] | null).map((t) => t.id)
  const tagIds = card.tags.map((t) => t.id)
  const relClauses: Where[] = [...(topicIds.length ? [{ topics: { in: topicIds } }] : []), ...(tagIds.length ? [{ tags: { in: tagIds } }] : [])]

  const [resolved, relatedPostsRes, pyqsRes] = await Promise.all([
    resolveBlockRelations(doc.content),
    payload.find({
      collection: 'posts',
      where: { and: [{ _status: { equals: 'published' } }, { id: { not_equals: doc.id } }, ...(relClauses.length ? [{ or: relClauses }] : [])] },
      limit: 3, sort: '-publishedAt', depth: 2, draft: false, overrideAccess: false,
    }),
    topicIds.length ? payload.find({ collection: 'pyqs', where: { topics: { in: topicIds } }, limit: 4, sort: '-year', depth: 2, overrideAccess: false }) : Promise.resolve({ docs: [] }),
  ])
  const relatedPyqs: PyqItem[] = pyqsRes.docs.map((p) => ({
    id: p.id, year: p.year, paper: (p.paper as PaperCode) ?? 'P1', qno: p.qno ?? '', marks: p.marks, question: p.question,
    topics: card.topics, thinkers: [],
  }))
  const seo = doc.seo ?? {}
  const ogMedia = mapMedia(seo.ogImage as Media | number | null, card.title)
  return {
    ...card, content: doc.content, toc: extractToc(doc.content),
    quiz: (doc.quiz ?? []).flatMap((q) => (q.options?.length === 4 ? [{ question: q.question, options: q.options.map((o) => o.text), answerIndex: q.answerIndex, explanation: q.explanation }] : [])),
    series: await getSeriesNav(doc.series, doc.id),
    attachments: (doc.attachments ?? []).flatMap((row) => {
      const file = isObj<Media>(row.file) ? row.file : null
      return file?.url ? [{ label: row.label, url: file.url, sizeKb: Math.round((file.filesize ?? 0) / 1024) }] : []
    }),
    faq: (doc.faq ?? []).map(({ question, answer }) => ({ question, answer })),
    seo: { title: seo.title ?? null, description: seo.description ?? null, focusKeyword: seo.focusKeyword ?? null, canonical: seo.canonical ?? null, noindex: Boolean(seo.noindex), ogImageUrl: ogMedia?.url ?? card.cover?.url ?? null },
    resolved, relatedPosts: relatedPostsRes.docs.map(mapBlogCard), relatedTopics: card.topics, relatedPyqs,
  }
})

export const getPostStaticParams = cache(async (limit = 50): Promise<{ slug: string }[]> => {
  const payload = await getPayloadClient()
  const res = await payload.find({ collection: 'posts', where: { _status: { equals: 'published' } }, limit, sort: '-publishedAt', depth: 0, draft: false, overrideAccess: false, select: { slug: true } })
  return res.docs.flatMap((d) => (d.slug ? [{ slug: d.slug }] : []))
})

export const getPostsByCategory = cache(async (slug: string, page = 1): Promise<BlogListData | null> => {
  const payload = await getPayloadClient()
  const cat = (await payload.find({ collection: 'blog-categories', where: { slug: { equals: slug } }, limit: 1, depth: 0, overrideAccess: false })).docs[0]
  if (!cat) return null
  const posts = await payload.find({ collection: 'posts', where: { and: [{ _status: { equals: 'published' } }, { category: { equals: cat.id } }] }, page, limit: PAGE_SIZE, sort: '-publishedAt', depth: 3, draft: false, overrideAccess: false })
  return { kind: 'category', title: cat.title, description: cat.description ?? null, posts: { items: posts.docs.map(mapBlogCard), page: posts.page ?? page, totalPages: posts.totalPages, total: posts.totalDocs } }
})

export const getPostsBySeries = cache(async (slug: string, page = 1): Promise<BlogListData | null> => {
  const payload = await getPayloadClient()
  const series = (await payload.find({ collection: 'blog-series', where: { slug: { equals: slug } }, limit: 1, depth: 0, overrideAccess: false })).docs[0]
  if (!series) return null
  const posts = await payload.find({ collection: 'posts', where: { and: [{ _status: { equals: 'published' } }, { series: { equals: series.id } }] }, page, limit: PAGE_SIZE, sort: 'seriesOrder,publishedAt', depth: 3, draft: false, overrideAccess: false })
  return { kind: 'series', title: series.title, description: series.description ?? null, posts: { items: posts.docs.map(mapBlogCard), page: posts.page ?? page, totalPages: posts.totalPages, total: posts.totalDocs } }
})

/** Series box for a post: all published parts in order + prev/next around the current one. */
async function getSeriesNav(value: unknown, currentId: number): Promise<BlogSeriesNav | null> {
  const seriesId = typeof value === 'number' ? value : isObj<{ id: number }>(value) ? value.id : null
  if (!seriesId) return null
  const payload = await getPayloadClient()
  const series = await payload.findByID({ collection: 'blog-series', id: seriesId, depth: 0, overrideAccess: false }).catch(() => null)
  if (!series?.slug) return null
  const posts = await payload.find({ collection: 'posts', where: { and: [{ _status: { equals: 'published' } }, { series: { equals: seriesId } }] }, limit: 50, sort: 'seriesOrder,publishedAt', depth: 0, draft: false, overrideAccess: false, select: { title: true, slug: true, seriesOrder: true } })
  const parts = posts.docs.filter((p) => p.slug).map((p, i) => ({ title: p.title, href: `/blog/${p.slug}`, order: p.seriesOrder ?? i + 1, isCurrent: p.id === currentId }))
  const at = parts.findIndex((p) => p.isCurrent)
  const pick = (i: number) => (i >= 0 && i < parts.length ? { title: parts[i]!.title, href: parts[i]!.href } : null)
  return { title: series.title, href: `/blog/series/${series.slug}`, parts, prev: at >= 0 ? pick(at - 1) : null, next: at >= 0 ? pick(at + 1) : null }
}

export const getPostsByTag = cache(async (slug: string, page = 1): Promise<BlogListData | null> => {
  const payload = await getPayloadClient()
  const tag = (await payload.find({ collection: 'blog-tags', where: { slug: { equals: slug } }, limit: 1, depth: 0, overrideAccess: false })).docs[0]
  if (!tag) return null
  const posts = await payload.find({ collection: 'posts', where: { and: [{ _status: { equals: 'published' } }, { tags: { contains: tag.id } }] }, page, limit: PAGE_SIZE, sort: '-publishedAt', depth: 3, draft: false, overrideAccess: false })
  return { kind: 'tag', title: `#${tag.title}`, description: tag.description ?? null, posts: { items: posts.docs.map(mapBlogCard), page: posts.page ?? page, totalPages: posts.totalPages, total: posts.totalDocs } }
})

export const getPostsByAuthor = cache(async (id: number, page = 1): Promise<BlogListData | null> => {
  const payload = await getPayloadClient()
  const posts = await payload.find({ collection: 'posts', where: { and: [{ _status: { equals: 'published' } }, { author: { equals: id } }] }, page, limit: PAGE_SIZE, sort: '-publishedAt', depth: 3, draft: false, overrideAccess: false })
  if (posts.totalDocs === 0) return null
  const user = await payload.findByID({ collection: 'users', id, depth: 1, overrideAccess: true, select: { displayName: true, bio: true, avatar: true } }).catch(() => null)
  if (!user) return null
  const author = mapAuthor(user)
  return { kind: 'author', title: author?.name ?? 'Author', description: author?.bio ?? null, author, posts: { items: posts.docs.map(mapBlogCard), page: posts.page ?? page, totalPages: posts.totalPages, total: posts.totalDocs } }
})

export const getTopicPosts = cache(async (topicId: number, limit = 4): Promise<BlogCard[]> => {
  const payload = await getPayloadClient()
  const res = await payload.find({ collection: 'posts', where: { and: [{ _status: { equals: 'published' } }, { topics: { contains: topicId } }] }, limit, sort: '-publishedAt', depth: 3, draft: false, overrideAccess: false })
  return res.docs.map(mapBlogCard)
})

export const getRssPosts = cache(async (limit = 30): Promise<BlogCard[]> => {
  const payload = await getPayloadClient()
  const res = await payload.find({ collection: 'posts', where: { _status: { equals: 'published' } }, limit, sort: '-publishedAt', depth: 2, draft: false, overrideAccess: false })
  return res.docs.map(mapBlogCard)
})

/** Topics with the most PYQs and zero published blog posts → "Is hafte ye likho" dashboard widget. */
export const getBlogGaps = cache(async (limit = 6): Promise<BlogGapItem[]> => {
  const payload = await getPayloadClient()
  const [topics, pyqs, posts] = await Promise.all([
    payload.find({ collection: 'topics', where: { _status: { equals: 'published' } }, limit: 1000, depth: 2, overrideAccess: true, draft: false, select: { title: true, slug: true, unit: true } }),
    payload.find({ collection: 'pyqs', limit: 2000, depth: 0, overrideAccess: true, select: { topics: true } }),
    payload.find({ collection: 'posts', where: { _status: { equals: 'published' } }, limit: 1000, depth: 0, overrideAccess: true, draft: false, select: { topics: true } }),
  ])
  const covered = new Set<number>()
  for (const post of posts.docs) for (const t of post.topics ?? []) covered.add(typeof t === 'number' ? t : t.id)
  const pyqCounts = new Map<number, number>()
  for (const pyq of pyqs.docs) for (const t of pyq.topics ?? []) { const id = typeof t === 'number' ? t : t.id; pyqCounts.set(id, (pyqCounts.get(id) ?? 0) + 1) }

  return topics.docs
    .filter((t) => !covered.has(t.id))
    .flatMap((t) => {
      const chip = mapTopicChip(t as Topic)
      return chip ? [{ topicId: t.id, topicTitle: chip.title, topicHref: chip.href, paper: chip.paper, pyqCount: pyqCounts.get(t.id) ?? 0 }] : []
    })
    .sort((a, b) => b.pyqCount - a.pyqCount || a.topicTitle.localeCompare(b.topicTitle))
    .slice(0, limit)
})
