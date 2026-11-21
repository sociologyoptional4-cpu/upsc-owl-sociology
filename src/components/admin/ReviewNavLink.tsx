import Link from 'next/link'

import styles from './admin.module.css'

/** Sidebar link to the Review Queue (after Payload's collection links). */
export function ReviewNavLink() {
  return (
    <Link href="/admin/review" className={styles.link} style={{ display: 'block', padding: '0.5rem 0' }}>
      ★ Review Queue
    </Link>
  )
}
