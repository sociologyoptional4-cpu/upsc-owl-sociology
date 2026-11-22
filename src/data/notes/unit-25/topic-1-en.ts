import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic1EnMindMap: MindMapData = {
  title: 'Topic 1 · Crisis of Development, Displacement & Sustainability',
  center: 'Development, Displacement & Ecology',
  subtitle: 'Nehruvian Extractivism • DIDR & Cernea IRR • LARR Act 2013 • Just Sustainability',
  branches: [
    {
      title: '1. Developmental State & Displacement',
      color: 'lavender',
      thinkers: ['Walter Fernandes', 'Michael Cernea', 'Ramachandra Guha'],
      points: [
        'Post-independence modernization: "Temples of modern India" causing massive ecological footprints',
        'Fernandes estimates: 60M+ displaced (1947–2004), disproportionately Adivasis (40%) and Dalits (20%)',
        'Cernea’s IRR Model: 8 distinct impoverishment risks including social disarticulation',
        'Subaltern burden: Less than 25% of project-affected persons ever effectively rehabilitated',
      ],
    },
    {
      title: '2. Political Economy & Capital-Intensive Growth',
      color: 'yellow',
      thinkers: ['Karl Marx', 'David Harvey', 'Gail Omvedt'],
      points: [
        'Accumulation by Dispossession: Commons enclosed for corporate mining, SEZs, and mega dams',
        'Metabolic rift: Capitalist extractivism severing organic metabolic interchange with nature',
        'Class reproduction: Peasantry and forest dwellers converted into casualized footloose wage labor',
        'State-capital nexus: Eminent Domain weaponized against customary community tenure',
      ],
    },
    {
      title: '3. Legal Frameworks: LARR 2013 vs 1894',
      color: 'mint',
      thinkers: ['Usha Ramanathan', 'Amita Baviskar', 'B.R. Ambedkar'],
      points: [
        'Colonial legacy: Land Acquisition Act 1894 gave unrestrained executive "Eminent Domain"',
        'LARR Act 2013 progressive paradigm: Mandatory SIA, prior consent (70–80%), and R&R packages',
        'Dilution pressures: State amendments and draft ordinances bypassing consent for infrastructure',
        'Implementation deficit: Cash payouts squandered without sustainable livelihood recreation',
      ],
    },
    {
      title: '4. Sustainability & Environmental Justice',
      color: 'pink',
      thinkers: ['Ulrich Beck', 'Joan Martinez-Alier', 'Julian Agyeman', 'Madhav Gadgil'],
      points: [
        'Risk Society (Beck): Modernity manufactures systemic hazards distributed onto powerless classes',
        'Gadgil-Guha taxonomy: "Omnivores" capturing state resources, leaving "Ecological Refugees" destitute',
        'Environmentalism of the poor: Southern livelihood ecology vs Northern post-materialist wilderness',
        'Just Sustainability: Reconciling tribal forest rights (FRA 2006) with national economic transition',
      ],
    },
  ],
}

export const topic1EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u15-01-development-displacement-sustainability.webp',
    alt: 'P2 Unit 15 infographic: Displacement & Sustainability — Big Dams, 50M Displaced Persons & Just Sustainability',
    caption:
      'Big Dams, 50M Displaced Persons & Just Sustainability (Displacement & Sustainability).',
  },
  {
    kind: 'md',
    body: `## The Crisis of Development: Sociological Foundations

Modern economic development in post-colonial India was built upon massive state-directed infrastructural interventions. Large dams, opencast coal mines, industrial corridors, and power plants were envisioned by Jawaharlal Nehru as the secular "temples of modern India." However, sociologists point out that this top-down techno-managerial paradigm externalized its catastrophic social and ecological costs onto the most vulnerable subaltern strata.

Instead of broad-based shared prosperity, capital-intensive modernization generated deep structural contradictions. It created ==Development-Induced Displacement and Resettlement (DIDR)==, widespread ecological degradation, and systemic pauperization of indigenous communities.

### The Scale and Asymmetry of Displacement

The demographic volume of development displacement in independent India represents one of the largest peacetime transfers of population in human history. Pioneer sociologist [[thinker:Walter Fernandes]] demonstrated through exhaustive empirical state-level surveys that over 60 million persons were displaced or dispossessed by development projects between 1947 and 2004. 

Crucially, this dispossession has been violently asymmetric. While Scheduled Tribes (Adivasis) constitute approximately 8.6% of India's total population according to Census 2011, they represent upwards of 40% of all displaced persons. Scheduled Castes (Dalits), who traditionally hold precarious customary land rights as agricultural laborers, constitute another 20% of the displaced population. Fernandes documented that less than one-fourth of these project-affected persons (PAPs) were ever systematically rehabilitated or provided alternative sustainable livelihoods.

| Dimension | Colonial/Nehruvian Paradigm | Environmental Justice Paradigm |
| :--- | :--- | :--- |
| **Guiding Doctrine** | Eminent Domain (State absolute ownership) | Democratic Trusteeship & Customary Rights |
| **Development Metric** | GDP growth, mega-infrastructure, steel output | Ecological sustainability & Human Capabilities |
| **Affected Communities** | Regarded as "inevitable collateral damage" | Rights-bearing partners with Free & Prior Consent |
| **Remedy Approach** | One-time cash compensation for titled land | Comprehensive livelihood & cultural restoration |

### Cernea's Impoverishment Risks and Reconstruction (IRR) Model

World Bank sociologist [[thinker:Michael Cernea]] formulated the classic ==Impoverishment Risks and Reconstruction (IRR)== model to explain why DIDR systematically causes destitution rather than mobility. Cernea identified eight interconnected impoverishment risks:
1. **Landlessness**: Expropriation of productive agricultural plots without equivalent land-for-land restitution.
2. **Joblessness**: Destruction of agrarian occupations, artisanal crafts, and common property resource (CPR) gathering.
3. **Homelessness**: Loss of shelter and cultural spatial architecture, forcing families into precarious peri-urban shanties.
4. **Marginalization**: Downward socio-economic mobility, debt traps, and erosion of self-esteem.
5. **Food Insecurity**: Collapse of subsistence agricultural cycles and wild forest foraging networks.
6. **Increased Morbidity and Mortality**: Exposure to waterborne diseases, unsanitary resettlement colonies, and trauma.
7. **Loss of Access to Common Property**: Enclosure of forests, grazing pastures, and fishing waters [[eg:Submergence of community mahua and tendu collection grounds in the Narmada Valley]].
8. **Social Disarticulation**: Fragmentation of kinship structures, mutual-aid networks, and ancestral sacred groves.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Sociological Lens: Accumulation by Dispossession',
    body: 'In UPSC answers, avoid treating displacement merely as an administrative rehabilitation failure. Conceptualize it sociologically using David Harvey’s "Accumulation by Dispossession" and Karl Marx’s "Primitive Accumulation". Mega-projects enclose public and tribal commons to facilitate private capital accumulation.',
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Eminent Domain Invocation', text: 'State gazettes customary lands as public purpose' },
      { label: 'Commons Enclosure', text: 'Forests, rivers, and grazing grounds alienated' },
      { label: 'IRR Cascading Shock', text: 'Cernea 8 risks trigger social disarticulation' },
      { label: 'Informal Proletarianization', text: 'Self-sufficient Adivasis become casual urban laborers' },
    ],
  },
  {
    kind: 'md',
    body: `## The Political Economy of Displacement: Dams, Mines & SEZs

Displacement is not an accidental byproduct of development; it is structurally embedded in capital-intensive development strategies. When heavy capital from international finance institutions and domestic corporate conglomerates enters resource-rich hinterlands, land becomes an extractive commodity rather than a sacred habitat.

Sociologist [[thinker:Amita Baviskar]], in her celebrated study of the Narmada Valley *In the Belly of the River*, revealed how state discourse frames dams like the Sardar Sarovar Project as monuments of national progress while delegitimizing tribal resistance as anti-national obscurantism. The state weaponizes the colonial doctrine of ==Eminent Domain==, which presumes that public authority holds sovereign right over all private property for the "public good."

[[eg:In the Narmada Valley, thousands of Bhil and Bhilala families whose ancestral lands were submerged under the Sardar Sarovar reservoir received fragmented compensation plots in unfamiliar linguistic zones, shattering their clan-based reciprocal labor arrangements (Laha).]]

### LARR Act 2013 vs Colonial Land Acquisition Act 1894

For over a century, land expropriation was governed by the colonial Land Acquisition Act of 1894, under which bureaucratic collectors possessed unilateral authority to acquire land without consulting local communities or providing rehabilitation. After nationwide grassroots uprisings in Singur, Nandigram, and Kalinganagar, Parliament enacted the ==Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013 (LARR Act)==.

The LARR Act 2013 fundamentally revised the statutory architecture by introducing four key democratic mechanisms:
- **Prior Informed Consent**: Mandatory consent of 70% of land-owning families for Public-Private Partnership (PPP) projects, and 80% for private commercial projects.
- **Social Impact Assessment (SIA)**: Compulsory multi-disciplinary assessment evaluating whether project benefits outweigh human displacement costs.
- **Enhanced Compensation**: Four times the market value in rural areas and twice the market value in urban localities.
- **Comprehensive R&R**: Statutory entitlements to housing, replacement agricultural land, employment allowances, and infrastructural amenities in resettlement colonies.

However, sociologists like Usha Ramanathan emphasize that state governments have progressively diluted these safeguards through regional amendment bills and executive exemptions, classifying large swathes of commercial acquisitions under fast-track industrial corridors or defense infrastructure.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Land Acquisition Act 1894 (Colonial)',
    rightTitle: 'LARR Act 2013 (Contemporary)',
    rows: [
      {
        aspect: 'Sovereign Doctrine',
        left: 'Absolute Eminent Domain with unchecked executive discretion',
        right: 'Regulated Eminent Domain conditioned on democratic consultation',
      },
      {
        aspect: 'Consent Threshold',
        left: 'Zero consent required; compulsory state acquisition',
        right: '70% consent for PPP, 80% for private commercial ventures',
      },
      {
        aspect: 'Impact Assessment',
        left: 'No assessment of social, cultural, or livelihood loss',
        right: 'Mandatory independent Social Impact Assessment (SIA)',
      },
      {
        aspect: 'Resettlement Mandate',
        left: 'Purely one-off monetary compensation without R&R duty',
        right: 'Legally enforceable Rehabilitation and Resettlement package',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Risk Society and Environmental Sustainability in India

The ecological consequences of unchecked extractivism extend far beyond immediate geographic displacement. Industrial effluence, groundwater depletion, open-cast strip mining, and greenhouse emissions transform local habitats into hazardous zones.

Sociologist [[thinker:Ulrich Beck]] formulated the theory of the ==Risk Society==, arguing that late modernity transitions from the classical industrial challenge of distributing *goods* (wealth, food, jobs) to managing *bads* (toxic pollutants, radioactive waste, ecological collapses). Beck noted that while ecological risks eventually become universal ("poverty is hierarchic, smog is democratic"), in stratified societies like India, risks are actively dumped onto vulnerable subaltern populations.

[[link:Paper 1 Stratification & Environment: Beck's Risk Society connects directly with Paper 2's analysis of environmental movements and tribal marginalization in central Indian mineral belts.]]

### Guha and Gadgil: Omnivores, Ecosystem People, and Ecological Refugees

Ecologist [[thinker:Madhav Gadgil]] and sociologist [[thinker:Ramachandra Guha]] conceptualized India's environmental conflict through a structural tripartite class typology:
1. **Omnivores**: The urban upper and middle classes, industrialists, and state elites who consume vast quantities of energy, timber, electricity, and mineral wealth while bearing none of the ecological costs.
2. **Ecosystem People**: Adivasis, pastoralists, small peasants, and artisanal fisherfolk who rely directly on unpriced natural resources from their immediate bioregion for survival.
3. **Ecological Refugees**: Former ecosystem people who have been uprooted from their forests and river valleys by mega-projects and forced into urban informal slums as unorganized manual scavengers, rickshaw pullers, and domestic servants.

Guha and Spanish economist [[thinker:Joan Martinez-Alier]] contrasted this Indian ==Environmentalism of the Poor== with affluent Northern environmentalism. While Western green movements prioritize aesthetic wilderness preservation, wildlife safari protection, and post-materialist leisure, Indian ecological struggles are intense material conflicts over daily survival, clean drinking water, and customary livelihood rights.

### Reconciling Conservation and Livelihoods: Just Sustainability

Urban environmental policy in India frequently lapses into what sociologists call "bourgeois environmentalism" or "authoritarian conservation" — evicting forest-dwelling tribes to create tiger reserves while permitting luxury tourist resorts and highway corridors through eco-sensitive zones. 

Urban planner [[thinker:Julian Agyeman]] pioneered the concept of ==Just Sustainability==, arguing that genuine ecological resilience cannot exist without social equity and democratic participation. In India, reconciling livelihoods with sustainability requires the robust operationalization of the ==Forest Rights Act, 2006 (FRA)== and the ==Panchayats (Extension to Scheduled Areas) Act, 1996 (PESA)==, which grant Gram Sabhas statutory power to protect community forest resources and veto unilateral industrial encroachments.`,
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karo: Don’t Confuse Western Ecology with Indian Movements',
    body: 'Never equate Indian environmental movements (like Chipko or Narmada Bachao Andolan) with Western post-material green activism (Ronald Inglehart). In India, ecological resistance is rooted in material livelihood survival and anti-caste/anti-capitalist subaltern defense, not luxury lifestyle choices.',
  },
  {
    kind: 'keyTerm',
    term: 'Development-Induced Displacement (DIDR)',
    meaning: 'The forced uprooting of human populations and destruction of customary habitats caused by state or private infrastructure, industrial, or mining projects.',
  },
  {
    kind: 'keyTerm',
    term: 'Eminent Domain',
    meaning: 'The sovereign power of the state to expropriate private or community land for presumed public purpose, historically used to dispossess subaltern populations.',
  },
  {
    kind: 'keyTerm',
    term: 'Impoverishment Risks and Reconstruction (IRR)',
    meaning: 'Michael Cernea’s conceptual model identifying eight systemic hazards (landlessness, joblessness, marginalization, etc.) that convert displaced persons into paupers.',
  },
  {
    kind: 'keyTerm',
    term: 'Environmentalism of the Poor',
    meaning: 'Joan Martinez-Alier and Ramachandra Guha’s framework analyzing ecological conflicts in the Global South as material struggles for survival, biomass, and human dignity.',
  },
  {
    kind: 'keyTerm',
    term: 'Risk Society',
    meaning: 'Ulrich Beck’s concept describing a modern societal stage where techno-economic development generates systemic manufactured hazards that elude institutional control.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Yaad Rakho: The 8 Risks of Cernea',
    body: 'Remember Cernea’s 8 risks with the acronym LJ-HM-FM-CS: Landlessness, Joblessness, Homelessness, Marginalization, Food insecurity, increased Morbidity, loss of Common property, Social disarticulation.',
  },
  {
    kind: 'answerBox',
    intro:
      'A model sociological answer on development displacement and sustainable livelihood reconciliation must integrate political economy, legal critique, and environmental justice frameworks:',
    points: [
      'Displacement is an intrinsic structural outcome of capital-intensive accumulation by dispossession (David Harvey), not an incidental administrative flaw.',
      'Walter Fernandes’ empirical data demonstrates the disproportionate subaltern burden: Adivasis account for over 40% of the 60 million displaced despite being 8.6% of the population.',
      'Cernea’s IRR model delineates how the destruction of Common Property Resources (CPRs) cascades into social disarticulation and intergenerational poverty.',
      'LARR Act 2013 represents a legislative transition from unchecked Eminent Domain to statutory consent and SIA, yet suffers from systematic state-level dilutions.',
      'True sustainability cannot be achieved through authoritarian conservation; it necessitates Julian Agyeman’s "Just Sustainability" via Gram Sabha empowerment under FRA 2006 and PESA 1996.',
    ],
    conclusion:
      'Development without social justice is predatory extractivism; genuine sustainability requires subordinating corporate capital accumulation to subaltern democratic rights.',
  },
]
