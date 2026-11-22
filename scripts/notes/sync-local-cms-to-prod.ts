import 'dotenv/config'
import fs from 'node:fs'
import path from 'node:path'
import { getPayload, type Payload } from 'payload'
import config from '@payload-config'

const EXPORT_PATH = '/tmp/local-cms-export.json'
const BLOG_ASSETS = ['luwai-2590-1795191087442.png', 'luwai-7198-1795191064.png', 'image.png', 'new-mindmap-mwra494w.png', 'new-infographic-mwra49sh.png'] as const
const CTX = { disableRevalidate: true, skipBlogOrganize: true, skipExternal: true }

type DocRec = Record<string, unknown>
type ExportBundle = {
  maps: {
    papers: Record<number, string>
    units: Record<number, string>
    topics: Record<number, string>
    thinkers: Record<number, string>
    media: Record<number, string>
    categories: Record<number, string>
    tags: Record<number, string>
    pageSlugs: Record<number, string>
  }
  media: DocRec[]
  sources: DocRec[]
  categories: DocRec[]
  tags: DocRec[]
  pages: DocRec[]
  siteSettings: DocRec
  navigation: DocRec
  currentAffairs: DocRec[]
  posts: DocRec[]
}

const relId = (val: unknown): number | null =>
  typeof val === 'number' ? val : val && typeof val === 'object' && typeof (val as { id?: unknown }).id === 'number' ? (val as { id: number }).id : null

function stripRowIds<T>(value: T): T {
  if (Array.isArray(value)) return value.map((item) => stripRowIds(item)) as unknown as T
  if (!value || typeof value !== 'object') return value
  const out: DocRec = {}
  for (const [k, v] of Object.entries(value as DocRec)) {
    if (k === 'id' && typeof v === 'string') continue
    out[k] = stripRowIds(v)
  }
  return out as T
}

function mapOneId(val: unknown, localMap: Record<number, string>, prodMap: Map<string, number>): number | undefined {
  const id = relId(val)
  const key = id === null ? undefined : localMap[id]
  return key ? prodMap.get(key) : undefined
}

function mapManyIds(vals: unknown, localMap: Record<number, string>, prodMap: Map<string, number>): number[] {
  if (!Array.isArray(vals)) return []
  return vals.map((v) => mapOneId(v, localMap, prodMap)).filter((id): id is number => id !== undefined)
}

function remapLexical(node: unknown, maps: ExportBundle['maps'], prod: { media: Map<string, number>; thinkers: Map<string, number>; topics: Map<string, number> }): unknown {
  if (Array.isArray(node)) return node.map((item) => remapLexical(item, maps, prod))
  if (!node || typeof node !== 'object') return node
  const rec = node as DocRec
  const next: DocRec = {}
  for (const [k, v] of Object.entries(rec)) {
    if (k === 'image' && typeof v === 'number') next[k] = mapOneId(v, maps.media, prod.media) ?? v
    else if (k === 'thinker' && typeof v === 'number') next[k] = mapOneId(v, maps.thinkers, prod.thinkers) ?? v
    else if (k === 'topic' && typeof v === 'number') next[k] = mapOneId(v, maps.topics, prod.topics) ?? v
    else if (k === 'file' && typeof v === 'number') next[k] = mapOneId(v, maps.media, prod.media) ?? v
    else next[k] = remapLexical(v, maps, prod)
  }
  return next
}

async function runExport(payload: Payload): Promise<void> {
  const [papers, units, topics, thinkers, media, sources, categories, tags, pages, siteSettings, navigation, ca, posts] = await Promise.all([
    payload.find({ collection: 'papers', limit: 50, depth: 0, overrideAccess: true }),
    payload.find({ collection: 'units', limit: 100, depth: 1, overrideAccess: true }),
    payload.find({ collection: 'topics', limit: 500, depth: 0, draft: true, overrideAccess: true }),
    payload.find({ collection: 'thinkers', limit: 100, depth: 0, draft: true, overrideAccess: true }),
    payload.find({ collection: 'media', where: { filename: { in: [...BLOG_ASSETS] } }, limit: 20, depth: 0, overrideAccess: true }),
    payload.find({ collection: 'sources', limit: 100, depth: 0, overrideAccess: true }),
    payload.find({ collection: 'blog-categories', limit: 100, depth: 0, overrideAccess: true }),
    payload.find({ collection: 'blog-tags', limit: 200, depth: 0, overrideAccess: true }),
    payload.find({ collection: 'pages', limit: 100, depth: 0, draft: true, overrideAccess: true }),
    payload.findGlobal({ slug: 'site-settings', depth: 0, overrideAccess: true }),
    payload.findGlobal({ slug: 'navigation', depth: 0, overrideAccess: true }),
    payload.find({ collection: 'current-affairs', limit: 100, depth: 0, draft: true, overrideAccess: true }),
    payload.find({ collection: 'posts', limit: 100, depth: 0, draft: true, overrideAccess: true }),
  ])
  const validTags = tags.docs.filter((t) => t.slug !== 'jgvj-bvkj-k-bk-j-m')
  const bundle: ExportBundle = {
    maps: {
      papers: Object.fromEntries(papers.docs.map((p) => [p.id, p.code])),
      units: Object.fromEntries(units.docs.map((u) => [u.id, `${typeof u.paper === 'object' && u.paper ? u.paper.code : 'P1'}:${u.slug}`])),
      topics: Object.fromEntries(topics.docs.flatMap((t) => (t.slug ? [[t.id, t.slug]] : []))),
      thinkers: Object.fromEntries(thinkers.docs.flatMap((t) => (t.slug ? [[t.id, t.slug]] : []))),
      media: Object.fromEntries(media.docs.flatMap((m) => (m.filename ? [[m.id, m.filename]] : []))),
      categories: Object.fromEntries(categories.docs.flatMap((c) => (c.slug ? [[c.id, c.slug]] : []))),
      tags: Object.fromEntries(validTags.flatMap((t) => (t.slug ? [[t.id, t.slug]] : []))),
      pageSlugs: Object.fromEntries(pages.docs.flatMap((p) => (p.slug ? [[p.id, p.slug]] : []))),
    },
    media: media.docs as unknown as DocRec[],
    sources: sources.docs as unknown as DocRec[],
    categories: categories.docs as unknown as DocRec[],
    tags: validTags as unknown as DocRec[],
    pages: pages.docs as unknown as DocRec[],
    siteSettings: siteSettings as unknown as DocRec,
    navigation: navigation as unknown as DocRec,
    currentAffairs: ca.docs.filter((d) => !String(d.headline ?? '').startsWith('[Sample]')) as unknown as DocRec[],
    posts: posts.docs.filter((d) => Boolean(d.title && d.slug)) as unknown as DocRec[],
  }
  fs.writeFileSync(EXPORT_PATH, JSON.stringify(bundle, null, 2))
  console.log(`Exported: media=${bundle.media.length}, sources=${bundle.sources.length}, categories=${bundle.categories.length}, tags=${bundle.tags.length}, pages=${bundle.pages.length}, ca=${bundle.currentAffairs.length}, posts=${bundle.posts.length}`)
}

async function upsertByField(payload: Payload, collection: 'sources' | 'blog-categories' | 'blog-tags', field: string, value: string, data: DocRec): Promise<number> {
  const existing = await payload.find({ collection, where: { [field]: { equals: value } }, limit: 1, depth: 0, overrideAccess: true })
  const hit = existing.docs[0]
  if (hit) {
    await payload.update({ collection, id: hit.id, data: data as never, overrideAccess: true, context: CTX })
    return hit.id
  }
  const created = await payload.create({ collection, data: data as never, overrideAccess: true, context: CTX })
  return created.id
}

async function importBlogMedia(payload: Payload, items: DocRec[]): Promise<Map<string, number>> {
  for (const item of items) {
    const filename = String(item.filename ?? '')
    const existing = await payload.find({ collection: 'media', where: { filename: { equals: filename } }, limit: 1, depth: 0, overrideAccess: true })
    if (existing.docs[0]) continue
    const filePath = path.resolve(process.cwd(), 'public/assets/blog', filename)
    await payload.create({
      collection: 'media',
      data: { alt: String(item.alt ?? filename), license: (item.license as 'own') ?? 'own', credit: (item.credit as string | undefined) ?? 'UPSC OWL Sociology' },
      filePath,
      overwriteExistingFiles: true,
      overrideAccess: true,
      context: CTX,
    })
  }
  const all = await payload.find({ collection: 'media', limit: 200, depth: 0, overrideAccess: true })
  return new Map(all.docs.flatMap((m) => (m.filename ? [[m.filename, m.id]] : [])))
}

async function importPages(payload: Payload, pages: DocRec[], pageSlugs: Record<number, string>): Promise<void> {
  const ordered = [...pages].sort((a, b) => Number(Boolean(relId(a.parent))) - Number(Boolean(relId(b.parent))))
  const prodPagesBySlug = new Map<string, number>()
  for (const page of ordered) {
    const slug = String(page.slug)
    const parentSlug = relId(page.parent) ? pageSlugs[relId(page.parent)!] : undefined
    const parentId = parentSlug ? prodPagesBySlug.get(parentSlug) : undefined
    const existing = await payload.find({ collection: 'pages', where: { path: { equals: String(page.path ?? slug) } }, limit: 1, depth: 0, draft: true, overrideAccess: true })
    const data = { title: page.title, slug, parent: parentId ?? null, layout: stripRowIds(page.layout), seo: page.seo ?? {}, _status: 'published' }
    const doc = existing.docs[0]
      ? await payload.update({ collection: 'pages', id: existing.docs[0].id, data: data as never, draft: false, overrideAccess: true, context: CTX })
      : await payload.create({ collection: 'pages', data: data as never, draft: false, overrideAccess: true, context: CTX })
    prodPagesBySlug.set(slug, doc.id)
  }
}

async function importCurrentAffairs(payload: Payload, bundle: ExportBundle, prodThinkers: Map<string, number>, prodTopics: Map<string, number>): Promise<void> {
  for (const ca of bundle.currentAffairs) {
    const slug = String(ca.slug)
    const existing = await payload.find({ collection: 'current-affairs', where: { slug: { equals: slug } }, limit: 1, depth: 0, draft: true, overrideAccess: true })
    const data = {
      headline: ca.headline,
      slug,
      date: ca.date,
      paper: ca.paper,
      topics: mapManyIds(ca.topics, bundle.maps.topics, prodTopics),
      thinkers: mapManyIds(ca.thinkers, bundle.maps.thinkers, prodThinkers),
      sources: stripRowIds(ca.sources),
      summary: ca.summary,
      seo: ca.seo,
      reviewStatus: 'pending',
      rejectReason: ca.rejectReason ?? null,
      sourceHash: ca.sourceHash,
      embedding: ca.embedding,
      layout: stripRowIds(ca.layout),
      isAiGenerated: Boolean(ca.isAiGenerated),
      aiMeta: ca.aiMeta,
      _status: 'draft',
    }
    if (existing.docs[0]) {
      await payload.update({ collection: 'current-affairs', id: existing.docs[0].id, data: data as never, draft: true, overrideAccess: true, context: CTX })
    } else {
      await payload.create({ collection: 'current-affairs', data: data as never, draft: true, overrideAccess: true, context: CTX })
    }
  }
}

async function importPosts(
  payload: Payload,
  bundle: ExportBundle,
  adminId: number,
  prod: { papers: Map<string, number>; units: Map<string, number>; topics: Map<string, number>; thinkers: Map<string, number>; media: Map<string, number>; categories: Map<string, number>; tags: Map<string, number> },
): Promise<void> {
  for (const post of bundle.posts) {
    const slug = String(post.slug)
    const existing = await payload.find({ collection: 'posts', where: { slug: { equals: slug } }, limit: 1, depth: 0, draft: true, overrideAccess: true })
    const seo = (post.seo as DocRec | undefined) ?? {}
    const data = {
      title: post.title,
      slug,
      excerpt: post.excerpt ?? undefined,
      cover: mapOneId(post.cover, bundle.maps.media, prod.media) ?? null,
      content: remapLexical(post.content, bundle.maps, prod),
      category: mapOneId(post.category, bundle.maps.categories, prod.categories) ?? null,
      tags: mapManyIds(post.tags, bundle.maps.tags, prod.tags),
      papers: mapManyIds(post.papers, bundle.maps.papers, prod.papers),
      units: mapManyIds(post.units, bundle.maps.units, prod.units),
      topics: mapManyIds(post.topics, bundle.maps.topics, prod.topics),
      thinkers: mapManyIds(post.thinkers, bundle.maps.thinkers, prod.thinkers),
      author: adminId,
      publishedAt: post.publishedAt,
      featured: Boolean(post.featured),
      quiz: stripRowIds(post.quiz ?? []),
      faq: stripRowIds(post.faq ?? []),
      seo: { ...seo, ogImage: mapOneId(seo.ogImage, bundle.maps.media, prod.media) ?? null },
      aiSuggestions: post.aiSuggestions ?? null,
      aiStatus: post.aiStatus ?? 'idle',
      contentHash: post.contentHash ?? null,
      _status: post._status === 'published' ? 'published' : 'draft',
    }
    const isDraft = data._status !== 'published'
    if (existing.docs[0]) {
      await payload.update({ collection: 'posts', id: existing.docs[0].id, data: data as never, draft: isDraft, overrideAccess: true, context: CTX })
    } else {
      await payload.create({ collection: 'posts', data: data as never, draft: isDraft, overrideAccess: true, context: CTX })
    }
  }
}

async function runImport(payload: Payload): Promise<void> {
  const bundle = JSON.parse(fs.readFileSync(EXPORT_PATH, 'utf8')) as ExportBundle
  const [users, papers, units, topics, thinkers] = await Promise.all([
    payload.find({ collection: 'users', where: { role: { equals: 'admin' } }, limit: 1, depth: 0, overrideAccess: true }),
    payload.find({ collection: 'papers', limit: 50, depth: 0, overrideAccess: true }),
    payload.find({ collection: 'units', limit: 100, depth: 1, overrideAccess: true }),
    payload.find({ collection: 'topics', limit: 500, depth: 0, draft: true, overrideAccess: true }),
    payload.find({ collection: 'thinkers', limit: 100, depth: 0, draft: true, overrideAccess: true }),
  ])
  const adminId = users.docs[0]?.id
  if (!adminId) throw new Error('Production admin user not found')
  const prodMedia = await importBlogMedia(payload, bundle.media)
  const prodCategories = new Map<string, number>()
  const prodTags = new Map<string, number>()
  for (const s of bundle.sources) await upsertByField(payload, 'sources', 'name', String(s.name), { name: s.name, feedUrl: s.feedUrl, kind: s.kind, trust: s.trust, active: s.active, lastFetchedAt: s.lastFetchedAt, lastError: s.lastError })
  for (const c of bundle.categories) prodCategories.set(String(c.slug), await upsertByField(payload, 'blog-categories', 'slug', String(c.slug), { title: c.title, slug: c.slug, description: c.description, color: c.color }))
  for (const t of bundle.tags) prodTags.set(String(t.slug), await upsertByField(payload, 'blog-tags', 'slug', String(t.slug), { title: t.title, slug: t.slug, description: t.description, color: t.color }))
  const prodPapers = new Map(papers.docs.map((p) => [p.code as string, p.id]))
  const prodUnits = new Map(units.docs.map((u) => [`${typeof u.paper === 'object' && u.paper ? u.paper.code : 'P1'}:${u.slug}`, u.id]))
  const prodTopics = new Map(topics.docs.flatMap((t) => (t.slug ? [[t.slug, t.id]] : [])))
  const prodThinkers = new Map(thinkers.docs.flatMap((t) => (t.slug ? [[t.slug, t.id]] : [])))
  await importPages(payload, bundle.pages, bundle.maps.pageSlugs)
  await payload.updateGlobal({ slug: 'site-settings', overrideAccess: true, context: CTX, data: { siteName: bundle.siteSettings.siteName, telegramUrl: bundle.siteSettings.telegramUrl, featuredThinker: mapOneId(bundle.siteSettings.featuredThinker, bundle.maps.thinkers, prodThinkers) ?? null, pipelineEnabled: bundle.siteSettings.pipelineEnabled, autoPublish: bundle.siteSettings.autoPublish, maxDailyUsd: bundle.siteSettings.maxDailyUsd, autoPublishMinRelevance: bundle.siteSettings.autoPublishMinRelevance } as never })
  await payload.updateGlobal({ slug: 'navigation', overrideAccess: true, context: CTX, data: { header: stripRowIds(bundle.navigation.header), footer: stripRowIds(bundle.navigation.footer) } as never })
  await importCurrentAffairs(payload, bundle, prodThinkers, prodTopics)
  await importPosts(payload, bundle, adminId, { papers: prodPapers, units: prodUnits, topics: prodTopics, thinkers: prodThinkers, media: prodMedia, categories: prodCategories, tags: prodTags })
  console.log('Production CMS import finished cleanly.')
}

const mode = process.env.SYNC_MODE ?? 'export'
const payload = await getPayload({ config })
try {
  if (mode === 'export') await runExport(payload)
  else if (mode === 'import') await runImport(payload)
  else throw new Error(`Unknown SYNC_MODE=${mode}`)
} finally {
  await payload.destroy()
}
