'use client'

import Link from 'next/link'

import type { SyllabusUnit } from '@/lib/data/types'

import { Reveal } from '../motion/Reveal'

/** Coverage dots: one dot per linked story (max 5), so thin topics are visible at a glance. */
function Coverage({ count }: { count: number }) {
  const MAX_DOTS = 5
  return (
    <span className="flex items-center gap-1" aria-label={`${count} linked stories`}>
      {Array.from({ length: MAX_DOTS }, (_, i) => (
        <span key={i} aria-hidden className={`size-1.5 rounded-full ${i < count ? 'bg-saffron' : 'bg-rule'}`} />
      ))}
      {count > MAX_DOTS && <span className="text-[10px] text-ink-mute">+{count - MAX_DOTS}</span>}
    </span>
  )
}

export function UnitList({ units, accent }: { units: SyllabusUnit[]; accent: string }) {
  return (
    <ol className="space-y-4 md:space-y-0 md:divide-y md:divide-rule md:border-y md:border-rule">
      {units.map((unit, index) => {
        const hasUnitNotes = unit.topics.some((topic) => topic.hasNotes)
        return (
          <Reveal
            as="li"
            key={unit.href}
            index={index % 5}
            className="grid gap-4 rounded-card border-2 border-ink bg-paper p-4 shadow-paper md:grid-cols-[4rem_1fr_1.35fr] md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-6 md:shadow-none"
          >
            <div className="flex items-center justify-between md:block">
              <span className={`font-display text-3xl font-extrabold md:text-4xl ${accent}`}>{String(unit.number).padStart(2, '0')}</span>
              <span className="rounded-chip border border-ink/30 bg-paper-sunk px-2.5 py-0.5 text-[11px] font-bold text-ink md:hidden">
                {unit.topics.length} Chapters · Tap to read ↓
              </span>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-bold leading-snug md:text-xl">
                  <Link href={unit.href} className="link-draw">{unit.title}</Link>
                </h3>
                {unit.isLocked ? (
                  <Link
                    href="/pro"
                    className="rounded-chip border border-ink bg-pastel-yellow px-2 py-0.5 text-[11px] font-extrabold text-ink hover:bg-saffron"
                    title="Chapters in this unit require UPSC OWL Pro (₹399/yr)"
                  >
                    🔒 Pro
                  </Link>
                ) : (
                  <span className="rounded-chip border border-ink/40 bg-pastel-mint px-2 py-0.5 text-[11px] font-bold text-ink">
                    Free
                  </span>
                )}
              </div>
              {hasUnitNotes ? (
                <Link
                  href={unit.href}
                  className="mt-2 inline-flex items-center gap-1 rounded-chip border border-ink bg-pastel-yellow px-2.5 py-1 text-xs font-bold text-ink transition-colors hover:bg-pastel-mint"
                >
                  Notes &amp; Mind Maps →
                </Link>
              ) : null}
            </div>

            <ul className="space-y-2">
              {unit.topics.length === 0 && <li className="text-sm text-ink-mute">Topics jald aa rahe hain</li>}
              {unit.topics.map((topic, tIdx) => (
                <li key={topic.href}>
                  <Link
                    href={topic.href}
                    className="group flex min-h-[48px] items-center justify-between gap-2 rounded-card border border-ink/30 bg-paper-raised px-3.5 py-2.5 text-sm text-ink transition-all active:scale-[0.99] hover:border-ink hover:bg-pastel-yellow/35"
                  >
                    <div className="min-w-0 flex-1">
                      <span className="font-semibold leading-snug group-hover:underline">
                        <span className="mr-1.5 font-mono text-xs text-ink-mute">
                          {unit.number}.{tIdx + 1}
                        </span>
                        {topic.title}
                      </span>
                      <div className="mt-1 flex flex-wrap items-center gap-1.5">
                        {topic.hasNotes ? (
                          <span className="rounded-chip border border-ink/35 bg-pastel-mint px-2 py-0.5 text-[10px] font-bold text-ink">
                            Notes
                          </span>
                        ) : null}
                        {(topic.pyqCount ?? 0) > 0 ? (
                          <span className="rounded-chip border border-rule bg-paper-sunk px-2 py-0.5 text-[10px] font-semibold text-ink-mute">
                            {topic.pyqCount} PYQs
                          </span>
                        ) : null}
                        <Coverage count={topic.caCount} />
                      </div>
                    </div>
                    <span
                      className={`shrink-0 rounded-chip border px-2.5 py-1 text-[11px] font-extrabold text-ink ${
                        topic.isLocked ? 'border-ink bg-pastel-yellow' : 'border-ink/40 bg-pastel-mint'
                      }`}
                    >
                      {topic.isLocked ? '🔒 Pro →' : 'Read →'}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        )
      })}
    </ol>
  )
}
