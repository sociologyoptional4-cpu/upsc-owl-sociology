import type { PyqAnswerItem } from '@/lib/notes/notebook-types'

export const topic3PyqsEnB: PyqAnswerItem[] = [
  {
    year: 2017,
    paper: 'P1',
    marks: 10,
    question: 'Illustrate with example the significance of variables in sociological research.',
    theme: 'Operationalisation, Causation & Spuriousness Control',
    intro:
      'A variable is any characteristic or social condition—education, caste, wages, marital status—capable of taking differing values across individuals or groups, serving as the building block of empirical sociological analysis.',
    points: [
      'Operationalising abstract concepts: Complex notions like democracy, poverty, or social integration cannot be measured until broken into concrete variables (e.g., Durkheim operationalised integration via marital status, children, and religion in Suicide).',
      'Structuring hypotheses and directional causation: Distinguishing independent (cause) from dependent (effect) variables clarifies exact analytical direction—e.g., testing how education shapes income versus how family income shapes schooling.',
      'Uncovering mediating pathways (intervening variables): Identifying intervening factors—such as MGNREGA employment or PDS rations softening how poverty translates into hunger—prevents simplistic explanations.',
      'Exposing spurious correlations through controls: Measuring third confounding variables stops researchers from mistaking coincidental patterns (high income and health driven jointly by education) for direct causation.',
    ],
    thinkers: 'Émile Durkheim, Robert K. Merton, Karl Marx, Paul Lazarsfeld',
    example:
      'In Durkheim’s Suicide, marital status, parental responsibilities, and religious denomination served as measurable independent variables explaining variations in suicide rates (dependent variable).',
    conclusion:
      'Well-defined variables connect grand sociological concepts to rigorous measurement, statistical testing, and policy clarity.',
  },
  {
    year: 2017,
    paper: 'P1',
    marks: 20,
    question:
      'How can one resolve the issue of reliability and validity in the context of sociological research on inequality?',
    theme: 'Measuring Caste, Class & Gender Inequality Accurately',
    intro:
      'Researching caste, wealth, and gender inequality exposes a sharp tension between reliability and validity: official economic surveys miss hidden discrimination and informal assets, while subjective narratives risk small-sample bias.',
    points: [
      'Multi-dimensional operationalisation: Move beyond cash income alone by measuring landholding, informal wealth, residential segregation, nutritional dignity, and intersectional caste-gender barriers (B.R. Ambedkar’s graded inequality).',
      'Methodological triangulation (Alan Bryman, Norman Denzin): Pair large-scale quantitative datasets (NSS, IHDS, SECC, NFHS) with immersive village or urban ethnography (M.N. Srinivas, André Béteille) to verify stated income against lived exclusion.',
      'Culturally unbiased, sensitive tools: Replace elite-centric phrasing or CSAT-style tests that mistake test familiarity for ability with vernacular questions and indirect asset proxies.',
      'Standpoint reflexivity and collaborative trust (Ann Oakley, Sharmila Rege): Train diverse, gender-sensitive enumerators and build warm dialogue so survivors of domestic violence or caste humiliation do not give fearful or socially desirable answers.',
      'Strict fieldwork hygiene and transparency: Maintain daily field diaries, conduct inter-rater audits across coders, and openly disclose outliers or access limits in final reports.',
    ],
    thinkers: 'B.R. Ambedkar, M.N. Srinivas, André Béteille, Ann Oakley, Sharmila Rege, Alan Bryman',
    example:
      'Combining official land-record surveys with village ethnography in Sripuram or Rampura captures both formal ownership statistics and unspoken residential caste exclusion.',
    conclusion:
      'Blending multi-dimensional indicators, empathetic fieldwork, and mixed-method triangulation allows inequality research to stay both repeatable and truthfully valid.',
  },
  {
    year: 2016,
    paper: 'P1',
    marks: 10,
    question:
      '"Hypothesis is a statement of the relationship between two or more variables." Elucidate by giving examples of poverty and illiteracy.',
    theme: 'Testing Variable Relationships via Poverty & Illiteracy',
    intro:
      'A hypothesis turns broad social concerns into a crisp, testable proposition specifying how changes in one variable relate to changes in another—illustrated clearly by the link between illiteracy and poverty.',
    points: [
      'Identifying and operationalising variables: Illiteracy (independent or co-acting variable, measured via Census literacy or functional schooling years) and poverty (dependent variable, measured via Multidimensional Poverty Index or household consumption).',
      'Formulating rival testable hypotheses: Research Hypothesis (H1) posits that higher illiteracy deepens poverty by trapping workers in low-wage informal labour, paired against a Null Hypothesis (H0) claiming no statistical association.',
      'Accounting for intervening and reverse links: Including caste, gender, and regional job scarcity tests whether poverty itself causes school dropouts and illiteracy in a circular trap—using Sen and Drèze’s human-capability insights.',
      'Value of falsification (Karl Popper): Even if a surprising regional study refutes H1 (for instance, educated youth facing credential unemployment), disproving a hypothesis still deepens empirical sociological knowledge.',
    ],
    thinkers: 'Robert Dubin, Karl Popper, Amartya Sen, Jean Drèze',
    example:
      'Comparing district-level literacy rates with Multidimensional Poverty scores across Bihar and Kerala operationalises how schooling gaps interact with deprivation.',
    conclusion:
      'Framing poverty and illiteracy as operationalised, falsifiable hypotheses converts common-sense intuition into rigorous sociological testing.',
  },
  {
    year: 2015,
    paper: 'P1',
    marks: 20,
    question: 'What are variables? Discuss their role in experimental research.',
    theme: 'Experimental Design: IV, DV, Control & Field Limitations',
    intro:
      'A variable is any measurable trait, behaviour, or social condition whose value changes across cases—forming the operational engine of experimental research designed to establish cause-and-effect relationships.',
    points: [
      'Manipulating the Independent Variable (IV): In experiments, the researcher actively alters the causal stimulus (such as violent TV clips in Albert Bandura’s Bobo Doll study or workplace lighting in the Hawthorne tests).',
      'Measuring the Dependent Variable (DV): The researcher records resulting shifts in the outcome variable (children’s aggression levels, worker output, or street helpfulness in Sisson’s attire experiment).',
      'Isolating Experimental vs Control Groups: Randomly assigning matched subjects into an experimental group (exposed to IV) and a control group (unexposed) isolates true causal impact from background noise.',
      'Controlling extraneous and confounding variables: Holding environment, weather, age, and prior attitudes constant prevents spurious causation—relatively feasible in closed laboratories yet notoriously fragile in open sociological field experiments.',
      'Reactivity caveat (Hawthorne & ethical limits): Knowing one sits inside an experiment distorts human conduct, and ethical barriers forbid experimental manipulation of trauma, caste violence, or poverty.',
    ],
    thinkers: 'Albert Bandura, Émile Durkheim, Robert K. Merton, Elton Mayo',
    example:
      'In the Hawthorne illumination field experiment, altering factory lighting (IV) raised output (DV) even when lights dimmed—revealing observer attention as a decisive extraneous variable.',
    conclusion:
      'While variables allow crisp causal logic in experiments, reactivity and ethical limits require sociologists to complement them with surveys, comparative methods, and fieldwork.',
  },
  {
    year: 2015,
    paper: 'P1',
    marks: 10,
    question: 'Why is random sampling said to have more reliability and validity in research?',
    theme: 'How Probability Selection Protects Rigour & Generalisability',
    intro:
      'Random (probability) sampling gives every unit in the sampling frame an equal, calculable chance of selection—reducing systematic human bias and strengthening both reliability and external validity.',
    points: [
      'Eliminating conscious and unconscious selection bias: Unlike convenience or volunteer sampling (which over-represents accessible or outspoken people), random lottery selection stops researchers from favouring cooperative faces.',
      'Boosting external validity (generalisability): Because random and stratified random draws mirror the demographic proportions of the Universe, sample conclusions validly represent the wider population within known error margins.',
      'Enhancing inter-researcher reliability: Standardised random intervals or number tables allow two independent teams drawing samples from the same Voter List to replicate remarkably consistent estimates.',
      'Essential limitations to remember: Random sampling cannot fix a flawed sampling frame that excludes homeless or circular migrants, nor cure leading questions, social desirability bias, or low questionnaire return rates.',
    ],
    thinkers: 'P.V. Young, W.G. Cochran, Alan Bryman, Émile Durkheim',
    example:
      'Drawing a stratified random sample by gender and caste from a complete college roll yields far more valid satisfaction metrics than surveying 20 eager canteen volunteers.',
    conclusion:
      'Random sampling safeguards representativeness and repeatability at the selection stage, yet still relies on valid questions and complete sampling frames.',
  },
]