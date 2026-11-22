import { describe, expect, it, vi } from 'vitest'

const { reviseDraft } = vi.hoisted(() => ({ reviseDraft: vi.fn() }))
vi.mock('@/lib/smart/reviseCurrentAffair', () => ({ reviseCurrentAffair: reviseDraft }))

import { endpoints } from '@/endpoints'
import { SmartError } from '@/lib/smart/errors'

function reviewRequest(body: unknown, existingLayout: unknown[] = [{ blockType: 'summary' }], reviewStatus = 'pending', docStatus = 'draft', isAiGenerated = true) {
  const update = vi.fn(async (args: Record<string, unknown>) => ({ id: 7, ...(args.data as object) }))
  const findByID = vi.fn(async () => ({ id: 7, layout: existingLayout, reviewStatus, _status: docStatus, isAiGenerated }))
  const endpoint = endpoints.find(({ path }) => path === '/admin/review/:id')!
  const req = {
    user: { id: 1, role: 'editor' }, routeParams: { id: '7' }, json: async () => body,
    payload: { findByID, update },
  }
  return { handler: endpoint.handler, req: req as never, update, findByID }
}

describe('topic review actions', () => {
  it('routes revision feedback to the AI revision service for an eligible draft', async () => {
    reviseDraft.mockClear()
    reviseDraft.mockResolvedValue({ id: 7, headline: 'Revised item' })
    const { handler, req } = reviewRequest({ action: 'revise', reason: 'Explain the sociology link more clearly' })
    const response = await handler(req)
    const body = await response.json() as { data: { headline: string } }

    expect(response.status).toBe(200)
    expect(reviseDraft).toHaveBeenCalledWith(expect.anything(), 7, 'Explain the sociology link more clearly')
    expect(body.data.headline).toBe('Revised item')
  })
  it('requires useful feedback and only allows AI revision for current affairs', async () => {
    reviseDraft.mockClear()
    const invalidRequest = reviewRequest({ action: 'revise', reason: 'no' })
    const invalid = await invalidRequest.handler(invalidRequest.req)
    const unsupported = reviewRequest({ action: 'revise', kind: 'topic', reason: 'Explain this more clearly' })
    const unsupportedResponse = await unsupported.handler(unsupported.req)

    expect(invalid.status).toBe(400)
    expect(unsupportedResponse.status).toBe(400)
    expect(reviseDraft).not.toHaveBeenCalled()
  })
  it('returns budget and provider errors without converting them to publish failures', async () => {
    reviseDraft.mockRejectedValueOnce(new SmartError('Aaj ka AI budget khatam ho gaya.', 429))
    const { handler, req } = reviewRequest({ action: 'revise', reason: 'Explain the sociology link clearly' })
    const response = await handler(req)
    const body = await response.json() as { error: string }

    expect(response.status).toBe(429)
    expect(body.error).toContain('budget')
  })
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

  it('rejects an AI current-affairs draft without making it public', async () => {
    const { handler, req, update } = reviewRequest({ action: 'reject', reason: 'Source is not reliable' })
    const response = await handler(req)
    expect(response.status).toBe(200)
    expect(update).toHaveBeenCalledWith(expect.objectContaining({ collection: 'current-affairs', id: 7, draft: true, data: expect.objectContaining({ reviewStatus: 'rejected', rejectReason: 'Source is not reliable', _status: 'draft' }) }))
  })

  it('does not offer a published current-affairs item for review', async () => {
    const { handler, req, update } = reviewRequest({ action: 'approve' }, [], 'pending', 'published', false)
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
})

describe('review queue preview links', () => {
  it('returns session-authenticated preview links without embedding PREVIEW_SECRET', async () => {
    const payload = {
      find: vi.fn(async ({ collection, where }: { collection: string; where: { and?: Record<string, unknown>[]; reviewStatus?: { equals: string } } }) => {
        if (collection === 'current-affairs') {
          expect(where.and).toContainEqual({ isAiGenerated: { equals: true } })
          expect(where.and).toContainEqual({ 'aiMeta.model': { not_equals: 'sample' } })
        }
        else expect(where.reviewStatus).toEqual({ equals: 'pending' })
        return collection === 'current-affairs'
          ? { docs: [{ id: 7, headline: 'Current affair draft', date: '2026-11-21', paper: 'P2', _status: 'draft', isAiGenerated: true, aiMeta: {}, sources: [{ name: 'PIB', url: 'https://pib.gov.in' }], topics: [], thinkers: [], layout: [{ blockType: 'richText' }, { blockType: 'pyqList' }], createdAt: '2026-11-21T00:00:00Z' }] }
          : { docs: [{ id: 8, title: 'Topic draft', date: '2026-11-21', updatedAt: '2026-11-21T00:00:00Z', createdAt: '2026-11-21T00:00:00Z', reviewStatus: 'pending', _status: 'draft', layout: [{}], unit: { slug: 'unit-1', paper: { slug: 'paper-1' } }, aiMeta: {} }] }
      }),
    }
    const endpoint = endpoints.find(({ path }) => path === '/admin/review-queue')!
    const response = await endpoint.handler({ user: { role: 'editor' }, payload } as never)
    const body = await response.json() as { data: { id: number; previewHref: string; paper?: string; quality?: { source: boolean; syllabus: boolean; sociology: boolean; pyq: boolean } }[] }

    expect(body.data.find(({ id }) => id === 7)?.previewHref).toBe('/api/preview?collection=current-affairs&id=7')
    expect(body.data.find(({ id }) => id === 8)?.previewHref).toBe('/api/preview?collection=topics&id=8')
    expect(JSON.stringify(body)).not.toContain('PREVIEW_SECRET')
    expect(body.data.find(({ id }) => id === 7)).toMatchObject({ paper: 'P2', quality: { source: true, syllabus: false, sociology: true, pyq: true } })
  })
})
