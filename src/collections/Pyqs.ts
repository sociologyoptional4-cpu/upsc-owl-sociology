import type { CollectionConfig } from 'payload'

import { isAdmin, isStaff, publishedOrLoggedIn } from '@/access/roles'
import { revalidateAfterChange, revalidateAfterDelete } from '@/hooks/payload/revalidate'

const pyqPaths = async (doc: Record<string, unknown>, req: import('payload').PayloadRequest) => {
  const ids = Array.isArray(doc.topics) ? doc.topics.map((item) => typeof item === 'number' ? item : typeof item === 'object' && item ? (item as { id?: number }).id : null).filter((id): id is number => typeof id === 'number') : []
  const topics = ids.length ? await req.payload.find({ collection: 'topics', where: { id: { in: ids } }, limit: ids.length, depth: 2, overrideAccess: true, req }) : { docs: [] }
  const paths = topics.docs.flatMap((topic) => {
    const unit = typeof topic.unit === 'object' && topic.unit ? topic.unit : null
    const paper = unit && typeof unit.paper === 'object' && unit.paper ? unit.paper : null
    return unit?.slug && paper?.slug && topic.slug ? [`/syllabus/${paper.slug}/${unit.slug}/${topic.slug}`] : []
  })
  return ['/pyq', ...paths]
}

export const Pyqs: CollectionConfig = {
  slug: 'pyqs',
  labels: { singular: 'PYQ', plural: 'PYQs' },
  admin: { useAsTitle: 'question', defaultColumns: ['year', 'paper', 'qno', 'marks'], group: 'Syllabus' },
  access: { read: publishedOrLoggedIn, create: isStaff, update: isStaff, delete: isAdmin },
  versions: { drafts: true, maxPerDoc: 10 },
  hooks: { afterChange: [revalidateAfterChange(pyqPaths)], afterDelete: [revalidateAfterDelete(pyqPaths)] },
  fields: [
    { name: 'year', type: 'number', required: true, index: true },
    { name: 'paper', type: 'select', required: true, index: true, options: ['P1', 'P2'] },
    { name: 'section', type: 'text' },
    { name: 'qno', type: 'text', required: true },
    { name: 'marks', type: 'number', required: true, defaultValue: 10 },
    { name: 'wordLimit', type: 'number' },
    { name: 'question', type: 'textarea', required: true },
    { name: 'unit', type: 'relationship', relationTo: 'units', required: true, index: true },
    { name: 'topics', type: 'relationship', relationTo: 'topics', hasMany: true },
    { name: 'thinkers', type: 'relationship', relationTo: 'thinkers', hasMany: true },
  ],
}
