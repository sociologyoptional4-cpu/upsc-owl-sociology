/** Pure pre-publish checklist for the post editor (client-safe: no node imports). */

export type CheckLevel = 'error' | 'warn' | 'info'
export type Check = { id: string; ok: boolean; level: CheckLevel; label: string; hint: string }
export type ChecklistInput = {
  title: string; slug?: string; seoTitle: string; seoDescription: string; focusKeyword: string; excerpt: string
  hasCover: boolean; hasCategory: boolean; topicCount: number; tagCount: number; faqCount: number
  content: unknown
}

type Node = { type?: string; text?: string; tag?: string; children?: Node[] }

/** Words and h2 headings straight from Lexical JSON. */
export function contentStats(content: unknown): { words: number; headings: number } {
  let words = 0
  let headings = 0
  const walk = (node: Node | undefined): void => {
    if (!node) return
    if (typeof node.text === 'string') words += node.text.trim().split(/\s+/).filter(Boolean).length
    if (node.type === 'heading' && node.tag === 'h2') headings += 1
    for (const child of node.children ?? []) walk(child)
  }
  walk((content as { root?: Node } | null)?.root)
  return { words, headings }
}

const between = (n: number, min: number, max: number) => n >= min && n <= max
const BAD_SLUGS = new Set(['new', 'untitled', 'draft', 'post', 'test'])

export function runChecklist(input: ChecklistInput): Check[] {
  const { words, headings } = contentStats(input.content)
  const title = input.seoTitle.trim() || input.title.trim()
  const keyword = input.focusKeyword.trim().toLowerCase()
  const desc = input.seoDescription.trim() || input.excerpt.trim()
  const slug = input.slug?.trim().toLowerCase()
  return [
    ...(input.slug !== undefined ? [{
      id: 'slug',
      ok: Boolean(slug) && !BAD_SLUGS.has(slug ?? '') && (slug?.length ?? 0) >= 4,
      level: 'warn' as const,
      label: slug ? `Slug: ${slug}` : 'Slug missing',
      hint: 'Generic ("new", "untitled") ke bajay descriptive English URL slug rakho.',
    }] : []),
    { id: 'words-min', ok: words >= 100, level: 'error', label: `Content: ${words} words`, hint: 'Kam se kam 100 words chahiye, 300+ behtar.' },
    { id: 'words-good', ok: words >= 300, level: 'warn', label: 'Content 300+ words', hint: 'Google patle posts ko kam dikhata hai. Thoda aur samjhao.' },
    { id: 'title-len', ok: between(title.length, 20, 60), level: 'warn', label: `Title ${title.length}/60`, hint: '20-60 characters rakho (SEO title alag de sakte ho).' },
    { id: 'desc', ok: between(desc.length, 120, 160), level: 'warn', label: `Description ${desc.length}/160`, hint: desc ? '120-160 characters rakho.' : 'Khaali hai: save ke baad AI bharega, warna SEO mein likho.' },
    { id: 'keyword', ok: Boolean(keyword) && title.toLowerCase().includes(keyword), level: 'warn', label: 'Focus keyword title mein', hint: keyword ? 'Keyword ko title ki shuruaat ke paas rakho.' : 'SEO mein focus keyword likho (AI bhi bharta hai).' },
    { id: 'cover', ok: input.hasCover, level: 'warn', label: 'Cover image', hint: 'Cover lagao: share preview aur blog card mein dikhti hai.' },
    { id: 'category', ok: input.hasCategory, level: 'warn', label: 'Category', hint: 'Sidebar se category chuno.' },
    { id: 'topic', ok: input.topicCount > 0, level: 'warn', label: 'Syllabus topic link', hint: 'Kam se kam 1 topic jodo: notes se link banta hai.' },
    { id: 'headings', ok: headings >= 2, level: 'info', label: `${headings} H2 headings`, hint: '2+ headings se TOC banta hai aur padhna aasaan hota hai.' },
    { id: 'tags', ok: input.tagCount >= 2, level: 'info', label: `${input.tagCount} tags`, hint: '2-5 tags rakho.' },
    { id: 'faq', ok: input.faqCount >= 2, level: 'info', label: `${input.faqCount} FAQ`, hint: '2+ FAQ se Google mein FAQ result ban sakta hai.' },
  ]
}

export const readiness = (checks: Check[]): 'ready' | 'almost' | 'blocked' =>
  checks.some((c) => !c.ok && c.level === 'error') ? 'blocked' : checks.some((c) => !c.ok && c.level === 'warn') ? 'almost' : 'ready'
