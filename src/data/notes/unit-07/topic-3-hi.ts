import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 7.3 · Nation, State, Citizenship, Democracy, Civil Society & Ideology',
  center: 'State & Democratic Order',
  subtitle: 'State & Nation • Citizenship • Democracy • Civil Society & Ideology',
  branches: [
    {
      title: 'State, Nation & Globalisation',
      color: 'lavender',
      thinkers: ['Max Weber', 'Benedict Anderson', 'Ernest Gellner', 'David McCrone'],
      points: [
        'Weber: State ke paas ek territory mein legitimate physical force ki monopoly hoti hai',
        '4 Elements: Territory, Population, Government, Sovereignty (+ Recognition)',
        'Anderson: Nation ek "Imagined Community" hai; McCrone: Ethnic vs Civic nations',
        'Deterritorialisation (IMF/EU/tech) vs Nation-state persistence (borders/Brexit)',
      ],
    },
    {
      title: 'Citizenship (T.H. Marshall)',
      color: 'yellow',
      thinkers: ['T.H. Marshall', 'Bryan Turner', 'Nira Yuval-Davis', 'Suraj Gogoi'],
      points: [
        'Subjects raja ke gulam the; Citizens ko state ke khilaf legal rights + duties milti hain',
        'Marshall ke 3 charan: Civil (18th C), Political (19th C), Social Rights (20th C)',
        'Social Class se takraav: citizenship barabari laati hai par property class tikati hai',
        'Critiques: Anglocentric, male-centric (feminist) & Bharat mein CAA-NRC behas',
      ],
    },
    {
      title: 'Democracy & Participation',
      color: 'mint',
      thinkers: ['B.R. Ambedkar', 'Alexis de Tocqueville', 'Milbrath & Goel', 'Yogendra Yadav'],
      points: [
        'Ambedkar: political democracy ke liye social democracy aur constitutional morality zaroori',
        'Critiques: Plato mobocracy, Marx talking shops, Tocqueville majority tyranny',
        'Milbrath & Goel: Gladiators (active), Spectators (voters), Apathetics (udaseen)',
        'Barriers: garibi, patriarchy, criminalisation & Levitsky democratic backsliding',
      ],
    },
    {
      title: 'Civil Society & Ideology',
      color: 'pink',
      thinkers: ['Antonio Gramsci', 'Rajni Kothari', 'Partha Chatterjee', 'Christophe Jaffrelot'],
      points: [
        'Third sector (non-state, non-market): NGOs, unions, media & voluntary sabhas',
        'Functions: watchdog, PILs, service delivery (Rajiv Gandhi ke 15-paise leak ka ilaj)',
        'Chatterjee: elite "Civil Society" vs subaltern "Political Society" ka farak',
        'Indian shift: Nehruvian Ideology politics -> Mandal/Mandir Identity politics',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u07-02-state-citizenship-movements.webp',
    alt: 'P1 Unit 7 infographic: State, Citizenship & Movements — State-Society Pipeline & Collective Mobilization',
    caption: 'State-Society Pipeline & Collective Mobilization — State, Citizenship & Movements ka visual saransh.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 7 Visual 02',
  },
  {
    kind: 'md',
    body: `## State, Nation aur Nation-State mein Kya Farak Hai?

Aasaan shabdon mein samjho: aam bolchal mein hum "desh", "State" aur "Nation" ko ek hi maan lete hain, par sociology mein inmein bada farak hai. ==State== ek kanooni aur rajneetik sanstha hai (jiske paas police, fauj, court aur sarkar hai), jabki ==Nation== ek cultural aur manovaijnanik (psychological) bhavna hai jahan log ek sanjhi bhasha, itihas ya sanskriti ke kaaran "hum ek hain" mehsoos karte hain. Jab ek Nation (sanjhi bhavna wale log) apni khud ki azaad State (sovereign country) bana lete hain, tab ==Nation-State== banta hai.

- **State ki Sociological Paribhasha:** [[thinker:Max Weber]] ne State ki sabse mashhoor paribhasha di: State woh manav samuday hai jo ek nishchit bhoomi (territory) ke bheetar ==legitimate physical force (dande/hinsa) ke istemal par monopoly== rakhta hai. [[thinker:Robert MacIver]] ne bataya ki Red Cross ya club ki tarah State optional nahi hai; iske kanoon manna har nagrik ke liye mandatory hai. State ke **4 anivarya elements** hain: **1. Territory** (zameen, paani, hawa — chahe aadh km ka Vatican City ho ya vishal Russia), **2. People** (sthayi aabadi), **3. Government** (State ka dikhne wala hathiyar jo shasan chalata hai), aur **4. Sovereignty** (andar aur bahar se poori azaadi — isi kaaran Haryana ya Rajasthan political sociology mein "State" nahi hain), jabki 5th element **International Recognition** par behas chalti rehti hai.
- **Nation as an "Imagined Community":** 1648 ki **Treaty of Westphalia** aur Europe mein Ottoman/Habsburg empires tootne ke baad industrialisation, mass education aur print media ([[thinker:Ernest Gellner]]) ke saath modern nation-states bane. [[thinker:Benedict Anderson]] ne Nation ko ==Imagined Community== kaha — kyunki Bharat ke 140 crore log kabhi gaon ki tarah ek-doosre se aamne-saamne nahi milenge, fir bhi akhbar, map aur tirange ke zariye unke man mein ek gehra apnapan aur bhaichara rehta hai.
- **Ethnic vs Civic Nations ([[thinker:David McCrone]]):** Apni kitab *The Sociology of Nationalism* mein McCrone ne do tarah ke nations bataye — **Ethnic Nations** (18th–19th century Europe jaise France ya Germany jo ek bhasha aur ek jaati/culture par bane) aur **Civic Nations** (20th century ke post-colonial desh jaise **Bharat**, jahan bhasha aur dharm ki bhari vividhta ke bawajood **Single Constitution, Single Citizenship**, Rupee, Bharat Mata ke prateek, [[thinker:Émile Durkheim]] ke mutabik sanjhe freedom struggle ke itihas aur cricket/external threats ke samay ekta se rashtra-nirman hua).

### Globalisation aur Deterritorialisation: Kya Nation-State Khatam Ho Raha Hai?

Ek vichardhara ([[thinker:Arjun Appadurai]], [[thinker:Ulrich Beck]]) maanti hai ki globalisation se ==deterritorialisation== ho raha hai — Zoom/WhatsApp, climate change, EU jaise supranational bodies aur IMF/World Bank ke dabav [[eg:1991 ke forex crisis mein IMF ki sharton par Bharat ko majbooran apni economy kholni padi]] ne deshon ki seemaon ko kamzor kar diya hai. Lekin **Persistence Perspective** ([[thinker:Anthony Giddens]], [[thinker:Michael Mann]]) dikhata hai ki Nation-State aaj bhi zinda aur taaqatwar hai: **Brexit**, Trump ka "Make America Great Again", Russia-Ukraine yuddh aur COVID-19 mein border band hona tatha "vaccine nationalism" sabit karte hain ki aam nagrik aaj bhi suraksha ke liye Nation-State par hi nirbhar hai.

## Citizenship: T.H. Marshall ka Siddhant aur CAA-NRC Behas

Aasaan shabdon mein samjho: purane rajtantra mein janta **"Subject" (praja)** hoti thi jiske paas koi adhikar nahi the, sirf raja ka hukm manna padta tha. Modern democracy mein insaan ==Citizen (nagrik)== hai — use State ke khilaf kanooni adhikar (rights) milte hain aur badle mein woh State ke prati wafadari (duties) nibhata hai. [[eg:Bharatiya Samvidhan ke Articles 15, 16, 19, 29 aur 30 ke Fundamental Rights sirf Indian citizens ko milte hain, videshiyon ko nahi.]]

British sociologist [[thinker:T.H. Marshall]] ne apni kitab *Citizenship and Social Class* (1950) mein dikhaya ki Citizenship 3 sadiyon mein 3 charanon mein viksit hui:

- **1. Civil Rights (18th Century):** Vyakti ki azaadi ke adhikar — bolne ki azaadi, property rakhne ka haq aur kanoon ke saamne barabari (Sanstha: **Courts of Justice**).
- **2. Political Rights (19th Century):** Vote dene, chunav ladne aur satta mein bhagidari ka adhikar (Sanstha: **Parliament & Local Councils**).
- **3. Social Rights (20th Century):** Shiksha, swasthya, saaf paani aur izzatdar zindagi jeene ka welfare adhikar (Sanstha: **Welfare State & Schools**).

Marshall ne ek bada virodhabhas dikhaya: **Citizenship samaj mein barabari (equality) laati hai, jabki Social Class unch-neech (inequality) paida karti hai.** Welfare rights mazdooron ko thodi rahat dekar capitalism ko sthir rakhte hain, par jab tak private property ka kanooni haq hai, social class khatam nahi hoti.

- **Critiques aur CAA-NRC Behas:** Feminist thinkers ([[thinker:Sylvia Walby]], [[thinker:Nira Yuval-Davis]]) ne critique kiya ki Marshall ka model "male-centric" aur sirf Britain par aadharit hai (auraton aur colonies ko adhikar alag kram mein mile). [[eg:Aaj Bharat mein CAA (Pakistan, Afghanistan, Bangladesh ke shoshit non-Muslim minorities ko citizenship dena) aur NRC (Assam Accord 1985 se shuru hokar asali nagrikon ki pehchan) par gahri sociological behas hai — samarthak ise seemit national resources aur shoshit minorities ki raksha ke liye zaroori maante hain, jabki Suraj Gogoi ("graveyard of citizenship") aur Zygmunt Bauman ke lens se aalochak ise Muslim-virodhi aur kagaz-viheen gareebon ke liye sankat batate hain.]]

## Democracy as an Order of Society aur Participation ki Rukawatein

Greek shabd *Demos* (janta) aur *Kratos* (shasan) se nikli Democracy ko Abraham Lincoln ne "janta ka, janta ke dwara, janta ke liye shasan" kaha, aur [[thinker:Samuel Huntington]] ne ise regular, free aur fair elections se joda (Pew/Polity data ke mutabik 1977 ke 24% deshon se badhkar 2017 mein 57% desh democratic hue). Lekin [[thinker:B.R. Ambedkar]] ne samjhaya ki loktantra sirf sarkar banane ki machine nahi hai — ==Democracy ek samajik vyavastha (an order of society) hai== jo samajik bhaichare, barabari aur ==Constitutional Morality== (apne niji swarth ya bheed ki marzi se upar uthkar samvidhan ke usoolon ka palan karna aur rajneeti mein "Bhakti/hero-worship" se bachna) par tikti hai.

### Democracy ki Aalochana aur Democratic Backsliding

- **Classical Critiques:** **Plato** ne democracy ko *Mobocracy* (bheedtantra) kaha aur **Ship Analogy** di ki toofan mein फंसे jahaz ko passengers ki voting se nahi balki expert captain (Philosopher King) se chalaya jaata hai; **Marx aur Lenin** ne ise bourgeois tamasha aur parliaments ko "talking shops" kaha; aur [[thinker:Alexis de Tocqueville]] (*Democracy in America*) ne ==Tyranny of the Majority== ki chetavani di jahan sankhya ke dum par majority अल्पसंख्यकों ki bhavnaon ko daba sakti hai.
- **Fallacy of Representativeness & Backsliding:** First-past-the-post system mein 140 crore ke desh mein ~17–18 crore vote (kul dale gaye votes ka ~1/3) paane wali party 100% satta paa leti hai. Aaj [[thinker:Steven Levitsky]] aur [[thinker:Daniel Ziblatt]] ==Democratic Backsliding== dikhate hain — jahan loktantra fauji takhtapalat se nahi, balki chune hue netaon dwara sansthaon aur media ko kamzor karne se toot-ta hai.

### Log Rajneeti Mein Hissa Kyun Nahi Lete? (Milbrath & Goel)

Apni kitab *Political Participation* mein [[thinker:Lester Milbrath]] aur [[thinker:M.L. Goel]] ne nagrikon ko 3 bhaagon mein baanta: **1. Gladiators** (jo maidan mein utar kar chunav ladte aur rally karte hain), **2. Spectators** (jo 5 saal mein vote dete hain aur train/chai ki dukan par behas karte hain), aur **3. Apathetics** (jo vote tak nahi dete). [[thinker:Sidney Verba]], [[thinker:Norman Nie]] aur [[thinker:Jae-on Kim]] (Efficacy, Resources, Conflict Avoidance) ke saath milkar Bharat mein kam bhagidari ke mukhya kaaran hain:

- **Garibi, Ashiksha aur Paisa:** Chunav ladne ka kharcha karodon mein hone ke kaaran aam mazdoor ke paas waqt aur paisa dono nahi hote.
- **Patriarchy aur Caste Dar:** Mahilaon ko pitrisatta aur "Sarpanch Pati" culture rokta hai, jabki kamzor jaatiyon ko dabangon ka dar satata hai.
- **Criminalisation aur Digital Divide:** Rajneeti mein apradhiyon aur bhrashtachar ko dekh kar shahri middle class udaseen ho jaata hai — haalanki [[thinker:Yogendra Yadav]] ke **Second Democratic Upsurge** aur [[thinker:Christophe Jaffrelot]] ke **Silent Revolution** ne dikhaya ki Bharat ke gaon ke Dalit, OBC aur Adivasi shahri ameeron se kahin zyada josh ke saath vote daalte hain!

## Civil Society aur Ideology se Identity Politics ka Safar

Parivar (Private Sphere) se bahar, par sarkar (State) aur corporate bazaar (Market) se alag jo voluntary sangathan janta ki bhalai ke liye kaam karte hain, unhe ==Civil Society== ya **"Third Sector"** kehte hain ([[thinker:Alexis de Tocqueville]], [[thinker:Jürgen Habermas]]). Ismein NGOs (Narmada Bachao Andolan, MKSS, SEWA), trade unions, Rotary/Lions clubs, socio-religious sansthayein (Ramakrishna Mission, Khalsa Aid) aur public intellectuals aate hain.

| Bharat mein Daur | State aur Civil Society ka Rishta | Mukhya Sociological Features & Examples |
| --- | --- | --- |
| Ancient & Colonial | Civilisational volunteerism (*Daan, Seva, Zakat*) & Sudhar | [[thinker:Rajni Kothari]]: samaj state ke bina khud chalta tha; Arya/Brahmo Samaj aur Gandhi ji ka *Daridra Narayan* seva karya |
| Nehruvian Era (1950–70s) | Sahyogi vikas (Collaborative partnership) | Welfare state ke vikas karyon mein voluntary sansthaon ne bureaucracy ki madad ki |
| Emergency & 1980s | Watchdog aur Adhikar Andolan ka daur | PUCL, Chipko aur Narmada Bachao Andolan ne state ki manmani aur visthapan ko chunauti di |
| Post-1991 Neoliberal Era | State roll-back, Global NGOs aur FCRA niyantran | NGOs ne welfare gap bhara (Rajiv Gandhi ke "1 rupaye mein se 15 paise" bureaucratic leakage ka vikalp), saath hi PILs aur RTI laaye |

- **Civil Society ki Seemayein (Gramsci, Amartya Sen, Partha Chatterjee):** [[thinker:Antonio Gramsci]] ne dikhaya ki ruling class civil society ke zariye **hegemony** banati hai. [[thinker:Amartya Sen]] ne chetavani di ki kai NGOs retired bureaucrats aur netaon dwara fund haradne ka zariya ban gaye hain. Sabse mahatvapurna, [[thinker:Partha Chatterjee]] ne kaha ki Bharat mein kanooni ==Civil Society== sirf mutthi bhar shahri angrezi-bolne wale middle class tak seemit hai, jabki desh ki badi gareeb aabadi (jhuggi-wasi, rehdi-patri wale) vote-bank aur rajneetik jod-tod ke zariye ==Political Society== mein sarkar se apna haq nikalti hai.
- **Ideology se Identity Politics ka Transition:** Azaadi ke baad ke shuruati dashakon mein Bharatiya rajneeti **Ideology Politics** (Socialism vs Capitalism, Nehruvian secularism vs market) ke ird-gird ghoomti thi. Lekin 1967 ke baad (DMK ka Dravidian andolan, Charan Singh ka AJGAR kisan gathbandhan) aur 1990s ke **Mandal-Mandir** daur mein yeh **Identity Politics** (jaati, dharm, bhasha aur kshetra ki pehchan — SP, RJD, BSP ka Bahujan uday) mein badal gayi. [[link:Paper 2 Unit 12 se jodo: aaj Bharat mein Ideology aur Identity alag nahi hain, balki welfare schemes ("Labharthi" ideology) aur Caste Census/Hindutva identity ek saath milkar kaam kar rahe hain.]]`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1648',
        title: 'Treaty of Westphalia',
        text: 'Territorial sovereignty aur dusre desh ke mamle mein dakhal na dene ke niyam se modern Nation-State system ki neev padi.',
      },
      {
        year: '18th–20th C',
        title: 'T.H. Marshall ke Citizenship ke 3 Charan',
        text: '18th C mein Civil Rights (courts), 19th C mein Political Rights (parliament) aur 20th C mein Social Rights (welfare state) ka vikas.',
      },
      {
        year: '1950–1967',
        title: 'Nehruvian Consensus & Congress System',
        text: 'Rajni Kothari ka One-Party Dominant System jahan macro-ideology aur state-led nation-building centre mein the.',
      },
      {
        year: '1967–1990s',
        title: 'First & Second Democratic Upsurges (Y. Yadav)',
        text: 'Regional parties, OBC/Dalit identity politics (Mandal) aur watchdog civil society movements ka uday.',
      },
      {
        year: '1991–Present',
        title: 'Neoliberal Globalisation & Hybrid Politics',
        text: 'Global NGOs, RTI/PIL activism, CAA-NRC citizenship debates aur identity ke saath welfare politics ka sangam.',
      },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Ideology Politics',
    rightTitle: 'Identity Politics',
    rows: [
      {
        aspect: 'Rajneeti ka Aadhar',
        left: 'Samaj aur economy kaise chalein, iske siddhant aur vichardhara',
        right: 'Janmजात samajik pehchan (jaati, dharm, bhasha, gender) aur unka anubhav',
      },
      {
        aspect: 'Mukhya Takraav',
        left: 'Socialism vs Capitalism, State planning vs Free market, Left vs Right',
        right: 'Dalit/OBC assertion, Dravidian bhasha, Adivasi jal-jangal-zameen, LGBTQ+',
      },
      {
        aspect: 'Asli Maqsad',
        left: 'Economic policy aur state structure mein vyapak badlaav',
        right: 'Samman (Dignity), Politics of Presence (Anne Phillips) aur aarakshan/hissedari',
      },
      {
        aspect: 'Bharatiya Safar',
        left: '1950s–60s ke Nehruvian socialism vs Swatantra/Left behas mein prabhavi',
        right: '1967 aur 1990s ke Mandal-Mandir, BSP, RJD, DMK ke uday se kendra mein aayi',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Monopoly of Legitimate Physical Force',
    meaning:
      'Max Weber ki State paribhasha: ek nishchit territory ke bheetar kanooni roop se dande ya bal ka istemal karne ka iklauta adhikar sirf State ke paas hota hai.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'Imagined Community',
    meaning:
      'Benedict Anderson ka concept ki Nation ek kalpit samuday hai jahan karodon log bina ek-doosre se mile print media aur national symbols ke zariye ekta mehsoos karte hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Civil, Political & Social Citizenship',
    meaning:
      'T.H. Marshall ka model jo dikhata hai ki kanooni azaadi (18th C), vote ka haq (19th C) aur welfare adhikar (20th C) kaise class inequality ko santulit karte hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Constitutional Morality & Social Democracy',
    meaning:
      'B.R. Ambedkar ka siddhant ki political democracy tabhi tik sakti hai jab samaj mein barabari ho aur log bheed ya vyakti-pooja se upar samvidhan ka palan karein.',
    thinkerSlug: 'br-ambedkar',
  },
  {
    kind: 'keyTerm',
    term: 'Civil Society vs Political Society',
    meaning:
      'Partha Chatterjee ka bhed: Bharat mein formal "Civil Society" shahri middle class tak seemit hai, jabki gareeb janta vote-bank bargaining wale "Political Society" se apna haq paati hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'br-ambedkar',
    quote: 'Political democracy cannot last unless there lies at the base of it social democracy.',
    context: 'Constituent Assembly Speech (25 November 1949) — loktantra ko samajik jeevan-shaili ke roop mein paribhashit karte hue.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Civil Society aur Democracy par 6 Repeat PYQs (2024, 2023, 2021, 2017, 2013x2)!',
    body: 'Unit 7 mein Civil Society UPSC ka sabse favourite topic hai. Har answer mein 4 pillars likho: (1) Tocqueville aur Habermas ka public sphere / watchdog role, (2) Bharat mein RTI (MKSS), PILs aur welfare delivery (Rajiv Gandhi ke "1 rupaye mein 15 paise" bureaucratic leakage ka ilaj), (3) Bharat mein 4-stage evolution (Rajni Kothari), aur (4) Critical view — Gramsci ki hegemony, Amartya Sen ka NGO critique aur Partha Chatterjee ka Civil vs Political Society.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Globalisation par Answer mein Nation-State ko Dead mat ghoshit kar dena!',
    body: 'PYQ 2015 ("Globalization involves deterritorialization") mein ek-tarfa answer mat likhna. Pehle deterritorialisation samjhao (Appadurai ke global flows, 1991 IMF shartein, EU, digital tech), aur turant doosra paksh (Persistence Thesis: Giddens, Mann) do ki Brexit, COVID-19 vaccine nationalism, border walls aur Ukraine yuddh dikhate hain ki Nation-State khatam nahi hua balki aur majbooti se borders bacha raha hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Milbrath & Goel ka Participation Pyramid: GSA',
    body: 'Jab UPSC poochhe ki log rajneeti mein participate kyun nahi karte (PYQ 2020), toh Milbrath & Goel ka GSA pyramid banao: Gladiators (chunav ladne wale), Spectators (vote aur chai-charcha karne wale), aur Apathetics (udaseen non-voters) — aur Verba, Nie & Kim ke 4 factors (Efficacy, Resources, Conflict Avoidance, Cooperation) jodo.',
  },
  {
    kind: 'answerBox',
    intro:
      'Modern democratic vyavastha State, Nation, Citizenship, Democracy aur Civil Society ke aapsi santulan par tiki hui ek zinda samajik prakriya hai.',
    points: [
      'State & Nation-State: Weber State ko legitimate physical force ki monopoly se jodte hain, jabki Anderson aur McCrone dikhate hain ki Bharat jaisa Civic Nation vividhta ko ek Samvidhan se jodta hai.',
      'Marshall ka Citizenship Model: 18th C Civil, 19th C Political aur 20th C Social rights ke zariye citizenship badhi, jis par feminist thinkers aur Bharat ke CAA-NRC debates naye sawaal uthate hain.',
      'Democracy as Social Order (Ambedkar): Sirf chunav (Huntington) kafi nahi; social democracy, constitutional morality aur garibi-pitrisatta ki rukawaton (Milbrath & Goel) ko todna zaroori hai.',
      'Civil Society ki Bhoomika: Non-state, non-market Third Sector (Tocqueville, Kothari) RTI, PIL aur welfare delivery se loktantra ko gehra karta hai, basharte Partha Chatterjee ke elite gap ko paata jaaye.',
      'Ideology se Identity Politics: Bharat ki rajneeti Nehruvian macro-ideology se aage badh kar Mandal-Mandir aur Bahujan identity (Jaffrelot ka Silent Revolution) tatha welfare politics ke sangam tak pahunchi hai.',
    ],
    conclusion:
      'Ek majboot loktantra ke liye samvidhanik State aur jagruk Civil Society dono ka milkar har nagrik ko empowered banana anivarya hai.',
  },
]

export const topic3Hi: TopicLangContent = {
  summary:
    'Yeh topic samjhata hai ki modern State (Weber) aur Imagined Nation (Anderson, McCrone) kaise Citizenship (T.H. Marshall) aur Democracy (Ambedkar) ki neev rakhte hain, aur Civil Society tatha Ideology-to-Identity politics Bharat mein state-society rishton ko kaise badal rahe hain.',
  mindMap,
  sections,
}