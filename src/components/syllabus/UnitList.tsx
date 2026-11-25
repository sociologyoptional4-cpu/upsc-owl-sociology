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
    <ol className="divide-y divide-rule border-y border-rule">
      {units.map((unit, index) => {
        const hasUnitNotes = unit.topics.some((topic) => topic.hasNotes)
        return (
          <Reveal as="li" key={unit.href} index={index % 5} className="grid gap-4 py-6 md:grid-cols-[4rem_1fr_1.3fr]">
            <span className={`font-display text-4xl font-extrabold ${accent}`}>{String(unit.number).padStart(2, '0')}</span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-bold leading-snug">
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
                  className="mt-2 inline-flex items-center gap-1 rounded-chip border border-ink bg-pastel-yellow px-2.5 py-0.5 text-xs font-bold text-ink transition-colors hover:bg-pastel-mint"
                >
                  Notes &amp; Mind Maps →
                </Link>
              ) : null}
            </div>
            <ul className="space-y-2.5">
              {unit.topics.length === 0 && <li className="text-sm text-ink-mute">Topics jald aa rahe hain</li>}
              {unit.topics.map((topic) => (
                <li key={topic.href} className="flex flex-wrap items-center justify-between gap-2">
                  <Link href={topic.href} className="group flex flex-wrap items-center gap-2 text-sm text-ink-soft hover:text-ink">
                    <span className="link-draw">{topic.title}</span>
                    {topic.isLocked ? (
                      <span className="rounded-chip border border-ink/50 bg-pastel-yellow px-2 py-0.5 text-[10px] font-extrabold text-ink">
                        🔒 Pro
                      </span>
                    ) : null}
                    {topic.hasNotes ? (
                      <span className="rounded-chip border border-ink/40 bg-pastel-mint px-2 py-0.5 text-[11px] font-bold text-ink">
                        Notes
                      </span>
                    ) : null}
                    {(topic.pyqCount ?? 0) > 0 ? (
                      <span className="rounded-chip border border-rule bg-paper-sunk px-2 py-0.5 text-[11px] font-semibold text-ink-mute">
                        {topic.pyqCount} PYQs
                      </span>
                    ) : null}
                  </Link>
                  <Coverage count={topic.caCount} />
                </li>
              ))}
            </ul>
          </Reveal>
        )
      })}
    </ol>
  )
}
