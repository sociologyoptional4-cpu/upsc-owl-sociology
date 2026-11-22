'use client'

import Link from 'next/link'

import { LanguageSwitch } from './LanguageSwitch'
import { NoteLanguageProvider, useNoteLanguage } from './NoteLanguageContext'

export type BilingualTopicShellProps = {
  paperCode: 'P1' | 'P2'
  paperLabel: string
  title: string
  summaryEn: string | null
  summaryHi: string | null
  breadcrumbsNode: React.ReactNode
  hasMindMapEn: boolean
  hasMindMapHi: boolean
  mindMapEnNode: React.ReactNode
  mindMapHiNode: React.ReactNode | null
  notesEnNode: React.ReactNode
  notesHiNode: React.ReactNode | null
  pyqCount: number
  pyqsEnNode: React.ReactNode
  pyqsHiNode: React.ReactNode | null
  caCount: number
  caNode: React.ReactNode
  blogsCount: number
  blogsNode: React.ReactNode | null
  tocEn: { id: string; text: string; level: 2 | 3 }[]
  tocHi: { id: string; text: string; level: 2 | 3 }[]
  asideExtraNode: React.ReactNode
  prevTopic: { title: string; href: string } | null
  nextTopic: { title: string; href: string } | null
  unitBreadcrumb: { label: string; href: string } | undefined
  hasHinglish: boolean
}

type NavSection = {
  id: string
  label: string
  badge?: number
  badgeClass?: string
}

function TopicStickyNav({ sections }: { sections: NavSection[] }) {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-16 z-30 -mx-5 mt-10 border-y border-rule bg-paper/90 px-5 backdrop-blur-md md:-mx-8 md:px-8"
    >
      <div className="flex items-center justify-between gap-3">
        <ul className="flex min-w-0 flex-1 items-center gap-5 overflow-x-auto py-3 text-sm md:gap-6">
          {sections.map((section) => (
            <li key={section.id} className="shrink-0">
              <a href={`#${section.id}`} className="whitespace-nowrap font-semibold text-ink-soft hover:text-ink">
                {section.label}
                {section.badge !== undefined ? (
                  <span className={`ml-1.5 rounded-chip px-1.5 text-xs text-white ${section.badgeClass ?? ''}`}>
                    {section.badge}
                  </span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
        <div className="shrink-0 py-1.5">
          <LanguageSwitch variant="compact" />
        </div>
      </div>
    </nav>
  )
}

function TopicTocCard({ toc }: { toc: { id: string; text: string; level: 2 | 3 }[] }) {
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

type TopicPagerProps = {
  unitBreadcrumb: { label: string; href: string } | undefined
  prevTopic: { title: string; href: string } | null
  nextTopic: { title: string; href: string } | null
  showHi: boolean
}

function TopicPager({ unitBreadcrumb, prevTopic, nextTopic, showHi }: TopicPagerProps) {
  if (!unitBreadcrumb && !prevTopic && !nextTopic) return null
  const cardCls = 'block rounded-card border-2 border-ink bg-paper-raised p-4 shadow-paper transition-colors'
  return (
    <nav aria-label="Chapter navigation" className="mt-14 grid gap-4 border-t-2 border-ink pt-8 sm:grid-cols-3">
      <div>
        {prevTopic ? (
          <Link href={prevTopic.href} className={`${cardCls} hover:bg-pastel-yellow`}>
            <span className="block text-xs font-bold uppercase tracking-wide text-ink-mute">
              {showHi ? '← Pichhla Chapter' : '← Previous Chapter'}
            </span>
            <span className="mt-1 block font-display text-sm font-bold text-ink">{prevTopic.title}</span>
          </Link>
        ) : null}
      </div>
      <div className="flex items-center justify-center">
        {unitBreadcrumb ? (
          <Link
            href={unitBreadcrumb.href}
            className="rounded-chip border-2 border-ink bg-paper-raised px-4 py-2 text-xs font-extrabold text-ink shadow-paper hover:bg-pastel-lavender"
          >
            ↑ {unitBreadcrumb.label}
          </Link>
        ) : null}
      </div>
      <div>
        {nextTopic ? (
          <Link href={nextTopic.href} className={`${cardCls} text-right hover:bg-pastel-mint`}>
            <span className="block text-xs font-bold uppercase tracking-wide text-ink-mute">
              {showHi ? 'Agla Chapter →' : 'Next Chapter →'}
            </span>
            <span className="mt-1 block font-display text-sm font-bold text-ink">{nextTopic.title}</span>
          </Link>
        ) : null}
      </div>
    </nav>
  )
}

function TopicMainColumn({ props, showHi, hasMindMap }: { props: BilingualTopicShellProps; showHi: boolean; hasMindMap: boolean }) {
  return (
    <div className="min-w-0">
      {hasMindMap ? (
        <section id="mind-map" aria-label="Chapter Mind Map" className="mb-10 scroll-mt-32">
          {showHi ? (props.mindMapHiNode ?? props.mindMapEnNode) : props.mindMapEnNode}
        </section>
      ) : null}

      <section id="notes" aria-label="Notes" className="scroll-mt-32">
        {showHi ? (props.notesHiNode ?? props.notesEnNode) : props.notesEnNode}
      </section>

      {props.pyqCount > 0 ? (
        <section id="pyqs" aria-labelledby="topic-pyqs-h" className="mt-[var(--space-section)] scroll-mt-32">
          <p className="tag-skew"><span>2013–2025 PYQ Bank</span></p>
          <h2 id="topic-pyqs-h" className="mt-4 mb-6 text-[length:var(--text-h3)] font-extrabold">
            Solved Previous Year Questions
          </h2>
          {showHi ? (props.pyqsHiNode ?? props.pyqsEnNode) : props.pyqsEnNode}
        </section>
      ) : null}

      <section id="current-affairs" aria-labelledby="topic-ca-h" className="mt-[var(--space-section)] scroll-mt-32">
        <h2 id="topic-ca-h" className="mb-8 text-[length:var(--text-h3)] font-extrabold">
          {showHi ? 'Is topic se judi taaza khabrein' : 'Latest Current Affairs for this Topic'}
        </h2>
        {props.caNode}
      </section>

      {props.blogsCount > 0 && props.blogsNode ? (
        <section id="blogs" aria-labelledby="topic-blogs-h" className="mt-[var(--space-section)] scroll-mt-32">
          <h2 id="topic-blogs-h" className="mb-8 text-[length:var(--text-h3)] font-extrabold">
            {showHi ? 'Is topic pe blogs' : 'Blogs on this Topic'}
          </h2>
          {props.blogsNode}
        </section>
      ) : null}

      <TopicPager unitBreadcrumb={props.unitBreadcrumb} prevTopic={props.prevTopic} nextTopic={props.nextTopic} showHi={showHi} />
    </div>
  )
}

function TopicShellInner(props: BilingualTopicShellProps) {
  const { lang, hasHinglish } = useNoteLanguage()
  const showHi = hasHinglish && lang === 'hi'
  const summary = showHi ? (props.summaryHi ?? props.summaryEn) : props.summaryEn
  const hasMindMap = showHi ? props.hasMindMapHi || props.hasMindMapEn : props.hasMindMapEn
  const toc = showHi && props.tocHi.length > 0 ? props.tocHi : props.tocEn

  const navSections: NavSection[] = [
    ...(hasMindMap ? [{ id: 'mind-map', label: 'Mind Map' }] : []),
    { id: 'notes', label: 'Notes' },
    ...(props.pyqCount > 0 ? [{ id: 'pyqs', label: 'PYQs & Answers', badge: props.pyqCount, badgeClass: 'bg-pyq' }] : []),
    { id: 'current-affairs', label: 'Current Affairs', badge: props.caCount, badgeClass: 'bg-red-600' },
    ...(props.blogsCount > 0 && props.blogsNode ? [{ id: 'blogs', label: 'Blogs' }] : []),
  ]

  return (
    <div data-paper={props.paperCode} className="mx-auto max-w-7xl px-5 pt-10 md:px-8 md:pt-16">
      {props.breadcrumbsNode}
      <header className="mt-8 max-w-4xl">
        <p className="tag-skew"><span>{props.paperLabel} · Chapter Notes</span></p>
        <h1 className="mt-6 text-[length:var(--text-h2)] font-extrabold">{props.title}</h1>
        {summary ? <p className="mt-4 max-w-[60ch] text-[length:var(--text-lg)] text-ink-soft">{summary}</p> : null}
      </header>
      <LanguageSwitch variant="banner" className="mt-6" />
      <TopicStickyNav sections={navSections} />

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <TopicMainColumn props={props} showHi={showHi} hasMindMap={hasMindMap} />
        <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
          <TopicTocCard toc={toc} />
          {props.asideExtraNode}
        </aside>
      </div>
    </div>
  )
}

/** Client bilingual wrapper for Chapter Topic pages with sticky medium switch. */
export function BilingualTopicShell(props: BilingualTopicShellProps) {
  return (
    <NoteLanguageProvider hasHinglish={props.hasHinglish}>
      <TopicShellInner {...props} />
    </NoteLanguageProvider>
  )
}
