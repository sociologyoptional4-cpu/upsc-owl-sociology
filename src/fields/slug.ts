import type { Field, FieldHook, TextFieldSingleValidation } from 'payload'

import { slugify } from '@/lib/slug'

const fillSlug =
  (sourceField: string): FieldHook =>
  ({ value, data }) => {
    if (typeof value === 'string' && value.trim()) return slugify(value)
    const source = data?.[sourceField]
    return typeof source === 'string' ? slugify(source) : value
  }

type SlugOptions = {
  source?: string
  isUnique?: boolean
  validate?: TextFieldSingleValidation
}

/** Sidebar slug field, auto-filled from `source` (default "title") when left empty. */
export function slugField({ source = 'title', isUnique = true, validate }: SlugOptions = {}): Field {
  return {
    name: 'slug',
    type: 'text',
    index: true,
    unique: isUnique,
    ...(validate ? { validate } : {}),
    admin: {
      position: 'sidebar',
      description: `Khali chhodo to "${source}" se apne aap banega.`,
    },
    hooks: { beforeValidate: [fillSlug(source)] },
  }
}
