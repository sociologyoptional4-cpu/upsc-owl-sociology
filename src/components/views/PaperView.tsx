import type { PaperPageData } from '@/lib/data/types'

import { ContentGuard } from '../ContentGuard'
import { SyllabusDmcaFooter } from '../syllabus/SyllabusProvenance'
import { UnitList } from '../syllabus/UnitList'
import { Breadcrumbs } from '../ui/Breadcrumbs'
import { paperTone } from '../ui/paper'

export function PaperView({ data }: { data: PaperPageData }) {
  const tone = paperTone(data.code)
  const topicCount = data.units.reduce((sum, unit) => sum + unit.topics.length, 0)
  return (
    <ContentGuard canonicalPath={data.href}>
      <div className="mx-auto max-w-7xl px-5 pt-10 md:px-8 md:pt-16">
        <Breadcrumbs items={[{ label: 'Syllabus', href: '/syllabus' }, { label: tone.label, href: data.href }]} />
        <header className="relative mt-8 overflow-hidden rounded-sheet bg-neutral-950 px-7 py-12 text-white md:px-12 md:py-16">
          <span aria-hidden className="absolute -right-6 -top-20 font-display text-[16rem] font-extrabold leading-none text-saffron opacity-20">{data.code.slice(1)}</span>
          <p className="inline-block rounded-chip bg-red-600 px-3 py-1 text-xs font-semibold">{tone.label}</p>
          <h1 className="relative mt-4 max-w-[20ch] text-[length:var(--text-h2)] font-extrabold uppercase">{data.title.replace(/^Paper \d:\s*/, '')}</h1>
          <p className="relative mt-4 opacity-80">{data.units.length} units · {topicCount} topics</p>
        </header>
        <div className="mt-12">
          <UnitList units={data.units} accent={tone.text} />
        </div>
        <SyllabusDmcaFooter canonicalHref={data.href} title={data.title} />
      </div>
    </ContentGuard>
  )
}
