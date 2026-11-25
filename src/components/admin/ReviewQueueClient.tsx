'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import type { ReviewItem } from '@/lib/data/types'

import styles from './admin.module.css'

type QueueItem = ReviewItem & { kind?: 'ca' | 'topic' }
type QueueStatus = 'pending' | 'rejected' | 'approved'
type KindFilter = 'all' | 'ca' | 'topic'
type ApiResponse<T> = { success: boolean; data: T | null; error: string | null }
type LoadState = { status: 'loading' } | { status: 'error'; message: string } | { status: 'ready'; items: QueueItem[]; updatedAt: string }

const MIN_REASON = 5
const keyOf = (item: QueueItem) => `${item.kind ?? 'ca'}:${item.id}`

async function callApi<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    credentials: 'same-origin',
    cache: 'no-store',
    ...init,
    headers: { 'Content-Type': 'application/json', ...init?.headers },
  })
  const body = (await res.json().catch(() => null)) as ApiResponse<T> | null
  if (!res.ok || !body?.success || body.data === null) throw new Error(body?.error ?? `Request failed (${res.status})`)
  return body.data
}

const dayOf = (value: string) => value.slice(0, 10)
const levelOf = (relevance: number) => (relevance >= 0.8 ? 'high' : relevance >= 0.6 ? 'mid' : 'low')
const nowIst = () => new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: '2-digit', second: '2-digit' }).format(new Date())

export function ReviewQueueClient() {
  const [statusTab, setStatusTab] = useState<QueueStatus>('pending')
  const [kindFilter, setKindFilter] = useState<KindFilter>('all')
  const [state, setState] = useState<LoadState>({ status: 'loading' })
  const [selected, setSelected] = useState<Record<string, boolean>>({})
  const [bulkBusy, setBulkBusy] = useState(false)
  const [notice, setNotice] = useState<{ tone: 'ok' | 'err'; text: string } | null>(null)

  const fetchQueue = useCallback((tab: QueueStatus) => {
    const query = tab === 'pending' ? '' : `?status=${tab}`
    return callApi<QueueItem[]>(`/api/admin/review-queue${query}`).then(
      (items): LoadState => ({ status: 'ready', items, updatedAt: nowIst() }),
      (error: unknown): LoadState => ({ status: 'error', message: error instanceof Error ? error.message : 'Load nahi hua' }),
    )
  }, [])

  const reload = useCallback((tab: QueueStatus) => {
    setState({ status: 'loading' })
    setSelected({})
    void fetchQueue(tab).then(setState)
  }, [fetchQueue])

  useEffect(() => {
    let active = true
    void fetchQueue(statusTab).then((next) => {
      if (active) setState(next)
    })
    return () => { active = false }
  }, [fetchQueue, statusTab])

  const visibleItems = useMemo(() => {
    if (state.status !== 'ready') return []
    return kindFilter === 'all' ? state.items : state.items.filter((i) => (i.kind ?? 'ca') === kindFilter)
  }, [state, kindFilter])

  const handleDone = (kind: 'ca' | 'topic', id: number, message: string) => {
    setNotice({ tone: 'ok', text: message })
    setState((prev) => prev.status === 'ready'
      ? { ...prev, items: prev.items.filter((i) => !((i.kind ?? 'ca') === kind && i.id === id)) }
      : prev)
    setSelected((prev) => {
      const next = { ...prev }
      delete next[`${kind}:${id}`]
      return next
    })
  }

  const selectedItems = useMemo(
    () => visibleItems.filter((item) => selected[keyOf(item)]),
    [visibleItems, selected],
  )

  const toggleAll = () => {
    const allSelected = visibleItems.length > 0 && visibleItems.every((i) => selected[keyOf(i)])
    if (allSelected) { setSelected({}); return }
    setSelected(Object.fromEntries(visibleItems.map((i) => [keyOf(i), true])))
  }

  const approveSelected = async () => {
    if (selectedItems.length === 0) return
    setBulkBusy(true)
    setNotice(null)
    try {
      const res = await callApi<{ approved: { id: number; kind: string }[]; failed: { id: number; error: string }[] }>('/api/admin/review/bulk', {
        method: 'POST',
        body: JSON.stringify({ action: 'approve', items: selectedItems.map((i) => ({ id: i.id, kind: i.kind ?? 'ca' })) }),
      })
      const msg = res.failed.length
        ? `✓ ${res.approved.length} publish hue, ${res.failed.length} fail hue (${res.failed[0]?.error})`
        : `✓ ${res.approved.length} items publish ho gaye!`
      setNotice({ tone: res.failed.length ? 'err' : 'ok', text: msg })
      reload(statusTab)
    } catch (err: unknown) {
      setNotice({ tone: 'err', text: err instanceof Error ? err.message : 'Bulk approve fail hua' })
    } finally {
      setBulkBusy(false)
    }
  }

  return (
    <div>
      <div className={styles.toolbar}>
        <div className={styles.tabs} role="tablist" aria-label="Queue status">
          {([['pending', 'Pending'], ['rejected', 'Rejected'], ['approved', 'Approved (Recent)']] as const).map(([tab, label]) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={statusTab === tab}
              className={`${styles.tabBtn} ${statusTab === tab ? styles.tabBtnActive : ''}`}
              onClick={() => { setNotice(null); setStatusTab(tab) }}
            >
              {label}
            </button>
          ))}
        </div>

        <div className={styles.toolbarRight}>
          <div className={styles.pills} aria-label="Filter by type">
            {([['all', 'Sab'], ['ca', 'Current Affairs'], ['topic', 'Topic Notes']] as const).map(([k, label]) => (
              <button
                key={k}
                type="button"
                className={`${styles.pillBtn} ${kindFilter === k ? styles.pillBtnActive : ''}`}
                onClick={() => setKindFilter(k)}
              >
                {label}
              </button>
            ))}
          </div>
          <button type="button" className={styles.btn} disabled={state.status === 'loading'} onClick={() => reload(statusTab)}>
            {state.status === 'loading' ? 'Refreshing…' : '↻ Refresh'}
          </button>
        </div>
      </div>

      {state.status === 'ready' && (
        <div className={styles.subBar}>
          <span className={styles.meta}>
            {visibleItems.length} item{visibleItems.length === 1 ? '' : 's'} · Updated {state.updatedAt} IST
          </span>
          {statusTab === 'pending' && visibleItems.length > 0 && (
            <div className={styles.bulkActions}>
              <button type="button" className={styles.pillBtn} onClick={toggleAll}>
                {selectedItems.length === visibleItems.length ? 'Sab unselect karo' : 'Sab select karo'}
              </button>
              {selectedItems.length > 0 && (
                <button type="button" className={styles.btnApprove} disabled={bulkBusy} onClick={() => void approveSelected()}>
                  {bulkBusy ? 'Publishing…' : `✓ Approve Selected (${selectedItems.length})`}
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {notice && (
        <p className={notice.tone === 'ok' ? styles.noticeOk : styles.noticeErr} role="status">
          {notice.text}
        </p>
      )}

      {state.status === 'loading' && <p className={styles.sub}>Review queue load ho rahi hai…</p>}

      {state.status === 'error' && (
        <div className={styles.empty}>
          <p className={styles.error}>{state.message}</p>
          <button type="button" className={styles.btn} style={{ marginTop: '0.75rem' }} onClick={() => reload(statusTab)}>
            Dobara try karo
          </button>
        </div>
      )}

      {state.status === 'ready' && visibleItems.length === 0 && (
        <div className={styles.empty}>
          <p className={styles.headline}>
            {statusTab === 'pending' ? 'Sab review ho gaya 🎉' : statusTab === 'rejected' ? 'Koi rejected item nahi hai' : 'Abhi tak koi approved item nahi'}
          </p>
          <p className={styles.sub}>
            {statusTab === 'pending' ? 'Naye AI drafts ya /admin/write se bheje notes yahan aayenge.' : 'Filter badlo ya Refresh dabao.'}
          </p>
        </div>
      )}

      {state.status === 'ready' && visibleItems.length > 0 && (
        <ul className={styles.list}>
          {visibleItems.map((item) => (
            <ReviewCard
              key={keyOf(item)}
              item={item}
              tab={statusTab}
              checked={Boolean(selected[keyOf(item)])}
              onToggle={() => setSelected((prev) => ({ ...prev, [keyOf(item)]: !prev[keyOf(item)] }))}
              onDone={handleDone}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

function ReviewCard({
  item, tab, checked, onToggle, onDone,
}: {
  item: QueueItem
  tab: QueueStatus
  checked: boolean
  onToggle: () => void
  onDone: (kind: 'ca' | 'topic', id: number, message: string) => void
}) {
  const kind = item.kind ?? 'ca'
  const collection = kind === 'topic' ? 'topics' : 'current-affairs'
  const [reason, setReason] = useState('')
  const [isRejecting, setIsRejecting] = useState(false)
  const [isBusy, setIsBusy] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const act = async (action: 'approve' | 'reject' | 'reopen') => {
    setIsBusy(true)
    setError(null)
    try {
      const body = action === 'reject' ? { action, kind, reason: reason.trim() } : { action, kind }
      await callApi(`/api/admin/review/${item.id}`, { method: 'POST', body: JSON.stringify(body) })
      const msg = action === 'approve' ? '✓ Publish ho gaya!' : action === 'reject' ? '✓ Reject ho gaya' : '✓ Wapas Pending mein bhej diya'
      setIsLeaving(true)
      window.setTimeout(() => onDone(kind, item.id, msg), 260)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Action fail hua, dobara try karo')
      setIsBusy(false)
    }
  }

  return (
    <li className={`${styles.card} ${isLeaving ? styles.cardLeaving : ''}`}>
      <div className={styles.row}>
        {tab === 'pending' && (
          <input type="checkbox" checked={checked} onChange={onToggle} aria-label={`Select ${item.headline}`} />
        )}
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
      {tab === 'rejected' && item.rejectReason && (
        <p className={styles.rejectNote}><strong>Reject reason:</strong> {item.rejectReason}</p>
      )}

      <div className={styles.row}>
        {item.topics.map((t) => <span key={t.slug} className={styles.chip}>{t.title}</span>)}
        {item.thinkers.map((t) => <span key={t.slug} className={styles.chipThinker}>{t.name}</span>)}
      </div>

      <div className={styles.row}>
        {item.sources.map((s) => (
          <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className={styles.link}>{s.name} ↗</a>
        ))}
        <a href={item.previewHref} target="_blank" rel="noopener noreferrer" className={styles.link}>Preview dekho ↗</a>
        {item.liveHref && (
          <a href={item.liveHref} target="_blank" rel="noopener noreferrer" className={styles.link}>Live dekho ↗</a>
        )}
        <a href={`/admin/collections/${collection}/${item.id}`} className={styles.link}>Edit karo</a>
      </div>

      {tab === 'pending' && (
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
              <button type="button" className={styles.btnReject} disabled={isBusy || reason.trim().length < MIN_REASON} onClick={() => void act('reject')}>
                Reject confirm
              </button>
              <button type="button" className={styles.btn} disabled={isBusy} onClick={() => setIsRejecting(false)}>Cancel</button>
            </>
          )}
        </div>
      )}

      {tab === 'rejected' && (
        <div className={styles.actions}>
          {kind === 'ca' && (
            <>
              <button type="button" className={styles.btn} disabled={isBusy} onClick={() => void act('reopen')}>
                ↩ Pending mein bhejo
              </button>
              <button type="button" className={styles.btnApprove} disabled={isBusy} onClick={() => void act('approve')}>
                ✓ Approve &amp; publish
              </button>
            </>
          )}
        </div>
      )}

      {error && <p className={styles.error} role="alert">{error}</p>}
    </li>
  )
}
