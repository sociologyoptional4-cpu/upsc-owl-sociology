import type { MindMapData, NotebookSection, PyqAnswerItem, TopicNotebookSpec } from '@/lib/notes/notebook-types'

const mindMap: MindMapData = {
  title: 'Unit 1.3 · Sociology, Common Sense & C.W. Mills',
  center: 'Common Sense vs Sociology',
  subtitle: 'Break Prenotions • Study Meaning • Link Biography to History',
  branches: [
    {
      title: 'What Is Common Sense?',
      color: 'lavender',
      thinkers: ['Antonio Gramsci', 'Clifford Geertz', 'André Béteille'],
      points: [
        'Everyday taken-for-granted wisdom from socialisation & habit',
        'Gramsci: "folklore of philosophy" reproducing dominant ideology',
        'Contradictory proverbs & anecdotal bias without systematic test',
        'Naturalises caste, gender & poverty as personal destiny',
      ],
    },
    {
      title: 'Rupture & Critique View',
      color: 'yellow',
      thinkers: ['Émile Durkheim', 'Peter Berger', 'André Béteille'],
      points: [
        'Durkheim: reject "prenotions"; study social facts as things',
        'Suicide study disproved common sense of purely personal act',
        'Peter Berger: "debunking motif" exposes hidden power facades',
        'Béteille: sociology is comparative, empirical & generalised',
      ],
    },
    {
      title: 'Bridge & Complementary Link',
      color: 'mint',
      thinkers: ['Alfred Schutz', 'Harold Garfinkel', 'Anthony Giddens', 'Max Weber'],
      points: [
        'Starting point: gives research puzzles & contextual empathy',
        'Schutz & Weber: actors’ everyday typifications build social order',
        'Garfinkel: breaching experiments reveal hidden queue/greeting rules',
        'Giddens Double Hermeneutic: concepts flow back into lay talk',
      ],
    },
    {
      title: 'C.W. Mills: Sociological Imagination',
      color: 'pink',
      thinkers: ['C. Wright Mills', 'G.H. Mead', 'Erving Goffman'],
      points: [
        'Personal Troubles + Social Structure + History = Imagination',
        'Aarav’s delayed metro → infrastructure, class, gender & city life',
        'UPSC burnout & farmer suicide → systemic, not just individual',
        'Shaadi apps & digital caste → structure shapes personal choice',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u1-01-sociological-imagination.webp',
    alt: 'Aarav complaining about delayed Delhi Metro versus a sociologist linking personal trouble to infrastructure, class, gender and history',
    caption: 'Aarav ki Metro complaint ek "personal irritation" lagti hai — sociological imagination use infrastructure, crowding, class, gender aur urban systems se jodti hai.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 1 Visual 01',
  },
  {
    kind: 'md',
    body: `## Aarav ki Metro Complaint aur Common Sense ka Jaal

Subah 9 baje Rajiv Chowk metro station par train late hai. [[eg:Aarav chidhte hue bolta hai: "Delhi ke log kabhi punctual nahi hote, sab aalsi hain."]] Yeh ==Common Sense== hai — turant milne wala, anubhav par tika aur bina jaanch ka verdict. Lekin paas khadi sociologist poochti hai: kya yeh sirf aadat hai, ya peak-hour crowding, metro coach capacity, office timings, women commuters ki safety constraints aur urban planning ka nateeja? Yahi ek sawaal common sense ko ==Sociological Perspective== se alag kar deta hai.

## Common Sense kya hai aur Yeh Dhokha kyun deta hai?

[[thinker:Antonio Gramsci]] common sense ko *"folklore of philosophy"* kehte hain — bikhra hua, uncritical gyaan jo power structures ko normal bana deta hai. [[thinker:Clifford Geertz]] ke mutabik yeh ek *cultural system* hai jo rozmarra ke kaam chalata hai, par scientific truth ki guarantee nahi deta. Ismein chaar badi kamzoriyan hain:
- **Contradictory Logic:** Ek taraf kehta hai *"Door ke dhol suhane"*, doosri taraf *"Ghar ki murgi daal barabar"* — har sthiti ke liye ulta proverb taiyar rehta hai.
- **Anecdotal & Local Bias:** Ek rishtedaar ko dekh kar poore samaj par niyam bana lena.
- **Naturalising Inequality:** [[trap:"Ladkiyan maths mein weak hoti hain", "Gareeb aalsi hain" ya "Shehron mein caste khatam ho gayi hai" — aise myths social barriers ko biology ya kismat bata dete hain.]]
- **Psychological Reductionism:** Farmer suicide ya student anxiety ko sirf kamzor mann kehna, jabki peeche agrarian debt aur job crisis khada hota hai.

## Conflict ya Rishta? Teen Sociological Positions

### 1. Positivist Rupture: Common Sense ko Chhodo
[[thinker:Emile Durkheim]] ne *Rules of Sociological Method* mein kaha ki researcher ko apne ==prenotions== (purane common-sense beliefs) tyagne honge. Unhone *Suicide* (1897) mein data se dikhaya ki Protestants aur unmarried logon mein suicide zyada hoti hai — matlab personal lagne wala kadam bhi social integration se chalta hai. [[thinker:Peter Berger]] ise ==Debunking Motif== kehte hain: jo obvious dikhe, uske peeche ka sach ujaagar karna. [[thinker:Andre Beteille]] jodte hain ki common sense localized aur unreflective hai, jabki sociology comparative aur evidence-tested hai.

### 2. Interpretive Turn: Common Sense hi Study ka Subject hai
[[thinker:Max Weber]] (*Verstehen*), [[thinker:Alfred Schutz]] (Phenomenology) aur [[thinker:Harold Garfinkel]] (Ethnomethodology) maante hain ki samaj chalta hi logon ke common-sense meanings se hai! [[eg:Metro mein bina bole line lagana ya lift mein anjaan se aankh na milana — Garfinkel ke breaching experiments dikhate hain ki jab koi yeh ankahe niyam todta hai, tab log gussa kyun hote hain.]] [[link:Unit 2 ke Non-Positivist Methodologies mein Schutz aur Garfinkel ke methods detail mein aayenge, aur Paper 2 mein caste ki daily lived reality se judte hain.]]

### 3. Complementary Bridge: Starting Point & Double Hermeneutic
Kya common sense research ka starting point hai? Haan! Yeh researcher ko hypothesis, cultural empathy aur interesting anomalies deta hai — par proof ka standard kabhi nahi ban sakta. [[thinker:Anthony Giddens]] ne ise ==Double Hermeneutic== kaha: sociology pehle common sense ko samajhti hai, aur phir uske concepts (jaise *anomie*, *gender stereotyping*, *dominant caste*) wapas aam bolchaal ka hissa ban jaate hain.

## C. Wright Mills ki Sociological Imagination

[[thinker:C. Wright Mills]] (*The Sociological Imagination*, 1959) ne kaha ki asli sociological nazariya ==biography (personal troubles)== aur ==history (public issues of social structure)== ko ek saath dekhta hai:

| Rozmarra ki Situation | Common Sense Verdict | Sociological Imagination Insight |
| --- | --- | --- |
| UPSC aspirant ka burnout | "Focus aur mehnat kam hai" | Youth unemployment, credential inflation & coaching economy |
| Shaadi apps par match filter | "Personal pasand-napasand" | Caste endogamy, hypergamy & class capital algorithms |
| Kisan ki aatmahatya | "Personal karz ya weak mind" | Agrarian distress, MSP crisis, credit & monsoon structure |
| Urban gated society WhatsApp | "Sirf safety & festival group" | Digital caste networks & residential segregation |`,
  },
  {
    kind: 'flow',
    direction: 'vertical',
    steps: [
      { label: '1. Personal Trouble', text: 'Aarav ki metro late hui, ya ek youth ko naukri nahi mil rahi' },
      { label: '2. Suspend Common Sense', text: 'Durkheim: "Log aalsi hain" jaise prenotion ko bracket karo' },
      { label: '3. Find Structural Pattern', text: 'Crowding, class access, labour market aur policy data check karo' },
      { label: '4. Connect to History', text: 'Dekho urban planning aur global economy ne yeh halat kaise banayi' },
      { label: '5. Sociological Imagination', text: 'Private irritation ab public issue aur reformable reality dikhta hai' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Common Sense Knowledge',
    rightTitle: 'Sociological Knowledge',
    rows: [
      { aspect: 'Source & Basis', left: 'Habit, tradition, personal experience, hearsay', right: 'Systematic research, data, concepts & theory' },
      { aspect: 'Verification', left: 'Assumed true without empirical testing', right: 'Tested, falsifiable, peer-reviewed evidence' },
      { aspect: 'Scope', left: 'Local, episodic, bound to one milieu', right: 'Comparative across cultures, classes & history' },
      { aspect: 'Logical Consistency', left: 'Often contradictory proverbs & confirmation bias', right: 'Coherent conceptual framework' },
      { aspect: 'Stance on Inequality', left: 'Treats hierarchies as natural or fate', right: 'Exposes power, ideology & social construction' },
      { aspect: 'View on Agency', left: 'Blames individual traits or luck', right: 'Links personal choices to structural constraints' },
      { aspect: 'Mutual Link', left: 'Gives sociology initial puzzles & meanings', right: 'Refines & feeds back via Double Hermeneutic' },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Prenotions',
    meaning: 'Sociologist ke dimaag mein pehle se baithe unexamined common-sense ideas jinhe Durkheim objective study shuru karne se pehle alag rakhne ko kehte hain.',
    thinkerSlug: 'emile-durkheim',
  },
  {
    kind: 'keyTerm',
    term: 'Sociological Imagination',
    meaning: 'C. Wright Mills ka concept: personal troubles ko broader social structures aur historical shifts se jod kar dekhne ki drishti.',
  },
  {
    kind: 'keyTerm',
    term: 'Debunking Motif',
    meaning: 'Peter Berger ka shabd — samaj ke official aur obvious lagne wale parde ke peeche chhupe asli power aur structural sach ko dikhana.',
  },
  {
    kind: 'keyTerm',
    term: 'Double Hermeneutic',
    meaning: 'Anthony Giddens ka two-way loop: sociology lay people ke concepts interpret karti hai, aur sociological shabd wapas logon ke common sense mein ghul jaate hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Breaching Experiment',
    meaning: 'Harold Garfinkel ki technique: roz ke unstated common-sense niyam jaan-boojh kar todna taaki samaj ka chhupa moral order saamne dikhe.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'emile-durkheim',
    quote: 'The first and most fundamental rule is: Consider social facts as things.',
    context: 'Common-sense notions aur personal biases ko door rakh kar objective analysis karne ka niyam.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'robert-k-merton',
    quote: 'Manifest functions are intended and recognised; latent functions reveal hidden structural consequences missed by everyday eyes.',
    context: 'Common sense sirf manifest dikhawa dekhta hai; sociology latent functions ujaagar karti hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '6 PYQs in 13 Years: Balanced Stand hi Toppers ki Pasand hai',
    body: '2025 (#1), 2023 (#7), 2021 (#11) aur 2016 (#20) — sabka core ek hai: kya sociology common sense hai? Kabhi pure "NO" par mat ruko! Pehle differences (Durkheim, Berger, Béteille) dikhao, phir dialectical connection (starting point, Schutz/Garfinkel, Giddens Double Hermeneutic) se answer close karo.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Sense ko bilkul "Bekaar" mat ghoshit karna',
    body: 'Agar aap likh doge ki common sense 100% false hai, toh examiner Interpretive Sociology (Weber, Schutz, Garfinkel) ki samajh miss maanege. Remember: common sense can be empirically wrong yet socially real — log usi ke base par action lete hain!',
  },
  {
    kind: 'callout',
    variant: 'tip',
    title: 'Merton ka Latent vs Manifest Trick har Answer mein Lagao',
    body: 'Kisi bhi common-sense myth ko debunk karne ke liye Merton use karo: e.g. UPSC coaching ka manifest function exam pass karana hai, par latent function youth unemployment ko "waiting room" mein delay karna aur middle-class status anxiety manage karna hai.',
  },
  {
    kind: 'answerBox',
    intro: 'Common sense everyday living ka unexamined gyaan hai, jabki sociology systematic, comparative aur evidence-based inquiry hai — phir bhi dono ek doosre se conflict aur dialogue dono mein rehte hain.',
    points: [
      'Why not identical: Common sense anecdotal, localized aur contradictory hai (Béteille); sociology objective observation se prenotions todti hai (Durkheim Suicide).',
      'Debunking & Interaction: Berger ka debunking motif aur Goffman-Mead ka interaction lens dikhate hain ki ordinary interactions mein bhi hidden scripts aur power hoti hai.',
      'Starting point & Interpretive value: Schutz aur Garfinkel dikhate hain common sense hi social order chalata hai; research questions aksar wahin se nikalti hain.',
      'Two-way loop (Giddens): Sociological terms (anomie, gender bias) wapas public common sense ko enrich karte hain; Mills personal troubles ko history se jodte hain.',
    ],
    conclusion: 'Sociology common sense ki seedhi par chadh kar shuru hoti hai, par critical verification aur structural imagination ke zariye usse kahin aage jaati hai.',
  },
]

const pyqAnswers: PyqAnswerItem[] = [
  {
    year: 2025,
    paper: 'P1',
    marks: 10,
    question: 'What is common sense? How are common knowledge and sociology related to each other? Explain.',
    theme: 'Definition + Rupture vs Dialectical Relationship',
    intro: 'Common sense woh taken-for-granted everyday gyaan hai jo socialisation, habit aur local anubhav se banta hai; Gramsci ise "folklore of philosophy" kehte hain jo bina jaanch ke sach maan liya jaata hai.',
    points: [
      'Opposition / Break (Durkheim & Berger): Sociology common sense ke prenotions ko reject karke data-driven inquiry karti hai; Peter Berger kehte hain sociology ka debunking motif obvious lagne wale myths ko todta hai.',
      'Methodological Divide (André Béteille): Common knowledge episodic, localized aur self-contradictory hoti hai, jabki sociology comparative, empirical aur theoretically consistent hai.',
      'Interpretive & Heuristic Bridge (Schutz, Garfinkel): Common sense aksar research ka starting point banti hai; phenomenological aur ethnomethodological sociology khud lay meanings ko study karti hai.',
      'Double Hermeneutic (Anthony Giddens): Sociology ke concepts (e.g. role conflict, class, Sanskritisation) wapas aam logon ki common knowledge ko reshape karte hain.',
    ],
    thinkers: 'Antonio Gramsci, Émile Durkheim, Peter Berger, André Béteille, Alfred Schutz, Anthony Giddens',
    example: '"Caste ab cities mein khatam ho gayi hai" yeh common knowledge hai, jise sociology matrimonial filters aur housing segregation ke data se debunk karti hai.',
    conclusion: 'Common knowledge aur sociology dushman nahi balki critical dialogue mein hain: sociology common sense se raw puzzles leti hai aur use tested structural truth mein badalti hai.',
  },
  {
    year: 2023,
    paper: 'P1',
    marks: 10,
    question: 'Do you think that common sense is the starting point of social research? What are its advantages and limitations? Explain.',
    theme: 'Heuristic Value vs Methodological Limits of Common Sense',
    intro: 'Haan — common sense social research ke liye aksar ek initial starting point (heuristic trigger) ka kaam karta hai, lekin scientific proof ke liye usi par ruk jaana dangerous hota hai.',
    points: [
      'Why Starting Point (Advantages): Yeh researcher ko everyday anomalies aur relevant questions deta hai; Weber ke Verstehen ke liye actor ki common-sense language aur local context samajhna zaroori hota hai.',
      'Rapid Hypothesis Generation: Ground reality se familiarity (e.g. Srinivas ke village field insights) dry surveys se bachakar realistic hypotheses banwati hai.',
      'Limitation 1 — Confirmation Bias & Prenotions: Durkheim warn karte hain ki agar researcher common-sense biases na chhode, toh data interpretation distorted ho jaati hai.',
      'Limitation 2 — Narrow & Ideology-Bound: Gramsci ke mutabik common sense dominant class/caste/gender interests ko natural dikhata hai, aur macro-structural causes (Mills) nahi dekh paata.',
    ],
    thinkers: 'Émile Durkheim, Max Weber, Alfred Schutz, Antonio Gramsci, C. Wright Mills, M.N. Srinivas',
    example: 'Swiggy riders ko dekh kar aaya casual sawaal ("ratings ke liye itni tez kyun bhagte hain?") gig-economy algorithmic labour study ka starting point ban sakta hai.',
    conclusion: 'Common sense research ke liye ek accha compass aur starter spark hai, par final manzil sirf rigorous methodology aur theoretical scrutiny se milti hai.',
  },
  {
    year: 2021,
    paper: 'P1',
    marks: 10,
    question: 'How is Sociology related to common sense?',
    theme: 'Divergence, Enrichment & Two-Way Loop',
    intro: 'Sociology aur common sense dono insaani samaj ko samajhne ki koshish karte hain, par unka rishta ek saath critical rupture aur mutual enrichment ka hai.',
    points: [
      'Critical Divergence (Durkheim, Béteille): Common sense unexamined, localized aur contradictory hai; sociology empirical data, concepts aur comparative method se uske myths tode bina nahi chalti.',
      'Latent Reality Unveiled (Merton, Berger): Common sense sirf manifest surface dekhta hai, jabki sociology latent functions aur structural inequality ko debunk karti hai.',
      'Constitutive Role (Schutz, Garfinkel): Interpretive sociology maanti hai ki common-sense typifications aur stocks of knowledge hi social interaction ko sambhav banate hain.',
      'Two-Way Exchange (Giddens Double Hermeneutic): Sociological insights media aur education ke zariye waqt ke saath common sense ko zyada aware aur inclusive banate hain.',
    ],
    thinkers: 'Émile Durkheim, André Béteille, Robert K. Merton, Peter Berger, Harold Garfinkel, Anthony Giddens',
    example: 'Durkheim ki Suicide ne common sense ko ulta kiya, par aaj "mental health social stress se judi hai" yeh sociological insight common sense ban chuka hai.',
    conclusion: 'Sociology common sense ko blind belief ke roop mein reject karti hai, social data ke roop mein study karti hai, aur refined awareness ke roop mein samaj ko lautati hai.',
  },
  {
    year: 2018,
    paper: 'P1',
    marks: 10,
    question: 'The focal point of sociology rests on interaction. How do you distinguish it from common sense?',
    theme: 'Sociology of Social Interaction vs Common-Sense Perception',
    intro: 'Georg Simmel, Max Weber aur G.H. Mead kehte hain ki sociology ka core meaningful social interaction hai — aur jabki common sense interaction ko casual maan kar guzar jaata hai, sociology uske rules, power aur symbols decode karti hai.',
    points: [
      'Taken-for-Granted vs Problematic: Common sense roz ke interactions (metro line, greeting, family dinner) ko "natural" maanta hai; Garfinkel ke breaching experiments dikhate hain unke peeche hidden normative expectations hain.',
      'Surface Appearance vs Dramaturgy: Erving Goffman dikhate hain ki aam dikhne wali baatcheet mein front stage impression management aur social scripts chalte hain.',
      'Individual Mood vs Structural Rules: Common sense kisi argument ko "bad mood" kehta hai; sociology usmein class, gender patriarchy aur status hierarchy dekhti hai (Weber, Collins).',
      'Empirical Verification: Symbolic Interactionism aur ethnography interactions ko systematic coding aur cross-cultural comparison se jaanchti hai, anecdotes se nahi.',
    ],
    thinkers: 'Georg Simmel, Max Weber, G.H. Mead, Erving Goffman, Harold Garfinkel, André Béteille',
    example: 'Ek office meeting mein junior women ka kam bolna common sense mein "shyness" lag sakta hai, par interaction analysis wahan gendered interruptions aur power norms dikhati hai.',
    conclusion: 'Interaction dono ke samne hai, par common sense usmein sirf vyakti dekhta hai jabki sociology usmein chhupe symbols, rules aur structural power dekhti hai.',
  },
  {
    year: 2018,
    paper: 'P1',
    marks: 10,
    question: '"The sociological imagination enables us to grasp history and biography and the relationship between the two in a society.” – C.W.Mills. Explain.',
    theme: 'Biography + History + Social Structure (Mills 1959)',
    intro: 'C. Wright Mills ("The Sociological Imagination", 1959) ne yeh concept tab diya jab American sociology ya toh abstract grand theory (Parsons) ya mindless statistics (abstracted empiricism) mein phas rahi thi.',
    points: [
      'Core Meaning: Yeh ek mental quality hai jo insaan ko uski apni zindagi (biography) aur samaj ke bade historical badlaavon (history) ke intersection par rakh kar samajhne ki taqat deti hai.',
      'Personal Troubles vs Public Issues: Ek shehar mein 1 aadmi berozgar ho toh woh personal trouble hai; par jab 1 crore youth berozgar hon, toh woh economic aur educational structure ka public issue hai.',
      'Beyond Psychological Blame: Jab log apni anxiety ya shaadi tootne ka dosh sirf khud ko dete hain, Mills dikhate hain ki badalte gender roles aur market insecurity uske peeche hain.',
      'Indian Contemporary Relevance: Kisanon ke karz, UPSC coaching hubs ka stress, aur gig workers ki thakan — sab biography aur post-1991 economic history ke sangam par khade hain.',
    ],
    thinkers: 'C. Wright Mills, Émile Durkheim, Karl Marx, Peter Berger, Yogendra Singh',
    example: 'Aarav ki Delhi Metro delay irritation ek personal trouble hai, jise Mills ka lens urban infrastructure, peak-hour work culture aur city history se jod deta hai.',
    conclusion: 'Sociological imagination insaan ko powerless victim feel karne ke bajaye apni zindagi ko historical-structural clarity ke saath samajhne aur badalne ki shakti deti hai.',
  },
  {
    year: 2016,
    paper: 'P1',
    marks: 10,
    question: 'Is sociology common sense? Give reasons in support of your argument.',
    theme: 'Why Sociology Is NOT Common Sense (+ Nuanced Caveat)',
    intro: 'Seedha jawab hai: nahi, sociology common sense nahi hai, halanki dono ek hi samajik duniya par baat karte hain; sociology jahan systematic evidence aur structural analysis par chalti hai, wahin common sense unverified assumptions par.',
    points: [
      'Systematic Method vs Casual Habit: Sociology scientific/interpretive methods (sampling, ethnography, verification) use karti hai; common sense personal experiences ko universal maan leta hai.',
      'Counter-Intuitive Findings: Durkheim ki Suicide aur Merton ke latent functions dikhate hain ki sociological sach aksar common sense ke bilkul ulta hota hai.',
      'Critical vs Conformist: Common sense existing norms aur inequalities (caste, patriarchy) ko normal manta hai (Gramsci); Peter Berger kehte hain sociology unhe debunk karti hai.',
      'Balanced Nuance (Schutz & Giddens): Phir bhi sociology common sense se bilkul kati nahi hai — yeh lay meanings ko study karti hai aur Double Hermeneutic se aam soch ko upgrade karti hai.',
    ],
    thinkers: 'Émile Durkheim, André Béteille, Peter Berger, Robert K. Merton, Antonio Gramsci, Anthony Giddens',
    example: 'Common sense kehta hai divorce badhne se family institution khatam ho rahi hai; sociology dikhati hai ki rising divorce women’s economic autonomy aur higher expectations ka sanket bhi ho sakta hai.',
    conclusion: 'Sociology common sense ke jaisa dikh sakti hai kyunki uski bhasha rozmarra ki zindagi se judi hai, par uski methodology, rigor aur structural vision use ek distinct science banati hai.',
  },
]

export const topic3CommonSense: TopicNotebookSpec = {
  topicSlug: 'sociology-and-common-sense',
  summary: 'Common sense roz ka bina jaanch ka gyaan hai; sociology Durkheim ke prenotions todti hai, Garfinkel-Schutz ki tarah everyday meanings padhti hai, aur C.W. Mills ke zariye biography ko history se jodti hai.',
  thinkerSlugs: ['emile-durkheim', 'max-weber', 'robert-k-merton'],
  relatedTopicSlugs: [
    'modernity-and-emergence-of-sociology',
    'scope-and-other-social-sciences',
    'fact-value-and-objectivity',
    'non-positivist-methodologies',
    'perspectives-on-caste',
  ],
  mindMap,
  sections,
  pyqAnswers,
}
