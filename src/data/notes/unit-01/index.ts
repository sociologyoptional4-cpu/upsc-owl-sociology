import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1Emergence } from './topic-1-emergence'
import { topic2Scope } from './topic-2-scope'
import { topic3CommonSense } from './topic-3-common-sense'

const unitMindMap: MindMapData = {
  title: 'Paper 1 · Unit 1 — Sociology: The Discipline',
  center: 'Sociology: The Discipline',
  subtitle: 'Origin (Europe/USA/India) • Scope & Siblings • Common Sense & Mills',
  branches: [
    {
      title: '1.1 Modernity & Emergence',
      color: 'lavender',
      thinkers: ['Auguste Comte', 'Karl Marx', 'Émile Durkheim', 'Max Weber'],
      points: [
        'Renaissance + Scientific Rev + Enlightenment (Reason & Progress)',
        'Conservative reaction (Bonald, Maistre) highlighted order & sacred',
        'French Rev (1789) + Industrial Rev reshaped state, class & family',
        'Europe macro-theory → USA Chicago reformism → India postcolonial lens',
      ],
    },
    {
      title: '1.2 Scope & Other Sciences',
      color: 'yellow',
      thinkers: ['Georg Simmel', 'Émile Durkheim', 'M.N. Srinivas', 'Rajni Kothari'],
      points: [
        'Formalistic (Simmel: forms) vs Synthetic (Durkheim: holistic)',
        'History = idiographic past; Sociology = nomothetic patterns (Carr)',
        'Anthropology twin sister merged via Indian village studies (Srinivas)',
        'Pol Sci (power), Economics (embeddedness), Psych (social self)',
      ],
    },
    {
      title: '1.3 Common Sense & Mills',
      color: 'mint',
      thinkers: ['C. Wright Mills', 'Peter Berger', 'Alfred Schutz', 'Anthony Giddens'],
      points: [
        'Common sense: local, anecdotal, contradictory, hides inequality',
        'Durkheim (reject prenotions) + Berger (debunking motif)',
        'Schutz & Garfinkel: everyday meanings & breaching rules matter',
        'Giddens Double Hermeneutic + Mills: Biography + History + Structure',
      ],
    },
    {
      title: 'PYQ Trends (2013–2025)',
      color: 'pink',
      thinkers: ['25 Questions Total', '9 Emergence', '10 Scope', '6 Common Sense'],
      points: [
        'Top repeat themes: Enlightenment (7), Sibling disciplines (6), Scope (5)',
        'Always balance Eurocentric origin with non-Western & Indian context',
        'Use everyday Indian illustrations: Metro, Swiggy gigs, Shaadi apps',
        'Micro structure: Define → Dimensions → Indian Example → Balanced End',
      ],
    },
  ],
}

export const unit01Notebook: UnitNotebookSpec = {
  paperCode: 'P1',
  unitSlug: 'sociology-the-discipline',
  overview: 'Unit 1 poori UPSC Sociology Optional ki foundation hai — yahin se aap seekhte hain ki Europe ki krantiyon se Sociology kaise janmi, baaki social sciences se iska lens kaise alag hai, aur C.W. Mills ki Sociological Imagination rozmarra ke common sense ko tod kar Paper 1 aur Paper 2 ko kaise jodti hai.',
  studySequence: [
    {
      step: '1. Timeline',
      detail: 'Enlightenment, French Revolution (1789) aur Industrial Revolution ki timeline se samjho ki Europe mein Sociology kyun bani aur USA-India mein kaise badli.',
    },
    {
      step: '2. Compare lenses',
      detail: 'Formal vs Synthetic scope clear karo, aur History, Social Anthropology, Pol Science, Economics & Psychology ke saath overlap tables revise karo.',
    },
    {
      step: '3. Use Mills',
      detail: 'Aarav ke Delhi Metro delay ya UPSC coaching stress par C.W. Mills ka Personal Trouble + Social Structure + History formula apply karo.',
    },
    {
      step: '4. Practise PYQs',
      detail: 'Define → Explain dimensions → Give Indian example → Balanced conclusion ke 4-step micro structure se sabhi 25 PYQs (2013–2025) practice karo.',
    },
  ],
  mindMap: unitMindMap,
  infographics: [
    {
      assetFile: 'p1-u1-01-sociological-imagination.webp',
      title: 'From Personal Complaint to Sociological Imagination',
      badge: '01/04 · Core Lens',
      alt: 'Aarav complaining about delayed metro versus a sociologist linking personal trouble to infrastructure, crowding, class, gender, accessibility and history',
      caption: 'Aarav ka metro delay gussa personal lagta hai, par Sociology use urban infrastructure, class, gender aur history se jodti hai (C.W. Mills).',
    },
    {
      assetFile: 'p1-u1-02-emergence.webp',
      title: 'How Sociology Emerged in Europe',
      badge: '02/04 · Origin',
      alt: 'Visual timeline from Enlightenment to French Revolution and Industrial Revolution culminating in Sociology and Auguste Comte',
      caption: 'Sociology kisi ek kaaran se nahi, balki Enlightenment (reason), French Revolution (political order) aur Industrial Revolution (factories & family shift) se nikli.',
    },
    {
      assetFile: 'p1-u1-03-social-sciences.webp',
      title: 'What Makes Sociology Different?',
      badge: '03/04 · Comparisons',
      alt: 'Side-by-side comparison of Sociology with Common Sense, History, and Psychology using unemployment example',
      caption: 'Disciplines overlap karti hain; Sociology ki khas pehchan hai har ghatna ke peeche ka social context, structure aur relationships dekhna.',
    },
    {
      assetFile: 'p1-u1-04-pyq-trends.webp',
      title: 'Chapter 1: What PYQs Keep Asking (2013–2025)',
      badge: '04/04 · Exam Strategy',
      alt: 'Bar chart of 25 UPSC Paper 1 Chapter 1 PYQs by theme alongside 4-step study sequence and micro answer structure',
      caption: '25 PYQs ka data breakdown: Emergence (7), Other disciplines (6), Scope (5), Common sense/Mills (4), Industrial family/society (3) + 4-step revision plan.',
    },
  ],
  topics: [topic1Emergence, topic2Scope, topic3CommonSense],
}

export default unit01Notebook
