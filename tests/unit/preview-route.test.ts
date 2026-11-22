import { beforeEach, describe, expect, it, vi } from 'vitest'

const { auth, findByID, enableDraftMode, redirect } = vi.hoisted(() => ({
  auth: vi.fn(),
  findByID: vi.fn(),
  enableDraftMode: vi.fn(),
  redirect: vi.fn(),
}))

vi.mock('payload', () => ({ getPayload: vi.fn(async () => ({ auth, findByID })) }))
vi.mock('@/payload.config', () => ({ default: {} }))
vi.mock('next/headers', () => ({ draftMode: vi.fn(async () => ({ enable: enableDraftMode })) }))
vi.mock('next/navigation', () => ({ redirect: (path: string) => redirect(path) }))

import { GET } from '@/app/api/preview/route'

describe('preview route authorization', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('rejects anonymous requests even if the old query secret is present', async () => {
    auth.mockResolvedValue({ user: null })
    const response = await GET(new Request('https://site.test/api/preview?collection=posts&id=4&secret=legacy'))

    expect(response.status).toBe(401)
    expect(findByID).not.toHaveBeenCalled()
  })

  it('allows an authenticated editor to preview a draft without a URL secret', async () => {
    auth.mockResolvedValue({ user: { role: 'editor' } })
    findByID.mockResolvedValue({ slug: 'draft-post' })
    redirect.mockImplementation((path: string) => { throw new Error(`redirect:${path}`) })

    await expect(GET(new Request('https://site.test/api/preview?collection=posts&id=4'))).rejects.toThrow('redirect:/blog/draft-post')

    expect(auth).toHaveBeenCalledWith(expect.objectContaining({ headers: expect.any(Headers) }))
    expect(findByID).toHaveBeenCalledWith(expect.objectContaining({ collection: 'posts', id: 4, draft: true, overrideAccess: true }))
    expect(enableDraftMode).toHaveBeenCalledOnce()
  })

  it('does not grant preview access to an authenticated ai-bot', async () => {
    auth.mockResolvedValue({ user: { role: 'ai-bot' } })
    const response = await GET(new Request('https://site.test/api/preview?collection=current-affairs&id=4'))

    expect(response.status).toBe(401)
    expect(findByID).not.toHaveBeenCalled()
  })
})
