import type { NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2MindMapEn } from './topic-2-mindmaps'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u04-01-marx-durkheim-weber.webp',
    alt: 'Paper 1 Unit 4 poster summarizing Karl Marx historical materialism alienation, Emile Durkheim social facts suicide, and Max Weber verstehen bureaucracy',
    caption:
      'Émile Durkheim established sociology as an autonomous science by showing how collective social facts, division of labour, suicide rates, and religion bind or strain modern life.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 4 Visual 01',
  },
  {
    kind: 'md',
    body: `## Why Did Durkheim Argue Society Is More Than Individual Acts?

Think of ordinary table salt or plain drinking water. Sodium burns in air and chlorine is a toxic gas, yet bonded together they create safe, life-sustaining salt; similarly, hydrogen and oxygen are flammable gases, yet combined as H2O they quench fire. [[thinker:Émile Durkheim]] applied this exact emergent logic to human life: when millions of individuals interact over generations, they generate a reality ==sui generis==—of its own kind—that cannot be reduced to individual brains or personal moods.

Durkheim viewed humans as ==Homo Duplex==: half driven by boundless biological cravings, and half shaped by shared moral discipline. Watching post-revolutionary France swing between unrest and industrialisation, he set out to carve an autonomous academic home for sociology—separate from psychology and philosophy—by proving that society is an objective moral force bigger than the sum of our private choices.

## Social Facts and the Sociological Method

To claim sociology had a distinct subject matter, Durkheim defined ==Social Facts== as collective ways of acting, thinking, and feeling that exist outside any single person and exercise coercive pressure over behaviour. You did not invent the Hindi or English language, currency notes, or wedding rituals—they existed before your birth, will outlast your death, and punish or mock you if you defy them casually.

Every genuine social fact displays four hallmarks: **Externality** (located outside individual consciousness), **Independence** (immune to single-person whims), **Constraint** (enforced via laws, gossip, or boycott), and **Generality** (diffused across a collective). Durkheim grouped them into **Material social facts** (architecture, legal codes, transport networks) and **Non-material social facts** (norms, values, and the ==Collective Conscience==).

In *The Rules of Sociological Method* (1895), Durkheim laid down strict positivist guidelines—alongside noting an important paradox: even moderate **crime is normal and functional**, because public punishment reaffirms shared morality and dissenters like Socrates can spark legal reform, turning pathological only when rates spike wildly.

- **Observe as Things:** Treat norms and suicide rates with detached objectivity, discarding everyday common-sense preconceptions.
- **Classify via Comparative Method:** Since lab experiments on whole nations are impossible, compare similar groups systematically to isolate causes.
- **Avoid Teleology and Reductionism:** Never confuse a practice’s later usefulness with its historical origin, and always explain one social fact through preceding social facts—not genes, weather, or individual madness.
- **Observation Hurdles (2020 PYQ):** [[trap:Treating non-material beliefs "like things" hits real barriers!]] Values cannot be weighed on scales; questionnaires alter behaviour (reactivity); official police records mask stigma; and [[thinker:Max Weber]] insisted meanings cannot be grasped without subjective interpretation.

## Division of Labour: From Mechanical to Organic Solidarity

Before Durkheim’s 1893 doctoral thesis *The Division of Labour in Society*, economists like [[thinker:Adam Smith]] praised task specialisation solely for multiplying factory output. Durkheim flipped the lens: if modernity celebrates individual freedom and everyone chases private ambition, why do giant heterogeneous cities not collapse into chaos?

His answer lies in rising **Dynamic Density**: as population **volume**, spatial closeness (**material density**), and interaction frequency (**moral density**) expand—from a quiet Odisha hamlet to bustling Delhi or Mumbai—people specialise into thousands of niche roles instead of fighting over twenty village trades. Ironically, extreme specialisation deepens mutual dependence: a UPSC teacher relies on farmers, metro drivers, electricity grids, and internet engineers every morning.

| Feature | Mechanical Solidarity (Pre-Modern) | Organic Solidarity (Modern) |
| --- | --- | --- |
| Basis of Social Glue | Likeness, shared customs, common lifestyle | Specialised interdependence and complementarity |
| Collective Conscience | All-encompassing, sacred, suppresses individuality | Secular, abstract, celebrates personal autonomy |
| Dominant Legal Code | Repressive law punishing offence against group conscience | Restitutive civil/contract law restoring balance |
| Occupational Allocation | Ascribed by caste, lineage, age, or gender | Achieved through skill, credentials, and choice |

Yet rapid transitions rarely go smoothly. When old rules crumble before new ethical codes settle—"the old scale is upset, a new scale not yet devised"—society enters temporary ==Anomie== (normlessness). [[eg:In transitional India, a young civil servant faces conflicting pulls between family loyalty toward a relative and universal constitutional neutrality, while youth navigate blurred online etiquette.]] Durkheim also diagnosed three **Abnormal Forms**—**Anomic division** (unregulated owner-worker hostility), **Forced division** (caste or poverty blocking talent, like a gifted scholar pulling a rickshaw), and **Inadequate coordination** (blurred job roles)—proposing **professional ethics guilds** (like Bar Council or medical councils), **written contracts**, and **state equal-opportunity laws** as cures. [[link:Contrast this optimistic integration view with Karl Marx’s Alienation in Unit 4.1 and contemporary labour struggles at Foxconn or gig platforms in Unit 6.]]

## Suicide as a Social Fact (*Le Suicide*, 1897)

Could anything appear more intensely private and psychological than ending one’s own life? Using European police and census statistics across decades, Durkheim proved that while specific individuals die, each society’s **suicide rate** stays remarkably steady year after year—making the rate itself an unmistakable ==social fact== driven by collective currents of **Social Integration** (belonging) and **Moral Regulation** (normative restraint).

- **Egoistic Suicide (Too Little Integration):** Weak ties to family, neighbourhood, or community leave individuals isolated during crises—seen in higher rates among unmarried adults, isolated city dwellers, and individualistic Protestant sects compared to tight-knit Catholic parishes.
- **Altruistic Suicide (Excessive Integration):** Individual life is valued below group honour or duty—exemplified historically by *Sati*, Rajput *Jauhar*, Jain *Sallekhana*, battlefield self-sacrifice, and ideological suicide bombers.
- **Anomic Suicide (Too Little Regulation):** Sudden financial crashes or unexpected windfalls shatter moral limits over human greed and ambition. [[eg:In India, sudden agrarian price shocks and consumer aspirations push indebted farmers toward despair, while unmoderated coaching competition leaves migrant students in Kota disoriented.]]
- **Fatalistic Suicide (Excessive Regulation):** Crushing, inescapable discipline suffocates hope—observed among enslaved labourers, harsh prison regimes, or debtors bullied relentlessly by moneylenders.

Critics sharply challenged Durkheim’s data: [[thinker:Jack Douglas]] showed coroners and Catholic families conceal stigma by classifying suicides as accidents; **attempted suicides** outnumber completed deaths among women (who choose less lethal means), skewing Durkheim’s gender claims; and inferring personal psychology from regional averages commits the **Ecological Fallacy**.

## Religion, the Sacred–Profane Divide, and Civic Faith

In *The Elementary Forms of Religious Life* (1912), Durkheim deliberately dropped "God" from his definition so non-theistic traditions like Buddhism still qualify: religion is a unified system of beliefs and practices concerning ==sacred things==—objects set apart and forbidden—that bind followers into one moral community ("Church"). Every society splits the cosmos into the revered **Sacred** and ordinary utilitarian **Profane**, and rituals can shift items across the border: [[eg:ordinary tap water stays profane, whereas Haridwar Ganga jal kept in a separate vessel becomes sacred; raw clay turns sacred upon Ganesh Puja installation and returns to profane after visarjan]].

Studying secondary reports on Australia’s **Arunta** clans, Durkheim noted each exogamous clan carved its plant or animal **Totem** onto sacred wooden *churinga* boards. Because the totem symbolises the clan itself, worshipping the sacred totem means ==society worshipping itself== ("God is society divinised"). Collective rituals generate ==Collective Effervescence==—an electric surge of shared energy seen from Vaishno Devi pilgrimages and *azan* calls to secular cricket stadiums chanting "India! India!"—instilling shared morality, humility, crisis consolation, and social solidarity.

Anticipating modern diversity, Durkheim argued secularisation never erases the sacred; rather, national symbols—flags, anthems, and **Constitutional Morality**—form a modern ==Civic Religion== (later expanded by [[thinker:Robert Bellah]]) uniting multi-faith societies like India. Still, critics fault Durkheim for relying on armchair ethnographies, drawing an unrealistically rigid wall between sacred and profane (ignoring Indian everyday reverence toward textbooks and tools), and sanitising religion’s dark side—ignoring communal bloodshed as well as [[thinker:B.R. Ambedkar]]’s indictment of caste-sanctioning scriptures and feminist critiques by [[thinker:Kamla Bhasin]] and [[thinker:Karen Armstrong]].`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1893',
        title: 'The Division of Labour in Society',
        text: 'Distinguished Mechanical and Organic solidarity, dynamic density, repressive vs restitutive law, and abnormal forms.',
      },
      {
        year: '1895',
        title: 'The Rules of Sociological Method',
        text: 'Defined social facts as external, coercive things and established normal vs pathological criteria.',
      },
      {
        year: '1897',
        title: 'Le Suicide (Empirical Classic)',
        text: 'Mapped suicide rates across integration and regulation into Egoistic, Altruistic, Anomic, and Fatalistic types.',
      },
      {
        year: '1898',
        title: 'L’Année Sociologique Founded',
        text: 'Built Europe’s premier sociology journal and institutionalised the French sociological school.',
      },
      {
        year: '1912',
        title: 'Elementary Forms of Religious Life',
        text: 'Used Arunta totemism to trace the Sacred–Profane divide, collective effervescence, and society as God.',
      },
      {
        year: '1967',
        title: 'Robert Bellah & Jack Douglas Revisions',
        text: 'Bellah extended Durkheim into modern Civil Religion, while Douglas critiqued official suicide statistics.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Dynamic Density Rises', text: 'Volume, material closeness & moral interaction surge' },
      { label: 'Specialisation', text: 'Work divides into niche roles to manage competition' },
      { label: 'Transitional Anomie', text: 'Old rules dissolve before modern norms crystallise' },
      { label: 'Organic Solidarity', text: 'Mutual dependence + restitutive law reunite society' },
      { label: 'Moral Anchors', text: 'Occupational guilds & civic religion curb boundless greed' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'The Sacred (Durkheim)',
    rightTitle: 'The Profane (Durkheim)',
    rows: [
      {
        aspect: 'Core Status',
        left: 'Set apart, forbidden, revered with awe and moral dignity',
        right: 'Ordinary, mundane, governed by practical daily utility',
      },
      {
        aspect: 'Conduct Rules',
        left: 'Strict purity rituals (removing shoes, washing hands)',
        right: 'Casual handling, wastage, or market exchange allowed',
      },
      {
        aspect: 'Indian Examples',
        left: 'Ganga jal, wrist moli, national flag, Constitution',
        right: 'Tap water, shirt thread, store room, pocket money',
      },
      {
        aspect: 'Moral Character',
        left: 'Can inspire fear or awe (e.g., Shani Maharaj), always potent',
        right: 'Neither evil nor sinful—simply routine and utilitarian',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Social Facts',
    meaning:
      'Collective ways of acting, thinking, and feeling external to individuals, endowed with coercive power and generality across society.',
    thinkerSlug: 'emile-durkheim',
  },
  {
    kind: 'keyTerm',
    term: 'Organic Solidarity & Dynamic Density',
    meaning:
      'Modern cohesion rooted in functional interdependence among specialised roles, triggered as population volume, physical closeness, and social interaction rise.',
    thinkerSlug: 'emile-durkheim',
  },
  {
    kind: 'keyTerm',
    term: 'Fourfold Suicide Typology',
    meaning:
      'Durkheim’s classification of suicide rates along Integration (Egoistic low, Altruistic high) and Regulation (Anomic low, Fatalistic high).',
    thinkerSlug: 'emile-durkheim',
  },
  {
    kind: 'keyTerm',
    term: 'Sacred, Profane & Collective Effervescence',
    meaning:
      'Division of the world into revered (Sacred) and mundane (Profane) spheres; collective rituals spark shared emotional energy binding individuals to the moral community.',
    thinkerSlug: 'emile-durkheim',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'emile-durkheim',
    quote: 'The first and most fundamental rule is: Consider social facts as things.',
    context: 'Establishing objective empirical autonomy for sociology against subjective speculation (1895).',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2024–2013 PYQ Focus: Indian Applications + Methodological Critique',
    body: 'UPSC loves pairing Durkheim’s classical concepts with Indian realities: suicide rates in Kota or agrarian belts (2018, 2024), modern division of labour (2021), and religious revivalism vs secular civic religion (2020, 2022). Always cite both strengths (interdependence, sui generis reality) and critiques (ecological fallacy, Jack Douglas, Ambedkar, feminist lenses).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: "Durkheim Ignored Religion in Modernity" or "Crime Is Always Bad"',
    body: 'Never write that Durkheim expected religion to vanish completely or that all crime destroys society. He explicitly argued religion endures via new secular sacreds (civic religion) and famously proved moderate crime is a normal social fact that strengthens collective norms and drives moral progress.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Suicide Axes Matrix (Integration × Regulation)',
    body: 'Draw a quick 2×2 box in exam rough notes: Integration Low = Egoistic (loneliness), High = Altruistic (Sati/soldier); Regulation Low = Anomic (crash/boom/Kota), High = Fatalistic (prison/bonded debt).',
  },
  {
    kind: 'answerBox',
    intro:
      'Émile Durkheim anchored sociology as an independent positivist discipline by demonstrating that collective moral structures govern even seemingly private acts.',
    points: [
      'Social facts & method: External, coercive collective patterns must be studied empirically as things, separating sociological causes from individual psychology.',
      'Solidarity shift: Rising dynamic density transforms mechanical likeness into organic interdependence, though rapid shifts risk anomic and forced divisions of labour.',
      'Suicide rates: Variations across groups reflect imbalances in social integration (Egoistic/Altruistic) and moral regulation (Anomic/Fatalistic).',
      'Sacred & society: Through Arunta totemism, Durkheim showed God is society divinised, surviving modernity via collective effervescence and civic religion.',
      'Critical balance: While critiques note ecological fallacy, statistical construction, and blindness to religious conflict and patriarchy, his structural lens remains foundational.',
    ],
    conclusion:
      'From digital work specialisation to contemporary farmer and youth distress, Durkheim’s emphasis on social bonds and moral regulation continues to illuminate modern crises.',
  },
]

export const topic2En: TopicLangContent = {
  summary:
    'Émile Durkheim proved society is a sui generis moral reality governed by external coercive social facts, tracing solidarity from mechanical likeness to organic interdependence alongside structural drivers of suicide and sacred ritual.',
  mindMap: topic2MindMapEn,
  sections,
}