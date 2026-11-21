import type { ReactNode } from 'react'

type Props = {
  kicker: string
  title: string
  /** Part of the title to paint red (must appear in `title`). */
  highlight?: string
  description?: ReactNode
  children?: ReactNode
  align?: 'left' | 'center'
}

function renderTitle(title: string, highlight?: string): ReactNode {
  if (!highlight || !title.includes(highlight)) return title
  const [before, after] = title.split(highlight)
  return (
    <>
      {before}
      <span className="text-saffron-deep">{highlight}</span>
      {after}
    </>
  )
}

/** Inner-page header in the D12 style: black skewed label, bold title with a red highlight. */
export function PageHeader({ kicker, title, highlight, description, children, align = 'left' }: Props) {
  const isCenter = align === 'center'
  return (
    <header className={`pt-12 md:pt-16 ${isCenter ? 'text-center' : ''}`}>
      <p className="tag-skew"><span>{kicker}</span></p>
      <h1 className={`mt-6 max-w-[22ch] text-[length:var(--text-h2)] font-extrabold ${isCenter ? 'mx-auto' : ''}`}>
        {renderTitle(title, highlight)}
      </h1>
      {description && (
        <p className={`mt-4 max-w-[58ch] text-[length:var(--text-lg)] text-ink-soft ${isCenter ? 'mx-auto' : ''}`}>{description}</p>
      )}
      {children}
    </header>
  )
}
