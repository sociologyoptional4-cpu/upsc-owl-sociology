'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'sociology4upsc_xp_v1'
const XP_EVENT = 'sociology-xp-updated'

export type StudyXpKind = 'chapter_read' | 'section_mastered' | 'pyq_recall' | 'lang_switch'

type StudyXpState = {
  xp: number
  streak: number
  lastActiveDay: string | null
  chaptersRead: number
  pyqsReviewed: number
}

const DEFAULT_XP_STATE: StudyXpState = {
  xp: 0,
  streak: 1,
  lastActiveDay: null,
  chaptersRead: 0,
  pyqsReviewed: 0,
}

function todayUtc(): string {
  return new Date().toISOString().slice(0, 10)
}

function yesterdayUtc(): string {
  const d = new Date()
  d.setUTCDate(d.getUTCDate() - 1)
  return d.toISOString().slice(0, 10)
}

function readXpState(): StudyXpState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_XP_STATE
    const parsed = JSON.parse(raw) as Partial<StudyXpState>
    return {
      xp: typeof parsed.xp === 'number' ? parsed.xp : 0,
      streak: typeof parsed.streak === 'number' && parsed.streak > 0 ? parsed.streak : 1,
      lastActiveDay: typeof parsed.lastActiveDay === 'string' ? parsed.lastActiveDay : null,
      chaptersRead: typeof parsed.chaptersRead === 'number' ? parsed.chaptersRead : 0,
      pyqsReviewed: typeof parsed.pyqsReviewed === 'number' ? parsed.pyqsReviewed : 0,
    }
  } catch {
    return DEFAULT_XP_STATE
  }
}

const XP_REWARDS: Record<StudyXpKind, number> = {
  chapter_read: 25,
  section_mastered: 15,
  pyq_recall: 20,
  lang_switch: 5,
}

/** Records persistent daily UPSC study streak & XP in localStorage. */
export function recordStudyXp(kind: StudyXpKind): void {
  if (typeof window === 'undefined') return
  const current = readXpState()
  const today = todayUtc()
  const nextStreak =
    current.lastActiveDay === today
      ? current.streak
      : current.lastActiveDay === yesterdayUtc()
        ? current.streak + 1
        : 1

  const next: StudyXpState = {
    xp: current.xp + XP_REWARDS[kind],
    streak: nextStreak,
    lastActiveDay: today,
    chaptersRead: current.chaptersRead + (kind === 'chapter_read' ? 1 : 0),
    pyqsReviewed: current.pyqsReviewed + (kind === 'pyq_recall' ? 1 : 0),
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    window.dispatchEvent(new CustomEvent(XP_EVENT))
  } catch {
    // Ignore storage unavailability
  }
}

/** Compact animated study streak & XP pill for the top navbar. */
export function StudyStreakPill() {
  const [state, setState] = useState<StudyXpState>(DEFAULT_XP_STATE)

  useEffect(() => {
    setState(readXpState())
    const sync = () => setState(readXpState())
    window.addEventListener(XP_EVENT, sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener(XP_EVENT, sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  return (
    <motion.div
      key={state.xp}
      initial={{ scale: 0.92 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 360, damping: 22 }}
      title={`${state.chaptersRead} chapters read · ${state.pyqsReviewed} PYQs recalled`}
      className="hidden items-center gap-1.5 rounded-chip border border-ink/25 bg-pastel-mint px-2.5 py-1 text-xs font-extrabold text-ink shadow-paper sm:inline-flex"
    >
      <span aria-hidden>🔥</span>
      <span>{state.streak}d</span>
      <span aria-hidden className="opacity-40">·</span>
      <span className="text-saffron-deep">{state.xp} XP</span>
    </motion.div>
  )
}
