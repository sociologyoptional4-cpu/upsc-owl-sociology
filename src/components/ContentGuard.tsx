'use client'

import { useEffect, useState, type ClipboardEvent, type DragEvent, type MouseEvent, type ReactNode } from 'react'

export type ContentGuardProps = {
  canonicalPath: string
  readerLabel?: string | null
  className?: string
  children: ReactNode
}

const BLOCKED_CTRL_KEYS = new Set(['c', 'x', 'u', 's', 'p', 'a'])
const WATERMARK_TILE_COUNT = 24

function isInteractiveTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable
}

function formatUtcStamp(): string {
  return `${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC`
}

type MePayload = {
  user?: {
    id?: number | string | null
    email?: string | null
  } | null
}

/**
 * Protects syllabus study sections with copy/shortcut interception, a subtle
 * session watermark overlay, and a clean print fallback while preserving input usability.
 */
export function ContentGuard({ canonicalPath, readerLabel, className, children }: ContentGuardProps) {
  const [sessionIdentity, setSessionIdentity] = useState('Upscowl Verified Reader')
  const [sessionStamp, setSessionStamp] = useState('')

  useEffect(() => {
    const baseLabel = readerLabel?.trim() || 'Upscowl Verified Reader'
    setSessionIdentity(baseLabel)
    setSessionStamp(formatUtcStamp())

    if (readerLabel?.trim()) return

    let active = true
    fetch('/api/users/me', { credentials: 'same-origin' })
      .then((res) => (res.ok ? (res.json() as Promise<MePayload>) : null))
      .then((data) => {
        if (!active || !data?.user) return
        const email = data.user.email?.trim()
        const id = data.user.id
        if (email) setSessionIdentity(email)
        else if (id !== undefined && id !== null) setSessionIdentity(`User #${String(id)}`)
      })
      .catch(() => undefined)

    return () => {
      active = false
    }
  }, [readerLabel])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!(e.ctrlKey || e.metaKey)) return
      if (!BLOCKED_CTRL_KEYS.has(e.key.toLowerCase())) return
      if (isInteractiveTarget(e.target) || isInteractiveTarget(document.activeElement)) return
      e.preventDefault()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const handleCopyOrCut = (e: ClipboardEvent<HTMLDivElement>) => {
    if (isInteractiveTarget(e.target)) return
    e.preventDefault()
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://sociology4upsc.com'
    const attribution = `Protected UPSC Sociology Optional study notes — read online at Upscowl: ${origin}${canonicalPath}`
    e.clipboardData?.setData('text/plain', attribution)
  }

  const blockNonInteractive = (e: MouseEvent<HTMLDivElement> | DragEvent<HTMLDivElement>) => {
    if (isInteractiveTarget(e.target)) return
    e.preventDefault()
  }

  const watermarkText = sessionStamp
    ? `${sessionIdentity} · ${sessionStamp} · sociology4upsc.com`
    : `${sessionIdentity} · sociology4upsc.com`

  return (
    <div className="relative">
      <div
        className={`relative select-none print:hidden ${className ?? ''}`.trim()}
        onContextMenu={blockNonInteractive}
        onDragStart={blockNonInteractive}
        onCopy={handleCopyOrCut}
        onCut={handleCopyOrCut}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 z-20 overflow-hidden opacity-[0.05]"
        >
          <div className="grid grid-cols-2 gap-16 sm:grid-cols-3 -rotate-[24deg] scale-125 py-12">
            {Array.from({ length: WATERMARK_TILE_COUNT }, (_, idx) => (
              <span key={idx} className="whitespace-nowrap font-display text-xs font-extrabold tracking-wide text-ink">
                {watermarkText}
              </span>
            ))}
          </div>
        </div>
        <div className="relative z-10">{children}</div>
      </div>

      <div className="my-12 hidden rounded-card border-2 border-ink p-8 text-center print:block">
        <p className="font-display text-lg font-extrabold text-ink">
          Protected Study Material — Read online at Upscowl
        </p>
        <p className="mt-2 text-sm text-ink-soft">https://sociology4upsc.com{canonicalPath}</p>
      </div>
    </div>
  )
}
