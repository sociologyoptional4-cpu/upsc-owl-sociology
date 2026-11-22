import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1DefinitionalProblems } from './topic-1'
import { topic2GeographicalSpread } from './topic-2'
import { topic3ColonialPolicies } from './topic-3'
import { topic4IntegrationAndAutonomy } from './topic-4'

const unitMindMap: MindMapData = {
  title: 'Paper 2 · Unit 5 — Tribal Communities in India',
  center: 'Tribal Communities in India',
  subtitle: 'Definitional Debates • Spatial Spread • Colonial Rupture • Integration & Autonomy',
  branches: [
    {
      title: '1. Definitional Problems & Continuum',
      color: 'lavender',
      thinkers: ['F.G. Bailey', 'Surajit Sinha', 'André Béteille', 'N.K. Bose'],
      points: [
        'Colonial isolationist categories vs. millennia of Janajati-Jati civilizational interaction',
        'Tribe-Caste Continuum: Bailey’s structural command over land vs. Sinha’s Rajputisation',
        'Critique of Lokur Committee (1965) criteria: archaic stereotypes and penalized mobility',
        'Particularly Vulnerable Tribal Groups (PVTGs): 75 communities facing acute demographic risk',
      ],
    },
    {
      title: '2. Geographical & Ecological Spread',
      color: 'yellow',
      thinkers: ['Virginius Xaxa', 'Julian Steward', 'Christoph von Fürer-Haimendorf'],
      points: [
        'Demographics: 10.42 crore STs (8.6% of population as per Census 2011) across 705 communities',
        'Virginius Xaxa five zones: Central (52.5%), Western (27.6%), NE (14.4%), Southern (5.3%), Island (0.1%)',
        'Contrast: Central India Fifth Schedule minority status vs. North-East Sixth Schedule autonomy',
        'Diverse ecological adaptations: Foraging bands, jhum cultivation, settled farming, transhumance',
      ],
    },
    {
      title: '3. Colonial Rupture & Forest Enclosures',
      color: 'mint',
      thinkers: ['Karl Marx', 'Ramachandra Guha', 'Madhav Gadgil', 'Birsa Munda'],
      points: [
        'Eminent Domain & Terra Nullius: Forest Acts of 1865, 1878, 1927 criminalized customary rights',
        'Administrative segregation: Scheduled Districts Act (1874) to GOI Act 1935 Excluded Areas',
        'The predatory Diku-sahukar nexus, usury traps, and bonded serfdom (Begar/Kamiya)',
        'Militant explosions: Santhal Hool (1855) and Birsa Munda’s Ulgulan (1899); FRA (2006) redressal',
      ],
    },
    {
      title: '4. Integration, Development & Autonomy',
      color: 'pink',
      thinkers: ['Verrier Elwin', 'G.S. Ghurye', 'Jawaharlal Nehru', 'Walter Fernandes'],
      points: [
        'The foundational debate: Elwin’s Isolation vs. Ghurye’s Assimilation vs. Nehru’s Integration',
        'Nehru’s Tribal Panchsheel (1958): Non-imposition, land-forest rights, and local team leadership',
        'Pathology of development: STs are 8.6% of population but account for 47% of displaced persons',
        'Subaltern assertion: Autonomy struggles and the Sarna Religion Code movement for nature worship',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 2 · Unit 5 — Tribal Communities in India',
  center: 'Bharat Ke Tribal Samuday',
  subtitle: 'Definitional Uljhan • Bhaugolik Phailav • Colonial Loot • Integration v Autonomy',
  branches: [
    {
      title: '1. Definitional Uljhan & Continuum',
      color: 'lavender',
      thinkers: ['F.G. Bailey', 'Surajit Sinha', 'André Béteille', 'N.K. Bose'],
      points: [
        'Colonial isolation model banam Janajati-Jati ka hazaron saal purana civilizational rishta',
        'Tribe-Caste Continuum: Bailey ka zameen par kabza banam Surajit Sinha ka Rajputisation model',
        'Lokur Committee (1965) ke paimanon par aitraaz: tarakki karne walon ko saza aur purani soch',
        'Particularly Vulnerable Tribal Groups (PVTGs): 75 kamzor samuday jo aabadi girne se joojh rahe hain',
      ],
    },
    {
      title: '2. Bhaugolik & Paryavaraniya Phailav',
      color: 'yellow',
      thinkers: ['Virginius Xaxa', 'Julian Steward', 'Christoph von Fürer-Haimendorf'],
      points: [
        'Aabadi: 2011 Census ke mutabiq 10.42 crore STs (kul aabadi ka 8.6%) 705 se zyada kabilo mein',
        'Virginius Xaxa ke 5 kshetra: Central (52.5%), Western (27.6%), NE (14.4%), South (5.3%), Island (0.1%)',
        'Farq: Central India Fifth Schedule minority banam North-East Sixth Schedule ki kanooni azaadi',
        'Paryavaran rozi-roti: Kanda-mool shikar, jhum kheti, hal wali kheti aur ghumantu charwahi',
      ],
    },
    {
      title: '3. Colonial Loot & Jungle Kanoon',
      color: 'mint',
      thinkers: ['Karl Marx', 'Ramachandra Guha', 'Madhav Gadgil', 'Birsa Munda'],
      points: [
        'Eminent Domain: 1865, 1878 aur 1927 ke Forest Acts ne aadiwasiyon ko ghuspaithiya banaya',
        'Segregation: Scheduled Districts Act (1874) se lekar GOI Act 1935 ke Excluded Areas tak',
        'Dikus aur sahukaron ki loot: 50-200% byaj, zameen chhinna aur begar-bandhua mazdoori',
        'Hatyarband vidroh: Santhal Hool (1855) aur Birsa Munda ka Ulgulan; FRA (2006) ka aitihasik nyay',
      ],
    },
    {
      title: '4. Integration, Vikas & Autonomy',
      color: 'pink',
      thinkers: ['Verrier Elwin', 'G.S. Ghurye', 'Jawaharlal Nehru', 'Walter Fernandes'],
      points: [
        'Aitihasik behes: Elwin ka Isolation banam Ghurye ka Assimilation banam Nehru ka Integration',
        'Nehru ka Panchsheel (1958): Apne dhang se vikas, jungle-zameen ka aadar aur local leadership',
        'Vikas ka shoshan: 8.6% aabadi hone ke bawajood dams-mines se 47% be-dakhal aadiwasi the',
        'Astitva ki aawaz: Bodoland-Jharkhand rajya aur Census mein Sarna Religion Code ki maang',
      ],
    },
  ],
}

export const unit15Notebook: UnitNotebookSpec = {
  paperCode: 'P2',
  unitSlug: 'tribal-communities-in-india',
  overview:
    'Unit 5 provides an exhaustive sociological examination of India’s tribal communities. It deconstructs colonial definitional categories through the Tribe-Caste Continuum, maps regional and ecological diversity via the Virginius Xaxa classification, interrogates the devastating impacts of colonial forest enclosure and usurious diku exploitation, and critically evaluates post-independence development trajectories—from Nehru’s Tribal Panchsheel and development-induced displacement to contemporary subaltern assertions for regional autonomy and the Sarna religious code.',
  overviewHinglish:
    'Unit 5 Bharat ke tribal samudayon ka gahan samaj-shastriya vishleshan pesh karta hai. Yeh colonial paribhashaon ko Tribe-Caste Continuum ke zariye dismantle karta hai, Virginius Xaxa ke paanch-zone model se bhaugolik aur paryavaraniya phailav ko darshata hai, angrezi jungle kanoonon aur shoshankari dikus ke atyachar ko kholta hai, aur azaadi ke baad ke vikas—Nehru ke Tribal Panchsheel aur be-dakhli ke dard se lekar aaj ke Sarna dharam code aur rajneetik azaadi ke andolanon tak—ka vishleshan karta hai.',
  studySequence: [
    {
      step: '1. Master Definitional Dilemmas & Continuum',
      detail:
        'Contrast colonial isolationist categories with Indian civilizational realities; analyze Bailey’s structural continuum, Sinha’s Rajputisation, critique the 1965 Lokur criteria, and examine PVTG vulnerabilities.',
    },
    {
      step: '2. Map Regional Spread & Ecological Niches',
      detail:
        'Examine Virginius Xaxa’s five-zone classification (Central 52.5%, Western 27.6%, NE 14.4%, Southern 5.3%, Island 0.1%), contrast Central Indian 5th Schedule areas with North-Eastern 6th Schedule autonomy, and explore cultural ecology.',
    },
    {
      step: '3. Analyze Colonial Rupture & Forest Enclosures',
      detail:
        'Trace the legal enclosure of forests through Eminent Domain (1865, 1878, 1927 Acts), analyze the policy of segregation (Excluded Areas), examine the predatory Diku nexus triggering the Santhal Hool and Birsa Munda’s Ulgulan, and evaluate the Forest Rights Act (2006).',
    },
    {
      step: '4. Evaluate Integration, Displacement & Autonomy',
      detail:
        'Deconstruct the classic Elwin-Ghurye debate, analyze Nehru’s 1958 Tribal Panchsheel, scrutinize development-induced displacement (Walter Fernandes) and Xaxa Committee findings, and examine contemporary assertions for the Sarna Religion Code.',
    },
    {
      step: '5. Practice All 16 Unit PYQs (2013–2024)',
      detail:
        'Master model answers for all 16 UPSC questions across the four topics in both English and Hinglish, applying structural frameworks, empirical case studies, and conceptual linkages.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Definitional Uljhan Aur Continuum Ko Samjho',
      detail:
        'Colonial isolation model ko civilizational sachai se alag karo; Bailey ke continuum, Sinha ke Rajputisation, Lokur committee ke paimanon ki kamiyon aur 75 PVTGs ke sankat ko aasaan bhasha mein pakdo.',
    },
    {
      step: '2. Bhaugolik Phailav Aur Paryavaran Ka Naksha Dekho',
      detail:
        'Virginius Xaxa ke paanch zones (Central 52.5%, Western 27.6%, NE 14.4%, South 5.3%, Island 0.1%) ko samjho, Central India ke 5th Schedule aur North-East ke 6th Schedule ke farq ko jaano, aur cultural ecology ko dekho.',
    },
    {
      step: '3. Colonial Loot Aur Jungle Kanoon Ka Vishleshan Karo',
      detail:
        'Eminent Domain ke tehat 1865, 1878 aur 1927 ke Forest Acts, Excluded Areas ki segregation neeti, Dikus aur sahukaron ki loot se Santhal Hool v Birsa Munda ke Ulgulan ka aagaz, aur 2006 ke Forest Rights Act ko master karo.',
    },
    {
      step: '4. Integration, Displacement Aur Autonomy Ko Evaluate Karo',
      detail:
        'Elwin-Ghurye vivaad, Nehru ke 1958 ke Tribal Panchsheel, development-induced displacement (Walter Fernandes) aur Xaxa report ke khulason ko samjho, aur Sarna code v autonomy andolanon ka vishleshan karo.',
    },
    {
      step: '5. Sabhi 16 Unit PYQs (2013–2024) Solve Karo',
      detail:
        'Chaar topics ke sabhi 16 UPSC sawaalon ko English aur natural Hinglish mein structured model answers ke sath taiyar karo, jisme thinkers aur empirical examples shamil hon.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p2-u05-01-tribes-spread-policies.webp',
      title: 'Tribes: Spread & Colonial Impact',
      titleHinglish: 'Tribes: Spread & Colonial Impact — Quick Visual',
      badge: '01/02 · Visual Map',
      badgeHinglish: '01/02 · Visual Map',
      alt: 'P2 Unit 5 infographic: Tribes: Spread & Colonial Impact — Definitional Debates, Geographical Zones & Colonial Rupture',
      caption: 'Definitional Debates, Geographical Zones & Colonial Rupture (Tribes: Spread & Colonial Impact).',
      captionHinglish:
        'Definitional Debates, Geographical Zones & Colonial Rupture — Tribes: Spread & Colonial Impact ka visual saransh.',
    },
    {
      assetFile: 'p2-u05-02-tribal-integration-panchsheel.webp',
      title: 'Isolation, Assimilation & Integration',
      titleHinglish: 'Isolation, Assimilation & Integration — Quick Visual',
      badge: '02/02 · Visual Map',
      badgeHinglish: '02/02 · Visual Map',
      alt: 'P2 Unit 5 infographic: Isolation, Assimilation & Integration — Elwin vs Ghurye to Tribal Panchsheel & Autonomy',
      caption: 'Elwin vs Ghurye to Tribal Panchsheel & Autonomy (Isolation, Assimilation & Integration).',
      captionHinglish:
        'Elwin vs Ghurye to Tribal Panchsheel & Autonomy — Isolation, Assimilation & Integration ka visual saransh.',
    },
  ],
  topics: [
    topic1DefinitionalProblems,
    topic2GeographicalSpread,
    topic3ColonialPolicies,
    topic4IntegrationAndAutonomy,
  ],
}

export default unit15Notebook
