'use client'

import { useEffect, useRef, type ElementType, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  as?: ElementType
  index?: number
  className?: string
}

/**
 * Fades/lifts content in once when it enters the viewport (CSS in global.css,
 * compositor-only). Reduced-motion users see it instantly via the media query.
 */
export function Reveal({ children, as: Tag = 'div', index = 0, className }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          node.dataset.revealed = 'true'
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} data-reveal="" className={className} style={{ ['--i' as string]: index }}>
      {children}
    </Tag>
  )
}
