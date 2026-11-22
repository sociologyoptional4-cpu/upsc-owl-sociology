import type { NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic6MindMapHi } from './topic-6-mindmaps'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u04-02-parsons-merton-mead.webp',
    alt: 'Paper 1 Unit 4 poster summarizing Talcott Parsons AGIL pattern variables, Robert K Merton 5 strain modes, and GH Mead Preparatory Play Game stages',
    caption:
      'G.H. Mead ne purani psychology ko palat kar siddh kiya ki hamara Self aur sochne wala Mind bhasha, bachpan ke khel aur symbolic social interaction se janm lete hain.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 4 Visual 02',
  },
  {
    kind: 'md',
    body: `## G.H. Mead kaun the aur "Myself" likhna mushkil kyun lagta hai?

Aasaan shabdon mein samjho: apne best friend ya kisi bade neta par teen paragraph likhna bahut aasan hai, par jab khud par ("Myself") likhne baithte hain toh zyadatar log soch mein pad jaate hain. Aakhir insaan khud se bahar nikal kar apne aapko ek teesre vyakti ki tarah kaise dekhta aur parkhta hai? Chicago ke philosopher-sociologist George Herbert Mead ne apni poori life isi anokhe ==Self== ko samjhane mein lagayi.

University of Chicago mein padhane wale Mead ne jeete-ji ek bhi kitab nahi chhapwai—unke marne ke baad students ne unke lecture notes se *Mind, Self, and Society* (1934) banayi, aur unke student [[thinker:Herbert Blumer]] ne is school ko ==Symbolic Interactionism== naam diya. [[thinker:Émile Durkheim]] ke dabav wale social facts aur Parsons ke fixed scripts ke bajaye Mead ne [[thinker:Max Weber]] ke subjective meanings aur [[thinker:C.H. Cooley]] ke **Looking-Glass Self** (doosron ki aankhon mein apna aaina dekhna) se inspired **Social Behaviourism** rakha.

## Communication, Significant Symbols aur Purani Psychology ka Ulta

Purani psychology maanti thi ki pehle vyakti ke paas dimaag (Mind) hota hai, fir Self banta hai, aur baad mein woh samaj mein aata hai. Mead ne is kram ko bilkul ulta kar diya: **Society (Interaction) -> Self -> Mind**. Bina samajik mel-jol ke—jaise jungle mein akeli pali bachiyon ke cases mein dikha—shareer toh badhta hai par bhasha, self-awareness ya soch paida nahi hoti.

Insaan vicharon ka aadan-pradan kaise karta hai? Mead ne sanchar ke do raste bataye:

- **Unconscious Communication (Gestures ki Baatcheet):** Bina soche body signals—jaise do kutton ka bhaunkna ya kisi anchahe dost ke aane par group ka apne aap sikud jana.
- **Conscious Communication (Significant Symbols aur Bhasha):** Sirf insaanon mein milne wale shabd ya ishaare (jaise "namaste" haath jorna, "aam" bolna ya heart emoji) jinka **bilkul ek hi matlab** bhejne aur sunne wale dono ke dimaag mein aata hai.
- **Role-Taking aur Reflexivity:** Shared symbols ki wajah se hum mann hi mann doosre ki jagah jaakar (**Role-Taking**) khud ko bahar se dekh sakte hain—is tarah insaan ka Self ek saath **Subject** (bolne wala) aur **Object** (jise dekha ja raha hai) dono hota hai. Yeh kshamta janm ke waqt navjat shishu ya janwaron mein nahi hoti.

## Self ke Vikas ke Teen Charan aur Gender Identity

Bachcha janm se apna Self lekar nahi aata; bhasha seekhne aur bade-bade roles samajhne ke saath teen charanon mein ==Self== taiyar hota hai:

- **1. Preparatory Stage (Janm se ~3 Saal):** Chhota baccha maa-baap ki muskan, muh banana ya phone pakadne ki sirf mechanical nakal karta hai—use un ishaaron ka matlab nahi pata, isliye abhi Self nahi bana hai.
- **2. Play Stage (~3 se 6 Saal):** Bhasha aate hi bachcha ek samay mein ek **Significant Other** (maa, pita, doctor, teacher) ka role play karne lagta hai. [[eg:Gudiya ke saath ghar-ghar khelte hue bacchi use apni maa ki tarah khilati ya daant-ti hai—ise khelte hue woh maa ki nazar se khud ko dekhna seekhti hai.]]
- **3. Game Stage (~6 Saal se Aage):** School jaane par bachcha cricket, *kho-kho* ya *chor-police* jaise multi-player rule wale games khelta hai. Batting ya fielding karne ko use bowler, wicketkeeper, captain aur umpires sabhi ke roles aur LBW jaise rules ek saath dimaag mein rakhne padte hain—yahin se woh poore samaj ke niyamon ya ==Generalized Other== ko andar utarta hai aur poora **Selfhood** paa leta hai!

Mead ka yeh model **Gender Identity** (2014 PYQ) ko bakhubi samjhata hai: bachche pink-blue roles dimaag mein lekar paida nahi hote; pehle woh parivar ke ishaaron ki nakal karte hain (Preparatory), fir gudiya-kitchen ya bat-police ke khel mein gender roles try karte hain (Play), aur school-peers-media ke niyamon ko gendered **Generalized Other** ke roop mein apna lete hain (Game)—halanki bade hokar un niyamon ko chunauti dene ki taqat bhi rakhte hain!

## "I" aur "Me": Hum Apni Socialisation Khud Kyun Chalate Hain?

Agar samaj hamare andar Generalized Other bhar deta hai, toh sab insaan ek jaise robot kyun nahi ban jaate? Mead ne iska jawab ==Self== ke do hisson ke samvad se diya:

| Pehlu | "Me" (Socialised Object) | "I" (Creative Subject) |
| --- | --- | --- |
| Samajik Jad | Andar base Generalized Other ke niyam aur ummidein | Vyakti ka achanak, azad aur rachnatmak jawab |
| Indian Rozmarra | *"Char log kya kahenge?"* ka darr aur anushasan | Baaghi ya naya kadam: *"Main yahi karunga"* |
| Soch ka Kram | Action ko filter aur samaj-yogya banata hai | Pehla reaction deta hai; karne ke baad hi pata chalta hai |
| Samaj par Asar | Niyam, conformity aur sthirta bachata hai | Naya-pan, badlaav aur kranti lata hai |

Mead ke mutabik ==Mind== (soch) asal mein azaad **"I"** aur samajik **"Me"** ke beech chalne wali andarooni baat-cheet hai. [[eg:Jab bhookhe student ka "I" dost ka tiffin chupke se khane ya class mein gussa nikalne ko kehta hai, toh "Me" doston ki izzat aur teacher ke niyam yaad dila kar vyavahar ko dhalta hai.]] Kyunki zindagi bhar hum naye roles (college, naukri, shaadi) seekhte aur dono mein samvad karte rehte hain, isliye **"Self aur Society judwa paida hote hain"** aur **"Hum apni socialisation mein khud mukhya bhoomika nibhate hain."** Baad mein [[thinker:Erving Goffman]] ne ise **Dramaturgy** (front-stage aur back-stage abhinay) mein badhaya.

## Mead ke Symbolic Interactionism ki Aalochna

Mead ne insaani chetna, bhasha aur active agency ko wapas sociology ke centre mein laakar biological determinism aur Parsons ke "cultural dopes" par badi jeet haasil ki. Phir bhi char pakke critical points exam mein zaroori hain:

- **Macro-Structure ki Andekhi:** [[thinker:Gary Fine]] ne symbolic interactionism ko apolitical aur "astructural" kaha—face-to-face meanings par dhyan dete hue yeh class shoshan, jaati adhikar aur state power ko bhool jaata hai.
- **Feminist Aalochna:** [[thinker:Anne Kaspar]] ne dikhaya ki Mead ka ek-jaisa Generalized Other purushon ke anubhav par zyada tika hai aur mahilaon ke ghar–bahar ke pitrisattatmak tanav ko kam samajhta hai.
- **Biology aur Unconscious ki Kami:** Freud aur Piaget ke samarthakon ke mutabik Mead ne "I" ka janm kaise hota hai yeh nahi bataya aur shareerik drives, hormones aur non-verbal body language (jo 40 second mein impression bana deti hai!) ko kam aanka.
- **Multiple Selves:** [[thinker:William James]] ne yaad dilaya ki insaan ke paas ek nahi balki alag-alag circles ke hisaab se kai empirical selves (material, social, spiritual) hote hain. [[link:Mead ki agency ko Unit 4.3 ke Weberian Verstehen aur Unit 2.5 ke non-positivist methods se jodo.]]`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1902–1922',
        title: 'C.H. Cooley — Looking-Glass Self',
        text: 'Teen kadam ka aaina model (hum kaise dikhte hain -> log kya sochte hain -> bhaavna) diya.',
      },
      {
        year: '1900–1931',
        title: 'Mead ke Chicago Lectures',
        text: 'Social behaviourism, role-taking, Play/Game charan aur "I"–"Me" siddhant viksit kiye.',
      },
      {
        year: '1934',
        title: 'Mind, Self, and Society (Maranoprant)',
        text: 'Students ne lectures chhape jo dikhate hain ki interaction se Self aur Mind bante hain.',
      },
      {
        year: '1937–1969',
        title: 'Herbert Blumer — Symbolic Interactionism',
        text: 'Mead ke kaam ko "Symbolic Interactionism" naam aur teen mukhya siddhant diye.',
      },
      {
        year: '1959',
        title: 'Erving Goffman — Dramaturgy',
        text: 'Mead ke ideas ko front-stage / back-stage aur impression management mein aage badhaya.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Preparatory (0–3)', text: 'Bina matlab samjhe sirf harkat aur chehre ki nakal; Self nahi' },
      { label: 'Play Stage (3–6)', text: 'Bhasha shuru; ek Significant Other (maa/doctor) ka natak' },
      { label: 'Game Stage (6+)', text: 'Cricket-kho-kho ke team rules se Generalized Other ka janm' },
      { label: 'Reflexive Self', text: 'Insaan khud ko Subject ("I") aur Object ("Me") dono dekhta hai' },
      { label: 'Active Mind', text: 'Zindagi bhar chalne wala aapsi samvad pehchan aur samaj badalta hai' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Significant Other (Play Stage)',
    rightTitle: 'Generalized Other (Game Stage)',
    rows: [
      {
        aspect: 'Kiska Prateek Hai',
        left: 'Khaas kareebi vyakti (maa, pita, badi behen)',
        right: 'Poori team ya bade samaj ke samuhik niyam aur ummidein',
      },
      {
        aspect: 'Vikas ka Charan',
        left: 'Play Stage (~3–6 saal): ek samay mein ek kalpanik role',
        right: 'Game Stage (6+ saal): kayi khiladiyon ke rules ek saath',
      },
      {
        aspect: 'Indian Udaharan',
        left: 'Bachchi gudiya ko theek apni maa ki tarah daant rahi ho',
        right: 'Gully cricket mein bowler, fielder aur LBW rule ek saath samajhna',
      },
      {
        aspect: 'Self par Asar',
        left: 'Doosron ke nazariye ki shuruati aur adhoori samajh',
        right: 'Poora Selfhood milna aur samajik "Me" ka andar basna',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Significant Symbols',
    meaning:
      'Aise shabd, ishaare ya prateek jinka bhejne aur paane wale dono ke liye bilkul ek hi samajik matlab hota hai—jisse conscious interaction chalti hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Role-Taking',
    meaning:
      'Mann hi mann kisi doosre vyakti ki jagah par khud ko rakh kar uske irade samajhna aur dekhna ki doosre humein kaise dekhte hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Generalized Other',
    meaning:
      'Game Stage ke dauran andar utari gayi poori team ya bade samaj ke niyamon, roles aur ummidon ki samuhik chhavi.',
  },
  {
    kind: 'keyTerm',
    term: 'The "I" and the "Me"',
    meaning:
      'Self ke do hisse: "Me" andar basa samajik anushasan ("char log kya kahenge") hai, aur "I" vyakti ka naya, achanak aur creative jawab hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2024–2013 PYQ Focus: Seedhe Conceptual Sawaal + Gender Application!',
    body: 'Mead par UPSC seedhe aur chust sawal poochhta hai: Generalized Other (2024), self-consciousness (2022), "We play a key role in our own socialisation" (2019), "I" aur "Me" (2018), "Self and Society are twin-born" (2015), gender identity stages (2014) aur Symbolic Interactionism (2013). 3-stage flow aur "I"/"Me" table zaroor banao!',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Mead ne "Symbolic Interactionism" Naam Diya ya Samaj ko Chhoda',
    body: 'Sahi tathya likho: Mead ne apni theory ko Social Behaviourism kaha tha—"Symbolic Interactionism" naam unke shishya Herbert Blumer ne diya. Saath hi Mead samaj ko kam nahi maante; unka mool sutra hi hai ki Mind se pehle Samaj aata hai ("Self and Society are twin-born").',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Mead ka Mool Sutra (Intro ke liye Best!)',
    body: 'Sequence yaad rakho: Interaction (Society) -> Self -> Mind, aur quote concept: "Self aur society judwa paida hote hain; hum doosron ka role lekar hi khud ko pehchante hain." Teen charan: Preparatory (Imitate) -> Play (Ek Significant Other) -> Game (Kayi Rules / Generalized Other).',
  },
  {
    kind: 'answerBox',
    intro:
      'George Herbert Mead ne Symbolic Interactionism ki buniyaad rakhte hue dikhaya ki insaan ka Self, bhasha aur soch samajik interaction ke andar se janm lete hain.',
    points: [
      'Purani psychology ko palatna: Society -> Self -> Mind ka rasta dikhaya jo Significant Symbols aur empathetic Role-Taking se chalta hai.',
      'Vikas ke teen charan: Bina matlab ki Preparatory nakal se Play Stage (Significant Other) aur niyam-baddh Game Stage (Generalized Other) tak Selfhood banti hai.',
      '"I" aur "Me" ka samvad: Samajik "Me" aur creative "I" ka aapsi taalmel insaan ko apni socialisation ka active khiladi banata hai.',
      'Vyavaharik upyog: Cooley ka Looking-Glass Self, Goffman ki dramaturgy aur bachpan mein gender identity nirman isse saaf dikhta hai.',
      'Santulit aalochna: Gary Fine (macro power ki kami), Anne Kaspar (feminist tanav) aur Freudian biology ki kamiyon ke bawajood Mead human agency ke sabse bade vakil hain.',
    ],
    conclusion:
      'Sakht social determinism ke khilaf Mead ne siddh kiya ki insaan samaj ka putla nahi, balki pratikon ke zariye apni pehchan aur samaj dono ghadne wala active agent hai.',
  },
]

export const topic6Hi: TopicLangContent = {
  summary:
    'G.H. Mead ne Symbolic Interactionism ki neev rakhte hue dikhaya ki bhasha, Preparatory–Play–Game charanon mein role-taking aur "I" tatha "Me" ke samvad se Self aur Mind viksit hote hain.',
  mindMap: topic6MindMapHi,
  sections,
}