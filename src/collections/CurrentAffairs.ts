import type { CollectionConfig } from 'payload'

import { canCreateContent, canUpdateContent, isAdmin, publishedOrLoggedIn } from '@/access/roles'
import { LAYOUT_BLOCKS } from '@/blocks'
import { slugField } from '@/fields/slug'
import { forceBotDrafts } from '@/hooks/payload/forceBotDrafts'
import { revalidateAfterChange, revalidateAfterDelete } from '@/hooks/payload/revalidate'
import { validateHref } from '@/lib/href'

const caPaths = (doc: Record<string, unknown>) => {
  const date = typeof doc.date === 'string' ? doc.date.slice(0, 10) : ''
  const slug = typeof doc.slug === 'string' ? doc.slug : ''
  const article = date && slug ? [`/current-affairs/${date}/${slug}`] : []
  return ['/', '/current-affairs', ...article]
}

export const CurrentAffairs: CollectionConfig = {
  slug: 'current-affairs',
  labels: { singular: 'Current affair', plural: 'Current affairs' },
  admin: {
    useAsTitle: 'headline',
    defaultColumns: ['headline', 'date', 'paper', 'isAiGenerated', '_status'],
    group: 'Content',
  },
  defaultSort: '-date',
  access: {
    read: publishedOrLoggedIn,
    create: canCreateContent,
    update: canUpdateContent,
    delete: isAdmin,
  },
  versions: { drafts: true, maxPerDoc: 15 },
  hooks: {
    beforeChange: [forceBotDrafts],
    afterChange: [revalidateAfterChange(caPaths)],
    afterDelete: [revalidateAfterDelete(caPaths)],
  },
  fields: [
    { name: 'headline', type: 'text', required: true },
    slugField({ source: 'headline' }),
    {
      name: 'date',
      type: 'date',
      required: true,
      index: true,
      admin: { position: 'sidebar', date: { pickerAppearance: 'dayOnly' } },
    },
    { name: 'paper', type: 'select', options: ['P1', 'P2', 'Both'], admin: { position: 'sidebar' } },
    { name: 'topics', type: 'relationship', relationTo: 'topics', hasMany: true },
    { name: 'thinkers', type: 'relationship', relationTo: 'thinkers', hasMany: true },
    {
      name: 'sources',
      type: 'array',
      minRows: 1,
      required: true,
      admin: { description: 'Original khabar ka link zaroori hai.' },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'url', type: 'text', required: true, validate: validateHref },
      ],
    },
    { name: 'summary', type: 'textarea', admin: { description: 'Card aur SEO description' } },
    { name: 'layout', type: 'blocks', blocks: LAYOUT_BLOCKS },
    {
      name: 'isAiGenerated',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'aiMeta',
      type: 'group',
      admin: { condition: (data) => Boolean(data?.isAiGenerated) },
      fields: [
        { name: 'model', type: 'text' },
        { name: 'promptVersion', type: 'text' },
        { name: 'relevance', type: 'number', min: 0, max: 1 },
        { name: 'costUsd', type: 'number', min: 0 },
      ],
    },
  ],
}
