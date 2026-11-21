import Link from 'next/link'

import { safeHref } from '@/lib/href'
import type { DigestView as DigestData } from '@/lib/data/types'

import { CaCard } from '../cards/CaCard'
import { Reveal } from '../motion/Reveal'
import { EmptyState } from '../ui/Badges'
import { formatDay } from '../ui/format'
import { PageHeader } from '../ui/PageHeader'
import { paperTone } from '../ui/paper'

export function DigestView({ data }: { data: DigestData }) {
  const label = data.type === 'weekly' ? 'Weekly digest' : 'Monthly compilation'
  const pdf = safeHref(data.pdfUrl)
  const total = data.groups.reduce((sum, g) => sum + g.items.length, 0)

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <PageHeader kicker={label} title={data.title} description={`${formatDay(data.range.from)} – ${formatDay(data.range.to)} · ${total} stories`}>
        {data.intro && <p className="mt-6 max-w-[62ch] rounded-card bg-pastel-lavender p-5 text-ink-soft">{data.intro}</p>}
        <div className="mt-6 flex flex-wrap gap-3">
          {pdf && <a href={pdf} target="_blank" rel="noopener noreferrer" className="btn-cta rounded-md px-5 py-2.5 text-sm">PDF download ↓</a>}
          {data.prev && <Link href={`/digest/${data.type}/${data.prev}`} className="rounded-md border-2 border-ink px-5 py-2 text-sm font-semibold">← Pichhla</Link>}
          {data.next && <Link href={`/digest/${data.type}/${data.next}`} className="rounded-md border-2 border-ink px-5 py-2 text-sm font-semibold">Agla →</Link>}
        </div>
      </PageHeader>

      {data.groups.length === 0 ? (
        <div className="mt-12"><EmptyState title="Is period mein koi story nahi" body="Pichhla digest dekho." /></div>
      ) : (
        data.groups.map((group) => (
          <section key={group.topic.slug} aria-labelledby={`g-${group.topic.slug}`} className="mt-[var(--space-section)]">
            <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${paperTone(group.topic.paper).text}`}>{paperTone(group.topic.paper).label}</p>
            <h2 id={`g-${group.topic.slug}`} className="mt-2 mb-8 text-[length:var(--text-h3)] font-extrabold">
              <Link href={group.topic.href} className="link-draw">{group.topic.title}</Link>
            </h2>
            <ul className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item, index) => (
                <Reveal as="li" key={item.id} index={index % 3}><CaCard item={item} /></Reveal>
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  )
}
