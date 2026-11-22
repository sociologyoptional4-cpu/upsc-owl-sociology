import type { Endpoint, PayloadRequest } from 'payload'
import { z } from 'zod'

import { hasRole, type Role } from '@/access/roles'
import { rateLimited } from '@/lib/rateLimit'
import { SmartError } from '@/lib/smart/errors'
import { smartCurrentAffair } from '@/lib/smart/currentAffair'
import { smartQuiz } from '@/lib/smart/quiz'

const MAX_BODY = 90_000
const respond = (success: boolean, data: unknown, error: string | null, status = 200) => Response.json({ success, data, error }, { status })
const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine((v) => new Date(`${v}T00:00:00Z`).toISOString().slice(0, 10) === v, 'Date galat hai').optional()

const quizBody = z.object({ text: z.string().trim().min(30, 'Thoda aur content paste karo.').max(40_000, 'Text 40,000 characters se chhota rakho.'), date }).strict()
const caBody = z.object({
  text: z.string().trim().min(30, 'Thoda aur content paste karo.').max(60_000, 'Text 60,000 characters se chhota rakho.'),
  url: z.string().url().max(2048).optional(), sourceName: z.string().trim().max(160).optional(), date,
}).strict()

async function readBody(req: PayloadRequest): Promise<unknown> {
  if (Number(req.headers.get('content-length') ?? 0) > MAX_BODY) throw new SmartError('Request bahut badi hai.', 413)
  const raw = req.text ? await req.text() : ''
  if (new TextEncoder().encode(raw).byteLength > MAX_BODY) throw new SmartError('Request bahut badi hai.', 413)
  try { return JSON.parse(raw) } catch { throw new SmartError('Invalid JSON', 400) }
}

function guarded<T extends z.ZodType>(scope: string, schema: T, run: (req: PayloadRequest, input: z.infer<T>) => Promise<unknown>): Endpoint['handler'] {
  return async (req) => {
    if (!hasRole(req.user as { role?: Role } | null, 'admin', 'editor')) return respond(false, null, 'Login ya permission nahi hai.', 401)
    if (rateLimited(req, scope, 6)) return respond(false, null, 'Bahut jaldi-jaldi request. 1 minute baad try karo.', 429)
    try {
      const parsed = schema.safeParse(await readBody(req))
      if (!parsed.success) return respond(false, null, parsed.error.issues.map((i) => i.message).join('; '), 400)
      return respond(true, await run(req, parsed.data), null)
    } catch (error) {
      if (error instanceof SmartError) return respond(false, error.data ?? null, error.message, error.status)
      req.payload.logger.error(`smart paste failed: ${error instanceof Error ? error.message : 'unknown'}`)
      return respond(false, null, 'Kuch gadbad ho gayi. Dobara try karo.', 500)
    }
  }
}

export const smartEndpoints: Endpoint[] = [
  { path: '/smart/quiz', method: 'post', handler: guarded('smart-quiz', quizBody, (req, input) => smartQuiz(req.payload, input)) },
  { path: '/smart/current-affair', method: 'post', handler: guarded('smart-ca', caBody, (req, input) => smartCurrentAffair(req.payload, input)) },
]
