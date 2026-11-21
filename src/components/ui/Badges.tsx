export function AiBadge() {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-chip bg-ai-draft/15 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-soft"
      title="AI ne likha, publish se pehle human ne review kiya"
    >
      <span aria-hidden className="size-1.5 rounded-full bg-ai-draft" />
      AI-assisted · reviewed
    </span>
  )
}

export function DateStamp({ day, month }: { day: string; month: string }) {
  return (
    <span className="stamp self-start font-display" aria-hidden>
      <span className="text-xl font-semibold">{day}</span>
      <span className="text-[10px]">{month}</span>
    </span>
  )
}

export function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-card border border-dashed border-rule px-6 py-12 text-center">
      <p className="font-display text-xl">{title}</p>
      <p className="mx-auto mt-2 max-w-md text-sm text-ink-mute">{body}</p>
    </div>
  )
}
