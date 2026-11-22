import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1FamilyHouseholdMarriage } from './topic-1'
import { topic2TypesAndFormsOfFamily } from './topic-2'
import { topic3LineageAndDescent } from './topic-3'
import { topic4PatriarchyAndDivisionOfLabour } from './topic-4'
import { topic5ContemporaryTrendsInKinship } from './topic-5'

const unitMindMap: MindMapData = {
  title: 'Paper 1 · Unit 9 — Systems of Kinship',
  center: 'Systems of Kinship',
  subtitle: 'Family, Household & Marriage • Types & Forms • Lineage & Descent • Patriarchy • Contemporary Trends',
  branches: [
    {
      title: '9.1–9.2 Family, Household & Forms',
      color: 'lavender',
      thinkers: ['G.P. Murdock', 'Talcott Parsons', 'A.M. Shah', 'Pauline Kolenda'],
      points: [
        'Murdock (4 functions) & Parsons (2 irreducible functions) vs Leach, Laing, Cooper & Morgan',
        'Marxist-Feminist: Engels (private property), Benston (one wage buys two), Ansley, Oakley, Bernard',
        'A.M. Shah: Family vs Household & Developmental Cycle (expansion, shrinking, fission, fusion)',
        'Kolenda’s 12 Indian forms; Rapoport diversity (single-person ~30%, blended ~15–16%, Symmetrical)',
      ],
    },
    {
      title: '9.3 Lineage, Descent & Zones',
      color: 'yellow',
      thinkers: ['Irawati Karve', 'Claude Lévi-Strauss', 'A.R. Radcliffe-Brown', 'Audrey Richards'],
      points: [
        '4 Descent types: Unilineal (patrilineal/matrilineal), Double (Todas), Bilateral (Dimasa), Ambilineal (Tiwa)',
        'British Descent Theory (Radcliffe-Brown, Fortes) vs French Alliance Theory (Lévi-Strauss, Dumont)',
        'Irawati Karve’s 4 Indian Kinship Zones: North (exogamous/hypergamous) vs South (cross-cousin/consolidated)',
        'Male authority in Matriliny: Audrey Richards’s "Matrilineal Puzzle" (Nayar Karanavan & Khasi Mama/Kni)',
      ],
    },
    {
      title: '9.4 Patriarchy & Division of Labour',
      color: 'mint',
      thinkers: ['Sylvia Walby', 'Ann Oakley', 'Deniz Kandiyoti', 'Leela Dube'],
      points: [
        'Sylvia Walby’s 6 Structures of Patriarchy & shift from Private to Public Patriarchy',
        'Murdock’s biological determinism (224 societies) refuted by Ann Oakley (38 share cooking, 14 lumbering)',
        'Deniz Kandiyoti ("Patriarchal Bargain"), Leela Dube ("Seed-Earth Analogy"), Uma Chakravarti & B.R. Ambedkar',
        'Workplace & Tech: Hochschild Second Shift, Beechey Reserve Army, Ryan Glass Cliff, WEF 2023 (#127) & GSMA 40% gap',
      ],
    },
    {
      title: '9.5 Contemporary Trends & 41 PYQs',
      color: 'pink',
      thinkers: ['Anthony Giddens', 'Judith Butler', 'Jeffrey Weeks', 'I.P. Desai'],
      points: [
        'Giddens: Plastic Sexuality & Pure Relationships; Parsons Divorce Paradox; Filiocentric (child-centred) homes',
        'Institutionalisation of Live-In (DV Act 2005, S. Khushboo, Indra Sarma, UCC 2024) & Surrogacy Act 2021',
        'Queer Kinship (Butler, Weeks & Weston "Chosen Families", Navtej Johar 2018 to Supriyo 2023) & demography',
        'Indian marriage: Ritual-to-Commercial shift, "arranged with a difference", and Across-Region marriages',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 1 · Unit 9 — Systems of Kinship',
  center: 'Systems of Kinship',
  subtitle: 'Family, Household & Marriage • Types & Forms • Lineage & Descent • Patriarchy • Contemporary Trends',
  branches: [
    {
      title: '9.1–9.2 Family, Household & Forms',
      color: 'lavender',
      thinkers: ['G.P. Murdock', 'Talcott Parsons', 'A.M. Shah', 'Pauline Kolenda'],
      points: [
        'Murdock (4 functions) & Parsons (2 irreducible functions) banam Leach, Laing, Cooper & Morgan',
        'Marxist-Feminist: Engels (private property), Benston (ek wage mein do mazdoor), Ansley, Oakley, Bernard',
        'A.M. Shah: Family vs Household aur Developmental Cycle (expansion, shrinking, fission, fusion)',
        'Kolenda ke 12 Indian forms; Rapoport diversity (single-person ~30%, blended ~15–16%, Symmetrical)',
      ],
    },
    {
      title: '9.3 Lineage, Descent & Zones',
      color: 'yellow',
      thinkers: ['Irawati Karve', 'Claude Lévi-Strauss', 'A.R. Radcliffe-Brown', 'Audrey Richards'],
      points: [
        '4 Descent types: Unilineal (patrilineal/matrilineal), Double (Todas), Bilateral (Dimasa), Ambilineal (Tiwa)',
        'British Descent Theory (Radcliffe-Brown, Fortes) banam French Alliance Theory (Lévi-Strauss, Dumont)',
        'Irawati Karve ke 4 Kinship Zones: North (4-gotra exogamy/hypergamy) vs South (cross-cousin/consolidated)',
        'Matriliny mein Male Authority: Audrey Richards ka "Matrilineal Puzzle" (Nayar Karanavan & Khasi Mama/Kni)',
      ],
    },
    {
      title: '9.4 Patriarchy & Division of Labour',
      color: 'mint',
      thinkers: ['Sylvia Walby', 'Ann Oakley', 'Deniz Kandiyoti', 'Leela Dube'],
      points: [
        'Sylvia Walby ke 6 Structures of Patriarchy aur Private se Public Patriarchy mein badlaav',
        'Murdock ke biological daave (224 samaj) ko Ann Oakley ne kata (38 mein cooking, 14 mein lumbering saajha)',
        'Deniz Kandiyoti ("Patriarchal Bargain"), Leela Dube ("Seed-Earth Analogy"), Uma Chakravarti & B.R. Ambedkar',
        'Workplace & Tech: Hochschild Second Shift, Beechey Reserve Army, Ryan Glass Cliff, WEF 2023 (#127) & GSMA 40% gap',
      ],
    },
    {
      title: '9.5 Contemporary Trends & 41 PYQs',
      color: 'pink',
      thinkers: ['Anthony Giddens', 'Judith Butler', 'Jeffrey Weeks', 'I.P. Desai'],
      points: [
        'Giddens: Plastic Sexuality & Pure Relationships; Parsons Divorce Paradox; Filiocentric (child-centred) ghar',
        'Live-In ka Institutionalisation (DV Act 2005, S. Khushboo, Indra Sarma, UCC 2024) & Surrogacy Act 2021',
        'Queer Kinship (Butler, Weeks & Weston "Chosen Families", Navtej Johar 2018 se Supriyo 2023) & demography',
        'Indian marriage: Ritual se Commercial shift, "arranged with a difference", aur Across-Region marriages',
      ],
    },
  ],
}

export const unit09Notebook: UnitNotebookSpec = {
  paperCode: 'P1',
  unitSlug: 'systems-of-kinship',
  overview:
    'Unit 9 is one of the highest-yielding units in UPSC Sociology Paper 1 (41 PYQs across 2013–2025) because it directly bridges Paper 1 general kinship theory with Paper 2 Unit 7 (Systems of Kinship in India). Here you master functionalist, critical, Marxist, feminist, and practice perspectives on family, A.M. Shah’s household developmental cycle, Irawati Karve’s four Indian kinship zones, descent vs alliance theory, patriarchy and the sexual division of labour, and late-modern shifts from filiocentric and live-in households to queer kinship.',
  overviewHinglish:
    'Unit 9 UPSC Sociology Paper 1 ke sabse zyada scoring aur high-weightage units mein se ek hai (2013–2025 mein 41 PYQs!) kyunki yeh Paper 1 ki kinship theory ko seedhe Paper 2 Unit 7 (Systems of Kinship in India) se jodta hai. Yahan aap family ki functionalist, critical, Marxist, feminist aur practice theories, A.M. Shah ka household developmental cycle, Irawati Karve ke 4 kinship zones, descent vs alliance debate, patriarchy aur sexual division of labour, tatha filiocentric, live-in aur queer kinship jaise contemporary trends ko bilkul aasaan bhasha mein samjhenge.',
  studySequence: [
    {
      step: '1. Master Family Theories & Household Cycle',
      detail: 'Compare Murdock and Parsons with critical (Leach, Laing, Cooper), Marxist-feminist (Engels, Benston, Ansley, Oakley, Bernard), and practice (David Morgan) lenses, then lock in A.M. Shah’s Family vs Household distinction and I.P. Desai’s Functional Jointness.',
    },
    {
      step: '2. Map Typologies, Descent & Karve’s Zones',
      detail: 'Contrast Pauline Kolenda’s 12 Indian family forms and Rhona Rapoport’s developed-society diversity with British Descent vs French Alliance theory, Irawati Karve’s North-South kinship matrix, and Audrey Richards’s "Matrilineal Puzzle" (Nayar Karanavan & Khasi Mama/Kni).',
    },
    {
      step: '3. Decode Patriarchy & Division of Labour',
      detail: 'Pair Sylvia Walby’s 6 structures of patriarchy and Ann Oakley’s rebuttal of Murdock with Deniz Kandiyoti’s Patriarchal Bargain, Leela Dube’s Seed-Earth socialisation, workplace barriers (Second Shift, Reserve Army, Glass Cliff), and WEF/GSMA empirical metrics.',
    },
    {
      step: '4. Practise All 41 PYQs (2013–2025)',
      detail: 'Rehearse the latest 2023–2025 themes: ritual-to-commercial marriage, filiocentric families, institutionalisation of live-in relationships, across-region marriages, and queer kinship ("chosen families") & population dynamics.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Family Theories aur Household Cycle Samjho',
      detail: 'Murdock aur Parsons ko critical (Leach, Laing, Cooper), Marxist-feminist (Engels, Benston, Ansley, Oakley, Bernard) aur David Morgan ("doing family") se compare karo; fir A.M. Shah ka Family vs Household aur I.P. Desai ka Functional Jointness pakka karo.',
    },
    {
      step: '2. Family Forms, Descent aur Karve ke Zones',
      detail: 'Pauline Kolenda ke 12 Indian forms aur Rapoport ki family diversity ke saath Descent vs Alliance theory, Irawati Karve ka North-South comparison aur Audrey Richards ka "Matrilineal Puzzle" (Nayar Karanavan & Khasi Mama/Kni) revise karo.',
    },
    {
      step: '3. Patriarchy aur Division of Labour',
      detail: 'Sylvia Walby ke 6 structures aur Murdock vs Oakley debate ke saath Deniz Kandiyoti ka Patriarchal Bargain, Leela Dube ki Seed-Earth analogy, workplace barriers (Second Shift, Reserve Army, Glass Cliff) aur WEF/GSMA data yaad karo.',
    },
    {
      step: '4. Sabhi 41 PYQs (2013–2025) Practice Karo',
      detail: 'Latest 2023–2025 topics par khas dhyan do: ritual-to-commercial marriage, filiocentric families, live-in ka judicial institutionalisation, across-region marriages, aur queer kinship ("chosen families") va population dynamics.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p1-u09-01-family-lineage-patriarchy.webp',
      title: 'Family, Lineage & Patriarchy',
      titleHinglish: 'Family, Lineage & Patriarchy — Quick Visual',
      badge: '01/02 · Visual Map',
      badgeHinglish: '01/02 · Visual Map',
      alt: 'P1 Unit 9 infographic: Family, Lineage & Patriarchy — Classical Functionalism vs Feminist & Lineage Perspectives',
      caption: 'Classical Functionalism vs Feminist & Lineage Perspectives (Family, Lineage & Patriarchy).',
      captionHinglish: 'Classical Functionalism vs Feminist & Lineage Perspectives — Family, Lineage & Patriarchy ka visual saransh.',
    },
    {
      assetFile: 'p1-u09-02-contemporary-kinship-trends.webp',
      title: 'Contemporary Trends in Kinship',
      titleHinglish: 'Contemporary Trends in Kinship — Quick Visual',
      badge: '02/02 · Visual Map',
      badgeHinglish: '02/02 · Visual Map',
      alt: 'P1 Unit 9 infographic: Contemporary Trends in Kinship — Late-Modern Shifts in Intimacy & Domestic Form',
      caption: 'Late-Modern Shifts in Intimacy & Domestic Form (Contemporary Trends in Kinship).',
      captionHinglish: 'Late-Modern Shifts in Intimacy & Domestic Form — Contemporary Trends in Kinship ka visual saransh.',
    },
  ],
  topics: [
    topic1FamilyHouseholdMarriage,
    topic2TypesAndFormsOfFamily,
    topic3LineageAndDescent,
    topic4PatriarchyAndDivisionOfLabour,
    topic5ContemporaryTrendsInKinship,
  ],
}

export default unit09Notebook