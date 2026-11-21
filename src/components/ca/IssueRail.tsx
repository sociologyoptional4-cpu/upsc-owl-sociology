import Link from 'next/link'

import type { IssueSummary } from '@/lib/data/types'

import { formatDayShort } from '../ui/format'

/** Recent issues with a tiny bar per day: a calendar heat-strip in list form. */
export function IssueRail({ issues }: { issues: IssueSummary[] }) {
  const max = Math.max(1, ...issues.map((issue) => issue.count))
  return (
    <nav aria-label="Recent issues">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-mute">Recent issues</p>
      <ul className="space-y-1">
        {issues.map((issue) => (
          <li key={issue.date}>
            <Link href={issue.href} className="group grid grid-cols-[4.5rem_1fr_auto] items-center gap-3 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-paper-sunk">
              <span className="text-ink-soft group-hover:text-ink">{formatDayShort(issue.date)}</span>
              <span aria-hidden className="h-1.5 overflow-hidden rounded-full bg-paper-sunk">
                <span className="block h-full origin-left rounded-full bg-saffron transition-transform duration-500 ease-out-expo" style={{ transform: `scaleX(${issue.count / max})` }} />
              </span>
              <span className="text-xs text-ink-mute">#{issue.number}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
