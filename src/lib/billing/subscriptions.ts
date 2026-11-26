import 'server-only'

import { cookies, headers } from 'next/headers'
import type { Payload } from 'payload'

import { hasRole, type Role } from '@/access/roles'
import { findActiveSubscriptionByEmail, getCurrentMember } from '@/lib/auth/member'
import type { ProAccessStatus } from '@/lib/data/types'
import { getPayloadClient } from '@/lib/queries'
import { PRO_ANNUAL_PLAN } from './plans'
import {
  PRO_COOKIE_NAME,
  generateAccessCode,
  normalizeEmail,
  normalizePhone,
  verifyProToken,
} from './token'

export type ActivateSubscriptionInput = {
  email: string
  phone?: string
  name?: string
  paymentMethod: 'razorpay_checkout' | 'razorpay_qr'
  razorpayOrderId?: string | null
  razorpayPaymentId: string
  razorpayQrId?: string | null
}

export type ActivatedSubscription = {
  id: number
  email: string
  phone: string | null
  name: string | null
  accessCode: string
  startsAt: string
  expiresAt: string
}

/** Idempotently activates a 1-year Pro subscription for a verified Razorpay payment. */
export async function activateSubscription(
  payload: Payload,
  input: ActivateSubscriptionInput,
): Promise<ActivatedSubscription> {
  const existing = await payload.find({
    collection: 'subscriptions',
    where: { razorpayPaymentId: { equals: input.razorpayPaymentId } },
    limit: 1,
    overrideAccess: true,
  })

  if (existing.docs[0]) {
    const doc = existing.docs[0]
    return {
      id: doc.id,
      email: doc.email,
      phone: doc.phone ?? null,
      name: doc.name ?? null,
      accessCode: doc.accessCode,
      startsAt: doc.startsAt,
      expiresAt: doc.expiresAt,
    }
  }

  const now = new Date()
  const expires = new Date(now.getTime() + PRO_ANNUAL_PLAN.durationDays * 24 * 60 * 60 * 1000)
  const accessCode = generateAccessCode()
  const cleanEmail = normalizeEmail(input.email)
  const cleanPhone = input.phone ? normalizePhone(input.phone) : undefined

  const created = await payload.create({
    collection: 'subscriptions',
    overrideAccess: true,
    data: {
      email: cleanEmail,
      phone: cleanPhone || undefined,
      name: input.name?.trim() || undefined,
      accessCode,
      status: 'active',
      planCode: PRO_ANNUAL_PLAN.code,
      amountInr: PRO_ANNUAL_PLAN.priceInr,
      originalPriceInr: PRO_ANNUAL_PLAN.originalPriceInr,
      currency: PRO_ANNUAL_PLAN.currency,
      paymentMethod: input.paymentMethod,
      razorpayOrderId: input.razorpayOrderId ?? undefined,
      razorpayPaymentId: input.razorpayPaymentId,
      razorpayQrId: input.razorpayQrId ?? undefined,
      startsAt: now.toISOString(),
      expiresAt: expires.toISOString(),
    },
  })

  return {
    id: created.id,
    email: created.email,
    phone: created.phone ?? null,
    name: created.name ?? null,
    accessCode: created.accessCode,
    startsAt: created.startsAt,
    expiresAt: created.expiresAt,
  }
}

/** Verifies current request's admin session or HttpOnly Pro subscription cookie. */
export async function getProAccessStatus(): Promise<ProAccessStatus> {
  const payload = await getPayloadClient()

  try {
    const auth = await payload.auth({ headers: await headers() })
    const user = auth.user as { email?: string; role?: Role | null } | null
    if (hasRole(user, 'admin', 'editor')) {
      return {
        unlocked: true,
        reason: 'admin',
        email: user?.email ?? null,
        expiresAt: null,
        accessCode: null,
      }
    }
  } catch {
    // Unauthenticated visitor; proceed to Pro cookie check.
  }

  try {
    const member = await getCurrentMember()
    if (member) {
      const memberSub = await findActiveSubscriptionByEmail(payload, member.email)
      if (memberSub) {
        return {
          unlocked: true,
          reason: 'subscription',
          email: memberSub.email,
          expiresAt: memberSub.expiresAt,
          accessCode: memberSub.accessCode,
        }
      }
    }
  } catch {
    // Member lookup failed; continue to Pro cookie fallback.
  }

  const cookieStore = await cookies()
  const token = verifyProToken(cookieStore.get(PRO_COOKIE_NAME)?.value)
  if (!token) {
    return { unlocked: false, reason: 'none', email: null, expiresAt: null, accessCode: null }
  }

  try {
    const sub = await payload.findByID({
      collection: 'subscriptions',
      id: token.subId,
      overrideAccess: true,
    })
    if (sub && sub.status === 'active' && new Date(sub.expiresAt).getTime() > Date.now()) {
      return {
        unlocked: true,
        reason: 'subscription',
        email: sub.email,
        expiresAt: sub.expiresAt,
        accessCode: sub.accessCode,
      }
    }
  } catch {
    // Missing or revoked subscription record.
  }

  return { unlocked: false, reason: 'none', email: null, expiresAt: null, accessCode: null }
}

/** Looks up an active subscription by email + matching access code, payment ID, or phone. */
export async function restoreSubscription(
  payload: Payload,
  email: string,
  credential: string,
): Promise<ActivatedSubscription | null> {
  const cleanEmail = normalizeEmail(email)
  const rawCred = credential.trim()
  const upperCred = rawCred.toUpperCase()
  const phoneCred = normalizePhone(rawCred)

  const res = await payload.find({
    collection: 'subscriptions',
    where: {
      and: [
        { email: { equals: cleanEmail } },
        { status: { equals: 'active' } },
        { expiresAt: { greater_than: new Date().toISOString() } },
      ],
    },
    sort: '-expiresAt',
    limit: 10,
    overrideAccess: true,
  })

  const match = res.docs.find((doc) => {
    if (doc.accessCode.toUpperCase() === upperCred) return true
    if (doc.razorpayPaymentId && doc.razorpayPaymentId === rawCred) return true
    if (phoneCred.length === 10 && doc.phone && normalizePhone(doc.phone) === phoneCred) return true
    return false
  })

  if (!match) return null
  return {
    id: match.id,
    email: match.email,
    phone: match.phone ?? null,
    name: match.name ?? null,
    accessCode: match.accessCode,
    startsAt: match.startsAt,
    expiresAt: match.expiresAt,
  }
}
