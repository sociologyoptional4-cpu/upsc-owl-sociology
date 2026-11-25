'use client'

import { motion, useReducedMotion } from 'motion/react'

const SPARKLE_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315]

/**
 * Spring-animated circular radial gauge (0-100%) with emerald aurora shift
 * and an 8-particle sparkle burst when mastery reaches 90%+.
 */
export function MasteryRadialGauge({ pct, label = 'Mastery' }: { pct: number; label?: string }) {
  const reduced = useReducedMotion()
  const clamped = Math.min(100, Math.max(0, Math.round(pct)))
  const radius = 28
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference * (1 - clamped / 100)
  const strokeColor = clamped >= 80 ? '#10b981' : clamped >= 40 ? '#8b5cf6' : '#f59e0b'

  return (
    <div className="relative flex items-center gap-3">
      <div className="relative flex h-16 w-16 items-center justify-center">
        {clamped >= 90 &&
          !reduced &&
          SPARKLE_ANGLES.map((deg, idx) => {
            const rad = (deg * Math.PI) / 180
            return (
              <motion.span
                key={`${deg}-${clamped}`}
                aria-hidden
                initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: [1, 1, 0],
                  scale: [0.4, 1.2, 0.3],
                  x: Math.cos(rad) * 32,
                  y: Math.sin(rad) * 32,
                }}
                transition={{ duration: 0.85, delay: idx * 0.04, ease: 'easeOut' }}
                className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-emerald-500"
              />
            )
          })}

        <svg viewBox="0 0 72 72" className="h-16 w-16 -rotate-90" aria-hidden="true">
          <circle cx="36" cy="36" r={radius} fill="none" stroke="currentColor" strokeOpacity="0.14" strokeWidth="7" />
          <motion.circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={false}
            animate={{ strokeDashoffset: dashOffset }}
            transition={reduced ? { duration: 0.1 } : { type: 'spring', stiffness: 120, damping: 18 }}
          />
        </svg>
        <span className="absolute font-display text-xs font-extrabold text-ink">{clamped}%</span>
      </div>
      <div className="text-left">
        <p className="font-display text-xs font-extrabold uppercase tracking-wider text-ink-mute">{label}</p>
        <p className="text-xs font-bold text-ink">
          {clamped >= 90 ? '90%+ Exam Ready!' : clamped >= 50 ? 'Strong Progress' : 'Keep Reviewing'}
        </p>
      </div>
    </div>
  )
}
