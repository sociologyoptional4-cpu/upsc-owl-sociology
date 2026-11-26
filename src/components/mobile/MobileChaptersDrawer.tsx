'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useMemo, useState } from 'react'

import type { PaperCode, SyllabusPaper } from '@/lib/data/types'

type MobileChaptersDrawerProps = {
  open: boolean
  onClose: () => void
  papers: SyllabusPaper[]
}

export function MobileChaptersDrawer({ open, onClose, papers }: MobileChaptersDrawerProps) {
  const [activePaper, setActivePaper] = useState<PaperCode>('P1')
  const [query, setQuery] = useState('')
  const [expandedUnit, setExpandedUnit] = useState<string | null>('sociology-the-discipline')

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, open])

  const selectedPaper = papers.find((p) => p.code === activePaper) ?? papers[0]
  const normalizedQuery = query.trim().toLowerCase()

  const filteredUnits = useMemo(() => {
    if (!selectedPaper) return []
    if (!normalizedQuery) return selectedPaper.units
    return selectedPaper.units
      .map((unit) => {
        const unitMatches = unit.title.toLowerCase().includes(normalizedQuery)
        const matchingTopics = unit.topics.filter((t) => t.title.toLowerCase().includes(normalizedQuery))
        if (unitMatches) return unit
        if (matchingTopics.length > 0) return { ...unit, topics: matchingTopics }
        return null
      })
      .filter((u): u is NonNullable<typeof u> => u !== null)
  }, [normalizedQuery, selectedPaper])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="All Syllabus Chapters"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-end bg-black/60 backdrop-blur-xs md:hidden"
        >
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 360, damping: 34 }}
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[86dvh] w-full flex-col rounded-t-[24px] border-t-2 border-ink bg-paper shadow-float"
          >
            <div className="shrink-0 border-b border-rule px-4 pb-3 pt-2.5">
              <div aria-hidden className="mx-auto mb-2.5 h-1.5 w-12 rounded-full bg-ink/25" />
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="font-display text-base font-extrabold text-ink">Browse All Chapters</p>
                  <p className="text-[11px] font-medium text-ink-mute">
                    Paper 1 Units 1–5 Free · Units 6+ &amp; Paper 2 Pro (₹399/yr)
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close chapters drawer"
                  className="grid size-9 place-items-center rounded-full border border-ink bg-paper-raised text-sm font-extrabold text-ink"
                >
                  ✕
                </button>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-1.5 rounded-card border border-ink bg-paper-sunk p-1">
                {papers.map((p) => {
                  const active = p.code === activePaper
                  return (
                    <button
                      key={p.code}
                      type="button"
                      onClick={() => {
                        setActivePaper(p.code)
                        setExpandedUnit(p.units[0]?.slug ?? null)
                      }}
                      className={`relative rounded-md px-3 py-1.5 text-xs font-extrabold transition-colors ${
                        active ? 'text-ink' : 'text-ink-soft'
                      }`}
                    >
                      {active ? (
                        <motion.span
                          layoutId="drawer-paper-pill"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                          className="absolute inset-0 rounded-md border border-ink bg-saffron"
                        />
                      ) : null}
                      <span className="relative z-10">
                        {p.code === 'P1' ? 'Paper 1' : 'Paper 2'} ({p.units.length} Units)
                      </span>
                    </button>
                  )
                })}
              </div>

              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search chapter, thinker, unit..."
                className="mt-2.5 w-full rounded-md border border-ink bg-paper-raised px-3 py-2 text-sm text-ink placeholder:text-ink-mute"
              />
            </div>

            <div className="flex-1 space-y-2.5 overflow-y-auto px-4 py-3 pb-8">
              {filteredUnits.length === 0 ? (
                <p className="py-8 text-center text-sm text-ink-mute">Koi chapter match nahi hua. Doosra keyword try karein.</p>
              ) : (
                filteredUnits.map((unit) => {
                  const isOpen = Boolean(normalizedQuery) || expandedUnit === unit.slug
                  return (
                    <div key={unit.slug} className="rounded-card border-2 border-ink bg-paper-raised shadow-paper">
                      <button
                        type="button"
                        onClick={() => setExpandedUnit((cur) => (cur === unit.slug ? null : unit.slug))}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-3 px-3.5 py-3 text-left"
                      >
                        <div className="flex min-w-0 items-center gap-2.5">
                          <span className="grid size-8 shrink-0 place-items-center rounded-md border border-ink bg-pastel-yellow font-display text-xs font-extrabold text-ink">
                            {String(unit.number).padStart(2, '0')}
                          </span>
                          <div className="min-w-0">
                            <p className="truncate font-display text-sm font-bold text-ink">{unit.title}</p>
                            <p className="text-[11px] text-ink-mute">{unit.topics.length} Chapters</p>
                          </div>
                        </div>
                        <div className="flex shrink-0 items-center gap-1.5">
                          <span
                            className={`rounded-chip border border-ink/50 px-2 py-0.5 text-[10px] font-extrabold text-ink ${
                              unit.isLocked ? 'bg-pastel-yellow' : 'bg-pastel-mint'
                            }`}
                          >
                            {unit.isLocked ? '🔒 Pro' : 'Free'}
                          </span>
                          <span className="text-xs font-bold text-ink-soft">{isOpen ? '▲' : '▼'}</span>
                        </div>
                      </button>

                      {isOpen ? (
                        <div className="border-t border-rule px-3 pb-3 pt-2">
                          <Link
                            href={unit.href}
                            onClick={onClose}
                            className="mb-2 inline-flex items-center gap-1 rounded-chip border border-ink bg-pastel-lavender px-2.5 py-1 text-[11px] font-bold text-ink"
                          >
                            Unit Overview &amp; Mind Map →
                          </Link>
                          <ul className="space-y-1.5">
                            {unit.topics.map((topic, idx) => (
                              <li key={topic.href}>
                                <Link
                                  href={topic.href}
                                  onClick={onClose}
                                  className="flex min-h-[46px] items-center justify-between gap-2 rounded-md border border-ink/25 bg-paper px-3 py-2 text-xs font-semibold text-ink transition-transform active:scale-[0.99]"
                                >
                                  <span className="min-w-0 leading-snug">
                                    <span className="mr-1.5 font-mono text-[11px] text-ink-mute">
                                      {unit.number}.{idx + 1}
                                    </span>
                                    {topic.title}
                                  </span>
                                  <span
                                    className={`shrink-0 rounded-chip border px-2 py-0.5 text-[10px] font-extrabold text-ink ${
                                      topic.isLocked ? 'border-ink bg-pastel-yellow' : 'border-ink/40 bg-pastel-mint'
                                    }`}
                                  >
                                    {topic.isLocked ? '🔒 Pro →' : 'Read →'}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  )
                })
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
