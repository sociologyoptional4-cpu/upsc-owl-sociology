import { convertMarkdownToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import type { Payload } from 'payload'
import { richTextEditor } from '@/lib/lexical/richTextEditor'

export const sanitizeMarkdown = (markdown: string): string => markdown
  .replace(/<[^>]*>/g, '')
  .replace(/^#(?!#)\s+|^#{4,}\s+/gm, '')
  .replace(/\[([^\]]+)\]\((?:javascript|data):((?:[^()]|\([^()]*\))*)\)/gi, '$1')
  .replace(/\[([^\]]+)\]\(((?:[^()]|\([^()]*\))*)\)/g, (_match, label: string, href: string) => {
    try { return /^https?:$/i.test(new URL(href).protocol) ? `[${label}](${href})` : label } catch { return label }
  })

export async function markdownToLexical(payload: Payload, markdown: string): Promise<unknown> {
  const editorConfig = await editorConfigFactory.fromEditor({ config: payload.config, editor: richTextEditor() })
  return convertMarkdownToLexical({ editorConfig, markdown: sanitizeMarkdown(markdown) })
}
