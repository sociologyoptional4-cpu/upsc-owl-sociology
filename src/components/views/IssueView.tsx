import Link from 'next/link'

import type { CACard, IssueSummary } from '@/lib/data/types'

import { CaCard } from '../cards/CaCard'
import { Reveal } from '../motion/Reveal'
import { EmptyState } from '../ui/Badges'
import { formatDay, formatWeekday } from '../ui/format'
import { PageHeader } from '../ui/PageHeader'

type Props = { data: { issue: IssueSummary; items: CACard[] } }

/** Newspaper front page: masthead, one lead story, the rest in columns. */
export function IssueView({ data }: Props) {
  const { issue, items } = data
  const [lead, ...rest] = items
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <PageHeader
        kicker={`Daily Issue #${issue.number}`}
        title={`${formatWeekday(issue.date)} ka issue`}
        highlight={formatWeekday(issue.date)}
        description={`${formatDay(issue.date)} · ${issue.count} ${issue.count === 1 ? 'story' : 'stories'} syllabus se judi`}
      >
        <p className="mt-6 text-sm"><Link href="/current-affairs" className="font-semibold text-saffron-deep">← Poora archive</Link></p>
      </PageHeader>

      {!lead ? (
        <div className="mt-12"><EmptyState title="Is din koi story nahi" body="Archive se doosra din chuno." /></div>
      ) : (
        <div className="mt-12 grid gap-x-6 gap-y-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <CaCard item={lead} variant="lead" />
          </Reveal>
          {rest.map((item, index) => (
            <Reveal key={item.id} index={index + 1}>
              <CaCard item={item} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  )
}
