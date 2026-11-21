import { createHash } from 'node:crypto'

import { slugify } from '@/lib/slug'

export type TocItem = { id: string; text: string; level: 2 | 3 }

export type LexNode = {
  type?: string
  text?: string
  tag?: string
  format?: number | string
  url?: string
  listType?: string
  fields?: Record<string, unknown>
  children?: LexNode[]
  $?: Record<string, string>
}

export type LexRoot = { root?: LexNode } | null | undefined

const BLOCK_TYPES = new Set(['paragraph', 'heading', 'listitem', 'quote', 'tablecell', 'tablerow'])
const SKIP_FIELD_KEYS = new Set(['id', 'blockType', 'blockName', 'videoId', 'variant', 'direction', 'thinker', 'topic', 'image', 'pyqs'])

function fieldStrings(value: unknown, skipKeys: Set<string>, out: string[]): void {
  if (typeof value === 'string') { out.push(value); return }
  if (Array.isArray(value)) { for (const item of value) fieldStrings(item, skipKeys, out); return }
  if (typeof value === 'object' && value !== null) {
    for (const [key, item] of Object.entries(value)) if (!skipKeys.has(key)) fieldStrings(item, skipKeys, out)
  }
}

/** Plain text of a Lexical document, including text inside blog blocks. */
export function lexicalToPlain(data: LexRoot, opts: { skipFieldKeys?: string[] } = {}): string {
  const skip = new Set([...SKIP_FIELD_KEYS, ...(opts.skipFieldKeys ?? [])])
  const parts: string[] = []
  const walk = (node: LexNode): void => {
    if (node.type === 'text' && typeof node.text === 'string') { parts.push(node.text); return }
    if (node.type === 'linebreak') { parts.push('\n'); return }
    if (node.type === 'block' || node.type === 'inlineBlock') {
      const strings: string[] = []
      fieldStrings(node.fields, skip, strings)
      parts.push(strings.join(' '), '\n')
      return
    }
    for (const child of node.children ?? []) walk(child)
    if (node.type && BLOCK_TYPES.has(node.type)) parts.push('\n')
  }
  if (data?.root) walk(data.root)
  return parts.join('').replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim()
}

export const countWords = (text: string): number => text.trim().split(/\s+/).filter(Boolean).length
export const readingTimeMinutes = (text: string): number => Math.max(1, Math.round(countWords(text) / 200))
export const contentHash = (text: string): string => createHash('sha256').update(text).digest('hex')

export function countBlocks(data: LexRoot): number {
  let count = 0
  const walk = (node: LexNode): void => {
    if (node.type === 'block' || node.type === 'inlineBlock') count += 1
    for (const child of node.children ?? []) walk(child)
  }
  if (data?.root) walk(data.root)
  return count
}

function headingText(node: LexNode): string {
  if (node.type === 'text') return node.text ?? ''
  return (node.children ?? []).map(headingText).join('')
}

/** Extracts h2/h3 headings from Lexical JSON so TOC and heading ids match deterministically. */
export function extractToc(content: unknown): TocItem[] {
  const root = (content as LexRoot)?.root
  const seen = new Map<string, number>()
  const items: TocItem[] = []
  for (const node of root?.children ?? []) {
    if (node.type !== 'heading' || (node.tag !== 'h2' && node.tag !== 'h3')) continue
    const text = headingText(node).trim()
    if (!text) continue
    const base = slugify(text) || 'section'
    const n = (seen.get(base) ?? 0) + 1
    seen.set(base, n)
    items.push({ id: n === 1 ? base : `${base}-${n}`, text, level: node.tag === 'h2' ? 2 : 3 })
  }
  return items
}

const BOLD = 1
const ITALIC = 2
const CODE = 16

function inlineMarkdown(nodes: LexNode[] | undefined): string {
  return (nodes ?? []).map((node) => {
    if (node.type === 'text') {
      let text = node.text ?? ''
      const format = typeof node.format === 'number' ? node.format : 0
      if (format & CODE) text = `\`${text}\``
      if (format & BOLD) text = `**${text}**`
      if (format & ITALIC) text = `*${text}*`
      return text
    }
    if (node.type === 'linebreak') return '\n'
    if (node.type === 'link' || node.type === 'autolink') return `[${inlineMarkdown(node.children)}](${node.fields?.url ?? node.url ?? ''})`
    return inlineMarkdown(node.children)
  }).join('')
}

/** Minimal Lexical → Markdown for the beautifier (headings, lists, quotes, tables, links, bold/italic). */
export function lexicalToMarkdown(data: LexRoot): string {
  const lines: string[] = []
  const blockToMd = (node: LexNode, indent = ''): void => {
    switch (node.type) {
      case 'heading': lines.push(`${'#'.repeat(Math.min(6, Number(node.tag?.slice(1)) || 2))} ${inlineMarkdown(node.children)}`, ''); break
      case 'paragraph': lines.push(inlineMarkdown(node.children), ''); break
      case 'quote': lines.push(`> ${inlineMarkdown(node.children)}`, ''); break
      case 'horizontalrule': lines.push('---', ''); break
      case 'list':
        (node.children ?? []).forEach((item, index) => {
          const marker = node.listType === 'number' ? `${index + 1}.` : '-'
          const nested = (item.children ?? []).filter((child) => child.type === 'list')
          const inline = (item.children ?? []).filter((child) => child.type !== 'list')
          lines.push(`${indent}${marker} ${inlineMarkdown(inline)}`)
          for (const child of nested) blockToMd(child, `${indent}  `)
        })
        lines.push('')
        break
      case 'table': {
        const rows = (node.children ?? []).map((row) => (row.children ?? []).map((cell) => inlineMarkdown((cell.children ?? []).flatMap((p) => p.children ?? []))))
        rows.forEach((cells, index) => {
          lines.push(`| ${cells.join(' | ')} |`)
          if (index === 0) lines.push(`| ${cells.map(() => '---').join(' | ')} |`)
        })
        lines.push('')
        break
      }
      default: for (const child of node.children ?? []) blockToMd(child, indent)
    }
  }
  for (const child of data?.root?.children ?? []) blockToMd(child)
  return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim()
}

/** Wraps `==text==` markers into yellow-highlight text-state nodes. */
export function applyMarkers(nodes: LexNode[]): LexNode[] {
  return nodes.flatMap((node): LexNode[] => {
    if (node.type === 'text' && typeof node.text === 'string' && node.text.includes('==')) {
      const out: LexNode[] = []
      const parts = node.text.split(/==(.+?)==/g)
      parts.forEach((part, index) => {
        if (!part) return
        out.push(index % 2 === 1 ? { ...node, text: part, $: { ...(node.$ ?? {}), highlight: 'yellow' } } : { ...node, text: part })
      })
      return out
    }
    return node.children ? [{ ...node, children: applyMarkers(node.children) }] : [node]
  })
}
