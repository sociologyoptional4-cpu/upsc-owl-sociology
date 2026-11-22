import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

const summary =
  'Bharat ke madhyam varg (middle class) ke aitihasik udbhav, sanrachna aur samajik-rajnitik bhoomika ka gehra vishleshan karta hai. Nehruvian daur ke public-sector middle class ki tulna 1991 ke baad ke “New Middle Class” se karta hai, André Béteille ke heterogeneity aur cultural contradictions ke siddhant ko samjhata hai, Leela Fernandes aur Pavan Varma ke zariye consumerist citizenship ko dekhta hai, aur Bharat ke loktantra v vikas mein iske do-dhare asar ki padtaal karta hai.'

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 3 — Middle Classes in India (Hinglish)',
  center: 'Middle Classes in India',
  subtitle: 'Colonial Genesis • Nehruvian Bureaucrats • Neoliberal NMC • Democratic Ambivalence',
  branches: [
    {
      title: '1. Udbhav Aur Aitihasik Safar',
      color: 'lavender',
      thinkers: ['B.B. Misra', 'A.R. Desai', 'Yogendra Singh'],
      points: [
        'Colonial administrative paidaish: Angrezi padhe-likhe babu, vakil, master aur clerks',
        'Nehruvian developmental daur: Sarkari PSU engineers, bank managers aur afsaron ka vistar',
        'Sadgi aur desh-nirman ka jazba: Secure naukri, pension aur public services par aashrit hona',
        '1991 ke baad ka badlaav: MNCs, IT sector aur media professionals ka aana',
      ],
    },
    {
      title: '2. Béteille: Heterogeneity Aur Virodhabhas',
      color: 'yellow',
      thinkers: ['André Béteille', 'Dipankar Gupta', 'Max Weber'],
      points: [
        'Bhari aantarik bhedbhav: Top corporate CEOs se lekar chote clerical workers tak ka fasla',
        'Bhasha aur jati ki khayi: Angrezi bolne wala elite vs regional bhasha ka lower-middle class',
        'Transitional hypocrisy: Public mein bhrashtachar ka virodh par private mein biradari ki sifarish',
        'Superficial emancipation: Mahilaon ka padhna-likhna par ghar ke andar purush-pradhan dabdaba',
      ],
    },
    {
      title: '3. 1991 Ke Baad Ka "New Middle Class"',
      color: 'mint',
      thinkers: ['Leela Fernandes', 'Pavan Varma', 'Amita Baviskar'],
      points: [
        'Consumerist citizenship: Malls, branded gaadiyan aur foreign trip se apni pehchan tay karna',
        'Gated communities: Shahar ke aam logon se alag apni gated islands mein safe ho jana',
        'Politics of forgetting (Fernandes): Street vendors aur jhuggi-jhopdi walon ko bahar nikalna',
        'Pavan Varma ka critique: Desh-nirman ki bhavna ka tootna aur selfish consumerism ka badhna',
      ],
    },
    {
      title: '4. Loktantra Aur Vikas Mein Bhoomika',
      color: 'pink',
      thinkers: ['Christophe Jaffrelot', 'Partha Chatterjee', 'Sudipta Kaviraj'],
      points: [
        'Service sector vikas ka engine: IT, tech startups aur domestic demand ko chalane wali shakti',
        'Civil society activism: RWAs, PILs aur India Against Corruption jaise movements ka lead karna',
        'Anti-populist biases: Reservation aur welfare schemes (revadi) ke khilaf gussa vyakt karna',
        'Electoral paradox: TV debates mein poora control par election ke din voting booth se gayab rehna',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u06-01-indian-class-pyramid.webp',
    alt: 'Bharat ke social classes mein madhyam varg ki sthiti capitalists aur shramikon ke beech',
    caption:
      'Middle-Class Stratification: Corporate capitalists aur gareeb mazdooron ke beech sthit madhyam varg consumption aur sanskritik dabdabe ka mukhya kendra hai.',
  },
  {
    kind: 'md',
    body: `## Bharat Mein Madhyam Varg (Middle Class) Ko Samjho

Aasaan shabdon mein samjho: Madhyam varg (middle class) samaj ka wo hissa hai jo na toh bade factory malikon ya zameendaron ki tarah aparampar daulatmand hai, aur na hi physical dehadhi karne wale khetahar ya factory mazdooron ki tarah gareeb hai. Paschim mein middle class industrial revolution ke doran factories aur business se paida hua tha, lekin Bharat mein iski shuruat Angrezon ne apne daftar chalane, tax vasoolne aur adalatein chalane ke liye angrezi-padhe babuon ke roop mein ki thi.

Itihaskar [[thinker:B.B. Misra]] ne apni mashhoor kitaab *The Indian Middle Classes: Their Growth in Modern Times* (1961) mein spasht kiya tha ki colonial sarkar ko Bharat par raaj karne ke liye ek intermediate padhe-likhe varg ki zaroorat thi. Is varg mein unchi jatiyon (Brahmin, Kayastha, Bania) ke log aage aaye jo kanoon, bureaucracy, shiksha aur patrakarita mein jude. Aazadi ke andolan ka netritva Gandhi aur Nehru ke sath isi varg ne kiya, halanki aam gaon ke kisanon se inka dhang alag tha.

Aazadi ke baad Jawaharlal Nehru ke socialist model, state planning aur Public Sector Enterprises (PSUs) ke chalte **Purana Madhyam Varg (Old Middle Class)** khada hua. Is varg ki mukhya pehchan thi:
1. Sarkari daftaron, PSUs, public banks, railways aur sarkari colleges mein pakki naukri.
2. Sadgi-bhara jeevan, bachat karne ki aadat, pension ki suraksha aur state par pura bharosa.
3. Daulat ke bajaye sarkari rutbe, shiksha aur bureaucratic taqat se samajik samman kamana.

| Middle Class Ka Pehlu | Purana Nehruvian Middle Class (1950–1990) | 1991 Ke Baad Ka New Middle Class (NMC) |
| :--- | :--- | :--- |
| **Naukri Ka Zariya** | Civil Services, sarkari PSUs, public sector banks, railway aur university professors | Private MNCs, IT/ITeS software, financial consulting, private media aur startups |
| **Aarthik Nazariya** | Sadgi, bank FD mein bachat, sarkari bus/train, aur free sarkari school/hospital | Conspicuous consumption, credit card EMI lifestyle, private hospitals aur international trips |
| **Sarkar Se Umeed** | Sarkar ko mai-baap aur public welfare ka rakshak manta tha | Sarkar par shak karta hai; privatization, tax cut aur deregulation ki maang karta hai |
| **Samajik Sangathan** | Government employees unions, teachers associations aur secular rashtravad | Resident Welfare Associations (RWAs), PIL lagane wale groups aur anti-corruption rallies |`,
  },
  {
    kind: 'compare',
    leftTitle: 'Purana Madhyam Varg (Pre-1991)',
    rightTitle: 'Naya Madhyam Varg (Post-1991 NMC)',
    rows: [
      {
        aspect: 'Aarthik Base',
        left: 'Sarkari karmachari, PSU engineer, school teacher aur bank clerk.',
        right: 'Private corporate manager, IT software engineer, corporate consultant aur media elite.',
      },
      {
        aspect: 'Cultural Outlook',
        left: 'Frugality (kifaayat), sahitya aur classical kalaon ka shauk, sarkari safety net par vishwas.',
        right: 'Brand consciousness, luxury malls, fancy cafes aur globalized paschimi lifestyle.',
      },
      {
        aspect: 'Rehne Ki Jagah',
        left: 'Government housing colonies (CPWD quarters), open mohalle aur railway colonies.',
        right: 'Gated communities jahan private security, dedicated power backup aur private gym ho.',
      },
      {
        aspect: 'Samajik Nazariya',
        left: 'Desh-nirman ka jazba, public sector ka samarthan, aur constitutional secularism.',
        right: 'Meritocratic individualism, reservation (aarakshan) ka katora virodh, aur free-marketism.',
      },
    ],
  },
  {
    kind: 'md',
    body: `### André Béteille: Heterogeneity Aur Sanskritik Virodhabhas

Sociologist [[thinker:André Béteille]] ne is galat-fehmi ko toda ki Bharat ka madhyam varg ek jaisa (homogeneous) hai. Apni kitaabon *Antinomies of Society* (2000) aur *The Idea of Natural Inequality* mein Béteille ne bataya ki Bharat ka middle class duniya ke kisi bhi middle class se zyada aantarik virodhon se bhara hai.

#### 1. Aamdani, Bhasha Aur Jati Ki Gehri Khayi
Béteille dikhate hain ki middle class koi ek jut varg nahi hai:
- **Income Ka Bhari Fasla**: Ek taraf car aur crores ki salary pane wale corporate CEOs aur senior IAS afsar hain, toh doosri taraf municipal clerk, primary master aur dukan ke salesman hain jo mushkil se gujara karte hain.
- **Bhasha Ka Khel**: Angrezi bolne wala cosmopolitan upper-middle class global MNCs aur policy corridors par raaj karta hai, jabki regional bhasha (Hindi, Tamil, Marathi) bolne wala lower-middle class prantiya daftaron tak simat kar reh jata hai.
- **Jati Aur Mandal Ka Asar**: Pehle middle class par sirf Savarna unchi jatiyon ka kabza tha. 1990 ke Mandal commission ke baad OBC aur Dalit samaj ke padhe-likhe log sarkari naukriyon mein aaye, jisse ek naya **Dalit-OBC middle class** khada hua aur middle class ka jati santulan badla.

#### 2. Sanskritik Virodhabhas Aur "Transitional" Nature
Paschimi samajshastra mein middle class ko "modernity ka harbinger" (aadhuniki-karan ka doot) mana gaya. Lekin Béteille ke mutabiq Bharat ka middle class na poora aadhunik hai aur na poora purana; yeh ek **transitional** (adh-kachre) daur mein hai:
- **Public Universalism vs Private Particularism**: Middle class ke log TV debates aur drawing rooms mein bhrashtachar aur nepotism par gussa nikalte hain, lekin apne bache ke school admission, sarkari theke ya doctor ke ilaj ke liye turant apni jati, rishtedari aur sifarish ka istemal karte hain.
- **Mahilaon Ki Superficial Emancipation (Dikhavati Aazadi)**: Béteille kehte hain ki middle-class mahilaon ki aazadi sirf upar-upar ki hai. Mahilayein jeans pehen kar university jati hain aur corporate jobs karti hain, lekin shaadi ke maamle mein unhe jati ke andar hi baandha jata hai aur ghar ke chulhe-chouke ka poora bojh unhi ke kando par rehta hai.

[[eg:Ek middle-class afsar jo bhrashtachar ke khilaf lecture deta hai, wahi apne bete ki medical seat ke liye lakhon rupaye ki cash capitation fee bina jhijhak de deta hai.]]

[[link:Paper 1 Parsons & Merton ↔ Paper 2 Middle Class: Béteille ka public universalism aur private particularism seedhe Talcott Parsons ke Pattern Variables (Universalism vs Particularism) se judta hai.]]`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Colonial Babudom',
        text: 'Angrezi padhe-likhe unchi jati ke babu jo British revenue aur courts chalate the.',
      },
      {
        label: 'Nehruvian PSU Daur',
        text: 'Public sector, universities aur banks ka vistar; sadgi-bhara jeevan aur pension security.',
      },
      {
        label: '1991 Neoliberal Mod',
        text: 'Private MNCs, consumer credit, malls aur assertive New Middle Class ka janam.',
      },
      {
        label: 'Gated Urban Secession',
        text: 'Gated enclaves, RWAs ki exclusionary politics, aur slum clearing campaigns.',
      },
    ],
  },
  {
    kind: 'md',
    body: `### 1991 Ke Baad Ka "New Middle Class" (NMC)

1991 ke economic reforms ne madhyam varg ke jeevan, soch aur consumption ko poori tarah badal diya. Sociologist [[thinker:Leela Fernandes]] (*India’s New Middle Class*, 2006) aur [[thinker:Pavan Varma]] (*The Great Indian Middle Class*, 1998) ne iske mukhya lakshan dikhaye:

1. **Consumerist Citizenship (Khareed-farokht wali nagrikta)**: Leela Fernandes ke anusaar New Middle Class apni pehchan rajnitik haqon se nahi balki ==Conspicuous Consumption== se tay karta hai. Badi SUV gaadi, branded kapde, shopping mall aur videshi holiday trip yeh dikhane ke paimane ban gaye hain ki wo samaj mein safal hain.
2. **Gated Communities Mein Alag Ho Jana**: Shahar ke toote infrastructure aur aam janta se bachne ke liye NMC Gurgaon (DLF), Noida, Mumbai (Hiranandani) aur Bengaluru (Whitefield) ke private gated apartments mein bas gaya. Yahan private security, dedicated power generator aur swimming pools hain jo shahar ke baaki hisse se ek spatial apartheid banate hain.
3. **Politics of Forgetting (Gareebon ko bhula dene ki rajneeti)**: Fernandes dikhati hain ki NMC shahar ko "clean and green" world-class banane ke naam par street vendors, thele-walon aur jhuggi-jhopdiyon ko shehar se bahar nikalwane ke liye RWAs aur court PILs ka istemal karta hai ([[thinker:Amita Baviskar]]).

### Loktantra Aur Vikas Mein Middle Class Ka Role

Bharat ke loktantra aur economic growth mein madhyam varg ki bhoomika do-dhari talwar jaisi rahi hai:

#### Aarthik Vikas Aur Innovation Ka Engine
Is varg ne Bharat ke services boom ko chalaya hai. Desh ke software engineers, banking experts, doctors aur researchers ne Bharat ko IT aur pharma superpower banaya. Inki khareedne ki taqat ne market ko tezi di aur bideshi investment ko aakarshit kiya.

#### Loktantrik Rajneeti Ka Virodhabhas
- **Civil Society vs Political Society**: Political theorist [[thinker:Partha Chatterjee]] kehte hain ki middle class "Civil Society" (formal NGOs, RWAs, courts aur English media) mein baithkar rule of law ki baat karta hai. Lekin wo "Political Society"—yani garibon ke chunavi gathbandhan, jati samikaran aur welfare rashan—ko bhrashtachar aur ganda samajhta hai.
- **Meritocracy Ka Dikhawa Aur Anti-Reservation Bias**: Middle class "pure merit" ka gun-gaan karta hai aur SC/ST/OBC reservation ko nicha dikhata hai, jabki wo yeh bhool jata hai ki uski apni kamyabi sadiyon ki unchi jati ki social capital par tiki hui hai.
- **Electoral Hypocrisy (Chunav Se Doori)**: TV channels aur social media par 24 ghante gyan dene ke bawajood, jab chunav ka din aata hai toh posh colonies ke polling booths par voting percentage 40–45% hi rehta hai, jabki bagal ki slum basti mein 70% se zyada log vote daalte hain.

[[eg:Bengaluru ya South Delhi ke municipal chunavon mein posh gated societies mein 42% voting hoti hai, jabki sath lagti jhuggi bastiyon mein 75% voting hoti hai, jo madhyam varg ke chunavi doglepan ko darshata hai.]]`,
  },
  {
    kind: 'keyTerm',
    term: 'New Middle Class (NMC)',
    meaning:
      '1991 ke baad ubhra private corporate, IT aur financial professionals ka varg jo globalized lifestyle, brand consumption aur free-market policies par vishwas rakhta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Superficial Emancipation',
    meaning:
      'André Béteille ka concept jo yeh batata hai ki madhyam varg ki mahilaon ki aadhuniki-karan sirf upar-upar hai; higher education ke baad bhi ghar mein purush-pradhan dabdaba bana rehta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Politics of Forgetting',
    meaning:
      'Leela Fernandes ka term jo yeh darshata hai ki shahar ka naya madhyam varg world-class city banane ke bahaane thele-walon aur bastiyon ko zabardasti bahar kar deta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Consumerist Citizenship',
    meaning:
      'Ek aisi sthiti jahan kisi vyakti ka samajik samman aur nagrik hone ka garv uski voting ya samaj-sewa se nahi, balki uski khareedne ki aarthik taqat se napa jata hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Freebies (Revadi) Vivaad Par Sociological Angle',
    body:
      'UPSC ke uttar mein madhyam varg ke virodhabhas ko zaroor likhein: kaise middle class garibon ke rashan aur bijli subsidy ko "freebies" (revadi culture) kehkar gaali deta hai, par corporates ke tax cuts aur shahar ke AC metro/airports par khushi se taliyan bajata hai.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Middle Class Ko Sirf Unchi Jati Mat Samjho',
    body:
      'Yeh galti mat karna ki middle class sirf unchi jati ka hai. Mandal reservation aur sarkari education se paida hue "Dalit aur OBC middle class" ke vistar ko zaroor shamil karo.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Béteille Ka Mukhya Paradox',
    body:
      'Bharat ka madhyam varg public mein universalism (kanoon aur imandari ka lecture) bolta hai, jabki private mein particularism (jati, rishtedari aur sifarish ke dam par kaam nikalna) apnata hai.',
  },
  {
    kind: 'answerBox',
    intro:
      'Bharat ke madhyam varg ke lakshan aur uski loktantra v vikas mein bhoomika par ek behtareen uttar mein uske aarthik yogdan aur samajik virodhabhas dono ka vishleshan hona chahiye:',
    points: [
      'Colonial angrezi babudom aur Nehruvian PSU bureaucracy se nikal kar 1991 ke baad private corporate aur IT technocrats ke roop mein badlaav.',
      'André Béteille ke mutabiq gahri aantarik heterogeneity: aamdani, angrezi bhasha, aur Mandal reservation ke baad ubhre Dalit/OBC madhyam varg ka aapsi sangharsh.',
      'Transitional sanskritik virodhabhas: Bahar imandari ka pravachan dena par ghar-parivar ke liye sifarish, jaatiwad aur purush-pradhan dabav banana.',
      'Consumerist citizenship aur gated communities mein alag-thalag ho jana, jisse shahar ke garibon ke prati bhedbhav aur unki andekhi badhi hai.',
      'Desh ke service-led aarthik vikas, IT exports aur consumer demand ko aage badhane wala sabse bada driver banna.',
      'Loktantrik doglepan ka shikaar hona: TV aur PILs mein aage rehna par election ke din voting booth se door rehna aur garibon ki welfare policies se chidhna.',
    ],
    conclusion:
      'Bharat ka madhyam varg ek aisi shakti hai jo aarthik aur takneeki vikas ke liye behad anivarya hai, lekin loktantrik roop se wo aam janta se katkar ek elitist aur aatm-kendrit daldal mein phansa hua hai.',
  },
]

export const topic3Hi = { summary, mindMap, sections }
