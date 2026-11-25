'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState, type ClipboardEvent, type DragEvent, type MouseEvent, type ReactNode } from 'react'

export type ContentGuardProps = {
  canonicalPath: string
  readerLabel?: string | null
  className?: string
  children: ReactNode
}

const BLOCKED_KEYS = new Set(['c', 'x', 'u', 's', 'p', 'a'])
const BLOCKED_CODES = new Set(['KeyC', 'KeyX', 'KeyU', 'KeyS', 'KeyP', 'KeyA'])
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
 * Protects syllabus study content with document-capture copy/shortcut blocking,
 * select/contextmenu prevention, a subtle session watermark, and clean print fallback.
 */
export function ContentGuard({ canonicalPath, readerLabel, className, children }: ContentGuardProps) {
  const [sessionIdentity, setSessionIdentity] = useState('Upscowl Verified Reader')
  const [sessionStamp, setSessionStamp] = useState('')
  const [guardToast, setGuardToast] = useState(false)

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
    if (!guardToast) return
    const timer = window.setTimeout(() => setGuardToast(false), 2200)
    return () => window.clearTimeout(timer)
  }, [guardToast])

  useEffect(() => {
    const getAttribution = () => {
      const origin = typeof window !== 'undefined' ? window.location.origin : 'https://sociology4upsc.com'
      return `Protected UPSC Sociology Optional study notes — read online at Upscowl: ${origin}${canonicalPath}`
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (!(e.ctrlKey || e.metaKey)) return
      const key = e.key.toLowerCase()
      if (!BLOCKED_KEYS.has(key) && !BLOCKED_CODES.has(e.code)) return
      if (isInteractiveTarget(e.target) || isInteractiveTarget(document.activeElement)) return
      e.preventDefault()
      e.stopPropagation()
      if (key === 'c' || key === 'x' || e.code === 'KeyC' || e.code === 'KeyX') {
        void navigator.clipboard?.writeText(getAttribution()).catch(() => undefined)
        setGuardToast(true)
      }
    }

    const onDocumentCopyOrCut = (e: globalThis.ClipboardEvent) => {
      if (isInteractiveTarget(e.target) || isInteractiveTarget(document.activeElement)) return
      e.preventDefault()
      e.stopPropagation()
      e.clipboardData?.setData('text/plain', getAttribution())
      setGuardToast(true)
    }

    const onSelectStart = (e: Event) => {
      if (isInteractiveTarget(e.target)) return
      e.preventDefault()
    }

    const onDocumentContextMenu = (e: globalThis.MouseEvent) => {
      if (isInteractiveTarget(e.target)) return
      e.preventDefault()
    }

    window.addEventListener('keydown', onKeyDown, { capture: true })
    document.addEventListener('copy', onDocumentCopyOrCut, { capture: true })
    document.addEventListener('cut', onDocumentCopyOrCut, { capture: true })
    document.addEventListener('selectstart', onSelectStart, { capture: true })
    document.addEventListener('contextmenu', onDocumentContextMenu, { capture: true })

    return () => {
      window.removeEventListener('keydown', onKeyDown, { capture: true })
      document.removeEventListener('copy', onDocumentCopyOrCut, { capture: true })
      document.removeEventListener('cut', onDocumentCopyOrCut, { capture: true })
      document.removeEventListener('selectstart', onSelectStart, { capture: true })
      document.removeEventListener('contextmenu', onDocumentContextMenu, { capture: true })
    }
  }, [canonicalPath])

  const handleCopyOrCut = (e: ClipboardEvent<HTMLDivElement>) => {
    if (isInteractiveTarget(e.target)) return
    e.preventDefault()
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://sociology4upsc.com'
    const attribution = `Protected UPSC Sociology Optional study notes — read online at Upscowl: ${origin}${canonicalPath}`
    e.clipboardData?.setData('text/plain', attribution)
    setGuardToast(true)
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
        className={`protected-study-zone relative select-none print:hidden ${className ?? ''}`.trim()}
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

      <AnimatePresence>
        {guardToast && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 360, damping: 26 }}
            className="fixed bottom-5 right-5 z-50 rounded-chip border-2 border-ink bg-pastel-yellow px-4 py-2 font-display text-xs font-extrabold text-ink shadow-paper"
          >
            Protected Notes — Canonical link copied instead
          </motion.div>
        )}
      </AnimatePresence>

      <div className="my-12 hidden rounded-card border-2 border-ink p-8 text-center print:block">
        <p className="font-display text-lg font-extrabold text-ink">
          Protected Study Material — Read online at Upscowl
        </p>
        <p className="mt-2 text-sm text-ink-soft">https://sociology4upsc.com{canonicalPath}</p>
      </div>
    </div>
  )
}
