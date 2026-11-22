import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 9.1 · Family, Household aur Marriage',
  center: 'Family, Household & Marriage',
  subtitle: 'Functionalism vs Critical/Feminist • Household Cycle • Indian Kinship Zones',
  branches: [
    {
      title: 'Functional & Critical Theories',
      color: 'lavender',
      thinkers: ['G.P. Murdock', 'Talcott Parsons', 'Edmund Leach', 'R.D. Laing'],
      points: [
        'Murdock (250 samaj): 4 vital functions — sexual, reproductive, economic, educational',
        'Parsons: 2 irreducible functions — primary socialisation aur adult personality stabilisation',
        'Critical: Vogel & Bell (scapegoating), Leach (overloaded circuit), Laing (gangster nexus), Cooper',
        'David Morgan (Family Practices / doing family) aur David Cheal (implicit family talk)',
      ],
    },
    {
      title: 'Marxist & Feminist Critique',
      color: 'yellow',
      thinkers: ['Friedrich Engels', 'Margaret Benston', 'Fran Ansley', 'Ann Oakley'],
      points: [
        'Engels: private property aur paternal inheritance pakka karne ke liye monogamy aayi',
        'Benston: unpaid domestic labour se capitalist ko ek salary mein do mazdoor milte hain',
        'Ansley: wives ghar mein "takers of shit" banti hain jo pati ka factory gussa sokhti hain',
        'Oakley (mother-housewife boredom) aur Jessie Bernard (His vs Her marriage)',
      ],
    },
    {
      title: 'Family vs Household & Cycle',
      color: 'mint',
      thinkers: ['A.M. Shah', 'I.P. Desai', 'M.S. Gore', 'Pauline Kolenda'],
      points: [
        'Family = blood/marriage ka rishta; Household = ek chhat aur ek chulha (Census unit)',
        'A.M. Shah: Developmental Cycle — expansion, shrinking, fission aur fusion',
        'Census 2011: Bharat ka average household size 4.8 members hai (Normal, Institutional, Houseless)',
        'I.P. Desai (Functional Jointness) aur Gore/Singer/Srinivas (business jointness)',
      ],
    },
    {
      title: 'Marriage & Kinship Zones',
      color: 'pink',
      thinkers: ['Irawati Karve', 'K.M. Kapadia', 'T.N. Madan', 'Louis Dumont'],
      points: [
        'Hindu Vivah ek pavitra Sanskara (Dharma, Praja, Rati + 3 Rinas) vs Muslim Nikah ek contract',
        'Irawati Karve ke 4 Kinship Zones: Northern, Southern, Central aur Eastern',
        'North: 4-gotra & village exogamy, hypergamy (bride-takers unche), failta hua kin circle',
        'South: cross-cousin & mama-bhanji vivah, village endogamy, strong aur close kin network',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u09-01-family-lineage-patriarchy.webp',
    alt: 'P1 Unit 9 infographic: Family, Lineage & Patriarchy — Classical Functionalism vs Feminist & Lineage Perspectives',
    caption:
      'Classical functionalists ne parivaar ko samaj ka emotional sahara maana, jabki critical, Marxist aur feminist thinkers ne iske andar chhupe unpaid labour, power politics aur patriarchy ko be-naqab kiya.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 9 Visual 01',
  },
  {
    kind: 'md',
    body: `## Kinship, Family aur Marriage kya hain — aur Parivaar sabko itna pyara kyun lagta hai?

Aasaan shabdon mein samjho: duniya mein log netaon ko gaali dete hain, ameer businessmen par shaq karte hain aur dharm ke thekedaron par bhi sawaal uthate hain — lekin ==family== (parivaar) ek aisi institution hai jise har sanskriti mein dil se pyar aur izzat milti hai. Wajah saaf hai: parivaar hamari sabse pehli duniya hai jahan maa-baap humein paalte hain, bhasha sikhate hain aur har musibat mein dhaal bankar khade rehte hain. Sociology mein parivaar ek bade jaal ka hissa hai jise ==kinship== (rishtedari) kehte hain — yani woh samajik rishte jo khoon (==consanguineal kin==, jaise maa-baap aur bhai-behen) ya shaadi (==affinal kin==, jaise pati-patni aur sasural wale) se bante hain.

Anthropologist [[thinker:G.P. Murdock]] aur Bharat mein [[thinker:S.C. Dube]] ne bataya ki kisi bhi vyakti (Ego) ke aas-paas rishtedari ke teen ghere hote hain: **8 Primary Kin** (pitaji, mataji, bhai, behen, pati, patni, beta, beti), **33 Secondary Kin** (primary kin ke primary kin, jaise *Mama*, *Dadaji*, *Bhabhi*, *Sasurji*), aur **151 Tertiary Kin** (jaise *Chacha ka beta* ya *Par-dadaji*). Yahi kinship system tay karta hai ki kaun kisse shaadi karega, zameen-jaaydaad kise milegi aur samaj mein hamari pehchan kya hogi.

## Family par Theoretical Perspectives: Emotional Sahara ya Power Politics?

### 1. Functionalist Nazariya: G.P. Murdock aur Talcott Parsons

Aasaan shabdon mein samjho: functionalist thinkers yeh poochhte hain ki har samaj mein parivaar kyun paaya jaata hai? Unka jawab hai ki parivaar ek "multi-purpose device" ki tarah woh zaroori kaam karta hai jiske bina koi samaj zinda nahi reh sakta.

- **[[thinker:G.P. Murdock]] (*Social Structure*, 1949):** Duniya ke **250 samajon** (chhote kabilon se lekar modern deshon tak) ka data padh kar Murdock ne kaha ki family ek universal institution hai jisme **common residence, economic cooperation, reproduction** aur kam se kam do opposite-sex adults ke beech **socially approved sexual relationship (marriage)** aur unke bache hote hain. Unhone parivaar ke **4 Vital Functions** bataye: (1) **Sexual** (shaadi ke zariye sexual desire ko safe rasta dena taaki samaj mein sexual jealousy na faile), (2) **Reproductive** (naye members paida karna), (3) **Economic** (kaam ka batwara), aur (4) **Educational** (primary socialisation jaise toilet training aur bolna sikhana). [[trap:Murdock ki rigid definition par kai counter-examples hain: Israel ka Kibbutz jahan bache communal dorms mein palte the, US ke poor Black families mein ~30% female-headed homes, Kerala ka matrilineal Nayar Tharavad, childfree couples aur same-sex families.]]
- **[[thinker:Talcott Parsons]] (2 Basic & Irreducible Functions):** Jab industrialisation ke baad school, hospital aur welfare state ne parivaar ke kai kaam le liye, tab Parsons ne samjhaya ki modern ==isolated nuclear family== kamzor nahi hui, balki ab woh **do aise moolbhoot (irreducible) functions** par focus karti hai jo duniya ki koi doosri sanstha nahi kar sakti: (1) **Primary Socialisation of the Young** (1–2 saal ke bache ko bina thake pyar aur mamta se "A for Apple" aur samaj ke sanskar sikhana), aur (2) **Stabilisation of Adult Personalities** (bahar ki thandi, transactional duniya ke baad ghar aakar unconditional pyar se adults ko emotionally "recharge" karna — *"warm bath theory"*). [[eg:Jab ek thaka hua insaan office ya coaching se laut-ta hai aur uski 5 saal ki beti bina kisi matlab ya salary ke daud kar gale lagti hai, toh wahi Parsons ka emotional recharge aur personality stabilisation hai.]]

### 2. Critical aur Dysfunctional Perspectives: Parivaar ka Andhera Paksh

Aasaan shabdon mein samjho: 1960–70 ke dashak mein critical sociologists aur psychiatrists ne dikhaya ki parivaar hamesha pyar ka mandir nahi hota — kai baar yahi ghar dimagi tanav, ghutan aur mental illness ki wajah ban jaata hai.

- **[[thinker:Ezra Vogel]] aur [[thinker:Norman Bell]] (Emotional Scapegoating):** Schizophrenia ke shikar bachon par research karke unhone dikhaya ki jab maa-baap ke aapsi rishte mein kadvahat hoti hai, toh woh apna gussa bache par utaar kar use ==emotional scapegoat== (*bali ka bakra*) bana dete hain. [[eg:Jab maa pati se ladne ke baad bete ko daant-ti hai ki "Tum bilkul apne baap jaise nalayak ban rahe ho," toh isse maa-baap ki shaadi toh bach jaati hai par bache ke dimag par gehra ghaav padta hai.]]
- **[[thinker:Edmund Leach]] (Overloaded Electrical Circuit):** Leach ne modern nuclear family ki tulna ek **overloaded bijli ke circuit** se ki jisme bahut saare AC aur heater ek hi plug par chala diye gaye hon. Joint family mein dadi, chachi ya cousins tension baant lete the, par isolated nuclear family mein pati-patni ek-doosre se hi lover, best friend aur counsellor sab banne ki umeed karte hain — jisse "fuse" udta hai aur bache bahar ki duniya par shaq karne wale "poker-face" metro passengers bante hain.
- **[[thinker:R.D. Laing]] (*The Politics of the Family* — Gangster Model):** Laing ne parivaar ko underworld gangsters ke **family nexus** jaisa bataya jahan log pyar ke naam par ek-doosre par emotional hinsa karte hain aur fir doosre member se "protection" dete hain — jaise pitaji 10th ke report card par *"Sharma ji ka beta dekho"* keh kar emotional attack karein aur maa bache ko bachane wali "gang leader" ban jaaye.
- **[[thinker:David Cooper]] (*The Death of the Family*):** Cooper ne kaha ki =="bringing up a child is bringing down a person"== — parivaar **interiorisation** ke zariye bache ke andar ke kalakar ya krantikari ko maar kar use apne adhure sapne poore karne wala conformist ("Yes Papa -> Yes Boss") bana deta hai.
- **[[thinker:David Morgan]] (Family Practices) & [[thinker:David Cheal]] (Family Talk):** Morgan kehte hain ki family koi pathar ki imarat (noun) nahi balki rozmarra ka kaam (verb) hai — **"doing family"** (saath khana, dekhbhal karna, baithna). Cheal ne joda ki ==family talk== mein poori baat bolni nahi padti kyunki aapsi itihas implicit hota hai. [[eg:Raat ke 1 baje jab chhote bache ke rone par patni neend mein sirf ek shabd bolti hai — "Doodh!" — aur pati samajh jaata hai ki bottle mein doodh daal kar beti ko pilana hai, yahi Cheal ka implicit family talk hai.]]

### 3. Marxist aur Feminist Nazariya: Private Property, Unpaid Labour aur Do Shaadiyan

Marxist aur feminist scholars poochhte hain ki aakhir parivaar kiske fayde ke liye kaam karta hai?

- **[[thinker:Friedrich Engels]] (*The Origin of the Family, Private Property and the State*):** Engels ne bataya ki shuruati samaj mein koi sexual bandish nahi thi, par jaise hi kheti se surplus aur **private property** bani, mardon ko yeh pakka karna tha ki unki zameen unhi ke biological bete ko mile — isi paternity certainty ke liye auraton par ==monogamous marriage== thopi gayi.
- **Marxist Feminists ([[thinker:Margaret Benston]], [[thinker:Fran Ansley]], [[thinker:Angela Davis]], [[thinker:Diane Feeley]]):** Working-class family capitalism ki superstructure hai: yeh naye mazdoor paida karti hai (Davis), bachon ko authority ke aage jhukna sikhati hai (Feeley), aur biwi-bachon ki zimmedari ke bojh se mard mazdoor hartal nahi kar paata. [[thinker:Margaret Benston]] ne dikhaya ki aurat ke unpaid gharelu kaam ki wajah se **"ek mazdoor ki tankhwah mein capitalist ko do logon ki mehnat milti hai."** Aur [[thinker:Fran Ansley]] ne mashhoor jumla diya ki wives ghar mein **"takers of shit"** banti hain — factory mein shoshit pati apna saara gussa ghar aakar patni par nikaalta hai, jisse capitalist malik chain ki neend sota hai.
- **Liberal & Radical Feminists ([[thinker:Ann Oakley]], [[thinker:Jessie Bernard]]):** Oakley ne dikhaya ki bachpan se ladkon ko bandook aur ladkiyon ko gudiya-kitchen set dekar gender socialisation hota hai, aur aage chalkar **mother-housewife role** ki unpaid, monotonous ghutan "public health crisis number one" ban jaati hai. [[thinker:Jessie Bernard]] ne sabit kiya ki har shaadi mein asal mein **do shaadiyan hoti hain — "His Marriage" aur "Her Marriage"**: shaadishuda mard kunware mardon se zyada lamba aur khush jeete hain (net beneficiaries), jabki shaadishuda auratein kunwari auraton se zyada bimar aur tanav mein rehti hain (net losers).

| Theoretical Lens | Mukhya Thinkers | Family ka Roop | Core Concept / Metaphor |
| --- | --- | --- | --- |
| Functionalist | G.P. Murdock, T. Parsons | Samaj ki neev aur emotional cushion | 4 Vital & 2 Irreducible Functions |
| Critical / Psy | Vogel & Bell, Leach, Laing, Cooper | Tanav aur conformity ka pressure cooker | Scapegoating, Overloaded Circuit, Gangster Nexus |
| Marxist Feminist | Engels, Benston, Fran Ansley | Capitalism ko bachane wali superstructure | Private Property, One Wage Buys Two, Takers of Shit |
| Feminist / Practice | Ann Oakley, Jessie Bernard, D. Morgan | Gender bhedbhav aur rozmarra ki kriya | Mother-Housewife Role, His/Her Marriage, Doing Family |

## Family vs Household aur A.M. Shah ka Developmental Cycle

Aasaan shabdon mein samjho: aam bolchal mein hum "family" aur "household" ko ek maan lete hain, par [[thinker:A.M. Shah]] (*The Household Dimension of the Family in India*) ne samjhaya ki academic research mein **"family"** shabd bahut confusing hai kyunki log ise kabhi ek ghar ke logon ke liye, kabhi alag shehar mein rehne wale maa-baap ke liye, toh kabhi poore khandan ke liye use karte hain. Iske mukable ==household== ek bilkul saaf aur scientific concept hai: Census of India ke mutabik household un logon ka samooh hai jo **ek hi chhat ke neeche rehte hain aur ek hi rasoi (common kitchen / chulha) ka bana khana khate hain**.

- **Household aur Family ka Farak:** Family hamesha khoon ya shaadi ke rishte par tiki hoti hai aur ek akela insaan family nahi ho sakta. Lekin household mein ghar mein rehne wala domestic help bhi shamil hota hai, **single-person household** bhi hota hai, aur Census ise **Normal**, **Institutional** (hostels, PG, jail, old-age homes) aur **Houseless** (footpath par rehne wale) mein baant-ta hai. Census 2011 ke 24.8 crore households ka data dikhata hai ki Bharat ka average household size **4.8 persons** (rural 4.9, urban 4.6) hai, jisme 4.7 crore households mein do ya zyada married couples saath rehte hain.
- **Developmental Cycle of the Household (Process View):** [[thinker:A.M. Shah]], [[thinker:I.P. Desai]], [[thinker:K.M. Kapadia]] aur [[thinker:M.S. Gore]] kehte hain ki kisi parivaar ko hamesha ke liye "nuclear" ya "joint" ke dabbe mein band mat karo. Har household ek **developmental life cycle** se guzarta hai jiske 4 hisse hain: **Expansion** (bache ka janm ya bahu ka *in-marriage* se aana), **Shrinking** (buzurgon ki mrityu ya beti ka *out-marriage* se vidai hona), **Fission** (bhaiyon ka alag chulha/batwara hona), aur **Fusion** (vidhwa maa ya alag hui bua ka wapas saath aa kar rehna). [[eg:Dada-dadi, maa-baap aur 4 bhai-behen wala 8 logon ka joint household dada-dadi ke guzarne aur behenon ki shaadi ke baad 4 logon ka nuclear dikhne lagta hai, par bhai ki shaadi aur bache ke janm ke saath hi wahi ghar fir se 3-generation joint household ban jaata hai!]]
- **Indian Family Studies — Toot Rahi Hai ya Badal Rahi Hai?** Western scholars ([[thinker:William J. Goode]], [[thinker:Aileen Ross]] Bengaluru study) ko laga tha ki shehrikaran se joint family khatam ho jayegi. Par [[thinker:I.P. Desai]] (Mahua study) ne ==Functional Jointness== dikhaya — middle-class bhai naukri ke liye alag flats mein reh kar bhi buzurgo ki aagya, tyohar aur bimari/shaadi ke kharche saath nibhate hain. Wahin [[thinker:M.S. Gore]] (Agrawals of Delhi), [[thinker:Milton Singer]] (Madras industrialists) aur [[thinker:M.N. Srinivas]] (Coorg *Okka*) ne sabit kiya ki joint family modern business mein capital aur bharosa jod kar aur mazboot hoti hai. [[link:Paper 2 Unit 7 mein Pauline Kolenda ke 12 family types ke saath ise zaroor jodo.]]

## Marriage: Sacrament vs Contract aur Irawati Karve ke 4 Kinship Zones

Kya Bharat mein shaadi aaj bhi pavitra (sacred) hai? Paramparagat Hindu ==Vivah== koi contract nahi balki 16 Sanskaron mein se ek pavitra **sacrament** hai jo Agni ke saamne *Saptapadi* (saat phere) lekar janm-janmantar ke liye hota hai. Iske teen uddeshya hain — **Dharma** (dharmik kartavya), **Praja** (santan taaki *Pitru Rina*, *Deva Rina* aur *Rishi Rina* chukaye ja sakein) aur **Rati** (prem/pleasure) — jisme *Kanyadan* aur *Kulvadhu* (sasur/jeth se *avoidance* aur devar se *joking relationship*) jude hain. Iske ulat Muslim ==Nikah== ek **civil contract** (*Nikahnama*) hai jisme dulhan ki marzi (*Qubool*), gawah aur **Meher** (dulhan ka haq) anivarya hain. Aaj Hindu Marriage Act 1955 (divorce), court marriages, Shaadi.com aur destination weddings ne shaadi mein contract aur romance joda hai, par sacred rituals aaj bhi zinda hain.

Apni mashhoor kitab *Kinship Organization in India* (1953) mein [[thinker:Irawati Karve]] ne bhasha, geography aur marriage rules ke aadhar par Bharat ko **4 Kinship Zones** mein baanta:

- **1. Northern Zone (Indo-Aryan / Sanskritic — Hindi, Punjabi, Bengali, Pahadi):** Khoon (*Bhaiya/Pitaji*) aur sasural (*Saala/Sasurji*) ke shabd bilkul alag; **Four-Gotra Exogamy** (apna, maa, dadi aur nani ka gotra chhod kar), **Sapinda Exogamy** aur **Village Exogamy**; cousin marriage aur betiyon ki adla-badli par sakt rok; **Hypergamy** jahan ladke wale (bride-takers / *Daamaad*) hamesha unche maane jaate hain; nayi dulhan anjaan ghar mein jaati hai aur har shaadi se **kinship circle failta jaata hai**.
- **2. Southern Zone (Dravidian — Tamil, Telugu, Kannada, Malayalam):** Village exogamy ya 4-gotra ban nahi hota; **cross-cousin marriage** (mama ya bua ke bache se) aur **uncle-niece (mama-bhanji) marriage** ko pasand kiya jaata hai; generation se zyada Ego se umar (*Anna*) dekhi jaati hai; khoon ke rishtedar hi sasural wale bante hain, isliye dulhan jaane-pehchane ghar mein surakshit rehti hai aur kinship circle **consolidated (andar ki taraf juda)** rehta hai (saath hi Kerala mein Nayar *Tharavad* jaisi matrilineal parampara).
- **3. Central Zone (Rajasthan, Gujarat, MP, Maharashtra, Odisha):** North aur South ka sangam — jaise Rajasthan ke Jat 2-gotra aur Baniya 4-gotra maante hain, jabki Maharashtra ke Kunbi/Maratha mein South ki tarah cross-cousin marriage aur Gujarat mein *Nantra* (levirate) milta hai.
- **4. Eastern Zone (Scattered Mundari aur Mon-Khmer tribes):** Santhal, Ho aur Munda patrilineal hain jahan youth dormitories aur bride-price/service marriage chalti hai, jabki Meghalaya ke **Khasi** matrilineal hain jahan sabse chhoti beti (**ultimogeniture**) ko ancestral property milti hai.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Phase 1: 3-Gen Joint', text: 'Dada-dadi, maa-baap aur 4 bhai-behen ek chhat ke neeche (8 members)' },
      { label: 'Phase 2: Shrinking', text: 'Dada-dadi ka nidhan aur behenon ki shaadi (out-marriage) -> Nuclear unit (4 members)' },
      { label: 'Phase 3: Expansion', text: 'Bhai ki shaadi (in-marriage) aur bache ka janm -> Fir se 3-Gen Joint household (6 members)' },
      { label: 'Phase 4: Fission / Fusion', text: 'Bhaiyon ka batwara (fission) ya buzurgo ka wapas judna (fusion) — A.M. Shah' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'North Indian Kinship Zone (Irawati Karve)',
    rightTitle: 'South Indian Kinship Zone (Irawati Karve)',
    rows: [
      {
        aspect: 'Language & Region',
        left: 'Sanskritic / Indo-Aryan bhasha kshetra (North India)',
        right: 'Dravidian bhasha kshetra (Peninsular South India)',
      },
      {
        aspect: 'Exogamy & Village Rules',
        left: 'Strict Four-Gotra, Sapinda aur Village Exogamy',
        right: 'Clan exogamy; apne hi gaon ke andar shaadi common hai',
      },
      {
        aspect: 'Cousin & Preferential Marriage',
        left: 'Kisi bhi cousin se shaadi par poori tarah पाबंदी (taboo)',
        right: 'Cross-cousin aur mama-bhanji (uncle-niece) vivah ko tarjeeh',
      },
      {
        aspect: 'Kinship Terminology',
        left: 'Consanguineal (khoon) aur Affinal (sasural) ke alag-alag shabd',
        right: 'Blood aur in-law terms overlap karte hain; Ego se relative age pramukh',
      },
      {
        aspect: 'Bride-Giver vs Bride-Taker',
        left: 'Hypergamy: ladke wale unche, dahej aur gifts ka one-way flow',
        right: 'Dono parivaron mein barabari; betiyon ka exchange allowed',
      },
      {
        aspect: 'Bride Status & Kin Circle',
        left: 'Dulhan anjaan ghar mein dabi rehti hai; ever-expanding kin circle',
        right: 'Dulhan apne hi mama/bua ke ghar jaati hai; consolidated kin network',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Irreducible Functions of Family (Talcott Parsons)',
    meaning:
      'Modern industrial samaj mein nuclear family ke woh 2 moolbhoot kaam jo koi doosri sanstha nahi le sakti: Primary Socialisation of the Young aur Stabilisation of Adult Personalities.',
  },
  {
    kind: 'keyTerm',
    term: 'Developmental Cycle of the Household (A.M. Shah)',
    meaning:
      'Yeh processual samajh ki Indian households hamesha ke liye joint ya nuclear nahi hote, balki expansion, shrinking, fission aur fusion ke daur se guzarte rehte hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Functional Jointness (I.P. Desai)',
    meaning:
      'Jab shehri naukri ki wajah se bhai alag-alag makanon mein rahein, par buzurgo ke adhikar, tyohar aur aarthik zimmedariyon mein ek joint parivaar ki tarah jude rahein.',
  },
  {
    kind: 'keyTerm',
    term: 'Family Practices (David Morgan)',
    meaning:
      'Family ko ek static dhancha (noun) maan-ne ke bajaye rozmarra ke pyar, dekhbhal aur saath jeene ki kriya ("doing family" as an active verb) ke roop mein dekhna.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'mn-srinivas',
    quote: 'The joint household adapts actively to modern education and urban enterprise rather than vanishing into Western individualism.',
    context: 'Coorg Okka aur shehri parivaron ke zariye dikhaya ki Indian kinship modernity ke saath kaise dhalta hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Theoretical Perspectives on Family mein 14+/20 Kaise Laayein?',
    body: 'Sirf Murdock aur Parsons likh kar mat rukna! Answer ko 5 lenses mein baanto: (1) Functionalist (Murdock ke 4 functions, Parsons ke 2 irreducible functions), (2) Critical/Psychiatric (Vogel & Bell scapegoating, Leach overloaded circuit, Laing gangster nexus, Cooper death of family), (3) Marxist Feminist (Engels private property, Benston one wage buys two, Ansley takers of shit), (4) Feminist (Oakley housewife boredom, Bernard His/Her marriage), aur (5) Practice Turn (David Morgan doing family & Cheal family talk).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Family aur Household ko Ek Maan Lena',
    body: 'Jab UPSC Family vs Household poochhe (2018, 2016), toh A.M. Shah ko centre mein rakho: Family khoon aur shaadi ka bhavnatmak rishta hai, jabki Household ek Census unit hai jo ek chhat aur ek rasoi (common chulha) share karta hai (jisme akela vyakti ya domestic servant bhi ho sakta hai).',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Indian Family Studies ka Formula (GDS-SKR)',
    body: '2015 ke PYQ ke liye 6 naam ungliyon par rakho: Gore (Delhi Agrawals), Desai (Mahua functional jointness), Shah (Household developmental cycle), Singer (Madras industrialists), Kolenda (12 family types), aur Ross (Bengaluru nuclearisation).',
  },
  {
    kind: 'answerBox',
    intro:
      'Family, household aur marriage kinship system ke teen stambh hain jo biological reproduction, emotional suraksha, property transfer aur samajik badlaav ko aapas mein jodte hain.',
    points: [
      'Functionalist base: G.P. Murdock (250 societies) ne 4 vital functions diye, aur Talcott Parsons ne 2 irreducible functions (primary socialisation aur adult personality stabilisation) bataye.',
      'Critical & Feminist critique: Vogel & Bell (scapegoating), Leach (overloaded circuit), Laing (gangster nexus), Benston (unpaid domestic labour), Ansley (takers of shit) aur Bernard (His vs Her marriage) ne parivaar ke andar ki politics dikhayi.',
      'Practice turn: David Morgan ("doing family") aur David Cheal ("family talk") ne family ko rigid structure se hata kar rozmarra ke fluid practices se joda.',
      'Household vs Family (A.M. Shah): Household ek commensal unit hai jo expansion, shrinking, fission aur fusion ke developmental cycle se guzarta hai, jabki I.P. Desai functional jointness dikhate hain.',
      'Regional diversity: Irawati Karve ke 4 kinship zones North India ke exogamous, hypergamous system aur South India ke cross-cousin, consolidated system ka farak saaf karte hain.',
    ],
    conclusion:
      'Modernity ke daur mein parivaar aur vivah khatam nahi ho rahe, balki parampara aur vyaktigat azaadi ke beech naye roop mein dhal rahe hain.',
  },
]

export const topic1Hi: TopicLangContent = {
  summary:
    'Kinship, family, household aur marriage ka sampoorna vishleshan — functionalist (Murdock, Parsons), critical (Leach, Laing, Cooper), Marxist-feminist (Engels, Benston, Ansley, Oakley, Bernard) aur practice (David Morgan) perspectives ke saath A.M. Shah ka household developmental cycle aur Irawati Karve ke 4 Indian kinship zones.',
  mindMap,
  sections,
}