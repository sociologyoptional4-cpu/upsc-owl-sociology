import Link from 'next/link'

import type { UnitPageData, UnitStudyStep } from '@/lib/data/types'

import { Reveal } from '../motion/Reveal'
import { InfographicGallery } from '../notebook/InfographicGallery'
import { MindMap } from '../notebook/MindMap'
import { EmptyState } from '../ui/Badges'
import { Breadcrumbs } from '../ui/Breadcrumbs'
import { paperTone } from '../ui/paper'

function StudySequenceRibbon({ steps }: { steps: UnitStudyStep[] }) {
  if (steps.length === 0) return null
  return (
    <section aria-labelledby="study-seq-h" className="mt-10 rounded-card border-2 border-ink bg-paper-raised p-5 shadow-paper md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 id="study-seq-h" className="font-display text-lg font-extrabold text-ink">
          Unit Padhne ka Sequence
        </h2>
        <span className="rounded-chip border border-ink bg-pastel-yellow px-2.5 py-0.5 text-xs font-bold text-ink">
          {steps.length}-Step Flow
        </span>
      </div>
      <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((item, idx) => (
          <li key={`${idx}-${item.step}`} className="rounded-card border-2 border-ink bg-paper-sunk p-3.5 text-ink">
            <p className="font-display text-xs font-extrabold uppercase tracking-wide text-saffron-deep">
              Step {idx + 1}
            </p>
            <p className="mt-1 font-display text-sm font-bold text-ink">{item.step}</p>
            {item.detail ? <p className="mt-1 text-xs leading-relaxed text-ink-soft">{item.detail}</p> : null}
          </li>
        ))}
      </ol>
    </section>
  )
}

export function UnitView({ data }: { data: UnitPageData }) {
  const { paper, unit } = data
  const tone = paperTone(paper.code)
  const pyqsTotal = data.totalPyqs ?? 0

  return (
    <div className="mx-auto max-w-7xl px-5 pt-10 md:px-8 md:pt-16">
      <Breadcrumbs items={[{ label: 'Syllabus', href: '/syllabus' }, { label: tone.label, href: paper.href }, { label: unit.title, href: unit.href }]} />
      <header className="mt-8 grid gap-4 md:grid-cols-[auto_1fr] md:items-end md:gap-8">
        <span className={`font-display text-[length:var(--text-hero)] font-extrabold leading-none ${tone.text}`}>{String(unit.number).padStart(2, '0')}</span>
        <div>
          <p className="tag-skew"><span>{tone.label} · Unit {unit.number}</span></p>
          <h1 className="mt-4 text-[length:var(--text-h2)] font-extrabold">{unit.title}</h1>
          {data.overview ? <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-ink-soft md:text-lg">{data.overview}</p> : null}
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
            <span className="rounded-chip border border-ink bg-pastel-yellow px-3 py-1 text-ink">
              {unit.topics.length} Chapters
            </span>
            {pyqsTotal > 0 ? (
              <span className="rounded-chip border border-ink bg-pastel-lavender px-3 py-1 text-ink">
                {pyqsTotal} Solved PYQs (2013–2025)
              </span>
            ) : null}
          </div>
        </div>
      </header>

      <StudySequenceRibbon steps={data.studySequence ?? []} />

      {unit.topics.length === 0 ? (
        <div className="mt-12"><EmptyState title="Topics jald aa rahe hain" body="Is unit ke notes abhi taiyaar ho rahe hain." /></div>
      ) : (
        <section aria-labelledby="unit-chapters-h" className="mt-12">
          <h2 id="unit-chapters-h" className="text-[length:var(--text-h3)] font-extrabold">Chapters in this Unit</h2>
          <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {unit.topics.map((topic, index) => (
              <Reveal as="li" key={topic.href} index={index}>
                <article className="group relative flex h-full flex-col justify-between rounded-card border-2 border-ink bg-paper-raised p-6 shadow-paper transition-[transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-float">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span aria-hidden className={`block h-1 w-10 rounded-full ${tone.bg}`} />
                      <span className="font-display text-xs font-extrabold text-ink-mute">
                        Chapter {unit.number}.{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold leading-snug">
                      <Link href={topic.href} className="link-draw after:absolute after:inset-0 after:content-['']">{topic.title}</Link>
                    </h3>
                    {topic.summary ? (
                      <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-ink-soft">{topic.summary}</p>
                    ) : null}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-rule pt-4 text-xs">
                    <div className="flex flex-wrap gap-1.5">
                      {topic.hasNotes ? (
                        <span className="rounded-chip border border-ink bg-pastel-mint px-2 py-0.5 font-bold text-ink">Notes Ready</span>
                      ) : null}
                      {(topic.pyqCount ?? 0) > 0 ? (
                        <span className="rounded-chip border border-ink/25 bg-pastel-lavender px-2 py-0.5 font-bold text-ink">{topic.pyqCount} PYQs</span>
                      ) : null}
                      <span className="rounded-chip border border-rule px-2 py-0.5 text-ink-mute">{topic.caCount} {topic.caCount === 1 ? 'story' : 'stories'}</span>
                    </div>
                    <span className="font-semibold text-saffron-deep">Padho →</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </section>
      )}

      {data.mindMap ? (
        <section id="unit-mind-map" className="mt-14 scroll-mt-24">
          <MindMap data={data.mindMap} eyebrow={`Unit ${unit.number} Mind Map`} />
        </section>
      ) : null}

      {data.infographics && data.infographics.length > 0 ? (
        <section id="unit-infographics" aria-labelledby="unit-infographics-h" className="mt-14 scroll-mt-24">
          <p className="tag-skew"><span>Visual Revision Pack</span></p>
          <h2 id="unit-infographics-h" className="mt-4 mb-6 text-[length:var(--text-h3)] font-extrabold">
            Infographics &amp; Cheat Sheets
          </h2>
          <InfographicGallery items={data.infographics} />
        </section>
      ) : null}
    </div>
  )
}
