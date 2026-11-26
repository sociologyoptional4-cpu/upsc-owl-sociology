import type { HomeData } from '@/lib/data/types'

import { HomeHero } from '../home/HomeHero'
import { HowItWorks } from '../home/HowItWorks'
import { LatestFeed } from '../home/LatestFeed'
import { SyllabusBento } from '../home/SyllabusBento'
import { ThinkerBanter } from '../home/ThinkerBanter'
import { ThinkerSpotlight } from '../home/ThinkerSpotlight'
import { CtaBlockComponent } from '@/blocks/cta/Component'
import { TELEGRAM_MENTORSHIP_URL, TELEGRAM_URL } from '../ui/links'
import { SectionHeading } from '../ui/SectionHeading'

export function HomeView({ data }: { data: HomeData }) {
  return (
    <>
      <HomeHero data={data} />

      <section aria-labelledby="latest-heading" className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="latest-heading"
          kicker="Latest"
          title="Khabrein jo exam mein kaam aayengi"
          action={{ label: 'Poora archive', href: '/current-affairs' }}
        />
        <LatestFeed items={data.latestCA} />
      </section>

      <section aria-labelledby="syllabus-heading" className="mx-auto mt-[var(--space-section)] max-w-7xl px-5 md:px-8">
        <SectionHeading id="syllabus-heading" kicker="Syllabus Mapped · Full Notes" title="Do papers, ek jaal" action={{ label: 'Poora syllabus & full notes', href: '/syllabus' }} />
        <SyllabusBento papers={data.syllabus} />
      </section>

      {data.featuredThinker && (
        <div className="mt-[calc(var(--space-section)+6rem)]">
          <ThinkerSpotlight thinker={data.featuredThinker} />
        </div>
      )}

      <section aria-label="Thinkers ki baatein" className="mt-[var(--space-section)] px-5 md:px-8">
        <ThinkerBanter />
      </section>

      <div className="mt-[var(--space-section)]">
        <HowItWorks />
      </div>

      <div className="mt-[var(--space-section)]">
        <CtaBlockComponent
          block={{
            blockType: 'cta',
            heading: 'Roz ka issue, Telegram pe bhi.',
            body: 'Channel pe daily updates aur discussion milte hain — aur direct contact ya mentorship ke liye seedha DM karo.',
            label: 'Telegram join karo',
            href: TELEGRAM_URL,
            style: 'telegram',
          }}
          secondaryAction={{ label: 'Direct Contact / Mentorship', href: TELEGRAM_MENTORSHIP_URL }}
        />
      </div>
    </>
  )
}
