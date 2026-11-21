import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, CollectionConfig } from 'payload'

import { isAdmin, isStaff } from '@/access/roles'
import { slugField } from '@/fields/slug'

const COLORS = [
  { label: 'Lavender', value: 'lavender' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Mint', value: 'mint' },
  { label: 'Pink', value: 'pink' },
]

/** Taxonomies have no draft state, so the shared published-only revalidate hook does not apply. */
async function revalidate(paths: string[], disabled: boolean | undefined): Promise<void> {
  if (disabled) return
  try {
    const { revalidatePath } = await import('next/cache')
    for (const path of paths) revalidatePath(path)
  } catch {
    // Not inside a Next server (CLI/seed): nothing to revalidate.
  }
}

function taxonomy(slug: 'blog-categories' | 'blog-tags', singular: string, plural: string, route: 'category' | 'tag'): CollectionConfig {
  const pathsFor = (doc: Record<string, unknown>) => ['/blog', ...(typeof doc.slug === 'string' ? [`/blog/${route}/${doc.slug}`] : [])]
  const afterChange: CollectionAfterChangeHook = async ({ doc, req }) => { await revalidate(pathsFor(doc), req.context?.disableRevalidate as boolean | undefined); return doc }
  const afterDelete: CollectionAfterDeleteHook = async ({ doc, req }) => { await revalidate(pathsFor(doc), req.context?.disableRevalidate as boolean | undefined); return doc }
  return {
    slug,
    labels: { singular, plural },
    admin: { group: 'Blog', useAsTitle: 'title', defaultColumns: ['title', 'slug'] },
    access: { read: () => true, create: isStaff, update: isStaff, delete: isAdmin },
    hooks: { afterChange: [afterChange], afterDelete: [afterDelete] },
    fields: [
      { name: 'title', type: 'text', required: true },
      slugField({ source: 'title' }),
      { name: 'description', type: 'textarea' },
      { name: 'color', type: 'select', options: COLORS, defaultValue: 'lavender' },
    ],
  }
}

export const BlogCategories = taxonomy('blog-categories', 'Blog category', 'Blog categories', 'category')
export const BlogTags = taxonomy('blog-tags', 'Blog tag', 'Blog tags', 'tag')
