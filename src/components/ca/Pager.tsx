'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

type Props = { page: number; totalPages: number }

/** Keeps the active filters in the URL while paging. */
export function Pager({ page, totalPages }: Props) {
  const pathname = usePathname()
  const params = useSearchParams()
  if (totalPages <= 1) return null

  const hrefFor = (target: number) => {
    const next = new URLSearchParams(params.toString())
    if (target <= 1) next.delete('page')
    else next.set('page', String(target))
    const query = next.toString()
    return query ? `${pathname}?${query}` : pathname
  }

  const linkClass = 'rounded-chip border border-rule px-4 py-2 text-sm transition-colors hover:border-ink/40 hover:bg-paper-raised'
  return (
    <nav aria-label="Pagination" className="mt-10 flex items-center justify-between gap-4">
      {page > 1 ? <Link href={hrefFor(page - 1)} className={linkClass}>← Naye</Link> : <span />}
      <span className="text-sm text-ink-mute">Page {page} / {totalPages}</span>
      {page < totalPages ? <Link href={hrefFor(page + 1)} className={linkClass}>Purane →</Link> : <span />}
    </nav>
  )
}
