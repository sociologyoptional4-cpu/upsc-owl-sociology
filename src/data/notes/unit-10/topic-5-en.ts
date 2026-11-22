import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 10.5 · Science, Technology and Social Change',
  center: 'Science, Tech & Social Change',
  subtitle: 'Determinism vs SCOT • Cultural Lag • Superstition Debunking • Pandemic & Gender Dynamics',
  branches: [
    {
      title: 'Theoretical Debates',
      color: 'lavender',
      thinkers: ['Thorstein Veblen', 'William F. Ogburn', 'Robert Heilbroner', 'Bijker & Pinch'],
      points: [
        'Technological Determinism: machines make history; technology as autonomous external driver',
        'Social Construction of Technology (SCOT): technology shaped by social, political & gender values',
        'Merton CUDOS Norms: Communalism, Universalism, Disinterestedness & Organised Scepticism',
        'Jacques Ellul: autonomous technique transforming humans into subordinate components',
      ],
    },
    {
      title: 'Ogburn’s Cultural Lag',
      color: 'yellow',
      thinkers: ['William F. Ogburn', 'Alvin Toffler', 'Daniel Bell'],
      points: [
        'Material culture (tools, tech, factories) changes rapidly at exponential speed',
        'Adaptive non-material culture (customs, laws, ethics, philosophy) lags sluggishly behind',
        'The resulting gap creates chronic social maladjustment, moral crises, and legal voids',
        'Contemporary validity: AI ethics, gene editing (CRISPR), data privacy, commercial surrogacy',
      ],
    },
    {
      title: 'Taboos, Rationality & Pandemic',
      color: 'mint',
      thinkers: ['Ulrich Beck', 'Narendra Dabholkar', 'Jawaharlal Nehru', 'Anthony Giddens'],
      points: [
        'Scientific temper (Art 51A(h)) vs taboos: mechanised sanitation, genetics debunking caste purity',
        'Persistence of superstition: cyber-astrology, online puja, WhatsApp mob lynching rumours',
        'COVID-19 Pandemic: humanity at the mercy of nature vs science (mRNA vaccines, CoWIN)',
        'Beck Risk Society: manufactured uncertainties, global hazards & corporate vaccine apartheid',
      ],
    },
    {
      title: 'Gender, Work & Democratisation',
      color: 'pink',
      thinkers: ['Ruth Schwartz Cowan', 'Judy Wajcman', 'Shoshana Zuboff', 'Anil Gupta'],
      points: [
        'Ruth Cowan "More Work for Mother": domestic appliances rising standards without cutting hours',
        'Reproductive technology: contraceptive liberation vs illegal sex-selection ultrasound (PC-PNDT)',
        'Platform gig work & telecommuting (WFH): flexibility vs informal precarity and double burden',
        'Democratisation: citizen science, Honey Bee grassroots innovation vs surveillance capitalism',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u10-02-agents-education-tech.webp',
    alt: 'P1 Unit 10 infographic: Education, Science, Media & Tech — Agents of Transformation in Modern Society',
    caption: 'Agents of Transformation in Modern Society (Education, Science, Media & Tech).',
    credit: 'UPSC OWL Studio · Paper 1 Unit 10 Visual 02',
  },
  {
    kind: 'md',
    body: `## How Does Sociology Understand Science and Technology?

Science and technology are not value-free, autonomous forces operating outside human society. In sociological inquiry, **science** is defined as an institutionalised system of empirical knowledge production based on rational observation and experimentation, while **technology** refers to the practical application of scientific knowledge into physical artefacts, production machinery, and algorithmic systems.

Sociologists examine the reciprocal relationship between technological development and social structure: does technology independently determine human history, or is technology socially constructed by existing class, gender, and political power relations?

## 1. Technological Determinism versus the Social Construction of Technology (SCOT)

- **Technological Determinism:** Formulated by thinkers like [[thinker:Thorstein Veblen]], [[thinker:William F. Ogburn]], and Robert Heilbroner (*"Do machines make history?"*), this perspective asserts that technology develops according to an internal, autonomous logic. Once invented, technological infrastructure directly forces social institutions, cultural values, and human habits to adapt. Karl Marx famously captured this in *The Poverty of Philosophy*: *"The hand-mill gives you society with the feudal lord; the steam-mill, society with the industrial capitalist."*
- **Social Construction of Technology (SCOT):** Developed by Wiebe Bijker, Trevor Pinch, and feminist scholars like Judy Wajcman (*TechnoFeminism*), SCOT rejects determinism. Technology does not develop in a vacuum; social groups, state defense departments, and corporate capital actively determine which scientific designs are funded, chosen, or abandoned. Technology is the *crystallisation of social relations*.
- **Robert K. Merton’s Sociology of Science:** In *Science, Technology and Society in 17th-Century England* (1938), [[thinker:Robert K. Merton]] proved that the rise of modern science was not an accidental breakthrough, but was nurtured by the Protestant (Puritan) religious ethos that valued utilitarian inquiry. Merton identified the institutional ethos of science through the ==CUDOS norms==:
  - *Communalism:* Scientific discoveries are common social property.
  - *Universalism:* Truth claims are judged by objective, impersonal criteria regardless of race or nationality.
  - *Disinterestedness:* Scientists pursue truth rather than private personal gain.
  - *Organised Scepticism:* All claims are subject to rigorous empirical testing before acceptance.

[[trap:Never advocate pure technological determinism in your exam answers. Always balance technological innovations with the social, economic, and political contexts that dictate how technologies are deployed and who benefits from them.]]`,
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Do Not Confuse Material Culture with Adaptive Culture',
    body: 'In Ogburn’s Cultural Lag theory, material culture refers strictly to tangible tools, factories, physical transport, and digital devices. Non-material or adaptive culture refers to intangible values, legal frameworks, religious mores, and family norms. The lag occurs because physical tools can be mass-manufactured overnight, whereas deeply held moral values take generations to evolve.',
  },
  {
    kind: 'md',
    body: `## 2. William F. Ogburn’s Theory of Cultural Lag: Is It Valid Today?

In *Social Change with Respect to Culture and Original Nature* (1922), [[thinker:William F. Ogburn]] formulated the concept of ==Cultural Lag==:
1. **Material Culture Changes Exponentially:** Driven by scientific discoveries, industrial competition, and market incentives, material technology advances at rapid speed.
2. **Non-Material (Adaptive) Culture Changes Sluggishly:** Human habits, religious philosophies, legal statutes, and moral customs exhibit heavy psychological inertia and cultural resistance.
3. **The Maladjustment Gap:** The resulting temporal discrepancy between fast material innovations and lagging adaptive customs generates severe social friction, ethical dilemmas, and institutional anomie.

### Is Cultural Lag Valid in Present Times?
Far from being obsolete, Ogburn’s concept is more relevant in the 21st century than when it was first formulated:
- **Artificial Intelligence and Algorithmic Bias:** Generative AI tools (ChatGPT, autonomous driving algorithms, deepfake models) have diffused globally across millions of users in months, while copyright legislation, deepfake criminal penalties, and labour displacement protections remain fragmented and sluggish.
- **Biotechnology and Reproductive Technologies:** In Vitro Fertilisation (IVF), commercial surrogacy, and CRISPR gene-editing technology exist physically, but legal parenthood definitions, international citizenship rules for surrogate babies, and moral debates on "designer babies" lag far behind.
- **Data Privacy and Big Tech Monopolies:** Internet platforms have colonised everyday life through mass data extraction, while privacy laws (e.g., India’s Digital Personal Data Protection Act 2023) required decades of judicial and legislative wrangling to catch up.

## 3. Science and Technology in Addressing Taboos and Superstitions

Modern science and technology operate as formidable solvents of traditional obscurantism, yet superstition exhibits remarkable adaptability by colonising modern media.

- **Nehru’s Vision of "Scientific Temper":** Jawaharlal Nehru championed scientific temper — a mindset of questioning, empirical observation, and rational humanism — as a fundamental civic duty, later enshrined in **Article 51A(h)** of the Constitution.
- **Demolishing Purity-Pollution and Caste Taboos:**
  - *Sanitation Technology:* Mechanised sewer-cleaning machines, vacuum tankers, and robotic scavengers (*Bandicoot*) dismantle the horrific caste taboo that condemned Dalits to manual scavenging based on hereditary pollution beliefs.
  - *Medicalization of Disease:* Scientific microbiology proved that leprosy, cholera, and mental illnesses are caused by pathogens and neurological imbalances rather than divine curses, evil spirits, or bad karma.
  - *Genomic Science:* Population genetics has scientifically disproved racial and caste purity myths, demonstrating the biological oneness of humanity.
- **The Persistence and Digitisation of Superstition:** As rationalist activists like Dr. Narendra Dabholkar (*Maharashtra Andhashraddha Nirmoolan Samiti*) demonstrated, technology does not automatically eradicate superstition; often, superstition modernises its delivery. Cyber-astrology apps, algorithmic matchmaking based on horoscopes (*Kundali*), and online rituals booked via smartphone apps prove that traditional taboos adapt into profitable commodities within the digital economy.

## 4. The COVID-19 Pandemic: Nature, Science, and Humanity at the Crossroads

The COVID-19 pandemic offered a dramatic sociological test of humanity’s relationship with nature, science, and technology.

### Ulrich Beck’s Risk Society and Manufactured Uncertainties
[[thinker:Ulrich Beck]] (*Risk Society: Towards a New Modernity*, 1992) argued that late industrial modernity produces ==Manufactured Risks== — hazards generated by the very techno-economic systems designed to control nature. The global pandemic demonstrated Beck’s core theses:
- **Humanity at the Mercy of Nature:** Industrial encroachment into wildlife habitats, deforestation, and industrial factory farming sparked zoonotic viral spillovers, shattering modernist arrogance that science has subdued nature.
- **Science as Life-Saver:** Global scientific collaboration decoded the viral genome within weeks and developed life-saving mRNA vaccines in record time. Digital public platforms like India’s **CoWIN** enabled the administration of over 2 billion vaccine doses with verifiable digital certificates.
- **The Dark Side — Techno-Apartheid and Surveillance:** Intellectual property monopolies guarded by Western Big Pharma under the WTO-TRIPS regime resulted in stark vaccine apartheid, leaving the Global South vulnerable. Simultaneously, digital surveillance apps (Aarogya Setu) and emergency state powers raised grave concerns regarding civil liberties and data privacy.

## 5. Technology and the Status of Women in Indian Society

Technology exerts a profoundly contradictory impact on women’s social status in contemporary India:
- **Domestic Sphere (Ruth Cowan’s Paradox):** Ruth Schwartz Cowan (*More Work for Mother*, 1983) proved that domestic appliances (washing machines, automated grinders, dishwashers) did not reduce women’s total housework hours because societal cleanliness standards escalated. In India, appliances reduce physical drudgery, but patriarchal expectations often reject machines under the gendered pretext that "the authentic taste of mother’s hand" is missing.
- **Reproductive Agency vs Female Foeticide:** While oral contraceptives and safe reproductive healthcare expanded female autonomy, modern ultrasound and amniocentesis technologies were catastrophically perverted for female foeticide, leading to severely skewed child sex ratios and compelling the enactment of the *PC-PNDT Act 1994*.
- **The Gig Economy and Telecommuting:** The rise of IT-enabled services and Work From Home (WFH) arrangements enabled millions of educated women to access white-collar employment. However, it intensified the "second shift" (Arlie Hochschild) — women juggle professional deadlines while bearing undivided domestic care work.
[[link:Connect this to Paper 2 Unit 7 on Green Revolution and Social Change and Paper 2 Unit 15 on Illiteracy and Educational Disparities.]]`,
  },
  {
    kind: 'keyTerm',
    term: 'Technological Determinism',
    meaning: 'The theoretical perspective that technology develops autonomously and functions as the primary, unilinear driver of social change and cultural values.',
  },
  {
    kind: 'keyTerm',
    term: 'CUDOS Norms',
    meaning: 'Robert K. Merton’s four institutional norms governing scientific research: Communalism, Universalism, Disinterestedness, and Organised Scepticism.',
    thinkerSlug: 'robert-k-merton',
  },
  {
    kind: 'keyTerm',
    term: 'Manufactured Uncertainty',
    meaning: 'Ulrich Beck’s concept that modern risks (nuclear fallout, climate change, pandemics) are unintended consequences produced by human industrial-scientific systems.',
  },
  {
    kind: 'keyTerm',
    term: 'Scientific Temper',
    meaning: 'A rational, objective, and questioning mental outlook based on empirical observation, championed by Nehru and enshrined in Article 51A(h) of the Constitution.',
  },
  {
    kind: 'compare',
    leftTitle: 'Technological Determinism (Veblen, Ogburn)',
    rightTitle: 'Social Construction of Technology (Bijker, Wajcman)',
    rows: [
      {
        aspect: 'Core Premise',
        left: 'Technology is an autonomous external force shaping human destiny',
        right: 'Technology is a socially embedded artefact shaped by power relations',
      },
      {
        aspect: 'Direction of Causality',
        left: 'Machine innovations → Institutional adaptations & value changes',
        right: 'Social interests & gender power → Technological designs & adoption',
      },
      {
        aspect: 'Human Agency',
        left: 'Subservient; humans must adapt to technological imperatives',
        right: 'Active; social groups negotiate, contest, and reshape technology',
      },
      {
        aspect: 'Solution to Crisis',
        left: 'Accelerating non-material culture to catch up with tools',
        right: 'Democratising technological design and ownership structures',
      },
    ],
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Approach: Science & Technology in Addressing Age-Old Taboos',
    body: 'In your answers, avoid pure praise of technology. Balance positive breakthroughs (robotic scavenging ending manual scavenging, DNA testing debunking caste purity) with empirical persistence (cyber-astrology apps, social-media rumours inciting witch-hunts against tribal women), showing that technology alone cannot replace moral-cultural enlightenment.',
  },
  {
    kind: 'answerBox',
    intro: 'How Science and Technology Act as Both Catalysts and Inhibitors of Taboo Elimination:',
    points: [
      'Demystification of Biology: Medical advancements disproved superstitious origins of disease (leprosy, mental disorders), replacing ritual exorcisms with empirical healthcare.',
      'Eradication of Manual Scavenging: Robotic devices like Bandicoot automate manhole cleaning, attacking the structural material base of caste-based pollution taboos.',
      'Democratisation of Public Spaces: Modern rapid transit systems (Metro, railways) force inter-caste physical proximity, rendering traditional distance-pollution taboos unworkable.',
      'Digitisation of Superstition: Counter-productively, digital platforms are used to commercialise astrology, cast horoscopes, and spread viral disinformation targeting marginalized groups.',
      'Misuse for Patriarchal Taboos: Diagnostic reproductive technologies have been co-opted to enforce son preference through illegal prenatal sex determination.',
    ],
    conclusion: 'Science and technology are powerful tools for rationalisation, but their emancipatory potential is realised only when guided by constitutional humanism and progressive social movements.',
  },
]

export const topic5En: TopicLangContent = {
  summary:
    'Science and technology are central engines of modern social change, operating in a continuous reciprocal dialogue with social institutions. Sociologists debate whether technology autonomously determines human history (Technological Determinism of Veblen, Ogburn, Heilbroner) or is socially constructed by class and gender power (SCOT of Bijker, Wajcman). William F. Ogburn’s Theory of Cultural Lag remains exceptionally vital today, explaining acute maladjustments where material innovations (AI, biotechnology, data surveillance) outpace adaptive legal and ethical norms. While scientific temper (Nehru, Art 51A(h)) and mechanised sanitation challenge caste pollution and medical taboos, superstition often modernises into profitable digital forms. As the COVID-19 pandemic demonstrated through Ulrich Beck’s Risk Society lens, humanity faces manufactured risks alongside scientific breakthroughs, highlighting the urgent need for the democratisation of science.',
  mindMap,
  sections,
}
