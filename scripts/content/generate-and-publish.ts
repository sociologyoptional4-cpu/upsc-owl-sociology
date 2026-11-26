import 'dotenv/config'
import fs from 'node:fs'
import path from 'node:path'
import OpenAI from 'openai'
import { z } from 'zod'

import { BLOG_CATALOG, type BlogBrief } from './catalog-blogs'
import { CA_CATALOG, type CaBrief } from './catalog-ca'

const isProd = process.argv.includes('--prod')
const onlyArg = process.argv.find((a) => a.startsWith('--only='))?.split('=')[1]
const skipGen = process.argv.includes('--cached-only')

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

const CACHE_DIR = path.resolve(
  '/Users/ujjawalchaudhary/.gemini/antigravity/brain/9f9b4a35-0361-4a4f-ad26-dadd794dfcbc/scratch/content-cache',
)
const CTX = { disableRevalidate: true, skipBlogOrganize: true, skipExternal: true, ingestValidated: true }
const MODEL = process.env.WRITER_MODEL || 'gpt-4o-mini'
const CONCURRENCY = 8

const blogGeneratedSchema = z.object({
  excerpt: z.string().min(40).max(280),
  seo: z.object({
    title: z.string().min(15).max(60),
    description: z.string().min(50).max(160),
    focusKeyword: z.string().min(3).max(60),
  }),
  introMarkdown: z.string().min(200),
  upscAngleCallout: z.object({ title: z.string().min(4), body: z.string().min(40) }),
  thinkersMarkdown: z.string().min(350),
  compare: z.object({
    leftTitle: z.string().min(3),
    rightTitle: z.string().min(3),
    rows: z.array(z.object({ aspect: z.string(), left: z.string(), right: z.string() })).min(3).max(5),
  }),
  indianDataMarkdown: z.string().min(300),
  keyTerm: z.object({ term: z.string().min(2), meaning: z.string().min(20) }),
  critiqueMarkdown: z.string().min(200),
  answerBox: z.object({
    intro: z.string().min(30),
    points: z.array(z.string().min(20)).min(3).max(5),
    conclusion: z.string().min(30),
  }),
  trapCallout: z.object({ title: z.string().min(4), body: z.string().min(30) }),
  faq: z.array(z.object({ question: z.string().min(10), answer: z.string().min(30) })).min(3).max(4),
  quiz: z
    .array(
      z.object({
        question: z.string().min(10),
        options: z.array(z.string().min(2)).length(4),
        answerIndex: z.number().int().min(0).max(3),
        explanation: z.string().min(15),
      }),
    )
    .min(3)
    .max(4),
})

const caGeneratedSchema = z.object({
  summary: z.string().min(50).max(280),
  seo: z.object({ title: z.string().min(15).max(60), description: z.string().min(50).max(160) }),
  bullets: z.array(z.string().min(25)).min(3).max(5),
  analysisMarkdown: z.string().min(600),
  keyTerms: z.array(z.object({ term: z.string().min(2), meaning: z.string().min(20) })).min(3).max(5),
  answerTip: z.string().min(40),
})

type BlogGenerated = z.infer<typeof blogGeneratedSchema>
type CaGenerated = z.infer<typeof caGeneratedSchema>

function ensureDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true })
}

async function generateJson<T>(
  openai: OpenAI,
  cacheFile: string,
  schema: z.ZodType<T>,
  systemPrompt: string,
  userPrompt: string,
): Promise<T> {
  if (fs.existsSync(cacheFile)) {
    const cached = JSON.parse(fs.readFileSync(cacheFile, 'utf8')) as unknown
    return schema.parse(cached)
  }
  if (skipGen) throw new Error(`Missing cached item: ${cacheFile}`)

  let lastErr: unknown
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const completion = await openai.chat.completions.create({
        model: MODEL,
        response_format: { type: 'json_object' },
        max_completion_tokens: 8000,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
      })
      const choice = completion.choices[0]
      if (choice?.finish_reason === 'length') throw new Error('Response truncated at max_completion_tokens')
      const raw = choice?.message?.content?.trim() ?? ''
      const parsed = schema.parse(JSON.parse(raw))
      ensureDir(path.dirname(cacheFile))
      fs.writeFileSync(cacheFile, JSON.stringify(parsed, null, 2), 'utf8')
      return parsed
    } catch (err) {
      lastErr = err
      await new Promise((r) => setTimeout(r, 1200 * attempt))
    }
  }
  throw lastErr
}

async function mapConcurrent<T, R>(items: readonly T[], limit: number, fn: (item: T, idx: number) => Promise<R>): Promise<R[]> {
  const results = new Array<R>(items.length)
  let nextIdx = 0
  async function worker() {
    while (nextIdx < items.length) {
      const cur = nextIdx
      nextIdx += 1
      results[cur] = await fn(items[cur]!, cur)
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => worker()))
  return results
}

const BLOG_SYSTEM = `You are a senior UPSC Civil Services Sociology Optional mentor writing in crisp Hinglish (Roman Hindi + exact English academic sociology terms). Return ONLY strict JSON matching the requested schema. Include named thinkers, classic books, Indian data/reports (NFHS-5, PLFS, NCRB, ASER, Xaxa, Sachar, NITI MPI, Oxfam/WIL), and real case studies. Never invent fake URLs. Respect max char limits strictly: seo.title <= 60 chars, seo.description <= 160 chars, excerpt <= 260 chars.`

function blogPrompt(b: BlogBrief): string {
  return `Write a comprehensive UPSC Sociology Optional blog JSON for:
Title: ${b.title}
Papers: ${b.papers.join(', ')}
Core Angle, Thinkers & Data to cover: ${b.angle}

Return JSON with keys:
- excerpt (140-240 chars Hinglish summary with data hook)
- seo: { title (<=60 chars), description (<=160 chars), focusKeyword }
- introMarkdown (## heading + 220+ words setting conceptual puzzle & Indian relevance)
- upscAngleCallout: { title, body (100-220 chars exam linkage note) }
- thinkersMarkdown (## heading + 350+ words covering 3-5 named sociologists, their concepts/books, and analytical contrast)
- compare: { leftTitle, rightTitle, rows: [4 rows of { aspect, left, right }] }
- indianDataMarkdown (## heading + 320+ words with specific empirical Indian surveys/committees/SC rulings/ethnographic studies)
- keyTerm: { term, meaning }
- critiqueMarkdown (## heading + 200+ words on limitations, counter-thinkers, and nuanced synthesis)
- answerBox: { intro, points: [4 high-scoring Mains bullets], conclusion }
- trapCallout: { title, body (common UPSC aspirant mistake to avoid) }
- faq: [3 items of { question, answer }]
- quiz: [3 MCQs of { question, options: [4 strings], answerIndex: 0..3, explanation }]`
}

const CA_SYSTEM = `You are a UPSC Sociology Optional Current Affairs analyst writing in crisp Hinglish (Roman script with exact English sociological terms). Return ONLY strict JSON matching the schema. Always link the news item explicitly to Paper 1 & Paper 2 syllabus concepts, named thinkers, empirical Indian data, and a model Mains question approach. Respect seo.title <= 60 chars and seo.description <= 160 chars.`

function caPrompt(c: CaBrief): string {
  return `Write a Sociology-linked Current Affairs article JSON for:
Headline: ${c.headline}
Date: ${c.date} · Paper: ${c.paper}
Linked Syllabus Topics: ${c.topicSlugs.join(', ')}
Key Thinkers: ${c.thinkerSlugs.join(', ')}
Sociological & Data Brief: ${c.angle}

Return JSON with keys:
- summary (120-250 chars crisp Hinglish deck)
- seo: { title (<=60 chars), description (<=160 chars) }
- bullets: [4 crisp data-backed summary bullets]
- analysisMarkdown (700+ words structured with ## headings: 1. Khabar & Latest Data, 2. Sociological Perspectives & Thinkers, 3. Indian Context & Case Studies, 4. UPSC Mains Linkage & Model Question Approach)
- keyTerms: [4 items of { term, meaning }]
- answerTip (80-200 chars actionable Mains exam tip)`
}

async function publishAll(
  generatedBlogs: { brief: BlogBrief; data: BlogGenerated }[],
  generatedCa: { brief: CaBrief; data: CaGenerated }[],
): Promise<void> {
  const [{ getPayload }, { default: config }, { makeBlockNode, markdownToBlogLexical }, { markdownToLexical }, { sourceHash }, { slugify }] =
    await Promise.all([
      import('payload'),
      import('@payload-config'),
      import('@/lib/blog/markdown'),
      import('@/lib/ingest/markdownToLexical'),
      import('@/lib/ingest/hash'),
      import('@/lib/slug'),
    ])

  const payload = await getPayload({ config })
  const [cats, existingTags, papers, units, topics, thinkers, media, users] = await Promise.all([
    payload.find({ collection: 'blog-categories', limit: 100, depth: 0, overrideAccess: true }),
    payload.find({ collection: 'blog-tags', limit: 500, depth: 0, overrideAccess: true }),
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

  let bCreated = 0
  let bUpdated = 0
  for (const { brief, data } of generatedBlogs) {
    const tagIds: number[] = []
    for (const title of brief.tagTitles) {
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

    const mdBlocks = [data.introMarkdown, data.thinkersMarkdown, data.indianDataMarkdown, data.critiqueMarkdown]
    const converted = await Promise.all(mdBlocks.map((md) => markdownToBlogLexical(payload, md)))
    const children: unknown[] = [
      ...(converted[0]!.root.children ?? []),
      makeBlockNode('blogCallout', { variant: 'upscAngle', ...data.upscAngleCallout }),
      ...(converted[1]!.root.children ?? []),
      makeBlockNode('compare', data.compare),
      ...(converted[2]!.root.children ?? []),
      makeBlockNode('keyTerm', data.keyTerm),
      ...(converted[3]!.root.children ?? []),
      makeBlockNode('answerBox', {
        intro: data.answerBox.intro,
        points: data.answerBox.points.map((text) => ({ text })),
        conclusion: data.answerBox.conclusion,
      }),
      makeBlockNode('blogCallout', { variant: 'galtiMat', ...data.trapCallout }),
    ]

    const coverId = mediaMap.get(brief.coverFilename) ?? null
    const docData = {
      title: brief.title,
      slug: brief.slug,
      excerpt: data.excerpt.slice(0, 280),
      ...(coverId ? { cover: coverId } : {}),
      content: { root: { type: 'root', version: 1, direction: 'ltr', format: '', indent: 0, children } } as never,
      category: catMap.get(brief.categorySlug) ?? null,
      tags: tagIds,
      papers: brief.papers.map((code) => paperMap.get(code)).filter((id): id is number => typeof id === 'number'),
      units: brief.unitSlugs.map((s) => unitMap.get(s)).filter((id): id is number => typeof id === 'number'),
      topics: brief.topicSlugs.map((s) => topicMap.get(s)).filter((id): id is number => typeof id === 'number').slice(0, 3),
      thinkers: brief.thinkerSlugs.map((s) => thinkerMap.get(s)).filter((id): id is number => typeof id === 'number'),
      author: authorId,
      publishedAt: brief.publishedAt,
      featured: false,
      faq: data.faq,
      quiz: data.quiz.map((q) => ({ ...q, options: q.options.map((text) => ({ text })) })),
      seo: {
        title: data.seo.title.slice(0, 60),
        description: data.seo.description.slice(0, 160),
        focusKeyword: data.seo.focusKeyword.slice(0, 60),
        ...(coverId ? { ogImage: coverId } : {}),
      },
      aiStatus: 'done' as const,
      _status: 'published' as const,
    }

    const existing = await payload.find({ collection: 'posts', where: { slug: { equals: brief.slug } }, limit: 1, depth: 0, draft: true, overrideAccess: true })
    if (existing.docs[0]) {
      await payload.update({ collection: 'posts', id: existing.docs[0].id, data: docData, draft: false, overrideAccess: true, context: CTX })
      bUpdated += 1
    } else {
      await payload.create({ collection: 'posts', data: docData, draft: false, overrideAccess: true, context: CTX })
      bCreated += 1
    }
  }

  let caCreated = 0
  let caUpdated = 0
  for (const { brief, data } of generatedCa) {
    const richContent = await markdownToLexical(payload, data.analysisMarkdown)
    const layout = [
      { blockType: 'summary', heading: 'Khabar ek nazar mein', points: data.bullets.map((text) => ({ text })) },
      { blockType: 'richText', content: richContent },
      { blockType: 'keyTerms', caption: 'Sociological Key Terms', rows: data.keyTerms },
      { blockType: 'callout', tone: 'tip', title: 'UPSC Mains Answer Tip', body: data.answerTip },
    ]
    const caDocData = {
      headline: brief.headline,
      slug: brief.slug,
      date: `${brief.date}T06:00:00.000Z`,
      paper: brief.paper,
      topics: brief.topicSlugs.map((s) => topicMap.get(s)).filter((id): id is number => typeof id === 'number'),
      thinkers: brief.thinkerSlugs.map((s) => thinkerMap.get(s)).filter((id): id is number => typeof id === 'number'),
      sources: brief.sources,
      summary: data.summary.slice(0, 280),
      seo: { title: data.seo.title.slice(0, 60), description: data.seo.description.slice(0, 160) },
      reviewStatus: 'approved' as const,
      sourceHash: sourceHash(`curated:${brief.slug}`),
      layout: layout as never,
      isAiGenerated: true,
      aiMeta: { model: MODEL, promptVersion: 'curated-v1', relevance: 0.96, costUsd: 0 },
      _status: 'published' as const,
    }

    const existing = await payload.find({ collection: 'current-affairs', where: { slug: { equals: brief.slug } }, limit: 1, depth: 0, draft: true, overrideAccess: true })
    if (existing.docs[0]) {
      await payload.update({ collection: 'current-affairs', id: existing.docs[0].id, data: caDocData, draft: false, overrideAccess: true, context: CTX })
      caUpdated += 1
    } else {
      await payload.create({ collection: 'current-affairs', data: caDocData, draft: false, overrideAccess: true, context: CTX })
      caCreated += 1
    }
  }

  const [totalPosts, totalCa] = await Promise.all([
    payload.count({ collection: 'posts', where: { _status: { equals: 'published' } }, overrideAccess: true }),
    payload.count({ collection: 'current-affairs', where: { _status: { equals: 'published' } }, overrideAccess: true }),
  ])
  console.log(`[${isProd ? 'PROD' : 'LOCAL'}] Blogs: +${bCreated} created, ${bUpdated} updated (Total Published: ${totalPosts.totalDocs})`)
  console.log(`[${isProd ? 'PROD' : 'LOCAL'}] CA: +${caCreated} created, ${caUpdated} updated (Total Published: ${totalCa.totalDocs})`)
}

async function main(): Promise<void> {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey && !skipGen) throw new Error('OPENAI_API_KEY missing in .env')
  const openai = new OpenAI({ apiKey: apiKey || 'unused' })

  const blogsToRun = onlyArg === 'ca' ? [] : BLOG_CATALOG
  const caToRun = onlyArg === 'blogs' ? [] : CA_CATALOG
  console.log(`[${isProd ? 'PROD' : 'LOCAL'}] Starting: ${blogsToRun.length} blogs + ${caToRun.length} CA using model=${MODEL}`)

  let bDone = 0
  const generatedBlogs = await mapConcurrent(blogsToRun, CONCURRENCY, async (brief) => {
    const cacheFile = path.join(CACHE_DIR, 'blogs', `${brief.slug}.json`)
    const data = await generateJson(openai, cacheFile, blogGeneratedSchema, BLOG_SYSTEM, blogPrompt(brief))
    bDone += 1
    if (bDone % 10 === 0 || bDone === blogsToRun.length) console.log(`Generated blogs: ${bDone}/${blogsToRun.length}`)
    return { brief, data }
  })

  let caDone = 0
  const generatedCa = await mapConcurrent(caToRun, CONCURRENCY, async (brief) => {
    const cacheFile = path.join(CACHE_DIR, 'ca', `${brief.slug}.json`)
    const data = await generateJson(openai, cacheFile, caGeneratedSchema, CA_SYSTEM, caPrompt(brief))
    caDone += 1
    if (caDone % 5 === 0 || caDone === caToRun.length) console.log(`Generated CA: ${caDone}/${caToRun.length}`)
    return { brief, data }
  })

  await publishAll(generatedBlogs, generatedCa)
  process.exit(0)
}

main().catch((err: unknown) => {
  console.error('generate-and-publish failed:', err)
  process.exit(1)
})
