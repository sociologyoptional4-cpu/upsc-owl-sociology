import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

const summary =
  'Angrezi colonial shashan dwara Bharat ke tribal samaj par kiye gaye zulm aur badlavon ko kholta hai. Eminent Domain ke kanooni jaal se jungle chhinna, Government of India Acts ke tehat Excluded Areas banakar alag-thalag karna, shoshankari dikus aur sahukaron ki loot se bhadke vidroh (Santhal Hool, Birsa Munda ka Ulgulan), aur 2006 ke Forest Rights Act (FRA) dwara aitihasik annyay ko theek karne ki koshish ko aasaan Hinglish mein samajhata hai.'

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 3 — Colonial Policies and Tribes',
  center: 'Colonial Loot & Tribal Vidroh',
  subtitle: 'Jungle Par Kabza • Segregation Kanoon • Diku Shoshan • FRA 2006 Sudhar',
  branches: [
    {
      title: '1. Jungle Par Kabza & Eminent Domain',
      color: 'lavender',
      thinkers: ['Karl Marx', 'Ramachandra Guha', 'Madhav Gadgil', 'Dietmar Rothermund'],
      points: [
        'Angrezon se pehle jungle par poore gaon ka saajha customary haq hota tha',
        'British Navy ke jahaz aur railway sleepers ke liye teak aur sal ki lakdi ki andhadhundh loot',
        'Eminent Domain (Terra Nullius): Angrez sarkar ne saari zameen apni bata kar aadiwasiyon ko ghuspaithiya kaha',
        '1865, 1878 aur 1927 ke Forest Acts: Reserved aur Protected jungle banakar jhum kheti aur lakdi chunna jurm banaya',
      ],
    },
    {
      title: '2. Segregation & Isolationism Ki Neeti',
      color: 'yellow',
      thinkers: ['G.S. Ghurye', 'Verrier Elwin', 'B.R. Ambedkar', 'David Hardiman'],
      points: [
        'Scheduled Districts Act (1874): Tribal ilaaqon ko aam kanoon se alag karke direct afsaron ke haath mein diya',
        'Government of India Act 1919 ne "Backward Tracts" banaye jo Governor ke direct control mein the',
        'Government of India Act 1935 ne "Excluded" aur "Partially Excluded" ilaaqe banaye jahan azaadi ki aawaz na pahuche',
        'Ghurye ne pardafash kiya: Yeh isolation aadiwasiyon ke bhale ke liye nahi, balki divide-and-rule aur loot ke liye tha',
      ],
    },
    {
      title: '3. Dikus, Sahukar & Militant Vidroh',
      color: 'mint',
      thinkers: ['Ranajit Guha', 'K.S. Singh', 'Sidhu and Kanhu', 'Birsa Munda'],
      points: [
        'Dikus: Bahari shoshankari log—mahajan, sahukar, thekedar aur daroga jinhone aadiwasiyon ko loota',
        'Cash lagaan ke chakkar mein sahukaron ne 50% se 200% saalana byaj par karz ka jaal bichhaya',
        'Bandhua mazdoori: Kamiya, Begar aur Gothi pratha se azaad kisan apne hi khet mein ghulam ban gaye',
        'Aitihasik vidroh: Santhal Hool (1855), Birsa Munda ka Ulgulan (1899) aur Rampa Rebellion (1922)',
      ],
    },
    {
      title: '4. Forest Rights Act (2006) Ka Sudhar',
      color: 'pink',
      thinkers: ['Walter Fernandes', 'Virginius Xaxa', 'Madhu Sarin', 'Amita Baviskar'],
      points: [
        'FRA ke Preamble ne pehli baar mana ki angrezon aur purani sarkaron ne aadiwasiyon ke sath aitihasik annyay kiya',
        '13 December 2005 se pehle kheti kar rahe parivaaron ko 4 hectare tak zameen ka Individual Forest Right (IFR)',
        'Minor Forest Produce (tendu patta, mahua, baans) par poore gaon ka Community Forest Right (CFR)',
        'Gram Sabha ko sarvochha taqat di gayi; par forest department ki afsarshahi aaj bhi claims reject karti hai',
      ],
    },
  ],
}

const sectionsHinglish: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u05-01-tribes-spread-policies.webp',
    alt: 'P2 Unit 5 infographic: Tribes: Spread & Colonial Impact — Definitional Debates, Geographical Zones & Colonial Rupture',
    caption:
      'Colonial Shoshan aur Aadiwasi Vidroh: Angrezon dwara jungle chhinne, sahukaron ki loot aur Birsa Munda jaise netaon ke vidroh ka pura aitihasik paridrishya.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 15 Visual 01',
  },
  {
    kind: 'md',
    body: `## Jungle Par Kabza: Azaad Maalik Se Ghuspaithiya Banane Ka Khel

Aasaan shabdon mein samjho, angrezon ke aane se pehle Bharat ke jungle aadiwasiyon ke saajha ghar the. Raja-maharaja aadiwasiyon se kabhi-kabhi haathi ya shehad jaise tohfe le lete the, lekin unke jal, jungle aur jameen ke customary adhikar mein koi taang nahi adaate the. Lekin 19th century mein jaise hi British East India Company ka dabdaba badha, unhone jungle ko aadiwasiyon ki azaad duniya ke bajaye lakdi aur munafey ka godown samajh liya.

Angrezon ko do cheezon ke liye behisab lakdi chahiye thi: pehla, British Royal Navy ke ladaaku jahaz banane ke liye kyunki Europe ke oak jungle khatam ho chuke the; aur doosra, pure desh mein railway tracks bichhane ke liye sleepers ki zaroorat thi. Is lakdi par poora kabza karne ke liye colonial sarkar ne Europe ka ek kanooni niyam lagoo kiya jise ==Eminent Domain== (aur *Terra Nullius* yani "laawaris zameen") kehte hain. Is kanoon ke tehat angrezon ne ailaan kiya ki saari zameen aur jungle British Crown ki malkiyat hain, aur aadiwasiyon ke sadiyon purane haq ko ek kaghaz ke tukde se radd kar diya.

Angrezon ne teen sakht kanoon banakar jungle aadiwasiyon se chheen liye:
1. **Government Forest Act (1865):** Pehli baar sarkar ne kanoon banaya ki pedon wali kisi bhi zameen ko sarkar apna jungle ghoshit kar sakti hai.
2. **Indian Forest Act (1878):** Dietrich Brandis ke banaye is kanoon ne jungle ko teen hisson mein baant diya:
   - *Reserved Forests:* Sarkari kanoon ka sabse sakht pinjra jahan aadiwasiyon ke saare adhikar khatam kar diye gaye; jhum kheti par rok lag gayi aur bina ijazat ghusna jurm ban gaya.
   - *Protected Forests:* Jahan thodi-bahut lakdi ya charaigaah ki ijazat di gayi, par sarkar jab chahe ise wapas le sakti thi.
   - *Village Forests:* Gaon ke liye chote-mote tukde, jo zameen par na ke barabar the.
3. **Indian Forest Act (1927):** Isne forest guard aur afsaron ko police jaisi taqatein de deen taaki wo aadiwasiyon ko pakad sakein, unka samaan zabt kar sakein aur unhein apni hi purkho ki zameen se ghuspaithiya bol kar nikaal sakein.

Samaj-shastriya vidwan [[thinker:Madhav Gadgil]] aur [[thinker:Ramachandra Guha]] ne bataya ki colonial forestry dar-asal paryavaran bachane ke naam par lakdi ki tijarat thi. Pidhiyon se mahua chunna, baans kaatna aur gayen charana achanak kanooni jurm ban gaya.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1865',
        title: 'Pehla Government Forest Act',
        text: 'British sarkar ko kisi bhi jungle wali zameen ko sarkari ghoshit karne ka kanooni haq mila.',
      },
      {
        year: '1874',
        title: 'Scheduled Districts Act',
        text: 'Tribal ilaaqon ko aam adalati aur revenue kanoon se alag karke British afsaron ke direct control mein diya.',
      },
      {
        year: '1878',
        title: '1878 Ka Forest Act',
        text: 'Reserved aur Protected forests banaye gaye; jhum kheti par poore desh mein ban laga diya gaya.',
      },
      {
        year: '1919',
        title: 'GOI Act 1919: "Backward Tracts"',
        text: 'Tribal ilaaqon ko chuni hui sarkaron se chheen kar provincial Governor ki marzi par chhod diya.',
      },
      {
        year: '1927',
        title: '1927 Ka Indian Forest Act',
        text: 'Forest guards ko arrest aur jurmana karne ki police powers dekar aadiwasiyon ko be-dakhal kiya gaya.',
      },
      {
        year: '1935',
        title: 'GOI Act 1935: Excluded Areas',
        text: 'Tribal frontier ko azaadi ke rashtriya andolan se kaatne ke liye strict segregation lagoo kiya gaya.',
      },
      {
        year: '2006',
        title: 'Forest Rights Act (FRA 2006)',
        text: 'Azaad Bharat ka aitihasik kanoon jisne mana ki aadiwasiyon ke sath 150 saal tak annyay hua tha.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Segregation Aur Isolationism Ki Chalak Neeti

Jungle chhinne ke sath-sath angrezon ne tribal ilaaqon ke prashashan ke liye ek alag neeti apnayi jise ==Isolationism== ya segregation kaha gaya. Angrez afsar yeh tark dete the ki tribal log bhole-bhaale hain aur kanoon nahi samajhte, isliye unhein shehri kanoon se alag thalag rakhna zaroori hai.

Is neeti ko kanoonon ke zariye lagoo kiya gaya:
- **Scheduled Districts Act (1874):** Is kanoon se tribal ilaaqon ko "Scheduled Districts" banakar aam civil aur criminal courts ke daayre se bahar kar diya gaya aur British Political Agents ka shashan bana diya.
- **Government of India Act (1919):** Tribal ilaaqon ko **"Backward Tracts"** kaha gaya, jahan chune hue Hindustani mantriyon ka koi dabdaba nahi tha; saari taqat seedhe angrez Governor ke hath mein thi.
- **Government of India Act (1935):** Isne segregation ko do hisson mein pakka kar diya:
  1. *Excluded Areas:* Naga Hills aur Lushai (Mizoram) jaise border ilaaqe jahan provincial government ka zero adhikar tha aur Governor akele raaj karta tha.
  2. *Partially Excluded Areas:* Chota Nagpur aur Santhal Parganas jaise Central India ke ilaaqe jahan koi bhi naya kanoon tabhi lagoo ho sakta tha jab Governor usko pass kare.

### Isolationism Par Samaj-Shastriya Sawaal

Beshak Verrier Elwin jaise shuruati anthropologists ne ise shoshan se bachav ka kavach bataya, lekin nationalist sociologist [[thinker:G.S. Ghurye]] (*The Aborigines—"So-Called"—and Their Future*) ne colonial mansoobe ki pol kholi:

1. **Rashtriya Azaadi Ke Andolan Se Kaatna:** Ghurye ne sabit kiya ki yeh alag-thalag karne ka khel dar-asal divide-and-rule tha taaki tribal log Gandhi ji aur desh ki azaadi ki ladai ke sath na jud sakein.
2. **Koyla Aur Khaniyon Ki Khuli Loot:** Tribal ilaaqon ko "Excluded" banakar angrezon ne shehri janta aur media ki nazron se door rakha taaki European companiyan Chota Nagpur se bina kisi rok-tok ke koyla, loha aur teak nikaal sakein.
3. **Missionaries Ka Ekchhatra Raaj:** Jahan desh ke samaj sudharakon aur netaon ko in ilaaqon mein ghusne se roka jata tha, wahi European Christian missionaries ko khuli chhoot thi jisse unka dharam-parivartan aasan hua aur wo Bharatiya paramparaon se door hue.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Angrezon Se Pehle Customary Haq',
    rightTitle: 'Colonial Kanoon Ka Zulm',
    rows: [
      {
        aspect: 'Malkiyat Ka Siddhhant',
        left: 'Samudayik malkiyat; zameen, jungle aur paani poore clan ka saajha dharohar tha (jal, jungle, jameen).',
        right: 'Eminent Domain & Terra Nullius; British Crown ne saari zameen aur jungle par sarkari kabza kar liya.',
      },
      {
        aspect: 'Jungle Ki Vanopaj',
        left: 'Lakdi, mahua, shehad chunne, gayen charane aur jhum kheti par aadiwasiyon ki poori azaadi thi.',
        right: '1878 aur 1927 ke kanoonon ke tehat ise chori, trespass aur illegal kabza bolkar jurmana lagaya gaya.',
      },
      {
        aspect: 'Lagaan Aur Karz',
        left: 'Achi fasal aane par thoda anaaj raja ko bhent diya jata tha; karz aur sahukari ka koi dabdaba nahi tha.',
        right: 'Tay tarikh par cash lagaan dena compulsory tha; na de pane par sahukar zameen hadap lete the.',
      },
      {
        aspect: 'Nyay Aur Faisla',
        left: 'Gaon ke buzurg aur clan mukhiya (Panch, Manjhi, Munda) aapsi parampara se jhagde suljhate the.',
        right: 'Angrezon ki kachehri, corrupt daroga aur thekedar jinhone aadiwasiyon ko kangaal bana diya.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Dikus Ka Aatank, Sahukari Aur Hatyarband Vidroh

Colonial kanoonon ne aadiwasiyon ki aatmanirbharta ko tod kar unke ilaaqon mein bahari shoshankari logon ke aane ka rasta khol diya. Central India ke tribal in bahari shoshakon ko ==Diku== kehte the. *Diku* sirf koi paraya aadmi nahi tha; iska asli matlab tha wo lootera jo aadiwasiyon ki zameen aur rozi-roti chhinne aaya tha.

Yeh shoshan teen dharon par chalta tha:
1. **Sahukar Aur Mahajan:** British sarkar cash mein lagaan maangti thi. Jab sookha padta, toh kisan mahajan ke paas jaata. Angrezon ki kachehri ke sahare mahajan **50% se lekar 200% tak saalana byaj** vasoolte the aur nakli kaghaz banakar zameen hadap lete the.
2. **Thekedar Aur Zamindar:** Angrezon ne aadiwasi zameen gair-tribal thekedaron ko nilam kar di. In thekedaron ne be-hisaab kar lagaye aur zabardasti muft kaam (==Begar== ya *Kamiya* pratha) karwaya, jisse azaad aadiwasi apne hi khet mein ghulam bandhua mazdoor ban gaya.
3. **Colonial Police Aur Kachehri:** Angrez police daroga aur judge hamesha padhe-likhe sahukar ki tarafdaari karte the aur anpadh aadiwasiyon ko jail mein daal dete the.

### Hatyarband Kranti Ke Dhamake

Jab kanoon aur arziyon se koi sunwai nahi hui, toh aadiwasiyon ne teer-kaman utha liye aur British shashan ke khilaf baghavat kar di:

| Vidroh | Saal Aur Ilaaqa | Mukhya Neta | Natija Aur Remedial Kanoon |
|---|---|---|---|
| **Santhal Hool** | 1855–56 (Rajmahal) | Sidhu aur Kanhu Murmu | Santhal Parganas Tenancy Act (1855) pass hua. |
| **Birsa Munda Ulgulan** | 1899–1900 (Chota Nagpur) | Birsa Munda | Chota Nagpur Tenancy Act (1908) mein Khuntkatti haq mila. |
| **Bastar Rebellion** | 1910 (Central Provinces) | Gunda Dhur | Angrezon ko reserved jungle ka kaam rokna pada. |
| **Rampa Rebellion** | 1922–24 (Godavari) | Alluri Sitarama Raju | Madras Forest Act ke khilaf guerilla ladai ladi gayi. |
| **Zameeni FRA Ladai** | 2006 (Poora Bharat) | Jan Andolan | Forest Rights Act (2006) se aitihasik nyay mila. |

- **Santhal Hool (1855–56):** Sidhu aur Kanhu Murmu ke netritva mein 30,000 se zyada Santhal teer-kaman lekar East India Company, zamindaron aur mahajanon ke khilaf lad pade. Beshak angrezon ne bhari goli-bari karke vidroh ko dabaya, par dar ke maare unhein **Santhal Parganas Tenancy Act (1855)** banana pada taaki tribal zameen non-tribals ko na bechi ja sake.
- **Birsa Munda Ka Ulgulan (Maha Vidroh, 1899–1900):** Chota Nagpur ke patharon mein bhagwan **Birsa Munda** ne *Munda Raj* qayam karne aur Beth-Begari khatam karne ke liye ==Ulgulan== ka ailaan kiya. Birsa ki shahadat ke baad angrez sarkar hil gayi aur unhein **Chota Nagpur Tenancy Act (1908)** pass karna pada, jisme Mundas ke *Khuntkatti* (purkho ki zameen) adhikar ko kanooni maanyata mili.
- **Rampa Rebellion (1922–24):** Andhra ke Godavari ilaaqe mein **Alluri Sitarama Raju** ne Koya kabile ke sath milkar 1882 ke Madras Forest Act ke khilaf guerilla warfare kiya.

## Forest Rights Act (2006): Aitihasik Annyay Ka Kaffara

1947 mein azaadi ke baad bhi jungle kanoon nahi badle. Forest department wahi colonial laathi chala kar aadiwasiyon ko be-dakhal karta raha. Is sadiyon purane paap ko dhone ke liye Parliament ne **Forest Rights Act, 2006** (FRA) pass kiya.

Is kanoon ke Preamble ne pehli baar maana ki angrezon aur pichhli sarkaron ne forest dwellers ke sath ==Historical Injustice== (aitihasik annyay) kiya hai jise theek karna zaroori hai.

Is kanoon ne chaar mukhya adhikar diye:
1. **Individual Forest Rights (IFR):** Jo aadiwasi **13 December 2005** se pehle se zameen par kheti kar rahe the, unhein 4 hectare tak zameen ka pakka pata diya gaya.
2. **Community Forest Rights (CFR):** Jungle ki ==Minor Forest Produce== (MFP) jaise tendu patta, mahua aur baans ko chunne, bechne aur use karne ka poora haq gaon ko mila, jisse forest department ki thekedari khatam hui.
3. **Community Forest Resource Rights (CFRR):** Gaon ko apne paramparik jungle ko bachane aur sambhalne ka kanooni adhikar mila.
4. **Gram Sabha Ki Sarvochhta:** Kisi afsar ke bajaye gaon ki **Gram Sabha** ko claim check karne aur pass karne ki taqat di gayi. Kisi udyog ke liye jungle kaatne se pehle Gram Sabha ki manzoori zaroori ki gayi.

Lekin aaj bhi Forest department ki afsarshahi kanoon ko daba kar baithi hai aur **40% se zyada claims bina thos vajah ke reject** kar diye jaate hain, jisse aadiwasiyon ki ladai aaj bhi jari hai.`,
  },
  {
    kind: 'keyTerm',
    term: 'Eminent Domain',
    meaning:
      'Colonial kanooni siddhant jisme sarkar ne sabhi zameen aur jungle par apna ekchhatra malkana haq jata kar aadiwasiyon ke saajha customary haq ko radd kar diya.',
  },
  {
    kind: 'keyTerm',
    term: 'Excluded and Partially Excluded Areas',
    meaning:
      'Government of India Act 1935 ke tehat banaye gaye aise tribal ilaaqe jahan chuni hui sarkaron ko hatakar Governor ko direct shashan ka adhikar diya gaya tha.',
  },
  {
    kind: 'keyTerm',
    term: 'Diku',
    meaning:
      'Central India ke aadiwasiyon ka shabd jo aise bahari shoshakon (sahukar, thekedar, corrupt daroga) ke liye use hota tha jinhone tribal zameen aur rozi-roti ko loota.',
  },
  {
    kind: 'keyTerm',
    term: 'Historical Injustice',
    meaning:
      'Forest Rights Act (2006) ke preamble ka aitihasik lafz jisme sarkar ne maana ki colonial aur purani sarkaron ne aadiwasiyon se unke jungle chheen kar annyay kiya tha.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Paper 1 ↔ Paper 2 Link: Karl Marx Ki Primitive Accumulation Se Jodo',
    body: 'UPSC ke answer mein colonial forestry ko Karl Marx ke "Primitive Accumulation" aur David Harvey ke "Accumulation by Dispossession" se jodo. Angrezon ne aadiwasiyon ko unke production ke sadhan (jungle) se be-dakhal karke bandhua mazdoor banaya.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karo: Colonial Isolation Ko Paryavaran Bachav Mat Samajhna',
    body: 'Kabhi yeh mat likhna ki angrezon ne aadiwasiyon ko prem se alag rakha tha. G.S. Ghurye ne dikhaya ki isolation dar-asal azaadi ki ladai se kaatne, minerals ki khuli loot machane aur Christian missionaries ko mauka dene ka shatirana plan tha.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Yaad Rakho: Vidroh Aur Kanoon Ka Joda',
    body: 'Hamesha vidroh ke sath uske kanoon ko jodo: (1) Santhal Hool (1855) -> Santhal Parganas Tenancy Act (1855); (2) Birsa Munda Ulgulan (1899) -> Chota Nagpur Tenancy Act (1908); (3) Colonial dispossession -> Forest Rights Act (2006).',
  },
  {
    kind: 'answerBox',
    intro:
      'Colonial policies ne Bharat ke tribal samaj par dohra prahar kiya: ek taraf Eminent Domain lagakar jungle chheena aur doosri taraf unhein isolation kanoonon se rashtriya chetna se kaat diya.',
    points: [
      'Jungle par vyaparik kabza: 1865, 1878 aur 1927 ke Forest Acts ne railway aur jahazon ki lakdi ke liye purane saajha haqqon ko jurm aur trespassing bana diya.',
      'Segregation aur Excluded Areas: Scheduled Districts Act 1874 se lekar GOI Act 1935 tak ne tribal ilaaqon ko alag karke mineral extraction ka azaad adda banaya.',
      'Dikus ka gathbandhan: Cash lagaan ke dabav mein sahukaron ne 50-200% byaj par aadiwasiyon ko karz mein phansaya aur begar-bandhua mazdoor bana diya.',
      'Hatyarband vidroh: Santhal Hool (1855) aur Birsa Munda ke Ulgulan (1899) ne angrezon ko defensive tenancy kanoon (SPT Act 1855, CNT Act 1908) banane par majboor kiya.',
      'Azaadi ke baad bhi zulm: 1947 ke baad bhi forest department wahi colonial soch se udyogon ke liye aadiwasiyon ko be-dakhal karta raha.',
      'FRA (2006) se aitihasik nyay: Forest Rights Act ne pehli baar historical injustice ko maana, Individual aur Community rights diye aur Gram Sabha ko sarvochha adhikar diya.',
    ],
    conclusion:
      'Aitihasik annyay tabhi door hoga jab Gram Sabha ki manzoori ko corporate dabav se bacha kar kanooni taur par poori tarah lagoo kiya jaye.',
  },
]

export const topic3Hi = {
  summary,
  mindMap,
  sections: sectionsHinglish,
}
