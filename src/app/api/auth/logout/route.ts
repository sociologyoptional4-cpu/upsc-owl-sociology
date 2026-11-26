import { NextResponse } from 'next/server'

import { MEMBER_COOKIE_NAME } from '@/lib/auth/session'
import { PRO_COOKIE_NAME } from '@/lib/billing/token'

export async function POST() {
  const res = NextResponse.json({ loggedOut: true }, { headers: { 'Cache-Control': 'no-store' } })
  res.cookies.delete(MEMBER_COOKIE_NAME)
  res.cookies.delete(PRO_COOKIE_NAME)
  return res
}
