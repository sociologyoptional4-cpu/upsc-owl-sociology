import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1PopulationSizeGrowth } from './topic-1'
import { topic2ComponentsGrowth } from './topic-2'
import { topic3PopulationPolicy } from './topic-3'
import { topic4EmergingIssues } from './topic-4'

const unitMindMap: MindMapData = {
  title: 'Paper 2 · Unit 24 — Population Dynamics',
  center: 'Population Dynamics in India',
  subtitle: 'Transition & Dividend • Birth, Death & Migration • Population Policy • Emerging Vulnerabilities',
  branches: [
    {
      title: '24.1 Population Size, Growth & Distribution',
      color: 'lavender',
      thinkers: ['Frank Notestein', 'David Bloom', 'Ashish Bose', 'Karl Marx', 'Amartya Sen'],
      points: [
        'Demographic transition: India in late Stage 3 crossing to Stage 4; NFHS-5 replacement TFR 2.0',
        'Youth bulge: 67% in 15–64 age group; dividend vs demographic tax of jobless growth and low FLFPR',
        'Ashish Bose’s BIMARU asymmetry: peninsular replacement vs northern lag; 2026 Delimitation tensions',
        'Sociological critiques of Malthus: Marx’s relative surplus population and Sen’s entitlement approach',
      ],
    },
    {
      title: '24.2 Components of Population Growth',
      color: 'yellow',
      thinkers: ['Kingsley Davis', 'Judith Blake', 'Amitabh Kundu', 'Jan Breman', 'Irawati Karve'],
      points: [
        'Davis & Blake intermediate variables: social structure regulating biological intercourse, conception, gestation',
        'Internal migration (~45.3 cr): Amitabh Kundu on exclusionary cities and circular/seasonal migration',
        'Jan Breman’s "Footloose Labour" and the 2020 lockdown shock: kinship as ultimate social safety net',
        'Gendered mobility: patrilocal village exogamy (Karve) vs emerging autonomous female labour migration',
      ],
    },
    {
      title: '24.3 Population Policy & Family Planning',
      color: 'mint',
      thinkers: ['Pravin Visaria', 'Leela Visaria', 'Alka Basu', 'S.Y. Quraishi', 'M.S. Swaminathan'],
      points: [
        'Policy trajectory: 1952 clinical model -> 1976 Emergency targets -> 1994 Cairo rights -> 2000 NPP TFA',
        'Coercive two-child norm critique: Basu on sex selection & wife desertion; Quraishi on religious myths',
        'Contraceptive gender skew: 37.9% female sterilization vs 0.3% male vasectomy; myths of emasculation',
        'Age of marriage debate (18 to 21): legalism vs structural priorities of female schooling and jobs',
      ],
    },
    {
      title: '24.4 Emerging Population Issues',
      color: 'pink',
      thinkers: ['Amartya Sen', 'Ashish Bose', 'Jean Drèze', 'Sereen Thaddeus', 'Abhay Bang'],
      points: [
        'Greying of India: elderly rising to 20.8% (347m) by 2050; feminization of ageing and destitute widowhood',
        'Sen’s "High-Tech Sexism" & Bose’s DEMARU states: ultrasound misuse in wealthy Green Revolution belts',
        'Maternal & infant mortality: Thaddeus & Maine’s Three Delays model; severe Dalit/Adivasi disparities',
        'Reproductive health precarity: maternal anaemia (>57%), menstrual taboos, and lack of emergency care',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 2 · Unit 24 — Jansankhya Gatishilta',
  center: 'Bharat Mein Jansankhya Gatishilta',
  subtitle: 'Transition & Dividend • Janam, Mrityu & Pravasan • Jansankhya Neeti • Ubharti Chunautiyan',
  branches: [
    {
      title: '24.1 Aakar, Vridhi Aur Vitaran',
      color: 'lavender',
      thinkers: ['Frank Notestein', 'David Bloom', 'Ashish Bose', 'Karl Marx', 'Amartya Sen'],
      points: [
        'Demographic transition: Bharat Stage 3 se Stage 4 ki ore; NFHS-5 replacement TFR 2.0',
        'Yuva shakti: 67% working age mein; demographic dividend banam jobless growth ka demographic bojh',
        'Ashish Bose ke BIMARU rajya: Dakshin Bharat ka vikas banam Uttar ka fasla; 2026 Delimitation vivad',
        'Malthus ki aalochna: Marx ka relative surplus population aur Sen ka entitlement approach',
      ],
    },
    {
      title: '24.2 Jansankhya Vridhi Ke Ghatak',
      color: 'yellow',
      thinkers: ['Kingsley Davis', 'Judith Blake', 'Amitabh Kundu', 'Jan Breman', 'Irawati Karve'],
      points: [
        'Davis aur Blake ke 11 madhyavarti char: samajik sanrachna biology ko intermediate variables se chalati hai',
        'Aantarik pravasan (~45.3 cr): Amitabh Kundu ka circular pravasan aur shahri bahishkar',
        'Jan Breman ka "Footloose Labour" aur 2020 reverse migration: gaon ka rishtedari safety net',
        'Gender pravasan: paramparik village exogamy shadi banam swatantra mahila shramik pravasan',
      ],
    },
    {
      title: '24.3 Jansankhya Neeti Aur Parivar Niyojan',
      color: 'mint',
      thinkers: ['Pravin Visaria', 'Leela Visaria', 'Alka Basu', 'S.Y. Quraishi', 'M.S. Swaminathan'],
      points: [
        'Neeti ka badlav: 1952 clinic -> 1976 Emergency targets -> 1994 Cairo adhikar -> 2000 NPP target-free approach',
        'Do-Bacche ke qanoon ki aalochna: Alka Basu ka bhrun-hatya tarka aur S.Y. Quraishi ka communal myth parda-faash',
        'Nasbandi ka gender asantulan: 37.9% mahila tubectomy banam sirf 0.3% purush vasectomy',
        'Vivah ki umra (18 se 21): kanooni dand banam ladkiyon ki college padhai aur rojgari ki zaroorat',
      ],
    },
    {
      title: '24.4 Ubharti Jansankhyikiya Chunautiyan',
      color: 'pink',
      thinkers: ['Amartya Sen', 'Ashish Bose', 'Jean Drèze', 'Sereen Thaddeus', 'Abhay Bang'],
      points: [
        'Aabadi ka greying: 2050 tak 20.8% (34.7 crore) buzurg; budhape ka mahilakaran aur besahara vidhwaayein',
        'Sen ka "High-Tech Sexism" aur Bose ke DEMARU rajya: Harit Kranti ke ameer ilaako mein ultrasound se bhrun-hatya',
        'Mata-shishu mrityu dar: Thaddeus aur Maine ka Three Delays model; Dalit aur Adivasi varg par asar',
        'Prajanan swasthya: 57% se zyada mahilaon mein anemia, mahawari taboos aur aspatalon mein doctoron ki kami',
      ],
    },
  ],
}

export const unit24Notebook: UnitNotebookSpec = {
  paperCode: 'P2',
  unitSlug: 'population-dynamics',
  overview:
    'A comprehensive, sociologically rigorous bilingual study notebook covering Unit 24 of UPSC Sociology Paper 2: Population Dynamics. Explores India’s position on the Demographic Transition curve, the debate over demographic dividend versus demographic liability, Ashish Bose’s BIMARU asymmetry and federal delimitation tensions, Kingsley Davis and Judith Blake’s intermediate variables of fertility, Amitabh Kundu’s circular labour migration and lessons from the 2020 reverse migration, the evolution of population policy from Emergency coercion to NPP 2000, Alka Basu and S.Y. Quraishi’s critiques of coercive two-child laws, the 37.9% vs 0.3% sterilisation gender skew, Amartya Sen’s "High-Tech Sexism" and DEMARU states, and the Three Delays model of maternal-infant health disparities.',
  overviewHinglish:
    'UPSC Sociology Paper 2 Unit 24 (Bharat Mein Jansankhya Gatishilta) ka sampoorna bilingual study notebook: Demographic Transition curve par Bharat ki sthiti, yuva aabadi ka arthik labh banam demographic bojh (jobless growth), Ashish Bose ke BIMARU rajyon ka kshetrīya fasla aur 2026 Delimitation tanav, Kingsley Davis aur Judith Blake ke 11 madhyavarti char, Amitabh Kundu ka circular shram pravasan aur 2020 lockdown ke samajshastriya sabak, Emergency ke jabran targets se nikal kar NPP 2000 ke prajanan adhikar tak ka safar, Alka Basu aur S.Y. Quraishi dwara Do-Bacche ke qanoon ki aalochna, nasbandi ka patriarchal asantulan (37.9% mahila banam 0.3% purush), Amartya Sen ka "High-Tech Sexism" aur Ashish Bose ke DEMARU rajya, tatha mata-shishu mrityu dar mein The Three Delays model ka gahra samajshastriya vishleshan.',
  studySequence: [
    {
      step: '1. Master Macro-Demographic Transitions & Census Milestones',
      detail:
        'Trace India’s progression from Stage 1 to late Stage 3, analyzing the 1921 Great Divide, the 1951–81 population explosion, the NFHS-5 sub-replacement TFR (2.0), and contrast Malthusian pessimism with Karl Marx’s relative surplus population and Amartya Sen’s entitlement approach.',
    },
    {
      step: '2. Deconstruct the Demographic Dividend vs Tax Debate',
      detail:
        'Examine the window of opportunity offered by 67% working-age adults (median age 28.2) alongside C.P. Chandrasekhar’s critique of jobless growth, low female LFPR (~32.8%), and youth underemployment.',
    },
    {
      step: '3. Analyse Components of Growth & Labour Migration',
      detail:
        'Apply Davis & Blake’s 11 intermediate variables to Indian fertility decline, investigate Amitabh Kundu’s findings on exclusionary cities and circular footloose labour, and examine sociological lessons from the 2020 reverse migration.',
    },
    {
      step: '4. Trace Population Policy Evolution & Gender Asymmetries',
      detail:
        'Understand the paradigm shift from 1976 Emergency vasectomy quotas to the rights-based NPP 2000 (Visaria & Visaria), critique coercive two-child laws using Basu and Quraishi, and interrogate the institutionalized 37.9% female vs 0.3% male sterilisation skew.',
    },
    {
      step: '5. Confront Emerging Vulnerabilities: Ageing, Sex Ratio & Health',
      detail:
        'Examine the feminization of ageing and destitute widowhood (UNFPA 2023), Amartya Sen’s "High-Tech Sexism" and Ashish Bose’s DEMARU states (Punjab/Haryana CSR plunge), and apply the Three Delays model to persistent maternal-infant mortality disparities.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Macro-Demographic Transitions Aur Census Milestones Ko Samjho',
      detail:
        'Bharat ke Stage 1 se late Stage 3 tak ke safar, 1921 ke Great Divide, 1951–81 ke jansankhya visphot, aur NFHS-5 ke 2.0 TFR ko samjhein; Malthus ki nirashawadita banam Karl Marx ke relative surplus population aur Amartya Sen ke entitlement approach ki tulna karein.',
    },
    {
      step: '2. Demographic Dividend Banam Samajik Bojh Ka Vishleshan',
      detail:
        'Kaam karne wale 15–64 saal ke 67% aabadi (ausat umra 28.2) ke arthik mauke ko C.P. Chandrasekhar ke jobless growth, low female LFPR (~32.8%) aur yuvaon mein anomie ke sath jodh kar dekhein.',
    },
    {
      step: '3. Prajanan Ke Niyamak Aur Circular Pravasan Ki Padhai',
      detail:
        'Davis aur Blake ke 11 madhyavarti charon se fertility decline ko samjhein, Amitabh Kundu ke circular shram pravasan aur shahri bahishkar ko dekhein, aur 2020 ke reverse migration se samajshastriya sabak lein.',
    },
    {
      step: '4. Jansankhya Neeti Ka Badlav Aur Gender Asamanata',
      detail:
        'Emergency ke jabran quotas se nikal kar Cairo 1994 aur NPP 2000 tak ka vikas (Visaria & Visaria), Do-Bacche ke qanoon par Basu aur Quraishi ke tarka, tatha nasbandi mein 37.9% mahila banam 0.3% purush ke patriarchal asantulan ko samjhein.',
    },
    {
      step: '5. Ubharti Chunautiyan: Budhapa, Sex Ratio Aur Mata Swasthya',
      detail:
        '2050 tak 20.8% buzurg aabadi aur vidhwa mahilaon ki lachari (UNFPA 2023), Amartya Sen ka "High-Tech Sexism" aur Ashish Bose ke DEMARU rajyon mein bhrun-hatya, tatha The Three Delays model ke zariye mata aur shishu mrityu dar ke jatiya antar ko janein.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p2-u14-01-demographic-transition-policy.webp',
      title: 'Demographic Transition & Policy',
      titleHinglish: 'Demographic Transition & Policy — Quick Visual',
      badge: '01/02 · Visual Map',
      badgeHinglish: '01/02 · Visual Map',
      alt: 'P2 Unit 14 infographic: Demographic Transition & Policy — Population Growth, Dividend & Shift from Targets to NPP 2000',
      caption:
        'Population Growth, Dividend & Shift from Targets to NPP 2000 (Demographic Transition & Policy).',
      captionHinglish:
        'Population Growth, Dividend & Shift from Targets to NPP 2000 — Demographic Transition & Policy ka visual saransh.',
    },
    {
      assetFile: 'p2-u14-02-emerging-population-issues.webp',
      title: 'Sex Ratio, Ageing, Health & Migration',
      titleHinglish: 'Sex Ratio, Ageing, Health & Migration — Quick Visual',
      badge: '02/02 · Visual Map',
      badgeHinglish: '02/02 · Visual Map',
      alt: 'P2 Unit 14 infographic: Sex Ratio, Ageing, Health & Migration — Missing Girls, Ageing Feminization, Health & Migration',
      caption:
        'Missing Girls, Ageing Feminization, Health & Migration (Sex Ratio, Ageing, Health & Migration).',
      captionHinglish:
        'Missing Girls, Ageing Feminization, Health & Migration — Sex Ratio, Ageing, Health & Migration ka visual saransh.',
    },
  ],
  topics: [
    topic1PopulationSizeGrowth,
    topic2ComponentsGrowth,
    topic3PopulationPolicy,
    topic4EmergingIssues,
  ],
}

export default unit24Notebook
