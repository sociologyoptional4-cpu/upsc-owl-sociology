import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3En } from './topic-3-en'
import { topic3Hi } from './topic-3-hi'
import { topic3PyqsEn } from './topic-3-pyqs-en'
import { topic3PyqsHi } from './topic-3-pyqs-hi'

export const topic3NationState: TopicNotebookSpec = {
  topicSlug: 'nation-state-citizenship-democracy',
  summary: topic3En.summary,
  summaryHinglish: topic3Hi.summary,
  thinkerSlugs: ['max-weber', 'emile-durkheim', 'br-ambedkar', 'karl-marx'],
  relatedTopicSlugs: [
    'sociological-theories-of-power',
    'power-elite-bureaucracy-pressure-groups',
    'protest-social-movements-revolution',
    'nation-democracy-citizenship-india',
    'social-background-of-indian-nationalism',
  ],
  mindMap: topic3En.mindMap,
  mindMapHinglish: topic3Hi.mindMap,
  sections: topic3En.sections,
  sectionsHinglish: topic3Hi.sections,
  pyqAnswers: topic3PyqsEn,
  pyqAnswersHinglish: topic3PyqsHi,
}