import Image from 'next/image'

import type { UnitInfographic } from '@/lib/notes/notebook-types'

function InfographicCard({ item }: { item: UnitInfographic }) {
  return (
    <figure className="flex min-w-0 flex-col overflow-hidden rounded-card border-2 border-ink bg-paper-raised text-ink shadow-paper">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink bg-paper-raised px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          {item.badge ? (
            <span className="shrink-0 rounded-chip border border-ink bg-pastel-yellow px-2 py-0.5 font-display text-[11px] font-extrabold text-ink">
              {item.badge}
            </span>
          ) : null}
          <span className="min-w-0 font-display text-sm font-extrabold leading-snug text-ink">
            {item.title}
          </span>
        </div>
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-chip border border-rule bg-paper-sunk px-2.5 py-1 text-xs font-semibold text-saffron-deep transition-colors hover:border-ink hover:text-ink"
        >
          Open full size <span aria-hidden>↗</span>
        </a>
      </div>

      <div className="flex flex-1 items-center bg-paper-sunk">
        <Image
          src={item.url}
          alt={item.title}
          width={item.width || 1200}
          height={item.height || 1500}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-auto w-full object-contain bg-paper-sunk"
        />
      </div>

      {item.caption ? (
        <figcaption className="border-t border-rule px-4 py-3 text-xs leading-relaxed text-ink-soft">
          {item.caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

/** Responsive 2-column D12 gallery for visual sociological infographics. */
export function InfographicGallery({
  items,
  className = '',
}: {
  items: UnitInfographic[]
  className?: string
}) {
  if (items.length === 0) return null

  return (
    <div className={`grid gap-6 md:grid-cols-2 ${className}`.trim()}>
      {items.map((item, index) => (
        <InfographicCard key={`${item.url}-${index}`} item={item} />
      ))}
    </div>
  )
}
