import type { Metadata } from 'next'

import { SearchView } from '@/components/views/SearchView'
import { siteSearch } from '@/lib/data/search'

export const metadata: Metadata = { title: 'Search — UPSC OWL Sociology', robots: { index: false, follow: true }, alternates: { canonical: '/search' } }

type Props = { searchParams: Promise<{ q?: string | string[] }> }

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams
  return <SearchView results={await siteSearch(Array.isArray(q) ? q[0] ?? '' : q ?? '')} />
}
