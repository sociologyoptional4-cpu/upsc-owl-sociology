'use client'

import Link from 'next/link'
import { useState } from 'react'

import type { QuizView } from '@/lib/data/types'

type Item = QuizView['items'][number]
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

/** One question at a time is overkill for 5; all visible, each locks after the first pick. */
export function QuizRunner({ items }: { items: Item[] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const answered = Object.keys(answers).length
  const score = items.reduce((sum, item, i) => sum + (answers[i] === item.answerIndex ? 1 : 0), 0)

  const pick = (qIndex: number, optionIndex: number) =>
    setAnswers((prev) => (qIndex in prev ? prev : { ...prev, [qIndex]: optionIndex }))

  return (
    <div>
      <div className="sticky top-20 z-20 mb-8 flex items-center justify-between gap-4 rounded-card border-2 border-ink bg-paper-raised px-5 py-3 shadow-paper">
        <span className="text-sm font-semibold">{answered} / {items.length} attempted</span>
        <span aria-hidden className="h-2 flex-1 overflow-hidden rounded-full bg-paper-sunk">
          <span className="block h-full origin-left rounded-full bg-saffron transition-transform duration-500 ease-out-expo" style={{ transform: `scaleX(${answered / items.length})` }} />
        </span>
        <span className="font-display text-lg font-extrabold" aria-live="polite">Score: {score}</span>
      </div>

      <ol className="space-y-8">
        {items.map((item, qIndex) => {
          const chosen = answers[qIndex]
          const isAnswered = chosen !== undefined
          return (
            <li key={item.question} className="rounded-card border border-rule bg-paper-raised p-6 shadow-paper">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-mute">Sawaal {qIndex + 1}</p>
              <h2 className="mt-2 text-lg font-bold leading-snug">{item.question}</h2>
              <div role="group" aria-label={`Sawaal ${qIndex + 1} ke options`} className="mt-5 grid gap-2">
                {item.options.map((option, oIndex) => {
                  const isCorrect = oIndex === item.answerIndex
                  const isChosen = oIndex === chosen
                  const tone = !isAnswered
                    ? 'border-rule hover:border-ink hover:bg-paper-sunk'
                    : isCorrect
                      ? 'border-green-600 bg-green-50 text-green-900 dark:bg-green-950 dark:text-green-200'
                      : isChosen
                        ? 'border-red-600 bg-red-50 text-red-900 dark:bg-red-950 dark:text-red-200'
                        : 'border-rule opacity-60'
                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={isAnswered}
                      aria-pressed={isChosen}
                      onClick={() => pick(qIndex, oIndex)}
                      className={`flex items-start gap-3 rounded-lg border-2 px-4 py-3 text-left text-sm transition-colors ${tone}`}
                    >
                      <span className="font-display font-extrabold">{LETTERS[oIndex]}</span>
                      <span>{option}</span>
                      {isAnswered && isCorrect && <span className="ml-auto font-semibold">✓</span>}
                      {isAnswered && isChosen && !isCorrect && <span className="ml-auto font-semibold">✕</span>}
                    </button>
                  )
                })}
              </div>
              {isAnswered && (
                <div className="mt-4 rounded-lg bg-pastel-yellow p-4 text-sm">
                  <p className="font-semibold">{chosen === item.answerIndex ? 'Sahi jawab! ' : 'Galat. '}</p>
                  <p className="mt-1 text-ink-soft">{item.explanation}</p>
                  <Link href={item.caHref} className="mt-2 inline-block font-semibold text-saffron-deep">Related khabar padho →</Link>
                </div>
              )}
            </li>
          )
        })}
      </ol>

      {answered === items.length && (
        <div className="mt-10 rounded-sheet bg-neutral-950 p-8 text-center text-white">
          <p className="font-display text-3xl font-extrabold">{score} / {items.length}</p>
          <p className="mt-2 text-neutral-300">{score === items.length ? 'Perfect! Kal phir aana.' : 'Explanations dobara padho, kal score badhao.'}</p>
        </div>
      )}
    </div>
  )
}
