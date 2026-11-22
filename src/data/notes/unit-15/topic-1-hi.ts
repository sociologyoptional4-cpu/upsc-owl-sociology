import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

const summary =
  'Bharat mein tribal communities ko define karne ki conceptual aur administrative uljhanon ko kholta hai. Angrezi isolationist nazariye aur Bharatiya civilizational sachai ke takrav, Bailey, Sinha aur Béteille ke Tribe-Caste Continuum, 1965 ki Lokur Committee ke purane criteria par sawaal, aur 75 Particularly Vulnerable Tribal Groups (PVTGs) ke bhedbhav aur suraksha ko aasaan Hinglish mein samajhata hai.'

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 1 — Definitional Problems of Indian Tribes',
  center: 'Tribes ki Definitional Uljhan',
  subtitle: 'Colonial Nazariya • Tribe-Caste Continuum • Lokur Criteria • PVTG Sankat',
  branches: [
    {
      title: '1. Angrezi Categories banam Civilizational Sach',
      color: 'lavender',
      thinkers: ['Lucy Mair', 'Herbert Risley', 'Niharanjan Ray', 'Verrier Elwin'],
      points: [
        'Colonial gazetteers ne tribes ko akele, primitive aur azaad jhundon ki tarah pesh kiya',
        'Bharatiya itihas hazaron saal se Janajati aur Jati ke aapsi mel-milap ka gawah hai',
        'Mahabharata mein Bhima-Hidimba vivaah aur Ramayana mein Shabari ka aadar civilizational rishte dikhate hain',
        'Adivasi zameen ke mool niwasi hone ka daawa karta hai, Girijan pahadi jeevan ko darshata hai',
      ],
    },
    {
      title: '2. Tribe-Caste Continuum',
      color: 'yellow',
      thinkers: ['F.G. Bailey', 'Surajit Sinha', 'André Béteille', 'N.K. Bose'],
      points: [
        'Bailey ne continuum ko zameen par kabze se joda: clan-based barabari banam caste hierarchy',
        'Surajit Sinha ne Central India ke Bhil aur Gond sardaron mein Rajputisation aur rajya-nirman dikhaya',
        'N.K. Bose ka Hindu Method of Tribal Absorption: Jajmani rozi-roti ke badle caste mein Shudra darja',
        'Béteille ne sabit kiya: Bharat mein tribe alag samaj nahi, civilizational dhancha ka hissa hai',
      ],
    },
    {
      title: '3. Sarkari Criteria & Lokur Committee ki Kami',
      color: 'mint',
      thinkers: ['L.K. Lokur', 'Virginius Xaxa', 'B.R. Ambedkar', 'Sachchidananda'],
      points: [
        'Lokur Committee (1965) ke 5 paimane: primitive traits, alag culture, isolation, shyness, pichhdapan',
        'Purane colonial vichar padhe-likhe Meenas aur urban tribals ke vikas ko galat thaharate hain',
        'Shyness of contact shoshankari outsiders se bachne ka ek samajhdar bachav tha, koi bimari nahi',
        'Samvidhan ke Article 342 mein bina sociological definition ke administrative recognition diya gaya',
      ],
    },
    {
      title: '4. Particularly Vulnerable Groups (PVTGs)',
      color: 'pink',
      thinkers: ['U.N. Dhebar', 'Walter Fernandes', 'B.K. Roy Burman', 'L.P. Vidyarthi'],
      points: [
        'Dhebar Commission (1960–61) ne PTGs chune, jinko 2006 mein PVTGs naam diya gaya',
        '18 rajyon aur UTs mein 75 samuday jo aabadi girne aur vilupti ke kagaar par hain',
        'Chaar paimane: purani pre-agricultural takneek, ghatti aabadi, zero literacy, subsistence economy',
        'PM-JANMAN jaise schemes se unki azaadi aur jungle par adhikar bachate hue suvidhaen dena',
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
      'Definitional Debates, Geographical Zones & Colonial Rupture: Janajati aur Jati ke aapsi rishton se lekar colonial dhang se banaye gaye categories ka pura visual overview.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 15 Visual 01',
  },
  {
    kind: 'md',
    body: `## Definitional Paheli: Bharat Mein "Tribe" Aakhir Hai Kya?

Aasaan shabdon mein samjho, Bharat mein kisi samuday ko "tribe" ya janjati bolna utna seedha nahi hai jitna Western kitabon mein likha hota hai. Africa ya America mein anthropologists ne tribes ko aisi aabadi mana jo baaki duniya se bilkul alag-thalag, jungle mein apni azaad duniya mein rehti thi. Lekin Bharat ki sachai bilkul ulati hai: yahan janjatiyan aur gaon ki caste society hazaron saalon se ek-doosre ke saath vyapaar, rishtedaari aur sanskriti share karti aayi hain. Angrezi afsar [[thinker:Herbert Risley]] ne census mein inhein "animist" ya "jungli" ghoshit karne ki koshish ki, par har census commissioner ne mana ki kisi kisan aur janjati ke beech lakir kheenchna namumkin hai.

Humare Samvidhan ne bhi "tribe" ki koi pakki sociological paribhasha nahi di hai. **Article 342** ke tehat Rashtrapati jin samudayon ko list mein daal dete hain, unhein ==Scheduled Tribes== (ST) keh diya jata hai. Yani Bharat mein tribal hona ek kanooni aur administrative darja hai, koi bandha-bandhaya biological ya cultural dabba nahi.

Inke alag-alag naamon ke peeche alag-alag soch chhupi hai:
- **Adivasi (Mool Niwasi):** 1930s mein Jaipal Singh Munda jaise netaon ne yeh shabd buland kiya, jiska matlab hai zameen aur jungle ke sabse pehle haqdar.
- **Vanavasi (Jungle ke Baasi):** Rashtriya sangathan yeh shabd use karte hain taaki yeh dikhe ki janjatiyan Bharatiya sabhyata aur Hindu samaj ka hi hissa hain jo vanon mein rehti hain.
- **Girijan (Pahadi Log):** Mahatma Gandhi ne yeh aadar-soochak naam diya taaki pahadon mein rehne wale bhaai-behno ko samman mile.
- **Janajati:** Samvidhan aur sarkari kaghzon ka shabd, jo janam-aadhari *Jati* ke mukable parivaarik samooh ya folk community (*Jana*) ko darshata hai.

Itihaskar [[thinker:Niharanjan Ray]] ne bataya ki ancient Vedic sahitya mein *Jana* shabd milta hai jo *Jati* ke bagal mein rehne wale azad samudayon ke liye tha. Humare itihas aur dharmik granthon mein royal parivaaron aur tribal rajkumariyon ke aapas mein rishte the, jaise Mahabharata mein Bhima aur Hidimba ka vivah, ya Ramayana mein Shabari ke jhoothe ber ka prasang. Matlab saaf hai: Bharat ki janjatiyan kabhi bhi alag-thalag jungle ke ajuba nahi theen, balki hamari sabhyata ki sathi theen.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Tribal Samuday (Janajati)',
    rightTitle: 'Caste Samuday (Jati)',
    rows: [
      {
        aspect: 'Samajik Dhancha',
        left: 'Egalitarian aur barabari wala; kul (clan) par aadharit jahan oonch-neech ke janam-jaat darje nahi hote.',
        right: 'Hierarchical aur krambadh; shuddhata-ashuddhata (purity-pollution) aur varna vyavastha par tiki unch-neech.',
      },
      {
        aspect: 'Aarthik Vyavastha',
        left: 'Subsistence guzar-basar; shikar, vanopaj ya jhum kheti; koi bada surplus munafa nahi banta.',
        right: 'Surplus aadharit; peshewar vibhajan aur Jajmani system ke aapsi aarthik len-den par tiki vyavastha.',
      },
      {
        aspect: 'Zameen & Bhoo-bhag',
        left: 'Ek tay shuda jungle ya pahad; zameen par poore clan ka saajha customary haq hota hai.',
        right: 'Gaon aur shehar jahan kheti ki zameen niji malkiyat aur varna ke hisab se baanti hoti hai.',
      },
      {
        aspect: 'Dharmik Vishwas',
        left: 'Animism, prakriti pooja, purvajon ki pooja aur sacred groves (Sarna) jo jal-jungle-jameen se jude hain.',
        right: 'Brahminical granth, mandir, pandit-purohit, karma siddhant aur formal devataon ki pooja.',
      },
      {
        aspect: 'Mahilaon ki Sthiti',
        left: 'Behtar barabari; bride-price (vadhu-moolya) ka chalan, aasaan talaq aur haat-bazaar mein azaad bhoomika.',
        right: 'Patriarchal bandishein; dahej ka bojh, gotra niyam aur stri ki pavitrata par sakht pehre.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Tribe-Caste Continuum: Bailey, Sinha aur Béteille Ka Nazariya

Samaj-shastra mein ab tribe aur caste ko do dushman dharon ki tarah nahi dekha jata, balki ek lambi patri ke do sire mana jata hai. Isko ==Tribe-Caste Continuum== kehte hain. Ek chhor par wo janjati hai jo sabse alag-thalag, barabari wali aur azaad hai; doosre chhor par wo pakka Brahminical gaon hai jahan jaat-paat ki sakht diwarein hain. Bharat ke zyadatar samuday in do chhoron ke beech mein aate hain, jinke andar dono ke lakshan milte hain.

Angrez anthropologist [[thinker:F.G. Bailey]] ne Odisha ke Bisipara gaon ki study (*Tribe, Caste, and Nation*, 1960) mein iska aarthik-rajneetik paimana diya. Bailey ne kaha ki dharm ya bhasha se zyada zaroori yeh hai ki **samuday zameen par kabza kaise karta hai**:
1. **Tribal Chhor (Segmentary System):** Har vyakti ko zameen jotne ka haq sirf isliye milta hai kyunki wo us clan ka khoon hai. Yahan koi raja ya zamindar beech mein nahi hota, sab barabar hain.
2. **Caste Chhor (Organic Stratification):** Zameen par kabza unch-neech par tika hota hai. Dominant caste ke paas sari zameen hoti hai aur khetihar mazdoor ya shilpkar jaatiyan unke neeche dab kar kaam karti hain.

Sociologist [[thinker:Surajit Sinha]] ne bataya ki Central India mein tribes ne kaise rajya banaye, jise unhone ==Rajputisation== kaha. Bhil, Gond aur Bhumij ke taqatwar sardaron ne jab kheti se munafa kamaya, toh unhone Brahmin panditon ko bulakar suryavanshi ya chandravanshi Rajput vanshavali banwa li. Sardar ban gaye Rajput raja (Kshatriya), aur aam tribal kisan ban gaye unke neeche kheti karne wale praja ya Shudra.

[[thinker:N.K. Bose]] ne apne paper *The Hindu Method of Tribal Absorption* mein iska aarthik karan bataya. Bose kehte hain ki gareeb janjatiyan khushi-khushi Hindu samaj mein aakar shamil hui kyunki ==Jajmani System== ne unhein rozi-roti ki pakki guarantee di. Beshak unhein samajik darje mein Shudra banakar neeche rakha gaya, par unke dhandhe (jaise tokri banana ya loha peetna) par koi doosri jaati kabza nahi kar sakti thi. [[thinker:André Béteille]] ne saaf kiya ki Bharat mein tribe kabhi koi alag alag-thalag duniya nahi thi, balki hamari bheed-bhaad wali civilizational vyavastha ka hissa thi.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Azaad Tribal Band',
        text: 'Clan ki saajha zameen, kanda-mool shikar ya jhum kheti, prakriti pooja aur barabari ka samajik jeevan.',
      },
      {
        label: 'Bazaar aur Haat ka Mel',
        text: 'Hafte ke haat mein vanopaj bechna, non-tribal sahukaron se karz lena aur hal wali kheti apnana.',
      },
      {
        label: 'Rajputisation / Sanskritization',
        text: 'Sardaron ka janeu dharan karna, panditon se mandir pooja karwana aur khud ko Rajput vansh ka batana.',
      },
      {
        label: 'Jati Vyavastha Mein Samaavesh',
        text: 'Regional varna vyavastha mein Shudra kisan ya artisan jati ban kar sthayi roop se shamil ho jana.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Sarkari Pehchan: Lokur Committee (1965) Aur Uski Kamiyan

Azaadi ke baad har rajya mein Scheduled Tribes chunne ke liye ek jaisa niyam banane ki khatir 1965 mein **Lokur Committee** bani. Is committee ne paanch paimane tay kiye jo aaj bhi sarkari daftar use karte hain:

| Paimana | Lokur Committee Ka Niyam (1965) | Sarkari Soch | Samaj-Shastriya Critique |
|---|---|---|---|
| **Primitive Traits** | Kheti se pehle ke purane pathar-lakdi auzar. | Aadi-kaal ke dhang ko darshana. | Aage badhne walon (Meenas) ko saza dena. |
| **Distinctive Culture** | Alag naach-gana, bhasha aur parampara. | Mainstream se alag pehchan bachana. | Andar ke ameer-gareeb farq ko nazar-andaaz karna. |
| **Geographical Isolation** | Dur-daraz pahadon aur janglon mein rehna. | Shahron aur bazaar se doori. | Sadak aur mining aane se yeh doori khatam hui. |
| **Shyness of Contact** | Bahari gair-tribals se jhijhakna ya darna. | Boundary banaye rakhne ki koshish. | Shoshankari diku sahukaron se bachne ka hoshiyar bachav. |
| **Backwardness** | Padhai ki kami, aspatal ka na hona, gareebi. | Special welfare schemes justify karna. | Gareebi ko aadiwasi sanskriti maan lena galat hai. |

### Contemporary Sociological Critique

Beshak sarkar aaj bhi yeh paanch baatein ginti hai, lekin modern sociologists jaise [[thinker:Virginius Xaxa]] ne bataya ki Lokur criteria purani colonial soch par tika hai aur aaj ke daur mein galat hai:

- **Tarakki Karne Walon ko Saza:** Agar sarkar "pichhdepan" aur "primitive traits" ko shart banayegi, toh iska matlab yeh hua ki jo tribal padh-likhkar aage nikal gaya, usko ST list se nikal do. [[eg:Rajasthan ke Meena samuday ne padh-likhkar civil services aur prashashan mein bada naam kamaya, lekin wo aaj bhi apne tribal clan aur gotra parampara ko garv se nibhate hain.]]
- **Jhijhak Koi Bimari Nahi Thi:** Bahari logon se katrana ("shyness of contact") koi sharm ya kamzori nahi thi; yeh dar-asal shoshankari sahukaron, thekedaron aur darogaon se bachne ka ek hoshiyar tarika tha.
- **Andar ke Vargikaran ko Nazar-andaaz Karna:** Lokur committee sabhi tribals ko ek jaisa gareeb manti hai. Sach yeh hai ki aaj har tribe ke andar ek padha-likha ameer varg ban chuka hai aur doosri taraf zameen se be-dakhal khetihar mazdoor hain.

## Particularly Vulnerable Tribal Groups (PVTGs): Maut ke Muh Par Khade Samuday

Bharat ki 705 Scheduled Tribes mein sabki halat ek jaisi nahi hai. Santhal, Gond aur Munda jaise bade samuday aage badhe aur rajneeti mein taqatwar bane, lekin kuch aisi choti janjatiyan theen jo bilkul kangaal reh gayeen aur unki aabadi khatam hone lagi. Inko pehchanne ke liye **Dhebar Commission (1960–61)** ne *Primitive Tribal Groups* (PTGs) ka concept diya, jise 2006 mein ==Particularly Vulnerable Tribal Groups== (PVTGs) ka naam diya gaya.

Aaj **18 Rajyon aur Andaman & Nicobar mein kul 75 PVTGs** darj hain. Inke liye sarkar chaar baatein dekhti hai:
- Kheti se pehle ki aadi takneek (shikar, kanda-mool ya lakdi se kheti).
- Aabadi ka ghatna ya thahar jana (negative or zero population growth).
- Padhai-likhai ka bilkul na hona (literacy rate be-hadd kam).
- Roz marra ka guzara na ho pana (subsistence level economy).

Inmein Andaman ke Great Andamanese, Sentinelese, Jarawa aur Shompen jaise dweepvasi shamil hain, toh mainland par Jharkhand ke Birhor, Andhra Pradesh ke Chenchu aur Maharashtra ke Maria Gond aate hain. Saal 2023 mein kendra sarkar ne ₹24,000 crore se zyada ke budget ke sath **PM-JANMAN** yojana shuru ki taaki in tak pakke ghar, saaf paani, bijli aur sadak pahunchaye ja sakein bina unki azaadi chheene.`,
  },
  {
    kind: 'keyTerm',
    term: 'Adivasi',
    meaning:
      'Mool niwasi hone ka prateek; 1930s mein utha rajneetik shabd jo jal, jungle aur jameen par aitihasik customary haq ka ailaan karta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Tribe-Caste Continuum',
    meaning:
      'F.G. Bailey aur Surajit Sinha ka model jo dikhata hai ki tribe aur caste do alag dhar nahi balki ek lambi aarthik-samajik patri ke do sire hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Hindu Method of Tribal Absorption',
    meaning:
      'N.K. Bose ka siddhant jisme unhone bataya ki Jajmani vyavastha ki aarthik suraksha ke lalach mein tribes Hindu fold mein Shudra bankar dakhil hui.',
  },
  {
    kind: 'keyTerm',
    term: 'Particularly Vulnerable Tribal Groups (PVTGs)',
    meaning:
      '75 aisi atyant pichhdi janjatiyan jinki aabadi ghat rahi hai, literacy be-hadd kam hai aur jo aadi-yug ki takneek par guzar-basar karti hain.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Paper 1 ↔ Paper 2 Link: Max Weber Ke Ideal Types Se Jodo',
    body: 'UPSC ke answers mein Tribe aur Caste ko dushman dhar mat banao. Max Weber ke "Ideal Types" ki tarah samjhao. Asliyat mein Bharat ke gaon aur janjatiyan Bailey ke continuum par aage-peeche ghoomti hain jahan barabari aur jaat-paat dono ke ansh milte hain.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karo: Adivasi Ko Samvidhanik Shabd Mat Likhna',
    body: 'Answer sheet mein yeh mat likhna ki "Article 342 Adivasi ko define karta hai." Samvidhan mein sirf "Scheduled Tribes" shabd hai. "Adivasi" ek samajik-rajneetik astitva ka nara hai. Dono ke farq ko examiner dhyan se check karta hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Yaad Rakho: Lokur Ke 5 Paimane (P-D-G-S-B)',
    body: 'Lokur Committee ke 5 points ko PDGSB se yaad rakho: (P)rimitive traits, (D)istinctive culture, (G)eographical isolation, (S)hyness of contact aur (B)ackwardness.',
  },
  {
    kind: 'answerBox',
    intro:
      'Bharat mein tribal communities ko pehchanne ki koshish hamesha mushkil rahi hai kyunki hazaron saal ke aapsi len-den ne tribe aur caste ke beech ki deewar ko dhundhla kar diya.',
    points: [
      'Colonial model ki nakami: Angrezon ne African dhang se janjatiyon ko akele kabile mana, jabki Bharat mein Janajati aur Jati ka aapsi rishta hazaron saal purana tha.',
      'Article 342 ka administrative roop: Samvidhan ne koi kitabee paribhasha nahi di; Rashtrapati ki notification se tay hota hai ki kaun Scheduled Tribe hai.',
      'Tribe-Caste Continuum: F.G. Bailey ne sabit kiya ki zameen par clan ke kabze (Tribe) aur jaat-paat ke aarthik vibhajan (Caste) ke beech ek lamba spectrum hai.',
      'Rajputisation aur absorption: Surajit Sinha aur N.K. Bose ne dikhaya ki tribal raja Rajput bane aur aam tribal Jajmani vyavastha ke aarthik sahare se Shudra jaati bane.',
      'Lokur criteria par sawal: 1965 ke paimane (primitive traits, shyness) modern padhe-likhe tribals ko galat thaharate hain aur unke andar ke ameer-gareeb farq ko chhipate hain.',
      'PVTG ka chunav: Sabhi 705 STs mein barabar vikas na hone par Dhebar Commission ke kehne par 75 be-hadd kamzor aur ghatti aabadi wale samudayon ko alag se suraksha di gayi.',
    ],
    conclusion:
      'Samaj-shastra ab purani colonial paribhashaon ko chhod kar tribal identity ko ek dynamic, astitva aur samvidhanik haq ki ladai ke roop mein dekhta hai.',
  },
]

export const topic1Hi = {
  summary,
  mindMap,
  sections: sectionsHinglish,
}
