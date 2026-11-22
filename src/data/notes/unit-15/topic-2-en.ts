import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

const summary =
  'Maps the demographic, regional, and ecological spread of India’s tribal population. Examines the Virginius Xaxa Committee’s five-fold classification, contrasts Central Indian Fifth Schedule areas with North-Eastern Sixth Schedule autonomy, analyzes how diverse ecological habitats shape tribal livelihoods, and deconstructs linguistic and racial heterogeneity across India’s major tribal belts.'

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 2 — Geographical Spread & Cultural Diversity of Indian Tribes',
  center: 'Geographical Spread & Diversity',
  subtitle: 'Xaxa 5-Zone Model • Central vs NE Contrast • Ecological Livelihoods • Linguistic Belts',
  branches: [
    {
      title: '1. Demographic Scale & Xaxa’s 5 Zones',
      color: 'lavender',
      thinkers: ['Virginius Xaxa', 'B.S. Guha', 'K.S. Singh', 'Nirmal Kumar Bose'],
      points: [
        'Census 2011: 10.42 crore Scheduled Tribes constituting 8.6% of India’s total population',
        'Central Region (52.5%): MP, Chhattisgarh, Jharkhand, Odisha — mineral heartland, highest displacement',
        'Western Region (27.6%): Rajasthan, Gujarat, Maharashtra — Bhils, Meenas; high agrarian integration',
        'NE & Himalayan (14.4%), Southern (5.3%), and Island (0.1%) complete Xaxa’s spatial framework',
      ],
    },
    {
      title: '2. Central India vs. North-East Contrast',
      color: 'yellow',
      thinkers: ['Verrier Elwin', 'Myron Weiner', 'Walter Fernandes', 'Sanjib Baruah'],
      points: [
        'Central India (Fifth Schedule): STs are regional minorities (10–30%) surrounded by non-tribal majorities',
        'North-East (Sixth Schedule): Tribals form overwhelming majorities (70–95%) in hill states like Mizoram',
        'Institutional power: Sixth Schedule ADCs hold legislative teeth; Fifth Schedule TACs remain toothless',
        'Diku penetration: Massive corporate mining influx in Central India vs. Inner Line Permit protection in NE',
      ],
    },
    {
      title: '3. Ecological Livelihoods & Culture',
      color: 'mint',
      thinkers: ['Julian Steward', 'Christoph von Fürer-Haimendorf', 'L.P. Vidyarthi', 'Madhav Gadgil'],
      points: [
        'Forest foraging: Jarawas and Birhors maintain egalitarian band ethics and sacred grove veneration',
        'Shifting cultivation (Jhum): Nagas and Garos organize labor through youth dormitories and village councils',
        'Settled agriculture: Santhals and Mundas developed village headmanship (Manjhi/Munda) and seasonal festivals',
        'Transhumance pastoralism: Gaddis and Bakarwals migrate seasonally across fragile alpine meadows',
      ],
    },
    {
      title: '4. Linguistic & Racial Heterogeneity',
      color: 'pink',
      thinkers: ['George Grierson', 'Suniti Kumar Chatterji', 'B.S. Guha', 'Herbert Risley'],
      points: [
        'Austro-Asiatic: Santhali, Mundari, Ho, and Khasi — ancient linguistic stratum with prefixing morphology',
        'Tibeto-Burman: Over 100 dialects spoken by Naga, Mizo, Bodo, and Himalayan borderland communities',
        'Dravidian tribal tongues: Gondi, Kurukh (Oraon), and Toda spoken across central and southern highlands',
        'Sociological deconstruction: Rejection of colonial racial typologies in favor of adaptive genetic continuums',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u05-01-tribes-spread-policies.webp',
    alt: 'P2 Unit 5 infographic: Tribes: Spread & Colonial Impact — Definitional Debates, Geographical Zones & Colonial Rupture',
    caption:
      'Geographical Zones & Ecological Niches: Mapping the territorial distribution, administrative scheduling, and economic diversity of India’s tribal belts.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 15 Visual 01',
  },
  {
    kind: 'md',
    body: `## Demographic Scale & Virginius Xaxa’s Five-Region Classification

To understand the sociology of tribal India, one must first appreciate its staggering demographic scale and geographical diversity. According to the **2011 Census of India**, Scheduled Tribes number **10.42 crore (104.2 million) individuals**, accounting for **8.6% of the country's total population**. This demographic mass is larger than the total population of many large European nations, spread across more than 705 distinct officially recognized communities. Indian tribes are not concentrated in a single enclave; they inhabit mountain ridges, deep river valleys, coastal archipelagos, and semi-arid deserts.

In 2014, the High-Level Committee on Socio-Economic, Health, and Educational Status of Tribal Communities of India, chaired by sociologist [[thinker:Virginius Xaxa]], formulated a comprehensive five-region classification based on regional concentration, ecological context, and historical administrative trajectory:

| Region | Geographic Coverage | Share of ST Population | Representative Tribal Communities | Primary Ecological Livelihood |
|---|---|---|---|---|
| **Central Region** | Madhya Pradesh, Chhattisgarh, Jharkhand, Odisha, Andhra Pradesh, Telangana | **52.5%** | Gond, Santhal, Munda, Oraon, Ho, Baiga, Kol | Settled agriculture, forest produce gathering, mining labor |
| **Western Region** | Rajasthan, Gujarat, Maharashtra, Goa, Dadra & Nagar Haveli | **27.6%** | Bhil, Meena, Garasia, Warli, Katkari, Dhodia | Settled plow farming, urban wage employment, pastoralism |
| **Himalayan / North-Eastern** | Assam, Meghalaya, Nagaland, Mizoram, Manipur, Arunachal, Tripura, Sikkim, J&K, HP, Uttarakhand | **14.4%** | Naga, Mizo, Khasi, Garo, Bodo, Gaddi, Gujjar-Bakarwal | Shifting cultivation (*jhum*), terrace farming, transhumance |
| **Southern Region** | Tamil Nadu, Karnataka, Kerala | **5.3%** | Toda, Kota, Kurumba, Irula, Kadar, Chenchu | Forest gathering, tea plantation labor, small-scale farming |
| **Island Region** | Andaman and Nicobar Islands, Lakshadweep | **0.1%** | Great Andamanese, Onge, Jarawa, Sentinelese, Nicobarese | Marine fishing, coconut cultivation, hunting-gathering |

The **Central Region** forms the demographic backbone of tribal India, housing more than half of the country's Scheduled Tribe population. Paradoxically, this region is also India's richest mineral belt—containing vast deposits of coal, bauxite, iron ore, and chromite—making its inhabitants the prime victims of post-independence industrial displacement.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Central Indian Scheduled Areas (Fifth Schedule)',
    rightTitle: 'North-Eastern Tribal Belts (Sixth Schedule)',
    rows: [
      {
        aspect: 'Demographic Proportion',
        left: 'Tribals are a regional minority (10% to 30% of state population) surrounded by non-tribal majorities.',
        right: 'Tribals constitute an overwhelming majority (70% to 94% in Mizoram, Nagaland, Meghalaya).',
      },
      {
        aspect: 'Institutional Autonomy',
        left: 'Tribes Advisory Councils (TAC) are purely advisory; state cabinet and Governor hold dominant executive control.',
        right: 'Autonomous District Councils (ADCs) hold extensive statutory legislative, judicial, and taxation powers.',
      },
      {
        aspect: 'Diku Influx & Land Protection',
        left: 'Massive influx of outsiders (dikus) for mining, industry, and commerce; widespread land alienation.',
        right: 'Protected by Inner Line Permit (ILP) and Articles 371A/371G; non-tribals strictly barred from buying land.',
      },
      {
        aspect: 'Historical Integration',
        left: 'Millennia of close economic and ritual interaction with caste society along the Tribe-Caste Continuum.',
        right: 'Historically isolated from Brahminical caste society; converted to Christianity via modern missionary schools.',
      },
      {
        aspect: 'Political Mobilization',
        left: 'Mobilization against economic exploitation, land grabs, displacement, and for cultural recognition (Sarna code).',
        right: 'Mobilization around ethnic nationalism, regional sovereignty, territorial accords, and border governance.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Ecological Niches and the Spectrum of Tribal Livelihoods

Sociologists analyze tribal cultural diversity not as accidental folklore, but as a dynamic functional adaptation to specific ecological niches. In simple terms, whether a community hunts wild game, cuts hillside plots for shifting crops, or grazes sheep across alpine passes directly determines its family structure, religious rituals, and political leadership. As ecological anthropologist [[thinker:Julian Steward]] demonstrated through his theory of *Cultural Ecology*, the core social institutions of any society are intimately organized around its techno-economic utilization of the environment:

### 1. Forest Foragers and Hunters: The Band Ethos
Small foraging bands like the **Jarawas and Sentinelese** of the Andamans, the **Birhors** of the Chota Nagpur forests, and the **Chenchus** of the Nallamala hills survive by gathering edible tubers, wild honey, and hunting small game. Because nature does not provide a durable economic surplus, these societies maintain an intensely egalitarian social order. They lack hereditary chiefs, share hunted food communally, and venerate the forest as a living parent. [[eg:The Birhor maintain nomadic forest camps (*tandas*) that disband and relocate whenever local wild yam and monkey populations require seasonal ecological regeneration.]]

### 2. Shifting Cultivators: Communal Jhum and Youth Dormitories
In the forested hills of the Northeast and Central India, communities like the **Nagas, Garos, and Baigas** historically practiced ==Jhum== or slash-and-burn cultivation. Because clearing dense forest slopes requires intense collective physical labor, land was owned by the entire village clan rather than private individuals. Communal cooperation was reinforced through customary institutions like youth dormitories (*Morung* among Nagas, *Ghotul* among Muria Gonds) where young men and women learned cooperative farming techniques, folklore, and civic duties.

### 3. Settled Plow Cultivators: Agricultural Village Hierarchies
Large tribal communities like the **Santhals, Mundas, Oraons, and Bhils** transitioned over centuries into settled plow agriculture. Farming permanent valley fields generated a reliable food surplus, which in turn spurred population growth and the emergence of hereditary village headmen (*Manjhi* among Santhals, *Munda* and *Pahan* among Mundas). Their religious calendar reorganized around agricultural seasons, giving rise to nature festivals like ==Sarhul== (spring sal-tree flowering) and ==Karma== (paddy harvest).

### 4. Transhumance Pastoralists: The Rhythm of High Altitudes
In the Western Himalayas, communities like the **Gaddis of Himachal Pradesh** and the **Bakkarwals of Jammu & Kashmir** practice seasonal transhumance. In summer, they ascend with thousands of sheep and goats to lush alpine pastures above the tree line; when winter snows carpet the ridges, they descend to lowland valleys. Their social organization revolves around mobile clan encampments (*deras*), specialized wool-weaving crafts, and deep ecological knowledge of mountain weather.`,
  },
  {
    kind: 'flow',
    direction: 'vertical',
    steps: [
      {
        label: 'Ecological Habitat & Terrain',
        text: 'Dense tropical forests, rocky plateaus, steep monsoon slopes, or sub-alpine Himalayan ridges.',
      },
      {
        label: 'Techno-Economic Mode of Subsistence',
        text: 'Foraging and hunting, slash-and-burn jhum plots, settled ox-plow agriculture, or migratory herding.',
      },
      {
        label: 'Social & Political Institutions',
        text: 'Egalitarian foraging bands, communal youth dormitories (Morung/Ghotul), or hereditary village headmen.',
      },
      {
        label: 'Religious Cosmologies & Rituals',
        text: 'Animist forest spirits, sacred sal-tree groves (Sarna), seasonal harvest rites (Sarhul), or sacred pastoral buffalo cults.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Linguistic and Racial Heterogeneity Across India’s Tribal Belts

Colonial administrators frequently treated Indian tribals as a single racial and linguistic monolith, but sociological research reveals profound internal heterogeneity. Linguist [[thinker:George Grierson]]’s monumental *Linguistic Survey of India* and subsequent ethnographic mappings proved that India’s tribal belts encompass four distinct linguistic families:

1. **Austro-Asiatic Language Family:** Spoken primarily by Central and Eastern Indian tribes, including the **Santhali, Mundari, Ho, Korku, and the Khasi** of Meghalaya. Sociolinguists consider this to be one of the oldest linguistic strata in South Asia, characterized by prefixing morphology and intimate vocabularies for indigenous flora and fauna.
2. **Tibeto-Burman Language Family:** Spoken across the Himalayan rim and the North-Eastern frontier by over a hundred distinct tribes, including the **Nagas, Mizos, Garos, Bodos, Lepchas, and Ladakhis**. These languages are tonal, featuring rich oral epic poetry and distinct script traditions.
3. **Dravidian Language Family:** Spoken by major central and southern highland communities, such as the **Gonds (Gondi), Oraons (Kurukh), Mal Paharias, and the Nilgiri Todas**. Despite their geographic separation from southern plains cities, their languages share deep structural roots with classical Dravidian syntax.
4. **Indo-Aryan Language Family:** Spoken by tribes that have undergone centuries of intense agrarian assimilation with northern peasant communities, such as the **Bhils (Bhili), Meenas, Banjaras, and Tharus**.

### Deconstructing Colonial Racial Categories

In late 19th-century colonial ethnography, anthropometrists like [[thinker:Herbert Risley]] and physical anthropologists like **B.S. Guha** classified Indian tribes into rigid racial types: *Proto-Australoid* (Central Indian Gonds and Santhals, characterized by wavy hair and broad noses), *Mongoloid* (Northeastern tribes with epicanthic eye folds), and *Negrito* (remnant island populations like the Great Andamanese and Kadar).

Modern sociological and genetic research has thoroughly debunked these static colonial racial typologies. As physical anthropologist **André Béteille** and contemporary geneticists have established, human populations in India represent complex genetic continuums shaped by thousands of years of migration, inter-community marriage, and climatic adaptation. What colonial administrators labeled as "racial backwardness" was simply physical adaptation to tropical forest sunlight, endemic malaria, and highland oxygen pressures.`,
  },
  {
    kind: 'keyTerm',
    term: 'Virginius Xaxa Five-Zone Model',
    meaning:
      'Comprehensive sociological classification dividing Indian tribes into Central (52.5%), Western (27.6%), NE/Himalayan (14.4%), Southern (5.3%), and Island (0.1%) regions based on ecology and history.',
  },
  {
    kind: 'keyTerm',
    term: 'Fifth vs. Sixth Schedule',
    meaning:
      'Constitutional division where Fifth Schedule covers advisory governance in Central India, while Sixth Schedule grants statutory legislative and judicial autonomy to North-Eastern hill districts.',
  },
  {
    kind: 'keyTerm',
    term: 'Cultural Ecology',
    meaning:
      'Julian Steward’s anthropological framework demonstrating that social organization, kinship, and ritual patterns develop as functional adaptations to specific ecological subsistence environments.',
  },
  {
    kind: 'keyTerm',
    term: 'Transhumance',
    meaning:
      'A pastoral survival strategy of seasonal migratory movement between lowland winter valleys and high alpine summer pastures, practiced by Himalayan tribes like Gaddis and Bakkarwals.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Paper 1 ↔ Paper 2 Integration: Cultural Ecology & Environmental Adaptation',
    body: 'When answering questions on tribal diversity, integrate Paper 1 ecological sociology. Show that tribal dances, festivals, and clan institutions are not merely aesthetic entertainment, but functional survival mechanisms that regulate communal forest resources and maintain ecological equilibrium.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Confusing Demographic Proportions with Absolute Numbers',
    body: 'Never confuse state percentages with absolute tribal population. Mizoram has the highest tribal percentage among states (~94.4%) and Lakshadweep among UTs (~94.8%), but Madhya Pradesh has the largest absolute tribal population in India (over 1.53 crore). Always cite both metrics clearly in answers.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Mnemonic: Xaxa’s 5 Regional Shares (C-W-H-S-I)',
    body: 'Memorise Xaxa’s 5 regions in descending order: Central (52.5%), Western (27.6%), Himalayan/NE (14.4%), Southern (5.3%), and Island (0.1%). Acronym: CWHSI.',
  },
  {
    kind: 'answerBox',
    intro:
      'The regional and ecological distribution of tribal communities in India reflects a complex spatial tapestry where geography, resource wealth, and historical isolation have shaped diverse developmental outcomes.',
    points: [
      'Demographic magnitude: With 10.42 crore individuals (8.6% of India’s population as per Census 2011), Scheduled Tribes represent an enormous, internally diverse demographic constituency.',
      'Virginius Xaxa’s five zones: Categorized India into Central (52.5%), Western (27.6%), Himalayan/NE (14.4%), Southern (5.3%), and Island (0.1%) regions based on spatial concentration and ecology.',
      'Central Indian vulnerability: Comprising over half the tribal population, Central India holds the nation’s mineral core, experiencing devastating developmental displacement and land alienation.',
      'North-Eastern autonomy contrast: Unlike Central India’s minority status, North-Eastern hill tribes constitute demographic majorities protected by Sixth Schedule Autonomous District Councils and Inner Line Permits.',
      'Ecological livelihood spectrum: Techno-economic adaptations range from hunter-gatherer bands (Birhor, Chenchu) and shifting cultivators (Nagas, Garos) to settled farmers (Santhals) and pastoralists (Gaddis).',
      'Linguistic richness: Four language families (Austro-Asiatic, Tibeto-Burman, Dravidian, Indo-Aryan) disprove colonial racial uniformity, demonstrating centuries of civilizational adaptation.',
    ],
    conclusion:
      'A uniform tribal policy is sociological folly; developmental interventions must be custom-tailored to the distinct ecological, demographic, and constitutional realities of each region.',
  },
]

export const topic2En = {
  summary,
  mindMap,
  sections,
}
