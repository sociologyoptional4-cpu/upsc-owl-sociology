import crypto from 'crypto'
import { describe, expect, it, vi } from 'vitest'

vi.mock('@/lib/env', () => ({
  env: {
    PAYLOAD_SECRET: 'test-secret-key-at-least-32-chars-long-0123',
    RAZORPAY_KEY_ID: 'rzp_test_unit',
    RAZORPAY_KEY_SECRET: 'rzp_secret_unit_key',
    RAZORPAY_WEBHOOK_SECRET: 'whsec_test_unit_key',
  },
}))

import { FREE_PAPER1_MAX_UNIT, PRO_ANNUAL_PLAN, isChapterLocked } from '@/lib/billing/plans'
import { verifyRazorpayPaymentSignature, verifyRazorpayWebhookSignature } from '@/lib/billing/razorpay'
import { generateAccessCode, normalizeEmail, normalizePhone, signProToken, verifyProToken } from '@/lib/billing/token'

describe('billing plans & unit lock rules', () => {
  it('unlocks Paper 1 Units 1-5 and locks Paper 1 Units 6-10', () => {
    expect(FREE_PAPER1_MAX_UNIT).toBe(5)
    for (let u = 1; u <= 5; u += 1) {
      expect(isChapterLocked('P1', u)).toBe(false)
    }
    for (let u = 6; u <= 10; u += 1) {
      expect(isChapterLocked('P1', u)).toBe(true)
    }
  })

  it('locks all Paper 2 units including Units 1-5', () => {
    for (let u = 1; u <= 15; u += 1) {
      expect(isChapterLocked('P2', u)).toBe(true)
    }
  })

  it('configures the 1-year Rs 399 plan (60% OFF Rs 999)', () => {
    expect(PRO_ANNUAL_PLAN.priceInr).toBe(399)
    expect(PRO_ANNUAL_PLAN.amountPaise).toBe(39900)
    expect(PRO_ANNUAL_PLAN.originalPriceInr).toBe(999)
    expect(PRO_ANNUAL_PLAN.discountPercent).toBe(60)
    expect(PRO_ANNUAL_PLAN.durationDays).toBe(365)
    expect(PRO_ANNUAL_PLAN.currency).toBe('INR')
  })
})

describe('billing tokens & Razorpay signatures', () => {
  it('round-trips a signed Pro token and rejects tampering or expiry', () => {
    const token = signProToken({
      subId: 42,
      email: 'aspirant@example.com',
      code: 'OWL-ABCD-1234',
      exp: Date.now() + 60_000,
    })
    const decoded = verifyProToken(token)
    expect(decoded).toMatchObject({ subId: 42, email: 'aspirant@example.com', code: 'OWL-ABCD-1234' })

    const [payloadPart, sigPart] = token.split('.')
    expect(verifyProToken(`${payloadPart}x.${sigPart}`)).toBeNull()
    expect(verifyProToken(`${payloadPart}.${sigPart}x`)).toBeNull()

    const expired = signProToken({
      subId: 42,
      email: 'aspirant@example.com',
      code: 'OWL-ABCD-1234',
      exp: Date.now() - 1000,
    })
    expect(verifyProToken(expired)).toBeNull()
  })

  it('verifies Razorpay payment & webhook signatures using timing-safe HMAC-SHA256', () => {
    const secret = 'rzp_secret_unit_key'
    const sig = crypto.createHmac('sha256', secret).update('order_123|pay_456').digest('hex')
    expect(verifyRazorpayPaymentSignature({ orderId: 'order_123', paymentId: 'pay_456', signature: sig })).toBe(true)
    expect(verifyRazorpayPaymentSignature({ orderId: 'order_123', paymentId: 'pay_456', signature: `${sig.slice(0, -1)}0` })).toBe(false)

    const body = '{"event":"payment.captured"}'
    const whSig = crypto.createHmac('sha256', 'whsec_test_unit_key').update(body).digest('hex')
    expect(verifyRazorpayWebhookSignature(body, whSig)).toBe(true)
    expect(verifyRazorpayWebhookSignature(body, 'deadbeef')).toBe(false)
  })

  it('generates OWL-XXXX-XXXX codes and normalizes email & phone', () => {
    expect(generateAccessCode()).toMatch(/^OWL-[A-Z0-9]{4}-[A-Z0-9]{4}$/)
    expect(normalizeEmail('  Aspirant@Example.COM ')).toBe('aspirant@example.com')
    expect(normalizePhone('+91 98765-43210')).toBe('9876543210')
  })
})
