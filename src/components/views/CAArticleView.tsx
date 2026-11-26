import Link from 'next/link'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { safeHref } from '@/lib/href'
import type { CAArticle } from '@/lib/data/types'
import { articleJsonLd } from '@/lib/seo/jsonld'

import { Cover } from '../cards/CaCard'
import { ContentGuard } from '../ContentGuard'
import { AiBadge } from '../ui/Badges'
import { Breadcrumbs, JsonLd } from '../ui/Breadcrumbs'
import { ChipRow } from '../ui/Chips'
import { formatDay } from '../ui/format'
import { paperTone } from '../ui/paper'

export function CAArticleView({ data }: { data: CAArticle }) {
  const tone = paperTone(data.paper)
  const crumbs = [
    { label: 'Current Affairs', href: '/current-affairs' },
    { label: formatDay(data.date), href: `/current-affairs/${data.date}` },
    { label: data.headline, href: data.href },
  ]

  return (
    <ContentGuard canonicalPath={data.href}>
    <article className="mx-auto max-w-7xl px-5 pt-10 md:px-8 md:pt-16">
      <JsonLd data={articleJsonLd(data)} />
      <Breadcrumbs items={crumbs} />

      <header className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="tag-skew"><span>Current Affairs</span></p>
          <h1 className="mt-6 text-[length:var(--text-h2)] font-extrabold">{data.headline}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-ink-mute">
            <time dateTime={data.date} className="font-medium">{formatDay(data.date)}</time>
            {data.paper && <span className="rounded-chip bg-red-600 px-2.5 py-0.5 text-xs font-semibold text-white">{tone.label}</span>}
            {data.isAiGenerated && <AiBadge />}
          </div>
          {data.summary && <p className="mt-5 max-w-[60ch] text-[length:var(--text-lg)] text-ink-soft">{data.summary}</p>}
          <SourceList sources={data.sources} />
        </div>
        <div className="group hidden lg:block" aria-hidden>
          <Cover item={data} isLead />
        </div>
      </header>

      <div className="mt-12 grid gap-12 border-t border-rule pt-10 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <div className="blocks-flush min-w-0">
          <RenderBlocks blocks={data.layout} />
        </div>
        <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          {(data.topics.length > 0 || data.thinkers.length > 0) && (
            <div className="rounded-card border-2 border-ink bg-paper-raised p-5 shadow-paper">
              <p className="mb-3 text-sm font-bold">Syllabus link</p>
              <ChipRow topics={data.topics} thinkers={data.thinkers} />
            </div>
          )}
          <p className="rounded-card bg-pastel-yellow p-4 text-xs text-ink-soft">
            Ye note original khabar ka summary hai. Poori khabar ke liye source link padho.
          </p>
        </aside>
      </div>

      <nav aria-label="More stories" className="mt-16 grid gap-4 border-t border-rule pt-8 sm:grid-cols-2">
        {data.prev ? <StoryLink label="← Pichhli story" story={data.prev} /> : <span />}
        {data.next ? <StoryLink label="Agli story →" story={data.next} align="right" /> : <span />}
      </nav>
    </article>
    </ContentGuard>
  )
}

function SourceList({ sources }: { sources: CAArticle['sources'] }) {
  const safe = sources.map((s) => ({ ...s, href: safeHref(s.url) })).filter((s) => s.href)
  if (safe.length === 0) return null
  return (
    <p className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-mute">
      <span>Source:</span>
      {safe.map((source) => (
        <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer" className="group text-ink-soft hover:text-ink">
          <span className="link-draw">{source.name}</span> ↗
        </a>
      ))}
    </p>
  )
}

function StoryLink({ label, story, align = 'left' }: { label: string; story: { href: string; headline: string }; align?: 'left' | 'right' }) {
  return (
    <Link href={story.href} className={`group rounded-card border-2 border-ink bg-paper-raised p-5 shadow-paper transition-transform duration-300 hover:-translate-y-0.5 ${align === 'right' ? 'sm:text-right' : ''}`}>
      <span className="text-xs uppercase tracking-[0.2em] text-ink-mute">{label}</span>
      <span className="mt-1 block font-display text-lg font-semibold leading-snug"><span className="link-draw">{story.headline}</span></span>
    </Link>
  )
}
