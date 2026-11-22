import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2EnMindMap, topic2EnSections } from './topic-2-en'
import { topic2HiMindMap, topic2HiSections } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2PovertyDeprivationInequalities: TopicNotebookSpec = {
  topicSlug: 'poverty-deprivation-inequalities',
  summary:
    'Examines poverty, deprivation, and structural inequalities in India, analyzing the shift from calorie metrics to Amartya Sen’s Capability Deprivation and the MPI, emerging wealth polarization under the Billionaire Raj, Jan Breman’s footloose labour, and the feminization of poverty.',
  summaryHinglish:
    'Bharat mein garibi, vanchana aur asamanta ka vishleshan: Calorie line se aage badhkar Amartya Sen ki Capability Deprivation aur NITI Aayog ke MPI ka aakalan, "Billionaire Raj" mein badhti daulat ki asamanta, Jan Breman ka footloose labour, aur garibi ka strikaran.',
  thinkerSlugs: ['karl-marx', 'robert-k-merton', 'br-ambedkar'],
  relatedTopicSlugs: [
    'equality-inequality-hierarchy-exclusion',
    'theories-of-stratification',
    'dimensions-of-stratification',
    'rural-development-programmes',
    'crisis-of-development-displacement',
  ],
  mindMap: topic2EnMindMap,
  mindMapHinglish: topic2HiMindMap,
  sections: topic2EnSections,
  sectionsHinglish: topic2HiSections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}

export default topic2PovertyDeprivationInequalities
