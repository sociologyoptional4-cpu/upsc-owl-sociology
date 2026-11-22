import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 8.2 · Types of Religious Practices',
  center: 'Religious Practices & Organizations',
  subtitle: 'Animism • Monism vs Pluralism • Church, Sect & Cult',
  branches: [
    {
      title: 'Animism, Naturism & Totemism',
      color: 'lavender',
      thinkers: ['E.B. Tylor', 'Max Müller', 'Émile Durkheim', 'Graham Harvey'],
      points: [
        'Tylor Animism: spirits in living/inanimate things & ancestor necrolatry',
        'Müller Naturism: emotional personification of thunder, sun & rivers',
        'Durkheim Totemism: Arunta clan emblem as sacred collective symbol',
        'New/Ecological Animism: Chipko, Narmada, Sarna groves & river legal personhood',
      ],
    },
    {
      title: 'Monism, Dualism & Pluralism',
      color: 'yellow',
      thinkers: ['Adi Shankara', 'Ramanuja', 'Madhvacharya', 'Peter Berger'],
      points: [
        'Monism (Advaita): Creator & creation are one (Aham Brahmasmi); vs Monotheism',
        'Dualism (Dvaita, Christianity, Islam) vs Qualified Monism (Vishishtadvaita)',
        'Hinduism as Henotheism / Kathenotheism (Max Müller: one Supreme, many forms)',
        'Cultural & Religious Pluralism: Berger, Ashoka Dhamma, Ganga-Jamuni syncretism',
      ],
    },
    {
      title: 'Church, Denomination & Sect',
      color: 'mint',
      thinkers: ['Ernst Troeltsch', 'Max Weber', 'Howard Becker', 'H. Richard Niebuhr'],
      points: [
        'Church: universal monopoly, birth entry, state-aligned bureaucratic clergy',
        'Denomination: respectable pluralistic co-existence & state neutrality',
        'Sect: breakaway protest group claiming unique truth & high commitment',
        'Weber Theodicy of Disprivilege & Niebuhr life-cycle (sect -> denomination)',
      ],
    },
    {
      title: 'Cults & New Religious Movements',
      color: 'pink',
      thinkers: ['Roy Wallis', 'Steve Bruce', 'Bryan Wilson', 'Paul Heelas'],
      points: [
        'Cult: novel belief without parent religion, customer-like loose ties',
        'Roy Wallis 2x2 Matrix (Respectable/Deviant x Uniquely/Pluralistically Legitimate)',
        'Wallis 3 NRMs: World-Rejecting, World-Affirming, World-Accommodating',
        'Stark & Bainbridge (Audience/Client cults) & Heelas Spiritual Supermarket',
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
    body: `## From Tribal Spirits to Global Spiritual Supermarkets

Why do human religious practices look so wildly diverse — ranging from tribal villagers offering rice beer to ancestral forest spirits, to Advaita philosophers meditating on formless cosmic unity, to stressed software engineers attending weekend mindfulness cults? Sociologists study religious practices along two clear axes: **(1) the philosophical nature of belief** (animism, naturism, monism, pluralism) and **(2) how believers organise themselves** (church, denomination, sect, cult).

## 1. Animism, Naturism, and Contemporary Ecological Animism

In small-scale pre-industrial societies, religion was not locked inside weekend buildings; the entire natural landscape breathed with sacred power.

- **Animism ([[thinker:E.B. Tylor]]):** Belief that immaterial souls or spirits (*anima*) inhabit not only humans, but also animals, trees, rocks, springs, and ancestral ghosts (**necrolatry**). Because spirits can bless harvests or cause illness, communities rely on **shamans** or medicine men to appease them during rites of passage. [[eg:Santhal, Munda, and Oraon tribes across Jharkhand and Odisha worship sacred forest groves (Sarna) and consult ancestral spirits in family decisions.]]
- **Naturism ([[thinker:Max Müller]]):** Whereas animism worships invisible spirits *inside* objects, naturism personifies and deifies the visible *physical forces of nature* themselves — sun, wind, thunder, and rivers — born out of human emotional awe, fear, and dependence on nature as giver and taker of life. [[eg:Rigvedic hymns praising Indra, Agni, Surya, and Vayu, or everyday agricultural festivals like Chhath Puja worshipping the Sun god, reflect naturism.]]
- **Contemporary Relevance ("New Animism"):** Anthropologist [[thinker:Graham Harvey]] argues that animism is not a primitive relic; in an era of climate crisis, viewing nature as a living relative rather than dead industrial raw material inspires modern environmentalism. [[eg:Sacred groves (Devrai in Maharashtra, Kavus in Kerala), the Chipko and Niyamgiri movements, and granting legal "living personhood" to New Zealand’s Whanganui River and India’s Ganga/Yamuna reflect neo-animistic ecological ethics.]]

## 2. Monism, Monotheism, Polytheism, and Pluralism

Candidates often confuse **Monism** with **Monotheism**. In plain language: **Monotheism** is a *quantitative* claim that there is only one personal Creator God who stands *separate* from His creation (as in mainstream Judaism, Christianity, and Islam). **Monism** (coined by [[thinker:Christian von Wolff]]), by contrast, is a *metaphysical* philosophy asserting that **all of reality is fundamentally One unified substance** — there is zero ultimate boundary between the Creator and the creation!

- **Three Strands of Philosophical Monism:** (1) *Idealistic Monism* (only consciousness/spirit is real; matter is its projection), (2) *Materialistic Monism* (only physical matter is real, e.g., **Charvaka/Lokayata** in ancient India and **Karl Marx**), and (3) *Neutral Monism* (both mind and matter are manifestations of one underlying cosmic energy).
- **Indian Vedantic Spectrum & Sikhism:**
  - **Advaita Vedanta (Absolute Monism — [[thinker:Adi Shankara]]):** *Advaita* literally means "not-two." Brahman alone is the eternal cosmic reality, the material world is an illusion (*Maya*), and the individual soul (*Atman*) is identical to Brahman — captured in the Upanishadic *mahavakyas* ==Aham Brahmasmi== ("I am Brahman") and *Tat Tvam Asi* ("Thou art That").
  - **Vishishtadvaita (Qualified Monism — [[thinker:Ramanuja]]):** Individual souls and matter are real attributes (*chit* and *achit*) that form the body of one supreme Lord, merging with Him in devotion while retaining distinct experience.
  - **Dvaita (Dualism — [[thinker:Madhvacharya]]):** Like mainstream Christianity and orthodox Islam, Dvaita holds that God (Creator), souls, and the material universe are eternally separate realities — though **Sufism** (*Wahdat al-Wujud*) introduces a mystical monist strand where the lover merges into the Beloved.
  - **Sikhism as Monistic-Monotheism:** Guru Nanak’s *Ik Onkar* conceptualises the Supreme as *Sat-Chit-Anand* from whom individual souls spring like streams from a river and merge back into cosmic oneness.
- **Is Hinduism Monotheistic or Polytheistic?** Core Hindu tenets — *Dharma* (moral order), *Karma* (moral causation), *Samsara* (rebirth), *Moksha* (liberation), and the four *Purusharthas* (*Dharma, Artha, Kama, Moksha*) — combine popular **polytheism** (33 koti deities) with deep **monism**. [[thinker:Max Müller]] coined ==Henotheism / Kathenotheism== (worshipping one deity at a time as supreme without denying others), anchored in the Rigvedic maxim *"Ekam Sat Vipra Bahudha Vadanti"* (ultimate reality is singular, though sages describe it under diverse names).

### Cultural and Religious Pluralism

Whereas philosophical pluralism ([[thinker:William James]]) holds that reality consists of multiple irreducible substances, sociological **Religious and Cultural Pluralism** refers to the peaceful, equal coexistence of diverse religious and cultural communities within a single polity without forced assimilation.

- **Pluralism vs Modernity ([[thinker:Peter Berger]]):** Berger famously revised his earlier secularisation view to argue that ==modernity does not necessarily produce secularity; it produces pluralism== — a world where multiple worldviews share the same city, shattering any single church’s monopoly over truth and turning believers into "spiritual shoppers" ([[thinker:David Lyon]]).
- **India’s Civilisational Pluralism ("Salad Bowl" Unity in Diversity):** From **Ashoka’s 7th and 12th Rock Edicts** (*all pasandas/sects should cohabit in harmony*), **Akbar’s Sulh-i-Kul and Ibadat Khana**, and **Bhakti-Sufi syncretism** to [[thinker:M.N. Srinivas]] and [[thinker:Yogendra Singh]]’s analyses of composite culture and Constitutional **Articles 25–30**, India’s six major religions enrich its architecture, classical arts, cuisine, and ethical fabric. [[link:Link this with Paper 2 Unit 8 on religious communities in India and Rajeev Bhargava’s model of Principled Distance secularism.]]

## 3. Sociological Typology: Church, Denomination, Sect, and Cult

To classify how religious groups organise authority and relate to the wider state, [[thinker:Ernst Troeltsch]] (1912) introduced the foundational **Church–Sect dichotomy**, later expanded by [[thinker:Max Weber]], [[thinker:Howard Becker]], [[thinker:H. Richard Niebuhr]], and [[thinker:Roy Wallis]] into a **four-fold typology**:

| Dimension | Church (Ecclesia) | Denomination | Sect | Cult / NRM |
| --- | --- | --- | --- | --- |
| Societal Monopoly | Total monopoly over society | No monopoly; pluralistic | Breakaway protest vs parent faith | Novel/alien belief; no parent faith |
| Entry & Size | By birth; encompasses all classes | Birth or adult choice; large | Voluntary adult conversion; small | Consumer/client choice; loose & small |
| Structure & Clergy | Bureaucratic hierarchy; paid priests | Formal professional clergy | Charismatic leader; flat/egalitarian | Charismatic guru; informal network |
| Relation to State | Closely integrated with state power | Cooperative & separate from state | World-rejecting; opposes secular state | Individualistic; largely indifferent |

### Why Does Roy Wallis’s 2×2 Matrix Matter?

[[thinker:Roy Wallis]] solved the confusion between these four types by cross-tabulating two simple questions: **(1) How does wider society view the group?** (*Respectable* vs *Deviant*) and **(2) How does the group view its own truth claim?** (*Uniquely Legitimate* monopoly on truth vs *Pluralistically Legitimate* acceptance of other paths).

- **Church:** *Respectable + Uniquely Legitimate* (e.g., Medieval Roman Catholic Church).
- **Denomination:** *Respectable + Pluralistically Legitimate* (e.g., Methodists, Baptists, or major established faiths coexisting in pluralist democracies).
- **Sect:** *Deviant + Uniquely Legitimate* — breaks away from a parent religion claiming the parent has grown corrupt, and demands total lifestyle commitment from recruits. [[thinker:Max Weber]] called sects a ==Theodicy of Disprivilege== because they attract marginalised, lower-class or lower-caste groups seeking dignity. Yet as [[thinker:H. Richard Niebuhr]] showed, sects rarely survive past one generation in raw form: they either **(1) Denominationalise** as second-generation children grow wealthy (e.g., Protestantism, Buddhism), **(2) Institutionalise** (e.g., Arya Samaj, Lingayats, Kabir Panth), or **(3) Dissolve**.
- **Cult (New Religious Movement / NRM):** *Deviant + Pluralistically Legitimate* — has no parent religion locally, makes no exclusive monopoly truth-claim, treats followers like **customers** rather than full-time monks ([[thinker:Steve Bruce]]), and focuses on inner therapy, prosperity, or mysticism. Note how **social context** matters: **ISKCON** functions as a Hindu Vaishnava *sect* in India, but began as a counter-cultural *cult/NRM* in 1960s America!

### Classification and Mushrooming of Cults / NRMs Today

To avoid the media stigma of the word "cult," sociologists prefer **New Religious Movements (NRMs)** and **New Age Movements (NAMs)**.

- **Roy Wallis’s Threefold NRM Typology:**
  1. **World-Rejecting NRMs:** Condemn modern society as evil, demand communal living, and often await apocalyptic intervention. [[eg:Jim Jones’s Peoples Temple and the UFO cult Heaven’s Gate, both ending in tragic mass suicide.]]
  2. **World-Affirming NRMs:** Accept modern capitalist success and offer spiritual techniques ("paid enlightenment") to unlock human potential, health, and career peace. [[eg:Transcendental Meditation (Maharishi Mahesh Yogi), Scientology, Isha Inner Engineering, and Art of Living.]]
  3. **World-Accommodating NRMs:** Focus on renewing personal devotional purity while members continue normal secular jobs (e.g., Neo-Pentecostalism, Subud).
- **Stark & Bainbridge’s Commitment Levels:** (1) *Audience Cults* (passive consumers watching TV gurus, astrology podcasts, or reading books with zero formal organisation), (2) *Client Cults* (consultant-patient relationship like tarot, Reiki, or Vaastu therapy), and (3) *Cult Movements* (full religious organisations).
- **Why Are Sects and Cults Mushrooming in Contemporary Society?** (1) **Rapid Social Change & Urban Anomie** ([[thinker:Bryan Wilson]]: wars, economic shocks, and lonely metro migration rupture traditional family ties); (2) **Marginalisation & Theodicy of Disprivilege** ([[thinker:Max Weber]]: Dalits and OBCs joining egalitarian sects like Dera Sachkhand Ballan, Ravidassia, or Satnami); (3) **Spiritual Deprivation & Materialistic Hedonism** ([[thinker:Roy Wallis]]: affluent corporate professionals suffering burnout and existential emptiness); (4) **Disillusionment with Science & Ecological Crisis** ([[thinker:Paul Heelas]]: modern people browsing a "spiritual supermarket"); and (5) **Digital Media & Televangelism** amplifying charismatic gurus globally.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1500 BCE–800 CE',
        title: 'Vedic Naturism to Vedantic Monism',
        text: 'Rigvedic nature personification evolved into Upanishadic monism and Adi Shankara’s Advaita Vedanta (Aham Brahmasmi).',
      },
      {
        year: '6th BCE–16th CE',
        title: 'Heterodox & Bhakti-Sufi Sects in India',
        text: 'Buddhism, Jainism, Lingayat/Virashaiva, Kabir Panth, and Sikhism emerged as egalitarian protest movements against ritual hierarchy.',
      },
      {
        year: '1912',
        title: 'Ernst Troeltsch — Church-Sect Typology',
        text: 'Contrasted the state-aligned universal Church with the small, radical, lower-class protest Sect.',
      },
      {
        year: '1929',
        title: 'H. Richard Niebuhr — Denominationalisation',
        text: 'Showed how sects either institutionalise into mainstream denominations over generations or fade away.',
      },
      {
        year: '1970–1984',
        title: 'Bryan Wilson & Roy Wallis — NRM Typologies',
        text: 'Mapped the 1960s–80s surge of cults into World-Rejecting, World-Affirming, and World-Accommodating New Religious Movements.',
      },
      {
        year: '1996–Present',
        title: 'Paul Heelas & Digital Spiritual Supermarkets',
        text: 'New Age Movements, app-based meditation, wellness gurus, and ecological neo-animism reshape late-modern spirituality.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Parent Church', text: 'Established religion grows ritualistic, hierarchical, or compromised' },
      { label: 'Schism & Protest', text: 'Charismatic leader & marginalised followers break away to form a Sect' },
      { label: 'Path A: Denomination', text: 'Attracts masses & middle-class comfort -> becomes a Denomination' },
      { label: 'Path B: Institutional Sect', text: 'Retains distinct protest identity with formal rules (e.g., Arya Samaj)' },
      { label: 'Path C: Dissolution', text: 'Fails to pass high commitment to next generation and fizzles out' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Religious Sect',
    rightTitle: 'Cult / New Religious Movement (NRM)',
    rows: [
      {
        aspect: 'Origin & Parentage',
        left: 'Breaks away via schism from an existing parent religion to restore purity',
        right: 'No local parent religion; introduces a novel, syncretic, or foreign revelation',
      },
      {
        aspect: 'Truth Claim (Roy Wallis)',
        left: 'Uniquely legitimate — claims exclusive monopoly over ultimate religious truth',
        right: 'Pluralistically legitimate — tolerant of other paths; followers mix and match',
      },
      {
        aspect: 'Membership & Commitment',
        left: 'Closed, exclusive brotherhood demanding total lifestyle obedience and sacrifice',
        right: 'Open customer/client network (Audience or Client cult) with low commitment',
      },
      {
        aspect: 'Social Class Base',
        left: 'Primarily lower/marginalised strata seeking a Theodicy of Disprivilege (Weber)',
        right: 'Often urban middle/affluent classes experiencing spiritual & psychic deprivation',
      },
      {
        aspect: 'Orientation to World',
        left: 'World-opposing — rejects secular corruption and mainstream compromises',
        right: 'Often world-affirming — promises stress relief, wellness, and career success',
      },
      {
        aspect: 'Examples',
        left: 'Digambara/Svetambara, Lingayats, Arya Samaj, Early Protestants, Kabir Panth',
        right: 'Osho/Rajneesh, Scientology, Heaven’s Gate, Transcendental Meditation, Reiki',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Animism',
    meaning:
      'E.B. Tylor’s concept denoting the belief that living beings, inanimate natural objects, and ancestral spirits possess a conscious soul or life-force (anima).',
  },
  {
    kind: 'keyTerm',
    term: 'Monism vs Pluralism',
    meaning:
      'Monism (e.g., Advaita Vedanta) holds that all reality and the divine are one indivisible substance, whereas Pluralism affirms the coexistence of multiple distinct realities and religious truths.',
  },
  {
    kind: 'keyTerm',
    term: 'Theodicy of Disprivilege',
    meaning:
      'Max Weber’s explanation of how egalitarian sects offer spiritual compensation, dignity, and moral superiority to economically or socially marginalised groups.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'New Religious Movements (NRMs)',
    meaning:
      'Value-neutral sociological term for modern sects, cults, and New Age groups classified by Roy Wallis into world-rejecting, world-affirming, and world-accommodating types.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'yogendra-singh',
    quote: 'India’s cultural pluralism is sustained by an organic linkage between the pan-Indian Great Tradition and regional folk Little Traditions.',
    context: 'Explaining how multi-religious and sectarian diversity strengthens rather than fragments Indian civilisation.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2024–2015 PYQ Pattern: Mushrooming of Sects & Cults + Pluralism',
    body: 'Out of 12 PYQs in this topic, 6 ask about Sects and Cults (2024, 2021, 2018x2, 2015) and 4 ask about Cultural/Religious Pluralism in India (2024, 2023, 2020, 2016). For any Sect/Cult question, always draw Roy Wallis’s 2x2 Legitimacy Matrix and cite Weber (Theodicy of Disprivilege), Bryan Wilson (rapid social change), and Paul Heelas (Spiritual Supermarket).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Confusing Monism with Monotheism',
    body: 'Never write that Monism simply means "belief in one God"! Belief in one personal God separate from creation is Monotheism (Islam, Christianity). Monism (Christian von Wolff, Adi Shankara’s Advaita Vedanta: Aham Brahmasmi, Sikhism’s Ik Onkar) means Creator and Creation are fundamentally ONE unified reality without dualism.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Indian Examples for Types of Religious Practices (2017 PYQ)',
    body: 'When UPSC asks about types of religious practices in India, showcase the full spectrum: (1) Tribal Animism (Santhal/Oraon Sarna & ancestor worship), (2) Naturism (Surya/Chhath Puja, Ganga aarti), (3) Totemism (Naga & Gond clan totems), (4) Polytheism & Henotheism (Smarta Panchadevata & Gramadevata folk deities like Mariamman), (5) Philosophical Monism (Advaita), and (6) Syncretic Sects & NRMs (Bhakti-Sufi, Lingayats, Kabir Panth, Radhasoami, Art of Living).',
  },
  {
    kind: 'answerBox',
    intro:
      'Religious practices evolve across a spectrum from nature-embedded tribal beliefs to complex philosophical systems and modern voluntary religious organisations.',
    points: [
      'Elementary beliefs: Animism (Tylor: indwelling spirits) and Naturism (Max Müller: personified forces of nature) persist today in tribal Sarna groves and ecological neo-animism.',
      'Philosophical frameworks: Monism (Advaita’s non-dual unity of Atman and Brahman) contrasts with Dualism (Creator-creation separation) and Henotheism (one truth, many forms).',
      'Cultural & Religious Pluralism: In multi-religious societies like India, pluralism operates as a "salad bowl" of syncretic traditions (Bhakti-Sufi, Articles 25–30) resisting monistic homogenisation.',
      'Organizational typology (Troeltsch, Niebuhr, Wallis): Churches and Denominations represent respectable mainstream bodies, whereas Sects (breakaway protest) and Cults/NRMs (novel client networks) occupy deviant or alternative spaces.',
      'Contemporary NRM boom: Rapid urban anomie (Wilson), marginalisation (Weber), affluent existential emptiness (Wallis), and digital media drive the mushrooming of modern sects and cults.',
    ],
    conclusion:
      'Far from vanishing under modernity, religious practices continuously reorganise into pluralistic, therapeutic, and identity-affirming forms.',
  },
]

export const topic2En: TopicLangContent = {
  summary:
    'Religious practices encompass elementary spirit and nature worship (animism and naturism), metaphysical frameworks (monism, dualism, henotheism, and cultural pluralism), and organisational typologies (church, denomination, sect, and cult/NRMs) thriving amid modern anomie and spiritual markets.',
  mindMap,
  sections,
}