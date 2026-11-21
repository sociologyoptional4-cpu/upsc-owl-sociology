import type { PayloadRequest } from 'payload'
import { describe, expect, it, vi } from 'vitest'

import { canCreateContent, canUpdateContent, hasRole, isStaff, publishedOrLoggedIn } from '@/access/roles'
import { forceBotDrafts } from '@/hooks/payload/forceBotDrafts'

const reqAs = (role?: string) =>
  ({
    user: role ? { id: 1, role } : null,
    payload: { logger: { warn: vi.fn() } },
  }) as unknown as PayloadRequest

const run = (fn: (args: { req: PayloadRequest }) => unknown, role?: string) => fn({ req: reqAs(role) })

describe('roles', () => {
  it('hasRole matches only listed roles', () => {
    expect(hasRole({ role: 'editor' }, 'admin', 'editor')).toBe(true)
    expect(hasRole({ role: 'ai-bot' }, 'admin')).toBe(false)
    expect(hasRole(null, 'admin')).toBe(false)
  })
  it('staff excludes the AI bot and anonymous users', () => {
    expect(run(isStaff as never, 'admin')).toBe(true)
    expect(run(isStaff as never, 'ai-bot')).toBe(false)
    expect(run(isStaff as never)).toBe(false)
  })
  it('the AI bot can create content', () => {
    expect(run(canCreateContent as never, 'ai-bot')).toBe(true)
    expect(run(canCreateContent as never)).toBe(false)
  })
  it('the AI bot may update drafts only', () => {
    expect(run(canUpdateContent as never, 'ai-bot')).toEqual({ _status: { equals: 'draft' } })
    expect(run(canUpdateContent as never, 'editor')).toBe(true)
  })
  it('anonymous readers see published docs only', () => {
    expect(run(publishedOrLoggedIn as never)).toEqual({ _status: { equals: 'published' } })
    expect(run(publishedOrLoggedIn as never, 'editor')).toBe(true)
  })
})

describe('forceBotDrafts', () => {
  const call = (role: string | undefined, data: Record<string, unknown>) =>
    (forceBotDrafts as unknown as (args: { data: unknown; req: PayloadRequest }) => unknown)({
      data,
      req: reqAs(role),
    })

  it('downgrades a bot publish to draft without mutating input', () => {
    const input = { title: 'x', _status: 'published' }
    expect(call('ai-bot', input)).toEqual({ title: 'x', _status: 'draft' })
    expect(input._status).toBe('published')
  })
  it('lets staff publish', () => {
    expect(call('editor', { _status: 'published' })).toEqual({ _status: 'published' })
  })
  it('leaves bot drafts untouched', () => {
    expect(call('ai-bot', { _status: 'draft' })).toEqual({ _status: 'draft' })
  })
})
