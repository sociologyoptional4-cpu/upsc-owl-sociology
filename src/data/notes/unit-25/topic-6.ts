import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic6EnMindMap, topic6EnSections } from './topic-6-en'
import { topic6HiMindMap, topic6HiSections } from './topic-6-hi'
import { topic6PyqsEn } from './topic-6-pyqs-en'
import { topic6PyqsHi } from './topic-6-pyqs-hi'

export const topic6IlliteracyEducationalDisparities: TopicNotebookSpec = {
  topicSlug: 'illiteracy-and-educational-disparities',
  summary:
    'Sociologically investigates illiteracy, learning disparities, and educational reproduction in India, evaluating Pierre Bourdieu’s cultural capital, Krishna Kumar’s critique of the two-tier schooling system, ASER functional illiteracy findings, caste/tribal marginalization, and the pandemic digital divide.',
  summaryHinglish:
    'Bharat mein niraksharta, sikhne ki kami aur shiksha ki asamanta ka samajshastriya vishleshan: Pierre Bourdieu ka cultural capital, Krishna Kumar ka Two-Tier schooling framework, ASER ki functional illiteracy report, Dalit aur Adivasi bacchon ka shoshan, aur pandemic ke dauran digital khayi.',
  thinkerSlugs: ['emile-durkheim', 'karl-marx', 'br-ambedkar'],
  relatedTopicSlugs: [
    'education-and-social-change',
    'education-and-social-change-india',
    'poverty-deprivation-inequalities',
    'equality-inequality-hierarchy-exclusion',
    'violence-against-women',
  ],
  mindMap: topic6EnMindMap,
  mindMapHinglish: topic6HiMindMap,
  sections: topic6EnSections,
  sectionsHinglish: topic6HiSections,
  pyqAnswers: topic6PyqsEn,
  pyqAnswersHinglish: topic6PyqsHi,
}

export default topic6IlliteracyEducationalDisparities
