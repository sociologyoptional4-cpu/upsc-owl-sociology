import { NextResponse } from 'next/server'

import { getCurrentMember } from '@/lib/auth/member'
import { getProAccessStatus } from '@/lib/billing/subscriptions'

export async function GET() {
  const [member, pro] = await Promise.all([getCurrentMember(), getProAccessStatus()])
  return NextResponse.json({ member, pro }, { headers: { 'Cache-Control': 'no-store' } })
}
