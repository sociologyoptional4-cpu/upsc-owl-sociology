import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1PeasantsFarmers } from './topic-1'
import { topic2WomensMovement } from './topic-2'
import { topic3BackwardClassesDalit } from './topic-3'
import { topic4EnvironmentalMovements } from './topic-4'
import { topic5EthnicityIdentity } from './topic-5'

const unitMindMap: MindMapData = {
  title: 'Paper 2 · Unit 23 — Social Movements in Modern India',
  center: 'Social Movements in Modern India',
  subtitle: 'Peasants & Farmers • Women • Backward Classes & Dalits • Environment • Ethnicity & Identity',
  branches: [
    {
      title: '23.1 Peasants & Farmers Movements',
      color: 'lavender',
      thinkers: ['Kathleen Gough', 'D.N. Dhanagare', 'A.R. Desai', 'Sharad Joshi', 'Surinder Jodhka'],
      points: [
        'Colonial uprisings: Gough’s 77+ insurrections refuting Barrington Moore’s passivity thesis',
        'Desai’s structural transition: old anti-feudal peasants for land vs 1980s capitalist farmers for MSP',
        'Poputlist framing: Sharad Joshi’s "Bharat vs India" and Rudolphs’ "bullock capitalists"',
        'Contemporary shift (2020–21): SKM cross-class coalition defending mandis against corporate deregulation',
      ],
    },
    {
      title: '23.2 The Women’s Movement',
      color: 'yellow',
      thinkers: ['Radha Kumar', 'Mahatma Gandhi', 'Madhu Kishwar', 'Gopal Guru', 'Sharmila Rege'],
      points: [
        'Four historical phases (Radha Kumar): 19th c. reforms, nationalist mobilization, 1970s autonomy, and digital',
        'Gandhian mobilization paradox: Madhu Kishwar on moral weaponization of Sita preserving domesticity',
        'Towards Equality Report (1974): catalytic trigger launching autonomous anti-rape/dowry campaigns',
        'Dalit Feminist Standpoint: Guru & Rege exposing savarna hegemony and the subaltern "triple burden"',
      ],
    },
    {
      title: '23.3 Backward Classes & Dalit Movements',
      color: 'mint',
      thinkers: ['Jyotirao Phule', 'Periyar E.V. Ramasamy', 'B.R. Ambedkar', 'Gail Omvedt', 'Kanshi Ram'],
      points: [
        'Anti-caste counter-hegemony: Phule’s Satyashodhak, Periyar’s Self-Respect, and Ambedkar’s Navayana',
        'Regional divergence: Dravidian cultural-counter-hegemony vs North Indian Mandal-era political capture',
        'Dalit Panthers (1972): militant literature, class solidarity, and radical subaltern confrontation',
        'Electoral co-optation: Omvedt & Shah on symbolic dignity (BSP) masking neglected agrarian redistribution',
      ],
    },
    {
      title: '23.4 & 23.5 Ecology, Ethnicity & Identity',
      color: 'pink',
      thinkers: ['Ramachandra Guha', 'Madhav Gadgil', 'Vandana Shiva', 'Bina Agarwal', 'Myron Weiner', 'Sanjib Baruah'],
      points: [
        'Environmentalism of the poor: Guha & Gadgil’s 3 strands; Bina Agarwal’s critique of ecofeminism',
        'Extractive triangle: state-corporate extractivism displacing adivasis (Niyamgiri & Hasdeo Arand)',
        'Sons of the Soil: Myron Weiner’s structural conditions driving urban nativism (Shiv Sena, AASU)',
        'North-East autonomy: Sanjib Baruah on "cosmetic federalism" and sub-ethnic violent fracturing',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 2 · Unit 23 — Aadhunik Bharat Mein Samajik Aandolan',
  center: 'Aadhunik Bharat Mein Samajik Aandolan',
  subtitle: 'Kisaan • Mahila • Dalit Aur Pichhda Varg • Paryavaran • Nrijatiyata Aur Pehchan',
  branches: [
    {
      title: '23.1 Kisaan Aur Krishi Aandolan',
      color: 'lavender',
      thinkers: ['Kathleen Gough', 'D.N. Dhanagare', 'A.R. Desai', 'Sharad Joshi', 'Surinder Jodhka'],
      points: [
        'Colonial vidroh: Gough ke 77 vidrohon dwara Barrington Moore ke passivity thesis ka khandank',
        'A.R. Desai ka fark: zameen ke liye ladne wala peasant banam MSP ke liye ladne wala 1980s ka farmer',
        'Sharad Joshi ka vichar: "Bharat banam India" aur Rudolphs ke "bullock capitalists"',
        '2020–21 ka morcha: SKM dwara kisaan-mazdoor ekta aur mandiyon ko corporate dabdabe se bachana',
      ],
    },
    {
      title: '23.2 Mahila Aandolan',
      color: 'yellow',
      thinkers: ['Radha Kumar', 'Mahatma Gandhi', 'Madhu Kishwar', 'Gopal Guru', 'Sharmila Rege'],
      points: [
        'Radha Kumar ke 4 charn: 19th sadi ke purush sudhar, Gandhi ka daur, 1970s ke swatantra morche aur digital',
        'Gandhi ji ka dvandv: Madhu Kishwar ke anusaar Sita ka aadarsh dekar parivar ki patriarchy ko bachaye rakhna',
        'Towards Equality Report (1974): girte sex ratio aur berozgari ke khulase se sadak par aakrosh',
        'Dalit Feminist Standpoint: Gopal Guru aur Sharmila Rege dwara Dalit aurat ke tehre bojh ka parda-faash',
      ],
    },
    {
      title: '23.3 Pichhda Varg Aur Dalit Aandolan',
      color: 'mint',
      thinkers: ['Jyotirao Phule', 'Periyar E.V. Ramasamy', 'B.R. Ambedkar', 'Gail Omvedt', 'Kanshi Ram'],
      points: [
        'Jaati-virodhi bagawat: Phule ka Satyashodhak, Periyar ka Self-Respect aur Ambedkar ka Bauddh dharm',
        'Dakshin banam Uttar: Dravidian sanskritik kranti banam North Indian Mandal aarakshan rajneeti',
        'Dalit Panthers (1972): hathiyarband yuva sangathan, krantikari kavita aur varg ekta',
        'Chunavi co-optation: Gail Omvedt aur Ghanshyam Shah ke anusaar BSP ka prateekatmak samman tak simatna',
      ],
    },
    {
      title: '23.4 & 23.5 Paryavaran, Nrijatiyata Aur Pehchan',
      color: 'pink',
      thinkers: ['Ramachandra Guha', 'Madhav Gadgil', 'Vandana Shiva', 'Bina Agarwal', 'Myron Weiner', 'Sanjib Baruah'],
      points: [
        'Garibon ka paryavaranvad: Guha-Gadgil ke 3 dhaare; Bina Agarwal ka ecofeminism critique',
        'Extractive development triangle: corporate mining aur aadiwasi vishthapan (Niyamgiri aur Hasdeo)',
        'Sons of the Soil: Myron Weiner ka shehari nativism model (Shiv Sena aur Assam morcha)',
        'North-East autonomy: Sanjib Baruah ka "cosmetic federalism" aur sub-ethnic aapsi hinsa',
      ],
    },
  ],
}

export const unit23Notebook: UnitNotebookSpec = {
  paperCode: 'P2',
  unitSlug: 'social-movements-in-modern-india',
  overview:
    'A comprehensive, sociologically rigorous bilingual study notebook covering Unit 23 of UPSC Sociology Paper 2: Social Movements in Modern India. Covers the structural transformation of peasant struggles into contemporary farm agitations, Radha Kumar’s four phases of the women’s movement alongside the Dalit feminist standpoint, anti-caste assertions from Phule and Ambedkar to Mandal and the Dalit Panthers, the "Environmentalism of the Poor" confronting the extractive development triangle, and ethnic "Sons of the Soil" nativism alongside North-East autonomy accords.',
  overviewHinglish:
    'UPSC Sociology Paper 2 Unit 23 (Aadhunik Bharat Mein Samajik Aandolan) ka sampoorna bilingual study notebook: Kisaano ke colonial sangharshon se lekar 2020–21 ke aitihasik morche, Radha Kumar ke charnon aur Dalit feminism, Phule-Periyar-Ambedkar se nikal kar Mandal aur Dalit Panthers tak ka safar, Garibon Ka Paryavaranvad aur extractive development triangle (Niyamgiri, Hasdeo), tatha Myron Weiner ke Sons of the Soil aur North-East ke autonomy accords ka vistrit samajshastriya vishleshan.',
  studySequence: [
    {
      step: '1. Master Agrarian Transitions',
      detail:
        'Contrast colonial peasant insurrections (Tebhaga, Telengana) refuting Barrington Moore with the 1980s terms-of-trade movements (BKU, Shetkari) and the 2020–21 anti-deregulation coalition.',
    },
    {
      step: '2. Analyze Gender & Subaltern Intersections',
      detail:
        'Trace Radha Kumar’s four historical phases, evaluate Madhu Kishwar’s critique of Gandhi’s moral idioms, and master Gopal Guru and Sharmila Rege’s Dalit Feminist Standpoint.',
    },
    {
      step: '3. Compare Anti-Caste & Backward Class Assertions',
      detail:
        'Examine Phule, Periyar, and Ambedkar’s emancipatory foundations; contrast Dravidian cultural counter-hegemony with North Indian Mandal mobilization, evaluating Omvedt and Shah’s electoral co-optation thesis.',
    },
    {
      step: '4. Decipher Environmentalism of the Poor',
      detail:
        'Distinguish Southern livelihood struggles from Western post-materialism (Guha/Martinez-Alier), contrast Guha-Gadgil’s three strands with Bina Agarwal’s feminist environmentalism, and analyze the extractive triangle in Niyamgiri and Hasdeo.',
    },
    {
      step: '5. Unpack Ethnicity & Sons of the Soil',
      detail:
        'Apply Myron Weiner’s structural conditions of nativism, evaluate Sanjib Baruah’s cosmetic federalism in the North-East, and substantiate how ethnic rhetoric camouflages material resource competition.',
    },
    {
      step: '6. Practise 20 Solved PYQs',
      detail:
        'Master all 20 previous years’ examination questions (2014–2024) across English and Hinglish with balanced introductions, sociological thinkers, empirical case studies, and structured conclusions.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Kisaan Sangharsh Ke Badlav Ko Samjho',
      detail:
        'Colonial daur ke Tebhaga aur Telengana vidrohon (Kathleen Gough) se shuru karke 1980s ke terms-of-trade morche (Sharad Joshi) aur 2020–21 ke teen krishi kanoon virodhi morche ka structural farak samjho.',
    },
    {
      step: '2. Mahila Aandolan Aur Dalit Feminism Dekho',
      detail:
        'Radha Kumar ke chaar aitihasik charnon ko revise karo, Gandhi ji ke moral idioms par Madhu Kishwar ka critique dekho, aur Gopal Guru tatha Sharmila Rege ke Dalit Feminist Standpoint ko master karo.',
    },
    {
      step: '3. Dalit Aur Pichhde Vargon Ki Ladai Compare Karo',
      detail:
        'Phule, Periyar aur Ambedkar ki jaati-virodhi chetna samjho; Dakshin ke Dravidian morche aur North India ke Mandal daur ki tulna karo, aur Gail Omvedt-Ghanshyam Shah ka electoral co-optation thesis padho.',
    },
    {
      step: '4. Garibon Ka Paryavaranvad Master Karo',
      detail:
        'Guha aur Martinez-Alier ke "Environmentalism of the Poor" ko samjho, Guha-Gadgil ke teen dhaare aur Bina Agarwal ke feminist environmentalism ko revise karo, tatha Niyamgiri aur Hasdeo ka extractive triangle dekho.',
    },
    {
      step: '5. Nrijatiyata Aur Sons of the Soil Ko Decode Karo',
      detail:
        'Myron Weiner ke shehari nativism ke chaar kaaran, Sanjib Baruah ka "cosmetic federalism" aur ethnic dushmani ke peeche zameen aur theke ki asli aarthik ladai ko samjho.',
    },
    {
      step: '6. 20 PYQs Ki Practice Karo',
      detail:
        'Sabhi 20 previous year questions (2014–2024) ko English aur Roman-script Hinglish mein intro, thinkers, ground examples aur structured conclusion ke saath solve karo.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p2-u13-01-indian-social-movements.webp',
      title: 'Peasant, Women & Dalit Movements',
      titleHinglish: 'Peasant, Women & Dalit Movements — Quick Visual',
      badge: '01/02 · Visual Map',
      badgeHinglish: '01/02 · Visual Map',
      alt: 'P2 Unit 13 infographic: Peasant, Women & Dalit Movements — Peasants, Women & Dalit Assertions in Modern India',
      caption:
        'Peasants, Women & Dalit Assertions in Modern India (Peasant, Women & Dalit Movements).',
      captionHinglish:
        'Peasants, Women & Dalit Assertions in Modern India — Peasant, Women & Dalit Movements ka visual saransh.',
    },
    {
      assetFile: 'p2-u13-02-ecology-identity-movements.webp',
      title: 'Environmental & Identity Movements',
      titleHinglish: 'Environmental & Identity Movements — Quick Visual',
      badge: '02/02 · Visual Map',
      badgeHinglish: '02/02 · Visual Map',
      alt: 'P2 Unit 13 infographic: Environmental & Identity Movements — Environmentalism of the Poor & Ethno-Identity Struggles',
      caption:
        'Environmentalism of the Poor & Ethno-Identity Struggles (Environmental & Identity Movements).',
      captionHinglish:
        'Environmentalism of the Poor & Ethno-Identity Struggles — Environmental & Identity Movements ka visual saransh.',
    },
  ],
  topics: [
    topic1PeasantsFarmers,
    topic2WomensMovement,
    topic3BackwardClassesDalit,
    topic4EnvironmentalMovements,
    topic5EthnicityIdentity,
  ],
}

export default unit23Notebook
