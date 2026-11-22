import type { CollectionConfig } from 'payload'

import { isAdmin, isStaff, isStaffField, publishedOrLoggedIn } from '@/access/roles'
import { slugField } from '@/fields/slug'
import { announcePost, postPaths, prepareBlogPost, queueOrganize, revalidatePost } from '@/lib/blog/hooks'
import { blogEditor } from '@/lib/lexical/blogEditor'
import { revalidateAfterDelete } from '@/hooks/payload/revalidate'
import { getServerSideURL } from '@/lib/url'

const hidden = { hidden: true } as const

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: { singular: 'Blog post', plural: 'Blog posts' },
  admin: {
    group: 'Blog',
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', '_status', 'publishedAt', 'aiStatus'],
    listSearchableFields: ['title', 'slug', 'excerpt'],
    description: 'Blog likho ya ChatGPT se paste karo. Kisi coaching/book ka text copy mat karo.',
    preview: (doc) => `${getServerSideURL()}/api/preview?secret=${process.env.PREVIEW_SECRET ?? ''}&collection=posts&id=${String(doc.id)}`,
  },
  defaultSort: '-publishedAt',
  access: {
    read: publishedOrLoggedIn,
    create: isStaff, // ai-bot cannot write posts
    update: isStaff,
    delete: isAdmin,
  },
  versions: { drafts: { autosave: { interval: 800 }, schedulePublish: true }, maxPerDoc: 50 },
  hooks: {
    beforeChange: [prepareBlogPost],
    afterChange: [revalidatePost, queueOrganize, announcePost],
    afterDelete: [revalidateAfterDelete(postPaths)],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    slugField({ source: 'title' }),
    { name: 'excerpt', type: 'textarea', maxLength: 300, admin: { description: 'Khali chhodo to AI bharega.' } },
    { name: 'cover', type: 'upload', relationTo: 'media' },
    { name: 'content', type: 'richText', editor: blogEditor(), required: true },
    {
      name: 'importMarkdown', type: 'textarea', virtual: true,
      label: 'ChatGPT se paste (Markdown)',
      admin: { description: 'Markdown paste karke Save karo: content mein badal jayega (khali ho to replace, warna neeche jodega). Yeh field store nahi hota.' },
    },
    {
      name: 'attachments', type: 'array', maxRows: 6, label: 'Notes PDF (download)',
      admin: { description: 'Reader ko "Notes download karo" box mein dikhega. PDF public hoti hai.' },
      fields: [
        { name: 'file', type: 'upload', relationTo: 'media', required: true, filterOptions: { mimeType: { equals: 'application/pdf' } } },
        { name: 'label', type: 'text', required: true, maxLength: 120 },
      ],
    },
    { name: 'category', type: 'relationship', relationTo: 'blog-categories', admin: { position: 'sidebar' } },
    { name: 'tags', type: 'relationship', relationTo: 'blog-tags', hasMany: true, maxRows: 8, admin: { position: 'sidebar' } },
    {
      type: 'collapsible', label: 'Syllabus links', admin: { initCollapsed: false },
      fields: [
        { name: 'papers', type: 'relationship', relationTo: 'papers', hasMany: true },
        { name: 'units', type: 'relationship', relationTo: 'units', hasMany: true },
        { name: 'topics', type: 'relationship', relationTo: 'topics', hasMany: true, maxRows: 3 },
        { name: 'thinkers', type: 'relationship', relationTo: 'thinkers', hasMany: true },
      ],
    },
    { name: 'author', type: 'relationship', relationTo: 'users', admin: { position: 'sidebar' } },
    { name: 'publishedAt', type: 'date', admin: { position: 'sidebar', date: { pickerAppearance: 'dayAndTime' } } },
    { name: 'featured', type: 'checkbox', defaultValue: false, admin: { position: 'sidebar', description: '/blog ke hero mein dikhega.' } },
    { name: 'readingTime', type: 'number', admin: { position: 'sidebar', readOnly: true } },
    {
      name: 'faq', type: 'array', maxRows: 8, label: 'FAQ (FAQPage JSON-LD)',
      fields: [{ name: 'question', type: 'text', required: true }, { name: 'answer', type: 'textarea', required: true }],
    },
    {
      name: 'seo', type: 'group', label: 'SEO',
      fields: [
        { name: 'title', type: 'text', maxLength: 60 },
        { name: 'description', type: 'textarea', maxLength: 160 },
        { name: 'focusKeyword', type: 'text' },
        { name: 'ogImage', type: 'upload', relationTo: 'media' },
        { name: 'canonical', type: 'text' },
        { name: 'noindex', type: 'checkbox', defaultValue: false },
      ],
    },
    {
      name: 'aiPanel', type: 'ui',
      admin: { position: 'sidebar', components: { Field: '/components/admin/blog/AiSuggestionsPanel#AiSuggestionsPanel' } },
    },
    { name: 'aiSuggestions', type: 'json', access: { read: isStaffField }, admin: hidden },
    {
      name: 'aiStatus', type: 'select', defaultValue: 'idle', options: ['idle', 'queued', 'done', 'failed'],
      access: { read: isStaffField }, admin: { position: 'sidebar', readOnly: true },
    },
    { name: 'contentHash', type: 'text', access: { read: isStaffField }, admin: hidden },
    { name: 'telegramPostedAt', type: 'date', access: { read: isStaffField }, admin: hidden },
  ],
}
