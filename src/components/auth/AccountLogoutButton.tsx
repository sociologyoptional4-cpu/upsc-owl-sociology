'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function AccountLogoutButton() {
  const router = useRouter()
  const [busy, setBusy] = useState(false)

  const handleLogout = async () => {
    setBusy(true)
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/')
    router.refresh()
  }

  return (
    <button
      type="button"
      disabled={busy}
      onClick={() => void handleLogout()}
      className="rounded-md border-2 border-ink bg-paper px-4 py-2 text-sm font-bold text-ink hover:bg-paper-sunk disabled:opacity-60"
    >
      {busy ? 'Logging out...' : 'Logout'}
    </button>
  )
}
