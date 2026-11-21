import type { ThinkerCard } from '@/lib/data/types'

import { ThinkerTile } from '../cards/ThinkerTile'
import { Reveal } from '../motion/Reveal'
import { EmptyState } from '../ui/Badges'
import { PageHeader } from '../ui/PageHeader'

export function ThinkersView({ data }: { data: ThinkerCard[] }) {
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <PageHeader
        kicker="Thinkers"
        title="Jinke bina Sociology adhoori hai"
        highlight="Sociology"
        description="Har thinker ke key ideas, unse jude syllabus topics, aur aaj ki khabron mein unki jhalak."
      />
      {data.length === 0 ? (
        <div className="mt-12"><EmptyState title="Thinkers jald aa rahe hain" body="Pehle notes publish ho rahe hain." /></div>
      ) : (
        <ul className="mt-16 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {data.map((thinker, index) => (
            <Reveal as="li" key={thinker.slug} index={index % 4} className={index % 2 === 1 ? 'md:translate-y-12' : ''}>
              <ThinkerTile thinker={thinker} floatDelay={(index % 4) * 1.5} />
            </Reveal>
          ))}
        </ul>
      )}
    </div>
  )
}
