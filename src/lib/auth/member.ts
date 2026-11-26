import 'server-only'

import { cookies } from 'next/headers'
import type { Payload } from 'payload'

import { normalizeEmail } from '@/lib/billing/token'
import { getPayloadClient } from '@/lib/queries'
import { MEMBER_COOKIE_NAME, verifyMemberToken } from './session'

export type MemberProfile = {
  id: number
  name: string
  email: string
  phone: string | null
}

/** Finds the latest active non-expired Pro subscription matching a member's email. */
export async function findActiveSubscriptionByEmail(payload: Payload, email: string) {
  const cleanEmail = normalizeEmail(email)
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
    limit: 1,
    overrideAccess: true,
  })
  return res.docs[0] ?? null
}

/** Reads and verifies the current student session cookie against Payload `members`. */
export async function getCurrentMember(): Promise<MemberProfile | null> {
  const cookieStore = await cookies()
  const token = verifyMemberToken(cookieStore.get(MEMBER_COOKIE_NAME)?.value)
  if (!token) return null

  const payload = await getPayloadClient()
  try {
    const doc = await payload.findByID({
      collection: 'members',
      id: token.memberId,
      overrideAccess: true,
    })
    if (!doc || doc.status !== 'active') return null
    return {
      id: doc.id,
      name: doc.name,
      email: doc.email,
      phone: doc.phone ?? null,
    }
  } catch {
    return null
  }
}
