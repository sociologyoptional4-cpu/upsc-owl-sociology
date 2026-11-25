'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function ProLogoutButton() {
  const router = useRouter()
  const [busy, setBusy] = useState(false)

  const handleLogout = async () => {
    setBusy(true)
    await fetch('/api/billing/logout', { method: 'POST' })
    router.refresh()
    setBusy(false)
  }

  return (
    <button
      type="button"
      disabled={busy}
      onClick={() => void handleLogout()}
      className="rounded-md border border-ink bg-paper px-4 py-2 text-xs font-bold text-ink hover:bg-paper-sunk disabled:opacity-60"
    >
      {busy ? 'Clearing...' : 'Is device se Pro session hatayein'}
    </button>
  )
}
