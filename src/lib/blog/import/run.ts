import type { Payload } from 'payload'

import { markdownToBlogLexical, makeBlockNode } from '@/lib/blog/markdown'
import { contentHash, countWords, lexicalToPlain, type LexNode } from '@/lib/blog/text'
import { ImportError } from './errors'
import { MAX_MARKDOWN_CHARS, fileToMarkdown, htmlToMarkdown, pickTitle } from './convert'

export type ImportInput =
  | { source: 'markdown' | 'html'; text: string; title?: string }
  | { source: 'file'; name: string; bytes: Uint8Array; mimetype?: string; title?: string; attach?: boolean }
  | { source: 'images'; title: string; mediaIds: number[]; layout: 'infographic' | 'gallery' }

export type ImportResult = { postId: number; adminUrl: string; title: string; wordCount: number; warnings: string[] }

const adminUrl = (id: number) => `/admin/collections/posts/${id}`

async function existingPost(payload: Payload, hash: string): Promise<number | null> {
  const found = await payload.find({ collection: 'posts', where: { contentHash: { equals: hash } }, limit: 1, depth: 0, draft: true, overrideAccess: true, select: { title: true } })
  return found.docs[0] ? Number(found.docs[0].id) : null
}

async function attachPdf(payload: Payload, input: Extract<ImportInput, { source: 'file' }>, warnings: string[]): Promise<{ file: number; label: string }[] | undefined> {
  if (!input.attach) return undefined
  if (!input.name.toLowerCase().endsWith('.pdf')) { warnings.push('Sirf PDF attach hoti hai.'); return undefined }
  const media = await payload.create({ collection: 'media', overrideAccess: true, data: { alt: input.title?.trim() || input.name.replace(/\.pdf$/i, ''), license: 'own' }, file: { data: Buffer.from(input.bytes), mimetype: 'application/pdf', name: input.name, size: input.bytes.byteLength } })
  return [{ file: Number(media.id), label: (input.title?.trim() || input.name.replace(/\.pdf$/i, '')).slice(0, 120) }]
}

async function markdownFor(input: Exclude<ImportInput, { source: 'images' }>): Promise<{ markdown: string; warnings: string[]; filename?: string }> {
  if (input.source === 'file') return { ...(await fileToMarkdown(input.name, input.bytes)), filename: input.name }
  if (input.source === 'html') return htmlToMarkdown(input.text)
  return { markdown: input.text.replace(/\r\n?/g, '\n').trim(), warnings: [] }
}

async function verifyImages(payload: Payload, ids: number[]): Promise<void> {
  const found = await payload.find({ collection: 'media', where: { id: { in: ids } }, limit: ids.length, depth: 0, overrideAccess: true, select: { mimeType: true } })
  const ok = new Set(found.docs.filter((d) => d.mimeType?.startsWith('image/')).map((d) => Number(d.id)))
  if (ids.some((id) => !ok.has(id))) throw new ImportError('Kuch images media library mein nahi mili ya image nahi hain.', 422)
}

async function createFromImages(payload: Payload, userId: number | string, input: Extract<ImportInput, { source: 'images' }>): Promise<ImportResult> {
  const ids = [...new Set(input.mediaIds)]
  if (input.layout === 'infographic' && ids.length !== 1) throw new ImportError('Infographic ke liye ek hi image chahiye.', 400)
  if (input.layout === 'gallery' && (ids.length < 2 || ids.length > 12)) throw new ImportError('Gallery ke liye 2 se 12 images chahiye.', 400)
  await verifyImages(payload, ids)
  const title = input.title.trim().slice(0, 200)
  const block = input.layout === 'infographic'
    ? makeBlockNode('infographic', { image: ids[0], title, downloadable: true })
    : makeBlockNode('gallery', { images: ids.map((image) => ({ image })), columns: '2' })
  const content = { root: { type: 'root', format: '', indent: 0, version: 1, direction: 'ltr', children: [block] as LexNode[] } }
  const doc = await payload.create({ collection: 'posts', draft: true, overrideAccess: true, context: { skipExternal: true }, data: { title, content: content as never, author: Number(userId), _status: 'draft' } })
  return { postId: Number(doc.id), adminUrl: adminUrl(Number(doc.id)), title, wordCount: 0, warnings: [] }
}

/** One path for paste, file and image imports. Always a DRAFT; duplicate text → 409 with the old post. */
export async function importPost(payload: Payload, userId: number | string, input: ImportInput): Promise<ImportResult> {
  if (input.source === 'images') return createFromImages(payload, userId, input)
  const converted = await markdownFor(input)
  if (converted.markdown.length < 20) throw new ImportError('Content bahut chhota hai.', 422)
  if (converted.markdown.length > MAX_MARKDOWN_CHARS) throw new ImportError('Content bahut bada hai (2 lakh characters se kam rakho).', 413)
  const title = pickTitle(converted.markdown, input.title, converted.filename)
  const content = await markdownToBlogLexical(payload, converted.markdown)
  const plain = lexicalToPlain(content)
  const duplicate = await existingPost(payload, contentHash(`${title}\n${plain}`))
  if (duplicate) throw new ImportError('Ye content pehle se draft/post mein hai.', 409, { postId: duplicate, adminUrl: adminUrl(duplicate) })
  const warnings = [...converted.warnings]
  const attachments = input.source === 'file' ? await attachPdf(payload, input, warnings) : undefined
  const doc = await payload.create({ collection: 'posts', draft: true, overrideAccess: true, context: { skipExternal: true }, data: { title, content: content as never, author: Number(userId), _status: 'draft', ...(attachments ? { attachments } : {}) } })
  return { postId: Number(doc.id), adminUrl: adminUrl(Number(doc.id)), title, wordCount: countWords(plain), warnings }
}
