import Image from 'next/image'

import type { ThinkerCard } from '@/lib/data/types'

import { getPortraitAsset } from './portrait-assets'

type Props = {
  thinker: Pick<ThinkerCard, 'slug' | 'name' | 'portrait'>
  size?: 'sm' | 'lg'
  priority?: boolean
  className?: string
  sizes?: string
}

const initials = (name: string) =>
  name
    .replace(/[^A-Za-zÀ-ÿ. ]/g, '')
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(-2)
    .map((part) => part[0]?.toUpperCase())
    .join('')

/** Duotone cut-out portrait; typographic monogram when no licensed image exists. */
export function Portrait({ thinker, size = 'sm', priority = false, className = '', sizes }: Props) {
  const asset = getPortraitAsset(thinker.slug)
  const src = asset ? (size === 'sm' ? asset.srcSm : asset.src) : thinker.portrait?.url
  const width = asset?.width ?? thinker.portrait?.width ?? 1000
  const height = asset?.height ?? thinker.portrait?.height ?? 1250

  if (!src) {
    return (
      <div
        aria-hidden
        className={`grid aspect-[4/5] place-items-center bg-[radial-gradient(circle_at_50%_35%,var(--paper-raised),var(--paper-sunk))] ${className}`}
      >
        <span className="font-display text-[clamp(3rem,8vw,6rem)] italic text-thinker/70">{initials(thinker.name)}</span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={`Portrait of ${thinker.name}`}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes ?? (size === 'sm' ? '(min-width: 768px) 240px, 45vw' : '(min-width: 1024px) 480px, 80vw')}
      className={`duotone h-auto w-full select-none ${className}`}
      draggable={false}
    />
  )
}
