/** Browser-side calls for the writing desk. Contracts: docs/09 §3 (C1 media, C3 import). */

export type ImportResult = { postId: number; adminUrl: string; title: string; wordCount: number; warnings: string[]; detail?: string }
type Envelope<T> = { success: boolean; data: T | null; error: string | null }

export class DeskError extends Error {
  constructor(message: string, readonly existing?: { postId: number; adminUrl: string }) { super(message) }
}

const MAX_IMAGE_MB = 8
const MAX_FILE_MB = 10

async function readJson(res: Response): Promise<unknown> {
  return res.json().catch(() => null)
}

function explain(status: number, fallback: string): string {
  if (status === 401 || status === 403) return 'Login ya permission nahi hai. Admin/editor se login karo.'
  if (status === 413) return 'File bahut badi hai.'
  if (status === 429) return 'Thoda ruko, bahut jaldi-jaldi request ho gayi. 1 minute baad try karo.'
  return fallback
}

export async function importDraft(body: BodyInit, isJson: boolean): Promise<ImportResult> {
  let res: Response
  try {
    res = await fetch('/api/blog/import', { method: 'POST', credentials: 'same-origin', ...(isJson ? { headers: { 'Content-Type': 'application/json' } } : {}), body })
  } catch {
    throw new DeskError('Network error. Internet check karo aur dobara try karo.')
  }
  const payload = (await readJson(res)) as Envelope<ImportResult & { postId?: number }> | null
  if (res.status === 409 && payload?.data?.postId) {
    throw new DeskError('Ye content pehle se draft/post mein hai.', { postId: payload.data.postId, adminUrl: `/admin/collections/posts/${payload.data.postId}` })
  }
  if (!res.ok || !payload?.success || !payload.data) throw new DeskError(payload?.error ?? explain(res.status, `Import nahi hua (${res.status}).`))
  return payload.data
}

export const importJson = (payload: Record<string, unknown>): Promise<ImportResult> => importDraft(JSON.stringify(payload), true)

export function importFile(file: File, options: { title?: string; attach?: boolean }): Promise<ImportResult> {
  if (file.size > MAX_FILE_MB * 1024 * 1024) return Promise.reject(new DeskError(`File ${MAX_FILE_MB} MB se chhoti honi chahiye.`))
  const form = new FormData()
  form.append('file', file)
  if (options.title) form.append('title', options.title)
  if (options.attach) form.append('attach', 'true')
  return importDraft(form, false)
}

export async function uploadImage(file: File): Promise<number> {
  if (!file.type.startsWith('image/')) throw new DeskError(`"${file.name}" image nahi hai.`)
  if (file.size > MAX_IMAGE_MB * 1024 * 1024) throw new DeskError(`"${file.name}" ${MAX_IMAGE_MB} MB se badi hai.`)
  const form = new FormData()
  form.append('file', file)
  let res: Response
  try { res = await fetch('/api/media', { method: 'POST', credentials: 'same-origin', body: form }) } catch { throw new DeskError('Network error. Image upload nahi hui.') }
  const payload = (await readJson(res)) as { doc?: { id?: number }; errors?: { message?: string }[] } | null
  const id = payload?.doc?.id
  if (!res.ok || typeof id !== 'number') throw new DeskError(payload?.errors?.[0]?.message ?? explain(res.status, `"${file.name}" upload nahi hui (${res.status}).`))
  return id
}

/** Pulls image files from a paste/drop event, ignoring everything else. */
export function imagesFrom(list: ArrayLike<File | DataTransferItem> | null | undefined): File[] {
  if (!list) return []
  const files: File[] = []
  for (const entry of Array.from(list)) {
    const file = entry instanceof File ? entry : entry.kind === 'file' ? entry.getAsFile() : null
    if (file?.type.startsWith('image/')) files.push(file)
  }
  return files
}

// ---- Smart paste (docs/10 C5/C6) ----
const QUIZ_FLAG_TEXT: Record<string, string> = {
  'answer-guessed': 'answer AI ne guess kiya, check karo',
  'explanation-written': 'explanation AI ne likha, check karo',
  'no-story-match': 'koi current affair match nahi hua',
  'options-fixed': 'options 4 nahi the, thik kiye gaye, check karo',
}
type QuizData = { quizId: number; adminUrl: string; added: number; flags: { index: number; kind: string }[] }
type CaData = { id: number; adminUrl: string; headline: string; topics: string[]; thinkers: string[]; warnings: string[] }

async function smartPost<T>(path: string, body: Record<string, unknown>): Promise<{ data: T; status: number }> {
  let res: Response
  try { res = await fetch(path, { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }) } catch { throw new DeskError('Network error. Internet check karo aur dobara try karo.') }
  const payload = (await readJson(res)) as Envelope<T> | null
  if (res.status === 404 || res.status === 405) throw new DeskError('Ye feature abhi server pe ready nahi hai (update deploy hone do).')
  if (res.status === 409 && payload?.data) {
    const data = payload.data as unknown as { quizId?: number; id?: number; adminUrl?: string }
    const id = data.quizId ?? data.id
    throw new DeskError(payload.error ?? 'Ye pehle se maujood hai.', id ? { postId: id, adminUrl: data.adminUrl ?? '/admin' } : undefined)
  }
  if (!res.ok || !payload?.success || !payload.data) throw new DeskError(payload?.error ?? explain(res.status, `Request fail hui (${res.status}).`))
  return { data: payload.data, status: res.status }
}

export async function smartQuiz(text: string, date?: string): Promise<ImportResult> {
  const { data } = await smartPost<QuizData>('/api/smart/quiz', { text, ...(date ? { date } : {}) })
  return {
    postId: data.quizId, adminUrl: data.adminUrl, title: `Quiz draft (${data.added} sawal)`, wordCount: 0, detail: `${data.added} sawal`,
    warnings: data.flags.map((flag) => `Sawal ${flag.index + 1}: ${QUIZ_FLAG_TEXT[flag.kind] ?? flag.kind}`),
  }
}

export async function smartCurrentAffair(text: string, url?: string): Promise<ImportResult> {
  const { data } = await smartPost<CaData>('/api/smart/current-affair', { text, ...(url ? { url } : {}) })
  return {
    postId: data.id, adminUrl: '/admin/review', title: data.headline, wordCount: 0,
    detail: `${data.topics.length} topics, ${data.thinkers.length} thinkers jude`, warnings: data.warnings,
  }
}
