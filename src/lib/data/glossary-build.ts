/** Pure: turns keyTerm blocks (blog) and keyTerms tables (notes) into one A-Z glossary. */

export type GlossarySource = { title: string; href: string }
export type GlossaryTerm = { term: string; slug: string; meaning: string; thinker: string | null; sources: GlossarySource[] }
export type GlossaryLetter = { letter: string; terms: GlossaryTerm[] }

type RawTerm = { term: string; meaning: string; thinker?: string | null; source: GlossarySource }
type Node = { type?: string; fields?: Record<string, unknown>; children?: Node[] }

const clean = (v: unknown): string => (typeof v === 'string' ? v.replace(/\s+/g, ' ').trim() : '')
export const termSlug = (term: string): string => term.toLowerCase().normalize('NFKD').replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-+|-+$/g, '').slice(0, 80)

/** keyTerm blocks inside a blog post's Lexical content. */
export function termsFromLexical(content: unknown, source: GlossarySource): RawTerm[] {
  const out: RawTerm[] = []
  const walk = (node: Node | undefined): void => {
    if (!node) return
    const f = node.fields
    if (node.type === 'block' && f?.blockType === 'keyTerm' && clean(f.term) && clean(f.meaning)) out.push({ term: clean(f.term), meaning: clean(f.meaning), source })
    for (const child of node.children ?? []) walk(child)
  }
  walk((content as { root?: Node } | null)?.root)
  return out
}

/** keyTerms table rows inside a topic's page-builder layout. */
export function termsFromLayout(layout: unknown, source: GlossarySource): RawTerm[] {
  if (!Array.isArray(layout)) return []
  return layout.flatMap((block: { blockType?: string; rows?: { term?: unknown; meaning?: unknown; thinker?: unknown }[] }) =>
    block?.blockType === 'keyTerms' && Array.isArray(block.rows)
      ? block.rows.flatMap((row) => (clean(row.term) && clean(row.meaning) ? [{ term: clean(row.term), meaning: clean(row.meaning), thinker: clean(row.thinker) || null, source }] : []))
      : [])
}

/** Merges duplicates (case/space-insensitive), keeps the first meaning, lists every source once, groups A-Z. */
export function buildGlossary(raw: RawTerm[]): GlossaryLetter[] {
  const byKey = new Map<string, GlossaryTerm>()
  for (const item of raw) {
    const slug = termSlug(item.term)
    if (!slug) continue
    const existing = byKey.get(slug)
    if (!existing) { byKey.set(slug, { term: item.term, slug, meaning: item.meaning.slice(0, 600), thinker: item.thinker ?? null, sources: [item.source] }); continue }
    if (!existing.sources.some((s) => s.href === item.source.href)) existing.sources.push(item.source)
    if (!existing.thinker && item.thinker) existing.thinker = item.thinker
  }
  const letters = new Map<string, GlossaryTerm[]>()
  for (const term of [...byKey.values()].sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }))) {
    const first = term.term.charAt(0).toUpperCase()
    const letter = /[A-Z]/.test(first) ? first : '#'
    letters.set(letter, [...(letters.get(letter) ?? []), term])
  }
  return [...letters.entries()].sort(([a], [b]) => (a === '#' ? 1 : b === '#' ? -1 : a.localeCompare(b))).map(([letter, terms]) => ({ letter, terms }))
}
