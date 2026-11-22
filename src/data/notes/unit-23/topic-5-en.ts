import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic5EnMindMap: MindMapData = {
  title: 'Topic 5 · Ethnicity and Identity Movements in India',
  center: 'Ethnicity & Identity Movements',
  subtitle: 'Theories of Ethnicity • Sons of the Soil • North-East Autonomy & Accords • Material Roots of Conflict',
  branches: [
    {
      title: 'Sociological Conceptualization',
      color: 'lavender',
      thinkers: ['Max Weber', 'Clifford Geertz', 'Paul Brass', 'Dipankar Gupta'],
      points: [
        'Primordialism (Geertz): ascribed ties of blood, language, kin, and sacred ancestral myth',
        'Instrumentalism (Brass): ethnic identity as a mobilized political resource by competing elites',
        'Constructivism: colonial census enumeration and boundaries reifying fluid cultural frontiers',
        'Relative deprivation: economic disparities sparking ethnic comparison and perceived injustice',
      ],
    },
    {
      title: 'Myron Weiner: Sons of the Soil',
      color: 'yellow',
      thinkers: ['Myron Weiner', 'Dipankar Gupta', 'Sujata Patel', 'Ghanshyam Shah'],
      points: [
        'Nativist urban mobilization: local majorities feeling bypassed by culturally distinct migrants',
        'Four structural conditions: migration inflow, white-collar job competition, perceived marginalization, elite leadership',
        'Case studies: Shiv Sena in Bombay (1960s vs South Indians), Assam Movement (1979–85 vs Bengalis)',
        'Class dimension: middle-class educated youth anxiety channeled into xenophobic cultural pride',
      ],
    },
    {
      title: 'North-East Autonomy & Sub-Ethnicity',
      color: 'mint',
      thinkers: ['Sanjib Baruah', 'B.K. Roy Burman', 'Udayon Misra', 'Virginius Xaxa'],
      points: [
        'Cosmetic federalism (Baruah): security-centric integration and AFSPA producing "durable disorder"',
        'Internal exclusionary frontiers: creation of ethnic states sparking sub-ethnic minority rebellions',
        'Autonomy Accords: Sixth Schedule, Bodo Accords, and Mizo Peace Accord (1986) institutionalizing elite pacts',
        'Cyclical fragmentation: dominant tribe hegemony triggering retaliatory sub-tribal territorial claims',
      ],
    },
    {
      title: 'Camouflage of Material Advantage',
      color: 'pink',
      thinkers: ['Paul Brass', 'Stuart Corbridge', 'Nandini Sundar', 'Andre Béteille'],
      points: [
        'Material roots: cultural symbols camouflaging competition over land, mining, contracts, and border trade',
        'Resource enclosure: customary tribal land transfers to commercial settlers driving violent backlash',
        'Elite capture: insurgent and political elites leveraging ethnic sentiment to siphon Central development funds',
        'Manipur crisis (2023): Meitei-Kuki clash over Scheduled Tribe quotas, land tenure, and political control',
      ],
    },
  ],
}

export const topic5EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u13-02-ecology-identity-movements.webp',
    alt: 'P2 Unit 13 infographic: Environmental & Identity Movements — Environmentalism of the Poor & Ethno-Identity Struggles',
    caption:
      'Ethnic mobilizations in India range from urban nativist "Sons of the Soil" campaigns to complex autonomy accords and resource conflicts in the North-East.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 23 Visual 02',
  },
  {
    kind: 'md',
    body: `## Conceptualizing Ethnicity: Primordialism vs Instrumentalism

In political sociology, ==Ethnicity== refers to a shared collective identity based on perceived common descent, cultural distinctiveness, language, religion, or historical memories. Classical sociologist [[thinker:Max Weber]] defined ethnic groups as human groups that entertain a subjective belief in their common descent, whether rooted in blood relationships or shared historical experiences.

Sociological discourse on ethnicity in India is characterized by two competing theoretical paradigms:
1. **The Primordialist Perspective (Clifford Geertz)**: Views ethnic identity as deeply ingrained, inherited, and emotionally charged. Primordial attachments—language, kin, sacred geography, and ancestral myths—are experienced by actors as involuntary, sacred, and non-negotiable givens of human existence.
2. **The Instrumentalist Perspective (Paul Brass)**: Challenges the primordial view by demonstrating that ethnic identities are neither ancient nor fixed. Instead, ethnicity is an **instrument manipulated by political and cultural elites** to mobilize collective support, capture scarce state resources, and secure electoral power. Brass argued that cultural markers (e.g., Hindi vs Urdu, Assamese vs Bengali) are deliberately politicized during periods of socio-economic competition.

Sociologist [[thinker:Dipankar Gupta]] synthesized these views, arguing that while ethnicity relies on affective cultural idioms (giving it psychological force), its political eruption is almost invariably triggered by contemporary socio-economic grievances and asymmetric modernization.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Primordialist Lens (Geertz)',
    rightTitle: 'Instrumentalist Lens (Paul Brass)',
    rows: [
      {
        aspect: 'Nature of Identity',
        left: 'Ascribed, innate, historical, emotionally non-negotiable.',
        right: 'Fluid, socially constructed, strategically mobilized.',
      },
      {
        aspect: 'Primary Driver',
        left: 'Psychological need for belonging, blood ties, sacred myths.',
        right: 'Competition between elites over political power and state funds.',
      },
      {
        aspect: 'Cultural Symbols',
        left: 'Authentic ancestral heritage shared across generations.',
        right: 'Selectively chosen markers deployed for collective bargaining.',
      },
      {
        aspect: 'Solution to Conflict',
        left: 'Cultural recognition, territorial partition, isolation.',
        right: 'Equitable resource distribution, coalition power-sharing.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Myron Weiner’s "Sons of the Soil" Thesis

One of the most powerful sociological frameworks for understanding regional nativism in post-independence India is [[thinker:Myron Weiner]]’s **"Sons of the Soil"** theory, articulated in his classic work *Sons of the Soil: Migration and Ethnic Conflict in India* (1978).

Weiner investigated why certain multi-ethnic regions erupt into violent nativist backlashes against internal migrants while others absorb them peacefully.

### Weiner’s Four Structural Pre-Conditions
Weiner demonstrated that "Sons of the Soil" movements emerge when four socio-demographic and political conditions converge:
1. **Significant Inflow of Migrants**: An influx of culturally, linguistically, or religiously distinct migrants into a specific regional territory [[eg:South Indian white-collar migrants entering Bombay in the 1950s–60s, or Bengali migrants moving into the Brahmaputra Valley of Assam]].
2. **Perceived Threat to Middle-Class Jobs**: The incoming migrant community possesses educational or linguistic advantages (such as English proficiency or technical skills), enabling them to dominate coveted middle-class white-collar occupations, civil service clerkships, and skilled industrial jobs.
3. **Relative Deprivation of Local Youth**: A rapidly expanding class of educated, aspiring local ("indigenous") youth experiences acute unemployment and status anxiety, feeling economically colonized in their own homeland.
4. **Political Mobilization by Ethnic Entrepreneurs**: Charismatic leaders and political organizations channel this collective economic frustration into cultural xenophobia, declaring that the "sons of the soil" are being dispossessed by parasitic outsiders (*"dhotiwalas"*, *"lungiwalas"*, or *"foreigners"*).

### Empirical Manifestations
- **Shiv Sena in Bombay (1966)**: Bal Thackeray mobilized lower-middle-class Maharashtrian youth against South Indian migrants who dominated administrative clerical jobs in banks and commercial houses, demanding 80% job quotas for local *mumbaikars*.
- **The Assam Movement (1979–1985)**: Led by the All Assam Students' Union (AASU), local Assamese youth mobilized against perceived demographic inundation and economic displacement by Bengali migrants, culminating in the 1985 Assam Accord.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Trap: Nativism vs Democratic Federalism',
    body: 'In Paper 2, clearly distinguish the constitutional linguistic reorganization of states (1956), which legitimized democratic language rights, from "Sons of the Soil" nativism, which is an exclusionary, chauvinistic intra-state reaction violating Article 19(1)(e) and Article 19(1)(g) of the Indian Constitution.',
  },
  {
    kind: 'md',
    body: `## Ethnicity, Sub-Ethnicity, and Autonomy Accords in North-East India

The North-Eastern region of India, characterized by extraordinary ethnic, linguistic, and tribal diversity, has been a major laboratory of post-colonial ethnic assertion and state-building.

Political scientist [[thinker:Sanjib Baruah]] (*India Against Itself* and *Durable Disorder*) analyzed the post-colonial state's flawed approach to the North-East, which he termed ==Cosmetic Federalism==. The Indian state combined heavily subsidized, corrupt patronage politics with intense military counter-insurgency under the Armed Forces Special Powers Act (AFSPA).

### The Dynamics of Sub-Ethnicity and Autonomy Accords
1. **The Paradox of Territorial Reorganization**: To quell insurgencies, the Central government carved out separate ethnic tribal states (Nagaland in 1963, Meghalaya in 1972, Mizoram in 1987). However, because tribal settlements are geographically overlapping and heterogeneous, the creation of ethnic homelands created **"internal exclusionary frontiers"**.
2. **Sub-Ethnic Fracturing**: Dominant tribes that captured the new state apparatus systematically marginalized smaller sub-ethnic minorities. This inevitably provoked a second tier of sub-ethnic rebellions:
   - In Assam, Assamese dominance spurred the **Bodo movement** for Bodoland, leading to the Bodo Peace Accords (2003, 2020) and Bodoland Territorial Region (BTR).
   - In Manipur, tensions between the valley-dwelling majority **Meiteis** and hill tribes (**Kukis and Nagas**) erupted into catastrophic ethnic violence in 2023 over land rights, forest reservations, and proposed Scheduled Tribe status for Meiteis.
3. **Institutional Autonomy Accords**: Instruments like the **Sixth Schedule Autonomous District Councils (ADCs)** were designed to safeguard customary tribal land rights. In practice, however, ADCs often experienced elite capture, where local politicians cornered Central development grants without distributing tangible welfare to rural villagers.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1956',
        title: 'States Reorganisation Act',
        text: 'Linguistic reorganization of Indian states establishes language as legitimate federal boundary.',
      },
      {
        year: '1966',
        title: 'Founding of Shiv Sena',
        text: 'Bal Thackeray launches nativist "Sons of the Soil" mobilization against migrants in Bombay.',
      },
      {
        year: '1985',
        title: 'Assam Accord',
        text: 'Concludes six-year agitation against illegal migration, establishing citizenship cut-off dates.',
      },
      {
        year: '2003 & 2020',
        title: 'Bodo Peace Accords',
        text: 'Establishes Bodoland Territorial Council, institutionalizing sub-ethnic autonomy within Assam.',
      },
      {
        year: '2023',
        title: 'Manipur Ethnic Clash',
        text: 'Violent conflict erupts between Meiteis and Kukis over land tenure, quotas, and political dominance.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## The Material Camouflage: Ethnic Rhetoric and Economic Advantage

A foundational thesis in Indian political sociology states that **ethnic and tribal conflicts frequently camouflage deeper struggles for scarce economic and political resources**.

Sociologists [[thinker:Paul Brass]], Nandini Sundar, and Virginius Xaxa argue that identity markers (ancestral purity, tribal customs, religious revivalism) are weaponized by local and regional elites for tangible material gains:
1. **Control Over Customary Land and Forests**: In tribal belts (e.g., Jharkhand, Nagaland, Karbi Anglong), land is the primary productive asset. Communal violence between indigenous groups and settlers is often driven by real-estate speculation, timber smuggling, and illicit mineral extraction.
2. **Monopolization of State Patronage and Contracts**: In backward regions lacking private industry, government employment, developmental contracts, and PWD tenders are the sole avenues of capital accumulation. Defining who is a "genuine tribal" or "indigenous resident" determines who gets access to lucrative state contracts and reserved seats.
3. **Elite Rent-Seeking and Extortion**: Insurgent groups and regional political elites routinely invoke ethnic patriotism to justify illegal taxation (*goonda tax* on highway freight) and siphon off Central developmental subventions.
4. **Electoral Gerrymandering**: Demands for separate district councils or new state borders are calculated maneuvers by political entrepreneurs seeking exclusive electoral vote-banks free from multi-ethnic competition.`,
  },
  {
    kind: 'keyTerm',
    term: 'Sons of the Soil Thesis (Myron Weiner)',
    meaning:
      'A sociological model explaining urban nativist mobilizations against internal migrants when local educated youth experience acute unemployment and feel bypassed by culturally distinct outsiders.',
  },
  {
    kind: 'keyTerm',
    term: 'Cosmetic Federalism (Sanjib Baruah)',
    meaning:
      'A critical concept describing the post-colonial state’s governance of the North-East, relying on heavily subsidized corrupt patronage politics and military counter-insurgency while denying genuine democratic autonomy.',
  },
  {
    kind: 'keyTerm',
    term: 'Instrumentalist Mobilization (Paul Brass)',
    meaning:
      'The sociological proposition that ethnic identities and communal markers are deliberately constructed, heightened, and manipulated by political elites to capture power and scarce state resources.',
  },
  {
    kind: 'keyTerm',
    term: 'Sub-Ethnic Fracturing',
    meaning:
      'The cyclical political process wherein the creation of an ethnic state (e.g., Assam or Nagaland) prompts smaller marginalized sub-tribal groups to rebel against the new dominant ethnic majority.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Exam Formula: Deciphering Ethnic Conflict',
    body: 'Whenever tackling an ethnic conflict question in Paper 2, always peel back the cultural rhetoric (purity, ancestral myth, indigenous pride) to reveal the material core: (1) Who controls the land and natural resources? (2) Who captures state contracts and bureaucracy? and (3) How are local political elites using identity to build a captive vote bank?',
  },
  {
    kind: 'answerBox',
    intro:
      'Structured answer blueprint for evaluating ethnic movements and the camouflage of material advantage:',
    points: [
      'Sociological definitions: Max Weber defined ethnic groups through subjective belief in shared descent; Clifford Geertz highlighted emotional primordial ties, while Paul Brass established the instrumentalist manipulation of ethnicity by competing elites.',
      'Sons of the Soil mechanics: Myron Weiner formulated the conditions of nativist backlash (migration, white-collar job competition, educated local unemployment, and political mobilization) seen in the Shiv Sena and Assam Movement.',
      'North-East autonomy paradox: Sanjib Baruah’s concept of "cosmetic federalism" explains how carving ethnic homelands created "internal exclusionary frontiers", triggering violent sub-ethnic rebellions (e.g., Bodos, Kukis).',
      'The camouflage of material interests: Ethnic rhetoric masks underlying struggles over scarce productive assets—customary land alienation, mining royalties, bureaucratic quotas, and Central developmental subventions.',
      'Contemporary manifestation: The 2023 Manipur ethnic crisis exemplifies how structural anxieties over land ownership, Schedule Tribe classification, and political hegemony erupt under the guise of primordial ethnic clash.',
    ],
    conclusion:
      'Resolving ethnic and sub-national conflicts in India requires moving beyond cosmetic territorial accords to guarantee equitable regional development, transparent resource governance, and genuine subaltern inclusion.',
  },
]
