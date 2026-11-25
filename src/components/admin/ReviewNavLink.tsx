import Link from 'next/link'

import styles from './admin.module.css'

const QUICK_LINKS = [
  { href: '/admin/review', label: '★ Review Queue' },
  { href: '/admin/write', label: '✍ Writing Desk' },
  { href: '/admin/collections/posts', label: '📝 Blog Posts' },
  { href: '/admin/collections/posts/create', label: '+ Naya Blog Post' },
  { href: '/admin/seo', label: '📊 SEO Control Center' },
] as const

/** Quick workspace links in Payload's sidebar (keeps exported symbol name for importMap compatibility). */
export function ReviewNavLink() {
  return (
    <nav aria-label="Quick tools" className={styles.quickNav}>
      <span className={styles.quickNavTitle}>Quick Tools</span>
      {QUICK_LINKS.map((item) => (
        <Link key={item.href} href={item.href} className={styles.quickNavLink}>
          {item.label}
        </Link>
      ))}
      <a href="/" target="_blank" rel="noopener noreferrer" className={styles.quickNavLink}>
        🌐 Website dekho ↗
      </a>
    </nav>
  )
}
