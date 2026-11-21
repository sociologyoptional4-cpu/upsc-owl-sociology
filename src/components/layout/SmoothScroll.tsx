'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { useEffect } from 'react'

import { useReducedMotion } from '@/hooks/useReducedMotion'

const LENIS_DURATION = 1.15

/**
 * Lenis inertial scroll driven by the GSAP ticker, so ScrollTrigger and Lenis
 * share one animation frame. Disabled entirely for reduced-motion users.
 */
export function SmoothScroll() {
  const isReduced = useReducedMotion()

  useEffect(() => {
    if (isReduced) return

    gsap.registerPlugin(ScrollTrigger)
    const lenis = new Lenis({
      duration: LENIS_DURATION,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    lenis.on('scroll', ScrollTrigger.update)
    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [isReduced])

  return null
}
