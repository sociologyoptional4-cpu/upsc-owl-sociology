import type { NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3MindMapHi } from './topic-3-mindmaps'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u04-01-marx-durkheim-weber.webp',
    alt: 'Paper 1 Unit 4 poster summarizing Karl Marx historical materialism alienation, Emile Durkheim social facts suicide, and Max Weber verstehen bureaucracy',
    caption:
      'Max Weber ne sociology ko sirf bahari rules ke bajaye insaan ke subjective matlab (Verstehen), rational-legal bureaucracy, tri-dimensional stratification aur capitalism ki sanskritik jadon se joda.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 4 Visual 01',
  },
  {
    kind: 'md',
    body: `## Max Weber kaun the aur Meaning samajhna kyun zaroori hai?

Aasaan shabdon mein samjho: Delhi ke ek bheed-bhaad wale café mein do logon ko palkein jhapkate hue dekho. Bahar se dono harkatein bilkul ek jaisi lagti hain, par ek ki aankh mein dhool giri thi (blink) aur doosre ne apne dost ko ishaara kiya tha (wink). Agar hum sirf machine ki tarah bahari harkat napenge toh asli kahani chhoot jayegi—kyunki insaan apni soch aur ==subjective meaning== se kaam karta hai.

Jahan [[thinker:Karl Marx]] ne economy aur [[thinker:Émile Durkheim]] ne external social facts par dhyan diya, wahin German scholar [[thinker:Max Weber]] ne ==Interpretative Sociology== ki shuruat ki. Apne sakht bureaucrat-politician pita aur dharmik Calvinist maa ke beech ke tanav se prabhavit Weber ne samjhaya ki samaj ko badalne mein vicharon, authority, bureaucracy aur dharm ka milajula kirdar hota hai.

## Methodology: Verstehen, Ideal Types aur Objectivity

### Verstehen aur Objectivity–Subjectivity Bahas

Aakhir ek sociologist kisi doosre insaan ke dimaag ki baat bina bias ke kaise samjhe? Weber ne teen upaay bataye: **Causal Pluralism** (har ghatna ke ek nahi, kayi probabilistic kaaran hote hain), ==Verstehen== (actor ke shoes mein utar kar uska matlab samajhna), aur **Value-Relevance** vs **Value-Neutrality** ka farak.

Verstehen do steps mein chalta hai: **Aktuelles Verstehen** (seedha dekhna—jaise lakadhare ko kulhadi chalate dekhna) aur **Erklärendes Verstehen** (andar ka maqsad samajhna—kya woh thand ke liye, mazdoori ke liye ya gusse mein lakdi kaat raha hai). Dhyaan rahe, empathy dayaa ya pity (sympathy) nahi hai: *"Caesar ko samajhne ke liye khud Caesar hona zaroori nahi."* Research topic chunte waqt values asar daalti hain (**Value-Relevance**), par data ikattha karte waqt researcher ko **Value-Neutrality** rakh kar *facts* aur *values* alag rakhne chahiye. [[trap:Alvin Gouldner aur Hilary Putnam jaise critics maante hain ki facts aur values poori tarah alag nahi ho sakte, aur doosri culture ko samajhne mein replicability ki dikkat aati hai.]]

### Ideal Types: Tulna ka Scale, Naitik Adarsh Nahi

Asli duniya behad uljhi hui hai, isliye Weber ne ==Ideal Types== banaye—kisi ghatna ke sabse mukhya gunon ko chhaan kar unka ek shuddh (pure) mental model banana. Ise kisi neta ke cartoon (caricature) ya school ke styrofoam solar-system model ki tarah samjho: yeh asli photo nahi hota, na hi "ideal" ka matlab *Adarsh* ya achha hota hai—hum ideal democracy ka bhi ideal type bana sakte hain aur mafia gang ka bhi!

- **History aur Sociology ka Pul:** Itihas ke unique events aur sociology ke broad rules ko jod kar tulna ka scale deta hai—jaise **Historical Particulars** (Western capitalism) aur **Historical Universals** (Bureaucracy, Feudalism).
- **Asli Antar Pakadna:** Pure "Ideal Capitalism" se Bharat ya USA ki asli economy ko naapne par saaf dikhta hai ki sarkari niyam ya monopoly kahan alag hain.

## Social Action, Rationalisation aur Stratification

Weber ke mutabik sociology ==Social Action== ko padhti hai—woh meaningful kaam jo doosron ke vyavahar ko dhyaan mein rakh kar kiya jaaye. Akele kamre mein prarthna ya achanak chheenk aana social action nahi hai, jabki restaurant mein sabhyata se khana ya dost ko aankh maarna social action hai. Weber ne iske chaar types bataye:

- **Zweckrational (Goal-Rational):** Lakshya aur tareeke dono hisab-kitab se chunna—metro vs cab ka time-cost jodna ya UPSC timetable aur SIP nivesh plan karna.
- **Wertrational (Value-Rational):** Kisi naitik ya dharmik mulya ke liye tark ke saath kadam uthana—jaise imaandar IAS ka rishwat thukrana ya sainik ka desh ke liye ladna.
- **Affective Action:** Achanak bhavnaon mein beh kar kaam karna—purane dost ko gale lagana ya road rage mein gussa karna.
- **Traditional Action:** Sadiyon ki aadat se bina soche karna—Diwali par buzurgon ke pair chhuna.

Modern yug mein ==Rationalisation== aur **Disenchantment of the World** tezi se badha hai: jadu-tona aur parampara hat kar hisab-kitab haavi ho gaya. [[eg:Pehle kisan baarish ke liye havan karwata tha, aaj ka kisan borewell ki gehrai, drip irrigation ka ROI aur fasal bima calculate karta hai.]]

Marx ki sirf economic class ke ulte, Weber ki **Theory of Stratification** dikhati hai ki samajik oonch-neech teen alag pillars par tikti hai: **Class** (bazaar aur skill ke hisaab se life chances—jisme middle professionals bhi aate hain, isliye kranti tay nahi), **Status Groups** (*Stand* — samajik izzat, khana-peena aur endogamy, jaise Bharat ki *jaati*), aur **Party** (taqat paane ke liye political sangathan). [[link:Paper 1 Unit 5 aur Paper 2 Unit 4 mein dekho ki Bharat ki jaati Weber ke status closure ko kaise dikhati hai.]]

## Power, Authority, Bureaucracy aur Iron Cage

Weber ne kachchi taqat ya ==Power== (virodh ke bawajood apni baat manwana—jaise bandook dikha kar batua chheenna) ko ==Authority== (jayaz ya legitimate power—jaise traffic police ka chalan kaatna) se alag kiya. Kanooni hona (legality) aur sahi maana jana (legitimacy) alag ho sakte hain: loktantra mein vipakshi sarkar ke tax ko log legitimate maante hain, jabki angrezon ke kanoon legal hokar bhi illegitimate the.

1. **Traditional Authority:** Purani parampara aur vansh par adharit (rajtantra), jo khud parampara ki seemaon se bandhi hoti hai.
2. **Charismatic Authority:** Neta ke anokhe vyaktitva mein bhakton ka bharosa—jaise Mahatma Gandhi ya Dr A.P.J. Abdul Kalam. Kyunki vyakti amar nahi hota, isliye leadership tikane ko **Routinisation of Charisma** zaroori hota hai—traditional gaddi ya kanooni niyamon mein badalna (jaise Gandhi ke vichar Samvidhan ke Directive Principles mein aaye).
3. **Rational-Legal Authority:** Kisi vyakti par nahi balki likhit kanoon aur kursi (office) par tiki satta—jiska sabse pakka roop modern **Bureaucracy** hai.

Weber ki bureaucracy Europe ke industrial capitalism, nation-state aur rationalisation ke itihas se janmi par efficiency ke kaaran poori duniya mein faili. Iske saat mukhya gun hain: **division of labour**, **hierarchy** (top-to-bottom order aur bottom-to-top feedback), **likhit abstract rules**, **impersonal conduct**, **merit-exam recruitment aur seniority promotion**, **full-time salary** aur **office va private sampatti ka poora alag hona**.

Par Weber dare the ki yahi efficiency insaan ko ==Iron Cage of Rationality== mein qaid kar degi—jahan log sirf file numbers aur adhikari *"specialists without spirit"* ban jayenge, aur experts aam mantriyon ko chalaki se ghumayenge (jaise *Yes Minister* / *Ji Mantri Ji* mein). Baad ke scholars ne aur kamiyan batayin: [[thinker:Robert K. Merton]] ne **goal displacement** dikhaya (niyam poora karne ke chakkar mein asli seva bhool jana—jaise 47 sq. metre kam zameen par school rokna); [[thinker:Peter Blau]] ne dikhaya **coffee-machine par informal madad** kaam tez karti hai; [[thinker:Alvin Gouldner]] ne cement factory aur khatarnak limestone mine ki tulna ki; [[thinker:Burns and Stalker]] ne dikhaya tezi se badalte tech market (jaise Nokia) mein rigid bureaucracy fail hoti hai; [[thinker:Warren Bennis]] ne flexible teams (adhocracy) ki bhavishyavani ki; aur Indian studies jaati, gender aur communal biases ujagar karti hain.

## Protestant Ethic aur Spirit of Capitalism

Aakhir modern capitalism—sirf purana Silk Road munafa nahi, balki shanti se lagatar profit kama kar dobara business mein lagana—16th century ke Europe mein hi kyun panpa, jabki Bharat (*Sone ki Chidiya*) aur China ke paas bhi dhan aur abadi thi? Apni 1905 ki kitaab mein Weber ne Marx ko jawab diya ki sirf material haalat kaafi nahi, sahi sanskritik soch bhi chahiye.

Benjamin Franklin (*"Time is money"*) ka udaharan dete hue Weber ne **Calvinist Protestantism** aur capitalism mein ek **elective affinity** dikhayi: **Predestination** ke mutabik kisko swarg milega yeh pehle se tay hai aur koi paadri use badal nahi sakta, jisse logon mein bhari **salvation anxiety** paida hui. Chunav ka ishara paane ke liye har peshe ko Bhagwan ki seva (**Calling / Beruf**) maana gaya, **kaam ko hi pooja** kaha gaya, sood (interest) par dharmik chhoot se banking badhi, aur luxury ya aalsi bheekh par rok lagne se saari kamai wapas **business reinvestment** mein lag gayi!

Iske ulte, Weber ne Hinduism ke *Karma* aur *Moksha* ko other-worldly bataya. Critics ne ispar karara hamla bola: Weber ne Hindu *Purusharthas* (*Dharma, Artha, Kama*) aur Marwari, Bania, Chettiar vyapari jaatiyon ko ignore kiya; [[thinker:Joseph Schumpeter]] ne 14th century ke Catholic Italy (Venice) mein pehle se capitalism dikhaya; [[thinker:Werner Sombart]] ne Jewish vyapar ka zikr kiya; Marxist [[thinker:Karl Kautsky]] ne kaha capitalism pehle aaya aur Protestantism baad mein use justify karne aaya; aur aaj ka capitalism bachat par nahi balki credit-card consumerism par chalta hai!`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1904',
        title: 'Objectivity Essay aur Ideal Types',
        text: 'Facts ko value judgements se alag kiya aur Ideal Types ko tulna ka auzar banaya.',
      },
      {
        year: '1905',
        title: 'The Protestant Ethic & Spirit of Capitalism',
        text: 'Calvinist predestination anxiety, Calling aur ascetic reinvestment ko capitalism se joda.',
      },
      {
        year: '1916–1917',
        title: 'Religions of China & India',
        text: 'Confucianism, Taoism, Hinduism aur Buddhism ki tulna karke aarthik asar dekha.',
      },
      {
        year: '1922',
        title: 'Economy and Society (Maranoprant)',
        text: 'Verstehen, 4 Social Actions, Class-Status-Party, 3 Authorities aur Bureaucracy ko sameta.',
      },
      {
        year: '1954–1966',
        title: 'Gouldner, Blau, Burns & Stalker, Bennis',
        text: 'Empirical research se informal networks, task nature aur rigid hierarchy ki kamiyan dikhayin.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Predestination Chinta', text: 'Koi paadri mukti nahi dila sakta; niyati pehle se tay' },
      { label: 'Calling (Pesha = Pooja)', text: 'Roz ka kaam Ishwar ki seva aur chune jaane ka sanket' },
      { label: 'Sadagi (Asceticism)', text: 'Aish-o-aaram aur aalsi daan par dharmik rok' },
      { label: 'Capital Reinvestment', text: 'Bacha hua munafa wapas factory aur vyapar mein lagta hai' },
      { label: 'Iron Cage Paradox', text: 'Baad mein yahi rational system insaan ko niyamon mein qaid karta hai' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Marx (Class aur Dharm)',
    rightTitle: 'Weber (Stratification aur Dharm)',
    rows: [
      {
        aspect: 'Asamanata ka Aadhar',
        left: 'Ek economic base: means of production par malikana haq ya kami',
        right: 'Teen alag stambh: Class (market), Status (izzat), Party (rajneeti)',
      },
      {
        aspect: 'Capitalism ka Bhavishya',
        left: 'Do vargon mein batkar khooni proletarian kranti hogi',
        right: 'Middle professionals badhenge; par bureaucratic iron cage ghana hoga',
      },
      {
        aspect: 'Kaaran ki Disha',
        left: 'Base superstructure ko shape karta hai; dharm economy ka prateek',
        right: 'Causal pluralism: dharmik vichar bhi aarthik dhancha badal sakte hain',
      },
      {
        aspect: 'Dharm ki Bhoomika',
        left: 'Afeem jo gareeb ko bharosa dekar status quo bachati hai',
        right: 'Meanings aur ethics ka system jo badlaav rok bhi sakta hai aur jaga bhi',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Verstehen (Interpretive Understanding)',
    meaning:
      'Weber ka do-charan method: bahari observation ke baad actor ki paristhiti mein utar kar uske action ka subjective matlab samajhna.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'Ideal Type',
    meaning:
      'Kisi samajik ghatna ke mukhya gunon ko ubhar kar banaya gaya shuddh mental scale—jo tulna mein madad karta hai, na ki naitik adarsh ya real average hai.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'Routinisation of Charisma',
    meaning:
      'Kisi neta ke vyaktigat aur asthayi charisma ka paramparik gaddi ya sthayi rational-legal kanooni vyavastha mein badalna.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'Iron Cage of Rationality',
    meaning:
      'Weber ki chetavani ki zaroorat se zyada bureaucratic niyam aur cold calculation modern insaan ki azaadi aur bhavnaon ko kuchal dete hain.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'max-weber',
    quote: 'Sociology is a science concerning itself with the interpretive understanding of social action and thereby with a causal explanation.',
    context: 'Economy and Society mein subjective meaning aur causal explanation ko jodne wali paribhasha.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2025–2013 PYQ Magnet: Unit 4 mein Weber se 16 Sawaal!',
    body: 'Unit 4 mein sabse zyada PYQs Max Weber par hain: Verstehen & Objectivity (2025, 2019, 2018, 2016), Ideal Types (2020, 2014), Power vs Authority (2024, 2015), Bureaucracy & Iron Cage (2023, 2021, 2013), Stratification (2023, 2021), aur PESC vs Marx/Durkheim (2025, 2024, 2015). Class-Status-Party aur 3-thinker Religion tables pakki kar lo.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Ideal Type ko "Adarsh" ya Weber ko "Pure Idealist" likhna',
    body: 'Kabhi mat likho ki Weber sabko Ideal Type jaisa banne ko kehte the ("ideal" matlab idea se bana model, perfect adarsh nahi!), aur na hi unhe sirf idealist kaho. Unhone Causal Pluralism aur material-plus-cultural elective affinity maani thi.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Weberian Bureaucracy ke 5 Critics (Mnemonic: M-B-G-B-B)',
    body: 'Exam mein yeh 5 naam jhat se yaad rakho: Merton (niyam > goal), Blau (informal coffee chats fast hain), Gouldner (cement plant vs mine), Burns & Stalker (Nokia jaisa tezi se badalta tech environment), aur Bennis (temporary gig adhocracies).',
  },
  {
    kind: 'answerBox',
    intro:
      'Max Weber ne subjective human meanings ki samajh (Verstehen) ko rationalisation, authority aur modern institutions ke comparative study se jod kar sociology ko naya aayam diya.',
    points: [
      'Methodology: Verstehen, Ideal Types, value-relevance/neutrality aur causal pluralism se objectivity aur interpretation ko joda.',
      'Action & stratification: Chaar social actions ke saath Marx ke class ko badha kar Class, Status aur Party ke teen stambh diye.',
      'Authority & bureaucracy: Traditional, Charismatic aur Rational-Legal domination samjhayi, aur hyper-efficient bureaucracy ke Iron Cage se savdhan kiya.',
      'Protestant Ethic: Material haalat ke saath Calvinist Calling aur asceticism ko modern capitalism ka aham catalyst dikhaya.',
      'Santulit mulyankan: Asian vyapar par adhoori samajh aur informal workplace flexibility ke bawajood Weber ka framework state, kaam aur jaati-class par aaj bhi sabse upyogi hai.',
    ],
    conclusion:
      'Algorithmic gig apps se lekar Indian civil services aur jaati-class status politics tak, Weber ki soch Paper 1 aur Paper 2 dono mein char chand lagati hai.',
  },
]

export const topic3Hi: TopicLangContent = {
  summary:
    'Max Weber ne Verstehen, Ideal Types, chaar social actions, Class-Status-Party stratification, teen tarah ki authority, bureaucracy ka Iron Cage aur Protestant Ethic thesis ke zariye interpretive sociology khadi ki.',
  mindMap: topic3MindMapHi,
  sections,
}