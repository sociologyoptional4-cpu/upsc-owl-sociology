import Link from 'next/link'
import type { ReactNode } from 'react'

type Props = {
  id?: string
  kicker?: string
  title: ReactNode
  action?: { label: string; href: string }
  as?: 'h1' | 'h2'
}

export function SectionHeading({ id, kicker, title, action, as: Tag = 'h2' }: Props) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-12">
      <div>
        {kicker && (
          <p className="tag-skew mb-5">
            <span>{kicker}</span>
          </p>
        )}
        <Tag id={id} className="text-[length:var(--text-h2)] font-medium">
          {title}
        </Tag>
      </div>
      {action && (
        <Link href={action.href} className="group text-sm font-semibold text-saffron-deep">
          <span className="link-draw">{action.label}</span> <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  )
}
