'use client'

import { useState } from 'react'

type PostPaymentAccountBoxProps = {
  name: string
  email: string
  phone: string
}

/** Lets a guest who just paid set a login password in one click so they are recognized on future visits. */
export function PostPaymentAccountBox({ name, email, phone }: PostPaymentAccountBoxProps) {
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (done) {
    return (
      <div className="mt-4 rounded-card border-2 border-ink bg-paper p-4 text-sm text-ink">
        <p className="font-extrabold text-emerald-700">✓ Login Account Ban Gaya!</p>
        <p className="mt-1 text-xs text-ink-soft">
          Ab jab bhi aap wapas aayenge (kisi bhi device par), <strong>{email}</strong> + apne password se login karein aur saare chapters open milenge.
        </p>
      </div>
    )
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password.length < 6) {
      setError('Password kam se kam 6 characters ka daalein.')
      return
    }
    setBusy(true)
    setError(null)
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name || 'UPSC Aspirant', email, phone, password }),
      })
      const json = (await res.json()) as { error?: string }
      if (!res.ok) {
        setError(json.error || 'Account save nahi ho paya.')
        setBusy(false)
        return
      }
      setDone(true)
    } catch {
      setError('Network error aaya. Dubara try karein.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={(e) => void handleSave(e)} className="mt-4 rounded-card border-2 border-ink bg-paper p-4">
      <p className="text-xs font-extrabold uppercase tracking-wide text-ink">
        Apna Login Password Set Karein (Future Visits Ke Liye)
      </p>
      <p className="mt-1 text-xs text-ink-soft">
        Email <strong>{email}</strong> ke liye password set karne par aap dubara aake Login karte hi recognize ho jayenge.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <input
          type="password"
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New password (min 6 chars)"
          className="min-w-[200px] flex-1 rounded-md border border-ink bg-paper-raised px-3 py-2 text-sm text-ink"
        />
        <button
          type="submit"
          disabled={busy}
          className="rounded-md border-2 border-ink bg-pastel-yellow px-4 py-2 text-xs font-extrabold text-ink hover:bg-saffron disabled:opacity-60"
        >
          {busy ? 'Saving...' : 'Save Password →'}
        </button>
      </div>
      {error ? <p className="mt-2 text-xs font-semibold text-red-700">{error}</p> : null}
    </form>
  )
}
