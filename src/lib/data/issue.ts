import { urls } from './urls'

export const LAUNCH_DATE = '2026-11-21'

export function formatDateIST(value: string): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(value))
}

export function issueNumber(date: string): number {
  const from = Date.parse(`${LAUNCH_DATE}T00:00:00Z`)
  const to = Date.parse(`${date}T00:00:00Z`)
  return Math.floor((to - from) / 86_400_000) + 1
}

export function issueSummary(date: string, count: number) {
  return { date, count, number: issueNumber(date), href: urls.issue(date) }
}
