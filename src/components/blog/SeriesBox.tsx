import Link from 'next/link'

import type { BlogSeriesNav } from '@/lib/data/types'

/** Series table of contents + prev/next. Renders nothing for posts outside a series. */
export function SeriesBox({ series, placement }: { series: BlogSeriesNav | null; placement: 'top' | 'bottom' }) {
  if (!series || series.parts.length === 0) return null
  if (placement === 'top') {
    const current = series.parts.find((p) => p.isCurrent)
    return (
      <nav aria-label="Series" className="series-box">
        <p className="series-kicker">Series · <Link href={series.href}>{series.title}</Link></p>
        <ol className="series-parts">
          {series.parts.map((part) => (
            <li key={part.href}>
              {part.isCurrent ? <span aria-current="page" className="series-current">Part {part.order}: {part.title}</span> : <Link href={part.href}>Part {part.order}: {part.title}</Link>}
            </li>
          ))}
        </ol>
        {current ? null : <p className="series-note">Ye post abhi series list mein publish nahi hai.</p>}
      </nav>
    )
  }
  if (!series.prev && !series.next) return null
  return (
    <nav aria-label="Series mein aage-peeche" className="series-pager">
      {series.prev ? <Link href={series.prev.href} className="series-step"><span>← Pichhla part</span><strong>{series.prev.title}</strong></Link> : <span />}
      {series.next ? <Link href={series.next.href} className="series-step is-next"><span>Agla part →</span><strong>{series.next.title}</strong></Link> : <span />}
    </nav>
  )
}
