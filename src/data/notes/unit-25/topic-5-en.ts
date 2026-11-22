import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic5EnMindMap: MindMapData = {
  title: 'Topic 5 · Ethnic Conflicts, Communalism & Revivalism',
  center: 'Ethnicity, Communalism & Revivalism',
  subtitle: 'Theories of Communalism • Riot Architecture (Brass/Varshney/Wilkinson) • North-East vs Urban Cities • Digital Polarization',
  branches: [
    {
      title: '1. Theoretical Formulations of Communalism',
      color: 'lavender',
      thinkers: ['Bipan Chandra', 'T.K. Oommen', 'Yogendra Singh', 'William Graham Sumner'],
      points: [
        'Communalism as modern ideology: Bipan Chandra refutes primordialism; communalism as elite manipulation',
        'Oommen’s taxonomy: Assimilationist, welfarist, retreatist, separatist, and secessionist communalism',
        'Ethnocentrism (Sumner): In-group sanctification paired with active demonization of the out-group',
        'Revivalism (Yogendra Singh): Modernity’s disruptive alienation breeding defensive religious revivalism',
      ],
    },
    {
      title: '2. The Political Architecture of Riots',
      color: 'yellow',
      thinkers: ['Paul Brass', 'Steven Wilkinson', 'Ashutosh Varshney'],
      points: [
        'Institutionalized Riot System (Brass): Specialized networks activating violence for electoral gains',
        'Electoral incentive model (Wilkinson): Riots prevented when ruling coalitions rely on minority votes',
        'Civic engagement thesis (Varshney): Inter-ethnic associational ties (unions, trade guilds) deter pogroms',
        'Urban ghettoization: Spatial segregation in Ahmedabad and Mumbai replacing mixed civic interactions',
      ],
    },
    {
      title: '3. North-East Autonomy vs Urban Polarizations',
      color: 'mint',
      thinkers: ['Sanjib Baruah', 'Myron Weiner', 'Verrier Elwin'],
      points: [
        'North-East frontier dynamics: Territorial homeland assertion, Sixth Schedule, and indigenous anxiety',
        'Sanjib Baruah’s "Durable Disorder": Cosmetic federalism exacerbating sub-ethnic fractures (Manipur 2023)',
        'Sons of the soil (Weiner): Demographic influx triggering anti-migrant nativism (Assam Movement)',
        'Urban communal riots: Majoritarian majoritarianism fighting over real estate, bazaar trade, and visibility',
      ],
    },
    {
      title: '4. Globalization & Digital Communalism',
      color: 'pink',
      thinkers: ['Arjun Appadurai', 'Manuel Castells', 'Peter Berger'],
      points: [
        'Fear of Small Numbers (Appadurai): Majority anxiety in globalization projecting predatory purity',
        'Resistance Identity (Castells): Fundamentalist communes rising against homogenizing global culture',
        'Algorithmic polarization: Social media echo chambers weaponizing synthetic outrage and deepfakes',
        'Lynch mobs & vigilance: Instant digital messaging facilitating coordinated cow vigilantism',
      ],
    },
  ],
}

export const topic5EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u15-02-social-transformation-challenges.webp',
    alt: 'P2 Unit 15 infographic: Challenges of Social Transformation — Poverty, Violence, Caste-Communal Strife & Literacy Gaps',
    caption:
      'Poverty, Violence, Caste-Communal Strife & Literacy Gaps (Challenges of Social Transformation).',
  },
  {
    kind: 'md',
    body: `## Conceptualizing Communalism, Ethnicity and Religious Revivalism

Sociologists reject the primordialist notion that communalism and ethnic violence in India are ancient, timeless religious hatreds. Historian [[thinker:Bipan Chandra]] established that communalism is a distinctly modern ideology and political construct that emerged under colonial rule, utilizing religious identities to wage secular battles for state patronage, employment, and political representation.

Communalism operates on the false presumption that people belonging to the same religious faith necessarily share identical secular, economic, and political interests, which are fundamentally antagonistic to the interests of other religious groups.

### T.K. Oommen's Typology of Communalism

Sociologist [[thinker:T.K. Oommen]] provided a sophisticated structural classification identifying six distinct dimensions of communalism in India:
1. **Assimilationist Communalism**: The attempt by majoritarian groups to absorb smaller religious or tribal communities into the dominant fold [[eg:Insisting that indigenous Adivasis or Jains are essentially Hindus]].
2. **Welfarist Communalism**: Community organizations focusing on socio-economic betterment of their own co-religionists (e.g., establishing community hospitals, hostels, and scholarship trusts).
3. **Retreatist Communalism**: Religious groups withdrawing from modern political participation and isolating themselves to preserve ritual purity.
4. **Retaliatory Communalism**: Violent, reactive mobilization seeking to inflict harm on other communities in response to perceived slights or historical grievances.
5. **Separatist Communalism**: Demands for distinct cultural autonomy and separate administrative entities within the federal framework.
6. **Secessionist Communalism**: Radical demands for complete political sovereignty and territorial secession from the nation-state.

| Dimension | Core Driver | Sociological Objective | Primary Arena |
| :--- | :--- | :--- | :--- |
| **Ethnic Conflict** | Blood ties, linguistic territory, indigenous ancestry | Homeland autonomy & control over local resources | North-East India (Bodoland, Manipur, Nagaland) |
| **Communalism** | Competing religious identities in nation-state | Capture of state power, majoritarian cultural hegemony | Northern & Western urban centres (UP, Gujarat, Maharashtra) |
| **Revivalism** | Anomie of rapid modernization & globalization | Reassertion of pristine scripture & orthodox ritual codes | Transnational diaspora funding & fundamentalist sects |

### Ethnocentrism and Defensive Revivalism

Sociologist [[thinker:William Graham Sumner]] defined ==Ethnocentrism== as the psychological and cultural orientation where one’s own in-group is judged as the virtuous center of the universe, while out-groups are evaluated with suspicion and contempt.

In modern India, sociologist [[thinker:Yogendra Singh]] showed that the rapid, uneven pace of modernization produces severe psychological disorientation and moral breakdown (anomie). When traditional joint families, village communities, and secure occupations erode under capitalist globalization, individuals experience acute identity anxiety. ==Religious Revivalism== emerges as a defensive psychological refuge, offering moral certainty, spiritual brotherhood, and a nostalgic anchor against modern alienation.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Sociological Distinction: Communalism vs Secularism',
    body: 'In UPSC answers, distinguish Indian constitutional secularism (Sarva Dharma Sambhava — equal state respect for all faiths) from Western secularism (strict separation of church and state). T.N. Madan and Ashis Nandy argue that imposing Western secularism on deeply religious Indian society created a cultural vacuum exploited by communal revivalism.',
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Uneven Modernization', text: 'Rapid urbanization erodes traditional social anchors' },
      { label: 'Identity Anomie', text: 'Dislocated youths experience acute relative deprivation' },
      { label: 'Revivalist Allure', text: 'Orthodox religious sects offer moral belonging & certainty' },
      { label: 'Ethnocentric Othering', text: 'Out-groups demonized as existential threats to the nation' },
    ],
  },
  {
    kind: 'md',
    body: `## The Political Architecture of Communal Riots

Sociologists and political scientists have dismantled the myth that communal riots are spontaneous, emotional eruptions of religious crowds. Fieldwork in riot-prone cities reveals an elaborate institutional machinery behind communal polarization.

### Paul Brass: The Institutionalized Riot System (IRS)

Political scientist [[thinker:Paul Brass]], through extensive field investigations in Uttar Pradesh (*The Production of Hindu-Muslim Violence in Contemporary India*), formulated the theory of the ==Institutionalized Riot System (IRS)==. Brass demonstrated that communal violence is manufactured through distinct, professionalized roles:
- **Fire Tenders**: Local politicians and ideologues who systematically maintain communal tension through inflammatory public speeches, rumors, and micro-provocations.
- **Conversion Specialists**: Criminal elements, neighborhood goons, and party cadre tasked with converting an ordinary street altercation (such as a motorcycle collision or cricket match fight) into a communal confrontation.
- **Interpreters and Spin Doctors**: Partisan intellectuals, journalists, and leaders who frame the violence in grand ideological narratives of victimhood and retaliation.

### Steven Wilkinson: Electoral Incentives and State Action

Political scientist [[thinker:Steven Wilkinson]] (*Votes and Violence*) argued that whether communal clashes escalate into full-scale massacres depends entirely on the ==Electoral Incentives== of the ruling party controlling the state police machinery. 

Wilkinson demonstrated that when a ruling party’s electoral coalition relies on minority votes for survival, the state administration acts swiftly within hours to deploy paramilitary forces and crush riots. Conversely, when a ruling party pursues majoritarian electoral consolidation and faces fractured majority votes, it allows riots to proceed, using polarization to consolidate the majority bloc behind its banner.

### Ashutosh Varshney: The Civic Engagement Thesis

Harvard political scientist [[thinker:Ashutosh Varshney]] (*Ethnic Conflict and Civic Life*) investigated why some Indian cities (e.g., Surat, Ahmedabad, Aligarh) are chronically riot-prone, while matched demographic counterparts (e.g., Kozhikode, Lucknow) remain remarkably peaceful.

Varshney concluded that the decisive deterrent against communal violence is ==Inter-Ethnic Associational Civic Life==. In peaceful cities, Hindus and Muslims are organically integrated into shared institutional networks: joint trade associations, mixed business partnerships, integrated trade unions, and rotary clubs. When rumors spread, these cross-cutting civic organizations form spontaneous peace committees that quash misinformation and protect neighborhoods. Where civic networks are intra-ethnic (segregated within one community), polarization spreads unchecked.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Urban Communal Polarization',
    rightTitle: 'North-East Ethnic Autonomy Conflicts',
    rows: [
      {
        aspect: 'Primary Faultline',
        left: 'Religious majoritarianism vs minoritarianism (Hindu-Muslim)',
        right: 'Indigenous tribal identity vs non-tribal migrant settlers',
      },
      {
        aspect: 'Core Contestation',
        left: 'Secular political power, public rituals, and commercial bazaar turf',
        right: 'Ancestral territorial homeland, Sixth Schedule, and resource control',
      },
      {
        aspect: 'Spatial Structure',
        left: 'High-density urban mohallas and segregated residential ghettos',
        right: 'Hills versus valleys geography and cross-border international corridors',
      },
      {
        aspect: 'State Mechanism',
        left: 'Partisan policing, municipal zoning, and electoral gerrymandering',
        right: 'Autonomous District Councils, AFSPA, and peace accords (Naga/Bodo)',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Regional Variations: North-East Autonomy vs Urban Polarizations

Ethnic conflict in India manifests in fundamentally distinct spatial forms across regions:

### North-East India: Territorial Autonomy and Borderland Politics

In North-East India, ethnic conflict is grounded in ancestral territoriality and the defense of indigenous identity against demographic transformation. Political scientist [[thinker:Sanjib Baruah]] (*Durable Disorder*) critiques the Indian state’s reliance on ==Cosmetic Federalism== — creating micro-ethnic states and Autonomous District Councils that institutionalize tribal borders without resolving underlying land and resource contestations.

Sociologist [[thinker:Myron Weiner]] (*Sons of the Soil*) demonstrated that when external demographic migration threatens the linguistic and political primacy of indigenous populations, fierce nativist assertions erupt (e.g., the Assam Agitation against undocumented migrants). The tragic 2023 Meitei-Kuki conflict in Manipur exemplifies this hill-valley contradiction, where disputes over Scheduled Tribe status, forest evictions, and narcotics corridors triggered complete ethnic cleansing and territorial partition across valley and hill districts.

### Globalization and Digital Communalism

The contemporary resurgence of religious revivalism has been radically turbocharged by globalization and digital communications technology. Anthropologist [[thinker:Arjun Appadurai]] (*Fear of Small Numbers*) demonstrated that globalization unleashes deep existential anxiety among national majorities. Feeling vulnerable to transnational capital flows and cultural hybridization, majorities project their anxieties onto minority communities, demanding absolute cultural purity.

Sociologist [[thinker:Manuel Castells]] observed the rise of "Resistance Identities" — fundamentalist enclaves constructed by dislocated populations seeking shelter against global consumerist homogenization. 

In everyday India, this manifests as ==Digital Communalism==:
- **Algorithmic Echo Chambers**: Social media platforms optimize engagement through outrage algorithms, amplifying inflammatory content and manufactured communal grievance.
- **WhatsApp Lynch Mobs**: Instant encrypted messaging allows localized rumors (child-lifting, cow slaughter, "love jihad") to assemble aggressive vigilante mobs within minutes, operating beyond the reach of institutional moderation.
- **Transnational Diasporic Hindutva and Revivalism**: Wealthy diasporas in North America and the UK channel funding and ideological legitimacy to homeland fundamentalist organizations, detached from the immediate physical costs of inter-communal violence.

[[eg:In urban Haryana (Nuh) and western Uttar Pradesh, localized clashes were escalated into regional communal standoffs within hours through viral live-streamed social media videos and weaponized hashtags.]]`,
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Yaad Rakho: Varshney’s Key Triad',
    body: 'Ashutosh Varshney emphasizes: Everyday engagement (talking in tea stalls) is not enough to stop riots. What stops riots is "Associational Civic Life" — formal organizations (trade unions, chambers of commerce) with an institutional stake in inter-community peace.',
  },
  {
    kind: 'keyTerm',
    term: 'Communalism',
    meaning: 'Bipan Chandra’s concept of a modern political ideology that falsely posits inherent antagonism between the secular interests of different religious groups.',
  },
  {
    kind: 'keyTerm',
    term: 'Institutionalized Riot System (IRS)',
    meaning: 'Paul Brass’s framework delineating professional networks of political actors, specialists, and spin doctors who orchestrate communal violence.',
  },
  {
    kind: 'keyTerm',
    term: 'Associational Civic Life',
    meaning: 'Ashutosh Varshney’s concept of inter-communal formal organizations (unions, business guilds) that build structural resistance against communal riots.',
  },
  {
    kind: 'keyTerm',
    term: 'Ethnocentrism',
    meaning: 'William Graham Sumner’s sociological term for the uncritical glorification of one’s in-group coupled with the systematic demonization of out-groups.',
  },
  {
    kind: 'keyTerm',
    term: 'Cosmetic Federalism',
    meaning: 'Sanjib Baruah’s critique of state policies in North-East India that grant nominal administrative councils while preserving centralized military and political control.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karo: Don’t Treat Communalism as Ancient Hatred',
    body: 'Never write in your answer that communal riots in India are due to "ancient medieval hatred between Hindus and Muslims". Always explain communalism as a modern political instrument driven by electoral mobilization (Wilkinson) and elite competition (Brass).',
  },
  {
    kind: 'answerBox',
    intro:
      'A model sociological answer evaluating communalism, ethnic conflicts, and religious revivalism must synthesize political architecture, regional dynamics, and modern digital transformations:',
    points: [
      'Bipan Chandra and T.K. Oommen establish that communalism is not primordial religious devotion, but a modern ideology manipulating identities for secular power.',
      'Paul Brass’s Institutionalized Riot System (IRS) and Steven Wilkinson’s electoral incentive model prove that communal riots are politically manufactured and state-facilitated.',
      'Ashutosh Varshney demonstrates that inter-ethnic associational civic engagement is the vital structural barrier preventing urban communal violence.',
      'Sanjib Baruah and Myron Weiner highlight the distinct territorial character of North-East ethnic conflicts, contrasting indigenous homeland anxieties with urban majoritarianism.',
      'Arjun Appadurai and Manuel Castells explain how globalization-induced anomie and encrypted digital networks (WhatsApp, deepfakes) foster hyper-polarized digital communalism.',
    ],
    conclusion:
      'Countering communalism and ethnic strife requires fostering inter-communal economic associations, enforcing statutory accountability on partisan police, and curbing digital hate speech.',
  },
]
