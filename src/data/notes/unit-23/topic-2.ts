import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2EnMindMap, topic2EnSections } from './topic-2-en'
import { topic2HiMindMap, topic2HiSections } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2WomensMovement: TopicNotebookSpec = {
  topicSlug: 'womens-movement',
  summary:
    'Explores the Indian women’s movement across Radha Kumar’s four historical phases—from 19th-century male-led social reform to Gandhian mass nationalist mobilization, the post-1970s autonomous anti-violence upsurge, and contemporary intersectional Dalit feminism and digital campaigns.',
  summaryHinglish:
    'Radha Kumar ke chaar charnon ke tahat Bharat mein mahila aandolan ka adhyayan: 19th sadi ke purush sudharon se lekar Gandhian aazaadi morcha, 1970s ke swatantra sangharsh, Gopal Guru aur Sharmila Rege ka Dalit feminism aur POSH-#MeToo ka naya digital daur.',
  thinkerSlugs: ['karl-marx', 'max-weber', 'yogendra-singh'],
  relatedTopicSlugs: [
    'social-reforms',
    'violence-against-women',
    'protest-social-movements-revolution',
    'constitution-law-and-social-change',
    'protests-and-movements-colonial-period',
  ],
  mindMap: topic2EnMindMap,
  mindMapHinglish: topic2HiMindMap,
  sections: topic2EnSections,
  sectionsHinglish: topic2HiSections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}

export default topic2WomensMovement
