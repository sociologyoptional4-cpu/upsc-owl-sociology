import Link from 'next/link'

import type { SyllabusPaper } from '@/lib/data/types'

import { Reveal } from '../motion/Reveal'
import { pluralize } from '../ui/format'
import { paperTone } from '../ui/paper'

const statsFor = (paper: SyllabusPaper) => {
  const topics = paper.units.flatMap((unit) => unit.topics)
  return {
    units: paper.units.length,
    topics: topics.length,
    stories: topics.reduce((sum, topic) => sum + topic.caCount, 0),
  }
}

export function SyllabusBento({ papers }: { papers: SyllabusPaper[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {papers.map((paper, index) => {
        const tone = paperTone(paper.code)
        const stats = statsFor(paper)
        const sampleChapters = paper.units.slice(0, 2).flatMap((u) => u.topics).slice(0, 3)

        return (
          <Reveal key={paper.code} index={index} className="min-w-0">
            <article className="relative h-full w-full min-w-0 overflow-hidden rounded-sheet border-2 border-ink bg-paper-raised p-4 shadow-paper sm:p-6 md:p-9">
              <span aria-hidden className={`pointer-events-none absolute -right-20 -top-20 size-64 rounded-full opacity-10 ${tone.bg}`} />
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${tone.text}`}>{tone.label}</p>
                <span className="rounded-chip border border-ink/40 bg-pastel-yellow px-2.5 py-0.5 text-[11px] font-bold text-ink">
                  {paper.code === 'P1' ? 'Units 1–5 Free' : 'Pro Unlock'}
                </span>
              </div>
              <h3 className="relative z-10 mt-2 max-w-full break-words text-[length:var(--text-h3)]">
                <Link href={paper.href} className="link-draw hover:underline">
                  {paper.title.replace(/^Paper \d:\s*/, '')}
                </Link>
              </h3>
              <dl className="relative z-10 mt-5 flex flex-wrap gap-6 text-sm md:gap-8">
                {[
                  ['Units', stats.units],
                  ['Chapters', stats.topics],
                  ['Stories linked', stats.stories],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-ink-mute">{label}</dt>
                    <dd className="font-display text-2xl font-extrabold">{value}</dd>
                  </div>
                ))}
              </dl>

              {sampleChapters.length > 0 ? (
                <div className="relative z-10 mt-5 min-w-0 rounded-card border border-ink/25 bg-paper p-3 sm:p-3.5">
                  <p className="mb-2 text-[11px] font-extrabold uppercase tracking-wider text-ink-mute">
                    {paper.code === 'P1' ? 'Free Chapters (Tap to Read)' : 'Featured Chapters (Tap to Explore)'}
                  </p>
                  <ul className="space-y-1.5">
                    {sampleChapters.map((topic) => (
                      <li key={topic.href} className="min-w-0">
                        <Link
                          href={topic.href}
                          className="flex min-h-[42px] w-full min-w-0 items-center justify-between gap-2 rounded-md border border-rule bg-paper-raised px-2.5 py-1.5 text-xs font-semibold text-ink transition-transform active:scale-[0.99] hover:border-ink sm:px-3"
                        >
                          <span className="min-w-0 flex-1 truncate">{topic.title}</span>
                          <span className="shrink-0 whitespace-nowrap font-extrabold text-saffron-deep">
                            {topic.isLocked ? '🔒 Pro →' : 'Read →'}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <ul className="relative z-10 mt-5 flex flex-wrap gap-2">
                {paper.units.slice(0, 5).map((unit) => (
                  <li key={unit.href} className="max-w-full">
                    <Link
                      href={unit.href}
                      className="inline-flex max-w-full flex-wrap items-center gap-x-1 rounded-chip border border-rule px-3 py-1 text-xs text-ink-soft transition-colors hover:border-ink hover:text-ink"
                    >
                      <span className="break-words">{unit.number}. {unit.title}</span>
                      <span className="text-ink-mute">({pluralize(unit.topics.length, 'ch', 'chs')})</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="relative z-10 mt-5">
                <Link
                  href={paper.href}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-ink bg-pastel-yellow px-4 py-2 text-center text-xs font-extrabold text-ink transition-transform active:scale-95 hover:bg-saffron sm:w-auto"
                >
                  View All {stats.units} Units &amp; {stats.topics} Chapters →
                </Link>
              </div>
            </article>
          </Reveal>
        )
      })}
    </div>
  )
}
