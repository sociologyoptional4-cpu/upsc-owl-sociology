import Link from 'next/link'

const UTC_DATE_FMT = new Intl.DateTimeFormat('en-IN', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
})

function formatUtcDate(iso: string | null | undefined): string | null {
  if (!iso) return null
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return null
  return UTC_DATE_FMT.format(date)
}

/**
 * Displays database-backed First Published / Last Updated provenance badges
 * alongside the canonical Upscowl source path.
 */
export function ProvenanceBadge({
  createdAt,
  updatedAt,
  canonicalHref,
}: {
  createdAt?: string | null
  updatedAt?: string | null
  canonicalHref: string
}) {
  const published = formatUtcDate(createdAt)
  const updated = formatUtcDate(updatedAt)

  return (
    <div
      aria-label="Content provenance"
      className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-ink"
    >
      {published ? (
        <span className="rounded-chip border border-ink/30 bg-paper-raised px-3 py-1">
          First Published: <time dateTime={createdAt ?? undefined}>{published}</time>
        </span>
      ) : null}
      {updated ? (
        <span className="rounded-chip border border-ink/30 bg-pastel-mint px-3 py-1">
          Last Updated: <time dateTime={updatedAt ?? undefined}>{updated}</time>
        </span>
      ) : null}
      <span className="rounded-chip border border-ink/30 bg-paper-sunk px-3 py-1 text-ink-soft">
        Canonical: sociology4upsc.com{canonicalHref}
      </span>
    </div>
  )
}

/** Copyright, provenance attribution, and anti-mirror DMCA notice for syllabus pages. */
export function SyllabusDmcaFooter({
  canonicalHref,
  title,
}: {
  canonicalHref: string
  title?: string
}) {
  const subject = encodeURIComponent(`DMCA / Content Mirror Report: ${title || canonicalHref}`)
  const mailtoHref = `mailto:dmca@sociology4upsc.com?subject=${subject}`

  return (
    <footer
      aria-label="Copyright and DMCA notice"
      className="mt-14 rounded-card border-2 border-ink bg-paper-sunk p-5 text-xs leading-relaxed text-ink-soft shadow-paper"
    >
      <p className="font-display font-extrabold text-ink">
        © 2026 Upscowl (sociology4upsc.com) · Original UPSC Sociology Optional Notes &amp; Visual Frameworks
      </p>
      <p className="mt-1.5">
        Protected syllabus study material published at canonical URL{' '}
        <span className="font-semibold text-ink">https://sociology4upsc.com{canonicalHref}</span>. Automated scraping, bulk
        harvesting, mirroring, or commercial redistribution without written permission is prohibited and subject to
        DMCA takedown.
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-4 font-semibold text-ink">
        <a href={mailtoHref} className="underline hover:text-saffron-deep">
          Report Unauthorized Mirror / DMCA Takedown
        </a>
        <Link href="/about" className="underline hover:text-saffron-deep">
          About Upscowl &amp; Editorial Provenance
        </Link>
      </div>
    </footer>
  )
}
