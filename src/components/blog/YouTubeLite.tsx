'use client'

import { useState } from 'react'

type Props = { videoId: string; title: string }

/** Privacy-enhanced YouTube lite facade (`youtube-nocookie.com`); loads iframe only on click. */
export function YouTubeLite({ videoId, title }: Props) {
  const [active, setActive] = useState(false)
  if (!/^[\w-]{11}$/.test(videoId)) return null

  return (
    <figure className="my-6 overflow-hidden rounded-card border-2 border-ink bg-ink shadow-paper">
      <div className="relative aspect-video w-full">
        {active ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`Play video: ${title}`}
            className="group relative flex h-full w-full items-center justify-center bg-ink text-left text-white"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-95"
            />
            <span className="relative z-10 inline-flex items-center gap-2 rounded-chip border-2 border-ink bg-saffron px-4 py-2 font-display text-sm font-bold text-ink shadow-paper transition-transform group-hover:scale-105">
              ▶ Video dekho
            </span>
          </button>
        )}
      </div>
      <figcaption className="bg-paper-raised px-4 py-2.5 text-xs font-medium text-ink-soft">{title}</figcaption>
    </figure>
  )
}
