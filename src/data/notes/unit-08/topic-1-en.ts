import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 8.1 · Sociological Theories of Religion',
  center: 'Theories of Religion',
  subtitle: 'Origin -> Solidarity -> Opiate -> Capitalism -> Patriarchy',
  branches: [
    {
      title: 'Evolutionary & Origin',
      color: 'lavender',
      thinkers: ['E.B. Tylor', 'Max Müller', 'Herbert Spencer', 'James Frazer'],
      points: [
        'Tylor Animism: intellectual curiosity about death, dreams & soul (anima)',
        'Müller Naturism: emotional awe and fear personifying natural forces',
        'Spencer Ghost Theory: ancestor spirits appeased for family peace',
        'Frazer: magic (control nature) -> religion (supplication) -> science',
      ],
    },
    {
      title: 'Functionalist Lens',
      color: 'yellow',
      thinkers: ['Émile Durkheim', 'B. Malinowski', 'Talcott Parsons', 'Robert Bellah'],
      points: [
        'Durkheim: Sacred vs Profane, Arunta totemism & collective effervescence',
        'Malinowski: Trobriand open-sea fishing anxiety & life-crisis rituals',
        'Parsons: cultural value consensus, meaning & tonic to self-confidence',
        'Bellah Civil Religion: secular national flags & anthems as modern sacred',
      ],
    },
    {
      title: 'Marxist & Weberian',
      color: 'mint',
      thinkers: ['Karl Marx', 'Ernst Bloch', 'Otto Maduro', 'Max Weber'],
      points: [
        'Marx: superstructure opiate legitimising inequality via karma/afterlife',
        'Neo-Marxists (Bloch, Maduro, Gramsci): Liberation Theology & dual role',
        'Weber: Protestant Ethic (calling, predestination, asceticism) -> capitalism',
        'Comparative world religions: this-worldly vs other-worldly orientations',
      ],
    },
    {
      title: 'Interpretive, Market & Feminist',
      color: 'pink',
      thinkers: ['Peter Berger', 'Clifford Geertz', 'Stark & Bainbridge', 'Simone de Beauvoir'],
      points: [
        'Berger Sacred Canopy & Geertz cultural system handling ethical paradox',
        'Stark & Bainbridge Religious Market (compensators) vs Norris-Inglehart',
        'Feminist critique (Beauvoir, Holm, Walby): male gods, priesthood & taboos',
        'Denise Kandiyoti Patriarchal Bargain & Islamic/Reform feminist counter',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u08-01-religion-theories-types.webp',
    alt: 'P1 Unit 8 infographic: Theories & Types of Religion — Classical Sociology of Religion & Organizational Types',
    caption: 'Classical Sociology of Religion & Organizational Types (Theories & Types of Religion).',
    credit: 'UPSC OWL Studio · Paper 1 Unit 8 Visual 01',
  },
  {
    kind: 'md',
    body: `## How Does Sociology Study Religion?

When ordinary believers talk about religion, they ask whether God exists or which scripture holds eternal truth. Sociologists set theological truth aside and ask a very different question: how do religious beliefs and collective rituals shape social unity, economic habits, class power, and gender roles? Before comparing grand theories, sociologists clarify three ways of defining religion itself.

- **Substantive Definitions:** Focus on the *content* of belief, such as [[thinker:Roland Robertson]] defining religion as belief in supernatural beings that govern human life. [[trap:Substantive definitions are often too narrow because they exclude non-theistic traditions like early Theravada Buddhism that do not worship a creator god.]]
- **Functional Definitions:** Focus on the *social and psychological tasks* religion performs, such as [[thinker:J. Milton Yinger]] viewing religion as a shared system through which people struggle with the ultimate problems of existence (death, suffering, and unfair fate).
- **Social Constructionist / Interactionist Lens:** Examines how everyday actors interpret sacred meaning in their own social context rather than imposing one universal blueprint.

## Early Evolutionary Theories: Where Did Religion Begin?

Nineteenth-century scholars tried to reconstruct how prehistoric humans first created religious ideas. Instead of divine revelation, they traced early religion to either human intellectual curiosity or intense emotional vulnerability before untamed nature.

- **Animism ([[thinker:E.B. Tylor]]):** Derived from Latin *anima* (soul or life-force), Tylor argued in *Primitive Culture* that early humans acted like "primitive philosophers" trying to solve two intellectual puzzles: why a warm living body turns into a cold corpse at death, and how we meet distant people in dreams. They deduced an invisible spirit that leaves the body and gradually attributed souls to trees, rivers, and stones. [[eg:Ancestor worship (necrolatry) and sacred forest groves (Sarna) among Santhal and Oraon tribes in Jharkhand reflect living animistic reverence.]]
- **Naturism ([[thinker:Max Müller]]):** Unlike Tylor’s intellectual approach, Müller traced religion to *emotional awe, fear, and wonder* before thunder, blazing sun, and flooding rivers. through a "disease of language," poetic metaphors for nature hardened into personified deities. [[eg:In Vedic hymns and everyday Indian ethos, fierce natural forces are personified and revered as Surya Devta, Indra, Vayu, and Ganga Maiya.]]
- **Ghost Theory & Magic-to-Science:** [[thinker:Herbert Spencer]] traced religion to appeasing fearful ghosts of dead ancestors, while [[thinker:James Frazer]] (*The Golden Bough*) proposed an evolutionary march from **Magic** (manipulating nature directly) to **Religion** (begging supernatural beings) to **Science** (rational empirical laws).

## Functionalist Perspective: Religion as Social Glue and Psychological Anchor

Why does religion survive across every known civilisation? Functionalists argue that society could not hold together without shared moral symbols and rituals that bind strangers into a "we" community and calm human anxiety during crises.

### 1. Émile Durkheim: The Sacred, the Profane, and Totemism

In *The Elementary Forms of Religious Life* (1912), [[thinker:Émile Durkheim]] studied the simplest known clan society — the **Arunta** aboriginal tribe of Australia — to uncover the universal DNA of all religions. He noticed that every society divides the entire universe into two strictly separated realms: the ==Sacred== (things set apart, forbidden, inspiring collective awe) and the ==Profane== (ordinary, mundane everyday utility). Nothing is inherently sacred; an object becomes sacred only when a community projects collective reverence onto it.

Each Arunta clan adopted a **Totem** — an emblem of a plant or animal carved on wood (*churinga*). Durkheim concluded that the totem is simultaneously the outward symbol of the clan God and the flag of the clan itself. Therefore, ==when society worships God, it is actually worshipping its own collective power==! When clan members gather for seasonal ceremonies, intense shared chanting and dancing generate ==collective effervescence== — an electric emotional high that recharges moral solidarity, enforces social discipline, and gives individuals cognitive categories (time, space, cause). [[eg:During massive gatherings like the Prayagraj Kumbh Mela, Durga Puja pandals in Kolkata, or Ganpati Visarjan in Mumbai, millions experience collective effervescence that renews shared identity.]]

In modern secular nations, [[thinker:Robert Bellah]] extended Durkheim through ==Civil Religion==: secular state symbols like the national flag, constitution, Republic Day parades, and singing the national anthem at cricket stadiums create sacred social cohesion without referring to a specific church.

### 2. Malinowski and Parsons: Coping with Uncertainty and Bafflement

Criticising Durkheim for reducing religion to society worshipping itself, [[thinker:Bronislaw Malinowski]] used his fieldwork among the **Trobriand Islanders** to highlight religion’s *individual psychological function*. When Trobrianders fished inside the calm, shallow coral **lagoon**, they used pure technical skill and performed zero magic or religious rituals. Yet when they ventured into the dangerous, unpredictable **open ocean**, they performed elaborate sacred rituals before sailing.

- **Two Triggers of Ritual ([[thinker:Bronislaw Malinowski]]):** Humans turn to religious and magical rituals during **(1) uncontrollable ecological/practical uncertainty** and **(2) disruptive life-crisis transitions** (birth, puberty, marriage, and death, where funeral rites heal the social tear caused by bereavement). [[eg:Before launching complex satellites at Sriharikota, ISRO scientists often offer miniature rocket models at Tirupati temple to manage psychological anxiety amidst high-stakes uncertainty.]]
- **Cultural System & Theodicy ([[thinker:Talcott Parsons]]):** Inside Parsons’ AGIL framework, religion anchors the cultural system (Latency), providing ultimate meaning for inexplicable suffering (why good people suffer or monsoons fail) and acting as a "tonic to self-confidence" that restores social equilibrium.

## Marxist and Neo-Marxist Perspective: Opiate or Liberation?

Where functionalists celebrate harmony, [[thinker:Karl Marx]] saw a velvet glove hiding class exploitation. Located in the ideological **superstructure**, religion reflects and protects the economic **base** by serving the ruling class ("the haves") and numbing the working class ("the have-nots").

Marx famously called religion the ==opium of the masses== and the "sigh of the oppressed creature." Just as an analgesic pill dulls physical pain without curing the disease, religion makes unbearable poverty tolerable while preventing revolutionary class consciousness through five concrete mechanisms:

1. **Glorifying Suffering as Virtue:** Preaching that the meek shall inherit the earth or framing poverty as a divine test (*Bhagwan ki pariksha*).
2. **Divine Sanction for Hierarchy:** Presenting feudal estates, divine kingship (*Devaputra*), or caste birth-rank as immutable laws of God or past *Karma*.
3. **Deferring Justice to God:** Advising exploited workers to wait passively for divine retribution (*Bhagwan ke ghar der hai, andher nahi*) rather than overthrowing capitalists.
4. **Promising a Compensatory Afterlife:** Calling earthly life a fleeting illusion (*Maya*) while promising rivers of milk in *Jannat* or *Swarga* for obedient sufferers.
5. **Supernatural Social Control:** Branding theft or rebellion against property owners not merely illegal, but a mortal sin against God.

- **Neo-Marxist Dual Character:** Later Marxists rejected the view that religion is *always* conservative. [[thinker:Friedrich Engels]] noted early Christianity was a revolutionary movement of slaves; [[thinker:Ernst Bloch]] saw utopian hope in faith; and [[thinker:Antonio Gramsci]] + [[thinker:Otto Maduro]] showed how lower-clergy act as **organic intellectuals** building counter-hegemony. [[eg:Catholic Liberation Theology priests fighting inequality in Latin America, Mahatma Gandhi’s Satyagraha against colonial rule, and B.R. Ambedkar’s Navayana Buddhism mobilising Dalits against caste oppression prove religion can ignite radical change.]]

## Max Weber: Religion as an Engine of Economic Change

Turning vulgar Marxism upside down, [[thinker:Max Weber]] demonstrated in *The Protestant Ethic and the Spirit of Capitalism* (1905) that religious ideas inside the superstructure can actively revolutionise the economic base. Weber asked why modern rational industrial capitalism arose specifically in 16th–17th century Western Europe rather than in wealthy pre-colonial India or China, which already possessed rich natural resources, trade networks, and stable empires.

Weber argued that modern capitalism required not mere greed, but a disciplined ethical mindset — the ==Spirit of Capitalism== (exemplified by Benjamin Franklin’s maxims: *"Time is money,"* frugality, punctuality, and creditworthiness). He traced its unexpected psychological spark to **Calvinist Protestantism**:

- **Incomprehensibility of God & This-Worldly Turn:** Calvin taught that finite humans cannot grasp God’s mysteries via mysticism, pushing believers to master the material world.
- **Predestination & Salvation Anxiety:** God has already pre-selected the saved (**the Elect**) and the damned before birth; no priest, confession, or sacrament can change your fate. This created unbearable psychological **salvation anxiety**, leading believers to treat relentless worldly professional success as a visible *sign of being among the Elect*.
- **Secular Calling (*Beruf*) & Work as Worship:** Rejecting Catholic monastic withdrawal, Protestantism turned every secular trade — cobbler, banker, engineer — into a sacred calling where 24/7 work glorifies God, fostering division of labour.
- **This-Worldly Asceticism & Reinvestment:** Believers were commanded to work fiercely and permitted reasonable banking interest (reinterpreting usury), yet strictly forbidden from spending wealth on luxury or idle charity. Trapped between high earnings and austere living, their only option was **continuous reinvestment of profit** — birthing modern capital accumulation!

| Dimension | Émile Durkheim | Karl Marx | Max Weber |
| --- | --- | --- | --- |
| Core Lens | Structural Functionalism | Historical Materialism | Interpretive Social Action |
| Role of Religion | Social cohesion & moral consensus | Ideological opiate & class control | Cultural switchman driving change |
| View of Modernity | Sacred persists via Civil Religion | Withers away in classless communism | Rationalisation leads to Disenchantment |
| Primary Critique | Ignores communal conflict & power | Ignores solidarity & liberation faith | Misread Hinduism; ignored Catholic Venice |

[[trap:Always balance Weber with 5 classic critiques: (1) Hinduism includes this-worldly Purusharthas (Artha and Kama) and mercantile castes like Marwaris, Banias, and Chettiars; (2) Werner Sombart highlighted Jewish entrepreneurship; (3) Joseph Schumpeter noted capitalism flourished earlier in Catholic Venice and Florence; (4) Karl Kautsky argued capitalism created Protestantism; (5) Late capitalism thrives on credit-card consumerism, not austerity.]]

## Phenomenological, Market, and Feminist Theories

- **Sacred Canopy & Meaning ([[thinker:Peter Berger]] & [[thinker:Clifford Geertz]]):** Berger called religion a ==Sacred Canopy== — a protective dome of cosmic order shielding humans from existential chaos (*anomie*). Geertz defined religion as a cultural system of symbols that establishes powerful moods and resolves **bafflement, suffering, and ethical paradox** (e.g., why an innocent child dies while the wicked prosper).
- **Religious Market vs Existential Security:** Rejecting Eurocentric secularisation, [[thinker:Rodney Stark]] and [[thinker:William Sims Bainbridge]] proposed **Religious Market Theory**: human demand for supernatural **compensators** (rewards like eternal life) stays constant, so where state monopoly ends and diverse faiths compete freely (like the USA), religiosity booms. Conversely, [[thinker:Pippa Norris]] and [[thinker:Ronald Inglehart]] (*Existential Security Thesis*) proved cross-nationally that wealthy welfare states with high human security show low religiosity, while poorer, vulnerable societies remain deeply religious.
- **Feminist Critique of Patriarchy in Religion:** [[thinker:Simone de Beauvoir]] (*The Second Sex*), [[thinker:Jean Holm]], [[thinker:Karen Armstrong]], and [[thinker:Sylvia Walby]] argue that world religions operate as patriarchal instruments that subordinate women across four levels: **(1) Male-imaged deities and prophets** (Adam created first, Eve blamed for original sin); **(2) Male monopoly over priesthood** (banning female Catholic priests, orthodox Brahmin pandits, or mosque imams); **(3) Pollution taboos** excluding menstruating or post-partum women from sacred shrines; and **(4) Gendered personal laws and compensatory heaven** soothing women’s earthly oppression. Moreover, [[thinker:Denise Kandiyoti]] showed how older women enforce religious fasts and dress codes on younger women as a ==Patriarchal Bargain==. [[eg:Constitutional struggles around Sabarimala temple entry, the 2019 statutory ban on instant Triple Talaq, and female Qazis/priests trained by Bharatiya Muslim Mahila Andolan and Pune’s Jnana Prabodhini highlight feminist reform inside Indian religion.]] [[link:Connect this in Paper 2 Unit 8 with problems of religious minorities in India — socio-economic backwardness (Sachar Committee), security anxieties, and institutional representation via National Commission for Minorities.]]`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1871–1878',
        title: 'Tylor & Max Müller — Origin Debate',
        text: 'Tylor’s Primitive Culture (Animism: soul from dreams/death) vs Müller’s Hibbert Lectures (Naturism: emotional personification of nature).',
      },
      {
        year: '1844',
        title: 'Karl Marx — Opiate of the Masses',
        text: 'Analysed religion as an ideological superstructure that dulls working-class pain while legitimising ruling-class dominance.',
      },
      {
        year: '1904–1905',
        title: 'Max Weber — Protestant Ethic',
        text: 'Linked Calvinist predestination anxiety, secular calling, and this-worldly asceticism to the birth of modern industrial capitalism.',
      },
      {
        year: '1912',
        title: 'Émile Durkheim — Elementary Forms',
        text: 'Used Arunta totemism to show the Sacred/Profane divide, collective effervescence, and society worshipping itself.',
      },
      {
        year: '1925–1948',
        title: 'Malinowski — Magic, Science & Religion',
        text: 'Trobriand lagoon vs open-sea fishing proved rituals manage psychological anxiety during uncertainty and life crises.',
      },
      {
        year: '1967–1973',
        title: 'Bellah, Berger & Geertz — Meaning & Civil Religion',
        text: 'Bellah’s American Civil Religion, Berger’s Sacred Canopy, and Geertz’s cultural symbols handling existential bafflement.',
      },
      {
        year: '1987–2004',
        title: 'Stark-Bainbridge vs Norris-Inglehart',
        text: 'Supply-side Religious Market Theory (compensators) debated demand-side Existential Security Thesis across nations.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Predestination', text: 'Calvinist doctrine that God pre-selects the saved Elect before birth' },
      { label: 'Salvation Anxiety', text: 'Intense psychological terror with no priestly confession to alter fate' },
      { label: 'Secular Calling', text: 'Relentless 24/7 hard work in worldly profession treated as sacred worship' },
      { label: 'Ascetic Saving', text: 'Strict ban on luxury spending and idle charity preserves earned wealth' },
      { label: 'Capitalism Born', text: 'Continuous reinvestment of profits builds modern industrial capitalism' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Animism (E.B. Tylor)',
    rightTitle: 'Naturism (Max Müller)',
    rows: [
      {
        aspect: 'Core Definition',
        left: 'Belief in invisible souls, spirits, and ghosts (anima) animating living and non-living things',
        right: 'Personification and deification of physical forces of nature (sun, thunder, rivers, wind)',
      },
      {
        aspect: 'Primary Human Trigger',
        left: 'Intellectual curiosity — early man as a primitive philosopher solving puzzles of death and dreams',
        right: 'Emotional experience — awe, wonder, helplessness, and fear before mighty natural phenomena',
      },
      {
        aspect: 'Mechanism of Origin',
        left: 'Deduction of a double/spirit leaving the body temporarily in sleep and permanently at death',
        right: 'Disease of language — poetic metaphors for natural events hardened into personal deities',
      },
      {
        aspect: 'Ritual Intermediaries',
        left: 'Shamans, medicine men, and ancestor propitiation (necrolatry) to prevent spirit harm',
        right: 'Direct hymns, nature offerings, and personified mythology (later evolving into polytheism)',
      },
      {
        aspect: 'Indian Illustration',
        left: 'Santhal and Oraon Sarna sacred groves and ancestral spirit worship in central/eastern India',
        right: 'Rigvedic worship of Indra, Agni, Surya, Vayu, and reverence for sacred rivers like Ganga',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Sacred and Profane',
    meaning:
      'Durkheim’s universal dichotomy where the Sacred consists of things set apart and forbidden that inspire collective awe, while the Profane encompasses ordinary everyday utility.',
    thinkerSlug: 'emile-durkheim',
  },
  {
    kind: 'keyTerm',
    term: 'Collective Effervescence',
    meaning:
      'The heightened emotional energy generated when a community gathers for shared religious rituals, reaffirming moral unity and group solidarity above individual ego.',
    thinkerSlug: 'emile-durkheim',
  },
  {
    kind: 'keyTerm',
    term: 'Protestant Ethic & Salvation Anxiety',
    meaning:
      'Calvinist psychological tension over predestination that drove believers to pursue disciplined worldly work (calling) and ascetic reinvestment as signs of divine election.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'Sacred Canopy',
    meaning:
      'Peter Berger’s concept describing religion as an overarching protective dome of cosmic meaning that shields human society from existential chaos and normlessness.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'emile-durkheim',
    quote: 'In a general way, it is unquestionable that a society has all that is necessary to arouse the sensation of the divine in minds.',
    context: 'Elementary Forms of Religious Life (1912) — arguing that in worshipping the totem god, the clan worships its own collective force.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'Religion is the sigh of the oppressed creature, the heart of a heartless world... It is the opium of the people.',
    context: 'Contribution to the Critique of Hegel’s Philosophy of Right (1844) — diagnosing religion as both an expression of suffering and an ideological sedative.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2025–2016 PYQ Pattern: The Classical Triad Matrix',
    body: 'UPSC repeatedly asks two high-value comparative questions here: (1) Durkheim vs Weber (2016) and (2) Marx vs Weber vs Durkheim (2025). Always structure your comparison across 4 fixed axes: Level of Analysis (Macro-functional vs Macro-conflict vs Micro-interpretive action), Core Function (Social cohesion vs Class legitimation vs Economic switchman), View of Social Change (Status-quo solidarity vs Counter-revolutionary opiate vs Catalyst of capitalism), and Fate in Modernity (Civil religion vs Disappears in communism vs Disenchantment/Iron cage).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Writing Only Negative Points on Marx & Feminism',
    body: 'Never stop at "religion is the opium of the masses" or "all religions are patriarchal." In a 20-mark answer, always add the Neo-Marxist counter-turn (Ernst Bloch, Otto Maduro, Gramsci’s organic intellectuals, Liberation Theology, Ambedkar’s Navayana Buddhism) and Feminist reform movements (female Bhakti-Sufi poet-saints like Mirabai, Akka Mahadevi, Lal Ded, and Islamic feminism re-reading scripture).',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Paper 1 ↔ Paper 2 Bridge: Minority Question & Islam in India',
    body: 'Several PYQs tagged under Religion & Society ask about Indian religious minorities (2022, 2019, 2014), Triple Talaq (2018), and Islam in India (2017). Anchor these answers in sociological concepts: Louis Wirth’s definition of minority (subordinate power, not just numbers), Imtiaz Ahmad’s empirical studies on lived Indian Islam (Ashraf-Ajlaf-Arzal stratification & Sufi syncretism), Sachar Committee & Ranganath Misra findings, and Articles 25–30 constitutional safeguards.',
  },
  {
    kind: 'answerBox',
    intro:
      'Sociological theories of religion examine faith not as divine revelation, but as a powerful social institution shaping solidarity, meaning, power, and economic transformation.',
    points: [
      'Evolutionary roots: Tylor’s Animism (intellectual curiosity about souls/dreams) and Max Müller’s Naturism (emotional awe personifying natural forces) explained early religion.',
      'Functionalist solidarity: Durkheim showed how the Sacred/Profane divide and totemic rituals generate collective effervescence, while Malinowski and Parsons highlighted anxiety management.',
      'Marxist & Neo-Marxist dialectic: Marx exposed religion as an ideological opiate legitimising inequality, whereas Maduro and Gramsci showed its counter-hegemonic liberation potential.',
      'Weberian social action: Weber’s Protestant Ethic proved Calvinist salvation anxiety and this-worldly asceticism acted as cultural catalysts for modern industrial capitalism.',
      'Contemporary & Feminist lenses: Berger’s Sacred Canopy, Stark’s Religious Market, and Feminist critiques (Beauvoir, Walby) reveal how religion navigates pluralism and patriarchy today.',
    ],
    conclusion:
      'Together, these perspectives demonstrate that religion is simultaneously a moral glue, an arena of class and gender contestation, and a dynamic driver of historical change.',
  },
]

export const topic1En: TopicLangContent = {
  summary:
    'Sociology analyses religion through evolutionary origins (Tylor’s animism, Müller’s naturism), functional cohesion and crisis management (Durkheim, Malinowski, Parsons), ideological class control vs liberation (Marx, Maduro), economic rationalisation (Weber’s Protestant Ethic), and feminist critiques of patriarchy.',
  mindMap,
  sections,
}