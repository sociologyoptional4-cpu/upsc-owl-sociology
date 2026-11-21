import type { GlobalConfig } from 'payload'
import { isAdmin } from '@/access/roles'
import { validateHref } from '@/lib/href'

const links = (name: 'header' | 'footer') => ({
  name, type: 'array' as const, fields: [
    { name: 'label', type: 'text' as const, required: true },
    { name: 'href', type: 'text' as const, required: true, validate: validateHref },
  ],
})

export const Navigation: GlobalConfig = {
  slug: 'navigation', admin: { group: 'Settings' }, access: { read: () => true, update: isAdmin },
  fields: [links('header'), links('footer')],
}
