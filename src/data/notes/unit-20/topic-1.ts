import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1EnMindMap, topic1EnSections } from './topic-1-en'
import { topic1HiMindMap, topic1HiSections } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1RuralDev: TopicNotebookSpec = {
  topicSlug: 'rural-development-programmes',
  summary:
    'Examines India’s rural development trajectory from the top-down Community Development Programme (CDP) and bureaucratic leakages in targeted schemes to the cooperative movement debate (Baviskar vs Thorner), rights-based employment under MGNREGA, and women’s collective empowerment through DAY-NRLM Self-Help Groups.',
  summaryHinglish:
    'Azaad Bharat ke grameen vikas karyakramon ka samajshastra: Top-down CDP ki afsarshahi aur IRDP ke leakages se lekar Sahakari Andolan ki behas (Baviskar vs Thorner), MGNREGA ke kanooni rozgar guarantee, aur DAY-NRLM mahila Self-Help Groups ke social capital tak ka vistaar se vishleshan.',
  thinkerSlugs: ['mn-srinivas', 'robert-k-merton', 'max-weber', 'br-ambedkar'],
  relatedTopicSlugs: [
    'agrarian-social-structure-land-reforms',
    'agrarian-class-structure',
    'green-revolution-and-social-change',
    'changing-modes-of-production-agriculture',
    'rural-labour-bondage-migration',
  ],
  mindMap: topic1EnMindMap,
  mindMapHinglish: topic1HiMindMap,
  sections: topic1EnSections,
  sectionsHinglish: topic1HiSections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}

export default topic1RuralDev
