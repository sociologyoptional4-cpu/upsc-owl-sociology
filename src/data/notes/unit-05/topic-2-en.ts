import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Theories of social stratification clash over whether unequal rewards are an indispensable meritocratic engine (Parsons, Davis & Moore), a divisive system defending elite closure and status quo (Tumin), an arena of capitalist exploitation (Marx), or a multidimensional play of class, status, and party (Weber)—while feminist critics expose how classical theory long ignored unpaid gender labour.'

const mindMap: MindMapData = {
  title: 'Unit 5.2 · Theories of Social Stratification',
  center: 'Why Societies Stratify',
  subtitle: 'Functional Necessity vs Conflict & Power Monopoly',
  branches: [
    {
      title: 'Structural-Functionalism',
      color: 'lavender',
      thinkers: ['Talcott Parsons', 'Kingsley Davis', 'Wilbert Moore', 'Melvin Tumin'],
      points: [
        'Parsons: Value consensus rewards contributions to collective societal goals',
        'Davis & Moore (1945): Unconscious device ensuring role allocation & training payoff',
        'Tumin (1953): Importance unmeasurable; privilege blocks talent and breeds distrust',
        'Empirical tests: Rosenfeld (Israeli Kibbutz) & Djilas (The New Class in USSR bloc)',
      ],
    },
    {
      title: 'Marxist Conflict Theory',
      color: 'yellow',
      thinkers: ['Karl Marx', 'Friedrich Engels', 'Louis Althusser', 'Erik Olin Wright'],
      points: [
        'Property ownership splits capitalist society into Bourgeoisie vs Proletariat',
        'Surplus value extraction masked by false consciousness and state ideology',
        'Class-in-itself -> Class-for-itself via polarization & revolutionary rupture',
        'Neo-Marxists: Wright (contradictory class locations), Dahrendorf (authority)',
      ],
    },
    {
      title: 'Weberian Tripartite Model',
      color: 'mint',
      thinkers: ['Max Weber', 'Margaret Stacey', 'Frank Parkin', 'W.G. Runciman'],
      points: [
        'Unbundles power into Class (market), Status (honour), and Party (organisation)',
        'Four market classes: propertied, white-collar, petty bourgeoisie, manual labour',
        'Status groups enforce lifestyle & social closure (Hindu caste as extreme form)',
        'Critiques Marx: middle class expands via bureaucracy; socialism centralises power',
      ],
    },
    {
      title: 'Status-Quo, Gender & India',
      color: 'pink',
      thinkers: ['Joan Acker', 'Sylvia Walby', 'M.N. Srinivas', 'B.R. Ambedkar'],
      points: [
        'Gender-blindness: Goldthorpe conventional class erased women’s unpaid & paid work',
        'Status-quo bias: functionalism naturalises existing inequality as "efficiency"',
        'India fit: Davis-Moore matches UPSC/IT pay only partly—caste & coaching distort merit',
        'Paper 2 link: Caste-class nexus, agrarian elites, and post-1991 IT professionals',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u05-01-stratification-theories.webp',
    alt: 'Comparison chart of Functionalist Davis and Moore with Melvin Tumin critique, Marxist class polarization and surplus value, and Weberian class status party framework',
    caption:
      'Every major theory of stratification answers the same puzzle differently: does hierarchy motivate scarce talent for everyone’s good, or protect property, status closure, and class power?',
    credit: 'UPSC OWL Studio · Paper 1 Unit 5 Visual 01',
  },
  {
    kind: 'md',
    body: `## 1. Structural-Functionalist Theory: Inequality as Social Glue

Why does an airline pilot or neurosurgeon command vastly higher income and prestige than a sanitation worker or office clerk? Structural-functionalists offer a counter-intuitive answer: inequality does not persist by accident or conspiracy—it endures because society cannot function smoothly unless crucial, demanding positions attract capable people through unequal rewards.

### Talcott Parsons: Value Consensus Model

[[thinker:Talcott Parsons]] begins with the premise that every society rests on a ==value consensus==—shared agreements about what is admirable and worth striving for. Because societies define collective goals around those shared values (such as economic dynamism in capitalist America or physical courage in a small hunting band), individuals whose abilities help achieve those goals earn superior prestige, wealth, and authority. [[eg:In modern corporate economies, founders who build transformative technology like digital payment platforms are rewarded far more richly than routine clerical staff because collective values prize entrepreneurial innovation.]] Even when lower groups grumble, shared values restrain rebellion and turn diverse roles into cooperative interdependence.

### Kingsley Davis & Wilbert Moore (1945): Role Allocation & Unconscious Device

In their classic essay *Some Principles of Stratification*, [[thinker:Kingsley Davis]] and [[thinker:Wilbert Moore]] argue that stratification is ==universal, inevitable, and an unconscious device== evolved by societies to solve one critical problem: ==effective role allocation and performance==. Some roles (washing dishes or guarding gates) require minimal training, whereas others (brain surgery, civil administration, aerospace engineering) demand rare aptitude and years of expensive sacrifice.

How does a society persuade talented youth to endure costly training and heavy responsibility?
- **Measuring Functional Importance:** A role ranks higher when (1) few individuals possess the scarce talent or training to perform it (a doctor can execute nursing tasks, not vice versa), and (2) many other workers depend on its decisions (managers coordinating factory teams).
- **Three Functional Rewards:** Society attaches unequal ==sustenance and comfort== (pay), ==humour and diversion== (leisure), and ==self-respect and ego expansion== (prestige) to high positions. [[eg:Indian UPSC aspirants willingly forego two to four years of corporate salaries—often losing ₹12–20 lakh in potential earnings—because the long-term prestige, authority, and security of the IAS or IPS compensate that sacrifice.]]
- **Motivation & Integration:** Once recruited, unequal rewards keep incumbents diligent while clear authority ladders coordinate obedience peacefully.

### Melvin Tumin’s Point-by-Point Critique & Status-Quo Charge

In 1953, [[thinker:Melvin Tumin]] dismantled Davis and Moore’s optimism piece by piece, exposing why functionalism often slides into an intellectual defence of the ==status quo==:
- **Circular Importance:** How can we prove a film star or hedge-fund CEO is "functionally more important" than a primary teacher, soldier, or sewer cleaner? Pay reflects ==collective bargaining power== and elite control, not social usefulness.
- **Artificially Restricted Talent Pool:** Elite families monopolise nutrition, private schooling, and coaching; stratification blocks—rather than discovers—hidden talent among Dalits, rural youth, and women.
- **Training Offers Intrinsic Joy:** University years bring intellectual freedom, peer prestige, and rapid mid-career recovery, making lifelong super-salaries unjustified.
- **Divisiveness, Not Integration:** Unfair reward gaps breed cynicism, alienation, and conflict among lower strata rather than grateful harmony.
- **Empirical Test of Universality:** Even societies designed to abolish private property developed rank: [[thinker:Eva Rosenfeld]] found Israeli **Kibbutzim** divided between powerful *leader-managers* and ordinary workers, while [[thinker:Milovan Djilas]] (*The New Class*) and [[thinker:Frank Parkin]] showed Soviet-style communist regimes birthed an unchecked bureaucratic party ruling class.

[[trap:When UPSC asks whether Davis-Moore applies to contemporary India (2016 PYQ), avoid a flat "yes" or "no". Show that it fails miserably for hereditary caste (ascription, not merit), partially explains post-1991 corporate/IT/UPSC differentials, yet still breaks down wherever inherited English-medium schooling, coaching costs, and caste networks skew competition.]]

## 2. Marxist Theory: Class Polarization & Surplus Extraction

While functionalists view stratification as a cooperative ladder, [[thinker:Karl Marx]] treats it as a battlefield where an owning minority extracts wealth from a propertyless majority. For Marx, every historical society (save primitive communism) splits into two primary, antagonistic strata defined strictly by ownership or non-ownership of the ==means of production==—land, factories, machinery, and capital.

In industrial capitalism, the ==Bourgeoisie== own productive capital while the ==Proletariat== own only their labour power, locking them into **antagonistic cooperation**: higher wages directly shrink capitalist profits. Surplus value appropriated from unpaid worker hours enriches owners, while institutions like schools, law, and media—[[thinker:Louis Althusser]]’s ==Ideological State Apparatuses (ISAs)==—convince workers that inequality is natural ==false class consciousness==. Yet Marx argued that fierce competition pushes small traders (*petty bourgeoisie*) down into the proletariat (**class polarization**), turning workers from an objective ==class-in-itself== into a politically conscious ==class-for-itself== capable of socialist revolution. [[eg:When thousands of gig riders across Indian cities share WhatsApp groups over falling per-order payouts and coordinate flash log-offs, an isolated class-in-itself begins acting like a class-for-itself.]] Later Neo-Marxists refined this picture: [[thinker:Erik Olin Wright]] placed salaried managers in **contradictory class locations**, while [[thinker:Ralf Dahrendorf]] shifted focus from private property to **authority relations** inside modern corporations.

## 3. Weberian Theory: Power Unbundled Into Class, Status & Party

[[thinker:Max Weber]] shared Marx’s conflict realism yet rejected his economic monocausality. Why do a wealthy scrap dealer and an Oxford-educated civil servant with modest savings sit at completely different heights in social respect and marriage circles? Because power in society runs along three distinct, cross-cutting channels: ==Class (Economic Market)==, ==Status Group (Social Honour)==, and ==Party (Political Organisation)==.

| Dimension | Marxian Stratification | Weberian Stratification |
| --- | --- | --- |
| Primary Root | Ownership vs non-ownership of means of production | Multi-dimensional: Class, Status, and Party |
| Number of Classes | Two main polarised classes (Bourgeoisie, Proletariat) | Market continuum (propertied, professionals, petty bourgeoisie, manual) |
| Collective Solidarity | Class inevitably becomes a revolutionary community | Class is merely shared market position; Status forms real community |
| Future of Middle Class | Sinks into proletariat (proletarianisation) | Expands steadily via rational bureaucracy & specialist skills |
| Fate of Socialism | Abolishing private property ends stratification | State socialism widens bureaucratic rule & administrative domination |

Let us trace Weber’s three channels carefully:
- **Class (Market Position & Life-Chances):** Class groups individuals sharing comparable economic returns from property or marketable skills (shareholders, doctors, small shopkeepers, wage workers). Unlike Marx’s two-camp model, Weber treats classes as market strata that need not share collective consciousness.
- **Status Group (Social Honour & Closure):** Status groups gather people sharing a distinct ==style of life== and mutual respect, defended through ==social closure==—monopolising elite clubs, credentials, and endogamous marriage while shutting out *nouveaux riches* or stigmatised castes. [[eg:In traditional India, Weber saw caste as the world’s purest crystalisation of status groups, where Brahmins outranked wealthier merchants on ritual honour—and even today within one economic class, Margaret Stacey found working-class British families dividing themselves into "respectable" and "rough" status tiers.]]
- **Party (Organised Political Power):** Parties include political machines, trade unions, caste associations, and NGOs organised intentionally to capture state or institutional power—cutting across class and status boundaries.

## 4. Is Stratification Theory Gender-Blind? (The Feminist Critique)

For nearly a century, classical stratification textbooks quietly treated the male household head as the sole unit of rank—making gender invisible inside theory. Feminist sociologists exposed four blind spots across functionalist, Marxist, and Weberian models:
- **The "Conventional" Male-Head Fallacy:** [[thinker:John Goldthorpe]] famously assigned married women the class rank of their husbands; [[thinker:Joan Acker]] denounced this as "intellectual sexism" that ignored households where women out-earned spouses or faced separate labour segmentation.
- **Invisible Unpaid Care Labour:** Davis and Moore treated paid managerial roles as "functionally vital" while ignoring unpaid domestic work, childbirth, and eldercare without which the wage workforce could not show up each morning ([[thinker:Ann Oakley]], [[thinker:Christine Delphy]]).
- **Economic vs Patriarchal Blindness:** Classical Marxism reduced women’s subordination to capitalism alone; dual-systems theorists like [[thinker:Heidi Hartmann]] and [[thinker:Sylvia Walby]] proved patriarchy predates capitalism and operates through household exploitation, sexual violence, and state bias.
- **Intersectional Power:** [[thinker:Patricia Hill Collins]] and [[thinker:Sharmila Rege]] proved gender cannot be tacked on as an afterthought—class, caste, race, and gender mutually constitute lived stratification. [[link:Explore patriarchy and sexual division of labour further in Paper 1 Unit 9 and Paper 2 Unit 7.]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Davis & Moore (Functionalist View)',
    rightTitle: 'Melvin Tumin (Critical Rebuttal)',
    rows: [
      {
        aspect: 'Origin of Inequality',
        left: 'Unconscious societal mechanism for survival and efficiency',
        right: 'Historical elite privilege, bargaining power, and institutional closure',
      },
      {
        aspect: 'Functional Importance',
        left: 'Measured objectively by scarce skill and dependence of others',
        right: 'Subjective value judgment; essential care and manual work are underpaid',
      },
      {
        aspect: 'Talent Discovery',
        left: 'High rewards draw the brightest individuals out of scarce talent',
        right: 'Talent pool is vast, but class/caste/gender barriers choke lower strata',
      },
      {
        aspect: 'Training Cost',
        left: 'Long unpaid study requires lifelong financial compensation',
        right: 'Training brings intrinsic prestige, autonomy, and quick salary recovery',
      },
      {
        aspect: 'Societal Outcome',
        left: 'Integrates society peacefully around shared meritocratic authority',
        right: 'Breeds alienation, suspicion, status-quo inertia, and class conflict',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Objective Exploitation',
        text: 'Capitalists extract surplus value while petty traders sink down (Polarisation)',
      },
      {
        label: 'Class-in-Itself',
        text: 'Workers share factory hardship yet remain divided by false consciousness',
      },
      {
        label: 'Class-for-Itself',
        text: 'Shared struggle and unionisation spark true revolutionary awareness',
      },
      {
        label: 'Revolutionary Rupture',
        text: 'Working majority abolishes private productive property toward equality',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Role Allocation',
    meaning:
      'Davis and Moore’s functional mechanism whereby society attaches unequal income and prestige to demanding positions so scarce talent is motivated to train for and fill them.',
  },
  {
    kind: 'keyTerm',
    term: 'Class-in-Itself vs Class-for-Itself',
    meaning:
      'Marx’s distinction between an objective category sharing a common relationship to production (in-itself) and a self-conscious, organised political actor fighting for shared interests (for-itself).',
    thinkerSlug: 'karl-marx',
  },
  {
    kind: 'keyTerm',
    term: 'Status Group & Social Closure',
    meaning:
      'A community ranked by shared social honour and lifestyle that protects privileges by restricting marriage, socialising, and elite entry to insiders.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'The New Class',
    meaning:
      'Milovan Djilas’s critique showing that even after abolishing private capitalism, single-party communist states generated an unchecked, privileged class of party bureaucrats.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'max-weber',
    quote: 'Classes, status groups, and parties are phenomena of the distribution of power within a community.',
    context: 'Weber’s tripartite rejection of single-factor Marxist economic determinism.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'The ideas of the ruling class are in every epoch the ruling ideas.',
    context: 'Explaining how false consciousness masks property-based exploitation as natural common sense.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'High-Frequency PYQ Matrix: Master These 3 Bridges',
    body: 'Over a quarter of Unit 5 PYQs sit here! Pair (1) Davis-Moore + Tumin + India relevance (2016/2018/2019/2025), (2) Marx vs Weber on class/status/party/bureaucracy (2014/2015/2017/2019/2021), and (3) Feminist critique of gender-blindness (Joan Acker, Goldthorpe revision, Sylvia Walby) for 2025.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Treating Weber as "Anti-Marx" Completely',
    body: 'Never write that Weber rejected economic conflict altogether. Weber explicitly agreed with Marx that unequal market power breeds intense class conflict—his critique was that property ownership is NOT the sole engine of stratification, and abolishing capitalism could worsen bureaucratic domination.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Empirical Weapons Against Functionalist Universality',
    body: 'Whenever asked if stratification is universal or functional, quote two knockout studies: Eva Rosenfeld on Israeli egalitarian Kibbutzim (leader-managers held higher power/prestige even without wealth) and Milovan Djilas on Yugoslavia/Eastern bloc party bureaucrats.',
  },
  {
    kind: 'answerBox',
    intro:
      'Classical theories of stratification—structural-functionalist, Marxist, and Weberian—illuminate complementary dimensions of why societies rank people, yet each faces sharp empirical and feminist challenges.',
    points: [
      'Structural-Functionalism (Parsons, Davis & Moore): Treats inequality as an unconscious, inevitable device matching scarce talent to key roles via shared values—yet risks legitimising the status quo.',
      'Functionalist Critique (Tumin, Rosenfeld, Djilas): Exposes subjective "importance" claims, caste/class barriers choking talent, and power inequality persisting even without private wealth.',
      'Marxist Theory (Marx, Wright, Althusser): Roots stratification in ownership of productive property, surplus extraction, ideological hegemony, and revolutionary class struggle.',
      'Weberian Model (Weber, Parkin, Stacey): Unbundles power into market Class, lifestyle Status Groups (social closure), and organised Party, predicting middle-class bureaucratic expansion.',
      'Gender-Blindness Correction (Acker, Walby, Collins): Replaces the male-head assumption with analysis of unpaid care work, labour segmentation, and intersectional patriarchy.',
    ],
    conclusion:
      'Synthesising functional incentives, Marxian exploitation, Weberian closure, and feminist intersectionality equips sociology to decode contemporary caste, class, and global inequalities.',
  },
]

export const topic2En: TopicLangContent = { summary, mindMap, sections }