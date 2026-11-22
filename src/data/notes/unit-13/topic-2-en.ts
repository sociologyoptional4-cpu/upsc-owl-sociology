import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

const summary =
  'Examines the historical evolution of India’s agrarian social structure from colonial revenue systems (Zamindari, Ryotwari, Mahalwari) to post-1947 land reforms. Analyzes P.C. Joshi’s three ideological approaches, evaluates the four pillars of land reform legislation, and explains why reforms produced a selective transformation—empowering intermediate "bullock capitalist" castes while leaving bottom-tier landlessness and tenancy insecurity intact.'

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 2 — Agrarian Social Structure & Land Reforms',
  center: 'Agrarian Structure & Land Reforms',
  subtitle: 'Colonial Systems • P.C. Joshi Approaches • 4 Pillars • Selective Transformation',
  branches: [
    {
      title: '1. Agrarian Class Structure & Colonial Systems',
      color: 'lavender',
      thinkers: ['Daniel Thorner', 'Lord Cornwallis', 'Thomas Munro', 'H. Venkatasubbiah'],
      points: [
        'Thorner’s triad: Malik (rentiers), Kisan (working peasants), Mazdoor (labourers)',
        'Three colonial revenue systems: Zamindari (1793), Ryotwari (1820), Mahalwari (1822)',
        'Venkatasubbiah’s Thesis of Indistinguishability: All converged toward debt-ridden Zamindari misery',
        'Official landholding: 85% small and marginal (<2 ha), top 0.4% large (>10 ha)',
      ],
    },
    {
      title: '2. Ideological Approaches (P.C. Joshi)',
      color: 'yellow',
      thinkers: ['P.C. Joshi', 'Vinoba Bhave', 'Jawaharlal Nehru', 'Charan Singh'],
      points: [
        'Gandhian Approach: Moral trusteeship; Vinoba Bhave’s Bhoodan failed (rocky, barren donations)',
        'Marxist Approach: Revolutionary overthrow and land grab; adopted by Naxalite movement',
        'Radical Nationalist Approach: State-led legislative ceiling and tenancy reform (official model)',
        'Legislative compromise: Constitutional protection of private property limited radical ceilings',
      ],
    },
    {
      title: '3. The Four Pillars of Land Reforms',
      color: 'mint',
      thinkers: ['Gunnar Myrdal', 'Hare Krishna Konar', 'Walter Fernandes', 'N.C. Saxena'],
      points: [
        'Abolition of Intermediaries: Highly successful; eliminated 20M feudal zamindars',
        'Tenancy Reforms: Rent caps and security; triggered pre-emptive tenant evictions',
        'Land Ceilings: Widespread failure via benami transfers and orchard/factory exemptions',
        'Land Consolidation (Chakbandi): Succeeded in NW green revolution belt; failed in Eastern India',
      ],
    },
    {
      title: '4. Socio-Political Impact & Unequal Transformation',
      color: 'pink',
      thinkers: ['Lloyd & Susanne Rudolph', 'Paul Brass', 'Malcolm Adiseshiah', 'Yogendra Singh'],
      points: [
        'Rise of Bullock Capitalists: Intermediate castes (Jats, Yadavs, Vokkaligas) gained land',
        'Decline of Congress: Agrarian intermediate castes formed powerful regional parties',
        'Perpetuation of Landlessness: Dalit agricultural labourers and women cultivators excluded',
        'Regional divergence: Left-mobilized success in Kerala and Bengal vs evasion in Hindi heartland',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u03-02-land-tenure-reforms.webp',
    alt: 'P2 Unit 3 infographic: Land Tenure & Land Reforms — Colonial Revenue Systems to Post-1947 Land Reforms',
    caption:
      'From colonial revenue extractions that created absentee landlordism to post-independence land reforms that empowered intermediate peasant castes while leaving landless Dalits behind.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 3 Visual 02',
  },
  {
    kind: 'md',
    body: `## Agrarian Social Structure: Land as Power and Stratification

In rural India, land is never merely an economic factor of production. In simple terms, land is the supreme source of social dignity, ritual status, caste dominance, and political power. Those who own land control the food supply, command the labour of their neighbours, and dictate local panchayat decisions, while those without land are reduced to dependent daily wage labourers.

To understand rural inequality, economic historian [[thinker:Daniel Thorner]] formulated a celebrated three-tier classification of India's agrarian class structure:
1. **Malik (Proprietors / Landlords):** Wealthy landowners whose primary income derives from property rights in land rather than personal physical labour. They collect cash/crop rents from tenants or employ hired agricultural labourers (*mazdoors*), often belonging to traditional upper or dominant intermediate castes.
2. **Kisan (Working Peasants):** Small and medium peasant proprietors who own modest land parcels. They participate directly in physical agricultural operations alongside their family members, hiring external labour only during peak harvest or sowing cycles.
3. **Mazdoor (Agricultural Labourers):** Landless or near-landless villagers who survive exclusively by selling their physical manual labour on others' fields. They receive subsistence daily wages, possess zero security of employment, and belong overwhelmingly to Dalit and Lower Backward communities.

According to modern agricultural census data, this pyramid remains severely distorted: approximately **85% of Indian operational landholdings belong to Small and Marginal categories** (under 2 hectares), whereas a mere **0.4% of large landholders** control disproportionately large tracts, highlighting extreme structural inequality.

## Colonial Land Tenure Systems and the Indistinguishability Thesis

When the British East India Company assumed political power, their single-minded objective was maximising fixed land revenue. To achieve this, colonial administrators imposed three distinct land tenure systems across British India:

1. **The Zamindari System (Permanent Settlement, 1793):** Introduced by [[thinker:Lord Cornwallis]] across Bengal, Bihar, and coastal Odisha. The British recognised hereditary tax collectors (*zamindars*) as absolute private owners of the land, subject to paying a fixed annual revenue to the Company. This spawned a parasitic class of absentee landlords residing in Calcutta who leased land through intricate chains of sub-infeudation (up to 50 intermediaries), subjecting the actual tillers to crushing rack-rents and forced labour (*begar*).
2. **The Ryotwari System (1820):** Formulated by Sir Thomas Munro and Alexander Read in Madras, Bombay, and Assam. Avoiding intermediary landlords, the colonial state entered into direct revenue contracts with individual cultivators (*ryots*). However, revenue rates were set exorbitantly high (often 45–55% of gross produce) and were periodically revised upward.
3. **The Mahalwari System (1822/1833):** Designed by Holt Mackenzie and Lord William Bentinck in the North-Western Provinces, Punjab, and Central India. Revenue assessments were settled collectively with the entire village estate or community (*mahal*) represented by the village headman (*lambardar*).

### H. Venkatasubbiah’s Thesis of Indistinguishability
Economic historian [[thinker:H. Venkatasubbiah]] argued that while textbook accounts present Zamindari, Ryotwari, and Mahalwari as distinct institutional models, in practice they became **indistinguishable by the 1940s**. As the British borrowed revenue recovery mechanisms across administrative boundaries, all three systems converged toward the exploitative Zamindari reality:
- Exorbitant cash revenue demands forced peasants into the clutches of village moneylenders (*sahukars*).
- When crops failed, peasants defaulted on usurious debts, leading moneylenders to confiscate land titles through British civil courts.
- Former peasant proprietors were degraded into insecure sharecroppers and rack-rented tenants on their ancestral land.
- Absentee landlordism, debt bondage, and rural immiseration became universal across all British provinces, sparking widespread peasant rebellions (such as the Deccan Riots of 1875 and the Tebhaga and Telangana movements).`,
  },
  {
    kind: 'compare',
    leftTitle: 'Colonial Zamindari Model (Permanent Settlement)',
    rightTitle: 'Colonial Ryotwari Model (Munro / Direct)',
    rows: [
      {
        aspect: 'Ownership Recognition',
        left: 'Feudal intermediary zamindars recognised as legal private landowners.',
        right: 'Individual peasant cultivators (ryots) recognised as registered holders.',
      },
      {
        aspect: 'Revenue Extraction',
        left: 'Fixed permanent cash tribute paid by zamindar; state ignored tenant exploitation.',
        right: 'Periodically revised high state assessments paid directly by cultivator.',
      },
      {
        aspect: 'Intermediary Chains',
        left: 'Intense sub-infeudation with multiple tiers of absentee rent collectors.',
        right: 'Direct state-cultivator link initially, but debt led to moneylender takeover.',
      },
      {
        aspect: 'Final Convergence',
        left: 'Perpetual agrarian distress, tenant evictions, and stagnation.',
        right: 'Moneylenders captured mortgages, turning ryots into de facto rack-rented tenants.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Post-Independence Land Reforms: The Three Approaches (P.C. Joshi)

Upon gaining independence in 1947, the national leadership inherited a crippled, semi-feudal agrarian structure. Sociologist [[thinker:P.C. Joshi]] demonstrated that three conflicting ideological approaches contested the direction of post-independence land reforms:

| Ideological Approach | Guiding Principle & Method | Key Proponents & Movements | Empirical Outcome & Sociological Verdict |
|---|---|---|---|
| **1. The Gandhian Approach** | Moral Trusteeship; voluntary surrender of surplus land (*dan*) through moral appeal. | [[thinker:Vinoba Bhave]] (Bhoodan & Gramdan Movement, 1951). | **Failure:** Out of 50M acre target, only 4M acres collected; < 1M acres redistributed, mostly barren, rocky, or litigated tracts. |
| **2. The Marxist Approach** | Revolutionary class struggle; violent overthrow of landlords and forcible peasant land seizures. | [[thinker:Karl Marx]] paradigm; Naxalbari uprising (1967), Telangana revolt (1946–51). | **Localized insurgency:** Crushed by state security apparatus, yet forced ruling elites to acknowledge agrarian crisis. |
| **3. The Radical Nationalist Approach** | Constitutional parliamentary legislation; state-directed ceiling caps and tenancy regulation. | [[thinker:Jawaharlal Nehru]], Planning Commission, Central Land Reforms Committee. | **Official state policy:** Abolished feudal intermediaries, but subverted by landed legislators through legal loopholes. |

## The Four Pillars of Land Reform Legislation

Under the Seventh Schedule of the Indian Constitution, **land is an Entry 18 State Subject**. Consequently, land reform legislations were enacted and implemented by individual state assemblies, leading to immense interstate variations:

1. **Abolition of Intermediaries (Zamindari Abolition Acts):** The most unambiguous success of Indian land reforms. Passed in the early 1950s, these acts legally dispossessed feudal zamindars, bringing an estimated **20 to 25 million superior tenants into direct contact with the state**. Feudal privileges (*nazarana*, *begar*) were formally abolished. However, generous financial compensations were paid to dispossessed landlords, and crucial loopholes allowed them to retain thousands of acres under the pretext of personal cultivation.
2. **Tenancy Reforms:** Aimed at protecting vulnerable sharecroppers through three statutory measures: (a) regulation of fair rents (capping rent at one-fourth to one-fifth of gross produce), (b) security of tenure, and (c) conferment of ownership rights to long-term tillers. **The Unintended Backlash:** To prevent tenants from acquiring permanent occupancy rights, landlords executed pre-emptive mass evictions, turning registered tenants into informal, oral, unrecorded sharecroppers (*bataidars*).
3. **Imposition of Land Ceilings:** Statutes fixing the maximum acreage an individual or family could own, with surplus land to be acquired by the state and distributed among landless Dalits. **Widespread Failure:** Landlords exploited legal loopholes, registering excess acres under fictitious or surrogate names (*benami transfers*), transferring titles to relatives, domestic servants (*mundus*), or even domestic cattle. Massive exemptions granted to orchards, tea gardens, cattle-breeding farms, and religious trusts enabled landlords to legally retain immense estates.
4. **Consolidation of Holdings (*Chakbandi*):** Reorganising scattered, fragmented agricultural plots into contiguous farms to enhance irrigation efficiency and mechanisation. This succeeded brilliantly in **Punjab, Haryana, and Western Uttar Pradesh**, creating the infrastructural foundation for the Green Revolution. However, it collapsed across Eastern India due to administrative corruption and peasant fears of losing fertile ancestral plots.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: '1. Abolition of Intermediaries',
        text: 'Eliminated feudal zamindars; brought 20M superior tenants into direct state contact.',
      },
      {
        label: '2. Tenancy Regulation',
        text: 'Capped rents and tenure; landlords retaliated with pre-emptive tenant evictions.',
      },
      {
        label: '3. Ceiling & Redistribution',
        text: 'Capped max holdings; subverted by benami transfers and orchard exemptions.',
      },
      {
        label: '4. Land Consolidation',
        text: 'Merged fragmented parcels; paved the way for Green Revolution in NW India.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Socio-Political Consequences: Selective Transformation vs. Persistent Landlessness

Sociological evaluations of land reforms reveal a profound paradox: while land reforms successfully dismantled the pre-colonial feudal aristocracy, they failed to create an egalitarian agrarian society. Instead, they produced a **selective agrarian transformation**:

### 1. Rise of the "Bullock Capitalists" and Intermediate Castes
Political scientists [[thinker:Lloyd & Susanne Rudolph]] demonstrated that the true beneficiaries of land reforms were neither the old feudal aristocracy nor the landless Dalit labourers, but rather the **intermediate peasant castes**—such as the Jats in Western UP and Haryana, Yadavs and Kurmis in Bihar, Vokkaligas and Lingayats in Karnataka, and Marathas in Maharashtra. Having acquired secure ownership of medium-sized holdings (typically 5 to 15 acres), these self-employed peasant proprietors utilised family labour and bullock technology to modernise cultivation, emerging as the dominant economic and political force in rural India.

### 2. Dislodgement of the Congress and Rise of Regional Agrarian Parties
Political scientist [[thinker:Paul Brass]] showed how land reforms reshaped the national political landscape. Historically, the Indian National Congress was dominated by an alliance of traditional upper castes and urban professionals. As newly empowered intermediate peasant castes consolidated land wealth, their political ambitions clashed with upper-caste hegemony. Led by peasant champions like [[thinker:Chaudhary Charan Singh]], these intermediate agrarian castes formed powerful regional parties (such as the Bharatiya Kranti Dal, Samajwadi Party, RJD, and Lok Dal), eventually defeating the Congress in 1977 and establishing peasant dominance in state legislatures.

### 3. Worsening of Inequality and the Perpetuation of Landlessness
Senior economist [[thinker:Malcolm Adiseshiah]] and administrator [[thinker:N.C. Saxena]] pointed out that by triggering defensive evictions, land reform legislations actually intensified rural pauperization. Secure tenants who had cultivated the same plots for generations were reduced overnight to precarious daily wage agricultural labourers (*mazdoors*). Furthermore, land distribution bypassed Dalit agricultural labourers, who lacked the political leverage to claim surplus ceiling land.

### 4. Gender Blindness in Land Reform Legislation
Sociologists [[thinker:S.L. Doshi & P.C. Jain]] and Walter Fernandes highlighted that land reform laws exhibited systemic patriarchal bias. Surplus land titles (*pattas*) were almost exclusively registered in the names of male household heads, rendering women cultivators legally invisible and propertyless despite contributing the bulk of agricultural labour.

### 5. Regional Divergence: Political Will and Peasant Mobilization
The success of land reforms was sharply polarised along regional lines:
- **High Success (Kerala and West Bengal):** In Kerala (Land Reforms Act 1969) and West Bengal (*Operation Barga* 1978 under Hare Krishna Konar), long-term left-wing peasant mobilization (*Kisan Sabhas*) created the grassroots political will necessary to record 1.4 million sharecroppers (*bargadars*) and guarantee permanent inheritable tenancy rights.
- **Widespread Evasion (The Hindi Heartland):** In Uttar Pradesh and Bihar, the state administrative machinery was thoroughly captured by large landowning interests, resulting in cosmetic compliance, judicial delays, and violent landlord armies (such as the Ranvir Sena) crushing landless Dalit claims.`,
  },
  {
    kind: 'keyTerm',
    term: 'Agrarian Class Triad (Malik-Kisan-Mazdoor)',
    meaning:
      'Daniel Thorner’s classification of rural society based on property rights, physical work, and income source into rentier proprietors, working peasants, and wage labourers.',
  },
  {
    kind: 'keyTerm',
    term: 'Thesis of Indistinguishability',
    meaning:
      'H. Venkatasubbiah’s historical thesis showing that by the 1940s, high revenue demands, debt forfeiture, and moneylending caused Zamindari, Ryotwari, and Mahalwari systems to converge into identical exploitative distress.',
  },
  {
    kind: 'keyTerm',
    term: 'Bullock Capitalists',
    meaning:
      'Lloyd and Susanne Rudolph’s concept for self-employed intermediate-caste farmers holding 2.5 to 15 acres who utilised family labour and bullock capital to achieve rural dominance.',
  },
  {
    kind: 'keyTerm',
    term: 'Benami Transfers & Personal Cultivation',
    meaning:
      'Legal evasions whereby landlords bypassed ceiling caps by transferring land titles to surrogate names or claiming thousands of acres as exempt under "self-cultivation" (khas land).',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'The hand-mill gives you society with the feudal lord; the steam-mill, society with the industrial capitalist.',
    context: 'Highlighting how material relations of production and technological infrastructure determine the agrarian class hierarchy.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'yogendra-singh',
    quote: 'Land reforms weakened traditional feudal aristocracies but empowered middle peasant castes rather than landless labourers.',
    context: 'Evaluating the selective structural mobility produced by post-independence land legislation in India.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Paper 1 ↔ Paper 2 Integration: Mode of Production & Class Mobilisation',
    body: 'In UPSC questions on agrarian structure, connect post-colonial land reforms with Paper 1 class and stratification concepts. Thorner’s Malik-Kisan-Mazdoor triad bridges Weberian status groups with Marxist class analysis. The failure of ceiling legislation illustrates the Marxist critique that the state apparatus acts as the executive committee of the ruling agrarian bourgeoisie (A.R. Desai).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Painting Land Reforms as a 100% Failure',
    body: 'Never write in your answer that land reforms in India were an absolute failure. Always disaggregate your assessment: (1) Intermediary abolition was 90% successful, eliminating 20M feudal zamindars; (2) Tenancy and Ceilings largely failed in North India; (3) West Bengal (Operation Barga) and Kerala achieved historic success due to organised peasant mobilization.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Revision Mnemonic: P.C. Joshi’s 3 Approaches (G-M-R)',
    body: 'Remember G-M-R for ideological approaches to land reform: G = Gandhian (Moral Trusteeship, Bhoodan, Vinoba Bhave); M = Marxist (Violent class war, peasant seizure, Naxalite/Telangana); R = Radical Nationalist (State-led legislation, socialistic pattern, Nehruvian Five-Year Plans).',
  },
  {
    kind: 'answerBox',
    intro:
      'Post-independence land reforms dismantled the traditional colonial feudal aristocracy but created a selective agrarian transformation that left bottom-tier landlessness virtually intact.',
    points: [
      'Elimination of top-tier intermediaries: Zamindari abolition successfully removed 20 million parasitic tax collectors, establishing direct state-cultivator fiscal links.',
      'Rise of intermediate peasant castes: Land ownership transferred from upper-caste absentee landlords to middle castes (Jats, Yadavs, Kurmis, Vokkaligas), creating the "bullock capitalist" class.',
      'Defensive evictions and tenant pauperization: Landlords preempted tenancy reform acts by evicting registered tenants, converting secure tillers into insecure daily wage labourers.',
      'Subversion of ceiling statutes: Widespread benami transfers and generous exemptions (orchards, trusts) resulted in less than 2% of agricultural land being redistributed nationally.',
      'Exclusion of Dalits and women: Dalit agricultural labourers remained landless due to lack of political power, while women cultivators were denied independent patta rights.',
      'Regional divergence: Left-led political will in West Bengal (Operation Barga) and Kerala contrasted sharply with landlord capture of state assemblies in Bihar and Uttar Pradesh.',
    ],
    conclusion:
      'Indian land reforms altered the caste composition of agrarian dominance without resolving underlying agrarian inequality, consolidating power in intermediate peasant castes while preserving structural rural poverty.',
  },
]

export const topic2En = {
  summary,
  mindMap,
  sections,
}
