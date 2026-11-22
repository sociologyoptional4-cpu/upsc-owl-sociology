'use client'

import { useState } from 'react'

import type { BlogQuizItem } from '@/lib/data/types'

const LETTERS = ['A', 'B', 'C', 'D']

/** End-of-post self-check: each question locks after the first pick and explains the answer. */
export function PostQuiz({ items }: { items: BlogQuizItem[] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  if (items.length === 0) return null
  const answered = Object.keys(answers).length
  const score = items.reduce((sum, item, i) => sum + (answers[i] === item.answerIndex ? 1 : 0), 0)

  return (
    <section aria-labelledby="post-quiz-h" className="post-quiz">
      <div className="post-quiz-head">
        <p className="tag-skew"><span>Khud ko test karo</span></p>
        <h2 id="post-quiz-h" className="post-quiz-title">Is post se {items.length} sawal</h2>
        <p className="post-quiz-score" aria-live="polite">{answered === items.length ? `Score: ${score} / ${items.length}` : `${answered} / ${items.length} attempted`}</p>
      </div>
      <ol className="post-quiz-list">
        {items.map((item, q) => {
          const chosen = answers[q]
          const done = chosen !== undefined
          return (
            <li key={item.question} className="post-quiz-item">
              <h3 className="post-quiz-q">{q + 1}. {item.question}</h3>
              <div role="group" aria-label={`Sawal ${q + 1} ke options`} className="post-quiz-options">
                {item.options.map((option, o) => {
                  const state = !done ? '' : o === item.answerIndex ? 'is-right' : o === chosen ? 'is-wrong' : 'is-dim'
                  return (
                    <button key={option} type="button" disabled={done} aria-pressed={o === chosen} className={`post-quiz-option ${state}`} onClick={() => setAnswers((prev) => (q in prev ? prev : { ...prev, [q]: o }))}>
                      <span className="post-quiz-letter">{LETTERS[o]}</span>
                      <span>{option}</span>
                    </button>
                  )
                })}
              </div>
              {done ? <p className="post-quiz-explain"><strong>{chosen === item.answerIndex ? 'Sahi! ' : 'Galat. '}</strong>{item.explanation}</p> : null}
            </li>
          )
        })}
      </ol>
    </section>
  )
}
