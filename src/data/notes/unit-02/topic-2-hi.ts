import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Research methodology samaj ko dekhne ke philosophical nazariye ko zameeni jaanch ke niyamon se jodti hai — jisme macro-structural (Positivism, Functionalism, Marxism), micro-interpretive (Weber, Phenomenology, Ethnomethodology) aur Feminist, Subaltern tatha Post-Positivist strands shaamil hain.'

const mindMap: MindMapData = {
  title: 'Unit 2.2 · Major Theoretical Strands of Research Methodology',
  center: 'Methodological Strands',
  subtitle: 'Niyam aur Logic • Structural vs Action • Feminist & Plural Bridges',
  branches: [
    {
      title: 'Methodology ka Asli Matlab',
      color: 'lavender',
      thinkers: ['Auguste Comte', 'Émile Durkheim', 'Max Weber', 'C. Wright Mills'],
      points: [
        'Rules, principles aur procedures ka poora system — sirf survey tools nahi',
        'Ontology (samaj kya hai) ko Epistemology (gyaan kaise paayein) se jodti hai',
        'Hypothesis, sampling, interpretation aur bias check ke usool tay karti hai',
        'Mills ke abstracted empiricism (bina dimaag ke numbers) se bachati hai',
      ],
    },
    {
      title: 'Macro-Structural Strands',
      color: 'yellow',
      thinkers: ['Émile Durkheim', 'Karl Marx', 'Talcott Parsons', 'Robert K. Merton'],
      points: [
        'Positivist-Functionalism: social facts insaan ko chalate hain; stats & comparative',
        'Merton middle-range theory surveys ko manifest/latent functions se jodti hai',
        'Marxist Historical Materialism: dialectics, class structure, structural conflict',
        'Critical Theory (Adorno): status-quo naapne ke bajaye azaadi (emancipation)',
      ],
    },
    {
      title: 'Micro-Interpretive Strands',
      color: 'mint',
      thinkers: ['Max Weber', 'G.H. Mead', 'Alfred Schutz', 'Harold Garfinkel'],
      points: [
        'Weber ka bridge: Verstehen + Ideal Types + value-neutral causal explanation',
        'Symbolic Interactionism & Dramaturgy: symbols, self, front/back stage',
        'Phenomenology & Ethnomethodology: typifications, indexicality, breaching',
        'Meanings par high validity milti hai, par mechanical reliability kam rehti hai',
      ],
    },
    {
      title: 'Feminist, Post-Positivist & India',
      color: 'pink',
      thinkers: ['Ann Oakley', 'Dorothy Smith', 'Sharmila Rege', 'M.N. Srinivas'],
      points: [
        'Feminist research: barabari wala interview, unpaid care work, standpoint lens',
        'Post-Positivism: Popper falsification + Kuhn paradigms + triangulation',
        'Giddens Structuration structure aur human agency ko saath jodti hai',
        'Bharat: Srinivas field view, Ambedkar aur Guha ka subaltern caste-peasant lens',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u02-01-science-spectrum.webp',
    alt: 'Paper 1 Unit 2 poster comparing Positivism (Comte Durkheim), Post-Positivism (Popper Kuhn), and Non-Positivism (Weber Schutz Garfinkel Goffman)',
    caption:
      'Har research tool ke peeche ek bada theoretical strand hota hai — Positivism se Post-Positivism aur Interpretivism tak ka safar.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 2 Visual 01',
  },
  {
    kind: 'md',
    body: `## Methodology kya hai aur Methods se kaise Alag hai?

Aasaan shabdon mein samjho: aksar students "method" aur "methodology" ko ek hi maan lete hain, jabki inmein bada farq hai. ==Method== woh specific auzar ya technique hai jisse aap data ikattha karte hain — jaise questionnaire, interview ya participant observation. ==Methodology== poora ==system of rules, philosophical assumptions, principles aur procedures== hai jo yeh tay karta hai ki aapne wohi tool kyun chuna, saboot kis baat ko maanenge, aur bias ko kaise rokenge.

Jaise pul banate waqt hathoda ya laser level ek *method* hai, par structural engineering — wazan ka hisaab, safety rules aur design logic — *methodology* hai. Har sociological research strand teen bade faislon par tiki hoti hai:

- **Ontology (Sach ka Roop):** Kya samaj insaan ke bahar ek pakki imarat (structure) hai jo humein chalati hai, ya log roz ki baatcheet mein milkar use banate rehte hain?
- **Epistemology (Gyaan ka Raasta):** Kya researcher ko door khade hokar cold stats nikalne chahiye, ya insaan ke joote mein paon rakh kar uski bhavna aur matlab (*Verstehen*) samajhna chahiye?
- **Rules & Rigour:** Methodology concept define karne, sample chunne, data cross-check karne aur galat saboot se bachne ke niyam banati hai. [[trap:Sirf bade-bade statistical tables bhar dene se, bina theory aur itihas ko samjhe, C. Wright Mills jise "abstracted empiricism" kehte hain wahi banta hai.]]

## Strand 1: Macro-Structural Methodologies (Positivism, Functionalism, Marxism)

Aasaan shabdon mein samjho: macro-structural nazariye maante hain ki jaati, class, parivaar aur kanoon jaisi badi vyavasthayein insaan ke janm se pehle hi maujood hoti hain aur hamari soch ko shape karti hain. Isliye yeh scholars chhote-mote kisson ke bajaye bade census data, national surveys aur itihas ki tulna par dhyan dete hain.

### Functionalist-Positivist Strand

[[thinker:Auguste Comte]] aur [[thinker:Émile Durkheim]] se nikli yeh parampara dekhti hai ki samaj ke alag-alag hisse milkar order kaise banaye rakhte hain. Baad mein [[thinker:Talcott Parsons]] ne bade system models banaye aur [[thinker:Robert K. Merton]] ne grand theory aur raw data ke beech ==theories of the middle range== laakar manifest (dikhne wale) aur latent (chhupe hue) asaron ki jaanch ki. [[eg:Jab koi Indian researcher NCRB crime records ya PLFS rozgar data use karke dekhta hai ki tez shehrikaran se parivaar ke aakaar aur youth stress par kya asar pada, toh woh macro-structural methodology laga raha hota hai.]]

### Marxist Historical-Materialist aur Critical Strand

Functionalists ki tarah [[thinker:Karl Marx]] ne bhi badi economic structures (==mode of production== aur class relations) ko ahem maana, par unhone shanti ke bajaye shoshan, virodhabhas aur class sangharsh pakadne par zor diya. Historical archives aur dialectics ke zariye Marxists dekhte hain ki daulat ki taqat rajneeti aur vichardhara ko kaise modti hai. Bharat mein [[thinker:A.R. Desai]] ne isi lens se Indian nationalism aur gramin vikas yojanaon ka class character dikhaya, jabki Frankfurt School ke [[thinker:Theodor Adorno]] aur [[thinker:Max Horkheimer]] ne kaha ki methodology ka kaam sirf samaj ko naapna nahi balki insaanon ko shoshan se **azaad (emancipate)** karna hai.

## Strand 2: Micro-Interpretive aur Social Action Strands

Aasaan shabdon mein samjho: maan lo ek survey kehta hai ki kisi shehar mein 98% logon ki shaadi 30 ki umar tak ho jaati hai. Interpretive sociologist poochhta hai: *"Is 98% se yeh kaise pata chala ki kisi ne pyar se shaadi ki, kisi ne dahej ke dabav mein, aur kisi ne maa-baap ki izzat ke liye?"* Micro-interpretive strands insaan ko putla nahi balki sochne-samajhne wala active actor (**human agency**) maanti hain.

- **Weber ka Methodological Bridge:** [[thinker:Max Weber]] ne structure aur meaning ko badi khoobsurti se joda. Unhone ==Verstehen== (actor ke nazar se gehri samajh) ke saath ==Ideal Types== (rational bureaucracy ya charismatic leader jaise analytical model) aur value-neutrality ko milaya taaki explanation meaning aur causality dono par khara utre.
- **Symbolic Interactionism aur Dramaturgy:** [[thinker:G.H. Mead]], [[thinker:Herbert Blumer]] aur [[thinker:Erving Goffman]] dekhte hain ki log bhasha, ishaaron aur impression management se roz ki zindagi kaise chalate hain. [[eg:Ek UPSC aspirant hostel ke corridor (back stage) mein alag bolta hai aur mock interview board (front stage) ke saamne alag poshak aur tone mein pesh aata hai — yeh Goffman ki dramaturgy hai.]]
- **Phenomenology aur Ethnomethodology:** Philosopher [[thinker:Edmund Husserl]] se [[thinker:Alfred Schutz]] ne sikhaya ki insaan bikhri duniya ko mental categories (**typifications**) aur saanjhi samajh (**intersubjectivity**) se order mein dekhte hain. Is par chal kar [[thinker:Harold Garfinkel]] ne ==ethnomethodology== banayi — jisme **indexicality** (maahol ke hisaab se matlab), **reflexivity** aur **breaching experiments** se dikhaya ki aam log roz ke bharam se social order banate hain, aur official suicide stats bhi coroners ke common-sense judgements par tike hote hain ([[thinker:J.M. Atkinson]]).
- **Kya Non-Positivist Methods Scientific, Reliable aur Valid Hain?** Kyunki micro fieldwork aur breaching experiments asli zindagi ke chhupe niyam bina survey banaavat ke pakadte hain, unki ==ecological validity== bahut high hoti hai. Lekin har researcher ke saath same nateeja na repeat hone se mechanical ==reliability== kam rehti hai aur macro class-state power chhoot sakti hai. Phir bhi yeh methods bilkul **systematic aur empirical** hain — Weber ke Ideal Types, Schutz ke patterns aur field triangulation bina physics-copy ke bhi thos evidence dete hain.

## Strand 3: Feminist, Subaltern aur Post-Positivist Synthesis

Aaj ki sociology sirf "numbers banaam kahaniyan" ki ladai se aage nikal chuki hai; ab asli sawal yeh hai ki research ke sawal kaun tay kar raha hai aur kiski aawaz dab rahi hai. Feminist, subaltern aur post-positivist nazariye dikhate hain ki jab haashiye par khade logon ka anubhav aur ek se zyada methods saath aate hain, tab sach kahin zyada saaf dikhta hai.

- **Feminist Methodology ki Khas Pehchan:** [[thinker:Ann Oakley]], [[thinker:Dorothy Smith]], Sandra Harding aur Bharat mein [[thinker:Sharmila Rege]] ne dikhaya ki purani "male-stream" sociology ne sirf bahar ki tankhwah wali naukri ko "kaam" maana aur auraton ki ghar-dekhbhal ko gayab kar diya. Oakley ne upar-se-neeche poochhtachh wale cold surveys chhod kar **non-hierarchical, barabari wali empathetic baatcheet**, gehri **reflexivity** aur shoshan mitane wale maqsad ko apnaya. [[eg:Sharmila Rege ka Dalit Feminist Standpoint dikhata hai ki Maharashtra mein Dalit mahilaon ki atmakathayein aur gawahi woh jaati-patriarchy sach pakadti hain jo upper-caste surveys mein chhoot jaata hai.]]
- **Post-Positivism aur Triangulation:** [[thinker:Karl Popper]] (falsifiability), [[thinker:Thomas Kuhn]] (paradigms) aur [[thinker:Andrew Sayer]] (critical realism) ke baad maana gaya ki 100% pakki objectivity mushkil hai, isliye **triangulation** — ek hi mudde par surveys, archives aur interviews ko saath chalana — sabse bharosemand raasta hai.
- **Indian Synthesis aur Structuration:** [[thinker:Anthony Giddens]] ki Structuration theory dikhati hai ki structure aur insaan ki agency ek dusre ko banate hain ([[link:jaise Paper 2 Unit 1 mein M.N. Srinivas ke ethnographic "field view" ne G.S. Ghurye ke "book view" ko sudhara aur B.R. Ambedkar tatha Ranajit Guha ne subaltern aawazon ko jagah di]]).

| Methodological Strand | Samaj ki Soch | Pasandeeda Tools | Mukhya Thinkers & Indian Link |
| --- | --- | --- | --- |
| Positivist / Functionalist | External social facts behaviour chalate hain | Surveys, stats, comparative data | Comte, Durkheim, Merton; Census/NFHS data |
| Marxist / Critical | Economic contradictions & power conflict | Historical-dialectical & critique | Marx, Adorno; A.R. Desai on nationalism |
| Interpretive / Micro | Meaning aur interaction se samaj banta hai | Verstehen, ethnography, breaching | Weber, Schutz, Goffman, Garfinkel; Village studies |
| Feminist & Subaltern | Gendered aur caste-situated standpoints | Reflexive dialogue, oral testimony | Oakley, Smith; Sharmila Rege, Ambedkar, Guha |`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1848–1895',
        title: 'Marx aur Durkheim — Structural Methodologies',
        text: 'Marx ne historical-dialectical critique di; Durkheim ne objective social facts aur comparative stats rakhe.',
      },
      {
        year: '1904–1922',
        title: 'Max Weber — Methodological Bridge',
        text: 'Verstehen aur Ideal Types ko value-neutral causal analysis ke saath joda.',
      },
      {
        year: '1932–1934',
        title: 'Mead, Schutz aur Popper — Micro & Post-Positivist Mod',
        text: 'Mead ne symbolic interaction, Schutz ne phenomenology aur Popper ne falsificationism aage badhaya.',
      },
      {
        year: '1959–1967',
        title: 'Goffman, Garfinkel aur Kuhn — Rozmarra aur Paradigms',
        text: 'Dramaturgy aur Ethnomethodology ne everyday rules khole; Kuhn ne paradigm revolutions samjhayein.',
      },
      {
        year: '1981–1998',
        title: 'Oakley, Giddens aur Indian Standpoint Turn',
        text: 'Feminist interviewing, Structuration aur Rege/Guha ke subaltern methods ne macro-micro ko milaya.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Positivist Macro', text: 'External structures ko quantitative surveys & stats se naapna' },
      { label: 'Weberian Bridge', text: 'Verstehen + Ideal Types se meaning aur causality milana' },
      { label: 'Micro-Interpretive', text: 'Phenomenology, Dramaturgy & Ethnomethodology se lived rules padhna' },
      { label: 'Feminist & Subaltern', text: 'Non-hierarchical, reflexive dialogue se haashiye ke sach samajhna' },
      { label: 'Triangulated Synthesis', text: 'Giddens & Post-Positivism se breadth aur depth dono paana' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Structural / Positivist Strand',
    rightTitle: 'Social Action / Interpretive Strand',
    rows: [
      {
        aspect: 'Samaj ki Reality',
        left: 'Samaj vyakti ke bahar ek pakke dhanchon ki tarah maujood hai',
        right: 'Samaj insaanon ke rozmarra ke meaningful kaamon se banta hai',
      },
      {
        aspect: 'Insaan ki Tasveer',
        left: 'Norms, socialisation ya class se chalne wala role-player',
        right: 'Active, conscious actor jo symbols aur context ka matlab nikalta hai',
      },
      {
        aspect: 'Data ka Focus',
        left: 'Rates, correlations aur structural causes naapna (reliability)',
        right: 'Motives, bhavna aur chhupe niyam samajhna (validity)',
      },
      {
        aspect: 'Tools',
        left: 'Structured surveys, official stats, macro-history',
        right: 'Participant observation, unstructured interviews, breaching tests',
      },
      {
        aspect: 'Mukhya Thinkers',
        left: 'Auguste Comte, Émile Durkheim, Karl Marx, Talcott Parsons',
        right: 'Max Weber, G.H. Mead, Alfred Schutz, Erving Goffman, Garfinkel',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Research Methodology',
    meaning:
      'Philosophical assumptions, logical rules aur investigative procedures ka poora system jo tay karta hai ki tools kaise chunein, saboot kaise parkhein aur bias kaise rokein.',
  },
  {
    kind: 'keyTerm',
    term: 'Theories of the Middle Range',
    meaning:
      'Robert K. Merton ka raasta jo hawa-hawai grand theories aur sirf data-jama karne ke beech aakar specific, testable hypotheses banata hai.',
    thinkerSlug: 'robert-k-merton',
  },
  {
    kind: 'keyTerm',
    term: 'Feminist Standpoint Methodology',
    meaning:
      'Ann Oakley, Dorothy Smith aur Sharmila Rege ka barabari wala, reflexive aur shoshan-virodhi nazariya jo mahilaon aur Dalit-haashiye ke anubhav ko gyaan ka ahem srot maanta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Methodological Triangulation',
    meaning:
      'Ek hi samajik sawal ko samajhne ke liye quantitative surveys, qualitative interviews aur historical records ko saath milakar bias kam karne ki technique.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'The philosophers have only interpreted the world, in various ways; the point is to change it.',
    context: 'Marxist aur Critical methodology ka core sandesh: research sirf status-quo naapne ke bajaye inequality badalne ka auzar bane.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2023 aur 2021 PYQ Hits: Feminist Method aur Ethnomethodology Data!',
    body: 'Feminist Method (2023) mein 4 points zaroor likho: male-stream bias par hamla, barabari wala empathetic interview (Ann Oakley), reflexivity/standpoint (Dorothy Smith, Sharmila Rege) aur emancipatory aim. Ethnomethodology (2021) mein Reliability vs Validity saaf karo: everyday rules par ecological VALIDITY bahut high hoti hai, par standardised na hone se mechanical RELIABILITY kam rehti hai.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Methodology ko Sirf Survey vs Interview Mat Samjho',
    body: 'Jab 2020 jaisa sawal poochhe "Methodology is a system of rules, principles and procedures", toh sirf questionnaire aur case study ki list mat banao! Poori chain dikhao: Ontology -> Epistemology -> Logical Rules (falsification, neutrality, ideal types) -> Methods -> Peer Review.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: '4-Quadrant Strand Map (Paper 1 Answers ke Liye)',
    body: 'Kisi bhi broad methodological sawal par yeh 4 quadrants lagao: (1) Positivist-Structural (Durkheim/Merton), (2) Conflict-Critical (Marx/Adorno/Desai), (3) Interpretive-Micro (Weber/Schutz/Garfinkel/Goffman), aur (4) Feminist-Triangulated (Oakley/Popper/Giddens).',
  },
  {
    kind: 'answerBox',
    intro:
      'Sociological methodology koi ek band formula nahi hai, balki samaj ki nature aur sabooton ki parkh ko jodne wale alag-alag theoretical raaston ka sangrah hai.',
    points: [
      'Rules ka system: Methodology ontology, epistemology aur verification niyamon ko jodti hai, taaki research Mills ke abstracted empiricism se bach sake.',
      'Macro-structural strand: Durkheim ka functionalism aur Marx ka historical materialism stats, surveys aur comparative history se bade dhanchon ko pakadte hain.',
      'Micro-interpretive strand: Weber ka Verstehen, symbolic interactionism, phenomenology aur ethnomethodology chhupe meanings par high validity dete hain, bhale reliability kam ho.',
      'Feminist & subaltern mod: Ann Oakley, Dorothy Smith aur Sharmila Rege barabari wale interview, reflexivity aur haashiye ke sach ko centre laati hain.',
      'Triangulated synthesis: Giddens ki Structuration aur post-positivism dikhate hain ki quantitative breadth aur qualitative depth milkar sabse mazboot samajh banate hain.',
    ],
    conclusion:
      'Methodological pluralism sociology ki kamzori nahi balki taqat hai — yeh badi structures aur insaani meanings dono ko ek saath pakadta hai.',
  },
]

export const topic2Hi: TopicLangContent = {
  summary,
  mindMap,
  sections,
}