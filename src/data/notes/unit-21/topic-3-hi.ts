import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic3HiMindMap: MindMapData = {
  title: 'Topic 3 · Bharat Mein Working Class (Shramik Varg)',
  center: 'Working Class in India',
  subtitle: 'Dhancha Aur Jaati Composition • Committed Labour Bahas • Trade Union Patan • COVID-19 Aur Labour Codes',
  branches: [
    {
      title: 'Dhancha Aur Samajik Composition',
      color: 'lavender',
      thinkers: ['Karl Marx', 'B.R. Ambedkar', 'Jan Breman', 'Sharit Bhowmik'],
      points: [
        'Do-tuka shramik bazaar: 8-10% organized formal core banam 90% asurakshit informal periphery',
        'Jaati ka vargikaran: Ambedkar ne kaha jaati sirf division of labour nahi balki division of labourers hai',
        'Subalterns ka shoshan: gande, jokhim bhare aur manual kamo mein Dalit, Adivasi aur Muslim shramik',
        'Mahilaon par dohra bojh: piece-rate beedi/garment kaam aur gharelu nokrani banne ki majboori',
      ],
    },
    {
      title: 'Committed Labour Ki Bahas',
      color: 'yellow',
      thinkers: ['Clark Kerr', 'R.D. Lambert', 'N.R. Sheth', 'E.A. Ramaswamy'],
      points: [
        'Clark Kerr ka dawa: aadhunik factory ke liye shramikon ko gaon ke rishte todne honge',
        'Lambert ka Poona adhyayan: factory kaam ke prati poora commitment par jaati-rishte barkarar',
        'N.R. Sheth (Baroda): modern factory ke andar paramparik patron-client rishton ki maujoodgi',
        'Rational safety-net: gaon ka rishta koi pichhadapan nahi balki berozgari aur bimari ka bima hai',
      ],
    },
    {
      title: 'Mobilization Aur Union Ka Patan',
      color: 'mint',
      thinkers: ['B.P. Wadia', 'Datta Samant', 'Sukomal Sen', 'K.P. Kannan'],
      points: [
        'Aitihasik daur: early welfare unions se AITUC (1920) aur rajnitik party wings tak',
        '1982 Bombay Textile Strike: Datta Samant ka aandolan, mill udyog band aur powerlooms ka uday',
        'Union density ka patan: bhari contractualization, factory band hone ki dhamki aur naye kanoon',
        'Platform gig economy: algorithm-driven control (Uber, Swiggy) ne shramik ekta ko bikher diya',
      ],
    },
    {
      title: 'COVID-19 Aur Naye Labour Codes',
      color: 'pink',
      thinkers: ['Jan Breman', 'Reetika Khera', 'Jayati Ghosh', 'Max Weber'],
      points: [
        'Lockdown sankat: achanak rozgar band hone se circular migrants ki behad lachari samne aayi',
        'Highway par paidal yatra: Jan Breman ke "wage hunters and gatherers" ka astitva sankat',
        'Char Naye Labour Codes (2020): Wages, Industrial Relations, Social Security aur OSH Codes',
        'Samajshastriya critique: kagaz par gig workers ka zikr par factory se nikalna (hire-and-fire) aasan',
      ],
    },
  ],
}

export const topic3HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u11-01-urbanization-industry-flow.webp',
    alt: 'P2 Unit 11 infographic: Industry & Urban Settlements in India — Colonial Deindustrialization to Over-Urbanization',
    caption:
      'Bharat ka shramik varg jaati aur gender ke gehre bhedbhav se ghira hai; militant trade unionism ke daur se nikal kar aaj contractual precarity aur gig economy ki taraf badh chuka hai.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 21 Visual 01',
  },
  {
    kind: 'md',
    body: `## Bharat Mein Shramik Varg Ka Dhancha Aur Samajik Composition

Aasaan shabdon mein samjho: Bharat ka working class (shramik varg) Karl Marx ke us ek-samaan factory proletariat jaisa nahi hai jaisa Europe mein dekha gaya tha. Hamare yahan shramik varg gehre aantarik bhed-bhaav aur tukdon mein bata hua hai. Ek taraf factory ke modern rules hain, to doosri taraf sadiyon purani jaati, dharm aur gender ki asamaanata.

Bharat ke shramik bazaar ki sabse badi hakikat yeh hai ki kewal 8 se 10 pratishat shramikon ke paas pakki nokari, written contract, provident fund aur healthcare hai. Baaki **90 pratishat se zyada shramik informal aur unorganized sector** mein be-inteha precarity (asuraksha) mein jeene par majboor hain.

### Jaati Aur "Shramikon Ka Vibhajan"
*Annihilation of Caste* mein [[thinker:B.R. Ambedkar]] ne likha tha ki jaati vyavastha kewal shram ka vibhajan (division of labour) nahi hai, balki yeh **shramikon ka vibhajan (division of labourers)** hai. Yeh ek majdoor ko doosre majdoor se oonch-neech ke aadhar par alag kar deti hai, jisse unke beech ekta (class consciousness) nahi ban paati.

Field studies dikhate hain ki factory aur udyog ke andar kaun kya kaam karega, yeh seedhe jaati se tay hota hai:
1. **Upper-Caste Aur Dominant Castes**: Manager, supervisor, accountant aur technical engineer jaise izzatdar aur safe positions par rehte hain.
2. **Intermediate Aur Kisan Jaatiyan**: Machine chalane aur permanent shop-floor worker ke roop mein milti hain.
3. **Dalit, Adivasi Aur MBCs**: Sabse gande, jokhim bhare aur kathin kamo mein—jaise chemical nikalna, chamda kamana, construction mein eent-pathar dhona, eent-bhatta aur municipal sewer safai mein dhakeli jati hain.
4. **Mahila Shramik**: Mahilaon par dohra shoshan hota hai; ve ghar mein baithkar saste daam par beedi banane, kapde silne ya doosron ke gharon mein bartan-jhadu karne par majboor hain, jahan purushon se kam mazdoori milti hai.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Step 1: Early Philanthropic Daur (1880–1920)',
        text: 'N.M. Lokhande ki Mill-Hands Association; B.P. Wadia ki Madras Labour Union; 1920 mein AITUC ki sthapna.',
      },
      {
        label: 'Step 2: Rajnitik Party Control (1947–1970s)',
        text: 'Political parties se judi unions (INTUC, CITU, BMS); sarkari PSUs mein permanent workers ka kalyan.',
      },
      {
        label: 'Step 3: Militant Sangharsh (1982 Bombay Strike)',
        text: 'Dr. Datta Samant ke netritva mein Bombay textile strike; mill band hui aur powerlooms ka asurakshit daur shuru.',
      },
      {
        label: 'Step 4: Neoliberal Precarity & Gig Daur (1991–Aaj)',
        text: 'Unions ka patan, permanent worker ki jagah theka shramik (contractualization) aur app-based gig workers.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Clark Kerr Ka "Committed Labour Force" Thesis Aur Uski Aalochna

Industrial sociology mein American modernization vidwan [[thinker:Clark Kerr]] aur unke saathiyon ne 1960 mein ek thesis di thi. Kerr ka kehna tha ki kisi bhi desh mein udyog safal hone ke liye **committed labour force** zaroori hai—yani shramik gaon ke kheti aur parivar ke rishte tod de, aur shehar mein aakar factory ki ghadi aur discipline ko apni zindagi bana le. Shuruati pashchimi lekhakon ne kaha ki Bharat ke shramik "uncommitted" hain kyunki ve fasal katayi aur tyoharon par baar-baar gaon bhag jate hain.

Bharat ke samajshastriyon ne apne ground research se is galat dharana ko poori tarah dhwast kiya:

### 1. R.D. Lambert Ka Poona Factory Adhyayan
*Workers, Factories, and Social Change in India* (1963) mein [[thinker:R.D. Lambert]] ne Poona ki 5 factories ka adhyayan kiya. Lambert ne paaya ki Bharat ke shramik factory nokari ke prati poori tarah committed hain. Job applications ki bhari line aur nokari na chhodne ka low turnover iska saboot tha. Par Lambert ne yeh bhi dikhaya ki factory aakar jaati nahi miti; shramik nokari paane ke liye apni biradari ke network ka hi istemal karte the.

### 2. N.R. Sheth Ka Baroda Factory Adhyayan
*The Social Framework of an Indian Factory* (1968) mein [[thinker:N.R. Sheth]] ne Baroda ki ek textile engineering factory ko dekha. Sheth ne dikhaya ki aadhunik formal rules aur paramparik samajik rishte sath-sath chalte hain. Informal patron-client rishte aur jaati-biradari ki dosti factory ke production ko rokti nahi balki use chalane mein madad karti hai.

### 3. Samajshastriya Arth: Gaon Ka Judav Ek Suraksha Kawach Hai
Shramik ka gaon se judav pichhadapan nahi balki ek aarthik samajhdari (rational survival strategy) hai. Bharat mein shramikon ke liye koi sarkari berozgari bhatta ya universal pension nahi hai. Jab factory se nikal diya jaye ya bimari gher le, tab gaon ka chhota sa khet aur biradari hi unki jaan bachati hai.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Saval Ka Formula: Clark Kerr Banam Indian Sociologists',
    body: 'Jab bhi Clark Kerr ke committed labour par saval aaye, to R.D. Lambert (Poona) aur N.R. Sheth (Baroda) ka reference zaroor do. Samjhao ki gaon se circular judav irrational nahi, balki social security na hone ki wajah se ek rational survival strategy hai.',
  },
  {
    kind: 'md',
    body: `## Trade Union Density Ka Patan: Contractualization Aur Gig Economy

Azaadi ke baad trade unions ne kaam ke ghante tay karne, minimum wage dilwane aur bonus lene mein badi bhumika nibhayi thi. Lekin 1990 ke baad se Bharat ke udyogon mein trade unions ki taqat aur sadasyata (density) lagataar ghatti chali gayi.

### Union Kamzor Hone Ke Mukhya Kaaran
1. **Aggressive Contractualization (Thekedaari)**: Companies ne permanent nokariyan khatam karke thekedar ke zariye contract majdoor rakhne shuru kiye. Automobile belt (Gurugram-Manesar, Chennai) mein 60 se 75% worker contract par hain, jo wahi kaam karte hain par aadhi se bhi kam pagar paate hain aur unhe union banane ka haq nahi hota.
2. **Outsourcing Aur Powerlooms**: Badi composite mills ko todkar Bhiwandi, Surat aur Malegaon jaise unorganized powerloom clusters mein kaam bhej diya gaya jahan koi labour inspector nahi jata.
3. **SEZ Aur Deregulation**: Special Economic Zones (SEZ) mein sarkar ne हड़ताल (strike) karne ke kanoon behad kathin bana diye.
4. **Platform Gig Economy Ka Uday**: App-based platforms (Uber, Ola, Zomato, Swiggy) shramikon ko "delivery partner" kehti hain, employee nahi. Samajshastri is naye dhang ko **Algorithmic Management** kehte hain—jahan koi human manager nahi hota, app ka algorithm order deta hai, rating se saza deta hai aur incentive cut karta hai. Isse shramik aapas mein ek-doosre ko dekh bhi nahi paate, jisse trade union ki possibility hi khatam ho jati hai.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Char Naye Labour Codes: Sarkar Ka Dawa',
    rightTitle: 'Samajshastriya Hakikat Aur Critique',
    rows: [
      {
        aspect: 'Kanoon Ka Saralikaran',
        left: 'Purane 29 colonial kanoon ko jodkar 4 aadhunik national codes banaye gaye.',
        right: 'Azaadi ke sangharsh se jeete gaye shramik adhikar kamzor hue aur factory inspection thapp hua.',
      },
      {
        aspect: 'Retrenchment (Nikalne) Ki Chhoot',
        left: 'Investment badhane ke liye sarkar se permission lene ki limit 100 se badhakar 300 shramik ki gayi.',
        right: 'Desh ki 85%+ factories ko bina sarkari rok-tok ke hire-and-fire karne ki khuli chhoot mil gayi.',
      },
      {
        aspect: 'Hadtal (Strike) Ka Adhikar',
        left: 'Industrial dispute suljhane ke liye 14 din pehle advance notice dena anivarya kiya gaya.',
        right: 'Kanooni taur par hadtal karna lagbhag namumkin ho gaya, jisse collective bargaining cheen gayi.',
      },
      {
        aspect: 'Gig Workers Ka Status',
        left: 'Social Security Code mein pehli baar gig aur platform shramikon ko pehchan di gayi.',
        right: 'Minimum wage aur employer ki anivarya fund hissedari ka kanooni vaada abhi bhi spasht nahi hai.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## COVID-19 Lockdown Aur Migrant Shramikon Ka Asli Dard

24 March 2020 ko kewal 4 ghante ke notice par lagaye gaye national lockdown ne Bharat ke 10 se 14 crore circular migrant shramikon ki lachari ko pure sansar ke samne be-parda kar diya.

Samajshastri [[thinker:Jan Breman]] ne in shramikon ko **"wage hunters and gatherers"** kaha hai—jo gaon ki garibi se nikal kar shehar ke construction site, eent-bhatte aur thele par roz ka khana khojte hain. Lockdown ne is chakra ko ek jhatke mein tod diya:
- **Rozgar Aur Kiraye Ka Sankat**: Thekedaron ne daily wage band kar diya aur factory malikon ne kamron se bahar nikal diya.
- **Sadak Par Paidal Yatra**: Train-bus band hone ke karan lakhon shramik parivar chhote bachhon ke sath dhoop mein hazaron kilometre paidal chalkar apne gaon (Bihar, UP, Jharkhand, Odisha) ke liye nikal pade.
- **Urban Social Citizenship Ka Bahi-shkar**: Is sankat ne dikhaya ki shehar migrant labour ka shoshan to karta hai, par unhe na to aawas ki suraksha deta hai aur na hi rashan ka adhikar.`,
  },
  {
    kind: 'keyTerm',
    term: 'Committed Labour Force (Clark Kerr)',
    meaning:
      'Pashchimi thesis jiske anusaar aadhunik udyog ke liye aisi working class chahiye jo gaon se nata todkar pure roop se factory discipline ko apna le.',
  },
  {
    kind: 'keyTerm',
    term: 'Contractualization of Labour',
    meaning:
      'Factory mein permanent shramikon ki jagah saste thekedaari majdooron ko rakhne ki prakriya, jisse pagar kam di jaye aur union na bane.',
  },
  {
    kind: 'keyTerm',
    term: 'Footloose Labour (Jan Breman)',
    meaning:
      'Jan Breman ka concept jo aise khet-majdooron ko darshata hai jo gaon ke sankat aur shehar ki asurakshit majdoori ke beech lagataar bhatakte rehte hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Algorithmic Management',
    meaning:
      'Gig economy mein mobile app aur software algorithms dwara delivery shramikon ko order dena, track karna aur saza dena bina kisi human manager ke.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Paper 1 ↔ Paper 2 Ka Link',
    body: 'Karl Marx ka Alienation aur Reserve Army of Labour (Paper 1) ko Gurugram-Manesar ke contract workers aur Zomato-Swiggy gig workers (Paper 2) se jod kar likho.',
  },
  {
    kind: 'answerBox',
    intro:
      'Bharat mein industrial working class ke badalte dhache, jaati composition aur mobilization par model answer frame:',
    points: [
      'Do-tarfa dhancha: 90%+ informal asurakshit shramik banam 8-10% permanent organized enclave ka gehra aarthik fasla.',
      'Jaati aur shramikon ka vibhajan: Ambedkar ke anusaar jaati ne majdooron ko aapas mein baant rakha hai; safai aur kathin kaam Dalit-Adivasiyon ke hisse aur supervision upper caste ke paas.',
      'Militant unionism ka ant: 1982 ki Bombay textile strike ke baad se mill industry bikhari aur powerlooms ke sath unorganized sector badha.',
      'Contractualization ki lehar: Automobile aur core manufacturing mein 70% shramik theke par hain, jisse permanent aur theka shramikon ki ekta toot gayi.',
      'Gig economy aur algorithmic control: Delivery aur cab platforms ne shramikon ko "partner" keh kar union, pension aur minimum wage ke adhikar se bahar kar diya.',
    ],
    conclusion:
      'Vartaman daur mein Bharat ka shramik varg gehre bikharav aur asuraksha se joojh raha hai, jise theek karne ke liye portable social security aur kanooni adhikar zaroori hain.',
  },
]
