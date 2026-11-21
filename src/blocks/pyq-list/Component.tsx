import type { PyqListBlock as PyqListData } from '@/payload-types'

type Props = { block: PyqListData }

/** UPSC PYQs as stamped cards, newest first, with a year-frequency strip. */
export function PyqListComponent({ block }: Props) {
  const items = [...block.items].sort((a, b) => b.year - a.year)
  const years = [...new Set(items.map((i) => i.year))]
  const span = years.length > 1 ? `${years[years.length - 1]}–${years[0]}` : String(years[0] ?? '')

  return (
    <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
      <div className="rounded-sheet border-2 border-ink bg-paper-raised p-6 shadow-paper md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="tag-skew"><span>PYQ</span></p>
            <h2 className="mt-4 text-[length:var(--text-h3)] font-extrabold">{block.heading || 'Previous Year Questions'}</h2>
          </div>
          <p className="text-sm font-semibold text-ink-mute">
            {items.length} {items.length === 1 ? 'sawaal' : 'sawaal'} · {span}
          </p>
        </div>
        <ul aria-label="Kis saal kitne sawaal" className="mt-5 flex flex-wrap gap-1.5">
          {years.map((year) => {
            const count = items.filter((i) => i.year === year).length
            return (
              <li key={year} className="rounded-chip bg-pyq/10 px-2.5 py-0.5 text-xs font-semibold text-pyq">
                {year}{count > 1 ? ` ×${count}` : ''}
              </li>
            )
          })}
        </ul>
        <ol className="mt-6 space-y-3">
          {items.map((item, index) => (
            <li key={item.id ?? `${item.year}-${index}`} className="grid grid-cols-[auto_1fr] items-start gap-4 rounded-card border border-rule p-4 transition-colors hover:border-ink/40">
              <span className="-skew-x-12 bg-pyq px-2.5 py-1 font-display text-sm font-extrabold text-white">
                <span className="inline-block skew-x-12">{item.year}</span>
              </span>
              <p className="text-[0.95rem] leading-relaxed">
                {item.question}
                {item.marks ? <span className="ml-2 text-xs font-semibold text-ink-mute">({item.marks} marks)</span> : null}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
