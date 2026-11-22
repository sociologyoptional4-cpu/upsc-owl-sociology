import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

const summary =
  'Indian village ke colonial myth "Little Republics" ko 1950s ke empirical village studies ke zariye dismantle karta hai. Chaar ideological nazariye (Colonial, Gandhi, Ambedkar, Nehru), field research ki chunautiyan, aur André Béteille ke civilizational microcosm aur Dipankar Gupta ke "dying village" thesis ke beech ki behes ko aasaan Hinglish mein samajhata hai.'

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 1 — Indian Village & Village Studies',
  center: 'Indian Village & Village Studies',
  subtitle: 'Colonial Myth • 1950s Golden Age • Fieldwork Hurdles • Dying Village Debate',
  branches: [
    {
      title: '1. Gaon ka Khayal & Little Republics',
      color: 'lavender',
      thinkers: ['Charles Metcalfe', 'Henry Maine', 'Karl Marx', 'M.N. Srinivas'],
      points: [
        'Colonial afsaron ne gaon ko akele, thahre hue "Little Republics" bataya',
        'Metcalfe (1810) ne tax extraction ko justify karne ke liye self-sufficiency ka dhol peeta',
        'Srinivas, Dube aur Shah ne sabit kiya: haat, rishtedaari aur shashan se gaon hamesha jude the',
        'Vertical inter-caste solidarity ke saath horizontal jati sangathan bhi kaam karte the',
      ],
    },
    {
      title: '2. Chaar Ideological Nazariye',
      color: 'yellow',
      thinkers: ['Mahatma Gandhi', 'B.R. Ambedkar', 'Jawaharlal Nehru', 'André Béteille'],
      points: [
        'Gandhi: Gram Swaraj, naitik sachai, cottage udhyog banam shehron ka lalach',
        'Ambedkar: Bhedbhav aur gutbazi ka adda; gaon ki azaadi matlab unchi jaatiyon ki tanashahi',
        'Nehru: Sanskritik pichhadapan; modern science, dams aur sarkari planning se badlaav',
        'Béteille: Gaon Bharatiya sabhyata ke buniyadi values (jaati, parivar, zameen) ka aaina hai',
      ],
    },
    {
      title: '3. Village Studies ka Golden Age (1950s–60s)',
      color: 'mint',
      thinkers: ['M.N. Srinivas', 'S.C. Dube', 'McKim Marriott', 'Robert Redfield'],
      points: [
        'Police state se nikal kar azaad Bharat ka lok kalyankari welfare state banna',
        '1951 Census: 82.7% aabadi gaon mein; Five Year Plans ke liye ground facts zaroori the',
        'Untouchability Offences Act (1955) aur land reform laws ka asar check karna',
        'Cold War geopolitics aur Ford Foundation se peasant society research ko funding',
      ],
    },
    {
      title: '4. Methodology Chunautiyan & Samkalin Behes',
      color: 'pink',
      thinkers: ['Louis Dumont', 'Dipankar Gupta', 'Surinder S. Jodhka', 'Oscar Lewis'],
      points: [
        'Fieldwork ki mushkilein: Brahmin agrahara bias, gaon walon ka shaq, bhasha ki rukawat',
        'Srinivas ki "The Remembered Village": Aag mein notes jalne ke baad memory se likhi kitaab',
        'Dumont & Pocock: Gaon sirf zameen ka tukda hai; asli samajik sanstha toh jaati aur kinship hai',
        'Dipankar Gupta: Dying village, nocturnal dormitories, kheti chhodne ki majboori',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u03-01-village-studies-debate.webp',
    alt: 'P2 Unit 3 infographic: Indian Village & Village Studies — Myth of Little Republics vs Field Realities',
    caption:
      'Colonial daur ka "Little Republics" ka khwab kaise 1950s ke empirical village studies ke saamne toota aur gaon jaati shashan, bhedbhav aur badlaav ka adda nikla.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 3 Visual 01',
  },
  {
    kind: 'md',
    body: `## Indian Village ka Khayal: "Little Republics" ka Sach

Aasaan shabdon mein samjho: sadiyon tak kaviyon aur angrez afsaron ne Bharatiya gaon ko ek aisi shaant aur azaad duniya bataya jo bahar ki duniya se poori tarah kati hui thi. Unka kehna tha ki chahe Delhi ke takht par Mughal baithein ya Angrez, gaon ke kisan ko koi farq nahi padta — woh apni zameen jotta hai aur akele mast rehta hai. Is soch ko sabse bada naam diya 1810 mein British administrator [[thinker:Charles Metcalfe]] ne, jinhone Bharatiya gaon ko ==Little Republics== (chhote ganatantra) kaha. Metcalfe ne likha ki gaon ke paas apni zaroorat ki har cheez andar hi hoti hai, unhe bahar se koi lena-dena nahi hota; jung hoti rahein, hukumat badalti rahe, par gaon hamesha ek jaisa, atal aur self-sufficient rehta hai.

Isi baat ko aage badhate hue 1871 mein [[thinker:Henry Maine]] ne gaon ko Bharatiya samaj ka "sabse majboot aur kabhi na tootne wala hissa" bataya. Yahan tak ki [[thinker:Karl Marx]] ne bhi British reports padh kar apna ==Asiatic Mode of Production== theory banaya aur kaha ki gaon ki self-sufficiency aur kheti ke saath gharelu dastkari ka judav hi Asia ke hazaron saal purane thahrav ka kaaran hai.

Lekin azaadi ke baad jab Bharatiya samaj-shastriyon ne gaon mein jaakar research ki, toh yeh colonial daava poori tarah jhooth nikla. [[trap:Yeh mat sochna ki Metcalfe ne kisanon ke pyaar mein gaon ko Little Republic kaha — angrez yeh dikhana chahte the ki kisan ko sirf kheti aur lagan se matlab hai, desh mein kaun shashan kar raha hai usse koi farq nahi padta, taaki British loot ko justify kiya ja sake.]] Sociologists ne dikhaya ki gaon kabhi bhi akele nahi the:

- **Economic Nirbharta:** Har gaon ko pados ke gaon ke haat-bazaar, ghumantu jaatiyon aur lohar-badhai jaise kaarigaron par nirbhar rehna padta tha.
- **Village Exogamy (Bahir-vivah):** North India mein niyam tha ki ladki ki shaadi apne gaon ke bahar hogi. Isse darjano gaon aapas mein rishtedaari ke pakke taane-baane mein bandh jaate the.
- **Political Adhikar:** Gaon par raja ke zamindar, patwari aur courts ka poora control tha; yuddh aur sukhe se gaon ki aabadi bar-baar badalti rehti thi.

## Gaon Par Chaar Ideological Nazariye

Aasaan shabdon mein samjho: azaad Bharat mein gaon ko kaise dekha gaya, ispar chaar bade leaders aur vichardharon ka aapas mein tagda vivad tha:

| Nazariya | Gaon ka Core Concept | Autonomy / Self-Sufficiency par Soch | Policy & Desh ke Liye Vision |
|---|---|---|---|
| **Colonial View** (*Metcalfe, Maine*) | Thahre hue "Little Republics"; qismat ke bharose jeene wale kisan. | Poori tarah self-sufficient aur bahar ki duniya se bekhabar. | British tax collection ko justify kiya; kisan ko shant praja samjha. |
| **Gandhian View** (*Mahatma Gandhi*) | Sachai, ahimsa aur saadgi ka pavitra kendra (*Gram Swaraj*). | Kudrati roop se azaad the; Angrezon ne unki self-reliance todi. | Gaon ka decentralisation, charkha, khadi aur cottage udhyog ka punar-utthan. |
| **Ambedkarite View** (*B.R. Ambedkar*) | Bhedbhav, chhuachhoot aur unchi jaatiyon ki tanashahi ka adda. | Romantic view ko nakaara; gaon ki azaadi matlab Daliton par zulm. | Sarkari kanoon, reservation, modern education aur shehron ki azaad hawa. |
| **Nehruvian View** (*Jawaharlal Nehru*) | Sanskritik aur intellectual roop se pichhada; andh-vishwas mein jakda. | Kamzor sthiti; state-led planned investments se modernize karna zaroori. | Planning Commission, heavy industry, modern dams, primary schools aur land reforms. |
| **Academic Field View** (*Srinivas, Dube, Béteille*) | Dynamic, stratified community jahan vertical unity aur external linkages hain. | Empirical field reality jo akele nahi balki bahar se judi hai. | Kitabi shastron ke bajaye ground-level field data par policy banana. |

### 1. Gandhiji ka Nazariya: Gram Swaraj aur Saadgi

[[thinker:Mahatma Gandhi]] gaon ko Bharat ki aatma maante the. Unka maanna tha ki modern shehar lalach, consumerism aur shoshan par tike hain, jabki gaon mein aamne-saamne ka prem, saadgi aur ahimsa zinda rehti hai. Gandhi ji ne desh ki azaadi (*Purna Swaraj*) ko ==Gram Swaraj== ke barabar rakha — yaani har gaon apni roti, kapda aur shashan khud chalane wala swavlambi kendra bane. [[eg:Gandhiji ne Charkhe ko azaadi ka sabse bada prateek banaya taaki gaon ka kisan Manchester ki mill ke bajaye apna kapda khud kaate aur swavlambi bane.]]

### 2. Babasaheb Ambedkar ka Aakrosh: Inequity aur Factionalism ka Adda

Iske bilkul ulat, [[thinker:B.R. Ambedkar]] ne gaon ki kisi bhi romantic tareef ko saaf nakaar diya. Gaon mein chhuachhoot aur jaati-shoshan ka zeher jhel chuke Ambedkar ji ne 1948 mein Constituent Assembly mein khulkar kaha ki Bharatiya gaon kuch aur nahi balki ==cesspool of factionalism and a den of inequity== (gutbazi aur bhedbhav ka adda) hain. Ambedkar ji ne chetavani di ki gaon ko bina kanooni suraksha ke azaadi dene ka matlab hoga unchi jaatiyon ko Daliton par zulm karne ki khuli chhoot dena. Unhone Daliton ko salah di: "Padho, sangharsh karo, sangathit ho" aur gaon chhod kar shehron ki taraf jao jahan anjaan bheed mein kam se kam aatm-samman mil sake.

### 3. Pandit Nehru ka Vision: Planned Modernization

[[thinker:Jawaharlal Nehru]] bhi gaon ke pichhadapan se waqif the, par woh jaante the ki 80% se zyada aabadi gaon mein hai toh vikas wahin se shuru hoga. Nehru ji gaon ko andh-vishwas aur purane rivajon mein fansa maante the. Woh purane charkhe ke bajaye gaon mein modern science, badi naharein, dams ("modern Bharat ke mandir"), tractor aur school pahunchana chahte the taaki kisan rational citizen ban sake.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Colonial Myth ("Little Republics")',
    rightTitle: 'Ground Reality (1950s Sociologists)',
    rows: [
      {
        aspect: 'Aarthik Dhancha',
        left: 'Poori tarah swavlambi; har cheez gaon ke andar hi paida hoti thi.',
        right: 'Hafta-wari haat, bazaar, credit aur bahar ke lohar-sunar par nirbhar.',
      },
      {
        aspect: 'Rishtedaari & Vivah',
        left: 'Band community jahan shaadi-byah sab gaon ke andar hi hota tha.',
        right: 'Village exogamy ke niyam se darjano gaon aapas mein samdhi banate the.',
      },
      {
        aspect: 'Samajik Ekta',
        left: 'Ek parivar ki tarah prem-bhaav se bina kisi vivad ke jeene wale log.',
        right: 'Jaati bhedbhav, asprishyata aur zameen-shashan ke liye aapas mein ladne wale factions (gut).',
      },
      {
        aspect: 'Rajneetik Talluq',
        left: 'Bahar ke raja, kanoon ya yuddh se gaon ko ratti bhar farq nahi padta tha.',
        right: 'Lagan afsar, zamindar, thana aur adalaton se poori tarah bandha hua gaon.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Village Studies ka Golden Age (1950s–1960s)

Azaadi ke turant baad ke do dashak (1950 aur 1960 ka daur) Bharatiya samaj-shastra mein **Golden Age of Village Studies** kehlate hain. Is daur mein desh-videsh ke top sociologists ne gaon mein mahinon guzaare, diary likhi aur kisanon ke sath reh kar field reality samjhi. Is boom ke 6 mukhya kaaran the:

1. **Welfare State ka Janam:** Angrezon ki police state sirf tax lene aati thi; azaad Bharat ka sanvidhan ek welfare state bana jiska maksad aam nagrik ki bhalai tha.
2. **82.7% Aabadi ka Sach:** 1951 Census ke anusaar desh ki **82.7% janta gaon mein basti thi**. Gaon ko jaane bina koi bhi policy nahi ban sakti thi.
3. **Five-Year Plans ki Zaroorat:** Planning Commission ko Community Development Programme (CDP 1952) aur kheti sudhar ke liye zameeni data chahiye tha.
4. **Naye Kanoonon ka Ground Asar:** Untouchability Offences Act (1955) aur Zamindari Abolition kanoon sach mein zameen par lagoo ho rahe hain ya sirf kagazon par hain, yeh dekhne ke liye researchers gaon gaye.
5. **Western Peasant Studies ka Craze:** Chicago University ke [[thinker:Robert Redfield]] ne "Peasant Society" ka concept diya; videshi scholars ko Bharatiya gaon research ke liye sabse behtareen laboratory lage.
6. **Cold War aur American Funding:** America ki Ford Foundation aur Rockefeller Foundation ne bhari grants diye taaki Bharat ko dikhaya ja sake ki bina Communist kranti ke bhi loktantra se gaon ka vikas ho sakta hai.

## Fieldwork ki Mushkilein aur Methodological Challenges

Gaon mein jaakar research karna kitabon mein padhne jitna aasan nahi tha; researchers ko anek practical aur dimagi samasyaon ka samna karna pada:

- **Gaon Walon ka Shaq:** Shehri research scholars ko gaon wale aksar CID ke jasoos, tax inspector ya naye kanoon lagane wale afsar samajh kar shaq ki nigaah se dekhte the. [[eg:Jab S.C. Dube Shamirpet (Hyderabad) gaye, toh logon ko laga sarkari team unki zameen aur bhains par naya tax lagane aayi hai.]]
- **Bhasha aur Boli ki Deewar:** Kitabi bhasha gaon ki local boli se bilkul alag hoti thi, isliye researchers ko pehle local idioms sikhne padte the ya gaon ke master ji ka sahara lena padta tha.
- **Brahmin Agrahara ka Bias:** Zyadatar researchers unchi jaati aur shehri background ke the. Gaon mein rehne ke liye unhe unchi jaati ke mohalle (Brahmin agrahara) mein jagah milti thi. Iska nuksan yeh hua ki Dalit aur pichhdi jaati ke log wahan aane se darte the, jisse shuruati monographs mein unchi jaati ka nazariya zyada chhap gaya.
- **Apne Samaj ko Padhne ka Subjective Dosh:** [[thinker:M.N. Srinivas]] ne khud likha ki jab ek researcher apne hi ilaqe ka gaon padhta hai (jaise Srinivas ne Karnataka ka Rampura padha), toh gaon wale foran uski jaati pehchan lete hain aur use usi hisab se treat karte hain, jisse objective distance banana mushkil ho jaata hai.
- **Aag mein jali notes se bani Masterpiece:** Srinivas ki mashhur kitaab *The Remembered Village* (1976) ek haadse se nikli — 1970 mein Stanford mein ek aag lagne se unki saari original field diaries jal gayi thi, jiske baad unhone poori kitaab apni yaadasht se dobara likhi.

## Civilizational Values banam "Dying Village" ki Behes

Kya aaj bhi gaon Bharat ke mukhya samajik taane-baane ko represent karta hai? Samaj-shastriyon ke beech ispar do takraate hue vichar hain:

### André Béteille: Gaon Bharatiya Sabhyata ka Microcosm Hai
[[thinker:André Béteille]] ne Tamil Nadu ke Sripuram gaon par study karke bataya ki gaon mein makan, fasal aur boli chahe alag ho, par poore Bharat ke gaon ek hi sabhyata ke dhaage mein piroye hain. Gaon Bharatiya sanskriti ke core values ka chhota roop (microcosm) hai: jaati ka hierarchy, sanyukt parivar, zameen ke prati pavitra aadar, sanskar aur parampara har gaon mein waisi hi milti hai.

### Dumont aur Pocock ka Structuralist Virodh
1957 mein [[thinker:Louis Dumont]] aur [[thinker:D.F. Pocock]] ne gaon ko primary unit maanne ka kade shabdon mein virodh kiya. Unka kehna tha ki gaon sirf ek zameen ka tukda ya administrative boundary hai, uski apni koi samajik aatma nahi hoti. Asli samajik sanstha toh **Jaati (Caste)** aur **Rishtedaari (Kinship)** hai jo gaon ki deewaron ko paar karke saikdon gaon tak phailti hai.

### Dipankar Gupta: "Whither the Indian Village?" (Martaa Hua Gaon)
2005 mein [[thinker:Dipankar Gupta]] ne apni kitaab mein daava kiya ki gaon ab khatam ho raha hai:
- **Kheti ka Ghata:** Zameen ke chhote-chhote tukde hone aur mehangai se kheti mein koi munafa nahi bacha; kisan ka beta kheti se bhaagna chahta hai.
- **Nocturnal Dormitories (Sone ka Adda):** Gaon ab sirf raat ko sone ki jagah ban gaye hain. Din mein naujawan shehar jaakar tempo chalate hain ya deewar chunte hain aur sirf raat ko gaon laut te hain.
- **Jajmani ka Ant:** Purane apsi rishte toot chuke hain, unki jagah daily cash mazdoori aur jaati ke aamne-saamne ke sangharsh ne le li hai.

### Surinder S. Jodhka: Village Studies ka Punar-utthan
Iske khilaf [[thinker:Surinder S. Jodhka]] kehte hain ki gaon mar nahi raha, balki badal raha hai. Jodhka kehte hain ki hamein gaon ko purani romantic aankhon se dekhne ke bajaye naye muddo par padhna hoga: Daliton ki nayi political aawaz, groundwater crisis, aur smartphone va digital upi se gaon ke yuvaon ki badalti aakankshayein.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1810',
        title: 'Charles Metcalfe ka Minute',
        text: 'Bharatiya gaon ko akele, unchanging aur self-sufficient "Little Republics" ka naam diya.',
      },
      {
        year: '1871',
        title: 'Henry Maine ki Comparative Law Study',
        text: 'Gaon ko Bharatiya samaj ki sabse mazboot aur kabhi na tootne wali unit bataya.',
      },
      {
        year: '1948',
        title: 'Babasaheb Ambedkar ka Bhashan',
        text: 'Constituent Assembly mein gaon ko gutbazi aur jaati-shoshan ka adda keh kar warning di.',
      },
      {
        year: '1955',
        title: 'India’s Villages Kitaab',
        text: 'M.N. Srinivas ne Rampura, Shamirpet aur Mohana ke empirical studies compile karke Golden Age shuru kiya.',
      },
      {
        year: '1957',
        title: 'Dumont & Pocock ka Structuralist Virodh',
        text: 'Daava kiya ki gaon ki koi apni samajik reality nahi hai, asli cheez sirf caste aur kinship hai.',
      },
      {
        year: '2005',
        title: 'Dipankar Gupta: "Whither the Indian Village?"',
        text: 'Kheti ke ghatte aur shehri mazdoori se gaon ke "nocturnal dormitory" banne ka thesis pesh kiya.',
      },
      {
        year: '2012',
        title: 'Surinder Jodhka: "Village Society"',
        text: 'Gaon ko khatam maanne ke bajaye digital technology, ecology aur Dalit shakti ke lens se dekhne ki maang ki.',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Little Republics',
    meaning:
      'Charles Metcalfe (1810) ka colonial concept jo Bharatiya gaon ko galat dhang se akele, unchanging aur aarthik roop se self-sufficient batata tha.',
  },
  {
    kind: 'keyTerm',
    term: 'Dominant Caste',
    meaning:
      'M.N. Srinivas ka concept aisi jaati ke liye jo aabadi mein badi ho, gaon ki zameen par qabza rakhti ho aur modern rajneeti mein dabba rakhti ho.',
    thinkerSlug: 'mn-srinivas',
  },
  {
    kind: 'keyTerm',
    term: 'Vertical banam Horizontal Unity',
    meaning:
      'M.N. Srinivas ka farq: gaon ke andar alag-alag jaatiyon ki aapsi nirbharta (vertical) aur door-door tak phaili ek hi jaati ki biradari (horizontal).',
    thinkerSlug: 'mn-srinivas',
  },
  {
    kind: 'keyTerm',
    term: 'Nocturnal Dormitories',
    meaning:
      'Dipankar Gupta ka shabd aise gaon ke liye jahan ke log din bhar shehron mein gair-kheti mazdoori karte hain aur sirf raat ko sone gaon aate hain.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'mn-srinivas',
    quote: 'An insult to one’s village has to be avenged just like an insult to one’s mother or wife.',
    context: 'Gaon walon ki aapsi bhavnatmak ekta aur bahar walon ke khilaf gaon ki asmita ko darshate hue.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'br-ambedkar',
    quote: 'The Indian village is a cesspool of factionalism, a den of inequity, narrow-mindedness, and communal ruin.',
    context: 'Constituent Assembly mein gaon ke pradhanon ko bina constitutional safeguards ke adhikar dene ke khilaf chetavani.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Paper 1 ↔ Paper 2 Link: Functionalism aur Conflict ka Gaon mein Mel',
    body: 'UPSC answers mein 1950s village studies ko Paper 1 se jodo. Srinivas aur Dube ka jajmani harmony aur vertical solidarity Classical Functionalism ka roop hai. Wahin Ambedkar ka aakrosh, Dumont ka structuralism aur Marxist sociologists (A.R. Desai, Kathleen Gough) ka kisan shoshan Paper 1 ke Conflict Perspective ko zameen par dikhata hai.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Metcalfe aur Gandhi ko ek jaisa mat samajhna',
    body: 'Kayi students Metcalfe ke Little Republics aur Gandhi ke Gram Swaraj ko ek hi samajh lete hain kyunki dono ne self-sufficiency ki baat ki. Farq yaad rakho: Metcalfe ne us daur ke gaon ko shant aur thahra hua tax source bataya, jabki Gandhi ji ne kaha ki Angrezon ne gaon ko loota hai aur hamein cottage crafts se gaon ko azaad karna hoga.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Village Studies Mnemonic: 5 Classic Case Studies (R-S-S-K-B)',
    body: 'Top marks ke liye yeh 5 empirical studies rat lo: (1) Rampura (Karnataka) – M.N. Srinivas (Dominant Caste, Remembering); (2) Shamirpet (Telangana) – S.C. Dube (Inter-caste Jajmani); (3) Sripuram (Tanjore) – André Béteille (Caste, Class, and Power); (4) Kishan Garhi (UP) – McKim Marriott (Universalisation & Parochialisation); (5) Bisipara (Odisha) – F.G. Bailey (Caste and Economic Frontier).',
  },
  {
    kind: 'answerBox',
    intro:
      '1950s ka dashak Bharatiya samaj-shastra mein village studies ka golden period tha, jisne shastron ki armchair padhai ko hata kar ground-level empirical science banaya.',
    points: [
      'Welfare state ka janam: Azaad sarkar ko Five Year Plans aur garibi hatane ke liye zameeni kisanon ke pakke facts ki zaroorat thi.',
      'Aabadi ka sach: 1951 mein desh ki 82.7% aabadi gaon mein thi, isliye rashtra-nirman ke liye rural sociology sabse aage aayi.',
      'Kanoonon ki parakh: Untouchability Offences Act (1955) aur Zamindari Abolition zameen par kitna safal hain, iski jaanch field study se hui.',
      'Colonial myth ka ant: Empirical studies ne Metcalfe ke "Little Republics" ko jhooth sabit karke gaon ke bahari bazaar aur rishtedaari ke taane-baane dikhaye.',
      'Theoretical tarakki: M.N. Srinivas ke netritva mein Dominant Caste aur Sanskritization jaise shaktishali concepts nikle.',
      'Samkalin roop: Surinder Jodhka ke anusaar gaon mara nahi hai, balki Dalit asserting shakti, digital payments aur ecology ke naye roop mein badal raha hai.',
    ],
    conclusion:
      'Village studies ne Bharatiya samaj-shastra ko text se utha kar field mein khada kiya, aur aaj ki kisan samasyaon ko samajhne ki neev yahi studies hain.',
  },
]

export const topic1Hi = {
  summary,
  mindMap,
  sections,
}
