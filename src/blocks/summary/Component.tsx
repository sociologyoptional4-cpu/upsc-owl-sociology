import type { SummaryBlock as SummaryBlockData } from '@/payload-types'

type Props = { block: SummaryBlockData }

export function SummaryBlockComponent({ block }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-6 md:px-8">
      <div className="max-w-[var(--measure)] rounded-card border border-rule bg-paper-raised p-6 shadow-paper md:p-8">
        <h2 className="mb-4 text-[length:var(--text-h3)]">{block.heading || 'Khabar kya hai'}</h2>
        <ol className="space-y-3">
          {block.points.map((point, index) => (
            <li key={point.id ?? index} className="grid grid-cols-[2rem_1fr] gap-2">
              <span aria-hidden className="font-display text-lg text-saffron-deep">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{point.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
