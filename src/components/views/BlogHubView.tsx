import Link from 'next/link'

import type { BlogHubData, BlogListData } from '@/lib/data/types'
import { BlogCard } from '@/components/cards/BlogCard'
import { EmptyState } from '@/components/ui/Badges'
import { PageHeader } from '@/components/ui/PageHeader'

function makeQuery(base: Record<string, string | number | undefined>): string {
  const params = new URLSearchParams()
  for (const [k, v] of Object.entries(base)) if (v !== undefined && v !== '' && !(k === 'page' && v === 1)) params.set(k, String(v))
  const qs = params.toString()
  return qs ? `/blog?${qs}` : '/blog'
}

export function BlogHubView({ data }: { data: BlogHubData }) {
  const { featured, categories, tags, units, posts, filters } = data
  const visibleUnits = filters.paper ? units.filter((u) => u.paper === filters.paper) : units
  const showFeatured = Boolean(featured && filters.page === 1 && !filters.category && !filters.paper && !filters.unit)
  const gridPosts = showFeatured ? posts.items.filter((post) => post.id !== featured?.id) : posts.items

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
      <PageHeader
        kicker="Blog · Notebook"
        title="Sociology Optional ke deep-dive articles"
        highlight="deep-dive"
        description="Thinkers, concepts, answer writing aur current affairs ke syllabus-linked notes."
      />

      {/* Category & Paper/Unit filters */}
      <div className="mt-8 space-y-3 rounded-card border-2 border-ink bg-paper-raised p-4 shadow-paper">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-ink-mute">Category:</span>
          <Link
            href={makeQuery({ paper: filters.paper, unit: filters.unit })}
            className={`rounded-chip border border-ink px-3 py-1 text-xs font-bold ${!filters.category ? 'bg-saffron text-ink' : 'bg-paper hover:bg-pastel-yellow'}`}
          >
            Sab
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={makeQuery({ category: cat.slug, paper: filters.paper, unit: filters.unit })}
              className={`rounded-chip border border-ink px-3 py-1 text-xs font-bold ${filters.category === cat.slug ? 'bg-saffron text-ink' : 'bg-paper hover:bg-pastel-yellow'}`}
            >
              {cat.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-ink-mute">Paper:</span>
          {(['P1', 'P2'] as const).map((code) => (
            <Link
              key={code}
              href={makeQuery({ category: filters.category, paper: filters.paper === code ? undefined : code })}
              className={`rounded-chip border border-ink px-3 py-1 text-xs font-bold ${filters.paper === code ? 'bg-ink text-paper' : 'bg-paper hover:bg-pastel-lavender'}`}
            >
              {code}
            </Link>
          ))}
          {visibleUnits.map((u) => (
            <Link
              key={u.slug}
              href={makeQuery({ category: filters.category, paper: filters.paper, unit: filters.unit === u.slug ? undefined : u.slug })}
              className={`rounded-chip border border-rule px-2.5 py-0.5 text-xs ${filters.unit === u.slug ? 'border-ink bg-pastel-mint font-bold text-ink' : 'text-ink-soft hover:border-ink'}`}
            >
              {u.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Featured post on page 1 when unfiltered */}
      {showFeatured && featured && (
        <section aria-label="Featured post" className="mt-10">
          <p className="tag-skew mb-4"><span>Featured</span></p>
          <BlogCard post={featured} variant="lead" />
        </section>
      )}

      {/* Post grid */}
      <section aria-label="Blog posts" className="mt-12">
        {gridPosts.length === 0 ? (
          showFeatured ? null : <EmptyState title="Abhi koi blog post nahi hai" body="Admin panel (/admin/collections/posts) se naya blog likho ya ChatGPT se paste karo." />
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((post) => (
              <li key={post.id}>
                <BlogCard post={post} />
              </li>
            ))}
          </ul>
        )}

        {posts.totalPages > 1 && (
          <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-3">
            {posts.page > 1 && (
              <Link href={makeQuery({ ...filters, page: posts.page - 1 })} className="rounded-chip border-2 border-ink bg-paper-raised px-4 py-1.5 text-sm font-bold">
                ← Pichhla
              </Link>
            )}
            <span className="text-sm font-semibold text-ink-soft">
              Page {posts.page} / {posts.totalPages}
            </span>
            {posts.page < posts.totalPages && (
              <Link href={makeQuery({ ...filters, page: posts.page + 1 })} className="rounded-chip border-2 border-ink bg-paper-raised px-4 py-1.5 text-sm font-bold">
                Agla →
              </Link>
            )}
          </nav>
        )}
      </section>

      {/* Tag cloud */}
      {tags.length > 0 && (
        <section aria-label="Tags" className="mt-14 rounded-card border-2 border-ink bg-paper-raised p-5 shadow-paper">
          <p className="font-display text-sm font-extrabold">Tags</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Link key={t.slug} href={t.href} className="rounded-chip border border-ink bg-pastel-yellow px-3 py-1 text-xs font-semibold text-ink hover:bg-saffron">
                #{t.title}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export function BlogListView({ data, baseHref }: { data: BlogListData; baseHref: string }) {
  const { posts } = data
  const kicker = data.kind === 'category' ? 'Blog · Category' : data.kind === 'tag' ? 'Blog · Tag' : data.kind === 'series' ? 'Blog · Series' : 'Blog · Author'
  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
      <PageHeader kicker={kicker} title={data.title} description={data.description ?? undefined} />
      <p className="mt-4 text-sm">
        <Link href="/blog" className="font-semibold text-saffron-deep underline">← Saare blogs dekho</Link>
      </p>

      <section className="mt-10">
        {posts.items.length === 0 ? (
          <EmptyState title="Is section mein abhi koi blog nahi hai" body="Jald hi naye articles aayenge." />
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.items.map((post) => (
              <li key={post.id}><BlogCard post={post} /></li>
            ))}
          </ul>
        )}
        {posts.totalPages > 1 && (
          <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-3">
            {posts.page > 1 && <Link href={`${baseHref}?page=${posts.page - 1}`} className="rounded-chip border-2 border-ink bg-paper-raised px-4 py-1.5 text-sm font-bold">← Pichhla</Link>}
            <span className="text-sm font-semibold text-ink-soft">Page {posts.page} / {posts.totalPages}</span>
            {posts.page < posts.totalPages && <Link href={`${baseHref}?page=${posts.page + 1}`} className="rounded-chip border-2 border-ink bg-paper-raised px-4 py-1.5 text-sm font-bold">Agla →</Link>}
          </nav>
        )}
      </section>
    </div>
  )
}
