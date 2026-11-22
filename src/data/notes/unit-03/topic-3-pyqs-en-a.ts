import type { PyqAnswerItem } from '@/lib/notes/notebook-types'

export const topic3PyqsEnA: PyqAnswerItem[] = [
  {
    year: 2025,
    paper: 'P1',
    marks: 20,
    question: 'What is hypothesis? Critically evaluate the significance of hypothesis in social research.',
    theme: 'Hypothesis Role, Falsifiability & Grounded Theory Critique',
    intro:
      'A hypothesis is a tentative, empirically testable proposition specifying a relationship between two or more operationalised variables—distinct from casual guesswork or unchallenged assumptions (Robert Dubin).',
    points: [
      'Provides focus and operational clarity: It narrows vast social questions into measurable independent and dependent variables (e.g., education and household income), saving researchers from aimless data collection.',
      'Links abstract theory to empirical proof: Following Durkheim’s Suicide and Karl Popper’s falsification logic, testing hypotheses verifies, refines, or productively disproves theoretical predictions.',
      'Encourages objective rigour: Pre-registering clear criteria (Null H0 vs Alternative H1) prevents researchers from cherry-picking favourable anecdotes afterward.',
      'Critical limitation — confirmation bias and tunnel vision: Over-attachment to a pre-set hypothesis can blind researchers to unexpected field realities or silence marginalised explanations.',
      'Not indispensable in exploratory fieldwork: Inductive traditions like Barney Glaser and Anselm Strauss’s Grounded Theory and village ethnography intentionally begin without hypotheses so concepts emerge organically.',
    ],
    thinkers: 'Karl Popper, Robert Dubin, Émile Durkheim, Barney Glaser, Anselm Strauss',
    example:
      'Testing whether coaching pressure drives hostel stress via clear hypotheses sharpens quantitative surveys, whereas open Grounded Theory interviews better uncover unexpected family expectations.',
    conclusion:
      'Hypotheses are vital compasses in deductive and quantitative testing, yet must never become rigid blinkers that override inductive discovery in qualitative research.',
  },
  {
    year: 2025,
    paper: 'P1',
    marks: 20,
    question: 'What do you mean by reliability? Discuss the importance of reliability in social science research.',
    theme: 'Measurement Consistency & Credibility in Social Research',
    intro:
      'Reliability refers to the consistency and repeatability of a research instrument—ensuring that applying the same questionnaire, scale, or coding scheme under comparable conditions yields stable results.',
    points: [
      'Core meaning (Scale analogy): Like a calibrated scale reading 70, 71, 69 kg across trials rather than swinging wildly between 40 and 100 kg, a reliable tool minimises random measurement error.',
      'Enables replication and peer verification: Scientific credibility in sociology (Comte, Durkheim) demands that independent researchers studying the same phenomenon can replicate procedures and audit findings.',
      'Foundation for longitudinal comparison: Consistent Census definitions and standardised NFHS indicators let sociologists reliably track fertility decline or poverty reduction across decades.',
      'Strengthens inter-coder and survey fairness: Clear operational definitions prevent different enumerators or interviewers from recording contradictory caste, income, or prejudice scores.',
      'Crucial caveat — necessary but not sufficient for validity: An IQ puzzle biased toward urban test-takers can produce stable scores repeatedly (high reliability) while failing to measure true innate intelligence (low validity).',
    ],
    thinkers: 'Émile Durkheim, Auguste Comte, Alan Bryman, Norman Denzin, Robert K. Merton',
    example:
      'Tracking India’s sex ratio or Swachh Bharat toilet coverage across NFHS-4 and NFHS-5 relies on consistent, standardised survey wording across every state.',
    conclusion:
      'Reliability gives social science empirical discipline and comparability, though researchers must pair it with validity checks and triangulation to capture authentic reality.',
  },
  {
    year: 2022,
    paper: 'P1',
    marks: 20,
    question:
      'Explain the different types of non-probability sampling techniques. Bring out the conditions of their usage with appropriate examples.',
    theme: 'Purposive, Snowball, Quota, Convenience & Volunteer Sampling',
    intro:
      'Non-probability sampling selects participants without giving every population member an equal or calculable selection chance—trading statistical generalisability for speed, practicality, and access when sampling frames fail.',
    points: [
      'Convenience sampling (exploratory speed): Researchers survey readily reachable individuals—ideal for low-budget pilot testing or preliminary classroom feedback, such as interviewing one’s own online students.',
      'Volunteer / self-selection sampling (opinion gauges): Participants opt in voluntarily—useful when quick feedback is needed on campus mess food or events, though skewed toward highly dissatisfied or enthusiastic voices.',
      'Purposive / judgement sampling (expert depth): Researchers deliberately select information-rich subjects—suited to qualitative case studies, such as interviewing veteran trade-union leaders in Gurgaon’s auto belt.',
      'Snowball / chain-referral sampling (hidden populations): Starting from one trusted contact who refers others—indispensable when studying criminalised, undocumented, or stigmatised groups like ex-prisoners, drug users, or informal migrants lacking any official list.',
      'Quota sampling (analytical balance without frame): Fixing target subgroup counts (e.g., 15 minority students or 5 sociology graduates out of 20) regardless of true population proportion when specific analytical comparisons are required.',
    ],
    thinkers: 'Alan Bryman, William Foote Whyte, Laud Humphreys, P.V. Young',
    example:
      'Studying undocumented interstate domestic workers in urban Delhi relies on Snowball sampling via one trusted worker rather than a non-existent official registry.',
    conclusion:
      'Though weak for nationwide statistical inference, non-probability sampling is indispensable for exploratory fieldwork, hidden communities, and hypothesis generation.',
  },
  {
    year: 2022,
    paper: 'P1',
    marks: 20,
    question:
      'What is reliability? Explain the different tests available to social science researchers to establish reliability.',
    theme: 'Tests of Reliability: Test-Retest, Parallel, Inter-Rater & Split-Half',
    intro:
      'Reliability denotes the stability and internal consistency of a measurement instrument across repeated trials, observers, or items—ensuring social findings do not wobble due to erratic tools.',
    points: [
      'Test-Retest reliability (temporal stability): Administering the exact same questionnaire or scale to the same group at two time points and checking score correlation—suited for stable traits, though vulnerable to memory or real attitude shifts.',
      'Parallel / Alternate-Forms reliability (equivalence): Creating two distinct yet equivalent versions of a test (different wording, equal difficulty) to avoid respondents memorising earlier answers.',
      'Inter-Rater / Inter-Observer reliability (coder consistency): Checking agreement when two independent researchers observe classroom interactions, code caste bias in news clips, or classify qualitative interviews.',
      'Split-Half reliability (half-test balance): Dividing a multi-item Likert scale into odd versus even halves and measuring correlation between the two sets.',
      'Internal consistency (Cronbach’s alpha): Measuring statistical coherence across every item in a composite scale (e.g., checking all items on a Bogardus-style caste prejudice scale measure the same construct), complemented in fieldwork by daily diaries and triangulation.',
    ],
    thinkers: 'Émile Durkheim, Rensis Likert, Emory Bogardus, Alan Bryman, Norman Denzin',
    example:
      'When two researchers independently score screen-time gender roles across Indian television commercials, high Inter-Rater agreement confirms coding reliability.',
    conclusion:
      'Using T-P-I-S reliability tests—alongside clear operational definitions and enumerator training—anchors sociological evidence in verifiable consistency.',
  },
  {
    year: 2020,
    paper: 'P1',
    marks: 20,
    question: 'Discuss the importance and source of hypothesis in social research.',
    theme: 'Functions & Origins of Sociological Hypotheses',
    intro:
      'A hypothesis is a clear, testable statement linking two or more variables whose truth awaits empirical investigation—acting as what Robert Dubin called the closest bridge between theory and observable facts.',
    points: [
      'Importance — directs inquiry and operationalises variables: Prevents aimless fact-gathering by isolating independent and dependent variables, choosing suitable tools, and clarifying what evidence would falsify expectations.',
      'Importance — builds cumulative sociological theory: Whether confirmed or disproved (Popper), testing hypotheses refines macro theories—just as Durkheim tested religious integration against European suicide data.',
      'Source 1 — Review of literature and prior empirical work: Published findings, such as Amartya Sen and Jean Drèze’s scholarship on education and poverty, spark testable regional propositions.',
      'Source 2 — Logical deduction from classical theory and pilot studies: Deductive reasoning from Marxist alienation or Weberian rationalisation, alongside small pre-test pilot surveys, shapes sharp hypotheses.',
      'Source 3 — Personal experience, intuition, and common sense: Everyday observation (e.g., noting educated neighbours earning higher wages) or expert consultations supply initial hunches refined into testable wording.',
    ],
    thinkers: 'Robert Dubin, Émile Durkheim, Karl Popper, Amartya Sen, Jean Drèze',
    example:
      'Observing high rural debt in cotton districts leads a researcher reviewing agrarian studies to hypothesise that crop insurance gaps raise farmer distress.',
    conclusion:
      'Rooted in theory, prior research, and observant experience, well-crafted hypotheses channel sociological curiosity into disciplined empirical verification.',
  },
  {
    year: 2019,
    paper: 'P1',
    marks: 20,
    question: 'Explain the probability sampling strategies with examples.',
    theme: 'Simple Random, Systematic, Stratified & Cluster Sampling',
    intro:
      'Probability sampling guarantees every element in the sampling frame a known, non-zero chance of selection—removing researcher selection bias so findings can be generalised statistically to the wider Universe.',
    points: [
      'Simple Random Sampling (SRS): Assigning unique IDs to every unit and drawing randomly via lottery or random numbers (e.g., picking 10 out of 200 students)—easy when lists are small and homogeneous, though luck can skew small subgroups.',
      'Systematic Random Sampling: Picking a random start and selecting every n-th case (e.g., dividing 200 students by 10 to pick every 20th roll number)—faster operationally unless hidden periodicity in the list aligns with the interval.',
      'Stratified Random Sampling: Dividing the population into homogeneous strata (e.g., 25% girls and 75% boys in a class, or urban/rural income brackets) and sampling proportionately from each—yielding far truer representation when prior demographic stats exist.',
      'Cluster Sampling: Grouping vast dispersed populations into natural geographical clusters (villages, municipal wards, or Lok Sabha constituencies), selecting clusters randomly, and studying all members inside chosen clusters to slash travel costs.',
      'Multi-Stage Sampling: Refining cluster design across levels—first selecting 15 constituencies out of India’s 543 Lok Sabha seats, then randomly drawing specific polling booths inside them for pre-election surveys.',
    ],
    thinkers: 'P.V. Young, W.G. Cochran, Émile Durkheim, Alan Bryman',
    example:
      'Large Indian surveys like NFHS and national election exit polls combine multi-stage cluster selection across states and districts with stratified household sampling.',
    conclusion:
      'Matching SRS, systematic, stratified, or multi-stage cluster designs to population spread and prior demographic knowledge gives sociology generalisable precision.',
  },
]