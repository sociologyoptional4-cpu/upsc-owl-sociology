import type { NoteLang } from '@/lib/notes/notebook-types'

const LEGEND_CLASSES = [
  'text-thinker font-bold',
  'rounded bg-pastel-yellow px-1.5 py-0.5 font-semibold text-ink',
  'rounded bg-pastel-mint px-1.5 py-0.5 text-ink',
  'rounded bg-pastel-pink px-1.5 py-0.5 text-ink',
  'font-bold text-paper-1',
] as const

const LEGEND_LABELS: Record<NoteLang, readonly string[]> = {
  en: ['Thinkers', 'Core Concepts', 'Everyday Examples', 'Critiques & Traps', 'Paper 1 ↔ Paper 2 Links'],
  hi: ['Thinkers', 'Core Concepts', 'Rozmarra Examples', 'Critiques & Galti Traps', 'Paper 1 ↔ Paper 2 Links'],
}

/** Compact D12 notebook colour-code strip shown at the top of study pages. */
export function ColorLegend({ className = '', lang = 'en' }: { className?: string; lang?: NoteLang }) {
  const labels = LEGEND_LABELS[lang]
  return (
    <aside
      aria-label="Notebook Colour Key"
      className={`rounded-card border-2 border-ink bg-paper-raised px-4 py-3 text-xs text-ink shadow-paper ${className}`.trim()}
    >
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="font-display text-[11px] font-extrabold uppercase tracking-wider text-ink-soft">
          Notebook Colour Key
        </span>
        <ul className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          {labels.map((label, index) => (
            <li key={label}>
              <span className={LEGEND_CLASSES[index]}>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
