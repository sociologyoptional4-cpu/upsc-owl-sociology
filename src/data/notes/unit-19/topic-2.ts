import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2EnMindMap, topic2EnSections } from './topic-2-en'
import { topic2HiMindMap, topic2HiSections } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2ConstitutionLaw: TopicNotebookSpec = {
  topicSlug: 'constitution-law-and-social-change',
  summary:
    'Examines the Indian Constitution as an instrument of transformative social engineering, Marc Galanter’s critique of legal illiteracy and judicial backlog, the socio-economic empowerment and backlash faced by SCs and STs, and the sociopolitical debate on the Uniform Civil Code balancing gender justice with cultural autonomy.',
  summaryHinglish:
    'Samvidhanik social engineering aur kanoon ke zariye badlaav: Marc Galanter ka legal illiteracy aur judicial backlog ka vishleshan, SCs aur STs par reservation aur kanoon ka asar, dominant castes ka backlash, aur Uniform Civil Code (UCC) par gender justice aur cultural autonomy ki behas.',
  thinkerSlugs: ['br-ambedkar', 'max-weber', 'mn-srinivas', 'yogendra-singh'],
  relatedTopicSlugs: [
    'development-planning-mixed-economy',
    'education-and-social-change-india',
    'nation-state-citizenship-democracy',
    'backward-classes-and-dalit-movement',
    'modernization-of-indian-tradition',
  ],
  mindMap: topic2EnMindMap,
  mindMapHinglish: topic2HiMindMap,
  sections: topic2EnSections,
  sectionsHinglish: topic2HiSections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}

export default topic2ConstitutionLaw
