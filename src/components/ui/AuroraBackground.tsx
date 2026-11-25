'use client'

import { useRef, type HTMLAttributes, type MouseEvent, type ReactNode } from 'react'

/**
 * GPU-accelerated drifting Aurora gradient layer (emerald, cyan, violet)
 * positioned behind site content at subtle opacity so typography stays razor-sharp.
 */
export function AuroraBackground({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none fixed inset-0 z-0 overflow-hidden ${className}`.trim()}
    >
      <div
        className="aurora-blob-1 transform-gpu absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full opacity-[0.14] blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.9) 0%, rgba(16, 185, 129, 0) 70%)',
        }}
      />
      <div
        className="aurora-blob-2 transform-gpu absolute -right-24 top-1/4 h-[460px] w-[460px] rounded-full opacity-[0.14] blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.85) 0%, rgba(6, 182, 212, 0) 70%)',
        }}
      />
      <div
        className="aurora-blob-3 transform-gpu absolute bottom-[-10%] left-1/3 h-[440px] w-[440px] rounded-full opacity-[0.12] blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.85) 0%, rgba(139, 92, 246, 0) 70%)',
        }}
      />
    </div>
  )
}

interface SpotlightCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  glowColor?: string
}

/**
 * Cursor-reactive spotlight container using direct DOM CSS variables so pointer moves
 * trigger zero React re-renders.
 */
export function SpotlightCard({
  children,
  className = '',
  glowColor = 'rgba(16, 185, 129, 0.2)',
  style,
  onMouseMove,
  ...rest
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null)

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = cardRef.current
    if (el) {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
      el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
    }
    onMouseMove?.(e)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={{ ...style, ['--spot-color' as string]: glowColor }}
      className={`spotlight-card ${className}`.trim()}
      {...rest}
    >
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  )
}
