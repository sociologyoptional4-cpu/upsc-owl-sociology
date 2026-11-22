const LEGEND_ITEMS = [
  {
    label: 'Thinkers',
    className: 'text-thinker font-bold',
  },
  {
    label: 'Core Concepts',
    className: 'rounded bg-pastel-yellow px-1.5 py-0.5 font-semibold text-ink',
  },
  {
    label: 'Everyday Examples',
    className: 'rounded bg-pastel-mint px-1.5 py-0.5 text-ink',
  },
  {
    label: 'Critiques & Traps',
    className: 'rounded bg-pastel-pink px-1.5 py-0.5 text-ink',
  },
  {
    label: 'Paper 1 ↔ Paper 2 Links',
    className: 'font-bold text-paper-1',
  },
] as const

/** Compact D12 notebook colour-code strip shown at the top of study pages. */
export function ColorLegend({ className = '' }: { className?: string }) {
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
          {LEGEND_ITEMS.map((item) => (
            <li key={item.label}>
              <span className={item.className}>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
