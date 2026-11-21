'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

const PAPERS = [
  { value: '', label: 'Sab' },
  { value: 'P1', label: 'Paper 1' },
  { value: 'P2', label: 'Paper 2' },
] as const

/** Filters live in the URL, so every filtered view is shareable. */
export function CaFilters() {
  const pathname = usePathname()
  const params = useSearchParams()
  const active = params.get('paper') ?? ''

  const hrefFor = (paper: string) => {
    const next = new URLSearchParams(params.toString())
    next.delete('page')
    if (paper) next.set('paper', paper)
    else next.delete('paper')
    const query = next.toString()
    return query ? `${pathname}?${query}` : pathname
  }

  return (
    <nav aria-label="Paper filter" className="inline-flex rounded-chip border border-rule bg-paper-raised p-1">
      {PAPERS.map((paper) => {
        const isActive = paper.value === active
        return (
          <Link
            key={paper.value || 'all'}
            href={hrefFor(paper.value)}
            aria-current={isActive ? 'page' : undefined}
            scroll={false}
            className={`rounded-chip px-4 py-1.5 text-sm transition-colors duration-300 ${isActive ? 'bg-ink text-paper' : 'text-ink-soft hover:text-ink'}`}
          >
            {paper.label}
          </Link>
        )
      })}
    </nav>
  )
}
