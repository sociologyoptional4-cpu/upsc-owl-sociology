'use client'

import Link from 'next/link'

import { ContentGuard } from '../ContentGuard'
import { OwlStudyMascot } from '../mascots/OwlMascot'
import { Reveal } from '../motion/Reveal'
import { ProvenanceBadge, SyllabusDmcaFooter } from '../syllabus/SyllabusProvenance'
import { SpotlightCard } from '../ui/AuroraBackground'
import { EmptyState } from '../ui/Badges'
import { paperTone } from '../ui/paper'
import { LanguageSwitch } from './LanguageSwitch'
import { NoteLanguageProvider, useNoteLanguage } from './NoteLanguageContext'

export type BilingualUnitShellProps = {
  paper: { code: 'P1' | 'P2'; title: string; href: string }
  unitNumber: number
  unitTitle: string
  unitLocked?: boolean
  canonicalHref: string
  createdAt?: string | null
  updatedAt?: string | null
  overviewEn: string | null
  overviewHi: string | null
  topics: {
    title: string
    href: string
    caCount: number
    pyqCount?: number
    hasNotes?: boolean
    isLocked?: boolean
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
  const cta = topic.isLocked ? (showHi ? 'Unlock Pro →' : 'Unlock Chapter →') : showHi ? 'Padho →' : 'Read Chapter →'

  return (
    <Reveal as="li" index={index}>
      <SpotlightCard
        glowColor="rgba(16, 185, 129, 0.22)"
        className="group relative h-full min-w-0 rounded-card border-2 border-ink bg-paper-raised p-6 shadow-paper transition-[transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-float"
      >
        <article className="flex h-full flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span aria-hidden className={`block h-1 w-10 rounded-full ${toneBg}`} />
              <div className="flex items-center gap-1.5">
                {topic.isLocked ? (
                  <span className="rounded-chip border border-ink bg-pastel-yellow px-2 py-0.5 text-[10px] font-extrabold text-ink">
                    🔒 Pro
                  </span>
                ) : null}
                <span className="font-display text-xs font-extrabold text-ink-mute">
                  Chapter {unitNumber}.{index + 1}
                </span>
              </div>
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
      </SpotlightCard>
    </Reveal>
  )
}

function UnitHeader({
  paperCode,
  unitNumber,
  unitTitle,
  canonicalHref,
  createdAt,
  updatedAt,
  overview,
  chaptersCount,
  totalPyqs,
}: {
  paperCode: 'P1' | 'P2'
  unitNumber: number
  unitTitle: string
  canonicalHref: string
  createdAt?: string | null
  updatedAt?: string | null
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
        <div className="flex flex-wrap items-center gap-3">
          <OwlStudyMascot state="idle" className="h-12 w-12 shrink-0" />
          <p className="tag-skew">
            <span>
              {tone.label} · Unit {unitNumber}
            </span>
          </p>
        </div>
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
        <ProvenanceBadge createdAt={createdAt} updatedAt={updatedAt} canonicalHref={canonicalHref} />
      </div>
    </header>
  )
}

function UnitChaptersSection({
  topics,
  unitNumber,
  unitLocked,
  toneBg,
  showHi,
}: {
  topics: BilingualUnitShellProps['topics']
  unitNumber: number
  unitLocked?: boolean
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
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 id="unit-chapters-h" className="text-[length:var(--text-h3)] font-extrabold">
          {showHi ? 'Is Unit ke Chapters' : 'Chapters in this Unit'}
        </h2>
        {unitLocked ? (
          <Link
            href="/pro"
            className="inline-flex items-center gap-2 rounded-chip border-2 border-ink bg-pastel-yellow px-3.5 py-1.5 text-xs font-extrabold text-ink shadow-paper transition-colors hover:bg-saffron"
          >
            <span>🔒 Pro Unit · Unlock all chapters ₹399/yr (60% OFF ₹999)</span>
          </Link>
        ) : null}
      </div>
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
    <ContentGuard canonicalPath={props.canonicalHref}>
      <div className="mx-auto max-w-7xl px-5 pt-10 md:px-8 md:pt-16">
        {props.breadcrumbsNode}
        <UnitHeader
          paperCode={props.paper.code}
          unitNumber={props.unitNumber}
          unitTitle={props.unitTitle}
          canonicalHref={props.canonicalHref}
          createdAt={props.createdAt}
          updatedAt={props.updatedAt}
          overview={overview}
          chaptersCount={props.topics.length}
          totalPyqs={props.totalPyqs}
        />
        <LanguageSwitch variant="banner" className="mt-6" />
        <div className="flex flex-col">
          <div className="order-1 md:order-2">
            <UnitChaptersSection topics={props.topics} unitNumber={props.unitNumber} unitLocked={props.unitLocked} toneBg={tone.bg} showHi={showHi} />
          </div>
          <div className="order-2 md:order-1">
            {showHi ? (props.sequenceHiNode ?? props.sequenceEnNode) : props.sequenceEnNode}
          </div>
        </div>
        {showHi ? (props.mindMapHiNode ?? props.mindMapEnNode) : props.mindMapEnNode}
        {showHi ? (props.infographicsHiNode ?? props.infographicsEnNode) : props.infographicsEnNode}
        <SyllabusDmcaFooter canonicalHref={props.canonicalHref} title={props.unitTitle} />
      </div>
    </ContentGuard>
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
