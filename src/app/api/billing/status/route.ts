import { NextResponse } from 'next/server'

import { getProAccessStatus } from '@/lib/billing/subscriptions'

export async function GET() {
  const status = await getProAccessStatus()
  return NextResponse.json(status, { headers: { 'Cache-Control': 'no-store' } })
}
