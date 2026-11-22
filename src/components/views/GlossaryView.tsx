import Link from 'next/link'

import { EmptyState } from '@/components/ui/Badges'
import { JsonLd } from '@/components/ui/Breadcrumbs'
import { PageHeader } from '@/components/ui/PageHeader'
import type { GlossaryLetter } from '@/lib/data/glossary-build'
import { getServerSideURL } from '@/lib/url'

function glossaryJsonLd(letters: GlossaryLetter[]) {
  const base = getServerSideURL()
  return {
    '@context': 'https://schema.org', '@type': 'DefinedTermSet', name: 'UPSC Sociology Glossary', url: `${base}/glossary`,
    hasDefinedTerm: letters.flatMap((l) => l.terms).slice(0, 500).map((t) => ({ '@type': 'DefinedTerm', name: t.term, description: t.meaning, url: `${base}/glossary#${t.slug}` })),
  }
}

/** A-Z glossary built from key-term blocks in notes and blog posts. */
export function GlossaryView({ letters }: { letters: GlossaryLetter[] }) {
  const total = letters.reduce((sum, l) => sum + l.terms.length, 0)
  return (
    <div className="mx-auto max-w-5xl px-5 py-10 md:px-8">
      <PageHeader kicker="Glossary · A-Z" title="Sociology ke zaroori shabd" highlight="zaroori shabd" description={`${total} terms, notes aur blog ke key-term boxes se. Har term ke saath wo page jahan ye samjhaya gaya hai.`} />
      {letters.length === 0 ? <EmptyState title="Abhi koi term nahi" body="Notes ya blog mein Key term block jodo, wo yahan apne aap aa jayega." /> : (
        <>
          <JsonLd data={glossaryJsonLd(letters)} />
          <nav aria-label="Akshar" className="glossary-letters">
            {letters.map((l) => <a key={l.letter} href={`#letter-${l.letter}`}>{l.letter}</a>)}
          </nav>
          {letters.map((l) => (
            <section key={l.letter} id={`letter-${l.letter}`} aria-labelledby={`h-${l.letter}`} className="glossary-section">
              <h2 id={`h-${l.letter}`} className="glossary-letter">{l.letter}</h2>
              <dl className="glossary-list">
                {l.terms.map((t) => (
                  <div key={t.slug} id={t.slug} className="glossary-term">
                    <dt>{t.term}{t.thinker ? <span className="glossary-thinker"> · {t.thinker}</span> : null}</dt>
                    <dd>
                      <p>{t.meaning}</p>
                      <p className="glossary-sources">Padho: {t.sources.slice(0, 4).map((s, i) => <span key={s.href}>{i ? ', ' : ''}<Link href={s.href}>{s.title}</Link></span>)}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </>
      )}
    </div>
  )
}
