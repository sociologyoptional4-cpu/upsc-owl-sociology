import type { TopicDetail } from '@/lib/data/types'

import { RenderBlocks } from '@/blocks/RenderBlocks'

import { BlogCard } from '../cards/BlogCard'
import { CaCard } from '../cards/CaCard'
import { Reveal } from '../motion/Reveal'
import { EmptyState } from '../ui/Badges'
import { Breadcrumbs } from '../ui/Breadcrumbs'
import { ThinkerChipLink, TopicChipLink } from '../ui/Chips'
import { paperTone } from '../ui/paper'

const SECTIONS = [
  { id: 'notes', label: 'Notes' },
  { id: 'current-affairs', label: 'Current Affairs' },
  { id: 'blogs', label: 'Blogs' },
] as const

export function TopicView({ data }: { data: TopicDetail }) {
  const tone = paperTone(data.paper)
  const hasNotes = data.layout.length > 0

  return (
    <div className="mx-auto max-w-7xl px-5 pt-10 md:px-8 md:pt-16">
      <Breadcrumbs items={data.breadcrumbs} />
      <header className="mt-8 max-w-4xl">
        <p className="tag-skew"><span>{tone.label} · Topic</span></p>
        <h1 className="mt-6 text-[length:var(--text-h2)] font-extrabold">{data.title}</h1>
        {data.summary && <p className="mt-4 max-w-[60ch] text-[length:var(--text-lg)] text-ink-soft">{data.summary}</p>}
      </header>

      <nav aria-label="On this page" className="sticky top-16 z-30 -mx-5 mt-10 border-y border-rule bg-paper/85 px-5 backdrop-blur-md md:-mx-8 md:px-8">
        <ul className="flex gap-6 overflow-x-auto py-3 text-sm">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="whitespace-nowrap font-semibold text-ink-soft hover:text-ink">
                {section.label}
                {section.id === 'current-affairs' && <span className="ml-1.5 rounded-chip bg-red-600 px-1.5 text-xs text-white">{data.caCount}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <div className="min-w-0">
          <section id="notes" aria-label="Notes" className="scroll-mt-32">
            {hasNotes ? (
              <div className="blocks-flush"><RenderBlocks blocks={data.layout} /></div>
            ) : (
              <EmptyState title="Notes taiyaar ho rahe hain" body="Tab tak neeche ke current affairs se is topic ko samjho." />
            )}
          </section>

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
        </div>

        <aside className="space-y-8 lg:sticky lg:top-32 lg:self-start">
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
