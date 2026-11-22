import type { NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1MindMapHi } from './topic-1-mindmaps'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u04-01-marx-durkheim-weber.webp',
    alt: 'Paper 1 Unit 4 poster summarizing Karl Marx historical materialism alienation, Emile Durkheim social facts suicide, and Max Weber verstehen bureaucracy',
    caption:
      'Karl Marx ne modern industrial samaj ko surplus extraction, mazdoor ke algaav (alienation) aur dialectical class struggle ke lens se samjhaya.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 4 Visual 01',
  },
  {
    kind: 'md',
    body: `## Karl Marx kaun the aur Unit 4 unse kyun shuru hota hai?

Aasaan shabdon mein samjho: 19th century ke Manchester ki kisi cotton mill ya aaj ke Tiruppur ki ek garment factory ko socho. Mazdoor din mein baarah ghante mehanga kapda silte hain jisse factory malik crorepati banta hai, par khud un mazdooron ko agle mahine ke kiraaye ki chinta rehti hai. Us zamane ke zyadatar log gareebi ko kismat ya aalsi hone ka nateeja maante the, par [[thinker:Karl Marx]] ne ulta sawaal poochha: hamare kapde, khana aur machines banane ka tareeka chupchaap hamari politics, kanoon, dharm aur parivarik rishton ko kaise control karta hai?

Marx ek economist, historian, journalist aur revolutionary the jinhone ==Conflict Theory== ki mazboot neev rakhi. Functionalists ki tarah samaj ko ek shaant body maanne ke bajaye unhone dikhaya ki har class-divided samaj mein un logon (Haves) aur mehnat bechne walon (Have-Nots) ke beech ek inbuilt takraav chalta rehta hai. [[link:Paper 2 Units 1 aur 6 mein dekho ki A.R. Desai ne yahi Marxist nazariya Bharat ki azaadi aur kisan classes par kaise lagaya.]]

## Historical Materialism: Hegel ke Idealism ko seedha karna

### Hegelian Idealism se Dialectical Materialism tak

Marx ki soch samajhne ke liye pehle unke guru [[thinker:G.W.F. Hegel]] ko samajhna hoga. Hegel maante the ki itihas ==Dialectical Idealism== se aage badhta hai: pehle ek vichar (Thesis) aata hai, fir uska ulta vichar (Antithesis) takrata hai, aur dono se ek naya behtar vichar (Synthesis) nikalta hai—aur zameeni duniya sirf inhi vicharon ki parchhai hai. Baad mein [[thinker:Ludwig Feuerbach]] ne kaha ki insaan ne khud apni khwahishon se Bhagwan ka vichar banaya hai, ulta nahi.

Marx ne Hegel ka dialectics wala formula liya aur Feuerbach ka materialism joda—mashhoor taur par kaha ki unhone Hegel ko sar ke bal se hata kar pairon par khada kar diya. Unki ==Historical Materialism== kehti hai ki vichar aasmaan se nahi tapakte; pehle insaan ko jeene ke liye khana, kapda aur makan paida karna padta hai, aur wahi economic tools aur rishte tay karte hain ki hum kya sochenge.

- **Social Being Determines Consciousness:** South Delhi ke ek laptop-smartphone wale ghar mein pala bacha tech careers aur startups ki soch rakhega, jabki bina bijli wale jangal ke gaon mein pala bacha baarish, kheti aur jungle ke niyamon se apni soch banata hai.
- **Unity and Conflict of Opposites:** Factory malik (profit badhana chahta hai) aur mazdoor (salary badhana chahta hai) ke interests bilkul ulte hain, par dono ek hi factory mein kaam karne ko majboor hain—ise ==Antagonistic Cooperation== kehte hain.
- **Quantity into Quality:** Purani economy ke andar chhote-chhote badlaav jama hote rehte hain jab tak woh achanak ek badi kranti mein na badal jaayein—bilkul waise jaise 100 degree par paani achanak bhaap ban jaata hai.
- **Negation of Negation:** Har naya yug purane yug ki kamiyon ko khatam karke uski acchi technology bacha leta hai—jaise capitalism ne feudalism ko khatam kiya aur socialism capitalism ko negate karega.
- **Praxis:** Sirf kitaabon mein duniya samajhna kaafi nahi; ==Praxis== ka matlab hai sahi theory ko ground par badlaav laane wale action se jodna.

| Pehlu | Hegel ka Dialectical Idealism | Marx ka Historical Materialism |
| --- | --- | --- |
| Itihas ka Asli Engine | Vichar, chetna (consciousness) aur spirit | Material production aur economic contradictions |
| Soch kahan se aati hai? | Vichar material duniya banate hain | Material haalat insaan ki soch banati hai |
| Badlaav kaise hota hai? | Thesis aur Antithesis vicharon ki takkar | Sansadhanon ke liye classes ka sangharsh |
| State ki Bhoomika | Supreme moral reason ka symbol | Ruling class ke fayde bachane ka hathiyaar |

## Mode of Production: Base, Superstructure aur Yug

Har samaj ko zinda rehne ke liye cheezein paida karne ka ek system banana padta hai, jise Marx ==Mode of Production== kehte hain. Ise ek multi-storey building samjho: neeche ki zameen aur neev **Economic Base (Infrastructure)** hai, aur uske upar khade kamre—kanoon, parliament, school, media, dharm aur parivar—**Superstructure** hain jo economy ke hisaab se badalte rehte hain.

**Economic Base** do cheezon se banta hai: **Forces of Production** (zameen, machines, tech, raw material aur insaani mehnat) aur **Relations of Production** (kaun malik hai, kaun manager aur kaun mazdoor). Superstructure do kaam karta hai: pehla, woh economy ki zaroorat ke mutabik institutions dhalta hai; aur doosra, woh ruling class ke fayde wali asamanata ko normal dikha kar status quo bachata hai.

- **Base shapes Superstructure:** Kheti wale Bharat mein zyada haath chahiye the isliye joint family chalti thi, jabki IT aur factory shehron mein mobile nuclear family fit baithati hai; waise hi zamindari kanoon hatne se capitalist farming ka rasta khula.
- **Superstructure legitimises Inequality:** Marx ne dharm ko "janta ka afim" kaha—matlab ek painkiller jo dard kam karke swarg ya pichle janm ke *karma* ki aas deta hai par bimari (exploitation) khatam nahi karta. [[eg:Aaj coaching ke ads aur meritocracy ka nara Patna ya Prayagraj ke berozgar youth ko yeh mehsoos karata hai ki job na milna sirf uski apni kami hai, jabki asli samasya jobless economic growth hai.]]
- **Relative Autonomy:** [[trap:Yeh mat likh dena ki Marx sirf economy ko hi sab kuch maante the!]] [[thinker:Friedrich Engels]] ne saaf kiya ki economy "in the last instance" base tay karti hai, par rajneeti aur vichar bhi wapas economy par asar daalte hain.

### Paanch Western Yug aur Asiatic Mode of Production

Europe ke itihas ko dekhte hue Marx ne paanch yug bataye: barabar wala **Primitive Communism** (na bachat, na private property), **Ancient Slave Society** (kheti se surplus aur Malik–Ghulam), **Feudal Society** (Sardar–Kisan), **Capitalist Society** (Bourgeoisie–Proletariat) aur aane wala **Advanced Communism** (jahan ameer-gareeb aur police-state sab khatam honge).

Jab Marx ne dekha ki angrezon se pehle ka Bharat aur China Europe ke feudalism se match nahi karte, toh unhone ==Asiatic Mode of Production== ka idea diya. Yahan gaon khud mein self-sufficient the (local *lohar*, *julaha* sab gaon mein), zameen par gaon ka samuhik haq tha, aur raja badi sinchai (hydraulic civilisation) aur fauj ke dum par *lagan* vasoolta tha. Upar Delhi mein badshah badalte rahe par Haryana ke Rampura jaise gaon sadiyon tak waise hi rahe, jab tak British raaj ne purani village economy tod kar naya bazaar nahi khola—halanki baad ke itihaskaron ne kaha Bharat mein bhi regional feudalism tha, aur Stalin ne is concept ko ban kar diya.

## Capitalism, Surplus Value aur Commodity Fetishism

Capitalism purane Silk Road vyapar se alag kaise hai? Purane vyapar mein log ek cheez bech kar zaroorat ki doosri cheez kharidte the (C–M–C); capitalism mein malik paisa (M) laga kar machine aur **formally free mazdoor** kharidta hai taaki bazaar mein bech kar zyada paisa (M–C–M') kama sake. Mazdoor kanoonan azaad hai, par pet bharne ke liye use kisi na kisi malik ko apni mehnat bechni hi padti hai.

Marx kehte hain ki kachcha kapda ya machine khud naya daam paida nahi karte—sirf insaani mehnat value badhati hai. [[eg:Maan lo kapda, button aur kiraya 300 rupaye ka hai, mazdoor ko 200 rupaye mazdoori milti hai, aur shirt Bengaluru ke mall mein 1,100 rupaye ki bikti hai—mazdoor ne 800 rupaye ki value jodi par malik 600 rupaye profit yaani Surplus Value rakh leta hai.]]

Isse bhi ajeeb cheez hai ==Commodity Fetishism==. Jaise purane log kisi patthar mein jaadui taqat maante the, aaj log brand aur cheez ke daam ko uski apni jaadui khoobi maan lete hain—75,000 ka phone ya 400 rupaye ki coffee kharidte waqt hum yeh bhool jaate hain ki Congo ke miners aur factory workers ki mehnat ne use banaya hai. Insaanon ke rishte cheezon aur daam ke peeche chhup jaate hain. [[thinker:Georg Lukács]] ne ise ==Reification== (*vastukaran*) kaha: pyar dikhane ke liye diamond ya card, aur bimaar buzurgon ki seva ke liye paid care nurses—[[eg:yahan tak ki metro shehron mein parivarik pyar aur bacchon ki padhai bhi market packages aur tuition contracts mein badalti dikhti hai]].

## Alienation: Capitalism mein Kaam Bojh kyun lagta hai?

Marx ke liye rachnatmak kaam (creative labour) insaan ki asli pehchan ya ==species-essence== (*Homo Faber*) hai. Madhumakhi chhatta aadat se banati hai, par insaan dimaag mein ghar ya software soch kar apne haathon se apni personality duniya mein utarta hai. Capitalism mein kaam khushi ke bajaye majboori ban jaata hai, isliye insaan sirf chutti aur weekend par zinda mehsoos karta hai.

Apni *1844 Manuscripts* mein Marx ne ==Alienation== ke chaar roop bataye:

- **Product se Algaav:** Maruti ya Hero Honda line par bolt kasne wale mazdoor ko na poori gaadi apni lagti hai, na woh use kharid sakta hai; uska banaya product hi malik ko aur taqatwar banata hai.
- **Process se Algaav:** Kaam ki raftar, time aur tareeka manager ya app tay karte hain—karigar ek badi machine ka bejaan purza ban jaata hai.
- **Apne Aap (Self) se Algaav:** Jab kaam mein koi creativity nahi bachti, toh insaan apni asli insaaniyat aur aatmasamman kho deta hai.
- **Baaki Workers aur Samaj se Algaav:** Promotion aur wage tiers (skilled vs contract) ke naam par mazdoor ek doosre ke dushman ban jaate hain aur bahaar har rishta paise se tulne lagta hai. [[eg:Sirf factory mazdoor hi nahi—Bengaluru ke IT engineers jo 10 se 8 ghante screen par tickets band karte hain aur Swiggy riders jo app timer se daudte hain, sab white-collar aur gig alienation jhel rahe hain, aur khud ameer malik bhi bazaar ke andhe dabav ka qaidi rehta hai.]]

## Class Struggle, Consciousness aur Critical Evaluation

"Ab tak ke sabhi samajon ka itihas class struggle ka itihas raha hai." Jab nayi technology aur bazaar purane niyamon mein fit nahi ho paate—jaise shuruati factories ko gaon ke *jajmani* bandhanon se azaad mazdoor nahi milte—tab ubharti hui nayi class aam janta ko saath lekar purani ruling class ko takht se utaar deti hai.

Marx ka anuman tha ki capitalism samaj ko do saaf hisson mein baant dega: **deskilling** se sab workers ek jaise ho jayenge, badi companies chhote **petit bourgeoisie** (jaise chhoti coaching ya kirana dukaan) ko nigal lengi, badi factories mein ekta badhegi, aur **relative pauperisation** se ameer aur gareeb ki khaai aur gehri hogi. Dheere-dheere **False Consciousness** (media aur ads ka jaal) tootega, aur mazdoor **Class-in-Itself** se jaagrook **Class-for-Itself** ban kar socialist kranti (Dictatorship of the Proletariat) ke baad classless, stateless communism layenge ("Har kisi se kshamta ke mutabik, har kisi ko zaroorat ke mutabik").

Lekin baad ke itihas ne badi aalochanaayein bhi khadi kin: [[thinker:Max Weber]] ne dikhaya ki dharmik vichar aur culture bhi economy ko badalte hain; [[thinker:Ralf Dahrendorf]] ne dikhaya ki workers mein bhi alag layers (decomposition of labour) aur ek bada middle class ubhar aaya; [[thinker:Frederick Taylor]] aur Henry Ford ne dikhaya ki productivity badhne se malik aur mazdoor dono ka fayda ho sakta hai; [[thinker:Raymond Aron]] ne kaha Marxism intellectuals ka afim ban gaya; aur feminists ne gender exploitation ki andekhi par sawaal uthaya. Phir bhi, [[thinker:Robert K. Merton]] ne kaha ki Marxism ek ==Self-Defeating Prophecy== sabit hua—Marx ki kranti ki chetavani se dar kar hi Western deshon ne welfare laws, unions aur minimum wages laakar capitalism ko sudhara! Aur aaj Oxfam ke amiri-gareebi aakde aur 2008 jaise corporate bailouts Marx ki theory ko zinda rakhte hain.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1844',
        title: 'Economic & Philosophic Manuscripts',
        text: 'Alienation ke chaar aayam aur manav species-essence (Homo Faber) par buniyadi lekh (1932 mein chhapa).',
      },
      {
        year: '1845–1846',
        title: 'The German Ideology (Engels ke saath)',
        text: 'Historical Materialism ka siddhant: zinda rehne ka production vicharon se pehle aata hai.',
      },
      {
        year: '1848',
        title: 'The Communist Manifesto',
        text: 'Itihas ko class struggle bataya aur Class-in-Itself se Class-for-Itself ka rasta dikhaya.',
      },
      {
        year: '1859',
        title: 'Critique of Political Economy',
        text: 'Economic Base aur Superstructure ka classic model aur base contradictions samjhaye.',
      },
      {
        year: '1867',
        title: 'Das Kapital (Volume I)',
        text: 'M-C-M prime cycle, surplus value ke zariye shoshan aur commodity fetishism khola.',
      },
      {
        year: '1989–1991',
        title: 'USSR Collapse aur Nai Bahas',
        text: 'Fukuyama aur Aron ki aalochana ke baad 2008 sankat aur Oxfam aakdon se Marx fir charcha mein aaye.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Nayi Technology', text: 'Productive forces purane feudal ya capitalist rules se aage nikalte hain' },
      { label: 'Base Takraav', text: 'Owners aur workers ke beech antagonistic cooperation tez hota hai' },
      { label: 'Class Polarisation', text: 'Deskilling, chhote vyapar ka khatma aur relative gareebi badhna' },
      { label: 'True Consciousness', text: 'Class-in-Itself jhooti ideology tod kar Class-for-Itself banta hai' },
      { label: 'Praxis & Badlaav', text: 'Socialism purane dhanchon ko hata kar classless order ki taraf badhta hai' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Marx ka Alienation',
    rightTitle: 'Durkheim ka Anomie',
    rows: [
      {
        aspect: 'Asli Wajah',
        left: 'Private property, surplus value ki loot aur capitalist relations',
        right: 'Tez badlaav ke daur mein moral rules ka kamzor padna',
      },
      {
        aspect: 'Division of Labour',
        left: 'Capitalism mein deskilling aur insaan ko machine banane ka zariya',
        right: 'Organic solidarity badhata hai; takraav sirf abnormal aur asthayi hai',
      },
      {
        aspect: 'Vyakti par Asar',
        left: 'Laachari, kaam se nafrat, apne aap aur saathiyon se kataav',
        right: 'Dishaheenta (normlessness), belagaam lalach aur bechaini',
      },
      {
        aspect: 'Samadhan',
        left: 'Revolution se private property khatam karke communism laana',
        right: 'Professional ethics, formal contracts aur state ke welfare niyam',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Historical Materialism',
    meaning:
      'Marx ka woh materialist method jo itihas ke har yug ko technology (forces of production), economic rishton (relations) aur class takraav se samjhata hai.',
    thinkerSlug: 'karl-marx',
  },
  {
    kind: 'keyTerm',
    term: 'Commodity Fetishism & Reification',
    meaning:
      'Bazaar ki cheezon ke daam ko unki apni jaadui taqat maan kar peeche ki insaani mehnat bhool jana; Lukács ne ise rishton ka vastukaran (reification) kaha.',
    thinkerSlug: 'karl-marx',
  },
  {
    kind: 'keyTerm',
    term: 'Alienation (Chaar Aayam)',
    meaning:
      'Capitalism mein mazdoor ka apne banaye product, kaam ke tareeke (process), apni creative nature (self) aur baaki saathiyon se kat jana.',
    thinkerSlug: 'karl-marx',
  },
  {
    kind: 'keyTerm',
    term: 'Class-in-Itself vs Class-for-Itself',
    meaning:
      'Ek jaisi gareebi mein bikhre mazdooron (Class-in-Itself) ka true consciousness paakar ekjut sangharsh karne wali taqat (Class-for-Itself) mein badalna.',
    thinkerSlug: 'karl-marx',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'It is not the consciousness of men that determines their being, but their social being that determines their consciousness.',
    context: 'Historical Materialism ka mool sutra jo Hegel ke idealism ko palat deta hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2025–2013 PYQ Pattern: Relevance + Comparative Angles',
    body: 'UPSC baar-baar poochhta hai ki Historical Materialism aur Alienation aaj ke samaj par kitne fit baithte hain (2025, 2024, 2023, 2018) aur Marx ki tulna Durkheim (Division of Labour/Anomie: 2013, 2014) ya Hegel (2017) se karwata hai. Hamesha IT/gig-economy examples, Oxfam stats aur Merton ki Self-Defeating Prophecy zaroor jodo.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Pure Economic Determinism aur Absolute Gareebi',
    body: 'Kabhi mat likho ki Marx ke mutabik economy hi har kavita ya kanoon seedhe likhti hai, ya mazdoor ki kamai hamesha kam hoti jaati hai. Saaf karo ki Engels ne superstructure ki relative autonomy ("in the last instance") maani aur Marx ne relative pauperisation (ameer-gareeb ke beech badhte antar) ki baat ki thi.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Alienation (P-P-S-F) aur Polarisation (D-S-C-P) Mnemonic',
    body: 'Alienation ke 4 aayam yaad rakhne ke liye P-P-S-F bolo: Product, Process, Self (species-essence), Fellow workers. Polarisation ke 4 steps ke liye D-S-C-P: Deskilling, Sinking petit bourgeoisie, Concentration in big firms, Pauperisation (relative).',
  },
  {
    kind: 'answerBox',
    intro:
      'Karl Marx ne Historical Materialism ke zariye dikhaya ki samaj ki institutions aur soch kisi aasmani vichar se nahi, balki material production aur class struggle se aage badhte hain.',
    points: [
      'Dialectical base: Hegel ko palat kar Marx ne siddh kiya ki productive forces aur relations of production ki takkar itihas ke yug badalti hai.',
      'Surplus aur fetishism: M-C-M prime vyavastha mein mazdoor ki unpaid mehnat profit banti hai aur commodity fetishism insaani rishton ko price tag mein chhupa deta hai.',
      'Chaar star ka alienation: Factory line se lekar IT cubicles aur gig apps tak kaam insaan ki creativity chheen kar use akela aur bejaan purza banata hai.',
      'Aalochana aur sudhar: Weber ke cultural ideas, middle-class expansion aur welfare capitalism (Merton ki self-defeating prophecy) ne bloody kranti ko roka.',
      'Aaj ki relevance: Corporate concentration, platform precarity aur badhti aarthik asamanata Marx ke vishleshan ko aaj bhi behad zaroori banati hai.',
    ],
    conclusion:
      'Bhale hi unki har bhavishyavani poori na hui ho, par shoshan, algaav aur bazarikaran par Marx ki pakad aaj bhi sociology ka ek mazboot stambh hai.',
  },
]

export const topic1Hi: TopicLangContent = {
  summary:
    'Karl Marx ne Hegel ke idealism ko palat kar Historical Materialism diya, jisme economic mode of production, surplus value, chaar aayam ka alienation aur class struggle samaj badalne ke asli engine hain.',
  mindMap: topic1MindMapHi,
  sections,
}