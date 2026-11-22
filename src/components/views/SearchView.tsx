import Link from 'next/link'

import { EmptyState } from '@/components/ui/Badges'
import { PageHeader } from '@/components/ui/PageHeader'
import type { SearchResults } from '@/lib/data/search'

/** /search: plain GET form (works without JS) + grouped results. */
export function SearchView({ results }: { results: SearchResults }) {
  return (
    <div className="mx-auto max-w-4xl px-5 py-10 md:px-8">
      <PageHeader kicker="Search" title="Site mein dhoondho" highlight="dhoondho" description="Notes, blog, current affairs, thinkers aur glossary, sab ek jagah." />
      <form role="search" action="/search" method="get" className="search-form">
        <label htmlFor="site-q" className="sr-only">Kya dhoondhna hai</label>
        <input id="site-q" name="q" type="search" defaultValue={results.query} placeholder="Jaise: anomie, caste, Weber" minLength={2} maxLength={80} autoFocus />
        <button type="submit">Search</button>
      </form>
      {results.query === '' ? null : results.total === 0 ? (
        <EmptyState title={`"${results.query}" ke liye kuch nahi mila`} body="Chhota ya alag shabd try karo, jaise thinker ka naam ya concept." />
      ) : (
        <>
          <p className="text-sm text-ink-soft" aria-live="polite">{results.total} results &ldquo;{results.query}&rdquo; ke liye</p>
          {results.groups.map((group) => (
            <section key={group.label} className="search-group" aria-label={group.label}>
              <h2>{group.label}</h2>
              <ul className="search-results">
                {group.hits.map((hit) => (
                  <li key={hit.href}><Link href={hit.href}><strong>{hit.title}</strong>{hit.snippet ? <span>{hit.snippet}</span> : null}</Link></li>
                ))}
              </ul>
            </section>
          ))}
        </>
      )}
    </div>
  )
}
