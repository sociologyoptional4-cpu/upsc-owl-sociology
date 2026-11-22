import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1EnMindMap, topic1EnSections } from './topic-1-en'
import { topic1HiMindMap, topic1HiSections } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1CrisisOfDevelopmentDisplacement: TopicNotebookSpec = {
  topicSlug: 'crisis-of-development-displacement',
  summary:
    'Critically examines the crisis of development in India, focusing on development-induced displacement, the disproportionate burden on Adivasis and Dalits, Cernea’s IRR model, legal transitions from 1894 to LARR 2013, and the sociological quest for just sustainability.',
  summaryHinglish:
    'Bharat mein vikas ke sankat ka samajshastriya vishleshan: Bade baandhon aur khadaanon se hua jabran visthapan, Adivasiyon aur Daliton par asaman bojh, Cernea ka IRR model, 1894 se LARR 2013 tak ka kanooni safar, aur "Just Sustainability" ki ahem avadharna.',
  thinkerSlugs: ['karl-marx', 'max-weber', 'yogendra-singh'],
  relatedTopicSlugs: [
    'environmental-movements',
    'tribal-integration-and-autonomy',
    'development-planning-mixed-economy',
    'science-technology-and-social-change',
    'poverty-deprivation-inequalities',
  ],
  mindMap: topic1EnMindMap,
  mindMapHinglish: topic1HiMindMap,
  sections: topic1EnSections,
  sectionsHinglish: topic1HiSections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}

export default topic1CrisisOfDevelopmentDisplacement
