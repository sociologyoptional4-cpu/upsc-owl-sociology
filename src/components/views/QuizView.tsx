import type { QuizView as QuizData } from '@/lib/data/types'

import { QuizRunner } from '../quiz/QuizRunner'
import { EmptyState } from '../ui/Badges'
import { formatDay } from '../ui/format'
import { PageHeader } from '../ui/PageHeader'

export function QuizView({ data }: { data: QuizData | null }) {
  return (
    <div className="mx-auto max-w-3xl px-5 md:px-8">
      <PageHeader
        kicker="Daily practice"
        title="Aaj ke 5 sawaal"
        highlight="5 sawaal"
        description={data ? `${formatDay(data.date)} ke current affairs se. Jawab chuno, turant explanation dekho.` : undefined}
      />
      <div className="mt-10">
        {data && data.items.length > 0 ? (
          <QuizRunner items={data.items} />
        ) : (
          <EmptyState title="Aaj ka quiz abhi taiyaar nahi" body="Quiz roz subah 6:30 baje aata hai. Tab tak aaj ka issue padh lo." />
        )}
      </div>
    </div>
  )
}
