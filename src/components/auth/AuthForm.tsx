'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { TELEGRAM_MENTORSHIP_URL } from '../ui/links'

type AuthFormProps = {
  initialTab?: 'login' | 'signup'
  nextPath?: string
}

function safeNextPath(raw: string | undefined): string {
  if (!raw || !raw.startsWith('/') || raw.startsWith('//')) return '/account'
  return raw
}

export function AuthForm({ initialTab = 'login', nextPath }: AuthFormProps) {
  const router = useRouter()
  const [tab, setTab] = useState<'login' | 'signup'>(initialTab)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const target = safeNextPath(nextPath)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setError(null)

    const endpoint = tab === 'login' ? '/api/auth/login' : '/api/auth/signup'
    const payload =
      tab === 'login'
        ? { email: email.trim(), password }
        : { name: name.trim(), phone: phone.trim(), email: email.trim(), password }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = (await res.json()) as { error?: string }
      if (!res.ok) {
        setError(json.error || 'Authentication fail ho gaya.')
        setBusy(false)
        return
      }
      router.push(target)
      router.refresh()
    } catch {
      setError('Network error aaya. Dobara try karein.')
      setBusy(false)
    }
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-card border-2 border-ink bg-paper-raised p-6 shadow-paper md:p-8">
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-chip border border-ink bg-pastel-yellow px-3 py-1 text-xs font-extrabold text-ink">
          UPSC OWL Account
        </span>
        <Link href="/pro" className="text-xs font-bold text-saffron-deep underline">
          Pro Plan ₹399/yr →
        </Link>
      </div>

      <h1 className="mt-4 font-display text-2xl font-extrabold text-ink">
        {tab === 'login' ? 'Apne Account Mein Login Karein' : 'Naya Student Account Banayein'}
      </h1>
      <p className="mt-1.5 text-sm text-ink-soft">
        {tab === 'login'
          ? 'Login karte hi aapka Pro Pass aur unlocked chapters har device par turant open ho jayenge.'
          : 'Ek baar account banayein taaki payment ke baad kisi bhi phone ya laptop se syllabus khol sakein.'}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => {
            setTab('login')
            setError(null)
          }}
          className={`rounded-md border-2 border-ink px-3 py-2 text-xs font-extrabold transition-colors ${
            tab === 'login' ? 'bg-saffron text-ink' : 'bg-paper text-ink-soft hover:bg-paper-sunk'
          }`}
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => {
            setTab('signup')
            setError(null)
          }}
          className={`rounded-md border-2 border-ink px-3 py-2 text-xs font-extrabold transition-colors ${
            tab === 'signup' ? 'bg-saffron text-ink' : 'bg-paper text-ink-soft hover:bg-paper-sunk'
          }`}
        >
          Create Account
        </button>
      </div>

      <form onSubmit={(e) => void handleSubmit(e)} className="mt-5 space-y-3.5">
        {tab === 'signup' ? (
          <>
            <label className="block text-xs font-bold text-ink">
              Poora Naam *
              <input
                type="text"
                required
                minLength={2}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Aarav Sharma"
                className="mt-1 w-full rounded-md border border-ink bg-paper px-3 py-2 text-sm font-normal text-ink"
              />
            </label>
            <label className="block text-xs font-bold text-ink">
              WhatsApp / Mobile Number (optional)
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit number"
                className="mt-1 w-full rounded-md border border-ink bg-paper px-3 py-2 text-sm font-normal text-ink"
              />
            </label>
          </>
        ) : null}

        <label className="block text-xs font-bold text-ink">
          Email Address *
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className="mt-1 w-full rounded-md border border-ink bg-paper px-3 py-2 text-sm font-normal text-ink"
          />
        </label>

        <label className="block text-xs font-bold text-ink">
          Password * {tab === 'signup' ? '(min 6 characters)' : ''}
          <input
            type="password"
            required
            minLength={tab === 'signup' ? 6 : 1}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="mt-1 w-full rounded-md border border-ink bg-paper px-3 py-2 text-sm font-normal text-ink"
          />
        </label>

        {error ? (
          <p className="rounded-md border border-red-400 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">{error}</p>
        ) : null}

        <button
          type="submit"
          disabled={busy}
          className="btn-cta w-full rounded-md px-5 py-2.5 text-sm font-extrabold disabled:opacity-60"
        >
          {busy ? 'Wait karein...' : tab === 'login' ? 'Login & Continue →' : 'Create Account →'}
        </button>
      </form>

      <div className="mt-5 rounded-card border border-ink/30 bg-pastel-mint/60 p-3 text-xs leading-relaxed text-ink">
        Agar aapne pehle <strong>₹399</strong> pay kiya tha aur password set nahi kiya tha, to usi payment waale email se{' '}
        <strong>Create Account</strong> karein — aapka Pro Pass automatically unlock ho jayega!
      </div>

      <p className="mt-4 text-center text-xs text-ink-mute">
        Password bhool gaye ya help chahiye?{' '}
        <a href={TELEGRAM_MENTORSHIP_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-saffron-deep underline">
          Telegram par message karein ↗
        </a>
      </p>
    </div>
  )
}
