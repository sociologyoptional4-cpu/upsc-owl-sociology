import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Social stratification operates simultaneously across economic class, Weberian status honour, socially constructed gender and masculinities, ethnicity, and racialisation—and far from erasing ascriptive identities, modernisation frequently re-mobilises caste, ethnicity, and race alongside the new middle class.'

const mindMap: MindMapData = {
  title: 'Unit 5.3 · Dimensions of Stratification',
  center: 'Five Intersecting Axes',
  subtitle: 'Class • Status Groups • Gender • Ethnicity • Race',
  branches: [
    {
      title: 'Class & New Middle Class',
      color: 'lavender',
      thinkers: ['Max Weber', 'Daniel Bell', 'John Goldthorpe', 'Leela Fernandes'],
      points: [
        'Weberian white-collar expansion refuted Marx’s simple proletarianisation',
        'New middle class: economic cushion, coaching/degrees, deferred gratification',
        'Goldthorpe & Lockwood (Luton): high-wage manual workers stayed culturally distinct',
        'Lipset & India debate: middle-class anxiety fuels nationalist/populist politics',
      ],
    },
    {
      title: 'Status Groups & Modernity Paradox',
      color: 'yellow',
      thinkers: ['Max Weber', 'Yogendra Singh', 'M.N. Srinivas', 'André Béteille'],
      points: [
        'Status groups defend honour and lifestyle through endogamy and social closure',
        'Modernisation did not erase caste, race, or ethnicity—it politicised and digitalised them',
        'Matrimonial apps, vote-bank blocs, and urban enclaves hybridise tradition and market',
        'Natural difference (height/sex/pigment) vs social inequality (caste/class rewards)',
      ],
    },
    {
      title: 'Gender, Masculinity & Intersectionality',
      color: 'mint',
      thinkers: ['Raewyn Connell', 'Sylvia Walby', 'Patricia Hill Collins', 'S.M. Channa'],
      points: [
        'Gender: socially scripted power hierarchy, not biological anatomy (Ann Oakley)',
        'Hegemonic masculinity locks men into stoicism, breadwinner stress, and dominance',
        'Devi-Dasi divide (Channa) & 6 structures of patriarchy (Walby) rank women unequally',
        'Intersectionality (Crenshaw, Collins, Rege): caste + class + race compound gender bias',
      ],
    },
    {
      title: 'Ethnicity & Race (Blurred Lines)',
      color: 'pink',
      thinkers: ['W.E.B. Du Bois', 'Ali Rattansi', 'Clifford Geertz', 'Fredrik Barth'],
      points: [
        'UNESCO 1950 refuted biological race; shifted focus to socio-cultural ethnicity',
        'Blurred boundary: "New Racism" (Rattansi) racialises religion, accent, and culture',
        'Geertz (primordial blood/kin) vs Barth (fluid instrumentalist boundaries) vs Noel',
        'Global resurgence: uneven development, migration fear, and identity politics',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u05-02-mobility-dimensions-exclusion.webp',
    alt: 'Infographic showing Bourdieu four capitals and overlapping intersectionality Venn diagram across class, status, gender, ethnicity, and race alongside mobility and exclusion',
    caption:
      'Class, status, gender, ethnicity, and race never operate in isolated silos—they overlap dynamically across Bourdieu’s capitals and intersectional hierarchies.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 5 Visual 02',
  },
  {
    kind: 'md',
    body: `## 1. Class, the "New Middle Class" & Status Groups

Every complex society ranks people through both material wealth and cultural prestige, yet those two ladders rarely align cleanly. While ==economic class== sorts households by property, income, and market skills, ==status groups== rank communities by social honour, lifestyle, and exclusiveness. Understanding both explains why modern education and salaries transform old hierarchies without destroying them.

### From Petty Bourgeoisie to the "New Middle Class"

Karl Marx expected small shopkeepers and artisans—the **old middle class** or *petty bourgeoisie*—to go bankrupt under big factories and sink into the working class. Instead, [[thinker:Max Weber]] correctly predicted that rational capitalism and modern state administration would expand salaried managers, engineers, teachers, accountants, and civil servants into a vast ==New Middle Class==, leading [[thinker:Daniel Bell]] to describe post-industrial societies as middle-heavy "Middle Class Societies."

Four empirical features define the New Middle Class mindset:
- **Economic Cushion & Credentialism:** Sitting comfortably above daily survival yet short of billionaire wealth, this stratum relies obsessively on degrees, coaching, and ==deferred gratification==—postponing leisure across school boards, IIT/NEET/CAT, and 20-year housing EMIs. [[eg:Walk into an Indian middle-class living room and parents proudly preserve folder files of every certificate from nursery drawing contests to university mark sheets—because credentials are their primary inheritance.]]
- **Cultural Resistance to Union Militancy:** Rather than street strikes, they favour individual career striving and meritocratic exams.
- **Not Automatic With High Wages:** In their famous 1963 *Affluent Worker* study in Luton, [[thinker:John Goldthorpe]] and [[thinker:David Lockwood]] showed that well-paid factory workers did not adopt white-collar values or gain social acceptance from professionals—proving class is cultural as well as monetary.
- **Political Ambivalence:** [[thinker:Seymour Martin Lipset]] warned that economic anxiety from above and below pushes the middle class toward populist nationalism; in India, [[thinker:Leela Fernandes]] shows the post-1991 consumerist new middle class shapes urban politics, civic exclusions, and majoritarian agendas.

### Status Groups & Why Modernisation Did Not Erase Caste, Ethnicity, or Race

Classical modernisation theorists assumed factories, cities, and markets would dissolve birth-based status groups into open class competition. Why do **caste, ethnicity, and race** remain stubbornly powerful in modern India, America, and Europe?
- **Selective Synthesis ([[thinker:Yogendra Singh]] & [[thinker:M.N. Srinivas]]):** Tradition does not vanish under modernity; castes adapt via caste associations, political vote banks, and endogamous matrimony filters. [[eg:Indian matrimonial websites use modern algorithms and income filters while retaining strict caste, sub-caste, and gotra checkboxes—fusing class sorting with Weberian status closure.]]
- **Inherited Inequality at the Starting Line:** [[thinker:André Béteille]] notes that unlike ==natural differences== (height, strength, biological traits), ==social inequality== converts caste and class birthplaces into unequal schooling and networks, reproducing privilege inside supposedly open markets.

## 2. Gender as Stratification, Male Identity & Intersectionality

Biological **sex** refers to chromosomes and anatomy assigned at birth, whereas ==gender== is the socially constructed system of roles, power, expectations, and unequal rewards society attaches to masculinity, femininity, and non-binary lives ([[thinker:Ann Oakley]]). Sociologists construct gender not as benign complementarity, but as an axis of stratification because it distributes unpaid labour, wealth, safety, and authority asymmetrically.

Three mechanisms anchor gender inequality:
- **Patriarchal Structures ([[thinker:Sylvia Walby]]):** Patriarchy operates across six linked sites—paid employment wage gaps, unpaid domestic production, cultural norms, male violence, state laws, and sexuality policing.
- **Divisions Within Women:** [[thinker:Subhadra Mitra Channa]] documents the cultural ==Devi–Dasi== binary that grants conditional "honour" to obedient upper-caste homemakers while stigmatising lower-caste and working women.
- **How Gender Shapes Male Identity ([[thinker:Raewyn Connell]]):** Gender does not constrain women alone—Connell’s concept of ==Hegemonic Masculinity== shows society elevates an idealised tough, stoic, financially dominant male archetype that pressures ordinary men into suppressing emotion, taking physical risks, mocking "effeminate" peers, and suffering severe breadwinner anxiety when unemployed. [[eg:In Indian corporate or college peer culture, young men often feel pressured into risky driving, heavy drinking, or hiding depression because showing vulnerability invites taunts questioning their "manhood."]]

Yet gender never acts in isolation: [[thinker:Kimberlé Crenshaw]] and [[thinker:Patricia Hill Collins]] developed ==Intersectionality== to prove that class, caste, race, disability, and sexuality weave together simultaneously. A Black working-class woman in Detroit or a landless Dalit agricultural woman in Bihar ([[thinker:Sharmila Rege]]) endures compounded exploitation completely invisible if analysts study "women" or "workers" separately.

## 3. Race, Ethnicity & Why Their Boundary Is Blurred

Historically, **race** classified humans by visible physical traits (skin tone, hair texture, facial shape) to justify colonialism, US slavery, South African apartheid, and the Nazi Holocaust. Following World War II, **UNESCO’s landmark 1950 statement *The Race Question*** marshalled biologists and sociologists to demolish scientific racism—proving no genetic link exists between skin colour and intelligence, and shifting scholarship toward socio-cultural ==ethnicity== (groups united by shared language, religion, customs, and imagined common ancestry).

Yet today, sociologists observe that the **boundary between race and ethnicity is deeply blurred**:
- **New Cultural Racism ([[thinker:Ali Rattansi]]):** Even where overt biological slurs are outlawed, minorities face ==New Racism== targeting cultural traits—accents, headscarves, food, or religion—treating cultural outsiders as unassimilable.
- **Colonial Racialisation of Ethnicities:** In India, British administrators mislabelled cultural-regional communities like Sikhs, Gurkhas, Jats, Rajputs, and Marathas as biological "martial races"; today, Northeast Indian migrants facing appearance-based slurs or minorities treated as monolithic physical threats show racialisation of ethnicity in real time.
- **Total Race Society & Institutional Bias:** [[thinker:W.E.B. Du Bois]] (and later [[thinker:Geoff Egan]]) proved racial stratification lives inside housing markets, schools, policing, and humour long after formal legal segregation ends.

| Dimension | Primary Basis | Boundary Mechanism | Contemporary Persistence |
| --- | --- | --- | --- |
| Class | Property, income, market credentials | Differential schooling, capital inheritance | Gig precarity vs credentialed tech elites |
| Status Group | Social honour, lifestyle, lineage | Endogamy, exclusive clubs, caste rules | Matrimonial filters, cultural snobbery |
| Gender | Socialised masculinity & femininity | Sexual division of labour, safety norms | Unpaid care burden, glass ceiling |
| Ethnicity | Shared culture, language, homeland myth | Situational boundary redrawing (Barth) | Manipur conflict, linguistic/sub-nationalism |
| Race | Socially marked phenotypical traits | Institutional & cultural "New Racism" | Housing bias, anti-immigrant profiling |

### Why Ethnicity Is Growing More Salient Worldwide

Why has ethnic conflict intensified in an era of global smartphones and markets? Compare two classic lenses before examining structural causes:
- **Primordialist View ([[thinker:Clifford Geertz]]):** Roots ethnic passion in deep, emotional blood, kinship, and mother-tongue attachments ("like attracts like") that modern states cannot easily erase.
- **Instrumentalist View ([[thinker:Fredrik Barth]]):** Treats ethnic boundaries as flexible political toolkits mobilised strategically for jobs, statehood, or reservations. [[eg:One person in Haryana may foreground regional Haryanvi identity during river-water disputes, Jat caste identity during reservation campaigns, and Hindu religious identity during national polarisation—redrawing ethnic boundaries by political context.]]
- **Donald Noel’s Ethnic Stratification & Global Drivers:** [[thinker:Donald Noel]] shows ethnic stratification emerges whenever four triggers align—**group contact**, **competition for scarce resources**, **power differential**, and **ethnocentrism** (judging others’ diet, alcohol norms, or family values as inferior). Uneven capitalist development, refugee migration fears, and electoral identity politics keep ethnicity central across Manipur (Kuki-Meitei-Naga tensions), European nativism, and Middle Eastern conflicts. [[link:Link this directly to Paper 2 Unit 13 (Ethnicity and Identity Movements) and Unit 15 (Ethnic Conflicts and Communalism).]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Primordialist View (Clifford Geertz)',
    rightTitle: 'Instrumentalist View (Fredrik Barth)',
    rows: [
      {
        aspect: 'Source of Ethnic Identity',
        left: 'Deep, ancient, semi-sacred bonds of blood, kin, and tongue',
        right: 'Fluid, situational political choices crafted to win interests',
      },
      {
        aspect: 'Nature of Boundaries',
        left: 'Fixed, deeply emotional, and resistant to rational persuasion',
        right: 'Continuously drawn and redrawn across shifting social contexts',
      },
      {
        aspect: 'Role of Elites & Politics',
        left: 'Leaders tap pre-existing primal loyalties already felt by masses',
        right: 'Ethnic entrepreneurs mobilise identity for seats, jobs, or states',
      },
      {
        aspect: 'Indian Illustration',
        left: 'Seamless kin affinity within tight trading or linguistic networks',
        right: 'Shifting mobilisation across statehood (Bodoland), caste quota, or religion',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: '1. Group Contact',
        text: 'Migration, conquest, or markets bring distinct ethnic groups together',
      },
      {
        label: '2. Scarce Competition',
        text: 'Groups compete over land, jobs, housing, or political representation',
      },
      {
        label: '3. Power Differential',
        text: 'One group commands superior state, military, or economic leverage',
      },
      {
        label: '4. Ethnocentrism',
        text: 'Dominant cultural habits are declared superior, locking hierarchy',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'New Middle Class',
    meaning:
      'Salaried white-collar professionals, managers, and technical specialists expanded by rational bureaucracy and modern markets—characterised by credential investment and deferred gratification.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'Hegemonic Masculinity',
    meaning:
      'Raewyn Connell’s concept of the culturally dominant male ideal—emotionally stoic, breadwinning, and authoritative—which pressures men while subordinating women and non-conforming men.',
  },
  {
    kind: 'keyTerm',
    term: 'Intersectionality',
    meaning:
      'Patricia Hill Collins and Kimberlé Crenshaw’s framework showing how gender, class, caste, race, and sexuality interlock rather than acting as isolated layers of oppression.',
  },
  {
    kind: 'keyTerm',
    term: 'Ethnic Boundaries',
    meaning:
      'Fredrik Barth’s insight that ethnicity persists not through unchanging isolation, but through actively negotiated cultural borders distinguishing insiders from outsiders.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'max-weber',
    quote: 'Status honour is normally expressed by the fact that a specific style of life can be expected from all.',
    context: 'Explaining how cultural tastes, dress, and endogamy defend status barriers even amid class growth.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'br-ambedkar',
    quote: 'I measure the progress of a community by the degree of progress which women have achieved.',
    context: 'Linking caste democratisation inseparably with gender emancipation.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2014–2023 PYQ Goldmine: Masculinity, Intersectionality & Modernity Paradox',
    body: 'Avoid treating "gender" solely as "women’s issues"! The 2014 PYQ specifically asks how gender shapes MALE identity (use Raewyn Connell’s hegemonic masculinity + breadwinner stress). Similarly, for the 2019 Modernisation Paradox PYQ, fuse Yogendra Singh, M.N. Srinivas, Weberian status closure, and Barth’s instrumental ethnicity.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Treating Race as Biological and Ethnicity as Cultural Only',
    body: 'After UNESCO (1950), sociology rejects biological race as scientific myth—both race and ethnicity are socially constructed! Furthermore, under "New Racism" (Ali Rattansi), cultural traits like dress, religion, and accent are frequently racialised, deliberately blurring the race-ethnicity line.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Quick Memory Hook: Donald Noel’s CCPE Formula',
    body: 'When explaining how peaceful cultural diversity turns into ethnic hierarchy, drop Donald Noel’s 4-step CCPE formula: Contact + Competition + Power Differential + Ethnocentrism. All four must align for durable ethnic stratification to crystallise.',
  },
  {
    kind: 'answerBox',
    intro:
      'Contemporary social stratification cannot be understood through income brackets alone; class, status groups, gender, ethnicity, and race intersect continuously to distribute power and dignity.',
    points: [
      'Class & New Middle Class: Salaried professionals expanded via Weberian bureaucratisation—relying on degrees and deferred gratification while shaping populist politics (Bell, Goldthorpe, Lipset).',
      'Status Groups & Persistent Ascription: Modernisation transforms rather than erases caste and status closure, blending market filters with endogamy (Weber, Srinivas, Yogendra Singh).',
      'Gender & Male Identity: Sociologists construct gender as power hierarchy—unpaid care labour (Walby), intersectional bias (Collins, Rege), and hegemonic masculinity burdening men (Connell).',
      'Blurred Race-Ethnicity Line: Though UNESCO debunked biological race, Ali Rattansi’s New Racism racialises religious, linguistic, and cultural ethnic markers.',
      'Rising Ethnic Salience: Driven by both primordial sentiment (Geertz) and strategic political mobilisation (Barth) amid resource competition and uneven development (Noel).',
    ],
    conclusion:
      'Decoding all five dimensions together prevents economic reductionism and reveals how modern capitalism regularly recruits older status, gender, and ethnic divides.',
  },
]

export const topic3En: TopicLangContent = { summary, mindMap, sections }