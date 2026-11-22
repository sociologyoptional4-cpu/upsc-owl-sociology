import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

export const topic1En: Pick<
  TopicNotebookSpec,
  'summary' | 'mindMap' | 'sections'
> = {
  summary:
    'Examines Indian nation-building as an inclusive "state-nation" reconciling deep religious and linguistic diversity through constitutional democracy. Explores how lower-caste and Dalit mobilizations deepened Indian democracy through successive democratic upsurges, analyzes B.R. Ambedkar’s insistence on social democracy as the real precondition for substantive political democracy, and scrutinizes contemporary sociological debates over citizenship, documentation regimes, and exclusionary anxieties.',
  mindMap: {
    title: 'Nation, Democracy and Citizenship in India',
    center: 'Nation & Citizenship',
    subtitle: 'State-Nation • Democratic Upsurges • Ambedkar’s Social Democracy • Documentary Regimes',
    branches: [
      {
        title: 'Nation-Building & Pluralism',
        color: 'lavender',
        thinkers: ['Alfred Stepan', 'Juan Linz', 'Yogendra Yadav', 'T.K. Oommen'],
        points: [
          'State-nation model: multiple cultural identities accommodated under single democratic roof',
          'Contrasts Western assimilationist nation-state with Indian constitutional pluralism',
          'Religious diversity institutionalized via fundamental rights and minority safeguards',
          'Civic national identity forged through shared constitutional morality rather than ethnic hegemony',
        ],
      },
      {
        title: 'Democratic Deepening & Upsurges',
        color: 'yellow',
        thinkers: ['Yogendra Yadav', 'Christophe Jaffrelot', 'B.R. Ambedkar'],
        points: [
          'First upsurge (1950s–60s): Congress system, universal adult franchise, elite stewardship',
          'Second upsurge (1990s): Mandal era, OBC-Dalit electoral mobilization, plebeianization',
          'Silent revolution: substantive transfer of electoral power without violent class upheaval',
          'Third upsurge (2000s–present): rights-based citizenship and aspirational welfarism',
        ],
      },
      {
        title: 'Ambedkar & Social Democracy',
        color: 'mint',
        thinkers: ['B.R. Ambedkar', 'Gail Omvedt', 'Eleanor Zelliot'],
        points: [
          'Life of contradictions: political equality ("one man, one vote") vs social inequality',
          'Social democracy defined as associated living and communicated fraternity',
          'Annihilation of caste as essential prerequisite for durable political liberty',
          'Warning against hero-worship (bhakti) in politics as road to degradation and dictatorship',
        ],
      },
      {
        title: 'Citizenship & Documentation',
        color: 'pink',
        thinkers: ['Niraja Gopal Jayal', 'Kamal Sadiq', 'T.H. Marshall'],
        points: [
          'Transition from jus soli (civic birthright) to jus sanguinis (ethnic descent) undertones',
          'Paper citizens: documentary legality as precarious substitute for substantive belonging',
          'Documentation regimes: NRC, CAA, and vulnerability of marginalized paperless communities',
          'Marshall’s inverted sequence: political franchise arrived before universal social protection',
        ],
      },
    ],
  },
  sections: [
    {
      kind: 'figure',
      assetFile: 'p2-u12-01-politics-caste-federalism.webp',
      alt: 'P2 Unit 12 infographic: Democracy, Caste & Decentralization — Party Phases, Vote Banks, PRIs & Asymmetric Federalism',
      caption: 'Party Phases, Vote Banks, PRIs & Asymmetric Federalism (Democracy, Caste & Decentralization).',
    },
    {
      kind: 'md',
      body: `## Nation-Building in India: State-Nation vs Nation-State

Nation-building in India did not follow the standard European model of cultural homogenization. In Europe, nation-states typically emerged around a single dominant language, a dominant religion, and a uniform ethnic heritage, often violently expelling or forcibly assimilating minorities. In stark contrast, postcolonial India was deliberately conceptualized as a multi-ethnic, multi-lingual, and multi-religious democratic compact where shared citizenship does not demand the surrender of distinct cultural identities.

Political sociologists [[thinker:Alfred Stepan]], Juan Linz, and [[thinker:Yogendra Yadav]] argue that India represents a classic ==State-Nation== rather than a conventional nation-state. While a nation-state demands cultural assimilation into a single national culture, a state-nation crafts political-institutional mechanisms that cultivate multiple, complementary political and cultural identities simultaneously. An individual can proudly identify as Tamil, Muslim, and Indian without experiencing institutional contradiction.

Religious pluralism has acted not as an impediment to nation-building, but as its foundational bedrock. Sociologist [[thinker:T.K. Oommen]] demonstrates that whenever the Indian state pursued assimilationist or majoritarian policies, violent sub-national resistance erupted [[eg:Linguistic agitations in Tamil Nadu against Hindi imposition in the 1960s]]. Conversely, constitutional guarantees protecting minority cultures and educational institutions (Articles 25–30) have tethered diverse communities to the democratic republic.

| Dimension | Western Nation-State Model | Indian State-Nation Model |
| :--- | :--- | :--- |
| **Cultural Strategy** | Homogenization and assimilation | Institutional accommodation of deep diversity |
| **Identity Structure** | Monolithic national identity | Nesting of multiple complementary loyalties |
| **Linguistic Policy** | Single official national language | Eighth Schedule (22 recognized languages) + 3-language formula |
| **Religious Framework** | Strict secular wall of separation or state church | Equal respect and principled distance (Articles 25–30) |
| **Sociological Core** | Cultural conformity precedes citizenship | Democratic citizenship unifies cultural diversity |`,
    },
    {
      kind: 'callout',
      variant: 'upscAngle',
      title: 'UPSC Trap: Nation-State vs State-Nation',
      body: 'Do not describe India as an imperfect or fragmented nation-state. In UPSC Sociology, always frame India through the Stepan, Linz, and Yadav lens of a state-nation that intentionally builds institutional holding power through diversity accommodation rather than forced cultural melting pots.',
    },
    {
      kind: 'md',
      body: `## Deepening of Democracy: From Elite Stewardship to Plebeian Upsurges

Indian democracy has undergone a profound transformation over the last seven decades, moving from a paternalistic elite monopoly to an assertive participatory battleground. At independence, political democracy was primarily steered by an English-educated, upper-caste, metropolitan elite within the umbrella of the Congress party. Over successive decades, subaltern groups recognized the power of universal adult franchise, transforming elections into an arena of genuine social redistribution.

[[thinker:Yogendra Yadav]] conceptualizes this historical expansion through his influential theory of ==Democratic Upsurges==. While classical Western theorists believed that mass poverty and deep illiteracy would destroy democratic institutions, India witnessed an inverted dynamic: lower socio-economic strata voted in higher percentages than privileged urban elites [[eg:Consistently higher voter turnout among rural Dalits and OBCs compared to affluent urban wards in metropolitan municipal elections]].

[[thinker:Christophe Jaffrelot]] terms the post-1980s transformation ==India's Silent Revolution==. Through the Mandal movement and the political rise of regional parties, intermediate and lower castes dismantled upper-caste hegemony in legislative assemblies across North India without triggering violent class warfare.`,
    },
    {
      kind: 'flow',
      direction: 'horizontal',
      steps: [
        {
          label: 'First Upsurge (1950s–60s)',
          text: 'Universal adult franchise introduced; Congress system maintains upper-caste patron-client consensus with deferential voters.',
        },
        {
          label: 'Second Upsurge (1990s)',
          text: 'Mandal commission and Bahujan assertion ignite plebeian mobilization; Dalits and OBCs capture legislative power.',
        },
        {
          label: 'Third Upsurge (2000s–Present)',
          text: 'Aspirational welfarism, rights-based governance (RTI, MGNREGA), and the rise of digital citizen-beneficiaries.',
        },
      ],
    },
    {
      kind: 'thinkerQuote',
      thinkerSlug: 'br-ambedkar',
      quote: 'On the 26th of January 1950, we are going to enter into a life of contradictions.',
      context: 'Final address to the Indian Constituent Assembly on 25 November 1949.',
    },
    {
      kind: 'md',
      body: `## Ambedkar's Warning: Social Democracy as the Real Precondition

On 25 November 1949, [[thinker:B.R. Ambedkar]] delivered his famous prophetic warning to the Constituent Assembly. He stated that in politics India was inaugurating the principle of ==One Man, One Vote==, but in social and economic life the country remained trapped in the reality of unequal value. Without establishing substantive ==Social Democracy==, political democracy would remain a fragile top-dressing on an inherently undemocratic soil.

Ambedkar defined social democracy not as a dry parliamentary arrangement, but as a mode of associated living and conjoint communicated experience. For Ambedkar, liberty cannot be divorced from equality, nor can equality be divorced from fraternity. If caste divisions persist, fraternity is impossible, because caste enforces graded inequality where every group despises those below and envies those above [[eg:Social boycotts and denial of shared drinking water to Dalits in rural habitations]].

Sociologists [[thinker:Gail Omvedt]] and Eleanor Zelliot emphasize that Ambedkar saw state intervention, affirmative action, and radical structural reform as non-negotiable tools to convert formal political rights into lived emancipatory power. When lower castes mobilize politically, they are not fracturing the nation; they are completing Ambedkar’s unfinished quest for substantive social democracy.`,
    },
    {
      kind: 'compare',
      leftTitle: 'Formal Political Democracy',
      rightTitle: 'Substantive Social Democracy',
      rows: [
        {
          aspect: 'Foundational Metric',
          left: 'Periodic elections, universal franchise, civil rights on paper',
          right: 'Equitable dignity, economic security, absence of social hierarchy',
        },
        {
          aspect: 'Power Dynamics',
          left: 'Traditional elites retain socio-economic dominance via patronage',
          right: 'Subaltern classes actively share institutional and decision-making power',
        },
        {
          aspect: 'Fraternity Level',
          left: 'Weak social cohesion; caste and communal divisions persist',
          right: 'Associated living, mutual empathy, and eradication of graded inequality',
        },
        {
          aspect: 'Ambedkar’s Verdict',
          left: 'Fragile structure bound to collapse under social unrest',
          right: 'Durable democratic republic fulfilling constitutional morality',
        },
      ],
    },
    {
      kind: 'callout',
      variant: 'galtiMat',
      title: 'Common Analytical Error',
      body: 'Never treat caste mobilization in elections as a pathology or decay of democracy. Sociologists like Rajni Kothari and Christophe Jaffrelot show that caste-based democratic mobilization politicized traditional ties, making democracy comprehensible and accessible to millions of historically excluded citizens.',
    },
    {
      kind: 'keyTerm',
      term: 'Social Democracy',
      meaning:
        'A democratic way of life based on liberty, equality, and fraternity, where social and economic inequalities are actively eliminated rather than masked by formal legal equality.',
      thinkerSlug: 'br-ambedkar',
    },
    {
      kind: 'keyTerm',
      term: 'State-Nation',
      meaning:
        'A political framework that accommodates multiple cultural, linguistic, and religious loyalties under a single democratic constitutional system without demanding cultural assimilation.',
    },
    {
      kind: 'keyTerm',
      term: 'Second Democratic Upsurge',
      meaning:
        'The massive electoral participation and political assertion of Dalits and Other Backward Classes (OBCs) in India during the late 1980s and 1990s, transforming the social profile of political representation.',
    },
    {
      kind: 'keyTerm',
      term: 'Paper Citizens',
      meaning:
        'Sociological concept analyzing how legal documentation (voter cards, ration cards, Aadhaar) becomes a contested substitute for substantive political and civic belonging in developing states.',
    },
    {
      kind: 'md',
      body: `## Contemporary Citizenship Debates: Documentary Regimes and Anxieties

Citizenship in modern India has transitioned from an unquestioned constitutional birthright into a fiercely contested documentary battleground. Political sociologist [[thinker:Niraja Gopal Jayal]] argues that Indian citizenship has historically embodied a tension between civic-universalist and ethnic-particularist visions. While the 1950 Constitution anchored citizenship firmly in the civic principle of birth on Indian soil (*jus soli*), recent legislative and bureaucratic measures reflect a creeping tilt toward descent and religious belonging (*jus sanguinis*).

Sociologist [[thinker:Kamal Sadiq]] introduces the concept of ==Paper Citizens== to describe how marginalized groups in postcolonial South Asia navigate the state through identity documentation. In a society where birth registrations were historically irregular, documents such as ration cards, electoral photo identity cards, and land records function as proof of personhood. When bureaucratic regimes mandate rigid documentary trails [[eg:The National Register of Citizens process in Assam requiring pre-1971 legacy documents]], the burden falls disproportionately on illiterate, landless, nomadic, and disaster-displaced populations.

Contemporary citizenship anxieties in India reveal three sociological faultlines:
1. **Documentary Vulnerability:** Landless laborers, flood-affected riverine communities, and rural women rarely possess unbroken multi-generational bureaucratic paper trails.
2. **Shift in Constitutional Morality:** Linking citizenship criteria to religious identity generates deep existential insecurity among minority populations.
3. **Surveillance and Digital Identity:** The integration of Aadhaar and biometrics converts citizenship from a status of political agency into a monitored welfare entitlement.`,
    },
    {
      kind: 'callout',
      variant: 'yaadRakho',
      title: 'Paper 1 to Paper 2 Conceptual Link',
      body: 'In Paper 1, T.H. Marshall argued that citizenship evolved linearly: Civil Rights (18th c.) to Political Rights (19th c.) to Social Rights (20th c.). In India (Paper 2), this sequence was inverted: universal political franchise was granted overnight in 1950, while civil liberties and social security remain uneven struggles for the poor.',
    },
    {
      kind: 'answerBox',
      intro:
        'Evaluating whether lower-caste and Dalit political mobilizations have deepened or fragmented Indian democracy requires examining both substantive empowerment and structural bottlenecks:',
      points: [
        'Substantive legislative presence: The proportion of intermediate and lower-caste legislators in state assemblies and Parliament increased dramatically, ending upper-caste monopoly over legislative representation.',
        'Psychological empowerment: Subaltern assertion transformed self-perception; marginalized citizens moved from passive supplicants of patronage to active claimants of constitutional rights.',
        'Policy reorientation: Caste-based political mobilization forced all mainstream parties to implement affirmative action, sub-quotas, and targeted social welfare programs.',
        'Sub-caste fragmentation: Dominant sub-castes within the OBC and Dalit umbrellas often monopolized political and economic benefits, leaving extremely backward castes (EBCs) and Mahadalits alienated.',
        'Elite capture and dynasticization: Regional caste-based parties frequently devolved into family-controlled political oligarchies, dampening internal party democracy.',
      ],
      conclusion:
        'Ultimately, lower-caste mobilizations have undeniably deepened the substantive character of Indian democracy by plebeianizing political power, even as internal sub-caste differentiation remains an ongoing challenge for social justice.',
    },
  ],
}
