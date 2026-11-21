import { convertMarkdownToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import type { Payload } from 'payload'

import { blogEditor } from '@/lib/lexical/blogEditor'
import { sanitizeMarkdown } from '@/lib/ingest/markdownToLexical'

import type { LexNode } from './text'
import { applyMarkers } from './text'

/** Markdown → Lexical using the blog editor config (tables, blocks, colour state). `==x==` becomes a marker. */
export async function markdownToBlogLexical(payload: Payload, markdown: string): Promise<{ root: LexNode }> {
  const editorConfig = await editorConfigFactory.fromEditor({ config: payload.config, editor: blogEditor() })
  const converted = convertMarkdownToLexical({ editorConfig, markdown: sanitizeMarkdown(markdown) }) as { root: LexNode }
  return { root: { ...converted.root, children: applyMarkers(converted.root.children ?? []) } }
}

export const emptyLexical = (): { root: LexNode } => ({ root: { type: 'root', children: [] } })

/** Appends the children of `extra` to `base` (used when ChatGPT text is pasted into a non-empty post). */
export function appendLexical(base: { root: LexNode }, extra: { root: LexNode }): { root: LexNode } {
  return { root: { ...base.root, children: [...(base.root.children ?? []), ...(extra.root.children ?? [])] } }
}

let blockCounter = 0
/** Lexical block node as Payload serialises it (`fields` holds blockType + data). */
export function makeBlockNode(blockType: string, fields: Record<string, unknown>): LexNode {
  blockCounter += 1
  return { type: 'block', version: 2, format: '', fields: { id: `ai${Date.now().toString(36)}${blockCounter}`, blockType, ...fields } } as LexNode
}

/** Splits the first plain occurrence of `anchor` inside a text node into [before][link][after]. */
export function insertLink(root: { root: LexNode }, anchor: string, href: string): boolean {
  let done = false
  const walk = (node: LexNode): LexNode[] => {
    if (done) return [node]
    if (node.type === 'link' || node.type === 'autolink') return [node]
    if (node.type === 'text' && typeof node.text === 'string') {
      const index = node.text.indexOf(anchor)
      if (index === -1) return [node]
      done = true
      const before = node.text.slice(0, index)
      const after = node.text.slice(index + anchor.length)
      const link = { type: 'link', version: 3, format: '', indent: 0, direction: 'ltr', fields: { linkType: 'custom', url: href, newTab: false }, children: [{ ...node, text: anchor }] } as LexNode
      return [...(before ? [{ ...node, text: before }] : []), link, ...(after ? [{ ...node, text: after }] : [])]
    }
    return node.children ? [{ ...node, children: node.children.flatMap(walk) }] : [node]
  }
  const next = root.root.children?.flatMap(walk) ?? []
  if (done) root.root.children = next
  return done
}
