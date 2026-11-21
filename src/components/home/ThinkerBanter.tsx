import Image from 'next/image'

import { Reveal } from '../motion/Reveal'
import { getPortraitAsset } from '../thinkers/portrait-assets'

type Line = { slug: string; name: string; before: string; keyword: string; after: string; color: string }

// Our own lines: sociology concepts as light-hearted aspirant jokes.
const LINES: Line[] = [
  { slug: 'emile-durkheim', name: 'Durkheim', before: 'Mains se ek hafta pehle wala', keyword: 'anomie', after: 'bilkul normal hai.', color: 'text-green-700 dark:text-green-400' },
  { slug: 'max-weber', name: 'Weber', before: 'Roz subah 6 baje apne aap naya issue? Ye', keyword: 'rationalisation', after: 'hai, boss.', color: 'text-indigo-600 dark:text-indigo-400' },
  { slug: 'karl-marx', name: 'Marx', before: 'Notes free mein mil rahe hain, ab koi', keyword: 'class struggle', after: 'nahi.', color: 'text-red-600 dark:text-red-400' },
]

/** Thinkers "talking" in speech bubbles, alternating sides. */
export function ThinkerBanter() {
  return (
    <ul className="mx-auto max-w-4xl space-y-10">
      {LINES.map((line, index) => {
        const asset = getPortraitAsset(line.slug)
        const isFlipped = index % 2 === 1
        return (
          <Reveal as="li" key={line.slug} index={index} className={`flex items-end gap-4 ${isFlipped ? 'flex-row-reverse text-right' : ''}`}>
            {asset && (
              <div className="float-soft relative size-24 shrink-0 md:size-32" style={{ ['--float-delay' as string]: `${-index * 1.7}s` }}>
                <div aria-hidden className="absolute inset-x-2 bottom-0 top-6 rounded-full bg-saffron/60" />
                <Image src={asset.srcSm} alt={`Portrait of ${line.name}`} fill sizes="128px" className="duotone object-contain object-bottom" />
              </div>
            )}
            <p className={`relative rounded-3xl border-2 border-ink bg-paper px-5 py-4 text-base font-medium shadow-paper md:text-lg ${isFlipped ? 'rounded-br-none' : 'rounded-bl-none'}`}>
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-mute">{line.name}</span>
              {line.before} <strong className={`font-display text-xl font-extrabold md:text-2xl ${line.color}`}>{line.keyword}</strong> {line.after}
            </p>
          </Reveal>
        )
      })}
    </ul>
  )
}
