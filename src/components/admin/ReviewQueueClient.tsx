'use client'

import { useCallback, useEffect, useState } from 'react'

import type { ReviewItem } from '@/lib/data/types'

import styles from './admin.module.css'

/** `kind` arrives with Task N1 (topic notes); older API responses omit it. */
type QueueItem = ReviewItem & { kind?: 'ca' | 'topic' }
type ApiResponse<T> = { success: boolean; data: T | null; error: string | null }
type LoadState = { status: 'loading' } | { status: 'error'; message: string } | { status: 'ready'; items: QueueItem[] }

const MIN_REASON = 5

async function callApi<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, { credentials: 'same-origin', ...init, headers: { 'Content-Type': 'application/json', ...init?.headers } })
  const body = (await res.json().catch(() => null)) as ApiResponse<T> | null
  if (!res.ok || !body?.success || body.data === null) throw new Error(body?.error ?? `Request failed (${res.status})`)
  return body.data
}

const dayOf = (value: string) => value.slice(0, 10)
const levelOf = (relevance: number) => (relevance >= 0.8 ? 'high' : relevance >= 0.6 ? 'mid' : 'low')

export function ReviewQueueClient() {
  const [state, setState] = useState<LoadState>({ status: 'loading' })

  const fetchQueue = useCallback(
    () =>
      callApi<QueueItem[]>('/api/admin/review-queue').then(
        (items): LoadState => ({ status: 'ready', items }),
        (error: unknown): LoadState => ({ status: 'error', message: error instanceof Error ? error.message : 'Load nahi hua' }),
      ),
    [],
  )

  useEffect(() => {
    let isActive = true
    void fetchQueue().then((next) => {
      if (isActive) setState(next)
    })
    return () => {
      isActive = false
    }
  }, [fetchQueue])

  const load = () => {
    setState({ status: 'loading' })
    void fetchQueue().then(setState)
  }

  const removeItem = (id: number) =>
    setState((prev) => (prev.status === 'ready' ? { status: 'ready', items: prev.items.filter((i) => i.id !== id) } : prev))

  if (state.status === 'loading') return <p className={styles.sub}>Review queue load ho rahi hai…</p>
  if (state.status === 'error') {
    return (
      <div className={styles.empty}>
        <p className={styles.error}>{state.message}</p>
        <button type="button" className={styles.btn} onClick={load}>Dobara try karo</button>
      </div>
    )
  }
  if (state.items.length === 0) {
    return (
      <div className={styles.empty}>
        <p className={styles.headline}>Sab review ho gaya 🎉</p>
        <p className={styles.sub}>Naye AI drafts kal subah 6 baje ke pipeline run ke baad yahan aayenge.</p>
      </div>
    )
  }

  return (
    <ul className={styles.list}>
      {state.items.map((item) => (
        <ReviewCard key={`${item.kind ?? 'ca'}-${item.id}`} item={item} onDone={removeItem} />
      ))}
    </ul>
  )
}

function ReviewCard({ item, onDone }: { item: QueueItem; onDone: (id: number) => void }) {
  const kind = item.kind ?? 'ca'
  const collection = kind === 'topic' ? 'topics' : 'current-affairs'
  const [reason, setReason] = useState('')
  const [isRejecting, setIsRejecting] = useState(false)
  const [isBusy, setIsBusy] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const act = async (action: 'approve' | 'reject') => {
    setIsBusy(true)
    setError(null)
    try {
      const body = action === 'reject' ? { action, kind, reason: reason.trim() } : { action, kind }
      await callApi(`/api/admin/review/${item.id}`, { method: 'POST', body: JSON.stringify(body) })
      setIsLeaving(true)
      window.setTimeout(() => onDone(item.id), 300)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Action fail hua, dobara try karo')
      setIsBusy(false)
    }
  }

  const canReject = reason.trim().length >= MIN_REASON

  return (
    <li className={`${styles.card} ${isLeaving ? styles.cardLeaving : ''}`}>
      <div className={styles.row}>
        <span className={kind === 'topic' ? styles.chipThinker : styles.chip}>{kind === 'topic' ? 'Topic note' : 'Current affair'}</span>
        <span className={styles.meta}>{dayOf(item.date)}</span>
        {item.relevance !== null && (
          <span className={styles.relevance} title="AI relevance score">
            <span className={styles.bar} aria-hidden>
              <span className={styles.barFill} data-level={levelOf(item.relevance)} style={{ transform: `scaleX(${item.relevance})` }} />
            </span>
            {Math.round(item.relevance * 100)}%
          </span>
        )}
        {item.model && <span className={styles.meta}>{item.model}{item.promptVersion ? ` · ${item.promptVersion}` : ''}</span>}
      </div>

      <h2 className={styles.headline}>{item.headline}</h2>
      {item.summary && <p className={styles.summary}>{item.summary}</p>}

      <div className={styles.row}>
        {item.topics.map((t) => <span key={t.slug} className={styles.chip}>{t.title}</span>)}
        {item.thinkers.map((t) => <span key={t.slug} className={styles.chipThinker}>{t.name}</span>)}
      </div>

      <div className={styles.row}>
        {item.sources.map((s) => (
          <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className={styles.link}>{s.name} ↗</a>
        ))}
        <a href={item.previewHref} target="_blank" rel="noopener noreferrer" className={styles.link}>Preview dekho ↗</a>
        <a href={`/admin/collections/${collection}/${item.id}`} className={styles.link}>Edit karo</a>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.btnApprove} disabled={isBusy} onClick={() => void act('approve')}>
          ✓ Approve &amp; publish
        </button>
        {!isRejecting ? (
          <button type="button" className={styles.btnReject} disabled={isBusy} onClick={() => setIsRejecting(true)}>
            ✕ Reject
          </button>
        ) : (
          <>
            <textarea
              className={styles.reason}
              placeholder="Reject kyun? (prompt sudharne mein kaam aayega)"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              aria-label="Reject reason"
              autoFocus
            />
            <button type="button" className={styles.btnReject} disabled={isBusy || !canReject} onClick={() => void act('reject')}>
              Reject confirm
            </button>
            <button type="button" className={styles.btn} disabled={isBusy} onClick={() => setIsRejecting(false)}>Cancel</button>
          </>
        )}
      </div>
      {error && <p className={styles.error} role="alert">{error}</p>}
    </li>
  )
}
