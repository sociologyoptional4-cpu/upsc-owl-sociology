'use client'

import { useState } from 'react'

import type { CACard, PaperCode } from '@/lib/data/types'

import { CaCard } from '../cards/CaCard'
import { EmptyState } from '../ui/Badges'

type Filter = 'all' | PaperCode
const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Sab' },
  { value: 'P1', label: 'Paper 1' },
  { value: 'P2', label: 'Paper 2' },
]

const matches = (item: CACard, filter: Filter) =>
  filter === 'all' || item.paper === filter || item.paper === 'Both'

export function LatestFeed({ items }: { items: CACard[] }) {
  const [filter, setFilter] = useState<Filter>('all')
  const visible = items.filter((item) => matches(item, filter))

  return (
    <div>
      <div role="group" aria-label="Paper filter" className="mb-6 inline-flex rounded-chip border border-rule bg-paper-raised p-1">
        {FILTERS.map((option) => {
          const isActive = option.value === filter
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setFilter(option.value)}
              className={`rounded-chip px-4 py-1.5 text-sm transition-colors duration-300 ${isActive ? 'bg-ink text-paper' : 'text-ink-soft hover:text-ink'}`}
            >
              {option.label}
            </button>
          )
        })}
      </div>
      {visible.length === 0 ? (
        <EmptyState title="Is paper ki koi story nahi" body="Aaj ke issue mein is paper se judi khabar nahi aayi. Doosra filter try karo." />
      ) : (
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, index) => (
            <li key={item.id} className={index === 0 && filter === 'all' ? 'md:col-span-2' : ''}>
              <CaCard item={item} variant={index === 0 && filter === 'all' ? 'lead' : 'default'} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
