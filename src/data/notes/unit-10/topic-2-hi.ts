import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 10.2 · Vikas Aur Nirbharta (Development and Dependency)',
  center: 'Development & Dependency',
  subtitle: 'Modernisation • Dependency School • World-Systems • Sustainable Development',
  branches: [
    {
      title: 'Modernisation Paradigm',
      color: 'lavender',
      thinkers: ['W.W. Rostow', 'Talcott Parsons', 'Daniel Lerner', 'Alex Inkeles'],
      points: [
        'Rostow ke 5 Charanon ka Vikas: Traditional society se High Mass Consumption tak',
        'Parsons Pattern Variables: Ascription aur Particularism ko chhodkar Achievement apnana',
        'Lerner & Inkeles: aadhunik vyaktitva, media sampark, empathy aur time-discipline',
        'Aalochana: Eurocentric soch, pichhdepan ke liye gareebon ko dosh dena (victim blaming)',
      ],
    },
    {
      title: 'Dependency & Underdevelopment',
      color: 'yellow',
      thinkers: ['Raúl Prebisch', 'Paul Baran', 'A.G. Frank', 'Cardoso & Faletto'],
      points: [
        'Prebisch-Singer Thesis: kachha maal bechne aur factory maal khareedne se ghata',
        'A.G. Frank: Development of Underdevelopment; Metropolis-Satellite shoshan ki chain',
        'Dual Society Ka Khodan: poori duniya capitalist web mein judi hai, koi hissa alag nahi',
        'Cardoso: Associated-Dependent Development (MNCs, sarkar aur local elite ka gathjod)',
      ],
    },
    {
      title: 'World-Systems Analysis',
      color: 'mint',
      thinkers: ['Immanuel Wallerstein', 'Samir Amin', 'Giovanni Arrighi'],
      points: [
        'Poori duniya ek single capitalist vyavastha hai jisme shram ka vishva-star par batwara hai',
        'Core (amir desh) surplus kheenchta hai; Semi-Periphery buffer aur beech ka shoshak banta hai',
        'Periphery kachha maal aur sasta shram deta hai; kamzor sarkar hone se shoshan aasaan hota hai',
        'Digital Era mein Nayi Nirbharta: Big Tech monopoly, data extraction aur patent raj',
      ],
    },
    {
      title: 'Satat Vikas Aur Vikalp',
      color: 'pink',
      thinkers: ['Amartya Sen', 'Mahbub ul Haq', 'Michael Cernea', 'Arturo Escobar'],
      points: [
        'Amartya Sen Capability Approach: vikas ka matlab manav azaadi aur kshamataon ka vistar',
        'UNDP 2015 SDGs: 17 lakshya jisme People, Planet, Prosperity aur Peace shamil hain',
        'Cernea IRR Model: vikas ke naam par visthapan ke 8 gehre nuksan (landlessness, homelessness)',
        'Bharat mein Niyojan: Nehru-Mahalanobis top-down planning se NITI Aayog bottom-up shift',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u10-01-social-change-theories.webp',
    alt: 'P1 Unit 10 infographic: Sociological Theories of Change — Evolutionary, Cyclical, Functionalist & Conflict Trajectories',
    caption: 'Evolutionary, Cyclical, Functionalist & Conflict Trajectories (Sociological Theories of Change).',
    credit: 'UPSC OWL Studio · Paper 1 Unit 10 Visual 01',
  },
  {
    kind: 'md',
    body: `## Samajshastra Mein Vikas (Development) Ka Asli Matlab Kya Hai?

Aasaan shabdon mein samjho: vikas ka matlab keval desh ki GDP badhana ya factories khadi karna nahi hai. Samajshastra ke mutabiq sachha vikas woh hai jo aam logon ke jeevan ko behtar banaye, jaati-ling ke bhedbhav ko tode, aur har nagrik ko samman v azaadi ke sath jeene ka mauka de. Pichhle satar saalon mein vikas ki paribhasha lagataar badalti rahi hai:

1. **Economic Growth Model (1950–1960s):** Maana jata tha ki bas heavy industries lagao aur GDP badhao, vikas apne aap sabhi tak trickle-down ho jayega.
2. **Basic Needs Approach (1970s):** ILO ne kaha ki keval factory se kaam nahi chalega; rozi-roti, peene ka saaf paani, primary school aur swasthya suvidhayein pehle milni chahiye.
3. **Capability Approach (1990s):** [[thinker:Amartya Sen]] aur Mahbub ul Haq ne bataya ki vikas ka asli paimana manav kshamata (capability) ka vikas hai — insaan apni pasand ki zindagi azaadi se jee sake (*Development as Freedom*).
4. **Sustainable Development (2000s–Present):** Aisa vikas jo paryavaran ko tabah kiye bina aane wali peedhiyon ke jeevan ko surakshit kare.

## 1. Modernisation Theory: Western Raasta Aur Bharat Ka Anubhav

Doosre Vishwa Yuddh ke baad jab Bharat, Africa aur Latin America ke desh azaad hue, toh Western vidvaano ne Modernisation Theory prastut ki. Unka kahna tha ki garibi in deshon ki apni kamzori aur andhvishwas ke kaaran hai.

- **W.W. Rostow Ke Aarthik Vikas Ke 5 Charan (1960):** Rostow ne apni kitaab *A Non-Communist Manifesto* mein 5 charan bataye:
  1. *Traditional Society:* Jahan kheti-badi hoti hai aur log kismat par bharosa karte hain.
  2. *Preconditions for Take-off:* Vyapar badhta hai, railway aati hai, aur naye vyapari ubharte hain.
  3. *Take-off:* 20–30 saal ka tez audyogik daur jisme nivesh tezi se badhta hai.
  4. *Drive to Maturity:* Nayi takneek sabhi shetron mein phailti hai.
  5. *Age of High Mass Consumption:* Jahan car, fridge aur consumer goods aam janta tak pahunchte hain (jaise America).
- **Talcott Parsons Ke Pattern Variables:** Parsons ne kaha ki agar aadhunik hona hai, toh paramparik moolya (Ascription, Particularism) chhodkar aadhunik moolya (==Achievement, Universalism, Specificity==) apnane honge.
- **Daniel Lerner & Alex Inkeles:** Lerner ne bataya ki modern banne ke liye "empathy" aur mass media zaroori hai. Inkeles ne *OM Scale* banakar dikhaya ki factory mein kaam karne se logon mein time-discipline aur rational soch aati hai.

[[trap:Modernisation theory par sabse bada aakraman yeh hai ki yeh "blaming the victim" karti hai. Isne Third World deshon ko garib isliye bataya ki unki sanskriti kharab hai, jabki asli sach yeh tha ki 200 saal ke colonial shoshan ne unhe garib banaya tha.]]`,
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Undeveloped Aur Underdeveloped Ka Asli Farak Samjho',
    body: 'A.G. Frank ne spasht kiya ki colonialism se pehle Third World desh "undeveloped" the (yaani unke sansadhan poori tarah use nahi hue the, par unki aarthik azaadi thi). Colonialism ne unka shoshan karke unhe "underdeveloped" banaya. Yaani garibi koi prathmik avastha nahi, balki loot ka nateeja hai.',
  },
  {
    kind: 'md',
    body: `## 2. Dependency Theory: Garibi Ka Banaya Gaya Khel

Latin America ke United Nations Commission (UN-ECLA) ke vidvaano — Raúl Prebisch aur Hans Singer — ne dikhaya ki vikasasheel desh kachha maal saste mein bechte hain aur West se mehanga factory maal khareedte hain, jisse unki terms of trade lagataar girti hain.

### Andre Gunder Frank (A.G. Frank): Development of Underdevelopment
[[thinker:Andre Gunder Frank]] ne dependency theory ka sabse prabhavshali model diya:
- **Dual Society Ka Jhooth:** Modernisation chintak kehte the ki Third World mein do samaj hain — ek modern shahar aur doosra alag-thalag pichhda gaon. Frank ne saabit kiya ki gaon koi alag-thalag purana feudal island nahi hai; colonialism ne kheti ko international market se jodkar gaon-gaon tak shoshan ka jaal phailaya hai.
- **Metropolis-Satellite Shoshan Ki Chain:** Frank ne bataya ki global capitalism ek pipe ki tarah kaam karta hai:
  $$\\text{World Metropolis (New York, London)} \\longrightarrow \\text{National Metropolis (Mumbai, São Paulo)} \\longrightarrow \\text{Regional Satellite} \\longrightarrow \\text{Local Kisan}$$
  Har star par garib kisanon ka paisa kheenchkar upar imperial shehron tak bheja jata hai.
- **Algaav Mein Hi Vikas:** Frank ne itihaas se saabit kiya ki Latin America ka audyogik vikas tabhi hua jab World War I aur 1930s ki mandi ke dauran Western deshon ki pakad kamzor padi.
- **Samadhan:** Frank ne kaha ki capitalism ke andar vikas asambhav hai; is shoshan ki chain ko socialist kranti karke todna hoga (de-linking).

### Fernando Henrique Cardoso: Associated-Dependent Development
Cardoso ne Frank ki is baat ka khandan kiya ki capitalism mein koi vikas ho hi nahi sakta. Cardoso ne dikhaya ki semi-periphery deshon (jaise Brazil, Mexico, East Asian Tigers) mein ==Associated-Dependent Development== sambhav hai. Jab multinational companies (MNCs), local sarkar aur deshi ameer varg ka gathjod (Triple Alliance) banta hai, toh factory lagti hain aur GDP badhti hai, bhale hi aam janta mein asamanta aur karz bana rahe.

## 3. Immanuel Wallerstein Ka World-Systems Model

[[thinker:Immanuel Wallerstein]] ne desh ke bajaye poore vishwa ko ek ikai maana. Unke anusaar 16vin sadi se lekar aaj tak poori duniya ek single **Capitalist World-Economy** mein bandhi hui hai.

Is vyavastha ke teen hisse hain:
1. **Core (Kendra):** America, Western Europe aur Japan jaise amir desh jo high-tech utpadan, patent aur intellectual property par raaj karte hain.
2. **Periphery (Pari-dhi):** Africa, Latin America ke kamzor desh jo sasta kachha maal aur sasta mazdoor dete hain.
3. **Semi-Periphery (Madhya-varti):** Bharat, Brazil, South Africa jaise madhyam desh. Yeh buffer ka kaam karte hain — Core inka shoshan karta hai, aur yeh Periphery ka shoshan karte hain. Isliye poori duniya ke garib milkar ek sath kranti nahi kar paate.
- **Upward Mobility:** Wallerstein ne maana ki sthitiyan badal sakti hain — jaise South Korea aur Taiwan periphery se nikal kar semi-periphery aur core tak pahunche.`,
  },
  {
    kind: 'keyTerm',
    term: 'Development of Underdevelopment',
    meaning: 'A.G. Frank ka siddhant ki Third World ki garibi koi paramparik sthiti nahi, balki Western deshon dwara aarthik loot se banayi gayi ek sthiti hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Associated-Dependent Development',
    meaning: 'Cardoso ka vichar ki MNCs, sarkar aur local poonjipatiyon ke gathjod se aashrit desh bhi audyogik tarakki kar sakte hain.',
  },
  {
    kind: 'keyTerm',
    term: 'World-Systems Theory',
    meaning: 'Wallerstein ka model jisme Core, Semi-Periphery aur Periphery milkar vishwa-vyapi capitalist shram-vibhajan chalate hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Capability Approach',
    meaning: 'Amartya Sen ka model jisme vikas ka arth GDP nahi, balki manav kshamataon aur substantive azaadiyon ka vistar hai.',
  },
  {
    kind: 'md',
    body: `## 4. Bharat Mein Vikas Niyojan (Development Planning) Ka Safar

Aazaadi ke baad Bharat ne loktantra ke sath state-led planning ka naya model apnaya:

- **Nehru-Mahalanobis Model (1950s–1980s):** Bhaari udyog (steel, coal, dam) lagaye gaye, public sector ko "commanding heights" par bithaya gaya, aur aatmanirbharta ke liye aayat par pabandi lagayi gayi.
- **1991 Ke LPG Sudhar:** BoP sankat ke baad Bharat ne Liberalisation, Privatisation aur Globalisation apnaya, license-quota raj khatam kiya aur vishwa bazaar se jud gaya.
- **Planning Commission Se NITI Aayog (2015):** Top-down planning ko badal kar bottom-up think tank banaya gaya, jahan **Cooperative Federalism** aur competitive ranking par zor diya gaya.
- **Samajshastriya Mulyankan:** Yojanaon ne Green Revolution se anaaj ki aatmanirbharta di aur ISRO v IIT jaise behtareen sansthan khade kiye, lekin Jean Drèze aur Amartya Sen ke mutabiq primary school aur sarkari aspatalon ko nazarandaz kiya gaya, jisse shehri-gramin aur ameer-garib ka fasla badha.

## 5. Vikas Se Visthapan (Displacement) Aur Satat Vikas

Bharat mein aazaadi ke baad bandh (dams), khadaan, highway aur SEZ banane ke chakkar mein lagbhag 6 crore se zyada log beghar hue, jisme 40% se zyada aadiwasi the.

- **Michael Cernea Ka IRR Model (Impoverishment Risks and Reconstruction):** Visthapan se paida hone wale 8 mukhya sankat:
  1. *Landlessness:* Kheti ki zameen chhin jana.
  2. *Joblessness:* Mazdoori aur aamadni khatam hona.
  3. *Homelessness:* Ghar ujad jana.
  4. *Marginalisation:* Samajik aur aarthik pichhdepan badhna.
  5. *Food Insecurity:* Poshan aur khane ka sankat.
  6. *Morbidity & Mortality:* Bimaariyan aur aakaal maut badhna.
  7. *Loss of Common Property Resources (CPRs):* Gaon ke jungle aur charagahon ka chhin jana.
  8. *Social Disarticulation:* Rishtedaari aur aapsi madad ke taane-baane ka toot jana.

### Satat Vikas (Sustainable Development): UNDP 2015 SDGs
1987 ki Brundtland Report ne kaha tha ki satat vikas woh hai jo aaj ki zarooraton ko poora kare bina aane wali peedhiyon ki kshamata se samjhauta kiye. 2015 mein UN ne **17 Sustainable Development Goals (SDGs)** apnaye jo teen stambhon par tike hain:
- **Aarthik Vikas:** Garibi unmulon (SDG 1) aur sammanjanak kaam (SDG 8).
- **Samajik Nyay:** Bhookh-mukti (SDG 2), behtar shiksha (SDG 4) aur mahila samanta (SDG 5).
- **Paryavaran Suraksha:** Jalvayu parivartan se nipatna (SDG 13), jal jeevan (SDG 14) aur bhoomi suraksha (SDG 15).
[[link:Ise Paper 2 ke Unit 7 Development Planning and Mixed Economy aur Unit 14 Crisis of Development: Displacement se jodo.]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Modernisation Perspective',
    rightTitle: 'Dependency & World-Systems Perspective',
    rows: [
      {
        aspect: 'Garibi Ka Kaaran',
        left: 'Aantarik parampara, pichhdi soch aur poonji ki kami',
        right: 'Baahari aitihasik loot, colonial shoshan aur unequal exchange',
      },
      {
        aspect: 'West Ki Bhumika',
        left: 'Ek madadgaar dost jo takneek, poonji aur gyan deta hai',
        right: 'Ek imperial kendra jo sasta kachha maal aur shram lootta hai',
      },
      {
        aspect: 'Vikas Ka Raasta',
        left: 'Western dhang ki factories, khula bazaar aur mass education',
        right: 'Aatmanirbhar neeti, kshetriya gathbandhan ya socialist algaav',
      },
      {
        aspect: 'Capitalism Ka Nazariya',
        left: 'Kshamata, loktantra aur aarthik pragati ka behtareen engine',
        right: 'Ek dhruvikaran karne wali vyavastha jo ek jagah amiri aur baaki jagah garibi lati hai',
      },
    ],
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Digital Yug Mein Dependency Theory Ka Naya Roop (Neo-Dependency)',
    body: 'UPSC ke 2021 aur 2020 ke prashnon ke liye yaad rakhein: aaj kachhe maal ki jagah "Raw Data" aur saste gig mazdoor (call centres, data labellers) Third World se extract kiye jaate hain, jabki Big Tech monopolies (Google, Microsoft, OpenAI) algorithms aur high-value IP par kabza karke nayi digital nirbharta paida kar rahi hain.',
  },
  {
    kind: 'answerBox',
    intro: 'UNDP ke 2015 Sustainable Development Goals (SDGs) ke pramukh tatva:',
    points: [
      'Paanch Stambh (5 Ps): People (garibi aur bhookh mitaana), Planet (jalvayu aur jungle bachana), Prosperity (samaveshi aarthik pragati), Peace (nyayik sansthaayein), aur Partnership (vishwa-vyapi sahyog).',
      'Sarvabhoumikta (Universality): MDGs ke viprit jo keval garib deshon ke liye the, 17 SDGs amir aur garib sabhi deshon par saman roop se lagoo hote hain.',
      'Leave No One Behind (LNOB): Samaj ke aakhiri pichhde vyakti — mahilayein, divyang aur aadiwasiyon tak vikas ka laabh pahunchana.',
      'Paryavaran Ki Seemaon Ka Samman: Yeh spasht maanna ki aarthik vikas prakriti ke santulan ko tod kar nahi kiya ja sakta (SDG 13, 14, 15).',
      'Science Aur Tech Ka Loktantrikaran: Green technology aur medical research ka sabhi deshon ke beech saajha hona taaki techno-apartheid na phail sake.',
    ],
    conclusion: 'Satat vikas manav samaj ko andhi andh-dhundh poonji loot se hatakar paryavaran v manav garima ke sanyukt vikas ki or le jata hai.',
  },
]

export const topic2Hi: TopicLangContent = {
  summary:
    'Vikas aur nirbharta ke siddhant yeh samjhate hain ki vishwa aarthik vyavastha vikasasheel deshon ke samajik badlaav ko kaise prabhavit karti hai. Modernisation vicharak (Rostow, Parsons, Lerner, Inkeles) vikas ko saral parampara se Western audyogik capitalism ki or pragati maante the. Dependency school (Prebisch, Baran, A.G. Frank, Cardoso) ne is dharana ko kharij karke saabit kiya ki West ki amiri aur Third World ki garibi ek hi colonial shoshan ke do pehlu hain. Wallerstein ne ise Core, Semi-Periphery aur Periphery ke World-Systems model mein badla. Aaj vikas ke naam par visthapan (Cernea IRR model) ke virodh mein Amartya Sen ki Capability Approach aur UNDP ke 2015 SDGs satat aur manav-kendrit vikas ka vikalp prastut karte hain.',
  mindMap,
  sections,
}
