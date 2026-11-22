import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1LineageDescent } from './topic-1'
import { topic2TypesKinship } from './topic-2'
import { topic3FamilyMarriage } from './topic-3'
import { topic4HouseholdDimensions } from './topic-4'
import { topic5PatriarchyLabour } from './topic-5'

const unitMindMap: MindMapData = {
  title: 'Paper 2 · Unit 17 — Systems of Kinship in India',
  center: 'Kinship in India',
  subtitle: 'Lineage & Descent • Regional Kinship Zones • Family & Marriage • Household Dynamics • Patriarchy & Labour',
  branches: [
    {
      title: '17.1 Lineage & Descent',
      color: 'lavender',
      thinkers: ['Meyer Fortes', 'Louis Dumont', 'M.N. Srinivas', 'Tiplut Nongbri'],
      points: [
        'Descent vs Alliance: Unilineal corporate groups vs reciprocal marriage exchanges',
        'North Indian patrilineage: Mitakshara coparcenary, ancestor solidarity (Shraddha), and Sapinda exogamy',
        'Matrilineal systems: Khasi (Ka Khadduh) and Nair (Tharavad) where descent passes through women',
        'Matrilineal Puzzle: Female descent lines preserve male jural authority (Kni / Karanavan)',
      ],
    },
    {
      title: '17.2 Kinship Zones & Typology',
      color: 'yellow',
      thinkers: ['Iravati Karve', 'Louis Dumont', 'T.N. Madan', 'Yogendra Singh'],
      points: [
        'Karve’s four zones: Northern (Indo-Aryan), Southern (Dravidian), Central (hybrid), and Eastern (tribal)',
        'North vs South matrix: Negative marriage rules & Kanyadan asymmetry vs positive rules & cross-cousin alliances',
        'Dumont’s critique: South Indian kinship as structural affinity transmitted across generations',
        'Changing bonds: Virtual digital kinship and remittance networks preserving functional solidarity',
      ],
    },
    {
      title: '17.3 Family, Marriage & Household',
      color: 'mint',
      thinkers: ['I.P. Desai', 'Milton Singer', 'A.M. Shah', 'Pauline Kolenda'],
      points: [
        'Joint family debate: Classical disintegration thesis vs Desai’s functional jointness and Singer’s compartmentalization',
        'Hindu Vivah vs Muslim Nikah: Sacramental indissolubility vs socio-religious bilateral civil contract',
        'Household vs Family: A.M. Shah’s distinction separating commensal hearth (Chulah) from kinship web (Parivar)',
        'Developmental cycle & Kolenda: Household expansion and fission; resilience of supplemented nuclear forms',
      ],
    },
    {
      title: '17.4 Patriarchy & Gender Labour',
      color: 'pink',
      thinkers: ['Uma Chakravarti', 'Leela Dube', 'B.R. Ambedkar', 'Bina Agarwal'],
      points: [
        'Brahminical Patriarchy: Caste endogamy and gender subordination co-engineered to guard lineage purity',
        'Seed & Earth (Beej-Kshetr): Male generative seed claims paternal ownership, naturalizing female dispossession',
        'Honour Killings: Vigilante Khap violence violently punishing Pratiloma and intra-gotra consensual unions',
        'FLFP & Care Economy: Status production and unpaid domestic care (NSSO 2019: 299 mins/day female burden)',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 2 · Unit 17 — Bharat Mein Kinship Systems',
  center: 'Bharat Mein Rishtedaari',
  subtitle: 'Lineage Aur Descent • Karve Ke Chaar Zones • Parivar Aur Vivah • Household Dimension • Pitrasatta Aur Shram',
  branches: [
    {
      title: '17.1 Lineage Aur Descent',
      color: 'lavender',
      thinkers: ['Meyer Fortes', 'Louis Dumont', 'M.N. Srinivas', 'Tiplut Nongbri'],
      points: [
        'Descent vs Alliance: Khoon aur unilineal vansh banam shaadi ke aapsi gathbandhan',
        'Pitravanshi ekta: Mitakshara coparcenary, purkhon ki pooja (Shraddha) aur sapinda exogamy',
        'Matrivanshi samaj: Khasi (Ka Khadduh) aur Nair (Tharavad) jahan vansh maa se chalta hai',
        'Matrilineal Puzzle: Vansh aur zameen maa ke naam hone ke bawajood kanooni taqat mama ke paas',
      ],
    },
    {
      title: '17.2 Kinship Zones Aur Prakar',
      color: 'yellow',
      thinkers: ['Iravati Karve', 'Louis Dumont', 'T.N. Madan', 'Yogendra Singh'],
      points: [
        'Karve ke chaar zones: Northern (Indo-Aryan), Southern (Dravidian), Central (hybrid) aur Eastern (tribal)',
        'North vs South antar: Negative niyam aur ek-tarfa dahej banam positive cross-cousin vivah aur barabari',
        'Dumont ka critique: Dravidian kinship mein affinity ek sthayi virasat hai jo peedhiyon tak chalti hai',
        'Badalte rishte: WhatsApp groups aur remittances ne door rehne ke bawajood rishton ko baandhe rakha hai',
      ],
    },
    {
      title: '17.3 Parivar, Vivah Aur Household',
      color: 'mint',
      thinkers: ['I.P. Desai', 'Milton Singer', 'A.M. Shah', 'Pauline Kolenda'],
      points: [
        'Joint family bahas: Patan ka dava banam Desai ka functional jointness aur Singer ka compartmentalization',
        'Vivah ka antar: Hindu Vivah pavitra sanskara hai jabki Muslim Nikah ek civil contract hai',
        'Household vs Family: A.M. Shah ka farak—chulha (household) alag hone se khaan-daan (family) nahi tootta',
        'Developmental cycle & Kolenda: Gharon ka phailna aur tootna; supplemented nuclear gharon ki mazbooti',
      ],
    },
    {
      title: '17.4 Pitrasatta Aur Shram Batwara',
      color: 'pink',
      thinkers: ['Uma Chakravarti', 'Leela Dube', 'B.R. Ambedkar', 'Bina Agarwal'],
      points: [
        'Brahminical Patriarchy: Jaati ki shuddhata bachane ke liye auraton ke sharir par pehre baandhe gaye',
        'Beej aur Dharti: Mard ka beej jaati deta hai aur aurat sirf mitti hai, jisse pita ka bachhe par poora haq bana',
        'Honour Killings: Pratiloma aur antar-jaatiye shaadiyon par Khap panchayaton ki khun-kharaba hinsa',
        'FLFP aur Care Work: Status production aur unpaid domestic bojh (NSSO 2019: 299 mins rozana aurat ka shram)',
      ],
    },
  ],
}

export const unit17Notebook: UnitNotebookSpec = {
  paperCode: 'P2',
  unitSlug: 'kinship-in-india',
  overview:
    'Unit 17 provides an advanced sociological deconstruction of kinship, marriage, family, and gender in India. Moving beyond simplistic Western binaries, this unit explores how unilineal descent and affinal alliance structure agrarian landholdings, how Iravati Karve and Louis Dumont conceptualized regional kinship matrices, why the Indian joint family adapted into resilient functional jointness, how A.M. Shah and Pauline Kolenda clarified the household developmental cycle, and how Uma Chakravarti, Leela Dube, and Dr. B.R. Ambedkar exposed the deep structural entanglement of caste endogamy, Brahminical patriarchy, honour crimes, and gendered domestic labour.',
  overviewHinglish:
    'Unit 17 UPSC Sociology Paper 2 ka ek behad zaroori unit hai jo Bharat mein rishtedaari, vivah, parivar aur gender ke asantulan ko khol kar rakh deta hai. Yeh unit samjhati hai ki kaise pitravansh aur alliance zameen aur kheti ke dabdabe ko tay karte hain, Iravati Karve aur Louis Dumont ne Bharat ke kshetriya kinship zones ko kaise samjha, sanyukta parivar tootne ke bajaye functional jointness mein kaise dhal gaya, A.M. Shah aur Pauline Kolenda ne household aur family ke farak ko kaise saaf kiya, aur Uma Chakravarti, Leela Dube tatha Dr. B.R. Ambedkar ne jaati endogamy, Brahminical pitrasatta, honour killings aur unpaid care work ke aapas ke gathbandhan ko kaise nanga kiya.',
  studySequence: [
    {
      step: '1. Master Lineage & Descent Dynamics',
      detail:
        'Contrast Africanist descent theory with Dumontian alliance theory, analyze North Indian Mitakshara coparcenary and ancestor solidarity (Shraddha), and evaluate why Khasi and Nair matriliny preserved male jural authority.',
    },
    {
      step: '2. Compare Regional Kinship Zones',
      detail:
        'Examine Iravati Karve’s four regional zones (Northern, Southern, Central, Eastern), analyze Louis Dumont’s structural critique of affinity as a value, and document changing family bonds in modern digital India.',
    },
    {
      step: '3. Deconstruct Family & Marriage Debates',
      detail:
        'Interrogate the joint family disintegration debate through I.P. Desai’s functional jointness and Milton Singer’s compartmentalization, compare Hindu Vivah with Muslim Nikah, and evaluate modernized digital endogamy.',
    },
    {
      step: '4. Analyze Household Dimensions & Demography',
      detail:
        'Internalize A.M. Shah’s distinction between household and family, master the developmental cycle of fission and fusion, explore Pauline Kolenda’s 12 family forms, and evaluate Census trends on singlehood and longevity.',
    },
    {
      step: '5. Theorize Patriarchy, Entitlements & Labour',
      detail:
        'Connect Uma Chakravarti’s Brahminical Patriarchy with Ambedkar’s Castes in India, dissect Leela Dube’s Seed-Earth symbolism, examine honour killings and Khap violence, and unpack low FLFP and unpaid care work.',
    },
    {
      step: '6. Practice All 20 UPSC Past-Year Questions',
      detail:
        'Solve all 20 PYQs (2013–2024) across the 5 topics using the 4-step answer framework: Conceptual definition -> Thinker debate -> Empirical Indian evidence -> Forward-looking conclusion.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Lineage Aur Descent Pukhta Karo',
      detail:
        'Descent aur Alliance theory ka antar samjho, North India mein Mitakshara coparcenary aur purkhon ki pooja (Shraddha) dekho, aur Khasi tatha Nair matrivansh mein mama ke dabdabe (male jural authority) ko samjho.',
    },
    {
      step: '2. Kshetriya Kinship Zones Compare Karo',
      detail:
        'Iravati Karve ke chaar zones (North, South, Central, East) ka vishleshan karo, Louis Dumont ke affinity model ko samjho, aur digital daur mein badalte parivarik rishton ko note karo.',
    },
    {
      step: '3. Parivar Aur Vivah Ki Bahas Master Karo',
      detail:
        'Joint family ke patan ki bahas mein I.P. Desai ka functional jointness aur Milton Singer ka compartmentalization yaad karo, Vivah aur Nikah ka antar saaf karo, aur digital matrimony ke naye roop dekho.',
    },
    {
      step: '4. Household Dimension Aur Census Samjho',
      detail:
        'A.M. Shah ke household aur family ke farak ko samjho, developmental cycle (phailna aur tootna) master karo, Pauline Kolenda ke 12 roop yaad karo, aur Census ke badalte aakde note karo.',
    },
    {
      step: '5. Pitrasatta Aur Shram Ke Batware Ko Khologe',
      detail:
        'Uma Chakravarti ke Brahminical Patriarchy ko Ambedkar ke vicharon se jodo, Leela Dube ka Beej-Dharti prateek samjho, honour killings aur Khap hinsa ka samajshastra dekho, aur unpaid care work ka bojh darj karo.',
    },
    {
      step: '6. 20 UPSC PYQs Practice Karo',
      detail:
        'Panchon topics ke sabhi 20 PYQs ko 4-step answer formula se likho: Concept define karo -> Thinker debate -> Zameeni Indian case study -> Santulit aadhunik nishkarsh.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p2-u07-01-kinship-zones-karve.webp',
      title: 'Regional Kinship Zones of India',
      titleHinglish: 'Regional Kinship Zones of India — Quick Visual',
      badge: '01/02 · Visual Map',
      badgeHinglish: '01/02 · Visual Map',
      alt: 'P2 Unit 7 infographic: Regional Kinship Zones of India — Regional Kinship Diversity & Descent Systems in India',
      caption: 'Regional Kinship Diversity & Descent Systems in India (Regional Kinship Zones of India).',
      captionHinglish: 'Regional Kinship Diversity & Descent Systems in India — Regional Kinship Zones of India ka visual saransh.',
    },
    {
      assetFile: 'p2-u07-02-indian-family-patriarchy.webp',
      title: 'Family, Marriage & Patriarchy in India',
      titleHinglish: 'Family, Marriage & Patriarchy in India — Quick Visual',
      badge: '02/02 · Visual Map',
      badgeHinglish: '02/02 · Visual Map',
      alt: 'P2 Unit 7 infographic: Family, Marriage & Patriarchy in India — Joint Family Debate, Brahminical Patriarchy & Entitlements',
      caption: 'Joint Family Debate, Brahminical Patriarchy & Entitlements (Family, Marriage & Patriarchy in India).',
      captionHinglish: 'Joint Family Debate, Brahminical Patriarchy & Entitlements — Family, Marriage & Patriarchy in India ka visual saransh.',
    },
  ],
  topics: [
    topic1LineageDescent,
    topic2TypesKinship,
    topic3FamilyMarriage,
    topic4HouseholdDimensions,
    topic5PatriarchyLabour,
  ],
}

export default unit17Notebook
