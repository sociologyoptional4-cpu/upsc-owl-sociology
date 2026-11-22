'use client'

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

  return (
    <div
      role="group"
      aria-label="Choose notes language"
      className={`inline-flex shrink-0 items-center rounded-chip border-2 border-ink bg-paper-raised p-0.5 text-ink shadow-paper ${className}`.trim()}
    >
      <button
        type="button"
        aria-pressed={isEn}
        onClick={() => setLang('en')}
        className={`${baseBtn} ${isEn ? 'bg-ink font-extrabold text-paper' : 'font-semibold text-ink-soft hover:text-ink'}`}
      >
        EN · English
      </button>
      <button
        type="button"
        aria-pressed={!isEn}
        onClick={() => setLang('hi')}
        className={`${baseBtn} ${!isEn ? 'bg-saffron font-extrabold text-ink' : 'font-semibold text-ink-soft hover:text-ink'}`}
      >
        HI · Hinglish
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
      <div role="group" aria-label="Choose notes language" className="flex shrink-0 flex-wrap items-center gap-2">
        <button
          type="button"
          aria-pressed={isEn}
          onClick={() => setLang('en')}
          className={`${btnBase} ${isEn ? 'bg-ink text-paper border-2 border-ink font-extrabold shadow-paper' : inactiveCls}`}
        >
          <span>English Notes</span>
          <span
            className={`rounded-chip px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
              isEn ? 'border border-paper/40 bg-paper/15 text-paper' : 'border border-ink/25 bg-paper-sunk text-ink-soft'
            }`}
          >
            Default
          </span>
        </button>
        <button
          type="button"
          aria-pressed={!isEn}
          onClick={() => setLang('hi')}
          className={`${btnBase} ${!isEn ? 'bg-saffron text-ink border-2 border-ink font-extrabold shadow-paper' : inactiveCls}`}
        >
          Hinglish Notes
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
