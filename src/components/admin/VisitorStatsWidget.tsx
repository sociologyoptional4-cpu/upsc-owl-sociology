import type { VisitorAnalyticsSummary } from '@/lib/analytics/site-visits'

import styles from './admin.module.css'

function formatShortDay(isoDay: string): string {
  const [, m, d] = isoDay.split('-')
  return `${d}/${m}`
}

/** Server-rendered daily website visitor & pageview tracker card for Payload `/admin` dashboard. */
export function VisitorStatsWidget({ data }: { data: VisitorAnalyticsSummary }) {
  const maxDailyUsers = Math.max(1, ...data.dailySeries.map((d) => d.uniqueUsers))
  const totalDevices = Math.max(1, data.devices.mobile + data.devices.desktop + data.devices.tablet)

  return (
    <section aria-labelledby="visitor-stats-h" className={styles.widget}>
      <div className={styles.widgetHead}>
        <div>
          <p className={styles.label}><span>Daily Visitors · Built-in</span></p>
          <h2 id="visitor-stats-h" className={styles.sectionTitle} style={{ marginTop: '0.45rem', marginBottom: 0 }}>
            Roz kitne users aa rahe hain (IST)
          </h2>
        </div>
        <span style={{ fontSize: '0.78rem', opacity: 0.75 }}>
          Mobile: {Math.round((data.devices.mobile / totalDevices) * 100)}% ({data.devices.mobile}) · Desktop:{' '}
          {Math.round((data.devices.desktop / totalDevices) * 100)}% ({data.devices.desktop})
        </span>
      </div>

      <dl className={styles.stats}>
        <div className={`${styles.stat} ${styles.tintMint}`}>
          <dt>Aaj (Today)</dt>
          <dd>{data.today.uniqueUsers}</dd>
          <div style={{ fontSize: '0.75rem', opacity: 0.75 }}>{data.today.pageViews} page views</div>
        </div>
        <div className={`${styles.stat} ${styles.tintYellow}`}>
          <dt>Kal (Yesterday)</dt>
          <dd>{data.yesterday.uniqueUsers}</dd>
          <div style={{ fontSize: '0.75rem', opacity: 0.75 }}>{data.yesterday.pageViews} page views</div>
        </div>
        <div className={`${styles.stat} ${styles.tintLavender}`}>
          <dt>Pichle 7 Din</dt>
          <dd>{data.last7Days.uniqueUsers}</dd>
          <div style={{ fontSize: '0.75rem', opacity: 0.75 }}>{data.last7Days.pageViews} page views</div>
        </div>
        <div className={`${styles.stat} ${styles.tintPink}`}>
          <dt>Pichle 30 Din</dt>
          <dd>{data.last30Days.uniqueUsers}</dd>
          <div style={{ fontSize: '0.75rem', opacity: 0.75 }}>{data.last30Days.pageViews} page views</div>
        </div>
      </dl>

      <div>
        <p style={{ fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>Last 14 Days Unique Visitors</p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${data.dailySeries.length}, minmax(0, 1fr))`,
            gap: '0.35rem',
            alignItems: 'end',
            height: '92px',
            padding: '0.5rem',
            borderRadius: '10px',
            border: '1px solid var(--theme-elevation-150)',
          }}
        >
          {data.dailySeries.map((point) => {
            const pct = point.uniqueUsers > 0 ? Math.max(12, Math.round((point.uniqueUsers / maxDailyUsers) * 100)) : 4
            return (
              <div
                key={point.day}
                title={`${point.day}: ${point.uniqueUsers} users · ${point.pageViews} views`}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end', gap: '3px' }}
              >
                <span style={{ fontSize: '0.65rem', fontWeight: 700 }}>{point.uniqueUsers}</span>
                <span
                  style={{
                    width: '100%',
                    height: `${pct}%`,
                    minHeight: '3px',
                    borderRadius: '4px 4px 0 0',
                    background: point.uniqueUsers > 0 ? '#ca8a04' : 'var(--theme-elevation-150)',
                  }}
                />
                <span style={{ fontSize: '0.62rem', opacity: 0.7 }}>{formatShortDay(point.day)}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className={styles.twoCol}>
        <div>
          <p style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.4rem' }}>Top Pages (7d)</p>
          {data.topPages.length === 0 ? (
            <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Abhi hits collect ho rahe hain…</p>
          ) : (
            <ul className={styles.recent}>
              {data.topPages.map((p) => (
                <li key={p.label} className={styles.recentRow} style={{ gridTemplateColumns: '1fr auto auto' }}>
                  <span className={styles.recentTitle}>{p.label}</span>
                  <span className={styles.when}>{p.uniqueUsers} users</span>
                  <span className={styles.status}>{p.views} views</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <p style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.4rem' }}>Traffic Sources (7d)</p>
          {data.topSources.length === 0 ? (
            <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Abhi sources collect ho rahe hain…</p>
          ) : (
            <ul className={styles.recent}>
              {data.topSources.map((s) => (
                <li key={s.label} className={styles.recentRow} style={{ gridTemplateColumns: '1fr auto auto' }}>
                  <span className={styles.recentTitle}>{s.label}</span>
                  <span className={styles.when}>{s.uniqueUsers} users</span>
                  <span className={styles.status}>{s.views} views</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
