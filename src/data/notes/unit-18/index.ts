import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1ReligiousCommunities } from './topic-1'
import { topic2ProblemsMinorities } from './topic-2'

const unitMindMap: MindMapData = {
  title: 'Paper 2 · Unit 18 — Religion and Society (India)',
  center: 'Religion and Society in India',
  subtitle: 'Religious Pluralism • Lived Syncretism • Minority Deprivation & Sachar • Violence & Ghettoization • Parsi Crisis',
  branches: [
    {
      title: '18.1 Demography & Pluralism',
      color: 'lavender',
      thinkers: ['Yogendra Singh', 'Amartya Sen', 'T.K. Oommen'],
      points: [
        'Census 2011: Hindus 79.8%, Muslims 14.2%, Christians 2.3%, Sikhs 1.7%, Buddhists 0.7%, Jains 0.4%',
        'Cultural Pluralism: Salad-bowl / mosaic model preserving distinct traditions within a unified constitutional umbrella',
        'Unity in Diversity: Dialectic of orthogenetic and heterogenetic traditions creating composite Ganga-Jamuni Tehzeeb',
        'Sarna Code: Adivasi nature worship mobilization demanding separate census classification',
      ],
    },
    {
      title: '18.2 Syncretism & Caste in Faiths',
      color: 'yellow',
      thinkers: ['Ashis Nandy', 'T.N. Madan', 'Imtiaz Ahmad', 'Rowena Robinson'],
      points: [
        'Everyday syncretism: Lived religion transcending scriptural boundaries at Sufi Dargahs and Marian shrines',
        'Caste in Islam: Ashraf (nobility), Ajlaf (clean artisans), and Arzal (Dalit converts) hierarchy; Pasmanda assertion',
        'Caste in Christianity: Syrian Christian high-caste status vs Dalit Christian segregation in dual pews and burial',
        'Hindu diversity: Sectarian streams (Shaiva, Vaishnava, Shakta) and Little-Great tradition interactions',
      ],
    },
    {
      title: '18.3 Minority Rights & Sachar Report',
      color: 'mint',
      thinkers: ['Louis Wirth', 'B.R. Ambedkar', 'Rajindar Sachar', 'Amitabh Kundu'],
      points: [
        'Sociological minority: Wirth’s criteria of structural subordination and vulnerability over demographic numbers',
        'Constitutional framework: Articles 29 and 30 safeguarding minority cultural and educational autonomy',
        'Sachar Committee (2006): Empirical proof that Muslims lag behind national averages in education, jobs, and credit',
        'Financial exclusion: Informal sector trap (61%) and banking redlining treating minority pockets as negative zones',
      ],
    },
    {
      title: '18.4 Violence, Ghettoization & Parsis',
      color: 'pink',
      thinkers: ['Paul Brass', 'Christophe Jaffrelot', 'Ashutosh Varshney', 'Shernaz Cama'],
      points: [
        'Manufactured riots: Paul Brass’s Institutionalized Riot System (IRS) exposing political production of violence',
        'Spatial Ghettoization: Involuntary retreat into enclaves (Juhapura, Mumbra) severing inter-ethnic civic ties (Varshney)',
        'Majoritarianism vs Minoritarianism: Cultural homogenization and ethnic democracy vs rhetoric of appeasement',
        'Parsi demographic crisis: Sub-replacement TFR (~0.8), rigid endogamy, and the Jiyo Parsi IVF intervention',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 2 · Unit 18 — Dharam Aur Samaj (Bharat)',
  center: 'Dharam Aur Samaj (Bharat)',
  subtitle: 'Dharmik Vividhta • Rozmarra Ka Syncretism • Sachar Report Aur Pichhdapan • Ghettoization • Parsi Sankat',
  branches: [
    {
      title: '18.1 Jan-Sankhya Aur Pluralism',
      color: 'lavender',
      thinkers: ['Yogendra Singh', 'Amartya Sen', 'T.K. Oommen'],
      points: [
        'Census 2011: Hindu 79.8%, Muslim 14.2%, Christian 2.3%, Sikh 1.7%, Buddhist 0.7%, Jain 0.4%',
        'Cultural Pluralism: Salad-bowl model jisme sabhi samuday apni pehchan bachaye rakhte hue ek sath rehte hain',
        'Unity in Diversity: Deshi aur videshi paramparaon ke sangam se bani Ganga-Jamuni Tehzeeb',
        'Sarna Code: Adivasiyon ka prakriti-pooja ke liye Census mein alag column maangne ka aandolan',
      ],
    },
    {
      title: '18.2 Syncretism Aur Jaati Ka Roop',
      color: 'yellow',
      thinkers: ['Ashis Nandy', 'T.N. Madan', 'Imtiaz Ahmad', 'Rowena Robinson'],
      points: [
        'Everyday Syncretism: Dargahon, Velankanni aur Sabarimala mein dharmo se upar uth kar saajha vishwas',
        'Islam Mein Jaati: Ashraf (khandani), Ajlaf (peshevar), aur Arzal (Dalit) shreni; Pasmanda aawaz',
        'Christianity Mein Jaati: Syrian Christian ka unchi jati ka garv vs Dalit Christian ke sath chhua-chhoot',
        'Hindu Vividhta: Shaiva, Vaishnava, Shakta mat aur dehati Gramadevatas ki Little Tradition',
      ],
    },
    {
      title: '18.3 Alp-Sankhyak Adhikar Aur Sachar',
      color: 'mint',
      thinkers: ['Louis Wirth', 'B.R. Ambedkar', 'Rajindar Sachar', 'Amitabh Kundu'],
      points: [
        'Samajshastriya Minority: Louis Wirth ke anusar shakti aur adhikar ki kami, na ki sirf kam aabadi',
        'Samvidhanik Suraksha: Article 29 aur 30 minorities ke sanskritik aur educational hakon ki dhal',
        'Sachar Committee (2006): Sabut mila ki Musalman padhai, formal naukriyon aur bank loan mein Daliton se pichhe hain',
        'Financial Redlining: 61% Musalman asangathit kshetron mein; banks ne mohallon ko "negative zone" banaya',
      ],
    },
    {
      title: '18.4 Hinsa, Ghettoization Aur Parsi',
      color: 'pink',
      thinkers: ['Paul Brass', 'Christophe Jaffrelot', 'Ashutosh Varshney', 'Shernaz Cama'],
      points: [
        'Institutionalized Riot System (Brass): Dange achanak nahi bhadakte, chunav ke liye plan karke karwaye jaate hain',
        'Ghettoization: Darr aur makaan na milne ki majboori se Juhapura aur Mumbra jaise ilaqon mein simatna',
        'Bahusankhyakvaad: Christophe Jaffrelot ka "Ethnic Democracy" model aur appeasement ka jhootha daawa',
        'Parsi Aabadi Ka Sankat: TFR sirf 0.8, sakht endogamy niyam, aur Jiyo Parsi ke zariye IVF sahayata',
      ],
    },
  ],
}

export const unit18Notebook: UnitNotebookSpec = {
  paperCode: 'P2',
  unitSlug: 'religion-and-society-india',
  overview:
    'Unit 18 provides a rigorous sociological exploration of religion and society in India across two interconnected themes: the demographic composition, cultural pluralism, and lived syncretic traditions of religious communities (including internal caste stratification in Islam and Christianity, Hindu sectarian diversity, and the Sarna tribal demand); and the multi-dimensional problems of religious minorities, encompassing constitutional guarantees, empirical findings of the Sachar Committee, the triad of communal violence, stereotyping, and spatial ghettoization, the dialectic of majoritarianism and minoritarianism, and the existential demographic crisis of the Parsi community alongside the Jiyo Parsi intervention.',
  overviewHinglish:
    'Unit 18 Bharat mein dharam aur samaj ke rishte ko do mukhy kshetron mein vistaar se samjhati hai: pehla, Bharat ke dharmik samudayon ki jan-sankhya, cultural pluralism aur Dargahon v tirth-sthano par rozmarra ka syncretism (saath hi Islam aur Christianity mein jaati vyavastha, Hindu dharm ki aantarik vividhta, aur Adivasiyon ki Sarna Code maang); aur doosra, dharmik alp-sankhyakon ki samasyayein, jisme Samvidhan ke Article 29–30, Sachar Committee ke zameeni aakde, dangon ka Institutionalized Riot System, ghettoization, bahusankhyakvaad ki chunauti, aur Parsi samuday ki tezi se ghati aabadi aur Jiyo Parsi yojana ka gehra vishleshan shamil hai.',
  studySequence: [
    {
      step: '1. Master Demographic Pluralism & Cultural Salad Bowl',
      detail:
        'Analyze Census 2011 religious breakdown, contrast the assimilationist melting-pot with India’s cultural salad-bowl model, and examine Yogendra Singh’s orthogenetic-heterogenetic dialectic.',
    },
    {
      step: '2. Deconstruct Everyday Syncretism & Shared Sacred Spaces',
      detail:
        'Differentiate textual dogma from lived religion, evaluate Ashis Nandy’s vernacular tolerance thesis, and document inter-faith pilgrimages at Ajmer Sharif, Velankanni, and Sabarimala.',
    },
    {
      step: '3. Unpack Caste in Islam, Christianity & Hindu Sectarianism',
      detail:
        'Master Imtiaz Ahmad’s Ashraf-Ajlaf-Arzal model and Pasmanda mobilization, examine Syrian vs Dalit Christian stratification, and analyze the Adivasi Sarna religion code demand.',
    },
    {
      step: '4. Internalize the Sachar Committee Findings & Minority Rights',
      detail:
        'Study Louis Wirth’s sociological minority definition, constitutional protections under Articles 25–30, and memorize Sachar Committee empirical figures on literacy, informal work, and banking redlining.',
    },
    {
      step: '5. Analyze Violence, Stereotyping & Spatial Ghettoization',
      detail:
        'Examine Paul Brass’s Institutionalized Riot System (IRS), differentiate voluntary ethnic enclaves from involuntary ghettos (Gayer & Jaffrelot), and link spatial segregation to the loss of civic networks (Varshney).',
    },
    {
      step: '6. Evaluate Majoritarianism & The Parsi Demographic Crisis',
      detail:
        'Contrast majoritarianism with minoritarian discourse, dissect the sociological drivers of Parsi demographic decline (endogamy, TFR 0.8, aging), and assess the Jiyo Parsi intervention.',
    },
    {
      step: '7. Solve All 8 UPSC Past-Year Questions',
      detail:
        'Practice all 8 PYQs (4 for Topic 1, 4 for Topic 2) using structured answer frames: Conceptual definition -> Thinker debate -> Empirical Indian evidence -> Constitutional & democratic conclusion.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Jan-Sankhya Aur Cultural Pluralism Pukhta Karo',
      detail:
        'Census 2011 ke dharmik aakde yaad karo, American melting-pot aur Bharatiya salad-bowl ka antar samjho, aur Yogendra Singh ka composite culture siddhant note karo.',
    },
    {
      step: '2. Rozmarra Ka Syncretism Aur Saajhe Tirth Samjho',
      detail:
        'Textual aur lived religion ka farak jaano, Ashis Nandy ke vernacular tolerance ko samjho, aur Ajmer Sharif, Velankanni tatha Sabarimala ke saajhe tirth-sthano ka hawala do.',
    },
    {
      step: '3. Islam, Christianity Aur Hindu Samaj Mein Jaati Ko Khologe',
      detail:
        'Imtiaz Ahmad ka Ashraf-Ajlaf-Arzal model aur Pasmanda aandolan master karo, Syrian banam Dalit Christian bhedbhav dekho, aur Adivasiyon ke Sarna Code aandolan ko samjho.',
    },
    {
      step: '4. Sachar Committee Ke Zameeni Aakde Yaad Karo',
      detail:
        'Louis Wirth ki minority paribhasha, Samvidhan ke Article 25–30, aur Sachar Report ke shiksha, informal rojgari tatha bank loan ke thos aakde note karo.',
    },
    {
      step: '5. Dange, Stereotyping Aur Ghettoization Ka Samajshastra Dekho',
      detail:
        'Paul Brass ka Institutionalized Riot System (IRS) samjho, enclave aur ghetto ka antar saaf karo (Gayer & Jaffrelot), aur Ashutosh Varshney ke civic ties model se jodo.',
    },
    {
      step: '6. Bahusankhyakvaad Aur Parsi Sankat Ka Vishleshan Karo',
      detail:
        'Majoritarianism banam minoritarianism ka takrav samjho, Parsi samuday ki aabadi ghatne ke samajik kaaran (endogamy, TFR 0.8) dekho, aur Jiyo Parsi yojana ka mulyankan karo.',
    },
    {
      step: '7. Sabhi 8 UPSC PYQs Practice Karo',
      detail:
        'Donon topics ke sabhi 8 PYQs ko 4-step answer framework se likho: Concept define karo -> Thinker debate -> Zameeni case study -> Samvidhanik nishkarsh.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p2-u08-01-religious-communities-web.webp',
      title: 'Religious Communities in India',
      titleHinglish: 'Religious Communities in India — Quick Visual',
      badge: '01/02 · Visual Map',
      badgeHinglish: '01/02 · Visual Map',
      alt: 'P2 Unit 8 infographic: Religious Communities in India — Demographic Pluralism & Syncretic Traditions in India',
      caption: 'Demographic Pluralism & Syncretic Traditions in India (Religious Communities in India).',
      captionHinglish: 'Demographic Pluralism & Syncretic Traditions in India — Religious Communities in India ka visual saransh.',
    },
    {
      assetFile: 'p2-u08-02-religious-minorities-matrix.webp',
      title: 'Problems of Religious Minorities',
      titleHinglish: 'Problems of Religious Minorities — Quick Visual',
      badge: '02/02 · Visual Map',
      badgeHinglish: '02/02 · Visual Map',
      alt: 'P2 Unit 8 infographic: Problems of Religious Minorities — Constitutional Guarantees vs Structural Deprivation',
      caption: 'Constitutional Guarantees vs Structural Deprivation (Problems of Religious Minorities).',
      captionHinglish: 'Constitutional Guarantees vs Structural Deprivation — Problems of Religious Minorities ka visual saransh.',
    },
  ],
  topics: [topic1ReligiousCommunities, topic2ProblemsMinorities],
}

export default unit18Notebook
