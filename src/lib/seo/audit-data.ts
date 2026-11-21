import type { Payload } from 'payload'

import { countWords, lexicalToPlain, type LexRoot } from '@/lib/blog/text'
import { buildSeoReport, type PostSeoInput, type SeoReport, type SiteSeoInput } from '@/lib/seo/audit'

const idOf = (value: unknown): string => String(typeof value === 'object' && value !== null ? (value as { id?: unknown }).id ?? '' : value ?? '')
const len = (value: unknown): number => (Array.isArray(value) ? value.length : 0)

/** Loads published posts + site counters and runs the pure audit. Read-only. */
export async function loadSeoReport(payload: Payload): Promise<SeoReport & { posts: number }> {
  const [posts, drafts, topics] = await Promise.all([
    payload.find({ collection: 'posts', where: { _status: { equals: 'published' } }, limit: 500, depth: 0, draft: false, overrideAccess: true }),
    payload.count({ collection: 'posts', where: { _status: { equals: 'draft' } }, overrideAccess: true }),
    payload.find({ collection: 'topics', where: { _status: { equals: 'published' } }, limit: 500, depth: 0, draft: false, select: { layout: true }, overrideAccess: true }),
  ])

  const inputs: PostSeoInput[] = posts.docs.map((post) => ({
    id: String(post.id),
    title: post.title,
    slug: post.slug ?? '',
    seoTitle: post.seo?.title,
    seoDescription: post.seo?.description,
    focusKeyword: post.seo?.focusKeyword,
    noindex: Boolean(post.seo?.noindex),
    excerpt: post.excerpt,
    wordCount: countWords(lexicalToPlain(post.content as LexRoot)),
    topicCount: len(post.topics),
    tagCount: len(post.tags),
    faqCount: len(post.faq),
    hasCover: Boolean(idOf(post.cover)),
  }))

  const site: SiteSeoInput = {
    siteUrl: process.env.SITE_URL,
    googleVerified: Boolean(process.env.GOOGLE_SITE_VERIFICATION),
    bingVerified: Boolean(process.env.BING_SITE_VERIFICATION),
    indexNow: Boolean(process.env.INDEXNOW_KEY),
    cronSecret: Boolean(process.env.CRON_SECRET),
    publishedPosts: posts.totalDocs,
    draftPosts: drafts.totalDocs,
    publishedTopicNotes: topics.docs.filter((t) => len(t.layout) > 0).length,
    totalTopics: topics.totalDocs,
  }
  return { ...buildSeoReport(site, inputs), posts: inputs.length }
}
