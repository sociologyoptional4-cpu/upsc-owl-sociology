import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-28 text-center md:px-8">
      <p className="font-display text-[length:var(--text-hero)] leading-none text-saffron-deep">404</p>
      <h1 className="mt-6 text-[length:var(--text-h3)]">Ye page anomie mein kho gaya.</h1>
      <p className="mt-3 text-ink-soft">Durkheim bhi ise dhoondh nahi paaye. Homepage se dobara shuru karo.</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-chip bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
      >
        Home pe jao
      </Link>
    </section>
  )
}
