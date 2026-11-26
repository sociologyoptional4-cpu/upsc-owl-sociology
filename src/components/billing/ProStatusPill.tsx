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
    <div className="flex shrink-0 items-center gap-1.5">
      {member ? (
        <Link
          href="/account"
          className="inline-flex max-w-[5.5rem] shrink-0 truncate whitespace-nowrap rounded-md border border-ink bg-paper-raised px-2 py-1 text-[11px] font-bold text-ink transition-colors hover:bg-pastel-lavender md:max-w-none md:px-2.5 md:py-1.5 md:text-xs"
          title={`Logged in as ${member.email}`}
        >
          {firstName}
        </Link>
      ) : (
        <Link
          href="/login"
          className="inline-flex shrink-0 whitespace-nowrap rounded-md border border-ink bg-paper-raised px-2 py-1 text-[11px] font-bold text-ink transition-colors hover:bg-paper-sunk md:px-2.5 md:py-1.5 md:text-xs"
          title="Login or Create Student Account"
        >
          Login
        </Link>
      )}
      <Link
        href={unlocked && member ? '/account' : '/pro'}
        className={`inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-md border border-ink px-2 py-1 text-[11px] font-extrabold transition-colors md:px-2.5 md:py-1.5 md:text-xs ${
          unlocked ? 'bg-pastel-mint text-ink hover:bg-pastel-yellow' : 'bg-pastel-yellow text-ink hover:bg-saffron'
        }`}
        title={unlocked ? 'UPSC OWL Pro Active' : 'UPSC OWL Pro'}
      >
        <svg aria-hidden width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
          <path d="M3 18h18v2H3v-2Zm0-2 2-9 5 4 2-6 2 6 5-4 2 9H3Z" />
        </svg>
        <span>{unlocked ? 'Pro ✓' : 'Pro'}</span>
      </Link>
    </div>
  )
}
