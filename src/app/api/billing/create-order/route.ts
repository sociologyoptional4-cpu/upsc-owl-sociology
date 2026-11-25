import { NextResponse } from 'next/server'
import { z } from 'zod'

import { PRO_ANNUAL_PLAN } from '@/lib/billing/plans'
import { createRazorpayOrder, getRazorpayPublicKey } from '@/lib/billing/razorpay'
import { normalizeEmail, normalizePhone } from '@/lib/billing/token'

const createOrderSchema = z.object({
  name: z.string().trim().min(2, 'Apna naam daalein').max(80),
  email: z.string().trim().email('Valid email address daalein'),
  phone: z.string().trim().min(10, '10-digit mobile number daalein').max(18),
})

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400, headers: { 'Cache-Control': 'no-store' } })
  }

  const parsed = createOrderSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Invalid details' },
      { status: 400, headers: { 'Cache-Control': 'no-store' } },
    )
  }

  const keyId = getRazorpayPublicKey()
  if (!keyId) {
    return NextResponse.json(
      { error: 'Payment gateway abhi configured nahi hai' },
      { status: 503, headers: { 'Cache-Control': 'no-store' } },
    )
  }

  try {
    const order = await createRazorpayOrder({
      name: parsed.data.name,
      email: normalizeEmail(parsed.data.email),
      phone: normalizePhone(parsed.data.phone),
    })

    return NextResponse.json(
      {
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        keyId,
        plan: {
          code: PRO_ANNUAL_PLAN.code,
          name: PRO_ANNUAL_PLAN.name,
          priceInr: PRO_ANNUAL_PLAN.priceInr,
          originalPriceInr: PRO_ANNUAL_PLAN.originalPriceInr,
          discountPercent: PRO_ANNUAL_PLAN.discountPercent,
        },
      },
      { headers: { 'Cache-Control': 'no-store' } },
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Order create nahi ho paya'
    return NextResponse.json({ error: message }, { status: 502, headers: { 'Cache-Control': 'no-store' } })
  }
}
