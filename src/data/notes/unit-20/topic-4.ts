import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic4EnMindMap, topic4EnSections } from './topic-4-en'
import { topic4HiMindMap, topic4HiSections } from './topic-4-hi'
import { topic4PyqsEn } from './topic-4-pyqs-en'
import { topic4PyqsHi } from './topic-4-pyqs-hi'

export const topic4RuralLabour: TopicNotebookSpec = {
  topicSlug: 'rural-labour-bondage-migration',
  summary:
    'Investigates the structural precarity of rural labour in contemporary India: policy-driven agrarian distress, the multi-agency debt treadmill (P. Sainath), Jan Breman’s concept of neo-bondage and circular footloose migration, disguised unfreedom despite the 1976 Abolition Act, and the feminisation of agriculture alongside escalating rural unrest.',
  summaryHinglish:
    'Samkaleen Bharat mein grameen khetihar shramikon ke sankat ka gahan vishleshan: Kheti ka policy-driven sankat aur karz ka chakravyuh (P. Sainath), Jan Breman ka neo-bondage aur footloose circular migration, 1976 ke kanoon ke bawajood chhipi hui bandhua mazdoori, aur kheti ka streekaran (feminisation of agriculture) tatha kisan andolan.',
  thinkerSlugs: ['br-ambedkar', 'karl-marx', 'mn-srinivas'],
  relatedTopicSlugs: [
    'agrarian-social-structure-land-reforms',
    'agrarian-class-structure',
    'rural-development-programmes',
    'green-revolution-and-social-change',
    'changing-modes-of-production-agriculture',
  ],
  mindMap: topic4EnMindMap,
  mindMapHinglish: topic4HiMindMap,
  sections: topic4EnSections,
  sectionsHinglish: topic4HiSections,
  pyqAnswers: topic4PyqsEn,
  pyqAnswersHinglish: topic4PyqsHi,
}

export default topic4RuralLabour
