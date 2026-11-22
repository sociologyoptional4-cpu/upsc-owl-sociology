import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 8.3 · Religion in Modern Society',
  center: 'Religion & Modernity',
  subtitle: 'Science • Secularisation • Revivalism • Fundamentalism',
  branches: [
    {
      title: 'Science & Religion Debate',
      color: 'lavender',
      thinkers: ['Ian Barbour', 'Stephen Jay Gould', 'Robert K. Merton', 'Talcott Parsons'],
      points: [
        'Parsons: Science (empirical means) vs Religion (non-empirical means to logical ends)',
        'Barbour 4 Models: Conflict (Dawkins), Independence (Gould NOMA), Dialogue, Integration',
        'Merton Thesis: Puritan ethos & Royal Society fuelled rise of modern science',
        'Ecklund survey & ISRO Tirupati tradition show peaceful coexistence',
      ],
    },
    {
      title: 'Secularisation Thesis',
      color: 'yellow',
      thinkers: ['Bryan Wilson', 'Steve Bruce', 'Karel Dobbelaere', 'M.N. Srinivas'],
      points: [
        'Wilson: process where religious beliefs, practices & institutions lose social significance',
        'Bruce 3 drivers: structural differentiation, societalization & individualism',
        'Dobbelaere 3 levels: Macro (state/law), Meso (internal church), Micro (belief)',
        'Srinivas Indian secularisation & David Martin comparative global trajectories',
      ],
    },
    {
      title: 'Critiques & Secularism',
      color: 'mint',
      thinkers: ['Thomas Luckmann', 'Grace Davie', 'T.N. Madan', 'Rajeev Bhargava'],
      points: [
        'Luckmann Invisible Religion & Davie Believing without Belonging',
        'Herberg internal secularisation of US churches & measurement critiques',
        'Indian Secularism debate: T.N. Madan & Ashis Nandy vs Rajeev Bhargava Principled Distance',
        'Peter Berger recantation: modernity produces pluralism, not godlessness',
      ],
    },
    {
      title: 'Revivalism & Fundamentalism',
      color: 'pink',
      thinkers: ['José Casanova', 'Samuel Huntington', 'Anthony Giddens', 'Steve Bruce'],
      points: [
        'Resacralization & Casanova de-privatization of public religion',
        'Drivers: materialistic hedonism void, political right-wing (Hagia Sophia), digital media',
        'Revivalism (reform/identity renewal) vs Communalism (political antagonism - Bipan Chandra)',
        'Fundamentalism: scriptural literalism vs late-modern risk (Giddens, Madan, Shupe, Bruce)',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u08-02-religion-modern-science.webp',
    alt: 'P1 Unit 8 infographic: Religion, Science & Secularisation — Science, Secularization & Resacralization in Modernity',
    caption: 'Science, Secularization & Resacralization in Modernity (Religion, Science & Secularisation).',
    credit: 'UPSC OWL Studio · Paper 1 Unit 8 Visual 02',
  },
  {
    kind: 'md',
    body: `## Why Did Classical Sociologists Think Religion Would Fade Away?

In pre-modern agrarian societies, humans turned to religion for almost everything: explaining why monsoons failed or epidemics struck, legitimising monarchs, running village schools, and comforting families during bereavement. When the Enlightenment and Industrial Revolution brought modern science, nation-states, and factories, classical founders — **Auguste Comte** (Law of Three Stages), **Karl Marx** (withering of the opiate), and **Max Weber** (rationalisation and *disenchantment of the world*) — predicted that religion would steadily retreat before scientific reason. Yet 21st-century reality proved far more complex, sparking four major sociological debates.

## 1. Science and Religion: Enemies, Strangers, or Partners?

Popular common sense often pits science and religion as mortal enemies. From a strict epistemological standpoint, **Science** is empirical, rational, universal, and built on [[thinker:Robert K. Merton]]’s CUDOS ethos (especially *organised scepticism*), where every claim is open to falsification ([[thinker:Karl Popper]]). **Religion**, by contrast, rests on faith, sacred revelation, and dogma where questioning core scripture is often taboo. [[eg:When Galileo Galilei proved the heliocentric solar system, the medieval Catholic Inquisition persecuted him for contradicting biblical geocentrism.]]

Yet sociologists reject a simplistic war narrative. As [[thinker:Talcott Parsons]] famously clarified, ==Science uses empirical means to pursue logical ends, whereas Religion uses non-empirical means to pursue logical ends==! Science answers *how* the physical universe works (curing disease or launching satellites), but when humans face the limits of empirical control — terminal grief, moral meaning, or unjust suffering — they turn to non-empirical sacred symbols for a rational psychological purpose: restoring emotional equilibrium.

### Ian Barbour’s Four Models of Science and Religion

In *When Science Meets Religion* (2000), physicist-theologian [[thinker:Ian Barbour]] (supported by [[thinker:John Polkinghorne]]) mapped four distinct relationships between science and religion:

| Barbour Model | Core Sociological Proposition | Key Thinkers & Proponents | Empirical / Historical Illustration |
| --- | --- | --- | --- |
| 1. Conflict | Zero-sum war; science advances only as religious dogma retreats | Richard Dawkins, Peter Atkins, Auguste Comte | Galileo trial; Creationism vs Darwinian evolution |
| 2. Independence | Separate domains: Science = "how" (facts), Religion = "why" (values) | Stephen Jay Gould (NOMA), Talcott Parsons | Surgeon operating in ICU while family prays for strength |
| 3. Dialogue | Constructive mutual respect across boundary questions of origin & ethics | Alvin Plantinga, Faraday Institute | Bioethics dialogues on cloning, AI, and climate stewardship |
| 4. Integration | Unified search for truth; religious ethos directly nurtured modern science | Robert K. Merton (Merton Thesis), L. Principe | Puritan Protestants founding UK Royal Society; Ramanujan & ISRO |

- **Stephen Jay Gould’s NOMA:** Under the Independence model, [[thinker:Stephen Jay Gould]] coined ==Non-Overlapping Magisteria (NOMA)== — science covers the empirical rock of ages, while religion covers the moral ages of rocks.
- **The Merton Thesis & Empirical Coexistence:** In *Science, Technology and Society in Seventeenth Century England* (1938), [[thinker:Robert K. Merton]] proved that **Puritan Protestantism actively birthed modern experimental science** because studying nature’s laws was seen as glorifying God’s orderly creation (the overwhelming majority of early Royal Society fellows were Protestants). Moreover, [[thinker:Elaine Howard Ecklund]]’s survey found 76% of American scientists identify with a religious tradition, and over 90% of 20th-century Nobel laureates held religious affiliations. [[eg:In India, ancient sages like Aryabhata, Sushruta, and Charaka fused sacred philosophy with mathematics and surgery; mathematician Srinivasa Ramanujan credited Goddess Namagiri for equations; and ISRO scientists offer miniature satellite models at Tirupati before rocket launches.]]

## 2. The Secularisation Thesis: Dimensions, Drivers, and Global Trends

In sociology, **Secularisation** is a *social process* (distinct from **Secularism**, which is a *political-constitutional ideology* separating state and church). [[thinker:Bryan Wilson]] (1966) defined secularisation as ==the process whereby religious thinking, practice, and institutions lose their social significance==.

### Steve Bruce’s Three Drivers & Karel Dobbelaere’s Three Levels

Why does modernisation erode traditional religious dominance? [[thinker:Steve Bruce]] identified three structural engines:

1. **Structural Differentiation (Disengagement):** Specialised secular institutions (constitutional courts, state schools, hospitals, welfare agencies) take over functions once monopolised by the Church.
2. **Societalization:** Tight-knit village communities (*Gemeinschaft*) centred on the local parish or temple dissolve into anonymous bureaucratic nation-states (*Gesellschaft*). [[eg:Where a child’s birth once centred on a village priest’s Namkaran ritual, modern hospital births immediately feed into Municipal Corporation digital birth certificates.]]
3. **Individualism & Pluralism:** Competing faiths living side by side shatter any single religion’s cognitive monopoly over truth ([[thinker:Peter Berger]]).

To measure secularisation systematically, [[thinker:Karel Dobbelaere]] separated three analytical levels:

- **Macro (Societal) Secularisation:** Constitutional wall of separation and withdrawal of religion from politics, law, economy, and science.
- **Meso (Organisational) Secularisation:** Internal secularisation of religious bodies themselves ([[thinker:Will Herberg]]). To keep audiences, churches and gurus drop stern other-worldly theology and offer secular self-help, fitness, or charity. [[eg:Baba Ramdev blending ascetic saffron identity with yoga wellness and FMCG consumer retail, or five-star Indian weddings where Bollywood sangeet and catering marginalise the actual sacred pheras.]]
- **Micro (Individual) Secularisation:** Declining church attendance (Eurobarometer shows 27%–40% non-believers across Germany, Sweden, and France; Pew notes ~1.1 billion "nones" globally).

### M.N. Srinivas on India & David Martin’s Comparative Critique

In *Social Change in Modern India* (1966), [[thinker:M.N. Srinivas]] defined Indian secularisation as the process whereby ==what was previously regarded as religious ceases to be such==, driven by modern education, urbanisation, caste-free occupations, reform movements (Phule, Periyar, [[thinker:B.R. Ambedkar]]), and legal bans on untouchability and Sati. Srinivas noted that **Hinduism is structurally more susceptible to everyday ritual secularisation** (e.g., shortening purity-pollution rules or commercialising Diwali into card parties and retail sales) because it lacks a single papal church, single closed rule-book, or mandatory childhood madrasa/catechism training.

Globally, [[thinker:David Martin]] (*A General Theory of Secularization*) rejected a one-size-fits-all trend: France exhibits rigid anti-clerical *laïcité*; Western Europe shows empty churches; the USA combines high modernisation with vibrant church attendance and civil religion ("In God We Trust"); Latin America sees Pentecostal and NRM growth; and post-Soviet Eastern Europe witnessed a sharp religious rebound.

### Five Major Critiques of the Secularisation Thesis

1. **Measurement Flaw:** No pre-modern baseline survey exists; medieval Europeans often attended church for social status rather than deep inner piety.
2. **Privatisation & Invisible Religion ([[thinker:Thomas Luckmann]]):** Religion has not died; it merely moved from public bureaucracy into private household spirituality (*The Invisible Religion*).
3. **Believing Without Belonging ([[thinker:Grace Davie]]):** Millions retain personal faith in God or karma without attending weekly institutional churches (and conversely, many practice *belonging without believing* for community networking).
4. **Problematising Indian Secularism ([[thinker:T.N. Madan]] & [[thinker:Ashis Nandy]] vs [[thinker:Rajeev Bhargava]]):** Madan and Nandy argued that importing Western church-state separation into South Asia — where religions are *totalising ways of life* — alienates ordinary believers and fuels fundamentalist backlash, urging retrieval of indigenous folk tolerance. Countering them, **Rajeev Bhargava** defended Indian constitutional secularism as ==Principled Distance== (Articles 25–30): the state is neither theocratic nor blindly indifferent, intervening selectively to abolish social evils (untouchability, instant Triple Talaq) while protecting minority autonomy.

## 3. Religious Revivalism, Resacralization, and Fundamentalism

Since the late 1970s, the global public sphere has witnessed ==Resacralization== (religious revivalism) — what [[thinker:José Casanova]] (*Public Religions in the Modern World*, 1994) famously termed the **de-privatization of religion**, where faith refuses to stay locked in private bedrooms and re-enters politics, civil society, and identity movements.

- **Key Drivers of Contemporary Revivalism:** (1) **Existential Void of Materialistic Hedonism** (affluent populations seeking Maslow’s self-actualisation through Eastern mysticism, ISKCON, or Osho); (2) **Geopolitics & Clash of Civilizations** ([[thinker:Samuel Huntington]] countering Fukuyama: post-Cold War identity realigns along religious civilisational fault-lines, fuelled by 1970s petrodollar Islamic revival and Christian evangelicalism); (3) **Right-Wing Political Mobilisation** [[eg:Turkey’s AKP regime under Erdogan reconverting the 6th-century Hagia Sophia from Atatürk’s secular museum back into a mosque in 2020 — critiqued by sociologist Karen Barkey — or temple-corridor revival politics in India]]; and (4) **Technology & Mass Pilgrimage** (televangelists, online *darshan*, helicopters and Vande Bharat trains swelling the 2019 Prayagraj Kumbh Mela to 240 million visitors and Iraq’s Arba'een to 25 million).

### Religious Revivalism vs Communalism vs Fundamentalism

In Indian sociology, candidates must sharply distinguish **Religious Revivalism** from **Communalism** ([[thinker:Bipan Chandra]], [[thinker:T.K. Oommen]]). **Revivalism** looks *inward* to rejuvenate a community’s forgotten scriptural pride, purity, or cultural self-confidence (e.g., 19th-century Arya Samaj’s *"Back to the Vedas"*, Swami Vivekananda’s Vedantic renaissance, or the Deoband movement). **Communalism**, by contrast, is a modern political ideology that instrumentalises religious identity *outward* against an "enemy" community, claiming that followers of different faiths have mutually hostile secular, economic, and political interests!

Finally, **Religious Fundamentalism** denotes a militant reaction against secular modernity that demands a return to the "fundamentals" via **strict scriptural literalism** (treating sacred texts as inerrant), **exclusivism** (monopoly over truth), rejection of pluralism/science (clashing with evolutionary biology and liberal co-religionists), and patriarchal control over women’s bodies.

- **Four Sociological Theories of Fundamentalism:**
  1. **[[thinker:Anthony Giddens]] (Late Modernity & Cosmopolitan Risk):** In a "runaway world" of global risk, fluid gender norms, and moral uncertainty, fundamentalism acts as **"tradition defended in a traditional way"** — offering psychological certainty against cosmopolitan anxiety.
  2. **[[thinker:T.N. Madan]] (Dialectical Product of Modernity):** Fundamentalism did not exist in traditional societies; it is a *modern defensive counter-reaction* born when aggressive secularisation tries to push religion out of public life.
  3. **[[thinker:Anson Shupe]] (Anti-Globalisation Backlash):** Resistance against Western/American cultural homogenisation ("McDonaldization").
  4. **[[thinker:Steve Bruce]] (Multifactorial Model):** Modernisation strain turns into active fundamentalism only when combined with **(a) a single centralized sacred text** (making Abrahamic faiths structurally more prone to literalist consensus than decentralized Hinduism, though Hindutva attempts semitization), **(b) a common external enemy** (e.g., US intervention uniting the Taliban), **(c) a pool of marginalized youth recruits**, and **(d) political patronage / theocratic ambition**.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1633',
        title: 'Galileo Trial vs Church Dogma',
        text: 'Symbolised the early Conflict Model between empirical heliocentric science and literalist ecclesiastical authority.',
      },
      {
        year: '1938',
        title: 'Robert K. Merton — The Merton Thesis',
        text: 'Demonstrated that 17th-century Puritan Protestant ethos directly stimulated experimental science and the UK Royal Society.',
      },
      {
        year: '1966–1967',
        title: 'Bryan Wilson, Srinivas & Luckmann',
        text: 'Wilson framed classical secularisation; Srinivas analysed Indian ritual secularisation; Luckmann countered with Invisible Religion.',
      },
      {
        year: '1978–1979',
        title: 'David Martin & Global Islamic/Evangelical Wave',
        text: 'Martin rejected universal secularisation just as the 1979 Iranian Revolution and US Christian Right sparked global resacralization.',
      },
      {
        year: '1994–1999',
        title: 'Casanova, Huntington & Berger’s Recantation',
        text: 'Casanova’s de-privatization of public religion, Huntington’s Clash of Civilizations, and Berger’s shift to desecularization/pluralism.',
      },
      {
        year: '2019–2025',
        title: 'Mega-Pilgrimages, Digital Faith & Political Revival',
        text: '240M at Prayagraj Kumbh, Hagia Sophia reconversion (2020), and AI/app-driven religious revival reshape late modernity.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Modernisation', text: 'Science, factories & urban migration disrupt traditional village faith' },
      { label: 'Differentiation', text: 'State law, schools & hospitals detach from Church control (Macro decline)' },
      { label: 'Privatisation', text: 'Faith retreats into invisible home beliefs & spiritual supermarkets' },
      { label: 'Modernity Crisis', text: 'Materialistic emptiness, global risk & cultural homogenisation spark anxiety' },
      { label: 'Resacralization', text: 'De-privatized revivalism, identity politics & fundamentalism surge back' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Religious Revivalism',
    rightTitle: 'Communalism & Fundamentalism',
    rows: [
      {
        aspect: 'Primary Orientation',
        left: 'Inward-looking movement to rejuvenate spiritual pride, purity, and cultural heritage',
        right: 'Outward-looking political antagonism (Communalism) or literalist scriptural militancy (Fundamentalism)',
      },
      {
        aspect: 'Attitude to Reform',
        left: 'Often critiques internal social evils (caste, idol superstition) using golden-age scripture',
        right: 'Rejects liberal internal reform; enforces rigid patriarchal and orthodox conformity',
      },
      {
        aspect: 'View of Other Faiths',
        left: 'Focuses on community self-renewal; can coexist within a pluralistic nation-state',
        right: 'Treats other communities as existential enemies or false heretics; rejects pluralism',
      },
      {
        aspect: 'Relationship to State',
        left: 'Seeks cultural autonomy, public visibility, or civil society moral voice (Casanova)',
        right: 'Seeks majoritarian political capture, separatist mobilization, or a theocratic state',
      },
      {
        aspect: 'Indian & Global Examples',
        left: 'Arya Samaj, Swami Vivekananda’s Vedanta, Deoband learning, Singh Sabha movement',
        right: 'Partition communal riots (Bipan Chandra); Taliban, ISIS, or violent vigilante extremism',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Secularisation',
    meaning:
      'Defined by Bryan Wilson and M.N. Srinivas as the sociological process whereby religious beliefs, practices, and institutions lose their overarching social significance and differentiate from secular spheres.',
    thinkerSlug: 'mn-srinivas',
  },
  {
    kind: 'keyTerm',
    term: 'Non-Overlapping Magisteria (NOMA)',
    meaning:
      'Stephen Jay Gould’s independence model arguing that science (empirical facts of nature) and religion (ultimate moral meaning and values) occupy separate domains that need not clash.',
  },
  {
    kind: 'keyTerm',
    term: 'Resacralization & De-Privatization',
    meaning:
      'The contemporary resurgence of religious vitality (Stark) and return of religion from private households into public political and civil debates (José Casanova).',
  },
  {
    kind: 'keyTerm',
    term: 'Religious Fundamentalism',
    meaning:
      'A defensive modern reaction against secularisation and globalisation (Giddens, Madan, Bruce) marked by scriptural literalism, anti-pluralist exclusivism, and patriarchal moral policing.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'robert-k-merton',
    quote: 'The Puritan ethos constituted an important element in the enhanced cultivation of science in seventeenth-century England.',
    context: 'Science, Technology and Society in Seventeenth Century England (1938) — the Merton Thesis linking religious values to modern science.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'mn-srinivas',
    quote: 'The term secularization implies that what was previously regarded as religious is now ceasing to be such, and it also implies a process of differentiation.',
    context: 'Social Change in Modern India (1966) — explaining how ritual pollution and traditional religious rules recede in modern Indian life.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2025–2013 PYQ Pattern: Science vs Religion (3x) & Secularisation (5x)',
    body: 'Notice how UPSC asked "Is religion antithetical to science?" (2013), Talcott Parsons’s quote on empirical vs non-empirical means (2013), and "Nature of relationship between science and religion in modern society" (2025)! Always anchor Science-Religion answers in (1) Parsons’s empirical vs non-empirical means to logical ends, (2) Ian Barbour’s 4 Models (Conflict, Independence/NOMA, Dialogue, Integration), (3) Robert K. Merton’s Puritan-Science thesis, and (4) Indian examples (ISRO at Tirupati, Ramanujan, Ayurveda/Yoga).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Mixing Up Secularisation with Secularism',
    body: 'Never use Secularisation and Secularism interchangeably! Secularisation (Bryan Wilson, Steve Bruce, Karel Dobbelaere, M.N. Srinivas) is a bottom-up sociological process where religion loses control over society. Secularism (T.N. Madan, Ashis Nandy, Rajeev Bhargava’s Principled Distance) is a political-constitutional doctrine governing how the nation-state relates to religious communities.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Karel Dobbelaere’s 3-Level Framework for Any Secularisation Answer',
    body: 'Whether UPSC asks about global trends of secularisation (2022), dimensions of secularisation (2015), or religion in public and personal spheres in India (2023), structure your body paragraphs across Dobbelaere’s 3 levels: Macro (State/Law disengagement), Meso (Organizational secularisation — Will Herberg, Baba Ramdev, commercialised festivals), and Micro (Individual privatised belief — Luckmann’s Invisible Religion & Grace Davie’s Believing without Belonging).',
  },
  {
    kind: 'answerBox',
    intro:
      'Far from following a simple linear disappearance, religion in modern society navigates a dynamic dialectic between scientific rationalisation, institutional secularisation, and powerful public revivalism.',
    points: [
      'Science & Religion beyond conflict: While epistemologically distinct, Ian Barbour’s four models, Gould’s NOMA, Parsons’s non-empirical means to logical ends, and Merton’s Puritan-Science thesis show deep complementarity.',
      'Dimensions of Secularisation: Driven by structural differentiation, societalization, and individualism (Steve Bruce), secularisation operates unevenly across Macro, Meso, and Micro levels (Karel Dobbelaere).',
      'Global & Indian trajectories (David Martin, M.N. Srinivas): Western Europe secularised rapidly, whereas the USA retained civic religiosity and India experienced ritual differentiation alongside constitutional Principled Distance (Rajeev Bhargava).',
      'Resacralization & Revivalism (José Casanova, Peter Berger): Disillusionment with materialistic hedonism, digital televangelism, and identity politics have fuelled de-privatized public religion and mass pilgrimages.',
      'Fundamentalism as modern backlash (Giddens, Madan, Bruce): Scriptural literalism and militant exclusivism arise not as ancient relics, but as defensive modern reactions against cosmopolitan uncertainty and globalisation.',
    ],
    conclusion:
      'Ultimately, modernity does not destroy the sacred; it transforms religion from an all-encompassing medieval authority into a pluralistic, contested force across private consciousness and public politics.',
  },
]

export const topic3En: TopicLangContent = {
  summary:
    'In modern society, religion interacts with science beyond simple conflict (Barbour’s four models, Merton thesis), undergoes multi-level secularisation (Wilson, Bruce, Dobbelaere, Srinivas), and rebounds through resacralization, public revivalism (Casanova), and defensive fundamentalism (Giddens, Madan).',
  mindMap,
  sections,
}