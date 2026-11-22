import type { NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2MindMapEn } from './topic-2-mindmaps'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Sociological fieldwork selects from structured questionnaires, attitude scales, interviews, covert or overt observation, focus groups, social surveys, case studies, life histories, and emerging digital ethnography—each balancing cost, scale, ethics, and human depth.'

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u03-01-quant-qual-sampling.webp',
    alt: 'Infographic contrasting quantitative surveys and sampling with qualitative ethnography and triangulation',
    caption:
      'Selecting a data collection technique means matching your budget, literacy setting, and ethical sensitivity to either wide-reach surveys or immersive fieldwork.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 3 Visual 01',
  },
  {
    kind: 'md',
    body: `## Choosing the Right Tool: No Single Winner

Imagine trying to measure the length of an ant with a highway milestone, or measuring a highway with a pocket ruler. Data collection works the exact same way: no technique is universally "best" because each depends on population size, literacy level, budget, time, and how sensitive the topic is. In India, quantitative tools like the Decennial Census, NSS, or NFHS track macro trends across crores of homes, whereas qualitative tools like village ethnography or life histories uncover caste, patriarchy, and informal struggle behind closed doors.

## Questionnaires and Attitude Scales

A ==questionnaire== is a written set of questions filled out directly by respondents on paper or online via Google Forms and messaging links. **Closed-ended questions** (like UPSC Prelims MCQs) lock answers into fixed categories for fast statistical tabulation, while **open-ended questions** (like Mains essays) leave blank space for feelings and complex arguments.

Questionnaires shine when researchers need vast reach at minimal cost, flexible timing, and privacy for awkward themes like personal income or sexual behaviour. Yet they suffer notoriously low return rates, mechanical ticking ("Option B all down the sheet"), zero chance to clarify confusing wording, and no ability to probe deeper follow-ups.

- **Five Golden Design Rules:** Keep every item strictly relevant; maintain optimal length; avoid jargon (never ask Gurgaon factory workers about "proletarian class consciousness"); avoid leading prompts nudging one answer; and never bundle two choices together. [[trap:Asking a bundled question like "Do you support SC, ST, and OBC reservation?" forces inaccurate Yes or No ticks from respondents who distinguish between categories.]]
- **Measurement Scales:** Sociologists convert subjective attitudes into comparable scores using the ==Likert scale== (measuring intensity from strongly agree to strongly disagree) and the ==Bogardus social distance scale== (measuring willingness to accept another caste, religion, or race as colleague, neighbour, or marriage kin).

## Interviews: Structured, Semi-Structured, and Unstructured

An ==interview== turns data collection into a direct conversation—face-to-face, by phone, or over video—enabling immediate clarification and rich answers even where respondents cannot read or write. Researchers adjust structure along a clear spectrum:

- **Structured Interviews:** Enumerators read identical pre-set questions in fixed order—such as house-to-house Census or election polling—maximising comparability while curbing depth.
- **Unstructured Interviews:** Resembling the UPSC Personality Test, conversations flow freely around themes, catching subtle contradictions and deep personal anxieties.
- **Semi-Structured Interviews:** Blending a loose topic guide with flexible probing—memorably used by Arlie Hochschild in *The Second Shift* across 50 dual-career couples and 45 childcare providers to trace unpaid evening housework.

Because every interview is a social encounter, respondents may hold back out of modesty (*haya*) or reshape answers to please the researcher. [[eg:If a researcher frowns subtly while interviewing UPSC aspirants on reservation, interviewees seeking social approval may soften their true stance.]] Heavy staff-training costs, travel logistics, and time pressure further restrict sample size.

| Technique | Ideal Setting | Core Strength | Biggest Risk |
| --- | --- | --- | --- |
| Questionnaire | Literate, dispersed large groups | Low cost, scale, high anonymity | Low return, mechanical answers |
| Structured Interview | Surveys across mixed literacy | Standardised, comparable answers | Shallow insight, enumerator cost |
| Unstructured Interview | Sensitive themes, deep motives | Flexible probing, catches deceit | Interviewer bias, slow coding |
| Focus Group (FGD) | Consumer habits, shared norms | Natural peer debate sparks ideas | Vocal dominance, moderator bias |

## Observation: Watching Life Unfold and Ethical Dilemmas

While surveys rely on what people *claim* they do, ==observation== watches what people *actually* do in real settings. In **non-participant observation**, a researcher watches discreetly from a classroom corner or webcam without interfering; in **participant observation**, the researcher joins daily life directly—like disguising as a coaching student in Old Rajinder Nagar to hear peers admit backstage confusion after class.

Though prized for exposing backstage realities over 5–8 months of immersion, observation struggles with tiny group limits, cannot study suicide or domestic violence firsthand, and risks disturbing reality through the observer's age, attire, class, or religious markers. Even tougher are six **ethical dilemmas** highlighted by UPSC:

- **Overt vs Covert Identity & Informed Consent:** Hiding your research role deceives trusted friends, yet asking consent triggers the ==Hawthorne effect== where subjects perform artificially.
- **Witnessing Illegality & Confidentiality:** Observing gangs or informal trades creates a legal conflict between protecting informant privacy and scientific transparency or law.
- **Going Native & Emotional Withdrawal:** In *Street Corner Society*, William Foote Whyte confessed he began as a non-participant observer yet nearly turned into a "non-observing participant" after bonding closely with gang leaders—making eventual departure emotionally painful. [[trap:Laud Humphreys’s Tearoom Trade (1970) remains the classic warning against unethical covert research: acting as a restroom lookout, he secretly noted car license plates and tracked married men to their homes under false survey disguises.]]

## Ethnography, Village Studies, and Digital Visual Culture

Rooted in *ethnos* (people) and *graphy* (writing), ==ethnography== builds a holistic portrait of everyday customs, kinship, economy, and spatial layout over long immersion. Pioneered in colonial anthropology by Bronislaw Malinowski in the Trobriand Islands, Indian sociology transformed ethnography through landmark village monographs: [[thinker:M.N. Srinivas]] lived in Rampura (Mysore) to coin *Sanskritization* and *Dominant Caste*, André Béteille documented residential caste geography in Sripuram (Tanjore), and Verrier Elwin lived intimately among central Indian tribes.

Today, sociologists extend classic fieldwork into ==digital ethnography (netnography)== and ==visual culture== (Sarah Pink; Robert Kozinets). Studying WhatsApp caste networks, Instagram reels, gaming servers, memes, and photo-elicitation unlocks dispersed youth and diaspora spaces rapidly and cheaply. [[eg:Tracking Indian matrimonial algorithms alongside Dalit and feminist Instagram meme pages shows how digital ethnography captures caste-gender identity in real time.]] Yet critics warn that India's **digital divide** excludes rural elderly and poor voices, curated online profiles resemble Goffman's front-stage performance, bots distort trust, and scraping semi-private chats raises thorny consent ethics.

## Focus Group Discussions (FGDs) and Minimising Researcher Influence

A ==Focus Group Discussion== brings 5 to 15 relevant participants together in a warm, conversational circle so group interaction surfaces collective norms faster than artificial one-on-one interviews (Sue Wilkinson; David Morgan; Frank Tonkiss on virtual FGDs). [[eg:Marketing teams studying baby-food buying gather mothers (customers), infants (consumers), and grandmothers or Nani figures (key influencers) to watch real household negotiation.]]

However, loud voices can hijack quieter participants, free gift hampers encourage insincere praise, and an assertive moderator can bias outcomes like a shouting television anchor. To **minimise researcher influence** in FGDs: use a neutral, non-leading topic guide; train an empathetic facilitator who enforces balanced turn-taking; separate sharp status hierarchies (such as juniors from bosses or daughters-in-law from village elders) into safe subgroups; minimise conspicuous rewards; keep reflexive field logs; and verify transcripts with a co-moderator.

## Social Surveys, Census, Case Studies, and Biographies

A **social survey** combines questionnaires or structured interviews with statistical analysis across representative samples (NFHS, IHDS, Pew) to track macro change and guide welfare schemes. A **Census** goes further by covering 100% of a country's population—initiated in India during 1865–72, regularised decennially from 1881, last releasing national caste tables in 1931, and delayed past 2021—tracking sex ratio, sanitation (Swachh Bharat), clean fuel (Ujjwala), tap water (Har Ghar Jal), and electoral delimitation despite huge costs and enumerator fatigue.

By contrast, **case studies** dissect a single strike (like the Gurgaon Hero Honda unrest), cult (Eileen Barker's *Moonies*), or culture (Margaret Mead's *Coming of Age in Samoa* refuting biological teenage chaos) to test theories and forge generalisable concepts. Similarly, **biographies and life histories** reconstruct an entire personal life—used by W.I. Thomas and Florian Znaniecki across 750 immigrant letters in *The Polish Peasant*, Robert Bogdan's sympathetic portrait of transsexual *Jane Fry*, and feminist Maria Mies's empowerment sessions where domestic-violence survivors traced private pain to patriarchal structure.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Participant Observation',
    rightTitle: 'Non-Participant Observation',
    rows: [
      {
        aspect: 'Researcher Role',
        left: 'Joins daily group activities as a temporary member',
        right: 'Watches discreetly from outside without interacting',
      },
      {
        aspect: 'Data Depth',
        left: 'Unlocks backstage confessions, trust, hidden norms',
        right: 'Captures visible surface behaviour and formal routines',
      },
      {
        aspect: 'Reactivity & Bias',
        left: 'Risk of altering group life or going native (Whyte)',
        right: 'Lower intrusion unless observer presence triggers Hawthorne effect',
      },
      {
        aspect: 'Ethical Challenge',
        left: 'Covert deception, illegality dilemmas, withdrawal hurt',
        right: 'Privacy intrusion via hidden cameras or covert watching',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Neutral Guide', text: 'Draft open, non-leading prompts matched to local language' },
      { label: 'Safe Subgroups', text: 'Avoid mixing bosses/juniors or elders/daughters-in-law' },
      { label: 'Facilitate Evenly', text: 'Curb vocal dominance and invite quiet participants kindly' },
      { label: 'Reflexive Audit', text: 'Co-moderator tracks body language and removes gift pressure' },
    ],
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1918–1928',
        title: 'Polish Peasant & Coming of Age in Samoa',
        text: 'Thomas-Znaniecki pioneered personal letter life histories while Margaret Mead used cultural case studies to challenge biological determinism.',
      },
      {
        year: '1943–1952',
        title: 'Whyte’s Street Corner & Srinivas’s Rampura',
        text: 'Demonstrated participant immersion hazards alongside India’s generative village ethnography tradition.',
      },
      {
        year: '1970–1981',
        title: 'Humphreys Ethics Alert & Oakley Interviews',
        text: 'Tearoom Trade codified research ethics boundaries while Ann Oakley pioneered reciprocal feminist interviewing.',
      },
      {
        year: '2010s–2020s',
        title: 'Netnography & Visual Digital Ethnography',
        text: 'Sarah Pink and Robert Kozinets extended thick ethnographic fieldwork into social platforms, memes, and visual archives.',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Participant Observation',
    meaning:
      'Immersive fieldwork where the sociologist lives inside a community for months to record unwritten norms, back-stage meanings, and daily practices firsthand.',
    thinkerSlug: 'mn-srinivas',
  },
  {
    kind: 'keyTerm',
    term: 'Digital Ethnography (Netnography)',
    meaning:
      'Adapting classic participant observation and visual analysis to online communities, social media feeds, chats, reels, and digital archives.',
  },
  {
    kind: 'keyTerm',
    term: 'Hawthorne Effect',
    meaning:
      'The tendency of people to alter their natural behaviour simply because they realise researchers are observing them.',
  },
  {
    kind: 'keyTerm',
    term: 'Bogardus Social Distance Scale',
    meaning:
      'An ordinal scale measuring how closely individuals are willing to accept members of another caste, ethnic, or religious group—from exclusion to marriage.',
  },
  {
    kind: 'keyTerm',
    term: 'Life History / Biographical Method',
    meaning:
      'Collecting detailed personal narratives, letters, and diaries to trace how wider social structures shape individual agency and community history.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2024–2022 UPSC Shift: Ethics, FGDs & Digital Ethnography',
    body: 'Recent PYQs test applied research hygiene—minimising moderator bias in FGDs (2022), ethical dilemmas in participant observation (2023), and digital ethnography/visual culture (2024). Ground every answer in concrete Indian examples (Karol Bagh coaching rooms, Swiggy chats, Rampura/Sripuram villages) plus classical anchors (Whyte, Humphreys, Srinivas).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Never Confuse Questionnaire with Social Survey!',
    body: 'A questionnaire is just the physical or digital sheet of questions. A social survey is the complete research cycle—sampling, data collection (via questionnaires or interviews), coding, and statistical analysis—to map broad population trends.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Questionnaire Trap Check: No Bundling, No Jargon, No Nudging',
    body: 'Remember three instant marks-fetching flaws to avoid in questionnaires: (1) Bundling SC/ST/OBC reservation into one Yes/No, (2) throwing Marxist jargon at factory workers, and (3) asking leading TV-debate style questions.',
  },
  {
    kind: 'answerBox',
    intro:
      'Sociological data collection spans quantitative breadth (questionnaires, structured interviews, surveys, Census) and qualitative immersion (participant observation, FGDs, case studies, biographies, digital ethnography).',
    points: [
      'Questionnaires and structured surveys deliver low-cost scale and anonymity (plus Likert and Bogardus scales), yet risk low response rates, bundled wording, and missing depth.',
      'Semi-structured interviews and Focus Group Discussions capture negotiations among buyers and influencers while requiring neutral moderation to curb social-approval bias.',
      'Participant observation and village ethnographies (Malinowski, Srinivas, Béteille) unlock backstage truth yet confront ethical dilemmas of covert deception, consent, and going native (Whyte, Humphreys).',
      'Digital ethnography and visual culture study online life and memes effectively, though constrained by the digital divide, curated fronts, and consent ethics.',
      'Case studies (Mead, Barker) and biographies (Thomas-Znaniecki, Maria Mies) challenge false universals and empower marginalised subjects when paired with survey evidence.',
    ],
    conclusion:
      'Skillful sociological research matches each data tool to its setting and ethical demands, triangulating numbers with lived voices.',
  },
]

export const topic2En: TopicLangContent = {
  summary,
  mindMap: topic2MindMapEn,
  sections,
}