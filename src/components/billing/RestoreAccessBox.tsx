'use client'

import { useState } from 'react'

import type { UnlockedInfo } from './RazorpayQrPanel'

type RestoreAccessBoxProps = {
  initialEmail?: string
  onRestored: (info: UnlockedInfo) => void
}

export function RestoreAccessBox({ initialEmail = '', onRestored }: RestoreAccessBoxProps) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState(initialEmail)
  const [cred, setCred] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submitRestore = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/billing/restore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), credential: cred.trim() }),
      })
      const json = (await res.json()) as UnlockedInfo & { unlocked?: boolean; error?: string }
      if (!res.ok || !json.unlocked) {
        throw new Error(json.error || 'Active pass nahi mila.')
      }
      onRestored({ accessCode: json.accessCode, expiresAt: json.expiresAt, email: json.email })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Restore fail hua.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-6 border-t border-rule pt-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="text-xs font-bold text-saffron-deep underline"
      >
        {open ? 'Hide Restore Access ▲' : 'Pehle hi pay kar chuke ho? Access Code / Mobile se Restore karein →'}
      </button>
      {open ? (
        <form onSubmit={(e) => void submitRestore(e)} className="mt-3 grid gap-3 rounded-card border border-ink bg-paper p-4 sm:grid-cols-[1fr_1fr_auto]">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Registered Email"
            className="rounded-md border border-ink bg-paper-raised px-3 py-2 text-sm text-ink"
          />
          <input
            type="text"
            required
            value={cred}
            onChange={(e) => setCred(e.target.value)}
            placeholder="Access Code (OWL-...), Mobile, or Payment ID"
            className="rounded-md border border-ink bg-paper-raised px-3 py-2 text-sm text-ink"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-md border-2 border-ink bg-pastel-yellow px-4 py-2 text-sm font-extrabold text-ink hover:bg-pastel-mint disabled:opacity-60"
          >
            {loading ? 'Checking...' : 'Restore'}
          </button>
          {error ? <p className="sm:col-span-3 text-xs font-semibold text-red-700">{error}</p> : null}
        </form>
      ) : null}
    </div>
  )
}
