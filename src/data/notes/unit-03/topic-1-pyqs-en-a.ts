import type { PyqAnswerItem } from '@/lib/notes/notebook-types'

export const topic1PyqsEnA: PyqAnswerItem[] = [
  {
    year: 2024,
    paper: 'P1',
    marks: 20,
    question: "What do you understand by 'mixed method'? Discuss its strengths and limitations in social research.",
    theme: 'Methodological Pluralism & Triangulation',
    intro:
      'Mixed-method research integrates quantitative measurement and qualitative inquiry within a single study so sociologists can capture both large-scale statistical patterns and underlying human meanings.',
    points: [
      'Core meaning and triangulation: Popularised by Alan Bryman under methodological pluralism and structured by Norman Denzin, mixed methods cross-check findings through data, investigator, theory, and between-method triangulation.',
      'Key strengths — complementarity and hypothesis building: Qualitative observation uncovers local concepts and hypotheses that quantitative surveys then test nationwide, while surveys reveal broad trends that interviews explain.',
      'Compensating blind spots: Numbers curb the small-sample subjectivity of ethnography, while personal narratives rescue statistics from mechanical reductionism.',
      'Key limitations — cost, skill, and paradigm clash: Running surveys alongside months of fieldwork doubles time and budget, requires rare dual statistical-ethnographic expertise, and faces tension between Positivist and Interpretivist assumptions.',
      'Contradictory findings puzzle: When survey metrics and interview testimonies diverge, reconciling conflicting truths demands delicate theoretical judgement rather than simple averaging.',
    ],
    thinkers: 'Alan Bryman, Norman Denzin, Eileen Barker, C. Wright Mills, Max Weber',
    example:
      'Eileen Barker combined covert participant observation with structured questionnaires and interviews in studying the Moonies cult, while Indian researchers pair NSS surveys with village fieldwork.',
    conclusion:
      'Despite higher cost and philosophical friction, mixed-method design remains the gold standard for holistic social inquiry whenever research questions span both structure and lived agency.',
  },
  {
    year: 2023,
    paper: 'P1',
    marks: 20,
    question:
      'What are the different dimensions of qualitative method? Do you think that qualitative method helps to gain a deeper sociological insight? Give reasons for your answer.',
    theme: 'Qualitative Dimensions & Interpretive Depth',
    intro:
      'Qualitative methodology investigates the spoken meanings, emotions, symbols, and everyday interactions through which people construct social life in natural settings rather than laboratory or checklist boxes.',
    points: [
      'Core qualitative dimensions: Ethnography and participant observation (long-term immersion), semi-structured and unstructured interviews, focus group discussions (FGDs), case studies and life histories, qualitative content analysis, and Glaser-Strauss Grounded Theory.',
      'Why it yields deeper insight — Verstehen and backstage truth: Following Max Weber’s Verstehen and Erving Goffman’s dramaturgy, qualitative rapport unlocks backstage anxieties and motives hidden behind polite survey answers.',
      'Uncovering latent processes and new concepts: Long-term fieldwork generates portable sociological concepts, just as M.N. Srinivas formulated Sanskritization and Dominant Caste from a single Mysore village.',
      'Amplifying marginalised standpoints: Feminist scholars like Ann Oakley and Maria Mies show how empathetic interviews surface unpaid domestic labour and structural violence erased by male-centric numbers.',
      'Necessary caveat on depth vs breadth: While unbeatable for nuance, small non-random samples restrict macro generalisation and invite observer bias ("going native"), requiring triangulation with quantitative data.',
    ],
    thinkers: 'Max Weber, Erving Goffman, M.N. Srinivas, Ann Oakley, Barney Glaser, Anselm Strauss',
    example:
      'Arlie Hochschild’s semi-structured interviews with 50 dual-career couples in The Second Shift exposed gendered household exhaustion that census employment tallies missed.',
    conclusion:
      'Qualitative methods deliver unmatched explanatory depth into why humans act as they do, especially when paired with quantitative surveys for broader representativeness.',
  },
  {
    year: 2021,
    paper: 'P1',
    marks: 10,
    question: 'Discuss the challenges involved in collecting data through census method',
    theme: 'Decennial Census Operational & Methodological Hurdles',
    intro:
      'Far beyond a simple headcount ("Janaganana"), the Census surveys every household nationwide on demography, assets, sanitation, and occupation—making its execution logistically and methodologically demanding.',
    points: [
      'Massive financial and logistical cost: Covering over a billion residents across diverse terrain demands thousands of crores in public funds and vast administrative coordination, contributing to delays like the postponed 2021 Census.',
      'Overburdened temporary enumerators: Heavy reliance on government schoolteachers balancing teaching duties leads to fatigue, hurried entries, and occasional transcription or personal bias errors.',
      'Social desirability and false reporting: Citizens often conceal sensitive details about caste, informal income, daughter count, or migration to appear socially respectable or protect welfare benefits.',
      'Counting mobile and invisible populations: Circular labour migrants, street-dwelling homeless groups, forest tribes, and conflict-hit residents routinely slip through fixed household sampling frames.',
      'Missing qualitative nuance: While mapping numbers cleanly (e.g., religion or LPG access), census forms cannot measure subjective intensity of faith, caste discrimination, or intra-household power.',
    ],
    thinkers: 'Émile Durkheim, C. Wright Mills, André Béteille, M.N. Srinivas',
    example:
      'India’s delayed 2021 Census and the gap since the 1931 national caste count prompted states like Bihar to run dedicated state-level caste surveys.',
    conclusion:
      'Strengthening digital enumeration, specialist training, and complementary qualitative micro-studies is vital to keep Census data both accurate and socially meaningful.',
  },
  {
    year: 2021,
    paper: 'P1',
    marks: 10,
    question: 'How do qualitative and quantitative methods supplement each other in sociological enquiry?',
    theme: 'Complementarity & Methodological Synergy',
    intro:
      'Rather than rival philosophies locked in Positivist versus Interpretivist combat, quantitative and qualitative methods act as complementary lenses—one mapping structural scale, the other decoding human meaning.',
    points: [
      'Exploratory design (Qual → Quant): Qualitative interviews or FGDs identify authentic local slang and concepts that prevent irrelevant survey questions (e.g., avoiding Marxist jargon among Gurgaon factory workers).',
      'Explanatory follow-up (Quant → Qual): Surveys expose puzzling correlations—such as falling female labour participation—which ethnographic interviews then explain through patriarchy, safety, and care norms.',
      'Cross-verification and validity check: Pairing official records or questionnaires with participant observation tests whether stated attitudes match actual daily behaviour.',
      'Balancing generalisability and depth: Probability samples anchor local insights nationally, while case studies guard statistics against sterile abstracted empiricism (C.W. Mills).',
    ],
    thinkers: 'Alan Bryman, Norman Denzin, C. Wright Mills, Émile Durkheim, Max Weber',
    example:
      'Studying Swiggy-Zomato gig workers pairs quantitative wage-and-hour datasets with qualitative interviews on algorithmic penalties and worker solidarity.',
    conclusion:
      'Through Alan Bryman’s methodological pluralism, quantitative breadth and qualitative depth mutually cure each other’s blind spots.',
  },
  {
    year: 2017,
    paper: 'P1',
    marks: 20,
    question: 'Examine epistemological foundations of qualitative methods of social research.',
    theme: 'Interpretivism, Phenomenology, Ethnomethodology & Standpoint',
    intro:
      'Epistemology asks how valid knowledge about the social world is produced; qualitative methods rest on the premise that human society is fundamentally distinct from physical matter because actors attach subjective meanings to action.',
    points: [
      'Anti-Positivist critique of naturalism: Rejecting Comte and Durkheim’s claim that social facts behave like external physical objects, qualitative epistemology holds that meanings, norms, and motives cannot be weighed in a laboratory.',
      'Weberian Verstehen and Neo-Kantianism: Building on Wilhelm Dilthey, Max Weber argued sociologists must achieve empathetic interpretive understanding of why actors choose particular ends and values.',
      'Phenomenology (Alfred Schutz): Social reality is not an inert object outside human minds; individuals organise sensory experience using shared cultural classifications ("typifications") in everyday lifeworlds.',
      'Ethnomethodology & Dramaturgy (Garfinkel, Goffman): People actively negotiate order through context-bound talk (indexicality and reflexivity) and front-stage impression management, requiring naturalistic fieldwork.',
      'Feminist and Critical standpoint (Ann Oakley): Epistemology is also political—knowing through warm, non-hierarchical collaboration uncovers gendered realities silenced by cold positivist detachment.',
    ],
    thinkers: 'Max Weber, Wilhelm Dilthey, Alfred Schutz, Harold Garfinkel, Erving Goffman, Ann Oakley',
    example:
      'While quantitative police statistics label suicide objectively, Jack Douglas and J.M. Atkinson showed coroners interpret ambiguous deaths using cultural assumptions.',
    conclusion:
      'By rooting inquiry in lived meaning, reflexivity, and dialogue rather than detached measurement alone, qualitative epistemology equips sociology to grasp the human essence of social structure.',
  },
]