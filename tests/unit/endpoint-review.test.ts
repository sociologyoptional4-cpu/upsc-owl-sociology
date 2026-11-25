import { describe, expect, it, vi } from 'vitest'
import { endpoints } from '@/endpoints'

function reviewRequest(body: unknown, existingLayout: unknown[] = [{ blockType: 'summary' }], reviewStatus = 'pending', docStatus = 'draft') {
  const update = vi.fn(async (args: Record<string, unknown>) => ({ id: 7, ...(args.data as object) }))
  const findByID = vi.fn(async () => ({ id: 7, layout: existingLayout, reviewStatus, _status: docStatus }))
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
    expect(update).toHaveBeenCalledWith(expect.objectContaining({ collection: 'current-affairs', id: 7, draft: false, data: expect.objectContaining({ reviewStatus: 'approved', _status: 'published' }) }))
  })

  it('does not offer a published current-affairs item for review', async () => {
    const { handler, req, update } = reviewRequest({ action: 'approve' }, [], 'pending', 'published')
    const response = await handler(req)
    expect(response.status).toBe(409)
    expect(update).not.toHaveBeenCalled()
  })

  it('does not approve a topic without a pending note draft', async () => {
    const { handler, req, update } = reviewRequest({ action: 'approve', kind: 'topic' }, [], 'approved')
    const response = await handler(req)
    expect(response.status).toBe(409)
    expect(update).not.toHaveBeenCalled()
  })

  it('reopens a rejected current-affairs draft back to pending', async () => {
    const { handler, req, update } = reviewRequest({ action: 'reopen', kind: 'ca' }, [], 'rejected', 'draft')
    const response = await handler(req)
    expect(response.status).toBe(200)
    expect(update).toHaveBeenCalledWith(expect.objectContaining({
      collection: 'current-affairs',
      id: 7,
      draft: true,
      data: expect.objectContaining({ reviewStatus: 'pending', rejectReason: null, _status: 'draft' }),
    }))
  })

  it('approves a rejected current-affairs draft directly', async () => {
    const { handler, req, update } = reviewRequest({ action: 'approve', kind: 'ca' }, [], 'rejected', 'draft')
    const response = await handler(req)
    expect(response.status).toBe(200)
    expect(update).toHaveBeenCalledWith(expect.objectContaining({
      collection: 'current-affairs',
      id: 7,
      draft: false,
      data: expect.objectContaining({ reviewStatus: 'approved', _status: 'published' }),
    }))
  })

  it('bulk-approves multiple items sequentially and reports partial failures', async () => {
    const update = vi.fn(async (args: Record<string, unknown>) => ({ id: args.id, ...(args.data as object) }))
    const findByID = vi.fn(async ({ id }: { id: number }) =>
      id === 7
        ? { id: 7, layout: [], reviewStatus: 'pending', _status: 'draft' }
        : { id, layout: [], reviewStatus: 'approved', _status: 'published' })
    const endpoint = endpoints.find(({ path }) => path === '/admin/review/bulk')!
    const response = await endpoint.handler({
      user: { id: 1, role: 'admin' },
      json: async () => ({ action: 'approve', items: [{ id: 7, kind: 'ca' }, { id: 8, kind: 'ca' }] }),
      payload: { findByID, update },
    } as never)
    expect(response.status).toBe(200)
    const body = await response.json() as { data: { approved: { id: number }[]; failed: { id: number }[] } }
    expect(body.data.approved).toEqual([{ id: 7, kind: 'ca' }])
    expect(body.data.failed).toHaveLength(1)
    expect(body.data.failed[0]?.id).toBe(8)
  })
})

describe('review queue preview links and status filters', () => {
  it('returns session-authenticated preview links without embedding PREVIEW_SECRET', async () => {
    const payload = {
      find: vi.fn(async ({ collection, where }: { collection: string; where: { and: { _status?: { equals: string } }[] } }) => {
        expect(where.and).toContainEqual({ _status: { equals: 'draft' } })
        return collection === 'current-affairs'
          ? { docs: [{ id: 7, headline: 'Current affair draft', date: '2026-11-21', _status: 'draft', aiMeta: {}, sources: [], topics: [], thinkers: [], createdAt: '2026-11-21T00:00:00Z' }] }
          : { docs: [{ id: 8, title: 'Topic draft', date: '2026-11-21', updatedAt: '2026-11-21T00:00:00Z', createdAt: '2026-11-21T00:00:00Z', reviewStatus: 'pending', _status: 'draft', layout: [{}], unit: { slug: 'unit-1', paper: { slug: 'paper-1' } }, aiMeta: {} }] }
      }),
    }
    const endpoint = endpoints.find(({ path }) => path === '/admin/review-queue')!
    const response = await endpoint.handler({ user: { role: 'editor' }, payload } as never)
    const body = await response.json() as { data: { id: number; previewHref: string }[] }

    expect(body.data.find(({ id }) => id === 7)?.previewHref).toBe('/api/preview?collection=current-affairs&id=7')
    expect(body.data.find(({ id }) => id === 8)?.previewHref).toBe('/api/preview?collection=topics&id=8')
    expect(JSON.stringify(body)).not.toContain('PREVIEW_SECRET')
  })

  it('supports status=rejected and status=approved queries', async () => {
    const payload = {
      find: vi.fn(async ({ collection }: { collection: string }) => {
        if (collection === 'current-affairs') {
          return { docs: [{ id: 12, headline: 'Approved CA', slug: 'approved-ca', date: '2026-11-21', reviewStatus: 'approved', rejectReason: 'Not enough sociology depth', _status: 'published', aiMeta: {}, sources: [], topics: [], thinkers: [], createdAt: '2026-11-21T00:00:00Z' }] }
        }
        return { docs: [] }
      }),
    }
    const endpoint = endpoints.find(({ path }) => path === '/admin/review-queue')!
    const rejectedRes = await endpoint.handler({ user: { role: 'admin' }, url: 'http://localhost/api/admin/review-queue?status=rejected', payload } as never)
    const rejectedBody = await rejectedRes.json() as { data: { id: number; rejectReason: string }[] }
    expect(rejectedRes.status).toBe(200)
    expect(rejectedBody.data[0]?.rejectReason).toBe('Not enough sociology depth')

    const approvedRes = await endpoint.handler({ user: { role: 'admin' }, url: 'http://localhost/api/admin/review-queue?status=approved', payload } as never)
    const approvedBody = await approvedRes.json() as { data: { id: number; liveHref: string | null }[] }
    expect(approvedRes.status).toBe(200)
    expect(approvedBody.data[0]?.liveHref).toBe('/current-affairs/2026-11-21/approved-ca')
  })
})
