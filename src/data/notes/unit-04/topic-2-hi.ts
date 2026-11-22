import type { NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2MindMapHi } from './topic-2-mindmaps'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u04-01-marx-durkheim-weber.webp',
    alt: 'Paper 1 Unit 4 poster summarizing Karl Marx historical materialism alienation, Emile Durkheim social facts suicide, and Max Weber verstehen bureaucracy',
    caption:
      'Émile Durkheim ne dikhaya ki samaj sirf logon ki bheed nahi, balki social facts, division of labour, suicide rates aur sacred rituals se judi ek naitik shakti hai.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 4 Visual 01',
  },
  {
    kind: 'md',
    body: `## Durkheim ne kyun kaha ki Samaj akeli acts ke jod se bada hai?

Aasaan shabdon mein samjho: apne kitchen ka namak ya paani dekho. Sodium hawa mein jal jaata hai aur chlorine ek zehreeli gas hai, par dono ke milne se khane wala safe namak banta hai; waise hi hydrogen aur oxygen milkar aag bujhane wala paani (H2O) banate hain. [[thinker:Émile Durkheim]] ne yahi niyam insaani samaj par lagaya: jab laakhon log sadiyon tak saath rehte aur interact karte hain, toh ek nayi independent taqat paida hoti hai jise ==sui generis== kehte hain—aur jise kisi ek insaan ke dimaag ya mood se nahi samjhaya ja sakta.

Durkheim insaan ko ==Homo Duplex== maante the: ek hissa swarthi ichhaon se bhara hai, aur doosra hissa samaj ke naitik niyamon se bandha hai. France ki kranti aur industrialisation ke baad samaj ko tootne se bachane aur sociology ko psychology se alag ek azaad science banane ke liye unhone dikhaya ki samaj ke rule hamari private soch se upar aur takatwar hote hain.

## Social Facts aur Positivist Sociological Method

Sociology ka apna alag domain saabit karne ke liye Durkheim ne ==Social Facts== ko define kiya: sochne, mehsoos karne aur kaam karne ke woh samuhik tareeke jo kisi ek insaan ke bahar maujood hain aur us par dabav (coercion) daalte hain. Hindi ya English bhasha, rupaye ke note ya shaadi ki rasmein aapne nahi banayin—yeh aapke janm se pehle thin, aapke baad bhi rahengi, aur inhe todne par samaj taane ya kanoon se rokega.

Har social fact mein chaar khoobiyan hoti hain: **Externality** (vyakti ke bahar), **Independence** (kisi ek ki marzi par nirbhar nahi), **Constraint** (kanoon ya badnaami ka dabav) aur **Generality** (poore samaj mein faila hona). Inhe **Material social facts** (buildings, kanoon, technology) aur **Non-material social facts** (norms, values aur ==Collective Conscience==) mein baanta jaata hai.

*The Rules of Sociological Method* (1895) mein unhone research ke sakht niyam diye—aur ek chaunkane wali baat kahi ki thoda **crime bhi normal aur functional hai**, kyunki saza milne se samaj ke niyam taaza hote hain aur Socrates jaise baaghi naye sudhar laate hain; khatra tab hai jab crime had se zyada badh jaaye.

- **Things ki tarah dekho:** Norms aur aakdon ko bina bhavuk hue object ki tarah mapo aur apni purani common sense ko alag rakho.
- **Comparative Method:** Poore desh par lab experiment nahi ho sakta, isliye alag-alag groups ke data ki tulna karke kaaran khojo.
- **Teleology aur Psychology se bacho:** Kisi parampara ke aaj ke fayde ko uske janm ka kaaran mat samjho, aur ek social fact ki wajah hamesha pichle social fact mein khojo—genes ya mausam mein nahi.
- **Observation ki Musibatein (2020 PYQ):** [[trap:Non-material beliefs ko "things" ki tarah naapna aasan nahi hai!]] Vishwas aur dukh tula par nahi tul sakte; survey poochhne se log jawab badal dete hain; police aakdon mein stigma chhupa rehta hai; aur [[thinker:Max Weber]] ne kaha ki bina insaan ka matlab samjhe (Verstehen) data adhoora hai.

## Division of Labour: Mechanical se Organic Solidarity tak

Durkheim ki 1893 ki PhD thesis *The Division of Labour in Society* se pehle [[thinker:Adam Smith]] jaise economists kaam ke batware ko sirf zyada maal aur munafe ke nazar se dekhte the. Durkheim ne asli sawaal uthaya: jab modern samaj har insaan ko azaad aur self-centered banata hai, toh Delhi ya Mumbai jaise bade shehar bikharte kyun nahi?

Unka jawab tha badhti **Dynamic Density**: jaise-jaise abadi (**volume**), bheed-bhaad (**material density**) aur aapas ki interaction (**moral density**) badhti hai—Odisha ke chhote gaon se bade metro tak—log ek hi 20 dhandhon mein ladne ke bajaye hazaron specialised kaam baant lete hain. Isi se **Organic Solidarity** aati hai: aaj ek teacher har subah kisan, metro driver, bijli karmchari aur internet engineer par nirbhar rehta hai.

| Pehlu | Mechanical Solidarity (Purana Samaj) | Organic Solidarity (Modern Samaj) |
| --- | --- | --- |
| Ekta ka Aadhar | Ek jaisa rehna, ek reeti-riwaz aur vichar | Specialised kaam ke zariye aapsi nirbharta |
| Collective Conscience | Bahut mazboot, dharmik, vyakti ko dabane wala | Kamzor aur secular, individual choice ko jagah |
| Kanoon ka Roop | Repressive law (kathor saza aur badla) | Restitutive law (civil sudhar aur muavza) |
| Kaam ka Batwara | Janm se tay: jaati, parivar, umar, ling | Merit, degree, skill aur pasand ke aadhar par |

Lekin gaon se modern shehar ka safar seedha nahi hota. Jab purane niyam toot jaayein aur naye rules abhi na bane hon, toh beech mein asthayi ==Anomie== (dishaheenta) aati hai. [[eg:Badalte Bharat mein ek IAS officer par bhai-bhatije ki madad karne ke parivarik niyam aur nishpaksh kanoon ke beech takraav aata hai, ya youth social media ke naye rishton mein ulajh jaate hain.]] Durkheim ne teen **Abnormal Forms** bhi bataye—**Anomic DOL** (bina niyam ke mazdoor-malik takraav), **Forced DOL** (gareebi ya jaati se kabil insaan ka rickshaw chalana) aur **Inadequate coordination** (kaam ka galat batwara)—aur samadhan mein **professional guilds** (MCI, Bar Council), **written contracts** aur **state ke barabar maukon wale kanoon** sujhaye. [[link:Iski tulna Unit 4.1 mein Marx ke Alienation aur Unit 6 mein Foxconn ya gig workers ki hartalon se karo.]]

## Suicide ek Social Fact ke roop mein (*Le Suicide*, 1897)

Kya khudkushi se zyada niji ya psychological koi aur baat ho sakti hai? Europe ke kai dashakon ke police records dekh kar Durkheim ne dikhaya ki har desh ka **suicide rate** saalon tak lagbhag sthir rehta hai aur groups ke hisaab se badalta hai—yaani yeh rate ek ==social fact== hai jo samaj ke **Social Integration** (judav) aur **Moral Regulation** (niyamon ki lagam) se tay hota hai.

- **Egoistic Suicide (Kam Integration):** Parivar ya community se judaav tootne par musibat mein koi sahara nahi rehta—isliye unmarried logon, akele shahari logon aur zyada individualistic Protestants mein rates adhik dikhe.
- **Altruistic Suicide (Zaroorat se Zyada Integration):** Jahan samaj ya group ki izzat jaan se badi ho jaaye—jaise purane *Sati*, Rajput *Jauhar*, Jain *Sallekhana*, yuddh mein sainikon ka balidan aur suicide bombers.
- **Anomic Suicide (Kam Regulation):** Achanak aarthik mandi ya tezi naitik lagam tod kar ichhaon ko belagaam kar deti hai. [[eg:Bharat mein kheti-baazar ke jhatkon aur karz se kisanon ki khudkushi, ya Kota ke coaching hubs mein dabav aur dishaheenta se students ki pareshani isi ko dikhati hai.]]
- **Fatalistic Suicide (Ati Regulation):** Jab kathor niyamon se azaadi ki har umeed ghut jaaye—jaise qaidi, ghulam ya sahukaron ke dabav mein dabe majboor log.

Baad mein aalochakon ne badi kamiyan nikaalin: [[thinker:Jack Douglas]] ne dikhaya ki Catholic parivar badnaami se bachne ke liye suicide ko accident likhwa dete the; **attempted suicides** mahilaon mein zyada hote hain par mard ghatak tareekon se zyada marte hain (jo Durkheim ki gender theory ko hilata hai); aur poore ilake ke data se kisi ek insaan par nateeja nikalna **Ecological Fallacy** kehlata hai.

## Dharm, Sacred–Profane aur Civic Religion

*The Elementary Forms of Religious Life* (1912) mein Durkheim ne dharm ki paribhasha mein "Bhagwan" shabd hataya taaki Buddhism jaise non-theistic dharm bhi shamil ho sakein: dharm ==sacred things== (alag aur pavitra maani gayi cheezein) se jude vishwason aur rituals ka system hai jo logon ko ek moral community ("Church") mein jodta hai. Har samaj duniya ko pavitra **Sacred** aur aam **Profane** mein baantta hai, aur rituals se cheezein ek se doosre mein badalti hain: [[eg:aam nal ka paani profane hai, par Haridwar se laya Ganga jal alag loti mein sacred ban jaata hai; mitti ki Ganesh murti puja ke waqt sacred hoti hai aur visarjan ke baad fir profane]].

Australia ki **Arunta** janjati ki secondary reports padh kar Durkheim ne dekha ki har exogamous clan apne paudhe ya janwar ke **Totem** ko lakdi ki *churinga* par banakar poojta hai. Kyunki totem clan ka hi prateek hai, isliye ==samaj asal mein khud apni pooja karta hai== ("Bhagwan samaj ka hi divinized roop hai"). Samuhik rituals se ==Collective Effervescence== yaani ek saath josh aur ekta ki lehar paida hoti hai—chahe Vaishno Devi ki yatra ho, *azan* ho ya stadium mein "India! India!" ke naare—jo naitikta, vinamrata, dukh mein sahara aur ekta deti hai.

Modern duniya ke liye Durkheim ne kaha ki secularisation dharm ko mitata nahi, balki purane dharmik sacreds ki jagah Tiranga, Rashtragan aur **Constitutional Morality** ek naya ==Civic Religion== (jise baad mein [[thinker:Robert Bellah]] ne aage badhaya) banakar vividh Bharat ko jodte hain. Lekin critics ne unpar "armchair sociologist" hone, kitab-copy ko vidya maanne wale Bharat mein sacred–profane ki deewar ko zyada kathor banane, dharmik dangon ko bhoolne, aur [[thinker:B.R. Ambedkar]] (jaati-asprishyata ka dharmik samarthan) va [[thinker:Kamla Bhasin]] / [[thinker:Karen Armstrong]] (pitrisatta) ke sawalon ko nazarandaz karne ki aalochana ki.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1893',
        title: 'The Division of Labour in Society',
        text: 'Mechanical vs Organic solidarity, dynamic density, law ke prakar aur abnormal forms samjhaye.',
      },
      {
        year: '1895',
        title: 'The Rules of Sociological Method',
        text: 'Social facts ko external coercive things maan kar normal aur pathological ki pehchan di.',
      },
      {
        year: '1897',
        title: 'Le Suicide (Empirical Study)',
        text: 'Integration aur regulation ke aadhar par Egoistic, Altruistic, Anomic aur Fatalistic suicide bataye.',
      },
      {
        year: '1898',
        title: 'L’Année Sociologique Journal',
        text: 'Europe ka pehla pramukh sociology journal aur French sociological school shuru kiya.',
      },
      {
        year: '1912',
        title: 'Elementary Forms of Religious Life',
        text: 'Arunta totemism se Sacred–Profane, collective effervescence aur society-as-God siddh kiya.',
      },
      {
        year: '1967',
        title: 'Robert Bellah aur Jack Douglas',
        text: 'Bellah ne Civil Religion ko aage badhaya aur Douglas ne official suicide stats par sawaal uthaye.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Dynamic Density Badhe', text: 'Abadi, bheed aur aapsi mel-jol mein tezi aati hai' },
      { label: 'Specialisation', text: 'Competition sambhalne ke liye hazaron naye kaam bante hain' },
      { label: 'Transitional Anomie', text: 'Purane niyam tootne aur naye banne ke beech uljhan' },
      { label: 'Organic Solidarity', text: 'Aapsi nirbharta aur civil kanoon samaj ko jodte hain' },
      { label: 'Naitik Sahara', text: 'Occupational guilds aur civic religion lalach par lagam lagate hain' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'The Sacred (Pavitra)',
    rightTitle: 'The Profane (Aam)',
    rows: [
      {
        aspect: 'Mool Swaroop',
        left: 'Alag rakha hua, varjit, shraddha aur izzat ke layak',
        right: 'Rozmarra, sadharan, practical upyog wali cheezein',
      },
      {
        aspect: 'Vyavahar ke Niyam',
        left: 'Kathor shuddhata ke niyam (joota utarna, snan)',
        right: 'Bina kisi vishesh ritual ke aam istemal aur len-den',
      },
      {
        aspect: 'Indian Udaharan',
        left: 'Ganga jal, kalava/moli, Tiranga, Samvidhan',
        right: 'Nal ka paani, aam dhaaga, store room, jeb kharch',
      },
      {
        aspect: 'Naitik Bhaav',
        left: 'Darr ya bhakti dono (jaise Shani Maharaj), hamesha shaktishali',
        right: 'Bura ya paapi nahi—sirf sadharan aur upyogi',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Social Facts',
    meaning:
      'Sochne, mehsoos karne aur kaam karne ke woh samuhik tareeke jo vyakti ke bahar maujood hokar us par naitik aur kanooni dabav daalte hain.',
    thinkerSlug: 'emile-durkheim',
  },
  {
    kind: 'keyTerm',
    term: 'Organic Solidarity & Dynamic Density',
    meaning:
      'Abadi, bheed aur interaction badhne par paida hui aapsi nirbharta par tiki modern ekta, jisme alag-alag specialised kaam ek doosre ko poora karte hain.',
    thinkerSlug: 'emile-durkheim',
  },
  {
    kind: 'keyTerm',
    term: 'Fourfold Suicide Typology',
    meaning:
      'Social Integration (kam = Egoistic, zyada = Altruistic) aur Moral Regulation (kam = Anomic, zyada = Fatalistic) ke hisaab se suicide ke 4 prakar.',
    thinkerSlug: 'emile-durkheim',
  },
  {
    kind: 'keyTerm',
    term: 'Sacred, Profane & Collective Effervescence',
    meaning:
      'Duniya ka pavitra (Sacred) aur aam (Profane) mein batwara; samuhik utsavon se paida woh josh jo vyakti ko poori community se jodta hai.',
    thinkerSlug: 'emile-durkheim',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'emile-durkheim',
    quote: 'The first and most fundamental rule is: Consider social facts as things.',
    context: 'Sociology ko bhavuk andazon se nikaal kar empirical science banane ka buniyadi niyam (1895).',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2024–2013 PYQ Focus: Indian Examples + Methodological Critique',
    body: 'UPSC baar-baar Durkheim ko Bharat se jodne ko kehta hai: Kota ya kisan suicides (2018, 2024), aaj ka division of labour (2021), aur religious revivalism vs civic religion (2020, 2022). Hamesha unki taqat ke saath ecological fallacy, Jack Douglas, Ambedkar aur feminist aalochana bhi likho.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: "Modern Samaj mein Dharm Mit Jayega" ya "Crime Hamesha Bura Hai"',
    body: 'Kabhi mat likho ki Durkheim ne kaha dharm bilkul khatam ho jayega ya har crime samaj ke liye bura hai. Unhone saaf kaha dharm civic religion ke roop mein zinda rehta hai aur thoda crime normal hai jo moral boundaries yaad dilakar badlaav laata hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Suicide 2×2 Matrix (Integration × Regulation)',
    body: 'Exam rough page par 2×2 chart banao: Integration Kam = Egoistic (akelapan), Zyada = Altruistic (Sati/sainik); Regulation Kam = Anomic (crash/boom/Kota), Zyada = Fatalistic (jail/sahukar karz).',
  },
  {
    kind: 'answerBox',
    intro:
      'Émile Durkheim ne dikhaya ki naitik samajik dhanche hamare niji faislon par bhi gehra asar daalte hain, aur isi aadhar par sociology ko ek azaad positivist science banaya.',
    points: [
      'Social facts & method: Vyakti se bahar aur dabav daalne wale collective patterns ko "things" ki tarah padhna, bina psychological reductionism ke.',
      'Solidarity badlaav: Dynamic density se mechanical ekta organic nirbharta mein badalti hai, halanki tez badlaav mein anomic aur forced DOL ubharte hain.',
      'Suicide rates: Yeh niji dukh ke alawa integration (Egoistic/Altruistic) aur regulation (Anomic/Fatalistic) ke asantulan ka parinaam hain.',
      'Sacred aur samaj: Arunta totemism ke zariye siddh kiya ki God samaj ka hi divinized roop hai, jo aaj civic religion mein dikhta hai.',
      'Critical balance: Ecological fallacy, statistical cover-ups aur dharmik-pitrisattatmak shoshan ki kamiyon ke bawajood unka structural nazariya aaj bhi moolyawan hai.',
    ],
    conclusion:
      'Aaj ke hyper-specialised kaam, digital akelapan aur youth-kisan sankat ko samajhne mein Durkheim ki social cohesion ki soch aaj bhi behad upyogi hai.',
  },
]

export const topic2Hi: TopicLangContent = {
  summary:
    'Émile Durkheim ne samaj ko ek sui generis moral shakti maana jo social facts se chalti hai, aur mechanical se organic solidarity, suicide ke 4 prakar tatha sacred–profane ke zariye samajik ekta samjhayi.',
  mindMap: topic2MindMapHi,
  sections,
}