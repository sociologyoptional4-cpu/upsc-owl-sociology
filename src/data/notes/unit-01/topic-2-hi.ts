import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Sociology ka scope Formalistic aur Synthetic schools ke takraav se nikalkar ek holistic, relational lens bana hai jo History, Anthropology, Political Science, Economics aur Psychology ko jodta hai—aur aaj Bharat ke digital, urban aur global badlaavon tak faila hai.'

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
        'Formalistic: sirf pure forms of interaction padho (Simmel, Vierkandt)',
        'Synthetic: sabhi social institutions ko jodne wala general science (Durkheim)',
        'Critique: form aur content alag nahi ho sakte; encyclopaedic scope vague hai',
        'Modern consensus: Alex Inkeles (institutions, processes, methods) + Merton',
      ],
    },
    {
      title: 'History & Anthropology',
      color: 'yellow',
      thinkers: ['G.E. Howard', 'E.H. Carr', 'A.L. Kroeber', 'M.N. Srinivas'],
      points: [
        'History: idiographic past events; Sociology: nomothetic structural patterns',
        'Bridge: Historical Sociology (Weber Protestant Ethic, Subaltern Studies)',
        'Anthropology: small/tribal fieldwork; Sociology: industrial/modern surveys',
        'India ne dono ko milaya: Srinivas, Dube & Béteille ke village studies',
      ],
    },
    {
      title: 'Pol Sci, Economics & Psychology',
      color: 'mint',
      thinkers: ['Karl Marx', 'Mark Granovetter', 'G.H. Mead', 'Rajni Kothari'],
      points: [
        'Pol Sci: state & law vs Sociology: caste, class & elite power (Kothari)',
        'Economics: rational homo economicus vs Sociology: embedded markets',
        'Psychology: individual mind vs Sociology: social facts & collective norms',
        'Bridges: Political Sociology, Economic Sociology, Symbolic Interactionism',
      ],
    },
    {
      title: 'Globalisation & Indian Frontiers',
      color: 'pink',
      thinkers: ['Anthony Giddens', 'Arjun Appadurai', 'B.R. Ambedkar', 'Yogendra Singh'],
      points: [
        'Post-1991 shift: gaon-jaati se aage badhkar digital & urban frontiers',
        'Naye topics: gig labour algorithms, shaadi apps, gated cities, climate displacement',
        'Subaltern & Dalit-feminist turn ne savarna village bias ko toda (Ambedkar, Rege)',
        'Asli baat: Sociology ki pehchan uske relational nazariye mein hai',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u1-03-social-sciences.webp',
    alt: 'Comparison chart of Sociology versus Common Sense, History, and Psychology highlighting social context using unemployment example',
    caption:
      'Har sibling social science ek khaas angle dekhti hai; Sociology un sabke peeche chhupe social context, norms aur relationships ko aapas mein jodti hai.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 1 Visual 03',
  },
  {
    kind: 'md',
    body: `## "Scope" ka Matlab Kya Hai aur Sociology Unique Kyun Hai?

Simple shabdon mein samjho: kisi bhi subject ka **scope** do baatein tay karta hai—woh subject *kya-kya padhta hai* (uski boundaries), aur woh duniya ko *kis nazariye se dekhta hai*. Zyadatar social sciences samaj ke ek alag tukde ko apna ghar bana leti hain—jaise Economics market dekhti hai, Political Science state aur kanoon dekhti hai, aur Psychology akela insaani mann dekhti hai.

Sociology kisi ek institution ke dabbe mein band hone se inkaar karti hai. Iska scope ==uniquely relational aur holistic== hai kyunki aam insaan kabhi apni economy, politics, dharm aur parivaar ko alag-alag kamron mein nahi jeeta—woh sabko ek saath ek samajik jaal mein jeeta hai. [[thinker:Robert Bierstedt]] ke mutabik Sociology ek *social* (not natural), *categorical* ("kya hai", na ki "kya hona chahiye"), *pure + applied*, *abstract* aur *generalising* science hai. [[eg:Jaise Bharat mein youth unemployment ko Economics sirf GDP aur wage rates se dekhti hai, Psychology exam stress se, aur Pol Science welfare schemes se—par Sociology labour market, caste-class networks, parivaar ki umeedon aur coaching culture ko ek saath jod kar samajhti hai.]]

## Scope par Badi Bahas: Formalistic vs Synthetic Schools

19th century mein jab Sociology nayi-nayi bani, tab thinkers mein is baat par badi bahas chhidi ki iska dayra kitna chhota ya bada hona chahiye. Agar trade Economics padh rahi hai aur state Political Science, toh Sociology ke paas apna alag kya bachega?

### 1. Formalistic (Specialistic) School: Forms Padho, Content Nahi

Simple shabdon mein samjho: [[thinker:Georg Simmel]], [[thinker:Max Weber]], [[thinker:Alfred Vierkandt]], [[thinker:Leopold von Wiese]] aur [[thinker:Ferdinand Tonnies]] ko darr tha ki agar Sociology sab kuch padhne lagi, toh woh ek vague "sabka khichdi subject" ban jaayegi. Isliye unhone kaha ki Sociology ko sirf ==pure forms of social interaction==—jaise competition, cooperation, conflict, domination aur imitation—par focus karna chahiye, jabki concrete *content* (vyapar, yuddh, dharm, kanoon) baaki sciences ke paas chhod dena chahiye.

Ise ek rozmarra ke example se samjho: ek cup ka *shape* (form) wahi rehta hai chahe usmein chai bharo, paani bharo ya dawai (content). Bilkul waise hi **competition** naam ka social form ek hi tarah ke rules follow karta hai chahe maidan Delhi ki UPSC coaching class ho, IPL ka player auction ho, ya arranged-marriage ka shaadi portal! [[trap:Pitirim Sorokin ka sabse tez critique: bartan aur paani ki tarah samaj mein form aur content alag nahi kiye ja sakte—ek mandir committee ka competition, capitalist market ka competition aur parliament ka competition apne cultural aur economic content ke saath badal jaata hai.]]

### 2. Synthetic School: Samaj Ek Jeevita Jaal Hai

Simple shabdon mein samjho: [[thinker:Emile Durkheim]], [[thinker:L.T. Hobhouse]], [[thinker:Morris Ginsberg]] aur [[thinker:Pitirim Sorokin]] ne kaha ki insaani zindagi ko tukdon mein kaat kar samajhna namumkin hai. Ek Indian kisan jab karz leta hai, tab uska faisla ek hi waqt par jaati ke bharose, baarish ke darr, beti ki shaadi ke rivaaj aur sarkar ki MSP policy se judta hai—aap sirf "economic motive" ko alag nikaaloge toh poora sach bigad jaayega.

Isliye Sociology ko ek ==generalising aur synthesising science== banna chahiye jo sabhi institutions ke aapsi rishte ko map kare:
- **Durkheim ke Teen Pillars:** *Social Morphology* (population size, density aur spatial form), *Social Physiology* (religion, law, morals aur economy ke functions), aur *General Sociology* (universal social laws ki khoj).
- **Ginsberg ke Chaar Hissay:** Social morphology, social control, social processes aur social pathology (crime, garibi, disorganisation).
- **Critique aur Middle-Way Consensus:** Critics ne warning di ki sab kuch sametne ke chakkar mein Sociology "jack of all trades" na ban jaaye. Aaj [[thinker:Alex Inkeles]] aur [[thinker:T.B. Bottomore]] ka balanced rasta chalta hai—Sociology ka anchor **social institutions, social processes aur research methods** par hai, jise [[thinker:Robert K. Merton]] ki *Middle-Range Theories* aur [[thinker:C. Wright Mills]] ki *Sociological Imagination* tez rakhti hain.

## Sociology aur Baaki Social Sciences: Ek Hi Ghatna, Alag Nazariye

Neeche table dekhne se pehle yeh samjho ki agar saamne ek hi Indian ghatna ho—jaise kisan aandolan, chunaav (elections) ya youth berozgaari—toh har sibling discipline use alag angle se kaise dekhti hai aur phir Sociology ke saath kaise judti hai.

### History: Anokhe Beete Waqt ki Kahani vs Samaj ke Patterns

Simple shabdon mein samjho: History poochti hai *beete kal mein kis din, kis leader ne kya kiya?* Purane archives, diaries aur shilalekhon ke sahare History unique ghatnaon ko chronology mein likhti hai (*idiographic* method)—jaise 1928 ke Bardoli Satyagraha ya 2020–21 ke farm laws ka poora record. Sociology unhi aandolanon ko dekh kar *nomothetic* sawaal poochti hai: sadiyon aur alag-alag states mein kisan ekjut kaise hote hain, kaunsi jaati-class lead karti hai aur state kaise react karta hai? [[thinker:G.E. Howard]] ne kaha history past sociology hai aur sociology present history, aur [[thinker:E.H. Carr]] ke mutabik dono ek doosre ke bina adhoori hain—jiska saboot [[thinker:Max Weber]] ki *Protestant Ethic*, Charles Tilly aur Ranajit Guha ki *Subaltern Studies* hain.

### Social Anthropology: Colonial Twin Sisters ka Milan

Simple shabdon mein samjho: colonial daur mein dono "twin sisters" ([[thinker:E.A. Hoebel]]) ke beech ek artificial batwara hua—Social Anthropology ne door-daraaz ke chhote, pre-literate tribal samajon ko lambi participant observation se padha, aur Sociology ne industrial Western shehron ko surveys aur statistics se. Bastar ke kisi tribal forest protest mein classic anthropology clan rituals aur sacred groves dekhti thi, jabki sociology mining policy aur class displacement dekhti thi. Aaj yeh deewar gir chuki hai—[[thinker:A.L. Kroeber]] ne dono ko ek hi sikke ke do pehlu kaha, aaj anthropologists IT companies aur urban malls padhte hain, aur Bharat mein [[thinker:M.N. Srinivas]], S.C. Dube aur André Béteille ne village studies ke zariye dono ko poori tarah ek kar diya.

### Political Science: State aur Kanoon vs Power ki Samajik Jadein

Simple shabdon mein samjho: Political Science samvidhan, sansad, Election Commission aur sarkar ke formal rules par focus karti hai—chunaav mein seat-sharing aur party manifesto dekhti hai. Sociology ballot box ke peeche chhupi ==informal social roots of power== ko kholti hai: voters kis tarah jaati, dharm, ilaake ya local patronage ke hisaab se vote dete hain. [[thinker:Karl Marx]], [[thinker:Max Weber]], [[thinker:Vilfredo Pareto]] aur Rajni Kothari (*Caste in Indian Politics*) ki Political Sociology dikhati hai ki state hawa mein nahi, samaj ke andar kaam karta hai.

### Economics: Rational Hisaab-Kitaab vs Samaj mein Dhashi Markets

Simple shabdon mein samjho: traditional Economics maanti hai ki insaan ek rational calculator (*homo economicus*) hai jo hamesha price aur munafe se faisla leta hai—berozgaari ko woh GDP aur skill gap se naapti hai, aur gaon ke karz ko byaaj dar se. Lekin [[thinker:Max Weber]], Karl Polanyi aur Mark Granovetter ki ==embeddedness== theory batati hai ki asli market kabhi samaj se kat kar nahi chalti: karz, naukri aur vyapar jaati bhaichare, parivaarik bharose aur gender norms ke andar dhashe hote hain.

### Psychology: Akela Insaani Mann vs Collective Samajik Maahaul

Simple shabdon mein samjho: Psychology insaan ke behaviour ko andar se bahar samajhti hai—uski personality, IQ, trauma, gusse aur individual soch ko measure karke. Agar Old Rajinder Nagar ya Kota mein koi student burnout ho raha hai, toh Psychology uska stress aur coping mechanism dekhegi; jabki Sociology dikhayegi ki naukri ki kami, degree inflation, maa-baap ka status pressure aur coaching market us stress ko paida karte hain. [[thinker:Emile Durkheim]] ne *Suicide* mein saabit kiya ki aatmahatya jaisa sabse personal faisla bhi social integration par tika hota hai, aur Mead-Cooley-Goffman ki Social Psychology dikhati hai ki hamara "self" hi samajik interaction se banta hai.

| Discipline | Core Focus | Typical Method | Shared Bridge / Sub-field |
| --- | --- | --- | --- |
| History | Unique past events & chronology | Archives, texts, historiography | Historical Sociology (Weber, Tilly, Subaltern) |
| Social Anthropology | Culture, kinship, small communities | Participant observation, ethnography | Indian Village Studies (Srinivas, Dube, Béteille) |
| Political Science | State, constitution, laws, sovereignty | Institutional & normative analysis | Political Sociology (Pareto, Lipset, Kothari) |
| Economics | Scarcity, rational choice, prices | Quantitative & deductive modelling | Economic Sociology (Weber, Polanyi, Granovetter) |
| Psychology | Individual mind, cognition, emotion | Lab experiments & clinical testing | Social Psychology (Mead, Cooley, Goffman) |

## Globalisation ke Daur mein Bharat mein Badalta Scope

Azaadi ke baad kai dashakon tak Indian sociology ke teen bade pillar the: gaon ka adhyayan, jaati vyavastha aur joint family. Lekin 1991 ke LPG reforms, tezi se badhte shehron aur saste mobile internet ke baad Bharat ka samaj global capital, migration aur digital platforms se gehra jud gaya—jisse Indian sociology ka scope bilkul naye multidisciplinary frontiers tak fail gaya:

- **Digital & Platform Labour:** [[eg:Swiggy-Zomato ke gig riders jo GPS algorithms ke neeche kaam karte hain, AI-driven call centres aur caste filters wale matrimonial apps]] ab gaon ke barabar primary research fields hain.
- **Urbanisation, Migration & Climate Crisis:** Smart-city gentrification, ek state se doosre state jaane wale circular mazdoor, urban slums aur climate displacement aaj bade topics hain ([[link:Paper 2 Unit 15: Crisis of development and displacement]]).
- **Transnational Diaspora & Culture:** [[thinker:Anthony Giddens]] aur Arjun Appadurai ke *ethnoscapes* aur *mediascapes* dikhate hain ki NRI remittances aur global media parivaaron ko kaise badal rahe hain—jise [[thinker:Yogendra Singh]] ne seedhe Westernisation ke bajaye *selective synthesis* kaha.
- **Subaltern, Dalit & Feminist Turns:** [[thinker:B.R. Ambedkar]] ke graded inequality lens aur Sharmila Rege ke Dalit-feminist standpoint ne purani savarna village sociology ke pakshpaat ko toda.`,
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
      { aspect: 'Subject Matter', left: 'Forms of interaction (competition, hierarchy)', right: 'Interconnections of all social institutions' },
      { aspect: 'Nature of Scope', left: 'Narrow, strictly delimited boundaries', right: 'Wide, holistic and inclusive' },
      { aspect: 'Core Logic', left: 'Same interaction form recurs across contents', right: 'Society works as an integrated whole' },
      { aspect: 'Major Critique', left: 'Form cannot exist cleanly without content', right: 'Risks becoming vague jack of all trades' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Sociology (Classical View)',
    rightTitle: 'Social Anthropology (Classical View)',
    rows: [
      { aspect: 'Traditional Focus', left: 'Large, modern, industrial Western societies', right: 'Small, pre-literate, non-Western & tribal groups' },
      { aspect: 'Primary Methods', left: 'Surveys, questionnaires, statistics, census', right: 'Participant observation, thick ethnography' },
      { aspect: 'Insider vs Outsider', left: 'Studies researcher’s own complex society', right: 'Historically studied other distant cultures' },
      { aspect: 'Conceptual Tilt', left: 'Class, bureaucracy, stratification, modernity', right: 'Culture, kinship, myth, ritual, reciprocity' },
      { aspect: 'Contemporary Reality', left: 'Uses ethnography in tech offices & urban slums', right: 'Studies modern nations, cities & globalisation' },
      { aspect: 'Indian Synthesis', left: 'Srinivas, Dube, Béteille dissolved the divide', right: 'Indian village studies merged both traditions' },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Idiographic vs Nomothetic',
    meaning: 'History idiographic hai (unique past events, dates aur specific actors ka vivaran), jabki Sociology nomothetic hai (general patterns, structures aur comparative trends ki khoj).',
  },
  {
    kind: 'keyTerm',
    term: 'Embeddedness',
    meaning: 'Karl Polanyi aur Mark Granovetter ka idea ki economic transactions vacuum mein nahi hotin — markets, credit aur hiring hamesha social trust, caste-kin networks aur norms mein dhashi hoti hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Sociological Perspective',
    meaning: 'Kisi individual ghatna ya economic-political issue ko alag dekhne ke bajaye use broader social structures, norms aur power relations ke context mein padhna.',
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
    title: 'Sibling-Discipline Questions mein Winning Formula',
    body: 'History, Pol Sci, Economics ya Psychology comparison mein kabhi sirf differences table mat chhodo. Hamesha 3 layers likho: (1) Classical distinction in focus & method, (2) Methodological convergence / bridge sub-field (jaise Historical Sociology, Granovetter’s Embeddedness), aur (3) Ek sharp Indian illustration (jaise Rajni Kothari ka Caste in Politics).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Anthropology ko sirf Tribal Study mat kehna',
    body: '2024 (#4) aur 2013 (#25) mein kai aspirants likh dete hain ki Anthropology sirf primitive tribes padhti hai. Yeh colonial batwara tha — aaj Social Anthropology urban malls, tech firms aur global migration padhti hai, aur India mein toh M.N. Srinivas ne dono ko ek kar diya hai.',
  },
  {
    kind: 'answerBox',
    intro: 'Sociology ka scope static deewar nahi balki ek dynamic relational perspective hai jo social institutions aur structures ke beech ke connections ko samajhta hai.',
    points: [
      'Debate base: Formalistic school (Simmel, Weber) ne pure interaction forms chune, jabki Synthetic school (Durkheim, Ginsberg) ne holistic integration maanga.',
      'Unique niche: Doosre social sciences ek institutional slice (market, state, psyche) padhte hain; sociology unka intersection aur social context padhti hai.',
      'Dynamic convergence: E.H. Carr (History), Srinivas (Anthropology), Kothari (Pol Sci), Granovetter (Economics) aur Mead (Psychology) ne disciplinary walls todi hain.',
      'Globalisation & India: Digital gig work, migration, climate displacement aur Dalit-feminist turns ne Indian sociology ko multidisciplinary banaya hai.',
    ],
    conclusion: 'Antatah sociology ka scope "kya padhte hain" se zyada "kaise dekhte hain" — yaani structural aur comparative nazariye — se define hota hai.',
  },
]

export const topic2Hi: TopicLangContent = {
  summary,
  mindMap,
  sections,
}
