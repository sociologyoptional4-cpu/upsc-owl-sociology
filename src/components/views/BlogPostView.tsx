import Image from 'next/image'
import Link from 'next/link'

import type { BlogPostDetail } from '@/lib/data/types'
import { AttachmentList } from '@/components/blog/AttachmentList'
import { BlogRichText } from '@/components/blog/BlogRichText'
import { PostQuiz } from '@/components/blog/PostQuiz'
import { SeriesBox } from '@/components/blog/SeriesBox'
import { BlogShareBar, ReadingProgressBar } from '@/components/blog/BlogTocAndShare'
import { BlogCard } from '@/components/cards/BlogCard'
import { Breadcrumbs, JsonLd } from '@/components/ui/Breadcrumbs'
import { ThinkerChipLink, TopicChipLink } from '@/components/ui/Chips'
import { formatDay } from '@/components/ui/format'
import { TELEGRAM_MENTORSHIP_URL, TELEGRAM_URL } from '@/components/ui/links'
import { blogPostingJsonLd, faqPageJsonLd } from '@/lib/seo/jsonld'
import { getServerSideURL } from '@/lib/url'

export function BlogPostView({ post }: { post: BlogPostDetail }) {
  const day = post.publishedAt.slice(0, 10)
  const fullUrl = `${getServerSideURL()}${post.href}`
  const crumbs = [
    { label: 'Blog', href: '/blog' },
    ...(post.category ? [{ label: post.category.title, href: post.category.href }] : []),
    { label: post.title, href: post.href },
  ]

  return (
    <article className="mx-auto max-w-7xl px-5 pb-20 pt-10 md:px-8 md:pt-14">
      <ReadingProgressBar />
      <JsonLd data={blogPostingJsonLd(post)} />
      {post.faq.length > 0 && <JsonLd data={faqPageJsonLd(post.faq)} />}

      <Breadcrumbs items={crumbs} />

      <header className="mt-6 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2">
          {post.category && (
            <Link href={post.category.href} className="tag-skew">
              <span>{post.category.title}</span>
            </Link>
          )}
          {post.papers.map((p) => (
            <span key={p} className="rounded-chip bg-saffron-deep px-2.5 py-0.5 text-xs font-bold text-white">{p}</span>
          ))}
        </div>

        <h1 className="mt-5 text-[length:var(--text-h2)] font-extrabold leading-tight">{post.title}</h1>
        {post.excerpt && <p className="blog-lead-excerpt mt-4 max-w-[62ch] text-[length:var(--text-lg)] text-ink-soft">{post.excerpt}</p>}

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-y border-rule py-3 text-xs text-ink-mute">
          <div className="flex flex-wrap items-center gap-2">
            {post.author && (
              <Link href={post.author.href} className="font-bold text-ink hover:underline">
                {post.author.name}
              </Link>
            )}
            <span aria-hidden>·</span>
            <time dateTime={day}>{formatDay(day)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTime} min read</span>
          </div>
          <BlogShareBar title={post.title} url={fullUrl} />
        </div>
      </header>

      {post.cover && (
        <div className="mt-8 max-w-4xl overflow-hidden rounded-sheet border-2 border-ink shadow-paper">
          <Image src={post.cover.url} alt={post.cover.alt} width={post.cover.width} height={post.cover.height} priority className="h-auto w-full object-cover" />
        </div>
      )}

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0">
          {post.toc.length > 0 || post.relatedTopics.length > 0 ? (
            <details className="mb-6 rounded-card border-2 border-ink bg-paper-raised p-4 shadow-paper lg:hidden">
              <summary className="cursor-pointer font-display text-xs font-extrabold text-ink">
                📑 Quick Jump: Contents ({post.toc.length}) &amp; Syllabus Chapters
              </summary>
              <div className="mt-3 space-y-3 border-t border-rule pt-3 text-xs">
                {post.toc.length > 0 ? (
                  <ol className="space-y-1.5">
                    {post.toc.map((item) => (
                      <li key={item.id} className={item.level === 3 ? 'pl-3' : ''}>
                        <a href={`#${item.id}`} className="font-medium text-ink-soft hover:text-saffron-deep">
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                ) : null}
                {post.relatedTopics.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.relatedTopics.map((t) => (
                      <TopicChipLink key={t.href} topic={t} />
                    ))}
                  </div>
                ) : null}
              </div>
            </details>
          ) : null}
          <SeriesBox series={post.series} placement="top" />
          <BlogRichText data={post.content} resolved={post.resolved} />

          {post.relatedTopics.length > 0 && (
            <section aria-label="Linked syllabus chapters" className="mt-10 rounded-card border-2 border-ink bg-paper-raised p-5 shadow-paper">
              <p className="font-display text-sm font-extrabold text-ink">Is Blog Se Jude Syllabus Chapters</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.relatedTopics.map((t) => <TopicChipLink key={t.href} topic={t} />)}
              </div>
            </section>
          )}

          {/* Pro Pass CTA Banner */}
          <section
            aria-label="UPSC OWL Pro Pass"
            className="mt-10 rounded-sheet border-2 border-ink bg-pastel-lavender p-6 text-ink shadow-float"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="rounded-chip border border-ink bg-pastel-yellow px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-ink">
                Yearly Sale · 60% OFF
              </span>
              <span className="font-mono text-xs font-extrabold text-ink">
                <s className="opacity-60">₹999</s> <span className="text-saffron-deep">₹399/yr</span>
              </span>
            </div>
            <h2 className="mt-3 font-display text-xl font-extrabold leading-snug text-ink md:text-2xl">
              Every Unit Note + Topic-Wise PYQ Mapped (English + Hinglish)
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              Paper 1 (10 Units) aur Paper 2 (15 Units) — Complete structured notes, thinkers, mind maps &amp; 597 solved PYQs ek saath.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/pro"
                className="btn-cta inline-flex items-center gap-2 rounded-md border-2 border-ink px-5 py-2.5 text-sm font-extrabold shadow-paper"
              >
                Unlock Full Sociology Pro Pass →
              </Link>
              <Link href="/syllabus" className="text-xs font-extrabold text-ink underline hover:text-saffron-deep">
                Browse Full Syllabus
              </Link>
            </div>
          </section>

          <AttachmentList items={post.attachments} />
          <PostQuiz items={post.quiz} />
          <SeriesBox series={post.series} placement="bottom" />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center gap-2">
              {post.tags.map((t) => (
                <Link key={t.slug} href={t.href} className="rounded-chip border border-ink bg-pastel-yellow px-3 py-1 text-xs font-semibold text-ink hover:bg-saffron">
                  #{t.title}
                </Link>
              ))}
            </div>
          )}

          {/* FAQ section */}
          {post.faq.length > 0 && (
            <section aria-labelledby="blog-faq-h" className="mt-12 rounded-sheet border-2 border-ink bg-paper-raised p-6 shadow-paper">
              <p className="tag-skew"><span>FAQ</span></p>
              <h2 id="blog-faq-h" className="mt-4 text-[length:var(--text-h3)] font-extrabold">Aksar poochhe jaane wale sawaal</h2>
              <dl className="mt-5 space-y-4">
                {post.faq.map((item, i) => (
                  <div key={i} className="rounded-card border border-rule p-4">
                    <dt className="font-display text-base font-bold">{item.question}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {/* Related PYQs */}
          {post.relatedPyqs.length > 0 && (
            <section aria-labelledby="blog-pyq-h" className="mt-12 rounded-sheet border-2 border-ink bg-paper-raised p-6 shadow-paper">
              <p className="tag-skew"><span>UPSC PYQs</span></p>
              <h2 id="blog-pyq-h" className="mt-4 text-[length:var(--text-h3)] font-extrabold">Is topic ke Previous Year Questions</h2>
              <ol className="mt-4 space-y-3">
                {post.relatedPyqs.map((q) => (
                  <li key={q.id} className="grid grid-cols-[auto_1fr] items-start gap-3 rounded-card border border-rule p-3.5">
                    <span className="-skew-x-12 bg-pyq px-2.5 py-0.5 font-display text-xs font-extrabold text-white">
                      <span className="inline-block skew-x-12">{q.year} · {q.paper}</span>
                    </span>
                    <p className="text-sm leading-relaxed">
                      {q.question} <span className="text-xs font-semibold text-ink-mute">({q.marks} marks)</span>
                    </p>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Author box */}
          {post.author && (
            <section aria-label="Author" className="mt-12 flex items-start gap-4 rounded-card border-2 border-ink bg-pastel-lavender p-5 text-ink shadow-paper">
              {post.author.avatar && (
                <Image src={post.author.avatar.url} alt={post.author.name} width={56} height={56} className="size-14 rounded-full border-2 border-ink object-cover" />
              )}
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-ink-mute">Written by</p>
                <Link href={post.author.href} className="font-display text-lg font-extrabold hover:underline">{post.author.name}</Link>
                {post.author.bio && <p className="mt-1 text-sm text-ink-soft">{post.author.bio}</p>}
              </div>
            </section>
          )}

          {/* Telegram CTA */}
          <section aria-label="Telegram channel" className="mt-12 rounded-sheet border-2 border-ink bg-pastel-yellow p-6 text-ink shadow-paper">
            <h2 className="font-display text-xl font-extrabold">Roz ke Sociology notes Telegram pe paao</h2>
            <p className="mt-1 text-sm text-ink-soft">Daily current affairs, PYQ linkages aur direct mentorship support Telegram par.</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-cta rounded-chip border-2 border-ink px-5 py-2 text-sm shadow-paper">
                Telegram join karo ↗
              </a>
              <a href={TELEGRAM_MENTORSHIP_URL} target="_blank" rel="noopener noreferrer" className="rounded-chip border-2 border-ink bg-paper-raised px-4 py-2 text-sm font-bold text-ink hover:bg-pastel-mint">
                Direct Contact / Mentorship ↗
              </a>
              <BlogShareBar title={post.title} url={fullUrl} />
            </div>
          </section>
        </div>

        {/* Sticky sidebar: TOC + syllabus links */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          {post.toc.length > 0 && (
            <nav aria-label="Table of contents" className="rounded-card border-2 border-ink bg-paper-raised p-5 shadow-paper">
              <p className="font-display text-sm font-extrabold">Is article mein</p>
              <ol className="mt-3 space-y-2 text-xs">
                {post.toc.map((item) => (
                  <li key={item.id} className={item.level === 3 ? 'pl-3' : ''}>
                    <a href={`#${item.id}`} className="font-medium text-ink-soft hover:text-saffron-deep">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {post.relatedTopics.length > 0 && (
            <div className="rounded-card border-2 border-ink bg-paper-raised p-5 shadow-paper">
              <p className="mb-3 font-display text-sm font-extrabold">Syllabus topics</p>
              <div className="flex flex-wrap gap-1.5">
                {post.relatedTopics.map((t) => <TopicChipLink key={t.href} topic={t} />)}
              </div>
            </div>
          )}

          {post.thinkers.length > 0 && (
            <div className="rounded-card border-2 border-ink bg-paper-raised p-5 shadow-paper">
              <p className="mb-3 font-display text-sm font-extrabold">Thinkers</p>
              <div className="flex flex-wrap gap-1.5">
                {post.thinkers.map((t) => <ThinkerChipLink key={t.href} thinker={t} />)}
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* Related posts */}
      {post.relatedPosts.length > 0 && (
        <section aria-labelledby="blog-rel-h" className="mt-16">
          <p className="tag-skew"><span>Related</span></p>
          <h2 id="blog-rel-h" className="mt-4 text-[length:var(--text-h3)] font-extrabold">Aur padho</h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {post.relatedPosts.map((p) => (
              <li key={p.id}><BlogCard post={p} /></li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}
