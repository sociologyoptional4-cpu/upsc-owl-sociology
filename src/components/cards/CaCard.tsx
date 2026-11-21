import Image from 'next/image'
import Link from 'next/link'

import type { CACard } from '@/lib/data/types'

import { getPortraitAsset } from '../thinkers/portrait-assets'
import { AiBadge } from '../ui/Badges'
import { ChipRow } from '../ui/Chips'
import { formatDay, formatDayShort } from '../ui/format'
import { paperTone } from '../ui/paper'

type Props = { item: CACard; variant?: 'default' | 'lead' | 'compact' }

/** Thumbnail-style post card: dark "cover" made from our own data, info bar, then title + excerpt. */
export function CaCard({ item, variant = 'default' }: Props) {
  if (variant === 'compact') return <CompactCard item={item} />
  const isLead = variant === 'lead'

  return (
    <article className="group relative flex h-full flex-col">
      <Cover item={item} isLead={isLead} />
      <div className="flex flex-1 flex-col pt-4">
        <h3 className={`font-display font-semibold leading-snug ${isLead ? 'text-[length:var(--text-h3)]' : 'text-lg'}`}>
          <Link href={item.href} className="after:absolute after:inset-0 after:content-['']">
            {item.headline}
          </Link>
        </h3>
        {item.summary && <p className={`mt-2 text-sm text-ink-soft ${isLead ? 'line-clamp-4' : 'line-clamp-2'}`}>{item.summary}</p>}
        <div className="mt-3"><ChipRow topics={item.topics.slice(0, 2)} /></div>
        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <span className="text-sm font-semibold text-saffron-deep transition-transform duration-300 group-hover:translate-x-1">Padho →</span>
          {item.isAiGenerated && <AiBadge />}
        </div>
      </div>
    </article>
  )
}

export function Cover({ item, isLead }: { item: CACard; isLead: boolean }) {
  const tone = paperTone(item.paper)
  const thinker = item.thinkers.find((t) => getPortraitAsset(t.slug))
  const portrait = thinker ? getPortraitAsset(thinker.slug) : null
  const topic = item.topics[0]

  return (
    <div className="overflow-hidden rounded-card bg-neutral-950 text-white shadow-paper transition-[transform,box-shadow] duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:shadow-float">
      <div className={`relative flex ${isLead ? 'aspect-[16/8]' : 'aspect-[16/9]'} items-center gap-4 p-5 md:p-6`}>
        <span aria-hidden className="absolute left-4 top-4 grid size-8 place-items-center rounded-full bg-saffron text-[10px] font-extrabold text-black">OWL</span>
        <div className="relative z-10 mt-6 min-w-0 flex-1">
          <p className={`font-display font-extrabold uppercase leading-[1.05] tracking-tight ${isLead ? 'text-[clamp(1.5rem,3vw,2.6rem)]' : 'text-[clamp(1.1rem,1.6vw,1.45rem)]'} line-clamp-3`}>
            {item.headline.replace(/^\[Sample\]\s*/, '')}
          </p>
          {topic && (
            <p className="mt-3 inline-block -skew-x-12 bg-saffron px-2.5 py-0.5 text-[11px] font-bold text-black">
              <span className="inline-block skew-x-12">{topic.title}</span>
            </p>
          )}
        </div>
        {portrait && thinker && (
          <div className="relative aspect-square w-[34%] shrink-0 overflow-hidden rounded-full bg-neutral-800 ring-4 ring-red-600/80">
            <Image src={portrait.srcSm} alt="" fill sizes="160px" className="object-cover object-top grayscale" />
          </div>
        )}
      </div>
      <div className="flex items-center justify-between gap-3 bg-neutral-800 px-5 py-2.5 text-[11px]">
        <span className="text-neutral-300">
          <time dateTime={item.date}>{formatDay(item.date)}</time>
          {item.sourceNames[0] && <span className="text-neutral-500"> · {item.sourceNames[0]}</span>}
        </span>
        {item.paper && <span className="rounded-chip bg-red-600 px-2.5 py-0.5 font-semibold text-white">{tone.label}</span>}
      </div>
    </div>
  )
}

function CompactCard({ item }: { item: CACard }) {
  const tone = paperTone(item.paper)
  return (
    <article className="group relative rounded-card border border-rule bg-paper-raised p-4 shadow-paper transition-[transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-float">
      <div className="mb-2 flex items-center justify-between text-[11px] text-ink-mute">
        <time dateTime={item.date} className="font-semibold uppercase tracking-wider">{formatDayShort(item.date)}</time>
        {item.paper && <span className="rounded-chip bg-red-600 px-2 py-0.5 font-semibold text-white">{tone.label}</span>}
      </div>
      <h3 className="font-display text-base font-semibold leading-snug">
        <Link href={item.href} className="after:absolute after:inset-0 after:content-['']">{item.headline}</Link>
      </h3>
    </article>
  )
}
