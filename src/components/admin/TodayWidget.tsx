'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import type { TodayStats } from '@/lib/data/types'

import styles from './admin.module.css'

type ApiResponse<T> = { success: boolean; data: T | null; error: string | null }

/** Dashboard header: today's pipeline run + review backlog at a glance. */
export function TodayWidget() {
  const [stats, setStats] = useState<TodayStats | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    fetch('/api/admin/today', { credentials: 'same-origin', signal: controller.signal })
      .then((res) => res.json() as Promise<ApiResponse<TodayStats>>)
      .then((body) => (body.success && body.data ? setStats(body.data) : setError(body.error ?? 'Stats nahi mile')))
      .catch((err: unknown) => {
        if (!controller.signal.aborted) setError(err instanceof Error ? err.message : 'Stats nahi mile')
      })
    return () => controller.abort()
  }, [])

  if (error) return <div className={styles.widget}><p className={styles.error}>{error}</p></div>
  if (!stats) return <div className={styles.widget}><p className={styles.sub}>Aaj ke stats load ho rahe hain…</p></div>

  const run = stats.lastRun
  const weekCost = stats.costLast7Days.reduce((sum, day) => sum + day.usd, 0)

  return (
    <section className={styles.widget} aria-label="Aaj ka status">
      <div>
        <p className={styles.label}><span>Aaj</span></p>
        <p className={styles.sub}>
          {run
            ? `Last pipeline run: ${new Date(run.startedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} · ${run.status}${run.errors.length ? ` · ${run.errors.length} errors` : ''}`
            : 'Pipeline abhi tak ek baar bhi nahi chala.'}
        </p>
      </div>
      <dl className={styles.stats}>
        <div className={`${styles.stat} ${styles.tintYellow}`}><dt>Review pending</dt><dd>{stats.pendingReview}</dd></div>
        <div className={`${styles.stat} ${styles.tintMint}`}><dt>Aaj publish hue</dt><dd>{stats.publishedToday}</dd></div>
        <div className={`${styles.stat} ${styles.tintLavender}`}><dt>Last run: kept / fetched</dt><dd>{run ? `${run.counts.kept ?? 0} / ${run.counts.fetched ?? 0}` : '—'}</dd></div>
        <div className={`${styles.stat} ${styles.tintPink}`}><dt>AI kharcha (7 din)</dt><dd>${weekCost.toFixed(2)}</dd></div>
      </dl>
      {stats.pendingReview > 0 && (
        <Link href="/admin/review" className={`${styles.btnApprove} ${styles.cta}`} style={{ textDecoration: 'none' }}>
          {stats.pendingReview} drafts review karo →
        </Link>
      )}
    </section>
  )
}
