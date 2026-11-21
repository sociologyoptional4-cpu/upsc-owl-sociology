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
    <div className="grid gap-5 lg:grid-cols-2">
      {papers.map((paper, index) => {
        const tone = paperTone(paper.code)
        const stats = statsFor(paper)
        return (
          <Reveal key={paper.code} index={index}>
            <article className="group relative h-full overflow-hidden rounded-sheet border border-rule bg-paper-raised p-7 shadow-paper md:p-9">
              <span aria-hidden className={`absolute -right-20 -top-20 size-64 rounded-full opacity-10 transition-transform duration-700 ease-out-expo group-hover:scale-125 ${tone.bg}`} />
              <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${tone.text}`}>{tone.label}</p>
              <h3 className="mt-2 max-w-[18ch] text-[length:var(--text-h3)]">
                <Link href={paper.href} className="link-draw after:absolute after:inset-0 after:content-['']">
                  {paper.title.replace(/^Paper \d:\s*/, '')}
                </Link>
              </h3>
              <dl className="mt-6 flex gap-8 text-sm">
                {[
                  ['Units', stats.units],
                  ['Topics', stats.topics],
                  ['Stories linked', stats.stories],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-ink-mute">{label}</dt>
                    <dd className="font-display text-2xl">{value}</dd>
                  </div>
                ))}
              </dl>
              <ul className="relative z-10 mt-6 flex flex-wrap gap-2">
                {paper.units.slice(0, 6).map((unit) => (
                  <li key={unit.href}>
                    <Link href={unit.href} className="inline-flex rounded-chip border border-rule px-3 py-1 text-xs text-ink-soft transition-colors hover:border-ink/40 hover:text-ink">
                      {unit.number}. {unit.title} <span className="ml-1 text-ink-mute">({pluralize(unit.topics.length, 'topic', 'topics')})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        )
      })}
    </div>
  )
}
