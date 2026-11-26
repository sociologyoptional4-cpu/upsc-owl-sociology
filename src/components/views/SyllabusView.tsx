import Link from 'next/link'

import type { SyllabusPaper } from '@/lib/data/types'

import { ContentGuard } from '../ContentGuard'
import { OwlStudyMascot } from '../mascots/OwlMascot'
import { SyllabusDmcaFooter } from '../syllabus/SyllabusProvenance'
import { UnitList } from '../syllabus/UnitList'
import { PageHeader } from '../ui/PageHeader'
import { paperTone } from '../ui/paper'

export function SyllabusView({ data }: { data: SyllabusPaper[] }) {
  return (
    <ContentGuard canonicalPath="/syllabus">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative">
          <PageHeader
            kicker="Syllabus Mapped · Full Notes"
            title="UPSC Sociology Optional, ek jagah"
            highlight="ek jagah"
            description={<>Har topic ke saath peele dots batate hain ki usse kitni recent khabrein judi hain. Jitne zyada dots, utna &quot;live&quot; topic.</>}
          >
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <nav aria-label="Papers" className="flex flex-wrap">
                {data.map((paper) => (
                  <a key={paper.code} href={`#${paper.slug}`} className="-ml-px border border-ink bg-paper px-5 py-2 text-sm font-semibold transition-colors first:ml-0 hover:bg-ink hover:text-paper">
                    {paperTone(paper.code).label}
                  </a>
                ))}
              </nav>
              <div className="inline-flex items-center gap-2 rounded-chip border border-ink bg-paper-raised px-3 py-1 shadow-paper">
                <OwlStudyMascot state="idle" className="h-9 w-9 shrink-0" />
                <span className="font-display text-xs font-bold text-ink">25 Units · 98 Chapters · 597 PYQs</span>
              </div>
            </div>
          </PageHeader>
        </div>

        {data.map((paper) => {
          const tone = paperTone(paper.code)
          return (
            <section key={paper.code} id={paper.slug} aria-labelledby={`${paper.slug}-h`} className="mt-[var(--space-section)] scroll-mt-24">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="tag-skew"><span>{tone.label}</span></p>
                  <h2 id={`${paper.slug}-h`} className="mt-4 max-w-[24ch] text-[length:var(--text-h3)] font-extrabold">{paper.title.replace(/^Paper \d:\s*/, '')}</h2>
                </div>
                <Link href={paper.href} className="group text-sm font-semibold text-saffron-deep"><span className="link-draw">Paper overview</span> →</Link>
              </div>
              <UnitList units={paper.units} accent={tone.text} />
            </section>
          )
        })}
        <SyllabusDmcaFooter canonicalHref="/syllabus" title="UPSC Sociology Optional Syllabus" />
      </div>
    </ContentGuard>
  )
}
