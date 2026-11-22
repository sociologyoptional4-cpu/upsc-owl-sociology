'use client'

import { useId, useMemo, useState } from 'react'

import type { PyqAnswerItem } from '@/lib/notes/notebook-types'

function PyqCardMeta({ item }: { item: PyqAnswerItem }) {
  const paperDot = item.paper === 'P1' ? 'bg-paper-1' : 'bg-paper-2'
  return (
    <span className="flex flex-wrap items-center gap-2">
      <span className="-skew-x-12 bg-pyq px-2.5 py-0.5 font-display text-xs font-extrabold text-white">
        <span className="inline-block skew-x-12">{item.year}</span>
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-chip border border-rule bg-paper-sunk px-2.5 py-0.5 text-xs font-semibold text-ink">
        <span aria-hidden className={`size-1.5 rounded-full ${paperDot}`} />
        {item.paper} · {item.marks} marks
      </span>
      {item.theme ? (
        <span className="rounded-chip border border-ink/20 bg-pastel-lavender px-2.5 py-0.5 text-xs font-semibold text-ink">
          {item.theme}
        </span>
      ) : null}
    </span>
  )
}

function PyqAnswerBody({ item }: { item: PyqAnswerItem }) {
  return (
    <div className="space-y-4 border-t-2 border-ink/15 px-4 pb-5 pt-4 text-sm leading-relaxed text-ink md:px-5">
      <div>
        <p className="font-display text-xs font-extrabold uppercase tracking-wider text-ink-mute">Intro</p>
        <p className="mt-1 text-ink">{item.intro}</p>
      </div>
      <div>
        <p className="font-display text-xs font-extrabold uppercase tracking-wider text-ink-mute">
          Key Dimensions / Body Points
        </p>
        <ol className="mt-1.5 list-decimal space-y-1.5 pl-5 text-ink">
          {item.points.map((point, index) => (
            <li key={`${index}-${point.slice(0, 20)}`}>{point}</li>
          ))}
        </ol>
      </div>
      {item.thinkers ? (
        <div className="rounded-card border border-ink/20 bg-paper-sunk/70 p-3">
          <p className="font-display text-xs font-extrabold uppercase tracking-wider text-ink-soft">Thinkers</p>
          <p className="mt-1 font-semibold text-thinker">{item.thinkers}</p>
        </div>
      ) : null}
      {item.example ? (
        <div className="rounded-card border border-ink/20 bg-pastel-mint/70 p-3 text-ink">
          <p className="font-display text-xs font-extrabold uppercase tracking-wider text-ink">
            Everyday / Indian Example
          </p>
          <p className="mt-1">{item.example}</p>
        </div>
      ) : null}
      <div className="rounded-card bg-paper-sunk p-3 text-ink">
        <p className="font-display text-xs font-extrabold uppercase tracking-wider text-ink-soft">Conclusion</p>
        <p className="mt-1">{item.conclusion}</p>
      </div>
    </div>
  )
}

type CardProps = {
  item: PyqAnswerItem
  index: number
  baseId: string
  isOpen: boolean
  onToggle: (index: number) => void
}

function PyqAnswerCard({ item, index, baseId, isOpen, onToggle }: CardProps) {
  const buttonId = `${baseId}-btn-${index}`
  const panelId = `${baseId}-panel-${index}`
  return (
    <article className="min-w-0 rounded-card border-2 border-ink bg-paper-raised text-ink shadow-paper">
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => onToggle(index)}
          className="flex w-full items-start justify-between gap-3 p-4 text-left transition-colors hover:bg-paper-sunk/60 md:p-5"
        >
          <span className="min-w-0 flex-1">
            <PyqCardMeta item={item} />
            <span className="mt-2.5 block font-display text-base font-bold leading-snug text-ink md:text-[1.05rem]">
              {item.question}
            </span>
          </span>
          <span
            aria-hidden
            className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-card border-2 border-ink bg-pastel-yellow font-display text-base font-extrabold leading-none text-ink"
          >
            {isOpen ? '−' : '+'}
          </span>
        </button>
      </h3>
      {isOpen ? (
        <div id={panelId} role="region" aria-labelledby={buttonId}>
          <PyqAnswerBody item={item} />
        </div>
      ) : null}
    </article>
  )
}

/** Newest-first interactive accordion of UPSC PYQs with structured model answer outlines. */
export function PyqAnswerAccordion({ items, className = '' }: { items: PyqAnswerItem[]; className?: string }) {
  const baseId = useId()
  const sorted = useMemo(() => [...items].sort((a, b) => b.year - a.year), [items])
  const [openIndices, setOpenIndices] = useState<Set<number>>(() => new Set([0]))

  if (sorted.length === 0) return null
  const allOpen = sorted.every((_, index) => openIndices.has(index))

  const toggleItem = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  const toggleAll = () => {
    setOpenIndices(allOpen ? new Set() : new Set(sorted.map((_, index) => index)))
  }

  return (
    <div className={`space-y-4 ${className}`.trim()}>
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-card border-2 border-ink bg-paper-raised px-4 py-3 text-ink shadow-paper">
        <p className="font-display text-sm font-extrabold text-ink">{items.length} PYQs with Model Answers</p>
        <button
          type="button"
          onClick={toggleAll}
          className="rounded-chip border-2 border-ink bg-pastel-yellow px-3.5 py-1.5 font-display text-xs font-extrabold text-ink transition-colors hover:bg-paper-sunk"
        >
          {allOpen ? 'Sab band karo' : 'Sab kholo'}
        </button>
      </div>
      <div className="space-y-4">
        {sorted.map((item, index) => (
          <PyqAnswerCard
            key={`${item.year}-${item.paper}-${index}`}
            item={item}
            index={index}
            baseId={baseId}
            isOpen={openIndices.has(index)}
            onToggle={toggleItem}
          />
        ))}
      </div>
    </div>
  )
}
