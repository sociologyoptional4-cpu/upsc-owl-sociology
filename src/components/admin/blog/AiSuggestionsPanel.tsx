'use client'

import { useDocumentInfo, useFormFields } from '@payloadcms/ui'
import { useState } from 'react'

type Suggestions = {
  generatedAt?: string
  error?: string
  applied?: string[]
  newTags?: string[]
  internalLinks?: { anchorText: string; href: string }[]
  faq?: { question: string; answer: string }[]
  social?: {
    xThread?: string[]
    instagramSlides?: { title: string; text: string }[]
    linkedin?: string
    telegram?: string
  }
  accepted?: { tags?: number[]; links?: number[]; faq?: number[]; telegram?: boolean }
}

const box: React.CSSProperties = { border: '1px solid #d4d4d8', borderRadius: 8, padding: 12, marginTop: 10, background: '#fafafa', fontSize: 13 }
const btn: React.CSSProperties = { padding: '6px 10px', borderRadius: 6, border: '1px solid #18181b', background: '#facc15', color: '#0a0a0a', fontWeight: 700, cursor: 'pointer', fontSize: 12 }
const btnGhost: React.CSSProperties = { padding: '4px 8px', borderRadius: 5, border: '1px solid #a1a1aa', background: '#fff', color: '#18181b', fontWeight: 600, cursor: 'pointer', fontSize: 11 }

export function AiSuggestionsPanel() {
  const { id } = useDocumentInfo()
  const aiStatus = useFormFields(([fields]) => (fields.aiStatus?.value as string | undefined) ?? 'idle')
  const rawSuggestions = useFormFields(([fields]) => fields.aiSuggestions?.value as Suggestions | undefined)
  const [busy, setBusy] = useState<string | null>(null)
  const [msg, setMsg] = useState<string | null>(null)
  const [ignored, setIgnored] = useState<Record<string, boolean>>({})

  const postId = typeof id === 'number' ? id : Number(id)
  const suggestions = rawSuggestions ?? {}
  const accepted = suggestions.accepted ?? {}

  async function callApi(url: string, body: Record<string, unknown>, label: string) {
    if (!postId) { setMsg('Pehle post ko Save karo.'); return }
    setBusy(label); setMsg(null)
    try {
      const res = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ postId, ...body }) })
      const json = (await res.json()) as { success?: boolean; error?: string }
      if (!res.ok || !json.success) throw new Error(json.error ?? `HTTP ${res.status}`)
      setMsg(`${label} ho gaya — page refresh ho raha hai...`)
      window.location.reload()
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Action failed')
    } finally {
      setBusy(null)
    }
  }

  async function acceptAll() {
    if (!postId) { setMsg('Pehle post ko Save karo.'); return }
    setBusy('Sab accept'); setMsg(null)
    try {
      const res = await fetch('/api/blog/suggestions/apply-all', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ postId }) })
      const json = (await res.json()) as { success?: boolean; error?: string }
      if (!res.ok || !json.success) throw new Error(json.error ?? `HTTP ${res.status}`)
      setMsg('Suggestions accept ho gaye — page refresh ho raha hai...')
      window.location.reload()
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Accept failed')
    } finally {
      setBusy(null)
    }
  }

  const copy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setMsg(`${label} copy ho gaya!`)
    } catch {
      setMsg(`${label} copy nahi ho saka.`)
    }
  }

  return (
    <div style={box}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
        <strong>AI Assistant · Blog</strong>
        <span style={{ fontSize: 11, padding: '2px 6px', borderRadius: 4, background: '#e4e4e7' }}>Status: {aiStatus}</span>
      </div>
      <p style={{ margin: '6px 0 10px', fontSize: 11, color: '#b91c1c', fontWeight: 600 }}>
        Kisi coaching/book ka text copy mat karo.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        <button type="button" style={btn} disabled={Boolean(busy)} onClick={() => void callApi('/api/blog/organize', {}, 'Organize')}>
          {busy === 'Organize' ? 'Organize ho raha…' : '✨ Abhi organize karo'}
        </button>
        <button type="button" style={btn} disabled={Boolean(busy)} onClick={() => void callApi('/api/blog/beautify', {}, 'Beautify')}>
          {busy === 'Beautify' ? 'Sajaya ja raha…' : '✨ AI se sajao'}
        </button>
      </div>
      <p style={{ margin: '6px 0 0', fontSize: 11, color: '#52525b' }}>
        &ldquo;AI se sajao&rdquo; naya draft version banata hai. Wapas jaane ke liye upar <strong>Versions</strong> tab se restore karo.
      </p>

      {msg && <p style={{ marginTop: 8, padding: 6, borderRadius: 4, background: '#fef9c3', fontSize: 12 }}>{msg}</p>}
      {suggestions.error && <p style={{ marginTop: 8, color: '#b91c1c', fontSize: 12 }}>Error: {suggestions.error}</p>}

      {((suggestions.newTags?.length ?? 0) > 0 || (suggestions.internalLinks?.length ?? 0) > 0 || (suggestions.faq?.length ?? 0) > 0) && (
        <div style={{ marginTop: 10 }}>
          <button type="button" style={btnGhost} disabled={Boolean(busy)} onClick={() => void acceptAll()}>
            Sab accept karo
          </button>
        </div>
      )}

      {(suggestions.newTags ?? []).map((tag, i) => {
        const key = `tag-${i}`
        if (ignored[key] || accepted.tags?.includes(i)) return null
        return (
          <div key={key} style={{ marginTop: 8, paddingTop: 8, borderTop: '1px solid #e4e4e7' }}>
            <div>Naya tag: <strong>#{tag}</strong></div>
            <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
              <button type="button" style={btnGhost} onClick={() => void callApi('/api/blog/suggestions/apply', { kind: 'tag', index: i }, 'Tag add')}>Accept</button>
              <button type="button" style={btnGhost} onClick={() => setIgnored((p) => ({ ...p, [key]: true }))}>Ignore</button>
            </div>
          </div>
        )
      })}

      {(suggestions.internalLinks ?? []).map((link, i) => {
        const key = `link-${i}`
        if (ignored[key] || accepted.links?.includes(i)) return null
        return (
          <div key={key} style={{ marginTop: 8, paddingTop: 8, borderTop: '1px solid #e4e4e7' }}>
            <div>Link: &ldquo;{link.anchorText}&rdquo; → <code>{link.href}</code></div>
            <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
              <button type="button" style={btnGhost} onClick={() => void callApi('/api/blog/suggestions/apply', { kind: 'link', index: i }, 'Link insert')}>Accept</button>
              <button type="button" style={btnGhost} onClick={() => setIgnored((p) => ({ ...p, [key]: true }))}>Ignore</button>
            </div>
          </div>
        )
      })}

      {(suggestions.faq ?? []).map((item, i) => {
        const key = `faq-${i}`
        if (ignored[key] || accepted.faq?.includes(i)) return null
        return (
          <div key={key} style={{ marginTop: 8, paddingTop: 8, borderTop: '1px solid #e4e4e7' }}>
            <div><strong>Q:</strong> {item.question}</div>
            <div style={{ color: '#52525b', fontSize: 12 }}>{item.answer}</div>
            <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
              <button type="button" style={btnGhost} onClick={() => void callApi('/api/blog/suggestions/apply', { kind: 'faq', index: i }, 'FAQ add')}>Accept</button>
              <button type="button" style={btnGhost} onClick={() => setIgnored((p) => ({ ...p, [key]: true }))}>Ignore</button>
            </div>
          </div>
        )
      })}

      {suggestions.social && (
        <div style={{ marginTop: 10, paddingTop: 8, borderTop: '1px solid #e4e4e7' }}>
          <strong>Social snippets</strong>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 6 }}>
            {suggestions.social.xThread?.length ? <button type="button" style={btnGhost} onClick={() => copy(suggestions.social!.xThread!.join('\n\n---\n\n'), 'X thread')}>Copy X thread</button> : null}
            {suggestions.social.instagramSlides?.length ? <button type="button" style={btnGhost} onClick={() => copy(suggestions.social!.instagramSlides!.map((s, idx) => `${idx + 1}. ${s.title}\n${s.text}`).join('\n\n'), 'IG slides')}>Copy IG slides</button> : null}
            {suggestions.social.linkedin ? <button type="button" style={btnGhost} onClick={() => copy(suggestions.social!.linkedin!, 'LinkedIn')}>Copy LinkedIn</button> : null}
            {suggestions.social.telegram ? <button type="button" style={btnGhost} onClick={() => copy(suggestions.social!.telegram!, 'Telegram')}>Copy Telegram</button> : null}
            {suggestions.social.telegram && !accepted.telegram ? (
              <button type="button" style={btnGhost} onClick={() => void callApi('/api/blog/suggestions/apply', { kind: 'telegram' }, 'Telegram snippet')}>Use for auto-Telegram</button>
            ) : null}
          </div>
        </div>
      )}
    </div>
  )
}
