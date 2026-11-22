import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic5EnMindMap: MindMapData = {
  title: 'Topic 5 · Slums & Urban Deprivation',
  center: 'Slums & Urban Deprivation',
  subtitle: 'Theories of Slums • Forms of Deprivation • Exclusion vs Indispensability • Redevelopment vs In-Situ',
  branches: [
    {
      title: 'Theoretical Understandings',
      color: 'lavender',
      thinkers: ['Oscar Lewis', 'Charles Stokes', 'Mike Davis', 'Ashis Nandy'],
      points: [
        'Culture of Poverty (Lewis): fatalism and marginality critique (victim-blaming debate)',
        'Stokes: "slums of hope" (social ladder) vs "slums of despair" (trapped underclass)',
        'Mike Davis (*Planet of Slums*): neoliberal surplus humanity dumped into urban wastelands',
        'Ashis Nandy: slum as the pioneer, frontier, and democratic heart of the post-colonial city',
      ],
    },
    {
      title: 'Forms of Socio-Spatial Deprivation',
      color: 'yellow',
      thinkers: ['David Harvey', 'Amita Baviskar', 'Gautam Bhan', 'Jan Breman'],
      points: [
        'Tenurial insecurity: perpetual threat of demolition, bulldozers, and arbitrary eviction',
        'Environmental injustice: located on toxic floodplains, open drains, and garbage landfills',
        'Infrastructural apartheid: denial of piped drinking water, sanitation, and electricity meters',
        'Spatial stigmatization: address-based discrimination in school admissions and bank loans',
      ],
    },
    {
      title: 'The Central Urban Paradox',
      color: 'mint',
      thinkers: ['Jan Breman', 'Sharit Bhowmik', 'Arjun Appadurai', 'Karl Marx'],
      points: [
        'Sites of exclusion: denied municipal citizenship, clean air, and legal property titles',
        'Indispensable labour engine: housing the city’s drivers, domestic cooks, mechanics, sweepers',
        'Informal industrial powerhouse: Dharavi’s multi-million dollar recycling and leather clusters',
        'Subsidizing the metropolis: cheap subaltern reproduction keeping metropolitan costs low',
      ],
    },
    {
      title: 'Policy Approaches & Governance',
      color: 'pink',
      thinkers: ['Patrick Geddes', 'Gautam Bhan', 'Solomon Benjamin', 'B.R. Ambedkar'],
      points: [
        'Slum clearance: violent eviction and distant peripheral resettlement breaking social networks',
        'In-situ upgradation: on-site land titling, piped water, drainage, and community preservation',
        'PMAY (Urban) & SRA: private-developer driven vertical rehabilitation creating high-rise vertical slums',
        '74th Amendment failure: weak municipal ward committees and real-estate capture of urban land',
      ],
    },
  ],
}

export const topic5EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u11-02-slums-informal-child-labour.webp',
    alt: 'P2 Unit 11 infographic: Slums, Informality & Child Labour — Spatial Deprivation, Urban Informality & Child Labour',
    caption:
      'Urban slums embody the structural contradiction of contemporary Indian cities: severe socio-spatial exclusion and tenurial precarity coexisting with an indispensable economic engine of informal labour.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 21 Visual 02',
  },
  {
    kind: 'md',
    body: `## Conceptualizing the Slum: Pathology vs Structural Inevitability

An urban slum is not merely an eyesore or a breakdown of municipal administration; it is a profound structural manifestation of unequal capitalist urbanization. As Indian cities modernize their skylines with glass-clad financial towers and gated residential condominiums, over 65 to 70 million urban citizens reside in informal settlements characterized by severe physical overcrowding, lack of clean water, and non-existent tenurial security.

Sociological discourse offers sharply contrasting frameworks to understand the slum:

### 1. Oscar Lewis and the "Culture of Poverty"
Anthropologist [[thinker:Oscar Lewis]] proposed that living in prolonged deprivation produces a self-perpetuating **Culture of Poverty** characterized by fatalism, present-time orientation, female-headed households, and mistrust of formal institutions. While influential, Lewis was heavily critiqued by sociologists for blaming the victim and ignoring the structural denial of capital, jobs, and urban rights to the poor.

### 2. Charles Stokes: "Slums of Hope" vs "Slums of Despair"
In *A Theory of Slums*, [[thinker:Charles Stokes]] distinguished between:
- **Slums of Hope**: Dynamic gateway settlements inhabited by ambitious rural migrants utilizing informal micro-enterprises to achieve upward socioeconomic mobility.
- **Slums of Despair**: Stagnant pockets of entrenched marginality where residents face insurmountable structural barriers and lack avenues for upward mobility.

### 3. Mike Davis and the "Planet of Slums"
In *Planet of Slums*, [[thinker:Mike Davis]] argued that IMF structural adjustments, neoliberal state retreat, and de-agrarianization have turned megacities of the Global South into dumping grounds for "surplus humanity." Davis warns of a planet where a billion slum dwellers are functionally excluded from formal economic reproduction.

### 4. Ashis Nandy: The Slum as Pioneer and Frontier
Contrasting dystopian Western formulations, cultural theorist [[thinker:Ashis Nandy]] conceptualized the Indian slum not as a zone of defeat, but as the **pioneer and democratic frontier** of the post-colonial city. For Nandy, the slum represents subaltern resilience, cultural hybridity, and an assertion of the right to survive against state-sponsored corporate gentrification.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Step 1: Tenurial Insecurity',
        text: 'Absence of legal land titles (*patta*); perpetual threat of municipal demolition and bulldozers.',
      },
      {
        label: 'Step 2: Environmental Apartheid',
        text: 'Settlements pushed onto toxic floodplains, low-lying storm drains, and municipal landfill peripheries.',
      },
      {
        label: 'Step 3: Infrastructural Deprivation',
        text: 'Dependence on extortionate water tankers, open sewers, shared community latrines, and hazardous illegal wiring.',
      },
      {
        label: 'Step 4: Social Stigmatization',
        text: 'Spatial profiling denying bank loans, identity documents, and formal employment opportunities.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## The Spectrum of Socio-Spatial Deprivation in Indian Slums

Urban deprivation is not merely an absence of monetary income; it is fundamentally **spatial**. Sociologist [[thinker:David Harvey]] conceptualized this as the denial of the "Right to the City." In India, socio-spatial deprivation manifests across four interconnected dimensions:

1. **Tenurial Precarity and the "Bulldozer Threat"**: Gautam Bhan (*In the Public's Interest*) demonstrated that urban planning laws classify slum settlements as "encroachments" and "illegalities." Slum dwellers live under perpetual anxiety of forced eviction and state demolition drives.
2. **Environmental Injustice**: Amita Baviskar (*Bourgeois Environmentalism*) revealed that upper-middle-class environmental activism in Delhi seeks "clean, green, aesthetic cities" by calling for the violent eviction of polluting slums, while ignoring the massive carbon footprint of private automobiles and air-conditioned luxury high-rises.
3. **Health and Epidemiological Toll**: High density and lack of sanitation generate acute morbidity. Vector-borne diseases (dengue, malaria), tuberculosis, and water-borne diarrheal illnesses take a heavy toll, keeping slum households trapped in out-of-pocket medical debt.
4. **Caste and Spatial Ghettoization**: Just as in rural villages, urban slums are segregated along caste and religious lines. Research demonstrates that Dalits and Muslims are disproportionately concentrated in the most vulnerable, unnotified, and hazard-prone slums with the lowest public investment.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Sociological Concept: Bourgeois Environmentalism',
    body: 'Use Amita Baviskar’s concept of "Bourgeois Environmentalism" to critique middle-class urban movements. Show how public interest litigations (PILs) for "clean and beautiful cities" systematically weaponize aesthetic concerns to displace the working-class poor from prime urban land.',
  },
  {
    kind: 'md',
    body: `## The Central Paradox: Sites of Exclusion vs Indispensable Labour

The defining contradiction of the Indian megacity is that slums are simultaneously the most despised sites of civic exclusion and the most indispensable economic engines of urban life.

### 1. Exclusion from Urban Citizenship
Slum dwellers are denied formal civic recognition. They face daily struggles to obtain drinking water from municipal tankers, negotiate arbitrary electricity tariffs with local mafias, and confront continuous police surveillance and harassment. Their residential addresses are stigmatized, leading to rejection in formal job interviews.

### 2. The Indispensable Economic Engine
Without the slum, the metropolis would grind to an immediate halt. Slums house the invisible army of informal service providers:
- **Domestic and Care Workers**: Cooking, cleaning, and child-rearing in middle-class apartments;
- **Urban Transport and Logistics**: Auto drivers, app-cab drivers, delivery executives, and bus conductors;
- **Sanitation and Recycling**: Waste pickers, drain cleaners, and scrap sorters who manage over 60–80% of urban plastic and dry waste management without state cost.

[[eg:Dharavi in Mumbai is not merely a residential settlement; it is an industrial manufacturing powerhouse generating over $1 billion in annual economic turnover through decentralized leather tanneries, garment export units, and pottery kilns, proving that slums actively subsidize global capitalism.]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Slum Clearance & Vertical Redevelopment',
    rightTitle: 'In-Situ Community Upgradation',
    rows: [
      {
        aspect: 'Basic Philosophy',
        left: 'Demolishes existing low-rise settlements to construct vertical high-rise apartments via private builders.',
        right: 'Maintains community on existing land, upgrading infrastructure (piped water, sanitation, legal tenure).',
      },
      {
        aspect: 'Livelihood Impact',
        left: 'Destroys ground-floor home-based micro-enterprises (shops, tanneries, workshops) unable to operate in flats.',
        right: 'Preserves the organic integration of residential space with home-based informal economic production.',
      },
      {
        aspect: 'Social Capital',
        left: 'Disrupts dense neighbourhood mutual-aid networks, child-care sharing, and kinship solidarity.',
        right: 'Strengthens community resilience and collective bargaining by avoiding physical displacement.',
      },
      {
        aspect: 'Financial & Land Dynamics',
        left: 'Real-estate capture: builders sell commercial surplus land; produces unlivable "vertical slums".',
        right: 'Low capital expenditure; secures constitutional housing rights without corporate profiteering.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Housing Policies: Slum Clearance vs In-Situ Upgradation

India’s urban housing policies have historically swung between violent eradication and progressive rehabilitation:

- **The Failure of Vertical Redevelopment (SRA Model)**: Mumbai’s Slum Rehabilitation Authority (SRA) and similar models across Indian metros partner with private real-estate developers. Builders receive lucrative Transferable Development Rights (TDR) and prime commercial land in exchange for rehousing eligible slum residents into vertical concrete towers. Sociologists like Gautam Bhan have documented how these high-rise rehabilitation complexes rapidly deteriorate into "vertical slums" with broken elevators, pitch-dark corridors, zero ventilation, and unpayable maintenance fees.
- **The Case for In-Situ Upgradation**: Championed by urban planner [[thinker:Patrick Geddes]] a century ago as "diagnostic conservative surgery," in-situ upgradation provides legal land titles (*patta*), paved access lanes, streetlights, individual water connections, and underground sewers directly to existing slum neighborhoods.
- **PMAY (Urban) and the 74th Amendment**: The *Pradhan Mantri Awas Yojana (Urban)* includes In-Situ Slum Redevelopment (ISSR) using land as a resource with private participation. However, democratic local governance remains crippled because state governments have refused to devolve financial and planning powers to Ward Committees under the 74th Constitutional Amendment Act, leaving urban land under the control of bureaucratic parastatals and real-estate lobbies.`,
  },
  {
    kind: 'keyTerm',
    term: 'Socio-Spatial Deprivation',
    meaning:
      'The compounding of economic poverty with spatial exclusion, marked by tenurial insecurity, environmental toxicity, lack of piped infrastructure, and location-based stigma.',
  },
  {
    kind: 'keyTerm',
    term: 'Culture of Poverty (Oscar Lewis)',
    meaning:
      'A controversial anthropological theory arguing that prolonged structural poverty creates an intergenerational psychological culture of fatalism and social withdrawal.',
  },
  {
    kind: 'keyTerm',
    term: 'Bourgeois Environmentalism (Amita Baviskar)',
    meaning:
      'The upper-middle-class ideology that equates urban environmentalism with clean aesthetic spaces, driving the violent eviction of working-class slums while ignoring elite resource consumption.',
  },
  {
    kind: 'keyTerm',
    term: 'In-Situ Upgradation',
    meaning:
      'An urban policy approach that grants land tenure and installs civic infrastructure (water, sewers, electricity) in existing slum settlements without demolishing homes or displacing communities.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Exam Formula: Slum Redevelopment Debate',
    body: 'Always contrast vertical high-rise redevelopment (SRA model) with in-situ upgradation (Patrick Geddes, PMAY-Urban). Highlight that vertical towers destroy the home-based informal economy (pottery, shops) and break social capital.',
  },
  {
    kind: 'answerBox',
    intro:
      'Model framework demonstrating how urban slums are sites of both social exclusion and indispensable informal labour:',
    points: [
      'Anatomy of social exclusion: Denial of statutory land titles (*patta*), vulnerability to state bulldozer demolitions, lack of piped water, and caste/religious spatial segregation.',
      'Bourgeois environmental profiling: Middle-class aesthetic litigations criminalize slum residents as "encroachers," pushing them into environmental hazards (drains, toxic landfills).',
      'The indispensable labour engine: Slums house the urban working class—maids, drivers, delivery workers, construction labour, and municipal sweepers—without whom the city collapses.',
      'Informal manufacturing dynamism: Settlements like Dharavi generate over $1 billion annually in recycling, leather, and textiles, subsidizing formal corporate supply chains.',
      'Policy imperative: Moving from vertical developer-led eviction to in-situ upgradation and empowering Ward Committees under the 74th Constitutional Amendment.',
    ],
    conclusion:
      'Megacities cannot achieve inclusive growth while treating their primary workforce as civic outsiders; urban sustainability requires recognizing slums as legitimate producers entitled to democratic urban citizenship.',
  },
]
