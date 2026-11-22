import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1SociologicalTheoriesOfReligion } from './topic-1'
import { topic2TypesOfReligiousPractices } from './topic-2'
import { topic3ReligionInModernSociety } from './topic-3'

const unitMindMap: MindMapData = {
  title: 'Paper 1 · Unit 8 — Religion and Society',
  center: 'Religion & Society',
  subtitle: 'Classical Theories • Practices, Sects & Cults • Science, Secularisation & Revivalism',
  branches: [
    {
      title: '8.1 Theories of Religion',
      color: 'lavender',
      thinkers: ['Émile Durkheim', 'Karl Marx', 'Max Weber', 'B. Malinowski'],
      points: [
        'Tylor Animism (intellectual soul puzzle) vs Max Müller Naturism (emotional awe)',
        'Durkheim: Sacred vs Profane, Arunta totemism & collective effervescence',
        'Marx: superstructure opiate vs Neo-Marxist Liberation Theology (Bloch, Maduro)',
        'Weber Protestant Ethic -> Capitalism; Feminist critique (Beauvoir, Holm, Walby)',
      ],
    },
    {
      title: '8.2 Practices, Sects & Cults',
      color: 'yellow',
      thinkers: ['Adi Shankara', 'Ernst Troeltsch', 'Roy Wallis', 'Paul Heelas'],
      points: [
        'Monism (Advaita: Aham Brahmasmi) vs Dualism vs Max Müller Henotheism',
        'Cultural & Religious Pluralism: Peter Berger, Salad Bowl & Indian syncretism',
        'Troeltsch & Wallis 2x2 Matrix: Church, Denomination, Sect & Cult (NRM)',
        'Weber Theodicy of Disprivilege, Wilson social change & Heelas Spiritual Supermarket',
      ],
    },
    {
      title: '8.3 Modernity, Science & Revival',
      color: 'mint',
      thinkers: ['Ian Barbour', 'Bryan Wilson', 'M.N. Srinivas', 'José Casanova'],
      points: [
        'Science vs Religion: Parsons non-empirical means, Barbour 4 models & Merton Thesis',
        'Secularisation: Wilson definition, Bruce 3 drivers & Dobbelaere Macro-Meso-Micro',
        'Critiques: Luckmann Invisible Religion, Davie & Indian Secularism (Madan vs Bhargava)',
        'Resacralization & Casanova de-privatization; Fundamentalism (Giddens, Madan, Bruce)',
      ],
    },
    {
      title: 'PYQ Trends (2013–2025)',
      color: 'pink',
      thinkers: ['34 Questions Total', '10 Theories', '12 Practices/Sects', '12 Modern/Secular'],
      points: [
        'Top repeat themes: Sects & Cults (6), Secularisation (6), Pluralism (4), Science (3)',
        'Paper 1 ↔ Paper 2 bridge: Minorities (Sachar/Wirth), Indian Islam (Imtiaz Ahmad)',
        'Always draw Roy Wallis 2x2 Matrix for Sects/Cults and Barbour 4 Models for Science',
        'Ground in Indian realities: ISRO at Tirupati, Kumbh Mela, Deras, Sabarimala & Triple Talaq',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 1 · Unit 8 — Religion and Society',
  center: 'Religion & Society',
  subtitle: 'Classical Theories • Practices, Sects aur Cults • Science, Secularisation aur Revivalism',
  branches: [
    {
      title: '8.1 Theories of Religion',
      color: 'lavender',
      thinkers: ['Émile Durkheim', 'Karl Marx', 'Max Weber', 'B. Malinowski'],
      points: [
        'Tylor Animism (sapne/maut se aatma) vs Max Müller Naturism (kudrat ka darr)',
        'Durkheim: Sacred vs Profane, Arunta totemism aur collective effervescence',
        'Marx: superstructure ki afeem vs Neo-Marxist Liberation Theology (Bloch, Maduro)',
        'Weber Protestant Ethic -> Capitalism; Feminist critique (Beauvoir, Holm, Walby)',
      ],
    },
    {
      title: '8.2 Practices, Sects aur Cults',
      color: 'yellow',
      thinkers: ['Adi Shankara', 'Ernst Troeltsch', 'Roy Wallis', 'Paul Heelas'],
      points: [
        'Monism (Advaita: Aham Brahmasmi) vs Dualism vs Max Müller Henotheism',
        'Cultural & Religious Pluralism: Peter Berger, Salad Bowl aur Ganga-Jamuni Tehzeeb',
        'Troeltsch & Wallis 2x2 Matrix: Church, Denomination, Sect aur Cult (NRM)',
        'Weber Theodicy of Disprivilege, Wilson social change aur Heelas Spiritual Supermarket',
      ],
    },
    {
      title: '8.3 Modernity, Science aur Revival',
      color: 'mint',
      thinkers: ['Ian Barbour', 'Bryan Wilson', 'M.N. Srinivas', 'José Casanova'],
      points: [
        'Science vs Religion: Parsons non-empirical means, Barbour 4 models & Merton Thesis',
        'Secularisation: Wilson definition, Bruce 3 drivers & Dobbelaere Macro-Meso-Micro',
        'Critiques: Luckmann Invisible Religion, Davie & Indian Secularism (Madan vs Bhargava)',
        'Resacralization & Casanova de-privatization; Fundamentalism (Giddens, Madan, Bruce)',
      ],
    },
    {
      title: 'PYQ Trends (2013–2025)',
      color: 'pink',
      thinkers: ['34 Total Sawaal', '10 Theories', '12 Practices/Sects', '12 Modern/Secular'],
      points: [
        'Sabse zyada repeat: Sects & Cults (6), Secularisation (6), Pluralism (4), Science (3)',
        'Paper 1 ↔ Paper 2 bridge: Minorities (Sachar/Wirth), Indian Islam (Imtiaz Ahmad)',
        'Sects/Cults mein Roy Wallis 2x2 Matrix aur Science mein Barbour 4 Models banao',
        'Indian examples lagao: ISRO Tirupati, Kumbh Mela, Deras, Sabarimala aur Triple Talaq',
      ],
    },
  ],
}

export const unit08Notebook: UnitNotebookSpec = {
  paperCode: 'P1',
  unitSlug: 'religion-and-society',
  overview:
    'Unit 8 bridges classical sociological theory with contemporary Indian and global religious dynamics. You will explore how Tylor, Müller, Durkheim, Malinowski, Marx, Weber, and feminist scholars theorise religion; how beliefs and organisations diversify from animism and monism into churches, sects, cults, and cultural pluralism; and why late modernity combines scientific rationalisation and multi-level secularisation with powerful religious revivalism and fundamentalism.',
  overviewHinglish:
    'Unit 8 classical sociological theories ko aaj ke Bharatiya aur global dharmik badlaav se jodta hai. Yahan aap samjhenge ki Tylor, Müller, Durkheim, Malinowski, Marx, Weber aur feminist scholars dharm ko kaise dekhte hain; animism aur monism se lekar church, sect, cult aur cultural pluralism kaise kaam karte hain; aur modern science va secularisation ke beech religious revivalism aur fundamentalism kyun badh rahe hain.',
  studySequence: [
    {
      step: '1. Master the Classical & Feminist Triad',
      detail: 'Compare Tylor vs Max Müller on origins, then master the 4-axis matrix across Durkheim (Sacred/Profane), Marx/Maduro (Opiate vs Liberation), Weber (Protestant Ethic), and Feminist critiques.',
    },
    {
      step: '2. Map Beliefs & Roy Wallis’s 2×2 Matrix',
      detail: 'Distinguish Monism (Advaita) from Monotheism and Henotheism, study Cultural Pluralism in India, and memorise Roy Wallis’s Church-Denomination-Sect-Cult matrix alongside NRM growth factors.',
    },
    {
      step: '3. Decode Science, Secularisation & Revivalism',
      detail: 'Combine Ian Barbour’s 4 Science-Religion models and the Merton Thesis with Karel Dobbelaere’s Macro-Meso-Micro secularisation, Casanova’s public revivalism, and Bruce/Giddens on fundamentalism.',
    },
    {
      step: '4. Practise All 34 PYQs (Paper 1 ↔ Paper 2)',
      detail: 'Solve all 34 PYQs (2013–2025), integrating Paper 2 overlap topics on Indian religious minorities (Sachar/Wirth), lived Indian Islam (Imtiaz Ahmad), Triple Talaq, and Indian secularism (Madan vs Bhargava).',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Classical aur Feminist Theories Pakki Karo',
      detail: 'Tylor vs Max Müller ke origin debate se shuru karke Durkheim (Sacred/Profane), Marx/Maduro (Afeem vs Kranti), Weber (Protestant Ethic) aur Feminist critique ka comparative chart yaad karo.',
    },
    {
      step: '2. Monism, Pluralism aur Wallis 2×2 Matrix Samjho',
      detail: 'Monism (Advaita) aur Monotheism/Henotheism ka farak saaf karo, Bharat ka Cultural Pluralism padho, aur Church-Denomination-Sect-Cult par Roy Wallis ka 2x2 matrix aur NRM factors revise karo.',
    },
    {
      step: '3. Science, Secularisation aur Revivalism Jodo',
      detail: 'Ian Barbour ke 4 Science-Religion models aur Merton Thesis ke saath Dobbelaere ke Macro-Meso-Micro secularisation levels, Casanova ka revivalism aur Bruce/Giddens ki fundamentalism theory jodo.',
    },
    {
      step: '4. Sabhi 34 PYQs Practice Karo (Paper 1 ↔ Paper 2)',
      detail: '2013–2025 ke sabhi 34 PYQs solve karo, jisme Paper 2 overlap wale Indian minorities (Sachar/Wirth), Indian Islam (Imtiaz Ahmad), Triple Talaq aur Indian secularism (Madan vs Bhargava) shamil hain.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p1-u08-01-religion-theories-types.webp',
      title: 'Theories & Types of Religion',
      titleHinglish: 'Theories & Types of Religion — Quick Visual',
      badge: '01/02 · Visual Map',
      badgeHinglish: '01/02 · Visual Map',
      alt: 'P1 Unit 8 infographic: Theories & Types of Religion — Classical Sociology of Religion & Organizational Types',
      caption: 'Classical Sociology of Religion & Organizational Types (Theories & Types of Religion).',
      captionHinglish: 'Classical Sociology of Religion & Organizational Types — Theories & Types of Religion ka visual saransh.',
    },
    {
      assetFile: 'p1-u08-02-religion-modern-science.webp',
      title: 'Religion, Science & Secularisation',
      titleHinglish: 'Religion, Science & Secularisation — Quick Visual',
      badge: '02/02 · Visual Map',
      badgeHinglish: '02/02 · Visual Map',
      alt: 'P1 Unit 8 infographic: Religion, Science & Secularisation — Science, Secularization & Resacralization in Modernity',
      caption: 'Science, Secularization & Resacralization in Modernity (Religion, Science & Secularisation).',
      captionHinglish: 'Science, Secularization & Resacralization in Modernity — Religion, Science & Secularisation ka visual saransh.',
    },
  ],
  topics: [
    topic1SociologicalTheoriesOfReligion,
    topic2TypesOfReligiousPractices,
    topic3ReligionInModernSociety,
  ],
}

export default unit08Notebook