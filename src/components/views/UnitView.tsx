import type { MindMapData, NoteLang, UnitInfographic, UnitPageData, UnitStudyStep } from '@/lib/data/types'
import { syllabusUnitJsonLd } from '@/lib/seo/jsonld'

import { BilingualUnitShell } from '../notebook/BilingualUnitShell'
import { InfographicGallery } from '../notebook/InfographicGallery'
import { MindMap } from '../notebook/MindMap'
import { Breadcrumbs, JsonLd } from '../ui/Breadcrumbs'
import { paperTone } from '../ui/paper'

function StudySequenceRibbon({ steps, lang }: { steps: UnitStudyStep[]; lang: NoteLang }) {
  if (steps.length === 0) return null
  return (
    <section aria-labelledby={`study-seq-h-${lang}`} className="mt-10 rounded-card border-2 border-ink bg-paper-raised p-5 shadow-paper md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 id={`study-seq-h-${lang}`} className="font-display text-lg font-extrabold text-ink">
          {lang === 'hi' ? 'Unit Padhne ka Sequence' : 'Recommended Study Sequence'}
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

function UnitMindMapSection({ data, unitNumber }: { data: MindMapData | null | undefined; unitNumber: number }) {
  if (!data) return null
  return (
    <section id="unit-mind-map" className="mt-14 scroll-mt-24">
      <MindMap data={data} eyebrow={`Unit ${unitNumber} Mind Map`} />
    </section>
  )
}

function UnitInfographicsSection({ items, lang }: { items: UnitInfographic[]; lang: NoteLang }) {
  if (items.length === 0) return null
  return (
    <section id="unit-infographics" aria-labelledby={`unit-infographics-h-${lang}`} className="mt-14 scroll-mt-24">
      <p className="tag-skew"><span>{lang === 'hi' ? 'Visual Revision Pack' : 'Visual Revision Pack'}</span></p>
      <h2 id={`unit-infographics-h-${lang}`} className="mt-4 mb-6 text-[length:var(--text-h3)] font-extrabold">
        {lang === 'hi' ? 'Infographics & Cheat Sheets' : 'Infographics & Cheat Sheets'}
      </h2>
      <InfographicGallery items={items} />
    </section>
  )
}

function localizeInfographics(items: UnitInfographic[]): UnitInfographic[] {
  return items.map((item) => ({
    ...item,
    title: item.titleHinglish || item.title,
    caption: item.captionHinglish ?? item.caption,
    badge: item.badgeHinglish ?? item.badge,
  }))
}

export function UnitView({ data }: { data: UnitPageData }) {
  const { paper, unit } = data
  const tone = paperTone(paper.code)
  const infographicsEn = data.infographics ?? []
  const hasHiInfo = infographicsEn.some((item) => Boolean(item.titleHinglish || item.captionHinglish || item.badgeHinglish))
  const seqHi = data.studySequenceHinglish ?? []
  const hasHinglish = Boolean(
    data.overviewHinglish ||
      seqHi.length > 0 ||
      data.mindMapHinglish ||
      unit.topics.some((t) => t.summaryHinglish) ||
      hasHiInfo,
  )

  return (
    <>
      <JsonLd data={syllabusUnitJsonLd(data)} />
      <BilingualUnitShell
        paper={{ code: paper.code, title: paper.title, href: paper.href }}
        unitNumber={unit.number}
        unitTitle={unit.title}
        unitLocked={Boolean(unit.isLocked)}
        canonicalHref={unit.href}
        createdAt={data.createdAt ?? null}
        updatedAt={data.updatedAt ?? null}
        overviewEn={data.overview ?? null}
      overviewHi={data.overviewHinglish ?? null}
      topics={unit.topics.map((t) => ({
        title: t.title,
        href: t.href,
        caCount: t.caCount,
        pyqCount: t.pyqCount,
        hasNotes: t.hasNotes,
        isLocked: Boolean(t.isLocked),
        summaryEn: t.summary ?? null,
        summaryHi: t.summaryHinglish ?? null,
      }))}
      totalPyqs={data.totalPyqs ?? 0}
      breadcrumbsNode={
        <Breadcrumbs items={[{ label: 'Syllabus', href: '/syllabus' }, { label: tone.label, href: paper.href }, { label: unit.title, href: unit.href }]} />
      }
      sequenceEnNode={<StudySequenceRibbon steps={data.studySequence ?? []} lang="en" />}
      sequenceHiNode={seqHi.length > 0 ? <StudySequenceRibbon steps={seqHi} lang="hi" /> : null}
      mindMapEnNode={<UnitMindMapSection data={data.mindMap} unitNumber={unit.number} />}
      mindMapHiNode={data.mindMapHinglish ? <UnitMindMapSection data={data.mindMapHinglish} unitNumber={unit.number} /> : null}
      infographicsEnNode={<UnitInfographicsSection items={infographicsEn} lang="en" />}
      infographicsHiNode={hasHiInfo ? <UnitInfographicsSection items={localizeInfographics(infographicsEn)} lang="hi" /> : null}
      hasHinglish={hasHinglish}
    />
    </>
  )
}
