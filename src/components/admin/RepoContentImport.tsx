'use client'

import { useState } from 'react'

type Result = { portraits: number; media: number; unitTopics: number; pyqLinks: number }

export function RepoContentImport() {
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [running, setRunning] = useState(false)

  async function runImport() {
    setRunning(true); setError(null)
    try {
      const response = await fetch('/api/admin/import-repo-content', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ scope: 'all' }) })
      const body = await response.json() as { success: boolean; data: Result | null; error: string | null }
      if (!response.ok || !body.success || !body.data) throw new Error(body.error ?? 'Import failed.')
      setResult(body.data)
    } catch (caught) { setError(caught instanceof Error ? caught.message : 'Import failed.') }
    finally { setRunning(false) }
  }

  return <main style={{ maxWidth: 720, margin: '3rem auto', fontFamily: 'system-ui, sans-serif' }}>
    <p style={{ color: '#6b7280' }}>Production content</p>
    <h1>Repo content import</h1>
    <p>Yeh ek baar repo ke thinker portraits, Unit 1 notes, infographics aur existing PYQ-topic links ko production CMS mein daalega. Blogs aur Review Queue drafts touch nahi honge.</p>
    <button type="button" onClick={runImport} disabled={running} style={{ padding: '0.75rem 1rem', fontWeight: 700 }}>
      {running ? 'Import chal raha hai…' : 'Import repo content'}
    </button>
    {error ? <p role="alert" style={{ color: '#b91c1c' }}>{error}</p> : null}
    {result ? <p role="status" style={{ color: '#166534' }}>Done: {result.portraits} portraits, {result.media} new media, {result.unitTopics} Unit 1 topics, {result.pyqLinks} PYQ links.</p> : null}
  </main>
}
