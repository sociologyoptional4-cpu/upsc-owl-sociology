import Link from 'next/link'

import { TELEGRAM_MENTORSHIP_URL, TELEGRAM_URL } from '../ui/links'

const HIGHLIGHTS = ['Roz Subah Daily Issue', 'Free Revision Mind Maps', 'Topper Answer Frameworks']

/** High-visibility mid-page Telegram CTA card encouraging community joins on mobile and desktop. */
export function TelegramJoinBanner() {
  return (
    <section aria-labelledby="telegram-mid-heading" className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="relative overflow-hidden rounded-sheet border-2 border-ink bg-paper-raised p-6 shadow-float md:p-12">
        <div aria-hidden className="absolute -right-12 -top-12 size-44 rounded-full bg-[#229ED9]/15" />
        <div aria-hidden className="absolute -bottom-14 left-1/3 size-36 rounded-full bg-pastel-yellow/70" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-chip border border-ink bg-[#229ED9]/12 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-ink">
              <span className="grid size-5 place-items-center rounded-full bg-[#229ED9] text-white" aria-hidden>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.9 4.6a1 1 0 0 0-1.1-.2L2.8 11.6a1 1 0 0 0 .1 1.9l4.4 1.4 1.7 5.2a1 1 0 0 0 1.7.4l2.5-2.6 4.5 3.3a1 1 0 0 0 1.6-.6l2.9-14.9a1 1 0 0 0-.3-1.1Zm-3.6 3.5-8.4 7.6-.4 3.1-1.3-4.1 10.1-6.6Z" />
                </svg>
              </span>
              Free Daily Updates · Telegram
            </div>

            <h2 id="telegram-mid-heading" className="mt-3 font-display text-2xl font-extrabold leading-tight text-ink md:text-4xl">
              Sociology ke Daily Notes &amp; Current Affairs — Seedha Telegram Par!
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
              Ek bhi newspaper article, sociological thinker linkage, ya revision mind map miss na ho. Free UPSC OWL Sociology channel par roz updates aur PDF summaries paayein.
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="rounded-chip border border-ink/30 bg-paper px-3 py-1 text-xs font-bold text-ink"
                >
                  ✓ {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-md border-2 border-ink bg-[#229ED9] px-6 py-4 text-center text-sm font-extrabold text-white shadow-paper transition-transform duration-300 ease-out-expo hover:-translate-y-0.5 active:scale-[0.98] md:text-base"
            >
              <svg aria-hidden width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.9 4.6a1 1 0 0 0-1.1-.2L2.8 11.6a1 1 0 0 0 .1 1.9l4.4 1.4 1.7 5.2a1 1 0 0 0 1.7.4l2.5-2.6 4.5 3.3a1 1 0 0 0 1.6-.6l2.9-14.9a1 1 0 0 0-.3-1.1Zm-3.6 3.5-8.4 7.6-.4 3.1-1.3-4.1 10.1-6.6Z" />
              </svg>
              <span>Telegram Channel Join Karo (Free) →</span>
            </Link>
            <Link
              href={TELEGRAM_MENTORSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-ink bg-pastel-yellow px-5 py-3 text-center text-xs font-extrabold text-ink transition-colors hover:bg-saffron md:text-sm"
            >
              <span>Direct Mentorship DM ↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
