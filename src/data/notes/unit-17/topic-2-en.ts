import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 17.2 — Types of Kinship Systems in India',
  center: 'Types of Kinship Systems',
  subtitle: 'Karve’s Four Zones • Northern vs Southern Matrix • Dumont’s Alliance Critique • Changing Bonds',
  branches: [
    {
      title: 'Karve’s Four Kinship Zones',
      color: 'lavender',
      thinkers: ['Iravati Karve', 'Louis Dumont', 'T.N. Madan', 'Patricia Uberoi'],
      points: [
        'Northern Zone (Indo-Aryan): Sapinda/Gotra exogamy, village exogamy, prohibition of cousin marriage, hypergamy',
        'Southern Zone (Dravidian): Cross-cousin marriage, uncle-niece unions, symmetrical alliance, village endogamy permitted',
        'Central Zone (Transitional): Maharashtra/Gujarat hybridizing Northern exogamy with selective cross-cousin marriage',
        'Eastern Zone (Tribal): Austro-Asiatic/Tibeto-Burman groups with bride-price, youth dormitories, and matrilineal pockets',
      ],
    },
    {
      title: 'North vs South Structural Contrast',
      color: 'yellow',
      thinkers: ['Iravati Karve', 'M.N. Srinivas', 'Pauline Kolenda', 'Leela Dube'],
      points: [
        'Marriage Rules: North enforces negative marital rules (who NOT to marry); South enforces positive rules (preferred mates)',
        'Gift Giving: North features asymmetric downward flow (Kanyadan); South features reciprocal, balanced prestations',
        'Status of Daughters: North treats daughter as Paraya Dhan under strict purdah; South retains daughter close to natal kin',
        'Spatial Spread: North demands geographic distance in marriage; South cements alliances within local kin settlements',
      ],
    },
    {
      title: 'Dumont’s Alliance Critique',
      color: 'mint',
      thinkers: ['Louis Dumont', 'Claude Lévi-Strauss', 'Nur Yalman', 'Anthony Good'],
      points: [
        'Critique of Karve: Karve treated South Indian kinship as mere empirical traits rather than an underlying structural grammar',
        'Affinity as a Value: Dumont demonstrated that Dravidian kinship terminology is organized by an enduring principle of affinity',
        'Bifurcate Merging: Dravidian terms systematically oppose parallel relatives (brother/sister) to cross-relatives (affines/spouses)',
        'Inter-generational transmission: Affinal alliances do not end at marriage; they are transmitted as hereditary social ties',
      ],
    },
    {
      title: 'Contemporary Shifts & Family Bonds',
      color: 'pink',
      thinkers: ['Yogendra Singh', 'Patricia Uberoi', 'Jan Breman', 'Bina Agarwal'],
      points: [
        'Weakening of local barriers: Matrimonial platforms facilitate trans-regional and inter-subcaste middle-class marriages',
        'Sanskritization of dowry: Aggressive cash dowries penetrate traditionally reciprocal Southern and tribal communities',
        'Digital kinship: Dispersed migrant households maintain emotional bondings through daily video calls and remittances',
        'Nuclear autonomy vs Kin support: Dual-earner urban couples rely on grandparental childcare, preserving functional jointness',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u07-01-kinship-zones-karve.webp',
    alt: 'P2 Unit 7 infographic: Regional Kinship Zones of India — Regional Kinship Diversity & Descent Systems in India',
    caption: 'Regional Kinship Zones of India: Iravati Karve’s fourfold regional taxonomy contrasting Indo-Aryan unilineal exogamy with Dravidian affinal reciprocity.',
    credit: 'UPSC OWL Sociology Visual Series',
  },
  {
    kind: 'md',
    body: `## Iravati Karve’s Four Kinship Zones of India

Kinship systems across India do not follow a uniform national blueprint. In simple terms, how people choose marriage partners, who they call "brother" or "sister", and where a newly married bride lives depends heavily on regional geography, language roots, and local customs.

In her classic 1953 study *Kinship Organization in India*, anthropologist ==Iravati Karve== integrated linguistic families, scriptural texts, and extensive field observations to divide the subcontinent into four distinct kinship zones:

1. **The Northern Kinship Zone (Indo-Aryan Linguistic Family):** Encompassing Jammu & Kashmir, Punjab, Haryana, Uttar Pradesh, Bihar, and Rajasthan. Kinship here is strictly patrilineal, patrilocal, and patriarchal. Marriage is governed by ==negative rules==—specifying broad categories of kin an individual *cannot* marry (strict Gotra, Pravara, and Sapinda exogamy). All cousin marriages are banned.
2. **The Southern Kinship Zone (Dravidian Linguistic Family):** Covering Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh/Telangana. Kinship here is governed by ==positive rules==—encouraging marriage within an already established circle of kin. Preferred unions include cross-cousin marriages and maternal uncle-niece marriages.
3. **The Central Kinship Zone (Transitional Zone):** Encompassing Maharashtra, Gujarat, Madhya Pradesh, and parts of Odisha. As a buffer between North and South, this zone exhibits a hybrid pattern. For instance, the Marathas observe North Indian clan exogamy, yet practice South Indian mother’s brother’s daughter (MBD) marriage [[eg:A Maratha family observing gotra exogamy while enthusiastically accepting a mother's brother's daughter as bride]].
4. **The Eastern Kinship Zone (Austro-Asiatic and Tibeto-Burman Families):** Covering the tribal belts of central-eastern India (Santhals, Mundas, Oraons) and the northeastern hills (Khasis, Garos). This zone features bilateral descent, matriliny, bride-price (*Pon*) over dowry, youth dormitories (*Ghotul*), and high female economic autonomy.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Northern Kinship Zone (Indo-Aryan)',
    rightTitle: 'Southern Kinship Zone (Dravidian)',
    rows: [
      {
        aspect: 'Marriage Regulations',
        left: 'Negative rules: Four-gotra exogamy and village exogamy; all cousin marriages strictly tabooed as incest',
        right: 'Positive rules: Bilateral cross-cousin marriage (FSD, MBD) and maternal uncle-niece marriage preferred',
      },
      {
        aspect: 'Kinship Terminology',
        left: 'Descriptive: Clear lexical distinction between blood relatives and in-laws (Chacha vs Mama; Saas vs Ma)',
        right: 'Classificatory: Merges parallel relatives with siblings and cross-relatives with affines and spouses',
      },
      {
        aspect: 'Prestations & Gifts',
        left: 'Asymmetrical: Unidirectional downward flow of gifts and dowry from inferior wife-givers to superior wife-takers',
        right: 'Symmetrical: Reciprocal exchange of gifts and prestations between intermarrying descent lines',
      },
      {
        aspect: 'Status of Daughters',
        left: 'Viewed as Paraya Dhan; undergoes complete rupture from natal home; subjected to purdah in conjugal village',
        right: 'Retains lifelong intimate links with natal home; marries within familiar kin; avoids institutional purdah',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Louis Dumont’s Alliance Critique of Karve

French structuralist ==Louis Dumont== praised Iravati Karve’s empirical richness but offered a profound theoretical critique in his work *Affinity as a Value* (1983). Dumont argued that Karve reduced South Indian kinship to a mere laundry list of curious marriage traits (such as cross-cousin marriage) without understanding the underlying structural logic.

Dumont’s intervention transformed South Indian kinship analysis through three structural insights:

* **Affinity as an Inherited Value:** In North India, marriage (*affinity*) is a temporary, newly created link between two unrelated lineages. In South India, affinity is an enduring, inherited structural category that is transmitted across generations. A father's affines become his son's affines.
* **Bifurcate Merging Terminology:** Dravidian kinship terminology divides the entire social universe into two mutually exclusive categories:
  1. *Parallel Kin (Consanguines):* Father, Father’s Brother, Mother’s Sister, and their children (who are classified as brothers and sisters; marriage with them is strictly incestuous).
  2. *Cross-Kin (Affines):* Mother’s Brother, Father’s Sister, and their children (who are classified as potential affines, in-laws, and spouses).
* **Alliance over Descent:** Dumont demonstrated that in South India, cross-cousin marriage is not an arbitrary biological choice; it is the structural mechanism that renews the hereditary alliance between two intermarrying descent lines [[eg:A Tamil family marrying their daughter to her maternal uncle to consolidate ancestral land and preserve family harmony]].`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Parallel vs Cross Sorting', text: 'Dravidian terminology classifies all relatives into consanguines (parallel) vs affines (cross)' },
      { label: 'Prescribed Alliance', text: 'Cross-cousins (MBD/FSD) or maternal uncle-niece unions are designated as ideal marital matches' },
      { label: 'Inter-generational Renewal', text: 'Marriage repeats between the same allied lineages, cementing reciprocal gift exchanges' },
      { label: 'Integrated Kin Matrix', text: 'Daughters remain emotionally and spatially close to natal kin, avoiding hypergamic subordination' },
    ],
  },
  {
    kind: 'md',
    body: `## Are Family Bondings Being Disrupted by Changing Kinship Patterns?

A recurring question in modern Indian sociology is whether rapid economic transformation, urban migration, and individualized lifestyles are destroying traditional family bondings. Classical functionalists like William J. Goode predicted that industrialization would inevitably reduce extended kinship to isolated nuclear households.

However, contemporary empirical research in India reveals a much more nuanced dynamic:

### 1. Forces Straining Traditional Kinship Bonds
* **Geographic Dispersion:** Modern corporate employment and rural distress drive young adults to metropolitan hubs and overseas destinations, replacing daily face-to-face interaction with sporadic festive gatherings.
* **Individual Choice vs Lineage Dictate:** The rise of self-arranged ("love-cum-arranged") marriages and inter-caste alliances challenges traditional lineage endogamy and elder veto power.
* **Elderly Isolation:** Shrinking urban apartment sizes often leave elderly parents living alone in ancestral rural homes, generating emotional loneliness and elder abandonment [[eg:Rising occupancy in private retirement homes across Tier-1 Indian cities]].

### 2. Adaptation and Kinship Resilience
* **Dispersed Functional Jointness:** Sociologists [[thinker:Yogendra Singh]] and Patricia Uberoi demonstrate that physical separation does not equate to emotional alienation. Urban nuclear households remain deeply embedded in wider kinship obligations through financial remittances, property consultations, and crisis support.
* **Digital Kinship Networks:** Smartphone technology and dedicated family WhatsApp groups have created virtual kinship networks, where daily blessings, medical updates, and lifecycle rituals are shared in real time across continents.
* **Sanskritization of Dowry:** As [[thinker:MN Srinivas]] noted, modern consumer capitalism has ironically intensified certain traditional kinship exchanges—commercial cash dowries have spread into South India and tribal communities that historically practiced reciprocal gifts or bride-price.`,
  },
  {
    kind: 'keyTerm',
    term: 'Northern Kinship Zone',
    meaning: 'A regional kinship system characterized by Indo-Aryan languages, strict four-gotra and village exogamy, hypergamy, and prohibition of all cousin marriages.',
  },
  {
    kind: 'keyTerm',
    term: 'Southern Kinship Zone',
    meaning: 'A Dravidian kinship matrix featuring preferred cross-cousin and uncle-niece marriage, classificatory terminology, and reciprocal affinal alliances.',
  },
  {
    kind: 'keyTerm',
    term: 'Bifurcate Merging',
    meaning: 'A kinship classification rule that merges father with father’s brother and mother with mother’s sister, while sharply distinguishing cross-relatives as marriageable affines.',
  },
  {
    kind: 'keyTerm',
    term: 'Kanyadan Asymmetry',
    meaning: 'The traditional North Indian marital ideology where the gift of a virgin daughter establishes the permanent ritual subordination of wife-givers to wife-takers.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Karve vs Dumont Analytical Contrast',
    body: 'In UPSC essays and optional answers, juxtapose Iravati Karve’s Indological-linguistic cultural mapping with Louis Dumont’s structural-alliance methodology. While Karve emphasized geographical traits and descriptive folklore, Dumont elevated South Indian kinship to a universal theoretical alternative to Africanist descent theory.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Parallel Cousins vs Cross-Cousins',
    body: 'Never write that South Indian kinship permits marriage with ANY cousin. Parallel cousin marriage (children of two brothers or two sisters) is strictly forbidden as incestuous across all Dravidian communities. Only cross-cousin marriage (children of a brother and a sister) is permitted and encouraged.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Sanskritization of Marriage Prestations',
    body: 'Keep in mind M.N. Srinivas’s observation that modern prosperity has triggered the Sanskritization of marital prestations: traditional bride-price (Pon) in tribal and lower-caste groups is being rapidly replaced by aggressive, status-signaling dowry (Dahej) demands.',
  },
  {
    kind: 'answerBox',
    intro: 'To answer a 20-mark question comparing Northern and Southern kinship systems, follow this rigorous comparative blueprint:',
    points: [
      'Introduce the geographic and linguistic foundations using Iravati Karve’s classic regional classification (Indo-Aryan vs Dravidian).',
      'Compare marriage rules: North India’s negative rules (gotra, sapinda, and village exogamy) versus South India’s positive rules (cross-cousin and maternal uncle-niece alliances).',
      'Contrast kinship terminology: North India’s descriptive vocabulary separating natal and affinal kin versus South India’s classificatory bifurcate merging system (Louis Dumont).',
      'Analyze structural gift flows: Unidirectional, hypergamic Kanyadan in the North versus symmetrical, reciprocal prestations in the South.',
      'Evaluate the social status of daughters: The North Indian bride as an uprooted, subordinate stranger (Paraya Dhan) versus the South Indian bride retained within a supportive kin network.',
    ],
    conclusion: 'Conclude by highlighting how contemporary market forces, education, and national legal codes are creating a pan-Indian convergence, even while regional kinship ideals continue to anchor community identity.',
  },
]

export const topic2En: TopicLangContent = {
  summary:
    'Kinship systems in India exhibit profound regional diversity shaped by linguistic traditions, marriage rules, and property regimes. Iravati Karve pioneered the spatial classification of India into four kinship zones—Northern, Southern, Central, and Eastern—revealing how marriage regulations transition from strict unilineal exclusion in the North to reciprocal affinal alliances in the South. While contemporary forces like urbanization, digital connectivity, and modern law reshape traditional bonds, kinship remains an active, adaptable network bridging family sentiment and social capital.',
  mindMap,
  sections,
}
