import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1DevelopmentPlanning } from './topic-1'
import { topic2ConstitutionLaw } from './topic-2'
import { topic3EducationSocialChange } from './topic-3'

const unitMindMap: MindMapData = {
  title: 'Paper 2 · Unit 19 — Visions of Social Change in India',
  center: 'Visions of Social Change',
  subtitle: 'Planning & Economy • Constitution & Law • Education & Equality',
  branches: [
    {
      title: '19.1 Development Planning & Mixed Economy',
      color: 'lavender',
      thinkers: ['Jawaharlal Nehru', 'Mahatma Gandhi', 'A.R. Desai', 'Pranab Bardhan'],
      points: [
        'Nehruvian model: commanding heights, Mahalanobis heavy industry, Five-Year Plans',
        'Gandhian Gram Swaraj: village republics, cottage crafts, charkha, trusteeship',
        'A.R. Desai: state-directed capitalist planning serving bourgeois accumulation',
        '1991 LPG reforms & NITI Aayog (2015): rise of new middle class & competitive federalism',
      ],
    },
    {
      title: '19.2 Constitution, Law & Social Change',
      color: 'yellow',
      thinkers: ['Granville Austin', 'B.R. Ambedkar', 'Marc Galanter', 'Flavia Agnes'],
      points: [
        'Transformative constitutionalism: Constitution as an instrument of social revolution',
        'Ambedkar’s contradiction: formal political equality vs lived socioeconomic inequality',
        'Marc Galanter: legal illiteracy, 5+ crore case backlog, repeat players vs one-shotters',
        'UCC debate: gender justice across personal laws vs minority cultural autonomy',
      ],
    },
    {
      title: '19.3 Education & Social Change',
      color: 'mint',
      thinkers: ['B.R. Ambedkar', 'Pierre Bourdieu', 'Krishna Kumar', 'Ajantha Subramanian'],
      points: [
        'Ambedkarite emancipatory ladder: "Educate, Agitate, Organise" for subaltern mobility',
        'Cultural reproduction (Bourdieu): habitus, symbolic violence, and class filtering',
        'Ajantha Subramanian: conversion of upper-caste privilege into "casteless merit"',
        'RTE Act 2009 & NEP 2020: foundational learning crisis (ASER) and digital divide',
      ],
    },
    {
      title: 'PYQ Trends (2014–2025)',
      color: 'pink',
      thinkers: ['12 Questions Solved', 'Planning (4)', 'Constitution & Law (4)', 'Education (4)'],
      points: [
        'Core repeat themes: NITI Aayog vs Planning Commission, Gandhi vs Nehru, Limits of Law',
        'Always evaluate formal legal/policy provisions against empirical subaltern realities',
        'Rich Indian examples: Bhilai/Bhakra dams, Akshaya Tritiya marriages, Kota coaching hubs',
        'Structured answers: Concept & thinkers -> Structural reality -> Subaltern impact -> Way forward',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 2 · Unit 19 — Visions of Social Change in India',
  center: 'Visions of Social Change',
  subtitle: 'Planning & Economy • Constitution & Law • Education & Equality',
  branches: [
    {
      title: '19.1 Development Planning aur Mixed Economy',
      color: 'lavender',
      thinkers: ['Jawaharlal Nehru', 'Mahatma Gandhi', 'A.R. Desai', 'Pranab Bardhan'],
      points: [
        'Nehruvian model: commanding heights, Mahalanobis heavy industry, Five-Year Plans',
        'Gandhian Gram Swaraj: aatmanirbhar gaon, charkha, kutir udyog aur moral economy',
        'A.R. Desai: state-directed capitalist planning jo corporate hiton ko saadh rahi thi',
        '1991 LPG badlaav aur NITI Aayog (2015): new middle class aur competitive federalism',
      ],
    },
    {
      title: '19.2 Samvidhan, Kanoon aur Samajik Badlaav',
      color: 'yellow',
      thinkers: ['Granville Austin', 'B.R. Ambedkar', 'Marc Galanter', 'Flavia Agnes'],
      points: [
        'Transformative constitutionalism: samvidhan samajik kranti ka mukhya dastawez',
        'Ambedkar ki chetavni: rajneeti mein barabari par samajik-aarthik jeewan mein na-barabari',
        'Marc Galanter: kanooni anpadhta, 5+ crore pending cases, repeat players vs one-shotters',
        'UCC behas: personal laws mein gender justice banam minority cultural autonomy',
      ],
    },
    {
      title: '19.3 Shiksha aur Samajik Badlaav',
      color: 'mint',
      thinkers: ['B.R. Ambedkar', 'Pierre Bourdieu', 'Krishna Kumar', 'Ajantha Subramanian'],
      points: [
        'Ambedkarite vishwas: "Shikshit bano, Sangharsh karo, Sangathit raho" se upward mobility',
        'Cultural reproduction (Bourdieu): habitus, symbolic violence aur class privilege',
        'Ajantha Subramanian: upper-caste privilege ka "casteless merit" mein badal jana',
        'RTE Act 2009 aur NEP 2020: foundational learning crisis (ASER) aur digital divide',
      ],
    },
    {
      title: 'PYQ Trends (2014–2025)',
      color: 'pink',
      thinkers: ['12 PYQs Solved', 'Planning (4)', 'Constitution & Law (4)', 'Education (4)'],
      points: [
        'Top repeat themes: NITI Aayog banam Yojana Aayog, Gandhi vs Nehru, Kanoon ki Seemayein',
        'Kanooni aur sarkari schemes ko hamesha zameeni samajik sachayi se compare karo',
        'Zameeni Indian examples: Bhilai/Bhakra baandh, Akshaya Tritiya vivah, Kota coaching hubs',
        'Answer structure: Concept & Thinker -> Zameeni Sachayi -> Subaltern Parinam -> Way forward',
      ],
    },
  ],
}

export const unit19Notebook: UnitNotebookSpec = {
  paperCode: 'P2',
  unitSlug: 'visions-of-social-change-in-india',
  overview:
    'Unit 19 explores the institutional, constitutional, and educational blueprints crafted to transform post-colonial Indian society. It examines the ideological contest between Nehruvian mixed-economy industrialisation and Gandhian Gram Swaraj, the structural shift to NITI Aayog, Marc Galanter’s critique of the limits of legal social engineering, the transformative yet uneven impact of constitutional provisions on SCs and STs, the Uniform Civil Code debate, and how stratified schooling and coaching culture mediate between democratic social mobility and intergenerational cultural reproduction.',
  overviewHinglish:
    'Unit 19 azaad Bharat mein samajik badlaav ke teeno mukhya blueprints ka gahan samajshastriya vishleshan karti hai: Nehruvian mixed economy aur Five-Year Plans banam Gandhian Gram Swaraj, 1991 LPG reforms aur NITI Aayog ka uday, Samvidhan aur kanoon ke zariye social engineering aur uski seemayein (Marc Galanter), SCs aur STs par reservation ka asar aur dominant castes ka backlash, Uniform Civil Code (UCC) ki behas, aur shiksha ka upward mobility banam cultural reproduction (Bourdieu, Ajantha Subramanian) ka dwandva.',
  studySequence: [
    {
      step: '1. Master Competing Visions of Planning',
      detail:
        'Contrast Nehru’s state-led heavy industrialisation and Mahalanobis model with Gandhi’s Gram Swaraj and village self-sufficiency. Deepen with A.R. Desai’s State Capitalism critique, the 1991 LPG turn, and the shift to NITI Aayog.',
    },
    {
      step: '2. Deconstruct the Limits of Legal Social Engineering',
      detail:
        'Analyze Granville Austin’s social document thesis and Ambedkar’s constitutional morality alongside Marc Galanter’s insights on legal illiteracy, judicial backlog, and repeat players vs one-shotters.',
    },
    {
      step: '3. Evaluate Subaltern Impacts and the UCC Debate',
      detail:
        'Examine the affirmative action gains and dominant caste backlash for SCs/STs, and dissect the Uniform Civil Code debate balancing gender justice with cultural autonomy using Flavia Agnes and Nivedita Menon.',
    },
    {
      step: '4. Critique Education: Mobility vs Cultural Reproduction',
      detail:
        'Interrogate whether schooling is an equalizing panacea or reproducer of inequality. Apply Bourdieu’s cultural capital, Krishna Kumar’s textbook culture, Ajantha Subramanian’s caste of merit, RTE Act 2009, and NEP 2020.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Planning Ke Nazariye Samjho',
      detail:
        'Nehru ke state-led heavy industrial model aur Mahalanobis plan ko Gandhi ji ke Gram Swaraj aur kutir udyog se compare karo. A.R. Desai ke State Capitalism, 1991 LPG reforms aur NITI Aayog ke badlaav ko pakka karo.',
    },
    {
      step: '2. Kanoon Ki Zameeni Seemayein Samjho',
      detail:
        'Granville Austin ke "social document" aur Ambedkar ke vicharon ke sath Marc Galanter ke legal illiteracy, 5+ crore adalat backlog aur repeat players vs one-shotters ke concept ko yaad karo.',
    },
    {
      step: '3. SC/ST Badlaav Aur UCC Behas Ko Analyse Karo',
      detail:
        'Reservation se bane Dalit middle class aur dominant caste ke backlash ko dekho, aur Flavia Agnes ke zariye Uniform Civil Code mein gender justice aur minority autonomy ke takraav ko samjho.',
    },
    {
      step: '4. Shiksha: Mobility Banam Reproduction Master Karo',
      detail:
        'Shiksha barabari ki seedhi hai ya asamaanata badhane wali machine? Pierre Bourdieu ka cultural capital, Krishna Kumar ka textbook culture, Ajantha Subramanian ka caste of merit, RTE 2009 aur NEP 2020 revise karo.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p2-u09-01-planning-constitution-law.webp',
      title: 'Planning, Constitution & Law',
      titleHinglish: 'Planning, Constitution & Law — Quick Visual',
      badge: '01/02 · Visual Map',
      badgeHinglish: '01/02 · Visual Map',
      alt: 'P2 Unit 9 infographic: Planning, Constitution & Law — State-Led Planning, Liberalization & Legal Social Engineering',
      caption:
        'State-Led Planning, Liberalization & Legal Social Engineering (Planning, Constitution & Law).',
      captionHinglish:
        'State-Led Planning, Liberalization & Legal Social Engineering — Planning, Constitution & Law ka visual saransh.',
    },
    {
      assetFile: 'p2-u09-02-education-equality-india.webp',
      title: 'Education & Social Change in India',
      titleHinglish: 'Education & Social Change in India — Quick Visual',
      badge: '02/02 · Visual Map',
      badgeHinglish: '02/02 · Visual Map',
      alt: 'P2 Unit 9 infographic: Education & Social Change in India — Gurukul to NEP 2020: Mobility vs Cultural Reproduction',
      caption:
        'Gurukul to NEP 2020: Mobility vs Cultural Reproduction (Education & Social Change in India).',
      captionHinglish:
        'Gurukul to NEP 2020: Mobility vs Cultural Reproduction — Education & Social Change in India ka visual saransh.',
    },
  ],
  topics: [
    topic1DevelopmentPlanning,
    topic2ConstitutionLaw,
    topic3EducationSocialChange,
  ],
}

export default unit19Notebook
