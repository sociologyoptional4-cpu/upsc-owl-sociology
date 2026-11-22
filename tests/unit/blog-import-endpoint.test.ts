// @vitest-environment node
import { describe, expect, it, vi } from 'vitest'

vi.mock('@/lib/blog/import/run', () => ({ importPost: vi.fn(async () => ({ postId: 1, adminUrl: '/admin/collections/posts/1', title: 't', wordCount: 5, warnings: [] })) }))

import { importEndpoints } from '@/endpoints/importer'
import { importPost } from '@/lib/blog/import/run'

type Req = Parameters<(typeof importEndpoints)[0]['handler']>[0]
const handler = importEndpoints[0]!.handler
const staff = { id: 2, role: 'editor' }
const json = (user: unknown, body: unknown, headers: Record<string, string> = {}) => ({
  user, headers: new Headers({ 'content-type': 'application/json', ...headers }), payload: { logger: { error: vi.fn() } }, json: async () => body,
}) as unknown as Req
const multipart = (user: unknown, file: File | null, extra: Record<string, string> = {}) => {
  const form = new FormData()
  if (file) form.set('file', file)
  for (const [k, v] of Object.entries(extra)) form.set(k, v)
  return { user, headers: new Headers({ 'content-type': 'multipart/form-data; boundary=x' }), payload: { logger: { error: vi.fn() } }, formData: async () => form } as unknown as Req
}

describe('POST /blog/import', () => {
  it('rejects anonymous and ai-bot users', async () => {
    expect((await handler(json(null, { source: 'markdown', text: 'x' }))).status).toBe(401)
    expect((await handler(json({ id: 1, role: 'ai-bot' }, { source: 'markdown', text: 'x' }))).status).toBe(401)
  })
  it('accepts valid json and passes the user id', async () => {
    const res = await handler(json({ id: 7, role: 'admin' }, { source: 'markdown', text: 'hello world notes' }))
    expect(res.status).toBe(200)
    expect(importPost).toHaveBeenCalledWith(expect.anything(), 7, { source: 'markdown', text: 'hello world notes' })
  })
  it('rejects unknown fields, bad ids and bad json', async () => {
    expect((await handler(json(staff, { source: 'markdown', text: 'x', extra: 1 }))).status).toBe(400)
    expect((await handler(json(staff, { source: 'images', title: 'abc', mediaIds: [], layout: 'gallery' }))).status).toBe(400)
    expect((await handler(json(staff, { source: 'nope' }))).status).toBe(400)
  })
  it('enforces size limits', async () => {
    expect((await handler(json(staff, { source: 'markdown', text: 'x' }, { 'content-length': String(13 * 1024 * 1024) }))).status).toBe(413)
    const big = new File([new Uint8Array(10 * 1024 * 1024 + 1)], 'n.pdf')
    expect((await handler(multipart(staff, big))).status).toBe(413)
  })
  it('reads multipart files with title and attach flag', async () => {
    const file = new File(['hello notes here'], 'notes.md', { type: 'text/markdown' })
    const res = await handler(multipart(staff, file, { title: 'My notes', attach: 'true' }))
    expect(res.status).toBe(200)
    expect(importPost).toHaveBeenLastCalledWith(expect.anything(), 2, expect.objectContaining({ source: 'file', name: 'notes.md', title: 'My notes', attach: true }))
  })
  it('asks for a file when multipart has none and hides unexpected errors', async () => {
    expect((await handler(multipart(staff, null))).status).toBe(400)
    vi.mocked(importPost).mockRejectedValueOnce(new Error('db password leaked'))
    const res = await handler(json(staff, { source: 'markdown', text: 'hello world notes' }))
    expect(res.status).toBe(500)
    expect(JSON.stringify(await res.json())).not.toContain('password')
  })
})
