import type { Metadata } from 'next'

import { QuizView } from '@/components/views/QuizView'
import { getQuizView } from '@/lib/data/learning'

export const metadata: Metadata = {
  title: 'Daily practice',
  description: 'Roz ke current affairs se 5 MCQ, turant explanation ke saath.',
  alternates: { canonical: '/practice' },
}

const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/

export default async function PracticePage({ searchParams }: { searchParams: Promise<{ date?: string }> }) {
  const { date } = await searchParams
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date())
  const day = date && ISO_DAY.test(date) ? date : today
  return <QuizView data={await getQuizView(day)} />
}
