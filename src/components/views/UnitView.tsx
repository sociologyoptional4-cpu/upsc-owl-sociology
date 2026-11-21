import Link from 'next/link'

import type { UnitPageData } from '@/lib/data/types'

import { Reveal } from '../motion/Reveal'
import { EmptyState } from '../ui/Badges'
import { Breadcrumbs } from '../ui/Breadcrumbs'
import { paperTone } from '../ui/paper'

export function UnitView({ data }: { data: UnitPageData }) {
  const { paper, unit } = data
  const tone = paperTone(paper.code)
  return (
    <div className="mx-auto max-w-7xl px-5 pt-10 md:px-8 md:pt-16">
      <Breadcrumbs items={[{ label: 'Syllabus', href: '/syllabus' }, { label: tone.label, href: paper.href }, { label: unit.title, href: unit.href }]} />
      <header className="mt-8 grid gap-4 md:grid-cols-[auto_1fr] md:items-end md:gap-8">
        <span className={`font-display text-[length:var(--text-hero)] font-extrabold leading-none ${tone.text}`}>{String(unit.number).padStart(2, '0')}</span>
        <div>
          <p className="tag-skew"><span>{tone.label} · Unit {unit.number}</span></p>
          <h1 className="mt-4 text-[length:var(--text-h2)] font-extrabold">{unit.title}</h1>
        </div>
      </header>
      {unit.topics.length === 0 ? (
        <div className="mt-12"><EmptyState title="Topics jald aa rahe hain" body="Is unit ke notes abhi taiyaar ho rahe hain." /></div>
      ) : (
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {unit.topics.map((topic, index) => (
            <Reveal as="li" key={topic.href} index={index}>
              <article className="group relative h-full rounded-card border-2 border-ink bg-paper-raised p-6 shadow-paper transition-[transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-float">
                <span aria-hidden className={`block h-1 w-10 rounded-full ${tone.bg}`} />
                <h2 className="mt-4 font-display text-xl font-bold leading-snug">
                  <Link href={topic.href} className="link-draw after:absolute after:inset-0 after:content-['']">{topic.title}</Link>
                </h2>
                <p className="mt-6 text-sm font-semibold text-saffron-deep">Padho → <span className="font-normal text-ink-mute">· {topic.caCount} linked {topic.caCount === 1 ? 'story' : 'stories'}</span></p>
              </article>
            </Reveal>
          ))}
        </ul>
      )}
    </div>
  )
}
