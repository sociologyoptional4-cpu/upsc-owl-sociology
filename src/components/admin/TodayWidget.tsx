'use client'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

import type { TodayStats } from '@/lib/data/types'

import styles from './admin.module.css'

type ApiResponse<T> = { success: boolean; data: T | null; error: string | null }

/** Dashboard header: today's pipeline run, queue backlog, and quick job runner. */
export function TodayWidget() {
  const [stats, setStats] = useState<TodayStats | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState<'refresh' | 'jobs' | null>(null)
  const [jobMsg, setJobMsg] = useState<string | null>(null)

  const loadStats = useCallback(async (signal?: AbortSignal) => {
    const res = await fetch('/api/admin/today', { credentials: 'same-origin', cache: 'no-store', signal })
    const body = (await res.json().catch(() => null)) as ApiResponse<TodayStats> | null
    if (!res.ok || !body?.success || !body.data) {
      throw new Error(body?.error ?? `Stats nahi mile (${res.status})`)
    }
    return body.data
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    void loadStats(controller.signal)
      .then((data) => { setStats(data); setError(null) })
      .catch((err: unknown) => {
        if (!controller.signal.aborted) setError(err instanceof Error ? err.message : 'Stats nahi mile')
      })
    return () => controller.abort()
  }, [loadStats])

  const refresh = async () => {
    setBusy('refresh')
    try {
      setStats(await loadStats())
      setError(null)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Refresh fail hua')
    } finally {
      setBusy(null)
    }
  }

  const runQueuedJobs = async () => {
    setBusy('jobs')
    setJobMsg(null)
    try {
      const res = await fetch('/api/payload-jobs/run?limit=10', { method: 'GET', credentials: 'same-origin', cache: 'no-store' })
      if (!res.ok) throw new Error(`Job run fail hua (${res.status})`)
      setJobMsg('✓ Queued AI blog jobs chal gaye!')
      setStats(await loadStats())
    } catch (err: unknown) {
      setJobMsg(err instanceof Error ? err.message : 'Job run fail hua')
    } finally {
      setBusy(null)
    }
  }

  if (error) {
    return (
      <div className={styles.widget}>
        <p className={styles.error}>{error}</p>
        <button type="button" className={styles.btn} onClick={() => void refresh()}>↻ Dobara try karo</button>
      </div>
    )
  }
  if (!stats) return <div className={styles.widget}><p className={styles.sub}>Aaj ke stats load ho rahe hain…</p></div>

  const run = stats.lastRun
  const weekCost = stats.costLast7Days.reduce((sum, day) => sum + day.usd, 0)
  const queuedJobs = stats.queuedBlogJobs ?? 0

  return (
    <section className={styles.widget} aria-label="Aaj ka status">
      <div className={styles.widgetHead}>
        <div>
          <p className={styles.label}><span>Aaj</span></p>
          <p className={styles.sub}>
            {run
              ? `Last pipeline run: ${new Date(run.startedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} · ${run.status}${run.errors.length ? ` · ${run.errors.length} errors` : ''}`
              : 'Pipeline abhi tak ek baar bhi nahi chala.'}
          </p>
        </div>
        <div className={styles.widgetActions}>
          <Link href="/admin/collections/pipeline-runs" className={styles.btnLink}>Pipeline Runs ↗</Link>
          <button type="button" className={styles.btn} disabled={busy !== null} onClick={() => void refresh()}>
            {busy === 'refresh' ? 'Refreshing…' : '↻ Refresh'}
          </button>
        </div>
      </div>

      <dl className={styles.stats}>
        <div className={`${styles.stat} ${styles.tintYellow}`}><dt>Review pending</dt><dd>{stats.pendingReview}</dd></div>
        <div className={`${styles.stat} ${styles.tintMint}`}><dt>Aaj publish hue</dt><dd>{stats.publishedToday}</dd></div>
        <div className={`${styles.stat} ${styles.tintLavender}`}><dt>Last run: kept / fetched</dt><dd>{run ? `${run.counts.kept ?? 0} / ${run.counts.fetched ?? 0}` : '—'}</dd></div>
        <div className={`${styles.stat} ${styles.tintPink}`}><dt>AI kharcha (7 din)</dt><dd>${weekCost.toFixed(2)}</dd></div>
      </dl>

      <div className={styles.widgetFoot}>
        {stats.pendingReview > 0 && (
          <Link href="/admin/review" className={`${styles.btnApprove} ${styles.cta}`} style={{ textDecoration: 'none' }}>
            {stats.pendingReview} drafts review karo →
          </Link>
        )}
        {queuedJobs > 0 && (
          <button type="button" className={styles.btn} disabled={busy !== null} onClick={() => void runQueuedJobs()}>
            {busy === 'jobs' ? 'Chala raha hai…' : `⚡ Run ${queuedJobs} queued AI blog jobs`}
          </button>
        )}
        {jobMsg && <span className={styles.sub} role="status">{jobMsg}</span>}
      </div>
    </section>
  )
}
