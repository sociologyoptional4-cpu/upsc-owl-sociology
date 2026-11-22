import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 6.1 · Social Organisation of Work',
  center: 'Organisation of Work',
  subtitle: 'Slave & Feudal Modes -> Factory & Taylorism -> Post-Industrial Shift',
  branches: [
    {
      title: 'Meaning & Historical Modes',
      color: 'lavender',
      thinkers: ['Karl Marx', 'M.I. Finley', 'Marc Bloch', 'Max Weber'],
      points: [
        'Work: physical/mental effort producing needs; feminists count unpaid care',
        'Slave society: workers as owned chattel via war capture; physical coercion',
        'Feudal society: serfs bound to land with plot access; religious legitimacy',
        'Capitalist society: free wage labour, factory separation, and surplus value',
      ],
    },
    {
      title: 'Industrial Capitalism & Classics',
      color: 'yellow',
      thinkers: ['Karl Marx', 'Émile Durkheim', 'Max Weber', 'Harry Braverman'],
      points: [
        'Marx: four-fold alienation, limits of working day, and Braverman deskilling',
        'Durkheim: mechanical to organic solidarity; risk of anomic division of labour',
        'Weber: Protestant work ethic ("work is worship") and bureaucratic iron cage',
        'Family shifts from joint rural production workshop to urban consumption unit',
      ],
    },
    {
      title: 'Shop-Floor Management',
      color: 'mint',
      thinkers: ['F.W. Taylor', 'Henry Ford', 'Elton Mayo', 'Peter Drucker'],
      points: [
        'Taylorism: time-and-motion study, "one best way", and mental revolution',
        'Fordism: moving assembly line, mass standardized output, high worker fatigue',
        'Elton Mayo (Hawthorne): social belonging, friendly supervision, peer norms',
        'Toyotism & Post-Fordism: flexible specialization, just-in-time, quality circles',
      ],
    },
    {
      title: 'Post-Industrial & Contemporary',
      color: 'pink',
      thinkers: ['Daniel Bell', 'Robert Blauner', 'C. Wright Mills', 'Goldthorpe'],
      points: [
        'Bell & Touraine: manufacturing to service/knowledge economy (white/golden collar)',
        'Blauner inverted-U curve: printing low -> auto peak -> chemical automation low',
        'C.W. Mills: Personality Market & Arlie Hochschild emotional labour in services',
        'Affluent Worker (Goldthorpe), feminization of work, and AI/automation debate',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u06-01-work-organization.webp',
    alt: 'P1 Unit 6 infographic: Evolution of Work Organization — Historical Shift in Social Organization of Work',
    caption: 'Historical Shift in Social Organization of Work (Evolution of Work Organization).',
    credit: 'UPSC OWL Studio · Paper 1 Unit 6 Visual 01',
  },
  {
    kind: 'md',
    body: `## What Is Work, and Why Does Its Organisation Matter to Sociology?

In everyday speech, people often equate work strictly with a salaried job performed outside the home. Sociologically, however, ==Work== refers to any task involving the expenditure of physical or mental effort aimed at producing goods and services that cater to human needs. Whether an action counts as work depends on its social context: singing in the shower is leisure, whereas a playback singer recording in a studio performs work; a father teaching his daughter at home performs care, whereas teaching a classroom for a salary is formal employment. [[trap:Defining work only as paid market employment renders invisible the massive unpaid domestic and care labour performed daily by women — a core critique raised by feminist scholars like Ann Oakley and Sylvia Walby.]]

Why do human beings work even when basic survival is assured? Beyond earning daily bread, work anchors an individual's ==primary social identity==, structures the 24-hour routine, provides a key arena for friendships and peer ties, and protects people from the social stigma of idleness. For [[thinker:Karl Marx]], creative labour represents humanity's ==species-essence== (*Gattungswesen*), while [[thinker:Max Weber]] showed how the Protestant Reformation elevated secular work into a moral calling ("work is worship"). [[eg:Even billionaires like Mukesh Ambani or top political leaders publicly project 18-hour workdays to legitimise their privilege through the modern ethic of relentless industry, echoing Mahatma Gandhi's warning against "wealth without work" in Young India (1925).]]

## Historical Modes: Slave, Feudal, and Industrial-Capitalist Societies

Across history, societies have organised who works, who owns the tools, and how surplus is extracted in fundamentally different ways. Comparing **Slave**, **Feudal**, and **Industrial-Capitalist** modes reveals how work moved from open physical ownership to customary land bondage and finally to market contracts.

### 1. Social Organisation of Work in Slave Society

In ancient Greco-Roman estates and later transatlantic plantations, production rested on ==chattel slavery==, where the worker was legally owned as private property by a master, much like livestock or tools. Slaves were predominantly acquired externally through tribal warfare and conquest as prisoners of war, and masters frequently restricted slave family life and biological reproduction to prevent united rebellions.

Because slaves received only bare survival rations regardless of how hard they laboured, they had **zero intrinsic incentive** to innovate or raise output. Work organisation relied on constant whip-driven physical coercion and close surveillance, which made slave production rigid, prone to sabotage, and structurally unstable whenever military conquests slowed down. [[thinker:M.I. Finley]] noted that because manual labour was stigmatised as the badge of a slave, ancient elites disdained practical technology and focused on politics and philosophy.

### 2. Social Organisation of Work in Feudal Society

When the Roman slave supply collapsed, European and Asian agrarian orders reorganised around ==feudalism== (and in India, caste-based ==Jajmani relations==), dividing society into landowning lords (*haves*) and tied peasants or serfs (*have-nots*). Unlike a slave, a **serf was not chattel property** and could not be bought or sold apart from the land; serfs enjoyed bodily autonomy, lived in stable families, owned simple ploughs, and reproduced the next generation of labour biologically.

Economically, work took place on rural manors where the family functioned as a cohesive **unit of production**, complemented by urban craft guilds (*shrenis*). Because serfs worked under sharecropping or customary corvée obligations — keeping a portion of the harvest from their subsistence plots — they had a built-in incentive to produce more than slaves. Instead of relying solely on naked armed force, feudalism stabilised compliance through **ideological control** mediated by organised religion, the Church, or caste dharma. [[eg:In traditional Indian villages, the Jajmani system bound service castes (Kamins) to dominant landowners (Jajmans) through hereditary grain shares and ritual obligations rather than market wages.]]

### 3. Social Organisation of Work in Industrial-Capitalist Society

The Industrial Revolution shattered agrarian custom and shifted production from family farms to urban factories powered by complex machinery. Under ==Industrial Capitalism==, division of labour shifted from **ascriptive criteria** (birth, estate, caste) to **achievement criteria** (skills, credentials, market contracts), and the household turned from a production unit into a private **unit of consumption**.

| Dimension | Slave Society | Feudal Society | Industrial-Capitalist Society |
| --- | --- | --- | --- |
| Primary Class Split | Masters vs Chattel Slaves | Landowning Lords vs Bound Serfs | Bourgeoisie vs Wage Proletariat |
| Legal Status of Worker | Owned property; zero bodily autonomy | Bound to land; cannot be sold as chattel | Formally free seller of labour-power |
| Labour Replenishment | External warfare and slave capture | Natural biological reproduction in families | Free labour market and migration |
| Incentive & Control | Zero incentive; direct physical violence | Partial crop share; religious ideology | Cash wages; economic compulsion & rules |

## Classical & Managerial Theories of Industrial Work

Founding sociologists and management thinkers diagnosed the factory floor through contrasting lenses:

- **[[thinker:Karl Marx]] and the Limits of the Working Day:** In *Das Kapital*, Marx showed that while the worker is legally free, they are forced to sell labour-power to survive. Capitalists extract ==Absolute Surplus Value== by stretching the working day to physical limits (16–18 hours in 19th-century Britain) until workers' collective struggles win factory laws (the 8-hour day), pushing capital toward ==Relative Surplus Value== via machinery and speed-ups. Extreme division of labour causes four-fold **Alienation** — from product, act of production, species-essence, and fellow workers — later extended by [[thinker:Harry Braverman]] as systematic **degradation and deskilling of work**.
- **[[thinker:Émile Durkheim]] and Organic Solidarity:** In *The Division of Labour in Society*, Durkheim argued that occupational specialisation replaces conformity-based *mechanical solidarity* with interdependence-based ==organic solidarity==, though rapid unregulated change risks **anomic** or **forced** division of labour.
- **[[thinker:Max Weber]] and Bureaucratic Rationalisation:** Weber traced how the Protestant work ethic birthed disciplined capitalism, which later hardened into an impersonal bureaucratic ==iron cage== governed by written rules and hierarchy.
- **[[thinker:F.W. Taylor]] (Scientific Management / Taylorism) & [[thinker:Henry Ford]] (Fordism):** Taylor argued management is an exact science (echoing Gulick and Urwick's **POSDCORB**) built on four principles: (1) scientific time-and-motion breakdown of tasks to find the **"One Best Way"**, (2) scientific worker selection, (3) scientific training, and (4) management-worker cooperation to spark a profit-expanding **Mental Revolution**. Henry Ford applied Taylorism to the moving automobile assembly line (**Fordism**). While productivity soared, both workers (dehumanised into machine cogs) and traditional managers (stripped of craft discretion) resisted its monotony. [[eg:Modern warehouse pickers at Amazon or Blinkit dark stores guided second-by-second by handheld scanners experience "Digital Taylorism".]]
- **[[thinker:Elton Mayo]] (Human Relations Approach):** Testing lighting and rest breaks at Western Electric's Hawthorne plant (1927–32), Mayo discovered the ==Hawthorne Effect== — productivity rose even when lights were dimmed because workers felt valued and observed. His **Bank Wiring Experiment** proved that an **informal organisation** exists inside every formal factory: peer groups set informal output norms and socially sanction "rate-busters" or "chisellers", laying the foundation for modern participatory HR management.

## Post-Industrial Shift, Technology, and Contemporary Trends

Since the mid-20th century, economies have shifted from blue-collar manufacturing (Primary/Secondary sectors) toward white- and golden-collar **Tertiary (services), Quaternary (knowledge/R&D), and Quinary (top decision-making)** sectors — conceptualized as ==Post-Industrial Society== by [[thinker:Daniel Bell]] and [[thinker:Alain Touraine]], and as the **Knowledge Economy** by [[thinker:Peter Drucker]].

Does advancing technology always deepen worker misery? Testing Marx's linear view, **[[thinker:Robert Blauner]]** (*Alienation and Freedom*, 1964) compared four industries and discovered an **inverted-U alienation curve**: alienation is low in craft *printing*, rises in mechanised *textiles*, peaks in assembly-line *automobiles*, and drops sharply in continuous-process *chemical plants* where automated pipelines restore worker responsibility and team autonomy. Moreover, 20th-century democracy, trade unions, and **Welfare Capitalism** produced what [[thinker:John Goldthorpe]] and [[thinker:David Lockwood]] called the ==Affluent Worker==, who approaches work instrumentally for high pay and family consumption.

Yet service and digital capitalism generate new anxieties. [[thinker:C. Wright Mills]] warned of a ==Personality Market== where white-collar staff fake warmth to close sales (expanded by [[thinker:Arlie Hochschild]] as **Emotional Labour** among flight attendants and call-centre agents), while [[thinker:Herbert Marcuse]] argued consumerist mass media colonises even leisure time. Globally, economic globalisation has sparked ==Feminization of Work== ([[thinker:Guy Standing]]) — drawing millions of women into export garment and electronics hubs while trapping many in low-paid, flexible precarity — alongside 21st-century shifts like AI automation, **The Great Resignation**, and **Quiet Quitting**. [[link:Connect this in Paper 2 Unit 11 with how India's service-led GDP growth coexists with massive informal manufacturing and agricultural employment.]]`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: 'Ancient Era',
        title: 'Slave Mode of Production',
        text: 'Greco-Roman estates relied on war-captured chattel slaves; physical coercion and zero worker incentive.',
      },
      {
        year: '9th–15th Century',
        title: 'Feudalism & Jajmani Guilds',
        text: 'Serfs bound to manorial land with subsistence plots; ideological control via Church or caste custom.',
      },
      {
        year: '1760–1867',
        title: 'Factory Capitalism & Marx’s Capital',
        text: 'Wage labour separated home from workplace; struggles over limits of the working day and alienation.',
      },
      {
        year: '1911–1913',
        title: 'Taylorism & Fordist Assembly Line',
        text: 'F.W. Taylor’s Scientific Management ("One Best Way") and Henry Ford’s mass assembly line boosted output.',
      },
      {
        year: '1927–1932',
        title: 'Elton Mayo’s Hawthorne Studies',
        text: 'Demonstrated that informal peer norms and supportive supervision drive productivity more than lighting or pay alone.',
      },
      {
        year: '1964–1973',
        title: 'Blauner’s Curve & Bell’s Post-Industrialism',
        text: 'Blauner proved automation can reduce alienation (inverted-U); Daniel Bell theorised the rise of service/knowledge work.',
      },
      {
        year: '2020s',
        title: 'AI Automation, Gig Work & Quiet Quitting',
        text: 'Algorithmic management, remote work, feminization of global labour, and post-pandemic work-life boundary struggles.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Craft & Feudal Work', text: 'Low division of labour; household is the production unit; low alienation' },
      { label: 'Taylorist / Fordist Factory', text: 'Stopwatch fragmentation & assembly line; peak Marxian alienation' },
      { label: 'Mayo & Welfare Capitalism', text: 'Informal peer groups, unions, 8-hour day & affluent worker instrumentalism' },
      { label: 'Automated & Knowledge Work', text: 'Blauner’s chemical automation + Bell’s service economy & emotional labour' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Taylorism / Scientific Management (F.W. Taylor)',
    rightTitle: 'Human Relations Approach (Elton Mayo)',
    rows: [
      {
        aspect: 'View of the Worker',
        left: 'Isolated "economic man" motivated purely by individual monetary incentives',
        right: 'Social being motivated by peer belonging, recognition, and group norms',
      },
      {
        aspect: 'Core Method',
        left: 'Time-and-motion stopwatch studies to enforce "One Best Way"',
        right: 'Hawthorne experiments & Bank Wiring observation of informal groups',
      },
      {
        aspect: 'Supervision Style',
        left: 'Strict top-down technical surveillance and task fragmentation',
        right: 'Friendly, collaborative two-way communication and participatory HR',
      },
      {
        aspect: 'Impact on Alienation',
        left: 'Deepens deskilling, monotony, and reduction of worker to machine cog',
        right: 'Softens workplace alienation by harnessing informal peer solidarity',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Species-Essence & Alienation',
    meaning:
      'Marx’s concept that creative purposeful work defines human nature, but capitalism estranges workers from their product, process, self, and peers.',
    thinkerSlug: 'karl-marx',
  },
  {
    kind: 'keyTerm',
    term: 'Taylorism (Scientific Management)',
    meaning:
      'F.W. Taylor’s system of breaking work into timed micro-motions to prescribe "One Best Way", later scaled on Henry Ford’s moving assembly line.',
  },
  {
    kind: 'keyTerm',
    term: 'Hawthorne Effect & Informal Group',
    meaning:
      'Elton Mayo’s finding that workers modify output when observed and follow informal peer norms that regulate daily production inside formal plants.',
  },
  {
    kind: 'keyTerm',
    term: 'Blauner’s Inverted-U Curve',
    meaning:
      'Robert Blauner’s empirical thesis that alienation rises from craft (printing) to assembly lines (autos) but falls under advanced process automation (chemicals).',
  },
  {
    kind: 'keyTerm',
    term: 'Personality Market & Emotional Labour',
    meaning:
      'C.W. Mills and Arlie Hochschild’s diagnosis of service work where employees must commercially package, fake, and manage their smiles and feelings.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'The worker becomes all the poorer the more wealth he produces.',
    context: '1844 Economic and Philosophic Manuscripts on how capitalist wage labour alienates human creativity.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'emile-durkheim',
    quote: 'The division of labour is not merely an economic rule, but the chief source of social solidarity.',
    context: 'Explaining how modern occupational specialisation binds diverse citizens through organic interdependence.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2024–2014 PYQ Pattern: Connect Classical Modes with Contemporary Shifts!',
    body: 'UPSC asks two kinds of questions in Topic 6.1: (1) historical comparisons between Slave, Feudal, and Capitalist work organisation (2014, 2015, 2018, 2024), and (2) modern dynamics like Taylorism (2023), degradation of work (2022), feminization (2022), globalization (2023), and automation (2024). Always pair Marx/Braverman with Blauner/Bell/Mills for a 360-degree answer.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Treating Serfs and Slaves as Identical',
    body: 'Never write that feudal serfs were owned by lords! Slaves were chattel property bought and sold on markets with zero bodily or reproductive autonomy. Serfs were legally bound to the land, owned basic farming tools, lived in biological families, and kept a share of their harvest.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Quick Memory Hook: Blauner’s 4 Industries (P-T-A-C)',
    body: 'Remember Robert Blauner’s alienation wave via P-T-A-C: Printing (craft = low alienation) -> Textiles (machine tending = medium) -> Automobiles (assembly line = peak alienation) -> Chemicals (continuous process automation = low alienation).',
  },
  {
    kind: 'answerBox',
    intro:
      'The social organisation of work traces how societies structure production, division of labour, authority, and surplus extraction across historical epochs.',
    points: [
      'Historical evolution: Work shifted from coerced chattel slavery (war capture, zero incentive) to land-bound feudal serfdom (family production unit, religious ideology) to contract-based industrial capitalism.',
      'Classical diagnoses: Marx highlighted surplus value, limits of the working day, and alienation; Durkheim traced organic solidarity vs anomie; Weber warned of the bureaucratic iron cage.',
      'Managerial shifts: F.W. Taylor’s Scientific Management and Fordism maximised output via task fragmentation, while Elton Mayo’s Hawthorne studies revealed informal peer networks.',
      'Technology and post-industrial turn: Daniel Bell noted the rise of white/golden-collar knowledge services, while Robert Blauner showed advanced automation can follow an inverted-U curve.',
      '21st-century realities: C.W. Mills’ personality market, Guy Standing’s feminization of work, and digital AI/platform automation continually reshape worker autonomy.',
    ],
    conclusion:
      'Balancing technological efficiency with human dignity and social security remains the central sociological challenge of modern economic life.',
  },
]

export const topic1En: TopicLangContent = {
  summary:
    'Traces how societies organise human work across Slave, Feudal, and Industrial-Capitalist modes, comparing Marx, Durkheim, Weber, Taylorism, Elton Mayo, Blauner’s automation curve, and post-industrial service/knowledge transformations.',
  mindMap,
  sections,
}