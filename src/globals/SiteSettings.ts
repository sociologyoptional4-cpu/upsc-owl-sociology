import type { GlobalConfig } from 'payload'

import { isAdmin, isLoggedIn } from '@/access/roles'
import { validateHref } from '@/lib/href'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: { group: 'Admin' },
  access: { read: isLoggedIn, update: isAdmin },
  fields: [
    { name: 'siteName', type: 'text', defaultValue: 'AUM Sociology' },
    { name: 'telegramUrl', type: 'text', validate: validateHref },
    { name: 'featuredThinker', type: 'relationship', relationTo: 'thinkers' },
    {
      type: 'collapsible',
      label: 'AI pipeline',
      fields: [
        {
          name: 'pipelineEnabled',
          type: 'checkbox',
          defaultValue: false,
          admin: { description: 'Kill switch. Off = daily job kuch nahi likhega.' },
        },
        {
          name: 'autoPublish',
          type: 'checkbox',
          defaultValue: false,
          admin: { description: 'Off = AI ke saare notes review queue mein (recommended pehle 2-4 hafte).' },
        },
        { name: 'maxDailyUsd', type: 'number', defaultValue: 1, min: 0 },
        { name: 'autoPublishMinRelevance', type: 'number', defaultValue: 0.8, min: 0, max: 1 },
      ],
    },
  ],
}
