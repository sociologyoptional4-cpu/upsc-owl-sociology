import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 7.1 · Sociological Theories of Power',
  center: 'Power & Authority',
  subtitle: 'Coercion vs Legitimacy • Zero-Sum vs Variable-Sum • Competing Models',
  branches: [
    {
      title: 'Weber & Authority',
      color: 'lavender',
      thinkers: ['Max Weber', 'Steven Lukes', 'Michel Foucault'],
      points: [
        'Power (Macht): realising will despite resistance (constant-sum)',
        'Authority (Herrschaft): legitimate power obeyed as a social duty',
        '3 Ideal Types: Traditional, Charismatic, and Legal-Rational',
        'Lukes 3 Faces (decision, agenda, desire) & Foucault capillary power',
      ],
    },
    {
      title: 'Functional & Variable-Sum',
      color: 'yellow',
      thinkers: ['Talcott Parsons', 'Émile Durkheim', 'Hannah Arendt'],
      points: [
        'Power belongs to society as a generalized resource for collective goals',
        'Bank & Money analogy: citizens deposit votes for developmental interest',
        'Variable-sum: total societal power expands or contracts with trust',
        'Critique (Giddens): ignores how dominant groups serve sectional ends',
      ],
    },
    {
      title: 'Marxist & Elite Lenses',
      color: 'mint',
      thinkers: ['Karl Marx', 'Louis Althusser', 'Nicos Poulantzas', 'Vilfredo Pareto'],
      points: [
        'Marxist zero-sum: political power stems from economic base ownership',
        'Althusser: Repressive (RSA: force) vs Ideological (ISA: schools/media)',
        'Poulantzas: relative autonomy of state & Westergaard welfare candy',
        'Elite theories: Pareto (Lions/Foxes), Mosca, Michels & C.W. Mills',
      ],
    },
    {
      title: 'Pluralism & Hierarchy',
      color: 'pink',
      thinkers: ['Robert Dahl', 'David Marsh', 'M.N. Srinivas', 'B.R. Ambedkar'],
      points: [
        'Classical Pluralism (Dahl): polyarchy of competing interest groups',
        'Elite Pluralism (Marsh): state arbitrates among uneven representative elites',
        'Power builds hierarchy via coercion, resource control & hegemony',
        'Indian reality: dominant caste power vs democratic Bahujan assertion',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u07-01-power-theories-elites.webp',
    alt: 'P1 Unit 7 infographic: Theories of Power & Elites — Competing Frameworks of Political Power',
    caption: 'Competing Frameworks of Political Power (Theories of Power & Elites).',
    credit: 'UPSC OWL Studio · Paper 1 Unit 7 Visual 01',
  },
  {
    kind: 'md',
    body: `## What Is Power, and How Does It Differ from Authority?

In everyday life, whether in a family, a corporate office, or national politics, some individuals can make others follow their instructions. In sociology, ==Power== is the ability of a person or group to carry out their wishes in a communal setting even when others resist. Yet raw force alone is unstable and exhausting — societies endure only when power wins moral acceptance and turns into ==Authority==, which is power that people obey willingly because they consider it rightful and legitimate.

[[thinker:Max Weber]] made this distinction the cornerstone of political sociology. A highway robber pointing a gun exercises raw coercive power, whereas a traffic constable issuing a challan or a judge pronouncing a sentence exercises legitimate authority. [[eg:When citizens quietly stand in long queues outside polling booths or pay income tax without a policeman standing behind them, Weberian legal-rational authority is at work.]] Weber identified three pure or ideal types of authority based on where legitimacy comes from:

- **Traditional Authority:** Legitimacy rests on sacred custom and ancestral convention ("it has always been so"). [[eg:Hereditary village headmen, patriarchal elders in a joint family, or traditional Khap panchayats command obedience through age-old custom.]]
- **Charismatic Authority:** Legitimacy flows from devotion to an extraordinary leader’s personal magnetism, heroism, or saintliness. Because charisma is tied to one mortal person, it is inherently unstable until it undergoes ==routinisation of charisma== into rules or traditions. [[eg:Mahatma Gandhi’s mass appeal during the freedom struggle or Birsa Munda’s tribal leadership exemplified pure charisma.]]
- **Legal-Rational Authority:** Legitimacy comes from impersonal, written laws and constitutional rules; citizens obey the formal office rather than the private individual holding it. [[eg:A District Collector or Prime Minister in India wields massive authority while in office, but steps back into ordinary citizenship the moment their legal tenure ends.]]

## Is Power a Fixed Pie or an Expanding Resource? (Zero-Sum vs Variable-Sum)

One of the sharpest debates in sociology asks whether the total amount of power in society is fixed or expandable. Imagine two ways of looking at a family budget: either one member’s gain automatically reduces another member’s share, or everyone pools money together to grow the entire household’s prosperity. Sociologists divide along these exact lines into ==Constant-Sum (Zero-Sum)== and ==Variable-Sum== conceptions of power.

### 1. The Zero-Sum View (Max Weber and Karl Marx)

Thinkers in the conflict tradition argue that the total amount of power in society is fixed, so one group can gain power only at the direct expense of another. For [[thinker:Max Weber]], because power means overcoming someone else’s resistance, every victory produces a winner and a loser. [[thinker:Karl Marx]] took an even sharper materialist view: power originates in ownership of the economic base (land, factories, capital), making the state an executive committee managing the common affairs of the bourgeoisie.

How does a small capitalist class maintain zero-sum dominance over millions of workers without constant rebellion? Later Marxists uncovered three subtle mechanisms:

- **State Apparatuses ([[thinker:Louis Althusser]]):** The ruling class relies on two arms — the ==Repressive State Apparatus (RSA)== (police, army, courts, prisons using physical coercion) and the ==Ideological State Apparatus (ISA)== (schools, mass media, religion, and curriculum that condition citizens to accept capitalism as fair and natural).
- **Welfare as Petty Concessions ([[thinker:John Westergaard]] and [[thinker:Henrietta Resler]]):** Welfare schemes like minimum wages or subsidised rations are not genuine power-sharing; like handing a cheap candy to a crying child in a toy mall, they pacify worker anger while leaving private corporate profit untouched.
- **Relative Autonomy of the State ([[thinker:Nicos Poulantzas]]):** Capitalists rarely sit as Prime Ministers themselves because rival tycoons compete fiercely; the state remains relatively autonomous from individual billionaires so it can act as a neutral umpire protecting the long-term survival of capitalism as a whole while projecting a democratic "for all" image. [[eg:When the Indian state regulates corporate monopolies through SEBI or CCI while still promoting private-sector-led growth, Poulantzas’s relative autonomy becomes visible.]]

### 2. The Variable-Sum View (Talcott Parsons)

In stark contrast, functionalist [[thinker:Talcott Parsons]] rejected the idea that power is a zero-sum tug-of-war. He defined power as a ==generalized societal resource== belonging to the whole community — the collective capacity of a society to achieve shared goals like economic growth, security, and public health.

- **The Bank and Money Analogy:** Parsons compared power to money and political leaders to banks. Just as depositors place savings in a bank to earn interest, citizens deposit their individual power (via votes) in leaders; when leaders deliver collective goods, everyone’s power and well-being expand together in a win-win dynamic. [[eg:When voters mandate a government to build rural roads, digital UPI infrastructure, or clean water grids (Jal Jeevan Mission), the resulting mobility empowers both citizens and the state simultaneously.]]
- **Withdrawal of Mandate:** If a bank fails to pay interest, depositors withdraw their money; similarly, if rulers fail to deliver collective goals, citizens withdraw their power deposit at the next election. [[trap:As Anthony Giddens critiqued, Parsons’s rose-tinted "sab changa si" view ignores how dominant elites frequently hijack the "collective bank" to serve narrow class or caste interests.]]

| Dimension | Zero-Sum / Constant-Sum Power | Variable-Sum Power |
| --- | --- | --- |
| Core Premise | Total power in society is fixed; A gains only if B loses | Total power expands or shrinks based on collective cooperation |
| Primary Thinkers | Karl Marx, Max Weber, C. Wright Mills | Talcott Parsons, Émile Durkheim |
| View of the State | Instrument of dominant class or command-post elite | Legitimate trustee mobilising resources for common goals |
| Indian Illustration | Landlords suppressing landless labourers’ wage demands | Mass vaccination or UPI adoption expanding collective capacity |

## Beyond Open Conflict: Steven Lukes and Michel Foucault

Does power operate only when someone gives an open order or wins a parliamentary vote? Two modern thinkers showed that the deepest power works invisibly to build and maintain social hierarchies.

[[thinker:Steven Lukes]] argued in *Power: A Radical View* that Weber looked only at the surface and outlined ==Three Faces (Dimensions) of Power==:

- **First Dimension (Open Decision-Making):** Who wins when an issue is openly debated and voted on in parliament or court?
- **Second Dimension (Agenda-Setting / Non-Decision-Making):** Drawn from Bachrach and Baratz, this secretive face decides which grievances are allowed onto the table and which are quietly buried behind closed doors. [[eg:When powerful lobbies prevent crucial bills on electoral funding transparency or agrarian distress from even being listed for parliamentary debate, the second face of power operates.]]
- **Third Dimension (Shaping Desires and Beliefs):** The most insidious face of power manipulates people’s consciousness so they voluntarily accept hierarchy as natural or divinely ordained — matching [[thinker:Antonio Gramsci]]’s ==cultural hegemony==. [[eg:When patriarchal socialisation convinces women that silent self-sacrifice is their highest virtue, or caste ideology convinces lower castes that deprivation is past-life karma, hierarchy reproduces itself without daily police force.]]

Going even further, postmodern thinker [[thinker:Michel Foucault]] argued that power is not locked inside the Parliament or Prime Minister’s Office. Instead, power is ==capillary and ubiquitous== — flowing through every vein of society via everyday ==discourse, surveillance, and knowledge-power== in hospitals, schools, prisons (the Panopticon), and psychiatric clinics that label who is "normal" or "deviant". [[eg:Today, biometric Aadhaar databases, CCTV networks, and workplace productivity algorithms discipline daily behaviour quietly from within.]]

## Classical Elite and Pluralist Models of Societal Power

Apart from Marxism and Functionalism, two major models debate who truly governs modern industrial democracies:

- **Classical Elite Theory ([[thinker:Vilfredo Pareto]], [[thinker:Gaetano Mosca]], [[thinker:Robert Michels]]):** Answering Marx, they argued that history is never a march toward classless equality; every society is inevitably ruled by a small minority over passive masses. Pareto contrasted Governing Elites of forceful **Lions** and cunning **Foxes**, while Michels formulated the ==Iron Law of Oligarchy== ("Who says organisation, says oligarchy"), proving that even socialist parties inevitably concentrate power in a few top hands due to the administrative need for quick decisions and mass psychology’s need to be led.
- **Pluralism and Elite Pluralism ([[thinker:Robert Dahl]], [[thinker:Nelson Polsby]], [[thinker:David Marsh]]):** Rejecting both Marxist cynicism and Elite fatalism, Dahl argued that in advanced industrial democracies power is widely dispersed across competing interest groups — a ==polyarchy== where no single group dominates forever and the state acts as an honest broker. Addressing critiques that not all citizens participate equally, Elite Pluralism (David Marsh, Raymond Aron) notes that while elites lead organizations, they are fragmented, competitive, and accountable representatives of diverse social constituencies. [[link:Connect this to Paper 2 Unit 12, where multi-caste coalitions, farmer unions, and regional parties bargain continuously within Indian democracy.]]`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: '1. Face 1 (Open)', text: 'Overt decision-making in Parliament or cabinet votes (Weber/Dahl)' },
      { label: '2. Face 2 (Agenda)', text: 'Gatekeeping and keeping inconvenient issues off the table (Bachrach & Baratz)' },
      { label: '3. Face 3 (Desires)', text: 'Ideological conditioning so subordinates accept hierarchy (Lukes/Gramsci)' },
      { label: '4. Capillary Power', text: 'Everyday discourses, surveillance, and bio-politics shaping norms (Foucault)' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Marxist & Elite Models of Power',
    rightTitle: 'Functionalist & Pluralist Models of Power',
    rows: [
      {
        aspect: 'Distribution of Power',
        left: 'Concentrated in the bourgeoisie (Marx) or a tiny ruling minority (Pareto/Mills)',
        right: 'Shared across society (Parsons) or dispersed among competing interest groups (Dahl)',
      },
      {
        aspect: 'Nature of Power Game',
        left: 'Zero-sum / Constant-sum: elites rule at the direct expense of the masses',
        right: 'Variable-sum (Parsons) or competitive bargaining equilibrium (Pluralism)',
      },
      {
        aspect: 'Role of Democratic State',
        left: 'Executive committee of capitalists or façade masking inevitable elite rule',
        right: 'Trusted bank for collective goals or neutral broker weaving compromises',
      },
      {
        aspect: 'View of Welfare Policies',
        left: 'Petty candy concessions (Westergaard) or cunning Fox manipulation to prevent revolt',
        right: 'Genuine response to voter deposits and plural pressure-group advocacy',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Power vs Authority (Macht vs Herrschaft)',
    meaning:
      'Power is the probability of enforcing one’s will despite resistance, whereas Authority is legitimate power that subordinates obey as a rightful moral duty.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'Variable-Sum Concept of Power',
    meaning:
      'Talcott Parsons’s functionalist view that power is a collective societal resource that expands or contracts depending on how effectively a society achieves shared goals.',
  },
  {
    kind: 'keyTerm',
    term: 'Repressive & Ideological State Apparatuses (RSA & ISA)',
    meaning:
      'Louis Althusser’s distinction between state control via physical coercion (police, army) and control via cultural conditioning (schools, media, religion).',
  },
  {
    kind: 'keyTerm',
    term: 'Three Dimensions of Power',
    meaning:
      'Steven Lukes’s framework expanding power from (1) open decision-making to (2) secretive agenda-setting and (3) ideological shaping of people’s desires.',
  },
  {
    kind: 'keyTerm',
    term: 'Polyarchy & Elite Pluralism',
    meaning:
      'Robert Dahl’s model of dispersed rule by multiple competing interest groups, refined by Elite Pluralists who view diverse elites as honest representatives of distinct social groups.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'max-weber',
    quote: 'Power is the chance of a man or a number of men to realize their own will in a social action even against resistance.',
    context: 'Economy and Society — foundational constant-sum definition of social power.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Which Model Best Fits Advanced Industrial & Indian Societies?',
    body: 'When UPSC asks which power model is most applicable today (PYQ 2019), never endorse crude Marxism alone (too cynical) or pure Functionalism alone (too rose-tinted). Argue that Elite Pluralism / Polyarchy (Dahl, David Marsh) best explains how diverse groups bargain in democracies, while qualifying it with C.W. Mills and Poulantzas to show how corporate and state elites still enjoy disproportionate structural clout.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Don’t Confuse Elite Pluralism with Classical Elite Theory!',
    body: 'Despite the word "Elite" in its name, Elite Pluralism is a branch of Pluralism, not Classical Elite Theory. Classical Elite theorists (Pareto, Mosca) call democracy a sham where a self-serving minority exploits sheep-like masses. Elite Pluralists acknowledge that a few leaders run organizations, but insist these elites come from diverse backgrounds and sincerely represent their constituencies (e.g., Dalit, farmer, or business lobbies).',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Quick Memory Hook: 4 Lenses on Power',
    body: 'Remember MW-PM-EP-LF: Marx & Weber = Zero-Sum conflict; Parsons = Money-in-Bank Variable-Sum; Elite vs Pluralism = Monopoly vs Polyarchy; Lukes & Foucault = 3 Faces & Capillary discourse constructing social hierarchy.',
  },
  {
    kind: 'answerBox',
    intro:
      'Sociological theories of power move beyond formal constitutional law to examine where power originates, how it wins legitimacy, and whose interests it serves.',
    points: [
      'Weberian foundation: Differentiates coercive power from legitimate authority (Traditional, Charismatic, Legal-Rational) within a constant-sum frame.',
      'Functionalist Variable-Sum (Parsons): Treats power as a collective societal deposit that grows when leaders deliver shared developmental goals.',
      'Marxist Zero-Sum (Marx, Althusser, Poulantzas): Traces political power to economic ownership, maintained via RSA, ISA, welfare concessions, and relative state autonomy.',
      'Elite vs Pluralist debate: Pareto, Mosca, Michels, and Mills highlight inevitable oligarchic or institutional elite rule, whereas Dahl’s Pluralism highlights dispersed bargaining across pressure groups.',
      'Radical & Postmodern depth: Steven Lukes’s three faces of power and Foucault’s capillary knowledge-power reveal how invisible ideological norms sustain caste, class, and gender hierarchies.',
    ],
    conclusion:
      'In contemporary democracies like India, power operates as a dynamic interplay between pluralist electoral bargaining and deep structural inequalities.',
  },
]

export const topic1En: TopicLangContent = {
  summary:
    'Sociological theories of power examine whether power is a fixed zero-sum struggle (Weber, Marx, Elite theorists), an expanding collective resource (Parsons), a pluralist bargaining market (Dahl), or an invisible ideological and discursive grid maintaining hierarchy (Lukes, Foucault).',
  mindMap,
  sections,
}