import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Non-positivist methodologies conscious insaanon ko mechanical padarth maan ne se inkaar karti hain, aur dekhti hain ki actors symbols, stage performance, phenomenology ki typifications aur ethnomethodology ke rozmarra ke niyamon se samajik order kaise banate hain.'

const mindMap: MindMapData = {
  title: 'Unit 2.5 · Non-Positivist Methodologies',
  center: 'Non-Positivist Inquiry',
  subtitle: 'Verstehen • Symbolic Interaction & Dramaturgy • Phenomenology & Ethnomethodology',
  branches: [
    {
      title: 'Interpretive Base & Interactionism',
      color: 'lavender',
      thinkers: ['Max Weber', 'G.H. Mead', 'Herbert Blumer', 'Anthony Giddens'],
      points: [
        'Weber: conscious meaning, Verstehen aur Ideal Types physics copy rokte hain',
        'Padarth vs Insaan: aag ya dhakka ek nahi, alag-alag matlab paida karta hai',
        'Mead & Blumer: shared symbols (coffee, wedding ring, flag) self banate hain',
        'Giddens Double Hermeneutic: scholars ki samajh wapas samaj ko badalti hai',
      ],
    },
    {
      title: 'Goffman: Dramaturgy & Emotional Labour',
      color: 'yellow',
      thinkers: ['Erving Goffman', 'Arlie Hochschild', 'C.H. Cooley'],
      points: [
        'Roz ki zindagi ek natak: status character part, role script aur kapde props hain',
        'Front Stage: audience ke saamne impression management (interview, classroom)',
        'Back Stage: akelapan ya apna parivaar jahan mukhauta utarta hai & practice hoti hai',
        'Hochschild extension: flight-attendant ki muskaan scripted emotional labour hai',
      ],
    },
    {
      title: 'Phenomenology: Husserl aur Schutz',
      color: 'mint',
      thinkers: ['Edmund Husserl', 'Alfred Schutz', 'Peter Berger', 'Aaron Cicourel'],
      points: [
        'Green-leaves analogy: insaan ki perception ke bina koi fixed bahari sach nahi',
        'Intersubjectivity: saanjhe common-sense pool se class aur sadak shanti se chalte hain',
        'Typifications: bhasha ke labels ("dog", "delinquent", third gender) rasta dikhate hain',
        'Cicourel: juvenile crime stats police ke stereotypes dikhate hain, raw crime nahi',
      ],
    },
    {
      title: 'Ethnomethodology aur Mulyankan',
      color: 'pink',
      thinkers: ['Harold Garfinkel', 'J.M. Atkinson', 'Émile Durkheim'],
      points: [
        'Indexicality ("looking nice" ka matlab) + Reflexivity (random Yes/No test)',
        'Breaching tests (supermarket mol-bhaav, ghar mein kirayedar) chhupe rules kholte hain',
        'Atkinson: coroners phansi, note, umar aur stigma se suicide label banate hain',
        'Nateeja: lajawab qualitative validity, par reliability aur macro power pakad kamzor',
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
      'Jahan Post-Positivism science ke test sudharti hai, wahin Non-Positivism insaan ke dimaag, stage performance aur rozmarra ke common-sense order ke andar utarti hai.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 2 Visual 01',
  },
  {
    kind: 'md',
    body: `## Non-Positivism ka Chhatri (Umbrella) Samjho

Aasaan shabdon mein samjho: students aksar non-positivism aur anti-positivism ko uljha dete hain. ==Non-Positivism== ek badi chhatri hai jo classical Positivism ke har virodh ko samet-ti hai — iske ek niche **Post-Positivism** (Popper aur Kuhn jo science ke niyam sudharte hain) aati hai, aur dusri taraf **Anti-Positivism / Interpretivism**, jo kehti hai ki insaanon ko pathar ya chemical ki tarah nahi padha jaa sakta kyunki hum sochte hain aur har cheez ka matlab nikalte hain.

Ek chhota sa farq socho: agar aag par ek plastic pen rakh do toh har baar woh pighal jaayega; par agar insaan aag dekhe toh koi use havan maankar pranaam karega, koi roti sekega aur koi fire brigade ko bulaayega. Chaar bade interpretive nazariye insaan ki isi meaningful duniya ko kholte hain.

## 1. Weber ki Interpretive Sociology aur Symbolic Interactionism

[[thinker:Max Weber]] ne non-positivist sociology ki shuruat karte hue kaha ki hamara asli kaam social action ke andaruni matlab ko samajhna aur uske kaaran batana hai. Jaati, bureaucracy ya capitalism ko insaan ko nachane wali machine maan ne ke bajaye Weber ne dikhaya ki yeh sab logon ke meaningful faislon se bante hain. Iske liye unhone ==Verstehen== (actor ke nazariye se bhavnaon ko samajhna) ko ==Ideal Types== aur causal testing ke saath joda.

Isi soch ko rozmarra ki baatcheet mein le jaate hue [[thinker:G.H. Mead]] aur [[thinker:Herbert Blumer]] ne ==Symbolic Interactionism== banayi. Insaan sirf sharir ya structure ke ishaare par nahi chalta, balki saanjhe symbols (bhasha, ishaare, cheezon ke matlab) se baat karta hai. [[eg:Subah ki coffee sirf caffeine nahi, balki focus ya café status dikhati hai; do logon ka saath rehna ring, sindoor, mangalsutra aur shaadi card jaise symbols se "marriage" banta hai; aur jhanda fehrane banaam jalane par deshbhakti ya apmaan ke ulte bhaav jaagte hain.]]

## 2. Erving Goffman ki Dramaturgy: Rozmarra ki Zindagi ek Theatre

Kya aapne notice kiya hai ki hostel mein doston ke saath khul kar hansi-mazaak karne wala student maa-baap ya strict teacher ke kamre mein aate hi bilkul seedha aur serious chehra bana leta hai? *The Presentation of Self in Everyday Life* mein [[thinker:Erving Goffman]] ne roz ki zindagi ko ek theatre ya nukkad natak (**Dramaturgy**) bataya, jahan insaan kathputli nahi balki hoshiyaar kalakar hain.

- **Stage, Script aur Props:** Status (doctor, UPSC aspirant, pita) ek kirdaar hai, role uske dialogues ki script, aur kapde, bolchal ka lehja, stethoscope ya kitab hamare **props** hain.
- **Front Stage banaam Back Stage:** ==Front Stage== par — jaise UPSC interview room, classroom ya Instagram feed — hum audience ke saamne soch-samajh kar ==Impression Management== karte hain aur saamne wale ke reaction ke hisaab se tone badalte hain. ==Back Stage== par — akele kamre mein ya kareebi parivaar ke beech — hum mukhauta utar kar aaram karte hain aur socialisation se agle role ki practice karte hain.
- **Emotional Labour ka Extension:** [[thinker:Arlie Hochschild]] ne Goffman ko aage badhakar flight attendants par study ki: unki muskaan sirf dil ki khushi nahi, balki airline job ki script se maangi gayi **emotional labour** (surface aur deep acting) hoti hai. [[trap:Aalochak kehte hain ki dramaturgy insaan ko zaroorat se zyada chalak actor dikhati hai aur jaati ya gareebi jaise bade structural dabav ko nazarandaz karti hai.]]

## 3. Phenomenology: Alfred Schutz, Typifications aur Intersubjectivity

Philosopher [[thinker:Edmund Husserl]] se nikal kar [[thinker:Alfred Schutz]] dwara sociology mein laayi gayi ==Phenomenology== ek kadam aur aage badh kar poochhti hai ki kya insaan ke dimaag ke bahar koi objective social reality hoti bhi hai? Hari pattiyon (*green leaves*) ka udhaharan lo: pattiyan physics mein "hari" nahi hain, woh humein hari isliye dikhti hain kyunki insaan ki aankh ke cones light ko waise padhte hain — ek chamgaadad ya billi ko wahi ped bilkul alag dikhega.

Agar har insaan ka dimaag alag hai, toh phir sab log ek saath bina takraye kaise rehte hain? Schutz ne do answers diye:

- **Intersubjectivity aur Stock of Knowledge:** Bhasha ke zariye hum ek saanjha common-sense pool (**intersubjectivity**) banate hain — yaani sach ka ek "shared illusion". [[eg:Classroom tabhi chalta hai jab 30 students aur ek teacher sab milkar maante hain ki yeh sociology ki class hai, na ki koi railway ticket khidki.]]
- **Typifications:** Bikhre anubhavon ko samajhne ke liye dimaag har cheez ko cultural categories mein daalta hai jise ==Typifications== kehte hain. Chhote Pomeranian se lekar bade Rottweiler tak sabko bhaunkne aur poonchh ki wajah se "kutta" label milta hai; waise hi samaj "normal", "crime" ya gender categories banata hai aur bhasha badalne par third gender ko bhi jagah deta hai.
- **Official Stats ki Aalochana:** [[thinker:Aaron Cicourel]] ne dikhaya ki juvenile crime ke aankde asli apradh nahi balki police ke dimaag mein base "typical criminal" ke stereotypes dikhate hain — [[eg:bilkul waise hi jaise Bharat mein IT Rules ke tahat "unlawful" message tay karna ya PLFS berozgari categories officers ke decisions par tiki hoti hain]].

## 4. Harold Garfinkel ki Ethnomethodology: Chhupe Niyamon ki Khoj

Phenomenology ko zameen par utarte hue [[thinker:Harold Garfinkel]] ne ==Ethnomethodology== (*ethnos* = log, *method* = unke tareeqe, *logy* = study) banayi, taaki dekha jaaye aam log roz ki zindagi mein order kaise banate hain. Unhone teen zabardast ideas diye:

- **Indexicality:** Kisi shabd ya ishaare ka akela pakka matlab nahi hota; matlab poori tarah situation (context) par tika hota hai. [[eg:"Aaj bahut achhe lag rahe ho" agar aapka crush bole toh tareef hai, school ka bully bole toh taana hai, aur maa-baap bolein toh pyar hai.]]
- **Reflexivity aur Random Counselling:** Insaan ko har haal mein order aur matlab chahiye (**reflexivity**). Garfinkel ne phone par free counselling ka test kiya jahan machine ne students ke sawalon par **random "Yes" ya "No"** bola — phir bhi students ne random jawabon mein gehra matlab jod kar kaha ki psychologist bahut samajhdar tha!
- **Breaching Experiments:** Yeh dikhane ke liye ki order apne aap nahi chalta balki hum roz use nibhate hain, Garfinkel ne students ko chhupe niyam todne bheja — [[eg:fixed-price supermarket mein biscuit par mol-bhaav karna, apne hi ghar mein mehmaan ya kirayedar ki tarah vyavahar karna, ya lift mein ulta muh karke khada hona]]. Log ghabra kar turant "normalcy" wapas laane lage!
- **Atkinson vs Durkheim (Suicide):** Durkheim ke raw stats ko palat te hue [[thinker:J.M. Atkinson]] ne coroners par study ki aur bataya ki "suicide" koi objective cheez nahi balki ek **negotiated verdict** hai: depression ka itihas, suicide note, phansi banaam goli, andar se band kamra banaam highway, 30 saal banaam 80 saal ki umar aur parivaar ki sharam milkar faisla banati hain.

## Double Hermeneutic aur Santulit Nateeja

Aakhir mein, [[thinker:Anthony Giddens]] ne ==Double Hermeneutic== bataya: jahan atoms physics journals nahi padhte, wahin sociologists logon ke pehle se meaningful kaam (jaise badon ke pair chhoone ko functionalism ya feminism se samajhna) interpret karte hain, aur *identity*, *sanskritisation* ya *stigma* jaise shabd wapas aam bolchaal mein aakar samaj ko badal dete hain. Non-positivism humein **validity** aur human agency ki behtareen samajh deta hai, aur jab ise macro surveys se milaya jaaye toh state, class aur economy ke bade structures bhi nahi chhoot-te.

| Tradition | Mukhya Thinkers | Research ka Focus | Taqat aur Kami |
| --- | --- | --- | --- |
| Interpretive Sociology | Max Weber | Verstehen + Ideal Types + causal adequacy | Meaning & structure jodti hai; type rigid ho sakta hai |
| Symbolic Interactionism | G.H. Mead, Herbert Blumer | Shared symbols, self aur lagatar interaction | Agency pakadti hai; macro state & class chhoot-te hain |
| Dramaturgy | Erving Goffman, A. Hochschild | Front/back stage aur impression management | Zinda micro insights; insaan ko zyada chalak dikhati hai |
| Phenomenology | E. Husserl, Alfred Schutz | Lifeworld, intersubjectivity aur typifications | Chhupe labels kholti hai; power inequality kam dekhti hai |
| Ethnomethodology | Harold Garfinkel, J.M. Atkinson | Indexicality, reflexivity aur breaching tests | Stats ka bharam todti hai; statistical reliability kam rehti hai |`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1904–1922',
        title: 'Max Weber — Verstehen & Social Action',
        text: 'Social action ke matlab ko Ideal Types ke saath samajhne wali interpretive sociology ki neev rakhi.',
      },
      {
        year: '1932–1934',
        title: 'Alfred Schutz aur G.H. Mead',
        text: 'Schutz ne lifeworld ki phenomenology aur Mead ne symbols se self banne ka siddhant diya.',
      },
      {
        year: '1959',
        title: 'Erving Goffman — Presentation of Self',
        text: 'Front stage, back stage, props aur impression management ke zariye dramaturgy pesh ki.',
      },
      {
        year: '1967–1969',
        title: 'Garfinkel aur Blumer',
        text: 'Garfinkel ne Ethnomethodology (breaching, indexicality) aur Blumer ne Symbolic Interactionism codify ki.',
      },
      {
        year: '1978–1984',
        title: 'J.M. Atkinson aur Anthony Giddens',
        text: 'Atkinson ne suicide stats khole aur Giddens ne Double Hermeneutic tatha Structuration diya.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Indexical Context', text: 'Shabd aur ishaaron ka matlab har haalat mein badalta hai' },
      { label: 'Typification', text: 'Log bhasha se cheezon aur logon ko mental categories mein rakhte hain' },
      { label: 'Intersubjectivity', text: 'Saanjhi common-sense samajh se roz ka vyavahar aasaan hota hai' },
      { label: 'Front/Back Staging', text: 'Actors props aur audience dekh kar impression manage karte hain' },
      { label: 'Reflexive Order', text: 'Baatcheet aur negotiation se roz ek sthir samajik order banta hai' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Positivist Study of Suicide (Durkheim)',
    rightTitle: 'Ethnomethodological Critique (J.M. Atkinson)',
    rows: [
      {
        aspect: 'Official Stats ka Roop',
        left: 'Objective social facts jo asli structural dar naapte hain',
        right: 'Coroners aur police ke common-sense decisions se bane verdicts',
      },
      {
        aspect: 'Sociology ka Sawal',
        left: 'Integration aur regulation se suicide rate kyun badalta hai?',
        right: 'Officials kin aam nishaniyon se kisi maut ko suicide maante hain?',
      },
      {
        aspect: 'Parivaar aur Stigma',
        left: 'Statistical rates ke bahar maana gaya side factor',
        right: 'Parivaar ki negotiation record aur label ko seedhe badalti hai',
      },
      {
        aspect: 'Mukhya Saboot',
        left: 'Dharm, shaadi aur crisis par comparative European tables',
        right: 'Depression, note, phansi banaam goli, band kamra aur umar',
      },
      {
        aspect: 'Theoretical Sandesh',
        left: 'Bahari samajik taqatein vyakti par dabav daalti hain',
        right: 'Social order aur "facts" roz ke interpretive kaamon se bante hain',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Verstehen',
    meaning:
      'Max Weber ka empathetic understanding wala method jisme sociologist khud actor ki jagah soch kar uske kaam ke peeche ka asli matlab aur motive samajhta hai.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'Dramaturgy & Impression Management',
    meaning:
      'Erving Goffman ka nazariya jo roz ki zindagi ko theatre maanta hai — Front Stage (audience ke saamne props ke saath chhavi banana) aur Back Stage (mukhauta utarna).',
  },
  {
    kind: 'keyTerm',
    term: 'Typification & Intersubjectivity',
    meaning:
      'Alfred Schutz ke concepts jo dikhate hain ki kaise log saanjhi cultural categories (typifications) aur common-sense pool se ek sthir duniya mehsoos karte hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Indexicality & Reflexivity',
    meaning:
      'Harold Garfinkel ki ethnomethodology ke do stambh: matlab hamesha context par tika hota hai (indexicality) aur log baatcheet se order khud bun lete hain (reflexivity).',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'max-weber',
    quote: 'Sociology is a science concerning itself with the interpretive understanding of social action.',
    context: 'Economy and Society ki pehli line jo interpretive non-positivist sociology ki neev rakhti hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2023 aur 2017 PYQ Strategy: Zinda Micro-Examples Zaroor Lagao!',
    body: 'Dramaturgy (2023) aur Interpretative Perspective (2017) mein sookhi definitions se zyada everyday Indian examples marks dilate hain. Goffman mein UPSC mock interview + Arlie Hochschild ki emotional labour jodo; Garfinkel mein supermarket mol-bhaav aur random Yes/No counselling; aur end mein macro class-caste-state power ki kami batana mat bhoolo.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Phenomenology aur Ethnomethodology ko Ek Mat Maano',
    body: 'Students aksar Schutz aur Garfinkel ko mix kar dete hain. Antar saaf rakho: Phenomenology (Schutz) padhti hai ki dimaag typifications aur intersubjectivity se duniya ko kaise classify karta hai, jabki Ethnomethodology (Garfinkel) real conversations aur breaching tests mein dekhti hai ki log practically order kaise banate aur sudharte hain.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: '5-School Non-Positivist Ladder (V-S-D-P-E)',
    body: 'Paanchon non-positivist strands ko V-S-D-P-E sequence mein yaad rakho: Verstehen (Weber), Symbolic Interactionism (Mead & Blumer), Dramaturgy (Goffman), Phenomenology (Husserl & Schutz), aur Ethnomethodology (Garfinkel & Atkinson).',
  },
  {
    kind: 'answerBox',
    intro:
      'Non-positivist methodologies bahari vyavahar ginnane ke bajaye is baat par dhyan deti hain ki conscious insaan kaise matlab nikalte, roles nibhate aur social order banate hain.',
    points: [
      'Weber ka Verstehen: Subjective motives ki empathetic samajh ko Ideal Types aur causal checking se jodta hai.',
      'Symbolic Interactionism & Dramaturgy: Mead, Blumer aur Goffman symbols, front/back stages aur Hochschild ki emotional labour dikhate hain.',
      'Phenomenology (Husserl, Schutz): Saabit karti hai ki sach bhasha se mili typifications aur saanjhi intersubjectivity par tika hota hai.',
      'Ethnomethodology (Garfinkel, Atkinson): Indexicality, reflexivity aur suicide verdicts ke peeche ki negotiation kholti hai.',
      'Santulit mulyankan: Qualitative validity lajawab hai, par reliability aur macro power pakadne ke liye surveys aur political economy se jodna zaroori hai.',
    ],
    conclusion:
      'Non-positivist methodologies samaj-shastra mein insaani consciousness, creativity aur rozmarra ki human agency ko wapas centre mein laati hain.',
  },
]

export const topic5Hi: TopicLangContent = {
  summary,
  mindMap,
  sections,
}