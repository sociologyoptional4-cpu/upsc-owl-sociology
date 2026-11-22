'use client'

import Link from 'next/link'

import { Reveal } from '../motion/Reveal'
import { EmptyState } from '../ui/Badges'
import { paperTone } from '../ui/paper'
import { LanguageSwitch } from './LanguageSwitch'
import { NoteLanguageProvider, useNoteLanguage } from './NoteLanguageContext'

export type BilingualUnitShellProps = {
  paper: { code: 'P1' | 'P2'; title: string; href: string }
  unitNumber: number
  unitTitle: string
  overviewEn: string | null
  overviewHi: string | null
  topics: {
    title: string
    href: string
    caCount: number
    pyqCount?: number
    hasNotes?: boolean
    summaryEn?: string | null
    summaryHi?: string | null
  }[]
  totalPyqs: number
  breadcrumbsNode: React.ReactNode
  sequenceEnNode: React.ReactNode
  sequenceHiNode: React.ReactNode | null
  mindMapEnNode: React.ReactNode
  mindMapHiNode: React.ReactNode | null
  infographicsEnNode: React.ReactNode
  infographicsHiNode: React.ReactNode | null
  hasHinglish: boolean
}

type UnitTopicCardProps = {
  topic: BilingualUnitShellProps['topics'][number]
  unitNumber: number
  index: number
  toneBg: string
  showHi: boolean
}

function UnitTopicCard({ topic, unitNumber, index, toneBg, showHi }: UnitTopicCardProps) {
  const summary = showHi ? (topic.summaryHi ?? topic.summaryEn) : topic.summaryEn
  const cta = showHi ? 'Padho →' : 'Read Chapter →'

  return (
    <Reveal as="li" index={index}>
      <article className="group relative flex h-full min-w-0 flex-col justify-between rounded-card border-2 border-ink bg-paper-raised p-6 shadow-paper transition-[transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-float">
        <div>
          <div className="flex items-center justify-between gap-2">
            <span aria-hidden className={`block h-1 w-10 rounded-full ${toneBg}`} />
            <span className="font-display text-xs font-extrabold text-ink-mute">
              Chapter {unitNumber}.{index + 1}
            </span>
          </div>
          <h3 className="mt-4 font-display text-xl font-bold leading-snug">
            <Link href={topic.href} className="link-draw after:absolute after:inset-0 after:content-['']">
              {topic.title}
            </Link>
          </h3>
          {summary ? <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-ink-soft">{summary}</p> : null}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-rule pt-4 text-xs">
          <div className="flex flex-wrap gap-1.5">
            {topic.hasNotes ? (
              <span className="rounded-chip border border-ink bg-pastel-mint px-2 py-0.5 font-bold text-ink">
                Notes Ready
              </span>
            ) : null}
            {(topic.pyqCount ?? 0) > 0 ? (
              <span className="rounded-chip border border-ink/25 bg-pastel-lavender px-2 py-0.5 font-bold text-ink">
                {topic.pyqCount} PYQs
              </span>
            ) : null}
            <span className="rounded-chip border border-rule px-2 py-0.5 text-ink-mute">
              {topic.caCount} {topic.caCount === 1 ? 'story' : 'stories'}
            </span>
          </div>
          <span className="font-semibold text-saffron-deep">{cta}</span>
        </div>
      </article>
    </Reveal>
  )
}

function UnitHeader({
  paperCode,
  unitNumber,
  unitTitle,
  overview,
  chaptersCount,
  totalPyqs,
}: {
  paperCode: 'P1' | 'P2'
  unitNumber: number
  unitTitle: string
  overview: string | null
  chaptersCount: number
  totalPyqs: number
}) {
  const tone = paperTone(paperCode)
  return (
    <header className="mt-8 grid gap-4 md:grid-cols-[auto_1fr] md:items-end md:gap-8">
      <span className={`font-display text-[length:var(--text-hero)] font-extrabold leading-none ${tone.text}`}>
        {String(unitNumber).padStart(2, '0')}
      </span>
      <div className="min-w-0">
        <p className="tag-skew">
          <span>
            {tone.label} · Unit {unitNumber}
          </span>
        </p>
        <h1 className="mt-4 text-[length:var(--text-h2)] font-extrabold">{unitTitle}</h1>
        {overview ? (
          <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-ink-soft md:text-lg">{overview}</p>
        ) : null}
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
          <span className="rounded-chip border border-ink bg-pastel-yellow px-3 py-1 text-ink">
            {chaptersCount} Chapters
          </span>
          {totalPyqs > 0 ? (
            <span className="rounded-chip border border-ink bg-pastel-lavender px-3 py-1 text-ink">
              {totalPyqs} Solved PYQs (2013–2025)
            </span>
          ) : null}
        </div>
      </div>
    </header>
  )
}

function UnitChaptersSection({
  topics,
  unitNumber,
  toneBg,
  showHi,
}: {
  topics: BilingualUnitShellProps['topics']
  unitNumber: number
  toneBg: string
  showHi: boolean
}) {
  if (topics.length === 0) {
    return (
      <div className="mt-12">
        <EmptyState
          title={showHi ? 'Topics jald aa rahe hain' : 'Topics coming soon'}
          body={showHi ? 'Is unit ke notes abhi taiyaar ho rahe hain.' : 'Notes for this unit are in progress.'}
        />
      </div>
    )
  }
  return (
    <section aria-labelledby="unit-chapters-h" className="mt-12">
      <h2 id="unit-chapters-h" className="text-[length:var(--text-h3)] font-extrabold">
        {showHi ? 'Is Unit ke Chapters' : 'Chapters in this Unit'}
      </h2>
      <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, index) => (
          <UnitTopicCard key={topic.href} topic={topic} unitNumber={unitNumber} index={index} toneBg={toneBg} showHi={showHi} />
        ))}
      </ul>
    </section>
  )
}

function UnitShellInner(props: BilingualUnitShellProps) {
  const { lang, hasHinglish } = useNoteLanguage()
  const showHi = hasHinglish && lang === 'hi'
  const tone = paperTone(props.paper.code)
  const overview = showHi ? (props.overviewHi ?? props.overviewEn) : props.overviewEn

  return (
    <div className="mx-auto max-w-7xl px-5 pt-10 md:px-8 md:pt-16">
      {props.breadcrumbsNode}
      <UnitHeader
        paperCode={props.paper.code}
        unitNumber={props.unitNumber}
        unitTitle={props.unitTitle}
        overview={overview}
        chaptersCount={props.topics.length}
        totalPyqs={props.totalPyqs}
      />
      <LanguageSwitch variant="banner" className="mt-6" />
      {showHi ? (props.sequenceHiNode ?? props.sequenceEnNode) : props.sequenceEnNode}
      <UnitChaptersSection topics={props.topics} unitNumber={props.unitNumber} toneBg={tone.bg} showHi={showHi} />
      {showHi ? (props.mindMapHiNode ?? props.mindMapEnNode) : props.mindMapEnNode}
      {showHi ? (props.infographicsHiNode ?? props.infographicsEnNode) : props.infographicsEnNode}
    </div>
  )
}

/** Client bilingual wrapper for Unit hub pages with English-priority defaults. */
export function BilingualUnitShell(props: BilingualUnitShellProps) {
  return (
    <NoteLanguageProvider hasHinglish={props.hasHinglish}>
      <UnitShellInner {...props} />
    </NoteLanguageProvider>
  )
}
