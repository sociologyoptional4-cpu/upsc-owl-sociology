'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

import { TELEGRAM_MENTORSHIP_URL } from '../ui/links'
import { PostPaymentAccountBox } from './PostPaymentAccountBox'
import { RazorpayQrPanel, type QrData, type UnlockedInfo } from './RazorpayQrPanel'
import { RestoreAccessBox } from './RestoreAccessBox'

type PaywallGateProps = {
  mode?: 'chapter' | 'standalone'
  chapterTitle?: string
  paperLabel?: string
  tocCount?: number
  pyqCount?: number
}

type LoggedInMember = { id: number; name: string; email: string; phone: string | null }

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void }
  }
}

const PROFILE_STORAGE_KEY = 'upscowl_checkout_profile'

function loadRazorpayScript(): Promise<boolean> {
  if (typeof window === 'undefined') return Promise.resolve(false)
  if (window.Razorpay) return Promise.resolve(true)
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    script.onload = () => resolve(Boolean(window.Razorpay))
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

export function PaywallGate({ mode = 'chapter', chapterTitle, paperLabel, tocCount = 0, pyqCount = 0 }: PaywallGateProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [member, setMember] = useState<LoggedInMember | null>(null)
  const [method, setMethod] = useState<'checkout' | 'qr'>('checkout')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [qr, setQr] = useState<QrData | null>(null)
  const [unlocked, setUnlocked] = useState<UnlockedInfo | null>(null)

  useEffect(() => {
    let active = true
    fetch('/api/auth/me', { cache: 'no-store' })
      .then((res) => (res.ok ? (res.json() as Promise<{ member?: LoggedInMember | null }>) : null))
      .then((data) => {
        if (!active) return
        if (data?.member) {
          setMember(data.member)
          setName(data.member.name)
          setEmail(data.member.email)
          if (data.member.phone) setPhone(data.member.phone)
          return
        }
        try {
          const saved = localStorage.getItem(PROFILE_STORAGE_KEY)
          if (!saved) return
          const parsed = JSON.parse(saved) as { name?: string; email?: string; phone?: string }
          if (parsed.name) setName(parsed.name)
          if (parsed.email) setEmail(parsed.email)
          if (parsed.phone) setPhone(parsed.phone)
        } catch {
          // Ignore storage errors
        }
      })
      .catch(() => undefined)
    return () => {
      active = false
    }
  }, [])

  const saveProfile = useCallback(() => {
    try {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify({ name: name.trim(), email: email.trim(), phone: phone.trim() }))
    } catch {
      // Ignore storage errors
    }
  }, [email, name, phone])

  const handleSuccess = useCallback(
    (info: UnlockedInfo) => {
      setUnlocked(info)
      setError(null)
      setLoading(false)
      router.refresh()
    },
    [router],
  )

  const validateInputs = (): boolean => {
    if (name.trim().length < 2) {
      setError('Apna poora naam daalein (kam se kam 2 characters).')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Valid email address daalein (account aur access restore ke liye zaroori hai).')
      return false
    }
    if (phone.replace(/\D/g, '').length < 10) {
      setError('10-digit WhatsApp / mobile number daalein.')
      return false
    }
    setError(null)
    saveProfile()
    return true
  }

  const startRazorpayCheckout = async () => {
    if (!validateInputs()) return
    setLoading(true)
    setError(null)

    const loaded = await loadRazorpayScript()
    if (!loaded || !window.Razorpay) {
      setLoading(false)
      setError('Razorpay Checkout load nahi ho paya. Neeche Scan & Pay UPI QR tab use karein!')
      return
    }

    try {
      const res = await fetch('/api/billing/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), phone: phone.trim() }),
      })
      const orderData = (await res.json()) as {
        orderId?: string
        amount?: number
        currency?: string
        keyId?: string
        error?: string
      }
      if (!res.ok || !orderData.orderId || !orderData.keyId) {
        throw new Error(orderData.error || 'Order start nahi ho paya')
      }

      const rzp = new window.Razorpay({
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency ?? 'INR',
        name: 'UPSC OWL Sociology',
        description: '1 Year Full Syllabus Pro Pass (60% OFF)',
        order_id: orderData.orderId,
        prefill: { name: name.trim(), email: email.trim(), contact: phone.trim() },
        theme: { color: '#D97706' },
        handler: async (response: {
          razorpay_order_id: string
          razorpay_payment_id: string
          razorpay_signature: string
        }) => {
          const verifyRes = await fetch('/api/billing/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...response, email: email.trim(), phone: phone.trim(), name: name.trim() }),
          })
          const verifyJson = (await verifyRes.json()) as UnlockedInfo & { unlocked?: boolean; error?: string }
          if (!verifyRes.ok || !verifyJson.unlocked) {
            setError(verifyJson.error || 'Payment verify karne mein dikkat aayi.')
            setLoading(false)
            return
          }
          handleSuccess({ accessCode: verifyJson.accessCode, expiresAt: verifyJson.expiresAt, email: verifyJson.email })
        },
        modal: {
          ondismiss: () => setLoading(false),
        },
      })
      rzp.open()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment start karne mein error aaya.')
      setLoading(false)
    }
  }

  const generateQr = async () => {
    if (!validateInputs()) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/billing/create-qr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), phone: phone.trim() }),
      })
      const data = (await res.json()) as QrData & { error?: string }
      if (!res.ok || !data.qrId || !data.imageUrl) {
        throw new Error(data.error || 'UPI QR generate nahi ho paya')
      }
      setQr(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'UPI QR generate nahi ho paya.')
    } finally {
      setLoading(false)
    }
  }

  if (unlocked) {
    return (
      <section className="rounded-card border-2 border-ink bg-pastel-mint p-6 text-ink shadow-paper md:p-8">
        <p className="inline-block rounded-chip border border-ink bg-paper px-3 py-1 text-xs font-extrabold uppercase">
          ✓ Pro Pass Activated
        </p>
        <h2 className="mt-4 font-display text-2xl font-extrabold">Saare 25 Units &amp; Chapters Unlock Ho Gaye!</h2>
        <p className="mt-2 text-sm text-ink-soft">
          Email <strong>{unlocked.email}</strong> par 1-Year Pro Pass active hai (Valid till{' '}
          <strong>{new Date(unlocked.expiresAt).toLocaleDateString('en-IN', { dateStyle: 'medium' })}</strong>).
        </p>
        <div className="mt-4 rounded-card border-2 border-ink bg-paper p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-ink-mute">Apna Backup Access Code Save Karein</p>
          <p className="mt-1 select-all font-mono text-xl font-extrabold tracking-wider text-ink">{unlocked.accessCode}</p>
        </div>
        {!member ? (
          <PostPaymentAccountBox name={name.trim()} email={unlocked.email} phone={phone.trim()} />
        ) : null}
        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => router.refresh()}
            className="btn-cta rounded-md px-5 py-2.5 text-sm font-bold"
          >
            {mode === 'chapter' ? 'Chapter Padhna Shuru Karein →' : 'Syllabus Explore Karein →'}
          </button>
          <Link href="/account" className="rounded-md border-2 border-ink bg-paper px-4 py-2.5 text-sm font-bold text-ink hover:bg-pastel-yellow">
            My Account
          </Link>
        </div>
      </section>
    )
  }

  const loginHref = pathname ? `/login?next=${encodeURIComponent(pathname)}` : '/login'

  return (
    <section id="unlock-pro" className="rounded-card border-2 border-ink bg-paper-raised p-6 shadow-paper md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-chip border border-ink bg-pastel-yellow px-3 py-1 text-xs font-extrabold text-ink">
          🔒 PRO PASS · 60% OFF
        </span>
        {member ? (
          <Link
            href="/account"
            className="rounded-chip border border-ink bg-pastel-lavender px-3 py-1 text-xs font-bold text-ink"
          >
            Logged in: {member.name} ({member.email})
          </Link>
        ) : (
          <Link
            href={loginHref}
            className="rounded-chip border border-ink bg-paper px-3 py-1 text-xs font-bold text-saffron-deep hover:bg-pastel-yellow"
          >
            Pehle hi Pro liya hai? Login Karein →
          </Link>
        )}
      </div>

      {mode === 'chapter' && chapterTitle ? (
        <div className="mt-4">
          <h2 className="font-display text-2xl font-extrabold text-ink md:text-3xl">
            Unlock &ldquo;{chapterTitle}&rdquo; &amp; Complete Sociology Syllabus
          </h2>
          <p className="mt-2 text-sm text-ink-soft">
            {paperLabel ? `${paperLabel} · ` : ''}Paper 1 Units 1–5 free hain. Unit 5 ke baad ke saare chapters Pro Pass mein aate hain — ek baar unlock karne par poora saal sab kuch khul jayega.
          </p>
          {tocCount > 0 || pyqCount > 0 ? (
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold">
              {tocCount > 0 ? <span className="rounded-chip border border-ink/30 bg-pastel-lavender px-2.5 py-1 text-ink">{tocCount} Deep Note Sections</span> : null}
              {pyqCount > 0 ? <span className="rounded-chip border border-ink/30 bg-pastel-mint px-2.5 py-1 text-ink">{pyqCount} Solved PYQs</span> : null}
              <span className="rounded-chip border border-ink/30 bg-pastel-yellow px-2.5 py-1 text-ink">Bilingual English + Hinglish + Mind Maps</span>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="mt-4">
          <h2 className="font-display text-2xl font-extrabold text-ink md:text-3xl">
            UPSC Sociology Optional — 1 Year Pro Pass
          </h2>
          <p className="mt-2 text-sm text-ink-soft">
            Paper 1 (Units 1–5) sabke liye free hai. Units 6–10 + complete Paper 2, bilingual notebook notes, chapter mind maps aur 597 solved PYQs ke liye Pro Pass lein.
          </p>
        </div>
      )}

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_1.2fr]">
        <div className="rounded-card border-2 border-ink bg-paper p-5 shadow-paper">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-4xl font-extrabold text-ink">₹399</span>
            <span className="text-lg font-bold text-ink-mute line-through">₹999</span>
            <span className="rounded-chip border border-ink bg-pastel-mint px-2.5 py-0.5 text-xs font-extrabold text-ink">
              60% OFF · Save ₹600
            </span>
          </div>
          <p className="mt-1 text-xs font-semibold text-saffron-deep">1 Year Full Access (365 Days) · Sirf ₹1.09 / din</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li>✓ Paper 1 Units 6–10 + Complete Paper 2 (All 20 Locked Units)</li>
            <li>✓ Bilingual Notes (English + Hinglish) har chapter mein</li>
            <li>✓ Interactive Mind Maps &amp; 597 Solved PYQs (2013–2025)</li>
            <li>✓ Ek hi Account (Email + Password) se kisi bhi device par Login</li>
          </ul>
          <div className="mt-5 border-t border-rule pt-3 text-xs text-ink-mute">
            Koi doubt ya payment help chahiye?{' '}
            <a href={TELEGRAM_MENTORSHIP_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-saffron-deep underline">
              Telegram par message karein ↗
            </a>
          </div>
        </div>

        <div className="rounded-card border-2 border-ink bg-paper p-5 shadow-paper">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block text-xs font-bold text-ink">
              Aapka Naam *
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Aarav Sharma"
                className="mt-1 w-full rounded-md border border-ink bg-paper-raised px-3 py-2 text-sm font-normal text-ink"
              />
            </label>
            <label className="block text-xs font-bold text-ink">
              Mobile / WhatsApp *
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit number"
                className="mt-1 w-full rounded-md border border-ink bg-paper-raised px-3 py-2 text-sm font-normal text-ink"
              />
            </label>
          </div>
          <label className="mt-3 block text-xs font-bold text-ink">
            Email Address * (Login &amp; Pro Pass isi email se link hoga)
            <input
              type="email"
              value={email}
              readOnly={Boolean(member)}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="mt-1 w-full rounded-md border border-ink bg-paper-raised px-3 py-2 text-sm font-normal text-ink read-only:opacity-80"
            />
          </label>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setMethod('checkout')}
              className={`rounded-md border-2 border-ink px-3 py-2 text-xs font-extrabold transition-colors ${
                method === 'checkout' ? 'bg-saffron text-ink' : 'bg-paper-raised text-ink-soft hover:bg-paper-sunk'
              }`}
            >
              Razorpay Checkout
            </button>
            <button
              type="button"
              onClick={() => setMethod('qr')}
              className={`rounded-md border-2 border-ink px-3 py-2 text-xs font-extrabold transition-colors ${
                method === 'qr' ? 'bg-saffron text-ink' : 'bg-paper-raised text-ink-soft hover:bg-paper-sunk'
              }`}
            >
              Scan UPI QR Code
            </button>
          </div>

          {error ? <p className="mt-3 rounded-md border border-red-400 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">{error}</p> : null}

          <div className="mt-4">
            {method === 'checkout' ? (
              <button
                type="button"
                disabled={loading}
                onClick={() => void startRazorpayCheckout()}
                className="btn-cta w-full rounded-md px-5 py-3 text-sm font-extrabold disabled:opacity-60"
              >
                {loading ? 'Razorpay khul raha hai...' : 'Pay ₹399 & Unlock Instant (UPI / Cards / Netbanking)'}
              </button>
            ) : qr ? (
              <RazorpayQrPanel
                key={qr.qrId}
                qr={qr}
                email={email.trim()}
                phone={phone.trim()}
                onUnlocked={handleSuccess}
                onRefreshQr={() => {
                  setQr(null)
                  void generateQr()
                }}
              />
            ) : (
              <button
                type="button"
                disabled={loading}
                onClick={() => void generateQr()}
                className="btn-cta w-full rounded-md px-5 py-3 text-sm font-extrabold disabled:opacity-60"
              >
                {loading ? 'UPI QR generate ho raha hai...' : 'Generate ₹399 Razorpay UPI QR Code'}
              </button>
            )}
          </div>
        </div>
      </div>

      <RestoreAccessBox initialEmail={email} onRestored={handleSuccess} />
    </section>
  )
}
