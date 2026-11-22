import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic6EnMindMap: MindMapData = {
  title: 'Topic 6 · Illiteracy and Educational Disparities in India',
  center: 'Education, Stratification & Disparities',
  subtitle: 'Bourdieu Cultural Capital • Krishna Kumar Curriculum • ASER & Functional Illiteracy • Pandemic Digital Divide',
  branches: [
    {
      title: '1. Sociological Theories of Schooling',
      color: 'lavender',
      thinkers: ['Pierre Bourdieu', 'Krishna Kumar', 'Émile Durkheim', 'Paulo Freire'],
      points: [
        'Functionalist myth (Parsons): Schooling as meritocratic sorting allocating roles by talent alone',
        'Cultural Capital (Bourdieu): Upper-class linguistic fluency and habitus rewarded as "natural intelligence"',
        'Banking education (Freire): Passive rote learning deadening critical consciousness among subalterns',
        'Krishna Kumar: Textbook-centric pedagogy alienating rural learners and reproducing social hierarchy',
      ],
    },
    {
      title: '2. The Paradox of Functional Illiteracy',
      color: 'yellow',
      thinkers: ['Jean Drèze', 'Amartya Sen', 'A.K. Shiva Kumar', 'Rukmini Banerji'],
      points: [
        'Near-universal enrollment: SSA and RTE Act 2009 driving primary Gross Enrollment Ratios past 95%',
        'ASER (Pratham) learning crisis: ~50% of rural Class 5 students unable to read a Class 2 text',
        'Drèze-Sen critique: Multi-grade classrooms, teacher absenteeism, and absence of accountability',
        'Pedagogic exclusion: Rote examination orientation ignoring foundational literacy and numeracy (FLN)',
      ],
    },
    {
      title: '3. Structural Disparities: Gender, Caste & Tribe',
      color: 'mint',
      thinkers: ['Sukhadeo Thorat', 'B.R. Ambedkar', 'Geetha Nambissan'],
      points: [
        'Caste stigmatization: Thorat documents discrimination in mid-day meals and classroom seating',
        'Linguistic alienation: Tribal children forced into alien state languages without mother-tongue bridge',
        'Gender dropouts: Lack of functional school WASH facilities and puberty domestic labor obligations',
        'Two-tier schooling: Under-resourced state schools for the poor vs elite private English schools',
      ],
    },
    {
      title: '4. English Hegemony & The Digital Divide',
      color: 'pink',
      thinkers: ['Krishna Kumar', 'Andre Béteille', 'Ashwini Deshpande'],
      points: [
        'English as class capital: Elite English-medium schooling gatekeeping white-collar global careers',
        'Pandemic digital divide: Online classrooms excluding subaltern homes lacking smartphones and broadband',
        'NEP 2020 contestations: Mother-tongue instruction vs subaltern aspirations for early English fluency',
        'Foundational skill development: Reorienting education toward democratic capability and vocational dignity',
      ],
    },
  ],
}

export const topic6EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u15-02-social-transformation-challenges.webp',
    alt: 'P2 Unit 15 infographic: Challenges of Social Transformation — Poverty, Violence, Caste-Communal Strife & Literacy Gaps',
    caption:
      'Poverty, Violence, Caste-Communal Strife & Literacy Gaps (Challenges of Social Transformation).',
  },
  {
    kind: 'md',
    body: `## Sociological Perspectives on Education and Social Stratification

In sociological theory, education is rarely an innocent, neutral process of learning. Classical functionalists like [[thinker:Émile Durkheim]] and Talcott Parsons viewed schooling as an indispensable institution of social integration, socializing youth into collective moral values and allocating occupational roles strictly on universalistic, meritocratic achievement. 

However, critical and conflict sociologists argue that formal education systems in stratified societies actively reproduce and legitimize existing class, caste, and gender hierarchies. Instead of acting as the "great equalizer," schooling functions as an institutional filter that transmits intergenerational privilege.

### Pierre Bourdieu: Cultural Capital and Social Reproduction

French sociologist [[thinker:Pierre Bourdieu]] demonstrated that schools are not meritocratic arenas. Rather, the formal curriculum and evaluation criteria are biased toward the ==Cultural Capital== (sophisticated linguistic codes, aesthetic tastes, habitus, and manners) of the dominant class. 

Children from elite backgrounds inherit this cultural familiarity naturally at home, whereas children from subaltern working-class, Dalit, or rural families arrive at school lacking these specific cultural codes. When the school system treats this inherited class privilege as innate individual "merit" or "intelligence," it legitimizes social inequality under the guise of objective examination rankings.

| Theoretical Framework | View of Schooling | Key Proponents | Sociological Consequence |
| :--- | :--- | :--- | :--- |
| **Functionalism** | Meritocratic sorting & moral socialization | Durkheim, Parsons | Legitimizes division of labor based on talent |
| **Cultural Reproduction** | Institutional filter transmitting cultural capital | Bourdieu, Passeron | Converts inherited class privilege into "merit" |
| **Ideological State Apparatus** | Indoctrinating subservience to capital | Louis Althusser | Prepares docile labor force for exploitation |
| **Critical Pedagogy** | Transforming consciousness vs banking model | Paulo Freire, Krishna Kumar | Democratic liberation through critical questioning |

### Krishna Kumar: The Political Agenda of Education

Distinguished Indian sociologist of education [[thinker:Krishna Kumar]], in *What is Worth Teaching?* and *Political Agenda of Education*, examined how the colonial legacy continues to distort Indian schooling. Kumar argued that Indian education is dominated by a rigid, authoritarian, "textbook-culture" where knowledge is treated as a static package of unquestionable facts to be memorized for exams.

This pedagogy actively devalues the rich lived experiences, ecological knowledge, and vernacular oral traditions of rural and indigenous children. The Indian schooling system operates as a sharply polarized ==Two-Tier System==: high-fee, English-medium private academies catering to the metropolitan elite, and underfunded, single-teacher government vernacular schools warehousing rural subaltern children.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Sociological Lens: The English Language as Cultural Monopoly',
    body: 'In UPSC questions on education and mobility, analyze English not merely as a neutral medium of communication, but as what Pierre Bourdieu calls "Linguistic Capital". English fluency functions as an exclusionary gatekeeper, dividing society between the metropolitan elite and vernacular subaltern classes.',
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Universal Enrollment', text: 'RTE Act 2009 drives primary GER beyond 95%' },
      { label: 'Infrastructure Deficit', text: 'Multi-grade teaching, teacher vacancies & no functional toilets' },
      { label: 'Rote Examination', text: 'Textbook memorization without conceptual comprehension' },
      { label: 'Functional Illiteracy', text: 'Class 5 students unable to read Class 2 textbooks (ASER)' },
    ],
  },
  {
    kind: 'md',
    body: `## The Paradox of Universal Schooling and Functional Illiteracy

Through nationwide statutory interventions like the Sarva Shiksha Abhiyan (SSA) and the ==Right to Education (RTE) Act, 2009==, India achieved near-universal primary school enrollment, with Gross Enrollment Ratios (GER) exceeding 95%. However, sociologists and educational researchers emphasize that enrollment has failed to translate into substantive learning.

This phenomenon is conceptualized as ==Functional Illiteracy== or "Learning Poverty" — a condition where a student possesses formal certificates of school attendance but lacks basic reading, writing, and arithmetic skills necessary for independent civic functioning and economic productivity.

### The ASER Findings: The Learning Crisis

The annual surveys conducted by the NGO Pratham (Annual Status of Education Report — ASER) have consistently revealed the staggering depth of India's learning crisis:
- Approximately 50% of children enrolled in Class 5 in rural government schools cannot fluently read a simple Class 2 textbook.
- Nearly 75% of Class 5 students struggle to perform simple three-digit by one-digit mathematical division.
- Post-pandemic assessments revealed a severe deterioration in basic foundational literacy and numeracy across rural primary cohorts.

Sociologists [[thinker:Jean Drèze]] and [[thinker:Amartya Sen]], in *An Uncertain Glory: India and its Contradictions*, attribute this tragedy to structural underfunding, high teacher absenteeism, multi-grade teaching where a single instructor manages several classes simultaneously, and an uninspiring rote curriculum completely detached from foundational comprehension.

[[eg:In rural primary schools across Uttar Pradesh and Bihar, students routinely advance to Class 8 under the "no-detention" policy without acquiring the ability to read a simple newspaper headline in their vernacular language.]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Elite Private English-Medium Schools',
    rightTitle: 'Rural Government Vernacular Schools',
    rows: [
      {
        aspect: 'Cultural Capital Imparted',
        left: 'Fluent English, digital proficiency, cosmopolitan debate culture',
        right: 'Passive vernacular rote memorization and mechanical copying',
      },
      {
        aspect: 'Infrastructure Quality',
        left: 'Smart classrooms, STEM laboratories, libraries, and clean sports grounds',
        right: 'Dilapidated buildings, multi-grade rooms, and broken sanitation facilities',
      },
      {
        aspect: 'Social Composition',
        left: 'Upper castes, urban middle class, and bureaucratic-corporate elites',
        right: 'Predominantly Dalits, Adivasis, Most Backward Classes, and migrant labor',
      },
      {
        aspect: 'Higher Education Mobility',
        left: 'Seamless transition to prestigious IITs, IIMs, NLUs, and global universities',
        right: 'High dropouts; relegated to unaccredited local degree colleges or gig work',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Structural Disparities: Gender, Caste, Tribe and the Digital Divide

Educational disparities in India are structured along deeply entrenched axes of social stratification:

### Caste and Tribal Marginalization

Sociologist [[thinker:Sukhadeo Thorat]]’s field studies revealed that Dalit and Adivasi children encounter covert and overt institutional discrimination within public school environments. In many rural schools, Dalit students are seated in separate rows during mid-day meals or forced to wash their own utensils while dominant-caste peers are served separately.

Educational anthropologist [[thinker:Geetha Nambissan]] highlights the acute linguistic alienation experienced by tribal children. When children belonging to Santhal, Gond, or Bhil communities enter primary school, textbooks and instruction are conducted entirely in the standard regional state language (Odia, Hindi, Marathi, Telugu). Lacking mother-tongue bridge education in early childhood, tribal learners experience severe cognitive disorientation, resulting in staggering primary dropout rates.

### Gender Gaps and Spatial Sanitation

While primary gender parity in enrollment has improved, secondary school female attrition remains acute. Millions of adolescent girls drop out upon attaining puberty due to the absence of separate, functional, water-equipped toilets in rural schools. Furthermore, patriarchal norms designate elder daughters as secondary caretakers responsible for fetching water, cooking, and sibling supervision whenever agrarian economic shocks hit the household.

### Krishna Kumar on the Pandemic Digital Divide

The COVID-19 pandemic laid bare the brutal reality of the ==Digital Divide== in Indian education. As schools shuttered for nearly two years and classes migrated to online smartphone apps, education became contingent on private digital infrastructure.

Sociologist [[thinker:Krishna Kumar]] observed that the digital transition exacerbated educational apartheid. Studies by the Azim Premji University revealed that over 60% of rural government school students had zero access to a functional smartphone or internet connectivity. Children of daily-wage laborers, migrant workers, and rural subalterns suffered catastrophic learning regression, with many forced into child labor or early marriage, while affluent private school learners continued online instruction uninterrupted.

[[link:Paper 1 Science, Technology & Social Change: The pandemic digital divide illustrates how technology in a stratified society reinforces class polarization rather than democratizing access.]]`,
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Yaad Rakho: Foundational Literacy & Numeracy (FLN)',
    body: 'Under NEP 2020 and the NIPUN Bharat mission, Foundational Literacy and Numeracy (FLN) by Class 3 is recognized as an indispensable prerequisite for all subsequent educational attainment. Without FLN, schooling becomes meaningless credentialism without learning.',
  },
  {
    kind: 'keyTerm',
    term: 'Functional Illiteracy',
    meaning: 'The inability to use reading, writing, and computational skills for daily life and work despite having attended formal school.',
  },
  {
    kind: 'keyTerm',
    term: 'Cultural Capital',
    meaning: 'Pierre Bourdieu’s concept of class-based non-financial assets (linguistic style, cultural familiarity, aesthetic knowledge) rewarded by educational systems.',
  },
  {
    kind: 'keyTerm',
    term: 'Two-Tier Schooling System',
    meaning: 'Krishna Kumar’s analysis of the structural divide separating elite English private academies from under-resourced public vernacular schools.',
  },
  {
    kind: 'keyTerm',
    term: 'Learning Poverty',
    meaning: 'A World Bank and UNESCO metric measuring the share of children who cannot read and understand a simple text by age ten.',
  },
  {
    kind: 'keyTerm',
    term: 'Linguistic Alienation',
    meaning: 'Geetha Nambissan’s concept describing the cognitive marginalization of tribal students when instructed in dominant state languages rather than their native mother tongues.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karo: Don’t Confuse Literacy Rate with Educational Equality',
    body: 'Never quote the national literacy rate (74.04% in Census 2011 or ~77% in NSO 2017) as proof of educational success. Census literacy merely measures the ability to sign one’s name. Acknowledge ASER data showing the severe crisis of functional illiteracy and learning disparities.',
  },
  {
    kind: 'answerBox',
    intro:
      'A model sociological answer evaluating functional illiteracy, educational disparities, and the reproduction of inequality must integrate critical pedagogy, field evidence, and structural stratification:',
    points: [
      'Émile Durkheim’s meritocratic functionalism is challenged by Pierre Bourdieu’s Cultural Capital, demonstrating that formal schooling rewards inherited elite habitus as natural merit.',
      'Krishna Kumar’s analysis of the textbook-centric curriculum and two-tier schooling system explains how public-private divides cement intergenerational class and caste stratification.',
      'ASER empirical data documents the persistence of functional illiteracy, where ~50% of rural Class 5 students cannot read Class 2 text despite near-universal primary enrollment under RTE 2009.',
      'Sukhadeo Thorat and Geetha Nambissan substantiate how caste discrimination in mid-day meals and linguistic alienation in tribal schooling drive acute subaltern dropout rates.',
      'The pandemic digital divide, as observed by Krishna Kumar, converted private hardware access into an exclusionary filter, accelerating learning loss among the informal precariat.',
    ],
    conclusion:
      'Democratizing education requires implementing mother-tongue foundational pedagogy, revitalizing the common school system, and guaranteeing digital infrastructure as an inalienable public good.',
  },
]
