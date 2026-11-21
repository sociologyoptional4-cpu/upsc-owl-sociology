'use client'

import { useRef, type PointerEvent, type ReactNode } from 'react'

const MAX_TILT_DEG = 9

/** CSS-3D tilt toward the pointer (no WebGL). Mouse/pen only; touch keeps native scroll. */
export function TiltCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    const node = ref.current
    if (!node || event.pointerType === 'touch') return
    const rect = node.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    node.style.setProperty('--ry', `${(x * MAX_TILT_DEG).toFixed(2)}deg`)
    node.style.setProperty('--rx', `${(-y * MAX_TILT_DEG).toFixed(2)}deg`)
  }

  const handleLeave = () => {
    ref.current?.style.setProperty('--rx', '0deg')
    ref.current?.style.setProperty('--ry', '0deg')
  }

  return (
    <div ref={ref} onPointerMove={handleMove} onPointerLeave={handleLeave} className={`tilt ${className}`}>
      {children}
    </div>
  )
}
