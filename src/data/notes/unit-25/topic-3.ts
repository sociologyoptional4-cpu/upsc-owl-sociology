import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3EnMindMap, topic3EnSections } from './topic-3-en'
import { topic3HiMindMap, topic3HiSections } from './topic-3-hi'
import { topic3PyqsEn } from './topic-3-pyqs-en'
import { topic3PyqsHi } from './topic-3-pyqs-hi'

export const topic3ViolenceAgainstWomen: TopicNotebookSpec = {
  topicSlug: 'violence-against-women',
  summary:
    'Sociologically interrogates violence against women across private, public, and digital realms in India, analyzing Sylvia Walby’s patriarchal structures, Sharmila Rege’s Dalit Feminist Standpoint, legal frameworks (PWDVA 2005, POSH 2013), and the structural barriers sustaining gendered impunity.',
  summaryHinglish:
    'Bharat mein mahilaon ke khilaf hinsa ka samajshastriya vishleshan: Gharelu, workplace aur digital dayron mein hinsa, Sylvia Walby ka patriarchal structure, Sharmila Rege ka Dalit Feminist Standpoint, PWDVA 2005 aur POSH Act 2013 ki kanooni chunautiyan, aur marital rape exception ka vivaad.',
  thinkerSlugs: ['karl-marx', 'max-weber', 'br-ambedkar'],
  relatedTopicSlugs: [
    'womens-movement',
    'dimensions-of-stratification',
    'constitution-law-and-social-change',
    'caste-conflicts',
    'illiteracy-and-educational-disparities',
  ],
  mindMap: topic3EnMindMap,
  mindMapHinglish: topic3HiMindMap,
  sections: topic3EnSections,
  sectionsHinglish: topic3HiSections,
  pyqAnswers: topic3PyqsEn,
  pyqAnswersHinglish: topic3PyqsHi,
}

export default topic3ViolenceAgainstWomen
