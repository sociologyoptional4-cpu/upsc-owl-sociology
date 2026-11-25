'use client'

import { useCallback, useEffect, useState } from 'react'

export type QrData = {
  qrId: string
  imageUrl: string
  shortUrl: string | null
  closeBy: number
  amountInr: number
}

export type UnlockedInfo = {
  accessCode: string
  expiresAt: string
  email: string
}

type RazorpayQrPanelProps = {
  qr: QrData
  email: string
  phone: string
  onUnlocked: (info: UnlockedInfo) => void
  onRefreshQr: () => void
}

function formatCountdown(secondsLeft: number): string {
  const mins = Math.floor(Math.max(0, secondsLeft) / 60)
  const secs = Math.max(0, secondsLeft) % 60
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

export function RazorpayQrPanel({ qr, email, phone, onUnlocked, onRefreshQr }: RazorpayQrPanelProps) {
  const [secondsLeft, setSecondsLeft] = useState(() => Math.max(0, qr.closeBy - Math.floor(Date.now() / 1000)))
  const [checking, setChecking] = useState(false)
  const [statusNote, setStatusNote] = useState<string | null>(null)

  const checkStatus = useCallback(
    async (manual = false) => {
      if (manual) {
        setChecking(true)
        setStatusNote(null)
      }
      try {
        const params = new URLSearchParams({ qrId: qr.qrId, email, phone })
        const res = await fetch(`/api/billing/qr-status?${params.toString()}`, { cache: 'no-store' })
        const json = (await res.json()) as {
          paid?: boolean
          accessCode?: string
          expiresAt?: string
          email?: string
          error?: string
        }
        if (json.paid && json.accessCode && json.expiresAt && json.email) {
          onUnlocked({ accessCode: json.accessCode, expiresAt: json.expiresAt, email: json.email })
          return
        }
        if (manual) {
          setStatusNote(json.error || 'Abhi payment receive nahi hua hai. Scan karne ke 5-10 second baad dubara check karein.')
        }
      } catch {
        if (manual) setStatusNote('Status check karne mein network error aaya. Dubara try karein.')
      } finally {
        if (manual) setChecking(false)
      }
    },
    [email, onUnlocked, phone, qr.qrId],
  )

  useEffect(() => {
    const tick = setInterval(() => {
      setSecondsLeft(Math.max(0, qr.closeBy - Math.floor(Date.now() / 1000)))
    }, 1000)
    return () => clearInterval(tick)
  }, [qr.closeBy])

  useEffect(() => {
    if (secondsLeft <= 0) return
    const poll = setInterval(() => {
      void checkStatus(false)
    }, 3500)
    return () => clearInterval(poll)
  }, [checkStatus, secondsLeft])

  return (
    <div className="rounded-card border-2 border-ink bg-paper p-5 text-center shadow-paper">
      <div className="inline-flex items-center gap-2 rounded-chip border border-ink bg-pastel-yellow px-3 py-1 text-xs font-extrabold text-ink">
        <span>Scan &amp; Pay ₹{qr.amountInr} via any UPI App</span>
      </div>
      <p className="mt-2 text-xs text-ink-soft">GPay · PhonePe · Paytm · BHIM · Amazon Pay</p>

      <div className="mx-auto mt-4 w-fit rounded-card border-2 border-ink bg-white p-3 shadow-paper">
        {/* Official Razorpay hosted UPI QR image URL */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={qr.imageUrl}
          alt={`Scan to pay Rs ${qr.amountInr} via Razorpay UPI`}
          width={240}
          height={240}
          className="mx-auto h-60 w-60 object-contain"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
        <span className="rounded-chip border border-ink/30 bg-paper-sunk px-2.5 py-1 font-mono font-bold text-ink">
          {secondsLeft > 0 ? `Valid for ${formatCountdown(secondsLeft)}` : 'QR Expired'}
        </span>
        {secondsLeft > 0 ? (
          <button
            type="button"
            disabled={checking}
            onClick={() => void checkStatus(true)}
            className="rounded-chip border-2 border-ink bg-pastel-mint px-3 py-1 font-bold text-ink transition-colors hover:bg-pastel-yellow disabled:opacity-60"
          >
            {checking ? 'Checking...' : 'Payment Ho Gaya? Verify Karo →'}
          </button>
        ) : (
          <button
            type="button"
            onClick={onRefreshQr}
            className="rounded-chip border-2 border-ink bg-saffron px-3 py-1 font-bold text-ink"
          >
            Naya QR Generate Karo
          </button>
        )}
      </div>

      {qr.shortUrl ? (
        <p className="mt-2.5 text-xs">
          <a href={qr.shortUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-saffron-deep underline">
            Mobile pe UPI app direct kholo ↗
          </a>
        </p>
      ) : null}

      {statusNote ? <p className="mt-3 text-xs font-medium text-red-700 dark:text-red-400">{statusNote}</p> : null}
    </div>
  )
}
