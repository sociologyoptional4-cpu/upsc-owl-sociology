import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

export const topic2En: Pick<
  TopicNotebookSpec,
  'summary' | 'mindMap' | 'sections'
> = {
  summary:
    'Analyzes the evolution of political parties, pressure groups, and circulating elites in India over seven decades. Traces how the social bases of political mobilization moved from the umbrella Congress system to agrarian intermediate castes, Mandalized subaltern assertions, and the contemporary pan-Hindu welfarist coalition. Evaluates Rajni Kothari’s politicization of caste alongside M.N. Srinivas’s vote bank, reservation jurisprudence (Mandal, EWS, sub-categorization), and the sociological debate over a national Caste Census.',
  mindMap: {
    title: 'Political Parties, Pressure Groups and Elites in India',
    center: 'Parties, Groups & Elites',
    subtitle: 'Mobilization Phases • Caste Politicization • Pressure Groups & Elites • Caste Census Debates',
    branches: [
      {
        title: 'Party Mobilization Phases',
        color: 'lavender',
        thinkers: ['Rajni Kothari', 'W.H. Morris-Jones', 'Suhas Palshikar', 'Yogendra Singh'],
        points: [
          'Phase 1 (1952–67): Congress system of one-party dominance with internal factional consensus',
          'Phase 2 (1967–89): Green Revolution and rise of agrarian bullock capitalists (Charan Singh)',
          'Phase 3 (1989–2014): Mandalization, federal coalition era, and regional identity parties',
          'Phase 4 (2014–present): Dominant Party 2.0, subaltern caste stitching, and the labharthi class',
        ],
      },
      {
        title: 'Caste in Politics & Vote Banks',
        color: 'yellow',
        thinkers: ['M.N. Srinivas', 'Rajni Kothari', 'Lloyd & Susanne Rudolph'],
        points: [
          'M.N. Srinivas: Traditional vote bank rooted in patron-client vertical village obligations',
          'Rajni Kothari: Politicization of caste progresses through secular, integrationist, and conscious stages',
          'Rudolph & Rudolph: Caste associations operate as democratic interest groups transforming ascription',
          'Reservations dynamic: Mandal (1990), Indra Sawhney creamy layer, and 103rd EWS economic criteria',
        ],
      },
      {
        title: 'Pressure Groups & Elites',
        color: 'mint',
        thinkers: ['Vilfredo Pareto', 'C. Wright Mills', 'Francine Frankel', 'Atul Kohli'],
        points: [
          'Pressure groups: Formal business associations (FICCI/CII), trade unions, and agrarian unions (BKU)',
          'Pareto’s circulation of elites: Traditional upper-caste foxes displaced by agrarian and subaltern counter-elites',
          'Power elite nexus: Interlocking directorate of big capital, central bureaucracy, and political leadership',
          'Crisis of governability: Atul Kohli traces institutional decay and rising unmediated elite contestation',
        ],
      },
      {
        title: 'Caste Census Debates',
        color: 'pink',
        thinkers: ['Satish Deshpande', 'André Béteille', 'Dipankar Gupta', 'Sukhadeo Thorat'],
        points: [
          'Arguments for: Empirical baseline for affirmative action and exposing dominant sub-caste monopolies',
          'Sub-categorization imperative: Rohini Commission reveals skewed distribution of OBC benefits',
          'Arguments against: Reification of primordial boundaries and risk of competitive ethnic outbidding',
          'Sociological consensus: Administrative enumeration must prioritize deprivation mapping over caste calcification',
        ],
      },
    ],
  },
  sections: [
    {
      kind: 'figure',
      assetFile: 'p2-u12-01-politics-caste-federalism.webp',
      alt: 'P2 Unit 12 infographic: Democracy, Caste & Decentralization — Party Phases, Vote Banks, PRIs & Asymmetric Federalism',
      caption: 'Party Phases, Vote Banks, PRIs & Asymmetric Federalism (Democracy, Caste & Decentralization).',
    },
    {
      kind: 'md',
      body: `## Changing Social Bases of Political Mobilization (1950–Present)

Political mobilization in independent India did not remain static; it continually restructured itself as marginalized social groups recognized their electoral power. In the early post-independence decades, political parties mobilized voters primarily through traditional rural hierarchies and elite consensus. Over seven decades, this deferential mobilization was shattered by economic transformations, agrarian changes, and assertive lower-caste identity movements.

Political scientist [[thinker:Rajni Kothari]] characterized India’s initial post-independence structure as the ==Congress System==. Under this arrangement, the Indian National Congress functioned as a broad umbrella party of consensus, accommodating diverse factions, while opposition parties functioned merely as parties of pressure. The social base of this regime relied on an alliance between urban upper-caste professionals, big industrialists, and rural landed elites who marshaled lower-caste votes through traditional patron-client networks.

The Green Revolution in the late 1960s radically disrupted this consensus. Sociologists Lloyd and Susanne Rudolph observed the emergence of ==Bullock Capitalists== — intermediate peasant castes (such as Jats, Yadavs, Kurmis, Marathas, Vokkaligas, and Kammas) who acquired substantial economic clout through agricultural surpluses [[eg:The political mobilization of Western UP farmers under Chaudhary Charan Singh and the Bharatiya Kranti Dal]]. By 1989, the implementation of the Mandal Commission report ignited the Third Phase of mobilization, ushering in the era of regional coalition politics and subaltern caste assertion.

| Historical Phase | Dominant Party Dynamic | Primary Social Base of Mobilization | Key Sociological Characteristic |
| :--- | :--- | :--- | :--- |
| **Phase 1 (1952–1967)** | One-Party Dominance (Congress System) | Upper-caste leadership + deferential lower-caste vote banks | Vertical mobilization via village landlords |
| **Phase 2 (1967–1989)** | Regional Challenge & Factionalism | Intermediate agrarian peasant castes (Bullock Capitalists) | Rise of rich peasantry and non-Congress state regimes |
| **Phase 3 (1989–2014)** | Federal Coalition & Mandalization | OBCs, Dalits, regional linguistic communities, minorities | Identity assertion, Mandal politics, fragmented parliaments |
| **Phase 4 (2014–Present)** | Dominant Party 2.0 (BJP Hegemony) | Pan-Hindu cross-caste coalition + Subaltern OBCs + Labharthi class | Centralized presidentialism, welfarism, cultural nationalism |`,
    },
    {
      kind: 'timeline',
      items: [
        {
          year: '1952–1967',
          title: 'Congress System & Patronage Consensus',
          text: 'Rajni Kothari’s one-party dominance wherein upper-caste elites steered policy while rural headmen delivered bloc votes.',
        },
        {
          year: '1967',
          title: 'Agrarian Electoral Revolt',
          text: 'Defeat of Congress across eight North Indian states as Green Revolution intermediate peasant castes established regional dominance.',
        },
        {
          year: '1990',
          title: 'Mandal Commission & Identity Upsurge',
          text: 'Implementation of 27% OBC reservations triggers deep political churn, cementing caste-based political mobilization.',
        },
        {
          year: '2014–2024',
          title: 'Rise of Dominant Party 2.0 & the Labharthi Class',
          text: 'Suhas Palshikar notes the crafting of a new hegemonic coalition combining cultural nationalism with direct welfare delivery.',
        },
      ],
    },
    {
      kind: 'callout',
      variant: 'upscAngle',
      title: 'UPSC Sociological Linkage',
      body: 'When answering questions on changing political mobilization, always connect political party dynamics with agrarian class structures (Paper 2 Unit 17). The transition from Brahminical Congress dominance to intermediate peasant power mirrors the economic rise of surplus-producing farmers.',
    },
    {
      kind: 'md',
      body: `## Politicization of Caste vs Srinivas’s Vote Bank

Sociologists historically debated whether democratic politics would dissolve primordial caste ties or whether caste would corrupt democratic institutions. In reality, Indian democracy produced a creative synthesis: politics did not get caste-ridden; rather, caste became profoundly politicized.

[[thinker:M.N. Srinivas]] originally coined the concept of the ==Vote Bank== to describe how a rural patron or dominant caste leader exercised vertical control over dependent client castes, delivering their votes in a consolidated block [[eg:A village Thakur landlord instructing landless Dalit agricultural laborers how to cast their ballots]]. Over time, however, universal adult franchise and competitive elections dismantled this vertical coercion.

[[thinker:Rajni Kothari]] demonstrated in *Caste in Indian Politics* that as democracy deepened, caste progressed through three sequential stages:
1. **Secular Stage:** Traditional caste elites seek political office by forging pragmatic electoral alliances with other caste leaders.
2. **Integrationist Stage:** Factions within dominant castes compete against each other, forcing politicians to reach out to lower castes and mobilize them as numerical allies.
3. **Consciousness Stage:** Subaltern castes achieve collective self-awareness, forming autonomous caste associations to demand state resources, representation, and dignity.

Contemporary reservation debates highlight this evolving politicization. While the Mandal Commission (1990) and the *Indra Sawhney* judgment (1992) established caste-based criteria with a "creamy layer" exclusion, the 103rd Constitutional Amendment (2019) introduced a 10% Economic Weaker Section (EWS) quota based purely on income. Simultaneously, the Justice Rohini Commission underscored extreme inequality within the OBC category, revealing that a tiny fraction of dominant sub-castes cornered the lion’s share of reserved jobs and educational seats.`,
    },
    {
      kind: 'thinkerQuote',
      thinkerSlug: 'vilfredo-pareto',
      quote: 'History of political societies is mostly a graveyard of aristocracies, continuously replaced by newer ascending elites.',
      context: 'The Mind and Society, explaining the circulation of elites in dynamic democracies.',
    },
    {
      kind: 'compare',
      leftTitle: 'Traditional Vertical Vote Bank (Srinivas)',
      rightTitle: 'Modern Horizontal Caste Association (Kothari)',
      rows: [
        {
          aspect: 'Mobilization Axis',
          left: 'Vertical hierarchy; dependent client castes follow village patron',
          right: 'Horizontal solidarity across wide geographical areas and sub-clans',
        },
        {
          aspect: 'Agency of Voter',
          left: 'Passive obedience driven by economic debt and social deference',
          right: 'Assertive collective bargaining for policy claims and legislative power',
        },
        {
          aspect: 'Internal Structure',
          left: 'Patron-client feudal loyalty bound to village dominant caste',
          right: 'Formalized political federations with elected office bearers',
        },
        {
          aspect: 'Democratic Effect',
          left: 'Reinforced traditional agrarian inequality and feudal dominance',
          right: 'Plebeianized democratic representation and challenged status quo',
        },
      ],
    },
    {
      kind: 'md',
      body: `## Pressure Groups and the Circulation of Indian Elites

Pressure groups in India act as vital intermediary institutions between civil society and the state. Unlike political parties, pressure groups do not seek to capture governmental power directly; instead, they mobilize collective influence to extract favorable policy decisions, subsidies, and legislative amendments.

Sociologist [[thinker:Vilfredo Pareto]] formulated the theory of the ==Circulation of Elites==, positing that political history is a continuous replacement of traditional elites (lions) by cunning managerial innovators (foxes). In independent India, the early ruling elite comprised English-educated, high-caste lawyers and civil servants. Over decades, this traditional elite experienced severe circulation: first yielding ground to agrarian peasant leaders, and later sharing power with vernacular regional elites, corporate magnates, and subaltern social leaders.

Indian pressure groups operate through three primary sociological formations:
- **Corporate and Industrial Lobbies:** Bodies like FICCI, CII, and ASSOCHAM exercise institutionalized access to economic policymakers, driving market-friendly regulatory reforms.
- **Agrarian Pressure Groups:** From the historic Bhartiya Kisan Union (BKU) led by Mahendra Singh Tikait to the 2020–21 Samyukt Kisan Morcha, farm unions demonstrate formidable mobilization power capable of forcing legislative rollbacks.
- **Subaltern and Identity Lobbies:** Trade unions, caste associations, and Dalit-Bahujan pressure groups mobilize through street demonstrations, bandhs, and electoral threats.

Sociologist [[thinker:Atul Kohli]] notes that as democratic mobilization multiplied the demands on the Indian state, traditional institutional gatekeepers deteriorated, leading to a "crisis of governability" where unmediated pressure groups and fragmented elites clash over state resources.`,
    },
    {
      kind: 'callout',
      variant: 'galtiMat',
      title: 'Distinction: Pressure Group vs Political Party',
      body: 'Do not confuse pressure groups with political parties. A pressure group articulates specific sector interests without running candidates for public office. However, in India, lines often blur: the RSS acts as an ideological pressure group, while farmers’ unions frequently endorse specific political fronts during elections.',
    },
    {
      kind: 'keyTerm',
      term: 'Vote Bank',
      meaning:
        'A loyal bloc of voters mobilized by a traditional community patron or dominant caste leader through customary obligations and socio-economic dependence.',
      thinkerSlug: 'mn-srinivas',
    },
    {
      kind: 'keyTerm',
      term: 'Politicization of Caste',
      meaning:
        'The process through which traditional caste networks are reoriented toward democratic competition, secular lobbying, and collective political empowerment.',
    },
    {
      kind: 'keyTerm',
      term: 'Circulation of Elites',
      meaning:
        'The sociological process wherein declining traditional ruling strata are gradually displaced by ascending counter-elites possessing newer organizational and charismatic skills.',
      thinkerSlug: 'vilfredo-pareto',
    },
    {
      kind: 'keyTerm',
      term: 'Labharthi Class',
      meaning:
        'A contemporary cross-caste electoral constituency forged through targeted direct benefit transfers, welfare delivery (rations, housing, gas cylinders), and unmediated state patron-client ties.',
    },
    {
      kind: 'callout',
      variant: 'yaadRakho',
      title: 'Grassroots Elite Creation via 73rd Amendment',
      body: 'Remember that the 73rd and 74th Amendments created over 1.4 million elected women representatives at the grassroots level, engineering an unprecedented circulation of female and subaltern political elites into local self-governance.',
    },
    {
      kind: 'answerBox',
      intro:
        'The sociological debate over conducting a national Caste Census in India involves competing arguments regarding social justice versus social cohesion:',
      points: [
        'Empirical baseline for equity: Proponents like Satish Deshpande argue that without updated caste enumeration (the last full census was in 1931), affirmative action policies operate on speculative century-old estimates.',
        'Targeted sub-categorization: Disaggregated caste data exposes elite capture within backward classes, enabling policy benefits to reach extremely backward castes (EBCs) and marginalized nomadic groups.',
        'Constitutional accountability: Reliable empirical data satisfies the Supreme Court’s mandate in M. Nagaraj and Indra Sawhney requiring quantifiable data on social backwardness and inadequacy of representation.',
        'Reification of caste boundaries: Critics like André Béteille caution that state enumeration solidifies primordial caste identities, impeding the emergence of a casteless civic public sphere.',
        'Competitive ethnic outbidding: Dipankar Gupta warns that publicizing granular caste tallies would trigger populist demands for infinite reservation quotas, fracturing national fraternity.',
      ],
      conclusion:
        'A sociologically sound policy requires that caste enumeration be strictly integrated with multi-dimensional socio-economic deprivation metrics, ensuring affirmative action targets actual deprivation rather than reifying ritual status.',
    },
  ],
}
