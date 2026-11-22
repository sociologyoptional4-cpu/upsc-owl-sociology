import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 10.4 · Shiksha Aur Samajik Parivartan (Education and Social Change)',
  center: 'Education & Social Change',
  subtitle: 'Functionalist Transmission • Marxist Reproduction • Mobility Elevator • NEP 2020 Debates',
  branches: [
    {
      title: 'Functionalist Dristikon',
      color: 'lavender',
      thinkers: ['Émile Durkheim', 'Talcott Parsons', 'Robert Dreeben'],
      points: [
        'Durkheim Moral Education: samaj ke mool niyam, anushasan aur organic solidarity sikhana',
        'School as "Society in Miniature": parivar ki laad-pyar se nikal kar aadhunik niyam sikhna',
        'Parsons: Ascribed status se Achieved status aur meritocracy ki taraf badhna',
        'Role Allocation: talent aur mehnat ke aadhar par naukriyon ka nishpaksh batwara',
      ],
    },
    {
      title: 'Critical & Marxist Lens',
      color: 'yellow',
      thinkers: ['Louis Althusser', 'Bowles & Gintis', 'Pierre Bourdieu', 'Paulo Freire'],
      points: [
        'Althusser ISA: school ek vichardhara ka hathiyar hai jo capitalist shoshan ko sahna sikhata hai',
        'Bowles & Gintis Correspondence Principle: school ki hierarchy factory ki gulami ki training hai',
        'Bourdieu Cultural Capital: ameer bacchon ki bhasha aur dhang ko "merit" maankar gareeb ko harana',
        'Paulo Freire: Banking education banam Conscientisation (swatantrata ke liye aalochonatamak soch)',
      ],
    },
    {
      title: 'Mobility, Jaati Aur Gender',
      color: 'mint',
      thinkers: ['B.R. Ambedkar', 'Jyotirao Phule', 'Pitirim Sorokin', 'Jean Drèze'],
      points: [
        'Sorokin Social Elevator: shiksha upar chadhne ki lift hai, par lift ka darwaza sabke liye nahi khulta',
        'Phule & Ambedkar: shiksha shudra aur mahila azaadi ka sabse bada hathiyar ("Educate, Agitate, Organise")',
        'Mahila Shiksha: shaadi ki umar badhna, kam bachhe hona, lekin marriage market mein trophy banna',
        'Higher Education Mein Exclusion: institutional caste bias, dropouts aur angrezi ka dabdaba',
      ],
    },
    {
      title: 'Contemporary Debates & NEP 2020',
      color: 'pink',
      thinkers: ['Krishna Kumar', 'Amartya Sen', 'Kothari Commission'],
      points: [
        'NEP 2020: 5+3+3+4 model, foundational literacy, matribhasha mein padhai aur vocational training',
        'Panacea Ka Bhram: shiksha akele garibi aur berozgari nahi mita sakti jab tak zameen aur factory sudhar na hon',
        'Online Shiksha & EdTech: Ameer ko continuous padhai mili par gaon ke gareeb bachhon ka bhari learning loss',
        'Commercialisation: coaching mafia, mehangi fees aur degreeon ki kharid-farokht',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u10-02-agents-education-tech.webp',
    alt: 'P1 Unit 10 infographic: Education, Science, Media & Tech — Agents of Transformation in Modern Society',
    caption: 'Agents of Transformation in Modern Society (Education, Science, Media & Tech).',
    credit: 'UPSC OWL Studio · Paper 1 Unit 10 Visual 02',
  },
  {
    kind: 'md',
    body: `## Samajshastra Mein Shiksha (Education) Ke Do Chehre

Shiksha samaj ki sabse taqatwar aur sath hi sabse uljhi hui sanstha hai. Ek taraf udarvadi (liberal) vidvaan maante hain ki shiksha samanta lati hai, garibi mitati hai aur har vyakti ko aage badhne ka mauka deti hai. Lekin doosri taraf Marxist aur critical samajshastri dikhate hain ki school asal mein ameeron ki purani daulat aur dabdabe ko "merit" ka naqab pehna kar pichhde vargon par thopte hain.

Sociology mein mool sawal yeh hai: kya school samaj ko badalta hai (**social transformation**), ya phir yeh purane varg-bhed aur jaati-bhed ko banaye rakhne ka kaam karta hai (**social reproduction**)?

## 1. Functionalist Dristikon: Moolyon Ka Prasar Aur Meritocracy

Functionalist chintak shiksha ko samaj ki ekta aur vyavastha banaye rakhne ka sabse zaroori sadhan maante hain.

### Émile Durkheim: Naitik Shiksha Aur Samajik Ekta
[[thinker:Émile Durkheim]] ne apni kitaabon *Moral Education* (1925) aur *Education and Sociology* (1922) mein bataya ki samaj tabhi chal sakta hai jab sabhi nagrikon mein ek mool sahmati aur naitikta ho:
- **Samaj Ke Mool Niyam Aur Moolya Sikhana:** School bache ko anushasan, aatm-niyantran aur samaj ke prati samparpan sikhata hai. Durkheim ne rashtriya itihaas padhane par zor diya, jo bache ko uske samajik ateet se jodta hai.
- **Society in Miniature (Chhota Samaj):** Parivar mein bache ko laad-pyar milta hai jahan koi niyam sakht nahi hote. Lekin school ek chhota samaj hota hai jahan time-table, exam aur nishpaksh niyam hote hain. Yeh bache ko badi duniya ke ==Organic Solidarity== mein shram vibhajan ke liye taiyar karta hai.
- **Vishisht Hunar Ka Vikas:** Aadhunik samaj mein doctor, engineer aur teacher ki zaroorat hoti hai; school sabhi ko alag-alag kshamata ke anusaar taiyar karta hai.

### Talcott Parsons: The School Class as a Social System
[[thinker:Talcott Parsons]] ne bataya ki school parivar aur aadhunik samaj ke beech ka pul (bridge) hai:
- Parivar mein bache ko **Ascribed Status** aur particularistic niyam milte hain (mata-pita ke liye apna bacha hamesha khaas hota hai).
- Lekin school bache ko **Achieved Status** aur universalistic niyam sikhata hai (sabke liye ek hi exam paper aur ek hi marking scheme hoti hai).
- Parsons ka maanna tha ki school ek saccha **Meritocracy** hai jahan sabhi barabar shuru karte hain aur jo jitna mehnati hota hai, woh utni badi naukri pata hai.

[[trap:Parsons ki meritocracy ko sach mat maan lena. Asal zameen par ameer parivaron ke bache coaching aur angrezi bhasha ke sahare aage nikal jaate hain, jabki gareeb bache piche chhoot jaate hain.]]`,
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Schooling Aur Barabar Social Mobility Mein Farak Samjho',
    body: 'Meritocracy aksar ek jhootha parda hoti hai. Duniyabhar ke adhyayan (jaise US mein Bowles & Gintis, UK mein Goldthorpe, aur Bharat mein Jean Drèze) yeh saabit karte hain ki agar do logon ke paas barabar degree ho, tab bhi ameer aur unchi jaati ke vyakti ko achhi naukri milne ke chances bohot zyada hote hain.',
  },
  {
    kind: 'md',
    body: `## 2. Conflict Aur Critical Siddhant: Asamanta Ka Punar-Utpadan

Marxist aur critical samajshastri maante hain ki school ameeron ki factory hai jo majdooron ke bachhon ko shoshit hona sikhata hai.

### Louis Althusser: Ideological State Apparatus (ISA)
[[thinker:Louis Althusser]] ne bataya ki sarkar do tarah se raaj karti hai: *Repressive State Apparatus (RSA)* (police, fauj, jail jo lathi ke bal par chalti hain) aur *Ideological State Apparatus (ISA)* (school, media, dharm jo dimaag ko shant karte hain). Aadhunik capitalism mein school sabse bada ISA hai: yeh bachhon ko har din 6 ghante bitha kar shasak varg ke niyam maanna sikhata hai taaki woh kabhi kranti na karein.

### Bowles & Gintis: The Correspondence Principle
Samuel Bowles aur Herbert Gintis ne apni prasiddha kitaab *Schooling in Capitalist America* (1976) mein ==Correspondence Principle== diya:
- School ka dhaancha sidhe factory ke dhaancho se match karta hai.
- Jaise factory mein boss manager ko aur manager mazdoor ko aadesh deta hai, vaise hi principal teacher ko aur teacher bache ko order deta hai.
- **Hidden Curriculum:** Kitabon ke alawa school ghanti bajne par chup baithna, time par aana, aur upar wale ka aadesh maanna sikhata hai — yaani aage chal kar factory mein shant mazdoor banne ki training deta hai.
- **The Myth of Meritocracy:** School fail hone ka dosh bache ke mathe madh deta hai ("tumne padhai nahi ki"), jisse bacha vyavastha ko kosne ke bajaye khud ko kosta hai aur virodh nahi karta.

### Pierre Bourdieu: Cultural Capital Aur Symbolic Violence
[[thinker:Pierre Bourdieu]] ne dikhaya ki school keval kitabi padhai nahi karta:
- **Cultural Capital:** Ameer parivaron ke bachhe ghar se hi behtar bhasha, aadhunik shaili, art aur general knowledge lekar aate hain jise Bourdieu ne ==Cultural Capital== kaha.
- **Symbolic Violence:** School is ameer sanskriti ko hi "talent" aur "merit" maanta hai. Gareeb aur Dalit bachhon ke paas yeh cultural capital nahi hota, isliye unhe kam marks milte hain. Bourdieu ne ise **Symbolic Violence** kaha — jahan purani class privilege ko bina lathi chalaye academic success mein badal diya jata hai.

### Paulo Freire: Pedagogy of the Oppressed
[[thinker:Paulo Freire]] ne paramparik shiksha ko ==Banking Concept of Education== kaha: jahan teacher bache ko ek khali gullak samajhta hai jisme gyan thosa jata hai. Iske viprit unhone **Problem-Posing Education** aur ==Conscientisation== (aatma-chetana) ki maang ki, jahan bacha aur teacher aapsi samvaad se samajik shoshan ko samajh kar use tod sakein.`,
  },
  {
    kind: 'keyTerm',
    term: 'Correspondence Principle',
    meaning: 'Bowles aur Gintis ka siddhant ki school ki aantarik vyavastha seedhe capitalist factory ke shoshan aur aadesh-vyavastha ki nakal hoti hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Cultural Capital',
    meaning: 'Bourdieu ka concept ki ameer parivaron se mili bhasha, dhang aur sanskritik gyan ko school "merit" samajh kar inaam deta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Hidden Curriculum',
    meaning: 'School ka an-likha path — jaise aadesh maanna, chup rehna aur anushasan — jo chupchaap bache ke dimaag mein baithaya jata hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Conscientisation',
    meaning: 'Paulo Freire ka niyam jisme shiksha aam janta ko samajik shoshan ke khilaaf aawaz uthane aur azaad sochne ki chetana deti hai.',
  },
  {
    kind: 'md',
    body: `## 3. Bharat Mein Shiksha, Jaati Aur Mahila Shashaktikaran

Bharat mein sadiyon tak shiksha par unchi jaatiyon ka ek-chhatra dabdaba raha, isliye yahan shiksha shoshan ko todne ka sabse taqatwar hathiyar bani.

- **Jyotirao Phule Aur Savitribai Phule:** Jyotirao Phule ne *Gulamgiri* (1873) mein likha ki bina shiksha ke mati gayi, mati bina niti gayi, aur Shudra barbad ho gaye. 1848 mein Pune mein Savitribai aur Jyotirao ne ladkiyon aur Daliton ke liye pehla school khola aur shiksha ko anti-caste kranti ka hathiyar banaya.
- **Babasaheb Ambedkar Ka Shankhnaad:** [[thinker:B.R. Ambedkar]] ne People's Education Society sthapit karke aitihasik nara diya: ==“Educate, Agitate, Organise”== (Shikshit Bano, Sangharsh Karo, Sangathit Ho). Babasaheb ne saabit kiya ki aadhunik secular shiksha hi Dalit samaj ko aatm-samman aur sarkari prashasan mein hissa dilwayegi.
- **Mahila Shiksha Aur Pitrasatta:** Padhi-likhi mahilayein parivar mein aawaz uthati hain, shaadi ki umar badhti hai aur bachhon ka poshan behtar hota hai. Lekin Bina Agarwal dikhati hain ki keval degree se pitrasatta nahi tootti; padhi-likhi ladkiyon ko bhi shaadi ke bazaar mein "trophy bahu" ki tarah dekha jata hai aur corporate jobs mein unhe glass ceiling ka samna karna padta hai.

## 4. NEP 2020: Kya Shiksha Sabhi Bimaariyon Ka Ek-Matra Ilaj (Panacea) Hai?

Yeh kehna ki *"Shiksha desh ki har burayi ka ek-matra ilaj hai"* ek aadarshvadi aur adhoori soch hai.

**National Education Policy (NEP) 2020** bade sansthatmak sudhar lati hai:
- 10+2 ki jagah **5+3+3+4 framework** apnaya gaya.
- Grade 5 tak matribhasha mein shiksha aur multidisciplinary college education.
- Grade 6 se vocational education (hunar sikhana) shuru kiya gaya.

### NEP 2020 Aur "Panacea" Ke Daave Ka Samajshastriya Mulyankan
Samajshastri is baat ko kharij karte hain ki keval school se saari samasyaayein theek ho jayengi:
1. **Garibi Aur Berozgari Ka Dhaancha:** School degree de sakta hai par factory mein naukri paida nahi kar sakta. Jab tak kheti aur udyog mein zameeni sudhar nahi honge, tab tak shiksha ka vistar keval padhe-likhe berozgaron ki fauj khadi karega.
2. **Vocational Tracking Ka Jaativaadi Khatra:** Grade 6 se hunar sikhane ke chakkar mein aksar gareeb aur pichhde bachhon ko carpenter ya plumbing mein daal diya jata hai, jabki ameer bache science aur AI padhte hain, jisse purana jaativaadi shram vibhajan phir laut sakta hai.
3. **Privatisation Aur Digital Divide:** NEP digital online learning ko badhava deti hai. Pratham ki ASER report batati hai ki gaon ke sarkari schoolon mein bache basic reading nahi kar paate aur na hi unke paas computer v internet hai. Aise mein digital shiksha ameer aur garib ke fasle ko aur chauda karti hai.
4. **Online Shiksha Ka Zameeni Sach:** COVID-19 ke dauran online padhai ne dikha diya ki gareeb bachhe mid-day meal se vanchit hue, unka learning loss hua, aur ladkiyon se mobile chheen kar unhe gharelu kaam mein jhonk diya gaya.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Functionalist Nazariya (Durkheim, Parsons)',
    rightTitle: 'Critical / Marxist Nazariya (Bourdieu, Bowles-Gintis)',
    rows: [
      {
        aspect: 'Mukhya Bhumika',
        left: 'Samajik ekta, naitik moolya aur merit-aadhrit role allocation',
        right: 'Varg shoshan ka punar-utpadan aur docile mazdoor taiyar karna',
      },
      {
        aspect: 'School Ka Swaroop',
        left: 'Ek nishpaksh chhota samaj jo talent ko inaam deta hai',
        right: 'Symbolic violence ka hathiyar jo ameer cultural capital ko badhava deta hai',
      },
      {
        aspect: 'Asamanta Ka Nazariya',
        left: 'Mehnat aur talent ke farak se paida hua sahi nateeja',
        right: 'Capitalist dhaancho ko banaye rakhne ka socha-samjha shoshan',
      },
      {
        aspect: 'Sudhar Ka Raasta',
        left: 'Schoolon ki sankhya aur takneek ko aur badhana',
        right: 'Conscientisation aur poore capitalist samaj ka socialist badlaav',
      },
    ],
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC 2025: NEP 2020 Aur Panacea Statement Ka Answer Kaise Likhein?',
    body: 'Answer mein NEP 2020 ke achhe bindu (foundational literacy, local bhasha) batate hue Jean Drèze aur Amartya Sen ko quote karein: shiksha tabhi kargar hogi jab sath mein muft sarkari swasthya, zameen sudhar, rozgar guarantee aur jaati-virodhi andolan sath chalenge.',
  },
  {
    kind: 'answerBox',
    intro: 'Shiksha akele desh ki sabhi bimaariyon ka ek-matra ilaj (panacea) kyun nahi ho sakti:',
    points: [
      'Aarthik Dhaancho Ki Seema: Shiksha degree de sakti hai par market mein rozgar paida nahi kar sakti; bina industrial growth ke shiksha yuvaon mein anomie aur gussa badhati hai.',
      'Do-Dhari Shiksha Pranali: Bharat mein do school chalte hain — ameeron ke liye air-conditioned private international schools aur garibon ke liye bina teacher wale sarkari school.',
      'Sanskritik Aur Pitrasattatmak Jadta: Keval padh lene se jaati aur dahej ki soch nahi mit-ti; padhe-likhe madhya varg mein bhi kanya bhrun-hatya aur jaati-hinsa dekhi jaati hai.',
      'Meritocracy Ka Jhooth: Bourdieu ke mutabiq school ameer parivar ki daulat aur bhasha ko hi "talent" maanta hai, jisse pichhde bachhe hamesha race mein peeche reh jaate hain.',
      'Digital Divide Aur Online Asamanta: EdTech aur online shiksha ke chalte jin parivaron ke paas smartphone aur internet nahi hai, unke bachhe poori tarah bahar ho jaate hain.',
    ],
    conclusion: 'Shiksha samajik vikas ka ek atyant mahatvapurna madhyam hai, lekin ise satat rozgar, aarthik samanta aur naitik samajik sudhar ke sath milakar hi safal banaya ja sakta hai.',
  },
]

export const topic4Hi: TopicLangContent = {
  summary:
    'Shiksha samajik badlaav aur vyavastha ko banaye rakhne ka ek do-dhari madhyam hai. Functionalists (Durkheim, Parsons) isko ek nishpaksh meritocratic vyavastha maante hain jo naitik moolya sikhakar organic solidarity banati hai. Iske viprit Marxist aur critical vicharak (Althusser, Bowles & Gintis, Bourdieu, Freire) dikhate hain ki shiksha ek Ideological State Apparatus hai jo Correspondence Principle aur Cultural Capital ke sahare varg aur jaati-shoshan ko banaye rakhti hai. Bharat mein jahan Phule aur Ambedkar ne shiksha ko azaadi ka hathiyar banaya, wahin NEP 2020 aur online shiksha ka samajshastriya mulyankan yeh saabit karta hai ki shiksha akele har bimaari ka ilaj (panacea) nahi ho sakti jab tak zameeni rozgar aur aarthik samanta na ho.',
  mindMap,
  sections,
}
