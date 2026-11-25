import { NextResponse } from 'next/server'

import { PRO_ANNUAL_PLAN } from '@/lib/billing/plans'
import { fetchRazorpayQrWithPayments } from '@/lib/billing/razorpay'
import { activateSubscription } from '@/lib/billing/subscriptions'
import { PRO_COOKIE_NAME, proCookieOptions, signProToken } from '@/lib/billing/token'
import { getPayloadClient } from '@/lib/queries'

const QR_ID_RE = /^qr_[A-Za-z0-9]+$/

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const qrId = searchParams.get('qrId')?.trim() ?? ''
  const fallbackEmail = searchParams.get('email')?.trim() ?? ''
  const fallbackPhone = searchParams.get('phone')?.trim() ?? ''

  if (!QR_ID_RE.test(qrId)) {
    return NextResponse.json({ error: 'Invalid qrId' }, { status: 400, headers: { 'Cache-Control': 'no-store' } })
  }

  try {
    const { qr, payments } = await fetchRazorpayQrWithPayments(qrId)
    const paid = payments.find(
      (p) =>
        (p.status === 'captured' || p.status === 'authorized') &&
        p.amount >= PRO_ANNUAL_PLAN.amountPaise &&
        p.currency === PRO_ANNUAL_PLAN.currency,
    )

    if (!paid) {
      return NextResponse.json({ paid: false, status: qr.status }, { headers: { 'Cache-Control': 'no-store' } })
    }

    const email = qr.notes?.email || paid.notes?.email || paid.email || fallbackEmail
    if (!email) {
      return NextResponse.json(
        { error: 'Payment mil gaya par email missing hai. Restore access use karein.' },
        { status: 400, headers: { 'Cache-Control': 'no-store' } },
      )
    }

    const payload = await getPayloadClient()
    const sub = await activateSubscription(payload, {
      email,
      phone: qr.notes?.phone || paid.contact || fallbackPhone,
      name: qr.notes?.name,
      paymentMethod: 'razorpay_qr',
      razorpayOrderId: paid.order_id ?? undefined,
      razorpayPaymentId: paid.id,
      razorpayQrId: qr.id,
    })

    const expiresAt = new Date(sub.expiresAt)
    const token = signProToken({ subId: sub.id, email: sub.email, code: sub.accessCode, exp: expiresAt.getTime() })
    const res = NextResponse.json(
      { paid: true, accessCode: sub.accessCode, expiresAt: sub.expiresAt, email: sub.email },
      { headers: { 'Cache-Control': 'no-store' } },
    )
    res.cookies.set(PRO_COOKIE_NAME, token, proCookieOptions(expiresAt))
    return res
  } catch (error) {
    const message = error instanceof Error ? error.message : 'QR status check failed'
    return NextResponse.json({ error: message }, { status: 502, headers: { 'Cache-Control': 'no-store' } })
  }
}
