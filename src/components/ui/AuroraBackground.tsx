'use client'

import { useRef, type HTMLAttributes, type MouseEvent, type ReactNode } from 'react'

/**
 * GPU-accelerated drifting Aurora gradient layer (emerald, cyan, violet)
 * using wide soft radial falloff (without full-screen blur filters) for smooth scrolling.
 */
export function AuroraBackground({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none fixed inset-0 z-0 overflow-hidden ${className}`.trim()}
    >
      <div
        className="aurora-blob-1 transform-gpu absolute -left-24 -top-24 h-[460px] w-[460px] rounded-full opacity-[0.12]"
        style={{
          background:
            'radial-gradient(circle, rgba(16, 185, 129, 0.75) 0%, rgba(16, 185, 129, 0.28) 35%, rgba(16, 185, 129, 0) 70%)',
        }}
      />
      <div
        className="aurora-blob-2 transform-gpu absolute -right-24 top-1/4 h-[500px] w-[500px] rounded-full opacity-[0.12]"
        style={{
          background:
            'radial-gradient(circle, rgba(6, 182, 212, 0.7) 0%, rgba(6, 182, 212, 0.24) 35%, rgba(6, 182, 212, 0) 70%)',
        }}
      />
      <div
        className="aurora-blob-3 transform-gpu absolute bottom-[-10%] left-1/3 h-[480px] w-[480px] rounded-full opacity-[0.10]"
        style={{
          background:
            'radial-gradient(circle, rgba(139, 92, 246, 0.7) 0%, rgba(139, 92, 246, 0.24) 35%, rgba(139, 92, 246, 0) 70%)',
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
