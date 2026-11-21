import type { Access, FieldAccess, PayloadRequest, Where } from 'payload'

export const ROLES = ['admin', 'editor', 'ai-bot'] as const
export type Role = (typeof ROLES)[number]

type MaybeUser = { role?: Role | null } | null | undefined

export function hasRole(user: MaybeUser, ...roles: Role[]): boolean {
  return Boolean(user?.role && roles.includes(user.role))
}

const roleOf = (req: PayloadRequest): MaybeUser => req.user as MaybeUser

export const isAdmin: Access = ({ req }) => hasRole(roleOf(req), 'admin')
export const isAdminField: FieldAccess = ({ req }) => hasRole(roleOf(req), 'admin')
export const isStaff: Access = ({ req }) => hasRole(roleOf(req), 'admin', 'editor')
export const isStaffField: FieldAccess = ({ req }) => hasRole(roleOf(req), 'admin', 'editor')
export const isLoggedIn: Access = ({ req }) => Boolean(req.user)

/** Staff and the AI bot may create content; the bot's docs are forced to draft by a hook. */
export const canCreateContent: Access = ({ req }) =>
  hasRole(roleOf(req), 'admin', 'editor', 'ai-bot')

const DRAFTS_ONLY: Where = { _status: { equals: 'draft' } }
const PUBLISHED_ONLY: Where = { _status: { equals: 'published' } }

/** Staff edit anything; the AI bot may only touch drafts. */
export const canUpdateContent: Access = ({ req }) => {
  const user = roleOf(req)
  if (hasRole(user, 'admin', 'editor')) return true
  if (hasRole(user, 'ai-bot')) return DRAFTS_ONLY
  return false
}

/** Public sees published docs only; any signed-in user sees drafts too. */
export const publishedOrLoggedIn: Access = ({ req }) => (req.user ? true : PUBLISHED_ONLY)
