import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Sociology separates natural human differences from socially constructed inequality, hierarchy, poverty, deprivation, and exclusion—revealing how power, Sen’s capability gaps, and Bourdieu’s four capitals turn unequal starting lines into entrenched marginalisation.'

const mindMap: MindMapData = {
  title: 'Unit 5.1 · Equality, Inequality, Hierarchy, Poverty & Exclusion',
  center: 'Core Stratification Concepts',
  subtitle: 'Difference -> Inequality -> Hierarchy -> Exclusion & Deprivation',
  branches: [
    {
      title: 'Equality & Inequality',
      color: 'lavender',
      thinkers: ['Jean-Jacques Rousseau', 'Peter Saunders', 'André Béteille', 'Wilkinson & Pickett'],
      points: [
        'Saunders: Formal Equality, Opportunity, and Outcome (opportunity creates unequal outcomes)',
        'Rousseau & Béteille: nature makes differences; society turns them into inequality',
        'Béteille: Harmonic vs Disharmonic systems; Cumulative vs Dispersed inequalities',
        'Weber: Life-chances (structural access) vs Life-style (status consumption)',
      ],
    },
    {
      title: 'Hierarchy & Stratification',
      color: 'yellow',
      thinkers: ['Louis Dumont', 'B.R. Ambedkar', 'Dipankar Gupta', 'Ralf Dahrendorf'],
      points: [
        'Stratification ranks conscious social groups; hierarchy ranks posts or ritual status',
        'Dumont: Homo Hierarchicus sees caste as pure ritual hierarchy (purity/pollution)',
        'Ambedkar: Graded inequality blocks solidarity across oppressed castes',
        'Gupta: Discrete castes and muddled hierarchies challenge single-scale ranking',
      ],
    },
    {
      title: 'Poverty & Deprivation',
      color: 'mint',
      thinkers: ['Amartya Sen', 'Pierre Bourdieu', 'Oscar Lewis', 'Herbert Gans'],
      points: [
        'Absolute (BPL/Tendulkar/Rangarajan) vs Relative poverty (Townsend, MPI)',
        'Oscar Lewis (Culture of Poverty) vs Valentine & Liebow (Situational Constraints)',
        'Merton & Stouffer: Relative deprivation driven by reference-group comparison',
        'Sen (Capability Deficit) vs Bourdieu (Economic, Social, Cultural, Symbolic Capitals)',
      ],
    },
    {
      title: 'Social Exclusion & Self-Exclusion',
      color: 'pink',
      thinkers: ['Haralambos', 'John Veit-Wilson', 'Ashley Tellis', 'Gayle Rubin'],
      points: [
        'Systemic denial of rights, spaces, banking, and dignity beyond low income alone',
        'Forced exclusion (untouchability, transgender abandonment) vs self-exclusion (ghettos)',
        'Veit-Wilson: Weak (re-integrate individuals) vs Strong (dismantle excluding power)',
        'Paper 2 link: Constitutional Art 17, RTE 2009, NALSA 2014, affirmative action',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u05-02-mobility-dimensions-exclusion.webp',
    alt: 'Four-panel diagram showing Bourdieu capitals, mobility ladder, absolute vs relative poverty, Oscar Lewis vs situational constraints, capability approach, and structural vs self-exclusion',
    caption:
      'Poverty, capability deficits, Bourdieu’s four capitals, and forced versus self-exclusion interlock to lock disadvantaged groups out of full social participation.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 5 Visual 02',
  },
  {
    kind: 'md',
    body: `## From Natural Difference to Social Inequality and Stratification

Look closely at any two people standing side by side—even siblings raised in the same household. Nature makes one taller, another quicker with words, and gives them different skin tones or temperaments; by themselves, these are neutral ==natural differences==, not moral ranks. Inequality begins only when society attaches unequal power, honour, or income to selected traits while declaring others inferior. As [[thinker:André Béteille]] puts it, nature merely creates diversity, whereas culture and institutions transform those differences into ==social inequality==.

To keep these foundational terms crisp in UPSC answers, distinguish four ideas carefully:
- **Equality (Formal, Opportunity, Outcome):** [[thinker:Harold Laski]] defines equality as preventing anyone from dominating a neighbour enough to deny basic citizenship. [[thinker:Peter Saunders]] distinguishes ==Formal Equality== (equal standing before law, unlike unequal punishments in ancient texts), ==Equality of Opportunity== (a fair starting line, such as open UPSC competition), and ==Equality of Outcome== (identical final rewards). [[trap:Perfect equality of opportunity still produces unequal outcomes—because out of a million UPSC aspirants given the same exam paper, only around a thousand enter the services, widening future wealth and prestige.]]
- **Natural vs Moral Inequality:** [[thinker:Jean-Jacques Rousseau]] separated minor physical differences (age, strength) from decisive ==moral or political inequality== created by human convention—inherited estates, wealth, and arbitrary privilege. [[eg:Indian matrimonial columns demanding "fair" brides or corporate hiring favouring elite English accents convert neutral traits into social barriers.]]
- **Individual Inequality vs Social Stratification:** Mere income gaps along a continuous ladder (earning ₹15,000 versus ₹18,000 versus ₹90,000) represent individualised inequality if people share no group identity. ==Social stratification== arises when vertically ranked *groups* (castes, classes, racial strata) share common interests, subcultures, life-chances, and collective self-identification. [[thinker:Richard Wilkinson]] and [[thinker:Kate Pickett]] show in *The Spirit Level* that wider inequality raises chronic stress, erodes civic trust, and increases violence even inside wealthy nations.
- **Harmonic vs Disharmonic Systems:** [[thinker:André Béteille]] contrasts ==harmonic systems== (like traditional caste, where unequal norms and unequal reality matched) with ==disharmonic systems== (like modern democracies, where constitutional equality clashes with lived poverty and caste-class gaps), noting a parallel shift from ==cumulative inequality== (upper caste = rich = powerful) toward partially ==dispersed inequality==.

### Life-Chances vs Life-Style

[[thinker:Max Weber]] introduced two paired concepts to capture how market position and social honour shape everyday life differently. **Life-chances** are your objective structural odds of obtaining vital material and developmental goods—clean water, quality schooling, healthcare, job security, and life expectancy. **Life-style** covers the visible cultural habits, dress, leisure, speech, and consumption patterns through which a status group displays its honour.

[[eg:Two families earning identical ₹12 lakh annual incomes in Bengaluru may enjoy similar life-chances in buying health insurance, yet display contrasting life-styles—an orthodox priestly household prioritising classical music and vegetarian rituals versus a startup manager spending on craft coffee, marathons, and club memberships.]]

## Hierarchy: Official Command, Purity, and Contested Scales

While everyday speech treats hierarchy and stratification as synonyms, sociology draws a sharp line between them. ==Hierarchy== is a vertical ranking of positions or ritual grades arranged along a single axis of superiority, subordination, and obedience, where privileges belong to the rank or post rather than the person alone. Think of an army or district administration: an IAS probationer stepping into a District Collector’s chair immediately exercises statutory authority attached to that office.

In studying society, three major perspectives debate how hierarchies are built and sustained:
- **Ritual Hierarchy ([[thinker:Louis Dumont]]):** In *Homo Hierarchicus*, Dumont argued that Hindu caste is uniquely a ritual hierarchy governed by a single religious opposition between ==purity and pollution==, standing apart from Western material class stratification.
- **Graded Inequality ([[thinker:B.R. Ambedkar]]):** Ambedkar exposed caste not as a harmless division of labour but an unnatural ==division of labourers== arranged in an ascending scale of reverence and descending scale of contempt. Because every middle tier cherishes superiority over those below it, graded inequality prevents oppressed groups from uniting against the top.
- **Muddled Hierarchies ([[thinker:Dipankar Gupta]]) & Authority ([[thinker:Ralf Dahrendorf]]):** Gupta challenged Dumont by showing there is no unanimous purity ranking across India—discrete castes assert proud alternative origin myths (like Jat or Rajput claims rejecting Brahminical supremacy), producing ==muddled hierarchies== rather than one consensual ladder. Meanwhile, Dahrendorf traced conflictual hierarchy across modern firms and states to institutionalised **authority structures** backed by coercive, political, and ideological power.

## Poverty, Deprivation, Sen vs Bourdieu

Poverty is far more than having an empty wallet or eating fewer calories; sociologists treat it as multi-dimensional exclusion from living with dignity. In narrow policy terms, ==absolute poverty== fixes a survival basket (historically calorie anchors like 2400 rural / 2100 urban kcal; later updated by the ==Tendulkar Committee 2009== shifting toward expenditure on food, education, and health at 21.9% BPL, and the ==Rangarajan Committee 2014== at 29.5%), whereas ==relative poverty== ([[thinker:Peter Townsend]]) measures whether households fall behind their society’s prevailing standard—such as lacking smartphones or indoor sanitation today. India’s ==NITI Aayog Multidimensional Poverty Index (MPI)== tracks 12 indicators across nutrition, schooling, sanitation, electricity, and assets.

Why does poverty persist across generations? Four sociological explanations clash sharply:
- **Culture of Poverty ([[thinker:Oscar Lewis]]):** Argues poor families pass down fatalism, helplessness, and present-time orientation across generations.
- **Situational Constraints ([[thinker:Charles Valentine]], [[thinker:Elliot Liebow]]):** Rejects victim-blaming; spending a spare ₹50 today instead of saving is rational adaptation when ₹50 cannot buy housing, insurance, or upward mobility.
- **Functional & Marxist Perspectives:** [[thinker:Herbert Gans]] notes poverty "functions" for the non-poor by supplying cheap menial labour and welfare-sector jobs, while [[thinker:Karl Marx]] treats the poor as capitalism’s ==reserve army of labour== alongside the marginalised ==lumpenproletariat==.
- **Vicious Circle ([[thinker:Ragnar Nurkse]], [[thinker:Ken Coates]]):** Poor nutrition and forced child labour undercut schooling, reproducing low-wage adult traps.

| Approach | Core Focus | Primary Thinkers | Explanation of Chronic Poverty |
| --- | --- | --- | --- |
| Capability Deprivation | Unfreedoms in health, literacy, agency | Amartya Sen | Income fails to convert into real human functionings |
| Social Capital Deprivation | Weak networks, elite connections | Pierre Bourdieu | Exclusion from trust, patronage, and hiring circles |
| Subcultural Thesis | Fatalistic norms and habits | Oscar Lewis | Intergenerational habits trap families at bottom |
| Situational Constraints | Blocked structural options | Valentine, Liebow | Rational response to insecure wages and zero cushion |

Beyond income lines, **deprivation** can be absolute (missing food, shelter, healthcare) or ==relative deprivation==—feeling unjustly deprived when comparing oneself against a **reference group** ([[thinker:Samuel Stouffer]] in *The American Soldier*; expanded by [[thinker:Robert K. Merton]] and [[thinker:W.G. Runciman]]). Most powerfully for UPSC 2025, [[thinker:Amartya Sen]] defines chronic poverty as ==capability deprivation==—lacking real freedoms to live healthily, learn, participate in civic life, and appear in public without shame—whereas [[thinker:Pierre Bourdieu]] links chronic persistence to unequal inheritance of ==four capitals==: economic (wealth), ==social capital== (influential networks or *pahunch* / *jugaad*), ==cultural capital== (elite schooling, accents, "legitimate taste" in art and food), and ==symbolic capital== (honour and credentials).

## Social Exclusion, Self-Exclusion & Policy Interventions

[[thinker:Haralambos]] defines ==social exclusion== as multiple, interlocking structural deprivations that push individuals or communities to the margins (*bedakhali*), barring them from ordinary civic life—schools, banks, courts, housing, and public streets—even when they are not income-poor. [[eg:In Waiting for a Visa, B.R. Ambedkar recounted how Dalit children were barred from touching village water and forced to drive their own bullock cart while the upper-caste cartman walked beside them to avoid ritual pollution—showing untouchability as total exclusion.]] Similarly, transgender persons in India often lose the one shelter available to other marginalised groups—their natal family—and face classroom pushout, street violence, and livelihood marginalisation despite ancient cultural visibility (such as *Ardhanarishvara* or *Badhai* blessings) prior to colonial criminalisation and modern socio-legal recovery via the 2014 NALSA judgment ([[thinker:Ashley Tellis]], [[thinker:Gayle Rubin]]).

Crucially, distinguish **forced exclusion** from **self-exclusion**:
- **Forced Social Exclusion:** Dominant institutions deny housing, credit, temple entry, or jobs through systemic bias (e.g., disabled citizens barred by stair-only public offices, LGBTQIA+ workplace bias, or migrants denied documentation).
- **Defensive Self-Exclusion (Ghettoisation):** Groups pushed out by hostile neighbourhoods cluster inside defensive enclaves (*mohallas* in Old Delhi or Old Kanpur; Black urban ghettos in the US) or withdraw entirely (such as Sentinelese and Jarawa communities). Elite gated enclaves with private guards represent an upper-class flip side—voluntary separation to hoard privilege.

[[thinker:John Veit-Wilson]] differentiates **weak social exclusion** policies (re-training dropouts or giving cash transfers without touching privilege) from **strong social exclusion** reforms (attacking structural gatekeepers via Article 17 abolition of untouchability, the Right to Education Act 2009, SC/ST Prevention of Atrocities protections, progressive taxation, and MGNREGA). [[link:Connect this directly in Paper 2 Unit 4 (Untouchability) and Unit 15 (Poverty, Deprivation and Inequalities).]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Life-Chances (Material Structure)',
    rightTitle: 'Life-Style (Status Culture)',
    rows: [
      {
        aspect: 'Sociological Source',
        left: 'Max Weber’s economic class and market position',
        right: 'Weber’s status group honour and Pierre Bourdieu’s habitus',
      },
      {
        aspect: 'Core Substance',
        left: 'Odds of gaining health, quality education, wealth, longevity',
        right: 'Dress, language accent, diet, leisure, housing tastes',
      },
      {
        aspect: 'Visibility & Boundary',
        left: 'Measured in life expectancy, infant mortality, college access',
        right: 'Visible daily markers signalling insider vs outsider status',
      },
      {
        aspect: 'Indian Illustration',
        left: 'Private vs crumbling rural clinics; English coaching access',
        right: 'Classical arts, club memberships, vegetarian purity norms',
      },
      {
        aspect: 'Mobility Impact',
        left: 'Unlocks generational economic and career advancement',
        right: 'Polices marriage circles and social closure even when incomes match',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Ascribed & Class Deficit',
        text: 'Born into low economic, cultural, or caste standing (Bourdieu & Ambedkar)',
      },
      {
        label: 'Capability Deprivation',
        text: 'Malnutrition, weak schooling, and digital/health gaps limit real freedom (Sen)',
      },
      {
        label: 'Systemic Exclusion',
        text: 'Blocked from formal credit, safe housing, and influential hiring networks',
      },
      {
        label: 'Defensive Self-Exclusion',
        text: 'Spatial ghettoisation and distrust weaken mobility hopes across generations',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Life-Chances vs Life-Style',
    meaning:
      'Life-chances are a person’s structural opportunities for health, education, and wealth based on market position, whereas life-style is the distinctive consumption and cultural conduct expressing status honour.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'Graded Inequality',
    meaning:
      'A hierarchical caste ladder where each tier possesses marginally more dignity than the tier below, preventing oppressed strata from uniting against the top.',
    thinkerSlug: 'br-ambedkar',
  },
  {
    kind: 'keyTerm',
    term: 'Relative Deprivation',
    meaning:
      'A subjective sense of lacking rewards or respect experienced when individuals compare their condition unfavourably against a chosen reference group.',
    thinkerSlug: 'robert-k-merton',
  },
  {
    kind: 'keyTerm',
    term: 'Capability Deprivation',
    meaning:
      'Amartya Sen’s formulation of poverty not merely as low cash income, but as the absence of substantive freedoms—health, literacy, safety, and civic dignity—to lead a valued life.',
  },
  {
    kind: 'keyTerm',
    term: 'Social Exclusion',
    meaning:
      'Systemic institutional processes that cut groups off from full participation in education, markets, public spaces, and civic rights beyond income poverty alone.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'br-ambedkar',
    quote: 'Caste system is not merely division of labour. It is also a division of labourers.',
    context: 'Capturing how Hindu caste hierarchy grades workers into unequal, hereditary tiers of dignity and servitude.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'The history of all hitherto existing society is the history of class struggles.',
    context: 'Framing inequality and poverty as products of exploitative property relations rather than natural necessity.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC 2025 Lens: Sen + Bourdieu + Ambedkar = Top Marks',
    body: 'Whenever UPSC asks about poverty, deprivation, or hierarchy (like the 2025 Sen vs Bourdieu PYQ), avoid writing a generic GS Economics essay on BPL lines alone. Anchor your sociology answer in Amartya Sen (capability poverty), Pierre Bourdieu (four capitals), Robert K. Merton (relative deprivation), and Ambedkar/Dumont/Gupta (graded vs ritual hierarchy).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Treating Poverty and Social Exclusion as Identical',
    body: 'Never equate low income with social exclusion. A well-off Dalit family facing rental discrimination in a metro city or a transgender professional from an affluent home rejected by natal kin experiences severe social exclusion without income poverty—while many poor households suffer compounded economic AND spatial exclusion.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Quick Accuracy Check: India Poverty & Constitutional Anchors',
    body: 'Remember the Tendulkar Committee (2009) moved away from pure calorie norms to consumption expenditure including health and education (21.9% BPL in 2011-12), followed by Rangarajan (29.5%) and NITI Aayog’s 12-indicator MPI. Always pair Article 17 (untouchability abolition) and the RTE Act 2009 with Veit-Wilson’s strong vs weak exclusion lens.',
  },
  {
    kind: 'answerBox',
    intro:
      'Equality, inequality, hierarchy, poverty, deprivation, and exclusion form an interlocking conceptual chain explaining how neutral human diversity hardens into durable injustice.',
    points: [
      'Equality & Inequality: Equality of opportunity (Saunders) cannot guarantee equal outcomes when starting capitals differ; society converts natural variation into moral inequality (Rousseau, Béteille).',
      'Hierarchy & Power: Unlike horizontal diversity, hierarchy ranks offices or status grades vertically—manifesting as ritual purity (Dumont), muddled discrete castes (Gupta), or graded inequality (Ambedkar).',
      'Poverty & Poor Living: Beyond calorie/BPL metrics, Sen’s capability deficit and Bourdieu’s social/cultural capital gaps explain why chronic poverty persists across generations.',
      'Forced vs Self-Exclusion: Systemic exclusion blocks marginalized castes, women, disabled, and transgender persons from full citizenship, sometimes triggering defensive ghettoisation or elite enclaves.',
      'Way Forward: Strong anti-exclusion policy (Veit-Wilson) combines universal health/education capabilities with anti-discrimination law and democratic mobilisation.',
    ],
    conclusion:
      'Understanding these six concepts together prevents biological or victim-blaming myths and equips policymakers to address both material deficits and structural exclusion.',
  },
]

export const topic1En: TopicLangContent = { summary, mindMap, sections }