import type { CollectionBeforeChangeHook, CollectionConfig } from 'payload'

import { hasRole, isAdmin, isAdminField, ROLES, type Role } from '@/access/roles'

/** The very first account becomes admin, so a fresh install is never locked out. */
const firstUserIsAdmin: CollectionBeforeChangeHook = async ({ data, operation, req }) => {
  if (operation !== 'create') return data
  const { totalDocs } = await req.payload.count({ collection: 'users', req })
  return totalDocs === 0 ? { ...data, role: 'admin' } : data
}

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'role'],
    group: 'Admin',
  },
  auth: {
    useAPIKey: true, // ai-bot users authenticate with `Authorization: users API-Key <key>`
  },
  access: {
    admin: ({ req }) => hasRole(req.user as { role?: Role } | null, 'admin', 'editor'),
    create: isAdmin,
    read: ({ req }) => {
      if (hasRole(req.user as { role?: Role } | null, 'admin')) return true
      return req.user ? { id: { equals: req.user.id } } : false
    },
    update: ({ req }) => {
      if (hasRole(req.user as { role?: Role } | null, 'admin')) return true
      return req.user ? { id: { equals: req.user.id } } : false
    },
    delete: isAdmin,
  },
  hooks: { beforeChange: [firstUserIsAdmin] },
  fields: [
    { name: 'name', type: 'text' },
    { name: 'displayName', type: 'text', admin: { description: 'Blog author box mein dikhega.' } },
    { name: 'bio', type: 'textarea', maxLength: 280 },
    { name: 'avatar', type: 'upload', relationTo: 'media' },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      saveToJWT: true,
      options: ROLES.map((role) => ({ label: role, value: role })),
      access: { create: isAdminField, update: isAdminField },
      admin: { description: 'ai-bot: sirf API key se drafts bana sakta hai, publish nahi.' },
    },
  ],
}
