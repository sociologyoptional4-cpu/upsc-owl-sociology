import Link from 'next/link'

import type { ThinkerChip, TopicChip } from '@/lib/data/types'

import { paperTone } from './paper'

export function TopicChipLink({ topic }: { topic: TopicChip }) {
  const tone = paperTone(topic.paper)
  return (
    <Link
      href={topic.href}
      className="relative z-10 inline-flex items-center gap-1.5 rounded-chip border border-rule bg-paper-raised px-2.5 py-1 text-xs text-ink-soft transition-colors hover:border-ink/40 hover:text-ink"
    >
      <span aria-hidden className={`size-1.5 rounded-full ${tone.dot}`} />
      <span className="sr-only">{tone.label}: </span>
      {topic.title}
    </Link>
  )
}

export function ThinkerChipLink({ thinker }: { thinker: ThinkerChip }) {
  return (
    <Link
      href={thinker.href}
      className="relative z-10 inline-flex items-center gap-1.5 rounded-chip px-2.5 py-1 text-xs text-thinker transition-colors hover:bg-thinker/10"
    >
      <span aria-hidden>◆</span>
      {thinker.name}
    </Link>
  )
}

export function ChipRow({ topics = [], thinkers = [] }: { topics?: TopicChip[]; thinkers?: ThinkerChip[] }) {
  if (topics.length === 0 && thinkers.length === 0) return null
  return (
    <div className="flex flex-wrap gap-1.5">
      {topics.map((topic) => (
        <TopicChipLink key={topic.href} topic={topic} />
      ))}
      {thinkers.map((thinker) => (
        <ThinkerChipLink key={thinker.href} thinker={thinker} />
      ))}
    </div>
  )
}
