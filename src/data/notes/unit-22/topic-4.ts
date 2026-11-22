import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic4En } from './topic-4-en'
import { topic4Hi } from './topic-4-hi'
import { topic4PyqsEn } from './topic-4-pyqs-en'
import { topic4PyqsHi } from './topic-4-pyqs-hi'

export const topic4Secularization: TopicNotebookSpec = {
  topicSlug: 'secularization-india',
  summary: topic4En.summary,
  summaryHinglish: topic4Hi.summary,
  thinkerSlugs: ['mn-srinivas', 'emile-durkheim', 'max-weber', 'yogendra-singh'],
  relatedTopicSlugs: [
    'nation-democracy-citizenship-india',
    'ethnic-conflicts-communalism',
    'religion-in-modern-society',
    'sociological-theories-of-religion',
    'modernization-of-indian-tradition',
  ],
  mindMap: topic4En.mindMap,
  mindMapHinglish: topic4Hi.mindMap,
  sections: topic4En.sections,
  sectionsHinglish: topic4Hi.sections,
  pyqAnswers: topic4PyqsEn,
  pyqAnswersHinglish: topic4PyqsHi,
}
