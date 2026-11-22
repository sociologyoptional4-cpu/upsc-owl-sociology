import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 8.1 · Sociological Theories of Religion',
  center: 'Theories of Religion',
  subtitle: 'Shuruat -> Ekta -> Afeem -> Capitalism -> Patriarchy',
  branches: [
    {
      title: 'Evolutionary & Origin',
      color: 'lavender',
      thinkers: ['E.B. Tylor', 'Max Müller', 'Herbert Spencer', 'James Frazer'],
      points: [
        'Tylor Animism: maut aur sapnon ki paheli suljhane se aatma (anima) ka vichar',
        'Müller Naturism: kudrat ke darr aur aashcharya se prakriti ki pooja',
        'Spencer Ghost Theory: purvajon ki aatma ko shant karne ke rituals',
        'Frazer: magic (control) -> religion (prarthana) -> science (rational rules)',
      ],
    },
    {
      title: 'Functionalist Lens',
      color: 'yellow',
      thinkers: ['Émile Durkheim', 'B. Malinowski', 'Talcott Parsons', 'Robert Bellah'],
      points: [
        'Durkheim: Sacred vs Profane, Arunta totemism aur collective effervescence',
        'Malinowski: Trobriand deep-sea fishing ka darr aur life-crisis rituals',
        'Parsons: cultural value consensus, meaning aur tonic to self-confidence',
        'Bellah Civil Religion: tiranga, rashtragan aur 26 January modern sacred hain',
      ],
    },
    {
      title: 'Marxist & Weberian',
      color: 'mint',
      thinkers: ['Karl Marx', 'Ernst Bloch', 'Otto Maduro', 'Max Weber'],
      points: [
        'Marx: superstructure ki afeem jo karma aur swarg dikha kar gareebi chhupati hai',
        'Neo-Marxists (Bloch, Maduro, Gramsci): Liberation Theology aur social change',
        'Weber: Protestant Ethic (calling, predestination, bachat) -> modern capitalism',
        'Comparative world religions: this-worldly vs other-worldly nazariya',
      ],
    },
    {
      title: 'Interpretive, Market & Feminist',
      color: 'pink',
      thinkers: ['Peter Berger', 'Clifford Geertz', 'Stark & Bainbridge', 'Simone de Beauvoir'],
      points: [
        'Berger Sacred Canopy aur Geertz cultural symbols jo dukh ko arth dete hain',
        'Stark & Bainbridge Religious Market (compensators) vs Norris-Inglehart',
        'Feminist critique (Beauvoir, Holm, Walby): male gods, pujari monopoly & taboos',
        'Denise Kandiyoti Patriarchal Bargain aur reformist feminist movements',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u08-01-religion-theories-types.webp',
    alt: 'P1 Unit 8 infographic: Theories & Types of Religion — Classical Sociology of Religion & Organizational Types',
    caption: 'Classical Sociology of Religion & Organizational Types — Theories & Types of Religion ka visual saransh.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 8 Visual 01',
  },
  {
    kind: 'md',
    body: `## Sociology Dharm (Religion) ko Kaise Padhti Hai?

Aasaan shabdon mein samjho: jab ek aam aasthavan insaan dharm ki baat karta hai, toh woh poochhta hai ki Bhagwan hai ya nahi, ya kaunsi kitaab sabse sacchi hai. Lekin ek sociologist is behas mein nahi padta — sociology ka sawaal yeh hai ki dharmik vishwas aur rituals samaj ko jodte kaise hain, gareebi ya amiri ko kaise justify karte hain, business aur economy ko kaise badalte hain, aur auraton ke adhikaaron par kya asar daalte hain? Sabse pehle sociologists dharm ko define karne ke teen tarike batate hain:

- **Substantive Definitions (Kya Hai):** Dharm ke *content* yani supernatural ya Bhagwan mein vishwas par focus karti hain, jaise [[thinker:Roland Robertson]] ki definition. [[trap:Substantive definitions ki kami yeh hai ki woh early Theravada Buddhism jaise dharmon ko chhod deti hain jahan creator God ki pooja nahi hoti.]]
- **Functional Definitions (Kya Kaam Karta Hai):** Dharm samaj aur insaan ke liye kya *kaam* karta hai us par focus karti hain, jaise [[thinker:J. Milton Yinger]] kehte hain ki dharm woh system hai jiske zariye log zindagi ke sabse bade sawaalon (maut, dukh, anyay) se joojhte hain.
- **Social Constructionist / Interactionist Lens:** Dekhta hai ki aam log apni rozmarra ki zindagi mein kis cheez ko pavitra (sacred) maante hain.

## Early Evolutionary Theories: Dharm ki Shuruat Kahan Se Hui?

19th century ke thinkers yeh samajhna chahte the ki aadi-manav (early humans) ke dimaag mein dharm ka pehla khayal kaise aaya. Unhone iske peeche do alag-alag kaaran khoje — ek taraf insaan ki *intellectual jignasa (curiosity)* aur doosri taraf kudrat ka *emotional darr*.

- **Animism ([[thinker:E.B. Tylor]]):** Latin shabd *anima* (aatma ya rooh) se bana Animism. Tylor ne apni kitaab *Primitive Culture* mein kaha ki aadi-manav ek "primitive philosopher" ki tarah do paheliyan suljha raha tha: (1) ek zinda jism aur murda laash mein kya farak hai? aur (2) raat ko sapne mein hum door baithe ya mare hue logon se kaise mil lete hain? Insaan ne andaza lagaya ki har sharir ke andar ek aatma (spirit) hoti hai jo neend mein bahar ghoomti hai aur maut ke baad hamesha ke liye nikal jaati hai. Dheere-dheere insaan ne ped, nadi aur pahadon mein bhi aatma maan kar unki pooja shuru kar di. [[eg:Jharkhand aur Odisha ke Santhal aur Oraon adivasiyon mein purvajon ki aatma ki pooja (necrolatry) aur Sarna sacred groves aaj bhi animism ke zinda udaharan hain.]]
- **Naturism ([[thinker:Max Müller]]):** Tylor ke ulte, Max Müller ne kaha ki dharm dimaagi paheli se nahi, balki *emotional awe, fear aur wonder* se nikla. Jab aadi-manav ne bijli ki kadak, toofan, aag aur suraj ki taqat dekhi, toh usne darr aur shradha se kudrat ki shaktiyon ko insaani roop (personification) de diya — jise Müller ne "disease of language" kaha. [[eg:Vedic parampara aur rozmarra ki Bharatiya aastha mein suraj ko Surya Devta, barish ko Indra, hawa ko Vayu aur nadi ko Ganga Maiya maan kar pooja jaana Naturism ko dikhata hai.]]
- **Ghost Theory & Magic-to-Science:** [[thinker:Herbert Spencer]] ne dharm ki jad purvajon ke bhooton (ghosts) ko shant karne mein dekhi, jabki [[thinker:James Frazer]] (*The Golden Bough*) ne manav soch ki teen सीढ़ियां batayin: **Magic** (kudrat ko mantra se control karna) -> **Religion** (supernatural shakti ke aage jhukna) -> **Science** (tark aur niyam).

## Functionalist Perspective: Samaj ko Jodne Wala Fevicol

Aasaan shabdon mein samjho: functionalists poochhte hain ki duniya ke har samaj mein dharm kyun paya jaata hai? Unka jawab hai ki dharm samaj mein woh kaam karta hai jo koi aur institution nahi kar sakta — yeh anjaan logon ko ek parivar jaisa jodta hai aur musibat ke waqt himmat deta hai.

### 1. Émile Durkheim: Sacred, Profane aur Totemism

Apni mashhoor kitaab *The Elementary Forms of Religious Life* (1912) mein [[thinker:Émile Durkheim]] ne duniya ke sabse saral samaj — Australia ke **Arunta** aboriginal tribe — ka adhyayan kiya taaki har dharm ki mool aatma pakdi jaa sake. Durkheim ne paya ki duniya ka har dharm brahmand ko do hisson mein baant deta hai: ==Sacred== (woh cheezein jo pavitra hain, aam zindagi se alag rakhi gayi hain aur jinse shradha ya darr juda hai) aur ==Profane== (rozmarra ki aam, mamooli cheezein). Koi bhi cheez apne-aap sacred nahi hoti — samaj ki collective aastha use sacred banati hai.

Arunta tribe ka har clan ek **Totem** (kisi janwar ya ped ka nishan) apnata tha. Durkheim ne dikhaya ki Totem ek hi waqt par unke Bhagwan ka bhi pratik hai aur unke clan ka jhanda (flag) bhi! Iska matlab ==jab samaj Bhagwan ki pooja karta hai, toh asal mein woh apni hi samuhik taqat (society itself) ki pooja kar raha hota hai==. Jab tyohar par poora clan ek saath naachta-gaata hai, toh ek bijli jaisi samuhik urja paida hoti hai jise Durkheim ==collective effervescence== kehte hain — isse social cohesion, discipline aur cognitive categories मजबूत hoti hain. [[eg:Prayagraj ke Kumbh Mela, Kolkata ke Durga Puja pandal ya Mumbai ke Ganpati Visarjan mein jab laakhon log ek sur mein bhakti karte hain, tab Durkheim ka collective effervescence aankhon ke saamne dikhta hai.]]

Modern samaj mein [[thinker:Robert Bellah]] ne ise ==Civil Religion== se joda: aaj secular deshon mein Tiranga jhanda, Samvidhan, 26 January ki parade aur stadium mein Rashtragan gaana bhi sacred rituals ki tarah desh ko ek sutra mein baandhte hain.

### 2. Malinowski aur Parsons: Darr aur Dukh ka Sahara

Durkheim ki is baat par ki "dharm sirf samaj ki pooja hai", [[thinker:Bronislaw Malinowski]] ne aitraaz kiya aur **Trobriand Islanders** par apne fieldwork se dharm ka *psychological function* samjhaya. Jab Trobriand machhuare shant aur surakshit **lagoon** (jheel jaise kinare) mein machhli pakadte the, toh koi pooja ya jadoo-tona nahi karte the kyunki wahan unka hunar kaafi tha. Lekin jab woh gehre, toofani **open ocean** mein utarte the jahan jaan ka khatra aur uncertainty thi, toh नाव chalane se pehle bade-bade religious rituals karte the.

- **Rituals ke Do Mauke ([[thinker:Bronislaw Malinowski]]):** Insaan dharm ka sahara tab leta hai jab **(1) haalat uske control se bahar aur uncertain hon** aur **(2) life-crisis events** (janm, puberty, shaadi aur maut — jahan antim sanskar ke rituals toote hue parivar ko emotional sahara dete hain). [[eg:Sriharikota se bada rocket launch karne se pehle ISRO ke scientists ka Tirupati Mandir mein rocket ka chhota model chadhana Malinowski ki uncertainty-anxiety theory ko bilkul saaf dikhata hai.]]
- **Cultural System & Theodicy ([[thinker:Talcott Parsons]]):** Parsons ke mutabik dharm cultural system ka hissa hai jo zindagi ke an सुलझे dukhon (bure logon ki jeet, acchon ki bewaqt maut) ko meaning deta hai aur "tonic to self-confidence" ban kar social order bachata hai.

## Marxist aur Neo-Marxist Perspective: Afeem ya Kranti?

Jahan functionalists ko dharm mein bhaichara dikhta hai, wahin [[thinker:Karl Marx]] ko isme amiron (ruling class) ka hathiyar dikha. Marx ke mutabik dharm **superstructure** ka hissa hai jo economic **base** ki na-barabari ko chhupata hai.

Marx ne dharm ko ==opium of the masses== (janta ki afeem) aur "kuchle hue insaan ki aah" kaha. Jaise dard ki goli bimari theek kiye bina dard ka ehsaas sunn kar deti hai, waise hi dharm gareeb mazdoor ko uske shoshan ke khilaf bagawat karne se rokta hai — in 5 tarikon se:

1. **Gareebi aur Dukh ko Mahan Batana:** Yeh sikhana ki gareeb Bhagwan ke zyada kareeb hain (*Daridra Narayan*) ya dukh "Bhagwan ki pariksha" hai.
2. **Social Hierarchy ko Bhagwan ki Marzi Batana:** Raja ko *Devaputra* kehna ya jaati-vyavastha aur amiri-gareebi ko pichhle janm ke *Karma* ka phal batana.
3. **Insaaf Bhagwan par Chhod Dena:** Mazdoor ko samjhana ki malik se ladne ke bajaye sabr rakho kyunki *"Bhagwan ke ghar der hai, andher nahi."*
4. **Marne ke Baad Swarg/Jannat ka Lalach:** Is duniya ko jhoothi *Moh-Maya* bata kar agle janm ya *Jannat/Swarga* mein doodh ki nadiyon ka sapna dikhana.
5. **Paap ke Darr se Social Control:** Amir ki sampatti chheenne ko sirf kanooni jurm nahi balki "ghor paap" ghoshit karke revolution rokna.

- **Neo-Marxist Turn (Dharm ka Doosra Chehra):** Baad ke Marxists ne maana ki dharm hamesha status-quoist nahi hota. [[thinker:Friedrich Engels]], [[thinker:Ernst Bloch]], [[thinker:Antonio Gramsci]] aur [[thinker:Otto Maduro]] ne dikhaya ki jab dharmik neta shoshit varg ke **organic intellectuals** ban jaate hain, toh dharm kranti ki aag ban sakta hai. [[eg:Latin America mein Catholic padriyon ki Liberation Theology, Gandhi ji ka Satyagraha, aur Babasaheb Ambedkar ka Navayana Buddhism (jisne Daliton ko jaati-shoshan ke khilaf sangathit kiya) Neo-Marxist theory ke behtareen saboot hain.]]

## Max Weber: Dharm Kaise Economic Change Laata Hai?

Marx ke economic determinism ko palat-te hue [[thinker:Max Weber]] ne apni classic kitaab *The Protestant Ethic and the Spirit of Capitalism* (1905) mein sabit kiya ki dharmik vichar bhi economy ko badal sakte hain! Weber ka sawaal tha ki modern industrial capitalism 16th–17th century ke Western Europe mein hi kyun paida hua — jabki pre-colonial Bharat (*Sone ki Chidiya*) aur China ke paas bhi sansadhan, vyapar aur shanti thi?

Weber ne kaha ki capitalism ke liye sirf paisa ya lalach nahi, balki ek khas mansikta chahiye — ==Spirit of Capitalism== (Benjamin Franklin ke niyam: *"Time is money"*, imandari, mehnat aur frugality). Yeh mansikta **Calvinist Protestantism** ki in teachings se nikli:

- **Incomprehensibility of God & This-Worldly Focus:** Bhagwan ke rahasya insaani samajh se bahar hain, isliye jangalon mein tapasya karne ke bajaye is duniya mein kaam karo.
- **Predestination aur Salvation Anxiety:** Calvin ke mutabik janm se pehle hi Bhagwan tay kar chuka hai ki kaun swarg jayega (**Elect**) aur kaun narak; koi pandit, daan ya pooja ise badal nahi sakti. Isse logon mein bhari **salvation anxiety** (darr) paida hui, aur unhone apne business/kaam mein badi kamyabi ko hi Bhagwan ke aashirwad (*sign of being Elect*) ka saboot maana!
- **Calling (*Beruf*) & Work as Worship:** Rozmarra ke peshe (mochi, banker, engineer) ko hi sabse badi bhakti maana gaya, jisse skill specialisation aur 24/7 work ethic bana.
- **This-Worldly Asceticism & Reinvestment:** Calvinism ne reasonable byaj (interest/banking) ko jaayaz maana, par amiri ko aish-o-aaram (luxury) ya bikhariyon ko daan dene par sakht rok laga di. Ab jab insaan din-raat mehnat karke khoob paisa kamaye aur use kharch na kar sake, toh woh kya karega? **Paisa wapas business mein reinvest karega** — aur yahin se modern capitalism ka janm hua!

| Dimension | Émile Durkheim | Karl Marx | Max Weber |
| --- | --- | --- | --- |
| Mukhya Nazariya | Structural Functionalism | Historical Materialism | Interpretive Social Action |
| Dharm ka Kaam | Samajik ekta aur moral consensus | Afeem aur ruling-class control | Economic aur social change ka engine |
| Modernity mein Bhavishya | Civil Religion ke roop mein rahega | Classless communism mein khatam hoga | Rationalisation se Disenchantment aayega |
| Mukhya Aalochna | Dange aur power-conflict bhool gaye | Ekta aur liberation faith ignore kiya | Hinduism ko galat samjha; Venice bhool gaye |

[[trap:Weber ke answer mein 5 critiques zaroor likho: (1) Hinduism sirf Moksha nahi balki Dharma, Artha aur Kama (this-worldly) bhi sikhata hai aur Bania, Marwari, Chettiar communities sadiyon se business mein hain; (2) Werner Sombart ne Jews ka yogdaan dikhaya; (3) Joseph Schumpeter ne bataya ki capitalism Catholic Italy (Venice/Florence) mein pehle aaya; (4) Karl Kautsky ne kaha capitalism ne Protestantism banaya; (5) Aaj ka capitalism bachat par nahi balki credit-card consumerism par chalta hai.]]

## Phenomenological, Market aur Feminist Theories

- **Sacred Canopy & Meaning ([[thinker:Peter Berger]] & [[thinker:Clifford Geertz]]):** Berger ne dharm ko ==Sacred Canopy== (pavitra chhatri) kaha jo insaan ko be-matlab duniya ke darr (*anomie*) se bachati hai. Geertz ne dikhaya ki dharm cultural symbols ke zariye bafflement, dukh aur ethical paradox ka jawab deta hai.
- **Religious Market vs Existential Security:** [[thinker:Rodney Stark]] aur [[thinker:William Sims Bainbridge]] ki **Religious Market Theory** kehti hai ki dharm ki demand hamesha rehti hai kyunki woh supernatural **compensators** (amar zindagi ka wada) bechta hai — jahan dharmik bazar mein competition hota hai (jaise USA), wahan dharm badhta hai. Iske vipreet [[thinker:Pippa Norris]] aur [[thinker:Ronald Inglehart]] (*Existential Security Thesis*) ne dikhaya ki ameer welfare deshon mein jahan zindagi surakshit hai wahan dharm ghat-ta hai, aur gareeb/asurakshit samajon mein dharm zyada rehta hai.
- **Feminist Critique (Dharm aur Patriarchy):** [[thinker:Simone de Beauvoir]], [[thinker:Jean Holm]], [[thinker:Karen Armstrong]] aur [[thinker:Sylvia Walby]] dikhate hain ki lagbhag sabhi bade dharm patriarchy ko majboot karte hain: **(1) Male Gods & Prophets** (Adam pehle bana, Eve par paap ka ilzam); **(2) Priesthood par Mardon ka Kabza** (pandit, padri, maulvi); **(3) Menstruation aur Pollution Taboos**; aur **(4) Personal Laws aur Swarg ka Dilasa**. Saath hi [[thinker:Denise Kandiyoti]] ka ==Patriarchal Bargain== samjhata hai ki kaise ghar ki badi auratein khud bahu-betiyon par dharmik pabandiyan thopti hain. [[eg:Sabarimala temple entry vivad, 2019 ka Triple Talaq ban, aur Bharatiya Muslim Mahila Andolan ki mahila Qazi va Pune ki mahila purohit dharm ke andar feminist badlaav ke udaharan hain.]] [[link:Paper 2 Unit 8 ke saath jodo: Bharat mein religious minorities ke mudde — Louis Wirth ki definition, Imtiaz Ahmad ka Indian Islam study, Sachar Committee report aur Articles 25–30.]]`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1871–1878',
        title: 'Tylor & Max Müller — Origin Debate',
        text: 'Tylor ka Animism (sapne aur maut se aatma ka vichar) बनाम Müller ka Naturism (kudrat ke darr aur aashcharya se prakriti pooja).',
      },
      {
        year: '1844',
        title: 'Karl Marx — Opium of the Masses',
        text: 'Dharm ko ideological superstructure bataya jo mazdooron ke dukh ko sunn karke amiron ka raj bachata hai.',
      },
      {
        year: '1904–1905',
        title: 'Max Weber — Protestant Ethic',
        text: 'Calvinist predestination anxiety, calling aur bachat (asceticism) ko modern industrial capitalism ki chingari bataya.',
      },
      {
        year: '1912',
        title: 'Émile Durkheim — Elementary Forms',
        text: 'Arunta totemism ke zariye Sacred/Profane divide, collective effervescence aur samaj ki khud ki pooja samjhayi.',
      },
      {
        year: '1925–1948',
        title: 'Malinowski — Magic, Science & Religion',
        text: 'Trobriand lagoon vs open-sea fishing se sabit kiya ki rituals uncertainty aur life-crisis ki anxiety kam karte hain.',
      },
      {
        year: '1967–1973',
        title: 'Bellah, Berger & Geertz — Meaning & Civil Religion',
        text: 'Bellah ka Civil Religion, Berger ki Sacred Canopy aur Geertz ke cultural symbols.',
      },
      {
        year: '1987–2004',
        title: 'Stark-Bainbridge vs Norris-Inglehart',
        text: 'Supply-side Religious Market Theory (compensators) aur demand-side Existential Security Thesis ki takkar.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Predestination', text: 'Janm se pehle tay hai kaun Elect (swarg) hai aur kaun damned' },
      { label: 'Salvation Anxiety', text: 'Koi pandit ya daan kismat nahi badal sakta -> bhari manasik darr' },
      { label: 'Secular Calling', text: 'Apne rozmarra ke peshe mein 24/7 mehnat ko hi Bhagwan ki bhakti maana' },
      { label: 'Ascetic Bachat', text: 'Luxury aur fuzool kharchi par rok -> bhari munafa ikattha hua' },
      { label: 'Capitalism Born', text: 'Munafe ko bar-bar business mein reinvest karne se modern capitalism bana' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Animism (E.B. Tylor)',
    rightTitle: 'Naturism (Max Müller)',
    rows: [
      {
        aspect: 'Mool Paribhasha',
        left: 'Aatma, rooh aur spirits (anima) mein vishwas jo jism, ped aur patthar mein rehti hain',
        right: 'Kudrat ki taqaton (suraj, bijli, barish, nadi) ko devta maan kar pooja karna',
      },
      {
        aspect: 'Mukhya Trigger',
        left: 'Intellectual curiosity — aadi-manav ne maut aur sapnon ki paheli suljhate hue aatma khoji',
        right: 'Emotional experience — kudrat ke aage insaan ka darr, aashcharya aur majboori',
      },
      {
        aspect: 'Kaise Bana',
        left: 'Sote waqt aur marne par sharir se nikalne wali chhaya/aatma ka tark',
        right: 'Disease of language — kudrat ki kavitamayi taareef dheere-dheere devtaon ke naam ban gayi',
      },
      {
        aspect: 'Rituals & Medium',
        left: 'Shaman, ojha aur purvajon ki aatma ko shant karne ke rites (necrolatry)',
        right: 'Prakriti ko seedhe arpan, stuti-mantra aur mythology (jo aage polytheism bani)',
      },
      {
        aspect: 'Bharatiya Udaharan',
        left: 'Santhal aur Oraon tribes ke Sarna sacred groves aur purvaj-pooja',
        right: 'Rigveda mein Indra, Agni, Surya, Vayu aur Ganga Maiya ki upasana',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Sacred and Profane',
    meaning:
      'Durkheim ka universal bhed jahan Sacred pavitra, alag aur shradha jagane wali cheezein hain, jabki Profane rozmarra ki aam duniya hai.',
    thinkerSlug: 'emile-durkheim',
  },
  {
    kind: 'keyTerm',
    term: 'Collective Effervescence',
    meaning:
      'Jab samaj ek saath mil kar dharmik rituals manata hai tab paida hone wali samuhik emotional urja jo group solidarity ko recharge karti hai.',
    thinkerSlug: 'emile-durkheim',
  },
  {
    kind: 'keyTerm',
    term: 'Protestant Ethic & Salvation Anxiety',
    meaning:
      'Predestination ke darr se nikli Calvinist mansikta jisne kadi mehnat (calling) aur bachat ke reinvestment ko mukti ka sanket maan kar capitalism banaya.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'Sacred Canopy',
    meaning:
      'Peter Berger ka concept ki dharm ek pavitra chhatri ki tarah samaj ko existential chaos aur anomie se suraksha aur arth deta hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'emile-durkheim',
    quote: 'In a general way, it is unquestionable that a society has all that is necessary to arouse the sensation of the divine in minds.',
    context: 'Elementary Forms of Religious Life (1912) — Bhagwan ki pooja asal mein samaj ki hi samuhik shakti ki pooja hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'Religion is the sigh of the oppressed creature, the heart of a heartless world... It is the opium of the people.',
    context: 'Critique of Hegel’s Philosophy of Right (1844) — dharm shoshit ki aah bhi hai aur sangharsh rokne wali afeem bhi.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2025–2016 PYQ Pattern: Marx vs Weber vs Durkheim Matrix',
    body: 'UPSC baar-baar Durkheim vs Weber (2016) aur Marx vs Weber vs Durkheim (2025) poochhta hai. Exam mein hamesha 4 headings mein compare karo: (1) Level of Analysis (Macro-functional vs Macro-conflict vs Micro-social action), (2) Core Function (Social cohesion vs Class control vs Economic switchman), (3) Social Change (Status-quo ekta vs Revolution rokne wali afeem vs Capitalism ka engine), aur (4) Modernity mein Bhavishya (Civil religion vs Communism mein khatam vs Disenchantment).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Marx aur Feminism mein Sirf Ek Paksh Likhna',
    body: 'Kabhi bhi sirf "religion is opium" ya "all religions are patriarchal" likh kar answer mat roko! 20-marker mein hamesha Neo-Marxist counter-view (Ernst Bloch, Otto Maduro, Gramsci ke organic intellectuals, Liberation Theology, Ambedkar ka Navayana Buddhism) aur Feminist reform (Mirabai, Akka Mahadevi, Lal Ded, Islamic feminism aur female priests) zaroor jodo.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Paper 1 ↔ Paper 2 Bridge: Minority Question aur Islam in India',
    body: 'Is topic ke PYQs mein Indian religious minorities (2022, 2019, 2014), Triple Talaq (2018) aur Islam in India (2017) bhi poochhe gaye hain. Inme hamesha Louis Wirth ki minority definition, Imtiaz Ahmad ka lived Indian Islam study (Ashraf-Ajlaf-Arzal aur Sufi syncretism), Sachar Committee data aur Constitutional Articles 25–30 likho.',
  },
  {
    kind: 'answerBox',
    intro:
      'Sociology mein dharm ko aasmani aadesh ke bajaye ek aisi samajik sanstha ke roop mein padha jaata hai jo ekta, satta, arthvyavastha aur gender relations ko gadh-ti hai.',
    points: [
      'Evolutionary shuruat: Tylor ke Animism (aatma/sapnon ki jignasa) aur Max Müller ke Naturism (kudrat ka darr aur personification) ne prarambhik dharm samjhaya.',
      'Functionalist ekta: Durkheim ne Sacred/Profane aur totemism se collective effervescence dikhaya, jabki Malinowski aur Parsons ne crisis-anxiety management bataya.',
      'Marxist & Neo-Marxist dvandva: Marx ne dharm ko class inequality chhupane wali afeem kaha, par Maduro aur Gramsci ne iski counter-hegemonic krantikari shakti dikhayi.',
      'Weberian social action: Weber ke Protestant Ethic ne sabit kiya ki Calvinist salvation anxiety aur bachat-reinvestment ne modern capitalism ko janm diya.',
      'Contemporary & Feminist nazariya: Berger ki Sacred Canopy, Stark ka Religious Market aur Feminist critiques (Beauvoir, Walby) aaj ke dharmik badlaav ko kholte hain.',
    ],
    conclusion:
      'In sabhi theories ko mila kar dekhein toh dharm ek hi samay par samaj ko jodne wala fevicol bhi hai, shoshan ka maidan bhi, aur itihas badalne wala engine bhi.',
  },
]

export const topic1Hi: TopicLangContent = {
  summary:
    'Sociology dharm ko evolutionary origins (Tylor ka animism, Müller ka naturism), functional cohesion aur crisis management (Durkheim, Malinowski, Parsons), class control बनाम liberation (Marx, Maduro), economic rationalisation (Weber ka Protestant Ethic) aur feminist critiques ke zariye samajhti hai.',
  mindMap,
  sections,
}