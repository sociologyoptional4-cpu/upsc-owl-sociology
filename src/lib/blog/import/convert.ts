import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'

import { ImportError } from './errors'

export type FileKind = 'md' | 'txt' | 'html' | 'docx' | 'pdf'
export type Converted = { markdown: string; warnings: string[] }

export const MAX_MARKDOWN_CHARS = 200_000
const IMAGE_WARNING = 'Images alag se upload karo (Infographic paste ya Images ka post).'

/** Pure: strips active content before HTML is converted. Images are dropped (never fetched). */
export function sanitizeHtml(html: string): { html: string; droppedImages: number } {
  let dropped = 0
  const clean = html
    .replace(/<(script|style|iframe|object|noscript|form|svg)\b[\s\S]*?<\/\1\s*>/gi, '')
    .replace(/<\/?(script|style|iframe|object|embed|noscript|link|meta|form|svg)\b[^>]*>/gi, '')
    .replace(/<img\b[^>]*>/gi, () => { dropped += 1; return '' })
    .replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/\s(href|src)\s*=\s*("\s*(?:javascript|data|vbscript):[^"]*"|'\s*(?:javascript|data|vbscript):[^']*')/gi, '')
  return { html: clean, droppedImages: dropped }
}

export function htmlToMarkdown(html: string): Converted {
  const { html: clean, droppedImages } = sanitizeHtml(html)
  const service = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced', emDelimiter: '*' })
  service.use(gfm)
  const markdown = service.turndown(clean).replace(/\n{3,}/g, '\n\n').trim()
  return { markdown, warnings: droppedImages > 0 ? [IMAGE_WARNING] : [] }
}

/** Magic bytes first, extension second: a renamed file never reaches the wrong parser. */
export function detectKind(name: string, bytes: Uint8Array): FileKind {
  const ext = name.toLowerCase().match(/\.([a-z0-9]+)$/)?.[1]
  const head = Buffer.from(bytes.subarray(0, 8))
  const isZip = head.subarray(0, 4).equals(Buffer.from([0x50, 0x4b, 0x03, 0x04]))
  const isPdf = head.subarray(0, 5).toString('latin1') === '%PDF-'
  if (ext === 'docx') { if (!isZip) throw new ImportError('Ye file asli .docx nahi lagti.', 415); return 'docx' }
  if (ext === 'pdf') { if (!isPdf) throw new ImportError('Ye file asli PDF nahi lagti.', 415); return 'pdf' }
  if (isZip || isPdf) throw new ImportError('File ka extension aur type match nahi karte.', 415)
  if (ext === 'md' || ext === 'markdown') return 'md'
  if (ext === 'html' || ext === 'htm') return 'html'
  if (ext === 'txt') return 'txt'
  throw new ImportError('Sirf .docx, .pdf, .md, .txt, .html files chalti hain.', 415)
}

export function textLooksBinary(bytes: Uint8Array): boolean {
  return Buffer.from(bytes.subarray(0, 2048)).includes(0)
}

async function docxToMarkdown(bytes: Uint8Array): Promise<Converted> {
  const mammoth = await import('mammoth')
  const result = await mammoth.convertToHtml({ buffer: Buffer.from(bytes) }, { convertImage: mammoth.images.imgElement(async () => ({ src: 'about:blank' })) })
  return htmlToMarkdown(result.value)
}

async function pdfToMarkdown(bytes: Uint8Array): Promise<Converted> {
  const { extractText, getDocumentProxy } = await import('unpdf')
  const pdf = await getDocumentProxy(new Uint8Array(bytes))
  const { text } = await extractText(pdf, { mergePages: true })
  const markdown = text.replace(/\r/g, '').replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim()
  if (markdown.replace(/\s/g, '').length < 40) throw new ImportError('Ye PDF scan lagta hai, text nahi mila. Text wali PDF ya docx use karo.', 422)
  return { markdown, warnings: ['PDF se sirf text aata hai: headings/tables check karke thik karo.'] }
}

export async function fileToMarkdown(name: string, bytes: Uint8Array): Promise<Converted> {
  const kind = detectKind(name, bytes)
  if (kind === 'docx') return docxToMarkdown(bytes)
  if (kind === 'pdf') return pdfToMarkdown(bytes)
  if (textLooksBinary(bytes)) throw new ImportError('Ye file text nahi lagti.', 415)
  const text = new TextDecoder('utf-8').decode(bytes)
  return kind === 'html' ? htmlToMarkdown(text) : { markdown: text.replace(/\r\n?/g, '\n').trim(), warnings: [] }
}

/** Title: given > first markdown heading > first line > filename. */
export function pickTitle(markdown: string, given?: string, filename?: string): string {
  const clean = (value: string) => value.replace(/^#+\s*/, '').replace(/[*_`]/g, '').trim().slice(0, 200)
  if (given?.trim()) return clean(given)
  const heading = markdown.split('\n').find((line) => /^#{1,3}\s+\S/.test(line))
  if (heading) return clean(heading)
  const line = markdown.split('\n').map((l) => l.trim()).find((l) => l.length > 3)
  if (line) return clean(line.slice(0, 120))
  const base = filename?.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim()
  return base ? clean(base) : 'Untitled draft'
}
