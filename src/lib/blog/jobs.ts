import { timingSafeEqual } from 'node:crypto'
import type { JobsConfig } from 'payload'

import { hasRole, type Role } from '@/access/roles'

import { organizePost } from './organize'

function validCronSecret(header: string | null): boolean {
  const secret = process.env.CRON_SECRET
  if (!secret || !header) return false
  const expected = Buffer.from(`Bearer ${secret}`)
  const actual = Buffer.from(header)
  return actual.length === expected.length && timingSafeEqual(actual, expected)
}

/** Job queue: `blog-organize` + scheduled publish. Run by GitHub Actions (blog-jobs.yml) via CRON_SECRET. */
export const blogJobs: JobsConfig = {
  access: {
    run: ({ req }) => validCronSecret(req.headers.get('authorization')) || hasRole(req.user as { role?: Role } | null, 'admin'),
  },
  tasks: [
    {
      slug: 'blog-organize',
      retries: 1,
      inputSchema: [{ name: 'postId', type: 'number', required: true }],
      handler: async ({ input, req }) => {
        await organizePost(req.payload, Number((input as { postId: number }).postId))
        return { output: {} }
      },
    },
  ],
}
