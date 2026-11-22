import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

const mindMap: MindMapData = {
  title: 'Unit 1.3 · Sociology, Common Sense aur C.W. Mills',
  center: 'Common Sense vs Sociology',
  subtitle: 'Prenotions Todo • Rozmarra ke Meanings Padho • Biography ko History se Jodo',
  branches: [
    {
      title: 'Common Sense Kya Hai?',
      color: 'lavender',
      thinkers: ['Antonio Gramsci', 'Clifford Geertz', 'André Béteille'],
      points: [
        'Socialisation aur aadat se mila bina jaanch ka everyday gyaan',
        'Tested proof ke bajaye local anecdotes aur suni-sunai baaton par tika',
        'Har haalat ke liye ulte-pulte proverbs bana kar bina test ke sach maanta hai',
        'Caste, gender aur gareebi ko biology ya kismat bata kar normal dikhata hai',
      ],
    },
    {
      title: 'Divergence Wale Thinkers',
      color: 'yellow',
      thinkers: ['Émile Durkheim', 'Peter Berger', 'Antonio Gramsci', 'André Béteille'],
      points: [
        'Durkheim: prenotions chhodo; social facts ko cheezon ki tarah study karo',
        'Peter Berger: debunking motif official parde ke peeche chhupa sach dikhata hai',
        'Gramsci: cultural hegemony dominant class ke vicharon ko natural common sense banati hai',
        'Béteille: sociology comparative aur empirical hai, local opinion nahi',
      ],
    },
    {
      title: 'Convergence aur Bridge Thinkers',
      color: 'mint',
      thinkers: ['Alfred Schutz', 'Harold Garfinkel', 'André Béteille', 'Anthony Giddens'],
      points: [
        'Schutz: lifeworld aur typifications ke zariye log roz ka order chalate hain',
        'Garfinkel: breaching experiments chhupe rozmarra niyam saamne laate hain',
        'Béteille warn karte hain ki aam logon ki samajh ko poora bekaar mat maano',
        'Giddens Double Hermeneutic: sociological shabd aam bolchaal mein laut aate hain',
      ],
    },
    {
      title: 'C.W. Mills: Sociological Imagination',
      color: 'pink',
      thinkers: ['C. Wright Mills', 'Robert K. Merton', 'Erving Goffman'],
      points: [
        'Personal Biography + Social Structure + History ko ek saath dekhne ki drishti',
        'Aarav ka Delhi Metro delay: private gussa urban planning aur class se judta hai',
        'Youth unemployment: akele ki naakaami nahi, structural public issue hai',
        'Merton: latent functions surface ke peeche chhupe asli asar dikhate hain',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u1-01-sociological-imagination.webp',
    alt: 'Aarav complaining about delayed Delhi Metro versus a sociologist linking personal trouble to infrastructure, class, gender and history',
    caption: 'Aarav ki Metro complaint ek "personal irritation" lagti hai — sociological imagination use urban infrastructure, crowding, class, gender aur history se jodti hai.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 1 Visual 01',
  },
  {
    kind: 'md',
    body: `## Common Sense Asal Mein Kya Hai — aur Sociology Use Sawaal Kyun Karti Hai?

Subah uthne se lekar raat sone tak hum bina kisi textbook ko khole jis gyaan ke bharose faisle lete hain, wahi ==Common Sense== hai. Yeh woh unwritten cultural habits, kahawatein aur mental shortcuts hain jo humein parivar aur aas-paas ke mahaul se milte hain, taaki roz ki zindagi aasaani se chal sake — jaise line mein kaise khade hona hai ya kis rishtedaar se kaise baat karni hai. Lekin dikkat tab aati hai jab hum in daily shortcuts ko hi poora sach maan lete hain, kyunki common sense tested data par nahi balki adhooray personal experiences aur suni-sunai baaton par tika hota hai. Isliye sociology ki zaroorat padti hai taaki hum *"sab aisa hi maante hain"* wale bharam se bahar nikal kar samaj ki asli banawat ko evidence ke saath parakh sakein.

Jab aap common sense ko thoda kareeb se dekhte hain, toh usmein chaar badi kamzoriyan saaf dikhti hain:
- **Contradictory Logic:** Common sense ek hi baat par do bilkul ulte proverbs de deta hai — ek din kehta hai *"Door ke dhol suhane"* aur agle din *"Ghar ki murgi daal barabar"*, par yeh test nahi karta ki sach kab aur kahan laagu hota hai.
- **Anecdotal & Local Bias:** Do padosiyon ya ek rishtedaar ke anubhav ko dekh kar poore samuday, shehar ya gender ke baare mein pakka niyam bana lena.
- **Naturalising Inequality:** [[trap:"Ladkiyan leadership ya maths ke liye nahi bani", "Gareeb log mehnat nahi karna chahte" ya "Shehron mein caste khatam ho gayi hai" — aisi baatein samajik rukawaton ko biology ya kismat bata kar chhupa deti hain.]]
- **Psychological Reductionism:** Kisanon ki aatmahatya ya students ke burnout ko sirf unke kamzor mann ki galti maan lena, jabki asli wajah peeche khadi karz vyavastha, berozgaari aur market pressure hoti hai.

## Thinkers of Divergence: Sociology ko Common Sense Todna Kyun Zaroori Hai?

Thinkers ka ek bada group maanta hai ki jab tak hum rozmarra ki chalti-phirti soch se ek saaf break nahi lenge, tab tak sociology ek objective science nahi ban sakti. Kyunki hum khud usi samaj ke andar bade hote hain, isliye hamari apni aadatein aur purani maanyatayein aankhon par dhundh ki tarah chha jaati hain aur humein bhedbhav bhi "natural" lagne lagta hai. Isliye in thinkers ka kehna hai ki sociologist ko pehle aam bharam todna hoga, dikhawe ke peeche jhaankna hoga, aur dekhna hoga ki kis takatwar group ko kisi idea ke "common sense" ban jaane se fayda hota hai.

- **[[thinker:Émile Durkheim]] — Prenotions ko Alag Rakhna:** *The Rules of Sociological Method* (1895) mein Durkheim ne kaha ki researcher ko sabse pehle apne ==prenotions== — yaani bina jaanche dimaag mein baithe hue common-sense vichar — side mein rakhne honge. Apni mashhoor kitab *Suicide* (1897) mein unhone aam soch ko galat sabit kiya jo aatmahatya ko sirf niji dukh maanti thi; data ke zariye unhone dikhaya ki Protestants aur unmarried logon mein suicide rate zyada tha, yaani yeh kadam bhi ==social integration aur regulation== se chalta hai.
- **[[thinker:Peter Berger]] — The Debunking Motif:** *Invitation to Sociology* (1963) mein Berger ne kaha ki sociology ka asli swabhaav ==debunking motif== hai — yaani samaj ke official, seedhe-saade dikhne wale parde ke peeche chhupa asli sach ujaagar karna. Jahan common sense school ko sirf merit aur shiksha ka mandir maanta hai, wahin sociology uske andar chhupe class privilege aur hidden hierarchy ko dikhati hai.
- **[[thinker:Antonio Gramsci]] — Cultural Hegemony aur Common Sense:** Gramsci ne common sense ko *"folklore of philosophy"* kaha — bikhra hua, bina soche-samjhe apnaya gaya gyaan jo purane dhanche ko hamesha se chala aa raha sach dikhata hai. ==Cultural hegemony== ke zariye dominant class schools, media aur dharmik paramparaon se apne fayde wale vicharon ko is tarah pesh karti hai ki aam aadmi ko wahi asmaanata "natural insaani niyam" lagne lagti hai aur woh bina kisi zabardasti ke use maan leta hai.
- **[[thinker:André Béteille]] — Method aur Scope ka Farq:** Béteille samjhate hain ki common sense localized aur ek khaas community ke anubhav tak seemit hota hai, jabki sociology comparative hai, doosre samajon se tulna karti hai aur empirical evidence se har daave ko check karti hai.

## Thinkers of Convergence aur Bridge: Phir Bhi Common Sense Kyun Zaroori Hai?

Doosri taraf, kayi bade thinkers aur khud Indian sociologists warn karte hain ki agar humne common sense ko poori tarah kachra samajh kar phenk diya, toh hum insaani samaj ko samajh hi nahi payenge. Aakhir insaan patthar ya atoms nahi hain — insaan wahi kaam karte hain jo unke common-sense meanings aur vishwas ke hisaab se sahi lagta hai. Isliye sociology common sense se dushmani nahi karti, balki use research ka shuruati clue banati hai, logon ki rozmarra samajh ko data ki tarah padhti hai, aur badle mein naye vicharon se aam samaj ki soch ko bhi upgrade karti hai.

- **[[thinker:Alfred Schutz]] — Lifeworld aur Typifications:** Max Weber ke *Verstehen* ko aage badhate hue Schutz ne bataya ki log apni roz ki duniya yaani ==lifeworld== ko chalane ke liye shared mental labels use karte hain jinhe ==typifications== kehte hain — jaise "sakht makaan-maalik", "bharosemand padosi" ya "sharif parivar". Agar sociologist in rozmarra ke shared meanings ko nahi samjhega, toh woh yeh kabhi nahi jaan payega ki log aisa vyavahar kyun kar rahe hain.
- **[[thinker:Harold Garfinkel]] — Ethnomethodology aur Breaching Experiments:** Garfinkel ne dikhaya ki aam log har pal bina bole kuch unspoken rules follow karte hain jisse samajik order chalta rehta hai. [[eg:Apne breaching experiments mein unhone students se kaha ki lift mein sabki taraf peeth karne ke bajaye ulta munh karke khade ho jao ya fixed-price mall mein bhaav-taav karo — turant logon ka ghabraana aur gussa hona yeh sabit karta hai ki common-sense niyam kitni gehrai se social order sambhalte hain.]] [[link:Unit 2 ke Non-Positivist Methodologies mein Schutz aur Garfinkel ko detail mein padho, aur Paper 2 mein dekho ki rozmarra ke unwritten niyam caste boundaries kaise zinda rakhte hain.]]
- **[[thinker:André Béteille]] — Poori Tarah Khaarij Karne se Bachav:** Methodological farq batane ke baad bhi Béteille sociologists ko chetate hain ki aam logon ki samajh ko halka na samjhein. Gaon ke kisanon, mazdooron aur parivaron ke paas caste, kinship aur local power ki gehri practical samajh hoti hai; use final proof na sahi, par realistic starting clue maanne se sociology zameen se judi rehti hai.
- **[[thinker:Anthony Giddens]] — The Double Hermeneutic:** Physics ya chemistry mein grah aur patthar kitabein nahi padhte, isliye wahan sirf ek-tarfa study hoti hai, lekin sociology ==Double Hermeneutic== yaani do-tarfa samajh mein kaam karti hai. Pehle sociology aam logon ke common-sense meanings ko samajhti hai, aur phir sociology ke concepts jaise ==gender roles==, ==sanskritisation==, ==identity== ya ==anomie== akhbaron, podcasts aur ghar ke dining table ki baatcheet mein ghul kar logon ke naye common sense ka hissa ban jaate hain. [[eg:50 saal pehle Bharatiya parivaron mein "gender roles", "mental load" ya "sanskritisation" jaise shabd aam baatcheet mein nahi the — aaj wahi sociological shabd roz akhbar aur family debates mein sunai dete hain.]]

## C.W. Mills ki Sociological Imagination: Aarav ki Metro aur Youth Unemployment

Apni classic kitab *The Sociological Imagination* (1959) mein [[thinker:C. Wright Mills]] ne ek aisi nazariya-shakti ki baat ki jo insaan ki ==personal biography== ko ==social structure aur history== se jodti hai. Ise do roz ke Indian udaaharanon se samjho. Pehle subah 9:05 par Rajiv Chowk Metro station par khade Aarav ko dekho jiski train phir late hai. [[eg:Aarav chidhte hue bolta hai: "Delhi ke log kabhi time ki kadar nahi karte, sab aalsi hain" — yeh turant mila common-sense verdict hai.]] Lekin jab aap sociological imagination lagate hain, toh dikhta hai ki shehar ka phailaav, mehenge rent ke kaaran NCR ke door ilakon mein rehne ki majboori, sabke 9 baje office pahunchne ka system, women commuters ki safety constraints aur urban transport budget is ek late morning ke peeche khade hain.

Bilkul yahi baat **youth unemployment** par laagu hoti hai: agar kisi ek yuva ko naukri nahi mil rahi, toh woh uski apni skill ya taiyari ki kami yaani personal trouble ho sakti hai; lekin jab lakhon padhe-likhe graduates coaching hubs mein baithe sarkari vacancies ka intezaar kar rahe hon, toh unhe aalsi kehna sach se munh modna hai. Woh ek bada ==public issue== hai jo jobless growth, credential inflation aur badalti global economy ke itihaas se paida hua hai.

| Rozmarra ki Indian Situation | Common-Sense Verdict | Sociological Imagination Insight |
| --- | --- | --- |
| Aarav ka Delhi Metro delay | Log aur staff aalsi aur careless hain | Urban sprawl, peak-hour schedules, transit capacity aur gendered crowding |
| Youth unemployment aur UPSC burnout | Focus ya mehnat ki personal kami | Jobless growth, credential inflation aur middle-class status anxiety |
| Matrimonial apps par caste filters | Sirf apni personal pasand-napasand | Caste endogamy, hypergamy aur class capital ka digital algorithm |
| Kisanon ki aatmahatya | Kamzor mann ya galat niji kharch | Monsoon risk, MSP gaps, informal karz aur agrarian market structure |`,
  },
  {
    kind: 'flow',
    direction: 'vertical',
    steps: [
      { label: '1. Personal Trouble Dekho', text: 'Aarav ki Delhi Metro late hui, ya kisi graduate ko naukri nahi mil rahi' },
      { label: '2. Prenotions Todo', text: 'Durkheim: "Log aalsi hain" ya "kismat kharab hai" jaise verdict side rakho' },
      { label: '3. Structural Pattern Khojo', text: 'Transit capacity, labour market data, class access aur caste networks check karo' },
      { label: '4. History se Jodo', text: 'Dekho urbanisation, liberalisation aur policies ne yeh haalat kaise banayi' },
      { label: '5. Sociological Imagination', text: 'Private tension ab ek shared aur sudharne layak public issue dikhti hai' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Common Sense Knowledge',
    rightTitle: 'Sociological Knowledge',
    rows: [
      { aspect: 'Source aur Aadhar', left: 'Aadat, parampara, kahawatein aur personal anubhav', right: 'Systematic research, concepts, data aur theory' },
      { aspect: 'Jaanch (Verification)', left: 'Bina kisi empirical test ke sach maan liya jaata hai', right: 'Tested, falsifiable aur peer-reviewed evidence par tika' },
      { aspect: 'Scope aur Daayra', left: 'Local, tukdon mein aur ek mahaul tak seemit', right: 'Alag-alag samajon, vargon aur itihaas mein comparative' },
      { aspect: 'Tark ki Ekta (Logic)', left: 'Aksar ulte proverbs aur confirmation bias se bhara', right: 'Saaf paribhashit concepts aur coherent framework' },
      { aspect: 'Asamaanata par Nazariya', left: 'Caste, gender aur gareebi ko natural ya kismat maanta hai', right: 'Power, ideology aur social construction ko ujaagar karta hai' },
      { aspect: 'Vyakti vs Structure', left: 'Sirf insaan ki aadat ya kismat ko dosh deta hai', right: 'Personal choices ko structural constraints se jodta hai' },
      { aspect: 'Aapsi Rishta', left: 'Sociology ko shuruati sawaal aur lived meanings deta hai', right: 'Myths todta hai aur Double Hermeneutic se aam soch badalta hai' },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Prenotions',
    meaning: 'Sociologist ke dimaag mein research shuru karne se pehle se baithe bina jaanche common-sense vichar, jinhe Durkheim objective study ke liye alag rakhne ko kehte hain.',
    thinkerSlug: 'emile-durkheim',
  },
  {
    kind: 'keyTerm',
    term: 'Sociological Imagination',
    meaning: 'C. Wright Mills ka concept: apni niji zindagi ki pareshaniyon (personal troubles) ko bade social structures aur historical badlaavon se jod kar dekhne ki samajh.',
  },
  {
    kind: 'keyTerm',
    term: 'Debunking Motif',
    meaning: 'Peter Berger ka shabd: samaj ke official aur obvious lagne wale dikhawe ke peeche jhaank kar asli power aur structural sach ko saamne laana.',
  },
  {
    kind: 'keyTerm',
    term: 'Double Hermeneutic',
    meaning: 'Anthony Giddens ka two-way loop: sociology pehle aam logon ke meanings samajhti hai, aur phir gender roles ya sanskritisation jaise shabd wapas logon ke common sense ko badalte hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Breaching Experiment',
    meaning: 'Harold Garfinkel ka tarika: rozmarra ke bina bole maane jaane wale common-sense niyamon ko jaan-boojh kar todna taaki chhupa moral order saaf dikhe.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'emile-durkheim',
    quote: 'The first and most fundamental rule is: Consider social facts as things.',
    context: 'Personal common-sense prenotions ko door rakh kar objective analysis karne ka buniyadi niyam.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'robert-k-merton',
    quote: 'Manifest functions are intended and recognized by participants; latent functions are unintended, unrecognized consequences uncovered by sociological analysis.',
    context: 'Common sense sirf upari manifest maksad dekhta hai; sociology chhupe latent asar kholti hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '13 Saal mein 6 PYQs: Balanced Stand hi Toppers ki Pehchan Hai',
    body: '2025 (#1), 2023 (#7), 2021 (#11) aur 2016 (#20) sab ek hi core sawaal ghumate hain: kya sociology common sense hai? Kabhi sirf "Nahi" likh kar mat rukna! Pehle difference dikhao (Durkheim, Berger, Gramsci, Béteille), phir constructive bridge aur feedback loop se close karo (Schutz, Garfinkel, Giddens, Mills).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Sense ko 100% Bekaar Kabhi Mat Likhna',
    body: 'Agar aap likhenge ki common sense bilkul jhooth aur bekaar hai, toh examiner maanege ki aapne André Béteille ki chetavni aur Interpretive Sociology (Schutz, Garfinkel) miss kar di. Yaad rakho: common sense scientifically galat ho sakta hai, par socially real hota hai kyunki log usi ke base par action lete hain.',
  },
  {
    kind: 'callout',
    variant: 'tip',
    title: 'Har Myth Todne ke Liye Merton ka Manifest vs Latent Trick Lagao',
    body: 'Kisi bhi rozmarra ke vishwas ko debunk karne ke liye Merton use karo: jaise UPSC coaching ka manifest function exam clear karana hai, par latent function youth unemployment ko kuch saal waiting room mein rokna aur middle-class status anxiety manage karna hai.',
  },
  {
    kind: 'answerBox',
    intro: 'Common sense rozmarra ki zindagi chalane wala unverified cultural gyaan hai, jabki sociology systematic, comparative aur evidence-based inquiry hai — phir bhi dono ke beech lagatar critical dialogue chalta rehta hai.',
    points: [
      'Sociology Alag Kyun Hai: Common sense local, anecdotal aur contradictory hota hai (Béteille) aur asamaanata ko natural dikhata hai (Gramsci); sociology prenotions todti hai (Durkheim) aur official facades debunk karti hai (Berger).',
      'Interaction mein Chhupa Order: Garfinkel ke breaching experiments aur Goffman ki dramaturgy dikhate hain ki aam dikhne wali baatcheet ke peeche bhi pakke unwritten rules aur power chhupe hote hain.',
      'Common Sense Bridge Kyun Banta Hai: Schutz dikhate hain log typifications se order banate hain, aur Béteille aam insight ko poora reject karne se mana karte hain — isliye yeh research ka accha starting point hai.',
      'Two-Way Loop aur Imagination: Giddens ke Double Hermeneutic se gender roles aur sanskritisation jaise terms aam bolchaal mein aate hain, jabki C.W. Mills personal troubles ko structure aur history se jodte hain.',
    ],
    conclusion: 'Sociology aksar common sense se mile sawaalon se shuru hoti hai, lekin empirical jaanch, comparative method aur structural imagination ke zariye usse kahin aage nikal jaati hai.',
  },
]

export const topic3Hi: Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'> = {
  summary:
    'Common sense rozmarra ka bina jaanch wala cultural gyaan hai jo daily kaam chalane mein madad karta hai. Sociology in shortcuts par sawaal uthati hai — Durkheim ke prenotions aur Gramsci ki hegemony todti hai, Schutz-Garfinkel ke everyday meanings padhti hai, aur C.W. Mills ke zariye personal troubles ko history se jodti hai.',
  mindMap,
  sections,
}
