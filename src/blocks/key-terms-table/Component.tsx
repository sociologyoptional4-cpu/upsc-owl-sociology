import type { KeyTermsBlock as KeyTermsBlockData } from '@/payload-types'

type Props = { block: KeyTermsBlockData }

export function KeyTermsTableComponent({ block }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-6 md:px-8">
      <div className="max-w-4xl overflow-x-auto rounded-card border border-rule bg-paper-raised" data-lenis-prevent>
        <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
          <caption className="border-b border-rule px-5 py-3 text-left font-display text-lg">
            {block.caption || 'Key terms'}
          </caption>
          <thead className="bg-paper-sunk text-xs uppercase tracking-[0.15em] text-ink-soft">
            <tr>
              <th scope="col" className="px-5 py-3">Term</th>
              <th scope="col" className="px-5 py-3">Matlab</th>
              <th scope="col" className="px-5 py-3">Thinker</th>
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, index) => (
              <tr key={row.id ?? index} className="border-t border-rule align-top">
                <th scope="row" className="px-5 py-3 font-semibold">{row.term}</th>
                <td className="px-5 py-3 text-ink-soft">{row.meaning}</td>
                <td className="px-5 py-3 text-thinker">{row.thinker}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
