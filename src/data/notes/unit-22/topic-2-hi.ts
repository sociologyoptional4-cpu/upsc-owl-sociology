import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

export const topic2Hi: Pick<
  TopicNotebookSpec,
  'summary' | 'mindMap' | 'sections'
> = {
  summary:
    'Aasaan bhasha mein samjhein toh yeh topic pichhle saat dashakon mein Bharat ki rajnitik partiyon, dharatal par vote mangne ke badalte tareeqon, pressure groups aur satta mein baithe elite varg ke badlav ko samjhata hai. Isme dekhenge ki kaise azaadi ke baad ka Congress System toota, Green Revolution ke baad kisan jatiyan ubhri, Mandal daur mein Dalit-Pichhda astitva bana, aur aaj ek naya labharthi varg samne aaya. Sath hi Rajni Kothari ke jati ke rajnitikaran, M.N. Srinivas ke vote bank, aarakshan vivad aur Caste Census par samajshastriya bahas ko vishleshit karenge.',
  mindMap: {
    title: 'Rajnitik Dal, Pressure Groups aur Elite Varg',
    center: 'Parties, Groups & Elites',
    subtitle: 'Mobilization ke Charan • Jati ka Rajnitikaran • Pressure Groups & Pareto • Caste Census Vivad',
    branches: [
      {
        title: 'Chunav Mobilization ke Charan',
        color: 'lavender',
        thinkers: ['Rajni Kothari', 'W.H. Morris-Jones', 'Suhas Palshikar', 'Yogendra Singh'],
        points: [
          'Charan 1 (1952–67): Congress pranali, ek-party dabdaba aur aapsi gupt samjhauta',
          'Charan 2 (1967–89): Green Revolution aur madhyam kisan jatiyon (bullock capitalists) ka uday',
          'Charan 3 (1989–2014): Mandal daur, gathbandhan rajniti aur kshetriya pehchan partiyan',
          'Charan 4 (2014–aaj): Dominant Party 2.0, subaltern jatiyon ka gathjod aur labharthi-varg',
        ],
      },
      {
        title: 'Rajniti Mein Jati aur Vote Bank',
        color: 'yellow',
        thinkers: ['M.N. Srinivas', 'Rajni Kothari', 'Lloyd & Susanne Rudolph'],
        points: [
          'M.N. Srinivas: Gaon ke zameendar aur dominant caste ka khada (vertical) vote bank',
          'Rajni Kothari: Jati ka rajnitikaran teen charanon mein badhta hai (secular, integrationist, chetna)',
          'Rudolph & Rudolph: Jati sangathan ab modern pressure group ban kar aatmasamman mangte hain',
          'Aarakshan ka badlav: Mandal (1990), Indra Sawhney creamy layer, aur 103rd EWS quota',
        ],
      },
      {
        title: 'Pressure Groups aur Elite Varg',
        color: 'mint',
        thinkers: ['Vilfredo Pareto', 'C. Wright Mills', 'Francine Frankel', 'Atul Kohli'],
        points: [
          'Pressure groups: Vyapari sangh (FICCI/CII), majdoor union, aur kisan morche (BKU)',
          'Pareto ka circulation of elites: Purane angrezi-babu lions ki jagah zameeni kisan aur pichhde neta aaye',
          'Power elite gathjod: Badi corporate companiyan, neta aur babushahi ka aapsi rishta',
          'Atul Kohli: Institutions ki kamzori aur mangon ki badhti sankhya se governability crisis',
        ],
      },
      {
        title: 'Jati Janganna (Caste Census) Vivad',
        color: 'pink',
        thinkers: ['Satish Deshpande', 'André Béteille', 'Dipankar Gupta', 'Sukhadeo Thorat'],
        points: [
          'Paksh mein tark: 1931 ke baad sahi data nahi hai; aarakshan ki sahi delivery ke liye data zaroori hai',
          'Sub-categorization: Rohini Aayog dikhata hai ki OBC reservation ka fayda keval kuch agdi jatiyon ko mila',
          'Vipakshtah tark: Andre Beteille kehte hain ki kanooni ginti se jati ki deewar aur pakki ho jayegi',
          'Dipankar Gupta: Chunavi labh ke liye anant jatiye hisab-kitab se rashtriya bandhutva tootega',
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
      body: `## Pichhle Saat Dashakon Mein Rajnitik Mobilization Ka Badalta Swaroop

Aazad Bharat mein chunavi rajniti hamesha ek jaisi nahi rahi; jaise-jaise samajik aur aarthik dharatal badla, waise-waise netaon aur partiyon ka vote mangne ka tareeqa bhi badalta gaya. Shuruat mein unchi jatiyon ke babu aur zameendar tay karte the ki gaon ka vote kahan jayega, par pichhle sattar saalon mein kisan, pichhde aur Dalit varg ne apni rajnitik taqat pehchan kar purane shashan ko hila kar rakh diya.

Rajnitik vicharak [[thinker:Rajni Kothari]] ne aazadi ke baad ke shuruati do dashakon ko ==Congress System== kaha. Isme Congress ek vishal chhat ki tarah thi jisme har vichardhara aur gut (faction) ko jagah milti thi, jabki vipakshi partiyan keval dabav banane ka kaam karti thin. Is vyavastha mein shahar ke padhe-likhe vakeel, udyogpati aur gaon ke bade zameendar aapsi samajh se raj chalate the aur garib varg unke peeche chupchap vote dalta tha.

1960s ke aakhir mein Green Revolution (Harit Kranti) ne is shashan ko tod diya. Sociologists Lloyd aur Susanne Rudolph ne bataya ki kheti mein munafa kamane ke baad madhyam kisan jatiyan ==Bullock Capitalists== bankar ubhrin (jaise UP-Haryana ke Jat, Bihar ke Yadav aur Kurmi, Maharashtra ke Maratha aur Karnataka ke Vokkaliga) [[eg:Chaudhary Charan Singh ke netritva mein kisanon ka Congress ke khilaf khada hona]]. Iske baad 1989 ke Mandal daur ne pichhde vargon ko aatmachetan banaya aur kshetriya partiyon ka sunehra daur shuru hua.

| Aitihasik Daur | Mukhya Party Dynamic | Mobilization Ka Samajik Aadhar | Samajshastriya Visheshata |
| :--- | :--- | :--- | :--- |
| **Daur 1 (1952–1967)** | Congress Pranali (Ek-Party Dabdaba) | Uchh-jati netritva + shant adhinast vote bank | Gaon ke thakur/patel ke dam par vertical voting |
| **Daur 2 (1967–1989)** | Kshetriya Chunauti aur Kisan Dal | Madhyam kisan jatiyan (Bullock Capitalists) | Kheti se ameer hue kisanon ka gair-Congressi morcha |
| **Daur 3 (1989–2014)** | Gathbandhan aur Mandalization | OBCs, Dalits, bhashayi samuday, alpasankhyak | Identity politics, kshetriya shasan, bikhri sansad |
| **Daur 4 (2014–Aaj)** | Dominant Party 2.0 (BJP Dabdaba) | Pan-Hindu gathbandhan + Subaltern OBCs + Labharthi varg | Kendriyakrit netritva, sidha kalyan vitran, rashtrawad |`,
    },
    {
      kind: 'timeline',
      items: [
        {
          year: '1952–1967',
          title: 'Congress Pranali aur Consensus Daur',
          text: 'Rajni Kothari ke anusaar ek-party dabdaba jisme uchh jati ke neta policies banate the aur gaon ke mukhiya vote dilwate the.',
        },
        {
          year: '1967',
          title: 'Gair-Congressi Kisan Kranti',
          text: 'North India ke aath rajyon mein Congress ki haar; Harit Kranti ke kisan netaon ne apni rajnitik taqat dikhai.',
        },
        {
          year: '1990',
          title: 'Mandal Aayog aur Identity Daur',
          text: '27% OBC aarakshan lagu hone se samajik dharatal par bada ubal; pichhdi jatiyon ne sansad mein apna haq cheen liya.',
        },
        {
          year: '2014–2024',
          title: 'Dominant Party 2.0 aur Labharthi Varg',
          text: 'Suhas Palshikar ke anusaar sanskritik rashtrawad aur sidhe bank transfer/ration delivery se ek naya pan-Hindu chunavi aadhar bana.',
        },
      ],
    },
    {
      kind: 'callout',
      variant: 'upscAngle',
      title: 'Paper 2 Link: Kisan aur Rajniti',
      body: 'Answer likhte waqt rajnitik partiyon ke badlav ko Agrarian Class Structure (Paper 2 Unit 17) se zaroor jodo. Rudolph & Rudolph ke "bullock capitalists" aur Charan Singh ka uday seedhe taur par Green Revolution ke naye munafedar kisan varg se juda hai.',
    },
    {
      kind: 'md',
      body: `## Jati Ka Rajnitikaran Banam Srinivas Ka Vote Bank

Shuruat mein kayi log sochte the ki aadhunik loktantra aane se jati-pratha khatam ho jayegi, ya phir jati loktantra ko barbad kar degi. Par vastav mein kuch alag hi hua: rajniti ne jati ko khatam nahi kiya, balki jati ka rajnitikaran ho gaya.

Samajshastri [[thinker:M.N. Srinivas]] ne sabse pehle ==Vote Bank== shabd ka istemal kiya. Unka matlab tha ki gaon ka ek paramprik zameendar ya dominant caste ka neta apne aashrit garib logon ke vote ek mutthi mein lekar kisi party ko deta tha [[eg:Gaon ka zameendar thakur garib majdooron ko aadesh de ki sabhi usi party ko vote denge jise woh kahega]]. Par adult franchise aur gupt matdan ne is khade dabdabe ko tod diya.

[[thinker:Rajni Kothari]] ne apni kitaab *Caste in Indian Politics* mein bataya ki loktantra mein jati teen charanon se guzarti hai:
1. **Secular Charan:** Uchh jati ke neta chunav jeetne ke liye doosri jatiyon ke netaon se hath milate hain.
2. **Integrationist Charan:** Ek hi jati ke neta aapas mein ladte hain, isliye woh jeetne ke liye pichhdi jatiyon ko jodte hain aur unhe mudde dete hain.
3. **Chetna Charan:** Pichhdi aur Dalit jatiyan khud sangathan banati hain aur kisi zameendar ki mohtaj na rehkar aatmasamman aur aarakshan mangti hain.

Samkaleen aarakshan bahas isi badlav ko darshati hai. Mandal Aayog (1990) aur *Indra Sawhney* faisle (1992) ne OBC aarakshan ke sath "creamy layer" lagayi. 2019 mein 103rd Sanvidhan Sanshodhan ke zariye 10% EWS quota laya gaya jo jati ke bajaye aamdani par aadharit hai. Wahin Justice Rohini Aayog ne dikhaya ki OBC aarakshan ka 97% fayda keval kuch ginti ki dominant sub-castes ko mila hai, jisse atipichhde varg aaj bhi vanchit hain.`,
    },
    {
      kind: 'thinkerQuote',
      thinkerSlug: 'vilfredo-pareto',
      quote: 'History of political societies is mostly a graveyard of aristocracies, continuously replaced by newer ascending elites.',
      context: 'The Mind and Society, loktantra mein shashak varg ke lagatar badalne par.',
    },
    {
      kind: 'compare',
      leftTitle: 'Purana Khada Vote Bank (Srinivas)',
      rightTitle: 'Modern Horizontal Jati Sangathan (Kothari)',
      rows: [
        {
          aspect: 'Jodne ka Tareeqa',
          left: 'Khada (vertical) rishta; kisan aur zameendar par aashrit voting',
          right: 'Aada (horizontal) rishta; poore rajya ke sajatiya logon ka gathbandhan',
        },
        {
          aspect: 'Voter ki Aazadi',
          left: 'Mazboori aur darr se zameendar ke kehne par vote dalna',
          right: 'Apne adhikaaron aur aatmasamman ke liye josh se faisla lena',
        },
        {
          aspect: 'Bnavat',
          left: 'Gaon ke dabdabe aur karz-vyavastha se bandha hua',
          right: 'Modern registered association jiske chune hue padadhikari hote hain',
        },
        {
          aspect: 'Loktantrik Asar',
          left: 'Samanti dabdabe aur asaman vyavastha ko badhawa diya',
          right: 'Neeche ke vargo ko sansad tak pahuncha kar loktantra ko khol diya',
        },
      ],
    },
    {
      kind: 'md',
      body: `## Pressure Groups aur Bharatiya Elite Varg Ka Circulation

Pressure groups (dabav samooh) nagrik samaj aur sarkar ke beech ek zaroori pul ka kaam karte hain. Rajnitik partiyon ke viprit, pressure groups khud chunav ladkar mantri nahi banna chahte; unka maqsad sarkar par dabav banakar apni pasand ki nitiyan aur subsidies hasil karna hota hai.

Sociologist [[thinker:Vilfredo Pareto]] ne ==Circulation of Elites== ka siddhant diya tha. Unka kehna tha ki itihas purane shashakon ki qabron ka maidan hai, jahan purane shashak (lions) dheere-dheere kamzor hote hain aur naye chatur shashak (foxes) unki jagah le lete hain. Aazad Bharat mein pehle angrezi padhe-likhe vakeel aur afsar ruling elite the. Dheere-dheere unki jagah kisan netaon ne li, aur baad mein kshetriya bhasha bolne wale zameeni Dalit-Pichhda neta aur corporate udyogpati satta ke hissedar bane.

Bharat mein mukhya pressure groups teen tarah ke hain:
- **Corporate aur Business Lobbies:** FICCI, CII aur ASSOCHAM jaise sangathan jo budget aur aarthik nitiyon par sidha asar dalte hain.
- **Kisan aur Mazdoor Sangh:** Mahendra Singh Tikait ke Bhartiya Kisan Union (BKU) se lekar 2020–21 ke Samyukt Kisan Morcha tak, kisan sangathanon ne kanoon wapas lene par sarkar ko majboor kiya.
- **Dalit aur Asmita Sangh:** Karmchari sangathan (BAMCEF) aur jatiye sabhayein jo road jam aur bandh ke zariye apni baat manwati hain.

Sociologist [[thinker:Atul Kohli]] batate hain ki jab har varg apni maang lekar aane laga aur sarkar ki purani sansthayein kamzor hui, toh desh mein ek "governability crisis" paida hui jahan naye-naye davedar aapas mein takra rahe hain.`,
    },
    {
      kind: 'callout',
      variant: 'galtiMat',
      title: 'Bhed Yaad Rakhein: Party Banam Pressure Group',
      body: 'Pressure group aur political party ko ek mat samjho. Party chunav ladti hai aur sarkar chalana chahti hai; pressure group keval bahar se dabav banata hai. Lekin Bharat mein lakeerein dhumil hain: RSS ek vichardharak pressure group hai jo chunav par gehra asar dalta hai.',
    },
    {
      kind: 'keyTerm',
      term: 'Vote Bank',
      meaning:
        'Votero ka aisa samuh jo paramprik zameendar ya dominant caste ke kehne par ek mutthi hokar kisi ek party ko vote deta tha.',
      thinkerSlug: 'mn-srinivas',
    },
    {
      kind: 'keyTerm',
      term: 'Jati Ka Rajnitikaran (Politicization of Caste)',
      meaning:
        'Aisi prakriya jisme paramprik jatiye riston ko chunav jeetne, sansad mein hissedari lene aur kanooni aarakshan pane ke liye istemal kiya jata hai.',
    },
    {
      kind: 'keyTerm',
      term: 'Circulation of Elites',
      meaning:
        'Samajshastriya prakriya jisme sadiyon purana shashak varg dheere-dheere kamzor hokar naye ubharte hue netritva ke liye rasta chhod deta hai.',
      thinkerSlug: 'vilfredo-pareto',
    },
    {
      kind: 'keyTerm',
      term: 'Labharthi Varg',
      meaning:
        'Chunavi rajniti mein ubhra naya cross-caste varg jo sidhe bank transfer, muft ration, gas cylinder aur aawas yojanaon ke labh ke aadhar par vote deta hai.',
    },
    {
      kind: 'callout',
      variant: 'yaadRakho',
      title: '73rd Sanshodhan se Naya Mahila Elite',
      body: '73rd aur 74th Sanvidhan Sanshodhan ne panchayaton mein 14 lakh se zyada chuni hui mahila neta paida keen, jisse gaon ke purush-pradhan elite dabdabe mein zabardast circulation of elites hua.',
    },
    {
      kind: 'answerBox',
      intro:
        'Bharat mein Rashtriya Jati Janganna (Caste Census) karwane ke paksh aur vipaksh mein samajshastriya dharatal par gehri bahas hai:',
      points: [
        'Sahi data ka aadhar: Satish Deshpande ke mutabiq 1931 ke baad jati ka koi aadhikarik national data nahi hai, isliye aaj ki policies andhere mein teer maar rahi hain.',
        'Atipichhdon ki pehchan: Alag-alag jatiyon ka data aane se pata chalega ki aarakshan ka laabh kisne liya aur kaun se varg (jaise EBCs aur ghummakkad jatiyan) bilkul chhoot gaye.',
        'Supreme Court ki shart: Court ne Indra Sawhney aur M. Nagaraj case mein saaf kaha hai ki pichhdepan ka thos empirical data hona zaroori hai.',
        'Jati ki deewar pakki hona: Andre Beteille chetavni dete hain ki sarkar dwara jati gine jane se jati-mukta samaj banane ka sanvidhanik sapna hamesha ke liye toot sakta hai.',
        'Anant jatiye rajniti: Dipankar Gupta kehte hain ki har jati aarakshan ki maang lekar sadak par utregi, jisse chunavi loklubhavanvad aur samajik tanaav badhega.',
      ],
      conclusion:
        'Samajshastriya drishti se jati janganna keval sir ginne ke liye nahi, balki garibi, aamdani aur asahyata ke aarthik aakdon ke sath jod kar ki jaani chahiye taaki sachhi samajik nyay ki neenv ban sake.',
    },
  ],
}
