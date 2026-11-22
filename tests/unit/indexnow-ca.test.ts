import { beforeEach, describe, expect, it, vi } from 'vitest'

const ping = vi.fn(async () => ({ sent: true }))
vi.mock('@/lib/blog/indexnow', () => ({ pingIndexNow: (...a: unknown[]) => ping(...(a as [])) }))

import { pingCurrentAffair } from '@/hooks/payload/indexnowCa'

type Args = Parameters<typeof pingCurrentAffair>[0]
const run = (doc: Record<string, unknown>, previousDoc: Record<string, unknown> | undefined, context: Record<string, unknown> = {}) =>
  pingCurrentAffair({ doc, previousDoc, context, req: { payload: { logger: { warn: vi.fn() } } } } as unknown as Args)
const doc = { _status: 'published', slug: 'tribal-verdict', date: '2026-11-22T00:00:00.000Z' }

beforeEach(() => ping.mockClear())

describe('pingCurrentAffair', () => {
  it('pings once with the article url on first publish', async () => {
    await run(doc, { _status: 'draft' })
    expect(ping).toHaveBeenCalledTimes(1)
    expect((ping.mock.calls[0] as unknown as string[][])[0]![0]).toContain('/current-affairs/2026-11-22/tribal-verdict')
  })
  it('does nothing on re-save, drafts, missing slug or skipExternal', async () => {
    await run(doc, { _status: 'published' })
    await run({ ...doc, _status: 'draft' }, undefined)
    await run({ ...doc, slug: '' }, { _status: 'draft' })
    await run(doc, { _status: 'draft' }, { skipExternal: true })
    expect(ping).not.toHaveBeenCalled()
  })
})
