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
        'Renaissance + Scientific Rev + Enlightenment championed reason & progress',
        'Conservative reaction (Bonald, Maistre) stressed order, community & sacred',
        'French Rev (1789) + Industrial Rev reshaped state, class & family',
        'Europe macro-theory → USA Chicago reformism → India postcolonial lens',
      ],
    },
    {
      title: '1.2 Scope & Other Sciences',
      color: 'yellow',
      thinkers: ['Georg Simmel', 'Émile Durkheim', 'M.N. Srinivas', 'Rajni Kothari'],
      points: [
        'Formalistic (Simmel: interaction forms) vs Synthetic (Durkheim: holistic)',
        'History studies unique past; Sociology finds general patterns (E.H. Carr)',
        'Anthropology twin sister merged via Indian village studies (Srinivas)',
        'Pol Sci (power), Economics (embeddedness), Psychology (social self)',
      ],
    },
    {
      title: '1.3 Common Sense & Mills',
      color: 'mint',
      thinkers: ['C. Wright Mills', 'Peter Berger', 'Alfred Schutz', 'Anthony Giddens'],
      points: [
        'Common sense: local, anecdotal, contradictory, masks inequality',
        'Durkheim (reject prenotions) + Berger (debunking) + Gramsci (hegemony)',
        'Schutz & Garfinkel: everyday lifeworld typifications & breaching rules',
        'Giddens Double Hermeneutic + Mills: Biography + Structure + History',
      ],
    },
    {
      title: 'PYQ Trends (2013–2025)',
      color: 'pink',
      thinkers: ['25 Questions Total', '9 Emergence', '10 Scope', '6 Common Sense'],
      points: [
        'Top repeat themes: Enlightenment (7), Sibling disciplines (6), Scope (5)',
        'Always balance Eurocentric origin with non-Western & Indian context',
        'Ground concepts in Indian life: Metro delays, Swiggy gigs, Shaadi apps',
        'Micro structure: Define → Dimensions → Indian Example → Balanced End',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 1 · Unit 1 — Sociology: The Discipline',
  center: 'Sociology: The Discipline',
  subtitle: 'Janm (Europe/USA/India) • Scope aur Siblings • Common Sense aur Mills',
  branches: [
    {
      title: '1.1 Modernity aur Emergence',
      color: 'lavender',
      thinkers: ['Auguste Comte', 'Karl Marx', 'Émile Durkheim', 'Max Weber'],
      points: [
        'Renaissance + Scientific Rev + Enlightenment ne tark aur progress ko aage badhaya',
        'Conservative reaction (Bonald, Maistre) ne order, community aur parampara par zor diya',
        'French Rev (1789) + Industrial Rev ne state, class aur parivaar ko badal diya',
        'Europe macro-theory → USA Chicago reformism → India postcolonial nazariya',
      ],
    },
    {
      title: '1.2 Scope aur Baaki Social Sciences',
      color: 'yellow',
      thinkers: ['Georg Simmel', 'Émile Durkheim', 'M.N. Srinivas', 'Rajni Kothari'],
      points: [
        'Formalistic (Simmel: interaction forms) vs Synthetic (Durkheim: samagra science)',
        'History unique past padhti hai; Sociology general patterns khojti hai (Carr)',
        'Social Anthropology aur Sociology Bharat ke village studies mein ek hui (Srinivas)',
        'Pol Sci (power), Economics (embedded markets), Psychology (social self)',
      ],
    },
    {
      title: '1.3 Common Sense aur Mills',
      color: 'mint',
      thinkers: ['C. Wright Mills', 'Peter Berger', 'Alfred Schutz', 'Anthony Giddens'],
      points: [
        'Common sense: local, anecdotal, ulte proverbs aur inequality ko natural dikhata hai',
        'Durkheim (prenotions chhodo) + Berger (debunking) + Gramsci (hegemony)',
        'Schutz aur Garfinkel: lifeworld typifications aur breaching experiments zaroori hain',
        'Giddens Double Hermeneutic + Mills: Biography + Structure + History',
      ],
    },
    {
      title: 'PYQ Trends (2013–2025)',
      color: 'pink',
      thinkers: ['25 Total Sawaal', '9 Emergence', '10 Scope', '6 Common Sense'],
      points: [
        'Sabse zyada repeat themes: Enlightenment (7), Sibling disciplines (6), Scope (5)',
        'Hamesha European origin ke saath non-Western aur Indian context balance karo',
        'Roz ke Indian examples lagao: Delhi Metro, Swiggy gigs, Shaadi apps',
        'Answer formula: Define → Dimensions → Indian Example → Balanced Conclusion',
      ],
    },
  ],
}

export const unit01Notebook: UnitNotebookSpec = {
  paperCode: 'P1',
  unitSlug: 'sociology-the-discipline',
  overview:
    'Unit 1 lays the intellectual foundation for all of UPSC Sociology Optional. Here you trace how European revolutions gave birth to sociology, how its relational scope differs from sibling social sciences, and how C.W. Mills’ Sociological Imagination breaks through everyday common sense to connect Paper 1 theory directly with Paper 2 Indian society.',
  overviewHinglish:
    'Unit 1 poori UPSC Sociology Optional ki neev hai — yahin se aap samajhte hain ki Europe ki krantiyon se Sociology kaise janmi, baaki social sciences se iska lens kaise alag hai, aur C.W. Mills ki Sociological Imagination rozmarra ke common sense ko tod kar Paper 1 aur Paper 2 ko kaise jodti hai.',
  studySequence: [
    { step: '1. Trace the Timeline', detail: 'Study how the Enlightenment, French Revolution (1789), and Industrial Revolution forged sociology in Europe and reshaped it in the USA and India.' },
    { step: '2. Compare Lenses', detail: 'Clarify Formal vs Synthetic scope, then master the comparison matrix across History, Social Anthropology, Political Science, Economics, and Psychology.' },
    { step: '3. Apply C.W. Mills', detail: 'Practise turning everyday scenes like Aarav’s Delhi Metro delay or youth unemployment from personal troubles into structural, historical issues.' },
    { step: '4. Practise 25 PYQs', detail: 'Solve all 25 PYQs (2013–2025) using the 4-step micro structure: Define → Explain dimensions → Give an Indian example → Balanced conclusion.' },
  ],
  studySequenceHinglish: [
    { step: '1. Timeline Samjho', detail: 'Enlightenment, French Revolution (1789) aur Industrial Revolution se samjho ki Europe mein Sociology kyun bani aur USA-India mein kaise badli.' },
    { step: '2. Lenses Compare Karo', detail: 'Formal vs Synthetic scope saaf karo, aur History, Social Anthropology, Pol Science, Economics & Psychology ke comparison tables revise karo.' },
    { step: '3. Mills Apply Karo', detail: 'Aarav ke Delhi Metro delay ya youth unemployment par C.W. Mills ka Personal Trouble + Social Structure + History formula lagana seekho.' },
    { step: '4. 25 PYQs Practice Karo', detail: 'Define → Dimensions → Indian example → Balanced conclusion ke 4-step micro structure se sabhi 25 PYQs (2013–2025) practice karo.' },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p1-u1-01-sociological-imagination.webp',
      title: 'From Personal Complaint to Sociological Imagination',
      titleHinglish: 'Personal Shikayat se Sociological Imagination Tak',
      badge: '01/04 · Core Lens',
      badgeHinglish: '01/04 · Mukhya Nazariya',
      alt: 'Aarav complaining about delayed metro versus a sociologist linking personal trouble to infrastructure, crowding, class, gender, accessibility and history',
      caption: 'Aarav’s irritation at a delayed Metro looks purely personal, yet sociology connects it to urban infrastructure, crowding, class, gender, and history (C.W. Mills).',
      captionHinglish: 'Aarav ka metro delay gussa personal lagta hai, par Sociology use urban infrastructure, class, gender aur history se jodti hai (C.W. Mills).',
    },
    {
      assetFile: 'p1-u1-02-emergence.webp',
      title: 'How Sociology Emerged in Europe',
      titleHinglish: 'Europe Mein Sociology Kaise Janmi',
      badge: '02/04 · Origin',
      badgeHinglish: '02/04 · Shuruat',
      alt: 'Visual timeline from Enlightenment to French Revolution and Industrial Revolution culminating in Sociology and Auguste Comte',
      caption: 'Sociology did not spring from one thinker alone — it emerged from the collision of the Enlightenment (reason), French Revolution (political order), and Industrial Revolution (factories and family shifts).',
      captionHinglish: 'Sociology kisi ek kaaran se nahi, balki Enlightenment (reason), French Revolution (political order) aur Industrial Revolution (factories & family shift) se nikli.',
    },
    {
      assetFile: 'p1-u1-03-social-sciences.webp',
      title: 'What Makes Sociology Different?',
      titleHinglish: 'Sociology Baaki Subjects Se Alag Kyun Hai?',
      badge: '03/04 · Comparisons',
      badgeHinglish: '03/04 · Tulna',
      alt: 'Side-by-side comparison of Sociology with Common Sense, History, and Psychology using unemployment example',
      caption: 'Social sciences often study overlapping topics; sociology stands apart by tracing the social context, power structures, and relationships behind every human issue.',
      captionHinglish: 'Disciplines overlap karti hain; Sociology ki khas pehchan hai har ghatna ke peeche ka social context, structure aur relationships dekhna.',
    },
    {
      assetFile: 'p1-u1-04-pyq-trends.webp',
      title: 'Chapter 1: What PYQs Keep Asking (2013–2025)',
      titleHinglish: 'Chapter 1: PYQs Mein Kya Baar-Baar Pucha Jaata Hai (2013–2025)',
      badge: '04/04 · Exam Strategy',
      badgeHinglish: '04/04 · Exam Strategy',
      alt: 'Bar chart of 25 UPSC Paper 1 Chapter 1 PYQs by theme alongside 4-step study sequence and micro answer structure',
      caption: 'Breakdown of all 25 Unit 1 PYQs: Emergence (7), Other disciplines (6), Scope (5), Common sense & Mills (4), Industrial society & family (3) alongside a 4-step answer plan.',
      captionHinglish: '25 PYQs ka data breakdown: Emergence (7), Other disciplines (6), Scope (5), Common sense/Mills (4), Industrial family/society (3) + 4-step revision plan.',
    },
  ],
  topics: [topic1Emergence, topic2Scope, topic3CommonSense],
}

export default unit01Notebook
