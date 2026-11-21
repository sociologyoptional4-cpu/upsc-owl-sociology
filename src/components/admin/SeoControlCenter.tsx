import { DefaultTemplate } from '@payloadcms/next/templates'
import { Gutter } from '@payloadcms/ui'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import type { AdminViewServerProps } from 'payload'

import { loadSeoReport } from '@/lib/seo/audit-data'
import type { AuditIssue, Severity } from '@/lib/seo/audit'
import { getServerSideURL } from '@/lib/url'

import styles from './seo-control-center.module.css'

const SEVERITY_LABEL: Record<Severity, string> = { error: 'Zaroori', warn: 'Sudharo', info: 'Behtar karo' }

const scoreTone = (score: number): 'good' | 'mid' | 'bad' => (score >= 85 ? 'good' : score >= 60 ? 'mid' : 'bad')

function IssueRow({ issue }: { issue: AuditIssue }) {
  return (
    <li className={styles.issue} data-severity={issue.severity}>
      <span className={styles.pill} data-severity={issue.severity}>{SEVERITY_LABEL[issue.severity]}</span>
      <div className={styles.issueBody}>
        <p className={styles.issueTitle}>{issue.title}</p>
        {issue.subject ? <p className={styles.issueSubject}>{issue.subject}</p> : null}
        <p className={styles.issueFix}>{issue.fix}</p>
      </div>
      {issue.href ? <Link href={issue.href} className={styles.open}>Kholo →</Link> : null}
    </li>
  )
}

/** /admin/seo: site-wide SEO health, per-post issues and one-click tools. */
export async function SeoControlCenter({ initPageResult, params, searchParams }: AdminViewServerProps) {
  const { req, locale, permissions, visibleEntities } = initPageResult
  if (!req.user) redirect('/admin/login')
  const role = (req.user as { role?: string }).role
  const isAllowed = role === 'admin' || role === 'editor'
  const report = isAllowed ? await loadSeoReport(req.payload) : null
  const site = getServerSideURL()
  const siteIssues = report?.issues.filter((i) => i.scope === 'site') ?? []
  const postIssues = report?.issues.filter((i) => i.scope === 'post') ?? []

  const tools = [
    { label: 'Sitemap', href: '/sitemap.xml' },
    { label: 'RSS feed', href: '/blog/rss.xml' },
    { label: 'llms.txt', href: '/llms.txt' },
    { label: 'robots.txt', href: '/robots.txt' },
    { label: 'Google Search Console', href: 'https://search.google.com/search-console' },
    { label: 'Bing Webmaster', href: 'https://www.bing.com/webmasters' },
    { label: 'Rich Results test', href: `https://search.google.com/test/rich-results?url=${encodeURIComponent(`${site}/blog`)}` },
    { label: 'PageSpeed (mobile)', href: `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(site)}&form_factor=mobile` },
  ]

  return (
    <DefaultTemplate
      i18n={req.i18n}
      locale={locale}
      params={params}
      payload={req.payload}
      permissions={permissions}
      searchParams={searchParams}
      user={req.user ?? undefined}
      visibleEntities={visibleEntities}
    >
      <Gutter className={styles.page}>
        <div className={styles.head}>
          <div>
            <p className={styles.label}><span>SEO</span></p>
            <h1 className={styles.title}>SEO Control Center</h1>
            <p className={styles.sub}>Site aur har blog post ki SEO sehat, aur kya sudharna hai.</p>
          </div>
        </div>

        {!report ? (
          <p className={styles.denied}>Ye page sirf admin aur editor ke liye hai.</p>
        ) : (
          <>
            <section className={styles.summary} aria-label="SEO score">
              <div className={styles.score} data-tone={scoreTone(report.score)}>
                <span className={styles.scoreNum}>{report.score}</span>
                <span className={styles.scoreOf}>/ 100</span>
              </div>
              <dl className={styles.counts}>
                {(['error', 'warn', 'info'] as const).map((s) => (
                  <div key={s} className={styles.count} data-severity={s}>
                    <dt>{SEVERITY_LABEL[s]}</dt>
                    <dd>{report.counts[s]}</dd>
                  </div>
                ))}
                <div className={styles.count}>
                  <dt>Live posts</dt>
                  <dd>{report.posts}</dd>
                </div>
              </dl>
            </section>

            <section aria-labelledby="seo-site">
              <h2 id="seo-site" className={styles.sectionTitle}>Site checks</h2>
              {siteIssues.length === 0 ? (
                <p className={styles.allGood}>✓ Site-level sab theek hai.</p>
              ) : (
                <ul className={styles.issues}>{siteIssues.map((i) => <IssueRow key={i.id} issue={i} />)}</ul>
              )}
            </section>

            <section aria-labelledby="seo-posts">
              <h2 id="seo-posts" className={styles.sectionTitle}>Blog posts ({postIssues.length} issues)</h2>
              {postIssues.length === 0 ? (
                <p className={styles.allGood}>{report.posts === 0 ? 'Abhi koi live post nahi.' : '✓ Sab posts SEO-ready hain.'}</p>
              ) : (
                <ul className={styles.issues}>{postIssues.map((i) => <IssueRow key={`${i.id}-${i.href}`} issue={i} />)}</ul>
              )}
            </section>

            <section aria-labelledby="seo-tools">
              <h2 id="seo-tools" className={styles.sectionTitle}>Tools aur links</h2>
              <div className={styles.tools}>
                {tools.map((t) => (
                  <a key={t.label} href={t.href} target="_blank" rel="noopener noreferrer" className={styles.tool}>{t.label} ↗</a>
                ))}
              </div>
            </section>
          </>
        )}
      </Gutter>
    </DefaultTemplate>
  )
}
