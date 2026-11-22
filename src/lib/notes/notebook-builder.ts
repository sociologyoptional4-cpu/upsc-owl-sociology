import { convertMarkdownToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import type { Payload } from 'payload'

import { makeBlockNode } from '@/lib/blog/markdown'
import type { LexNode } from '@/lib/blog/text'
import { sanitizeMarkdown } from '@/lib/ingest/markdownToLexical'
import { blogEditor } from '@/lib/lexical/blogEditor'
import type { NotebookSection } from '@/lib/notes/notebook-types'

export type NotebookLookup = {
  thinkersBySlug: Map<string, number>
  mediaByAsset: Map<string, number>
  pyqIdsByYear?: Map<number, number[]>
}

const MARKUP_RE = /==([^=\n]+?)==|\[\[(thinker|eg|trap|link):([^\]]+?)\]\]/g

function applyTextMarkup(node: LexNode): LexNode[] {
  const text = typeof node.text === 'string' ? node.text : ''
  if (!text || (!text.includes('==') && !text.includes('[['))) return [node]

  const fmt = typeof node.format === 'number' ? node.format : 0
  const baseState = node.$ ?? {}
  const out: LexNode[] = []
  let last = 0

  for (const match of text.matchAll(MARKUP_RE)) {
    const start = match.index ?? 0
    if (start > last) out.push({ ...node, text: text.slice(last, start) })
    if (match[1] !== undefined) {
      out.push({ ...node, text: match[1], format: fmt | 1, $: { ...baseState, highlight: 'yellow' } })
    } else {
      const kind = match[2]
      const value = match[3] ?? ''
      if (kind === 'thinker') out.push({ ...node, text: value, format: fmt | 1, $: { ...baseState, color: 'plum' } })
      else if (kind === 'eg') out.push({ ...node, text: value, $: { ...baseState, highlight: 'mint' } })
      else if (kind === 'trap') out.push({ ...node, text: value, $: { ...baseState, highlight: 'pink' } })
      else out.push({ ...node, text: value, format: fmt | 1, $: { ...baseState, color: 'blue' } })
    }
    last = start + match[0].length
  }

  if (last === 0) return [node]
  if (last < text.length) out.push({ ...node, text: text.slice(last) })
  return out
}

/** Recursively converts `==concept==`, `[[thinker:...]]`, `[[eg:...]]`, `[[trap:...]]`, and `[[link:...]]` into Lexical text-state nodes. */
export function applyNotebookMarkup(nodes: LexNode[]): LexNode[] {
  return nodes.flatMap((node): LexNode[] => {
    if (node.type === 'text') return applyTextMarkup(node)
    return node.children ? [{ ...node, children: applyNotebookMarkup(node.children) }] : [node]
  })
}

function resolveId(map: Map<string, number>, key: string, kind: string): number {
  const id = map.get(key)
  if (id === undefined) throw new Error(`Missing ${kind} ID for "${key}"`)
  return id
}

function sectionToBlockNode(section: Exclude<NotebookSection, { kind: 'md' }>, lookup: NotebookLookup): LexNode | null {
  switch (section.kind) {
    case 'callout':
      return makeBlockNode('blogCallout', {
        variant: section.variant,
        ...(section.title ? { title: section.title } : {}),
        body: section.body,
      })
    case 'thinkerQuote':
      return makeBlockNode('thinkerQuote', {
        thinker: resolveId(lookup.thinkersBySlug, section.thinkerSlug, 'thinker'),
        quote: section.quote,
        ...(section.context ? { context: section.context } : {}),
      })
    case 'compare':
      return makeBlockNode('compare', { leftTitle: section.leftTitle, rightTitle: section.rightTitle, rows: section.rows })
    case 'timeline':
      return makeBlockNode('timeline', { items: section.items })
    case 'flow':
      return makeBlockNode('flow', { direction: section.direction ?? 'horizontal', steps: section.steps })
    case 'keyTerm':
      return makeBlockNode('keyTerm', {
        term: section.term,
        meaning: section.meaning,
        ...(section.thinkerSlug ? { thinker: resolveId(lookup.thinkersBySlug, section.thinkerSlug, 'thinker') } : {}),
      })
    case 'answerBox':
      return makeBlockNode('answerBox', {
        intro: section.intro,
        points: section.points.map((text) => ({ text })),
        conclusion: section.conclusion,
      })
    case 'figure':
      return makeBlockNode('figure', {
        image: resolveId(lookup.mediaByAsset, section.assetFile, 'media asset'),
        caption: section.caption,
        ...(section.credit ? { credit: section.credit } : {}),
      })
    case 'pyqEmbed': {
      const ids = section.years.flatMap((year) => lookup.pyqIdsByYear?.get(year) ?? []).slice(0, section.limit ?? 10)
      return ids.length ? makeBlockNode('pyqEmbed', { pyqs: ids }) : null
    }
  }
}

/** Converts an ordered array of typed notebook sections into Payload Lexical JSON ready for `topics.notebookContent`. */
export async function buildNotebookLexical(
  payload: Payload,
  sections: NotebookSection[],
  lookup: NotebookLookup,
): Promise<{ root: LexNode }> {
  const editorConfig = await editorConfigFactory.fromEditor({ config: payload.config, editor: blogEditor() })
  const children: LexNode[] = []

  for (const section of sections) {
    if (section.kind === 'md') {
      const converted = convertMarkdownToLexical({
        editorConfig,
        markdown: sanitizeMarkdown(section.body),
      }) as { root: LexNode }
      children.push(...applyNotebookMarkup(converted.root.children ?? []))
    } else {
      const node = sectionToBlockNode(section, lookup)
      if (node) children.push(node)
    }
  }

  return {
    root: {
      type: 'root',
      version: 1,
      direction: 'ltr',
      format: '',
      indent: 0,
      children,
    } as LexNode,
  }
}
