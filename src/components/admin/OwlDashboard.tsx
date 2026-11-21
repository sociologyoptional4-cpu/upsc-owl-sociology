import { Gutter } from '@payloadcms/ui'
import Link from 'next/link'
import type { AdminViewServerProps, CollectionSlug, Payload } from 'payload'

import styles from './admin.module.css'
import { TodayWidget } from './TodayWidget'
import { getBlogGaps } from '@/lib/data/blog'

type Action = { title: string; body: string; href: string; badge?: number; isHot?: boolean }
type RecentItem = { kind: string; title: string; href: string; status: 'published' | 'draft'; updatedAt: string }
type CountTile = { label: string; href: string; total: number; meta: string }

const has = (payload: Payload, slug: string) => Boolean(payload.collections[slug as CollectionSlug])

async function countBy(payload: Payload, slug: string, status?: 'published' | 'draft'): Promise<number> {
  if (!has(payload, slug)) return 0
  const where = status ? { _status: { equals: status } } : undefined
  const { totalDocs } = await payload.count({ collection: slug as CollectionSlug, where, overrideAccess: true })
  return totalDocs
}

async function pendingReviewCount(payload: Payload): Promise<number> {
  const { totalDocs } = await payload.count({
    collection: 'current-affairs',
    where: { and: [{ _status: { equals: 'draft' } }, { isAiGenerated: { equals: true } }] },
    overrideAccess: true,
  })
  return totalDocs
}

const RECENT_SOURCES = [
  { slug: 'current-affairs', kind: 'Current affair', titleField: 'headline' },
  { slug: 'posts', kind: 'Blog post', titleField: 'title' },
  { slug: 'topics', kind: 'Topic note', titleField: 'title' },
  { slug: 'pages', kind: 'Page', titleField: 'title' },
  { slug: 'thinkers', kind: 'Thinker', titleField: 'name' },
] as const

async function recentEdits(payload: Payload): Promise<RecentItem[]> {
  const lists = await Promise.all(
    RECENT_SOURCES.map(async (src) => {
      const { docs } = await payload.find({ collection: src.slug, sort: '-updatedAt', limit: 5, depth: 0, draft: true, overrideAccess: true })
      return docs.map((doc) => {
        const record = doc as unknown as Record<string, unknown>
        return {
          kind: src.kind,
          title: String(record[src.titleField] ?? 'Untitled'),
          href: `/admin/collections/${src.slug}/${record.id}`,
          status: record._status === 'published' ? 'published' : 'draft',
          updatedAt: String(record.updatedAt ?? ''),
        } satisfies RecentItem
      })
    }),
  )
  return lists.flat().sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).slice(0, 8)
}

const ago = (iso: string) => {
  const mins = Math.round((Date.now() - new Date(iso).getTime()) / 60000)
  if (mins < 60) return `${Math.max(1, mins)} min pehle`
  const hours = Math.round(mins / 60)
  return hours < 24 ? `${hours} ghante pehle` : `${Math.round(hours / 24)} din pehle`
}

/** Replaces Payload's default dashboard: what to do today, counts, and recent edits. */
export async function OwlDashboard({ initPageResult }: AdminViewServerProps) {
  const { req } = initPageResult
  const payload = req.payload
  const name = (req.user as { name?: string; email?: string } | null)?.name || req.user?.email?.split('@')[0] || 'Admin'

  const [pending, caPub, caDraft, postsPub, postsDraft, topics, topicsDraft, pages, thinkers, pyqs, recent, blogGaps] = await Promise.all([
    pendingReviewCount(payload),
    countBy(payload, 'current-affairs', 'published'),
    countBy(payload, 'current-affairs', 'draft'),
    countBy(payload, 'posts', 'published'),
    countBy(payload, 'posts', 'draft'),
    countBy(payload, 'topics', 'published'),
    countBy(payload, 'topics', 'draft'),
    countBy(payload, 'pages'),
    countBy(payload, 'thinkers'),
    countBy(payload, 'pyqs'),
    recentEdits(payload),
    getBlogGaps(5).catch(() => []),
  ])

  const actions: Action[] = [
    { title: 'Review Queue', body: 'AI drafts padho, approve ya reject karo', href: '/admin/review', badge: pending, isHot: pending > 0 },
    { title: '+ Naya blog post', body: 'Blog likho ya ChatGPT se paste karo', href: '/admin/collections/posts/create' },
    { title: '+ Naya current affair', body: 'Khud se ek khabar ka note likho', href: '/admin/collections/current-affairs/create' },
    { title: 'Topic notes', body: 'Syllabus topics ke notes edit karo', href: '/admin/collections/topics' },
    { title: '+ Naya page', body: 'About, guides, landing page: blocks se', href: '/admin/collections/pages/create' },
    { title: 'Thinkers', body: 'Photos, key ideas, notes', href: '/admin/collections/thinkers' },
    { title: 'Menu / navigation', body: 'Header aur footer ke links', href: '/admin/globals/navigation' },
    { title: 'Site settings', body: 'Pipeline on/off, auto-publish, kharcha limit', href: '/admin/globals/site-settings' },
    { title: 'Media', body: 'Images upload aur license', href: '/admin/collections/media' },
  ]

  const counts: CountTile[] = [
    { label: 'Current affairs', href: '/admin/collections/current-affairs', total: caPub + caDraft, meta: `${caPub} live · ${caDraft} draft` },
    { label: 'Blog posts', href: '/admin/collections/posts', total: postsPub + postsDraft, meta: `${postsPub} live · ${postsDraft} draft` },
    { label: 'Topic notes', href: '/admin/collections/topics', total: topics + topicsDraft, meta: `${topics} live · ${topicsDraft} draft` },
    { label: 'Pages', href: '/admin/collections/pages', total: pages, meta: 'CMS pages' },
    { label: 'Thinkers', href: '/admin/collections/thinkers', total: thinkers, meta: 'profiles' },
    ...(has(payload, 'pyqs') ? [{ label: 'PYQs', href: '/admin/collections/pyqs', total: pyqs, meta: 'UPSC questions' }] : []),
  ]

  return (
    <Gutter className={styles.dash}>
      <div className={styles.dashHead}>
        <div>
          <p className={styles.label}><span>Dashboard</span></p>
          <h1 className={styles.dashTitle}>Namaste, {name} 👋</h1>
          <p className={styles.dashSub}>Aaj kya karna hai, sab yahin se.</p>
        </div>
        <a href="/" target="_blank" rel="noopener noreferrer" className={styles.siteLink}>Website dekho ↗</a>
      </div>

      <TodayWidget />

      <section aria-labelledby="dash-actions">
        <h2 id="dash-actions" className={styles.sectionTitle}>Kya karna hai</h2>
        <div className={styles.actions3}>
          {actions.map((a) => (
            <Link key={a.href} href={a.href} className={`${styles.action} ${a.isHot ? styles.actionHot : ''}`}>
              {a.badge ? <span className={styles.badge}>{a.badge}</span> : null}
              <span className={styles.actionTitle}>{a.title}</span>
              <span className={styles.actionBody}>{a.body}</span>
            </Link>
          ))}
        </div>
      </section>

      <div className={styles.twoCol}>
        <section aria-labelledby="dash-recent">
          <h2 id="dash-recent" className={styles.sectionTitle}>Abhi edit hua</h2>
          <ul className={styles.recent}>
            {recent.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.recentRow}>
                  <span className={styles.kind}>{item.kind}</span>
                  <span className={styles.recentTitle}>{item.title}</span>
                  <span className={`${styles.status} ${item.status === 'published' ? styles.statusPublished : styles.statusDraft}`}>
                    {item.status === 'published' ? 'Live' : 'Draft'}
                  </span>
                  <span className={styles.when}>{ago(item.updatedAt)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="dash-counts">
          <h2 id="dash-counts" className={styles.sectionTitle}>Content</h2>
          <div className={styles.counts}>
            {counts.map((c) => (
              <Link key={c.href} href={c.href} className={styles.count}>
                <div className={styles.countNum}>{c.total}</div>
                <div className={styles.countLabel}>{c.label}</div>
                <div className={styles.countMeta}>{c.meta}</div>
              </Link>
            ))}
          </div>
          <div className={styles.help} style={{ marginTop: '1rem' }}>
            <strong>Kuch bhi edit kaise karein?</strong>
            <ol>
              <li>Upar &quot;Kya karna hai&quot; se section kholo (ya left menu se).</li>
              <li>List mein jis item ko badalna hai uske title pe click karo.</li>
              <li>Badlo → upar <strong>Save</strong> (draft) ya <strong>Publish changes</strong> (live).</li>
            </ol>
          </div>
          {blogGaps.length > 0 && (
            <div className={styles.help} style={{ marginTop: '1rem' }}>
              <strong>Is hafte ye likho (High-PYQ topics without a blog)</strong>
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.1rem' }}>
                {blogGaps.map((g) => (
                  <li key={g.topicId} style={{ marginBottom: '0.25rem' }}>
                    <Link href={`/admin/collections/posts/create`} style={{ fontWeight: 600 }}>
                      {g.paper} · {g.topicTitle}
                    </Link>{' '}
                    <span style={{ fontSize: '0.8rem', opacity: 0.75 }}>({g.pyqCount} PYQs)</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>
    </Gutter>
  )
}
