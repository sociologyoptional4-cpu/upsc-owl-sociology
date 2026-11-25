import { NextResponse } from 'next/server'

import { PRO_ANNUAL_PLAN } from '@/lib/billing/plans'
import { verifyRazorpayWebhookSignature } from '@/lib/billing/razorpay'
import { activateSubscription } from '@/lib/billing/subscriptions'
import { env } from '@/lib/env'
import { getPayloadClient } from '@/lib/queries'

type WebhookPayment = {
  id?: string
  order_id?: string | null
  amount?: number
  currency?: string
  status?: string
  email?: string
  contact?: string
  notes?: Record<string, string>
}

type WebhookPayload = {
  event?: string
  payload?: {
    payment?: { entity?: WebhookPayment }
    qr_code?: { entity?: { id?: string; notes?: Record<string, string> } }
  }
}

export async function POST(req: Request) {
  if (!env.RAZORPAY_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 503 })
  }

  const rawBody = await req.text()
  const signature = req.headers.get('x-razorpay-signature')
  if (!verifyRazorpayWebhookSignature(rawBody, signature)) {
    return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 401 })
  }

  let parsed: WebhookPayload
  try {
    parsed = JSON.parse(rawBody) as WebhookPayload
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const event = parsed.event ?? ''
  if (event !== 'payment.captured' && event !== 'qr_code.credited') {
    return NextResponse.json({ ok: true, ignored: event })
  }

  const payment = parsed.payload?.payment?.entity
  const qr = parsed.payload?.qr_code?.entity
  if (!payment?.id || !payment.amount || payment.amount < PRO_ANNUAL_PLAN.amountPaise) {
    return NextResponse.json({ ok: true, skipped: 'incomplete-payment' })
  }

  const email = qr?.notes?.email || payment.notes?.email || payment.email
  if (!email) {
    return NextResponse.json({ ok: true, skipped: 'missing-email' })
  }

  const payload = await getPayloadClient()
  await activateSubscription(payload, {
    email,
    phone: qr?.notes?.phone || payment.notes?.phone || payment.contact,
    name: qr?.notes?.name || payment.notes?.name,
    paymentMethod: qr?.id ? 'razorpay_qr' : 'razorpay_checkout',
    razorpayOrderId: payment.order_id ?? undefined,
    razorpayPaymentId: payment.id,
    razorpayQrId: qr?.id ?? undefined,
  })

  return NextResponse.json({ ok: true })
}
