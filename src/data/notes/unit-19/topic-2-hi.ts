import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic2HiMindMap: MindMapData = {
  title: 'Topic 2 · Samvidhan, Kanoon aur Samajik Badlaav',
  center: 'Constitution, Law & Social Change',
  subtitle: 'Social Engineering • Limits of Law • SC/ST Mobility • UCC Debate',
  branches: [
    {
      title: 'Samvidhanik Social Engineering',
      color: 'lavender',
      thinkers: ['Granville Austin', 'B.R. Ambedkar', 'Roscoe Pound', 'Yogendra Singh'],
      points: [
        'Samvidhan ek "social document" jo shantimayi samajik kranti ka aadhar hai',
        'Ambedkar ki chetavni: rajneeti mein barabari par samajik-aarthik jeewan mein asamaanata',
        'State-directed exogenous modernisation jo jaati aur patriarchy par chot karti hai',
        'Directive Principles (Part IV) jo kalyankari adhikaaron ka ghoshnapatra hai',
      ],
    },
    {
      title: 'Kanoon ki Seemayein (Marc Galanter)',
      color: 'yellow',
      thinkers: ['Marc Galanter', 'T.K. Oommen', 'Kalpana Kannabiran', 'Sir Ivor Jennings'],
      points: [
        'Kanoon aur sanskriti ka takraav: kanooni barabari vs jaativadi endogamy',
        'Legal illiteracy: aam janta aur pichhade vargon ko apne kanooni haqqon ki anbhigyata',
        'Sansthanik rukawat: 5+ crore pending cases, mehnge vakeel, "lawyer’s paradise"',
        'Repeat Players (amir/rajya) vs One-Shotters (gareeb/Dalit/auratein) asantulan',
      ],
    },
    {
      title: 'SCs aur STs par Asar',
      color: 'mint',
      thinkers: ['M.N. Srinivas', 'Ghanshyam Shah', 'Sukhadeo Thorat', 'Andre Beteille'],
      points: [
        'Articles 15(4), 16(4), 330/332: reservation se ek naya Dalit middle class bana',
        'Article 17 aur SC/ST PoA Act 1989: chhuachhoot ke khilaf kanooni hathiyaar',
        'Dabang jaatiyon ka gussa: ghodi chadhne ya mandir pravesh par hinsa aur boycott',
        'Sub-categorisation debate: reservation ka labh sabse pichhadi jaatiyon tak pahunchana',
      ],
    },
    {
      title: 'Uniform Civil Code (UCC) ki Behas',
      color: 'pink',
      thinkers: ['Flavia Agnes', 'Nivedita Menon', 'Romila Thapar', 'Tahoor Mahmood'],
      points: [
        'Article 44 (UCC) vs Article 25 (dharmik swatantrata) aur Articles 29-30 (minorities)',
        'Gender justice: har dharm ke personal laws se purush-pradhan kanoon hatana',
        'Feminist chinta: top-down thope gaye code se majoritarianism ka khatra (Flavia Agnes)',
        'Legal pluralism aur "andar se sudhaar" (reform from within) ko aage badhana',
      ],
    },
  ],
}

export const topic2HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u09-01-planning-constitution-law.webp',
    alt: 'P2 Unit 9 infographic: Planning, Constitution & Law — State-Led Planning, Liberalization & Legal Social Engineering',
    caption:
      'Bhartiya Samvidhan ko samajik kranti aur legal social engineering ka hathiyaar banaya gaya tha, par iska takraav sadiyon purani jaativadi endogamy, patriarchy aur adalat ke lambe backlog se hota raha hai.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 19 Visual 01',
  },
  {
    kind: 'md',
    body: `## Aasaan Shabdon Mein Samjho: Samvidhan aur Kanoon Samaj Kaise Badalte Hain?

Aamtaur par purani duniya mein kanoon wahi hota tha jo samaj ke riwaz aur paramparaon ko bachata tha — yaani unchi jaati ke vishashadhikar aur mardon ke dabdabe ko kanooni mohar milti thi. Lekin 1950 mein azaad Bharat ne is ulti ganga ko seedha kiya. [[thinker:B.R. Ambedkar]] ke netritva mein Bharat ne samvidhan ko purane samaj ka aaina banane ke badle ==Legal Social Engineering== ka ek krantikari hathiyaar banaya — yaani ek aisa niyam jiska maqsad hazaron saal purani chhuachhoot, jaati-bhedbhav aur auraton ki ghulami ko kanoon ke dande se ukhad phenkna tha.

Itihaskar [[thinker:Granville Austin]] ne Samvidhan ko **"sabse pehle ek samajik dastavez" (first and foremost a social document)** kaha jiska maqsad bina khoon-kharabe ke samajik kranti lana tha. Fundamental Rights (Articles 14, 15, 17, 21) aur Reservation (Articles 15(4), 16(4)) ke zariye rajya ne ==Transformative Constitutionalism== ka rasta chuna. Lekin Babasaheb Ambedkar ko pata tha ki zameen par yeh asaan nahi hoga. 25 November 1949 ko Constituent Assembly mein unhone aitihasik chetavni di thi:

> *"26 January 1950 ko hum virodhabhaso (contradictions) se bhari zindagi mein dakhil ho rahe hain. Rajneeti mein hamare paas barabari hogi, lekin samajik aur aarthik jeewan mein ghana bhedbhav hoga... Hum is virodhabhas ko kitne din tak jeete rahenge?"*

Samajshastri [[thinker:Yogendra Singh]] ne samvidhan ko **modernization ka bahari srot (exogenous source)** bataya — yaani bahar se laya gaya modern, kanooni framework jo ek paramparik, jaati-pradhan samaj par laagu kiya gaya.

## Marc Galanter aur Kanoon ki Samajik Seemayein

Sawaal yeh hai ki jab kanoon ban chuka hai, toh aaj bhi chhuachhoot, dahej hatyayein aur jaati hinsa kyun nahi rukti? Mashhoor kanooni samajshastri [[thinker:Marc Galanter]] ne apni kitabon *Law and Society in Modern India* aur *Competing Equalities* mein kanoon ki asali kamzoriyan samjhayi hain:

1. **Kanoon aur Sanskritik Vishwason ka Takraav**: Galanter ke mutabiq kanoon har insaan ko barabar maanta hai, jabki Bhartiya samaj har insaan ko uski jaati aur kul ke daayre mein baandhta hai. [[eg:Special Marriage Act inter-caste aur inter-faith shaadi ki kanooni azadi deta hai, lekin parivaar aur samaj jaati ki shuddhata bachane ke liye balig ladke-ladki tak ki honor killing kar dete hain ya police ke zariye harass karwate hain.]]
2. **Kanooni Anpadhta (Legal Illiteracy)**: Pade-likhe log bhi kanooni adhikaaron se anjaan rehte hain. Gaon ki auraton ko aksar pata hi nahi hota ki gharelu hinsa ek gair-zamanati jurm hai, ya 2005 ke Hindu Succession Amendment ke baad betiyon ko baap ki zameen mein barabar ka coparcenary haqq milta hai.
3. **Adalat ka Chakkar aur "Lawyer's Paradise"**: Desh ki adalaton mein 5 crore se zyada cases pending hain. Sir Ivor Jennings ne ise "vakeelon ka swarg" kaha tha, jahan ek case ka faisla aane mein 20 se 30 saal nikal jate hain aur gareeb aadmi vakeel ki fees bharte-bharte barbaad ho jata hai.
4. **Repeat Players vs One-Shotters**: Galanter ne dikhaya ki kanooni vyavastha mein unka palda bhari hota hai jo **"Repeat Players"** hain (badi companies, dabang zameendar, sarkar) jinke paas mehnge vakeel aur saalon ladne ka paisa hota hai, jabki ek gareeb Dalit ya lachaar aurat (**"One-Shotter"**) pehli-doosri tareekh mein hi thak kar compromise karne par majboor ho jati hai.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Samvidhanik Kanooni Niyam (De Jure)',
    rightTitle: 'Zameeni Samajik Sachayi (De Facto)',
    rows: [
      {
        aspect: 'Mool Samajik Ikai',
        left: 'Azaad nagrik jiske paas Article 14 aur 21 ke maulik adhikaar hain.',
        right: 'Khandaan, endogamous jaati aur parivaar jo vyakti ke faisle tay karte hain.',
      },
      {
        aspect: 'Jaati aur Barabari',
        left: 'Article 17 se chhuachhoot khatam aur Article 15 se bhedbhav par rok.',
        right: 'Gaon mein alag basti, dhabon par alag bartan aur sanskritik dori.',
      },
      {
        aspect: 'Auraton ka Sampatti Haqq',
        left: 'Hindu Succession Act 2005 ke tahat betiyon ko zameen mein barabar haqq.',
        right: 'Dahej ko hi ladki ka hissa maan kar zameen se bedakhal karne ki parampara.',
      },
      {
        aspect: 'Nyay ka Madhyam',
        left: 'Modern rational courts jahan kanoon aur saboot ke aadhar par faisla hota hai.',
        right: 'Khap panchayatein aur jati sabhayein jo parampara ke naam par saza sunati hain.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## SCs aur STs par Samvidhan ka Asar aur Zameeni Chunautiyan

Articles 15(4), 16(4) ke reservation aur Articles 330, 332 ke political representation ne pichhle 75 saalon mein Bharat ki zameen par bade badlaav laye hain:

### 1. Samajik, Aarthik aur Rajneetik Pragati
- **Dalit-Adivasi Middle Class ka Uday**: Sarkari naukriyon aur higher education mein reservation ke dam par ek naya, padha-likha aur aatm-sammani bureaucratic aur professional varg khada hua.
- **Rajneetik Aawaz aur Assertion**: Reserved seats aur voting power ke zariye Bahujan Samaj Party (BSP) jaisi swatantra Dalit parties bani, jinhone rajneetik satta ke samikaran hamesha ke liye badal diye.
- **Kanooni Suraksha**: *Protection of Civil Rights Act (1955)* aur *SC/ST (Prevention of Atrocities) Act (1989)* ne shoshit samaj ko dabangon ke julm ke khilaf seedhe FIR darj karwane ka kanooni danda diya.

### 2. Zameeni Rukawatein aur Dabangon ka Backlash
- **Assertion par Dabang Jaatiyon ka Hamla**: [[thinker:M.N. Srinivas]] ne apne dominant caste ke adhyayan mein dikhaya ki jab bhi Dalit yuva barabari ka dawa karte hain—jaise shadi mein ghodi par chadhna, achhe kapde pehanna ya Article 25(2)(b) ke tahat gaon ke mandir mein dakhil hona—to dominant caste ke log unpar hamla kar dete hain aur gaon mein unka social boycott kar dete hain.
- **Sub-Categorisation aur Creamy Layer ki Behas**: Samajshastri Ghanshyam Shah ne dikhaya ki reservation ka labh kuch aage badhi sub-castes (jaise Jatav ya Mahar) tak zyada simit raha, jabki Musahar aur Valmiki jaise atyant pichhade varg peeche chhut gaye. 2024 mein Supreme Court (*State of Punjab v. Davinder Singh*) ne states ko SCs/STs ke andar sub-categorisation ki ijazat di.
- **Adivasiyon ka Visthapan**: PESA 1996 aur Forest Rights Act (FRA 2006) ke baawjood khanan aur corporate projects ke naam par lakho adivasiyon ko unke jal-jungle-zameen se bedakhal kiya jata raha hai.

[[trap:Mandir pravesh ka adhikaar Article 25(2)(b) ke tahat aata hai. Article 23 forced labour aur begar rokne ke liye hai. In dono articles ko aapas mein mix mat karna.]]`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Answer Writing Tip: Kya Sirf Kanoon Kafi Hai?',
    body: 'UPSC ke answer mein kabhi bhi yeh mat likhna ki kanoon akele jaati aur patriarchy ko khatam kar sakta hai. T.K. Oommen ke mutabiq kanoon ek sahara hai, par jab tak zameen par subaltern aawazein, zameen ka batwara aur shiksha nahi hogi, tab tak kanoon kitabon mein band reh jayega.',
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Kadam 1: Pragatishil Kanoon Banna',
        text: 'Sarkar barabari ka kanoon banati hai (jaise SC/ST Atrocities Act, Hindu Succession 2005, Anti-Dowry laws).',
      },
      {
        label: 'Kadam 2: Paramparik Vargon ka Virodh',
        text: 'Dabang jaatiyan aur purush-pradhan samaj riwaz ka hawala dekar kanoon ko todte hain ya boycott karte hain.',
      },
      {
        label: 'Kadam 3: Subaltern Sangharsh aur Morality',
        text: 'Pichhade varg aur auratein sangathit hokar samvidhanik adhikaaron ko zameen par laagu karwane ke liye ladti hain.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Uniform Civil Code (UCC) ki Samajshastriya Behas: Gender Justice vs Cultural Autonomy

Samvidhan ke Directive Principles ka Article 44 kehta hai ki *"Rajya poore Bharat mein nagrikon ke liye ek saman civil code (UCC) banane ka prayas karega."* Yeh mudda sirf kanooni nahi balki gehra samajik vivaad hai.

### Do Samvidhanik Mulyon ka Takraav
1. **Gender Justice aur Barabari (Articles 14, 15, 21)**: Samarthakon ka kehna hai ki har dharm ke purane personal laws—chahe Hindu, Muslim, Christian ya tribal customs hon—auraton ke khilaf bhedbhav karte hain (shadi ki umra, talaq, bachho ki custody, aur zameen ka hissa). Isliye auraton ko azaad karne ke liye ek saman kanoon zaroori hai.
2. **Cultural Autonomy aur Dharmik Azadi (Articles 25, 26, 29, 30)**: Alpasankhyak samudaayon aur adivasi samuhon ka kehna hai ki unke personal laws aur paramparayein unki pehchan hain, aur top-down thopa gaya UCC unpar bahusankhyak (majoritarian) sanskriti thopne ka zariya ban sakta hai.

### Feminist Vicharak: Flavia Agnes aur Nivedita Menon ka Nazariya
Mashhoor feminist vakeel aur samajshastri [[thinker:Flavia Agnes]] (*Law and Gender Inequality*) ne is behas ko naya mod diya:
- **Majoritarianism ka Khatra**: Agnes ka tark hai ki UCC ki rajneetik behas aksar minority personal laws ko nishana banane ke liye ki jati hai, jabki Hindu personal law ke andar ki patriarchy (jaise HUF tax rebate aur betiyon ko zameen na dena) par parda daal diya jata hai.
- **Reform from Within (Andar se Sudhaar)**: Flavia Agnes aur [[thinker:Nivedita Menon]] ka kehna hai ki kanoon upar se thopne ke badle **har dharm ke andar se auraton ki aawaz ko mazboot karke sudhaar** laya jana chahiye (jaise Bharatiya Muslim Mahila Andolan ne Triple Talaq ke khilaf ladayi ladi).
- **Uttarakhand UCC (2024)**: Samajshastriyon ne Uttarakhand UCC mein live-in relationships ke compulsory registration par sawal uthaye hain, kyunki yeh niji zindagi par police aur rajya ki moral surveillance ko badhava deta hai.`,
  },
  {
    kind: 'keyTerm',
    term: 'Transformative Constitutionalism',
    meaning:
      'Samvidhan ko sirf rajya chalane ki rule-book na maan kar ek aisa aadhikarik dastavez manna jo samaj ko purani shreniyon se nikal kar aadhunik samanta ki taraf le jaye.',
  },
  {
    kind: 'keyTerm',
    term: 'Repeat Players vs One-Shotters (Marc Galanter)',
    meaning:
      'Marc Galanter ka vishleshan jisme adalat mein bade sansthan (repeat players) apne anubhav aur daulat se lachaar nagrikon (one-shotters) par asani se haavi ho jate hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Legal Pluralism',
    meaning:
      'Ek hi desh mein state law ke sath-sath alag-alag dharmon aur janjatiyon ke customary aur personal kanoonon ka sah-astitva hona.',
  },
  {
    kind: 'keyTerm',
    term: 'Constitutional Morality (B.R. Ambedkar)',
    meaning:
      'Samajik riwazon, jaati paramparaon aur aam janta ke dhabangpan se upar uthkar samvidhan ke swatantrata, samanta aur bandhutva ke aadarshon ko sarvopari manna.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Exam Ke Liye Zaroori Samvidhanik Tathya',
    body: 'Mandir pravesh ka maulik adhikaar Article 25(2)(b) mein hai jahan public Hindu sansthan sabhi vargon ke liye khole gaye hain. Article 23 manav taskari aur bandhua mazdoori rokta hai. Answer likhte waqt in do alag provisions ko kabhi mat milana.',
  },
  {
    kind: 'answerBox',
    intro:
      'Model Answer Framework: Kya samvidhan aur kanoon akele jaati aur patriarchy ko khatam kar sakte hain?',
    points: [
      'Kanoon ki ahemiyat: Kanoon barabari ka de jure benchmark set karta hai aur SC/ST PoA Act ya Domestic Violence Act jaise suraksha kavach deta hai.',
      'Sanskritik pichhadapan: Marc Galanter ke anusar modern kanoon vyakti ko azaad maanta hai par samajik astitva jati endogamy aur purush-pradhan soch mein qaed hai.',
      'Sansthanik rukawatein: 5 crore se zyada pending cases aur mehnge vakeelon ke karan subaltern one-shotters ke liye adalat se nyay pana behad mushkil hota hai.',
      'Dabang varg ka hamla: Jab bhi pichhade varg kanooni haqq mangte hain (jaise Art 25(2)(b) mandir pravesh ya ghodi par chadhna), dabang jaatiyan hinsa aur boycott ka rasta apnati hain.',
      'Samagra samadhan: Kanoon zaroori shart hai par akele kafi nahi; iske sath zameen sudhaar, universal secular shiksha aur zameeni subaltern aandolan zaroori hain.',
    ],
    conclusion:
      'Samvidhanik kanoon mukti ka dhancha khada karta hai, lekin hazaron saal purani jaativadi aur purush-pradhan zanjeeron ko todne ke liye kanoon ko mass movement aur samajik chetna mein badalna padega.',
  },
]
