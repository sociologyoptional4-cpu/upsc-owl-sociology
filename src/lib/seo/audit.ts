/** Pure SEO audit rules for the admin SEO Control Center. No I/O: loaders live in audit-data.ts. */

export type Severity = 'error' | 'warn' | 'info'

export type AuditIssue = {
  id: string
  severity: Severity
  scope: 'site' | 'post'
  title: string
  /** What to do, in Hinglish. */
  fix: string
  subject?: string
  href?: string
}

export type PostSeoInput = {
  id: string
  title: string
  slug: string
  seoTitle?: string | null
  seoDescription?: string | null
  focusKeyword?: string | null
  noindex: boolean
  excerpt?: string | null
  wordCount: number
  topicCount: number
  tagCount: number
  faqCount: number
  hasCover: boolean
}

export type SiteSeoInput = {
  siteUrl?: string
  googleVerified: boolean
  bingVerified: boolean
  indexNow: boolean
  cronSecret: boolean
  publishedPosts: number
  draftPosts: number
  publishedTopicNotes: number
  totalTopics: number
}

export type SeoReport = {
  score: number
  issues: AuditIssue[]
  counts: Record<Severity, number>
}

export const TITLE_MAX = 60
export const DESC_MIN = 120
export const DESC_MAX = 160
export const THIN_WORDS = 300

const WEIGHT: Record<Severity, number> = { error: 8, warn: 3, info: 0 }
const ORDER: Record<Severity, number> = { error: 0, warn: 1, info: 2 }

export function auditPost(post: PostSeoInput): AuditIssue[] {
  const subject = post.title
  const href = `/admin/collections/posts/${post.id}`
  const issue = (id: string, severity: Severity, title: string, fix: string): AuditIssue => ({ id, severity, scope: 'post', title, fix, subject, href })
  const out: AuditIssue[] = []

  const title = (post.seoTitle || post.title).trim()
  if (title.length > TITLE_MAX) out.push(issue('post.title.length', 'warn', `SEO title ${title.length} chars ka hai`, `Google ${TITLE_MAX} chars ke baad kaat deta hai. Chhota karo.`))
  if (title.length < 20) out.push(issue('post.title.length', 'warn', 'SEO title bahut chhota hai', 'Topic + "UPSC Sociology" jaise keywords ke saath 30-60 chars rakho.'))

  const description = (post.seoDescription || post.excerpt || '').trim()
  if (!description) {
    out.push(issue('post.description.missing', 'error', 'Meta description nahi hai', 'SEO tab mein 120-160 chars ki description likho ya AI se bharwao.'))
  } else if (description.length < DESC_MIN || description.length > DESC_MAX) {
    out.push(issue('post.description.length', 'warn', `Description ${description.length} chars ki hai`, `${DESC_MIN}-${DESC_MAX} chars ideal hain.`))
  }

  const keyword = post.focusKeyword?.trim()
  if (!keyword) out.push(issue('post.keyword.missing', 'info', 'Focus keyword set nahi hai', 'Ek main keyword chuno, jaise "durkheim suicide theory".'))
  else if (!title.toLowerCase().includes(keyword.toLowerCase())) out.push(issue('post.keyword.title', 'warn', 'Focus keyword title mein nahi hai', `"${keyword}" ko SEO title mein daalo.`))

  if (post.noindex) out.push(issue('post.noindex', 'warn', 'Post noindex hai', 'Google ise index nahi karega. Jaanbujhkar nahi kiya to SEO tab mein noindex hatao.'))
  if (post.wordCount < THIN_WORDS) out.push(issue('post.thin', 'warn', `Sirf ${post.wordCount} shabd`, `${THIN_WORDS}+ shabd likho, warna Google ise thin content maanta hai.`))
  if (post.topicCount === 0) out.push(issue('post.topics', 'warn', 'Syllabus topic link nahi hai', 'Topic jodo: isse topic page aur blog ek-doosre ko link karte hain.'))
  if (post.tagCount === 0) out.push(issue('post.tags', 'info', 'Koi tag nahi', '2-4 tags lagao.'))
  if (post.faqCount === 0) out.push(issue('post.faq', 'info', 'FAQ nahi hai', '2-3 FAQ jodo: Google result mein FAQ box aa sakta hai.'))
  if (!post.hasCover) out.push(issue('post.cover', 'info', 'Cover image nahi hai', 'Branded OG image apne aap banti hai, par cover se click-through badhta hai.'))
  return out
}

export function auditSite(site: SiteSeoInput): AuditIssue[] {
  const issue = (id: string, severity: Severity, title: string, fix: string, href?: string): AuditIssue => ({ id, severity, scope: 'site', title, fix, href })
  const out: AuditIssue[] = []

  if (!site.siteUrl || /localhost|127\.0\.0\.1/.test(site.siteUrl)) {
    out.push(issue('site.url', 'error', 'SITE_URL production URL nahi hai', 'Vercel env mein SITE_URL apna asli domain set karo (sitemap, canonical, OG isi se bante hain).'))
  }
  if (site.publishedPosts === 0) {
    out.push(issue('site.posts.none', 'error', 'Ek bhi blog post publish nahi hua', 'Pehle 3-4 posts publish karo. Bina content ke SEO kuch nahi karega.', '/admin/collections/posts/create'))
  }
  if (!site.googleVerified) out.push(issue('site.google', 'warn', 'Google Search Console verify nahi hua', 'GSC mein "HTML tag" verification lo, content ko GOOGLE_SITE_VERIFICATION env mein daalo, phir sitemap submit karo.'))
  if (!site.bingVerified) out.push(issue('site.bing', 'warn', 'Bing Webmaster verify nahi hua', 'BING_SITE_VERIFICATION env daalo. (GSC se import bhi kar sakte ho.)'))
  if (!site.indexNow) out.push(issue('site.indexnow', 'warn', 'IndexNow key nahi hai', 'INDEXNOW_KEY (16-64 hex) env mein daalo: publish pe Bing ko turant ping jayega.'))
  if (!site.cronSecret) out.push(issue('site.cron', 'warn', 'CRON_SECRET nahi hai', 'Bina iske blog jobs (AI SEO bharna, scheduled publish) nahi chalenge.'))
  if (site.draftPosts > 0) out.push(issue('site.drafts', 'info', `${site.draftPosts} blog draft publish ka intezaar kar rahe hain`, 'Review karke publish karo.', '/admin/collections/posts'))
  if (site.totalTopics > 0 && site.publishedTopicNotes < site.totalTopics) {
    out.push(issue('site.topics.empty', 'info', `${site.totalTopics - site.publishedTopicNotes} topics ke notes abhi khaali hain`, 'Khaali topic pages thin content hain. Roz ke AI notes inhe bharte jayenge.', '/admin/review'))
  }
  return out
}

export function buildSeoReport(site: SiteSeoInput, posts: PostSeoInput[]): SeoReport {
  const issues = [...auditSite(site), ...posts.flatMap(auditPost)].sort((a, b) => ORDER[a.severity] - ORDER[b.severity])
  const counts: Record<Severity, number> = { error: 0, warn: 0, info: 0 }
  let penalty = 0
  for (const i of issues) {
    counts[i.severity] += 1
    penalty += WEIGHT[i.severity]
  }
  return { score: Math.max(0, 100 - penalty), issues, counts }
}
