import { DefaultTemplate } from '@payloadcms/next/templates'
import { Gutter } from '@payloadcms/ui'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import type { AdminViewServerProps } from 'payload'

import { WriteDeskClient } from './write/WriteDeskClient'
import styles from './write/write-desk.module.css'

const AI_LABEL: Record<string, string> = { idle: '', queued: 'AI queue mein', done: 'AI ne sajaya', failed: 'AI fail' }
const when = (iso: string): string => new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' }).format(new Date(iso)) + ' IST'

/** /admin/write: one screen for the daily blog routine (docs/09 §4). Admin + editor only. */
export async function WriteDesk({ initPageResult, params, searchParams }: AdminViewServerProps) {
  const { req, locale, permissions, visibleEntities } = initPageResult
  if (!req.user) redirect('/admin/login')
  const role = (req.user as { role?: string }).role
  const allowed = role === 'admin' || role === 'editor'
  const drafts = allowed
    ? (await req.payload.find({ collection: 'posts', where: { _status: { equals: 'draft' } }, sort: '-updatedAt', limit: 10, depth: 0, draft: true, overrideAccess: true, select: { title: true, updatedAt: true, aiStatus: true } })).docs
    : []

  return (
    <DefaultTemplate i18n={req.i18n} locale={locale} params={params} payload={req.payload} permissions={permissions} searchParams={searchParams} user={req.user ?? undefined} visibleEntities={visibleEntities}>
      <Gutter className={styles.page}>
        <header>
          <p className={styles.label}><span>Writing desk</span></p>
          <h1 className={styles.title}>Aaj kya post karna hai?</h1>
          <p className={styles.sub}>Sab kuch draft banta hai. Dekh lo, thik karo, phir Publish. Kuch bhi apne aap live nahi hota.</p>
        </header>
        {!allowed ? <p className={styles.errorLine}>Ye page sirf admin aur editor ke liye hai.</p> : (
          <>
            <WriteDeskClient />
            <section aria-labelledby="desk-drafts">
              <h2 id="desk-drafts" className={styles.sectionTitle}>Aaj ke drafts</h2>
              {drafts.length === 0 ? <p className={styles.empty}>Koi draft nahi. Upar se ek shuru karo.</p> : (
                <ul className={styles.drafts}>
                  {drafts.map((draft) => (
                    <li key={draft.id}>
                      <Link href={`/admin/collections/posts/${draft.id}`}>
                        <span className={styles.draftTitle}>{draft.title || 'Untitled draft'}</span>
                        <span className={styles.draftMeta}>{when(draft.updatedAt)}{AI_LABEL[draft.aiStatus ?? 'idle'] ? ` · ${AI_LABEL[draft.aiStatus ?? 'idle']}` : ''}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <p className={styles.more}><Link href="/admin/collections/posts">Saare posts dekho →</Link></p>
            </section>
          </>
        )}
      </Gutter>
    </DefaultTemplate>
  )
}
