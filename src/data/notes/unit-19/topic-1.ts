import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1EnMindMap, topic1EnSections } from './topic-1-en'
import { topic1HiMindMap, topic1HiSections } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1DevelopmentPlanning: TopicNotebookSpec = {
  topicSlug: 'development-planning-mixed-economy',
  summary:
    'Explores India’s post-colonial development trajectory from Nehruvian mixed economy, Soviet-style Five-Year Plans, and Gandhian Gram Swaraj to the 1991 LPG structural reforms, the rise of the consumerist new middle class, and the institutional transition to NITI Aayog’s competitive federalism.',
  summaryHinglish:
    'Azaad Bharat ke vikas ki yatra: Nehruvian mixed economy aur Soviet-style Five-Year Plans se lekar Gandhian Gram Swaraj, 1991 LPG reforms, new middle class ka consumerism, aur NITI Aayog ke competitive federalism tak ka poora samajshastriya vishleshan.',
  thinkerSlugs: ['karl-marx', 'max-weber', 'yogendra-singh'],
  relatedTopicSlugs: [
    'constitution-law-and-social-change',
    'rural-development-programmes',
    'evolution-of-modern-industry',
    'middle-classes-in-india',
    'development-and-dependency',
  ],
  mindMap: topic1EnMindMap,
  mindMapHinglish: topic1HiMindMap,
  sections: topic1EnSections,
  sectionsHinglish: topic1HiSections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}

export default topic1DevelopmentPlanning
