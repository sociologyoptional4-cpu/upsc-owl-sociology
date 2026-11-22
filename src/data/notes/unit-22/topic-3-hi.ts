import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

export const topic3Hi: Pick<
  TopicNotebookSpec,
  'summary' | 'mindMap' | 'sections'
> = {
  summary:
    'Aasaan bhasha mein samjhein toh yeh topic Bharat mein kshetriyavad (regionalism), asymmetric federalism aur gaon-dehat tak satta ke vikendrikaran (decentralization) ko samjhata hai. Isme dekhenge ki Paul Brass ke mutabiq kshetriyavad koi deshdroh nahi balki loktantra ko bachane wala safety valve hai, Sanvidhan ne vibhinn rajyon aur janjatiyon ke liye alag-alag azaadi (Articles 371A–J, Sixth Schedule) kaise di, aur 73rd/74th Sanvidhan Sanshodhan ne panchayaton ko kitna badla. Sath hi Sarpanch-Pati pratha, 3Fs ki kami (Funds, Functions, Functionaries) aur jatiye rukavaton ki zameeni haqeeqat ko samjhenge.',
  mindMap: {
    title: 'Kshetriyavad aur Satta Ka Vikendrikaran',
    center: 'Regionalism & PRIs',
    subtitle: 'Paul Brass aur Kshetriyavad • Asymmetric Federalism • Panchayati Raj • 3Fs aur Sarpanch-Pati',
    branches: [
      {
        title: 'Kshetriyavad Ke Siddhant',
        color: 'lavender',
        thinkers: ['Paul Brass', 'Myron Weiner', 'Sanjib Baruah', 'Yogendra Singh'],
        points: [
          'Paul Brass: Kshetriyavad aam logon ki nafrat nahi, balki netaon dwara sanskritik pratiko ka rajnitik istemal hai',
          'Alag hone ke bajaye loktantrik safety valve ka kaam karta hai jo kendra se hissa mangta hai',
          'Son-of-the-soil andolan: Myron Weiner ke mutabiq bahari majdooron ke khilaf sthaniya logon ka gussa',
          'Prakar: Alag hone ki maang (purani), alag rajya ki maang (Telangana), aur nadi-paani vivad (Cauvery)',
        ],
      },
      {
        title: 'Asymmetric Federalism',
        color: 'yellow',
        thinkers: ['Louise Tillin', 'Alfred Stepan', 'Juan Linz', 'Balveer Arora'],
        points: [
          'Holding-together federalism: Sabhi ko ek lathi se haankne ke bajaye zaroorat ke hisab se azaadi di gayi',
          'Articles 371A–J: Nagaland, Mizoram aadi mein paramprik zameen kanoon aur sanskriti ko suraksha',
          '5th aur 6th Schedules: Tribal ilaqon mein Autonomous District Councils jo khud kanoon banati hain',
          'Vastavik nyay: Har rajya ki alag aitihasik zaroorat ko pehchan kar desh ko ek rakha gaya',
        ],
      },
      {
        title: 'Vikendrikaran aur Panchayats',
        color: 'mint',
        thinkers: ['B.R. Ambedkar', 'Mahatma Gandhi', 'George Mathew', 'Sudha Pai'],
        points: [
          'Ambedkar banam Gandhi vivad: Gaon ka aadarsh Gram Swaraj banam jatiye shoshan ki zameeni chetavni',
          '73rd aur 74th Sanshodhan (1992): Panchayaton ko sanvidhanik darja aur niyamit chunav ki shart mili',
          'Anivarya aarakshan: Mahilaon ke liye 33% (kayi rajyon mein 50%) aarakshan aur SC/ST aarakshan',
          '31 lakh se zyada chune hue pratinidhi jinhone gaon ke netritva ka chehra hamesha ke liye badal diya',
        ],
      },
      {
        title: 'Zameeni Rukavatein',
        color: 'pink',
        thinkers: ['Nirmala Buch', 'M.N. Srinivas', 'Babu Mathew'],
        points: [
          '3Fs ki kami: Rajya sarkaron ne Funds, Functions aur Functionaries panchayaton ko nahi saunpe',
          'Kharche ke liye mohtaji: Gram panchayats apne dum par 5% se bhi kam tax ikattha kar pati hain',
          'Sarpanch-Pati pratha: Mahila jeet toh jati hai par pati ya sasur sarkar ke faisle lete hain',
          'Dominant caste dabdaba: Uchh jatiyon dwara Dalit sarpanch ka samajik bahishkar aur virodh',
        ],
      },
    ],
  },
  sections: [
    {
      kind: 'figure',
      assetFile: 'p2-u12-01-politics-caste-federalism.webp',
      alt: 'P2 Unit 12 infographic: Democracy, Caste & Decentralization — Party Phases, Vote Banks, PRIs & Asymmetric Federalism',
      caption: 'Party Phases, Vote Banks, PRIs & Asymmetric Federalism — Democracy, Caste & Decentralization ka visual saransh.',
    },
    {
      kind: 'md',
      body: `## Kshetriyavad: Alag Hone Ki Zidd Ya Loktantrik Sauda?

Aam taur par log sochte hain ki kshetriyavad (regionalism) rashtriya ekta ke liye khatra hai, par samajshastri ise vividhta se bhare desh mein aam janta ki aavaz aur haq mangne ka madhyam maante hain. Jab ek hi bhasha, sanskriti, zameen ya itihas se jude log kendriya sarkar ke dabdabe ke khilaf apne ilaqe ke vikas aur samman ki maang karte hain, toh use kshetriyavad kehte hain.

Rajnitik samajshastri [[thinker:Paul Brass]] ne sidh kiya ki kshetriyavad koi purani andhi nafrat nahi hai, balki yeh kshetriya netaon ki sochi-samjhi ranniti hai. Neta bhasha aur sanskriti ke naare lagakar logon ko jodte hain taaki kendra sarkar se vikas ke paise aur azaadi cheen sakein. Brass kehte hain ki kshetriyavad ne desh ko toda nahi, balki ek safety valve ki tarah kaam kiya: regional partiyan banakar janta ne apni shikayaton ko sansad aur chunav ke dharatal par hal kiya [[eg:Tamil Nadu mein Dravidian partiyan aur Andhra mein Telugu Desam Party (TDP) ka bhasha ke aadhar par ubharna]].

Sociologist Myron Weiner ne kshetriyavad ke chaar mukhya roop bataye hain:
1. **Desh Se Alag Hone Ki Maang (Secessionist):** Aazadi ke shuruati dashakon mein Nagaland ya purane DMK ke dauran, jise loktantrik batchit aur shashan ne samjhauta karke shant kiya.
2. **Alag Rajya Ki Maang (Sub-State Autonomy):** Desh ke andar hi naye rajya ki maang (jaise Telangana, Jharkhand, Chhattisgarh, ya Bodoland).
3. **Mitti Ke Bete Ka Andolan (Son-of-the-Soil):** Bahar se aane wale majdooron ke khilaf sthaniya logon ka gussa [[eg:1960s mein Mumbai mein Shiv Sena ka dakshin bharatiyon ke khilaf aur Assam mein AASU ka andolan]].
4. **Rajyon Ke Beech Vivad:** Nadi ke paani aur seema ke jhagde (jaise Karnataka aur Tamil Nadu ke beech Cauvery vivad; Maharashtra aur Karnataka ke beech Belagavi seema vivad).

| Kshetriyavad Ka Roop | Mukhya Samajik Kaaran | Udaharan | Hal Karne Ka Tareeqa |
| :--- | :--- | :--- | :--- |
| **Bhashayi Kshetriyavad** | Bhasha aur sanskriti ka samman | Andhra andolan (1953), Tamil Hindi-virodh | States Reorganisation Act 1956, 8th Schedule |
| **Son-of-the-Soil** | Shahar mein naukriyon ke liye darr | Mumbai (Shiv Sena), Assam Andolan (AASU) | Sthaniya bhati mein prathmikta, Assam Accord |
| **Alag Rajya Ki Maang** | Ilaqe ki gareebi aur andekhi | Andhra se Telangana, Bihar se Jharkhand | Article 3 ke tahat naye rajya ka gathan |
| **Janjatiye Simavarti Maang** | Paramprik reeti-riwajon ki suraksha | Nagaland, Mizoram, Bodoland | Article 371 vishesh kanoon, 6th Schedule Councils |`,
    },
    {
      kind: 'callout',
      variant: 'upscAngle',
      title: 'UPSC Point of View: Paul Brass Thesis',
      body: 'Answer likhte waqt kshetriyavad ko seedhe deshdroh mat kaho. Paul Brass ka hawala dekar samjhao ki Bharat mein kshetriyavad ne over-centralization ko roka hai aur kendra sarkar ko majboor kiya hai ki woh har rajya ki bhasha aur sanskriti ka samman kare.',
    },
    {
      kind: 'md',
      body: `## Asymmetric Federalism: Gehrai Se Bhari Vividhta Ka Samadhan

America jaise deshon mein symmetric federalism chalta hai, jahan sabhi rajyon ko ek jaise niyam aur barabar kanooni adhikar milte hain. Par Bharat jahan har rajya ki alag bhasha, itihas aur janjatiye aabadi hai, wahan sabhi par ek jaisa niyam thopna nainsafi hoti. Isliye Bharat ne ==Asymmetric Federalism== ka model apnaya.

Sociologists [[thinker:Louise Tillin]] aur Alfred Stepan batate hain ki asymmetric federalism ka matlab hai ki zaroorat ke hisab se alag-alag rajyon ko alag-alag azaadi aur sanrakshan dena. Stepan, Linz aur Yadav Bharat ko ek "holding-together" federation kehte hain, jisne simavarti rajyon ko vishesh adhikar dekar unka bharosa jeeta taaki desh akhand rahe.

Iske teen mukhya sanvidhanik aadhar hain:
- **Articles 371 se 371J Tak Ke Vishesh Niyam:** Yeh niyam alag-alag rajyon ke sthaniya reeti-riwajon aur zameen ke adhikaaron ko surakshit karte hain [[eg:Nagaland ke liye Article 371A aur Mizoram ke liye Article 371G jo sansad ko janjatiye zameen aur riwajon mein dakhal dene se rokte hain]].
- **Sixth Schedule (Chhathi Anusoochi):** Assam, Meghalaya, Tripura aur Mizoram mein Autonomous District Councils (ADCs) banayi gayi hain jinke paas zameen, jungle aur sthaniya kanoon banane ka poora adhikar hota hai.
- **Fifth Schedule (Panchvi Anusoochi):** Baaki rajyon ke adivasi ilaqon mein Tribes Advisory Councils banayi gayi hain taaki adivasiyon ki zameen gair-adivasiyon ko na bechi ja sake.`,
    },
    {
      kind: 'flow',
      direction: 'horizontal',
      steps: [
        {
          label: 'Simavarti Darr',
          text: 'Chhote janjatiye samudayon ko darr tha ki bahar ke log aakar unki zameen, bhasha aur sanskriti ko nigal jayenge.',
        },
        {
          label: 'Asymmetric Sanvidhan',
          text: 'Sanvidhan ne Article 371 aur 6th Schedule ke tahat unhe apni zameen aur parampara khud sambhalne ki azaadi di.',
        },
        {
          label: 'Desh Se Judav',
          text: 'Bandook uthane wale vidrohi netaon ne hinsa chhod kar chunav lade aur mukhyamantri bankar loktantra ko apnaya.',
        },
      ],
    },
    {
      kind: 'thinkerQuote',
      thinkerSlug: 'br-ambedkar',
      quote: 'The Indian village is a sink of localism, a den of ignorance, narrow-mindedness and communalism.',
      context: 'Sanvidhan Sabha mein 4 November 1948 ko gaon ke dabdabe par Ambedkar ki aitihasik chetavni.',
    },
    {
      kind: 'compare',
      leftTitle: 'Symmetric Federalism (Barabar Niyam)',
      rightTitle: 'Asymmetric Federalism (Zaroorat-Aadhrit)',
      rows: [
        {
          aspect: 'Sanvidhanik Dancha',
          left: 'Sabhi rajyon ke paas ek saman kanooni shaktiyan hoti hain',
          right: 'Rajya ki sthiti aur itihas dekhkar alag-alag azaadi di jati hai',
        },
        {
          aspect: 'Nyay Ki Soch',
          left: 'Kanoon ki nazar mein formal samanta par zordar dhyan',
          right: 'Kamzor samudayon ko bhedbhav se bachane ke liye substantive justice',
        },
        {
          aspect: 'Vividhta Ka Hal',
          left: 'Umeed ki jati hai ki minority samaj mukhya dhara mein mil jaye',
          right: 'Vividhta ko sansthagat darja dekar hamesha ke liye bachaya jata hai',
        },
        {
          aspect: 'Bharat Mein Udaharan',
          left: 'Seventh Schedule mein Union aur State list ka aam batwara',
          right: 'Articles 371A–J, Sixth Schedule Autonomous Councils',
        },
      ],
    },
    {
      kind: 'md',
      body: `## Satta Ka Vikendrikaran: 73rd aur 74th Sanshodhan aur PRIs

1992 mein 73rd aur 74th Sanvidhan Sanshodhan ke zariye Panchayati Raj aur Shehri Nikayon ko Sanvidhan ka hissa banaya gaya. Isse pehle gaon ki panchayat rajya sarkar ki kripa par chalti thi aur kai saalon tak chunav hi nahi hote the.

Is sanvidhanik kadam ne Mahatma Gandhi aur [[thinker:B.R. Ambedkar]] ke purane vivad ko suljhaya. Gandhi gaon ko ek pavitra aatmanirbhar ganrajya (*Gram Swaraj*) maante the. Par Ambedkar is baat ke sakht khilaf the; unhone kaha tha ki gaon keval jatiye bhedbhav aur unchi jati ke dabdabe ka adda hai jahan Dalit ko barabari nahi mil sakti. Naye Panchayati Raj ne is samasya ko aarakshan ke zariye hal kiya: SC, ST aur mahilaon ke liye seat reserve karke unchi jatiyon ke ekaadhikar ko tod diya gaya.

Panchayati Raj ki mukhya uplabdhiyan:
- **Loktantra Ka Asli Vistar:** Teen staron (Gram, Block, Zilla) par 31 lakh se zyada chune hue pratinidhi bane, jo duniya ka sabse bada grassroots loktantra hai.
- **Mahila Shashaktikaran:** 33% aarakshan (jo Bihar, MP, Kerala samet 20 rajyon mein 50% kar diya gaya hai) ki wajah se 14 lakh se zyada mahilayein gaon ki sarkar chala rahi hain [[eg:Mahila sarpanch dwara shanti se gaon mein saaf paani, anganwadi aur primary school par pehle dhyan dena]].
- **Vanchit Vargo Ka Netritva:** Daliton aur Adivasiyon ke liye Sarpanch aur Pradhan ke pad reserve hone se unka aatmasamman badha.`,
    },
    {
      kind: 'md',
      body: `## Zameeni Rukavatein: Sarpanch-Pati Pratha aur 3Fs Ka Sankat

Sanvidhan ne kanoon toh bana diya, par zameen par panchayaton ko chalane mein sadiyon purana purush-pradhan dharatal aur rajya sarkaron ka aalsi rawaiyya badi rukavat bana hua hai.

Teen badi samajshastriya chunautiyan hain:
1. **3Fs Ka Sankat (Funds, Functions, Functionaries):**
   - *Funds (Paisa):* Gram panchayats apne dum par 5% se bhi kam tax ikattha kar pati hain; woh poori tarah kendra aur rajya sarkar ke anudan par nirbhar rehti hain.
   - *Functions (Kaam):* 11th Schedule ke 29 vishayon mein se zyadatar rajyon ne zaroori kaam panchayaton ko saunpe hi nahi hain.
   - *Functionaries (Karmchari):* Gaon ke sachiv aur BDO collector ke aage hath jodte hain, chune hue sarpanch ki baat nahi sunte.
2. **"Sarpanch-Pati" / "Pradhan-Pati" Pratha:**
   Sociologists Sudha Pai aur Nirmala Buch batati hain ki ghar ke purush (pati, sasur ya beta) mahila ki jagah meeting mein baithte hain aur theke tay karte hain, jabki chuni hui mahila ghar par parda karke baithi rehti hai [[eg:Sarkari afsaron ka mahila sarpanch se baat karne ke bajaye uske pati ko aage bithana]]. Par lambe samay ke studies dikhate hain ki doosre term mein aane par mahilaon ka jhijhak toot jati hai aur woh khud faisle lene lagti hain.
3. **Dominant Caste Ka Gussa aur Bahishkar:**
   Kayi gaon mein dominant castes ([[thinker:M.N. Srinivas]]) Dalit sarpanch ko bardaasht nahi kar pati. Jab koi Dalit mahila sarpanch banti hai, toh uske khilaf jhoothe no-confidence motions laye jate hain ya gaon mein unka samajik bahishkar kiya jata hai.`,
    },
    {
      kind: 'callout',
      variant: 'galtiMat',
      title: 'Sarpanch-Pati Par Santulit Nazariya',
      body: 'Answer mein mahila sarpanchon ko seedhe rubber stamp likhkar mat chhod dena. Nirmala Buch ki research dikhati hai ki shuruat mein proxy hone ke bavajood, kursi par baithne se gaon ki ladkiyon mein aatmasamman badhta hai aur agle chunav tak mahila khud prashasan chalaana seekh jati hai.',
    },
    {
      kind: 'callout',
      variant: 'yaadRakho',
      title: 'Max Weber Banam Grassroots Democracy',
      body: 'Paper 1 mein Max Weber ne Bureaucracy ke iron cage ki baat ki thi. Paper 2 mein BDO aur Panchayat Sachiv dwara gaon ke chune hue sarpanch ko dabana seedhe taur par Weberian babushahi ka loktantra par dabdaba dikhata hai.',
    },
    {
      kind: 'keyTerm',
      term: 'Asymmetric Federalism',
      meaning:
        'Aisa sanghiya dhancha jahan vividh rajyon aur janjatiye ilaqon ko unke alag itihas aur sanskriti ke hisab se alag-alag sanvidhanik adhikar diye jate hain.',
    },
    {
      kind: 'keyTerm',
      term: 'Kshetriya Chetna (Sub-National Assertion)',
      meaning:
        'Kisi ilaqe, bhasha ya sanskritik samuday dwara apne astitva, vikas aur sanvidhanik azaadi ke liye rajnitik taur par aawaz uthana.',
    },
    {
      kind: 'keyTerm',
      term: 'Sarpanch-Pati Pratha',
      meaning:
        'Gaon ke shasan mein aisi purush-pradhan vyavastha jahan chuni hui mahila pratinidhi ki jagah uska pati ya sasur sarkar ke faisle leta hai.',
    },
    {
      kind: 'keyTerm',
      term: '3Fs Ki Kami (PRIs)',
      meaning:
        'Rajya sarkaron dwara panchayaton ko paryapt Funds (paise), Functions (kaam) aur Functionaries (karmchari) na dene ki structural kamzori.',
    },
    {
      kind: 'answerBox',
      intro:
        '73rd Sanvidhan Sanshodhan ne gaon ke loktantra ko gahra banaya ya keval kagazi sansthan banakar chhod diya, iska mulyankan dono tarfon se hona chahiye:',
      points: [
        'Zameeni netritva ka badlav: 31 lakh se zyada pratinidhiyon aur 14 lakh mahilaon ko shashan mein laakar gaon ke purane samanti dabdabe ko hila diya gaya.',
        'Mahilaon ki prathmikta: Studies se saaf hua hai ki mahila sarpanch gaon mein peene ke saaf paani, primary school aur delivery room jaisi buniyadi zarooraton par pehle paisa kharch karti hain.',
        'Paise ki bhari kami: Apne dum par tax na laga pane ke karan 95% kharche ke liye panchayatein rajya aur kendra ke aage hath phailaye rehti hain.',
        'Babushahi ka dabav: BDO aur collector ke paas panchayat ke prastavon ko rokne aur sarpanch ko suspend karne ka adhikar hone se sthaniya azaadi dabi rehti hai.',
        'Uchh jatiyon ka virodh: Gaon ke paramprik zameendar Dalit aur Adivasi sarpanch ko kursi par baithne se rokte hain aur aisi ghatnayein Sanvidhan ki kamzori dikhati hain.',
      ],
      conclusion:
        '73rd Sanshodhan ne loktantra ka ek vishal dancha toh khada kar diya, par iski asli kamyabi tabhi hogi jab gaon ko sach mein apna budget banane ki azaadi milegi aur jatiye shoshan se kanooni suraksha di jayegi.',
    },
  ],
}
