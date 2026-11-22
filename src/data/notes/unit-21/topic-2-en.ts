import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic2EnMindMap: MindMapData = {
  title: 'Topic 2 · Growth of Urban Settlements in India',
  center: 'Growth of Urban Settlements',
  subtitle: 'Trends & Census Towns • Over-Urbanization • Caste-Kinship Replicas • M.S.A. Rao Classification',
  branches: [
    {
      title: 'Historical Trajectory & Trends',
      color: 'lavender',
      thinkers: ['Kingsley Davis', 'Ashish Bose', 'Max Weber', 'Gordon Childe'],
      points: [
        'Urban trajectory: Harappan bronze age to Second Urbanization to colonial port gateways',
        'Top-heavy urbanization: concentration in Class-I million-plus metropolitan cities',
        'Distress push vs industrial pull: agrarian crises driving rural-to-urban displacement',
        'Census 2011 watershed: 31.16% urban, absolute urban decadal increase surpassing rural',
      ],
    },
    {
      title: 'The Census Town Explosion',
      color: 'yellow',
      thinkers: ['Kanhu Charan Pradhan', 'Partha Mukhopadhyay', 'Eric Denis'],
      points: [
        'Tripartite criteria: 5,000 population, 400 persons/sq km, 75% male non-farm labour',
        'Subaltern urbanization: organic market towns growing without municipal governance',
        'Administrative denial: governed by Gram Panchayats to avoid urban property taxes',
        'Infrastructure deficits: rapid densification without piped sewage, water, or zoning',
      ],
    },
    {
      title: 'Over-Urbanization & Preconditions',
      color: 'mint',
      thinkers: ['Gunnar Myrdal', 'Bert Hoselitz', 'N.V. Sovani', 'Jan Breman'],
      points: [
        'Hoselitz & Sovani debate: urbanization running ahead of manufacturing industrialization',
        'Service & informal expansion: urban growth driven by tertiary hawking and construction',
        'Refuting industrial determinism: administrative, temple, and educational urban magnets',
        'Spatial segregation: luxury enclaves coexisting with unserviced informal settlements',
      ],
    },
    {
      title: 'Caste & Kinship in Urban Spaces',
      color: 'pink',
      thinkers: ['Harold Gould', 'M.S.A. Rao', 'Owen Lynch', 'M.N. Srinivas'],
      points: [
        'Gould’s Lucknow study: rickshaw pullers and clerks using jati networks for survival',
        'Replication of rural ties: caste mohallas, gotra marriages, and regional biradaris',
        'M.S.A. Rao’s three impacts: urban fringe villages, migrant supply, and remittances',
        'Segmented modernity: modern economic spaces functioning through primordial loyalties',
      ],
    },
  ],
}

export const topic2EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u11-01-urbanization-industry-flow.webp',
    alt: 'P2 Unit 11 infographic: Industry & Urban Settlements in India — Colonial Deindustrialization to Over-Urbanization',
    caption:
      'Urban growth in India exhibits a top-heavy, distress-driven pattern characterized by mushrooming Census towns and the spatial reproduction of rural caste-kinship ties within modern cities.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 21 Visual 01',
  },
  {
    kind: 'md',
    body: `## The Pattern and Trends of Urbanization in India

Urbanization in India is not merely a demographic shift of rural agriculturalists moving into modern brick-and-mortar cities; it is an intricate sociological process marked by structural contradictions. Unlike the Western experience where industrial factory expansion pulled workers into well-serviced manufacturing hubs, India's urban transition has been characterized by demographer [[thinker:Ashish Bose]] as a process driven largely by **rural distress push** rather than **urban economic pull**.

According to the Census of 2011, India's urban population stood at 377 million (31.16% of the total population). Crucially, for the first time in Indian demographic history, the absolute decadal increase in the urban population (91 million) exceeded the absolute increase in the rural population (90.5 million).

### Structural Features of Indian Urban Growth
1. **Top-Heavy (Macrocephalic) Urbanization**: Urban growth is heavily skewed toward Class-I cities (population over 100,000) and million-plus metropolitan agglomerations like Greater Mumbai, Delhi NCR, Kolkata, Bengaluru, and Chennai. Smaller Class-IV to Class-VI secondary towns have suffered economic stagnation.
2. **Subaltern Urbanization**: Researchers like Partha Mukhopadhyay and Kanhu Charan Pradhan have highlighted the dramatic rise of small, independent urban settlements outside the shadows of major metropolises.
3. **Informal and Tertiary Primacy**: Urban employment expansion has occurred overwhelmingly in unorganized services, construction, logistics, and gig economies rather than organized factory manufacturing.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'First Urbanization (2500–1700 BCE)',
        text: 'Indus Valley grid planning, drainage systems, and granaries at Harappa, Mohenjo-daro, and Lothal.',
      },
      {
        label: 'Second Urbanization (600 BCE)',
        text: 'Gangetic plains Mahajanapadas, iron technology, Buddhist mercantile guilds, and political capitals like Pataliputra.',
      },
      {
        label: 'Colonial Port Gateways (1800s)',
        text: 'Decline of inland artisanal towns (Dacca, Murshidabad); rise of coastal port nodes (Bombay, Calcutta, Madras).',
      },
      {
        label: 'Post-Independence & Census Towns (2000s–Present)',
        text: 'Metropolitan agglomeration, corridor sprawl, and explosion of in-situ rural-to-urban Census towns.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## The Phenomenon of Census Towns: In-Situ Urbanization

A striking revelation of the 2011 Census was that nearly one-third of the total urban growth between 2001 and 2011 was driven by the mushrooming of ==Census Towns==. The number of Census towns surged from 1,362 in 2001 to 3,894 in 2011—an astonishing increase of 186%.

In Indian administrative demography, urban centers are categorized into two distinct types:
- **Statutory Towns**: Settlements formally notified under state municipality or municipal corporation legislation, possessing municipal administration, municipal taxes, and urban master plans.
- **Census Towns**: Settlements classified as urban by the Registrar General of India based purely on demographic criteria, but administratively still governed as rural **Gram Panchayats**.

### The Tripartite Demographic Criteria for Census Towns
For a settlement to be declared a Census town, it must fulfill three conditions:
1. A minimum resident population of **5,000 persons**;
2. At least **75% of the male main working population** engaged in non-agricultural pursuits;
3. A population density of at least **400 persons per square kilometre** (1,000 per square mile).

[[eg:Rural agrarian settlements along national highways in West Bengal, Kerala, and Uttar Pradesh have organically evolved into dense commercial, warehousing, and small manufacturing hubs while formally remaining under village panchayat administration.]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Statutory Towns (Nagarpalika)',
    rightTitle: 'Census Towns (Gram Panchayat)',
    rows: [
      {
        aspect: 'Legal Status',
        left: 'Formally notified by State Government under Municipalities Act.',
        right: 'Demographically urban (Census criteria) but legally governed by Gram Panchayat.',
      },
      {
        aspect: 'Taxation & Building Rules',
        left: 'Urban property taxes levied; strict building bylaws and master plans enforced.',
        right: 'Rural tax regimes apply; minimal or zero construction zoning regulations.',
      },
      {
        aspect: 'Civic Infrastructure',
        left: 'Entitled to central/state urban development funds (e.g., AMRUT, Smart Cities).',
        right: 'Rely on rural development grants (e.g., MGNREGA); lack piped sewerage and water systems.',
      },
      {
        aspect: 'Political Motivation',
        left: 'Subject to municipal political elections (74th Constitutional Amendment).',
        right: 'Villagers and local elites resist municipal status to avoid urban taxes and regulation.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Is Industrialization the Sole Precondition for Urbanization?

In classical Western sociology, urbanization and industrialization were viewed as twin processes. [[thinker:Max Weber]] in *The City* and [[thinker:Emile Durkheim]] in *The Division of Labour in Society* linked urban concentration to industrial division of labour and organic solidarity. However, the Indian trajectory forcefully refutes this unilinear assumption.

### The Over-Urbanization Debate: Bert Hoselitz vs N.V. Sovani
- **The Over-Urbanization Thesis**: Development economists like Bert Hoselitz and Gunnar Myrdal argued that Asian countries like India suffer from ==Over-Urbanization== (or *pseudo-urbanization*). Cities grow faster than industrial employment can absorb migrants, generating massive urban poverty, underemployment, and slums.
- **N.V. Sovani’s Critique**: Indian demographer N.V. Sovani contested the Eurocentric bias of this thesis. Sovani demonstrated that urbanization in India does not require large manufacturing factories as an indispensable prerequisite.

### Alternative Drivers of Urbanization in India
1. **Distress-Driven Rural Push**: Agrarian crises, recurring droughts, land fragmentation, and caste-based humiliation push marginal peasants and landless Dalits toward cities where they subsist in informal tertiary work (street vending, rickshaw pulling, construction).
2. **Administrative and Political Hubs**: State and district capitals (e.g., Chandigarh, Gandhinagar, New Delhi) expanded as bureaucratic and administrative centers with virtually no primary heavy industry.
3. **Sacred and Pilgrimage Centers**: Ancient temple and pilgrimage cities like Varanasi, Tirupati, Puri, and Haridwar have sustained high urban densities for centuries through religious tourism, rituals, and hospitality.
4. **Educational and Health Hubs**: Towns like Kota (coaching economy) and Manipal (medical and university enclaves) grew into dense urban centers powered entirely by educational institutions and student service industries.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Evaluative Angle: Over-Urbanization',
    body: 'When evaluating whether industrialization is mandatory for urbanization, contrast classical Eurocentric theories with N.V. Sovani. Show that India experiences "tertiary-led urbanization" where informal services and distressed rural push substitute for factory industrialization.',
  },
  {
    kind: 'md',
    body: `## Sociological Persistence: Rural Caste-Kinship Imprints in Urban Settlements

A major debate in Indian urban sociology centers on whether the city acts as a secular crucible that dissolves primordial ties. [[thinker:Louis Wirth]] famously defined *Urbanism as a Way of Life*, characterizing cities by impersonality, anonymity, and the weakening of kinship. In sharp contrast, empirical field studies in India reveal that urban settlements actively replicate rural caste and kinship structures.

### Key Empirical Studies on Urban Caste Replication
1. **Harold Gould’s Lucknow Study**: In his classic study of rickshaw pullers and clerical workers in Lucknow, [[thinker:Harold Gould]] observed that when rural migrants enter the city, they do not atomize into isolated individuals. Rickshaw stands, credit networks, and living quarters are strictly organized along jati lines. Migrants use traditional kinship networks as an essential survival strategy to navigate urban vulnerability.
2. **M.S.A. Rao’s Urban Impact on Indian Villages**: In *Urbanization and Social Change*, [[thinker:M.S.A. Rao]] analyzed the multidimensional impact of expanding cities on rural structures, identifying three distinct patterns:
   - **Fringe Villages**: Villages swallowed directly into urban municipal expansion (e.g., Yadav villages in Delhi or Gurgaon). Agricultural land is sold to urban builders, creating a nouveau-riche landlord class that invests in urban rental housing while preserving strict caste endogamy.
   - **Commuter / Labour Supply Villages**: Villages situated along rail and highway corridors where rural residents commute daily to work as factory hands, peons, or construction labourers, retaining their rural homes and ancestral caste status.
   - **Out-Migration Villages**: Villages where large numbers of male migrants move to distant metropolises (e.g., Bihari migrants in Mumbai or Ludhiana). Urban remittances are channeled back to purchase rural land and finance lavish life-cycle rituals, reinforcing caste status competition (*Sanskritization*) in the village.
3. **Owen Lynch on Jatavs of Agra**: [[thinker:Owen Lynch]] (*The Politics of Untouchability*) documented how Jatav (Chamar) leather workers in Agra leveraged urban caste solidarity and residential mohallas to build political mobilization and challenge upper-caste hegemony.`,
  },
  {
    kind: 'keyTerm',
    term: 'Census Town',
    meaning:
      'A settlement classified as urban by the Census of India (>= 5,000 population, >= 75% non-farm male workforce, >= 400 density) but still legally governed as a rural Gram Panchayat.',
  },
  {
    kind: 'keyTerm',
    term: 'Over-Urbanization (Bert Hoselitz)',
    meaning:
      'A demographic imbalance where an urban population expands at a pace far exceeding the absorption capacity of formal industrial manufacturing, resulting in informal tertiary poverty.',
  },
  {
    kind: 'keyTerm',
    term: 'Subaltern Urbanization',
    meaning:
      'The organic growth of small towns and peri-urban market centers independent of major metropolitan planning and large corporate capital.',
  },
  {
    kind: 'keyTerm',
    term: 'Segmented Modernity',
    meaning:
      'A sociological condition in urban India where individuals participate in modern secular spaces (offices, transport) while preserving primordial caste, gotra, and religious endogamy in domestic life.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Core Thinkers to Pair: Gould & M.S.A. Rao',
    body: 'Always cite Harold Gould (Lucknow rickshaw pullers relying on jati networks) and M.S.A. Rao (three-fold classification of urban impact on villages) whenever UPSC asks about caste, kinship, or rural-urban continuum in Indian cities.',
  },
  {
    kind: 'answerBox',
    intro:
      'Structured response for whether industrialization is the sole precondition of urbanization in India:',
    points: [
      'Eurocentric myth of industrial determinism: Classical sociological models (Louis Wirth, Kingsley Davis) equated urbanization with factory-led industrialization; however, historical and post-colonial evidence proves multiple alternative pathways.',
      'Agrarian distress push factor: In India, urban growth is heavily driven by rural push factors—droughts, crop failure, indebtedness, and caste discrimination—forcing peasants into cities without formal factory jobs.',
      'Rise of tertiary and informal economy: Indian cities expand predominantly via the unorganized tertiary sector (informal trade, logistics, domestic work, construction), demonstrating urbanization without industrialization.',
      'Administrative, sacred, and educational magnets: Administrative state capitals (Chandigarh), ancient religious hubs (Varanasi, Tirupati), and educational coaching hubs (Kota) achieve dense urbanization without manufacturing bases.',
      'Census town explosion: Over 2,500 new Census towns emerged post-2001 via rural trade diversification, highway connectivity, and remittance flows rather than heavy industrial investment.',
    ],
    conclusion:
      'While industrialization remains a potent catalyst, Indian urbanization is driven by a complex interplay of agrarian distress, informal tertiary expansion, educational clustering, and subaltern market growth.',
  },
]
