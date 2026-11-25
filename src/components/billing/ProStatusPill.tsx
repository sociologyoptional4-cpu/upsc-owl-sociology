'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export function ProStatusPill() {
  const [unlocked, setUnlocked] = useState<boolean | null>(null)

  useEffect(() => {
    let active = true
    fetch('/api/billing/status', { cache: 'no-store' })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { unlocked?: boolean } | null) => {
        if (active && data) setUnlocked(Boolean(data.unlocked))
      })
      .catch(() => {
        if (active) setUnlocked(false)
      })
    return () => {
      active = false
    }
  }, [])

  return (
    <Link
      href="/pro"
      className={`inline-flex items-center gap-1 rounded-md border border-ink px-2.5 py-1.5 text-xs font-extrabold transition-colors ${
        unlocked ? 'bg-pastel-mint text-ink hover:bg-pastel-yellow' : 'bg-pastel-yellow text-ink hover:bg-saffron'
      }`}
      title={unlocked ? 'UPSC OWL Pro Active' : 'Unlock All Chapters — ₹399/yr (60% OFF ₹999)'}
    >
      {unlocked ? 'Pro ✓' : 'Pro ₹399'}
    </Link>
  )
}
