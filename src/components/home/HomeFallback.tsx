import Link from 'next/link'

const ISSUE_DATE = new Intl.DateTimeFormat('en-IN', {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'Asia/Kolkata',
})

type FloatCard = {
  kicker: string
  title: string
  tone: string
  position: string
  delay: string
}

// Sample cards only: real ones come from current-affairs in Phase 1.
const FLOAT_CARDS: FloatCard[] = [
  {
    kicker: 'P2 · Caste',
    title: 'Census mein jaati ganana: dominant caste ka sawaal',
    tone: 'border-l-paper-2',
    position: 'lg:left-0 lg:top-6',
    delay: '0s',
  },
  {
    kicker: 'Thinker',
    title: 'Weber: bureaucracy aur aaj ka digital state',
    tone: 'border-l-thinker',
    position: 'lg:right-0 lg:top-28',
    delay: '-2s',
  },
  {
    kicker: 'PYQ 2021 · 20M',
    title: 'Sanskritisation ek “limited” social mobility kyun hai?',
    tone: 'border-l-pyq',
    position: 'lg:left-16 lg:bottom-0',
    delay: '-4s',
  },
]

function FloatingCard({ card }: { card: FloatCard }) {
  return (
    <li
      className={`float-soft w-full rounded-card border border-rule border-l-4 ${card.tone} bg-paper-raised p-5 shadow-float lg:absolute lg:w-72 ${card.position}`}
      style={{ ['--float-delay' as string]: card.delay }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-mute">{card.kicker}</p>
      <p className="mt-2 font-display text-lg leading-snug">{card.title}</p>
    </li>
  )
}

/** Shown at "/" until a CMS page with slug "home" is published. */
export function HomeFallback() {
  const today = ISSUE_DATE.format(new Date())
  return (
    <>
      <div className="rule-double mx-auto mt-6 max-w-7xl px-5 md:px-8">
        <p className="py-3 text-xs uppercase tracking-[0.25em] text-ink-mute">
          Daily Issue · {today} · Phase 0 preview
        </p>
      </div>
      <section
        aria-labelledby="hero-heading"
        className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-[var(--space-section)] pt-12 md:grid-cols-[1.1fr_1fr] md:px-8 md:pt-20"
      >
        <div>
          <h1 id="hero-heading" className="text-[length:var(--text-hero)] font-medium">
            Society ko samjho, <em className="text-saffron-deep">roz ki khabron</em> se.
          </h1>
          <p className="mt-7 max-w-[46ch] text-[length:var(--text-lg)] text-ink-soft">
            UPSC Sociology Optional ke notes, thinkers aur current affairs, har subah apne aap
            syllabus topic se jude hue.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/admin"
              className="rounded-chip bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform duration-300 ease-out-expo hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Admin mein &quot;home&quot; page banao →
            </Link>
          </div>
        </div>
        <ul aria-label="Sample stories" className="relative flex flex-col gap-4 lg:block lg:h-[28rem]">
          {FLOAT_CARDS.map((card) => (
            <FloatingCard key={card.title} card={card} />
          ))}
        </ul>
      </section>
    </>
  )
}
