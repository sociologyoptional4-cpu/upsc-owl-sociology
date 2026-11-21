import Link from 'next/link'

import type { HeroBlock as HeroBlockData } from '@/payload-types'
import { isExternalHref, safeHref } from '@/lib/href'

type Props = { block: HeroBlockData }

export function HeroBlockComponent({ block }: Props) {
  const isMasthead = block.variant === 'masthead'
  const headingSize = isMasthead ? 'text-[length:var(--text-hero)]' : 'text-[length:var(--text-h2)]'

  return (
    <section className="mx-auto max-w-7xl px-5 pb-10 pt-14 md:px-8 md:pt-24">
      {block.kicker && (
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-saffron-deep">
          {block.kicker}
        </p>
      )}
      <h1 className={`${headingSize} max-w-[16ch] font-medium`}>{block.heading}</h1>
      {block.subheading && (
        <p className="mt-6 max-w-[52ch] text-[length:var(--text-lg)] text-ink-soft">
          {block.subheading}
        </p>
      )}
      {block.actions && block.actions.length > 0 && (
        <div className="mt-9 flex flex-wrap gap-3">
          {block.actions.map((action, index) => {
            const href = safeHref(action.href)
            if (!href) return null
            const isPrimary = index === 0
            const external = isExternalHref(href)
            return (
              <Link
                key={action.id ?? action.label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={
                  isPrimary
                    ? 'rounded-chip bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform duration-300 ease-out-expo hover:-translate-y-0.5 active:scale-[0.98]'
                    : 'rounded-chip border border-ink/25 px-6 py-3 text-sm font-medium transition-colors hover:border-ink hover:bg-paper-raised'
                }
              >
                {action.label}
              </Link>
            )
          })}
        </div>
      )}
    </section>
  )
}
