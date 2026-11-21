import Image from 'next/image'
import Link from 'next/link'

import type { BlogCard as BlogCardData } from '@/lib/data/types'
import { ChipRow } from '@/components/ui/Chips'
import { formatDay } from '@/components/ui/format'

const PASTEL_BG: Record<string, string> = {
  lavender: 'bg-pastel-lavender',
  yellow: 'bg-pastel-yellow',
  mint: 'bg-pastel-mint',
  pink: 'bg-pastel-pink',
}

export function BlogCard({ post, variant = 'default' }: { post: BlogCardData; variant?: 'default' | 'lead' }) {
  const isLead = variant === 'lead'
  const day = post.publishedAt.slice(0, 10)
  const catBg = PASTEL_BG[post.category?.color ?? 'lavender'] ?? 'bg-pastel-lavender'

  return (
    <article className="group relative flex h-full flex-col rounded-card border-2 border-ink bg-paper-raised shadow-paper transition-shadow hover:shadow-float">
      <div className={`relative overflow-hidden border-b-2 border-ink bg-ink text-white ${isLead ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
        {post.cover ? (
          <Image
            src={post.cover.url}
            alt={post.cover.alt}
            width={post.cover.width}
            height={post.cover.height}
            className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col justify-between p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-chip bg-saffron px-2.5 py-0.5 font-display text-xs font-extrabold text-ink">OWL BLOG</span>
              {post.papers[0] ? <span className="rounded-chip bg-saffron-deep px-2 py-0.5 text-xs font-bold text-white">{post.papers.join(' · ')}</span> : null}
            </div>
            <p className="line-clamp-3 font-display text-lg font-extrabold leading-snug text-white">{post.title}</p>
          </div>
        )}
        {post.category && (
          <span className={`absolute left-3 top-3 rounded-chip border border-ink ${catBg} px-2.5 py-0.5 text-xs font-bold text-ink`}>
            {post.category.title}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-ink-mute">
          <time dateTime={day}>{formatDay(day)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingTime} min read</span>
          {post.author ? (
            <>
              <span aria-hidden>·</span>
              <span>{post.author.name}</span>
            </>
          ) : null}
        </div>

        <h3 className={`mt-2 font-display font-bold leading-snug ${isLead ? 'text-[length:var(--text-h3)]' : 'text-lg'}`}>
          <Link href={post.href} className="after:absolute after:inset-0 after:content-['']">
            {post.title}
          </Link>
        </h3>

        {post.excerpt && <p className="mt-2 line-clamp-3 text-sm text-ink-soft">{post.excerpt}</p>}

        {post.topics.length > 0 && (
          <div className="relative z-10 mt-3">
            <ChipRow topics={post.topics.slice(0, 2)} />
          </div>
        )}

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-sm font-semibold text-saffron-deep transition-transform duration-300 group-hover:translate-x-1">Padho →</span>
        </div>
      </div>
    </article>
  )
}
