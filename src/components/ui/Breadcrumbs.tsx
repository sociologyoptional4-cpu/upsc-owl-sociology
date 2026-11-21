import Link from 'next/link'

import { breadcrumbJsonLd } from '@/lib/seo/jsonld'

type Crumb = { label: string; href: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (items.length === 0) return null
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-ink-mute">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="text-ink-soft">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-ink">{item.label}</Link>
              )}
              {!isLast && <span aria-hidden>›</span>}
            </li>
          )
        })}
      </ol>
      <JsonLd data={breadcrumbJsonLd(items)} />
    </nav>
  )
}

/** JSON-LD from our own typed data; `<` is escaped so content can't close the script tag. */
export function JsonLd({ data }: { data: unknown }) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}
