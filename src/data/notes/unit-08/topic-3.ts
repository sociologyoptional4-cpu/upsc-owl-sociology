import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3En } from './topic-3-en'
import { topic3Hi } from './topic-3-hi'
import { topic3PyqsEn } from './topic-3-pyqs-en'
import { topic3PyqsHi } from './topic-3-pyqs-hi'

export const topic3ReligionInModernSociety: TopicNotebookSpec = {
  topicSlug: 'religion-in-modern-society',
  summary: topic3En.summary,
  summaryHinglish: topic3Hi.summary,
  thinkerSlugs: ['max-weber', 'robert-k-merton', 'mn-srinivas', 'br-ambedkar', 'yogendra-singh'],
  relatedTopicSlugs: [
    'sociological-theories-of-religion',
    'types-of-religious-practices',
    'secularization-india',
    'ethnic-conflicts-communalism',
    'science-and-scientific-method',
    'modernization-of-indian-tradition',
  ],
  mindMap: topic3En.mindMap,
  mindMapHinglish: topic3Hi.mindMap,
  sections: topic3En.sections,
  sectionsHinglish: topic3Hi.sections,
  pyqAnswers: topic3PyqsEn,
  pyqAnswersHinglish: topic3PyqsHi,
}