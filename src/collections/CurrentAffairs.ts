import type { CollectionConfig } from 'payload'

import { canCreateContent, canUpdateContent, isAdmin, publishedOrLoggedIn } from '@/access/roles'
import { LAYOUT_BLOCKS } from '@/blocks'
import { slugField } from '@/fields/slug'
import { forceBotDrafts } from '@/hooks/payload/forceBotDrafts'
import { pingCurrentAffair } from '@/hooks/payload/indexnowCa'
import { postCurrentAffair } from '@/lib/telegram/postCurrentAffair'
import { revalidateAfterChange, revalidateAfterDelete } from '@/hooks/payload/revalidate'
import { syncReviewStatus } from '@/hooks/payload/syncReviewStatus'
import { formatDateIST } from '@/lib/data/issue'
import { validateHref } from '@/lib/href'

const caPaths = async (doc: Record<string, unknown>, req: import('payload').PayloadRequest) => {
  const date = doc.date ? formatDateIST(String(doc.date)) : ''
  const slug = typeof doc.slug === 'string' ? doc.slug : ''
  const article = date && slug ? [`/current-affairs/${date}/${slug}`] : []
  const topicIds = Array.isArray(doc.topics) ? doc.topics.map((item) => typeof item === 'number' ? item : typeof item === 'object' && item ? (item as { id: number }).id : null).filter((id): id is number => typeof id === 'number') : []
  const topics = topicIds.length ? await req.payload.find({ collection: 'topics', where: { id: { in: topicIds } }, limit: topicIds.length, depth: 2, overrideAccess: true, req }) : { docs: [] }
  const topicPaths = topics.docs.flatMap((topic) => {
    const unit = typeof topic.unit === 'object' && topic.unit ? topic.unit : null
    const paper = unit && typeof unit.paper === 'object' ? unit.paper : null
    return unit && paper && topic.slug && unit.slug && paper.slug ? [`/syllabus/${paper.slug}/${unit.slug}/${topic.slug}`] : []
  })
  return ['/', '/current-affairs', ...(date ? [`/current-affairs/${date}`] : []), ...article, ...topicPaths]
}

export const CurrentAffairs: CollectionConfig = {
  slug: 'current-affairs',
  labels: { singular: 'Current affair', plural: 'Current affairs' },
  admin: {
    useAsTitle: 'headline',
    defaultColumns: ['headline', 'date', 'paper', 'reviewStatus', '_status'],
    listSearchableFields: ['headline', 'summary'],
    description: 'Roz ki khabrein. AI drafts pehle Review Queue mein aate hain (/admin/review).',
    group: 'Content',
    preview: (doc) => `/api/preview?collection=current-affairs&id=${String(doc.id)}`,
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
    beforeChange: [forceBotDrafts, syncReviewStatus],
    afterChange: [revalidateAfterChange(caPaths), postCurrentAffair, pingCurrentAffair],
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
    {
      name: 'seo', type: 'group', label: 'SEO',
      admin: { description: 'Khaali ho to headline/summary use hota hai. Smart paste AI se bharta hai.' },
      fields: [
        { name: 'title', type: 'text', maxLength: 60 },
        { name: 'description', type: 'textarea', maxLength: 160 },
      ],
    },
    { name: 'reviewStatus', type: 'select', defaultValue: 'pending', index: true, options: ['pending', 'approved', 'rejected'] },
    { name: 'rejectReason', type: 'textarea' },
    { name: 'sourceHash', type: 'text', unique: true, index: true, admin: { position: 'sidebar' } },
    { name: 'embedding', type: 'json', admin: { hidden: true } },
    { name: 'telegramMessageId', type: 'text', admin: { hidden: true } },
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
