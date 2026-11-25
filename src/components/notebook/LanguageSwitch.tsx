'use client'

import { motion } from 'motion/react'

import { recordStudyXp } from '../gamification/StudyStreakPill'
import { useNoteLanguage } from './NoteLanguageContext'

type LanguageSwitchProps = {
  variant?: 'banner' | 'compact'
  className?: string
}

function EnglishOnlyPill({ variant, className }: { variant: 'banner' | 'compact'; className: string }) {
  const pad = variant === 'compact' ? 'px-2.5 py-1' : 'px-3 py-1'
  const pill = (
    <span
      className={`inline-flex items-center gap-1.5 rounded-chip border border-ink/30 bg-paper-raised font-display text-xs font-bold text-ink-soft ${pad} ${
        variant === 'compact' ? className : ''
      }`.trim()}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-paper-1" />
      English Notes
    </span>
  )
  return variant === 'banner' ? <div className={className}>{pill}</div> : pill
}

function CompactSwitch({ className }: { className: string }) {
  const { lang, setLang } = useNoteLanguage()
  const isEn = lang === 'en'
  const baseBtn = 'whitespace-nowrap rounded-chip px-2.5 py-1 font-display text-xs transition-colors'

  const switchLang = (next: 'en' | 'hi') => {
    if (lang !== next) recordStudyXp('lang_switch')
    setLang(next)
  }

  return (
    <div
      role="group"
      aria-label="Choose notes language"
      className={`relative inline-flex shrink-0 items-center rounded-chip border-2 border-ink bg-paper-raised p-0.5 text-ink shadow-paper ${className}`.trim()}
    >
      <button
        type="button"
        aria-pressed={isEn}
        onClick={() => switchLang('en')}
        className={`${baseBtn} relative ${isEn ? 'font-extrabold text-paper' : 'font-semibold text-ink-soft hover:text-ink'}`}
      >
        {isEn ? (
          <motion.span
            layoutId="notes-lang-compact"
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
            className="absolute inset-0 rounded-chip bg-ink"
          />
        ) : null}
        <span className="relative z-10">EN · English</span>
      </button>
      <button
        type="button"
        aria-pressed={!isEn}
        onClick={() => switchLang('hi')}
        className={`${baseBtn} relative ${!isEn ? 'font-extrabold text-ink' : 'font-semibold text-ink-soft hover:text-ink'}`}
      >
        {!isEn ? (
          <motion.span
            layoutId="notes-lang-compact"
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
            className="absolute inset-0 rounded-chip bg-saffron"
          />
        ) : null}
        <span className="relative z-10">HI · Hinglish</span>
      </button>
    </div>
  )
}

function BannerSwitch({ className }: { className: string }) {
  const { lang, setLang } = useNoteLanguage()
  const isEn = lang === 'en'
  const helper = isEn
    ? 'Reading in English (Default) — switch to Hinglish anytime for mixed Hindi+English explanations.'
    : 'Hinglish mode active — click English Notes anytime for pure English UPSC prose.'
  const btnBase =
    'inline-flex min-h-10 items-center gap-2 rounded-chip px-4 py-2 font-display text-xs transition-colors sm:text-sm'
  const inactiveCls = 'bg-paper-raised text-ink border-2 border-ink/40 font-semibold hover:border-ink'

  const switchLang = (next: 'en' | 'hi') => {
    if (lang !== next) recordStudyXp('lang_switch')
    setLang(next)
  }

  return (
    <div
      className={`flex flex-col gap-3 rounded-card border-2 border-ink bg-pastel-yellow/45 px-4 py-3 text-ink shadow-paper sm:flex-row sm:items-center sm:justify-between ${className}`.trim()}
    >
      <div className="min-w-0">
        <p className="font-display text-xs font-extrabold uppercase tracking-wider text-ink">
          Notes Language · Choose Medium
        </p>
        <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">{helper}</p>
      </div>
      <div role="group" aria-label="Choose notes language" className="relative flex shrink-0 flex-wrap items-center gap-2">
        <button
          type="button"
          aria-pressed={isEn}
          onClick={() => switchLang('en')}
          className={`${btnBase} relative ${isEn ? 'border-2 border-ink font-extrabold text-paper shadow-paper' : inactiveCls}`}
        >
          {isEn ? (
            <motion.span
              layoutId="notes-lang-banner"
              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              className="absolute inset-0 rounded-chip bg-ink"
            />
          ) : null}
          <span className="relative z-10">English Notes</span>
          <span
            className={`relative z-10 rounded-chip px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
              isEn ? 'border border-paper/40 bg-paper/15 text-paper' : 'border border-ink/25 bg-paper-sunk text-ink-soft'
            }`}
          >
            Default
          </span>
        </button>
        <button
          type="button"
          aria-pressed={!isEn}
          onClick={() => switchLang('hi')}
          className={`${btnBase} relative ${!isEn ? 'border-2 border-ink font-extrabold text-ink shadow-paper' : inactiveCls}`}
        >
          {!isEn ? (
            <motion.span
              layoutId="notes-lang-banner"
              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              className="absolute inset-0 rounded-chip bg-saffron"
            />
          ) : null}
          <span className="relative z-10">Hinglish Notes</span>
        </button>
      </div>
    </div>
  )
}

/** D12 medium toggle switching between default English Notes and optional Hinglish Notes. */
export function LanguageSwitch({ variant = 'banner', className = '' }: LanguageSwitchProps) {
  const { hasHinglish } = useNoteLanguage()

  if (!hasHinglish) {
    return <EnglishOnlyPill variant={variant} className={className} />
  }
  if (variant === 'compact') {
    return <CompactSwitch className={className} />
  }
  return <BannerSwitch className={className} />
}
