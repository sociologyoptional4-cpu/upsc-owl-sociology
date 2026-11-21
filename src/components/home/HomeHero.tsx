import Link from 'next/link'

import type { HomeData } from '@/lib/data/types'

import { CaCard } from '../cards/CaCard'
import { Portrait } from '../thinkers/Portrait'
import { formatDay, formatWeekday, pluralize } from '../ui/format'

export function HomeHero({ data }: { data: HomeData }) {
  const { issue, featuredThinker, latestCA } = data
  const floating = latestCA.slice(0, 2)

  return (
    <>
      <div className="mx-auto mt-6 max-w-7xl px-5 md:px-8">
        <p className="flex flex-wrap gap-x-4 gap-y-1 border-b border-rule py-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-mute" data-dynamic>
          {issue ? (
            <>
              <span className="text-ink">Daily Issue #{issue.number}</span>
              <span>{formatWeekday(issue.date)}, {formatDay(issue.date)}</span>
              <span>{pluralize(issue.count, 'story', 'stories')} syllabus se judi</span>
            </>
          ) : (
            <span>Pehla issue jald aa raha hai</span>
          )}
        </p>
      </div>

      <section aria-labelledby="hero-heading" className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-[var(--space-section)] pt-10 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:pt-16">
        <div>
          <h1 id="hero-heading" className="text-[length:var(--text-hero)] font-extrabold">
            Society ko samjho, <span className="text-saffron-deep">roz ki khabron</span> se!!
          </h1>
          <p className="mt-7 max-w-[46ch] text-[length:var(--text-lg)] text-ink-soft">
            UPSC Sociology Optional ke notes, thinkers aur current affairs. Har subah nayi khabrein apne aap syllabus topic se jud jaati hain.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={issue?.href ?? '/current-affairs'}
              className="btn-cta rounded-md px-6 py-3 text-sm transition-transform duration-300 ease-out-expo hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Aaj ka issue padho →
            </Link>
            <Link
              href="/syllabus"
              className="rounded-md border border-ink px-6 py-3 text-sm font-semibold transition-colors hover:bg-ink hover:text-paper"
            >
              Syllabus map dekho
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:h-[34rem]">
          {featuredThinker && (
            <Link
              href={featuredThinker.href}
              className="group relative mx-auto block w-[62%] lg:absolute lg:right-6 lg:top-0 lg:w-[56%]"
              aria-label={`Thinker of the week: ${featuredThinker.name}`}
            >
              <div aria-hidden className="absolute inset-x-[6%] bottom-0 top-[22%] rounded-full bg-saffron/70" />
              <div className="float-soft relative" style={{ ['--float-delay' as string]: '-1s' }}>
                <Portrait thinker={featuredThinker} size="lg" priority sizes="(min-width: 1024px) 320px, 60vw" />
              </div>
              <span className="absolute -right-3 top-[30%] rounded-2xl rounded-bl-none border-2 border-ink bg-paper px-3 py-1.5 text-xs font-semibold shadow-paper">
                Thinker of the week · {featuredThinker.name}
              </span>
            </Link>
          )}
          <ul aria-label="Aaj ki top stories" className="mt-6 grid gap-4 lg:mt-0 lg:block">
            {floating.map((item, index) => (
              <li
                key={item.id}
                className={`float-soft lg:absolute lg:w-72 ${index === 0 ? 'lg:left-0 lg:top-24' : 'lg:bottom-4 lg:left-16'}`}
                style={{ ['--float-delay' as string]: `${-2.5 * (index + 1)}s` }}
              >
                <CaCard item={item} variant="compact" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
