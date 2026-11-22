import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2En } from './topic-2-en'
import { topic2Hi } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2ModernizationTradition: TopicNotebookSpec = {
  topicSlug: 'modernization-of-indian-tradition',
  summary: topic2En.summary,
  summaryHinglish: topic2Hi.summary,
  thinkerSlugs: ['yogendra-singh', 'mn-srinivas', 'max-weber'],
  relatedTopicSlugs: [
    'structural-functionalism-mn-srinivas',
    'social-background-of-indian-nationalism',
    'theories-of-social-change',
    'agents-of-social-change',
    'secularization-india',
  ],
  mindMap: topic2En.mindMap,
  mindMapHinglish: topic2Hi.mindMap,
  sections: topic2En.sections,
  sectionsHinglish: topic2Hi.sections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}
