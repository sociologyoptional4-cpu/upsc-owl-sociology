import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic2EnMindMap: MindMapData = {
  title: 'Topic 2 · Components of Population Growth: Birth, Death, Migration',
  center: 'Demographic Components & Dynamics',
  subtitle: 'Davis-Blake Variables • Circular Labour Migration • Gendered Mobility • Regional Interlocking',
  branches: [
    {
      title: 'Davis-Blake Intermediate Variables',
      color: 'lavender',
      thinkers: ['Kingsley Davis', 'Judith Blake', 'Ronald Freedman', 'John Bongaarts'],
      points: [
        'Analytical framework: 11 intermediate variables grouped into intercourse, conception & gestation',
        'Social structure acts on biology: caste, education, patriarchy operate via these variables',
        'Intercourse factors: rising age at marriage, voluntary abstinence, widow remarriage restrictions',
        'Conception & gestation: modern contraception access (NFHS-5 67%), abortion, and son meta-preference',
      ],
    },
    {
      title: 'Internal Migration & Circular Labour',
      color: 'yellow',
      thinkers: ['Amitabh Kundu', 'Jan Breman', 'Chinmay Tumbe', 'Ravi Srivastava'],
      points: [
        'Census 2011: ~45.3 crore internal migrants (37% of population); predominantly rural-to-urban/rural',
        'Amitabh Kundu: exclusionary urbanisation, lack of affordable housing, and circular-seasonal movement',
        'Jan Breman’s "Footloose Labour": permanent precarity in construction, brick kilns, informal transport',
        '2020 reverse migration lessons: citizenship exclusion, informal vulnerability, kinship as final safety net',
      ],
    },
    {
      title: 'Gender Dynamics of Migration',
      color: 'mint',
      thinkers: ['Irawati Karve', 'Patricia Uberoi', 'Neetha N.', 'Indrani Mazumdar'],
      points: [
        'Marriage migration predominance: accounts for ~46–49% of all migration; village exogamy rule',
        'Autonomous female labour mobility: rising independent migration in domestic work, care, garments',
        'Regional female corridors: Kerala nurses to metros/Gulf; tribal women to Delhi homes; Tamil textile mills',
        'Vulnerabilities: unregulated placement agencies, wage discrimination, physical isolation, lack of POSH',
      ],
    },
    {
      title: 'Fertility-Mortality Regional Nexus',
      color: 'pink',
      thinkers: ['Amartya Sen', 'Jean Drèze', 'Abdel Omran', 'K.S. James'],
      points: [
        'Synergistic trinity: female literacy, child survival, and female age at marriage mutually reinforce',
        'Drèze & Sen: 1 year of female schooling lowers TFR faster than equivalent growth in per capita income',
        'Child survival hypothesis: falling IMR eliminates need for "insurance births", reducing fertility',
        'Epidemiological transition: double burden of infectious undernutrition and non-communicable diseases',
      ],
    },
  ],
}

export const topic2EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u14-02-emerging-population-issues.webp',
    alt: 'P2 Unit 14 infographic: Sex Ratio, Ageing, Health & Migration — Missing Girls, Ageing Feminization, Health & Migration',
    caption:
      'Population growth is determined by the interplay of fertility mechanisms, mortality transitions, and shifting internal migration patterns across gendered and socio-economic lines.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 24 Visual 02',
  },
  {
    kind: 'md',
    body: `## The Social Determinants of Fertility: The Davis & Blake Framework

In demographic analysis, human fertility is never a purely biological event; it is governed by cultural values, family structures, and economic arrangements. In their classic 1956 sociological formulation, [[thinker:Kingsley Davis]] and [[thinker:Judith Blake]] argued that cultural and structural conditions cannot influence fertility directly. Instead, society influences fertility exclusively through a chain of **11 Intermediate Variables** that regulate biological reproduction, later simplified by [[thinker:John Bongaarts]] into proximate determinants.

Davis and Blake categorised these intermediate variables into three broad phases:
1. **Factors Affecting Intercourse (Exposure Variables)**: Age of entry into sexual unions (legal age of marriage), celibacy, duration of reproductive period, voluntary abstinence (religious taboos, post-partum abstinence), and coital frequency.
2. **Factors Affecting Conception (Conception Variables)**: Fecundity/infecundity affected by involuntary causes (malnutrition, disease), use or non-use of contraception (sterilisation, condoms, pills, IUCDs), and fecundity affected by voluntary causes (sterilisation).
3. **Factors Affecting Gestation and Successful Parturition (Gestation Variables)**: Foetal mortality from involuntary causes (miscarriage, maternal anemia) and voluntary causes (induced abortion, sex-selective termination).

In contemporary India, the social drivers of fertility decline operate decisively through these variables. Rising female secondary education delays the age of marriage (exposure variable), increasing urbanisation and aspiration enhance contraceptive adoption to ==67% in NFHS-5== (conception variable), and improved institutional delivery reduces maternal complications while ultrasound abuse has historically skewed gestation variables.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Social Structure & Norms',
        text: 'Caste, religion, female literacy, patriarchal family expectations, poverty & landholding size.',
      },
      {
        label: '11 Intermediate Variables',
        text: 'Age at marriage, sexual union exposure, contraception, postpartum abstinence, and induced abortion.',
      },
      {
        label: 'Biological Reproduction',
        text: 'Direct regulation of conception, pregnancy gestation, and live birth rates in the population.',
      },
      {
        label: 'Fertility Outcomes (TFR)',
        text: 'Macro fertility stabilization, replacement level achievement (2.0), or persistent high birth rates.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Circular Labour Migration and the 2020 Lockdown Shock

Internal migration in India is massive yet structurally precarious. According to Census 2011, there were approximately **45.3 crore internal migrants** (comprising 37% of the total population). Demographer and urban economist [[thinker:Amitabh Kundu]] revealed that India’s urbanisation is exclusionary and sub-optimal: modern cities draw labour from rural hinterlands without providing affordable housing, sanitation, or citizenship rights, forcing millions into **circular, seasonal, and short-duration labour migration**.

Sociologist [[thinker:Jan Breman]] described this underclass as **footloose labour**—workers recruited through intermediaries (the *thekedar* or *mukadam* system) to work in construction, brick kilns, stone quarries, and informal power looms [[eg:Odia migrant workers in Surat textile mills and UP/Bihar labourers on Delhi metro sites]]. They are never allowed to settle permanently in the city, living in cardboard shacks or on construction slabs, returning home for harvesting or festivals.

The nationwide COVID-19 lockdown of March 2020 exposed the brutal sociological reality of this circular workforce:
- **Complete Erasure of Urban Citizenship**: When factories and building sites shut overnight, employers and landlords abandoned migrant workers, revealing that their presence in cities was purely transactional [[trap:Assuming urbanisation automatically integrates migrants; Kundu shows they remain unassimilated non-citizens]].
- **Kinship as the Ultimate Shock Absorber**: Deprived of municipal aid, food security, and state safety nets, millions walked hundreds of kilometres back to their ancestral villages, proving that rural kinship and caste networks remain the true social safety net in India.
- **Portability Deficits**: Public distribution entitlements were trapped in geographic silos, catalysing the subsequent rollout of the *One Nation One Ration Card* (ONORC) scheme and the *e-Shram* portal.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Marriage-Induced Migration',
    rightTitle: 'Autonomous Female Labour Migration',
    rows: [
      {
        aspect: 'Primary Motivation',
        left: 'Patrilocal village exogamy and ritual conformity after marriage',
        right: 'Economic independence, household survival, career aspirations, and remittances',
      },
      {
        aspect: 'Demographic Share',
        left: 'Over 46–49% of all internal migration; dominates rural-to-rural streams',
        right: 'Rapidly growing (over 15% of urban female migrants), especially in service corridors',
      },
      {
        aspect: 'Agency & Autonomy',
        left: 'Arranged by kinship elders; female agency subordinated to patrilocal family',
        right: 'Independent negotiation of urban wages, independent living, and financial autonomy',
      },
      {
        aspect: 'Structural Risks',
        left: 'Domestic isolation, loss of natal social capital, dowry harassment',
        right: 'Unregulated placement agencies, sexual harassment, lack of maternity benefits',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Gendered Mobility: Marriage Exogamy vs Autonomous Female Migration

While migration data shows that women constitute nearly 70% of all internal migrants in India, public discourse frequently misinterprets this as female empowerment. Sociologist [[thinker:Irawati Karve]] demonstrated that North Indian kinship is founded on strict **village exogamy and patrilocal residence**: a bride cannot marry within her natal village and must physically relocate to her husband's home upon marriage. Thus, nearly half of all internal migration is simply ritual marriage relocation [[link:Unit 07 Systems of Kinship in India]].

However, recent decades have witnessed a profound qualitative shift: the rise of **autonomous female labour migration**. Sociologists [[thinker:Neetha N.]] and [[thinker:Indrani Mazumdar]] document how unmarried, divorced, or single women are migrating independently of male guardians:
- **Domestic and Care Work Corridors**: Adivasi and Dalit young women from Jharkhand, Chhattisgarh, and West Bengal migrating to Delhi-NCR, Mumbai, and Bengaluru as full-time domestic workers, cooks, and elderly caregivers.
- **Global and National Nursing Corridors**: The historic migration of Christian and lower-middle-class women from Kerala to Indian metropolitan hospitals and Gulf nations, redefining female remittance power.
- **Export Manufacturing Hubs**: Young women from rural Tamil Nadu migrating to textile and garment hubs like Tirupur, Coimbatore, and Hosur under restrictive factory-hostel regimes (e.g. the *Sumangali* scheme).

While autonomous labour mobility expands female agency, it also exposes women to extreme vulnerabilities: unregulated placement agencies operating like trafficking rings, sub-minimum wages, denial of POSH Act protections, and intense moral surveillance by urban landlords.`,
  },
  {
    kind: 'keyTerm',
    term: 'Intermediate Variables (Davis & Blake)',
    meaning: 'The eleven biological mechanisms through which all social, economic, and cultural factors operate to influence human fertility outcomes.',
  },
  {
    kind: 'keyTerm',
    term: 'Footloose Labour (Jan Breman)',
    meaning: 'Circulating, highly informalised seasonal migrant labourers who are constantly displaced between rural subsistence and urban precarity without settling permanently.',
  },
  {
    kind: 'keyTerm',
    term: 'Circular Migration (Amitabh Kundu)',
    meaning: 'Repeated, temporary mobility between rural home and urban work destination, driven by exclusionary urban housing and low wages that prevent permanent family relocation.',
  },
  {
    kind: 'keyTerm',
    term: 'Son Meta-Preference',
    meaning: 'The patriarchal cultural practice of continuing to have children until the desired number of sons are born, leading to millions of unwanted female children.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'The Trinity of Regional Fertility Decline',
    body: 'In UPSC questions on regional fertility disparities, always cite Jean Drèze and Amartya Sen’s finding that female literacy, infant survival, and female age at marriage exert far stronger downward pressure on birth rates than general economic prosperity (per capita GDP). Kerala achieved replacement TFR ahead of wealthy Punjab because of social development.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Do Not Treat Female Migrants as Passive Dependents',
    body: 'Avoid assuming that women who migrate after marriage are economically inactive. Millions of rural-to-rural and rural-to-urban marriage migrants immediately enter unpaid family farming, dairy work, or home-based informal sub-contracting, which official surveys chronically under-record.',
  },
  {
    kind: 'answerBox',
    intro:
      'A multi-pronged sociological policy strategy to formalize and safeguard circular labour migrants in Indian cities:',
    points: [
      'Statutory City Welfare Boards: Replicate Kerala’s Inter-State Migrant Workers Welfare Board across all receiving industrial hubs to provide registration and health insurance.',
      'Portable Social Security & Housing: Expand the Affordable Rental Housing Complexes (ARHC) scheme and universalize portable PDS rations under ONORC.',
      'Regulation of Labour Intermediaries: Enforce strict licensing of thekedars, contractors, and domestic placement agencies under the Occupational Safety and Social Security Codes.',
      'Gender-Sensitive Urban Support: Establish round-the-clock crisis shelters, working women hostels, and mobile crèches for children of female construction and domestic workers.',
      'Municipal Inclusion & Civic Identity: Issue local urban municipal identities that allow migrant workers to vote, access public hospitals, and enroll children in schools without native domicile proofs.',
    ],
    conclusion:
      'Circular migrants build India’s cities yet live as disenfranchised ghosts within them. Real demographic resilience demands transforming invisible footloose labour into dignified urban citizens with enforceable rights.',
  },
]
