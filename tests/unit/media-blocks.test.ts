import { describe, expect, it } from 'vitest'

import { blogBlockSchema } from '@/blocks/blog/schema'
import { BLOG_BLOCKS } from '@/blocks/blog/configs'
import { deriveAlt, MAX_IMAGE_BYTES, MAX_PDF_BYTES, uploadSizeError } from '@/lib/mediaRules'

describe('deriveAlt', () => {
  const at = new Date('2026-11-22T08:33:00Z')
  it('names clipboard and generic files by IST time', () => {
    expect(deriveAlt('pasted-image.png', at)).toBe('Pasted image 2026-11-22 14:03')
    expect(deriveAlt('image.png', at)).toBe('Pasted image 2026-11-22 14:03')
    expect(deriveAlt(undefined, at)).toBe('Pasted image 2026-11-22 14:03')
  })
  it('humanises real filenames and caps the length', () => {
    expect(deriveAlt('My Notes_final-v2.JPG')).toBe('My Notes final v2')
    expect(deriveAlt(`${'a'.repeat(300)}.png`)).toHaveLength(120)
  })
})

describe('uploadSizeError', () => {
  it('rejects oversize images and PDFs, accepts the rest', () => {
    expect(uploadSizeError('image/png', MAX_IMAGE_BYTES + 1)).toContain('8 MB')
    expect(uploadSizeError('application/pdf', MAX_PDF_BYTES + 1)).toContain('15 MB')
    expect(uploadSizeError('image/png', MAX_IMAGE_BYTES)).toBeNull()
    expect(uploadSizeError('video/mp4', 99_000_000)).toBeNull()
    expect(uploadSizeError(undefined, undefined)).toBeNull()
  })
})

describe('infographic and gallery blocks', () => {
  it('are registered in BLOG_BLOCKS', () => {
    expect(BLOG_BLOCKS.map((b) => b.slug)).toEqual(expect.arrayContaining(['infographic', 'gallery']))
  })
  it('validates an infographic', () => {
    expect(blogBlockSchema.safeParse({ blockType: 'infographic', image: 3, title: 'Caste vs Class' }).success).toBe(true)
    expect(blogBlockSchema.safeParse({ blockType: 'infographic', image: 3, title: 'x'.repeat(121) }).success).toBe(false)
    expect(blogBlockSchema.safeParse({ blockType: 'infographic', title: 'No image' }).success).toBe(false)
  })
  it('validates gallery size 2-12', () => {
    const rows = (n: number) => Array.from({ length: n }, (_, i) => ({ image: i + 1 }))
    expect(blogBlockSchema.safeParse({ blockType: 'gallery', images: rows(1) }).success).toBe(false)
    expect(blogBlockSchema.safeParse({ blockType: 'gallery', images: rows(2) }).success).toBe(true)
    expect(blogBlockSchema.safeParse({ blockType: 'gallery', images: rows(12), columns: '3' }).success).toBe(true)
    expect(blogBlockSchema.safeParse({ blockType: 'gallery', images: rows(13) }).success).toBe(false)
  })
})
