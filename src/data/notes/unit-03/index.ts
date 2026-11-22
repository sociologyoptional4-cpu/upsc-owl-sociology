import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1Methods } from './topic-1-methods'
import { topic2Techniques } from './topic-2-techniques'
import { topic3Design } from './topic-3-design'

const unitMindMap: MindMapData = {
  title: 'Paper 1 · Unit 3 — Research Methods and Analysis',
  center: 'Research Methods & Analysis',
  subtitle: 'Quant vs Qual • Fieldwork Toolkit • Variables, Sampling & Rigour',
  branches: [
    {
      title: '3.1 Quant, Qual & Pluralism',
      color: 'lavender',
      thinkers: ['Émile Durkheim', 'Max Weber', 'Ann Oakley', 'Alan Bryman'],
      points: [
        'Epistemologies: Positivism, Interpretivism, Critical Feminism & Popper-Kuhn',
        'Quantitative scale (Census, NFHS, experiments) vs Mills abstracted empiricism',
        'Qualitative depth (Verstehen, Grounded Theory) vs Hindess relativism',
        'Alan Bryman & Norman Denzin triangulation bridges numbers and meanings',
      ],
    },
    {
      title: '3.2 Data Collection Toolkit',
      color: 'yellow',
      thinkers: ['M.N. Srinivas', 'W.F. Whyte', 'Sarah Pink', 'Maria Mies'],
      points: [
        'Questionnaires (Likert, Bogardus) & structured vs unstructured interviews',
        'Participant observation ethics: Hawthorne effect, Whyte, Laud Humphreys',
        'Village ethnography (Rampura, Sripuram) & Digital/visual ethnography',
        'FGD moderation fairness, Census hurdles, Case studies & Biographies',
      ],
    },
    {
      title: '3.3 Design & Rigour Pillars',
      color: 'mint',
      thinkers: ['Robert Dubin', 'Karl Popper', 'B.R. Ambedkar', 'P.V. Young'],
      points: [
        'Operationalising concepts into IV, DV, intervening & control variables',
        'Falsifiable hypotheses (H1 vs H0) vs open Grounded Theory inquiry',
        'Probability (SRS, Stratified, Cluster) vs Non-probability (Snowball, Quota)',
        'Reliability (T-P-I-S tests) & Validity bullseye for Indian inequality studies',
      ],
    },
    {
      title: 'PYQ Trends (2013–2025)',
      color: 'pink',
      thinkers: ['28 Questions Total', '9 Methods', '8 Techniques', '11 Design & Rigour'],
      points: [
        'Hot repeat zones: Reliability & Hypothesis (2025, 2022, 2020, 2016)',
        'Applied ethics rising: Digital ethnography (2024), Participant ethics (2023)',
        'Ground every answer in Indian realities: NFHS, Census, Swiggy, Rampura',
        'Micro answer formula: Define → Thinkers → Indian Example → Balanced End',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 1 · Unit 3 — Research Methods and Analysis',
  center: 'Research Methods & Analysis',
  subtitle: 'Quant vs Qual • Fieldwork Toolkit • Variables, Sampling & Rigour',
  branches: [
    {
      title: '3.1 Quant, Qual & Pluralism',
      color: 'lavender',
      thinkers: ['Émile Durkheim', 'Max Weber', 'Ann Oakley', 'Alan Bryman'],
      points: [
        'Epistemologies: Positivism, Interpretivism, Feminism & Popper-Kuhn',
        'Quantitative scale (Census, NFHS, experiments) vs Mills critique',
        'Qualitative depth (Verstehen, Grounded Theory) vs Hindess critique',
        'Alan Bryman & Norman Denzin triangulation numbers aur stories jodta hai',
      ],
    },
    {
      title: '3.2 Data Collection Toolkit',
      color: 'yellow',
      thinkers: ['M.N. Srinivas', 'W.F. Whyte', 'Sarah Pink', 'Maria Mies'],
      points: [
        'Questionnaires (Likert, Bogardus) & structured vs unstructured interviews',
        'Participant observation ethics: Hawthorne effect, Whyte, Laud Humphreys',
        'Gaon ethnography (Rampura, Sripuram) & Digital/visual ethnography',
        'FGD moderation checks, Census hurdles, Case studies & Biographies',
      ],
    },
    {
      title: '3.3 Design & Rigour Pillars',
      color: 'mint',
      thinkers: ['Robert Dubin', 'Karl Popper', 'B.R. Ambedkar', 'P.V. Young'],
      points: [
        'Concepts ko IV, DV, intervening & control variables mein operationalise karo',
        'Testable hypotheses (H1 vs H0) vs bina-bias Grounded Theory',
        'Probability (SRS, Stratified, Cluster) vs Non-probability (Snowball, Quota)',
        'Reliability (T-P-I-S tests) & Validity bullseye Indian inequality research ke liye',
      ],
    },
    {
      title: 'PYQ Trends (2013–2025)',
      color: 'pink',
      thinkers: ['28 Total Sawaal', '9 Methods', '8 Techniques', '11 Design & Rigour'],
      points: [
        'Sabse zyada repeat: Reliability & Hypothesis (2025, 2022, 2020, 2016)',
        'Naya focus: Digital ethnography (2024), Participant ethics (2023), FGD (2022)',
        'Roz ke Indian examples lagao: NFHS, Census, Swiggy riders, Rampura gaon',
        'Answer formula: Define → Thinkers → Indian Example → Balanced End',
      ],
    },
  ],
}

export const unit03Notebook: UnitNotebookSpec = {
  paperCode: 'P1',
  unitSlug: 'research-methods',
  overview:
    'Unit 3 turns sociological theory into practical research craft. Across three chapters, you master how quantitative surveys and qualitative ethnographies complement each other through triangulation, how every field tool—from Census schedules to digital reels and FGDs—carries distinct ethics and biases, and how sharp variables, hypotheses, sampling frames, and reliability-validity checks safeguard empirical truth.',
  overviewHinglish:
    'Unit 3 sociological theory ko zameeni research craft mein badalta hai. Teen chapters mein aap seekhte hain ki quantitative surveys aur qualitative ethnography triangulation se kaise ek doosre ko mazboot karte hain, Census se lekar digital reels aur FGDs tak har tool ke kya ethics-bias hain, aur sahi variables, hypothesis, sampling wa reliability-validity sachai ko kaise bachate hain.',
  studySequence: [
    {
      step: '1. Map Epistemologies & Pluralism',
      detail: 'Contrast Positivist quantification with Interpretivist Verstehen and Feminist dialogue, then master Bryman and Denzin’s triangulation bridge.',
    },
    {
      step: '2. Master the Fieldwork Toolkit',
      detail: 'Compare questionnaires, scales (Likert, Bogardus), interviews, FGDs, surveys, Census, biographies, participant ethics, and digital ethnography.',
    },
    {
      step: '3. Nail Variables, Hypothesis & Sampling',
      detail: 'Practise turning concepts like poverty or inequality into IV/DV/intervening variables, testable H1/H0 hypotheses, and probability vs non-probability samples.',
    },
    {
      step: '4. Hit the Reliability–Validity Bullseye & 28 PYQs',
      detail: 'Memorise T-P-I-S reliability tests and inequality-research fixes, then drill all 28 PYQs (2013–2025) with crisp Indian fieldwork examples.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Epistemology aur Triangulation Samjho',
      detail: 'Positivism, Interpretivism aur Feminist approach ka farak dekho, aur Bryman-Denzin ka mixed-method triangulation pakka karo.',
    },
    {
      step: '2. Data Collection Toolkit Seekho',
      detail: 'Questionnaires, Likert/Bogardus scales, interviews, FGDs, surveys, Census, biographies, participant ethics aur digital ethnography compare karo.',
    },
    {
      step: '3. Variables, Hypothesis aur Sampling',
      detail: 'Gareebi ya inequality ko IV/DV/intervening variables, H1/H0 hypotheses aur probability vs non-probability samples mein badalna seekho.',
    },
    {
      step: '4. Reliability-Validity aur 28 PYQs Practice Karo',
      detail: 'T-P-I-S reliability tests aur inequality research ke upay yaad karo, fir sabhi 28 PYQs (2013–2025) Indian misaalon ke saath likho.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p1-u03-01-quant-qual-sampling.webp',
      title: 'Quantitative vs Qualitative & Sampling Toolkit',
      titleHinglish: 'Quantitative vs Qualitative aur Sampling Toolkit',
      badge: '01/02 · Design',
      badgeHinglish: '01/02 · Design',
      alt: 'Paper 1 Unit 3 poster contrasting Quantitative surveys and probability sampling with Qualitative ethnography and Alan Bryman Triangulation',
      caption: 'Alan Bryman triangulation bridges large-scale statistical patterns with deep ethnographic validity.',
      captionHinglish: 'Alan Bryman ka triangulation quantitative numbers aur qualitative depth ko ek saath laata hai.',
    },
    {
      assetFile: 'p1-u03-02-variables-validity-bullseye.webp',
      title: 'Variables, Hypothesis & Validity-Reliability Bullseye',
      titleHinglish: 'Variables, Hypothesis aur Validity-Reliability Bullseye',
      badge: '02/02 · Rigour',
      badgeHinglish: '02/02 · Satikta',
      alt: 'Paper 1 Unit 3 poster depicting hypothesis types, independent dependent intervening variables, and the 2x2 reliability vs validity target bullseyes',
      caption: 'Reliability means consistent measurement while validity ensures the tool truly captures what it claims.',
      captionHinglish: 'Reliability matlab baar-baar ek jaisa natija, aur validity matlab sahi cheez naapna.',
    },
  ],
  topics: [topic1Methods, topic2Techniques, topic3Design],
}

export default unit03Notebook