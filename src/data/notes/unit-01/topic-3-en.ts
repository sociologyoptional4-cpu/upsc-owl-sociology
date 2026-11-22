import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

const mindMap: MindMapData = {
  title: 'Unit 1.3 · Sociology, Common Sense & C.W. Mills',
  center: 'Common Sense vs Sociology',
  subtitle: 'Question Prenotions • Study Lived Meaning • Link Biography to History',
  branches: [
    {
      title: 'What Is Common Sense?',
      color: 'lavender',
      thinkers: ['Antonio Gramsci', 'Clifford Geertz', 'André Béteille'],
      points: [
        'Everyday survival shortcuts absorbed from family, habit and culture',
        'Relies on personal anecdotes and unverified hearsay over tested proof',
        'Produces contradictory proverbs depending on who needs comfort',
        'Naturalises caste, gender and poverty as biology or personal fate',
      ],
    },
    {
      title: 'Thinkers of Divergence',
      color: 'yellow',
      thinkers: ['Émile Durkheim', 'Peter Berger', 'Antonio Gramsci', 'André Béteille'],
      points: [
        'Durkheim: reject prenotions; treat social facts as things (Suicide 1897)',
        'Peter Berger: debunking motif peeks behind official social facades',
        'Gramsci: hegemony disguises ruling ideas as natural common sense',
        'Béteille: sociology is comparative and empirical, not local opinion',
      ],
    },
    {
      title: 'Thinkers of Convergence & Bridge',
      color: 'mint',
      thinkers: ['Alfred Schutz', 'Harold Garfinkel', 'André Béteille', 'Anthony Giddens'],
      points: [
        'Schutz: lifeworld and typifications let actors coordinate daily life',
        'Garfinkel: breaching experiments expose hidden everyday moral rules',
        'Béteille warns sociologists against arrogant dismissal of lay insight',
        'Giddens Double Hermeneutic: sociological terms reshape everyday speech',
      ],
    },
    {
      title: 'C.W. Mills: Sociological Imagination',
      color: 'pink',
      thinkers: ['C. Wright Mills', 'Robert K. Merton', 'Erving Goffman'],
      points: [
        'Connects Personal Biography + Social Structure + Historical Shift',
        'Aarav’s delayed Delhi Metro links private anger to transit & class',
        'Youth unemployment is a structural public issue, not individual failure',
        'Merton: latent functions reveal hidden reality beneath daily appearances',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u1-01-sociological-imagination.webp',
    alt: 'Aarav complaining about a delayed Delhi Metro versus a sociologist linking his personal trouble to urban infrastructure, crowding, class, gender and history',
    caption: 'Aarav’s delayed Metro commute feels like a personal irritation — the sociological imagination links that everyday trouble to urban infrastructure, class, gender, and history.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 1 Visual 01',
  },
  {
    kind: 'md',
    body: `## What Common Sense Really Is — and Why Sociology Interrogates It

Every morning before we read a single textbook, we rely on ==Common Sense== — the unwritten toolkit of cultural habits, proverbs, and quick mental shortcuts that help us navigate daily life smoothly. Common sense tells us how to stand in a queue, whom to respect at a family wedding, or why trains run late, without forcing us to run a survey before every decision. Yet because this everyday knowledge grows out of local anecdotes and unexamined habit rather than tested evidence, it frequently mistakes what is familiar for what is true. Sociology exists precisely to step back from these comfortable shortcuts and test how society actually works beneath surface impressions.

Once you examine common sense closely, four analytical weaknesses emerge:
- **Contradictory Proverbs:** Everyday wisdom supplies opposite rules for the same problem — telling us *"Absence makes the heart grow fonder"* one day and *"Out of sight, out of mind"* the next, with no method to test which holds true.
- **Anecdotal & Local Bias:** Seeing two neighbours succeed or one relative struggle often turns into a sweeping rule about an entire caste, gender, or city, ignoring broader population patterns.
- **Naturalising Inequality:** [[trap:Claims such as "Girls are naturally less analytical", "The poor simply lack ambition", or "Caste no longer matters in modern cities" disguise social barriers as biology, character, or destiny.]]
- **Psychological Reductionism:** Treating farmer suicides, rising student burnout, or domestic conflict as mere private willpower failures hides structural forces like agrarian debt, jobless growth, and patriarchal norms.

## Thinkers of Divergence: Why Sociology Breaks From Common Sense

A major classical tradition insists that sociology cannot even begin until it makes a decisive break from everyday assumptions. Because we live inside society, our own socialisation acts like tinted glasses that make man-made inequalities look natural and timeless. These thinkers argue that rigorous sociology must set aside popular certainties, question polite official stories, and trace how power hides inside ordinary beliefs.

- **[[thinker:Émile Durkheim]] — Discarding Prenotions:** In *The Rules of Sociological Method* (1895), Durkheim argued that researchers must systematically set aside ==prenotions==, the unverified common-sense ideas formed before scientific inquiry. In *Suicide* (1897), he demolished the common-sense assumption that suicide is purely an individual psychological act by proving with European data that rates shift predictably across religious communities, marital ties, and economic crises due to varying ==social integration and regulation==.
- **[[thinker:Peter Berger]] — The Debunking Motif:** In *Invitation to Sociology* (1963), Berger explained that sociological consciousness carries a built-in ==debunking motif== — an urge to look behind the official, respectable facade of institutions. Where common sense sees a school purely as an engine of merit or a family purely as a haven of love, sociology uncovers hidden tracking, unpaid care labour, and status reproduction underneath.
- **[[thinker:Antonio Gramsci]] — Cultural Hegemony as Common Sense:** Gramsci described common sense as the *"folklore of philosophy"* — a fragmented, uncritical sediment of inherited beliefs absorbed without questioning. Through ==cultural hegemony==, dominant groups spread their values via schools, media, and religious norms until unequal arrangements appear to ordinary people as obvious, natural, and impossible to change.
- **[[thinker:André Béteille]] — Methodological Boundary:** Béteille emphasises that common sense is localised, episodic, and tied to a single community’s moral horizon, whereas sociology is general, comparative across cultures, and disciplined by empirical verification.

## Thinkers of Convergence & Bridge: Why Common Sense Still Matters

If common sense has so many flaws, should sociology throw it away completely? A rich interpretive and Indian sociological tradition answers no, explaining that human beings are not passive stones studied by a geologist — they act on the basis of meanings they already hold. Rather than dismissing everyday knowledge outright, sociology uses it as a vital entry point, studies how people construct order through it, and gradually transforms it through public dialogue.

- **[[thinker:Alfred Schutz]] — Lifeworld & Typifications:** Extending Max Weber’s *Verstehen*, Schutz showed that ordinary people manage their daily ==lifeworld== using shared mental recipes called ==typifications== — quick social categories like "strict landlord", "reliable colleague", or "respectable family". Sociologists must grasp these common-sense stocks of knowledge first, because social institutions operate through them every hour.
- **[[thinker:Harold Garfinkel]] — Ethnomethodology & Breaching Experiments:** Garfinkel founded ethnomethodology to uncover the unspoken rules people use to keep ordinary life predictable. [[eg:In Garfinkel’s breaching experiments, students stood facing the wrong wall inside an elevator or tried bargaining at a fixed-price supermarket; the instant discomfort and anger revealed how fiercely social order depends on shared common-sense expectations.]] [[link:Unit 2 Non-Positivist Methodologies studies Schutz and Garfinkel in detail, while Paper 2 examines how unspoken rules sustain everyday caste boundaries.]]
- **[[thinker:André Béteille]] — Nuanced Warning Against Total Dismissal:** Even while separating sociology from unreflective belief, Béteille warns sociologists against intellectual arrogance that treats ordinary people’s insight as total illusion. Local farmers, workers, and families hold nuanced practical awareness of kinship, status, and power; treating common sense as a source of realistic puzzles — never as final proof — keeps sociological theory grounded.
- **[[thinker:Anthony Giddens]] — The Double Hermeneutic:** Natural sciences experience a one-way relationship with nature because atoms never read physics journals, whereas sociology lives inside a two-way ==Double Hermeneutic==. First, sociologists interpret the everyday concepts used by lay actors; second, sociological terms like ==gender roles==, ==sanskritisation==, ==identity==, or ==anomie== enter newspaper columns, podcasts, and family conversations, reshaping common sense itself. [[eg:Fifty years ago, few Indian households debated "gender roles", "mental load", or "sanskritisation" at the dinner table; today those sociological concepts actively shape everyday family expectations.]]

## C.W. Mills’ Sociological Imagination: Aarav’s Metro & Youth Unemployment

In *The Sociological Imagination* (1959), [[thinker:C. Wright Mills]] offered the clearest bridge between private experience and scientific analysis: the ability to connect ==personal biography== with ==social structure and history==. Consider two familiar Indian scenes through Mills’ eyes. First, imagine it is 9:05 AM at Rajiv Chowk station in Delhi and Aarav’s Metro train is delayed again. [[eg:Aarav sighs that Delhi commuters are undisciplined and Metro staff are lazy — a classic common-sense complaint.]] Switching on the sociological imagination reveals how post-liberalisation urban migration, affordable housing pushed to far-flung NCR suburbs, rigid 9-to-5 office schedules, women’s safety constraints in crowded coaches, and transport investment choices all converge on that single platform.

Mills used the exact same contrast to explain **youth unemployment**: if one young person in a thriving city stays jobless, it may reflect personal trouble such as poor skill fit or weak preparation; but when millions of educated graduates sit in crowded coaching hubs chasing scarce public jobs, blaming individual laziness misses the point. That widespread crisis is a ==public issue== produced by jobless economic growth, credential inflation, and shifting global labour markets.

| Everyday Indian Situation | Common-Sense Verdict | Sociological Imagination Insight |
| --- | --- | --- |
| Aarav’s delayed Delhi Metro | People here are careless and unpunctual | Urban sprawl, peak-hour schedules, transit capacity & gendered crowding |
| Youth unemployment & UPSC burnout | Lack of personal focus or willpower | Jobless growth, credential inflation & middle-class status anxiety |
| Matrimonial app caste filters | Purely private personal preference | Caste endogamy, hypergamy & class capital encoded digitally |
| Agrarian distress & farmer suicide | Weak mindset or poor personal budgeting | Monsoon risk, MSP gaps, informal credit & rural market structure |`,
  },
  {
    kind: 'flow',
    direction: 'vertical',
    steps: [
      { label: '1. Spot Personal Trouble', text: 'Aarav faces a delayed Delhi Metro or a graduate faces chronic joblessness' },
      { label: '2. Suspend Prenotions', text: 'Durkheim: set aside instant verdicts like laziness or bad luck' },
      { label: '3. Map Structural Patterns', text: 'Check transit capacity, labour market trends, class access and caste ties' },
      { label: '4. Link to Historical Shifts', text: 'Trace how urbanisation, liberalisation and policy built these conditions' },
      { label: '5. Sociological Imagination', text: 'Private frustration emerges as a shared, reformable public issue' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Common Sense Knowledge',
    rightTitle: 'Sociological Knowledge',
    rows: [
      { aspect: 'Source & Basis', left: 'Habit, tradition, folklore and personal anecdotes', right: 'Systematic research, concepts, data and theory' },
      { aspect: 'Verification', left: 'Assumed true without empirical testing', right: 'Tested, falsifiable and open to peer review' },
      { aspect: 'Scope & Reach', left: 'Local, episodic and tied to one cultural milieu', right: 'Comparative across societies, classes and history' },
      { aspect: 'Logical Coherence', left: 'Contradictory proverbs and confirmation bias', right: 'Coherent conceptual and theoretical frameworks' },
      { aspect: 'Stance on Inequality', left: 'Naturalises caste, gender and poverty as fate', right: 'Exposes power, ideology and social construction' },
      { aspect: 'Agency vs Structure', left: 'Blames individual traits, morality or luck', right: 'Links personal choices to structural constraints' },
      { aspect: 'Mutual Link', left: 'Supplies sociology with starting puzzles and meaning', right: 'Refines and reshapes lay thought via Double Hermeneutic' },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Prenotions',
    meaning: 'Unexamined everyday beliefs and emotional biases that Émile Durkheim urges researchers to bracket before studying social facts objectively.',
    thinkerSlug: 'emile-durkheim',
  },
  {
    kind: 'keyTerm',
    term: 'Sociological Imagination',
    meaning: 'C. Wright Mills’ concept: the mental capacity to grasp how personal troubles intersect with broader social structures and historical shifts.',
  },
  {
    kind: 'keyTerm',
    term: 'Debunking Motif',
    meaning: 'Peter Berger’s term for sociology’s drive to look behind official, taken-for-granted institutional facades to uncover hidden power relations.',
  },
  {
    kind: 'keyTerm',
    term: 'Double Hermeneutic',
    meaning: 'Anthony Giddens’ two-way loop: sociology interprets lay meanings, and sociological terms like gender roles or sanskritisation flow back into common sense.',
  },
  {
    kind: 'keyTerm',
    term: 'Breaching Experiment',
    meaning: 'Harold Garfinkel’s method of deliberately violating routine unwritten rules to reveal the fragile moral expectations sustaining everyday social order.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'emile-durkheim',
    quote: 'The first and most fundamental rule is: Consider social facts as things.',
    context: 'Rule from The Rules of Sociological Method (1895) to discard common-sense prenotions.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'robert-k-merton',
    quote: 'Manifest functions are intended and recognized by participants; latent functions are unintended, unrecognized consequences uncovered by sociological analysis.',
    context: 'Common sense sees only surface manifest motives; sociology uncovers hidden latent functions.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '6 PYQs in 13 Years: Always Take a Balanced Dialectical Stand',
    body: 'PYQs from 2025 (#1), 2023 (#7), 2021 (#11) and 2016 (#20) revolve around one question: is sociology just common sense? Never stop at a flat "No". First explain key methodological breaks (Durkheim, Berger, Gramsci, Béteille), then conclude with the constructive bridge (Schutz, Garfinkel, Giddens’ Double Hermeneutic, Mills).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Never Dismiss Common Sense as 100% Worthless',
    body: 'Writing that common sense is completely useless signals a narrow positivist bias. Examiners expect you to recognise André Béteille’s warning and the interpretive turn (Schutz, Garfinkel): common-sense beliefs may be scientifically flawed, yet they remain socially real because people act upon them every day.',
  },
  {
    kind: 'callout',
    variant: 'tip',
    title: 'Use Merton’s Manifest vs Latent Lens to Debunk Any Myth',
    body: 'Robert K. Merton gives you a crisp 2-line tool for any Mains answer: while common sense notices only the manifest purpose of an institution (e.g., coaching centres prepare students for exams), sociology exposes latent structural consequences (delaying youth unemployment in a middle-class waiting room and reproducing credential anxiety).',
  },
  {
    kind: 'answerBox',
    intro: 'Common sense is unexamined everyday cultural knowledge used for practical survival, whereas sociology is a systematic, comparative, and empirical discipline; yet the two stand in continuous critical dialogue.',
    points: [
      'Why Sociology Diverges: Common sense is local, anecdotal, and contradictory (Béteille) and masks inequality as natural (Gramsci); sociology suspends prenotions (Durkheim) and debunks official facades (Berger).',
      'Hidden Order & Interaction: Through breaching experiments and dramaturgy, Garfinkel and Goffman prove that ordinary interactions follow unspoken rules invisible to casual eyes.',
      'Why Common Sense Matters as a Bridge: Schutz shows lay typifications guide social action, and Béteille warns against dismissing local insight completely — making common sense a useful starting point for research.',
      'Two-Way Feedback & Imagination: Giddens’ Double Hermeneutic shows concepts like gender roles and sanskritisation reshape lay speech, while C.W. Mills links private troubles like youth unemployment to structure and history.',
    ],
    conclusion: 'Sociology often begins with puzzles rooted in common sense, but transcends everyday belief through rigorous evidence, comparative scrutiny, and structural imagination.',
  },
]

export const topic3En: Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'> = {
  summary:
    'Common sense is taken-for-granted cultural knowledge that helps daily survival without empirical testing. Sociology interrogates these shortcuts — breaking Durkheim’s prenotions, exposing Gramsci’s hegemonic myths, reading Schutz and Garfinkel’s everyday meanings, and linking private troubles to history through C.W. Mills’ Sociological Imagination.',
  mindMap,
  sections,
}
