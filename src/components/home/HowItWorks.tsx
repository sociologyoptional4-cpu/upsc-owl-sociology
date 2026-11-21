import { Reveal } from '../motion/Reveal'

const STEPS = [
  { title: 'Khabar aati hai', body: 'Subah 6 baje PIB, The Hindu, Indian Express jaise sources se nayi khabrein.', bg: 'bg-pastel-lavender' },
  { title: 'AI chhaant-ta hai', body: 'Sirf wahi khabar rehti hai jo Sociology Optional ke kaam ki hai.', bg: 'bg-pastel-yellow' },
  { title: 'Syllabus se judti hai', body: 'Topic, thinker, concept aur answer-writing points ke saath.', bg: 'bg-pastel-mint' },
  { title: 'Site pe live', body: 'Review ke baad publish, aur seedha is website pe.', bg: 'bg-pastel-pink' },
]

export function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="mx-auto max-w-6xl px-5 md:px-8">
      <div className="rounded-sheet border border-rule bg-paper-raised px-6 py-14 shadow-float md:px-12">
        <h2 id="how-heading" className="text-center text-[length:var(--text-h2)] font-medium">
          Sociology optional, <span className="font-extrabold">simplified…</span>
        </h2>
        <p className="mt-3 text-center text-ink-mute">Preparation fast, aasan aur roz updated. Ye sab apne aap hota hai.</p>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal as="li" key={step.title} index={index} className={`relative overflow-hidden rounded-2xl ${step.bg} p-6 pb-20`}>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{step.body}</p>
              <span aria-hidden className="absolute -bottom-4 right-3 font-display text-8xl font-extrabold text-ink/10">
                {String(index + 1).padStart(2, '0')}
              </span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
