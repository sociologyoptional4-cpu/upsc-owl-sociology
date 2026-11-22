import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic3EnMindMap: MindMapData = {
  title: 'Topic 3 · Education & Social Change in India',
  center: 'Education & Social Change',
  subtitle: 'Mobility vs Reproduction • Caste of Merit • RTE 2009 • NEP 2020',
  branches: [
    {
      title: 'Mobility vs Reproduction Debates',
      color: 'lavender',
      thinkers: ['B.R. Ambedkar', 'Émile Durkheim', 'Pierre Bourdieu', 'Louis Althusser'],
      points: [
        'Modernist / Ambedkarite promise: "Educate, Agitate, Organise" for Dalit emancipation',
        'Durkheim: moral socialization and organic solidarity in specialized division of labour',
        'Bourdieu: cultural capital, habitus, and symbolic violence reproducing class privilege',
        'Althusser: school as Ideological State Apparatus (ISA) naturalizing inequality',
      ],
    },
    {
      title: 'Stratified Schooling & Caste of Merit',
      color: 'yellow',
      thinkers: ['Ajantha Subramanian', 'Krishna Kumar', 'Satish Deshpande', 'Paulo Freire'],
      points: [
        'Stratified tiers: international IB boards vs private CBSE vs underfunded state schools',
        'Krishna Kumar: textbook culture, obedience, and exclusion of subaltern lived knowledge',
        'Ajantha Subramanian: upper-caste conversion of hereditary capital into "casteless merit"',
        'Coaching industry (Kota, UPSC): commodified entrance gates screening out subalterns',
      ],
    },
    {
      title: 'RTE Act (2009) & Learning Gaps',
      color: 'mint',
      thinkers: ['Jean Drèze', 'Amartya Sen', 'Rukmini Banerji (ASER)', 'Shantha Sinha'],
      points: [
        'Article 21A: fundamental right to free, compulsory elementary education (ages 6–14)',
        'Section 12(1)(c): 25% private school seats for EWS; challenges of social inclusion',
        'Near-universal enrolment (98%) shadowed by severe foundational learning crisis (ASER)',
        'No-detention policy debate: continuous evaluation vs automatic pass controversy',
      ],
    },
    {
      title: 'NEP 2020 & Digital Disparities',
      color: 'pink',
      thinkers: ['K. Kasturirangan', 'Yogendra Singh', 'Anita Rampal', 'Janaki Rajan'],
      points: [
        '5+3+3+4 structural overhaul: foundational literacy, numeracy, and vocational skills',
        'Mother-tongue instruction dilemma: local pride vs English corporate capital divide',
        'Digital divide: PM eVidya and smart classrooms in contexts lacking electricity and devices',
        'Silent privatization: commercialization of higher education and dilution of equity mandates',
      ],
    },
  ],
}

export const topic3EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u09-02-education-equality-india.webp',
    alt: 'P2 Unit 9 infographic: Education & Social Change in India — Gurukul to NEP 2020: Mobility vs Cultural Reproduction',
    caption:
      'From Brahminical Gurukuls and colonial Macaulayism to the Right to Education and NEP 2020, education in India continually oscillates between an egalitarian ladder for social mobility and an institutional filter that reproduces caste-class privilege.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 19 Visual 02',
  },
  {
    kind: 'md',
    body: `## Education: Emancipatory Panacea or Reproducer of Inequality?

In modern democratic discourse, education is celebrated as the ultimate equalizer — a golden ladder allowing any hardworking child, regardless of birth, caste, or gender, to achieve upward social mobility. Post-colonial reformers championed this vision passionately. [[thinker:B.R. Ambedkar]] placed education at the very center of subaltern liberation with his call to **"Educate, Agitate, Organise"**, demonstrating in his own life how modern schooling could break the shackles of untouchability. The landmark Kothari Commission (1964–66) similarly declared that the destiny of India is being shaped in her classrooms, recommending a **Common School System** and 6% of GDP dedicated to public education.

Yet critical sociologists argue that treating education as an automatic panacea is an ideological illusion. In reality, modern schooling operates simultaneously as an engine of social mobility and a powerful machine of ==Cultural Reproduction==.

### Theoretical Perspectives: Functionalism vs Conflict Sociology

1. **The Structural-Functionalist View**: [[thinker:Émile Durkheim]] in *Moral Education* argued that schooling instills collective conscience and trains specialized individuals for the modern division of labour. Talcott Parsons characterized the classroom as an agency of socialization that allocates adult roles strictly on the basis of individual merit and universalistic achievement.
2. **The Marxist & Critical View**: [[thinker:Louis Althusser]] identified the school as the primary **Ideological State Apparatus (ISA)** in capitalist societies, which conditions working-class children into submission while grooming the elite for command.
3. **Pierre Bourdieu's Cultural Reproduction**: French sociologist [[thinker:Pierre Bourdieu]] demonstrated that schools are never neutral. They reward the ==Cultural Capital== (refined vocabulary, accent, aesthetic tastes, habitus) that upper-class children absorb naturally at home. The school misrecognizes this inherited class advantage as natural "intelligence" or "merit", practicing **symbolic violence** against subaltern children who possess different linguistic codes.

| Dimension | Modernist / Functionalist View | Critical / Reproduction View |
| :--- | :--- | :--- |
| **Primary Role** | Equal opportunity ladder & social mobility engine | Institutional filter reproducing caste and class privileges |
| **Nature of "Merit"** | Individual talent, diligence, and academic effort | Inherited cultural and economic capital disguised as merit |
| **Class Impact** | Eradicates hereditary poverty and expands middle class | Legitimises inter-generational class reproduction |
| **Key Thinkers** | Émile Durkheim, Talcott Parsons, B.R. Ambedkar | Pierre Bourdieu, Louis Althusser, Paulo Freire |

[[link:Directly links to Paper 1 Unit 4 (Sociological Theories of Stratification) and Unit 10 (Education and Social Change).]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Education as Modernising Equaliser',
    rightTitle: 'Education as Cultural Reproduction',
    rows: [
      {
        aspect: 'Social Mobility',
        left: 'Enables first-generation Dalit, tribal, and rural learners to access white-collar professions.',
        right: 'Stratified schooling channels poor students to dead-end degrees and elites to global tech hubs.',
      },
      {
        aspect: 'Classroom Pedagogy',
        left: 'Universal curriculum fostering scientific temper, critical thinking, and democratic citizenship.',
        right: 'Krishna Kumar’s "textbook culture": rote memorisation enforcing passivity and obedience.',
      },
      {
        aspect: 'Language Medium',
        left: 'Promotes mother tongue for cognitive growth alongside multilingual fluency.',
        right: 'English operates as a linguistic monopoly: fluent elites capture premium corporate jobs.',
      },
      {
        aspect: 'Higher Education Access',
        left: 'Reservations dismantle upper-caste monopolies in premier public universities.',
        right: 'Multi-lakh coaching factories (Kota model) screen out low-income students before entry.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Stratified Schooling, Coaching Culture, and "The Caste of Merit"

India does not possess a single school system; it operates a deeply segregated, caste-class stratified schooling pyramid:

1. **The Schooling Hierarchy**:
   - *Tier 1: Elite Private Schools* (IB, Cambridge, top CBSE): High tuition, international exposure, fluent English, grooming children for global universities.
   - *Tier 2: Budget Private Schools*: Mushrooming across small towns, often lacking infrastructure and qualified teachers, yet patronized by aspiring lower-middle-class parents fleeing government schools.
   - *Tier 3: Vernacular State Government Schools*: Starved of funds, suffering from teacher absenteeism and single-classroom arrangements, populated overwhelmingly by Dalit, Adivasi, and poor OBC children who rely on the Mid-Day Meal.
2. **Krishna Kumar and "Textbook Culture"**: In *What is Worth Teaching*, educationist [[thinker:Krishna Kumar]] observed that Indian schools devalue subaltern rural experiences. The teacher functions merely as a low-level bureaucrat delivering a rigid textbook, while children learn to regurgitate answers rather than question social power.
3. **Ajantha Subramanian: The Caste of Merit**: In her landmark ethnography *The Caste of Merit: Engineering Education in India*, anthropologist [[thinker:Ajantha Subramanian]] examined how upper-caste (primarily Brahmin) elites at IIT Madras transformed hereditary caste capital into ==The Caste of Merit==. By mastering English, math coaching, and technocratic credentials, they erased caste from their public vocabulary, framing their dominance as "pure, casteless merit" while attacking reservations as corrupt and degrading to institutional standards.
4. **The Shadow Coaching Industry**: [[eg:The multi-crore coaching industry in Kota, Hyderabad, and Delhi (Karol Bagh) charges ₹2 to ₹4 lakhs annually for JEE, NEET, and UPSC preparation. This privatised coaching apparatus acts as a commercial bouncer, ensuring that clearing high-stakes entrance exams depends heavily on family wealth rather than innate capability.]]`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Critical Edge: Ajantha Subramanian’s Concept of "Merit"',
    body: 'Whenever UPSC asks about meritocracy or higher education stratification, invoke Ajantha Subramanian’s "The Caste of Merit". Explain how upper castes converted social and cultural capital accumulated over centuries into modern technocratic credentials, simultaneously delegitimising affirmative action as "anti-merit".',
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Tier 1: Stratified Early Schooling',
        text: 'Elite English-medium ICSE/CBSE schools vs underfunded vernacular government primary schools.',
      },
      {
        label: 'Tier 2: The Coaching Filter',
        text: 'Commercial coaching factories (Kota, JEE/NEET, UPSC) charge lakhs, screening out low-income candidates.',
      },
      {
        label: 'Tier 3: Elite Technocratic Enclaves',
        text: 'IITs, IIMs, and NLUs reward upper-class cultural capital, naturalising privilege as "casteless merit".',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Policy Interventions: RTE Act 2009 and NEP 2020

Over the last two decades, two flagship policy frameworks have attempted to reconfigure India’s educational landscape:

### 1. The Right to Education (RTE) Act, 2009
Enacted under Article 21A, the RTE Act made free and compulsory elementary education (ages 6–14) a justiciable fundamental right.
- **Section 12(1)(c)**: Mandates private unaided schools to reserve at least **25% of entry-level seats** for children from Economically Weaker Sections (EWS) and disadvantaged groups, funded by the state.
- **Sociological Impact and Pitfalls**: While gross enrolment crossed 98%, Pratham's *Annual Status of Education Report (ASER)* consistently revealed a devastating **foundational learning crisis** — nearly half of Class 5 children in rural schools cannot read a Class 2 level sentence or solve basic division. Furthermore, EWS students in elite private schools frequently experience subtle caste and class stigmatisation from teachers and peers.

### 2. The National Education Policy (NEP), 2020
NEP 2020 introduced a structural overhaul from the traditional 10+2 system to a **5+3+3+4 architecture** (Foundational, Preparatory, Middle, Secondary).
- **Key Reforms**: Focus on early childhood care (ECCE), National Mission on Foundational Literacy and Numeracy (NIPUN Bharat), multidisciplinary higher education, and vocational exposure.
- **Sociological Concerns**:
  - *The Mother-Tongue Dilemma*: NEP encourages instruction in regional languages/mother tongues up to Grade 5. While pedagogically sound, sociologists warn that unless elite private schools are equally bound, affluent children will retain fluency in English (the global corporate currency), while subaltern children remain excluded from high-paying knowledge economies.
  - *Digital Divide Exacerbation*: NEP’s heavy push for digital classrooms, DIKSHA, and online degrees ignores severe technological gaps. During COVID-19 school closures, millions of rural and Dalit girls were pushed out of education due to lacking smartphones and internet access.
  - *Commercialisation & Equity Gaps*: NEP facilitates the entry of foreign universities and private investment without clearly enforcing affirmative action or fee caps in private institutions.`,
  },
  {
    kind: 'keyTerm',
    term: 'Cultural Capital (Pierre Bourdieu)',
    meaning:
      'Non-financial social assets including language fluency, aesthetic tastes, knowledge, and educational credentials inherited from family that facilitate upward mobility in stratified societies.',
  },
  {
    kind: 'keyTerm',
    term: 'The Caste of Merit (Ajantha Subramanian)',
    meaning:
      'The sociological process through which upper-caste Indians converted historical social capital into modern, technocratic credentials, framing their privilege as natural "casteless merit" while stigmatising reservation.',
  },
  {
    kind: 'keyTerm',
    term: 'Section 12(1)(c) of RTE Act 2009',
    meaning:
      'A statutory provision obligating private unaided schools to reserve 25% of their entry-level seats for children from economically weaker and disadvantaged sections to promote social integration.',
  },
  {
    kind: 'keyTerm',
    term: 'Stratified Schooling',
    meaning:
      'An educational architecture divided into distinct tiers based on fee structure, medium of instruction, and infrastructure that systematically mirrors and reproduces existing class-caste hierarchies.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Factual Correction Alert for UPSC',
    body: 'The Right of Children to Free and Compulsory Education (RTE) Act was enacted in 2009 (and came into effect on 1 April 2010), not 2019. Always double check enactment dates when contrasting RTE 2009 with NEP 2020.',
  },
  {
    kind: 'answerBox',
    intro:
      'Model Answer Structure: Is educational development the only panacea for India’s ills and evils? A critical evaluation with reference to NEP 2020:',
    points: [
      'The Panacea Argument: Modernists and reformers (Ambedkar, Phule, Kothari Commission) correctly view education as a foundational tool to eradicate superstition, impart skills, and spark subaltern political consciousness.',
      'Cultural Reproduction Critique: Following Bourdieu and Althusser, education without structural equity acts as an institutional sieve that legitimises class privilege under the banner of "merit".',
      'Stratified Schooling Hierarchy: The coexistence of luxury international schools alongside under-resourced rural government schools deepens rather than erases social stratification.',
      'The Shadow Coaching Sieve: Commercialised entrance coaching (Kota model) functions as a wealth barrier, converting higher education entry into a purchasable commodity.',
      'NEP 2020 Dilemmas: While NEP 2020 prioritises foundational literacy and vocational skilling, its digital reliance and mother-tongue medium risk reinforcing the English-vernacular class divide unless backed by 6% GDP public spending.',
    ],
    conclusion:
      'Education is an indispensable catalyst for emancipation, but it cannot be the sole panacea; genuine social transformation demands universal quality common schooling coupled with radical agrarian reform, employment generation, and the annihilation of caste hierarchy.',
  },
]
