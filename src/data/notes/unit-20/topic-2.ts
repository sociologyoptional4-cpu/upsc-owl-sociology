import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2EnMindMap, topic2EnSections } from './topic-2-en'
import { topic2HiMindMap, topic2HiSections } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2GreenRev: TopicNotebookSpec = {
  topicSlug: 'green-revolution-and-social-change',
  summary:
    'Analyses the sociological transformation unleashed by the Green Revolution: the victory narrative versus structural class polarization (Francine Frankel), the rise of dominant-caste "bullock capitalists" and militant farm lobbies (Rudolphs, BKU), ecological devastation (Vandana Shiva), and deep social paradoxes including plunging child sex ratios and rural labour casualization.',
  summaryHinglish:
    'Harit Kranti aur samajik badlaav ka gahan vishleshan: Anaaj aatmanirbharta ke jeet ke daawe ke peeche chhipe vargiya dhruvav (Francine Frankel), intermediate jaatiyon ke "bullock capitalists" aur BKU ka uday (Rudolphs), Vandana Shiva ka ecological critique, aur adverse child sex ratio tatha khetihar mazdoori ke casualisation ke samajik paradoxes.',
  thinkerSlugs: ['mn-srinivas', 'karl-marx', 'yogendra-singh', 'robert-k-merton'],
  relatedTopicSlugs: [
    'agrarian-social-structure-land-reforms',
    'agrarian-class-structure',
    'rural-development-programmes',
    'changing-modes-of-production-agriculture',
    'rural-labour-bondage-migration',
  ],
  mindMap: topic2EnMindMap,
  mindMapHinglish: topic2HiMindMap,
  sections: topic2EnSections,
  sectionsHinglish: topic2HiSections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}

export default topic2GreenRev
