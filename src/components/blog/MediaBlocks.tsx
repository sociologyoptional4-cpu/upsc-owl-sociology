'use client'

import Image from 'next/image'
import { useState } from 'react'

import type { BlogMedia, ResolvedBlogBlocks } from '@/lib/data/types'

import { Lightbox, type LightboxItem } from './Lightbox'

type Fields = Record<string, unknown>

const idOf = (v: unknown): number | null =>
  typeof v === 'number' ? v : typeof v === 'object' && v !== null && typeof (v as { id?: unknown }).id === 'number' ? (v as { id: number }).id : null
const text = (v: unknown): string => (typeof v === 'string' ? v.trim() : '')

function mediaOf(value: unknown, resolved: ResolvedBlogBlocks): BlogMedia | null {
  const id = idOf(value)
  const direct = typeof value === 'object' && value !== null && 'url' in value ? (value as BlogMedia) : null
  const media = (id ? resolved.media[id] : null) ?? direct
  return media?.url ? media : null
}

/** Infographic: full-width card, tap to zoom, optional download. */
export function InfographicBlock({ fields, resolved }: { fields: Fields; resolved: ResolvedBlogBlocks }) {
  const [open, setOpen] = useState(false)
  const media = mediaOf(fields.image, resolved)
  if (!media) return null
  const title = text(fields.title)
  const caption = text(fields.caption)
  const credit = text(fields.credit)
  const downloadable = fields.downloadable !== false
  const item: LightboxItem = { ...media, alt: media.alt || title, caption: caption || null }
  return (
    <figure className="infographic">
      {title ? <figcaption className="infographic-title">{title}</figcaption> : null}
      <button type="button" className="infographic-open" onClick={() => setOpen(true)} aria-label={`${title || 'Infographic'} bada dekho`}>
        <Image src={media.url} alt={item.alt} width={media.width || 1200} height={media.height || 1600} sizes="(min-width: 768px) 720px, 100vw" className="h-auto w-full" />
        <span className="infographic-hint" aria-hidden>🔍 Bada dekho</span>
      </button>
      {caption || credit || downloadable ? (
        <div className="infographic-foot">
          <span>{caption} {credit ? <span className="text-ink-mute">({credit})</span> : null}</span>
          {downloadable ? <a href={media.url} download target="_blank" rel="noopener noreferrer">Download ↓</a> : null}
        </div>
      ) : null}
      {open ? <Lightbox items={[item]} index={0} downloadable={downloadable} onIndex={() => undefined} onClose={() => setOpen(false)} /> : null}
    </figure>
  )
}

/** Gallery: 2 or 3 columns, every thumb opens a browsable lightbox. */
export function GalleryBlock({ fields, resolved }: { fields: Fields; resolved: ResolvedBlogBlocks }) {
  const [current, setCurrent] = useState<number | null>(null)
  const rows = Array.isArray(fields.images) ? (fields.images as Fields[]) : []
  const items: LightboxItem[] = rows.flatMap((row) => {
    const media = mediaOf(row.image, resolved)
    return media ? [{ ...media, caption: text(row.caption) || null }] : []
  })
  if (items.length === 0) return null
  const columns = fields.columns === '3' ? 3 : 2
  return (
    <div className="gallery" data-columns={columns}>
      {items.map((item, index) => (
        <figure key={`${item.url}-${index}`} className="gallery-item">
          <button type="button" onClick={() => setCurrent(index)} aria-label={`${item.alt || 'Image'} bada dekho`}>
            <Image src={item.url} alt={item.alt} width={item.width || 800} height={item.height || 600} sizes={`(min-width: 768px) ${columns === 3 ? 240 : 360}px, 50vw`} className="gallery-img" />
          </button>
          {item.caption ? <figcaption>{item.caption}</figcaption> : null}
        </figure>
      ))}
      {current !== null ? <Lightbox items={items} index={current} onIndex={setCurrent} onClose={() => setCurrent(null)} /> : null}
    </div>
  )
}
