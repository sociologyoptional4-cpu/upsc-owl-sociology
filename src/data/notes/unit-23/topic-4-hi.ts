import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic4HiMindMap: MindMapData = {
  title: 'Topic 4 · Bharat Mein Paryavaran Aandolan',
  center: 'Paryavaran Aandolan',
  subtitle: 'Garibon Ka Paryavaranvad • Guha-Gadgil Ke 3 Dhaare • Chipko Banam Ecofeminism • Extractive Development Triangle',
  branches: [
    {
      title: 'Garibon Ka Paryavaranvad',
      color: 'lavender',
      thinkers: ['Ramachandra Guha', 'Joan Martinez-Alier', 'Ronald Inglehart', 'Madhav Gadgil'],
      points: [
        'Inglehart ke post-materialism ka khandank: pashchimi shauk banam Bharat ke garibon ki rozi-roti',
        'Biomass economy: kisaan aur aadiwasi zinda rehne ke liye seedhe jal, jangal, zameen par nirbhar',
        'Ecological refugees: bandhon aur khadaanon se aadiwasiyon ka beghar hokar shahar mein bhatakna',
        'Sarkari dabdaba: colonial aur post-colonial sarkar dwara jangalon ko corporate udyogon ko bechna',
      ],
    },
    {
      title: 'Guha Aur Gadgil Ke Teen Dhaare',
      color: 'yellow',
      thinkers: ['Ramachandra Guha', 'Madhav Gadgil', 'Sunderlal Bahuguna', 'Medha Patkar'],
      points: [
        'Crusading Gandhians: Bahuguna aur Bhatt ka naitik virodh, aparigraha aur gram swaraj',
        'Ecological Marxists: Medha Patkar aur Niyogi ka varg sangharsh, corporate looth ke khilaaf morcha',
        'Appropriate Technologists: Anil Agarwal aur Sunita Narain (CSE) ki takneek aur policy data',
        'Zameeni sangam: Narmada morche mein Gandhian satyagraha aur Marxist ladai ka adbhut mel',
      ],
    },
    {
      title: 'Chipko Aur Mahilayein: Ecofeminism Vivad',
      color: 'mint',
      thinkers: ['Vandana Shiva', 'Bina Agarwal', 'Chandi Prasad Bhatt', 'Gaura Devi'],
      points: [
        'Chipko (1973): Gaura Devi aur pahadi auraton ka pedon se lipat kar thekedaaron ko bhagana',
        'Vandana Shiva ka Ecofeminism: Prakriti aur aurat ke beech janmjaat, dharmik aur jeevan-dayi rishta',
        'Bina Agarwal ka critique: "Feminist Environmentalism" kaam ke batware par aadharit, na ki biology par',
        'Global prabhav: climate change ke daur mein Chipko ki sthaniya Gandhian seekh ka rashtriya mahtva',
      ],
    },
    {
      title: 'Extractive Development Ka Triangle',
      color: 'pink',
      thinkers: ['Amita Baviskar', 'Walter Fernandes', 'Nandini Sundar', 'Felix Padel'],
      points: [
        'Sankat ka triangle: sarkar-corporate nexus, kudrati sansadhanon ki chheen-jhapat aur aadiwasi pehchan',
        'Niyamgiri morcha: Dongria Kondh aadiwasiyon dwara Vedanta bauxite mining ke khilaaf Niyam Raja ki ladai',
        'Hasdeo Arand: Chhattisgarh mein koyla khadaan ke khilaaf Gond aadiwasiyon ka jungle bachao satyagraha',
        'Gram Sabha ki takat: FRA 2006 aur PESA 1996 ke zariye zameen aur jungle par aadiwasi haq',
      ],
    },
  ],
}

export const topic4HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u13-02-ecology-identity-movements.webp',
    alt: 'P2 Unit 13 infographic: Environmental & Identity Movements — Environmentalism of the Poor & Ethno-Identity Struggles',
    caption:
      'Bharat mein paryavaran aandolan "Garibon Ka Paryavaranvad" hai, jahan jungle aur nadi bachane ki ladai seedhe rozi-roti, aadiwasi astitva aur jameen ke haq se judi hai.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 23 Visual 02',
  },
  {
    kind: 'md',
    body: `## Garibon Ka Paryavaranvad Banam Pashchimi Shauk (Post-Materialism)

Aasaan shabdon mein samjho: America aur Europe mein paryavaran ki ladai aam taur par ameer logon ka shauk (hobby) hoti hai — jaise pashu-pakshi dekhna, jungle mein holiday manana ya pollution kam karke lifestyle behtar karna. Western samajshastri [[thinker:Ronald Inglehart]] ne ise **Post-Materialism** kaha, jiska matlab hai ki jab pet bhar jata hai tab log hariyali ki chinta karte hain.

Lekin Bharat mein baat bilkul ulati hai. Samajshastri [[thinker:Ramachandra Guha]] aur [[thinker:Joan Martinez-Alier]] ne iske liye lafz diya — ==Environmentalism of the Poor== (Garibon Ka Paryavaranvad):
- Bharat mein paryavaran bachane ka matlab koi holiday manana nahi, balki **zinda rehne, rozi-roti aur do waqt ki roti** ka sawal hai.
- Gaon ke kisaan, aadiwasi, charwahe aur machhuare ek **biomass economy** mein jeete hain. Unka peena ka paani, lakdi, janwaron ka chaara aur zameen seedhe jungle aur nadi se aate hain.
- Jab sarkar ya corporate companiyan koyla ya bauxite nikaalne ke liye jungle kaatti hain ya bada baandh banati hain, toh yeh log beghar hokar shahar ki jhopadpattiyon mein rikshaw chalane par majboor ho jaate hain — jinko samajshastra mein **Ecological Refugees** (paryavarani sharanarthi) kaha jata hai.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Pashchimi Post-Materialist Paryavaranvad',
    rightTitle: 'Bhartiya Garibon Ka Paryavaranvad (Guha)',
    rows: [
      {
        aspect: 'Shuruat Ka Kaaran',
        left: 'Ameeri, aish-o-aaram, khali samay aur lifestyle sudhar (Inglehart).',
        right: 'Garibi, sansadhanon ki kami aur zinda rehne ka sankat (Guha).',
      },
      {
        aspect: 'Mukhya Lakshya',
        left: 'Akele jungle bachana ("National Parks without people"), carbon footprint.',
        right: 'Jal, jangal, zameen par aam janta ke riwayati adhikar bachaana.',
      },
      {
        aspect: 'Kiske Khilaaf',
        left: 'Aam factory pollution, gadiyon ka dhuan aur plastic kooda.',
        right: 'Sarkar-corporate gathbandhan, zameen chheen-jhapat aur bade baandh.',
      },
      {
        aspect: 'Samajik Aadhar',
        left: 'Shehari padha-likha madhyam varg aur videshi NGOs.',
        right: 'Aadiwasi, pahadi mahilayein, chhote kisaan aur machhuare.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Guha Aur Gadgil Ke Teen Vicharik Dhaare

Apni mashhoor kitaab *This Fissured Land* mein [[thinker:Madhav Gadgil]] aur [[thinker:Ramachandra Guha]] ne dikhaya ki Bharat ke paryavaran aandolan teen mukhya vicharon par chalte hain:

### Teen Mukhya Dhaare (Three Strands)
1. **Crusading Gandhians (Gandhian Naitik Dhaar)**:
   - Neta: [[thinker:Sunderlal Bahuguna]] aur Chandi Prasad Bhatt.
   - **Vichar**: Yeh pashchimi udyog aur consumerism ko galat aur lalach se bhara maante hain. Yeh purane Hindu aur Gandhian vicharon jaise tyag (*aparigraha*), ahimsa aur gaon ke aatm-nirbharta (*gram swaraj*) par zor dete hain.
   - **Tariqe**: Shantipuurna satyagraha, upwas, padayatra aur aatm-shuddhi.
2. **Ecological Marxists (Paryavaran Marxist Dhaar)**:
   - Neta: Medha Patkar (*Narmada Bachao Andolan*), Shankar Guha Niyogi aur A.K. Roy.
   - **Vichar**: Yeh maante hain ki jungle aur nadiyon ka vinash capitalist varg-shoshan ka nateeja hai. Bina zameen aur daulat ka barabar batwara kiye hariyali bachana ek dhokha hai.
   - **Tariqe**: Sadak par takkar, rasta roko, gherao aur sarkar-corporate nexus ke khilaaf majboot morcha.
3. **Appropriate Technologists (Sahi Takneek Dhaar)**:
   - Sanstha: Centre for Science and Environment (CSE), Anil Agarwal aur Sunita Narain.
   - **Vichar**: Yeh na toh factory ke virodhi hain aur na hi kattar Marxist. Yeh beech ka rasta apnate hain — sasti, local aur vigyanik takneek jaise rainwater harvesting, chhota micro-hydel power aur jungle prabandhan.
   - **Tariqe**: Research reports, Supreme Court mein PIL, aur data ke zariye policy badalwana.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Paper 2 Angle: Zameen Par In Dhaaron Ka Mel',
    body: 'UPSC ke answer mein yeh zaroor likho ki zameen par koi bhi aandolan kisi ek box mein band nahi hota. Jaise Narmada Bachao Andolan ne Medha Patkar ke netritva mein Gandhian Jal Satyagraha (paani mein doob kar virodh) bhi kiya, Marxist varg ladai bhi ladi aur CSE ki tarah technical report dekar baandh ki kamiya bhi ginwayi.',
  },
  {
    kind: 'md',
    body: `## Chipko, Ecofeminism Aur Bina Agarwal Ka Vivad

1973 mein Uttarakhand ke Garhwal himalaya mein shuru hua **Chipko Aandolan** puri duniya mein prashidh hua. Jab thekedaar jungle kaatne aaye, toh Gaura Devi ke netritva mein gaon ki mahilaon ne pedon ko apne gale se laga liya (*ped se chipak gayin*).

Is ghatna ne feminist samajshastra mein ek zordar behas ko janam diya:

### Vandana Shiva Ka Ecofeminism (Prakriti Banam Nari)
Vandana Shiva ne apni kitaab *Staying Alive* mein likha ki:
- Pashchimi science aur purush-pradhan vikas ne Prakriti aur Aurat dono ke sath hinsa ki hai.
- Aurat aur Prakriti ke beech ek janmjaat, biological aur pavitra aatmik rishta hai kyunki dono jeevan ko janam deti hain aur paalti hain.
- Chipko mein mahilayein isliye aage aayin kyunki unka nari swabhav pedon ke kaate jaane ko bardaasht nahi kar sakta tha.

### Bina Agarwal Ka Feminist Environmentalism
Samajshastri [[thinker:Bina Agarwal]] ne Vandana Shiva ke is tark ko **essentialist aur galat** thehraya:
1. **Kaam Ka Batwara, Na Ki Biology**: Agarwal ne kaha ki pahadi auratein pedon se kisi aatmik rishte ke kaaran nahi chipkin, balki unke **gharelu kaam ke batware** ke kaaran. Mard naukri ke liye shehar chale gaye the; ghar ke liye lakdi, paani aur ghaas lana aurat ka kaam tha. Jungle katne se unka rozana 10 kilometer chalna padta tha.
2. **Class Aur Jaati Ka Sach**: Shiva ka vichar upper-caste Vedic dhang (Prakriti-Purusha) se juda tha, jabki gaon ki garib aur Dalit mahilaon ke liye jungle unki rozi-roti aur majdoori ka zariya tha.
3. **Feminist Environmentalism**: Agarwal ne kaha ki humein mahilaon ke paryavaran sangharsh ko zameen ke haq, property kanoon aur kaam ke bhed-bhav ke zariye dekhna chahiye.`,
  },
  {
    kind: 'md',
    body: `## Extractive Development Ka Triangle: Aadiwasi Pehchan Aur Niyamgiri

21st sadi mein Bharat ka sabse bada paryavarani takrav **Extractive Development Triangle** ke ird-gird ghoom raha hai: ek taraf **sarkar aur corporate companiyon ka gathbandhan**, dusri taraf **paryavaran ka vinash**, aur teesri taraf **Aadiwasiyon ki pehchan aur astitva**.

Samajshastri [[thinker:Amita Baviskar]] (*In the Belly of the River*) aur Walter Fernandes ne dikhaya ki Aadiwasi desh ki aabadi ka lagbhag **8.6% hain, par vikas ke naam par beghar hone walon mein unka hissa 40% se zyada** hai.

### Do Zameeni Case Studies
- **Niyamgiri Aandolan (Odisha)**: Dongria Kondh aadiwasiyon ne Vedanta company ke bauxite mining ke khilaaf aitihasik ladai ladi. Dongria Kondh maante hain ki unke bhagwan *Niyam Raja* us pahad mein rehte hain. 2013 mein Supreme Court ne faisla diya ki mining ka faisla aadiwasiyon ki **Gram Sabha** karegi. 12 gaon ki Gram Sabhaon ne ekmat hokar mining ko kharij kar diya.
- **Hasdeo Arand Aandolan (Chhattisgarh)**: "Central India ka phephda" kahe jaane wale Hasdeo jungle mein Gond aadiwasi koyla khadanon ke khilaaf lad rahe hain, yeh kehte hue ki isse haathi corridor tabaah ho jayega aur PESA 1996 tatha Forest Rights Act (FRA 2006) ka ullanghan ho raha hai.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: '1. Khadaan Ka Theka',
        text: 'Sarkar dwara corporate companiyon ko koyla ya bauxite mining ke liye jungle ka patta dena.',
      },
      {
        label: '2. Jungle Ka Vinash',
        text: 'Pedon ki katai, nadiyon ka sookhna aur aadiwasiyon ko zabardasti beghar karna.',
      },
      {
        label: '3. Jan-Morcha',
        text: 'Aadiwasiyon dwara ped se chipakna, teer-kaman ke saath shantipuurna dharne aur satyagraha.',
      },
      {
        label: '4. Samvidhanik Jeet',
        text: 'FRA 2006, PESA 1996 aur Gram Sabha ke zariye mining ko qanooni taur par rokna.',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Garibon Ka Paryavaranvad (Guha & Martinez-Alier)',
    meaning:
      'Paryavaran samajshastra ka siddhant jo batata hai ki teesri duniya ke deshon mein jungle-nadi bachana shauk nahi, balki garibon ki rozi-roti aur zinda rehne ki zaroorat hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Ecofeminism Banam Feminist Environmentalism',
    meaning:
      'Vandana Shiva (aurat aur prakriti ka janmjaat pavitra rishta) aur Bina Agarwal (kaam ke batware aur zameen ke haq par aadharit sangharsh) ke beech ka vad-vivad.',
  },
  {
    kind: 'keyTerm',
    term: 'Ecological Refugees',
    meaning:
      'Woh aadiwasi aur garib kisaan jinhe bade baandhon, mining aur factory lagane ke naam par unke gaon se nikal kar shehari jhopadpattiyon mein bhatakne par majboor kar diya gaya.',
  },
  {
    kind: 'keyTerm',
    term: 'Extractive Triangle',
    meaning:
      'Sarkar-corporate gathbandhan, khadaan mining se jungle ka vinash aur aadiwasiyon ki pehchan chhinne ke beech ka teekha samajik sangharsh.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Exam Formula: Climate Change Aur Chipko Ka Rishta',
    body: 'UPSC ke answer mein agar climate change aur Chipko ka rishta pucha jaye, toh likho ki global carbon warming se nipatne ke liye Chipko ka local model (gaon ki mahilaon dwara jungle ka decentralised prabandhan aur zaroorat se zyada na lene ki Gandhian naitikta) sabse behtar upaay hai.',
  },
  {
    kind: 'answerBox',
    intro:
      'Paryavaran aandolan, aadiwasi pehchan aur vikas ke triangle par model answer structure:',
    points: [
      'Rozi-roti ka sawal: Bharat ka paryavaranvad Pashchimi post-materialist shauk se alag "Garibon Ka Paryavaranvad" hai (Guha & Martinez-Alier), jahan lakdi, chaara aur paani zinda rehne ke liye zaroori hain.',
      'Teen vicharik dhaare: Gadgil aur Guha ke anusaar Crusading Gandhians (naitik tyag), Ecological Marxists (varg sangharsh) aur Appropriate Technologists (sahi takneek) ka zameeni sangam.',
      'Aurat aur paryavaran: Chipko ne mahila shakti dikhayi, jise Vandana Shiva ne janmjaat rishta (Ecofeminism) kaha par Bina Agarwal ne kaam ke batware (Feminist Environmentalism) se samjhaya.',
      'Extractive triangle: Sarkar aur corporate nexus dwara mineral nikaalna, jungle tabaah karna aur 40% aadiwasiyon ko ecological refugees banana (Amita Baviskar, Walter Fernandes).',
      'Samvidhanik rasta: Niyamgiri aur Hasdeo Arand mein aadiwasiyon ne PESA 1996, FRA 2006 aur Gram Sabha ke zariye corporate mining ko chunauti dekar astitva bachaya.',
    ],
    conclusion:
      'Bharat mein paryavaran ki raksha tabhi sambhav hai jab aadiwasiyon aur kisaano ke jal, jangal, zameen par loktantrik haq ko swikaar kiya jaye.',
  },
]
