import type { CollectionConfig } from 'payload'

import { canCreateContent, canUpdateContent, isAdmin, publishedOrLoggedIn } from '@/access/roles'
import { LAYOUT_BLOCKS } from '@/blocks'
import { slugField } from '@/fields/slug'
import { forceBotDrafts } from '@/hooks/payload/forceBotDrafts'
import { revalidateAfterChange, revalidateAfterDelete, topicPaths } from '@/hooks/payload/revalidate'
import { syncReviewStatus } from '@/hooks/payload/syncReviewStatus'
import { blogEditor } from '@/lib/lexical/blogEditor'

// Topic routes ship in Phase 1; revalidation hooks are added with them.
export const Topics: CollectionConfig = {
  slug: 'topics',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'unit', '_status'],
    group: 'Syllabus',
    preview: (doc) => `/api/preview?collection=topics&id=${String(doc.id)}`,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    unit: true,
    order: true,
    summary: true,
    _status: true,
  },
  access: {
    read: publishedOrLoggedIn,
    create: canCreateContent,
    update: canUpdateContent,
    delete: isAdmin,
  },
  versions: { drafts: true, maxPerDoc: 25 },
  hooks: { beforeChange: [forceBotDrafts, syncReviewStatus], afterChange: [revalidateAfterChange(topicPaths)], afterDelete: [revalidateAfterDelete(topicPaths)] },
  fields: [
    { name: 'title', type: 'text', required: true },
    slugField(),
    { name: 'unit', type: 'relationship', relationTo: 'units', required: true },
    { name: 'order', type: 'number', required: true, defaultValue: 99, index: true },
    { name: 'reviewStatus', type: 'select', index: true, options: ['pending', 'approved', 'rejected'] },
    { name: 'rejectReason', type: 'textarea' },
    { name: 'aiMeta', type: 'group', fields: [
      { name: 'model', type: 'text' },
      { name: 'promptVersion', type: 'text' },
      { name: 'costUsd', type: 'number', min: 0 },
    ] },
    { name: 'summary', type: 'textarea', admin: { description: '2-3 line overview (English default, cards & SEO)' } },
    { name: 'summaryHinglish', type: 'textarea', admin: { description: '2-3 line overview in Hinglish (toggle option)' } },
    { name: 'layout', type: 'blocks', blocks: LAYOUT_BLOCKS },
    { name: 'notebookContent', type: 'richText', editor: blogEditor() },
    { name: 'notebookContentHinglish', type: 'richText', editor: blogEditor() },
    { name: 'mindMap', type: 'json' },
    { name: 'mindMapHinglish', type: 'json' },
    {
      name: 'pyqAnswers',
      type: 'array',
      maxRows: 30,
      fields: [
        { name: 'year', type: 'number', required: true },
        { name: 'paper', type: 'select', required: true, defaultValue: 'P1', options: ['P1', 'P2'] },
        { name: 'marks', type: 'number', required: true, defaultValue: 10 },
        { name: 'question', type: 'textarea', required: true },
        { name: 'theme', type: 'text' },
        { name: 'intro', type: 'textarea', required: true },
        {
          name: 'points',
          type: 'array',
          required: true,
          minRows: 1,
          maxRows: 10,
          fields: [{ name: 'text', type: 'textarea', required: true }],
        },
        { name: 'thinkers', type: 'text' },
        { name: 'example', type: 'textarea' },
        { name: 'conclusion', type: 'textarea', required: true },
      ],
    },
    { name: 'pyqAnswersHinglish', type: 'json' },
    { name: 'thinkers', type: 'relationship', relationTo: 'thinkers', hasMany: true },
    { name: 'relatedTopics', type: 'relationship', relationTo: 'topics', hasMany: true },
  ],
}
