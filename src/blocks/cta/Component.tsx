import Link from 'next/link'

import type { CtaBlock as CtaBlockData } from '@/payload-types'
import { isExternalHref, safeHref } from '@/lib/href'

type Props = { block: CtaBlockData }

export function CtaBlockComponent({ block }: Props) {
  const href = safeHref(block.href)
  const isTelegram = block.style === 'telegram'
  const external = href ? isExternalHref(href) : false

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <div
        className={`relative overflow-hidden rounded-sheet px-7 py-12 md:px-14 md:py-16 ${
          isTelegram ? 'bg-[#1f6f9f] text-white' : 'bg-ink text-paper'
        }`}
      >
        <div aria-hidden className="absolute -right-16 -top-16 size-64 rounded-full border border-current opacity-15" />
        <div aria-hidden className="absolute -right-4 top-10 size-40 rounded-full border border-current opacity-10" />
        <h2 className="relative max-w-[20ch] text-[length:var(--text-h2)]">{block.heading}</h2>
        {block.body && <p className="relative mt-4 max-w-[50ch] opacity-80">{block.body}</p>}
        {href && (
          <Link
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="relative mt-8 inline-flex items-center gap-2 rounded-chip bg-saffron px-6 py-3 text-sm font-semibold text-ink transition-transform duration-300 ease-out-expo hover:-translate-y-0.5 active:scale-[0.98]"
          >
            {block.label} <span aria-hidden>→</span>
          </Link>
        )}
      </div>
    </section>
  )
}
