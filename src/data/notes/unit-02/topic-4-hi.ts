import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Kya sociologist pakke facts ko apni personal values se alag rakh sakta hai? Positivists ne cold detachment maangi, Max Weber ne value-relevant topic chunnane aur value-neutral analysis ko alag kiya, aur reflexive-feminist critics ne jhoothi neutrality ki jagah transparency aur triangulation rakhi.'

const mindMap: MindMapData = {
  title: 'Unit 2.4 · Fact, Value and Objectivity',
  center: 'Fact, Value & Objectivity',
  subtitle: 'Bias Kahan Ghusta Hai • Weber ka Raasta • Reflexivity & Critical View',
  branches: [
    {
      title: 'Core Concepts aur Bias Points',
      color: 'lavender',
      thinkers: ['Robert Bierstedt', 'Derek Phillips', 'Émile Durkheim', 'B.R. Ambedkar'],
      points: [
        'Fact (saboot se pakki baat) vs Value (culture ki pasand-napasand)',
        'Objectivity: nateeje caste, gender, dharm ya politics se azaad hon',
        'Topic chunnane, funding, definitions, outlier hatane aur reading mein value ghusti hai',
        'Ek hi sach, alag nazariya: Marx vs Durkheim; Gandhi vs Ambedkar',
      ],
    },
    {
      title: 'Weber: Relevance vs Neutrality',
      color: 'yellow',
      thinkers: ['Max Weber', 'Heinrich Rickert', 'Robert K. Merton'],
      points: [
        'Poori value-freedom namumkin hai; value-neutrality researcher ka farz hai',
        'Value Relevance (Wertbeziehung) tay karti hai kaunsa topic study karein',
        'Value Neutrality (Wertfreiheit) data aur analysis mein pakshpaat rokti hai',
        'Ideal Types aur ulte data ka imandaar khulasa objectivity bachata hai',
      ],
    },
    {
      title: 'Reflexive & Critical Critics',
      color: 'mint',
      thinkers: ['Alvin Gouldner', 'Gunnar Myrdal', 'Howard Becker', 'Ann Oakley'],
      points: [
        'Gouldner (Anti-Minotaur): value-freedom myth hai; apni biases khul kar batao',
        'Myrdal & Gomm: jhoothi neutrality elite aur establishment ki soch chhupati hai',
        'Becker ("Whose Side?") & Lee Harvey: Dalit, mahila, kamzor ke paksh mein bolna chahiye',
        'New Right (Marsland): textbooks par anti-capitalist left bias ka aarop',
      ],
    },
    {
      title: 'Interpretive Research Mein Objectivity',
      color: 'pink',
      thinkers: ['Max Weber', 'Pierre Bourdieu', 'M.N. Srinivas', 'Norman Denzin'],
      points: [
        'Andhi detachment over-hyped hai, par rules chhodne se sirf propaganda bachega',
        'Reflexive field diary aur social location ka khulasa blind spots kam karta hai',
        'Member validation mein community se cross-check hota hai ki matlab sahi samjha',
        'Triangulation aur peer inter-subjectivity lambi daud mein sach saaf karti hai',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u02-02-objectivity-methods.webp',
    alt: 'Paper 1 Unit 2 poster illustrating Max Weber value relevance versus value neutrality alongside Durkheim Myrdal Gouldner Oakley objectivity debate',
    caption:
      'Naive detachment se aage badh kar Weber ne topic chunav aur analysis ko alag kiya, jabki Gouldner ki reflexivity aur Oakley ke standpoint ne chhupe bias ko samne laaya.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 2 Visual 02',
  },
  {
    kind: 'md',
    body: `## Fact, Value, Objectivity aur Value-Freedom ka Asli Farq

Aasaan shabdon mein samjho: roz TV debates mein dikhta hai ki ek hi GDP ya berozgari ke chart ko dekh kar do expert bilkul ulta bhashan dete hain. Sociology mein is uljhan ko samajhne ke liye chaar shabdon ka fark bilkul saaf hona chahiye:

- **Fact:** Aisi observation jo sabooton se check ki jaa sake aur har dekhne wale ke liye ek si rahe — jaise Census ki literacy dar ya NFHS ke kuposhan ke aankde.
- **Value:** Samaj aur parvarish se mili woh pasand ya maanyata jo batati hai kya achha, uchit ya zaroori hai. [[eg:Western samaj mein individualism ki value se love marriage aur personal attraction ko tarjeeh milti hai, jabki traditional Indian familism mein parivaar ki izzat aur arranged marriage ko upar rakha jaata hai.]]
- **Objectivity:** [[thinker:Robert Bierstedt]] ke mutabik objectivity ka matlab hai ki khoj ke nateeje researcher ki jaati, dharm, gender, rang ya rajneeti se bilkul prabhavit na hon.
- **Value-Freedom vs Value-Neutrality:** ==Value-freedom== ka matlab hai shuru se aakhir tak research mein kisi bhi value ka namo-nishaan na hona — jo ek namumkin sapna hai. ==Value-neutrality==, jise [[thinker:Max Weber]] ne samjhaya, woh ethical farz hai ki topic chunnane ke baad analysis mein hum apni personal pasand ko sach ke beech na aane dein.

## Paanch Jagah Jahan Values Chupke Se Research Mein Ghus Jaati Hain

Chemist test tube se bahar khada rehta hai, par sociologist khud usi samaj ka hissa hota hai jise woh padh raha hai — isliye uski parvarish, jaati aur gender saath chalte hain. [[thinker:Derek Phillips]] ke mutabik values research ke paanch kadamon par asar daalti hain:

- **1. Topic Selection:** Hum wahi mudde chunte hain jo humein zaroori lagte hain. 1960s ke feminist movement tak male sociologists ne sirf bahar ki tankhwah wali naukri ko "kaam" maana aur auraton ke ghar ke unpaid kaam par dhyaan hi nahi diya. Khud [[thinker:Max Weber]] ne bureaucracy isliye padhi kyunki unke pita bureaucrat the, aur Protestantism isliye kyunki unki maa pakki Protestant thin.
- **2. Funding aur Sponsors:** Sarkari mantralay ya badi companiyan jab paisa deti hain, toh sawal unhi muddon par bante hain jo unke hisaab se sahi hon.
- **3. Shabd aur Sawal Tai Karna:** Questionnaire mein kaunse sawal rakhne hain aur kaunse chhodne hain, yeh researcher ki theory aur soch tay karti hai.
- **4. Data Selection aur Outliers:** Kis interview ya record ko pakka maanna aur kise "exception" keh kar kinare karna, yeh values par tika hota hai.
- **5. Ek Hi Data ka Alag Matlab:** Aankde apne aap nahi bolte. [[eg:Karl Marx aur Émile Durkheim ne ek hi European division of labour ko dekh kar shoshan banaam solidarity nikala; Gandhi aur B.R. Ambedkar ne ek hi untouchability par bilkul ulte analysis diye; aur aaj Bharat mein ruling party aur opposition ek hi PLFS data se alag kahani sunaate hain.]] Khud Durkheim ne anomie ko "bimaari" bata kar guild sudhar ki salah di aur Marx ne communism ko aadarsh kaha!

## Objectivity Debate ke Chaar Bade Nazariye

Is sach ko maan kar ki researcher bhi aam insaan hai, sociology mein chaar alag-alag camps bane hain ki values se kaise nipta jaaye:

### 1. Positivists ka Value-Free Aadarsh

[[thinker:Auguste Comte]] aur [[thinker:Émile Durkheim]] ke mutabik sociology ko physical science ki tarah "social facts ko things" maan kar bilkul neutral rehna chahiye. Statistical tools, algorithms aur peer review lagane se researcher ka vyaktitva peeche chhoot jaata hai aur hard data khud bolta hai — jaise domestic violence ke 31% stats kisi bhi dharm ya gender ke researcher ke liye same rahenge.

### 2. Max Weber ka Middle Path: Value Relevance vs Value Neutrality

Poori value-freedom ko namumkin maan kar [[thinker:Max Weber]] ne ==Value Relevance (Wertbeziehung)== aur ==Value Neutrality (Wertfreiheit)== ko alag kiya. Topic chunte waqt values ka aana bilkul swabhavik hai (value relevance), kyunki hum apni dilchaspi se hi mudda uthate hain. Lekin topic chun lene ke baad **value neutrality** har researcher ka naitik farz hai: khud ke bias ko pehchano, **Ideal Types** banao, aur agar data aapki apni soch ke ulta aaye toh bhi imandaari se chhapo. [[eg:Agar koi researcher communal riots par apni kisi dharna ke saath jaaye, par zameeni saboot dikhayein ki uske apne samuday ne hinsa ki, toh Weber ke mutabik sach dabana beimaani hogi.]] Weber kehte the poori neutrality registan ke mirage jaisi hai, par uski koshish kabhi nahi chhodni chahiye.

### 3. Reflexive aur Skeptical Critics: Gouldner, Myrdal aur New Right

Apni mashhoor kitab *Anti-Minotaur: The Myth of a Value-Free Sociology* mein [[thinker:Alvin Gouldner]] ne kaha ki facts aur values ek hi sharir ke do hisse hain — value-freedom ka natak karne wale sociologists bas satta aur paise walon ki gulami chhupate hain. [[thinker:Gunnar Myrdal]] aur [[thinker:Roger Gomm]] ne bhi kaha ki "professional" banne ke naam par hum establishment ki values apna lete hain — jabki New Right ke [[thinker:David Marsland]] ne ulta aarop lagaya ki sociology textbooks left-wing aur anti-capitalist bias failati hain. Gouldner ka upaay hai ==Reflexive Sociology==: apni caste, class, gender aur ideology khul kar batao taaki padhne wala khud aapke bias ka hisaab laga sake.

### 4. Committed aur Standpoint Sociologists: Kiske Paksh Mein?

*Whose Side Are We On?* mein [[thinker:Howard Becker]] ne saaf kaha ki bina paksh liye research nahi ho sakti, isliye asli sawal yeh hai ki hum kiski taraf khade hain. [[thinker:Lee Harvey]], [[thinker:Phil Carpen]], aur feminist/Dalit theorists ([[thinker:Ann Oakley]], [[thinker:Sharmila Rege]]) kehte hain ki kyunki purani sociology mein savarna aur male nazariya bhari raha hai, ab jaan-boojh kar auraton, Daliton aur mazdooron ki aawaz ko tarjeeh deni chahiye.

| Nazariya | Objectivity par Soch | Mukhya Salah | Pramukh Thinkers |
| --- | --- | --- | --- |
| Classical Positivism | Cold rules se poori tarah sambhav | Social facts as things maano; stats lagao | Comte, Durkheim |
| Weberian Middle Path | 100% impossible; neutrality farz hai | Topic relevance aur neutral analysis alag karo | Max Weber |
| Reflexive Skeptics | Value-free myth chhupa bias hai | Apni social position khul kar likho | Gouldner, Myrdal, Bourdieu |
| Critical & Feminist | Neutrality takatwaron ka saath deti hai | Kamzor aur marginalized standpoints ko aage laao | Becker, Oakley, Harvey, Rege |

## Kya Objectivity Over-Hyped Hai — aur Interpretive Research Mein Kaise Paayein?

Aasaan shabdon mein samjho: agar objectivity ka matlab bhagwan jaisi 100% bhavna-rahit tasveer hai, toh haan, woh myth zaroorat se zyada badha-chadha kar dikhaya gaya hai. Lekin agar objectivity ki har kasauti hi phenk di jaaye, toh research aur political bhashan mein koi farq nahi bachega!

**Interpretive aur qualitative research** mein bhi — jahan numbers ke bajaye *Verstehen* aur interviews chalte hain — researcher paanch tareeqon se mazboot ==disciplined objectivity== laa sakta hai:

- **Imandaar Reflexivity:** Field diary mein lagatar likho ki aapki caste, gender ya shahari background interviews par kya asar daal raha hai ([[thinker:Pierre Bourdieu]] ki reflexivity).
- **Clear Ideal Types:** [[thinker:Max Weber]] ki tarah shuru mein concepts ki saaf paribhasha rakho taaki har koi tulna jaanch sake.
- **Member Validation:** Apne nateeje wapas unhi logon ko dikha kar poochho (jaise [[thinker:M.N. Srinivas]] aur [[thinker:Ann Oakley]] ne kiya) ki kya unki baat sahi samjhi gayi.
- **Triangulation:** Ek interview par bharosa karne ke bajaye use observation, kagazi records aur surveys se cross-check karo.
- **Inter-Subjectivity:** Ek akela researcher perfect nahi hota — jab alag-alag nazariyon ke sociologists ek dusre ke sabooton ko challenge karte hain, tab lambi daud mein sach nikharta hai.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1895',
        title: 'Émile Durkheim — Rules of Sociological Method',
        text: 'Common-sense prenotions chhod kar social facts ko bahari cheezon ki tarah objective padhne ko kaha.',
      },
      {
        year: '1904–1917',
        title: 'Max Weber — Value Relevance & Neutrality',
        text: 'Topic chunav (relevance) aur analysis (neutrality) ke beech saaf rekha khinchi.',
      },
      {
        year: '1944–1969',
        title: 'Gunnar Myrdal — Value Premises',
        text: 'Jhoothi neutrality ke bajaye researcher ke value premises khul kar batane par zor diya.',
      },
      {
        year: '1962',
        title: 'Alvin Gouldner — The Anti-Minotaur',
        text: 'Value-free sociology ko myth bataya aur transparent Reflexive Sociology ki shuruat ki.',
      },
      {
        year: '1967–1998',
        title: 'Becker, Oakley aur Dalit Feminist Standpoint',
        text: 'Becker, Ann Oakley aur Sharmila Rege ne kamzoron ke paksh aur reflexive barabari ko centre laaya.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Value Relevance', text: 'Values aur dilchaspi batate hain ki kaunsa mudda zaroori hai' },
      { label: 'Ideal Types & Design', text: 'Saaf concepts aur multi-method sawal taiyar hote hain' },
      { label: 'Value Neutrality', text: 'Data ikattha aur analyze karte waqt sach se khilwad nahi' },
      { label: 'Reflexive Audit', text: 'Apni social location likho aur community se cross-check karo' },
      { label: 'Inter-Subjectivity', text: 'Peer critique se lambi daud mein vishwasniya gyaan banta hai' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Objectivity (Nateeje ki Gunvatta)',
    rightTitle: 'Value Neutrality (Weberian Farz)',
    rows: [
      {
        aspect: 'Asli Matlab',
        left: 'Nateeje thos saboot par tike hon, personal bias se azaad',
        right: 'Researcher analysis ke dauran apni bhavnaon par lagam rakhe',
      },
      {
        aspect: 'Research Mein Jagah',
        left: 'Final conclusions aur community verification se juda',
        right: 'Topic chunnane ke baad data collection aur reporting par laagu',
      },
      {
        aspect: 'Values ki Sthiti',
        left: 'Positivists values ko poori tarah mitana chahte hain',
        right: 'Topic selection mein values maani jaati hain, aage roki jaati hain',
      },
      {
        aspect: 'Tariqa',
        left: 'Stats, replication aur peer inter-subjectivity',
        right: 'Self-awareness, Ideal Types aur ulta data bhi sach batana',
      },
      {
        aspect: 'Thinkers',
        left: 'Émile Durkheim, Auguste Comte, Robert Bierstedt',
        right: 'Max Weber; baad mein Alvin Gouldner ne reflexivity jodi',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Objectivity',
    meaning:
      'Woh scientific quality jisme research ke nateeje researcher ki jaati, dharm, gender ya rajneetik pasand se door, sirf empirical sabooton par tike hote hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Value Relevance (Wertbeziehung)',
    meaning:
      'Max Weber ka concept ki kisi sociologist ki cultural values aur dilchaspi uske liye yeh tay karti hai ki kaunsa samajik mudda study ke layak hai.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'Value Neutrality (Wertfreiheit)',
    meaning:
      'Max Weber ka naitik niyam ki topic chun lene ke baad data collection, analysis aur ulte nateejon ki reporting mein personal pasand ko bilkul door rakha jaaye.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'Reflexive Sociology',
    meaning:
      'Alvin Gouldner aur Pierre Bourdieu ka tareeqa jisme researcher jhoothi neutrality dikhane ke bajaye apni caste, gender, class aur ideology khul kar saamne rakhta hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'max-weber',
    quote: 'All knowledge of cultural reality is always knowledge from particular points of view.',
    context: 'Weber ke 1904 essay ki mashhoor line — kyun value relevance research ki shuruat mein hamesha rehti hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2024 aur 2022 PYQ Gold: Naive Myth aur Disciplined Objectivity Alag Karo!',
    body: 'Jab UPSC poochhe ki objectivity "over-hyped" hai (2024) ya interpretive research mein objectivity kaise paayein (2022), toh objectivity ko poori tarah mat phenko! Maano ki physics jaisi 100% detachment myth hai (Phillips, Gouldner, Myrdal), fir dikhao ki interpretive researchers Weber ke relevance/neutrality split, Ideal Types, reflexivity, member validation aur triangulation se strong objectivity kaise paate hain.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Objectivity aur Value Neutrality ko Ek Mat Samjho',
    body: '2014 ke short note ("How is objectivity different from value neutrality?") mein bilkul saaf antar likho: Objectivity research ke final result ki gunvatta hai (Durkheim/Bierstedt), jabki Value Neutrality topic chun lene ke baad researcher ka ongoing ethical discipline hai (Weber).',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Fact-vs-Value Answers ke Liye 3 Desi Examples',
    body: 'Har answer mein yeh 3 Indian udhaharan turant daalo: (1) Gandhi banaam Ambedkar ka untouchability par alag nazariya, (2) Ruling aur opposition ka ek hi PLFS rozgar data par ulta dawa, aur (3) 1960s ke feminists ke aane tak auraton ke ghar ke unpaid kaam ko "work" na maana jaana.',
  },
  {
    kind: 'answerBox',
    intro:
      'Sociologist khud samaj ke andar rehta hai isliye 100% value-free hona asambhav hai, par disciplined methods research ko personal rai banne se bachate hain.',
    points: [
      'Fact banaam Value: Facts check ho sakte hain, par values topic choice (ghar ke kaam ki upeksha), framing, funding aur interpretation (Marx vs Durkheim; Gandhi vs Ambedkar) ko modti hain.',
      'Weber ka farq: Topic chunte waqt values chalti hain (value relevance), par aage analysis aur counter-data reporting mein value neutrality farz hai.',
      'Reflexive critique (Gouldner, Myrdal, Becker): Value-freedom ke myth ko tod kar ya toh apni biases kholne (reflexive sociology) ya haashiye ke paksh mein bolne ki salah di jaati hai.',
      'Interpretive objectivity ke upaay: Transparent Ideal Types, reflexive diaries, respondent validation, triangulation aur peer critique.',
      'Santulit nateeja: Objectivity kisi ek sant researcher mein nahi, balki community ki self-correcting jaanch mein basti hai.',
    ],
    conclusion:
      'Namumkin value-freedom ki jagah Weberian neutrality, reflexivity aur triangulation rakhne se sociology imaandaar aur bharosemand bani rehti hai.',
  },
]

export const topic4Hi: TopicLangContent = {
  summary,
  mindMap,
  sections,
}