import type { MindMapData, NotebookSection, PyqAnswerItem, TopicNotebookSpec } from '@/lib/notes/notebook-types'

const mindMap: MindMapData = {
  title: 'Unit 1.2 · Scope & Other Social Sciences',
  center: 'Scope of Sociology',
  subtitle: 'Formal vs Synthetic → Holistic Relational Lens',
  branches: [
    {
      title: 'Two Classical Schools',
      color: 'lavender',
      thinkers: ['Georg Simmel', 'Max Weber', 'Émile Durkheim', 'Pitirim Sorokin'],
      points: [
        'Formalistic: study pure forms of interaction (Simmel, Vierkandt)',
        'Synthetic: general science integrating all social sciences (Durkheim, Hobhouse)',
        'Critique: form & content cannot be split; encyclopaedic scope is vague',
        'Modern consensus: Alex Inkeles (institutions, processes, methods) + Merton',
      ],
    },
    {
      title: 'History & Anthropology',
      color: 'yellow',
      thinkers: ['G.E. Howard', 'E.H. Carr', 'A.L. Kroeber', 'M.N. Srinivas'],
      points: [
        'History = idiographic past events; Sociology = nomothetic patterns',
        'Bridge: Historical Sociology (Weber Protestant Ethic, Subaltern Studies)',
        'Anthropology = small/tribal fieldwork; Sociology = industrial/surveys',
        'India merged both: Srinivas, Dube & Béteille village ethnographies',
      ],
    },
    {
      title: 'Pol Sci, Econ & Psych',
      color: 'mint',
      thinkers: ['Karl Marx', 'Mark Granovetter', 'G.H. Mead', 'Émile Durkheim'],
      points: [
        'Pol Sci: state & law vs Sociology: caste, class & elite power (Kothari)',
        'Economics: rational homo economicus vs Sociology: embedded markets',
        'Psychology: individual mind vs Sociology: social facts & collective norms',
        'Bridges: Political Sociology, Economic Sociology, Symbolic Interactionism',
      ],
    },
    {
      title: 'Globalisation & Multidisciplinary Turn',
      color: 'pink',
      thinkers: ['Anthony Giddens', 'Arjun Appadurai', 'B.R. Ambedkar', 'Yogendra Singh'],
      points: [
        'Boundaries blurring: climate justice, digital caste & gig economy',
        'India post-1991: diaspora, urban slums, IT middle class & platform labour',
        'Perspective IS scope: studying the social context behind every issue',
        'Example: Unemployment = market + class + caste network + policy',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u1-03-social-sciences.webp',
    alt: 'Comparison chart of Sociology versus Common Sense, History, and Psychology highlighting social context using unemployment example',
    caption: 'Har social science ek angle dekhti hai; Sociology un sabke peeche chhupe social context aur relationships ko jodti hai.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 1 Visual 03',
  },
  {
    kind: 'md',
    body: `## Nature & Unique Scope of Sociology

[[thinker:Robert Bierstedt]] kehte hain ki Sociology ek *social*, *categorical* (what is, not what ought to be), *pure*, *abstract* aur *generalizing* science hai. Iski uniqueness is baat mein nahi ki yeh samaj ka koi alag tukda reserve karti hai, balki is baat mein hai ki yeh ==relationships, social institutions aur structural context== ke beech ke connections dekhti hai. [[eg:Jaise berozgaari Economics ke liye GDP aur inflation ka issue hai, Psychology ke liye stress ka — par Sociology ke liye yeh labour market, caste-class capital, coaching industry aur state policy ka intersection hai.]]

### Scope par Do Classical Schools

- **Formalistic (Specialistic) School:** [[thinker:Georg Simmel]], [[thinker:Max Weber]], [[thinker:Alfred Vierkandt]], [[thinker:Leopold von Wiese]] aur [[thinker:Ferdinand Tonnies]]. Inka kehna tha ki agar sociology sab kuch padhegi toh independent science nahi ban payegi. Isliye ise sirf ==forms of social interaction== (competition, cooperation, domination, conflict) padhne chahiye, jabki *content* (economy, law, religion) baaki disciplines ke paas rahe. [[trap:Pitirim Sorokin ka sharp critique: form aur content ko alag karna impossible hai — ek bartan ka aakaar aur uske andar ka paani alag samajh sakte ho, par competition ke forms bina economic ya political content ke samajhna khokhla hai.]]
- **Synthetic School:** [[thinker:Emile Durkheim]], [[thinker:L.T. Hobhouse]], [[thinker:Morris Ginsberg]] aur [[thinker:Pitirim Sorokin]]. Yeh kehte the samaj ek living organism ki tarah interconnected hai, isliye sociology ek ==generalizing & synthesising science== hai. [[thinker:Emile Durkheim]] ne iske teen pillars bataye: *social morphology* (population & spatial form), *social physiology* (religion, law, economy ke functions) aur *general sociology*.

Aaj [[thinker:Alex Inkeles]] aur [[thinker:T.B. Bottomore]] ka ==Middle-Way Consensus== chalta hai — sociology ka scope na itna sankra hai ki sirf abstract forms dekhe, na itna phaila ki sab kuch nigal jaaye. [[thinker:Robert K. Merton]] ki *Middle-Range Theories* aur [[thinker:C. Wright Mills]] ki *Sociological Imagination* iski boundaries ko sharp rakhti hain.

## Sociology aur Baaki Social Sciences ka Matrix

| Discipline | Core Focus | Typical Method | Shared Bridge / Sub-field |
| --- | --- | --- | --- |
| History | Unique past events & chronology | Archival documents & historiography | Historical Sociology (Weber, Tilly, Subaltern) |
| Social Anthropology | Culture, kinship, small communities | Ethnography & participant observation | India Village Studies (Srinivas, Dube, Béteille) |
| Political Science | State, constitution, laws, sovereignty | Institutional & normative analysis | Political Sociology (Pareto, Kothari) |
| Economics | Scarcity, rational choice, prices | Quantitative & deductive modelling | Economic Sociology (Weber, Granovetter) |
| Psychology | Individual mind, cognition, emotion | Lab experiments & clinical testing | Social Psychology (G.H. Mead, Cooley) |

## Globalisation ke daur mein Badalta Scope (India Focus)

1991 ke LPG reforms aur digital boom ke baad India mein sociology gaon-aur-jaati se aage badh kar ==multidisciplinary frontiers== mein gayi hai:
- **Digital & Platform Society:** [[eg:Swiggy-Zomato gig riders ki algorithmic control, matrimonial apps par caste endogamy aur WhatsApp political mobilisation]] ab prime sociological topics hain.
- **Urbanisation, Migration & Climate:** Smart-city gentrification, circular labour migration, environmental justice aur displacement ([[link:Paper 2 Unit 15: Crisis of development & displacement]]).
- **Subaltern, Dalit & Feminist Turns:** [[thinker:B.R. Ambedkar]] ke caste-annihilation lens aur [[thinker:Sharmila Rege]] ke Dalit-feminist standpoint ne Indian sociology ke savarna village bias ko toda.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Encyclopaedic Era', text: 'Comte ne Sociology ko Queen of Sciences kaha' },
      { label: 'Boundary Debate', text: 'Formal (Simmel) vs Synthetic (Durkheim) school clash' },
      { label: 'Middle Consensus', text: 'Inkeles & Merton: structured focus + empirical theory' },
      { label: 'Hybrid Bridges', text: 'Political, Economic & Historical Sociology ubhri' },
      { label: 'Global-Digital Lens', text: 'AI, gig work, climate & intersectionality tak vistaar' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Formalistic School (Simmel, Weber)',
    rightTitle: 'Synthetic School (Durkheim, Sorokin)',
    rows: [
      { aspect: 'View of Sociology', left: 'Specialised pure science with fixed niche', right: 'General science synthesising social life' },
      { aspect: 'Subject Matter', left: 'Forms of interaction (conflict, hierarchy)', right: 'Interconnections of all social institutions' },
      { aspect: 'Nature of Scope', left: 'Narrow, clearly delimited boundaries', right: 'Wide, holistic and inclusive' },
      { aspect: 'Core Logic', left: 'Form stays similar across diverse contents', right: 'Society works as an integrated whole' },
      { aspect: 'Major Critique', left: 'Form cannot exist cleanly without content', right: 'Risks becoming vague "jack of all trades"' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Sociology (Classical View)',
    rightTitle: 'Social Anthropology (Classical View)',
    rows: [
      { aspect: 'Traditional Focus', left: 'Large, modern, industrial Western societies', right: 'Small, pre-literate, non-Western & tribal societies' },
      { aspect: 'Primary Methods', left: 'Surveys, questionnaires, statistics, secondary data', right: 'Participant observation, thick ethnography' },
      { aspect: 'Insider vs Outsider', left: 'Studies researcher’s own complex society', right: 'Historically studied "other" exotic cultures' },
      { aspect: 'Conceptual Tilt', left: 'Class, bureaucracy, stratification, change', right: 'Culture, kinship, myth, ritual, reciprocity' },
      { aspect: 'Contemporary Reality', left: 'Uses ethnography in tech offices & urban slums', right: 'Studies modern nations, cities & globalisation' },
      { aspect: 'Indian Synthesis', left: 'Srinivas, Dube, Béteille blurred the line completely', right: 'Indian village studies merged both methods & theories' },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Idiographic vs Nomothetic',
    meaning: 'History idiographic hai (unique past events aur specific dates ka vivaran), jabki Sociology nomothetic hai (general patterns, rules aur comparative trends ki khoj).',
  },
  {
    kind: 'keyTerm',
    term: 'Embeddedness',
    meaning: 'Mark Granovetter aur Karl Polanyi ka idea ki economic transactions vacuum mein nahi hoti — woh social trust, caste-kin networks aur norms ke andar dhashi hoti hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Sociological Perspective',
    meaning: 'Individual behaviour ya economic-political events ko alag dekhne ke bajaye unhe broader social structures, norms aur power relations ke context mein padhna.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'emile-durkheim',
    quote: 'The determining cause of a social fact should be sought among the social facts preceding it.',
    context: 'Sociology ko psychological reductionism se alag independent domain dene ka golden rule.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'mn-srinivas',
    quote: 'Participant observation lets the sociologist look beyond book-view scriptures to the real field-view of Indian society.',
    context: 'India mein Sociology aur Social Anthropology ke milan ki sabse badi den.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Inter-disciplinary Questions mein Winning Formula',
    body: 'History, Pol Sci, Economics ya Psychology comparison mein kabhi sirf "differences table" mat chhodo. Hamesha 3 layers likho: (1) Classical distinction, (2) Methodological overlap / bridge sub-field (e.g. Historical Sociology, Granovetter’s Embeddedness), aur (3) Ek Indian illustration (e.g. Rajni Kothari ka Caste in Politics).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Anthropology ko sirf "Tribal Study" mat kehna',
    body: '2024 (#4) aur 2013 (#25) mein kai aspirants likh dete hain ki Anthropology sirf primitive tribes padhti hai. Yeh colonial stereotype tha — aaj Social Anthropology urban malls, corporate culture aur global migration padhti hai, aur India mein toh Srinivas ne dono ko ek kar diya hai.',
  },
  {
    kind: 'answerBox',
    intro: 'Sociology ka scope static boundary nahi balki ek dynamic relational perspective hai jo social institutions ke beech ke interactions ko samajhta hai.',
    points: [
      'Debate base: Formalistic school (Simmel, Weber) ne pure forms chune, jabki Synthetic school (Durkheim, Ginsberg) ne holistic integration maanga.',
      'Unique niche: Doosre social sciences ek institutional slice (market, state, psyche) padhte hain; sociology unka intersection aur social context padhti hai.',
      'Dynamic convergence: E.H. Carr (History), Kroeber/Srinivas (Anthropology), Kothari (Pol Sci), Granovetter (Economics) aur Mead (Psychology) ne disciplinary walls todi hain.',
      'Globalisation & India: Digital gig work, migration, gender aur climate crises ne Indian sociology ko multidisciplinary banaya hai.',
    ],
    conclusion: 'Antatah sociology ka scope "kya padhte hain" se zyada "kaise dekhte hain" — yaani structural aur comparative nazariye — se define hota hai.',
  },
]

const pyqAnswers: PyqAnswerItem[] = [
  {
    year: 2025,
    paper: 'P1',
    marks: 20,
    question: 'What is the relationship (similarities and differences) between sociology and history in terms of their area of study and methodology? Discuss.',
    theme: 'Sociology vs History: Area, Method & Historical Sociology',
    intro: 'G.E. Howard kehte hain "History is past sociology, and sociology is present history" — dono insaani samaj aur badlaav ko padhti hain, par focus aur methodology mein farq rakhti hain.',
    points: [
      'Area of Study (Differences): History unique events, personalities aur chronological timelines padhti hai; Sociology recurrent patterns, structures aur contemporary social institutions padhti hai.',
      'Methodological Divide (Idiographic vs Nomothetic): History archival texts, inscriptions aur narrative causality use karti hai; Sociology surveys, ethnography aur comparative generalisation use karti hai.',
      'Deep Similarities: Dono context-bound hain; samaj ke institutions (caste, state, family) ko bina historical roots ke samjha nahi ja sakta (C.W. Mills: biography + history).',
      'Convergence — Historical Sociology: Marx (Historical Materialism), Weber (Protestant Ethic), Charles Tilly aur Theda Skocpol ne archival history aur sociological theory ko joda.',
      'Indian Synthesis: Ranajit Guha ki Subaltern Studies, A.R. Desai ("Social Background of Indian Nationalism") aur Romila Thapar ne dikhaya ki E.H. Carr sahi the: dono ek doosre ke bina adhoore hain.',
    ],
    thinkers: 'G.E. Howard, E.H. Carr, Max Weber, Karl Marx, Charles Tilly, A.R. Desai, C. Wright Mills',
    example: 'India mein caste aur agrarian relations ko samajhne ke liye colonial land-revenue archives (History) aur field ethnography (Sociology) dono saath use hote hain.',
    conclusion: 'History sociology ko empirical depth aur temporal roots deti hai, jabki sociology history ko analytical concepts aur comparative framework deti hai.',
  },
  {
    year: 2025,
    paper: 'P1',
    marks: 10,
    question: 'In what way is the scope of sociology unique? Explain.',
    theme: 'Distinctiveness of Sociological Lens & Scope',
    intro: 'Baaki social sciences samaj ke specific subsystems (market, state, psyche) ko padhti hain, jabki sociology ka scope isliye unique hai kyunki woh in sabke beech ke social relations aur hidden context ko central maanti hai.',
    points: [
      'Holistic & Relational Synthesis: Durkheim aur Ginsberg ke mutabik sociology partial slices ke bajaye poore samajik taane-baane ke mutual interdependence ko padhti hai.',
      'Debunking & Structural Gaze: Peter Berger aur C.W. Mills dikhate hain ki yeh "obvious" lagne wale personal matters (metro delay, unemployment) ko public structures se jodti hai.',
      'Both Macro & Micro Reach: Ek taraf Marx-Weber ke macro systems (capitalism, bureaucracy), doosri taraf Simmel-Goffman ke micro face-to-face interactions ko cover karti hai.',
      'Self-Reflexive Discipline: Anthony Giddens ke double hermeneutic ke tahat yeh sirf samaj ko observe nahi karti, khud samaj ki vocabulary aur awareness ko bhi shape karti hai.',
    ],
    thinkers: 'Émile Durkheim, Morris Ginsberg, Peter Berger, C. Wright Mills, Anthony Giddens, Robert Bierstedt',
    example: 'Ek shaadi Economics ke liye kharch hai, Law ke liye contract — sirf Sociology use caste endogamy, dowry power, kinship aur gender roles ke saath padhti hai.',
    conclusion: 'Sociology ki uniqueness kisi monopolised subject-matter mein nahi, balki uske integrative, critical aur comparative perspective mein hai.',
  },
  {
    year: 2024,
    paper: 'P1',
    marks: 20,
    question: 'Discuss the nature of Sociology. Highlight its relationship with Social Anthropology.',
    theme: 'Scientific Nature (Bierstedt) + Twin Sisters Debate',
    intro: 'Robert Bierstedt sociology ke nature ko ek pure, empirical, categorical aur generalizing social science batate hain — aur iska sabse nazdeeki rishta apni "twin sister" Social Anthropology (Hoebel) ke saath hai.',
    points: [
      'Nature of Sociology (Bierstedt): Yeh natural nahi social science hai; normative ("kya hona chahiye") nahi categorical ("kya hai") hai; pure + applied dono dimensions rakhti hai; abstract patterns aur generalisations khojti hai.',
      'Scientific yet Humanistic Debate: Positivists (Comte, Durkheim) ise natural-science model par dekhte hain, jabki Weber (Verstehen) aur Schutz ise interpretive humanistic science maante hain.',
      'Classical Differences with Social Anthropology: Colonial division mein Anthropology ne small, pre-literate tribes ko participant observation se padha; Sociology ne industrial urban societies ko surveys/statistics se.',
      'Modern Convergence: A.L. Kroeber kehte hain dono "same coin ke do sides" hain; aaj anthropologists corporations aur digital tribes padhte hain, aur sociologists ethnography use karte hain.',
      'Indian Merger: Bharat mein colonial divide bekaar saabit hua — M.N. Srinivas ("Remembered Village"), S.C. Dube aur André Béteille ne anthropological fieldwork se Indian sociological theory banayi.',
    ],
    thinkers: 'Robert Bierstedt, Émile Durkheim, Max Weber, E.A. Hoebel, A.L. Kroeber, M.N. Srinivas, André Béteille',
    example: 'Srinivas ka Sanskritisation concept ek South Indian Coorg/Rampura village ethnography (anthropological method) se nikla par macro social mobility theory (sociology) bana.',
    conclusion: 'Sociology ka nature empirical rigor aur interpretive depth ka sangam hai, aur India mein Social Anthropology se uski closeness ne isko sabse rich field insights diye hain.',
  },
  {
    year: 2023,
    paper: 'P1',
    marks: 10,
    question: 'Discuss the relationship between sociology and political science.',
    theme: 'State & Formal Power vs Social Roots of Power',
    intro: 'Political Science state, constitution aur formal government par kendrit hai, jabki Sociology power ke social roots — caste, class, ideology aur civil society — ko explore karti hai.',
    points: [
      'Distinct Focus: Political Science normative ideals aur legal institutions padhti hai; Sociology dekhti hai ki actual power distribution family, economy aur status groups se kaise banti hai.',
      'Sociological Critique of State: Marx ne state ko ruling class ka executive committee kaha; Weber ne legitimacy aur bureaucracy samjhaya; Pareto-Mosca ne governing elites dikhaye.',
      'Political Sociology Bridge: Seymour Lipset aur Giovanni Sartori ke mutabik Political Sociology state ko society ke andar rakh kar voting behaviour, pressure groups aur social movements padhti hai.',
      'Indian Reality: Rajni Kothari ("Caste in Indian Politics"), Christophe Jaffrelot aur Yogendra Yadav ne dikhaya ki Bharat mein elections aur policy ko bina caste-religion dynamics ke nahi samjha ja sakta.',
    ],
    thinkers: 'Karl Marx, Max Weber, Vilfredo Pareto, Seymour Lipset, Rajni Kothari',
    example: 'Panchayati Raj 73rd Amendment ek constitutional reform (Pol Sci) hai, par "Sarpanch-Pati" aur dominant caste control ko sirf Sociology samjha sakti hai.',
    conclusion: 'Jaise Weber ne kaha state ko samaj se kaat kar nahi dekha ja sakta — Political Science aur Sociology milkar hi democratic power ko poora decode karti hain.',
  },
  {
    year: 2022,
    paper: 'P1',
    marks: 10,
    question: 'Delimit the scope of Sociology in relation to other social sciences.',
    theme: 'Formalistic vs Synthetic Delimitation + Contemporary Boundaries',
    intro: 'Sociology ke scope ko delimit karne ka sawaal is baat se shuru hua ki agar har social aspect koi alag discipline padhti hai, toh sociology ka apna kshetra kya hai?',
    points: [
      'Formalistic Delimitation (Simmel, Weber, Vierkandt): Sociology ko sirf forms of social interaction (cooperation, competition, domination) tak seemit rakho; content economics ya politics ko do.',
      'Synthetic Counter-View (Durkheim, Hobhouse, Sorokin): Form aur content inseparable hain; sociology ko general science of society ban kar doosre disciplines ke findings ko synthesise karna chahiye.',
      'Ginsberg & Inkeles Synthesis: Scope mein social morphology, social control, social processes aur social pathology aate hain — par focus hamesha institutional relationships par rahe.',
      'Relational Boundary with Siblings: Economics rational choice, Pol Sci state aur Psychology psyche dekhti hai; Sociology un sabke beech ke social norms, inequality aur context ko padhti hai.',
    ],
    thinkers: 'Georg Simmel, Max Weber, Émile Durkheim, Pitirim Sorokin, Morris Ginsberg, Alex Inkeles',
    example: 'Merton ki Middle-Range Theories (e.g. reference group, anomie) ne dikhaya ki sociology bina encyclopaedic bane apna crisp empirical boundary rakh sakti hai.',
    conclusion: 'Sociology ka scope rigid walls khinchne mein nahi, balki "social interaction aur institutional structure" ko apna anchor bana kar multidisciplinary dialogue karne mein hai.',
  },
  {
    year: 2021,
    paper: 'P1',
    marks: 10,
    question: 'From the viewpoint of growing importance of multidisciplinary, how do you relate sociology to other social sciences?',
    theme: 'Interdisciplinarity & Sociology as Integrator',
    intro: '21st century ke complex challenges — climate change, AI gig work, pandemics, urban inequality — kisi ek subject ki boundary mein fit nahi hote, jisse multidisciplinary approach mein sociology central hub ban gayi hai.',
    points: [
      'Economics → Economic Sociology: Behavioural aur institutional economics ab Granovetter aur Polanyi ke social embeddedness aur trust networks par rely karti hain.',
      'Political Science → Governance & Movements: Policy design ab sociological inputs (gender budgeting, caste census, tribal autonomy) ke bina adhoori maani jaati hai.',
      'History & Geography → Spatial & Historical Turn: Urban planning, migration aur Subaltern History mein sociological stratification aur spatial justice lenses use hote hain.',
      'Public Health & Psychology → Social Determinants: COVID-19 ne dikhaya ki vaccine hesitancy, mental health aur lockdown impact sirf medical/psychological nahi, deeply sociological the.',
    ],
    thinkers: 'Mark Granovetter, Karl Polanyi, Immanuel Wallerstein, Amartya Sen, C. Wright Mills',
    example: 'India ki MGNREGA ya Beti Bachao policy sirf economic ya legal design se nahi chalti — uske outcomes caste patriarchy aur local power structures tay karte hain.',
    conclusion: 'Multidisciplinary era ne sociology ki boundaries kamzor nahi ki, balki use sabhi social sciences ko jodne wala connective tissue bana diya hai.',
  },
  {
    year: 2020,
    paper: 'P1',
    marks: 10,
    question: 'In the Context of globalization, has the scope of Sociology been changing in India? Comment.',
    theme: 'Post-1991 Globalisation & New Frontiers of Indian Sociology',
    intro: 'Haan — post-1991 LPG reforms aur digital globalisation ne Indian sociology ko sirf "caste, village aur joint family" ke traditional frame se nikaal kar global-local (glocal) phenomena tak vistar diya hai.',
    points: [
      'From Village-Centric to Global-Urban: IT corridors, SEZs, gated communities, slums aur rural-to-urban circular migration ab central research fields hain (Satish Deshpande).',
      'New Economy & Precariat Labour: Call centres, BPO shift-work, aur Swiggy-Zomato gig workers par alienation, flexible capitalism aur gender studies badhi hain.',
      'Transnational Diaspora & Culture: NRIs, remittances, global media aur Arjun Appadurai ke ethnoscapes/mediascapes ne Indian family aur nationalism ki definitions badli hain.',
      'Reassertion of Old Identities Online: Globalisation ne caste-religion khatam nahi kiye; matrimonial apps, NRI caste associations aur social media par identities hybrid roop mein ubhri hain (Yogendra Singh).',
    ],
    thinkers: 'Yogendra Singh, Arjun Appadurai, Satish Deshpande, Manuel Castells, Anthony Giddens',
    example: 'Bengaluru ke tech parks mein kaam karne wale youth ek taraf global AI economy ka hissa hain, aur doosri taraf weekend par digital caste/regional networks se jude rehte hain.',
    conclusion: 'Globalisation ne Indian sociology ko zyada cosmopolitan, digital aur policy-oriented banaya hai, bina iske traditional social inequalities ko bhulaye.',
  },
  {
    year: 2017,
    paper: 'P1',
    marks: 20,
    question: 'Discuss the changing equations of discipline of sociology with other social sciences.',
    theme: 'Historical Evolution of Disciplinary Boundaries (Separation → Convergence)',
    intro: '19th century mein jab sociology apni alag pehchan bana rahi thi, tab equations rivalry aur strict demarcation ke the; aaj 21st century mein wahi equations convergence aur hybridity mein badal chuki hain.',
    points: [
      'Phase 1 — Imperial Ambition vs Turf Wars: Comte ne sociology ko "Queen of Sciences" kaha, jiske jawab mein economists aur historians ne ise armchair generalisation keh kar reject kiya.',
      'Phase 2 — Strict Separation: Durkheim ne psychology se alag hone ke liye social facts banaya; Simmel ne formal boundaries khinchi; Anthropology ne tribes aur Sociology ne industrial West baant liya.',
      'Phase 3 — Hybrid Sub-Disciplines: Mid-20th century ke baad Economic Sociology (Smelser, Granovetter), Political Sociology (Lipset), Historical Sociology (Tilly) aur Social Psychology (Mead) ne borders melt kiye.',
      'Phase 4 — Post-Disciplinary & Global Turn: Wallerstein ("Open the Social Sciences") aur Bourdieu ne dikhaya ki discipline divides 19th-century Europe ki artificial creations the.',
      'Indian Trajectory: Bharat mein toh shuru se hi Radhakamal Mukerjee (institutional economics + ecology) aur M.N. Srinivas (anthropology + sociology) ne fluid multidisciplinary equation rakhi.',
    ],
    thinkers: 'Auguste Comte, Émile Durkheim, Georg Simmel, Immanuel Wallerstein, Radhakamal Mukerjee, M.N. Srinivas',
    example: 'Behavioural economics aur platform studies aaj Nobel-level economic policy mein sociological norms, gender care-work aur network effects ko seedha integrate kar rahi hain.',
    conclusion: 'Sociology ka doosre social sciences ke saath rishta "isolation se interdependence" aur "turf protection se collaborative problem-solving" ki taraf badla hai.',
  },
  {
    year: 2014,
    paper: 'P1',
    marks: 10,
    question: 'Write short answer of the following in about 150 words: How is sociological approach to human actions different from that of psychological approach?',
    theme: 'Social Structure & Norms vs Individual Mind & Personality',
    intro: 'Psychology aur Sociology dono human behaviour samajhna chahti hain, par Psychology focus karti hai individual mind par aur Sociology focus karti hai social context, roles aur collective norms par.',
    points: [
      'Unit of Analysis: Psychology personality traits, IQ, emotions aur unconscious drives dekhti hai; Sociology social groups, roles, institutions aur stratification ko primary maanti hai.',
      'Explanatory Direction: Psychology behaviour ko andar se bahar (intra-psychic) samjhati hai; Sociology bahar se andar — Durkheim ke social facts aur Mead ke generalized other ke zariye.',
      'Durkheim’s Suicide Proof: Sabse personal lagne wala act (suicide) bhi social integration aur regulation se govern hota hai — jo pure psychological reductionism ko challenge karta hai.',
      'Complementary Bridge: Social Psychology (Cooley, G.H. Mead, Erving Goffman) dikhati hai ki self aur mind khud social interaction ke zariye hi bante hain.',
    ],
    thinkers: 'Émile Durkheim, G.H. Mead, Charles Horton Cooley, Erving Goffman, Sigmund Freud',
    example: 'Old Rajinder Nagar mein UPSC aspirant ka burnout sirf individual stress disorder nahi, balki job scarcity, parental expectations aur coaching culture ka sociological product hai.',
    conclusion: 'Psychology actor ke mental software ko padhti hai, jabki Sociology us collective social hardware ko dikhati hai jis par woh software chalta hai.',
  },
  {
    year: 2013,
    paper: 'P1',
    marks: 20,
    question: 'Compare and contrast Sociology with Anthropology.',
    theme: 'Colonial Origins, Methods, Convergence & Indian Synthesis',
    intro: 'A.L. Kroeber ne Sociology aur Anthropology ko "two sides of the same coin" kaha, jabki Hoebel ne "twin sisters" — dono manav samaj aur culture padhti hain, par historically alag routes se aayin.',
    points: [
      'Historical Origin & Subject Divide: Colonial daur mein Social Anthropology ne distant, pre-literate, tribal/small-scale societies padhin; Sociology ne European industrial modernity padhi.',
      'Methodological Differences: Anthropology mein long-term participant observation aur qualitative ethnography central rahi (Malinowski); Sociology mein large surveys, census aur comparative macro-history (Durkheim, Weber).',
      'Scope Breadth: Physical, linguistic aur archaeological branches milakar Anthropology bio-cultural hai; Sociology social institutions, class aur social change par focused hai.',
      'Post-Colonial Convergence: Decolonisation aur urbanisation ke baad tribes global system se jud gayin; ab anthropologists corporate firms aur online gaming communities padhte hain, aur sociologists ethnographic fieldwork karte hain.',
      'Indian Specificity: M.N. Srinivas, S.C. Dube, André Béteille aur Virginius Xaxa ke kaam mein India mein dono disciplines lagbhag merge ho chuki hain.',
    ],
    thinkers: 'A.L. Kroeber, E.A. Hoebel, Bronisław Malinowski, Radcliffe-Brown, M.N. Srinivas, André Béteille',
    example: 'Lévi-Strauss ne kinship rules par focus kiya (Anthropology), jabki M.N. Srinivas ne Rampura gaon mein wohi ethnographic lens lagakar caste mobility aur politics samjhaya (Sociology).',
    conclusion: 'Sociology aur Anthropology ab rival disciplines nahi, balki micro-cultural depth aur macro-structural analysis ko jodne wali twin traditions hain.',
  },
]

export const topic2Scope: TopicNotebookSpec = {
  topicSlug: 'scope-and-other-social-sciences',
  summary: 'Sociology ka scope Formalistic aur Synthetic schools ke beech evolve hokar ek holistic, relational lens bana hai jo History, Anthropology, Political Science, Economics aur Psychology se judta hai.',
  thinkerSlugs: ['max-weber', 'emile-durkheim', 'karl-marx', 'mn-srinivas', 'yogendra-singh'],
  relatedTopicSlugs: [
    'modernity-and-emergence-of-sociology',
    'sociology-and-common-sense',
    'science-and-scientific-method',
    'indology-gs-ghurye',
    'structural-functionalism-mn-srinivas',
  ],
  mindMap,
  sections,
  pyqAnswers,
}
