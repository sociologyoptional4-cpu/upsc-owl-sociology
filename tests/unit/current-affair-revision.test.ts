import { describe, expect, it, vi } from 'vitest'

import { updateCurrentAffairDraft } from '@/lib/ingest/createDraft'
import type { IngestItem } from '@/lib/ingest/schema'

describe('updateCurrentAffairDraft', () => {
  it('updates the same CMS item as a pending unpublished draft and stores reviewer feedback', async () => {
    const update = vi.fn(async () => ({}))
    const payload = {
      find: vi.fn(async () => ({ docs: [] })),
      update,
    }
    const item = {
      headline: 'Revised sociology story', date: '2026-11-22', paper: 'P1', topicSlugs: [], thinkerSlugs: [],
      sources: [{ name: 'PIB', url: 'https://pib.gov.in/story' }], summary: 'A fuller explanation.', relevance: 0.92,
      promptVersion: 'review-revision.v1', model: 'gpt-4.1-mini', costUsd: 0.02, layout: [],
    } as IngestItem

    await updateCurrentAffairDraft(payload as never, 44, item, 'source-hash', 'Add a clearer theory link.', { title: 'Revised story', description: 'Sociology context.' })

    expect(update).toHaveBeenCalledWith(expect.objectContaining({
      collection: 'current-affairs', id: 44, draft: true,
      data: expect.objectContaining({
        headline: 'Revised sociology story', reviewStatus: 'pending', rejectReason: 'Add a clearer theory link.',
        sourceHash: 'source-hash', isAiGenerated: true, _status: 'draft',
        aiMeta: expect.objectContaining({ promptVersion: 'review-revision.v1', costUsd: 0.02 }),
        seo: { title: 'Revised story', description: 'Sociology context.' },
      }),
    }))
  })
})
