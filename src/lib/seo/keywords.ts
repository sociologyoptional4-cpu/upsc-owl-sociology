import type { BlogPostDetail } from '@/lib/data/types'

export const COMPETITOR_CORE_KEYWORDS = [
  'UPSC Sociology Optional',
  'Sociology Optional Notes',
  'UPSC Sociology Mains PYQ',
  'Sociology Optional Paper 1 Notes',
  'Sociology Optional Paper 2 Indian Society',
  'UPSC Sociology Thinkers',
  'Sociology Optional Hinglish Notes',
  'Sociology Answer Writing UPSC',
] as const

/** Deduplicates keywords preserving priority order and capping length for meta/schema tags. */
function dedupeKeywords(items: (string | null | undefined)[], max = 18): string[] {
  const seen = new Set<string>()
  const out: string[] = []
  for (const raw of items) {
    const clean = raw?.trim()
    if (!clean) continue
    const key = clean.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    out.push(clean)
    if (out.length >= max) break
  }
  return out
}

/** Combines focus keyword, paper targets, syllabus topics, thinkers, tags, and competitor core queries. */
export function buildBlogKeywords(post: BlogPostDetail): string[] {
  const paperTerms = post.papers.map((code) =>
    code === 'P1' ? 'UPSC Sociology Paper 1' : 'UPSC Sociology Paper 2 Indian Society',
  )
  return dedupeKeywords([
    post.seo.focusKeyword,
    ...paperTerms,
    post.category?.title,
    ...post.topics.map((t) => t.title),
    ...post.relatedTopics.map((t) => t.title),
    ...post.thinkers.map((t) => t.name),
    ...post.tags.map((t) => t.title),
    ...COMPETITOR_CORE_KEYWORDS,
  ])
}

/** Root metadata keyword list aligned with top-ranking UPSC Sociology Optional queries. */
export function buildSiteKeywords(): string[] {
  return [...COMPETITOR_CORE_KEYWORDS, 'Karl Marx', 'Emile Durkheim', 'Max Weber', 'M. N. Srinivas', 'B. R. Ambedkar']
}
