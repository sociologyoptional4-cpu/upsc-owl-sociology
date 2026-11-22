import type { CollectionConfig } from 'payload'

import { canCreateContent, canUpdateContent, isAdmin, publishedOrLoggedIn } from '@/access/roles'
import { revalidateAfterChange, revalidateAfterDelete } from '@/hooks/payload/revalidate'
import { forceBotDrafts } from '@/hooks/payload/forceBotDrafts'

export const Quizzes: CollectionConfig = {
  slug: 'quizzes',
  admin: { useAsTitle: 'date', group: 'Learning' },
  access: { read: publishedOrLoggedIn, create: canCreateContent, update: canUpdateContent, delete: isAdmin },
  versions: { drafts: true },
  hooks: { beforeChange: [forceBotDrafts], afterChange: [revalidateAfterChange(() => ['/practice'])], afterDelete: [revalidateAfterDelete(() => ['/practice'])] },
  fields: [
    { name: 'date', type: 'date', required: true, unique: true, index: true },
    { name: 'items', type: 'array', minRows: 1, maxRows: 10, fields: [
      { name: 'question', type: 'textarea', required: true },
      { name: 'options', type: 'array', minRows: 4, maxRows: 4, fields: [{ name: 'text', type: 'text', required: true }] },
      { name: 'answerIndex', type: 'number', required: true, min: 0, max: 3 },
      { name: 'explanation', type: 'textarea', required: true },
      { name: 'caId', type: 'relationship', relationTo: 'current-affairs', admin: { description: 'Optional. Smart paste links the best matching current affair when it finds one.' } },
    ] },
  ],
}
