import type { CalloutBlock as CalloutBlockData } from '@/payload-types'

type Props = { block: CalloutBlockData }

// Color is semantic: each tone maps to one meaning in the design system.
const TONES: Record<CalloutBlockData['tone'], { label: string; bar: string; tint: string }> = {
  tip: { label: 'Tip', bar: 'bg-paper-2', tint: 'bg-paper-2/8' },
  warning: { label: 'Dhyan do', bar: 'bg-saffron', tint: 'bg-saffron/10' },
  pyq: { label: 'PYQ alert', bar: 'bg-pyq', tint: 'bg-pyq/8' },
  ai: { label: 'AI note', bar: 'bg-ai-draft', tint: 'bg-ai-draft/12' },
}

export function CalloutBlockComponent({ block }: Props) {
  const tone = TONES[block.tone] ?? TONES.tip
  return (
    <section className="mx-auto max-w-7xl px-5 py-4 md:px-8">
      <aside
        className={`relative max-w-[var(--measure)] overflow-hidden rounded-card ${tone.tint} py-5 pl-7 pr-6`}
      >
        <span aria-hidden className={`absolute inset-y-0 left-0 w-1.5 ${tone.bar}`} />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">{tone.label}</p>
        {block.title && <h3 className="mt-1 text-[length:var(--text-lg)]">{block.title}</h3>}
        <p className="mt-2 whitespace-pre-line">{block.body}</p>
      </aside>
    </section>
  )
}
