import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'

import { imagesFrom } from '@/components/admin/write/api'
import { AttachmentList } from '@/components/blog/AttachmentList'
import { GalleryBlock, InfographicBlock } from '@/components/blog/MediaBlocks'
import type { ResolvedBlogBlocks } from '@/lib/data/types'

const media = (id: number) => ({ url: `/assets/img-${id}.png`, alt: `Alt ${id}`, width: 800, height: 600 })
const resolved: ResolvedBlogBlocks = { thinkers: {}, topics: {}, pyqs: {}, media: { 1: media(1), 2: media(2), 3: media(3) } }
const html = (node: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(node)

describe('blog media blocks', () => {
  it('renders an infographic with title, zoom button and download link', () => {
    const out = html(createElement(InfographicBlock, { fields: { image: 1, title: 'Caste vs Class', caption: 'Tulna', downloadable: true }, resolved }))
    expect(out).toContain('Caste vs Class')
    expect(out).toContain('bada dekho')
    expect(out).toContain('Download')
  })

  it('hides download when the block says not downloadable', () => {
    const out = html(createElement(InfographicBlock, { fields: { image: 1, title: 'T', downloadable: false }, resolved }))
    expect(out).not.toContain('Download')
  })

  it('renders nothing when the image cannot be resolved', () => {
    expect(html(createElement(InfographicBlock, { fields: { image: 99, title: 'T' }, resolved }))).toBe('')
    expect(html(createElement(GalleryBlock, { fields: { images: [{ image: 99 }] }, resolved }))).toBe('')
  })

  it('renders a gallery with the chosen column count and skips unresolved rows', () => {
    const out = html(createElement(GalleryBlock, { fields: { columns: '3', images: [{ image: 1, caption: 'Ek' }, { image: 99 }, { image: 3 }] }, resolved }))
    expect(out).toContain('data-columns="3"')
    expect(out.match(/<figure/g)).toHaveLength(2)
    expect(out).toContain('Ek')
  })
})

describe('attachment list', () => {
  it('renders nothing when empty', () => {
    expect(html(createElement(AttachmentList, { items: [] }))).toBe('')
  })

  it('shows label and a readable size', () => {
    const out = html(createElement(AttachmentList, { items: [{ label: 'Notes PDF', url: '/n.pdf', sizeKb: 2048 }, { label: 'Chhota', url: '/c.pdf', sizeKb: 0.2 }] }))
    expect(out).toContain('Notes PDF')
    expect(out).toContain('2.0 MB')
    expect(out).toContain('1 KB')
  })
})

describe('imagesFrom', () => {
  const file = (name: string, type: string) => new File(['x'], name, { type })
  it('keeps only image files from a drop or paste list', () => {
    const files = imagesFrom([file('a.png', 'image/png'), file('n.pdf', 'application/pdf'), file('b.jpg', 'image/jpeg')])
    expect(files.map((f) => f.name)).toEqual(['a.png', 'b.jpg'])
  })
  it('handles empty input', () => {
    expect(imagesFrom(null)).toEqual([])
  })
})
