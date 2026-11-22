import type { MindMapBranch, MindMapColor, MindMapData } from '@/lib/notes/notebook-types'

const BRANCH_BG: Record<MindMapColor, string> = {
  lavender: 'bg-pastel-lavender',
  yellow: 'bg-pastel-yellow',
  mint: 'bg-pastel-mint',
  pink: 'bg-pastel-pink',
}

function BranchStems({ count }: { count: number }) {
  if (count === 0) return null
  return (
    <>
      <div aria-hidden className="mx-auto h-4 w-0.5 bg-ink md:hidden" />
      <svg
        aria-hidden
        viewBox="0 0 400 40"
        preserveAspectRatio="none"
        className="mx-auto hidden h-10 w-full stroke-current text-ink md:block"
        fill="none"
      >
        {count === 1 ? (
          <line x1="200" y1="0" x2="200" y2="40" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        ) : (
          <path
            d="M 200 0 L 200 18 M 98 18 L 302 18 M 98 18 L 98 40 M 302 18 L 302 40"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        )}
      </svg>
    </>
  )
}

function BranchCard({ branch, fullSpan }: { branch: MindMapBranch; fullSpan: boolean }) {
  const spanClass = fullSpan ? 'md:col-span-2 md:mx-auto md:w-full md:max-w-xl' : ''
  return (
    <article
      className={`min-w-0 break-words rounded-card border-2 border-ink ${BRANCH_BG[branch.color]} p-4 text-ink shadow-paper ${spanClass}`.trim()}
    >
      <h4 className="font-display text-base font-extrabold leading-snug text-ink">{branch.title}</h4>
      {branch.thinkers && branch.thinkers.length > 0 ? (
        <ul aria-label="Thinkers" className="mt-2.5 flex flex-wrap gap-1.5">
          {branch.thinkers.map((thinker) => (
            <li
              key={thinker}
              className="rounded-chip border border-ink bg-paper-raised px-2 py-0.5 text-xs font-bold text-thinker"
            >
              {thinker}
            </li>
          ))}
        </ul>
      ) : null}
      <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink">
        {branch.points.map((point, index) => (
          <li key={`${index}-${point.slice(0, 24)}`} className="flex items-start gap-2">
            <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-ink" />
            <span className="min-w-0">{point}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

/** Editorial D12 visual mind map with a central hub and pastel sociological branches. */
export function MindMap({
  data,
  eyebrow = 'Mind Map',
  className = '',
}: {
  data: MindMapData
  eyebrow?: string
  className?: string
}) {
  const singleBranch = data.branches.length === 1

  return (
    <section
      aria-label={data.title}
      className={`min-w-0 rounded-card border-2 border-ink bg-paper-raised p-5 text-ink shadow-paper md:p-7 ${className}`.trim()}
    >
      <header className="mb-6 text-center">
        <p className="tag-skew">
          <span>{eyebrow}</span>
        </p>
        <h3 className="mt-4 font-display text-xl font-extrabold leading-snug text-ink md:text-2xl">
          {data.title}
        </h3>
        {data.subtitle ? (
          <p className="mx-auto mt-1.5 max-w-[56ch] text-sm text-ink-soft">{data.subtitle}</p>
        ) : null}
      </header>

      <div className="mx-auto max-w-md rounded-card border-2 border-ink bg-pastel-yellow px-5 py-3 text-center text-ink shadow-paper">
        <p className="font-display text-base font-extrabold leading-snug md:text-lg">{data.center}</p>
      </div>

      <BranchStems count={data.branches.length} />

      {data.branches.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {data.branches.map((branch, index) => (
            <BranchCard key={`${index}-${branch.title}`} branch={branch} fullSpan={singleBranch} />
          ))}
        </div>
      ) : null}
    </section>
  )
}
