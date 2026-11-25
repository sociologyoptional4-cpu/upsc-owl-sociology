import { NextResponse } from 'next/server'
import { z } from 'zod'

import { PRO_ANNUAL_PLAN } from '@/lib/billing/plans'
import { createRazorpayQrCode } from '@/lib/billing/razorpay'
import { normalizeEmail, normalizePhone } from '@/lib/billing/token'

const createQrSchema = z.object({
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

  const parsed = createQrSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Invalid details' },
      { status: 400, headers: { 'Cache-Control': 'no-store' } },
    )
  }

  try {
    const qr = await createRazorpayQrCode({
      name: parsed.data.name,
      email: normalizeEmail(parsed.data.email),
      phone: normalizePhone(parsed.data.phone),
    })

    return NextResponse.json(
      {
        qrId: qr.id,
        imageUrl: qr.image_url,
        shortUrl: qr.short_url ?? null,
        closeBy: qr.close_by,
        amountInr: PRO_ANNUAL_PLAN.priceInr,
      },
      { headers: { 'Cache-Control': 'no-store' } },
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : 'UPI QR generate nahi ho paya'
    return NextResponse.json({ error: message }, { status: 502, headers: { 'Cache-Control': 'no-store' } })
  }
}
