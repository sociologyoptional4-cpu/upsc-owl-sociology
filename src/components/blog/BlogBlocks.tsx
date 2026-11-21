import Image from 'next/image'
import Link from 'next/link'

import type { BlogMedia, ResolvedBlogBlocks } from '@/lib/data/types'
import { Portrait } from '@/components/thinkers/Portrait'

import { YouTubeLite } from './YouTubeLite'

const idOf = (v: unknown): number | null =>
  typeof v === 'number' ? v : typeof v === 'object' && v !== null && typeof (v as { id?: unknown }).id === 'number' ? (v as { id: number }).id : null

const CALLOUT_STYLES: Record<string, { bg: string; badge: string; icon: string }> = {
  tip: { bg: 'bg-pastel-mint', badge: 'Tip', icon: '💡' },
  yaadRakho: { bg: 'bg-pastel-yellow', badge: 'Yaad rakho', icon: '📌' },
  galtiMat: { bg: 'bg-pastel-pink', badge: 'Galti mat karo', icon: '⚠️' },
  upscAngle: { bg: 'bg-pastel-lavender', badge: 'UPSC angle', icon: '🎯' },
}

export function BlogCalloutBlock({ fields }: { fields: Record<string, unknown> }) {
  const variant = typeof fields.variant === 'string' ? fields.variant : 'tip'
  const style = CALLOUT_STYLES[variant] ?? CALLOUT_STYLES.tip!
  const title = typeof fields.title === 'string' && fields.title.trim() ? fields.title : style.badge
  const body = typeof fields.body === 'string' ? fields.body : ''
  return (
    <aside className={`my-6 rounded-card border-2 border-ink ${style.bg} p-5 text-ink shadow-paper`}>
      <div className="flex items-center gap-2 font-display text-sm font-extrabold uppercase tracking-wide">
        <span aria-hidden>{style.icon}</span>
        <span>{title}</span>
      </div>
      <p className="mt-2 whitespace-pre-line text-[0.95rem] leading-relaxed">{body}</p>
    </aside>
  )
}

export function ThinkerQuoteBlock({ fields, resolved }: { fields: Record<string, unknown>; resolved: ResolvedBlogBlocks }) {
  const tid = idOf(fields.thinker)
  const thinker = tid ? resolved.thinkers[tid] : undefined
  const name = thinker?.name ?? 'Sociologist'
  const slug = thinker?.slug ?? ''
  const quote = typeof fields.quote === 'string' ? fields.quote : ''
  const context = typeof fields.context === 'string' ? fields.context : null
  return (
    <figure className="my-6 grid items-center gap-4 rounded-card border-2 border-ink bg-paper-raised p-5 shadow-paper sm:grid-cols-[5rem_1fr]">
      <div className="relative mx-auto w-20">
        <div aria-hidden className="absolute inset-1 rounded-full bg-saffron" />
        <div className="relative overflow-hidden rounded-full border-2 border-ink">
          <Portrait thinker={{ slug, name, portrait: null }} size="sm" />
        </div>
      </div>
      <div>
        <blockquote className="font-display text-lg font-bold leading-snug">&ldquo;{quote}&rdquo;</blockquote>
        <figcaption className="mt-2 text-xs font-semibold text-ink-soft">
          {thinker ? <Link href={thinker.href} className="text-saffron-deep underline">{name}</Link> : name}
          {context ? <span> · {context}</span> : null}
        </figcaption>
      </div>
    </figure>
  )
}

export function CompareBlock({ fields }: { fields: Record<string, unknown> }) {
  const leftTitle = typeof fields.leftTitle === 'string' ? fields.leftTitle : 'Side A'
  const rightTitle = typeof fields.rightTitle === 'string' ? fields.rightTitle : 'Side B'
  const rows = Array.isArray(fields.rows) ? (fields.rows as { aspect?: string; left?: string; right?: string }[]) : []
  return (
    <div className="my-6 overflow-x-auto rounded-card border-2 border-ink bg-paper-raised shadow-paper">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-ink">
            <th className="bg-paper-sunk p-3 text-left font-display font-bold">Aspect</th>
            <th className="bg-pastel-lavender p-3 text-left font-display font-bold text-ink">{leftTitle}</th>
            <th className="bg-pastel-mint p-3 text-left font-display font-bold text-ink">{rightTitle}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-rule last:border-b-0">
              <td className="p-3 font-semibold">{r.aspect}</td>
              <td className="bg-pastel-lavender/35 p-3">{r.left}</td>
              <td className="bg-pastel-mint/35 p-3">{r.right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function TimelineBlock({ fields }: { fields: Record<string, unknown> }) {
  const items = Array.isArray(fields.items) ? (fields.items as { year?: string; title?: string; text?: string }[]) : []
  return (
    <ol className="my-6 space-y-3 rounded-card border-2 border-ink bg-paper-raised p-5 shadow-paper">
      {items.map((item, i) => (
        <li key={i} className="grid grid-cols-[auto_1fr] items-start gap-3">
          <span className="-skew-x-12 bg-saffron-deep px-2.5 py-0.5 font-display text-xs font-extrabold text-white">
            <span className="inline-block skew-x-12">{item.year}</span>
          </span>
          <div>
            <p className="font-display text-sm font-bold">{item.title}</p>
            {item.text ? <p className="mt-0.5 text-sm text-ink-soft">{item.text}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  )
}

export function FlowBlock({ fields }: { fields: Record<string, unknown> }) {
  const vertical = fields.direction === 'vertical'
  const steps = Array.isArray(fields.steps) ? (fields.steps as { label?: string; text?: string }[]) : []
  return (
    <div className="my-6 rounded-card border-2 border-ink bg-paper-raised p-5 shadow-paper">
      <ol className={`flex ${vertical ? 'flex-col' : 'flex-wrap items-center'} gap-2`}>
        {steps.map((step, i) => (
          <li key={i} className={`flex ${vertical ? 'flex-col' : 'items-center'} gap-2`}>
            <div className="rounded-card border-2 border-ink bg-pastel-yellow px-3.5 py-2 text-ink">
              <p className="font-display text-sm font-bold">{step.label}</p>
              {step.text ? <p className="text-xs text-ink-soft">{step.text}</p> : null}
            </div>
            {i < steps.length - 1 ? <span aria-hidden className="font-bold text-saffron-deep">{vertical ? '↓' : '→'}</span> : null}
          </li>
        ))}
      </ol>
    </div>
  )
}

export function KeyTermBlock({ fields, resolved }: { fields: Record<string, unknown>; resolved: ResolvedBlogBlocks }) {
  const term = typeof fields.term === 'string' ? fields.term : ''
  const meaning = typeof fields.meaning === 'string' ? fields.meaning : ''
  const tid = idOf(fields.thinker)
  const thinker = tid ? resolved.thinkers[tid] : undefined
  return (
    <div className="my-6 rounded-card border-2 border-ink bg-pastel-yellow p-5 text-ink shadow-paper">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-display text-base font-extrabold">🔑 {term}</p>
        {thinker ? <Link href={thinker.href} className="text-xs font-bold text-saffron-deep underline">{thinker.name}</Link> : null}
      </div>
      <p className="mt-1.5 text-sm leading-relaxed">{meaning}</p>
    </div>
  )
}

export function PyqEmbedBlock({ fields, resolved }: { fields: Record<string, unknown>; resolved: ResolvedBlogBlocks }) {
  const raw = Array.isArray(fields.pyqs) ? fields.pyqs : []
  const items = raw
    .map((p) => { const id = idOf(p); return id ? resolved.pyqs[id] : null })
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
  if (items.length === 0) return null
  return (
    <div className="my-6 rounded-card border-2 border-ink bg-paper-raised p-5 shadow-paper">
      <p className="tag-skew"><span>PYQ</span></p>
      <ol className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.id} className="grid grid-cols-[auto_1fr] items-start gap-3 rounded-card border border-rule p-3">
            <span className="-skew-x-12 bg-pyq px-2 py-0.5 font-display text-xs font-extrabold text-white">
              <span className="inline-block skew-x-12">{item.year} · {item.paper}</span>
            </span>
            <p className="text-sm leading-relaxed">
              {item.question} <span className="text-xs font-semibold text-ink-mute">({item.marks} marks)</span>
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function AnswerBoxBlock({ fields }: { fields: Record<string, unknown> }) {
  const intro = typeof fields.intro === 'string' ? fields.intro : ''
  const points = Array.isArray(fields.points) ? (fields.points as { text?: string }[]) : []
  const conclusion = typeof fields.conclusion === 'string' ? fields.conclusion : ''
  return (
    <div className="my-6 rounded-card border-2 border-ink bg-paper-raised p-5 shadow-paper">
      <p className="tag-skew"><span>Answer kaise likhein</span></p>
      <div className="mt-4 space-y-3 text-sm">
        <div><strong className="font-display">Intro:</strong> <span className="text-ink-soft">{intro}</span></div>
        <ol className="list-decimal space-y-1.5 pl-5">
          {points.map((pt, i) => <li key={i}>{pt.text}</li>)}
        </ol>
        <div><strong className="font-display">Conclusion:</strong> <span className="text-ink-soft">{conclusion}</span></div>
      </div>
    </div>
  )
}

export function FigureBlock({ fields, resolved }: { fields: Record<string, unknown>; resolved: ResolvedBlogBlocks }) {
  const mid = idOf(fields.image)
  const direct = typeof fields.image === 'object' && fields.image !== null && 'url' in fields.image ? (fields.image as BlogMedia) : null
  const media = (mid ? resolved.media[mid] : null) ?? direct
  if (!media?.url) return null
  const caption = typeof fields.caption === 'string' ? fields.caption : null
  const credit = typeof fields.credit === 'string' ? fields.credit : null
  return (
    <figure className="my-6 overflow-hidden rounded-card border-2 border-ink bg-paper-raised shadow-paper">
      <Image src={media.url} alt={caption || media.alt || 'Blog figure'} width={media.width || 1200} height={media.height || 675} className="h-auto w-full object-cover" />
      {(caption || credit) && (
        <figcaption className="px-4 py-2.5 text-xs text-ink-soft">
          {caption} {credit ? <span className="text-ink-mute">({credit})</span> : null}
        </figcaption>
      )}
    </figure>
  )
}

export function YouTubeBlock({ fields }: { fields: Record<string, unknown> }) {
  const videoId = typeof fields.videoId === 'string' ? fields.videoId : ''
  const title = typeof fields.title === 'string' ? fields.title : 'YouTube video'
  return <YouTubeLite videoId={videoId} title={title} />
}

export function TermChipInline({ fields, resolved }: { fields: Record<string, unknown>; resolved: ResolvedBlogBlocks }) {
  const term = typeof fields.term === 'string' ? fields.term : ''
  const tid = idOf(fields.topic)
  const topic = tid ? resolved.topics[tid] : undefined
  const badge = (
    <span className="mx-0.5 inline-flex items-center gap-1 rounded-chip border border-ink bg-pastel-yellow px-2 py-0.5 text-xs font-semibold text-ink">
      {term}
    </span>
  )
  return topic ? <Link href={topic.href} className="no-underline">{badge}</Link> : badge
}
