import type { NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3MindMapEn } from './topic-3-mindmaps'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Rigorous sociological research operationalises social reality into clear variables, guides inquiry through falsifiable hypotheses, selects representative probability or purposive samples, and balances repeatable reliability with deep validity—especially when measuring subtle caste, class, and gender inequalities.'

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u03-02-variables-validity-bullseye.webp',
    alt: 'Infographic showing hypothesis types, independent dependent intervening variables, and 2x2 reliability versus validity bullseye targets',
    caption:
      'Think of reliability as tight shot consistency and validity as hitting the true centre target—sociology needs both to turn raw data into trustworthy knowledge.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 3 Visual 02',
  },
  {
    kind: 'md',
    body: `## Data, Information, and Operationalisation

Every empirical project begins with raw facts—individual death slips, school attendance sheets, or wage receipts—which sociologists call ==data== (*tathya*). Standing alone, raw data stays mute; only when a researcher organises, classifies, and interprets patterns does it become actionable ==information== (*jankari*), just as [[thinker:Emile Durkheim]] converted dusty French police registries into breakthrough rates linking suicide to religion and marriage.

To study intangible social concepts like democracy, caste exclusion, or poverty quantitatively, scholars first perform ==operationalisation==—translating an abstract concept into observable, measurable indicators. [[eg:The Economist Intelligence Unit Democracy Index measures democracy through five observable pillars including pluralism, voter participation, and civil liberties, while India's Multidimensional Poverty Index combines health, schooling, and housing indicators.]]

## Variables: Types, Experimental Control, and Spuriousness

A ==variable== is any personal trait or social condition—age, caste, education, monthly wage, or prejudice—whose value varies across people or situations. Without clear variables, researchers cannot test causes, run experiments, or separate real patterns from coincidence.

Sociologists classify variables along two primary axes:

- **Quantitative vs Qualitative Variables:** Numeric variables record measurable quantities like monthly income or years of schooling, whereas categorical variables assign group membership like marital status, caste, or urban versus rural residence.
- **Independent (IV), Dependent (DV), and Intervening Variables:** The ==independent variable== acts as the causal driver, while the ==dependent variable== is the outcome shaped by it. Crucially, the same factor flips roles depending on your research question: in Hypothesis A (education raises earnings), education is the IV and income is the DV; in Hypothesis B (family wealth boosts schooling), income becomes the IV! Between them often sits an ==intervening variable== explaining how or when the link works. [[eg:In rural India, poverty (IV) normally drives hunger (DV), yet welfare safety nets like MGNREGA wages and PDS ration cards act as intervening variables softening hunger.]]
- **Experimental vs Control Groups:** In experimental research—such as Albert Bandura's Bobo Doll study on media violence—one group (experimental) receives the IV stimulus while an identical **control group** does not, holding **extraneous variables** steady. Outside labs, **field experiments** struggle against uncontrolled variables like weather or shifting street crowds seen in Sisson's helpfulness tests.

[[trap:Correlation is not causation! Two variables moving together positively or negatively may reflect a hidden third factor creating a spurious correlation—for example, high income and good health often rise together because formal education drives both, while crowded slums and delinquency often stem jointly from poverty.]]

## Hypothesis: Sources, Types, and Critical Evaluation

A ==hypothesis== is neither a blind guess nor a settled assumption; it is a crisp, tentative statement predicting a testable relationship between two or more variables. As Robert Dubin emphasised, a hypothesis sits closest to observable reality inside any theoretical model.

Researchers draw hypotheses from existing literature (such as Amartya Sen and Jean Drèze's studies on schooling and deprivation), logical deduction from classical theories like Durkheim's *Suicide*, pilot fieldwork, personal observation, and expert dialogue. Key forms include **simple hypotheses** (two variables like illiteracy and poverty), **complex hypotheses** (multiple interacting causes such as caste, illiteracy, and informal wage traps), **directional hypotheses**, and the paired **Null Hypothesis (H0)** (claiming no relationship) versus **Alternative Hypothesis (H1)**.

[[eg:Testing "illiteracy raises household poverty" operationalises literacy rates against Multidimensional Poverty scores across Indian districts—and even if empirical data disproves the link and supports H0, Karl Popper reminds us falsification sharpens sociological truth.]]

A strong hypothesis keeps minimal variables (usually two), remains strictly relevant, uses precise wording (never vague "may or may not" phrasing), and stays empirically falsifiable. **Critically evaluating its role:** hypotheses focus research energy, guide tool design, and link abstract theory to real facts—yet rigid pre-set hypotheses can breed **confirmation bias** or tunnel vision. Therefore, exploratory ethnographers and Barney Glaser and Anselm Strauss's ==Grounded Theory== deliberately start without a hypothesis so theory grows organically from open data.

## Sampling: Probability vs Non-Probability Strategies

Why does a doctor draw one small vial of blood instead of draining your body, or a shopper inspect one handful of rice from a hundred-kilo sack? Because studying the entire **Universe** (target population) drains impossible time and money, sociologists select a representative subset called a ==sample== from a master list called the ==sampling frame== (like India's Electoral Roll, noting that homeless citizens or seasonal migrants often fall out of such lists).

### Probability Sampling (Equal, Known Selection Chance)

Every member of the sampling frame holds a known, non-zero chance of selection, stripping away researcher favouritism and boosting both statistical **reliability** and **external validity**:

- **Simple Random Sampling (SRS):** Assign unique numbers (e.g., 1–200 students) and pick purely by lottery or random generator.
- **Systematic Sampling:** Choose a random starting point and pick every *n*-th entry at fixed intervals (e.g., every 20th name on a roll list).
- **Stratified Random Sampling:** Split the population into homogeneous strata (such as 25% female and 75% male students, or age cohorts) and sample proportionately within each—far more accurate than SRS when prior demographic data exists.
- **Cluster & Multi-Stage Sampling:** Used across vast geography like India's ~90-crore electorate—first randomly selecting clusters among 543 Lok Sabha constituencies, then sub-sampling specific polling booths inside them.

### Non-Probability Sampling (Purposeful or Practical Selection)

When no complete sampling frame exists or hidden communities resist official lists, researchers rely on non-random techniques—trading statistical generalisability for targeted access:

- **Convenience & Volunteer Sampling:** Surveying accessible groups (one's own coaching batch) or self-selected volunteers (20 students reviewing Karol Bagh mess food, often skewed toward extreme complainers).
- **Purposive & Quota Sampling:** Deliberately picking key informants (union leaders) or setting analytical minimums (such as 5 sociology graduates or 15 minority respondents out of 20 regardless of class share, unlike proportional stratified sampling).
- **Snowball Sampling:** Chain-referral sampling where one trusted contact—like a formerly jailed worker, undocumented migrant, or stigmatised minority—refers the next, rolling from 1 to 2 to 4+ participants.

| Strategy | Selection Mechanism | Best Use Case | Core Limitation |
| --- | --- | --- | --- |
| Simple & Systematic | Equal chance via lottery or interval | Clean list with homogeneous population | May miss small subgroups by luck |
| Stratified Random | Proportionate draw within known strata | Heterogeneous society needing precision | Requires accurate prior census data |
| Multi-Stage Cluster | Random hierarchy of geographical areas | Nationwide polls (Lok Sabha / NFHS) | Higher sampling error per stage |
| Snowball & Quota | Chain referrals or fixed analytical targets | Hidden, criminalised, or niche groups | Weak statistical generalisability |

## Reliability, Validity, and Research on Inequality

Imagine weighing potatoes on two scales: Scale A flashes 70 kg, 100 kg, and 40 kg (broken consistency), while Scale B reads 70, 71, and 69 kg repeatedly. ==Reliability== means repeatability and consistency across trials, whereas ==validity== means whether your instrument truly measures what it claims to measure. Measuring body weight with an accurate thermometer is highly reliable yet completely invalid!

Researchers verify **reliability** through four standard tests: **Test-Retest** (repeating the same survey weeks later), **Parallel / Alternate Forms** (comparing two equivalent versions), **Inter-Rater / Inter-Observer** (checking whether different coders rate caste bias identically), and **Split-Half / Internal Consistency** (Cronbach's alpha checking if Likert items cohere). For **validity**, sociologists check content coverage, construct alignment, internal causality, and external generalisability—watching sharply for cultural bias. [[eg:CSAT-style abstract IQ puzzles have high test-retest reliability yet fail as valid intelligence measures when urban test-takers outperform rural Jharkhand youth simply due to exam familiarity.]]

**Resolving Reliability and Validity in Inequality Research:** Studying caste, informal wealth, or domestic patriarchy creates acute measurement distortion because elites hide assets, marginalised respondents fear backlash, and upper-caste researchers overlook lived humiliation ([[thinker:B.R. Ambedkar]] on graded inequality). Sociologists resolve this tension by: (1) combining household surveys (NSS, SECC) with village ethnography via **triangulation**; (2) using **multi-dimensional indicators** rather than cash income alone; (3) adopting **standpoint reflexivity** (Ann Oakley; Sharmila Rege); and (4) keeping **daily field diaries**, training staff uniformly, conducting peer audits, and openly reporting contradicting cases.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Reliability (Consistency)',
    rightTitle: 'Validity (Truthfulness)',
    rows: [
      {
        aspect: 'Core Question',
        left: 'Do repeated uses under equal conditions give matching results?',
        right: 'Does the tool truly capture the social concept claimed?',
      },
      {
        aspect: 'Classic Analogy',
        left: 'Scale reading 70, 71, 69 kg consistently; tight dart cluster',
        right: 'Darts hitting the bullseye centre; thermometer measures heat not weight',
      },
      {
        aspect: 'Verification Checks',
        left: 'Test-Retest, Parallel Forms, Inter-Rater, Split-Half alpha',
        right: 'Construct, Content, Criterion, Internal & External validity',
      },
      {
        aspect: 'Method Affinity',
        left: 'High in standardised surveys, Census, and closed schedules',
        right: 'High in immersive ethnography, Verstehen, and life histories',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Operationalise', text: 'Turn concepts (poverty, status) into observable indicators' },
      { label: 'Frame Hypothesis', text: 'Specify clear IV, DV, and falsifiable Null (H0) link' },
      { label: 'Draw Sample', text: 'Use probability or purposive sampling matching your frame' },
      { label: 'Test Reliability', text: 'Run test-retest, inter-rater, and internal consistency checks' },
      { label: 'Secure Validity', text: 'Triangulate surveys with fieldwork to beat cultural bias' },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Operationalisation',
    meaning:
      'Converting abstract sociological ideas like democracy, socio-economic status, or deprivation into concrete, observable indicators that can be recorded consistently.',
  },
  {
    kind: 'keyTerm',
    term: 'Spurious Correlation',
    meaning:
      'A misleading statistical link between two variables actually driven by an unmeasured third confounding variable rather than direct causation.',
  },
  {
    kind: 'keyTerm',
    term: 'Null Hypothesis (H0)',
    meaning:
      'A baseline hypothesis predicting no meaningful statistical relationship between variables, which empirical testing tries to refute or retain.',
  },
  {
    kind: 'keyTerm',
    term: 'Universe vs Sampling Frame',
    meaning:
      'Universe denotes the entire target population studied, whereas a sampling frame is the actual physical or digital list (like an Electoral Roll) from which the sample is drawn.',
  },
  {
    kind: 'keyTerm',
    term: 'Reliability vs Validity',
    meaning:
      'Reliability reflects repeatable consistency across measurements, whereas validity measures accuracy—whether the tool actually captures the real social phenomenon intended.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'High-Frequency PYQ Cluster: Reliability, Sampling & Variables',
    body: 'This topic drew 11 PYQs including two back-to-back questions in 2025 (Hypothesis & Reliability)! Always define cleanly, draw a quick bullseye or IV-intervening-DV arrow diagram in your answer sheet, cite Durkheim (Suicide variables) and Popper (falsifiability), and anchor examples in Indian inequality, MGNREGA, and Voter Lists.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Stratified Sampling vs Quota Sampling — Stop Mixing Them Up!',
    body: 'Both divide populations into subgroups (strata), yet Stratified Random Sampling is a probability method drawing proportionate random samples matching real census shares, whereas Quota Sampling is non-probability—letting interviewers pick conveniently inside researcher-chosen quotas.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: '4 Reliability Tests Mnemonic: T-P-I-S',
    body: 'For the 2022 and 2025 reliability PYQs, remember T-P-I-S: Test-Retest (stability over time), Parallel/Alternate Forms (equivalent versions), Inter-Rater (agreement across coders), and Split-Half / Internal Consistency (Likert scale coherence).',
  },
  {
    kind: 'answerBox',
    intro:
      'Variables, hypotheses, sampling strategies, reliability, and validity form the methodological backbone linking abstract sociological theory with verifiable empirical evidence.',
    points: [
      'Operationalised variables (IV, DV, intervening, and control) let researchers isolate causal patterns and guard against spurious correlations in experiments and surveys.',
      'Hypotheses link theory and observation through falsifiable predictions (H1 vs H0), though Grounded Theory avoids premature hypotheses to protect exploratory openness.',
      'Probability sampling (SRS, systematic, stratified, cluster) curbs selection bias to maximise reliability and generalisability, while non-probability sampling (snowball, purposive, quota) accesses hidden or niche groups.',
      'Reliability ensures repeatable stability (Test-Retest, Parallel Forms, Inter-Rater, Split-Half), while validity ensures truthful measurement free of cultural IQ/CSAT-style distortion.',
      'In studying Indian inequality, triangulation, multi-dimensional indicators, daily field notes, and standpoint reflexivity resolve the tension between quantitative consistency and lived truth.',
    ],
    conclusion:
      'Combining sound sampling, operational clarity, and mixed-method validation transforms raw social data into credible, bias-aware sociological knowledge.',
  },
]

export const topic3En: TopicLangContent = {
  summary,
  mindMap: topic3MindMapEn,
  sections,
}