import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3EnMindMap, topic3EnSections } from './topic-3-en'
import { topic3HiMindMap, topic3HiSections } from './topic-3-hi'
import { topic3PyqsEn } from './topic-3-pyqs-en'
import { topic3PyqsHi } from './topic-3-pyqs-hi'

export const topic3WorkingClass: TopicNotebookSpec = {
  topicSlug: 'working-class-in-india',
  summary:
    'Examines the structure, social composition, and mobilization of India’s working class, the committed labour force debate (Clark Kerr vs Lambert and Sheth), the decline of trade union density amid contractualization and platform gig work, and COVID-19 migrant precarity alongside the Four Labour Codes.',
  summaryHinglish:
    'Bharat ke working class ka vishleshan: Dhancha, jaati aur gender composition, committed labour thesis (Clark Kerr banam Lambert aur Sheth), thekedaari aur platform gig work se trade unions ka patan, aur COVID-19 lockdown mein migrant shramikon ki lachari aur Char Naye Labour Codes.',
  thinkerSlugs: ['karl-marx', 'max-weber', 'br-ambedkar'],
  relatedTopicSlugs: [
    'industrial-class-structure',
    'formal-and-informal-organisation-of-work',
    'labour-and-society',
    'informal-sector-child-labour',
    'evolution-of-modern-industry',
  ],
  mindMap: topic3EnMindMap,
  mindMapHinglish: topic3HiMindMap,
  sections: topic3EnSections,
  sectionsHinglish: topic3HiSections,
  pyqAnswers: topic3PyqsEn,
  pyqAnswersHinglish: topic3PyqsHi,
}

export default topic3WorkingClass
