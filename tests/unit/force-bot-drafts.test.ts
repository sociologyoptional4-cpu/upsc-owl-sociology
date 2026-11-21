import type { CollectionBeforeChangeHook } from 'payload'
import { describe, expect, it, vi } from 'vitest'
import { forceBotDrafts } from '@/hooks/payload/forceBotDrafts'

const invoke = (role: 'admin' | 'editor' | 'ai-bot', data: Record<string, unknown>, settings: Record<string, unknown>, validated = false) => {
  const args = { data, req: { user: { role }, context: { ingestValidated: validated }, payload: { findGlobal: vi.fn().mockResolvedValue(settings), logger: { warn: vi.fn() } } } } as unknown as Parameters<CollectionBeforeChangeHook>[0]
  return forceBotDrafts(args)
}

describe('forceBotDrafts', () => {
  it('leaves staff publishes untouched', async () => {
    const data = { _status: 'published' }
    expect(await invoke('admin', data, {})).toBe(data)
  })
  it('leaves bot drafts untouched', async () => {
    const data = { _status: 'draft' }
    expect(await invoke('ai-bot', data, {})).toBe(data)
  })
  it('blocks when auto publish is disabled', async () => {
    expect(await invoke('ai-bot', { _status: 'published', aiMeta: { relevance: 0.99 } }, { autoPublish: false }, true)).toMatchObject({ _status: 'draft' })
  })
  it('blocks when validation context is absent', async () => {
    expect(await invoke('ai-bot', { _status: 'published', aiMeta: { relevance: 0.99 } }, { autoPublish: true }, false)).toMatchObject({ _status: 'draft' })
  })
  it('blocks below the configured relevance threshold', async () => {
    expect(await invoke('ai-bot', { _status: 'published', aiMeta: { relevance: 0.79 } }, { autoPublish: true, autoPublishMinRelevance: 0.8 }, true)).toMatchObject({ _status: 'draft' })
  })
  it('allows a validated high-relevance bot publish as a cloned object', async () => {
    const data = { _status: 'published', aiMeta: { relevance: 0.9 } }
    const output = await invoke('ai-bot', data, { autoPublish: true, autoPublishMinRelevance: 0.8 }, true)
    expect(output).toEqual(data)
    expect(output).not.toBe(data)
  })
})
