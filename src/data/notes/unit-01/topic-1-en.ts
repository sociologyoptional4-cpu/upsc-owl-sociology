import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 1.1 · Modernity & Emergence of Sociology',
  center: 'Birth of Sociology',
  subtitle: 'Three Revolutions -> Modern Crisis -> New Science',
  branches: [
    {
      title: 'Intellectual Forces',
      color: 'lavender',
      thinkers: ['Montesquieu', 'Rousseau', 'Auguste Comte', 'Irving Zeitlin'],
      points: [
        'Renaissance humanism and printing press broke Church monopoly',
        'Scientific Revolution proved nature follows testable empirical laws',
        'Enlightenment championed reason, progress, and individual rights',
        'Conservative reaction (Bonald, Maistre) stressed order and tradition',
      ],
    },
    {
      title: 'Material & Political Shocks',
      color: 'yellow',
      thinkers: ['Karl Marx', 'Émile Durkheim', 'Max Weber', 'F. Tönnies'],
      points: [
        'French Revolution (1789) ended divine monarchy and sparked order crisis',
        'Industrial Revolution moved work from households into factory mills',
        'Urban slums, wage labour, and class conflict replaced village ties',
        'Extended family shrank toward nuclear units; divorce and anomie rose',
      ],
    },
    {
      title: 'Founding Thinkers & Lenses',
      color: 'mint',
      thinkers: ['Auguste Comte', 'Karl Marx', 'Émile Durkheim', 'Max Weber'],
      points: [
        'Comte coined Sociology (1839) and framed Law of Three Stages',
        'Marx: modernity means capitalism, alienation, and class struggle',
        'Durkheim: mechanical to organic solidarity, haunted by anomie',
        'Weber: rationalisation, bureaucracy, and iron cage of modernity',
      ],
    },
    {
      title: 'Beyond Europe: USA & India',
      color: 'pink',
      thinkers: ['Robert Park', 'G.S. Ghurye', 'M.N. Srinivas', 'Yogendra Singh'],
      points: [
        'USA (Chicago School): urban slums, crime, and pragmatic reformism',
        'Eurocentrism critique: colonial modernity and Ibn Khaldun ignored',
        'India: Bombay and Lucknow schools blended texts with fieldwork',
        'Modernity today: Swiggy-Zomato gig apps and digital caste networks',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u1-02-emergence.webp',
    alt: 'Timeline showing Enlightenment, French Revolution, and Industrial Revolution leading to Sociology and Auguste Comte portrait',
    caption:
      'Sociology was not one thinker’s sudden invention — it emerged as an urgent intellectual toolkit when three European revolutions shattered the old social order.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 1 Visual 02',
  },
  {
    kind: 'md',
    body: `## What Is Modernity, and Why Did Society Suddenly Need Sociology?

Imagine living in a pre-modern village four hundred years ago. From the day you were born, custom, religion, and feudal or caste rank decided your occupation, your marriage partner, and your place in the village — almost nobody questioned why a peasant’s child remained a peasant or why monarchs claimed divine right. Between the 16th and 19th centuries, that predictable world cracked open, giving rise to ==Modernity== — a new social order organised around ==reason, science, individual rights, wage contracts, capitalism, nation-states, and anonymous cities==.

When millions migrated from familiar villages into crowded mill towns and citizens toppled sacred kingships, theology and abstract philosophy could no longer explain why strikes, poverty, or suicides surged overnight. Society itself became a puzzle that required systematic study. [[trap:Crediting only the European Enlightenment tells half the story — colonial extraction and non-Western thinkers like Ibn Khaldun, who theorised social cohesion or Asabiyyah in 1377, were also vital roots of sociological thought.]] Yet as an academic discipline, sociology crystallised out of three overlapping European upheavals.

## The Three Revolutions That Forged Sociology

### 1. The Intellectual Revolution and the Conservative Reaction

Before people could study society scientifically, they had to stop viewing social inequality as a frozen gift from God. Renaissance humanism and the printing press encouraged independent inquiry, while the Scientific Revolution proved that physical nature follows observable laws rather than superstition. Thinkers of the Enlightenment then asked a daring question: if Newton could uncover universal laws of motion, could scholars uncover laws governing human societies too?

Yet sociology did not grow from progressive optimism alone — paradoxically, its deepest insights into social glue came from critics who feared revolution. As [[thinker:Irving Zeitlin]] explained, conservative thinkers worried that extreme individualism and attacks on the Church would dissolve society into selfish, rootless individuals, so in defending old institutions they spotlighted how norms and cohesion actually work.

- **Enlightenment Pioneers:** [[thinker:Montesquieu]], [[thinker:Voltaire]], and [[thinker:Rousseau]] placed ==reason, empiricism, and human-made social contracts== at the centre, arguing that unjust laws can be studied and reformed.
- **The Conservative Reaction:** [[thinker:Louis de Bonald]] and [[thinker:Joseph de Maistre]] opposed revolutionary chaos and defended hierarchy, family, religion, and community — concepts later secularised into core sociology.
- **Nisbet’s Five Unit-Ideas:** From this tension between progress and order emerged Robert Nisbet’s five foundational ideas of sociology: community, authority, status, the sacred, and alienation.

### 2. The Political Shock: The French Revolution (1789)

For centuries, the monarchy and the Church acted like twin pillars holding European society together through sacred obedience. When the French Revolution overthrew divine kingship and proclaimed liberty, equality, and fraternity, it gave people modern citizenship — yet also triggered political terror, ideological civil war, and deep anxiety. Once fear of king and priest vanished, a brand-new question haunted Europe: how can millions of free strangers maintain peaceful social order?

- **Crisis of Legitimate Order:** Collapsing feudal estates turned obedient subjects into questioning citizens, forcing thinkers to search for secular sources of stability.
- **Comte’s Project:** [[thinker:Auguste Comte]] explicitly designed sociology to reconcile ==Order and Progress==, believing scientific consensus could replace lost religious certainty.

### 3. The Economic Shock: Industrial Revolution and Changing Family Life

While political revolution overturned governments, the Industrial Revolution transformed how ordinary families earned bread and spent every waking hour. Steam engines and factories dragged peasants out of self-sufficient villages into smoke-filled cities where survival depended on hourly wage labour. [[eg:Just as young migrants from Bihar or Uttar Pradesh today move to Gurgaon factories or Bengaluru gig hubs, gaining cash autonomy while losing village safety nets]], 19th-century European workers faced slums, child labour, and intense class conflict.

Notice especially how industrialisation rebuilt the Western European family step by step. Before factories, parents, children, and kin worked side by side on farms or craft looms, so the household functioned as workplace, school, and welfare shield combined. When factories pulled production outside the home, three connected shifts reshaped family life:

- **Step 1 — Production to Consumption Unit:** Home stopped being an economic workshop and became a private consumption and emotional care unit; [[thinker:Friedrich Engels]] argued that confining men to paid factory wages and women to unpaid housework deepened patriarchal dependence.
- **Step 2 — Extended Kin to Nuclear Mobility:** Cramped urban tenements and frequent job migration weakened extended kin networks, leading [[thinker:Talcott Parsons]] to call the ==isolated nuclear family== functionally fitted to industrial mobility.
- **Step 3 — Authority Shift and Historical Nuance:** Because youth earned independent wages instead of waiting to inherit family land, parental control over marriage weakened and companionate choice grew alongside rising divorce; however, historian [[thinker:Peter Laslett]] showed nuclear households already existed in pre-industrial Europe, so factories amplified rather than invented them. [[link:Compare this in Paper 2 Unit 9 with India, where I.P. Desai and A.M. Shah showed urbanisation reshaped joint families into functional jointness rather than erasing them.]]

## Classical Thinkers: One Modernity, Four Diagnoses

Every founding sociologist watched the same industrial crisis unfold, yet each diagnosed a different root engine and danger:

- **[[thinker:Auguste Comte]]:** Watching post-revolutionary France swing between chaos and tyranny, Comte argued social peace required replacing theological faith and abstract slogans with empirical observation. [[eg:Much like NITI Aayog dashboards using nutrition data rather than folklore to guide welfare policy, Comte wanted Positive science to steer social reform.]]
- **[[thinker:Karl Marx]]:** Watching factory workers generate vast profits while living in poverty, Marx argued modernity is driven by capitalist property relations that alienate workers from their product, creativity, and fellow humans. [[eg:When a garment worker in Tiruppur or Surat stitches luxury shirts all week yet cannot afford one or control work pace, Marxian alienation becomes concrete.]]
- **[[thinker:Émile Durkheim]]:** Durkheim asked why suicide and distress spiked even as modern societies grew wealthier: when rapid economic change breaks old moral rules faster than new norms form, individuals suffer ==anomie== or normlessness. [[eg:Student migrants in Kota or lonely urban newcomers facing intense competition without community support reflect weakened social integration, not merely private failure.]]
- **[[thinker:Max Weber]]:** Weber worried less about property ownership and more about modernity’s obsession with efficiency, rules, and calculation, warning that bureaucracy locks human freedom inside an impersonal ==iron cage==. [[eg:Today, Swiggy and Zomato riders face algorithmic timers, automated penalties, and wage precarity — blending Weber’s digital iron cage with Marx’s alienation.]]

| Thinker | Central Engine of Modernity | Primary Social Danger | Core Sociological Concept |
| --- | --- | --- | --- |
| Auguste Comte | Scientific and moral evolution | Intellectual and moral anarchy | Law of Three Stages |
| Karl Marx | Industrial capitalism | Exploitation and dehumanisation | Alienation and Class Struggle |
| Émile Durkheim | Rising division of labour | Normlessness during rapid change | Anomie and Organic Solidarity |
| Max Weber | Bureaucratic calculation | Loss of meaning and freedom | Rationalisation and Iron Cage |

## From European Grand Theory to American Reformism and India

Why did early sociology look like sweeping historical philosophy in Europe, yet resemble gritty city detective work in the United States? Europe was wrestling with the collapse of centuries-old feudalism, monarchy, and class empires, pushing Marx, Durkheim, and Weber to build macro-theories of historical change. By contrast, the United States had no feudal aristocracy; between 1880 and 1920 its cities exploded with immigrants, slums, juvenile gangs, and racial tension, turning Chicago into a live urban laboratory for practical problem-solving.

- **USA and the Chicago School:** [[thinker:Albion Small]], [[thinker:Robert Park]], [[thinker:Ernest Burgess]], and reformer [[thinker:Jane Addams]] (Hull House) pioneered city surveys, urban ecology, and empirical fieldwork driven by ==social reformism==.
- **Indian Sociological Synthesis:** Indian pioneers including [[thinker:G.S. Ghurye]], [[thinker:Radhakamal Mukerjee]], [[thinker:M.N. Srinivas]], and [[thinker:Yogendra Singh]] adapted sociological tools to colonial modernity, blending classical texts with fieldwork to trace how caste, village life, and tradition transformed under modern pressures.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1377',
        title: 'Ibn Khaldun — Muqaddimah',
        text: 'Introduced Ilm al-umran (science of society) and Asabiyyah (social cohesion), proving proto-sociology predated modern Europe.',
      },
      {
        year: '1400–1600',
        title: 'Renaissance & Humanism',
        text: 'Printing press and secular inquiry weakened Church monopoly and placed human experience at the centre of learning.',
      },
      {
        year: '1543–1687',
        title: 'Scientific Revolution',
        text: 'From Copernicus to Newton, empirical observation and universal natural laws replaced supernatural explanations.',
      },
      {
        year: '1715–1789',
        title: 'European Enlightenment',
        text: 'Montesquieu, Voltaire, and Rousseau argued society obeys intelligible laws and can be improved through reason.',
      },
      {
        year: '1789',
        title: 'French Revolution',
        text: 'Abolished divine monarchy and feudal estates, sparking an urgent search for secular social order.',
      },
      {
        year: '1760–1840',
        title: 'Industrial Revolution',
        text: 'Factories, urban migration, slums, and nuclearisation of family life created unprecedented social crises.',
      },
      {
        year: '1838–1839',
        title: 'Comte Coins "Sociology"',
        text: 'Renamed "Social Physics" to "Sociology" in Positive Philosophy to anchor social reform in scientific method.',
      },
      {
        year: '1892–1920s',
        title: 'USA Chicago School',
        text: 'First full US department shifted focus toward urban fieldwork, immigration, crime, and pragmatic social reform.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Enlightenment', text: 'Reason and observation proved social rules are human-made and reformable' },
      { label: 'French Rev (1789)', text: 'Monarchy fell, creating a crisis of authority and peaceful social order' },
      { label: 'Industrial Rev', text: 'Factories, slums, and wage labour reshaped class and family life' },
      { label: 'Conservative Push', text: 'Bonald and Maistre spotlighted norms, religion, and community cohesion' },
      { label: 'Sociology Born', text: 'Comte, Marx, Durkheim, and Weber forged tools to study modernity' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Pre-Modern / Traditional Society',
    rightTitle: 'Modern Industrial Society',
    rows: [
      {
        aspect: 'Authority & Knowledge',
        left: 'Sacred tradition, Church dogma, divine kingship',
        right: 'Reason, empirical science, secular constitutional law',
      },
      {
        aspect: 'Social Status',
        left: 'Ascribed at birth via estate, caste, or lineage',
        right: 'Achieved through education, market skill, and merit',
      },
      {
        aspect: 'Economy & Work',
        left: 'Agrarian subsistence, family craft, guild ties',
        right: 'Factory wage labour, complex division of labour',
      },
      {
        aspect: 'Solidarity (Durkheim)',
        left: 'Mechanical solidarity rooted in likeness and tight norms',
        right: 'Organic solidarity rooted in interdependence and diversity',
      },
      {
        aspect: 'Family & Residence',
        left: 'Rural community (Gemeinschaft) and extended kin',
        right: 'Anonymous cities (Gesellschaft) and nuclear households',
      },
      {
        aspect: 'Core Vulnerability',
        left: 'Rigid hierarchy, superstition, and slow change',
        right: 'Anomie, capitalist alienation, and bureaucratic iron cage',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Modernity',
    meaning:
      'A post-18th-century social order shaped by reason, science, industrial capitalism, secular nation-states, and individual rights replacing birth-based custom.',
  },
  {
    kind: 'keyTerm',
    term: 'Law of Three Stages',
    meaning:
      'Auguste Comte’s law stating human thought evolves from Theological (supernatural) to Metaphysical (abstract forces) to Positive (scientific observation) stages.',
  },
  {
    kind: 'keyTerm',
    term: 'Anomie',
    meaning:
      'A condition of normlessness during rapid economic or social change when older moral rules weaken before new shared guidelines take hold.',
    thinkerSlug: 'emile-durkheim',
  },
  {
    kind: 'keyTerm',
    term: 'Rationalisation & Iron Cage',
    meaning:
      'The spread of efficiency, formal rules, and bureaucracy over traditional values — promising freedom yet trapping individuals in an impersonal system.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'The philosophers have only interpreted the world, in various ways; the point is to change it.',
    context: 'Bridging Enlightenment philosophy with industrial class struggle and concrete social transformation.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'yogendra-singh',
    quote: 'Indian tradition is not frozen; it adapts to modernisation through selective synthesis of old and new institutions.',
    context: 'Connecting Paper 1 European modernity theory with India’s adaptive institutional change.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2024–2013 PYQ Pattern: Never Credit Enlightenment Alone!',
    body: 'Every few years UPSC asks whether Sociology is solely a product of the Enlightenment or Renaissance. In a 20-mark answer, always show three pillars together: (1) Enlightenment reason and progress, (2) Irving Zeitlin’s Conservative Reaction defending community and moral order, and (3) material shocks of the French and Industrial Revolutions. Closing with non-Western critiques such as Ibn Khaldun and colonial modernity earns top examiner marks.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Comte Created Everything Alone',
    body: 'Many candidates write that Auguste Comte single-handedly invented Sociology. Be precise: Saint-Simon laid key foundations of social physiology, Comte coined the word "sociology" (1839) and outlined Positivism, while Karl Marx, Émile Durkheim, and Max Weber built its rigorous theoretical and empirical pillars.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Robert Nisbet’s 5 Unit-Ideas (Revision Mnemonic: CASAS)',
    body: 'Out of the clash between Enlightenment progress and Conservative fear came Sociology’s 5 foundational ideas: Community (Tönnies), Authority (Weber), Status (Marx and Weber), the Sacred (Durkheim), and Alienation (Marx). Using this CASAS frame sharpens any Emergence answer.',
  },
  {
    kind: 'answerBox',
    intro:
      'Sociology emerged from Europe’s 18th–19th century Great Transformation, when collapsing feudalism triggered overlapping intellectual, political, and economic crises.',
    points: [
      'Intellectual base: Renaissance humanism and the Scientific Revolution nurtured empirical inquiry, while the Enlightenment placed reason and progress at the centre.',
      'Conservative reaction (Zeitlin): Bonald and Maistre feared revolutionary chaos and highlighted tradition, community, and moral order.',
      'Political shock (French Rev 1789): Ending divine monarchy expanded citizenship while sparking an order crisis that motivated Comte’s Positivism.',
      'Economic shock (Industrial Rev): Factory towns, slums, and nuclearising families prompted Marx (alienation), Durkheim (anomie), and Weber (rationalisation).',
      'Critical nuance: Moving beyond Eurocentrism reveals colonial modernity and earlier traditions like Ibn Khaldun’s Asabiyyah as vital parts of sociological history.',
    ],
    conclusion:
      'Even today, amid digital capitalism and algorithmic gig work, Sociology remains indispensable for decoding the shifting tensions of late modernity.',
  },
]

export const topic1En: TopicLangContent = {
  summary:
    'Sociology emerged from the clash of three European revolutions — the Enlightenment, the French Revolution, and the Industrial Revolution — before evolving through American urban reformism and postcolonial Indian sociology.',
  mindMap,
  sections,
}
