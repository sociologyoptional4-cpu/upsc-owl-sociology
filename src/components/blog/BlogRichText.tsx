import { RichText, type JSXConvertersFunction } from '@payloadcms/richtext-lexical/react'
import React from 'react'

import type { ResolvedBlogBlocks } from '@/lib/data/types'
import { slugify } from '@/lib/slug'

import {
  AnswerBoxBlock,
  BlogCalloutBlock,
  CompareBlock,
  FigureBlock,
  FlowBlock,
  KeyTermBlock,
  PyqEmbedBlock,
  TermChipInline,
  ThinkerQuoteBlock,
  TimelineBlock,
  YouTubeBlock,
} from './BlogBlocks'
import { GalleryBlock, InfographicBlock } from './MediaBlocks'
import './blog.css'

type TextNode = {
  text?: string
  format?: number
  $?: { color?: string; highlight?: string }
}

const IS_BOLD = 1
const IS_ITALIC = 2
const IS_STRIKETHROUGH = 4
const IS_UNDERLINE = 8
const IS_CODE = 16
const IS_SUBSCRIPT = 32
const IS_SUPERSCRIPT = 64

function plainText(nodes: unknown[] | undefined): string {
  return (nodes ?? []).map((n) => {
    const node = n as { text?: string; children?: unknown[] }
    return typeof node.text === 'string' ? node.text : plainText(node.children)
  }).join('')
}

type BlockArg = { node: { fields?: Record<string, unknown> } }

/**
 * Renders Blog Lexical JSON via Payload's JSX converter:
 *  - textState colours/markers → `<span data-color=… data-hl=…>`
 *  - h2/h3 headings get deterministic ids matching `extractToc`
 *  - 10 BLOG_BLOCKS + inline `termChip`
 * Never uses `dangerouslySetInnerHTML`.
 */
export function BlogRichText({ data, resolved }: { data: unknown; resolved: ResolvedBlogBlocks }) {
  if (!data || typeof data !== 'object' || !('root' in data)) return null
  const seen = new Map<string, number>()

  const converters: JSXConvertersFunction = ({ defaultConverters }) => ({
    ...defaultConverters,
    text: ({ node }) => {
      const t = node as unknown as TextNode
      let out: React.ReactNode = t.text ?? ''
      const fmt = t.format ?? 0
      if (fmt & IS_BOLD) out = <strong>{out}</strong>
      if (fmt & IS_ITALIC) out = <em>{out}</em>
      if (fmt & IS_STRIKETHROUGH) out = <span className="line-through">{out}</span>
      if (fmt & IS_UNDERLINE) out = <span className="underline">{out}</span>
      if (fmt & IS_CODE) out = <code className="rounded bg-paper-sunk px-1 py-0.5 text-sm">{out}</code>
      if (fmt & IS_SUBSCRIPT) out = <sub>{out}</sub>
      if (fmt & IS_SUPERSCRIPT) out = <sup>{out}</sup>
      const color = t.$?.color
      const hl = t.$?.highlight
      if (color || hl) {
        out = <span {...(color ? { 'data-color': color } : {})} {...(hl ? { 'data-hl': hl } : {})}>{out}</span>
      }
      return out
    },
    heading: ({ node, nodesToJSX }) => {
      const tag = (node as { tag?: 'h1' | 'h2' | 'h3' | 'h4' }).tag ?? 'h2'
      const children = nodesToJSX({ nodes: node.children })
      if (tag === 'h2' || tag === 'h3') {
        const base = slugify(plainText(node.children)) || 'section'
        const n = (seen.get(base) ?? 0) + 1
        seen.set(base, n)
        const id = n === 1 ? base : `${base}-${n}`
        return tag === 'h2' ? <h2 id={id} className="scroll-mt-24">{children}</h2> : <h3 id={id} className="scroll-mt-24">{children}</h3>
      }
      return React.createElement(tag, null, children)
    },
    blocks: {
      blogCallout: ({ node }: BlockArg) => <BlogCalloutBlock fields={node.fields ?? {}} />,
      thinkerQuote: ({ node }: BlockArg) => <ThinkerQuoteBlock fields={node.fields ?? {}} resolved={resolved} />,
      compare: ({ node }: BlockArg) => <CompareBlock fields={node.fields ?? {}} />,
      timeline: ({ node }: BlockArg) => <TimelineBlock fields={node.fields ?? {}} />,
      flow: ({ node }: BlockArg) => <FlowBlock fields={node.fields ?? {}} />,
      keyTerm: ({ node }: BlockArg) => <KeyTermBlock fields={node.fields ?? {}} resolved={resolved} />,
      pyqEmbed: ({ node }: BlockArg) => <PyqEmbedBlock fields={node.fields ?? {}} resolved={resolved} />,
      answerBox: ({ node }: BlockArg) => <AnswerBoxBlock fields={node.fields ?? {}} />,
      figure: ({ node }: BlockArg) => <FigureBlock fields={node.fields ?? {}} resolved={resolved} />,
      youtube: ({ node }: BlockArg) => <YouTubeBlock fields={node.fields ?? {}} />,
      infographic: ({ node }: BlockArg) => <InfographicBlock fields={node.fields ?? {}} resolved={resolved} />,
      gallery: ({ node }: BlockArg) => <GalleryBlock fields={node.fields ?? {}} resolved={resolved} />,
    },
    inlineBlocks: {
      termChip: ({ node }: BlockArg) => <TermChipInline fields={node.fields ?? {}} resolved={resolved} />,
    },
  })

  return <RichText data={data as never} converters={converters} className="blog-richtext prose-journal max-w-none" />
}
