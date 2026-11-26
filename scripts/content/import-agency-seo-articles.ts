import 'dotenv/config'
import fs from 'node:fs'
import path from 'node:path'
import { z } from 'zod'

const DEFAULT_JSON_PATH = '/Volumes/ssd t7/marketting agency/.worktrees/agency-os-v1/seo-articles/articles.json'
const CANONICAL_BASE = 'https://sociology4upsc.com'
const CTX = { disableRevalidate: true, skipBlogOrganize: true, skipExternal: true }

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

const seoArticleSchema = z.object({
  slug: z.string().min(3),
  keyword: z.string().min(3),
  title: z.string().min(5),
  paper: z.string().min(1),
  unit: z.string().min(1),
  index: z.number().int().positive(),
  metaDescription: z.string().min(20),
  contentMarkdown: z.string().min(200),
})

type SeoArticle = z.infer<typeof seoArticleSchema>
type FaqItem = { question: string; answer: string }

function parseFaqs(markdown: string): FaqItem[] {
  const faqIdx = markdown.indexOf('## Frequently Asked Questions')
  if (faqIdx === -1) return []
  const tail = markdown.slice(faqIdx)
  const items: FaqItem[] = []
  const rx = /\*\*(?:\d+\.\s*)?([^*\n]+\?)\*\*\s*\n+([\s\S]*?)(?=\n\*\*|\n>|\n##|$)/g
  for (const match of tail.matchAll(rx)) {
    const question = match[1]?.trim()
    const answer = match[2]?.replace(/\s+/g, ' ').trim()
    if (question && answer) items.push({ question, answer })
  }
  return items.slice(0, 8)
}

function cleanBodyMarkdown(markdown: string): string {
  const withoutH1 = markdown.replace(/^#\s+[^\n]+\n+/, '')
  const faqIdx = withoutH1.indexOf('## Frequently Asked Questions')
  if (faqIdx !== -1) return withoutH1.slice(0, faqIdx).trim()
  return withoutH1.replace(/\n>\s*\*\*Accelerate Your 300\+[\s\S]*$/m, '').trim()
}

function extractExcerpt(cleanedMarkdown: string, fallback: string): string {
  const blocks = cleanedMarkdown.split(/\n{2,}/)
  for (const raw of blocks) {
    const trimmed = raw.trim()
    if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('|') || trimmed.startsWith('>') || trimmed.startsWith('-')) continue
    const plain = trimmed.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\*([^*]+)\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\s+/g, ' ').trim()
    if (plain.length >= 60) return plain.length <= 240 ? plain : `${plain.slice(0, 237).replace(/\s+\S*$/, '')}...`
  }
  return fallback.slice(0, 240)
}

function trimAtWord(input: string, maxLen: number): string {
  const clean = input.trim()
  if (clean.length <= maxLen) return clean
  const sliced = clean.slice(0, maxLen)
  const lastSpace = sliced.lastIndexOf(' ')
  return (lastSpace > maxLen * 0.6 ? sliced.slice(0, lastSpace) : sliced).trim()
}

function resolveCategorySlug(article: SeoArticle): string {
  const slugLower = article.slug.toLowerCase()
  const unitLower = article.unit.toLowerCase()
  if (article.paper === 'Strategy') {
    return slugLower.includes('pyq') || slugLower.includes('answer') ? 'answer-writing' : 'strategy-and-toppers'
  }
  if (article.paper === 'Paper 1 & 2') {
    return slugLower.includes('pyq') ? 'answer-writing' : 'strategy-and-toppers'
  }
  if (unitLower.includes('thinker') || slugLower.includes('mn-srinivas')) return 'thinkers'
  if (article.paper === 'Paper 1') return 'paper-1-concepts'
  return 'paper-2-india'
}

function resolvePaperCodes(paper: string): ('P1' | 'P2')[] {
  const hasP1 = paper.includes('Paper 1') || paper === 'Strategy'
  const hasP2 = paper.includes('Paper 2') || paper === 'Strategy'
  const out: ('P1' | 'P2')[] = []
  if (hasP1) out.push('P1')
  if (hasP2) out.push('P2')
  return out.length ? out : ['P1', 'P2']
}

function buildTags(article: SeoArticle): string[] {
  const base = ['UPSC Sociology Optional', article.paper === 'Strategy' ? 'Sociology Strategy' : article.paper]
  const slug = article.slug.toLowerCase()
  if (slug.includes('pyq')) base.push('UPSC PYQs')
  if (slug.includes('marx')) base.push('Karl Marx')
  if (slug.includes('durkheim')) base.push('Emile Durkheim')
  if (slug.includes('weber')) base.push('Max Weber')
  if (slug.includes('parsons')) base.push('Talcott Parsons')
  if (slug.includes('merton')) base.push('Robert Merton')
  if (slug.includes('mead')) base.push('G. H. Mead')
  if (slug.includes('srinivas') || slug.includes('caste')) base.push('M. N. Srinivas')
  return Array.from(new Set(base)).slice(0, 5)
}

async function run(): Promise<void> {
  const filePath = process.argv.find((a) => a.startsWith('--file='))?.split('=')[1] ?? DEFAULT_JSON_PATH
  const rawJson = JSON.parse(fs.readFileSync(filePath, 'utf8')) as unknown
  const itemsRaw = Array.isArray(rawJson) ? rawJson : (rawJson as { articles?: unknown[] }).articles ?? []
  const articles = z.array(seoArticleSchema).parse(itemsRaw)

  const [{ getPayload }, { default: config }, { markdownToBlogLexical }, { slugify }] = await Promise.all([
    import('payload'),
    import('@payload-config'),
    import('@/lib/blog/markdown'),
    import('@/lib/slug'),
  ])

  const payload = await getPayload({ config })
  const [cats, tagsRes, papersRes, unitsRes, topicsRes, thinkersRes, usersRes] = await Promise.all([
    payload.find({ collection: 'blog-categories', limit: 100, depth: 0, overrideAccess: true }),
    payload.find({ collection: 'blog-tags', limit: 500, depth: 0, overrideAccess: true }),
    payload.find({ collection: 'papers', limit: 20, depth: 0, overrideAccess: true }),
    payload.find({ collection: 'units', limit: 100, depth: 0, overrideAccess: true }),
    payload.find({ collection: 'topics', limit: 500, depth: 0, draft: true, overrideAccess: true }),
    payload.find({ collection: 'thinkers', limit: 100, depth: 0, draft: true, overrideAccess: true }),
    payload.find({ collection: 'users', where: { role: { equals: 'admin' } }, limit: 1, depth: 0, overrideAccess: true }),
  ])

  const catMap = new Map(cats.docs.flatMap((c) => (c.slug ? [[c.slug, c.id]] : [])))
  const tagMap = new Map(tagsRes.docs.flatMap((t) => (t.slug ? [[t.slug, t.id]] : [])))
  const paperMap = new Map(papersRes.docs.map((p) => [p.code, p.id]))
  const unitsList = unitsRes.docs
  const topicsList = topicsRes.docs
  const thinkersList = thinkersRes.docs
  const authorId = usersRes.docs[0]?.id ?? 1

  let created = 0
  let updated = 0

  for (const article of articles) {
    const faq = parseFaqs(article.contentMarkdown)
    const cleanedMd = cleanBodyMarkdown(article.contentMarkdown)
    const content = await markdownToBlogLexical(payload, cleanedMd)
    const excerpt = extractExcerpt(cleanedMd, article.metaDescription)

    const tagIds: number[] = []
    for (const tagTitle of buildTags(article)) {
      const tSlug = slugify(tagTitle)
      if (!tSlug) continue
      let tagId = tagMap.get(tSlug)
      if (!tagId) {
        const res = await payload.create({ collection: 'blog-tags', data: { title: tagTitle, slug: tSlug, color: 'yellow' }, overrideAccess: true, context: CTX })
        tagId = res.id
        tagMap.set(tSlug, tagId)
      }
      tagIds.push(tagId)
    }

    const searchText = `${article.title} ${article.slug} ${article.keyword}`.toLowerCase()
    const matchedThinkerIds = thinkersList
      .filter((t) => {
        const parts = t.name.toLowerCase().split(/\s+/).filter((p) => p.length > 3)
        return parts.some((p) => searchText.includes(p))
      })
      .map((t) => t.id)
      .slice(0, 5)

    const unitNumberMatch = article.unit.match(/Unit\s+(\d+)/i)
    const unitNum = unitNumberMatch ? Number(unitNumberMatch[1]) : null
    const paperCodes = resolvePaperCodes(article.paper)
    const paperIds = paperCodes.map((c) => paperMap.get(c)).filter((id): id is number => typeof id === 'number')
    const matchedUnit = unitNum ? unitsList.find((u) => u.number === unitNum && (!paperIds.length || paperIds.includes(typeof u.paper === 'number' ? u.paper : u.paper?.id ?? -1))) : undefined
    const matchedTopicIds = matchedUnit
      ? topicsList.filter((t) => (typeof t.unit === 'number' ? t.unit : t.unit?.id) === matchedUnit.id).map((t) => t.id).slice(0, 3)
      : []

    const dayHour = String(Math.max(1, 22 - article.index)).padStart(2, '0')
    const docData = {
      title: article.title,
      slug: article.slug,
      excerpt,
      content: content as never,
      category: catMap.get(resolveCategorySlug(article)) ?? catMap.get('strategy-and-toppers') ?? null,
      tags: tagIds,
      papers: paperIds,
      ...(matchedUnit ? { units: [matchedUnit.id] } : {}),
      ...(matchedTopicIds.length ? { topics: matchedTopicIds } : {}),
      ...(matchedThinkerIds.length ? { thinkers: matchedThinkerIds } : {}),
      author: authorId,
      publishedAt: `2026-11-26T${dayHour}:00:00.000Z`,
      featured: article.index <= 2,
      faq,
      seo: {
        title: trimAtWord(article.title, 60),
        description: article.metaDescription.slice(0, 160),
        focusKeyword: trimAtWord(article.keyword, 80),
        canonical: `${CANONICAL_BASE}/blog/${article.slug}`,
      },
      aiStatus: 'done' as const,
      _status: 'published' as const,
    }

    const existing = await payload.find({ collection: 'posts', where: { slug: { equals: article.slug } }, limit: 1, depth: 0, draft: true, overrideAccess: true })
    if (existing.docs[0]) {
      await payload.update({ collection: 'posts', id: existing.docs[0].id, data: docData, draft: false, overrideAccess: true, context: CTX })
      updated += 1
    } else {
      await payload.create({ collection: 'posts', data: docData, draft: false, overrideAccess: true, context: CTX })
      created += 1
    }
    console.log(`[${article.index}/20] ${existing.docs[0] ? 'UPDATED' : 'CREATED'} /blog/${article.slug} (faqs=${faq.length})`)
  }

  console.log(`DONE (${isProd ? 'PROD' : 'LOCAL'}): created=${created}, updated=${updated}, total=${articles.length}`)
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
