import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 17.4 — Household Dimensions of the Family',
  center: 'Household Dimensions of Family',
  subtitle: 'Shah’s Conceptual Bifurcation • Developmental Cycle • Kolenda’s 12 Types • Demographic Shifts',
  branches: [
    {
      title: 'Household vs Family: A.M. Shah',
      color: 'lavender',
      thinkers: ['A.M. Shah', 'Meyer Fortes', 'I.P. Desai', 'K.M. Kapadia'],
      points: [
        'Household (Chulah/Ghar): Residential, commensal unit defined by a common hearth and shared daily budget',
        'Family (Kutumb/Parivar): Institutional network of kinship, genealogical descent, sentiments, and legal obligations',
        'The Ecological Fallacy: Small Census household size (4.8 persons) does not prove the demise of the joint family',
        'Multi-household families: A single joint family frequently distributes itself across multiple domestic households',
      ],
    },
    {
      title: 'Developmental Cycle of Household',
      color: 'yellow',
      thinkers: ['A.M. Shah', 'Meyer Fortes', 'T.N. Madan', 'M.N. Srinivas'],
      points: [
        'Processual view: Households are dynamic phases in an evolving lifecycle, not fixed, frozen structures',
        'Expansion (Fusion): Marriage of sons and arrival of grandchildren expand a nuclear unit into a lineal joint household',
        'Fission (Partition): Death of Karta or domestic friction causes brothers to partition the hearth into nuclear units',
        'Repetitive cycle: Each partitioned nuclear household eventually matures, expanding into a joint unit in the next generation',
      ],
    },
    {
      title: 'Kolenda’s Twelve Family Forms',
      color: 'mint',
      thinkers: ['Pauline Kolenda', 'F.G. Bailey', 'Patricia Uberoi', 'Bina Agarwal'],
      points: [
        'Critique of binary: The simple "nuclear vs joint" division obscures the rich structural diversity of Indian homes',
        'Twelve categories: Spans single-person, sub-nuclear, supplemented nuclear, lineal joint, to collateral joint units',
        'Supplemented Nuclear: Nuclear core plus widowed parent or unmarried sibling—the most common Indian family form',
        'Resilience of Jointness: When supplemented and lineal forms are counted, jointness remains statistically robust',
      ],
    },
    {
      title: 'Census Trends & Structural Shifts',
      color: 'pink',
      thinkers: ['Jan Breman', 'Reetika Khera', 'Yogendra Singh', 'Census 2011'],
      points: [
        'Declining household size: National average shrank from 5.7 (1981) to 4.8 (2011) and ~4.4 (NFHS-5, 2021)',
        'Single-person surge: Driven by delayed marriage, corporate labour mobility, and feminization of elder widowhood',
        'Skip-generation households: Rural distress forces circular migrant parents to leave children with aged grandparents',
        'Elder longevity impact: Increased life expectancy generates prolonged coexistence and acute urban caregiving strains',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u07-02-indian-family-patriarchy.webp',
    alt: 'P2 Unit 7 infographic: Family, Marriage & Patriarchy in India — Joint Family Debate, Brahminical Patriarchy & Entitlements',
    caption: 'Family, Marriage & Patriarchy in India: A.M. Shah’s developmental cycle, Kolenda’s household classifications, and emerging demographic realignments.',
    credit: 'UPSC OWL Sociology Visual Series',
  },
  {
    kind: 'md',
    body: `## Household versus Family: A.M. Shah’s Conceptual Distinction

A recurring flaw in early Indian sociology was the tendency to use the words "family" and "household" as if they meant the exact same thing. When British colonial census officers counted an average household size of about five people, they prematurely announced that the traditional Indian joint family was dying out.

In his groundbreaking work *The Household Dimension of the Family in India* (1973), sociologist ==A.M. Shah== demolished this assumption by making a clear sociological distinction:

* **Household (Ghar / Chulah):** A physical, residential, and commensal unit. Its members live under a single roof, eat food cooked at a common hearth (*chulah*), and pool daily domestic resources.
* **Family (Kutumb / Parivar):** A broader kinship and genealogical institution. It is defined by shared ancestry, mutual rights, moral duties, property claims, and ritual bonds.

Shah pointed out that a single joint family can be distributed across multiple independent households [[eg:Three brothers who run separate kitchens in Delhi, Mumbai, and their ancestral village in Bihar, yet jointly own ancestral land, send money home, and assemble for all major family rituals]]. Concluding that the joint family has disappeared simply because brothers maintain separate kitchens is what sociologists call an *ecological fallacy*.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Household (Commensal Unit)',
    rightTitle: 'Family (Kinship Institution)',
    rows: [
      {
        aspect: 'Defining Criterion',
        left: 'Co-residence and common hearth (eating together from one Chulah)',
        right: 'Genealogical descent, legal rights, and moral-emotional ties (Parivar)',
      },
      {
        aspect: 'Spatial Boundary',
        left: 'Strictly bounded by a physical dwelling or domestic roof',
        right: 'Spatially dispersed across different towns, cities, or continents',
      },
      {
        aspect: 'Duration & Stability',
        left: 'Fluid; easily divided by migration, job transfers, or domestic friction',
        right: 'Enduring; outlasts domestic fission through inherited coparcenary property and ritual solidarity',
      },
      {
        aspect: 'Primary Function',
        left: 'Daily biological maintenance, cooking, child-minding, and domestic consumption',
        right: 'Lineage continuity, status transmission, caste reproduction, and long-term security',
      },
    ],
  },
  {
    kind: 'md',
    body: `## The Developmental Cycle of the Domestic Group

Drawing upon Meyer Fortes’s anthropological insights, A.M. Shah explained that an Indian household must never be viewed as a static, frozen box. Instead, every household passes through a continuous ==developmental cycle== of expansion (fusion) and partition (fission) over time.

### The Stages of the Cycle:
1. **Inception:** A young couple marries and sets up a simple domestic unit with their children (a *nuclear household*).
2. **Expansion (Fusion):** As the sons grow up, marry, and bring their wives home, the household expands into a multi-generational *lineal joint household*. Grandchildren are born, adding depth to the domestic hearth.
3. **Collateral Joint Phase:** When the patriarch dies, the married brothers often continue to live together for several years, forming a *collateral joint household*.
4. **Fission (Partition):** Over time, disputes over domestic work, unequal contributions, or lack of living space lead the brothers to partition the property. They separate the cooking hearths, dividing the joint household into two or more independent *nuclear households*.
5. **Renewal:** Each new nuclear household subsequently raises its own children, repeating the cycle of expansion, fusion, and fission all over again.

Thus, observing a nuclear household in a village does not mean the joint family has died; it merely captures that household at a specific moment in its natural developmental cycle.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Nuclear Inception', text: 'Young couple establishes a conjugal domestic unit with dependent unmarried children' },
      { label: 'Lineal Expansion', text: 'Adult sons marry and bring wives into the hearth, forming a multi-generational lineal joint home' },
      { label: 'Collateral Phase', text: 'Following parents’ demise, married brothers briefly co-reside, pooling domestic labour' },
      { label: 'Domestic Fission', text: 'Hearth partitions into multiple independent nuclear units, initiating a fresh developmental cycle' },
    ],
  },
  {
    kind: 'md',
    body: `## Pauline Kolenda’s Twelvefold Typology of Indian Households

American anthropologist ==Pauline Kolenda== (*Regional Differences in Family Structure in India*, 1987) argued that classifying Indian families into just "joint" or "nuclear" hides the remarkable structural diversity of domestic life.

To provide sociological clarity, Kolenda formulated a typology of **twelve family forms**:

| Kolenda’s Household Type | Structural Composition & Sociological Meaning |
| :--- | :--- |
| **1. Single-Person** | An individual living entirely alone (e.g., elderly widow, migrant worker) |
| **2. Sub-Nuclear** | A fragment of a former nuclear unit (e.g., widow with unmarried children) |
| **3. Supplemented Sub-Nuclear** | Sub-nuclear unit plus an unmarried or widowed relative (e.g., widow, son, and widowed sister) |
| **4. Nuclear** | Married couple with or without unmarried children |
| **5. Supplemented Nuclear** | Nuclear family plus one or more unmarried, widowed, or divorced relatives (most common in India) |
| **6. Lineal Joint** | Two couples related lineally (e.g., parents + married son and daughter-in-law) |
| **7. Collateral Joint** | Two or more married brothers living together with wives and children |
| **8. Lineal-Collateral Joint** | Parents plus two or more married sons and their respective families |
| **9–11. Supplemented Joint Forms** | Any joint household (lineal, collateral, or lineal-collateral) plus additional unmarried/widowed kin |
| **12. Other / Unclassified** | Unorthodox domestic groupings not covered by standard genealogical categories |

Kolenda’s data revealed that when the ==supplemented nuclear household== (a nuclear core living with a widowed mother or unmarried sibling) is accounted for, the Indian domestic structure demonstrates profound, enduring jointness.`,
  },
  {
    kind: 'md',
    body: `## Census Trends: Shrinking Household Size & Emerging Modern Forms

India’s demographic landscape has witnessed profound transformations over the past four decades, reshaping domestic arrangements:

### 1. Declining Average Household Size
According to Census of India and National Family Health Survey (NFHS) data, average household size has steadily declined:
* **1981 Census:** 5.7 persons per household.
* **2011 Census:** 4.8 persons per household (4.9 in rural, 4.6 in urban).
* **NFHS-5 (2019–21):** ~4.4 persons per household.

### 2. The Rise of Single-Person Households
Single-person households have grown rapidly in metropolitan centres, driven by three distinct social currents:
* **Delayed Marriage:** Young educated professionals living alone in rental accommodations before marriage.
* **Feminization of Ageing:** Because women tend to outlive men and are often younger than their husbands, millions of elderly widows live alone in both rural villages and urban flats.
* **Distress Labour Migration:** Rural men migrating alone to urban informal sectors, leaving families behind due to prohibitive metropolitan living costs [[eg:Bihar migrant workers sharing cramped dormitory rooms in Surat textile mills]].

### 3. Skip-Generation Households and Elder Longevity
* **Skip-Generation Homes:** In drought-prone rural pockets, young adult parents migrate for seasonal wage labour, leaving grandchildren in the care of aged grandparents (Jan Breman’s *footloose labour*).
* **Elder Longevity:** Average life expectancy in India has surged from 32 years at independence to over 70 years today. This demographic triumph means elderly parents live alongside adult children for three to four decades, generating acute caregiving and economic challenges within compact urban apartments.`,
  },
  {
    kind: 'keyTerm',
    term: 'Household vs Family',
    meaning: 'A.M. Shah’s distinction separating the physical, commensal co-residential unit (Chulah) from the wider institutional kinship web (Parivar).',
  },
  {
    kind: 'keyTerm',
    term: 'Developmental Cycle',
    meaning: 'Meyer Fortes and A.M. Shah’s concept showing that domestic units naturally pass through recurring phases of expansion, fusion, and fission over generations.',
  },
  {
    kind: 'keyTerm',
    term: 'Supplemented Nuclear Household',
    meaning: 'Pauline Kolenda’s category describing a nuclear couple and their children living with one or more widowed, unmarried, or divorced relatives.',
  },
  {
    kind: 'keyTerm',
    term: 'Skip-Generation Household',
    meaning: 'A domestic arrangement where elderly grandparents reside with and raise grandchildren in the absence of the middle migrant generation.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'A.M. Shah’s Warning on Census Data',
    body: 'In UPSC questions on family decline, cite A.M. Shah’s critique of Census methodologies. Census enumerators define households by a shared kitchen. A nuclear Census household of 4 people often operates as an active branch of a joint lineage, receiving remittances and following joint elder authority.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Lineal Joint vs Collateral Joint',
    body: 'Do not mix up Lineal Joint and Collateral Joint households in your answers. Lineal joint involves intergenerational depth (parents + married son). Collateral joint involves horizontal breadth (two or more married brothers living together after the father’s death).',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Kolenda’s Empirical Finding',
    body: 'Pauline Kolenda proved that the "supplemented nuclear" household is the most prevalent domestic form in India. It acts as the bridge between nuclear residential autonomy and joint filial obligations, especially for the care of widowed mothers.',
  },
  {
    kind: 'answerBox',
    intro: 'When answering a 20-mark question on A.M. Shah’s household framework and the developmental cycle, follow this structured plan:',
    points: [
      'Differentiate clearly between "household" (co-residential, commensal group sharing a chulah) and "family" (institutional kinship network of rights and duties).',
      'Expose the ecological fallacy of interpreting smaller Census household sizes as the disintegration of the Indian joint family.',
      'Detail the phases of the developmental cycle: Inception (nuclear) -> Expansion (lineal joint) -> Collateral joint -> Domestic fission (partition into separate chulahs).',
      'Incorporate Pauline Kolenda’s typology, emphasizing how the "supplemented nuclear" form preserves joint filial responsibilities.',
      'Address contemporary demographic pressures: Rural-to-urban labour migration creating skip-generation households, and increased elder longevity generating multi-generational caregiving strains.',
    ],
    conclusion: 'Conclude that the Indian domestic sphere is an adaptable, cyclical reality where households partition physically while enduring kinship institutions ensure structural continuity.',
  },
]

export const topic4En: TopicLangContent = {
  summary:
    'The household represents the concrete, domestic site of family life in India. In his seminal work, A.M. Shah cautioned against conflating the "household" (a residential and commensal unit) with the "family" (an enduring kinship institution), proving through the developmental cycle that households naturally expand and split over time. Coupled with Pauline Kolenda’s twelvefold typology and demographic shifts in Census data, the household dimension illuminates how economic migration, elder longevity, and urban living reshape domestic arrangements while preserving familial bonds.',
  mindMap,
  sections,
}
