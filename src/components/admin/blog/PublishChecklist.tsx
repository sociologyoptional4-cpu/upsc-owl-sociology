'use client'

import { useDocumentInfo, useFormFields } from '@payloadcms/ui'
import { useMemo, useState } from 'react'

import { readiness, runChecklist, type CheckLevel } from '@/lib/blog/checklist'

const str = (v: unknown): string => (typeof v === 'string' ? v : '')
const count = (v: unknown): number => (Array.isArray(v) ? v.length : typeof v === 'number' ? v : 0)
const has = (v: unknown): boolean => v !== null && v !== undefined && v !== '' && !(Array.isArray(v) && v.length === 0)

const ICON: Record<CheckLevel, string> = { error: '✕', warn: '!', info: '·' }
const COLOR: Record<CheckLevel, string> = { error: '#dc2626', warn: '#b45309', info: '#2563eb' }
const STATE = {
  ready: { text: 'Publish ke liye ready', bg: '#dcfce7' },
  almost: { text: 'Publish ho sakta hai, par sudharo', bg: '#fef9c3' },
  blocked: { text: 'Abhi publish mat karo', bg: '#fee2e2' },
}

type QuizState = { busy: boolean; msg: string | null }

/** Sidebar: live pre-publish checklist + "Quiz banao" (writes the post's end-of-post quiz). */
export function PublishChecklist() {
  const { id } = useDocumentInfo()
  const values = useFormFields(([f]) => ({
    title: str(f.title?.value), seoTitle: str(f['seo.title']?.value), seoDescription: str(f['seo.description']?.value),
    focusKeyword: str(f['seo.focusKeyword']?.value), excerpt: str(f.excerpt?.value), hasCover: has(f.cover?.value),
    hasCategory: has(f.category?.value), topicCount: count(f.topics?.value), tagCount: count(f.tags?.value), faqCount: count(f.faq?.value),
    content: f.content?.value, quizCount: count(f.quiz?.value),
  }))
  const checks = useMemo(() => runChecklist(values), [values])
  const state = STATE[readiness(checks)]
  const [quiz, setQuiz] = useState<QuizState>({ busy: false, msg: null })

  const makeQuiz = async () => {
    if (!id) return setQuiz({ busy: false, msg: 'Pehle post ko ek baar Save karo.' })
    setQuiz({ busy: true, msg: 'AI post padh ke 3 MCQ bana raha hai...' })
    try {
      const res = await fetch('/api/blog/quiz', { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ postId: Number(id) }) })
      const body = (await res.json().catch(() => null)) as { success?: boolean; error?: string | null } | null
      if (!res.ok || !body?.success) throw new Error(body?.error ?? `Quiz nahi bana (${res.status}).`)
      setQuiz({ busy: false, msg: '✓ Quiz draft mein jud gaya. Page reload ho raha hai...' })
      window.setTimeout(() => window.location.reload(), 900)
    } catch (error) {
      setQuiz({ busy: false, msg: error instanceof Error ? error.message : 'Quiz nahi bana.' })
    }
  }

  return (
    <div style={{ border: '1px solid #d4d4d8', borderRadius: 8, padding: 12, marginBottom: 16, background: '#fff', color: '#0a0a0a', fontSize: 13 }}>
      <p style={{ margin: 0, padding: '6px 8px', borderRadius: 6, background: state.bg, fontWeight: 700 }}>{state.text}</p>
      <ul style={{ listStyle: 'none', margin: '10px 0 0', padding: 0, display: 'grid', gap: 6 }}>
        {checks.map((check) => (
          <li key={check.id} title={check.hint} style={{ display: 'grid', gridTemplateColumns: '18px 1fr', gap: 6 }}>
            <span aria-hidden style={{ fontWeight: 800, color: check.ok ? '#15803d' : COLOR[check.level] }}>{check.ok ? '✓' : ICON[check.level]}</span>
            <span>
              <span style={{ fontWeight: 600 }}>{check.label}</span>
              {!check.ok ? <span style={{ display: 'block', color: '#525252', fontSize: 12 }}>{check.hint}</span> : null}
            </span>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 12, borderTop: '1px solid #e4e4e7', paddingTop: 10 }}>
        <p style={{ margin: '0 0 6px', fontWeight: 700 }}>Post ke ant mein quiz {values.quizCount ? `(${values.quizCount} sawal)` : ''}</p>
        <button type="button" onClick={() => void makeQuiz()} disabled={quiz.busy} style={{ padding: '6px 10px', borderRadius: 6, border: '1px solid #18181b', background: '#facc15', color: '#0a0a0a', fontWeight: 700, cursor: quiz.busy ? 'wait' : 'pointer', fontSize: 12 }}>
          {values.quizCount ? 'Quiz dobara banao' : 'AI se quiz banao'}
        </button>
        {quiz.msg ? <p role="status" style={{ margin: '6px 0 0', fontSize: 12 }}>{quiz.msg}</p> : null}
      </div>
    </div>
  )
}
