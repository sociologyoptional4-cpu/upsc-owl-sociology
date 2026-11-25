import type { PaperCode } from '@/lib/data/types'

export const FREE_PAPER1_MAX_UNIT = 5

export const PRO_ANNUAL_PLAN = {
  code: 'pro_annual',
  name: 'UPSC OWL Sociology Pro (1 Year Pass)',
  priceInr: 399,
  amountPaise: 39900,
  originalPriceInr: 999,
  discountPercent: 60,
  savingsInr: 600,
  durationDays: 365,
  currency: 'INR',
} as const

/** Paper 1 Units 1-5 are completely free; Paper 1 Units 6-10 and all of Paper 2 require Pro. */
export function isChapterLocked(paperCode: PaperCode, unitNumber: number): boolean {
  if (paperCode === 'P2') return true
  return unitNumber > FREE_PAPER1_MAX_UNIT
}
