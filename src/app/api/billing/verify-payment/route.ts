import { NextResponse } from 'next/server'
import { z } from 'zod'

import { PRO_ANNUAL_PLAN } from '@/lib/billing/plans'
import { fetchRazorpayPayment, verifyRazorpayPaymentSignature } from '@/lib/billing/razorpay'
import { activateSubscription } from '@/lib/billing/subscriptions'
import { PRO_COOKIE_NAME, proCookieOptions, signProToken } from '@/lib/billing/token'
import { getPayloadClient } from '@/lib/queries'

const verifySchema = z.object({
  razorpay_order_id: z.string().min(4),
  razorpay_payment_id: z.string().min(4),
  razorpay_signature: z.string().min(10),
  email: z.string().trim().email(),
  phone: z.string().trim().optional(),
  name: z.string().trim().optional(),
})

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400, headers: { 'Cache-Control': 'no-store' } })
  }

  const parsed = verifySchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Payment verification details incomplete hain' },
      { status: 400, headers: { 'Cache-Control': 'no-store' } },
    )
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, email, phone, name } = parsed.data

  const validSig = verifyRazorpayPaymentSignature({
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
    signature: razorpay_signature,
  })
  if (!validSig) {
    return NextResponse.json({ error: 'Payment signature verify nahi ho paya' }, { status: 400, headers: { 'Cache-Control': 'no-store' } })
  }

  try {
    const payment = await fetchRazorpayPayment(razorpay_payment_id)
    if (
      payment.amount < PRO_ANNUAL_PLAN.amountPaise ||
      payment.currency !== PRO_ANNUAL_PLAN.currency ||
      (payment.status !== 'captured' && payment.status !== 'authorized')
    ) {
      return NextResponse.json({ error: 'Payment abhi confirm nahi hua hai' }, { status: 402, headers: { 'Cache-Control': 'no-store' } })
    }

    const payload = await getPayloadClient()
    const sub = await activateSubscription(payload, {
      email: email || payment.email || '',
      phone: phone || payment.contact,
      name,
      paymentMethod: 'razorpay_checkout',
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
    })

    const expiresAt = new Date(sub.expiresAt)
    const token = signProToken({ subId: sub.id, email: sub.email, code: sub.accessCode, exp: expiresAt.getTime() })
    const res = NextResponse.json(
      { unlocked: true, accessCode: sub.accessCode, expiresAt: sub.expiresAt, email: sub.email },
      { headers: { 'Cache-Control': 'no-store' } },
    )
    res.cookies.set(PRO_COOKIE_NAME, token, proCookieOptions(expiresAt))
    return res
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Payment verify karte waqt error aaya'
    return NextResponse.json({ error: message }, { status: 500, headers: { 'Cache-Control': 'no-store' } })
  }
}
