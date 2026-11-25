import Link from 'next/link'

import type { SyllabusPaper } from '@/lib/data/types'

import { SyllabusDmcaFooter } from '../syllabus/SyllabusProvenance'
import { UnitList } from '../syllabus/UnitList'
import { PageHeader } from '../ui/PageHeader'
import { paperTone } from '../ui/paper'

export function SyllabusView({ data }: { data: SyllabusPaper[] }) {
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <PageHeader
        kicker="Syllabus"
        title="UPSC Sociology Optional, ek jagah"
        highlight="ek jagah"
        description={<>Har topic ke saath peele dots batate hain ki usse kitni recent khabrein judi hain. Jitne zyada dots, utna &quot;live&quot; topic.</>}
      >
        <nav aria-label="Papers" className="mt-8 flex flex-wrap">
          {data.map((paper) => (
            <a key={paper.code} href={`#${paper.slug}`} className="-ml-px border border-ink bg-paper px-5 py-2 text-sm font-semibold transition-colors first:ml-0 hover:bg-ink hover:text-paper">
              {paperTone(paper.code).label}
            </a>
          ))}
        </nav>
      </PageHeader>

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
  )
}
