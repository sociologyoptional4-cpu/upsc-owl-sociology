import Link from 'next/link'

import type { ThinkerCard } from '@/lib/data/types'

import { Reveal } from '../motion/Reveal'
import { Portrait } from '../thinkers/Portrait'

export function ThinkerSpotlight({ thinker }: { thinker: ThinkerCard }) {
  return (
    <section aria-labelledby="spotlight-heading" className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="relative grid items-end gap-10 overflow-visible rounded-sheet bg-paper-sunk px-7 pt-10 md:grid-cols-[0.9fr_1.1fr] md:px-12">
        <div className="relative -mt-24 md:-mt-32">
          <Portrait thinker={thinker} size="lg" sizes="(min-width: 768px) 420px, 80vw" />
        </div>
        <div className="pb-10 md:pb-14">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-thinker">Thinker of the week</p>
          <h2 id="spotlight-heading" className="mt-2 text-[length:var(--text-h2)] font-medium">{thinker.name}</h2>
          {thinker.era && <p className="mt-1 text-sm text-ink-mute">{thinker.era}</p>}
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {thinker.keyIdeas.slice(0, 3).map((idea, index) => (
              <Reveal as="li" key={idea} index={index} className="rounded-card border border-rule bg-paper-raised p-4 font-display text-lg leading-snug shadow-paper">
                {idea}
              </Reveal>
            ))}
          </ul>
          <Link href={thinker.href} className="group mt-8 inline-block text-sm font-medium">
            <span className="link-draw">Poora thinker note padho</span> <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
