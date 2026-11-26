import 'dotenv/config'
import fs from 'node:fs'
import path from 'node:path'

const isProd = process.argv.includes('--prod')
if (isProd) {
  ;(process.env as Record<string, string>).NODE_ENV = 'production'
  const prodUrl = process.env.PROD_DATABASE_URL
  if (!prodUrl) throw new Error('PROD_DATABASE_URL missing in .env')
  process.env.DATABASE_URL = prodUrl
  const caPath = path.resolve(process.cwd(), 'prod-ca-2021.crt')
  if (!process.env.DATABASE_SSL_CA && fs.existsSync(caPath)) {
    process.env.DATABASE_SSL_CA = fs.readFileSync(caPath, 'utf8')
  }
}

const CTX = { disableRevalidate: true, skipBlogOrganize: true, skipExternal: true }

function deriveKeyword(title: string): string {
  const words = title
    .replace(/[&:–—,|/()]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2)
  return words.slice(0, 4).join(' ')
}

function fitSeoTitle(title: string, kw: string): string {
  if (title.length <= 60 && title.toLowerCase().includes(kw.toLowerCase())) return title
  const withKw = title.toLowerCase().includes(kw.toLowerCase()) ? title : `${kw}: ${title}`
  return withKw.length <= 60 ? withKw : withKw.slice(0, 57).trimEnd() + '...'
}

function fitSeoDesc(raw: string | null | undefined, title: string, kw: string): string {
  const base = (raw || '').trim()
  if (base.length >= 110 && base.length <= 160) return base
  const fallback = base.length >= 60 ? base : `${title} — UPSC Sociology Optional Hinglish notes, thinkers, PYQs & current affairs (${kw}).`
  if (fallback.length < 110) {
    const padded = `${fallback} Complete UPSC Mains analysis with examples & data.`
    return padded.slice(0, 160)
  }
  return fallback.length <= 160 ? fallback : fallback.slice(0, 157).trimEnd() + '...'
}

async function run(): Promise<void> {
  const [{ getPayload }, { default: config }] = await Promise.all([import('payload'), import('@payload-config')])
  const payload = await getPayload({ config })

  // Unpublish empty test stub `hello` so thin placeholder content never hurts Google Helpful Content ranking.
  const helloStub = await payload.find({ collection: 'posts', where: { slug: { equals: 'hello' } }, limit: 1, depth: 0, draft: true, overrideAccess: true })
  if (helloStub.docs[0] && helloStub.docs[0]._status === 'published') {
    await payload.update({
      collection: 'posts',
      id: helloStub.docs[0].id,
      draft: true,
      data: { _status: 'draft' },
      overrideAccess: true,
      context: CTX,
    })
    console.log(`[${isProd ? 'PROD' : 'LOCAL'}] Unpublished thin stub post 'hello'`)
  }

  const posts = await payload.find({
    collection: 'posts',
    where: { _status: { equals: 'published' } },
    limit: 500,
    depth: 0,
    overrideAccess: true,
  })

  const defaultMedia = await payload.find({
    collection: 'media',
    where: { filename: { equals: 'p1-u1-01-sociological-imagination.webp' } },
    limit: 1,
    depth: 0,
    overrideAccess: true,
  })
  const fallbackCoverId = defaultMedia.docs[0]?.id ?? null

  let fixed = 0
  for (const post of posts.docs) {
    const existingKw = post.seo?.focusKeyword?.trim()
    const focusKeyword = existingKw && existingKw.length >= 3 ? existingKw : deriveKeyword(post.title)
    const seoTitle = fitSeoTitle(post.seo?.title?.trim() || post.title, focusKeyword)
    const seoDescription = fitSeoDesc(post.seo?.description || post.excerpt, post.title, focusKeyword)
    const needsCover = !post.cover && fallbackCoverId
    const needsOg = !post.seo?.ogImage && (post.cover || fallbackCoverId)

    const changed =
      focusKeyword !== post.seo?.focusKeyword ||
      seoTitle !== post.seo?.title ||
      seoDescription !== post.seo?.description ||
      Boolean(needsCover) ||
      Boolean(needsOg)

    if (!changed) continue

    await payload.update({
      collection: 'posts',
      id: post.id,
      draft: false,
      overrideAccess: true,
      context: CTX,
      data: {
        ...(needsCover ? { cover: fallbackCoverId } : {}),
        seo: {
          title: seoTitle,
          description: seoDescription,
          focusKeyword,
          ...(needsOg ? { ogImage: post.cover || fallbackCoverId } : {}),
        },
      },
    })
    fixed += 1
  }

  const totalPublished = await payload.count({ collection: 'posts', where: { _status: { equals: 'published' } }, overrideAccess: true })
  console.log(`[${isProd ? 'PROD' : 'LOCAL'}] SEO optimized ${fixed}/${posts.docs.length} published posts. Total published: ${totalPublished.totalDocs}`)
  process.exit(0)
}

run().catch((err: unknown) => {
  console.error('optimize-blogs-seo failed:', err)
  process.exit(1)
})
