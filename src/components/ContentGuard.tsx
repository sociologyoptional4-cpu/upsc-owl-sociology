'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState, type ClipboardEvent, type DragEvent, type MouseEvent, type ReactNode } from 'react'

export type ContentGuardProps = {
  canonicalPath: string
  readerLabel?: string | null
  className?: string
  children: ReactNode
}

const BLOCKED_CTRL_KEYS = new Set(['c', 'x', 'u', 's', 'p', 'a'])
const BLOCKED_CTRL_CODES = new Set(['KeyC', 'KeyX', 'KeyU', 'KeyS', 'KeyP', 'KeyA'])
const DEVTOOLS_SHIFT_CODES = new Set(['KeyI', 'KeyJ', 'KeyC', 'KeyK'])
const WATERMARK_TILE_COUNT = 24

function isInteractiveTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable
}

function formatUtcStamp(): string {
  return `${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC`
}

type AuthMePayload = { member?: { email?: string | null } | null }
type UsersMePayload = { user?: { id?: number | string | null; email?: string | null } | null }

/**
 * Protects study content with copy/shortcut/DevTools interception, select/contextmenu prevention,
 * transient PrintScreen blur, forensic reader watermark, and clean print fallback.
 */
export function ContentGuard({ canonicalPath, readerLabel, className, children }: ContentGuardProps) {
  const [sessionIdentity, setSessionIdentity] = useState(() => readerLabel?.trim() || 'Upscowl Verified Reader')
  const [sessionStamp, setSessionStamp] = useState('')
  const [guardToast, setGuardToast] = useState(false)
  const [privacyBlur, setPrivacyBlur] = useState(false)

  useEffect(() => {
    let active = true
    const stampTimer = window.setTimeout(() => {
      if (!active) return
      setSessionStamp(formatUtcStamp())
      if (readerLabel?.trim()) setSessionIdentity(readerLabel.trim())
    }, 0)

    if (!readerLabel?.trim()) {
      fetch('/api/auth/me', { credentials: 'same-origin' })
        .then((res) => (res.ok ? (res.json() as Promise<AuthMePayload>) : null))
        .then((data) => {
          const memberEmail = data?.member?.email?.trim()
          if (active && memberEmail) {
            setSessionIdentity(memberEmail)
            return null
          }
          return fetch('/api/users/me', { credentials: 'same-origin' }).then((r) =>
            r.ok ? (r.json() as Promise<UsersMePayload>) : null,
          )
        })
        .then((adminData) => {
          if (!active || !adminData?.user) return
          const email = adminData.user.email?.trim()
          const id = adminData.user.id
          if (email) setSessionIdentity(email)
          else if (id !== undefined && id !== null) setSessionIdentity(`User #${String(id)}`)
        })
        .catch(() => undefined)
    }

    return () => {
      active = false
      window.clearTimeout(stampTimer)
    }
  }, [readerLabel])

  useEffect(() => {
    if (!guardToast) return
    const timer = window.setTimeout(() => setGuardToast(false), 2200)
    return () => window.clearTimeout(timer)
  }, [guardToast])

  useEffect(() => {
    if (!privacyBlur) return
    const timer = window.setTimeout(() => setPrivacyBlur(false), 1400)
    return () => window.clearTimeout(timer)
  }, [privacyBlur])

  useEffect(() => {
    const getAttribution = () => {
      const origin = typeof window !== 'undefined' ? window.location.origin : 'https://sociology4upsc.com'
      return `Protected UPSC Sociology Optional study notes — read online at Upscowl: ${origin}${canonicalPath}`
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen') {
        setPrivacyBlur(true)
        setGuardToast(true)
        void navigator.clipboard?.writeText(getAttribution()).catch(() => undefined)
        return
      }
      if (e.key === 'F12') {
        e.preventDefault()
        e.stopPropagation()
        return
      }
      if (!(e.ctrlKey || e.metaKey)) return
      if (isInteractiveTarget(e.target) || isInteractiveTarget(document.activeElement)) return
      if (e.shiftKey && DEVTOOLS_SHIFT_CODES.has(e.code)) {
        e.preventDefault()
        e.stopPropagation()
        return
      }
      const key = e.key.toLowerCase()
      if (!BLOCKED_CTRL_KEYS.has(key) && !BLOCKED_CTRL_CODES.has(e.code)) return
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
        className={`protected-study-zone relative select-none print:hidden transition-[filter] duration-200 ${
          privacyBlur ? 'blur-md' : ''
        } ${className ?? ''}`.trim()}
        onContextMenu={blockNonInteractive}
        onDragStart={blockNonInteractive}
        onCopy={handleCopyOrCut}
        onCut={handleCopyOrCut}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 z-20 overflow-hidden opacity-[0.045]"
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
            className="fixed bottom-20 right-4 z-50 rounded-chip border-2 border-ink bg-pastel-yellow px-4 py-2 font-display text-xs font-extrabold text-ink shadow-paper md:bottom-5 md:right-5"
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
