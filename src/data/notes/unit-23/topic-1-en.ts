import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic1EnMindMap: MindMapData = {
  title: 'Topic 1 · Peasants and Farmers Movements in India',
  center: 'Peasant & Farmer Movements',
  subtitle: 'Colonial Resistance • Old Peasant Mobilization • 1980s New Farmers • 2020–21 Historic Agitation',
  branches: [
    {
      title: 'Colonial Peasant Struggles',
      color: 'lavender',
      thinkers: ['Kathleen Gough', 'D.N. Dhanagare', 'A.R. Desai', 'Barrington Moore'],
      points: [
        'Rebuttal of Moore: Gough documents 77+ insurrections, disproving peasant passivity thesis',
        'Tenure-based mobilization: zamindari rack-renting, ryotwari debt, and merchant usury',
        'Radical uprisings: Santhal Hul (1855), Deccan Riots (1875), and Tebhaga & Telengana (1946–51)',
        'Class differentiation: middle peasants (Alavi/Wolf) vs landless sharecropper revolts',
      ],
    },
    {
      title: 'The "New Farmers" Movements (1980s)',
      color: 'yellow',
      thinkers: ['Sharad Joshi', 'Mahendra Singh Tikait', 'M.D. Nanjundaswamy', 'Gail Omvedt'],
      points: [
        'Commodity-market basis: Green Revolution surplus producers fighting adverse terms of trade',
        'Ideological binary: Sharad Joshi’s "Bharat (rural exploited) vs India (urban exploitative)"',
        'Demands & tactics: remunerative prices, power subsidies, rasta roko, rail roko, and gheraos',
        'Non-party autonomous unions: BKU in UP/Punjab, Shetkari Sanghatana, and KRRS in Karnataka',
      ],
    },
    {
      title: 'Structural Shift: Old Peasant vs New Farmer',
      color: 'mint',
      thinkers: ['A.R. Desai', 'Utsa Patnaik', 'Pranab Bardhan', 'Tom Brass'],
      points: [
        'Desai’s distinction: old peasants fought feudal landlords for land; farmers fight state for prices',
        'Class character: rich "bullock capitalists" dominating unions while muting landless wage issues',
        'Internal contradictions: caste dominance (Jats, Patidars, Marathas) suppressing Dalit farmhands',
        'Neoliberal crisis: WTO trade shocks, spiraling chemical input costs, and mounting agrarian debt',
      ],
    },
    {
      title: 'Contemporary Agitations (2020–21)',
      color: 'pink',
      thinkers: ['Surinder Jodhka', 'Sudha Narayanan', 'Vikas Rawal', 'Reetika Khera'],
      points: [
        'Repeal of three Farm Acts: defending APMC mandis and demanding statutory MSP guarantees',
        'Broadened social base: cross-class coalition linking rich farmers, smallholders, and rural wage labour',
        'Gender & civil society: prominent presence of rural women, diaspora support, and langar commons',
        'Democratic innovation: year-long peaceful border blockades, tractor parades, and social media PR',
      ],
    },
  ],
}

export const topic1EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u13-01-indian-social-movements.webp',
    alt: 'P2 Unit 13 infographic: Peasant, Women & Dalit Movements — Peasants, Women & Dalit Assertions in Modern India',
    caption:
      'Agrarian mobilization in India evolved from colonial anti-zamindari insurrections to post-Green Revolution terms-of-trade movements, culminating in the 2020–21 pan-agrarian struggle.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 23 Visual 01',
  },
  {
    kind: 'md',
    body: `## The Myth of Peasant Passivity: Colonial Agrarian Resistance

Agrarian struggles in India possess a long and turbulent history that directly challenges early Western sociological assumptions. In *Social Origins of Dictatorship and Democracy* (1966), American sociologist [[thinker:Barrington Moore]] argued that the Indian peasantry was historically passive and politically docile due to the fatalistic caste system, untouchability, and the pacifying village community.

This passivity thesis was decisively refuted by empirical sociological and historical research. Sociologists [[thinker:Kathleen Gough]] (*Indian Peasant Uprisings*) and [[thinker:D.N. Dhanagare]] (*Peasant Movements in India*) documented that Indian peasants repeatedly revolted against colonial extractivism, extortionate moneylenders (*mahajans*), and rack-renting landlords (*zamindars*).

### Kathleen Gough’s Typology of Peasant Struggles
Gough catalogued over 77 major peasant insurrections spanning two centuries of British colonial rule and classified them into five sociological types:
1. **Restorative Rebellions**: Movements seeking to drive out the British and restore pre-colonial indigenous rulers and customary rights [[eg:The Santhal Insurrection (Hul) of 1855 against British revenue officials and Bengali moneylenders]].
2. **Religious and Messianic Movements**: Mobilizations led by charismatic messiahs envisioning an egalitarian moral kingdom [[eg:The Munda Ulgulan led by Birsa Munda in Chota Nagpur, uniting agrarian disaffection with millenarian visions]].
3. **Social Banditry**: Subaltern peasants taking from the wealthy to survive famine conditions, celebrated by folk culture (drawing on E.J. Hobsbawm's concept).
4. **Terrorist Vengeance**: Targeted assassination of oppressive tax officials, corrupt revenue patwaris, and predatory moneylenders.
5. **Mass Insurrections**: Coordinated agrarian revolts against feudal rent extraction and crop-sharing, culminating in the **Tebhaga movement (1946–47)** in Bengal (*"Do-tehaga chai"* — two-thirds share for sharecroppers) and the armed **Telengana uprising (1946–51)** against the Nizam's feudal *jagirdars*.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1855',
        title: 'Santhal Hul',
        text: 'Tribal-peasant armed revolt against British revenue collectors and diku moneylenders.',
      },
      {
        year: '1875',
        title: 'Deccan Riots',
        text: 'Ryotwari peasants in Pune and Ahmednagar burning Marwari and Gujarati moneylenders’ debt bonds.',
      },
      {
        year: '1946–51',
        title: 'Tebhaga & Telengana Movements',
        text: 'Communist-led mass insurrections demanding two-thirds crop share and land to the tiller.',
      },
      {
        year: '1980s',
        title: 'Rise of New Farmers’ Movements',
        text: 'Sharad Joshi and Tikait lead non-party mobilizations fighting adverse terms of trade.',
      },
      {
        year: '2020–21',
        title: 'Anti-Farm Laws Agitation',
        text: 'Year-long non-violent border occupation demanding repeal of three Acts and statutory MSP.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## The Conceptual Shift: Old Peasant Movements vs New Farmers’ Movements

Sociologist [[thinker:A.R. Desai]] in *Peasant Struggles in India* drew a fundamental analytical distinction between traditional ==Peasant Movements== and post-1970s ==Farmers' Movements==. This distinction captures the structural transformation of Indian agriculture following the Green Revolution.

### Theoretical Distinctions: Peasant vs Farmer
- **The Peasant**: Operates primarily within a subsistence or semi-feudal economy, relying on family labour. The peasant's primary adversary is the feudal landlord, intermediary *zamindar*, or usurious moneylender who extracts rent and surplus. Peasant movements demand land redistribution, abolition of intermediaries, and security of land tenure (*"Land to the Tiller"*).
- **The Farmer**: Operates within a commercialized, capitalist agricultural system, producing cash crops and grain surpluses for the national and global market. The farmer's primary adversary is the capitalist state and corporate agro-firms that determine commodity prices, input subsidies, and procurement policies.

| Analytical Dimension | Old Peasant Movements (Pre-1970s) | New Farmers’ Movements (1980s Onward) |
| :--- | :--- | :--- |
| **Dominant Social Base** | Poor peasants, tenants, bonded labourers, sharecroppers | Commercial surplus producers, middle & rich bullock capitalists |
| **Primary Adversary** | Colonial state, feudal landlords (*zamindars*), moneylenders | Modern capitalist state, corporate market, global trade regimes |
| **Core Demands** | Land ceiling, abolition of tenancy, rent reduction, debt relief | Remunerative MSP, cheap power, diesel subsidies, loan waivers |
| **Ideological Framing** | Anti-feudal, anti-colonial, socialist class struggle | "Bharat vs India", rural-urban terms of trade, sectoral identity |
| **Organizational Form** | Peasant wings of political parties (Kisan Sabha, AIKS) | Non-party autonomous unions (BKU, Shetkari Sanghatana, KRRS) |

### The Ideology of "India vs Bharat" (Sharad Joshi)
During the 1980s, charismatic leader [[thinker:Sharad Joshi]] of Maharashtra’s *Shetkari Sanghatana* popularized the concept of **"Bharat vs India"**:
- **"India"** represented the Westernized, urban, industrial-bureaucratic elite that controlled state power, industrial cartels, and policy mechanisms.
- **"Bharat"** represented the rural agricultural hinterland, which was systematically starved of capital through state-enforced "cheap food policies" designed to keep urban wages and consumer inflation artificially low.
- Joshi argued that rural distress was not rooted in internal caste or class exploitation, but in an imperial extraction of surplus from Bharat to India through **adverse terms of trade**. [[eg:Massive blockades of onion markets in Nashik and milk supply shutdowns to Mumbai demonstrated the economic muscle of market-integrated farmers.]]`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Sociological Critique: Who Really Constituted "Bharat"?',
    body: 'In UPSC answers, evaluate the "Bharat vs India" formulation critically using Gail Omvedt and Utsa Patnaik. While claiming to speak for the entire rural population, the 1980s movements were spearheaded by dominant agrarian castes (Jats, Marathas, Patidars, Kammas). They systematically neglected land redistribution and suppressed the wage demands of Dalit and landless agricultural labourers.',
  },
  {
    kind: 'md',
    body: `## Contemporary Transformation: The 2020–21 Farmers’ Movement

The historic 2020–21 agitation against the three Central Farm Acts marked a profound structural mutation in India’s agrarian mobilization. Unlike earlier agitations, this movement confronted the perceived entry of private corporate conglomerates into agricultural marketing, warehousing, and contract farming.

According to sociologist [[thinker:Surinder Jodhka]], the 2020–21 mobilization displayed several qualitative departures in social base, organizational strategy, and ideological framing:
1. **Convergence of Rich Farmers and Smallholders**: Facing existential threats to the Minimum Support Price (MSP) and Agricultural Produce Market Committees (APMCs), rich capitalist farmers and small marginal landholders forged an unprecedented united front under the umbrella of the *Samyukta Kisan Morcha* (SKM).
2. **Bridging the Agrarian-Caste Divide**: In Punjab and Haryana, organizations like BKU (Ugrahan) consciously allied with rural Dalit agricultural labour unions (such as the *Zameen Prapt Sangharsh Committee*), recognizing that the dismantling of public food procurement would destroy the Public Distribution System (PDS) that fed landless families.
3. **Massive Gender Mobilization**: Women emerged from the domestic shadows to assume leadership roles, managing community kitchens (*langars*), addressing rallies at the Singhu and Tikri borders, and driving tractors during protest marches.
4. **Democratic and Digital Resistance**: Protesters transformed Delhi’s border highways into self-governing townships equipped with libraries, medical camps, solar-powered mobile chargers, and active social media teams countering hostile mainstream media narratives.`,
  },
  {
    kind: 'compare',
    leftTitle: '1980s Farmers’ Movements (BKU / Shetkari)',
    rightTitle: '2020–21 Historic Farm Agitation (SKM)',
    rows: [
      {
        aspect: 'Core Conflict',
        left: 'Terms of trade within state-controlled pricing (demanding higher MSP, subsidized electricity).',
        right: 'Defense of state procurement infrastructure (APMC mandis) against corporate deregulation.',
      },
      {
        aspect: 'Social Inclusivity',
        left: 'Heavily dominated by middle/rich landowning castes; marginalized Dalit landless labour.',
        right: 'Active bridging with Dalit labour unions, smallholders, and urban trade union federations.',
      },
      {
        aspect: 'Role of Women',
        left: 'Largely male-dominated patriarchies; women participated peripherally in rallies.',
        right: 'Active female agency in decision-making, campsite governance, and public discourse.',
      },
      {
        aspect: 'Media & Technology',
        left: 'Relied on vernacular press, local caste gatherings (*khap panchayats*), and physical rallies.',
        right: 'Leveraged global digital PR, live streaming, diaspora solidarity, and alternative citizen media.',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Peasant vs Farmer Distinction (A.R. Desai)',
    meaning:
      'A sociological division where peasants are subsistence-oriented producers fighting feudal rent and landlessness, while farmers are market-oriented commodity producers fighting the state over prices, input costs, and subsidies.',
  },
  {
    kind: 'keyTerm',
    term: 'Passivity Thesis (Barrington Moore)',
    meaning:
      'The contested claim that Indian peasants were historically docile due to caste hierarchy and fatalism, decisively refuted by Kathleen Gough’s documentation of 77+ colonial peasant insurrections.',
  },
  {
    kind: 'keyTerm',
    term: 'Bharat vs India Dichotomy (Sharad Joshi)',
    meaning:
      'An ideological framework arguing that rural producers (Bharat) are systematically exploited by urban industrial and bureaucratic elites (India) through adverse agricultural terms of trade.',
  },
  {
    kind: 'keyTerm',
    term: 'Bullock Capitalists (Lloyd & Susanne Rudolph)',
    meaning:
      'Self-employed, medium-sized landowning peasant farmers owning 5 to 15 acres, operating with family and draft-animal labour, who emerged as the dominant political voting bloc post-Green Revolution.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Exam Formula: Analyzing Agrarian Mobilization',
    body: 'Always address four dimensions when analyzing an agrarian movement: (1) Agrarian class structure (who owns the land vs who works it), (2) Nature of adversary (feudal landlord, imperial state, or corporate capital), (3) Articulation of demands (land rights vs market prices), and (4) Internal contradictions (caste friction and exclusion of landless labour).',
  },
  {
    kind: 'answerBox',
    intro:
      'Model answer blueprint for analyzing the evolving character of Indian farmers’ movements:',
    points: [
      'Structural transition: Indian agrarian struggles transitioned from colonial anti-feudal insurrections (Tebhaga, Telengana) demanding land redistribution to post-Green Revolution terms-of-trade movements (1980s BKU, Shetkari Sanghatana).',
      'Refutation of passivity: Empirical studies by Kathleen Gough and D.N. Dhanagare demolished Barrington Moore’s thesis of peasant docility, demonstrating sustained subaltern resistance across two centuries.',
      'Ideological framing: 1980s movements constructed the "Bharat vs India" populist binary (Sharad Joshi), emphasizing remunerative prices while masking intra-rural class and caste hierarchies.',
      'Contemporary shift (2020–21): The anti-farm laws agitation represented a new phase targeting state-facilitated corporate entry into agriculture, demanding statutory MSP and APMC protections.',
      'Broadened coalition: The 2020–21 mobilization bridged rich farmers with smallholders and Dalit wage labour, highlighted massive female agency, and deployed sophisticated digital public relations.',
    ],
    conclusion:
      'Contemporary agrarian movements in India have moved beyond single-issue price protests to become multi-class democratic assertions against neoliberal deregulation and corporate agrarian encroachment.',
  },
]
