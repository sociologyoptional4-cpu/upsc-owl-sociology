export type NavLink = { label: string; href: string }

export const DEFAULT_NAV: NavLink[] = [
  { label: 'Notes', href: '/syllabus/paper-1/sociology-the-discipline' },
  { label: 'Current Affairs', href: '/current-affairs' },
  { label: 'Blog', href: '/blog' },
  { label: 'Syllabus', href: '/syllabus' },
  { label: 'Thinkers', href: '/thinkers' },
  { label: 'About', href: '/about' },
]

/** Empty CMS menu falls back to the defaults; a filled one is kept and always gets /blog. */
export function resolveNav(items: readonly Partial<NavLink>[] | null | undefined): NavLink[] {
  const list = (items ?? []).flatMap((item) => (item.label && item.href ? [{ label: item.label, href: item.href }] : []))
  if (list.length === 0) return DEFAULT_NAV
  return list.some((item) => item.href === '/blog') ? list : [...list, { label: 'Blog', href: '/blog' }]
}
