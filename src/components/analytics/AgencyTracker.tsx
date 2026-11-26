'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

import { captureUtmParams, readStoredUtmParams } from '@/lib/analytics/agency-tracker'

const VISITOR_KEY = 'upscowl_vid_v1'

function getOrCreateVisitorId(): string {
  try {
    const existing = window.localStorage.getItem(VISITOR_KEY)
    if (existing && existing.length >= 8) return existing
    const created = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
    window.localStorage.setItem(VISITOR_KEY, created)
    return created
  } catch {
    return ''
  }
}

function detectDevice(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop'
  const w = window.innerWidth
  if (w < 768) return 'mobile'
  if (w < 1024) return 'tablet'
  return 'desktop'
}

function UtmPreserverInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const searchString = searchParams.toString()

  useEffect(() => {
    const utm = captureUtmParams(searchString ? `?${searchString}` : window.location.search)
    if (!pathname || pathname.startsWith('/admin')) return

    const storedUtm = Object.keys(utm).length > 0 ? utm : readStoredUtmParams()
    const payload = JSON.stringify({
      path: pathname,
      referrer: document.referrer || null,
      utmSource: storedUtm.utm_source || null,
      visitorId: getOrCreateVisitorId() || null,
      device: detectDevice(),
    })

    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([payload], { type: 'application/json' })
      navigator.sendBeacon('/api/analytics/hit', blob)
      return
    }
    fetch('/api/analytics/hit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
      keepalive: true,
    }).catch(() => undefined)
  }, [pathname, searchString])

  return null
}

/** Preserves UTM attribution across navigations and reports anonymous daily hits to /api/analytics/hit. */
export function AgencyUtmPreserver() {
  return (
    <Suspense fallback={null}>
      <UtmPreserverInner />
    </Suspense>
  )
}
