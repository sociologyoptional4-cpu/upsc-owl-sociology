'use client'

import Link from 'next/link'
import { useEffect } from 'react'

import { PaywallGate } from '../billing/PaywallGate'
import { ContentGuard } from '../ContentGuard'
import { recordStudyXp } from '../gamification/StudyStreakPill'
import { QuillNotesBuddy } from '../mascots/OwlMascot'
import { ProvenanceBadge, SyllabusDmcaFooter } from '../syllabus/SyllabusProvenance'
import { LanguageSwitch } from './LanguageSwitch'
import { NoteLanguageProvider, useNoteLanguage } from './NoteLanguageContext'

export type BilingualTopicShellProps = {
  isPaywalled?: boolean
  paperCode: 'P1' | 'P2'
  paperLabel: string
  title: string
  canonicalHref: string
  createdAt?: string | null
  updatedAt?: string | null
  summaryEn: string | null
  summaryHi: string | null
  breadcrumbsNode: React.ReactNode
  hasMindMapEn: boolean
  hasMindMapHi: boolean
  mindMapEnNode: React.ReactNode
  mindMapHiNode: React.ReactNode | null
  notesEnNode: React.ReactNode
  notesHiNode: React.ReactNode | null
  selfCheckEnNode?: React.ReactNode
  selfCheckHiNode?: React.ReactNode | null
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
      className="sticky top-14 z-30 -mx-5 mt-8 border-y border-rule bg-paper/90 px-5 backdrop-blur-md md:top-16 md:-mx-8 md:mt-10 md:px-8"
    >
      <div className="flex items-center justify-between gap-3">
        <ul className="no-scrollbar flex min-w-0 flex-1 items-center gap-4 overflow-x-auto py-3 text-xs sm:text-sm md:gap-6">
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

function TopicMainColumn({
  props,
  showHi,
  hasMindMap,
  tocCount,
}: {
  props: BilingualTopicShellProps
  showHi: boolean
  hasMindMap: boolean
  tocCount: number
}) {
  const selfCheckNode = showHi ? (props.selfCheckHiNode ?? props.selfCheckEnNode) : props.selfCheckEnNode
  return (
    <div className="min-w-0">
      {props.isPaywalled ? (
        <section id="notes" aria-label="Pro Pass Required" className="scroll-mt-32">
          <PaywallGate
            mode="chapter"
            chapterTitle={props.title}
            paperLabel={props.paperLabel}
            tocCount={tocCount}
            pyqCount={props.pyqCount}
          />
        </section>
      ) : (
        <>
          {hasMindMap ? (
            <section id="mind-map" aria-label="Chapter Mind Map" className="mb-10 scroll-mt-32">
              {showHi ? (props.mindMapHiNode ?? props.mindMapEnNode) : props.mindMapEnNode}
            </section>
          ) : null}

          <section id="notes" aria-label="Notes" className="scroll-mt-32">
            {showHi ? (props.notesHiNode ?? props.notesEnNode) : props.notesEnNode}
          </section>

          {selfCheckNode}

          {props.pyqCount > 0 ? (
            <section id="pyqs" aria-labelledby="topic-pyqs-h" className="mt-[var(--space-section)] scroll-mt-32">
              <p className="tag-skew"><span>2013–2025 PYQ Bank</span></p>
              <h2 id="topic-pyqs-h" className="mt-4 mb-6 text-[length:var(--text-h3)] font-extrabold">
                Solved Previous Year Questions
              </h2>
              {showHi ? (props.pyqsHiNode ?? props.pyqsEnNode) : props.pyqsEnNode}
            </section>
          ) : null}
        </>
      )}

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
      <SyllabusDmcaFooter canonicalHref={props.canonicalHref} title={props.title} />
    </div>
  )
}

function MobileTopicQuickJump({
  toc,
  unitBreadcrumb,
  nextTopic,
}: {
  toc: { id: string; text: string; level: 2 | 3 }[]
  unitBreadcrumb: { label: string; href: string } | undefined
  nextTopic: { title: string; href: string } | null
}) {
  if (toc.length === 0 && !unitBreadcrumb && !nextTopic) return null
  return (
    <div className="mt-5 space-y-2.5 lg:hidden">
      {unitBreadcrumb || nextTopic ? (
        <div className="flex flex-wrap items-center gap-2">
          {unitBreadcrumb ? (
            <Link
              href={unitBreadcrumb.href}
              className="rounded-chip border border-ink bg-pastel-lavender px-3 py-1 text-xs font-bold text-ink"
            >
              ↑ {unitBreadcrumb.label}
            </Link>
          ) : null}
          {nextTopic ? (
            <Link
              href={nextTopic.href}
              className="rounded-chip border border-ink bg-pastel-mint px-3 py-1 text-xs font-bold text-ink"
            >
              Next: {nextTopic.title.slice(0, 26)} →
            </Link>
          ) : null}
        </div>
      ) : null}
      {toc.length > 0 ? (
        <details className="rounded-card border-2 border-ink bg-paper-raised p-3.5 shadow-paper">
          <summary className="cursor-pointer font-display text-xs font-extrabold text-ink">
            📑 Chapter Contents ({toc.length} sections) — Tap to jump
          </summary>
          <ul className="mt-2.5 max-h-56 space-y-1.5 overflow-y-auto border-t border-rule pt-2 text-xs">
            {toc.map((item) => (
              <li key={item.id} className={item.level === 3 ? 'pl-3' : ''}>
                <a href={`#${item.id}`} className="block py-0.5 text-ink-soft hover:text-saffron-deep">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </details>
      ) : null}
    </div>
  )
}

function TopicShellInner(props: BilingualTopicShellProps) {
  const { lang, hasHinglish } = useNoteLanguage()
  const showHi = hasHinglish && lang === 'hi'
  const summary = showHi ? (props.summaryHi ?? props.summaryEn) : props.summaryEn
  const hasMindMap = showHi ? props.hasMindMapHi || props.hasMindMapEn : props.hasMindMapEn
  const toc = showHi && props.tocHi.length > 0 ? props.tocHi : props.tocEn

  useEffect(() => {
    recordStudyXp('chapter_read')
  }, [props.canonicalHref])

  const navSections: NavSection[] = [
    ...(!props.isPaywalled && hasMindMap ? [{ id: 'mind-map', label: 'Mind Map' }] : []),
    { id: 'notes', label: props.isPaywalled ? 'Unlock Notes 🔒' : 'Notes' },
    ...(!props.isPaywalled && props.pyqCount > 0 ? [{ id: 'pyqs', label: 'PYQs & Answers', badge: props.pyqCount, badgeClass: 'bg-pyq' }] : []),
    { id: 'current-affairs', label: 'Current Affairs', badge: props.caCount, badgeClass: 'bg-red-600' },
    ...(props.blogsCount > 0 && props.blogsNode ? [{ id: 'blogs', label: 'Blogs' }] : []),
  ]

  return (
    <ContentGuard canonicalPath={props.canonicalHref}>
      <div data-paper={props.paperCode} className="mx-auto max-w-7xl px-5 pt-10 md:px-8 md:pt-16">
        {props.breadcrumbsNode}
        <header className="mt-8 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <QuillNotesBuddy state="reading" className="h-12 w-12 shrink-0" />
            <p className="tag-skew"><span>{props.paperLabel} · Chapter Notes</span></p>
          </div>
          <h1 className="mt-5 text-[length:var(--text-h2)] font-extrabold">{props.title}</h1>
          {summary ? <p className="mt-4 max-w-[60ch] text-[length:var(--text-lg)] text-ink-soft">{summary}</p> : null}
          <ProvenanceBadge createdAt={props.createdAt} updatedAt={props.updatedAt} canonicalHref={props.canonicalHref} />
        </header>
        <LanguageSwitch variant="banner" className="mt-6" />
        <TopicStickyNav sections={navSections} />
        <MobileTopicQuickJump toc={toc} unitBreadcrumb={props.unitBreadcrumb} nextTopic={props.nextTopic} />

        <div className="mt-8 grid gap-12 md:mt-10 lg:grid-cols-[minmax(0,1fr)_17rem]">
          <TopicMainColumn props={props} showHi={showHi} hasMindMap={hasMindMap} tocCount={toc.length} />
          <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <TopicTocCard toc={toc} />
            {props.asideExtraNode}
          </aside>
        </div>
      </div>
    </ContentGuard>
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
