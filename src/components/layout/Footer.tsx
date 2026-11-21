export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative z-10 mt-[var(--space-section)] border-t border-rule">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 text-sm text-ink-mute md:grid-cols-[2fr_1fr] md:px-8">
        <p className="max-w-prose">
          Content AI-assisted hai aur human-reviewed hai. Har note ke saath original source link
          diya jaata hai. Galti dikhe to batao.
        </p>
        <p className="md:text-right">© {year} AUM Sociology</p>
      </div>
    </footer>
  )
}
