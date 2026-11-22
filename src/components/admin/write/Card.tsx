'use client'

import Link from 'next/link'
import { useState, type ReactNode } from 'react'

import { DeskError, type ImportResult } from './api'
import styles from './write-desk.module.css'

export type RunState =
  | { status: 'idle' }
  | { status: 'busy'; note: string }
  | { status: 'done'; result: ImportResult }
  | { status: 'error'; message: string; existing?: { postId: number; adminUrl: string } }

/** Shared state machine for a desk card: run(task) → busy → done | error. */
export function useRun() {
  const [state, setState] = useState<RunState>({ status: 'idle' })
  const run = async (note: string, task: (progress: (next: string) => void) => Promise<ImportResult>): Promise<boolean> => {
    setState({ status: 'busy', note })
    try {
      const result = await task((next) => setState({ status: 'busy', note: next }))
      setState({ status: 'done', result })
      return true
    } catch (error) {
      setState({ status: 'error', message: error instanceof Error ? error.message : 'Kuch gadbad ho gayi.', existing: error instanceof DeskError ? error.existing : undefined })
      return false
    }
  }
  return { state, run, reset: () => setState({ status: 'idle' }) }
}

type CardProps = { index: string; tone: 'lavender' | 'yellow' | 'mint' | 'pink'; title: string; hint: string; state: RunState; children: ReactNode }

export function Card({ index, tone, title, hint, state, children }: CardProps) {
  return (
    <section className={styles.card} data-tone={tone} aria-labelledby={`desk-${index}`}>
      <span className={styles.cardIndex} aria-hidden>{index}</span>
      <h2 id={`desk-${index}`} className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardHint}>{hint}</p>
      {children}
      <div className={styles.status} role="status" aria-live="polite">
        {state.status === 'busy' ? <p className={styles.busy}>{state.note}</p> : null}
        {state.status === 'done' ? (
          <div className={styles.done}>
            <p>✓ Draft ban gaya: <strong>{state.result.title}</strong> ({state.result.detail ?? `${state.result.wordCount} words`})</p>
            {state.result.warnings.map((warning) => <p key={warning} className={styles.warn}>⚠ {warning}</p>)}
            <Link href={state.result.adminUrl} className={styles.open}>{state.result.adminUrl === '/admin/review' ? 'Review Queue kholo →' : 'Draft kholo →'}</Link>
          </div>
        ) : null}
        {state.status === 'error' ? (
          <div className={styles.error}>
            <p>✕ {state.message}</p>
            {state.existing ? <Link href={state.existing.adminUrl} className={styles.open}>Purana draft kholo →</Link> : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}
