'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import type { ReviewItem } from '@/lib/data/types'

import styles from './admin.module.css'

/** `kind` arrives with Task N1 (topic notes); older API responses omit it. */
type QueueItem = ReviewItem & { kind?: 'ca' | 'topic'; paper?: string | null; quality?: { source: boolean; syllabus: boolean; sociology: boolean; pyq: boolean } }
type ApiResponse<T> = { success: boolean; data: T | null; error: string | null }
type LoadState = { status: 'loading' } | { status: 'error'; message: string } | { status: 'ready'; items: QueueItem[] }

const MIN_REASON = 5

class ReviewApiError extends Error {
  constructor(message: string, readonly status: number) { super(message) }
}

async function callApi<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, { credentials: 'same-origin', ...init, headers: { 'Content-Type': 'application/json', ...init?.headers } })
  const body = (await res.json().catch(() => null)) as ApiResponse<T> | null
  if (!res.ok || !body?.success || body.data === null) throw new ReviewApiError(body?.error ?? `Request failed (${res.status})`, res.status)
  return body.data
}

const dayOf = (value: string) => value.slice(0, 10)
const levelOf = (relevance: number) => (relevance >= 0.8 ? 'high' : relevance >= 0.6 ? 'mid' : 'low')

export function ReviewQueueClient() {
  const [state, setState] = useState<LoadState>({ status: 'loading' })
  const [query, setQuery] = useState('')
  const [kindFilter, setKindFilter] = useState('all')
  const [paperFilter, setPaperFilter] = useState('all')

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

  const removeItem = (id: number, kind: 'ca' | 'topic') =>
    setState((prev) => (prev.status === 'ready' ? { status: 'ready', items: prev.items.filter((i) => i.id !== id || (i.kind ?? 'ca') !== kind) } : prev))

  const visibleItems = useMemo(() => {
    if (state.status !== 'ready') return []
    const needle = query.trim().toLocaleLowerCase()
    return state.items.filter((item) => {
      const textMatch = !needle || `${item.headline} ${item.summary ?? ''} ${item.topics.map((topic) => topic.title).join(' ')}`.toLocaleLowerCase().includes(needle)
      const kindMatch = kindFilter === 'all' || (item.kind ?? 'ca') === kindFilter
      const paperMatch = paperFilter === 'all' || item.paper === paperFilter || item.topics.some((topic) => topic.paper === paperFilter)
      return textMatch && kindMatch && paperMatch
    })
  }, [kindFilter, paperFilter, query, state])

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
    <>
      <div className={styles.reviewTools}>
        <label className={styles.filterLabel}>Search <input className={styles.filterInput} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Headline, summary, topic" /></label>
        <label className={styles.filterLabel}>Content <select className={styles.filterInput} value={kindFilter} onChange={(event) => setKindFilter(event.target.value)}><option value="all">All</option><option value="ca">Current affairs</option><option value="topic">Topic notes</option></select></label>
        <label className={styles.filterLabel}>Paper <select className={styles.filterInput} value={paperFilter} onChange={(event) => setPaperFilter(event.target.value)}><option value="all">All papers</option><option value="P1">Paper 1</option><option value="P2">Paper 2</option></select></label>
        <span className={styles.meta}>{visibleItems.length} / {state.items.length} drafts</span>
      </div>
      {visibleItems.length === 0 ? <p className={styles.empty}>Is filter mein koi draft nahi mila.</p> : null}
      <ul className={styles.list}>
      {visibleItems.map((item) => (
        <ReviewCard key={`${item.kind ?? 'ca'}-${item.id}`} item={item} onDone={removeItem} refresh={load} />
      ))}
      </ul>
    </>
  )
}

function ReviewCard({ item, onDone, refresh }: { item: QueueItem; onDone: (id: number, kind: 'ca' | 'topic') => void; refresh: () => void }) {
  const kind = item.kind ?? 'ca'
  const collection = kind === 'topic' ? 'topics' : 'current-affairs'
  const [reason, setReason] = useState('')
  const [isRejecting, setIsRejecting] = useState(false)
  const [isRevising, setIsRevising] = useState(false)
  const [isBusy, setIsBusy] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const act = async (action: 'approve' | 'reject' | 'revise') => {
    setIsBusy(true)
    setError(null)
    try {
      const body = action === 'approve' ? { action, kind } : { action, kind, reason: reason.trim() }
      await callApi(`/api/admin/review/${item.id}`, { method: 'POST', body: JSON.stringify(body) })
      if (action === 'revise') {
        refresh()
        return
      }
      setIsLeaving(true)
      window.setTimeout(() => onDone(item.id, kind), 300)
    } catch (err: unknown) {
      if (err instanceof ReviewApiError && err.status === 409) {
        onDone(item.id, kind)
        setError('Ye item pehle hi review ho chuka hai. Queue refresh kar di hai.')
        refresh()
        setIsBusy(false)
        return
      }
      setError(err instanceof Error ? err.message : 'Action fail hua, dobara try karo')
      setIsBusy(false)
    }
  }

  const canReject = reason.trim().length >= MIN_REASON
  const canRevise = kind === 'ca' && reason.trim().length >= MIN_REASON

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

      {item.quality && <ul className={styles.qualityList} aria-label="Draft quality checklist">
        {([['source', 'Source'], ['syllabus', 'Syllabus link'], ['sociology', 'Sociology explanation'], ['pyq', 'PYQ link']] as const).map(([key, label]) => <li data-ready={item.quality?.[key] ?? false} key={key}>{item.quality?.[key] ? '✓' : '○'} {label}</li>)}
      </ul>}

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
        <button type="button" className={styles.btnApprove} disabled={isBusy || isRejecting || isRevising} onClick={() => void act('approve')}>
          ✓ Approve &amp; publish
        </button>
        {!isRejecting && !isRevising ? (
          <button type="button" className={styles.btnReject} disabled={isBusy} onClick={() => setIsRejecting(true)}>
            ✕ Reject
          </button>
        ) : isRejecting ? (
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
        ) : null}
        {kind === 'ca' && !isRejecting && !isRevising && (
          <button type="button" className={styles.btn} disabled={isBusy} onClick={() => setIsRevising(true)}>
            ✨ AI se sudharo
          </button>
        )}
        {isRevising && (
          <>
            <textarea
              className={styles.reason}
              placeholder="AI ko kya improve karna hai? (jaise: sociology concepts aur PYQ linkage detail mein samjhao)"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              aria-label="AI revision instructions"
              autoFocus
            />
            <span className={styles.meta}>OpenAI + DeepSeek current draft se naya version banayenge; linked article dobara fetch nahi hoga aur draft publish nahi hoga.</span>
            <button type="button" className={styles.btnApprove} disabled={isBusy || !canRevise} onClick={() => void act('revise')}>
              {isBusy ? 'AI revise kar raha hai…' : 'AI se revise karo'}
            </button>
            <button type="button" className={styles.btn} disabled={isBusy} onClick={() => { setIsRevising(false); setReason('') }}>Cancel</button>
          </>
        )}
      </div>
      {error && <p className={styles.error} role="alert">{error}</p>}
    </li>
  )
}
