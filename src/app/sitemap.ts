import type { MetadataRoute } from 'next'
import { getPayloadClient } from '@/lib/queries'
import { getCAStaticParams, getRecentIssues } from '@/lib/data/current-affairs'
import { getSyllabusTree } from '@/lib/data/syllabus'
import { getThinkers } from '@/lib/data/thinkers'
import { urls } from '@/lib/data/urls'
import { getServerSideURL } from '@/lib/url'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayloadClient()
  const [pages, ca, issues, syllabus, thinkers, posts, categories, tags] = await Promise.all([
    payload.find({ collection: 'pages', where: { _status: { equals: 'published' } }, limit: 1000, depth: 0, select: { path: true, updatedAt: true }, draft: false, overrideAccess: false }),
    getCAStaticParams(1000), getRecentIssues(1000), getSyllabusTree(), getThinkers(),
    payload.find({ collection: 'posts', where: { _status: { equals: 'published' } }, limit: 1000, depth: 0, select: { slug: true, updatedAt: true }, draft: false, overrideAccess: false }),
    payload.find({ collection: 'blog-categories', limit: 200, depth: 0, select: { slug: true, updatedAt: true }, overrideAccess: false }),
    payload.find({ collection: 'blog-tags', limit: 500, depth: 0, select: { slug: true, updatedAt: true }, overrideAccess: false }),
  ])
  const entries: MetadataRoute.Sitemap = [{ url: '/', changeFrequency: 'daily', priority: 1 }, ...['/current-affairs', '/blog', '/syllabus', '/thinkers', '/pyq'].map((url) => ({ url, changeFrequency: 'daily' as const, priority: 0.8 }))]
  for (const page of pages.docs) if (page.path && page.path !== 'home') entries.push({ url: `/${page.path}`, lastModified: page.updatedAt })
  for (const post of posts.docs) if (post.slug) entries.push({ url: `/blog/${post.slug}`, lastModified: post.updatedAt, changeFrequency: 'weekly', priority: 0.75 })
  for (const cat of categories.docs) if (cat.slug) entries.push({ url: `/blog/category/${cat.slug}`, lastModified: cat.updatedAt, changeFrequency: 'weekly', priority: 0.6 })
  for (const tag of tags.docs) if (tag.slug) entries.push({ url: `/blog/tag/${tag.slug}`, lastModified: tag.updatedAt, changeFrequency: 'weekly', priority: 0.5 })
  for (const item of ca) entries.push({ url: urls.article(item.date, item.slug), changeFrequency: 'weekly', priority: 0.7 })
  for (const issue of issues) entries.push({ url: issue.href, changeFrequency: 'daily', priority: 0.8 })
  for (const paper of syllabus) for (const unit of paper.units) for (const topic of unit.topics) entries.push({ url: topic.href, priority: 0.6 })
  for (const thinker of thinkers) entries.push({ url: thinker.href, priority: 0.5 })
  const base = getServerSideURL()
  return entries.map((entry) => ({ ...entry, url: new URL(entry.url, base).toString() }))
}
