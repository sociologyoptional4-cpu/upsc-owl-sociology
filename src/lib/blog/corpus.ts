import { unit01Notebook } from '@/data/notes/unit-01'
import type { NotebookSection, UnitNotebookSpec } from '@/lib/notes/notebook-types'

export type Snippet = { topicSlug: string; text: string }

const WORD = /[\p{L}\p{N}]{5,}/gu
const MAX_SNIPPET = 450

/** Notes use their own markers ([[thinker:Name]], ==x==, **x**); the writer must see plain text or it copies them literally. */
export const plainNote = (text: string): string => text
  .replace(/\[\[thinker:([^\]]+)\]\]/g, '$1')
  .replace(/==(.+?)==/g, '$1')
  .replace(/[#*>_`]/g, '')
  .trim()

const sectionText = (section: NotebookSection): string[] => {
  switch (section.kind) {
    case 'md': return section.body.split(/\n{2,}/)
    case 'callout': return [section.body]
    case 'keyTerm': return [`${section.term}: ${section.meaning}`]
    case 'thinkerQuote': return [section.quote]
    default: return []
  }
}

/** Every English note paragraph / key term / mind-map point as a small retrievable snippet. */
// Add new units to this list as their notebooks land (same place upload-unit.ts registers them).
const NOTEBOOKS: UnitNotebookSpec[] = [unit01Notebook]

export function buildSnippets(units: UnitNotebookSpec[] = NOTEBOOKS): Snippet[] {
  return units.flatMap((unit) => unit.topics.flatMap((topic) => {
    const texts = [topic.summary, ...topic.sections.flatMap(sectionText), ...topic.mindMap.branches.flatMap((b) => b.points)]
    return texts.map(plainNote).filter((text) => text.length > 40).map((text) => ({ topicSlug: topic.topicSlug, text: text.slice(0, MAX_SNIPPET) }))
  }))
}

const tokens = (text: string): Set<string> => new Set(text.toLowerCase().match(WORD) ?? [])

/** Keyword-overlap ranking (shared long words). Good enough for a few hundred snippets; upgrade to embeddings only if recall suffers. */
export function topSnippets(postText: string, limit = 6, snippets: Snippet[] = buildSnippets()): Snippet[] {
  const post = tokens(postText)
  return snippets
    .map((snippet) => ({ snippet, score: [...tokens(snippet.text)].filter((word) => post.has(word)).length }))
    .filter((entry) => entry.score >= 2)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.snippet)
}
