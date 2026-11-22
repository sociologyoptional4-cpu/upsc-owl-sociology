'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'

import { imagesFrom, importFile, importJson, smartCurrentAffair, smartQuiz, uploadImage } from './api'
import { Card, useRun } from './Card'
import { DropZone } from './DropZone'
import styles from './write-desk.module.css'

const NOTE_TYPES = '.md,.txt,.html,.htm,.docx,.pdf'
const MAX_GALLERY = 12

function Previews({ files }: { files: File[] }) {
  const urls = useMemo(() => files.map((file) => URL.createObjectURL(file)), [files])
  useEffect(() => () => urls.forEach((url) => URL.revokeObjectURL(url)), [urls])
  if (files.length === 0) return null
  return (
    <ul className={styles.previews}>
      {urls.map((url, index) => (
        // eslint-disable-next-line @next/next/no-img-element -- local blob preview, next/image cannot optimise blob: URLs
        <li key={url}><img src={url} alt={files[index]?.name ?? 'Preview'} /></li>
      ))}
    </ul>
  )
}

function NewBlogCard() {
  return (
    <Card index="01" tone="lavender" title="Naya blog likho" hint="Khaali editor kholo: colours, tables, blocks sab wahin hain." state={{ status: 'idle' }}>
      <Link href="/admin/collections/posts/create" className={styles.primary}>Editor kholo →</Link>
    </Card>
  )
}

const TEMPLATE_OPTIONS = [
  { value: 'concept', label: 'Concept explainer', hint: 'Definition, example, compare table, critique, model answer' },
  { value: 'thinker', label: 'Thinker profile', hint: 'Mukhya vichaar, key term, timeline, aaj ka India, UPSC angle' },
  { value: 'pyq', label: 'PYQ analysis', hint: 'Sawal ki demand, answer flow, model answer, marks tips' },
  { value: 'answer', label: 'Answer-writing guide', hint: 'Structure, flow, yaad rakho, common galtiyan' },
] as const

function TemplateCard() {
  const { state, run } = useRun()
  const [template, setTemplate] = useState<(typeof TEMPLATE_OPTIONS)[number]['value']>('concept')
  const [title, setTitle] = useState('')
  const busy = state.status === 'busy'
  const picked = TEMPLATE_OPTIONS.find((option) => option.value === template)
  const submit = async () => { if (await run('Template draft ban raha hai...', () => importJson({ source: 'template', template, title: title.trim() }))) setTitle('') }
  return (
    <Card index="08" tone="lavender" title="Template se shuru karo" hint="Khaali page ke bajay tayyar dhaancha: headings aur blocks pehle se, bas [brackets] bharo." state={state}>
      <label className={styles.field}><span>Template</span>
        <select value={template} disabled={busy} onChange={(event) => setTemplate(event.target.value as typeof template)}>
          {TEMPLATE_OPTIONS.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select></label>
      {picked ? <p className={styles.cardHint}>{picked.hint}</p> : null}
      <label className={styles.field}><span>Post ka title</span><input value={title} maxLength={200} disabled={busy} onChange={(event) => setTitle(event.target.value)} /></label>
      <button type="button" className={styles.primary} disabled={busy || title.trim().length < 3} onClick={() => void submit()}>Draft banao</button>
    </Card>
  )
}

function PasteCard() {
  const { state, run } = useRun()
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const clip = useRef<{ html: string; plain: string } | null>(null)
  const busy = state.status === 'busy'

  const submit = async () => {
    const html = clip.current && clip.current.plain === text ? clip.current.html : null
    const body = { source: html ? 'html' : 'markdown', text: html ?? text, ...(title.trim() ? { title: title.trim() } : {}) }
    if (await run('Draft ban raha hai...', () => importJson(body))) { setText(''); setTitle(''); clip.current = null }
  }

  return (
    <Card index="02" tone="yellow" title="ChatGPT se paste" hint="Markdown ya copy kiya hua text yahan daalo. Headings, bold aur tables bache rehte hain." state={state}>
      <label className={styles.field}><span>Title (khaali chhodo to khud nikalega)</span>
        <input value={title} onChange={(event) => setTitle(event.target.value)} maxLength={200} disabled={busy} /></label>
      <label className={styles.field}><span>Text</span>
        <textarea
          value={text}
          rows={7}
          disabled={busy}
          onChange={(event) => setText(event.target.value)}
          onPaste={(event) => { const html = event.clipboardData.getData('text/html'); clip.current = html ? { html, plain: event.clipboardData.getData('text/plain') } : null }}
          placeholder="Yahan Ctrl/Cmd+V karo"
        /></label>
      <button type="button" className={styles.primary} disabled={busy || text.trim().length < 20} onClick={() => void submit()}>Draft banao</button>
    </Card>
  )
}

function NotesCard() {
  const { state, run } = useRun()
  const [file, setFile] = useState<File | null>(null)
  const [attach, setAttach] = useState(false)
  const busy = state.status === 'busy'
  const isPdf = file?.name.toLowerCase().endsWith('.pdf') ?? false

  const submit = async () => {
    if (!file) return
    if (await run('File padh raha hoon...', () => importFile(file, { attach: attach && isPdf }))) { setFile(null); setAttach(false) }
  }

  return (
    <Card index="03" tone="mint" title="Notes upload" hint="Word, PDF (text wali), Markdown ya HTML. Draft ban jayega, AI kuch nahi badlega." state={state}>
      <DropZone label="Notes file yahan drop karo ya click karo" accept={NOTE_TYPES} disabled={busy} onFiles={(files) => setFile(files[0] ?? null)}>
        {file ? <span><strong>{file.name}</strong> ({Math.max(1, Math.round(file.size / 1024))} KB)</span> : <span>Notes file yahan drop karo ya click karo<br /><small>.docx · .pdf · .md · .txt · .html (10 MB tak)</small></span>}
      </DropZone>
      <label className={styles.check}><input type="checkbox" checked={attach && isPdf} disabled={!isPdf || busy} onChange={(event) => setAttach(event.target.checked)} />
        <span>Original PDF bhi download ke liye attach karo{!isPdf && file ? ' (sirf PDF)' : ''}</span></label>
      <button type="button" className={styles.primary} disabled={busy || !file} onClick={() => void submit()}>Draft banao</button>
    </Card>
  )
}

function ImagesCard({ index, tone, title, hint, layout, multiple }: { index: string; tone: 'pink' | 'lavender'; title: string; hint: string; layout: 'infographic' | 'gallery'; multiple: boolean }) {
  const { state, run } = useRun()
  const [files, setFiles] = useState<File[]>([])
  const [name, setName] = useState('')
  const busy = state.status === 'busy'
  const add = (incoming: File[]) => {
    const images = imagesFrom(incoming)
    setFiles((current) => (multiple ? [...current, ...images].slice(0, MAX_GALLERY) : images.slice(0, 1)))
  }

  const submit = async () => {
    const ok = await run('Images upload ho rahi hain...', async (progress) => {
      const ids: number[] = []
      for (const [position, file] of files.entries()) { progress(`Upload ${position + 1}/${files.length}...`); ids.push(await uploadImage(file)) }
      progress('Draft ban raha hai...')
      return importJson({ source: 'images', title: name.trim(), mediaIds: ids, layout })
    })
    if (ok) { setFiles([]); setName('') }
  }

  return (
    <Card index={index} tone={tone} title={title} hint={hint} state={state}>
      <DropZone label={`${title}: image paste ya drop karo`} accept="image/*" multiple={multiple} acceptPaste disabled={busy} onFiles={add}>
        <span>{multiple ? 'Images drop karo, click karo ya Ctrl/Cmd+V' : 'Yahan click karke Ctrl/Cmd+V karo, ya image drop karo'}<br /><small>PNG · JPG · WebP (8 MB tak){multiple ? ` · max ${MAX_GALLERY}` : ''}</small></span>
      </DropZone>
      <Previews files={files} />
      <label className={styles.field}><span>Post ka title</span><input value={name} maxLength={200} disabled={busy} onChange={(event) => setName(event.target.value)} /></label>
      <div className={styles.row}>
        <button type="button" className={styles.primary} disabled={busy || files.length === 0 || name.trim().length < 3 || (layout === 'gallery' && files.length < 2)} onClick={() => void submit()}>Draft banao</button>
        {files.length > 0 ? <button type="button" className={styles.ghost} disabled={busy} onClick={() => setFiles([])}>Saaf karo</button> : null}
      </div>
      {layout === 'gallery' && files.length === 1 ? <p className={styles.cardHint}>Gallery ke liye kam se kam 2 images chahiye.</p> : null}
    </Card>
  )
}

function SmartCard({ index, tone, title, hint, placeholder, withUrl, send }: { index: string; tone: 'yellow' | 'mint'; title: string; hint: string; placeholder: string; withUrl: boolean; send: (text: string, url?: string) => Promise<import('./api').ImportResult> }) {
  const { state, run } = useRun()
  const [text, setText] = useState('')
  const [url, setUrl] = useState('')
  const busy = state.status === 'busy'
  const submit = async () => {
    if (await run('AI padh raha hai aur fields bhar raha hai (30-60 sec)...', () => send(text, url.trim() || undefined))) { setText(''); setUrl('') }
  }
  return (
    <Card index={index} tone={tone} title={title} hint={hint} state={state}>
      {withUrl ? <label className={styles.field}><span>Source link (optional, hai to bahut behtar)</span><input value={url} type="url" disabled={busy} onChange={(event) => setUrl(event.target.value)} placeholder="https://..." /></label> : null}
      <label className={styles.field}><span>Content</span>
        <textarea value={text} rows={8} disabled={busy} maxLength={60000} placeholder={placeholder} onChange={(event) => setText(event.target.value)} /></label>
      <button type="button" className={styles.primary} disabled={busy || text.trim().length < 30} onClick={() => void submit()}>AI se bharwao →</button>
    </Card>
  )
}

export function WriteDeskClient() {
  return (
    <div className={styles.grid}>
      <NewBlogCard />
      <TemplateCard />
      <PasteCard />
      <NotesCard />
      <ImagesCard index="04" tone="pink" title="Infographic paste" hint="Screenshot ya infographic copy karo, zone mein click karke Ctrl/Cmd+V." layout="infographic" multiple={false} />
      <ImagesCard index="05" tone="lavender" title="Images ka post" hint="2 se 12 images, gallery ban jayegi. Phone pe 2 columns mein dikhegi." layout="gallery" multiple />
      <SmartCard index="06" tone="mint" title="Quiz paste" hint="Saare MCQs ek saath, kisi bhi format mein. Answer, explanation aur current-affair link AI bharega. Jo guess kiya, wo flag hoga." placeholder={'1. Question...\n(a) ... (b) ... (c) ... (d) ...\nAnswer: b'} withUrl={false} send={(text) => smartQuiz(text)} />
      <SmartCard index="07" tone="yellow" title="Current affair paste" hint="Article ya apne notes paste karo. Headline, topics, thinkers, source, summary aur SEO AI bharega. Review Queue mein pending jayega." placeholder="Khabar ka text ya notes yahan paste karo" withUrl send={(text, url) => smartCurrentAffair(text, url)} />
    </div>
  )
}
