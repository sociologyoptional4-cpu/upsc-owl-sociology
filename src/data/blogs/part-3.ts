import type { StarterBlogSpec } from './types'

export const STARTER_BLOGS_PART_3: StarterBlogSpec[] = [
  {
    slug: 'robert-k-merton-strain-theory-reference-group-upsc',
    title: 'Robert K. Merton: Manifest-Latent Functions, Strain Theory aur Reference Group',
    excerpt: 'Talcott Parsons ke grand theory se alag Robert K. Merton ki Middle Range Theory, Anomie Strain modes aur UPSC exam preparation par Reference Group application.',
    categorySlug: 'thinkers',
    tagTitles: ['Robert K. Merton', 'Middle Range Theory', 'Strain Theory', 'Reference Group'],
    papers: ['P1'],
    unitSlugs: ['sociological-thinkers', 'stratification-and-mobility'],
    topicSlugs: ['robert-merton-functions-deviance', 'talcott-parsons-social-system'],
    thinkerSlugs: ['robert-k-merton', 'emile-durkheim'],
    coverFilename: 'p1-u04-02-parsons-merton-mead.webp',
    coverAlt: 'Parsons, Merton and Mead sociological concepts diagram',
    publishedAt: '2026-11-22T18:00:00.000Z',
    seo: {
      title: 'Robert K. Merton Notes: Strain, Functions & Reference Group',
      description: 'Complete UPSC Sociology Paper 1 notes on Robert K. Merton: Middle Range Theory, Manifest vs Latent functions, 5 Strain adaptations, and Reference Group.',
      focusKeyword: 'Robert K. Merton Strain Theory',
    },
    faq: [
      {
        question: 'Middle Range Theory kya hoti hai?',
        answer: 'Yeh working hypotheses (macro data aur micro observations ke beech ka bridge) hoti hai, jo Talcott Parsons ki abstract Grand Theory aur raw micro-empiricism ke beech balance banati hai.',
      },
      {
        question: 'Manifest aur Latent functions mein ek simple Indian example do.',
        answer: 'Coaching institute join karna: Manifest function hai UPSC syllabus cover karna; Latent function hai peer network banana, routine discipline aana, aur city migration economy chalana.',
      },
      {
        question: 'Merton ki 5 Strain adaptations mein Rebellion aur Retreatism kaise alag hain?',
        answer: 'Retreatism mein person cultural goals aur institutional means dono reject karke withdraw kar leta hai (e.g. substance abuse); Rebellion mein woh naye alternative goals aur means create karta hai.',
      },
    ],
    quiz: [
      {
        question: 'Paper leak ya exam cheating Merton ke kis Strain mode ka example hai?',
        options: ['Conformity', 'Innovation', 'Ritualism', 'Retreatism'],
        answerIndex: 1,
        explanation: 'Success ka cultural goal accept karna par institutional means (fair exam) reject karke shortcut apnana "Innovation" hai.',
      },
      {
        question: 'Merton ke mutabik Anticipatory Socialization kab "dysfunctional" ho sakti hai?',
        options: ['In open flexible societies', 'In closed rigid caste/class structures where mobility is blocked', 'During college education', 'In meritocratic firms'],
        answerIndex: 1,
        explanation: 'Agar group membership possible hi na ho toh non-membership group ke norms apnana frustration aur marginality laata hai.',
      },
      {
        question: 'Parsons ke "universal functionalism" ko reject karke Merton ne kaun sa concept diya?',
        options: ['Dysfunction & Functional Alternatives', 'Historical Materialism', 'Mechanical Solidarity', 'Iron Law of Oligarchy'],
        answerIndex: 0,
        explanation: 'Merton ne kaha zaroori nahi har custom sabke liye useful ho; kuch institutions ke dysfunctions aur functional equivalents hote hain.',
      },
    ],
    sections: [
      {
        block: {
          blockType: 'blogCallout',
          variant: 'tip',
          title: 'Ek line me',
          body: 'Robert K. Merton ne Functionalism ko conservative label se nikal kar sharp, testable aur real-world **Middle Range** tool banaya.',
        },
      },
      {
        markdown: `## Functionalism ka Reform (1949)\n\nEarly anthropologists (Malinowski, Radcliffe-Brown) maante the ki har social practice samaj ke liye useful aur indispensable hai. **Robert K. Merton** ne isey 3 points par correct kiya:\n\n1. **Functional Unity fail:** Jo practice ek group ke liye helpful hai (e.g. caste endogamy), woh doosre ke liye **dysfunctional** ho sakti hai.\n2. **Manifest vs Latent Functions:** Intended consequences (*Manifest*) vs unintended, hidden consequences (*Latent*).\n3. **Functional Alternatives:** Ek hi kaam doosra institution bhi kar sakta hai (jaise religion ki jagah civic nationalism ya welfare state).`,
      },
      {
        block: {
          blockType: 'compare',
          leftTitle: 'Strain Mode (Merton)',
          rightTitle: 'Goals & Means + Example',
          rows: [
            { aspect: 'Conformity (+ / +)', left: 'Accepts both goal & fair means', right: 'Honest UPSC preparation' },
            { aspect: 'Innovation (+ / -)', left: 'Goal accepted, means bypassed', right: 'Cyber fraud, paper leak, white-collar crime' },
            { aspect: 'Ritualism (- / +)', left: 'Goal forgotten, rules worshipped', right: 'Strict file-pushing clerk without public purpose' },
            { aspect: 'Retreatism (- / -) & Rebellion (+/-)', left: 'Drops out OR builds new system', right: 'Addiction dropout vs Social revolution' },
          ],
        },
      },
      {
        markdown: `## Reference Group & Relative Deprivation\n\n*The American Soldier* data se Merton ne dikhaya ki insaan apni khushi absolute terms mein nahi balki **Reference Group** se compare karke measure karta hai (*Relative Deprivation*). Jab aspirants toppers ke lifestyle ya non-membership elite circles ke habits pehle hi apnate hain, usey **Anticipatory Socialization** kehte hain — jo open system mein helpful aur closed system mein painful hota hai.`,
      },
      {
        block: {
          blockType: 'answerBox',
          intro: 'Merton par UPSC question aaye toh "Durkheim vs Merton Anomie" aur Indian white-collar crime / aspiration examples zaroor daalo.',
          points: [
            { text: 'Contrast Durkheim’s normlessness with Merton’s structural gap between Cultural Goals and Institutionalized Means.' },
            { text: 'Use Manifest/Latent functions and Dysfunctions to critique classical functionalism.' },
            { text: 'Connect Reference Group behavior to consumerism, coaching culture, and social media comparison.' },
          ],
          conclusion: 'Merton ka framework aaj bhi deviance, youth aspirations aur organizational behavior samajhne ka sabse practical model hai.',
        },
      },
    ],
  },
  {
    slug: 'sociology-vs-common-sense-positivism-objectivity',
    title: 'Sociology vs Common Sense aur Objectivity Debate (Paper 1 Foundation)',
    excerpt: 'Kya Sociology sirf common sense hai? Andre Beteille, Durkheim, Max Weber (Value Neutrality) aur Gunnar Myrdal ke views ke saath complete clarity.',
    categorySlug: 'paper-1-concepts',
    tagTitles: ['Common Sense', 'Objectivity', 'Positivism', 'Weber'],
    papers: ['P1'],
    unitSlugs: ['sociology-the-discipline', 'sociology-as-science'],
    topicSlugs: ['sociology-and-common-sense', 'fact-value-and-objectivity', 'positivism-and-its-critique'],
    thinkerSlugs: ['emile-durkheim', 'max-weber'],
    coverFilename: 'p1-u02-02-objectivity-methods.webp',
    coverAlt: 'Fact, value neutrality and objectivity methods in Sociology',
    publishedAt: '2026-11-22T12:00:00.000Z',
    seo: {
      title: 'Sociology vs Common Sense & Objectivity | UPSC Paper 1',
      description: 'Compare Sociology vs Common Sense (Andre Beteille), Positivism vs Interpretivism, and Weber Value Neutrality debate for UPSC Sociology Paper 1.',
      focusKeyword: 'Sociology vs Common Sense',
    },
    faq: [
      {
        question: 'Sociology aur Common Sense mein sabse bada difference kya hai?',
        answer: 'Common sense localized, unexamined aur contradictory hota hai ("Look before you leap" vs "He who hesitates is lost"), jabki Sociology systematic evidence, theory aur comparative logic par chalti hai.',
      },
      {
        question: 'Value Freedom aur Value Neutrality mein kya farq hai?',
        answer: 'Weber ke mutabik sociologist topic choose karte waqt values se influence ho sakta hai (Value Relevance), par research aur analysis karte waqt personal bias alag rakhna chahiye (Value Neutrality).',
      },
      {
        question: 'Gunnar Myrdal ne pure objectivity ko kyun challenge kiya?',
        answer: 'Myrdal (Asian Drama) ne kaha total value neutrality ek myth hai; isliye researcher ko apne personal values aur assumptions upfront declare kar dene chahiye.',
      },
    ],
    quiz: [
      {
        question: 'Kis Indian sociologist ne kaha ki common sense hamesha particularistic aur unreflective hota hai?',
        options: ['André Béteille', 'Talcott Parsons', 'Herbert Spencer', 'Vilfredo Pareto'],
        answerIndex: 0,
        explanation: 'André Béteille ne apni writings mein clear kiya ki sociological knowledge common sense ke assumptions ko empirical inquiry se challenge karti hai.',
      },
      {
        question: 'Max Weber ke mutabik research topic selection mein values ka role kya kehlata hai?',
        options: ['Value Relevance (Wertbeziehung)', 'Positivist dogmatism', 'Ethical relativism', 'Historical determinism'],
        answerIndex: 0,
        explanation: 'Weber ne mana ki researcher apne values ke hisaab se topic chunta hai (Value Relevance), lekin data collection unbiased hona chahiye.',
      },
      {
        question: 'Alvin Gouldner ne Sociology ke "myth of value-free sociology" par kya kaha?',
        options: ['Sociologists should state values honestly and side with human dignity', 'Sociology should copy physics blindly', 'Qualitative methods are useless', 'Only statistics give truth'],
        answerIndex: 0,
        explanation: 'Gouldner ne kaha "value-free" hone ka dawa aksar status quo aur powerful interests ko protect karta hai.',
      },
    ],
    sections: [
      {
        block: {
          blockType: 'blogCallout',
          variant: 'yaadRakho',
          title: 'High-frequency UPSC topic',
          body: 'Unit 1 aur Unit 2 se har saal kam se kam ek 10-marker ya 20-marker **Common Sense, Positivism, ya Objectivity** par aata hai. Yeh foundation clear ho toh baaki units apne aap strong lagti hain.',
        },
      },
      {
        markdown: `## Sociology vs Common Sense: 4 Tests\n\nCommon sense humein roz ki life chalane mein madad karta hai, jaise "ladke kam rote hain" ya "gareebi aalsi hone se aati hai". **C. Wright Mills** ka *Sociological Imagination* dikhata hai ki kaise personal troubles actually public structures se jude hote hain.\n\n- **Evidence:** Common sense anecdotes par chalta hai; Sociology surveys, ethnographies aur longitudinal data par.\n- **Falsifiability:** Common sense apni galtiyan nahi maanta; Sociology hypotheses test karke revise karta hai.\n- **Debunking Motif (Peter Berger):** Sociology surface meanings ke peeche chhipe power structures ko expose karti hai.`,
      },
      {
        block: {
          blockType: 'compare',
          leftTitle: 'Positivism (Comte / Durkheim)',
          rightTitle: 'Non-Positivism (Weber / Schutz)',
          rows: [
            { aspect: 'Focus', left: 'Observable external Social Facts', right: 'Subjective meanings (Verstehen)' },
            { aspect: 'Tools', left: 'Statistics, multivariate correlations', right: 'Ethnography, interviews, life histories' },
            { aspect: 'Objectivity stance', left: 'Strict natural-science neutrality', right: 'Reflexivity & declared standpoint' },
          ],
        },
      },
      {
        markdown: `## Kya Sociology 100% Objective ho sakti hai?\n\n- **Durkheim:** Values ko side rakh kar social facts ko objects maano.\n- **Max Weber:** Topic selection *value-relevant* hota hai, par analysis *value-neutral* hona chahiye.\n- **Gunnar Myrdal & Alvin Gouldner:** Total objectivity possible nahi — bias chhupane ke bajay **value transparency** aur **reflexivity** (Bourdieu) apnao.`,
      },
      {
        block: {
          blockType: 'answerBox',
          intro: 'Objectivity ya Common Sense ke question mein Anthony Giddens ka "Double Hermeneutic" likhne par examiner turant impress hota hai.',
          points: [
            { text: 'Distinguish Sociology from Common Sense using André Béteille, Peter Berger (debunking), and Gramsci (hegemonic common sense).' },
            { text: 'Explain the objectivity debate: Comte/Durkheim (natural science model) -> Weber (Value Neutrality) -> Myrdal/Gouldner/Feminist standpoint theory.' },
            { text: 'Conclude with Methodological Pluralism (combining quantitative rigour with reflexive qualitative depth).' },
          ],
          conclusion: 'Sociology common sense ko poori tarah reject nahi karti, balki use raw material bana kar empirical scrutiny se guzaarti hai.',
        },
      },
    ],
  },
  {
    slug: 'upsc-sociology-mains-answer-writing-300-plus-framework',
    title: 'UPSC Sociology Mains mein 300+ Marks Kaise Laayein: Complete Answer Framework',
    excerpt: '10-marker aur 20-marker Sociology answers ka exact structure: sociological jargon, P1-P2 interlinking, thinkers, current affairs aur visual diagrams.',
    categorySlug: 'answer-writing',
    tagTitles: ['Answer Writing', '300+ Strategy', 'Paper 1', 'Paper 2'],
    papers: ['P1', 'P2'],
    unitSlugs: ['sociology-the-discipline', 'perspectives-on-indian-society'],
    topicSlugs: ['modernity-and-emergence-of-sociology', 'structural-functionalism-mn-srinivas'],
    thinkerSlugs: ['karl-marx', 'emile-durkheim', 'max-weber', 'mn-srinivas'],
    coverFilename: 'p1-u1-01-sociological-imagination.webp',
    coverAlt: 'Sociological Imagination and UPSC Mains Answer Framework',
    publishedAt: '2026-11-21T16:00:00.000Z',
    seo: {
      title: 'UPSC Sociology Answer Writing Guide (300+ Marks Framework)',
      description: 'Step-by-step UPSC Sociology Mains answer writing template: how to integrate thinkers, Paper 1-Paper 2 interlinking, micro-examples, and balanced critiques.',
      focusKeyword: 'Sociology Answer Writing',
    },
    faq: [
      {
        question: '10-marker aur 20-marker mein kitne thinkers likhne chahiye?',
        answer: '10-marker mein 2 se 3 relevant thinkers aur 20-marker mein 4 se 6 thinkers (pro + critique dono sides se) enough hote hain — naam thopne ke bajay unka concept explain karo.',
      },
      {
        question: 'GS aur Sociology Optional ke answer mein sabse bada farq kya hai?',
        answer: 'GS answers administrative/policy-heavy hote hain, jabki Sociology answers conceptual, theoretical aur thinker-driven hote hain (structure, agency, power, stratification, norms par focus).',
      },
      {
        question: 'Kya Paper 1 aur Paper 2 ki interlinking har answer mein zaroori hai?',
        answer: 'Haan! Paper 2 mein Weber, Marx ya Durkheim lagana aur Paper 1 mein Srinivas, Ambedkar ya Indian gig-worker examples dena marks ko average se topper range mein le jaata hai.',
      },
    ],
    quiz: [
      {
        question: 'Sociology answer ko GS answer banne se bachane ka sabse acha tareeka kya hai?',
        options: ['Sirf government schemes likhna', 'Concepts, sociological keywords aur thinkers ke lenses se analyze karna', 'Bina heading ke essay likhna', 'Sirf 1 thinker par rukna'],
        answerIndex: 1,
        explanation: 'Examiner sociological vocabulary (e.g. anomie, cultural lag, social capital, hegemony) aur balanced theoretical perspectives dekhta hai.',
      },
      {
        question: 'Har Sociology critique paragraph likhne ka ideal rule kya hai?',
        options: ['Personal political opinion dena', 'Doosre sociological school/thinker ke perspective se evaluate karna', 'Same point repeat karna', 'Sirf positive points likhna'],
        answerIndex: 1,
        explanation: 'Marxist point ko Weberian ya Functionalist ya Feminist lens se balance karna scholarly neutrality dikhata hai.',
      },
      {
        question: '20-marker Sociology answer mein flowcharts ya 2x2 matrices ka kya role hai?',
        options: ['Extra space bharne ke liye', 'Complex processes aur comparisons ko examiner ke liye scannable banane ke liye', 'Sirf diagrams likhna bina text ke', 'Avoid karna chahiye'],
        answerIndex: 1,
        explanation: 'Chhota neat diagram (jaise Merton Strain table ya Durkheim matrix) clarity badhata hai aur revision time bachata hai.',
      },
    ],
    sections: [
      {
        block: {
          blockType: 'blogCallout',
          variant: 'upscAngle',
          title: 'Golden Rule',
          body: 'Examiner ek question paper mein hazaaron answers padhta hai — aapke answer mein **pehle 3 lines mein thinker/concept** aur **har paragraph mein theory + real Indian example** dikhna chahiye.',
        },
      },
      {
        markdown: `## The 4-Part Winning Structure (10 & 20 Markers)\n\n1. **Sharp Introduction (2–3 lines):** Ya toh crisp sociological definition do, ya question ka core tension batao (e.g. "While modernization theory predicted caste decline, M. N. Srinivas and Rajni Kothari showed caste politicization...").\n2. **Theoretical Core (Body Part 1):** Thinker ka naam + original term + brief mechanism. Kabhi sirf name-dropping mat karo — ek line mein *kyun* samjhao.\n3. **Multi-Perspective & Indian Evidence (Body Part 2):** Ek view par mat ruko. Agar Functionalism likha hai toh Conflict, Feminist, ya Symbolic Interactionist view jodo; saath mein latest NCRB, PLFS, NITI Aayog, ya sociological field studies ka reference do.\n4. **Sociological Conclusion (2–3 lines):** Future-oriented synthesis do, na ki generic IAS policy wish-list.`,
      },
      {
        block: {
          blockType: 'compare',
          leftTitle: 'Average GS-Style Answer (9/20)',
          rightTitle: 'Topper Sociology Answer (13+/20)',
          rows: [
            { aspect: 'Intro', left: 'Poverty is a big problem in India...', right: 'Amartya Sen & Oscar Lewis highlight capability vs cultural dimensions...' },
            { aspect: 'Analysis', left: 'Lists 6 govt welfare schemes', right: 'Applies Marxian class polarization, Bourdieu habitus & SC/ST mobility gaps' },
            { aspect: 'Presentation', left: 'Long unbroken walls of text', right: 'Subheadings, thinker tags, compact flowchart, and balanced evaluation' },
          ],
        },
      },
      {
        markdown: `## 3 Common Traps Jo Marks Kaat-ti Hain\n\n- **Trap 1 (GS Drift):** Welfare schemes (PM-KISAN, MGNREGA) likhte waqt bhool jaana ki inka *sociological impact* (patron-client break, women agency, wage bargaining) likhna zaroori hai.\n- **Trap 2 (One-Sided Critique):** Marx ko sirf criticize karna bina yeh bataye ki unhone *power aur conflict* ko sociology ke center mein laaya.\n- **Trap 3 (Outdated Examples):** 1990s ke examples ke saath aaj ke gig platforms, caste WhatsApp networks, aur nuclear family shifts bhi likho.`,
      },
      {
        block: {
          blockType: 'answerBox',
          intro: 'Har weekly test ke baad apni copy is 5-point checklist se audit karo.',
          points: [
            { text: 'Thinker density: Kam se kam 2 thinkers in 10M aur 4+ in 20M with exact conceptual link.' },
            { text: 'Cross-paper bridge: Paper 1 concepts in Paper 2 and Indian empirical reality in Paper 1.' },
            { text: 'Current affairs anchor: Newspaper ya sociological report (e.g. Oxfam, ASER, PLFS) ka 1-line link.' },
          ],
          conclusion: 'Consistency aur PYQ-based practice se 150+150 (300+) score Sociology Optional mein bilkul achievable hai.',
        },
      },
    ],
  },
]
