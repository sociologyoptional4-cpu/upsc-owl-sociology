import { NextResponse } from 'next/server'

import { PRO_COOKIE_NAME } from '@/lib/billing/token'

export async function POST() {
  const res = NextResponse.json({ unlocked: false }, { headers: { 'Cache-Control': 'no-store' } })
  res.cookies.delete(PRO_COOKIE_NAME)
  return res
}
