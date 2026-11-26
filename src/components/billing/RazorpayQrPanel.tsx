'use client'

import { useCallback, useEffect, useState } from 'react'

export type QrData = {
  qrId: string
  imageUrl: string
  qrDataUrl?: string | null
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
  const [zoomOpen, setZoomOpen] = useState(false)

  const displaySrc = qr.qrDataUrl || qr.imageUrl
  const hasCroppedSquare = Boolean(qr.qrDataUrl)

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

      <div className="mx-auto mt-4 w-full max-w-[340px] rounded-card border-2 border-ink bg-white p-4 shadow-paper">
        {/* Official Razorpay UPI QR (server-cropped square or poster fallback) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={displaySrc}
          alt={`Scan to pay Rs ${qr.amountInr} via Razorpay UPI`}
          className={
            hasCroppedSquare
              ? 'mx-auto block aspect-square w-full max-w-[304px] object-contain [image-rendering:pixelated]'
              : 'mx-auto block h-auto w-full max-w-[340px]'
          }
        />
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs">
        <button
          type="button"
          onClick={() => setZoomOpen(true)}
          className="rounded-chip border border-ink bg-paper-raised px-3 py-1 font-bold text-ink hover:bg-pastel-yellow"
        >
          Full Screen QR ⤢
        </button>
        <a
          href={qr.imageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-chip border border-ink/40 bg-paper-sunk px-3 py-1 font-semibold text-ink-soft hover:border-ink hover:text-ink"
        >
          Open Razorpay QR Poster ↗
        </a>
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

      {zoomOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full screen UPI QR code"
          onClick={() => setZoomOpen(false)}
          className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-card border-2 border-ink bg-white p-6 text-center text-ink shadow-float"
          >
            <p className="text-sm font-extrabold">Scan &amp; Pay ₹{qr.amountInr} · UPSC OWL Pro (1 Year)</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={displaySrc}
              alt={`Full screen UPI QR for Rs ${qr.amountInr}`}
              className={
                hasCroppedSquare
                  ? 'mx-auto mt-4 block aspect-square w-full max-w-[360px] object-contain [image-rendering:pixelated]'
                  : 'mx-auto mt-4 block max-h-[75vh] w-auto object-contain'
              }
            />
            <button
              type="button"
              onClick={() => setZoomOpen(false)}
              className="mt-4 rounded-md border-2 border-ink bg-pastel-yellow px-4 py-2 text-xs font-extrabold text-ink"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
