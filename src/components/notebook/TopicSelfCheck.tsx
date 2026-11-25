'use client'

import { motion } from 'motion/react'
import { useEffect, useMemo, useState } from 'react'

import type { NoteLang } from '@/lib/notes/notebook-types'
import { MasteryRadialGauge } from '../gamification/MasteryRadialGauge'
import { recordStudyXp } from '../gamification/StudyStreakPill'
import { QuillNotesBuddy } from '../mascots/OwlMascot'
import { SpotlightCard } from '../ui/AuroraBackground'

export type TopicSelfCheckProps = {
  slug: string
  title: string
  thinkers: { name: string; href: string }[]
  pyqs: { year: number; question: string; thinkers?: string | null; example?: string | null }[]
  toc: { id: string; text: string; level: 2 | 3 }[]
  lang: NoteLang
}

type RecallCardProps = {
  item: { year: number; question: string; thinkers?: string | null; example?: string | null }
  index: number
  revealed: boolean
  lang: NoteLang
  onToggle: () => void
}

function RecallCard({ item, index, revealed, lang, onToggle }: RecallCardProps) {
  const btnLabel = revealed
    ? lang === 'hi'
      ? 'Thinker + Example chhupao'
      : 'Hide Thinker + Indian Example'
    : lang === 'hi'
      ? 'Thinker + Indian Example dekho'
      : 'Reveal Thinker + Indian Example'

  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.06 }}
    >
      <SpotlightCard glowColor="rgba(6, 182, 212, 0.22)" className="rounded-card border-2 border-ink bg-paper-raised p-4 shadow-paper">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-chip border border-ink bg-pastel-yellow px-2.5 py-0.5 font-display text-xs font-extrabold text-ink">
            UPSC {item.year}
          </span>
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={revealed}
            className="rounded-chip border-2 border-ink bg-paper-sunk px-3 py-1 font-display text-xs font-bold text-ink transition-colors hover:bg-pastel-mint"
          >
            {btnLabel}
          </button>
        </div>
        <p className="mt-2.5 text-sm font-semibold leading-snug text-ink">{item.question}</p>
        {revealed ? (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 space-y-2 border-t border-rule pt-3 text-xs leading-relaxed text-ink"
          >
            {item.thinkers ? (
              <p>
                <strong className="font-bold text-thinker">Thinkers:</strong> {item.thinkers}
              </p>
            ) : null}
            {item.example ? (
              <p className="rounded-card bg-pastel-mint/70 p-2.5">
                <strong className="font-bold">Indian Example:</strong> {item.example}
              </p>
            ) : null}
          </motion.div>
        ) : null}
      </SpotlightCard>
    </motion.li>
  )
}

/** Interactive UPSC Mains self-check & Thinker-to-Indian-Example recall module. */
export function TopicSelfCheck({ slug, title, pyqs, toc, lang }: TopicSelfCheckProps) {
  const sections = useMemo(() => toc.filter((item) => item.level === 2).slice(0, 6), [toc])
  const recallItems = useMemo(
    () => pyqs.filter((q) => Boolean(q.thinkers?.trim() || q.example?.trim())).slice(0, 4),
    [pyqs],
  )
  const storageKey = `upscowl:mastery:${slug}`

  const [checkedIds, setCheckedIds] = useState<string[]>([])
  const [revealedIndices, setRevealedIndices] = useState<number[]>([])

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey)
      if (!raw) return
      const parsed: unknown = JSON.parse(raw)
      if (Array.isArray(parsed)) {
        setCheckedIds(parsed.filter((id): id is string => typeof id === 'string'))
      }
    } catch {
      // Ignore unavailable storage
    }
  }, [storageKey])

  if (sections.length === 0 && recallItems.length === 0) return null

  const toggleSection = (id: string) => {
    setCheckedIds((prev) => {
      const isAdding = !prev.includes(id)
      const next = isAdding ? [...prev, id] : prev.filter((item) => item !== id)
      if (isAdding) recordStudyXp('section_mastered')
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(next))
      } catch {
        // Ignore storage quota errors
      }
      return next
    })
  }

  const toggleRecall = (idx: number) => {
    setRevealedIndices((prev) => {
      const isRevealing = !prev.includes(idx)
      if (isRevealing) recordStudyXp('pyq_recall')
      return isRevealing ? [...prev, idx] : prev.filter((item) => item !== idx)
    })
  }

  const validDoneCount = sections.filter((s) => checkedIds.includes(s.id)).length
  const pct = sections.length > 0 ? Math.round((validDoneCount / sections.length) * 100) : 0

  return (
    <section
      aria-labelledby="topic-self-check-h"
      className="mt-[var(--space-section)] rounded-sheet border-2 border-ink bg-paper-sunk p-5 shadow-paper md:p-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <QuillNotesBuddy state={pct >= 80 ? 'celebrate' : 'idle'} className="h-14 w-14 shrink-0" />
          <div>
            <p className="tag-skew"><span>{lang === 'hi' ? 'Active Recall' : 'Active Recall & Self-Check'}</span></p>
            <h2 id="topic-self-check-h" className="mt-3 font-display text-lg font-extrabold text-ink">
              {lang === 'hi' ? `${title} — Apni Taiyaari Check Karo` : `${title} — Syllabus Mastery & Recall`}
            </h2>
          </div>
        </div>
        {sections.length > 0 ? <MasteryRadialGauge pct={pct} label="Chapter Mastery" /> : null}
      </div>

      {sections.length > 0 ? (
        <div className="mt-4">
          <div className="h-2.5 w-full overflow-hidden rounded-full border border-ink bg-paper-raised">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500"
              initial={false}
              animate={{ width: `${pct}%` }}
              transition={{ type: 'spring', stiffness: 240, damping: 24 }}
            />
          </div>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {sections.map((section) => {
              const checked = checkedIds.includes(section.id)
              return (
                <li key={section.id}>
                  <label className="flex cursor-pointer items-start gap-2.5 rounded-card border border-ink/30 bg-paper-raised p-2.5 text-xs font-semibold text-ink hover:border-ink">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleSection(section.id)}
                      className="mt-0.5 size-4 accent-saffron-deep"
                    />
                    <span className={checked ? 'line-through text-ink-mute' : ''}>{section.text}</span>
                  </label>
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}

      {recallItems.length > 0 ? (
        <div className="mt-6">
          <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-ink-soft">
            {lang === 'hi' ? 'Thinker-to-Example Recall Drills' : 'Thinker-to-Indian-Example Recall Drills'}
          </h3>
          <ul className="mt-3 space-y-3">
            {recallItems.map((item, idx) => (
              <RecallCard
                key={`${item.year}-${idx}`}
                item={item}
                index={idx}
                revealed={revealedIndices.includes(idx)}
                lang={lang}
                onToggle={() => toggleRecall(idx)}
              />
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  )
}
