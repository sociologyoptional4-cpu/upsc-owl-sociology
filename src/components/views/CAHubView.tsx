import { Suspense } from 'react'

import type { CACard, IssueSummary, Paginated } from '@/lib/data/types'

import { CaCard } from '../cards/CaCard'
import { CaFilters } from '../ca/CaFilters'
import { IssueRail } from '../ca/IssueRail'
import { Pager } from '../ca/Pager'
import { Reveal } from '../motion/Reveal'
import { EmptyState } from '../ui/Badges'
import { PageHeader } from '../ui/PageHeader'

type Props = { data: { list: Paginated<CACard>; issues: IssueSummary[] } }

export function CAHubView({ data }: Props) {
  const { list, issues } = data
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <PageHeader
        kicker="Archive"
        title="Current Affairs jo syllabus se jude hain"
        highlight="syllabus"
        description="Har khabar ek topic aur thinker se linked hai. Paper chuno, ya kisi purane issue pe jao."
      >
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-6">
          <Suspense fallback={null}>
            <CaFilters />
          </Suspense>
          <p className="text-sm font-medium text-ink-mute">{list.total} stories</p>
        </div>
      </PageHeader>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_15rem]">
        <section aria-label="Stories">
          {list.items.length === 0 ? (
            <EmptyState title="Yahan abhi kuch nahi" body="Is filter mein koi story nahi mili. Filter hata ke dekho." />
          ) : (
            <ul className="grid gap-x-6 gap-y-12 md:grid-cols-2">
              {list.items.map((item, index) => (
                <Reveal as="li" key={item.id} index={index % 4}>
                  <CaCard item={item} />
                </Reveal>
              ))}
            </ul>
          )}
          <Suspense fallback={null}>
            <Pager page={list.page} totalPages={list.totalPages} />
          </Suspense>
        </section>
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <IssueRail issues={issues} />
        </aside>
      </div>
    </div>
  )
}
