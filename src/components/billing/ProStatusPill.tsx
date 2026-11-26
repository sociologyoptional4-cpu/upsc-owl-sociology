'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

type AuthMeResponse = {
  member: { id: number; name: string; email: string } | null
  pro: { unlocked: boolean } | null
}

export function ProStatusPill() {
  const [state, setState] = useState<AuthMeResponse | null>(null)

  useEffect(() => {
    let active = true
    fetch('/api/auth/me', { cache: 'no-store' })
      .then((res) => (res.ok ? (res.json() as Promise<AuthMeResponse>) : null))
      .then((data) => {
        if (active && data) setState(data)
      })
      .catch(() => {
        if (active) setState({ member: null, pro: { unlocked: false } })
      })
    return () => {
      active = false
    }
  }, [])

  const member = state?.member ?? null
  const unlocked = Boolean(state?.pro?.unlocked)
  const firstName = member?.name.trim().split(/\s+/)[0] || 'Account'

  return (
    <div className="flex items-center gap-1.5">
      {member ? (
        <Link
          href="/account"
          className="hidden rounded-md border border-ink bg-paper-raised px-2.5 py-1.5 text-xs font-bold text-ink transition-colors hover:bg-pastel-lavender sm:inline-flex"
          title={`Logged in as ${member.email}`}
        >
          {firstName}
        </Link>
      ) : (
        <Link
          href="/login"
          className="hidden rounded-md border border-ink bg-paper-raised px-2.5 py-1.5 text-xs font-bold text-ink transition-colors hover:bg-paper-sunk sm:inline-flex"
          title="Login or Create Student Account"
        >
          Login
        </Link>
      )}
      <Link
        href={unlocked && member ? '/account' : '/pro'}
        className={`inline-flex items-center gap-1 rounded-md border border-ink px-2.5 py-1.5 text-xs font-extrabold transition-colors ${
          unlocked ? 'bg-pastel-mint text-ink hover:bg-pastel-yellow' : 'bg-pastel-yellow text-ink hover:bg-saffron'
        }`}
        title={unlocked ? 'UPSC OWL Pro Active' : 'Unlock All Chapters — ₹399/yr (60% OFF ₹999)'}
      >
        {unlocked ? 'Pro ✓' : 'Pro ₹399'}
      </Link>
    </div>
  )
}
