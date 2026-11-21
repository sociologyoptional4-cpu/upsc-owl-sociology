const MAX_SLUG_LENGTH = 80

/**
 * URL-safe slug from any title. Latin only: Devanagari and other scripts are
 * dropped, so Hindi titles need an explicit English slug.
 */
export function slugify(input: string): string {
  return input
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, MAX_SLUG_LENGTH)
    .replace(/-+$/g, '')
}

const RESERVED_TOP_LEVEL = new Set([
  'admin',
  'api',
  'current-affairs',
  'syllabus',
  'thinkers',
  'concepts',
  'pyq',
  'practice',
  'search',
  'digest',
  'blog',
  '_next',
])

/** Top-level segments owned by typed routes; CMS pages may not claim them. */
export function isReservedTopLevelSlug(slug: string): boolean {
  return RESERVED_TOP_LEVEL.has(slug)
}

/** Join a parent path and a slug into a page path ("guides" + "answer-writing" → "guides/answer-writing"). */
export function joinPath(parentPath: string | null | undefined, slug: string): string {
  const parent = (parentPath ?? '').replace(/^\/+|\/+$/g, '')
  return parent ? `${parent}/${slug}` : slug
}

/** Path → public URL. The CMS page with path "home" is the site root. */
export function pathToHref(path: string): string {
  return path === 'home' ? '/' : `/${path}`
}
