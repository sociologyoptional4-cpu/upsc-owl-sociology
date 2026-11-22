import JSZip from 'jszip'
import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('@/lib/blog/markdown', () => ({
  markdownToBlogLexical: async (_p: unknown, md: string) => ({ root: { type: 'root', children: [{ type: 'paragraph', children: [{ type: 'text', text: md }] }] } }),
  makeBlockNode: (blockType: string, fields: Record<string, unknown>) => ({ type: 'block', fields: { blockType, ...fields } }),
}))

import { detectKind, fileToMarkdown, htmlToMarkdown, pickTitle, sanitizeHtml } from '@/lib/blog/import/convert'
import { ImportError } from '@/lib/blog/import/errors'
import { importPost } from '@/lib/blog/import/run'

const enc = (s: string) => new TextEncoder().encode(s)

async function docx(text: string): Promise<Uint8Array> {
  const zip = new JSZip()
  zip.file('[Content_Types].xml', '<?xml version="1.0"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>')
  zip.file('_rels/.rels', '<?xml version="1.0"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>')
  zip.file('word/document.xml', `<?xml version="1.0"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body><w:p><w:pPr><w:pStyle w:val="Heading1"/></w:pPr><w:r><w:t>Caste System Notes</w:t></w:r></w:p><w:p><w:r><w:t>${text}</w:t></w:r></w:p></w:body></w:document>`)
  return new Uint8Array(await zip.generateAsync({ type: 'uint8array' }))
}
const pdf = (text: string) => enc(`%PDF-1.4\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj\n3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 612 792]/Contents 4 0 R/Resources<</Font<</F1 5 0 R>>>>>>endobj\n4 0 obj<</Length ${text.length + 40}>>stream\nBT /F1 12 Tf 72 700 Td (${text}) Tj ET\nendstream endobj\n5 0 obj<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>endobj\ntrailer<</Root 1 0 R/Size 6>>\n%%EOF`)

describe('sanitizeHtml + htmlToMarkdown', () => {
  it('removes scripts, handlers, unsafe links and counts dropped images', () => {
    const { html, droppedImages } = sanitizeHtml('<p onclick="x()">Hi <a href="javascript:alert(1)">bad</a> <script>alert(1)</script><img src="data:image/png;base64,AA"></p>')
    expect(html).not.toMatch(/script|onclick|javascript:|<img/i)
    expect(droppedImages).toBe(1)
  })
  it('keeps headings, bold and tables', () => {
    const { markdown } = htmlToMarkdown('<h2>Concepts</h2><p><strong>Anomie</strong> matters</p><table><thead><tr><th>A</th><th>B</th></tr></thead><tbody><tr><td>1</td><td>2</td></tr></tbody></table>')
    expect(markdown).toContain('## Concepts')
    expect(markdown).toContain('**Anomie**')
    expect(markdown).toContain('| A | B |')
  })
  it('warns when images were dropped', () => {
    expect(htmlToMarkdown('<p>x</p><img src="https://evil/x.png">').warnings[0]).toContain('Images alag')
  })
})

describe('detectKind', () => {
  it('trusts magic bytes over the extension', async () => {
    expect(detectKind('a.docx', await docx('x'))).toBe('docx')
    expect(detectKind('a.pdf', pdf('hello'))).toBe('pdf')
    expect(() => detectKind('fake.docx', enc('plain text'))).toThrow(ImportError)
    expect(() => detectKind('fake.pdf', enc('plain text'))).toThrow(ImportError)
    expect(() => detectKind('notes.md', pdf('x'))).toThrow(/match nahi/)
    expect(() => detectKind('a.exe', enc('MZ'))).toThrow(/Sirf/)
  })
})

describe('fileToMarkdown', () => {
  it('reads docx headings and text', async () => {
    const out = await fileToMarkdown('notes.docx', await docx('Caste is a closed system of stratification in India.'))
    expect(out.markdown).toContain('# Caste System Notes')
    expect(out.markdown).toContain('closed system')
  })
  it('reads a text pdf and rejects a scanned one', async () => {
    const out = await fileToMarkdown('n.pdf', pdf('Sociology notes about caste system in India and social change over time'))
    expect(out.markdown).toContain('Sociology notes')
    await expect(fileToMarkdown('scan.pdf', pdf(''))).rejects.toMatchObject({ status: 422 })
  })
  it('rejects binary content disguised as text', async () => {
    await expect(fileToMarkdown('x.txt', new Uint8Array([72, 0, 1, 2]))).rejects.toMatchObject({ status: 415 })
  })
})

describe('pickTitle', () => {
  it('prefers given, then heading, then first line, then filename', () => {
    expect(pickTitle('# Heading\ntext', 'Mera Title')).toBe('Mera Title')
    expect(pickTitle('intro\n## Real **Heading**\nmore')).toBe('Real Heading')
    expect(pickTitle('Just a first line of text')).toBe('Just a first line of text')
    expect(pickTitle('', undefined, 'my-notes_v2.pdf')).toBe('my notes v2')
    expect(pickTitle('')).toBe('Untitled draft')
  })
})

type Doc = Record<string, unknown>
function fakePayload(over: { duplicate?: number; media?: Doc[] } = {}) {
  const created: Doc[] = []
  const payload = {
    find: vi.fn(async ({ collection }: { collection: string }) => collection === 'posts' ? { docs: over.duplicate ? [{ id: over.duplicate }] : [] } : { docs: over.media ?? [] }),
    create: vi.fn(async (args: Doc) => { created.push(args); return { id: args.collection === 'media' ? 50 : 8 } }),
  }
  return { payload: payload as never, created }
}
const NOTE = 'Caste is a system of social stratification in India. '.repeat(3)

describe('importPost', () => {
  beforeEach(() => vi.clearAllMocks())

  it('creates a draft from markdown with a derived title and the logged-in author', async () => {
    const { payload, created } = fakePayload()
    const out = await importPost(payload, 4, { source: 'markdown', text: `# Caste notes\n${NOTE}` })
    expect(out).toMatchObject({ postId: 8, adminUrl: '/admin/collections/posts/8', title: 'Caste notes' })
    expect(created[0]).toMatchObject({ collection: 'posts', draft: true, data: { _status: 'draft', author: 4, title: 'Caste notes' } })
  })

  it('returns 409 with the existing post for duplicate content', async () => {
    const { payload } = fakePayload({ duplicate: 3 })
    await expect(importPost(payload, 1, { source: 'markdown', text: NOTE })).rejects.toMatchObject({ status: 409, data: { postId: 3, adminUrl: '/admin/collections/posts/3' } })
  })

  it('attaches the original PDF only for pdf files', async () => {
    const { payload, created } = fakePayload()
    const bytes = pdf('Sociology notes about caste system in India and social change over time')
    const out = await importPost(payload, 1, { source: 'file', name: 'caste.pdf', bytes, attach: true })
    expect(created.find((c) => c.collection === 'media')).toBeTruthy()
    expect((created.find((c) => c.collection === 'posts') as { data: { attachments: unknown[] } }).data.attachments).toEqual([{ file: 50, label: 'caste' }])
    const docxOut = await importPost(fakePayload().payload, 1, { source: 'file', name: 'n.docx', bytes: await docx(NOTE), attach: true })
    expect(docxOut.warnings).toContain('Sirf PDF attach hoti hai.')
  })

  it('builds one infographic or one gallery block and validates image ids', async () => {
    const one = fakePayload({ media: [{ id: 5, mimeType: 'image/png' }] })
    await importPost(one.payload, 1, { source: 'images', title: 'Caste vs Class', mediaIds: [5], layout: 'infographic' })
    const block = ((one.created[0] as { data: { content: { root: { children: { fields: Record<string, unknown> }[] } } } }).data.content.root.children[0])!.fields
    expect(block).toMatchObject({ blockType: 'infographic', image: 5, title: 'Caste vs Class' })
    const many = fakePayload({ media: [{ id: 1, mimeType: 'image/png' }, { id: 2, mimeType: 'image/jpeg' }] })
    await importPost(many.payload, 1, { source: 'images', title: 'Photos', mediaIds: [1, 2], layout: 'gallery' })
    const gallery = ((many.created[0] as { data: { content: { root: { children: { fields: { images: unknown[] } }[] } } } }).data.content.root.children[0])!.fields
    expect(gallery.images).toHaveLength(2)
    await expect(importPost(fakePayload({ media: [{ id: 1, mimeType: 'application/pdf' }] }).payload, 1, { source: 'images', title: 'Bad', mediaIds: [1], layout: 'infographic' })).rejects.toMatchObject({ status: 422 })
    await expect(importPost(fakePayload().payload, 1, { source: 'images', title: 'Few', mediaIds: [1], layout: 'gallery' })).rejects.toMatchObject({ status: 400 })
  })

  it('builds a template draft with blocks and keeps it out of the AI organizer', async () => {
    const { payload, created } = fakePayload()
    const out = await importPost(payload, 1, { source: 'template', template: 'concept', title: 'Anomie explained' })
    const post = created[0] as { context: Record<string, unknown>; data: { content: { root: { children: { type: string; fields?: { blockType: string } }[] } } } }
    expect(post.context).toMatchObject({ skipBlogOrganize: true })
    expect(post.data.content.root.children.some((c) => c.fields?.blockType === 'answerBox')).toBe(true)
    expect(out.warnings[0]).toContain('[brackets]')
  })

  it('rejects empty and oversize markdown', async () => {
    await expect(importPost(fakePayload().payload, 1, { source: 'markdown', text: 'tiny' })).rejects.toMatchObject({ status: 422 })
    await expect(importPost(fakePayload().payload, 1, { source: 'markdown', text: 'x '.repeat(110_000) })).rejects.toMatchObject({ status: 413 })
  })
})
