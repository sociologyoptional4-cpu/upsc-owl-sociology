import Link from 'next/link'

import type { ThinkerCard } from '@/lib/data/types'

import { TiltCard } from '../motion/TiltCard'
import { Portrait } from '../thinkers/Portrait'

/** Portrait pops out of its frame (overlap = depth), tilts toward the cursor, floats gently. */
export function ThinkerTile({ thinker, floatDelay = 0 }: { thinker: ThinkerCard; floatDelay?: number }) {
  return (
    <div className="float-soft" style={{ ['--float-delay' as string]: `${-floatDelay}s` }}>
      <TiltCard className="group relative">
        <Link href={thinker.href} className="block [transform-style:preserve-3d] focus-visible:outline-offset-8">
          <div className="relative pt-10 [transform-style:preserve-3d]">
            <div aria-hidden className="absolute inset-x-0 bottom-0 top-16 rounded-card border-2 border-ink bg-paper-raised shadow-paper transition-shadow duration-500 group-hover:shadow-float" />
            <div aria-hidden className="absolute left-1/2 top-14 aspect-square w-[70%] -translate-x-1/2 rounded-full bg-saffron transition-transform duration-500 ease-out-expo group-hover:scale-105" />
            <div className="tilt-pop relative mx-auto w-[78%] transition-transform duration-500 ease-out-expo group-hover:-translate-y-2">
              <Portrait thinker={thinker} />
            </div>
            <div className="relative px-5 pb-5 pt-3">
              <p className="font-display text-xl font-bold leading-tight">{thinker.name}</p>
              {thinker.era && <p className="mt-0.5 text-xs text-ink-mute">{thinker.era}</p>}
              {thinker.keyIdeas.length > 0 && (
                <p className="mt-2 line-clamp-1 text-xs font-medium text-saffron-deep">{thinker.keyIdeas.slice(0, 3).join(' · ')}</p>
              )}
            </div>
          </div>
        </Link>
      </TiltCard>
    </div>
  )
}
