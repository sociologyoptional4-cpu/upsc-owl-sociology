import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic4EnMindMap, topic4EnSections } from './topic-4-en'
import { topic4HiMindMap, topic4HiSections } from './topic-4-hi'
import { topic4PyqsEn } from './topic-4-pyqs-en'
import { topic4PyqsHi } from './topic-4-pyqs-hi'

export const topic4CasteConflicts: TopicNotebookSpec = {
  topicSlug: 'caste-conflicts',
  summary:
    'Sociologically investigates contemporary caste conflicts in India, analyzing the agrarian empowerment of dominant castes (M.N. Srinivas), violent backlashes against upward subaltern mobility (Anand Teltumbde, Khairlanji, Una), proximate caste competition (F.G. Bailey), and Ambedkar’s Graded Inequality.',
  summaryHinglish:
    'Bharat mein aadhunik jaati sangharsh ka samajshastriya adhyayan: Dominant krishi jaatiyon ka uday (M.N. Srinivas), Daliton ki upward mobility par violent backlash (Anand Teltumbde, Khairlanji, Una), bagal wali jaatiyon ka takrav (F.G. Bailey), aur Babasaheb Ambedkar ki Graded Inequality.',
  thinkerSlugs: ['br-ambedkar', 'mn-srinivas', 'karl-marx'],
  relatedTopicSlugs: [
    'features-of-caste-system',
    'perspectives-on-caste',
    'backward-classes-and-dalit-movement',
    'violence-against-women',
    'ethnic-conflicts-communalism',
  ],
  mindMap: topic4EnMindMap,
  mindMapHinglish: topic4HiMindMap,
  sections: topic4EnSections,
  sectionsHinglish: topic4HiSections,
  pyqAnswers: topic4PyqsEn,
  pyqAnswersHinglish: topic4PyqsHi,
}

export default topic4CasteConflicts
