import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1SocialBackground } from './topic-1'
import { topic2ModernizationTradition } from './topic-2'
import { topic3ProtestsMovements } from './topic-3'
import { topic4SocialReforms } from './topic-4'

const unitMindMap: MindMapData = {
  title: 'Paper 2 · Unit 2 — Impact of Colonial Rule on Indian Society',
  center: 'Impact of Colonial Rule',
  subtitle: 'Nationalism Genesis • Tradition-Modernity Synthesis • Subaltern Insurgency • Social Reforms',
  branches: [
    {
      title: '1. Social Background of Nationalism',
      color: 'lavender',
      thinkers: ['A.R. Desai', 'Benedict Anderson', 'Bernard Cohn', 'B.R. Ambedkar'],
      points: [
        'Railways, post, telegraph, and English education unified fragmented regions',
        'Desai’s 5 phases: from narrow intelligentsia to mass peasant-working class movement',
        'Colonial state constructed backward traditionalism via 1901 census (Risley)',
        'Subaltern domain (Guha) and Dalit assertion (Ambedkar) challenged elite hegemony',
      ],
    },
    {
      title: '2. Modernization of Indian Tradition',
      color: 'yellow',
      thinkers: ['Yogendra Singh', 'M.N. Srinivas', 'Milton Singer', 'Lloyd & Susanne Rudolph'],
      points: [
        'Integrated paradigm: Cultural vs Structural axes, Orthogenetic vs Heterogenetic sources',
        'Tradition and modernity are not antithetical; tradition adapts and modernizes',
        'Westernization (Srinivas: colonial culture) vs Modernization (Singh: universal equality)',
        'Adaptive mechanisms: Compartmentalization (Singer) and caste politicization (Rudolph)',
      ],
    },
    {
      title: '3. Protests & Movements (Colonial Period)',
      color: 'mint',
      thinkers: ['Ranajit Guha', 'Birsa Munda', 'Jacques Pouchepadass', 'Karl Marx'],
      points: [
        'Colonial land revenue (Zamindari/Ryotwari) and Forest Acts triggered agrarian crisis',
        'Millenarian Adivasi uprisings: Santhal Hul (1855) and Birsa Munda’s Ulgulan (1899)',
        'Champaran (1917): Middle-peasant grievance mediated by Gandhian satyagraha',
        'Guha’s Subaltern paradigm: Negation, ambiguity, modality, and territorial solidarity',
      ],
    },
    {
      title: '4. Socio-Religious Reforms',
      color: 'pink',
      thinkers: ['Jyotirao Phule', 'Raja Rammohan Roy', 'Sri Narayana Guru', 'Begum Rokeya'],
      points: [
        'Upper-caste liberal reformism (Brahmo, Arya) relied on shastric purification',
        'Anti-caste radicalism (Satyashodhak, SNDP) fought for structural annihilation of caste',
        'Phule’s holistic paradigm: Anti-Brahminism, peasant irrigation rights, and girls’ schools',
        'Cross-community female education: Hindu (Vidyasagar), Muslim (Rokeya), Sikh (Singh Sabha)',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 2 · Unit 2 — Bhartiya Samaj par Colonial Shasan ka Asar',
  center: 'Impact of Colonial Rule',
  subtitle: 'Rashtravad ki Utpatti • Parampara-Modernity Mel • Kisan Vidroh • Samaj Sudhar',
  branches: [
    {
      title: '1. Rashtravad ka Samajik Prishthabhoomi',
      color: 'lavender',
      thinkers: ['A.R. Desai', 'Benedict Anderson', 'Bernard Cohn', 'B.R. Ambedkar'],
      points: [
        'Rail, telegraph aur akhbaron ne alag-alag pranton ko ek rashtra mein joda',
        'Desai ke 5 phases: chhotey intelligentsia se lekar Gandhian mass movement tak',
        'Colonial census (Risley 1901) ne jatiyon ko rank dekar hierarchy ko sakht banaya',
        'Guha ka subaltern daayra aur Ambedkar ki Dalit chetna ne elite dabdabe ko lalkara',
      ],
    },
    {
      title: '2. Bhartiya Parampara ka Modernization',
      color: 'yellow',
      thinkers: ['Yogendra Singh', 'M.N. Srinivas', 'Milton Singer', 'Lloyd & Susanne Rudolph'],
      points: [
        'Singh ka integrated model: Cultural vs Structural, Orthogenetic vs Heterogenetic',
        'Parampara aur modernity dushman nahi hain; parampara adapt hoti hai',
        'Westernization (Srinivas: lifestyle) vs Modernization (Singh: universal barabari)',
        'Adaptation: Singer ka compartmentalization aur Rudolph ka caste vote-bank',
      ],
    },
    {
      title: '3. Colonial Daur ke Vidroh aur Andolan',
      color: 'mint',
      thinkers: ['Ranajit Guha', 'Birsa Munda', 'Jacques Pouchepadass', 'Karl Marx'],
      points: [
        'British lagan kanoon aur Forest Acts ne karz, be-zameeni aur begaari badhayi',
        'Millenarian vidroh: Santhal Hul (1855) aur Birsa Munda ka Ulgulan (1899)',
        'Champaran (1917): Middle kisanon ke gusse aur Gandhi ji ki madhyasthata ka mel',
        'Guha ka Subaltern model: Negation, ambiguity, modality aur biradari ki ekta',
      ],
    },
    {
      title: '4. Samajik Sudhar Andolan',
      color: 'pink',
      thinkers: ['Jyotirao Phule', 'Raja Rammohan Roy', 'Sri Narayana Guru', 'Begum Rokeya'],
      points: [
        'Upper-caste liberal dhara (Brahmo, Arya) ne shastron ka sahara lekar sudhar kiya',
        'Anti-caste radical dhara (Satyashodhak, SNDP) ne jati vyavastha ko todne ki maang ki',
        'Phule ka complete model: Jati-ant, kisanon ke liye baandh-nehrein aur mahila shiksha',
        'Har dharam mein shiksha: Vidyasagar (Hindu), Begum Rokeya (Muslim), Singh Sabha (Sikh)',
      ],
    },
  ],
}

export const unit12Notebook: UnitNotebookSpec = {
  paperCode: 'P2',
  unitSlug: 'impact-of-colonial-rule',
  overview:
    'Unit 2 examines the profound structural and cultural transformations wrought by British colonial rule on Indian society. It explores how colonial infrastructure and capitalist transformation laid the social background for Indian nationalism; how ancient Indian traditions negotiated and synthesized with modernity through orthogenetic and heterogenetic sources (Yogendra Singh); how dispossessed peasants and Adivasis mounted autonomous millenarian and radical uprisings (Ranajit Guha); and how nineteenth-century socio-religious reforms divided into upper-caste liberal textualism and radical anti-caste grassroots struggles across diverse religious communities.',
  overviewHinglish:
    'Unit 2 yeh vishleshan karta hai ki British colonial raj ne bhartiya samaj ke dhanchhe aur sanskriti ko kaise badla. Yeh unit samjhati hai ki rail, press aur capitalist vargon ne Indian nationalism ki zameen kaise tayyar ki (A.R. Desai); Yogendra Singh ke model se parampara aur modernity ka aapsi adaptation kaise hua; shoshit kisanon aur adivasiyon ne millenarian aur subaltern vidroh kaise lade (Ranajit Guha); aur unneesween sadi ke samajik sudhar kaise upper-caste shastriya sudharvad aur radical Dalit-Shudra jati-virodhi andolan mein bat gaye.',
  studySequence: [
    {
      step: '1. Master Desai’s 5 Phases of Nationalism',
      detail:
        'Trace the historical materialist emergence of new classes (bourgeoisie, intelligentsia, peasantry) and contrast with the colonial construction of traditionalism (Dirks, Cohn).',
    },
    {
      step: '2. Decode Yogendra Singh’s Tradition-Modernity Matrix',
      detail:
        'Map out the 2x2 paradigm (Cultural vs Structural, Orthogenetic vs Heterogenetic) and clarify the distinction between Srinivas’s Westernization and Singh’s Modernization.',
    },
    {
      step: '3. Analyze Colonial Peasant & Tribal Insurgencies',
      detail:
        'Examine agrarian dislocation, millenarian revolts (Santhal Hul, Birsa Munda), Pouchepadass’s Champaran class dynamics, and Guha’s elementary aspects of subaltern insurgency.',
    },
    {
      step: '4. Contrast Liberal vs Radical Social Reforms',
      detail:
        'Juxtapose upper-caste shastric liberalism (Brahmo, Arya) with radical anti-caste movements (Phule’s Satyashodhak, SNDP Yogam), tracing cross-community women’s education across Hindu, Muslim, and Sikh initiatives.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Desai ke 5 Phases ko Pakka Karo',
      detail:
        'Colonial capitalism se ubhre naye vargon (bourgeoisie, intelligentsia, kisan) aur colonial raj dwara banaye gaye traditionalism (Dirks, Cohn) ko historical materialism se samjho.',
    },
    {
      step: '2. Yogendra Singh ka 2x2 Matrix Yaad Karo',
      detail:
        'Cultural vs Structural aur Orthogenetic vs Heterogenetic axes ko draw karo, aur Srinivas ke Westernization aur Singh ke Modernization ke antar ko saaf karo.',
    },
    {
      step: '3. Kisan aur Adivasi Vidrohon ka Samaj-shastra Dekho',
      detail:
        'Forest Acts aur lagan se paida hue sankat, Birsa Munda ke millenarian andolan, Champaran ke class dynamics (Pouchepadass), aur Guha ke subaltern codes ko revise karo.',
    },
    {
      step: '4. Liberal aur Radical Sudharon ki Tulna Karo',
      detail:
        'Brahmo Samaj ke shastriya sudhar ko Phule ke Satyashodhak aur Sri Narayana Guru ke SNDP se compare karo, aur sabhi dharamon (Hindu, Muslim, Sikh) mein mahila shiksha ke prayas dekho.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p2-u02-01-colonial-modernization-chain.webp',
      title: 'Colonialism & Indian Modernization',
      titleHinglish: 'Colonialism & Indian Modernization — Quick Visual',
      badge: '01/02 · Visual Map',
      badgeHinglish: '01/02 · Visual Map',
      alt: 'P2 Unit 2 infographic: Colonialism & Indian Modernization — Colonial Impact & Yogendra Singh Tradition-Modernity',
      caption: 'Colonial Impact & Yogendra Singh Tradition-Modernity (Colonialism & Indian Modernization).',
      captionHinglish: 'Colonial Impact & Yogendra Singh Tradition-Modernity — Colonialism & Indian Modernization ka visual saransh.',
    },
    {
      assetFile: 'p2-u02-02-reform-protest-timeline.webp',
      title: 'Colonial Reforms & Protest Movements',
      titleHinglish: 'Colonial Reforms & Protest Movements — Quick Visual',
      badge: '02/02 · Visual Map',
      badgeHinglish: '02/02 · Visual Map',
      alt: 'P2 Unit 2 infographic: Colonial Reforms & Protest Movements — Socio-Religious Reforms & Anti-Colonial Peasant Resistance',
      caption: 'Socio-Religious Reforms & Anti-Colonial Peasant Resistance (Colonial Reforms & Protest Movements).',
      captionHinglish: 'Socio-Religious Reforms & Anti-Colonial Peasant Resistance — Colonial Reforms & Protest Movements ka visual saransh.',
    },
  ],
  topics: [topic1SocialBackground, topic2ModernizationTradition, topic3ProtestsMovements, topic4SocialReforms],
}

export default unit12Notebook
