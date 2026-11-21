import { DefaultTemplate } from '@payloadcms/next/templates'
import { Gutter } from '@payloadcms/ui'
import type { AdminViewServerProps } from 'payload'
import { redirect } from 'next/navigation'

import styles from './admin.module.css'
import { ReviewQueueClient } from './ReviewQueueClient'

/** /admin/review: one place to approve or reject AI drafts. */
export function ReviewQueueView({ initPageResult, params, searchParams }: AdminViewServerProps) {
  const { req, locale, permissions, visibleEntities } = initPageResult
  const role = (req.user as { role?: string } | null)?.role
  if (!req.user) redirect('/admin/login')
  const isAllowed = role === 'admin' || role === 'editor'

  return (
    <DefaultTemplate
      i18n={req.i18n}
      locale={locale}
      params={params}
      payload={req.payload}
      permissions={permissions}
      searchParams={searchParams}
      user={req.user ?? undefined}
      visibleEntities={visibleEntities}
    >
      <Gutter className={styles.page}>
        <div className={styles.head}>
          <div>
            <p className={styles.label}><span>AI drafts</span></p>
            <h1 className={styles.title}>Review Queue</h1>
            <p className={styles.sub}>Approve karte hi story site pe publish ho jaati hai (aur Telegram pe bhi jaati hai).</p>
          </div>
        </div>
        {isAllowed ? <ReviewQueueClient /> : <p className={styles.error}>Ye page sirf admin aur editor ke liye hai.</p>}
      </Gutter>
    </DefaultTemplate>
  )
}
