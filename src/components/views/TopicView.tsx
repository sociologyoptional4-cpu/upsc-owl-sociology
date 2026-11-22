import Link from 'next/link'

import type { ResolvedBlogBlocks, TocItem, TopicDetail } from '@/lib/data/types'

import { RenderBlocks } from '@/blocks/RenderBlocks'

import { BlogRichText } from '../blog/BlogRichText'
import { BlogCard } from '../cards/BlogCard'
import { CaCard } from '../cards/CaCard'
import { Reveal } from '../motion/Reveal'
import { ColorLegend } from '../notebook/ColorLegend'
import { MindMap } from '../notebook/MindMap'
import { PyqAnswerAccordion } from '../notebook/PyqAnswerAccordion'
import { EmptyState } from '../ui/Badges'
import { Breadcrumbs } from '../ui/Breadcrumbs'
import { ThinkerChipLink, TopicChipLink } from '../ui/Chips'
import { paperTone } from '../ui/paper'

const EMPTY_RESOLVED: ResolvedBlogBlocks = { thinkers: {}, topics: {}, pyqs: {}, media: {} }

function TopicTocCard({ toc }: { toc: TocItem[] }) {
  if (toc.length === 0) return null
  return (
    <div className="rounded-card border-2 border-ink bg-paper-raised p-5 shadow-paper">
      <p className="mb-3 font-display text-sm font-extrabold">On this page</p>
      <ul className="max-h-72 space-y-1.5 overflow-y-auto pr-1 text-xs leading-snug">
        {toc.map((item) => (
          <li key={item.id} className={item.level === 3 ? 'pl-3' : ''}>
            <a href={`#${item.id}`} className="text-ink-soft transition-colors hover:text-saffron-deep">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TopicPager({
  unitCrumb,
  prevTopic,
  nextTopic,
}: {
  unitCrumb: { label: string; href: string } | undefined
  prevTopic: { title: string; href: string } | null | undefined
  nextTopic: { title: string; href: string } | null | undefined
}) {
  if (!unitCrumb && !prevTopic && !nextTopic) return null
  return (
    <nav aria-label="Chapter navigation" className="mt-14 grid gap-4 border-t-2 border-ink pt-8 sm:grid-cols-3">
      <div>
        {prevTopic ? (
          <Link href={prevTopic.href} className="block rounded-card border-2 border-ink bg-paper-raised p-4 shadow-paper transition-colors hover:bg-pastel-yellow">
            <span className="block text-xs font-bold uppercase tracking-wide text-ink-mute">← Pichhla Chapter</span>
            <span className="mt-1 block font-display text-sm font-bold text-ink">{prevTopic.title}</span>
          </Link>
        ) : null}
      </div>
      <div className="flex items-center justify-center">
        {unitCrumb ? (
          <Link href={unitCrumb.href} className="rounded-chip border-2 border-ink bg-paper-raised px-4 py-2 text-xs font-extrabold text-ink shadow-paper hover:bg-pastel-lavender">
            ↑ {unitCrumb.label}
          </Link>
        ) : null}
      </div>
      <div>
        {nextTopic ? (
          <Link href={nextTopic.href} className="block rounded-card border-2 border-ink bg-paper-raised p-4 text-right shadow-paper transition-colors hover:bg-pastel-mint">
            <span className="block text-xs font-bold uppercase tracking-wide text-ink-mute">Agla Chapter →</span>
            <span className="mt-1 block font-display text-sm font-bold text-ink">{nextTopic.title}</span>
          </Link>
        ) : null}
      </div>
    </nav>
  )
}

export function TopicView({ data }: { data: TopicDetail }) {
  const tone = paperTone(data.paper)
  const hasRichNotes = Boolean(data.notebookContent)
  const hasNotes = hasRichNotes || data.layout.length > 0
  const pyqCount = data.pyqAnswers?.length ?? 0
  const navSections = [
    ...(data.mindMap ? [{ id: 'mind-map', label: 'Mind Map' }] : []),
    { id: 'notes', label: 'Notes' },
    ...(pyqCount > 0 ? [{ id: 'pyqs', label: 'PYQs & Answers', badge: pyqCount, badgeClass: 'bg-pyq' }] : []),
    { id: 'current-affairs', label: 'Current Affairs', badge: data.caCount, badgeClass: 'bg-red-600' },
    ...(data.posts && data.posts.length > 0 ? [{ id: 'blogs', label: 'Blogs' }] : []),
  ]

  return (
    <div className="mx-auto max-w-7xl px-5 pt-10 md:px-8 md:pt-16">
      <Breadcrumbs items={data.breadcrumbs} />
      <header className="mt-8 max-w-4xl">
        <p className="tag-skew"><span>{tone.label} · Chapter Notes</span></p>
        <h1 className="mt-6 text-[length:var(--text-h2)] font-extrabold">{data.title}</h1>
        {data.summary && <p className="mt-4 max-w-[60ch] text-[length:var(--text-lg)] text-ink-soft">{data.summary}</p>}
      </header>

      <nav aria-label="On this page" className="sticky top-16 z-30 -mx-5 mt-10 border-y border-rule bg-paper/85 px-5 backdrop-blur-md md:-mx-8 md:px-8">
        <ul className="flex gap-6 overflow-x-auto py-3 text-sm">
          {navSections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="whitespace-nowrap font-semibold text-ink-soft hover:text-ink">
                {section.label}
                {'badge' in section && section.badge !== undefined ? (
                  <span className={`ml-1.5 rounded-chip px-1.5 text-xs text-white ${section.badgeClass}`}>{section.badge}</span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <div className="min-w-0">
          {data.mindMap ? (
            <section id="mind-map" aria-label="Chapter Mind Map" className="mb-10 scroll-mt-32">
              <MindMap data={data.mindMap} eyebrow="Chapter Mind Map" />
            </section>
          ) : null}

          <section id="notes" aria-label="Notes" className="scroll-mt-32">
            {hasRichNotes ? (
              <>
                <ColorLegend className="mb-6" />
                <BlogRichText data={data.notebookContent} resolved={data.resolvedBlocks ?? EMPTY_RESOLVED} />
              </>
            ) : hasNotes ? (
              <div className="blocks-flush"><RenderBlocks blocks={data.layout} /></div>
            ) : (
              <EmptyState title="Notes taiyaar ho rahe hain" body="Tab tak neeche ke current affairs se is topic ko samjho." />
            )}
          </section>

          {data.pyqAnswers && data.pyqAnswers.length > 0 ? (
            <section id="pyqs" aria-labelledby="topic-pyqs-h" className="mt-[var(--space-section)] scroll-mt-32">
              <p className="tag-skew"><span>2013–2025 PYQ Bank</span></p>
              <h2 id="topic-pyqs-h" className="mt-4 mb-6 text-[length:var(--text-h3)] font-extrabold">
                Solved Previous Year Questions
              </h2>
              <PyqAnswerAccordion items={data.pyqAnswers} />
            </section>
          ) : null}

          <section id="current-affairs" aria-labelledby="topic-ca-h" className="mt-[var(--space-section)] scroll-mt-32">
            <h2 id="topic-ca-h" className="mb-8 text-[length:var(--text-h3)] font-extrabold">Is topic se judi taaza khabrein</h2>
            {data.latestCA.length === 0 ? (
              <EmptyState title="Abhi koi khabar nahi judi" body="Jaise hi koi khabar is topic se judegi, wo yahan apne aap aa jaayegi." />
            ) : (
              <ul className="grid gap-x-6 gap-y-12 md:grid-cols-2">
                {data.latestCA.map((item, index) => (
                  <Reveal as="li" key={item.id} index={index % 4}>
                    <CaCard item={item} />
                  </Reveal>
                ))}
              </ul>
            )}
          </section>

          {data.posts && data.posts.length > 0 && (
            <section id="blogs" aria-labelledby="topic-blogs-h" className="mt-[var(--space-section)] scroll-mt-32">
              <h2 id="topic-blogs-h" className="mb-8 text-[length:var(--text-h3)] font-extrabold">Is topic pe blogs</h2>
              <ul className="grid gap-6 md:grid-cols-2">
                {data.posts.map((post, index) => (
                  <Reveal as="li" key={post.id} index={index % 4}>
                    <BlogCard post={post} />
                  </Reveal>
                ))}
              </ul>
            </section>
          )}

          <TopicPager unitCrumb={data.breadcrumbs[2]} prevTopic={data.prevTopic} nextTopic={data.nextTopic} />
        </div>

        <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
          <TopicTocCard toc={data.toc ?? []} />
          {data.thinkers.length > 0 && (
            <div className="rounded-card border-2 border-ink bg-paper-raised p-5 shadow-paper">
              <p className="mb-3 text-sm font-bold">Key thinkers</p>
              <div className="flex flex-wrap gap-1.5">{data.thinkers.map((t) => <ThinkerChipLink key={t.href} thinker={t} />)}</div>
            </div>
          )}
          {data.relatedTopics.length > 0 && (
            <div className="rounded-card border-2 border-ink bg-paper-raised p-5 shadow-paper">
              <p className="mb-3 text-sm font-bold">Related topics</p>
              <div className="flex flex-wrap gap-1.5">{data.relatedTopics.map((t) => <TopicChipLink key={t.href} topic={t} />)}</div>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
