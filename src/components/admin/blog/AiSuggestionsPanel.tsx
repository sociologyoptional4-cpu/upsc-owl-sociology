'use client'

import { useDocumentInfo, useFormFields } from '@payloadcms/ui'
import { useState } from 'react'

import { uploadImage } from '../write/api'
import { DropZone } from '../write/DropZone'

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
  imageSuggestions?: { afterHeading: string; kind?: string; title: string }[]
  warnings?: { claim: string; reason: string }[]
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
  // Message carried over a reload (studio failed after earlier steps had already saved).
  const [msg, setMsg] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null
    const saved = sessionStorage.getItem('owl-studio-msg')
    if (saved) sessionStorage.removeItem('owl-studio-msg')
    return saved
  })
  const [ignored, setIgnored] = useState<Record<string, boolean>>({})

  const postId = typeof id === 'number' ? id : Number(id)
  const suggestions = rawSuggestions ?? {}
  const accepted = suggestions.accepted ?? {}

  async function callApi(url: string, body: Record<string, unknown>, label: string) {
    if (!postId) { setMsg('Pehle post ko Save karo.'); return }
    setBusy(label); setMsg(null)
    try {
      const res = await fetch(url, { method: 'POST', credentials: 'same-origin', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ postId, ...body }) })
      const json = (await res.json().catch(() => null)) as { success?: boolean; error?: string } | null
      if (!res.ok || !json?.success) throw new Error(json?.error ?? `HTTP ${res.status}`)
      setMsg(`${label} ho gaya — page refresh ho raha hai...`)
      window.location.reload()
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Action failed')
    } finally {
      setBusy(null)
    }
  }

  const STEPS: [string, string][] = [
    ['/api/blog/organize', '1/3 Topics, thinkers, SEO jod raha…'],
    ['/api/blog/enrich', '2/3 Likh raha: khabar, colours, PYQ, examples…'],
    ['/api/blog/images', '3/3 Photo + infographic / mind map…'],
  ]

  async function runStudio() {
    if (!postId) { setMsg('Pehle post ko Save karo.'); return }
    setBusy('Studio'); setMsg(null)
    let done = 0
    try {
      for (const [url, label] of STEPS) {
        setMsg(label)
        const res = await fetch(url, { method: 'POST', credentials: 'same-origin', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ postId }) })
        const json = (await res.json().catch(() => null)) as { success?: boolean; error?: string } | null
        if (!res.ok || !json?.success) throw new Error(`${label.slice(0, 3)} ${json?.error ?? `HTTP ${res.status}`}`)
        done += 1
      }
      setMsg('Ho gaya — page refresh ho raha hai...')
      window.location.reload()
    } catch (e) {
      // Earlier steps already saved on the server: reload so the open form cannot autosave stale (empty) fields over them.
      const text = e instanceof Error ? e.message : 'Studio failed'
      if (done > 0) { sessionStorage.setItem('owl-studio-msg', text); window.location.reload(); return }
      setMsg(text)
    } finally {
      setBusy(null)
    }
  }

  async function addImages(files: File[]) {
    if (!postId) { setMsg('Pehle post ko Save karo.'); return }
    setBusy('Image'); setMsg(`${files.length} image upload ho rahi…`)
    try {
      const mediaIds: number[] = []
      for (const file of files) mediaIds.push(await uploadImage(file))
      const res = await fetch('/api/blog/attach-media', { method: 'POST', credentials: 'same-origin', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ postId, mediaIds }) })
      const json = (await res.json().catch(() => null)) as { success?: boolean; error?: string } | null
      if (!res.ok || !json?.success) throw new Error(json?.error ?? `HTTP ${res.status}`)
      setMsg('Image lag gayi — page refresh ho raha hai...')
      window.location.reload()
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Image upload failed')
    } finally {
      setBusy(null)
    }
  }

  async function acceptAll() {
    if (!postId) { setMsg('Pehle post ko Save karo.'); return }
    setBusy('Sab accept'); setMsg(null)
    try {
      const res = await fetch('/api/blog/suggestions/apply-all', { method: 'POST', credentials: 'same-origin', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ postId }) })
      const json = (await res.json().catch(() => null)) as { success?: boolean; error?: string; data?: { links?: number; faq?: number; tags?: number } } | null
      if (!res.ok || !json?.success) throw new Error(json?.error ?? `HTTP ${res.status}`)
      const d = json.data ?? {}
      sessionStorage.setItem('owl-studio-msg', `✓ Lag gaya: ${d.tags ?? 0} tags, ${d.faq ?? 0} FAQ (neeche FAQ section me), ${d.links ?? 0} internal links. Ab Publish karo.`)
      window.location.reload()
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Accept failed')
    } finally {
      setBusy(null)
    }
  }

  const pendingOf = (list: unknown[] | undefined, done: number[] | undefined) => (list ?? []).filter((_, i) => !(done ?? []).includes(i)).length
  const pendingCount = pendingOf(suggestions.newTags, accepted.tags) + pendingOf(suggestions.internalLinks, accepted.links) + pendingOf(suggestions.faq, accepted.faq)
  const totalCount = (suggestions.newTags?.length ?? 0) + (suggestions.internalLinks?.length ?? 0) + (suggestions.faq?.length ?? 0)

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

      <button type="button" style={{ ...btn, padding: '10px 14px', fontSize: 14 }} disabled={Boolean(busy)} onClick={() => void runStudio()}>
        {busy === 'Studio' ? 'Kaam chal raha hai…' : '✨ AI se poora banao'}
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
        <button type="button" style={btnGhost} disabled={Boolean(busy)} onClick={() => void callApi('/api/blog/organize', {}, '1. Organize')}>
          {busy === '1. Organize' ? 'Organizing…' : '1. Organize (SEO/Topics)'}
        </button>
        <button type="button" style={btnGhost} disabled={Boolean(busy)} onClick={() => void callApi('/api/blog/enrich', {}, '2. Enrich')}>
          {busy === '2. Enrich' ? 'Enriching…' : '2. Enrich (Notes/PYQ)'}
        </button>
        <button type="button" style={btnGhost} disabled={Boolean(busy)} onClick={() => void callApi('/api/blog/images', {}, '3. Images')}>
          {busy === '3. Images' ? 'Generating…' : '3. Images'}
        </button>
        <button type="button" style={btnGhost} disabled={Boolean(busy)} onClick={() => void callApi('/api/blog/beautify', {}, '4. Beautify')}>
          {busy === '4. Beautify' ? 'Formatting…' : '4. Beautify'}
        </button>
      </div>
      {aiStatus === 'queued' && (
        <p style={{ margin: '6px 0 0', fontSize: 11, color: '#b45309', fontWeight: 600 }}>
          Background job queue mein hai — upar <strong>1. Organize</strong> dabakar abhi chala sakte ho.
        </p>
      )}
      <p style={{ margin: '6px 0 0', fontSize: 11, color: '#52525b' }}>
        Ek click: topics/thinkers/SEO, khabar ka explain + simple language + colours, notes + PYQs ka linkage, Mains/Prelims angle, aur photo / infographic / mind map. Naya draft version banta hai; wapas jaane ke liye <strong>Versions</strong> tab. ~1-2 minute lagta hai.
      </p>

      <div style={{ marginTop: 10 }}>
        <DropZone label="📷 Image yahan paste (Cmd+V) ya drop karo" accept="image/*" multiple acceptPaste disabled={Boolean(busy)} onFiles={(files) => void addImages(files)}>
          <span style={{ fontSize: 12 }}>📷 Image yahan <strong>paste (Cmd+V)</strong>, drop ya click karo — pehli image cover banegi (agar cover khali hai), baaki post ke end me lagengi (editor me drag karke jagah badlo).</span>
        </DropZone>
      </div>

      {msg && <p style={{ marginTop: 8, padding: 6, borderRadius: 4, background: '#fef9c3', fontSize: 12 }}>{msg}</p>}
      {(suggestions.warnings ?? []).length > 0 && (
        <div style={{ marginTop: 8, padding: 6, borderRadius: 4, background: '#fee2e2', fontSize: 12 }}>
          <strong>⚠️ Ek baar check karo (AI ko in ka source nahi mila):</strong>
          {(suggestions.warnings ?? []).map((w, i) => <div key={`warn-${i}`}>• {w.claim} — <em>{w.reason}</em></div>)}
        </div>
      )}
      {suggestions.error && <p style={{ marginTop: 8, color: '#b91c1c', fontSize: 12 }}>Error: {suggestions.error}</p>}

      {pendingCount > 0 ? (
        <div style={{ marginTop: 10 }}>
          <button type="button" style={btn} disabled={Boolean(busy)} onClick={() => void acceptAll()}>
            {busy === 'Sab accept' ? 'Laga raha…' : `✓ Sab accept karo (${pendingCount})`}
          </button>
        </div>
      ) : totalCount > 0 ? (
        <p style={{ marginTop: 10, fontSize: 12, color: '#15803d', fontWeight: 600 }}>✓ Saare suggestions lag chuke hain (tags, FAQ, links). Ab Publish kar sakte ho.</p>
      ) : null}

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
