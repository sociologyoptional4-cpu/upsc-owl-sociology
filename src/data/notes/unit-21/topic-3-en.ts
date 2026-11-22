import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic3EnMindMap: MindMapData = {
  title: 'Topic 3 · Working Class in India',
  center: 'Working Class in India',
  subtitle: 'Structure & Social Composition • Committed Labour Thesis • Trade Unions • COVID-19 & New Labour Codes',
  branches: [
    {
      title: 'Structure & Social Composition',
      color: 'lavender',
      thinkers: ['Karl Marx', 'B.R. Ambedkar', 'Jan Breman', 'Sharit Bhowmik'],
      points: [
        'Internal segmentation: permanent organized core vs precarious unorganized periphery',
        'Caste intersection: Ambedkar on caste as not just division of labour, but division of labourers',
        'Subaltern concentration: Dalits, Adivasis, and Muslims heavily overrepresented in dirty work',
        'Gender segregation: women concentrated in home-based piece-rate work and domestic service',
      ],
    },
    {
      title: 'The Committed Labour Debate',
      color: 'yellow',
      thinkers: ['Clark Kerr', 'R.D. Lambert', 'N.R. Sheth', 'E.A. Ramaswamy'],
      points: [
        'Clark Kerr thesis: modernization requires breaking rural ties to form committed industrial labour',
        'Lambert’s Poona study: Indian workers show high factory commitment while retaining rural ties',
        'N.R. Sheth (Baroda): traditional social framework and caste patron-client ties inside modern factory',
        'Refuting peasant irrationality: dual orientation is an adaptive economic safety valve',
      ],
    },
    {
      title: 'Mobilization & Trade Union Decline',
      color: 'mint',
      thinkers: ['B.P. Wadia', 'Datta Samant', 'Sukomal Sen', 'K.P. Kannan'],
      points: [
        'Historical trajectory: early welfare/nationalist unions to AITUC (1920) and political party wings',
        '1982 Bombay Textile Strike: Datta Samant, collapse of mill sector, and decentralization to powerlooms',
        'Decline of union density: aggressive contractualization, outsourcing, and legal restrictions',
        'Platform gig precarity: algorithmic management (Uber, Zomato) preventing collective solidarity',
      ],
    },
    {
      title: 'COVID-19 & The Four Labour Codes',
      color: 'pink',
      thinkers: ['Jan Breman', 'Reetika Khera', 'Jayati Ghosh', 'Max Weber'],
      points: [
        'Lockdown crisis: sudden evaporation of wages exposing complete absence of social security',
        'Footloose circularity: long-distance walking revealing citizenship denial in destination cities',
        'The Four Codes (2020): Wages, Industrial Relations, Social Security, and Safety/Health (OSH)',
        'Sociological critique: formalization on paper alongside easing of retrenchment thresholds',
      ],
    },
  ],
}

export const topic3EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u11-01-urbanization-industry-flow.webp',
    alt: 'P2 Unit 11 infographic: Industry & Urban Settlements in India — Colonial Deindustrialization to Over-Urbanization',
    caption:
      'The Indian working class is characterized by deep caste and gender segmentation, shifting from militant organized unionism to contractual precarity, platform gig work, and circular migration.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 21 Visual 01',
  },
  {
    kind: 'md',
    body: `## The Structure and Social Composition of the Indian Working Class

The Indian working class is neither a uniform Marxian industrial proletariat nor an atomized Western labour market. It is a deeply stratified and fragmented social body where modern capitalist workplace relations intersect with entrenched primordial hierarchies of caste, religion, ethnicity, and gender.

Unlike early industrial Europe where millions were incorporated into formal factory employment, in India only a tiny sliver (less than 8–10%) enjoys formal employment with written contracts and statutory social security. The remaining 90%+ constitutes the ==Unorganized and Informal Working Class==.

### Caste and the "Division of Labourers"
In *Annihilation of Caste*, [[thinker:B.R. Ambedkar]] famously observed that the caste system is **not merely a division of labour, but a division of labourers**. It hierarchically grades workers into hereditary strata, systematically preventing collective cross-caste class consciousness.

Sociological studies reveal that caste directly dictates occupational placement within the industrial hierarchy:
1. **The Upper-Caste / Dominant Caste Stratum**: Occupies managerial, supervisory, white-collar technical, and skilled engineering positions.
2. **Intermediate and Agrarian Castes**: Found primarily in semi-skilled machine operations and formal permanent shop-floor positions.
3. **Dalits, Adivasis, and Most Backward Classes (MBCs)**: Systematically relegated to the bottom tier of hazardous, manual, and dirty tasks—cleaning chemical effluents, leather tanning, construction headloading, brick kilns, and municipal sanitation.
4. **Gender Disparity**: Women workers face double marginalization, concentrated in informal piece-rate subcontracting (garment stitching, beedi rolling) and low-paid domestic care, earning significantly lower wages than their male counterparts.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Phase 1: Early Philanthropic & Nationalist (1880–1920)',
        text: 'N.M. Lokhande’s Bombay Mill-Hands Association; B.P. Wadia founds Madras Labour Union (1918); birth of AITUC (1920).',
      },
      {
        label: 'Phase 2: Post-Colonial Party Hegemony (1947–1970s)',
        text: 'Proliferation of party-affiliated unions (INTUC, CITU, BMS); state-managed conciliation and organized PSU worker aristocracies.',
      },
      {
        label: 'Phase 3: Militant Break & Retaliation (1982)',
        text: 'The historic Great Bombay Textile Strike led by Dr. Datta Samant; state-capital nexus crushes mill unions and shifts to powerlooms.',
      },
      {
        label: 'Phase 4: Neoliberal Precarity & Gig Economy (1991–Present)',
        text: 'Drastic decline in union density, contractualization of permanent shop-floors, and rise of atomized platform workers.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Re-evaluating Clark Kerr’s "Committed Labour Force" Thesis

A foundational debate in industrial sociology was sparked by American modernization theorist [[thinker:Clark Kerr]] and his associates (*Industrialism and Industrial Man*, 1960). Kerr hypothesized that a successful industrial transition requires a **committed labour force** — an urbanized workforce that breaks customary village attachments, adopts industrial work discipline, and accepts factory employment as a permanent way of life. Early Western observers claimed that Indian workers were "uncommitted," chronically absent, and constantly returning to their ancestral villages during harvest and festivals.

This Eurocentric deficit model was challenged and dismantled through rigorous empirical field studies by Indian sociologists:

### 1. R.D. Lambert’s Poona Factory Study
In *Workers, Factories, and Social Change in India* (1963), [[thinker:R.D. Lambert]] studied five manufacturing factories in Poona (Pune). Lambert demonstrated that Indian workers were deeply committed to factory wage-work and prized their industrial jobs. High rates of job applications and low voluntary turnover proved strong commitment. However, Lambert showed that modern factory organization did not wipe out caste: workers used traditional caste networks to secure employment, and recruitment reflected existing community hierarchies.

### 2. N.R. Sheth’s Baroda Factory Study
In *The Social Framework of an Indian Factory* (1968), [[thinker:N.R. Sheth]] examined a modern textile engineering factory in Baroda (Vadodara). Sheth demonstrated that traditional social ties and rational-legal bureaucratic rules coexisted seamlessly. Informal patron-client relations, kinship obligations, and caste solidarity operated inside the formal organization without undermining technical productivity.

### 3. Sociological Reinterpretation
Far from reflecting backwardness, the Indian worker’s dual commitment to both factory and village represents a rational, adaptive survival strategy. In an economy devoid of universal state pensions or unemployment insurance, maintaining rural landholdings and kinship ties acts as an indispensable social security buffer against industrial dismissal, illness, and old age.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Concept Check: Committed Labour Debate',
    body: 'Whenever UPSC asks about Clark Kerr’s thesis, directly counter it with R.D. Lambert (Poona) and N.R. Sheth (Baroda). Emphasize that Indian workers are rationally committed to wage work, but dual rural-urban ties represent an essential safety buffer rather than industrial pathology.',
  },
  {
    kind: 'md',
    body: `## The Decline of Trade Union Density: Contractualization and the Gig Economy

Historically, trade unions played a vital role in securing statutory working hours, minimum wages, bonus payments, and social security. However, since the 1990s, trade union density has experienced a precipitous decline across Indian industry.

### Structural Drivers of Trade Union Decline
1. **Aggressive Contractualization**: Employers have systematically replaced permanent unionized workers with contractual labourers hired through third-party intermediaries. Even in core manufacturing plants (e.g., automobile assembly lines in the Gurugram-Manesar and Chennai belts), over 60–75% of shop-floor workers are non-unionized contract workers performing identical tasks for less than half the wage.
2. **Decentralization and Outsourcing**: Large composite mills were dismantled in favour of informal, small-scale powerloom clusters (Bhiwandi, Surat, Malegaon) where labour laws are unenforced and collective bargaining is virtually impossible.
3. **State Deregulation and Special Economic Zones (SEZs)**: Governments declared public utilities and SEZs exempt from standard strike provisions, actively curtailing union recognition.
4. **The Rise of the Platform Gig Economy**: App-based platforms (Uber, Ola, Swiggy, Zomato, Urban Company) classify workers as independent "delivery partners" rather than employees. Sociologists highlight that **algorithmic management**—automated dispatching, biometric tracking, customer ratings, and dynamic surge pricing—atomizes workers, preventing physical workplace assembly and disabling traditional trade union solidarity.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Four New Labour Codes: Official Rationale',
    rightTitle: 'Sociological Critiques & Realities',
    rows: [
      {
        aspect: 'Legislative Consolidation',
        left: 'Consolidates 29 antiquated colonial-era labour laws into 4 streamlined national codes.',
        right: 'Eats away historical hard-won labour rights and narrows statutory inspection oversight.',
      },
      {
        aspect: 'Retrenchment Flexibility',
        left: 'Raises threshold for government permission to retrench/close from 100 to 300 workers to attract FDI.',
        right: 'Legalizes arbitrary "hire-and-fire" for 85%+ of Indian factories, destroying employment tenure.',
      },
      {
        aspect: 'Right to Strike',
        left: 'Mandates a 14-day advance strike notice to promote industrial harmony and dispute resolution.',
        right: 'Practically outlaws flash strikes and legitimate collective protests by trade unions.',
      },
      {
        aspect: 'Gig Worker Recognition',
        left: 'Code on Social Security formally recognizes platform and gig workers for welfare funds.',
        right: 'Lacks statutory minimum wage guarantees or employer contribution mandates, leaving benefits uncertain.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## COVID-19 and the Unveiling of Migrant Worker Precarity

The sudden nationwide lockdown announced on March 24, 2020, with just four hours' notice, exposed the acute structural vulnerability of India's estimated 100 to 140 million circular and seasonal migrant workers.

Sociologist [[thinker:Jan Breman]] described these circular migrants as **"wage hunters and gatherers"** — workers expelled from agrarian poverty who move between seasonal construction sites, brick kilns, and urban street corners. The pandemic lockdown triggered a catastrophic breakdown of this survival cycle:
- **Instant Eviction and Wage Stoppage**: Informal contractors immediately stopped cash wage payments and factory landlords evicted migrant tenants, leaving millions without food, shelter, or savings.
- **The Exodus on Foot**: Denied interstate transport, hundreds of thousands of migrant families walked thousands of kilometres along national highways back to their home states (Uttar Pradesh, Bihar, Jharkhand, Odisha).
- **Denial of Urban Social Citizenship**: The crisis exposed that destination metropolises treat migrant labour as disposable inputs without granting them basic rights, portable food entitlements (prior to One Nation One Ration Card), or emergency shelters.`,
  },
  {
    kind: 'keyTerm',
    term: 'Committed Labour Force (Clark Kerr)',
    meaning:
      'A modernization thesis proposing that successful industrial development requires an urbanized proletariat fully severed from rural ties and dedicated permanently to factory discipline.',
  },
  {
    kind: 'keyTerm',
    term: 'Contractualization of Labour',
    meaning:
      'The managerial practice of substituting permanent, unionized factory workers with precarious contract workers recruited via third-party labour contractors to depress wages and bypass labour protections.',
  },
  {
    kind: 'keyTerm',
    term: 'Footloose Labour (Jan Breman)',
    meaning:
      'A sociological concept describing millions of landless circular migrants circulating perpetually between rural distress and urban informal precarity without secure employment or citizenship rights.',
  },
  {
    kind: 'keyTerm',
    term: 'Algorithmic Management',
    meaning:
      'A contemporary workplace regime in the platform gig economy where software algorithms directly assign tasks, evaluate performance, and impose penalties on atomized workers without human managers.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Paper 1 ↔ Paper 2 Linkage: Labour Process',
    body: 'Connect Karl Marx’s alienation and reserve army of labour (Paper 1) directly with contract workers and gig delivery workers in Gurugram or Bengaluru (Paper 2) to demonstrate deep theoretical integration.',
  },
  {
    kind: 'answerBox',
    intro:
      'Model framework for analyzing the changing structure, composition, and mobilization of India’s working class:',
    points: [
      'Structural bifurcation: An overwhelming 90%+ unorganized informal workforce operating in precarity, contrasted with a shrinking 8–10% formal unionized enclave.',
      'Social composition and caste intersection: Hierarchical division of labourers (B.R. Ambedkar); Dalits, Adivasis, and Muslims concentrated in hazardous manual contract work, while upper castes retain supervisory control.',
      'Decline of militant unionism: Collapse of historical industrial union bastions (e.g., 1982 Bombay Textile Strike) followed by state-backed flexibilization and corporate anti-union strategies.',
      'Rise of contractualization: Extensive use of contract labour in core manufacturing (automobiles, steel), suppressing wages and splitting shop-floor solidarity between permanent and contract workers.',
      'Platform gig economy: Digital algorithms replace conventional managers, treating delivery workers as "independent contractors" without minimum wages, collective bargaining, or social security.',
    ],
    conclusion:
      'The contemporary Indian working class is characterized by extreme fragmentation and informalization, requiring modern statutory protection and portable social security to overcome systemic precarity.',
  },
]
