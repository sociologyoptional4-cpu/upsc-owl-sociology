import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

const summary =
  'Analyzes India’s agrarian class structure from colonial semi-feudalism to contemporary capitalist agriculture. Compares Daniel Thorner’s Malik-Kisan-Mazdoor typology with André Béteille’s sociological framework, examines the agrarian transition through commercialization and globalization, and dissects the caste-class nexus creating systemic rural poverty and footloose labour.'

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 1 — Agrarian Class Structure',
  center: 'Agrarian Class Structure',
  subtitle: 'Thorner Typology • Béteille Matrix • Capitalist Transition • Caste-Class Nexus',
  branches: [
    {
      title: '1. Daniel Thorner’s Agrarian Typology',
      color: 'lavender',
      thinkers: ['Daniel Thorner', 'Karl Marx', 'Utsa Patnaik'],
      points: [
        'Three-fold classification based on income source, field work, and land control',
        'Malik (Proprietor): Big absentee rentiers and rich resident landowners; no manual field labour',
        'Kisan (Working Peasant): Family labour enterprise; self-cultivation with occasional wage help',
        'Mazdoor (Agricultural Labourer): Landless workers, tenants-at-will, and bonded sharecroppers',
      ],
    },
    {
      title: '2. André Béteille’s Sociological Framework',
      color: 'yellow',
      thinkers: ['André Béteille', 'Max Weber', 'M.N. Srinivas'],
      points: [
        'Two distinct dimensions: Technological arrangements vs. social arrangements of production',
        'Sripuram study (Tanjore): Shift from harmonic caste-class overlap to differentiated open classes',
        'Emergence of West Bengal Jotedars as intermediate agrarian power holders',
        'Refusal to fit Indian agrarian complexity into rigid Eurocentric binary class models',
      ],
    },
    {
      title: '3. Commercialization & Neoliberal Transition',
      color: 'mint',
      thinkers: ['Jan Breman', 'Bina Agarwal', 'Utsa Patnaik', 'K. Nagaraj'],
      points: [
        'Green Revolution to globalization: Commercial cash-crops, high input costs, and price volatility',
        'Mechanization and labour displacement: Up to 50% drop in agricultural labour demand (Billings & Singh)',
        'Footloose Labour (Jan Breman): Dissolution of patron-client ties into neo-bondage and circular migration',
        'Feminization of agricultural distress: Women left with low-wage manual drudgery as men migrate',
      ],
    },
    {
      title: '4. Caste-Class Nexus & The Extreme Poor',
      color: 'pink',
      thinkers: ['B.R. Ambedkar', 'Gail Omvedt', 'Jan Breman', 'Sukhadeo Thorat'],
      points: [
        'Cumulative inequality: High ritual status aligned with landownership; Dalit status with landlessness',
        'Over 70% Dalit rural households remain landless or near-landless wage labourers',
        'Institutionalized violence: Wage demands met with economic boycotts and atrocities (Kilvenmani, Bathani Tola)',
        'Persistence of debt bondage (Halipratha, Kamiya) disguised as modern labour advances',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u06-01-indian-class-pyramid.webp',
    alt: 'Agrarian class structure in India showing Malik, Kisan, and Mazdoor tiers',
    caption:
      'Agrarian Class Pyramid: Structural hierarchy from large landowners (Maliks) to small peasants (Kisans) and landless wage labourers (Mazdoors).',
  },
  {
    kind: 'md',
    body: `## Understanding Agrarian Class Structure in India

Agrarian class structure refers to the systematic framework through which land, agricultural capital, and farm labour are owned, controlled, and divided among different rural groups. In village India, land is not merely an economic asset; it is the fundamental axis of social status, political dominance, and power relations. While traditional sociology viewed Indian villages through the singular lens of caste, modern sociological inquiry demonstrates that economic relations around land form a distinct and potent system of class stratification that constantly interacts with caste.

Before colonial rule, land was not an alienable commodity; customary usufruct rights were governed through community and royal arrangements. British colonial land settlements—specifically the ==Permanent Settlement (Zamindari)==, ==Ryotwari==, and ==Mahalwari== systems—fundamentally transformed land into private property that could be mortgaged, leased, and auctioned. This created an unprecedented agrarian hierarchy characterized by parasitic absentee landlords, exploited tenant sharecroppers, and a swelling underclass of landless agricultural labourers.

Post-independence land reforms abolished statutory intermediary tenures like Zamindari, yet failed to achieve meaningful land redistribution due to legislative loopholes and political collusion. The subsequent introduction of the ==Green Revolution== in the late 1960s, followed by economic liberalization in 1991, accelerated the capitalist transformation of agriculture. Today, the agrarian class structure is dynamic, commercially volatile, and marked by deepening regional differentiation.

| Agrarian Class | Primary Economic Basis | Nature of Manual Labour | Typical Social/Caste Correlates |
| :--- | :--- | :--- | :--- |
| **Malik (Landlord / Capitalist Farmer)** | Large landholding, agricultural surplus, rental income, capital inputs | Avoids manual field labour; supervises wage labour | Upper castes (Brahmin, Rajput) and dominant peasant castes (Patidar, Jat, Maratha) |
| **Kisan (Small / Middle Peasant)** | Small to medium self-owned family holding; subsistence + market | Primary reliance on self and family labour | Intermediate backward castes (OBCs, traditional cultivator communities) |
| **Mazdoor (Agricultural Labourer)** | Landless or sub-marginal plot (<1 acre); wage labour | Exclusively dependent on hard manual field labour | Scheduled Castes (Dalits), marginalized Adivasis, and lower Most Backward Castes |`,
  },
  {
    kind: 'compare',
    leftTitle: 'Daniel Thorner: Economic Typology (1956)',
    rightTitle: 'André Béteille: Sociological Matrix (1974)',
    rows: [
      {
        aspect: 'Analytical Focus',
        left: 'Economic relations of production: land rights, income source, and manual field labour.',
        right: 'Interaction between technological arrangements and social relations; caste-class-power overlap.',
      },
      {
        aspect: 'Class Categories',
        left: 'Three-tier structural model: Malik (proprietor), Kisan (working peasant), and Mazdoor (labourer).',
        right: 'Multi-layered agrarian hierarchy: Landlords, owner-cultivators, tenants, sharecroppers, and wage hands.',
      },
      {
        aspect: 'Field Evidence',
        left: 'All-India macro analysis synthesizing National Sample Surveys and agrarian census data.',
        right: 'Intensive micro-sociological field study in Sripuram (Tanjore, Tamil Nadu) and West Bengal.',
      },
      {
        aspect: 'Dynamic Direction',
        left: 'Stressed the emergence of capitalist farmers and wage exploitation in irrigated belts.',
        right: 'Demonstrated progressive differentiation: caste status, class standing, and political power delink.',
      },
    ],
  },
  {
    kind: 'md',
    body: `### Daniel Thorner’s Malik-Kisan-Mazdoor Typology

In his seminal 1956 work, [[thinker:Daniel Thorner]] formulated a comprehensive three-fold classification of India's agrarian population. Rather than relying on simple acreage thresholds—which vary drastically between dry arid regions and canal-irrigated river basins—Thorner established three objective sociological criteria:
1. **Type of income earned**: Agricultural rent, profits of enterprise, or daily wages.
2. **Nature of rights in soil**: Proprietary ownership, tenurial occupancy, or complete landlessness.
3. **Extent of manual field labour performed**: Complete abstention from physical labour, reliance on family labour, or performing heavy field tasks for others.

Through these criteria, Thorner identified three distinct rural classes:
- **Malik (Proprietors / Landlords)**: Whose agricultural income is derived primarily from property rights in land (through crop rent or hired labour profits). They are divided into *big absentee landlords* who live in towns, and *rich resident landholders* who manage farms. Crucially, Maliks abstain from manual field tasks, viewing ploughing as degrading.
- **Kisan (Working Peasants)**: Small-scale owner-cultivators whose holdings are primarily worked by the farmer and his immediate household. They produce primarily for family subsistence, selling surplus only to meet compulsory cash obligations.
- **Mazdoor (Agricultural Labourers)**: Rural proletarians who own little or no land and derive their livelihood by selling manual labour to Maliks and rich Kisans. They include permanent farm servants (often in bonded conditions) and free daily-wage casual labourers.

[[eg:In Western UP sugarcane belts, Jat large landholders act as capitalist Maliks employing hired Bihari migrant Mazdoors, while small Saini farmers operate as self-cultivating Kisans.]]

### André Béteille’s Sociological Matrix

[[thinker:André Béteille]] challenged mechanical Marxist formulations that superimposed European binary class models (bourgeoisie vs. proletariat) onto Indian villages. In *Caste, Class, and Power* (1965) and *Studies in Agrarian Social Structure* (1974), Béteille argued that agrarian structure must be analyzed through two interdependent dimensions:
1. **Technological Arrangements**: Soil fertility, availability of canal or tube-well irrigation, crop cycle, and implements of production.
2. **Social Arrangements of Production**: The legal rights, tenurial contracts, and social hierarchies governing those who till the soil.

In his fieldwork in Sripuram (Tanjore delta), Béteille observed that traditional village life was characterized by a **harmonic overlap**: Brahmins held ownership of land (Mirasdars), Non-Brahmins served as tenant-cultivators, and Adi-Dravidas (Dalits) performed landless labour. With modern tenancy legislation, adult franchise, and market forces, this rigid overlap fractured into a **disharmonic system** where an individual's caste rank no longer strictly determines their agrarian class standing.

Béteille also highlighted regional institutions, such as the ==Jotedars== of rural Bengal—wealthy intermediary peasant-capitalists who accumulated vast land rights under the Permanent Settlement, sub-leasing to bargadars (sharecroppers) while controlling local grain trade and rural credit.

[[link:Paper 1 Stratification ↔ Paper 2 Agrarian Structure: Weber’s multidimensional stratification (Class, Status, Party) directly mirrors Béteille’s triadic framework of Caste, Class, and Power.]]`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Colonial Land Settlements',
        text: 'Zamindari and Ryotwari create private property, monetization, and peasant pauperization.',
      },
      {
        label: 'Post-Independence Reforms',
        text: 'Intermediary abolition weakens absentee Zamindars; rich tenant castes become dominant owners.',
      },
      {
        label: 'Green Revolution Tech',
        text: 'Capital-intensive seeds and tubewells enrich progressive farmers; mechanization displaces labour.',
      },
      {
        label: 'Neoliberal Global Integration',
        text: 'High-cost cash crops, price volatility, ecological crises, and circular migrant precarity.',
      },
    ],
  },
  {
    kind: 'md',
    body: `### Commercialization, Globalization, and Changing Agrarian Classes

The integration of Indian agriculture into global commodity markets has fundamentally destabilized traditional village relations. While early commercialization during British rule was coercive (e.g., forced indigo and opium cultivation), contemporary commercialization is driven by corporate supply chains, contract farming, hybrid biotechnology, and international trade agreements.

Key transformations in the agrarian class structure include:
- **Rise of Agrarian Capitalists**: Intermediate dominant castes (Patidars, Jats, Marathas, Kammas) reinvested agricultural surplus into agro-processing, cold storages, transport businesses, and private educational institutions.
- **De-peasantization and Proletarianization**: Small and marginal peasants are squeezed by escalating input costs (diesel, hybrid seeds, pesticides) and unpredictable market prices, forcing them to sell land and join the ranks of wage labour. [[thinker:Utsa Patnaik]] demonstrated this polarization through her *Labour Exploitation Criterion*.
- **The Concept of Footloose Labour**: [[thinker:Jan Breman]]’s landmark fieldwork in South Gujarat demonstrated the decline of traditional paternalistic patronage (the *Halipratha* system between Anavil Brahmin landlords and Halpati tribal labourers). In its place arose an unencumbered, brutally exploited, and circular migrant workforce—termed ==Footloose Labour==—constantly migrating between seasonal sugarcane cutting, brick kilns, and urban construction sites.
- **Feminization of Agricultural Distress**: Sociologist [[thinker:Bina Agarwal]] notes that as working-age men migrate to informal urban jobs, rural women remain trapped in low-productivity, unmechanized agricultural labour without legal land titles or institutional credit access.

### Caste and Class Nexus in Creating the Extreme Poor

The category of the "extreme poor" in rural India is not an accidental economic anomaly; it is the structural outcome of the historic confluence between caste hierarchy and class relations. [[thinker:B.R. Ambedkar]] famously noted that caste is not merely a division of labour, but a **division of labourers**.

In rural India, the landless proletariat is overwhelmingly composed of Scheduled Castes (Dalits) and Scheduled Tribes (Adivasis):
1. **Historical Asset Deprivation**: Under classical Dharmashastric codes, lower castes were religiously prohibited from owning land or accumulating capital, cementing their structural dependence on dominant caste landlords.
2. **Persistence of Neo-Bondage**: While overt bonded labour is legally abolished under the Bonded Labour System (Abolition) Act 1976, debt bondage persists through seasonal wage advances (*peshgi*) that chain entire families to brick kilns or sugarcane harvesting contractors.
3. **Repression of Wage Demands**: When Dalit agricultural workers organize to demand statutory minimum wages or land distribution, dominant landed castes mobilize private caste militias (e.g., Ranvir Sena in Bihar) or enforce social boycotts (*nakabandi*), denying them access to village wells, grazing lands, and employment.

[[eg:Historical massacres at Kilvenmani (1968, Tamil Nadu), Bathani Tola (1996, Bihar), and Tsundur (1991, Andhra Pradesh) were direct violent responses by landed elites against Dalit labourers demanding dignified wages and dignity.]]`,
  },
  {
    kind: 'keyTerm',
    term: 'Malik-Kisan-Mazdoor',
    meaning:
      'Daniel Thorner’s three-fold agrarian classification based on income source (rent vs. profit vs. wages), field labour participation, and control over landed property.',
  },
  {
    kind: 'keyTerm',
    term: 'Footloose Labour',
    meaning:
      'Jan Breman’s term for circulating, unorganized migrant workers stripped of traditional security who drift between seasonal rural harvesting and precarious urban informal jobs.',
  },
  {
    kind: 'keyTerm',
    term: 'Feminization of Agriculture',
    meaning:
      'The increasing proportion of women in agricultural manual labour resulting from male rural-to-urban distress migration, documented by Bina Agarwal.',
  },
  {
    kind: 'keyTerm',
    term: 'Jotedar',
    meaning:
      'A class of wealthy intermediary landholders in Bengal who controlled rural credit, grain trade, and vast tracts of land cultivated through sharecroppers (bargadars).',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Connecting Land Reforms to Class Mobilization',
    body:
      'In UPSC answers, highlight how land reforms were unevenly implemented: successful tenancy reforms in Kerala and West Bengal (Operation Barga) empowered tenant sharecroppers, whereas in northern states, dominant peasant castes captured political power to protect their medium-to-large capitalist holdings.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Avoid Over-Homogenizing the Rural Peasantry',
    body:
      'Never treat the Indian peasantry as a uniform, undifferentiated mass. Always contrast rich capitalist farmers (who benefit from MSP and subsidized power) with marginal peasants and landless Dalit labourers who suffer during agrarian crises.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Caste-Class Confluence Formula',
    body:
      'Ritual Untouchability + Complete Landlessness + Asymmetric Debt = Extreme Rural Poverty. Economic dispossession cannot be tackled in village India without directly confronting caste-based social exclusion.',
  },
  {
    kind: 'answerBox',
    intro:
      'A high-scoring answer on the changing agrarian class structure in India must evaluate both technological modernization and the enduring realities of caste-based social stratification:',
    points: [
      'Decline of traditional patron-client (Jajmani/Halipratha) relations and replacement by commodified, short-term contractual wage labor.',
      'Rise of intermediate dominant castes (Jats, Marathas, Patidars) as rural capitalist oligarchs who control agricultural cooperatives, local politics, and agro-industries.',
      'Fragmentation of operational holdings leading to the semi-proletarianization of marginal peasants who combine farming with informal off-farm wage labour.',
      'Massive expansion of circular, footloose migrant labour across state borders (e.g. Bihar/UP labourers working in Punjab/Haryana paddy fields).',
      'Intensification of agrarian distress, non-remunerative crop prices, and high indebtedness culminating in widespread farmer suicides.',
      'Feminization of rural agricultural work with women bearing manual burdens without corresponding legal property ownership or institutional empowerment.',
    ],
    conclusion:
      'Indian agrarian class structure is undergoing a protracted and uneven capitalist transition, wherein traditional agrarian hierarchies mutate into modern forms of contractual exploitation and precarious labour circulation.',
  },
]

export const topic1En = { summary, mindMap, sections }
