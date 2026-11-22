import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 10.3 · Agents of Social Change',
  center: 'Agents of Social Change',
  subtitle: 'Traditional Institutions • State & Law • Mass Media • Social Media & Protests',
  branches: [
    {
      title: 'Traditional Institutions',
      color: 'lavender',
      thinkers: ['M.N. Srinivas', 'Lloyd & Susanne Rudolph', 'A.M. Shah', 'José Casanova'],
      points: [
        'Caste resilience: mutation from ritual hierarchy to democratic pressure associations',
        'Family: nuclearisation of residence with joint emotional and financial solidarity',
        'Religion: public resacralisation, reformist movements, and faith-based civil mobilisations',
        'Debate: traditional institutions are not withering away; they are adapting modern roles',
      ],
    },
    {
      title: 'State, Constitution & Law',
      color: 'yellow',
      thinkers: ['B.R. Ambedkar', 'Roscoe Pound', 'Max Weber', 'Upendra Baxi'],
      points: [
        'Law as Social Engineering: using constitutional statutes to alter recalcitrant social mores',
        'Gender provisions: Arts 14, 15(3), 243D; Hindu Succession 2005; PWDVA 2005',
        'Child labour: Art 24, RTE Act 2009, Child Labour Act 2016 family enterprise loophole',
        'Limits: gap between de jure formal equality and de facto substantive reality (Pradhan Pati)',
      ],
    },
    {
      title: 'Traditional Mass Media',
      color: 'mint',
      thinkers: ['Theodor Adorno', 'Max Horkheimer', 'Jürgen Habermas', 'Stuart Hall'],
      points: [
        'Adorno & Horkheimer Culture Industry: mass deception, false needs, passive consumerism',
        'Habermas: structural transformation and refeudalisation of the rational Public Sphere',
        'Stuart Hall: Encoding/Decoding model (Dominant, Negotiated & Oppositional readings)',
        'Developmental media: rural radio forums, Doordarshan community farm broadcasts',
      ],
    },
    {
      title: 'New Media, Feminism & Protests',
      color: 'pink',
      thinkers: ['Manuel Castells', 'Clay Shirky', 'Judy Wajcman', 'Evgeny Morozov'],
      points: [
        'Castells Network Society: mass self-communication, horizontal networks of outrage and hope',
        'Modern protests: viral, decentralised, leaderless mobilisations (Nirbhaya, Farmers’ Protest)',
        'Feminist critique of New Media: masculine algorithms, digital divide, cyber-misogyny',
        'Slacktivism critique: Morozov on clicktivism vs sustainable institutional reform',
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
    body: `## Who and What Are Agents of Social Change?

An agent of social change is any social actor, collective institution, legal instrument, or technological medium that actively initiates, directs, accelerates, or consolidates transformations in social structures, cultural values, and behavioural norms. Sociologists distinguish between **endogenous agents** (forces arising from within a society, such as internal caste mobilisations or social reform movements) and **exogenous agents** (external pressures, such as colonial conquest, global market integration, or transnational media diffusion).

In contemporary sociological theory, the study of agents bridges the foundational **Structure versus Agency** debate. As [[thinker:Anthony Giddens]] posited in his *Structuration Theory*, social structures are both the medium and the outcome of the practices they organise: agents do not operate in a vacuum, but actively reshape the very institutional rules that constrain them.

## 1. Traditional Social Institutions: Weakening or Mutating?

A common modernisation fallacy assumed that traditional institutions — family, religion, caste, and village community — would simply wither away before urban rationalisation. Contemporary empirical sociology reveals that traditional institutions have not dissolved; rather, they have strategically mutated into powerful modern agents of social and political change.

- **Caste System as Democratic Mobiliser:** [[thinker:M.N. Srinivas]] demonstrated that while the ritual purity-pollution hierarchy has weakened in urban public spaces, caste has gained immense secular strength as an instrument of political mobilization. [[thinker:Lloyd Rudolph]] and [[thinker:Susanne Rudolph]] analysed the ==Modernity of Tradition==: traditional caste groups formed formal caste associations (e.g., Nadar Mahajana Sangham, Jat Mahasabha) that operate as modern interest lobbies fighting for affirmative action reservations, state resources, and electoral representation.
- **Resilience of Family and Kinship:** A.M. Shah disproved the simplistic thesis that industrialisation universally destroys the joint family into isolated nuclear units. Instead, urban India witnesses **nuclearisation of residence** combined with vibrant **jointness of sentiment, mutual financial aid, and ritual obligation**. The family has adapted to dual-earner households and elderly care arrangements rather than disappearing.
- **Religion as a Public Agent:** Rejecting secularisation theories that predicted religion’s complete privatisation, [[thinker:José Casanova]] (*Public Religions in the Modern World*) showed that religious institutions actively intervene in civil society, driving anti-corruption mobilisations, social service networks, and identity politics.

[[trap:Never write that traditional institutions in India have become obsolete. In your exam answers, illustrate how institutions like caste and family have adapted to modern parliamentary democracy and market capitalism.]]`,
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Distinguish Between Formal Law and Substantive Social Action',
    body: 'Roscoe Pound famously distinguished between "law in books" and "law in action." Simply passing progressive constitutional legislation does not automatically guarantee social change. Legal reforms remain blunt instruments unless backed by grassroots social mobilisations, administrative will, and ideological changes in patriarchal and caste mentalities.',
  },
  {
    kind: 'md',
    body: `## 2. The Modern State, Constitution, and Law as Instruments of Social Engineering

In post-colonial societies, the state acts as the supreme institutional agent of deliberate, purposive social transformation. [[thinker:B.R. Ambedkar]] viewed the Indian Constitution not merely as an administrative manual, but as a revolutionary charter designed to dismantle entrenched caste inequalities and build an egalitarian social order.

### Constitutional Provisions for Women: Progress and Persistent Patriarchal Gaps
The Constitution guarantees formal equality through Articles 14 (Equality before Law), 15(1) (Non-discrimination), 15(3) (Special protective provisions for women and children), 16 (Equal opportunity in public employment), and 21 (Right to Dignity and Personal Liberty).
- **Legislative Enactments:** Statutory milestones include the *Hindu Succession (Amendment) Act 2005* granting daughters equal coparcenary rights in ancestral property; the *Protection of Women from Domestic Violence Act 2005 (PWDVA)*; and the *POSH Act 2013* for workplace safety.
- **Political Representation:** The 73rd and 74th Constitutional Amendments (Articles 243D and 243T) mandated a minimum 33% reservation (extended to 50% by 20+ states) for women in rural and urban local bodies, bringing over 1.4 million women into grassroots governance.
- **Sociological Limits:** Despite de jure equality, de facto reality remains distorted by the ==Pradhan Pati phenomenon== (male relatives exercising surrogate power), persistent low Female Labour Force Participation Rates (~37%), son preference, and the unequal burden of unpaid domestic care work.

### Has Law Been Able to Abolish Child Labour in India?
Article 24 explicitly prohibits the employment of children below 14 years in hazardous occupations, reinforced by the fundamental Right to Education (Article 21A, RTE Act 2009).
- **The Child Labour (Prohibition and Regulation) Amendment Act 2016:** Completely banned the employment of children below 14 in all commercial occupations and adolescents (14–18) in hazardous processes.
- **The Socio-Legal Impasse:** Nobel laureate Kailash Satyarthi (*Bachpan Bachao Andolan*) and sociologists highlight that the 2016 Act introduced a regressive loophole allowing children to work in "family or family enterprises" after school hours. Given that over 80% of Indian child labour operates within informal agrarian family farms, carpet-weaving, bidi-rolling, and roadside eateries, this loophole legalises exploitation under the guise of family duty. Child labour persists because it is structurally rooted in adult poverty, casualisation of wages, and substandard government schooling.

## 3. Mass Media and New Media: From Culture Industry to Network Society

Communication media are vital conduits through which social realities are constructed, debated, and transformed.

### Traditional Mass Media: The Frankfurt School Critique
- **Theodor Adorno & Max Horkheimer (Culture Industry):** In *Dialectic of Enlightenment* (1944), the Frankfurt School argued that mass media (commercial radio, film, television) function as an industrial assembly line producing mass cultural pacifiers. It manufactures **false needs**, sedates working-class critical consciousness, and standardises conformity to corporate capitalism.
- **Jürgen Habermas & The Public Sphere:** Habermas tracked how the 18th-century rational-critical **bourgeois Public Sphere** (salons, independent newspapers) degenerated in late modernity into a manufactured arena of corporate public relations, sensationalist television, and consumer advertising — a process he termed ==Refeudalisation of the Public Sphere==.
- **Stuart Hall’s Encoding/Decoding Model:** Stuart Hall proved that media audiences are not passive cultural dupes. Audiences decode media texts through three distinct positions: **Dominant-Hegemonic** (accepting elite messages), **Negotiated** (adapting messages with local reservations), or **Oppositional** (completely rejecting elite propaganda).

### Social Media, Protest Forms, and Manuel Castells’s Network Society
In *Networks of Outrage and Hope* (2012), [[thinker:Manuel Castells]] showed that social media (Twitter/X, WhatsApp, YouTube, Instagram) has fundamentally transformed collective mobilization into ==Mass Self-Communication==:
- **Horizontal & Rhizomatic Networks:** Social media allows citizens to bypass state-controlled broadcasters and corporate gatekeepers, enabling rapid, leaderless, viral mobilisations. [[eg:The 2012 Nirbhaya protests, Arab Spring, MeToo movement, and the 2020–21 Indian Farmers’ Agitation utilised hashtag activism, viral videos, and WhatsApp groups for real-time logistics and narrative defence.]]
- **The Dark Side — Evgeny Morozov & Slacktivism:** Critics highlight that digital protests often degenerate into "slacktivism" or "clicktivism" (liking a post without committing to high-risk physical mobilisation). Furthermore, social media algorithms foster toxic echo chambers, polarising disinformation, state digital surveillance (Pegasus), and troll armies.

### Feminist Critique of New Media: Is New Media Masculine?
Feminist sociologists (Judy Wajcman, Shoshana Zuboff) demonstrate that despite its veneer of democratic access, New Media remains structurally masculinised:
1. **Masculine Design & Silicon Valley Monoculture:** Algorithms, generative AI models, and platform architectures are disproportionately designed by male software elites, baking patriarchal biases into search rankings and surveillance architectures.
2. **Online Misogyny & Doxxing:** Women public figures, journalists, and feminist activists face weaponised cyber-violence, non-consensual deepfakes, rape threats, and targeted character assassination aimed at driving them out of the digital public sphere.
3. **Gender Digital Divide:** In the Global South, smartphone ownership and internet literacy exhibit severe gender skews. According to the NFHS-5 (2019–21), only 54% of women in India had ever used the internet compared to over 70% of men.
4. **Counter-Agency:** Despite these barriers, feminist mobilisations (e.g., #MeToo, #PinjraTod, #BekhaufAzadi) successfully weaponise social media to subvert institutional silence, unmask powerful sexual predators, and forge transnational feminist solidarity.`,
  },
  {
    kind: 'keyTerm',
    term: 'Culture Industry',
    meaning: 'Adorno and Horkheimer’s concept that commercial mass media manufactures standardised cultural goods to pacify critical consciousness and maintain capitalist hegemony.',
  },
  {
    kind: 'keyTerm',
    term: 'Mass Self-Communication',
    meaning: 'Manuel Castells’s term for digital communication that reaches a global audience while being self-generated in content, self-directed in emission, and self-selected in reception.',
  },
  {
    kind: 'keyTerm',
    term: 'Pradhan Pati Phenomenon',
    meaning: 'The socio-political practice where elected women panchayat representatives are sidelined while their husbands or male relatives exercise substantive governing power.',
  },
  {
    kind: 'keyTerm',
    term: 'TechnoFeminism',
    meaning: 'Judy Wajcman’s framework analysing how technology and gender relations are mutually constitutive, showing that technology is neither neutral nor unalterably masculine.',
  },
  {
    kind: 'compare',
    leftTitle: 'Traditional Mass Media',
    rightTitle: 'New Media / Social Media',
    rows: [
      {
        aspect: 'Communication Flow',
        left: 'One-to-many, top-down centralised broadcasting',
        right: 'Many-to-many, horizontal, user-generated interactive networks',
      },
      {
        aspect: 'Control & Gatekeeping',
        left: 'Strictly monitored by corporate barons & state censors',
        right: 'Decentralised algorithm curation; viral mass self-communication',
      },
      {
        aspect: 'Protest Organisation',
        left: 'Hierarchical, union-led, requiring formal party apparatus',
        right: 'Spontaneous, hashtag-driven, leaderless, and agile mobilization',
      },
      {
        aspect: 'Democratic Vulnerability',
        left: 'Passive spectator entertainment and manufacturing of consent',
        right: 'Algorithmic echo chambers, online misogyny & state surveillance',
      },
    ],
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Evaluating Law as an Agent of Change in UPSC Answers',
    body: 'When answering questions on constitutional provisions or child labour laws, apply Upendra Baxi’s sociology of law: show how progressive legal texts create rights-consciousness and discursive legitimacy, but fail to achieve substantive transformation unless accompanied by institutional resource allocation and grassroot pressure.',
  },
  {
    kind: 'answerBox',
    intro: 'Why Law Alone Has Been Unable to Completely Abolish Child Labour in India:',
    points: [
      'Poverty-Vulnerability Nexus: Child labour is an economic survival strategy for destitute households where adult wages are depressed and informalisation exceeds 90%.',
      'The 2016 Legislative Loophole: The statutory exemption permitting children below 14 to work in family enterprises legalises exploitation across agrarian farms, handlooms, and home-based workshops.',
      'Deficits in Foundational Schooling: Although the RTE Act 2009 guarantees schooling, low infrastructural quality, pupil-teacher deficits, and hidden costs cause high dropouts among marginalized children.',
      'Informal Economy Blindspots: Over 90% of child labour occurs in unorganized, dispersed cottage units and brick kilns where labour inspection machinery is understaffed, corrupt, or nonexistent.',
      'Cultural and Caste Normalisation: Deep-rooted feudal ideologies often view child work among artisan and agricultural castes as natural occupational training rather than human rights violations.',
    ],
    conclusion: 'Abolishing child labour requires combining rigorous statutory enforcement with adult living wages, universal social security, and transformative public schooling.',
  },
]

export const topic3En: TopicLangContent = {
  summary:
    'Agents of social change are collective institutions, legal instruments, and communication media that drive structural transformations in society. Traditional institutions like caste and family have not vanished; rather, they have mutated into democratic pressure groups and adaptive support networks (Srinivas, Rudolph & Rudolph). The modern state and constitution serve as instruments of social engineering (Ambedkar, Pound), though legal reforms for women (Arts 14, 15, 243D) and child labour (Art 24, RTE Act 2009) encounter structural roadblocks such as the Pradhan Pati syndrome, the 2016 family enterprise loophole, and poverty. While traditional mass media manufactured conformity through the Culture Industry (Adorno, Habermas), New Media enables horizontal, viral protests (Castells), even while reproducing masculine algorithmic biases and digital divides (Wajcman).',
  mindMap,
  sections,
}
