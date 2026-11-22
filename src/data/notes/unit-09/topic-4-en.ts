import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 9.4 · Patriarchy and Sexual Division of Labour',
  center: 'Patriarchy & Division of Labour',
  subtitle: 'Walby’s 6 Structures • Murdock vs Oakley • Kandiyoti & Dube • Workplace, Tech & Development',
  branches: [
    {
      title: 'Theorising Patriarchy',
      color: 'lavender',
      thinkers: ['Sylvia Walby', 'Carol Hanisch', 'Deniz Kandiyoti', 'Kamla Bhasin'],
      points: [
        'Walby: 6 structures — Household production, Paid work, State, Culture, Sexuality, Violence',
        'Shift from Private Patriarchy (home exclusion) to Public Patriarchy (workplace/state subordination)',
        'Carol Hanisch ("The personal is political") & Michelle Miller (sexist humour normalises misogyny)',
        'Deniz Kandiyoti: "Patriarchal Bargain" (mother-in-law / women enforcing rules for short-term security)',
      ],
    },
    {
      title: 'Sexual Division of Labour',
      color: 'yellow',
      thinkers: ['G.P. Murdock', 'Talcott Parsons', 'Ann Oakley', 'Veronica Beechey'],
      points: [
        'Murdock (224 societies): biological strength + pregnancy/lactation make division universal & efficient',
        'Ann Oakley rebuttal: socially constructed! 38 societies share cooking, 14 share heavy lumbering',
        'Oakley: unpaid mother-housewife boredom & pink-collar extensions (nurse, primary teacher, receptionist)',
        'Veronica Beechey: women as "Reserve Army of Labour" & Arlie Hochschild’s "Second Shift" double burden',
      ],
    },
    {
      title: 'Indian Socialisation & Caste',
      color: 'mint',
      thinkers: ['Leela Dube', 'Uma Chakravarti', 'B.R. Ambedkar', 'Gopal Guru'],
      points: [
        'Leela Dube: Seed-Earth Analogy, Paraya Dhan, earthen vs brass pot metaphor, Annapurna self-sacrifice',
        'Uma Chakravarti ("Brahminical Patriarchy") & B.R. Ambedkar (endogamy via Sati, widowhood, child marriage)',
        'Subhadra Channa ("Devi-Dasi dichotomy"), Simone de Beauvoir ("Religion is the opium of women")',
        'Gopal Guru ("Dalit Women Talk Differently") & NFHS-5 (~29–31% spousal violence; justification rates)',
      ],
    },
    {
      title: 'Workplace, Tech & Development',
      color: 'pink',
      thinkers: ['Michelle Ryan', 'Elizabeth Stanko', 'Lisa Adkins', 'Judy Wajcman'],
      points: [
        'Workplace: Glass Ceiling, Michelle Ryan’s "Glass Cliff", ILO Motherhood Penalty & 23% LFPR gap (50% S. Asia)',
        'Elizabeth Stanko (sexual harassment as territorial control) & Lisa Adkins (sexualisation of work)',
        'WEF Global Gender Gap 2023: 68.4% closed (131 yrs to parity); India rank 127/146; UN 1980 (66% work, 1% property)',
        'Tech & New Media: GSMA 2023 (Indian women 40% less mobile internet), Khap bans, ART/Sex-selection vs WFH agency',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u09-01-family-lineage-patriarchy.webp',
    alt: 'P1 Unit 9 infographic: Family, Lineage & Patriarchy — Classical Functionalism vs Feminist & Lineage Perspectives',
    caption:
      'While classical functionalists viewed the gendered division of labour as a natural biological partnership, feminist sociologists revealed how six interlocking structures of patriarchy sustain unpaid domestic burdens and public inequality.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 9 Visual 01',
  },
  {
    kind: 'md',
    body: `## What Are Patriarchy and the Sexual Division of Labour?

Literally derived from the Greek *patri* (father) and *archy* (rule), ==Patriarchy== originally meant the absolute rule of the male head inside the household, but in contemporary sociology it denotes systemic male dominance across society. In her landmark book *Theorizing Patriarchy* (1990), sociologist [[thinker:Sylvia Walby]] defined patriarchy as **"a framework of institutionalised structures and daily practices wherein men dominate and control women."** Closely tied to it is the ==Sexual Division of Labour== (or gender-based division of labour): the systematic allocation of unpaid caregiving and housework to women in the private sphere while assigning paid breadwinning, property control, and public authority to men.

How massive is this global asymmetry? A famous **1980 United Nations Report** revealed that women constitute **50% of the world’s population, perform nearly two-thirds (66%) of the world’s work hours, receive only one-tenth (10%) of global income, and own less than 1% of world property** (in India, women own only ~22% of properties and perform over 3x to 7x men’s unpaid domestic work). As late Indian feminist [[thinker:Kamla Bhasin]] emphasised, the goal of feminism is not to replace patriarchy with matriarchy, but to replace hierarchy with **gender equality**.

## 1. Sylvia Walby’s Six Structures of Patriarchy & Interpersonal Manifestations

Why doesn’t patriarchy disappear when women get educated or start earning? [[thinker:Sylvia Walby]] explained that patriarchy is not a single wall — it operates through **six semi-autonomous, interlocking structures** as it shifts from **Private Patriarchy** (confining women inside the home under a father/husband) to **Public Patriarchy** (allowing women into schools and offices while subordinating them collectively):

- **1. Household Production:** Men expropriate women’s unpaid domestic labour (cooking, cleaning, childcare, eldercare) without wages, holidays, or promotion.
- **2. Paid Work:** Women are channelled into lower-paid, low-prestige **pink-collar jobs** that [[thinker:Ann Oakley]] noted are mere extensions of domestic caregiving — nursing (caring for the sick), primary school teaching (tending toddlers), and receptionists (welcoming guests).
- **3. The Patriarchal State:** Dominated by men in parliament, bureaucracy, and courts, the State leaves pro-women laws poorly enforced.
- **4. Culture & Religion:** Mainstream media, religion, and pornography define femininity through male sexual gaze. As [[thinker:Karen Armstrong]] and [[thinker:Simone de Beauvoir]] (*The Second Sex* — **"Religion is the opium of women"**) showed, male gods, male priests, menstrual taboos, and fasts like *Karwa Chauth* pacify women into accepting subordination as divine destiny, creating what [[thinker:Subhadra Channa]] calls India’s **Devi-Dasi dichotomy** (worshipped as goddesses on pedestals, treated as servants in daily life).
- **5. Sexuality:** Compulsory heterosexuality and harsh **sexual double standards** celebrate sexually active men as "studs" while shaming expressive women.
- **6. Male Violence:** Systemic spousal abuse and harassment act as raw power enforcement. Globally (UN Women) and in India (**NFHS-5**), **nearly 1 in 3 women (~29%–31%) face spousal violence**, and over 77%–84% of respondents in several states even justify wife-beating for "neglecting in-laws or going out without permission"!

In everyday interpersonal relations, [[thinker:Carol Hanisch]]’s famous slogan =="The personal is political"== exposes how private bedroom or kitchen abuse is a political power act, while [[thinker:Michelle B. Miller]] shows how **sexist humour** (WhatsApp "nagging wife" jokes, "Alia Bhatt / dumb blonde" memes, Bollywood *3 Idiots* speech tropes, and female-targeted *gaalis*) normalises misogyny.

## 2. Is the Sexual Division of Labour Biological or Social? (Murdock vs Oakley)

Why do men drive trucks and head corporate boards while women cook and change diapers? Two classic sociological camps clash head-on:

- **The Functionalist / Biogrammar View ([[thinker:G.P. Murdock]], [[thinker:Talcott Parsons]], [[thinker:Lionel Tiger]] & [[thinker:Robin Fox]]):** Studying **224 societies**, Murdock argued the sexual division of labour is universal, practical, and rooted in biological anatomy — men’s superior muscular strength suits hunting, warfare, lumbering, and distant trade, whereas women’s womb, 9-month pregnancy, and lactation tether them to home-base tasks (cooking, water fetching, child-rearing). Parsons added that the female **expressive role** and male **instrumental role** complement each other harmoniously.
- **The Feminist Critique ([[thinker:Ann Oakley]], [[thinker:Shulamith Firestone]], [[thinker:Sherry Ortner]]):** In *Sex, Gender and Society* (1972), Ann Oakley demolished Murdock’s biological determinism using Murdock’s own cross-cultural data! She proved that in **38 societies cooking is shared equally by both sexes**, in **14 societies women perform heavy lumbering**, and women serve actively in armed forces (Israel, Russia, China). [[eg:Walk past any Indian highway construction site or rural Rajasthan village — working-class women carry heavy head-loads of bricks and haul water pitchers for miles, proving the "delicate female body" is an upper-caste patriarchal myth!]] Biology explains who gives birth, never why housework is unpaid and accorded low prestige. Radical feminist [[thinker:Shulamith Firestone]] (*The Dialectic of Sex*) went further, arguing that biological pregnancy/nursing created the very first human inequality ("power psychology"), so women must seize the **means of reproduction** via artificial wombs/IVF to build a gender-free society.

| Analytical Dimension | G.P. Murdock & T. Parsons (Functionalist) | Ann Oakley & Feminists (Critical) |
| --- | --- | --- |
| Root Cause of Division | Biological anatomy (muscle mass vs pregnancy/lactation) | Cultural conditioning, gender socialisation & patriarchy |
| Universality Claim | Universal across 224 societies as an efficient adaptation | Not universal: 38 societies share cooking; 14 share lumbering |
| View of Domestic Role | Natural "expressive role" vital for family equilibrium | Alienating unpaid "mother-housewife role" (public health crisis #1) |
| Paid Workforce Link | Complementary male breadwinner & female homemaker | Dual burden / "Second Shift" (Hochschild) & reserve army (Beechey) |

## 3. Patriarchal Bargain, Child Socialisation & Brahminical Patriarchy in India

How does patriarchy reproduce itself inside Indian families from childhood to marriage, and why do women sometimes enforce it on other women?

- **The "Patriarchal Bargain" ([[thinker:Deniz Kandiyoti]], 1988):** Turkish feminist Deniz Kandiyoti coined ==Patriarchal Bargain== to explain how women living under classic patriarchy strategically conform to and enforce patriarchal norms on younger women to maximise their own short-term security, prestige, and survival within a system they cannot overthrow alone. [[eg:In many Indian joint households, a mother-in-law (*Saas*) who suffered as a young bride pressures her daughter-in-law (*Bahu*) for a male grandson or polices her daughter’s clothing because bearing a son and raising a "modest daughter" elevates the older woman’s own status — even though women collectively lose!]]
- **Child Socialisation & the Seed-Earth Analogy ([[thinker:Leela Dube]], [[thinker:Kamla Bhasin]]):** In *Women and Kinship*, Leela Dube showed how patrilineal India socialises girls from birth via the **Seed-Earth Analogy** (man = active seed/owner; woman = passive field). Girls are raised as temporary **Paraya Dhan** (*"daughter and ghee stink if kept too long"*), given dolls and kitchen sets ([[thinker:Ann Oakley]]), fed after brothers under the self-sacrificing **Annapurna ideal**, and disciplined at puberty (celebrated publicly in South India for motherhood readiness; kept hushed with mobility curbs in North India). Dube highlighted the **Earthen Pot vs Brass Pot metaphor**: a girl’s honour is like an earthen pot (*mitti ka bartan* — once cracked or defiled, ruined forever), whereas a boy is like a brass pot (*peetal ka bartan* — easily washed and reused). In Maharashtra’s Satara district, unwanted third or fourth daughters were literally named **Nakosi** ("Unwanted"), contributing to what [[thinker:Rita Banerji]] calls South Asia’s **"50 Million Missing Women"** genocide.
- **Brahminical Patriarchy & Intersectionality ([[thinker:Uma Chakravarti]], [[thinker:B.R. Ambedkar]], [[thinker:Gopal Guru]]):** Uma Chakravarti coined ==Brahminical Patriarchy== to show how ancient texts (*Manusmriti*) linked caste purity directly to strict control over upper-caste women’s sexuality (*Pativrata*, *Kanyadan*). [[thinker:B.R. Ambedkar]] earlier proved that **caste endogamy** was preserved by eliminating "surplus" women/men through **Sati, enforced widowhood, and child marriage**. Meanwhile, [[thinker:Gopal Guru]] (*"Dalit Women Talk Differently"*) and [[thinker:Maitreyi Chaudhuri]] remind us that Dalit and working-class women face triple oppression (caste, class, gender) that Savarna feminism and MNC "Fair & Lovely / scooty" consumer ads fail to address.

## 4. Changing Patriarchy at Home, Workplace, Development & New Media

Is women’s formal employment, higher education, and technology eradicating patriarchy today? The sociological answer is a **paradox of partial empowerment and reconfigured patriarchy**:

- **Domestic Division of Labour & Formal Employment (2025 & 2021 PYQs):** Even as educated women enter formal jobs and nuclear couples move toward [[thinker:Michael Young]] and [[thinker:Peter Willmott]]’s **Symmetrical Family** (aided by paternity leave, kitchen appliances, and rare "house husbands" in states like Tamil Nadu), domestic work remains deeply unequal. Working women suffer [[thinker:Arlie Hochschild]]’s =="Second Shift" (Dual Burden)== — working a full corporate shift outside and returning to do 80% of cooking and childcare while husbands treat 20 minutes of babysitting as a "brag-worthy favour," or outsource care to poorly paid lower-caste female domestic maids! Moreover, women’s employment is often **"conditional employment"** ("allowed" by husbands/in-laws only if household duties do not suffer), and educated households still exhibit high dowry and sex-selective practices.
- **Workplace Patriarchy & Social Development (2021 & 2020 PYQs):** Development and gender parity are mutually reinforcing, yet **economic development does not automatically end patriarchy** (e.g., highly developed **Japan** and **Singapore** still exhibit stark corporate board gaps and commuter harassment). According to the **ILO**, the global gender gap in Labour Force Participation Rate (LFPR) is **23% globally and ~50% in South Asia**, worsened by the **Motherhood Penalty** (mothers losing promotions). Under capitalism, [[thinker:Veronica Beechey]] shows women act as a cheap, disposable ==Reserve Army of Labour==. At the top, women hit the invisible **Glass Ceiling** ("boys’ club", resistance to female bosses), [[thinker:Michelle Ryan]]’s ==Glass Cliff== (promoting women to top leadership only during severe crisis so failure can be blamed on them), [[thinker:Elizabeth Stanko]]’s **workplace sexual harassment** ("unwanted sexual attention" used by men to mark the office as male territory; UK data showed 72% experienced it, only 33% reported), and [[thinker:Lisa Adkins]]’s **sexualisation of women’s work** (hiring receptionists, hostesses, or auto-expo models for aesthetic appeal). In the **WEF Global Gender Gap Report 2023** (146 countries), the world has closed **68.4% of the gap** (taking **131 years** to reach full parity: Health 96%, Education 95.2%, Economic 60.1%, Political 22.1%), with **Iceland #1** and **India at 127/146** (behind Bangladesh at 59 and Sri Lanka at 115).
- **Technology, Reproductive Rights & ‘Masculine’ New Media (2018 & 2014 PYQs):** Technology is a double-edged sword. While IT/BPO work-from-home, household appliances, contraceptives, and legal abortion (**Joshua Angrist** showed abortion rights boost female education and lifetime earnings, whereas overturning *Roe v. Wade* creates **Jennifer Barber**’s **reproductive coercion**) empower women, technology also enables **pre-natal sex determination (ultrasound female foeticide)** and commercial surrogacy exploitation (>70% of Indian surrogates in Delhi/Mumbai surveys were poor housemaids, critiqued by **Janice Raymond** and **Sarojini & Das**, though **Amrita Pande** noted economic agency before the **Surrogacy Regulation Act 2021** banned commercial surrogacy). Finally, feminist technoscience scholars ([[thinker:Judy Wajcman]], [[thinker:Laura Mulvey]], [[thinker:Donna Haraway]]) argue that **New Media is structurally masculine**: according to the **GSMA Mobile Gender Gap Report 2023**, **Indian women are 40% less likely than men to use mobile internet** (the household smartphone goes to the *marad*, and rural **Khap Panchayats** even ban girls from carrying phones), while male-coded algorithms, cyber-stalking, non-consensual deepfakes, and online misogynistic trolling reinforce offline patriarchal hierarchies!`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: '1. Household Production', text: 'Unpaid cooking, cleaning & childcare expropriated inside the home (Walby)' },
      { label: '2. Paid Work & Reserve Army', text: 'Pink-collar jobs (Oakley), Motherhood Penalty, Glass Ceiling & Glass Cliff (Ryan)' },
      { label: '3. Patriarchal State & Law', text: 'Male-dominated polity & weak enforcement of equal pay / anti-dowry laws' },
      { label: '4. Culture, Sexuality & Violence', text: 'Double standards, religious opium (Beauvoir), sexist humour & ~30% spousal abuse' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'G.P. Murdock & T. Parsons (Functionalist View)',
    rightTitle: 'Ann Oakley & Sylvia Walby (Feminist Critique)',
    rows: [
      {
        aspect: 'Origin of Division of Labour',
        left: 'Natural biological differences (male muscle vs female womb/lactation)',
        right: 'Socially constructed gender conditioning and patriarchal power',
      },
      {
        aspect: 'Cross-Cultural Evidence',
        left: 'Claimed universal efficiency across 224 global societies',
        right: '38 societies share cooking; 14 share lumbering; Indian female construction workers',
      },
      {
        aspect: 'Domestic Housewife Role',
        left: 'Vital "expressive role" providing warmth and personality stabilisation',
        right: 'Unpaid, monotonous alienation ("mother-housewife public health crisis #1")',
      },
      {
        aspect: 'Workplace & Wage Labour',
        left: 'Male instrumental breadwinner naturally suits competitive market',
        right: 'Women exploited as "Reserve Army of Labour" (Beechey) with "Second Shift" burden',
      },
      {
        aspect: 'Path to Social Change',
        left: 'Disrupting complementary roles threatens family equilibrium',
        right: 'Dismantling private/public patriarchy toward Kamla Bhasin’s egalitarian equality',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Six Structures of Patriarchy (Sylvia Walby)',
    meaning:
      'In "Theorizing Patriarchy" (1990), Walby identified six interlocking structures sustaining male dominance: Household Production, Paid Work, the State, Culture, Sexuality, and Male Violence.',
  },
  {
    kind: 'keyTerm',
    term: 'Patriarchal Bargain (Deniz Kandiyoti)',
    meaning:
      'A strategic accommodation where women in patriarchal societies conform to and enforce patriarchal norms on younger women (e.g., mother-in-law over daughter-in-law) to secure individual prestige and protection.',
  },
  {
    kind: 'keyTerm',
    term: 'Glass Ceiling & Glass Cliff (Michelle Ryan)',
    meaning:
      'The Glass Ceiling is an invisible barrier blocking women from top corporate posts; the Glass Cliff (Michelle Ryan) is promoting women to top leadership only during severe organisational crisis so they take the blame for failure.',
  },
  {
    kind: 'keyTerm',
    term: 'Brahminical Patriarchy (Uma Chakravarti)',
    meaning:
      'The structural linkage in Indian society whereby caste hierarchy and endogamy are maintained through strict ritual, ideological (Pativrata), and legal control over women’s sexuality.',
  },
  {
    kind: 'keyTerm',
    term: 'Reserve Army of Labour (Veronica Beechey)',
    meaning:
      'The Marxist-feminist concept showing how capitalism treats married women as a cheap, compliant, supplementary labour pool recruited during booms and easily laid off during recessions.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'br-ambedkar',
    quote: 'Endogamy is the only characteristic that is peculiar to caste, and it is sustained by controlling surplus women.',
    context: 'Explaining in Castes in India (1916) how Sati, enforced widowhood, and child marriage were invented to police caste boundaries.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'High-Yield Empirical Stats for Patriarchy & Development Answers',
    body: 'Anchor every 20-mark answer with 4 crisp stats: (1) 1980 UN Report: Women are 50% of population, do 66% of work hours, earn 10% of income, own 1% of property (22% in India); (2) ILO LFPR Gap: 23% globally, ~50% in South Asia; (3) WEF Global Gender Gap 2023: 68.4% closed (131 years to parity; India rank 127/146; Political empowerment widest gap at 22.1%); (4) NFHS-5 & GSMA 2023: ~29–31% Indian women face spousal violence, and women are 40% less likely to use mobile internet.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Don’t Write "Education & Jobs Automatically End Patriarchy"!',
    body: 'In the 2025 (domestic division of labour) and 2022 (women’s education) PYQs, show why education and jobs reconfigure rather than erase patriarchy: working women face Arlie Hochschild’s "Second Shift" double burden, conditional permission to work, educated dowry inflation, the ILO Motherhood Penalty, and Sylvia Walby’s shift from Private to Public Patriarchy.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Feminist Thinkers Cheat-Sheet for Workplace & Media PYQs',
    body: 'Workplace: Veronica Beechey (Reserve Army), Ann Oakley (Pink-collar domestic extensions), Michelle Ryan (Glass Cliff), Elizabeth Stanko (Harassment as male territoriality), Lisa Adkins (Sexualisation of work). Socialisation/Media: Leela Dube (Seed-Earth & Earthen Pot), Deniz Kandiyoti (Patriarchal Bargain), Judy Wajcman & Laura Mulvey (Masculine New Media & Male Gaze).',
  },
  {
    kind: 'answerBox',
    intro:
      'Patriarchy and the sexual division of labour are not biological destinies (as Murdock claimed), but socially constructed power systems operating across the household, workplace, state, religion, and digital media.',
    points: [
      'Structural architecture (Sylvia Walby): Patriarchy operates across six structures (household, paid work, state, culture, sexuality, violence), shifting from private domestic exclusion to public institutional subordination.',
      'Biology vs Social Construction (Murdock vs Oakley): Ann Oakley refuted Murdock’s 224-society biological determinism with cross-cultural proof (38 societies share cooking, 14 share lumbering; Indian female construction labourers), while Shulamith Firestone traced gender power to reproductive biology.',
      'Indian socialisation & Patriarchal Bargain: Leela Dube’s Seed-Earth analogy (Paraya Dhan, earthen vs brass pot), Uma Chakravarti’s Brahminical Patriarchy, B.R. Ambedkar’s endogamy thesis, and Deniz Kandiyoti’s "Patriarchal Bargain" explain how families and women internalise gender rules.',
      'Workplace & Development paradox: Female education and formal employment foster partial symmetry (Young & Willmott), yet face Arlie Hochschild’s "Second Shift", Veronica Beechey’s "Reserve Army", the Motherhood Penalty, Glass Ceiling/Cliff (Michelle Ryan), and a 50% South Asian LFPR gap (India #127 in WEF 2023).',
      'Technology & Masculine New Media: While WFH and contraceptives aid autonomy, ultrasound sex-selection, commercial surrogacy exploitation, the 40% mobile internet gap (GSMA 2023), Khap phone bans, and algorithmic cyber-misogyny reproduce patriarchal control.',
    ],
    conclusion:
      'True social development requires dismantling both the unpaid care asymmetry inside the home and the structural barriers of public and digital patriarchy.',
  },
]

export const topic4En: TopicLangContent = {
  summary:
    'Covers Sylvia Walby’s six structures of patriarchy, the Murdock vs Ann Oakley debate on the sexual division of labour, Deniz Kandiyoti’s patriarchal bargain, Leela Dube’s seed-earth socialisation and Uma Chakravarti’s Brahminical patriarchy, workplace barriers (reserve army, motherhood penalty, glass ceiling/cliff, harassment), gender and development metrics (UN, ILO, WEF 2023), and feminist critiques of technology and masculine new media.',
  mindMap,
  sections,
}