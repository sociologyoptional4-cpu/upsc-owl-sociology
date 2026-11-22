'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import type { BlogMedia } from '@/lib/data/types'

export type LightboxItem = BlogMedia & { caption?: string | null }

type Props = {
  items: LightboxItem[]
  index: number
  downloadable?: boolean
  onIndex: (next: number) => void
  onClose: () => void
}

/** Native <dialog> viewer: Esc closes, arrows browse, "Asli size" toggles 100% zoom. Mount it only while open. */
export function Lightbox({ items, index, downloadable = false, onIndex, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)
  const [actual, setActual] = useState(false)
  const item = items[index]
  const count = items.length

  useEffect(() => {
    const dialog = ref.current
    if (dialog && !dialog.open) dialog.showModal()
    return () => dialog?.close()
  }, [])

  if (!item) return null
  const go = (step: number) => { setActual(false); onIndex((index + step + count) % count) }

  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label={item.alt}
      onClose={onClose}
      onClick={(event) => { if (event.target === ref.current) onClose() }}
      onKeyDown={(event) => {
        if (count < 2) return
        if (event.key === 'ArrowRight') go(1)
        if (event.key === 'ArrowLeft') go(-1)
      }}
    >
      <div className="lightbox-bar">
        <span className="lightbox-count" aria-live="polite">{count > 1 ? `${index + 1} / ${count}` : ' '}</span>
        <div className="lightbox-actions">
          <button type="button" onClick={() => setActual((value) => !value)} aria-pressed={actual}>{actual ? 'Fit karo' : 'Asli size'}</button>
          {downloadable ? <a href={item.url} download target="_blank" rel="noopener noreferrer">Download</a> : null}
          <button type="button" onClick={onClose} aria-label="Band karo">✕</button>
        </div>
      </div>
      <div className={`lightbox-stage${actual ? ' is-actual' : ''}`}>
        <Image src={item.url} alt={item.alt} width={item.width || 1600} height={item.height || 900} sizes="100vw" unoptimized={actual} priority />
      </div>
      {item.caption ? <p className="lightbox-caption">{item.caption}</p> : null}
      {count > 1 ? (
        <>
          <button type="button" className="lightbox-nav is-prev" onClick={() => go(-1)} aria-label="Pichhli image">‹</button>
          <button type="button" className="lightbox-nav is-next" onClick={() => go(1)} aria-label="Agli image">›</button>
        </>
      ) : null}
    </dialog>
  )
}
