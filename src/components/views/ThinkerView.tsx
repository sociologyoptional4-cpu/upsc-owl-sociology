import type { ThinkerDetail } from '@/lib/data/types'

import { RenderBlocks } from '@/blocks/RenderBlocks'

import { CaCard } from '../cards/CaCard'
import { Reveal } from '../motion/Reveal'
import { Portrait } from '../thinkers/Portrait'
import { getPortraitAsset } from '../thinkers/portrait-assets'
import { Breadcrumbs } from '../ui/Breadcrumbs'
import { TopicChipLink } from '../ui/Chips'

const IDEA_TINTS = ['bg-pastel-lavender', 'bg-pastel-yellow', 'bg-pastel-mint', 'bg-pastel-pink']

export function ThinkerView({ data }: { data: ThinkerDetail }) {
  const credit = getPortraitAsset(data.slug)?.attribution
  return (
    <div className="mx-auto max-w-7xl px-5 pt-10 md:px-8 md:pt-16">
      <Breadcrumbs items={[{ label: 'Thinkers', href: '/thinkers' }, { label: data.name, href: data.href }]} />

      <header className="relative mt-24 grid items-end gap-10 rounded-sheet border-2 border-ink bg-paper-raised px-7 shadow-float md:mt-32 md:grid-cols-[0.8fr_1.2fr] md:px-12">
        <figure className="relative -mt-24 md:-mt-32">
          <div aria-hidden className="absolute inset-x-[8%] bottom-[6%] top-[14%] rounded-full bg-saffron" />
          <div className="float-soft relative"><Portrait thinker={data} size="lg" priority /></div>
          {credit && <figcaption className="pb-3 text-[10px] text-ink-mute">{credit}</figcaption>}
        </figure>
        <div className="pb-10 md:pb-14">
          <p className="tag-skew"><span>Thinker</span></p>
          <h1 className="mt-5 text-[length:var(--text-hero)] font-extrabold leading-[0.95]">{data.name}</h1>
          {data.era && <p className="mt-3 text-lg font-semibold text-saffron-deep">{data.era}</p>}
        </div>
      </header>

      {data.keyIdeas.length > 0 && (
        <section aria-labelledby="ideas-h" className="mt-[var(--space-section)]">
          <h2 id="ideas-h" className="mb-8 text-[length:var(--text-h3)] font-extrabold">Key <span className="text-saffron-deep">ideas</span></h2>
          <ol className="grid gap-5 md:grid-cols-3">
            {data.keyIdeas.map((idea, index) => (
              <Reveal as="li" key={idea} index={index} className={`relative overflow-hidden rounded-2xl p-6 pb-16 ${IDEA_TINTS[index % IDEA_TINTS.length]}`}>
                <p className="font-display text-xl font-bold leading-snug">{idea}</p>
                <span aria-hidden className="absolute -bottom-3 right-3 font-display text-7xl font-extrabold text-ink/10">{String(index + 1).padStart(2, '0')}</span>
              </Reveal>
            ))}
          </ol>
        </section>
      )}

      <div className="mt-[var(--space-section)] grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <div className="min-w-0">
          {data.layout.length > 0 && <div className="blocks-flush"><RenderBlocks blocks={data.layout} /></div>}
          {data.latestCA.length > 0 && (
            <section aria-labelledby="thinker-ca-h" className="mt-12">
              <h2 id="thinker-ca-h" className="mb-8 text-[length:var(--text-h3)] font-extrabold">Aaj ki khabron mein {data.name.split(' ').slice(-1)[0]}</h2>
              <ul className="grid gap-x-6 gap-y-12 md:grid-cols-2">
                {data.latestCA.map((item) => <li key={item.id}><CaCard item={item} /></li>)}
              </ul>
            </section>
          )}
        </div>
        {data.topics.length > 0 && (
          <aside className="rounded-card border-2 border-ink bg-paper-raised p-5 shadow-paper lg:sticky lg:top-24 lg:self-start">
            <p className="mb-3 text-sm font-bold">Syllabus mein kahan</p>
            <div className="flex flex-wrap gap-1.5">{data.topics.map((t) => <TopicChipLink key={t.href} topic={t} />)}</div>
          </aside>
        )}
      </div>
    </div>
  )
}
