import 'dotenv/config'
import fs from 'node:fs'
import path from 'node:path'

// Set --prod DB env before Payload initializes config/pool.
const isProd = process.argv.includes('--prod')
if (isProd) {
  const prodUrl = process.env.PROD_DATABASE_URL
  if (!prodUrl) throw new Error('PROD_DATABASE_URL missing in .env')
  process.env.DATABASE_URL = prodUrl
  const caPath = path.resolve(process.cwd(), 'prod-ca-2021.crt')
  if (!process.env.DATABASE_SSL_CA && fs.existsSync(caPath)) {
    process.env.DATABASE_SSL_CA = fs.readFileSync(caPath, 'utf8')
  }
}

const CTX = { disableRevalidate: true, skipBlogOrganize: true, skipExternal: true }

async function attachSrinivasPortrait(payload: import('payload').Payload): Promise<void> {
  const filename = 'mn-srinivas.webp'
  const filePath = path.resolve(process.cwd(), 'public/assets/thinkers', filename)
  if (!fs.existsSync(filePath)) throw new Error(`Missing portrait file: ${filePath}`)

  const existingMedia = await payload.find({ collection: 'media', where: { filename: { equals: filename } }, limit: 1, depth: 0, overrideAccess: true })
  let mediaId: number
  if (existingMedia.docs[0]) {
    mediaId = existingMedia.docs[0].id
    await payload.update({
      collection: 'media',
      id: mediaId,
      data: { alt: 'Portrait of M. N. Srinivas', license: 'own', credit: 'Portrait illustration: UPSC OWL Sociology (Own)' },
      filePath,
      overwriteExistingFiles: true,
      overrideAccess: true,
      context: CTX,
    })
  } else {
    const created = await payload.create({
      collection: 'media',
      data: { alt: 'Portrait of M. N. Srinivas', license: 'own', credit: 'Portrait illustration: UPSC OWL Sociology (Own)' },
      filePath,
      overrideAccess: true,
      context: CTX,
    })
    mediaId = created.id
  }

  const found = await payload.find({ collection: 'thinkers', where: { slug: { equals: 'mn-srinivas' } }, limit: 1, depth: 0, draft: true, overrideAccess: true })
  if (!found.docs[0]) throw new Error('Thinker mn-srinivas not found in DB')
  await payload.update({
    collection: 'thinkers',
    id: found.docs[0].id,
    data: { portrait: mediaId, _status: 'published' },
    draft: false,
    overrideAccess: true,
    context: CTX,
  })
  console.log(`[${isProd ? 'PROD' : 'LOCAL'}] Attached portrait media #${mediaId} to mn-srinivas (#${found.docs[0].id})`)
}

async function run(): Promise<void> {
  const [{ getPayload }, { default: config }, { STARTER_BLOGS }, { makeBlockNode, markdownToBlogLexical }, { slugify }] = await Promise.all([
    import('payload'),
    import('@payload-config'),
    import('@/data/blogs'),
    import('@/lib/blog/markdown'),
    import('@/lib/slug'),
  ])

  const payload = await getPayload({ config })
  await attachSrinivasPortrait(payload)

  const [cats, existingTags, papers, units, topics, thinkers, media, users] = await Promise.all([
    payload.find({ collection: 'blog-categories', limit: 100, depth: 0, overrideAccess: true }),
    payload.find({ collection: 'blog-tags', limit: 300, depth: 0, overrideAccess: true }),
    payload.find({ collection: 'papers', limit: 20, depth: 0, overrideAccess: true }),
    payload.find({ collection: 'units', limit: 100, depth: 0, overrideAccess: true }),
    payload.find({ collection: 'topics', limit: 500, depth: 0, draft: true, overrideAccess: true }),
    payload.find({ collection: 'thinkers', limit: 100, depth: 0, draft: true, overrideAccess: true }),
    payload.find({ collection: 'media', limit: 200, depth: 0, overrideAccess: true }),
    payload.find({ collection: 'users', where: { role: { equals: 'admin' } }, limit: 1, depth: 0, overrideAccess: true }),
  ])

  const catMap = new Map(cats.docs.flatMap((c) => (c.slug ? [[c.slug, c.id]] : [])))
  const tagMap = new Map(existingTags.docs.flatMap((t) => (t.slug ? [[t.slug, t.id]] : [])))
  const paperMap = new Map(papers.docs.map((p) => [p.code, p.id]))
  const unitMap = new Map(units.docs.flatMap((u) => (u.slug ? [[u.slug, u.id]] : [])))
  const topicMap = new Map(topics.docs.flatMap((t) => (t.slug ? [[t.slug, t.id]] : [])))
  const thinkerMap = new Map(thinkers.docs.flatMap((t) => (t.slug ? [[t.slug, t.id]] : [])))
  const mediaMap = new Map(media.docs.flatMap((m) => (m.filename ? [[m.filename, m.id]] : [])))
  const authorId = users.docs[0]?.id ?? 1

  let createdCount = 0
  let updatedCount = 0

  for (const spec of STARTER_BLOGS) {
    const tagIds: number[] = []
    for (const title of spec.tagTitles) {
      const slug = slugify(title)
      if (!slug) continue
      let tagId = tagMap.get(slug)
      if (!tagId) {
        const created = await payload.create({ collection: 'blog-tags', data: { title, slug, color: 'yellow' }, overrideAccess: true, context: CTX })
        tagId = created.id
        tagMap.set(slug, tagId)
      }
      tagIds.push(tagId)
    }

    const coverId = mediaMap.get(spec.coverFilename) ?? null
    const children: unknown[] = []
    for (const section of spec.sections) {
      if ('markdown' in section) {
        const converted = await markdownToBlogLexical(payload, section.markdown)
        children.push(...(converted.root.children ?? []))
      } else {
        children.push(makeBlockNode(section.block.blockType, section.block))
      }
    }

    const data = {
      title: spec.title,
      slug: spec.slug,
      excerpt: spec.excerpt,
      ...(coverId ? { cover: coverId } : {}),
      content: { root: { type: 'root', version: 1, direction: 'ltr', format: '', indent: 0, children } } as never,
      category: catMap.get(spec.categorySlug) ?? null,
      tags: tagIds,
      papers: spec.papers.map((code) => paperMap.get(code)).filter((id): id is number => typeof id === 'number'),
      units: spec.unitSlugs.map((s) => unitMap.get(s)).filter((id): id is number => typeof id === 'number'),
      topics: spec.topicSlugs.map((s) => topicMap.get(s)).filter((id): id is number => typeof id === 'number').slice(0, 3),
      thinkers: spec.thinkerSlugs.map((s) => thinkerMap.get(s)).filter((id): id is number => typeof id === 'number'),
      author: authorId,
      publishedAt: spec.publishedAt,
      featured: Boolean(spec.featured),
      faq: spec.faq,
      quiz: spec.quiz.map((q) => ({ ...q, options: q.options.map((text) => ({ text })) })),
      seo: {
        title: spec.seo.title.slice(0, 60),
        description: spec.seo.description.slice(0, 160),
        focusKeyword: spec.seo.focusKeyword,
        ...(coverId ? { ogImage: coverId } : {}),
      },
      aiStatus: 'done' as const,
      _status: 'published' as const,
    }

    const existing = await payload.find({ collection: 'posts', where: { slug: { equals: spec.slug } }, limit: 1, depth: 0, draft: true, overrideAccess: true })
    if (existing.docs[0]) {
      await payload.update({ collection: 'posts', id: existing.docs[0].id, data, draft: false, overrideAccess: true, context: CTX })
      updatedCount += 1
    } else {
      await payload.create({ collection: 'posts', data, draft: false, overrideAccess: true, context: CTX })
      createdCount += 1
    }
  }

  const totalPublished = await payload.count({ collection: 'posts', where: { _status: { equals: 'published' } }, overrideAccess: true })
  console.log(`[${isProd ? 'PROD' : 'LOCAL'}] Blogs done: created=${createdCount}, updated=${updatedCount}, totalPublished=${totalPublished.totalDocs}`)
  process.exit(0)
}

run().catch((err: unknown) => {
  console.error('publish-starter-blogs failed:', err)
  process.exit(1)
})
