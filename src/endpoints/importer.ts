import type { Endpoint, PayloadRequest } from 'payload'
import { z } from 'zod'

import { hasRole, type Role } from '@/access/roles'
import { ImportError } from '@/lib/blog/import/errors'
import { importPost, type ImportInput } from '@/lib/blog/import/run'
import { rateLimited } from '@/lib/rateLimit'

const MAX_BODY = 12 * 1024 * 1024
const MAX_FILE = 10 * 1024 * 1024
const respond = (success: boolean, data: unknown, error: string | null, status = 200) => Response.json({ success, data, error }, { status })

const jsonSchema = z.discriminatedUnion('source', [
  z.object({ source: z.enum(['markdown', 'html']), text: z.string().min(1).max(400_000), title: z.string().trim().max(200).optional() }).strict(),
  z.object({ source: z.literal('template'), template: z.enum(['concept', 'thinker', 'pyq', 'answer']), title: z.string().trim().min(3).max(200) }).strict(),
  z.object({ source: z.literal('images'), title: z.string().trim().min(3).max(200), mediaIds: z.array(z.number().int().positive()).min(1).max(12), layout: z.enum(['infographic', 'gallery']) }).strict(),
])

async function readInput(req: PayloadRequest): Promise<ImportInput> {
  if (Number(req.headers.get('content-length') ?? 0) > MAX_BODY) throw new ImportError('Request bahut badi hai.', 413)
  if ((req.headers.get('content-type') ?? '').includes('multipart/form-data')) {
    const form = await req.formData?.()
    const file = form?.get('file')
    if (!(file instanceof File)) throw new ImportError('File nahi mili.', 400)
    if (file.size > MAX_FILE) throw new ImportError('File 10 MB se chhoti honi chahiye.', 413)
    const title = form?.get('title')
    return { source: 'file', name: file.name, bytes: new Uint8Array(await file.arrayBuffer()), mimetype: file.type, title: typeof title === 'string' && title.trim() ? title.trim() : undefined, attach: form?.get('attach') === 'true' }
  }
  let body: unknown
  try { body = req.json ? await req.json() : null } catch { throw new ImportError('Invalid JSON', 400) }
  const parsed = jsonSchema.safeParse(body)
  if (!parsed.success) throw new ImportError(parsed.error.issues.map((i) => i.message).join('; '), 400)
  return parsed.data
}

const handler: Endpoint['handler'] = async (req) => {
  const user = req.user as { id?: number | string; role?: Role } | null
  if (!hasRole(user, 'admin', 'editor') || user?.id === undefined) return respond(false, null, 'Login ya permission nahi hai.', 401)
  if (rateLimited(req, 'blog-import', 12)) return respond(false, null, 'Bahut jaldi-jaldi request. 1 minute baad try karo.', 429)
  try {
    return respond(true, await importPost(req.payload, user.id, await readInput(req)), null)
  } catch (error) {
    if (error instanceof ImportError) return respond(false, error.data ?? null, error.message, error.status)
    req.payload.logger.error(`blog import failed: ${error instanceof Error ? error.message : 'unknown'}`)
    return respond(false, null, 'Import nahi hua. File check karke dobara try karo.', 500)
  }
}

export const importEndpoints: Endpoint[] = [{ path: '/blog/import', method: 'post', handler }]
