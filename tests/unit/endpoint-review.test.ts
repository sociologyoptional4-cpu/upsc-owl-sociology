import { describe, expect, it, vi } from 'vitest'
import { endpoints } from '@/endpoints'

function reviewRequest(body: unknown, existingLayout: unknown[] = [{ blockType: 'summary' }], reviewStatus = 'pending') {
  const update = vi.fn(async (args: Record<string, unknown>) => ({ id: 7, ...(args.data as object) }))
  const findByID = vi.fn(async () => ({ id: 7, layout: existingLayout, reviewStatus }))
  const endpoint = endpoints.find(({ path }) => path === '/admin/review/:id')!
  const req = {
    user: { id: 1, role: 'editor' }, routeParams: { id: '7' }, json: async () => body,
    payload: { findByID, update },
  }
  return { handler: endpoint.handler, req: req as never, update, findByID }
}

describe('topic review actions', () => {
  it('publishes the note draft when an editor approves it', async () => {
    const { handler, req, update } = reviewRequest({ action: 'approve', kind: 'topic' })
    const response = await handler(req)
    expect(response.status).toBe(200)
    expect(update).toHaveBeenCalledWith(expect.objectContaining({ collection: 'topics', id: 7, draft: false, data: expect.objectContaining({ reviewStatus: 'approved', _status: 'published' }) }))
  })

  it('rejects a topic draft without publishing its note body', async () => {
    const { handler, req, update } = reviewRequest({ action: 'reject', kind: 'topic', reason: 'Needs revision' })
    const response = await handler(req)
    expect(response.status).toBe(200)
    expect(update).toHaveBeenCalledWith(expect.objectContaining({ collection: 'topics', id: 7, draft: false, data: expect.objectContaining({ layout: [], reviewStatus: 'rejected', rejectReason: 'Needs revision', _status: 'published' }) }))
  })

  it('preserves the existing current-affairs review behavior when kind is omitted', async () => {
    const { handler, req, update } = reviewRequest({ action: 'approve' })
    await handler(req)
    expect(update).toHaveBeenCalledWith(expect.objectContaining({ collection: 'current-affairs', id: 7, data: expect.objectContaining({ reviewStatus: 'approved' }) }))
  })

  it('does not approve a topic without a pending note draft', async () => {
    const { handler, req, update } = reviewRequest({ action: 'approve', kind: 'topic' }, [], 'approved')
    const response = await handler(req)
    expect(response.status).toBe(409)
    expect(update).not.toHaveBeenCalled()
  })
})
