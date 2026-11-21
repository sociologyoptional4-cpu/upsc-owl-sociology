'use client'

import { useEffect, useState } from 'react'

/** Thin reading-progress bar pinned to the top of `/blog/[slug]`. */
export function ReadingProgressBar() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setPct(max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
      <div className="h-full bg-saffron transition-[width] duration-150" style={{ width: `${pct}%` }} />
    </div>
  )
}

export function BlogShareBar({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)
  const encodedUrl = encodeURIComponent(url)
  const encodedText = encodeURIComponent(`${title} — ${url}`)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setCopyFailed(false)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
      setCopyFailed(true)
      setTimeout(() => setCopyFailed(false), 3000)
    }
  }
  const btn = 'inline-flex items-center gap-1.5 rounded-chip border border-ink bg-paper-raised px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-pastel-yellow'
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-bold text-ink-mute">Share:</span>
      <a href={`https://wa.me/?text=${encodedText}`} target="_blank" rel="noopener noreferrer" className={btn}>WhatsApp</a>
      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className={btn}>X</a>
      <a href={`https://t.me/share/url?url=${encodedUrl}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" className={btn}>Telegram</a>
      <button type="button" onClick={copy} className={btn}>{copied ? '✓ Link copied' : 'Copy link'}</button>
      {copyFailed ? <span role="status" className="text-xs text-red-700">Link copy nahi ho saka.</span> : null}
    </div>
  )
}
