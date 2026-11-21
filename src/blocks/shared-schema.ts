import { z } from 'zod'

import { isSafeHref } from '@/lib/href'

export const hrefSchema = z.string().refine(isSafeHref, 'Link "/" se shuru ho ya http(s) URL ho')
