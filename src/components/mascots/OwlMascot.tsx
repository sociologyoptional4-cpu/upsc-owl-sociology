'use client'

import { motion, useReducedMotion } from 'motion/react'

export type OwlMascotState = 'idle' | 'reading' | 'thinking' | 'celebrate' | 'alert'

interface OwlMascotProps {
  state?: OwlMascotState
  className?: string
}

/**
 * Expressive animated UPSC OWL scholar mascot with glowing aurora spectacles,
 * gentle float, blinking eyes, celebrate sparkles, and alert shield pulse.
 */
export function OwlStudyMascot({ state = 'idle', className = 'h-16 w-16' }: OwlMascotProps) {
  const reduced = useReducedMotion()
  const isCelebrate = state === 'celebrate'
  const isReading = state === 'reading' || state === 'thinking'
  const isAlert = state === 'alert'

  const crestColor = isAlert ? '#f43f5e' : isCelebrate ? '#10b981' : isReading ? '#06b6d4' : '#8b5cf6'

  return (
    <motion.svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={`overflow-visible drop-shadow-[0_8px_16px_rgba(16,185,129,0.2)] ${className}`}
      animate={
        reduced
          ? undefined
          : isCelebrate
            ? { y: [0, -6, 0], scale: [1, 1.06, 1] }
            : isReading
              ? { y: [0, -3, 0], rotate: [-2, 2, -2] }
              : { y: [0, -4, 0] }
      }
      transition={{ duration: isReading ? 2.2 : 3.4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <defs>
        <radialGradient id="owl-body" cx="40%" cy="30%" r="72%">
          <stop offset="0%" stopColor="#fffdf9" />
          <stop offset="60%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#fde68a" />
        </radialGradient>
      </defs>

      {isCelebrate && !reduced && (
        <g>
          <motion.circle
            cx="20"
            cy="28"
            r="4"
            fill="#10b981"
            animate={{ scale: [0.6, 1.3, 0.6], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <motion.circle
            cx="100"
            cy="24"
            r="3.5"
            fill="#06b6d4"
            animate={{ scale: [0.6, 1.3, 0.6], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.4, repeat: Infinity, delay: 0.3 }}
          />
        </g>
      )}

      {/* Ear tufts */}
      <path d="M32 36L24 18L44 28Z" fill={crestColor} />
      <path d="M88 36L96 18L76 28Z" fill={crestColor} />

      {/* Floor shadow */}
      <ellipse cx="60" cy="108" rx="28" ry="6" fill="#78350f" fillOpacity="0.16" />

      {/* Plump body */}
      <rect x="26" y="26" width="68" height="74" rx="34" fill="url(#owl-body)" stroke="#18181b" strokeWidth="2.5" />

      {/* Chest badge */}
      <ellipse cx="60" cy="80" rx="20" ry="14" fill="#fffbeb" stroke="#d97706" strokeOpacity="0.35" strokeWidth="1.5" />

      {/* Aurora Scholar Spectacles */}
      <circle cx="46" cy="52" r="12" fill="#0f172a" stroke={crestColor} strokeWidth="2.5" />
      <circle cx="74" cy="52" r="12" fill="#0f172a" stroke={crestColor} strokeWidth="2.5" />
      <line x1="58" y1="52" x2="62" y2="52" stroke={crestColor} strokeWidth="2.5" />

      {/* Eyes */}
      {isCelebrate ? (
        <g>
          <path d="M40 53C43 48 49 48 52 53" stroke="#34d399" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M68 53C71 48 77 48 80 53" stroke="#34d399" strokeWidth="2.8" strokeLinecap="round" />
        </g>
      ) : (
        <motion.g
          animate={reduced ? undefined : { scaleY: [1, 1, 0.14, 1, 1] }}
          transition={{ duration: 4.4, times: [0, 0.45, 0.48, 0.52, 1], repeat: Infinity }}
          style={{ transformOrigin: '60px 52px' }}
        >
          <circle cx="46" cy="52" r="4.4" fill="#22d3ee" />
          <circle cx="44.8" cy="50.8" r="1.5" fill="#ffffff" />
          <circle cx="74" cy="52" r="4.4" fill="#22d3ee" />
          <circle cx="72.8" cy="50.8" r="1.5" fill="#ffffff" />
        </motion.g>
      )}

      {/* Beak */}
      <path d="M55 61L65 61L60 68Z" fill="#f59e0b" stroke="#18181b" strokeWidth="1.6" strokeLinejoin="round" />
    </motion.svg>
  )
}

/** Floating Aurora Quill & Notebook Companion for Syllabus Chapter Notes. */
export function QuillNotesBuddy({ state = 'idle', className = 'h-14 w-14' }: OwlMascotProps) {
  const reduced = useReducedMotion()
  const isCelebrate = state === 'celebrate'
  const isBusy = state === 'thinking' || state === 'reading'

  return (
    <motion.svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={`overflow-visible drop-shadow-[0_8px_16px_rgba(139,92,246,0.2)] ${className}`}
      animate={
        reduced
          ? undefined
          : isCelebrate
            ? { y: [0, -6, 0], scale: [1, 1.07, 1] }
            : isBusy
              ? { y: [0, -4, 0], rotate: [-3, 3, -3] }
              : { y: [0, -4, 0] }
      }
      transition={{ duration: isBusy ? 2.1 : 3.2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <defs>
        <linearGradient id="socio-quill-plume" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      {isCelebrate && !reduced && (
        <motion.circle
          cx="24"
          cy="30"
          r="4"
          fill="#10b981"
          animate={{ scale: [0.5, 1.3, 0.5], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      )}

      <motion.path
        d="M84 18C98 18 106 32 98 48C92 60 80 68 70 72L76 52C78 40 78 26 84 18Z"
        fill="url(#socio-quill-plume)"
        stroke="#18181b"
        strokeWidth="2"
        animate={reduced ? undefined : { rotate: [0, 5, 0] }}
        transition={{ duration: 2.8, repeat: Infinity }}
        style={{ transformOrigin: '72px 72px' }}
      />

      <path
        d="M56 26C70 42 84 56 84 74C84 91 71 102 56 102C41 102 28 91 28 74C28 56 42 42 56 26Z"
        fill="#f5f3ff"
        stroke="#18181b"
        strokeWidth="2.5"
      />
      <ellipse cx="42" cy="78" rx="5.5" ry="3.5" fill="#f9a8d4" fillOpacity="0.6" />
      <ellipse cx="70" cy="78" rx="5.5" ry="3.5" fill="#f9a8d4" fillOpacity="0.6" />
      <circle cx="46" cy="69" r="4" fill="#1e1b4b" />
      <circle cx="66" cy="69" r="4" fill="#1e1b4b" />
      <path d="M51 77C53.5 81 58.5 81 61 77" stroke="#4c1d95" strokeWidth="2.4" strokeLinecap="round" />
    </motion.svg>
  )
}
