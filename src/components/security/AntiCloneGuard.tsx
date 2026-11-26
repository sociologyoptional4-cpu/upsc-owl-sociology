'use client'

import { useEffect, useState } from 'react'

import { isAllowedHost } from '@/lib/security/syllabus-shield'

/**
 * Neutralizes offline saved copies (`file://`) and unauthorized third-party domain clones/proxies.
 */
export function AntiCloneGuard() {
  const [cloneBlocked, setCloneBlocked] = useState(false)

  useEffect(() => {
    const { protocol, hostname, href } = window.location
    const isOfflineCopy = protocol === 'file:'
    const unauthorizedHost = !isOfflineCopy && !isAllowedHost(hostname)
    if (!isOfflineCopy && !unauthorizedHost) return

    const timer = window.setTimeout(() => {
      setCloneBlocked(true)
      try {
        if (href && !href.startsWith('https://sociology4upsc.com')) {
          window.location.replace('https://sociology4upsc.com')
        }
      } catch {
        // Ignore blocked redirects
      }
    }, 0)
    return () => window.clearTimeout(timer)
  }, [])

  if (!cloneBlocked) return null

  return (
    <div
      role="alertdialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-paper p-6 text-center text-ink"
    >
      <p className="font-display text-2xl font-extrabold">Unauthorized Mirror Detected</p>
      <p className="mt-3 max-w-md text-sm text-ink-soft">
        UPSC OWL Sociology study material is protected and available exclusively at{' '}
        <strong>https://sociology4upsc.com</strong>.
      </p>
      <a
        href="https://sociology4upsc.com"
        className="btn-cta mt-5 inline-flex rounded-md border-2 border-ink px-6 py-3 text-sm font-extrabold"
      >
        Open Official Website →
      </a>
    </div>
  )
}
