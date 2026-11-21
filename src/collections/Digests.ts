import type { CollectionConfig } from 'payload'

import { canCreateContent, canUpdateContent, isAdmin, publishedOrLoggedIn } from '@/access/roles'
import { revalidateAfterChange, revalidateAfterDelete } from '@/hooks/payload/revalidate'
import { forceBotDrafts } from '@/hooks/payload/forceBotDrafts'

export const Digests: CollectionConfig = {
  slug: 'digests',
  admin: { useAsTitle: 'key', group: 'Learning' },
  access: { read: publishedOrLoggedIn, create: canCreateContent, update: canUpdateContent, delete: isAdmin },
  versions: { drafts: true },
  hooks: { beforeChange: [forceBotDrafts], afterChange: [revalidateAfterChange((doc) => typeof doc.type === 'string' && typeof doc.key === 'string' ? [`/digest/${doc.type}/${doc.key}`] : [])], afterDelete: [revalidateAfterDelete((doc) => typeof doc.type === 'string' && typeof doc.key === 'string' ? [`/digest/${doc.type}/${doc.key}`] : [])] },
  fields: [
    { name: 'type', type: 'select', required: true, options: ['weekly', 'monthly'] },
    { name: 'key', type: 'text', required: true, unique: true, index: true },
    { name: 'range', type: 'group', fields: [{ name: 'from', type: 'date', required: true }, { name: 'to', type: 'date', required: true }] },
    { name: 'intro', type: 'textarea', maxLength: 700 },
    { name: 'groups', type: 'array', fields: [
      { name: 'topic', type: 'relationship', relationTo: 'topics', required: true },
      { name: 'items', type: 'relationship', relationTo: 'current-affairs', hasMany: true, required: true },
    ] },
    { name: 'pdf', type: 'upload', relationTo: 'media', admin: { condition: (_, siblingData) => siblingData?.type === 'monthly' } },
  ],
}
