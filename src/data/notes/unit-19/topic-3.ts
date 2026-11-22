import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3EnMindMap, topic3EnSections } from './topic-3-en'
import { topic3HiMindMap, topic3HiSections } from './topic-3-hi'
import { topic3PyqsEn } from './topic-3-pyqs-en'
import { topic3PyqsHi } from './topic-3-pyqs-hi'

export const topic3EducationSocialChange: TopicNotebookSpec = {
  topicSlug: 'education-and-social-change-india',
  summary:
    'Explores education as an emancipatory ladder for social mobility versus an institutional filter of cultural reproduction, stratified schooling, Krishna Kumar’s textbook culture, Ajantha Subramanian’s caste of merit, the coaching industry, the Right to Education Act 2009, and the structural promises and inequities of NEP 2020.',
  summaryHinglish:
    'Shiksha aur samajik badlaav ka vishleshan: Upward mobility banam cultural reproduction, schooling ka jaativadi batwara, Krishna Kumar ka textbook culture, Ajantha Subramanian ka "The Caste of Merit", private coaching industry, RTE Act 2009, aur NEP 2020 ki sambhavnayein aur digital divide.',
  thinkerSlugs: ['br-ambedkar', 'emile-durkheim', 'karl-marx', 'yogendra-singh'],
  relatedTopicSlugs: [
    'constitution-law-and-social-change',
    'social-mobility',
    'dimensions-of-stratification',
    'illiteracy-and-educational-disparities',
    'middle-classes-in-india',
  ],
  mindMap: topic3EnMindMap,
  mindMapHinglish: topic3HiMindMap,
  sections: topic3EnSections,
  sectionsHinglish: topic3HiSections,
  pyqAnswers: topic3PyqsEn,
  pyqAnswersHinglish: topic3PyqsHi,
}

export default topic3EducationSocialChange
