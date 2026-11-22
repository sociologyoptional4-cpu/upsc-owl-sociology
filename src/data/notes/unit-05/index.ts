import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1Concepts } from './topic-1'
import { topic2Theories } from './topic-2'
import { topic3Dimensions } from './topic-3'
import { topic4Mobility } from './topic-4'

const unitMindMap: MindMapData = {
  title: 'Paper 1 · Unit 5 — Stratification and Mobility',
  center: 'Stratification & Mobility',
  subtitle: 'Core Concepts • Theories • Intersecting Dimensions • Open/Closed Mobility',
  branches: [
    {
      title: '5.1 Concepts & Exclusion',
      color: 'lavender',
      thinkers: ['Amartya Sen', 'Pierre Bourdieu', 'B.R. Ambedkar', 'André Béteille'],
      points: [
        'Saunders 3 equalities; Rousseau & Béteille natural vs social inequality',
        'Weber Life-chances vs Life-style; Dumont, Ambedkar & Gupta on hierarchy',
        'Sen (Capability deficit) vs Bourdieu (4 Capitals) on chronic poverty',
        'Haralambos & Veit-Wilson: structural exclusion vs defensive self-exclusion',
      ],
    },
    {
      title: '5.2 Theories of Stratification',
      color: 'yellow',
      thinkers: ['Kingsley Davis', 'Melvin Tumin', 'Karl Marx', 'Max Weber'],
      points: [
        'Parsons value consensus + Davis-Moore role allocation vs Tumin status-quo critique',
        'Empirical tests: Rosenfeld (Kibbutz) & Djilas (The New Class in Eastern bloc)',
        'Marx: productive property, surplus extraction, class-in/for-itself & revolution',
        'Weber (Class, Status, Party) + Feminist critique of gender-blind theory (Acker)',
      ],
    },
    {
      title: '5.3 Intersecting Dimensions',
      color: 'mint',
      thinkers: ['Raewyn Connell', 'Patricia Hill Collins', 'Fredrik Barth', 'Ali Rattansi'],
      points: [
        'Class & New Middle Class expansion (Weber, Bell, Goldthorpe, Lipset)',
        'Status closure & why caste/race persist under modernity (Yogendra Singh, Srinivas)',
        'Gender stratification, hegemonic masculinity (Connell) & intersectionality',
        'Blurred race-ethnicity boundary (UNESCO 1950, Rattansi) + Geertz vs Barth vs Noel',
      ],
    },
    {
      title: '5.4 Mobility & PYQ Trends (37 Qs)',
      color: 'pink',
      thinkers: ['Pitirim Sorokin', 'M.N. Srinivas', 'John Goldthorpe', 'Frank Parkin'],
      points: [
        'Open vs closed are matters of degree: Glass, Oxford 1:2:4, Pew 4%, WEF India #76',
        'Closed mobility: Sanskritisation (positional) vs democratic structural change',
        'Education paradox: ladder (Ambedkar, Kalam) + gatekeeper (Bourdieu, IHDS)',
        '37 PYQs (9+11+9+8): pair theory, Indian reality & balanced conclusion',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 1 · Unit 5 — Stratification and Mobility',
  center: 'Stratification & Mobility',
  subtitle: 'Core Concepts • Siddhant • Judte Aayam • Open/Closed Mobility',
  branches: [
    {
      title: '5.1 Concepts aur Exclusion',
      color: 'lavender',
      thinkers: ['Amartya Sen', 'Pierre Bourdieu', 'B.R. Ambedkar', 'André Béteille'],
      points: [
        'Saunders ki 3 equalities; Rousseau & Béteille natural vs social inequality',
        'Weber Life-chances vs Life-style; Dumont, Ambedkar & Gupta hierarchy bahas',
        'Sen (Capability kami) vs Bourdieu (4 Capitals) chronic garibi samajhne ko',
        'Haralambos & Veit-Wilson: structural exclusion vs defensive self-exclusion',
      ],
    },
    {
      title: '5.2 Stratification ke Siddhant',
      color: 'yellow',
      thinkers: ['Kingsley Davis', 'Melvin Tumin', 'Karl Marx', 'Max Weber'],
      points: [
        'Parsons value consensus + Davis-Moore role allocation vs Tumin status-quo critique',
        'Empirical saboot: Rosenfeld (Kibbutz) & Djilas (Soviet bloc The New Class)',
        'Marx: malikana haq, surplus loot, class-in/for-itself aur kranti',
        'Weber (Class, Status, Party) + Feminist gender-blind critique (Joan Acker)',
      ],
    },
    {
      title: '5.3 Judte hue Aayam',
      color: 'mint',
      thinkers: ['Raewyn Connell', 'Patricia Hill Collins', 'Fredrik Barth', 'Ali Rattansi'],
      points: [
        'Class & New Middle Class ubhaar (Weber, Bell, Goldthorpe, Lipset)',
        'Status closure aur modernity mein jaati/race kyun bache hain (Yogendra Singh, Srinivas)',
        'Gender stratification, hegemonic masculinity (Connell) & intersectionality',
        'Dhundhli race-ethnicity seema (UNESCO 1950, Rattansi) + Geertz vs Barth vs Noel',
      ],
    },
    {
      title: '5.4 Mobility aur PYQ Trends (37 Qs)',
      color: 'pink',
      thinkers: ['Pitirim Sorokin', 'M.N. Srinivas', 'John Goldthorpe', 'Frank Parkin'],
      points: [
        'Open vs closed degree ka farak hai: Glass, Oxford 1:2:4, Pew 4%, WEF India #76',
        'Closed mobility: Sanskritisation (positional) vs loktantrik structural badlaav',
        'Shiksha virodhabhas: seedhi (Ambedkar, Kalam) + gatekeeper (Bourdieu, IHDS)',
        '37 PYQs (9+11+9+8): theory, Bharatiya saboot aur santulit ant jodo',
      ],
    },
  ],
}

export const unit05Notebook: UnitNotebookSpec = {
  paperCode: 'P1',
  unitSlug: 'stratification-and-mobility',
  overview:
    'Unit 5 is the structural spine of Paper 1 and bridges directly to Indian caste, class, gender, and poverty debates in Paper 2. Here you master how neutral differences harden into hierarchy and exclusion, pit Davis-Moore functionalism against Tumin, Marx, Weber, and feminist critiques, decode intersecting axes of class, status, gender, race, and ethnicity, and test why neither "open" nor "closed" mobility systems ever exist in pure form.',
  overviewHinglish:
    'Unit 5 poori Paper 1 ki structural reedh hai aur seedhe Paper 2 ki jaati, class, gender aur garibi ki bahas se judti hai. Yahan aap samajhte hain ki natural farak hierarchy aur exclusion mein kaise badalte hain, Davis-Moore ko Tumin, Marx, Weber aur feminist critiques se kaise parakhein, class-status-gender-ethnicity-race kaise mil kar chalte hain, aur kyun duniya ka koi bhi samaj poori tarah "open" ya "closed" nahi hota.',
  studySequence: [
    {
      step: '1. Clarify the 6 Core Concepts',
      detail:
        'Separate natural difference from social inequality, hierarchy from stratification, life-chances from life-style, Sen from Bourdieu on poverty, and forced vs self-exclusion.',
    },
    {
      step: '2. Master the 3-Way Theory Clash + Gender Critique',
      detail:
        'Pair Davis-Moore directly with Melvin Tumin, contrast Marx vs Weber across Class-Status-Party, quote Rosenfeld and Djilas, and add Joan Acker’s feminist blind-spot critique.',
    },
    {
      step: '3. Connect Intersecting Dimensions',
      detail:
        'Review New Middle Class studies (Bell, Goldthorpe, Lipset), Connell’s hegemonic masculinity, Collins’ intersectionality, and UNESCO/Rattansi/Geertz/Barth/Noel on race and ethnicity.',
    },
    {
      step: '4. Drill All 37 PYQs (2013–2025)',
      detail:
        'Use key empirical anchors—Glass 1949, Oxford 1:2:4 rule, Pew 4% climb, WEF India #76, and Srinivas vs Bailey—to solve all 37 Unit 5 PYQs across Paper 1 and Paper 2 bridges.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. 6 Core Concepts Saaf Karo',
      detail:
        'Natural farak vs social inequality, hierarchy vs stratification, life-chances vs life-style, garibi par Sen vs Bourdieu aur forced vs self-exclusion ka bhed pakka karo.',
    },
    {
      step: '2. 3-Way Theory Takraav + Feminist Critique Padho',
      detail:
        'Davis-Moore ke saath Melvin Tumin ki point-by-point aalochna, Marx vs Weber (Class-Status-Party), Rosenfeld-Djilas saboot aur Joan Acker ki gender-blindness critique jodo.',
    },
    {
      step: '3. Judte Dimensions ko Samjho',
      detail:
        'New Middle Class (Bell, Goldthorpe, Lipset), Connell ki hegemonic masculinity, Collins ki intersectionality, aur race-ethnicity par UNESCO, Rattansi, Geertz, Barth aur Noel revise karo.',
    },
    {
      step: '4. Sabhi 37 PYQs (2013–2025) Practice Karo',
      detail:
        'Glass 1949, Oxford 1:2:4 rule, Pew 4%, WEF India #76 aur Srinivas vs Bailey jaise pakke sabooton ke saath Paper 1 aur Paper 2 bridges bana kar sabhi 37 PYQs solve karo.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p1-u05-01-stratification-theories.webp',
      title: 'Functionalist, Marxist & Weberian Stratification',
      titleHinglish: 'Functionalist, Marxist aur Weberian Stratification',
      badge: '01/02 · Theories',
      badgeHinglish: '01/02 · Siddhant',
      alt: 'Paper 1 Unit 5 poster comparing Davis Moore functionalist theory and Tumin critique against Marxist class struggle and Weberian class status party',
      caption:
        'Social stratification debates hinge on whether unequal rewards motivate efficiency (Davis-Moore) or entrench monopoly power.',
      captionHinglish:
        'Davis-Moore inequality ko functional maante hain, jabki Tumin, Marx aur Weber power monopoly dikhate hain.',
    },
    {
      assetFile: 'p1-u05-02-mobility-dimensions-exclusion.webp',
      title: 'Dimensions, Mobility, Poverty & Exclusion',
      titleHinglish: 'Dimensions, Mobility, Poverty aur Exclusion',
      badge: '02/02 · Dimensions',
      badgeHinglish: '02/02 · Aayam',
      alt: 'Paper 1 Unit 5 poster covering Bourdieu 4 capitals, Sorokin open closed mobility ladder, Oscar Lewis vs situational poverty, and social exclusion',
      caption:
        'Class, status, gender, race, and ethnicity intersect across open and closed mobility ladders and structural exclusion.',
      captionHinglish:
        'Class, status, gender, race aur ethnicity mil kar mobility ke raaste aur social exclusion tay karte hain.',
    },
  ],
  topics: [topic1Concepts, topic2Theories, topic3Dimensions, topic4Mobility],
}

export default unit05Notebook