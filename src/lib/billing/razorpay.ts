import crypto from 'crypto'
import { env } from '@/lib/env'
import { PRO_ANNUAL_PLAN } from './plans'

const RAZORPAY_API_BASE = 'https://api.razorpay.com/v1'
const REQUEST_TIMEOUT_MS = 12_000

export type RazorpayOrderResponse = {
  id: string
  amount: number
  currency: string
  receipt?: string
  status: string
}

export type RazorpayQrResponse = {
  id: string
  status: string
  image_url: string
  short_url?: string
  close_by: number
  payment_amount: number
  notes?: Record<string, string>
}

export type RazorpayPaymentEntity = {
  id: string
  order_id?: string | null
  amount: number
  currency: string
  status: string
  method?: string
  email?: string
  contact?: string
  notes?: Record<string, string>
}

export function getRazorpayPublicKey(): string | null {
  return env.RAZORPAY_KEY_ID ?? null
}

function getAuthHeader(): string {
  const keyId = env.RAZORPAY_KEY_ID
  const keySecret = env.RAZORPAY_KEY_SECRET
  if (!keyId || !keySecret) {
    throw new Error('Razorpay credentials are not configured on the server')
  }
  return `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString('base64')}`
}

async function rzpFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${RAZORPAY_API_BASE}${path}`, {
    ...init,
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    headers: {
      Authorization: getAuthHeader(),
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
  })
  const text = await res.text()
  let parsed: unknown = null
  try {
    parsed = text ? JSON.parse(text) : null
  } catch {
    parsed = null
  }
  if (!res.ok) {
    const errDesc =
      parsed && typeof parsed === 'object' && 'error' in parsed
        ? String((parsed as { error?: { description?: string } }).error?.description ?? `Razorpay error ${res.status}`)
        : `Razorpay error ${res.status}`
    throw new Error(errDesc)
  }
  return parsed as T
}

export async function createRazorpayOrder(customer: {
  name: string
  email: string
  phone: string
}): Promise<RazorpayOrderResponse> {
  const receipt = `owl_${Date.now()}_${crypto.randomBytes(3).toString('hex')}`
  return rzpFetch<RazorpayOrderResponse>('/orders', {
    method: 'POST',
    body: JSON.stringify({
      amount: PRO_ANNUAL_PLAN.amountPaise,
      currency: PRO_ANNUAL_PLAN.currency,
      receipt,
      notes: {
        plan: PRO_ANNUAL_PLAN.code,
        email: customer.email,
        phone: customer.phone,
        name: customer.name.slice(0, 60),
        site: 'sociology4upsc.com',
      },
    }),
  })
}

export async function createRazorpayQrCode(customer: {
  name: string
  email: string
  phone: string
}): Promise<RazorpayQrResponse> {
  const closeBy = Math.floor(Date.now() / 1000) + 15 * 60
  return rzpFetch<RazorpayQrResponse>('/payments/qr_codes', {
    method: 'POST',
    body: JSON.stringify({
      type: 'upi_qr',
      name: 'UPSC OWL Sociology',
      usage: 'single_use',
      fixed_amount: true,
      payment_amount: PRO_ANNUAL_PLAN.amountPaise,
      description: '1 Year Pro Pass (60% OFF Rs 999)',
      close_by: closeBy,
      notes: {
        plan: PRO_ANNUAL_PLAN.code,
        email: customer.email,
        phone: customer.phone,
        name: customer.name.slice(0, 60),
        site: 'sociology4upsc.com',
      },
    }),
  })
}

export async function fetchRazorpayQrWithPayments(qrId: string): Promise<{
  qr: RazorpayQrResponse
  payments: RazorpayPaymentEntity[]
}> {
  const safeId = encodeURIComponent(qrId)
  const [qr, paymentsRes] = await Promise.all([
    rzpFetch<RazorpayQrResponse>(`/payments/qr_codes/${safeId}`, { method: 'GET' }),
    rzpFetch<{ items?: RazorpayPaymentEntity[] }>(`/payments/qr_codes/${safeId}/payments?count=5`, { method: 'GET' }),
  ])
  return { qr, payments: paymentsRes.items ?? [] }
}

export async function fetchRazorpayPayment(paymentId: string): Promise<RazorpayPaymentEntity> {
  return rzpFetch<RazorpayPaymentEntity>(`/payments/${encodeURIComponent(paymentId)}`, { method: 'GET' })
}

function timingSafeHexEqual(expected: string, provided: string): boolean {
  const a = Buffer.from(expected, 'utf8')
  const b = Buffer.from(provided.trim().toLowerCase(), 'utf8')
  return a.length === b.length && crypto.timingSafeEqual(a, b)
}

export function verifyRazorpayPaymentSignature(params: {
  orderId: string
  paymentId: string
  signature: string
  secret?: string
}): boolean {
  const keySecret = params.secret ?? env.RAZORPAY_KEY_SECRET
  if (!keySecret || !params.orderId || !params.paymentId || !params.signature) return false
  const expected = crypto.createHmac('sha256', keySecret).update(`${params.orderId}|${params.paymentId}`).digest('hex')
  return timingSafeHexEqual(expected, params.signature)
}

export function verifyRazorpayWebhookSignature(
  rawBody: string,
  signature: string | null,
  secret = env.RAZORPAY_WEBHOOK_SECRET,
): boolean {
  if (!secret || !rawBody || !signature) return false
  const expected = crypto.createHmac('sha256', secret).update(rawBody).digest('hex')
  return timingSafeHexEqual(expected, signature)
}
