import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic2HiMindMap: MindMapData = {
  title: 'Topic 2 · Bharat Mein Shehari Bastiyon Ka Vikaas',
  center: 'Shehari Bastiyon Ka Vikaas',
  subtitle: 'Trends & Census Towns • Over-Urbanization • Jaati-Kinship Replicas • M.S.A. Rao Vargikaran',
  branches: [
    {
      title: 'Aitihasik Naksha Aur Trends',
      color: 'lavender',
      thinkers: ['Kingsley Davis', 'Ashish Bose', 'Max Weber', 'Gordon Childe'],
      points: [
        'Urban trajectory: Harappan nagar se Second Urbanization aur colonial ports tak',
        'Top-heavy urbanization: Class-I million-plus metropolitan sheharon mein aabadi jama',
        'Distress push banam industrial pull: kheti ke sankat se gaon chhodne par majboori',
        'Census 2011 watershed: 31.16% urban; azaadi ke baad pehli baar shehari decadal vikas gaon se aage',
      ],
    },
    {
      title: 'Census Towns Ka Dhamaka',
      color: 'yellow',
      thinkers: ['Kanhu Charan Pradhan', 'Partha Mukhopadhyay', 'Eric Denis'],
      points: [
        'Teen criteria: 5000 aabadi, 400 density, 75% purush gair-krishi kaam mein',
        'Subaltern urbanization: highway kinare bazaar aur kasbe bina municipal nagarpalika ke',
        'Gram Panchayat prashasan: shehari tax se bachne ke liye naya दर्जा lene se inkar',
        'Infrastructure kami: dukan aur makaan to bane par gutter, safai aur planning lapata',
      ],
    },
    {
      title: 'Over-Urbanization Aur Shartien',
      color: 'mint',
      thinkers: ['Gunnar Myrdal', 'Bert Hoselitz', 'N.V. Sovani', 'Jan Breman'],
      points: [
        'Hoselitz vs Sovani bahas: kya shehar udyogik factories se pehle daud rahe hain?',
        'Tertiary aur informal expansion: factories nahi to thela, rikshaw aur construction se vikas',
        'Udyog ke bina shehar: dharmik kendra (Varanasi), coaching shehar (Kota), prashasanik rajdhani',
        'Pseudo-urbanization: shehari aabadi to badhi par standard of living aur factory missing',
      ],
    },
    {
      title: 'Shehar Mein Jaati Aur Rishtedari',
      color: 'pink',
      thinkers: ['Harold Gould', 'M.S.A. Rao', 'Owen Lynch', 'M.N. Srinivas'],
      points: [
        'Gould ka Lucknow adhyayan: rickshaw pullers aur clerks ne jaati networks ka sahara liya',
        'Gaon ke rishton ki copy: caste mohallas, gotra shadiyan aur kshetriya biradari sansthayen',
        'M.S.A. Rao ke 3 prabhav: fringe gaon (Gurgaon), commuter gaon, aur out-migration remittance',
        'Segmented modernity: office mein modern par ghar ke aangan mein paramparik jaati niyamon ka paalan',
      ],
    },
  ],
}

export const topic2HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u11-01-urbanization-industry-flow.webp',
    alt: 'P2 Unit 11 infographic: Industry & Urban Settlements in India — Colonial Deindustrialization to Over-Urbanization',
    caption:
      'Bharat mein shehari vikas ka roop top-heavy aur distress-driven hai, jahan Census towns ka tezi se uday aur aadhunik shehar ke andar jaati-biradari ke purane rishton ka dohraav dekha jata hai.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 21 Visual 01',
  },
  {
    kind: 'md',
    body: `## Bharat Mein Shehari Vikaas Ka Swaroop Aur Trends

Aasaan shabdon mein samjho: Bharat mein sheharikaran (urbanization) sirf gaon se shehar jakar concrete ke makanon mein basne ka naam nahi hai. Yeh ek behad jatil samajik prakriya hai. Pashchim ke deshon mein badi-badi factories ne gaon ke logon ko achhi nokariyon ke liye aakarshit (pull) kiya tha. Par Bharat mein demographer [[thinker:Ashish Bose]] ke anusaar shehari aabadi factory ke aakarshan se kam, aur gaon mein kheti ke barbad hone ke darr se (distress push) shehar aane par majboor hui hai.

2011 ki Janganana (Census) ke anusaar Bharat ki shehari aabadi 37.7 crore (31.16%) thi. Aitihaasik taur par pehli baar aisa hua ki 2001 se 2011 ke dashak mein sheharon mein badhne wali aabadi (9.1 crore) gaon mein badhne wali aabadi (9.05 crore) se zyada ho gayi.

### Bharat Ke Shehari Vikaas Ki Mukhya Khasiyatein
1. **Top-Heavy (Ek-tarfa) Sheharikaran**: Bharat ka sheharikaran Class-I sheharon (1 lakh se zyada aabadi) aur million-plus metropolitan sheharon (Mumbai, Delhi, Kolkata, Bengaluru, Chennai) mein jama ho gaya hai. Chhote aur madhyam darje ke kasbe aarthik roop se pichhad gaye hain.
2. **Subaltern Urbanization**: Researcher Partha Mukhopadhyay aur Kanhu Charan Pradhan ke anusaar metropolitan sheharon se door chhote-chhote kasbon aur bazaron ka aazaad vikas hua hai.
3. **Informal Aur Tertiary Primacy**: Sheharon mein badhne wala rozgar badi manufacturing factories mein nahi, balki unorganized services, dukandari, construction aur gig economy (Zomato, Swiggy) mein paida hua hai.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Step 1: First Urbanization (2500–1700 BCE)',
        text: 'Harappa aur Mohenjo-daro ki planned grid vyavastha, pakki naaliyan aur granaries.',
      },
      {
        label: 'Step 2: Second Urbanization (600 BCE)',
        text: 'Ganga ke maidan mein Mahajanapadas, lohe ka prayog, vyapari shreniyan aur Pataliputra.',
      },
      {
        label: 'Step 3: Colonial Port Gateways (1800s)',
        text: 'Purane aantarik shilp nagaron ka patan aur naye angrezi port shehar (Bombay, Calcutta, Madras).',
      },
      {
        label: 'Step 4: Naya Daur & Census Towns (2000s–Aaj)',
        text: 'Metropolitan sprawl, highway corridors aur in-situ gramin se shehari bane Census towns.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Census Towns Ka Chamatkar: In-Situ Sheharikaran

2011 ki Janganana ka sabse hairan karne wala pehlu yeh tha ki 2001 se 2011 ke beech hone wale shehari vikas ka lagbhag ek-tihaai hissa ==Census Towns== ke uday se aaya. Census towns ki sankhya 2001 mein 1,362 thi, jo 2011 mein 186% badhkar 3,894 ho gayi!

Bharat ke prashasanik kanoon mein shehar do tarah ke hote hain:
- **Statutory Towns (Vaidhanik Nagar)**: Jinhe rajya sarkar municipality ya municipal corporation kanoon ke tehat shehar ghoshit karti hai. Wahan nagarpalika hoti hai, property tax lagta hai aur master plan banta hai.
- **Census Towns (Janganana Nagar)**: Jinhe Census of India aabadi aur kaam ke hisab se shehar maanta hai, par kanooni roop se unka prashasan gaon ki **Gram Panchayat** hi chalati hai!

### Census Town Ke Teen Mukhya Paimane (Tripartite Criteria)
Kisi basti ko Census town kehne ke liye teen shartein zaroori hain:
1. Kam se kam **5,000 ki aabadi** honi chahiye;
2. Kam se kam **75% mukhya purush shramik** kheti ke alawa gair-krishi (non-agricultural) dhandhe mein lage hon;
3. Aabadi ka density kam se kam **400 vyakti prati square kilometre** hona chahiye.

[[eg:West Bengal, Kerala aur Uttar Pradesh mein highway ke kinare basne wale bade gaon jahan dukanen, warehouse aur chhote factories khul gaye hain, ve aabadi mein shehar ban chuke hain par prashasanik taur par pradhanji ki gram panchayat hi chalate hain.]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Statutory Towns (Nagarpalika)',
    rightTitle: 'Census Towns (Gram Panchayat)',
    rows: [
      {
        aspect: 'Kanooni Darja',
        left: 'Rajya sarkar dwara Municipal Act ke tehat formally notify kiya jata hai.',
        right: 'Demographic criteria se shehar hai, par kanooni roop se Gram Panchayat chalti hai.',
      },
      {
        aspect: 'Tax Aur Rules',
        left: 'Shehari property tax lagta hai; building bylaws aur master plan follow karna hota hai.',
        right: 'Gramin tax vyavastha hoti hai; bina kisi zoning rule ke building banti hain.',
      },
      {
        aspect: 'Infrastructure Fund',
        left: 'Smart Cities aur AMRUT jaise central/state urban development funds milte hain.',
        right: 'MGNREGA aur rural funds par nirbhar; piped sewage aur drinking water ki kami rehti hai.',
      },
      {
        aspect: 'Rajnitik Wajah',
        left: 'Shehari ward parshad aur mayor ke chunav hote hain (74th Amendment).',
        right: 'Sthanik log aur neta tax se bachne ke liye municipality banne ka virodh karte hain.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Kya Udyogikaran Hi Sheharikaran Ki Ekmaatra Shart Hai?

Pashchim ke samajshastra mein yeh mana gaya tha ki factories (industrialization) ke bina shehar nahi ban sakte. [[thinker:Max Weber]] ne *The City* mein aur [[thinker:Emile Durkheim]] ne division of labour mein shehar ko factory udyog se joda tha. Lekin Bharat ka itihas aur vartaman is unilinear baat ko galat saabit karta hai.

### Over-Urbanization Ki Bahas: Bert Hoselitz Banam N.V. Sovani
- **Over-Urbanization Thesis**: Bert Hoselitz aur Gunnar Myrdal jaise vidwano ne kaha ki Bharat jaise vikasasheel deshon mein ==Over-Urbanization== (ya pseudo-urbanization) hai. Matlab sheharon ki aabadi to tezi se badh gayi, par factories utni nokariyan nahi de pa rahi hain, jiski wajah se shantytowns aur garibi faili hai.
- **N.V. Sovani Ka Jawab**: Desh ke prasiddh demographer N.V. Sovani ne is Eurocentric soch ka virodh kiya. Unhone dikhaya ki shehar basne ke liye factory hona zaroori nahi hai; shehar kai anya samajik-aarthik karnon se bhi bante hain.

### Bharat Mein Shehar Banne Ke Doosre Mukhya Kaaran
1. **Kheti Ka Sankat (Distress Push)**: Gaon mein sookha, chhota khet, karz aur jaati-gat shoshan kisanon aur Daliton ko shehar bhagne par majboor karta hai, jahan ve thela lagakar ya majdoori karke pet bharte hain.
2. **Prashasanik Aur Rajnitik Rajdhaniyan**: Chandigarh, Gandhinagar aur New Delhi jaise shehar sarkari daftar aur prashasan ke dam par base hain, jahan koi badi factory nahi thi.
3. **Dharmik Aur Teerth Sthal**: Varanasi, Tirupati, Puri aur Haridwar sadiyon se bade shehar rahe hain, jinki aarthiki puja, yatra aur hotel vyavastha se chalti hai.
4. **Shiksha Aur Health Hubs**: Kota jaise shehar pure coaching industry ke dam par base hain, jahan coaching institutes aur student hostels ne shehar ko khada kiya hai.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Exam Strategy: Over-Urbanization Par Saval',
    body: 'Agar question aaye ki kya industrialization zaroori hai, to seedha "Na" mat bolo. Pehle Western model (Durkheim, Weber) batao, fir Hoselitz vs Sovani ki debate laao, aur Bharat ke tertiary-driven, distress-driven aur educational-religious sheharon ka udaharan do.',
  },
  {
    kind: 'md',
    body: `## Shehar Mein Gaon Ki Jaati Aur Rishtedari Ka Dohraav

Pashchim ke samajshastri [[thinker:Louis Wirth]] ne *Urbanism as a Way of Life* mein likha tha ki shehar aakar vyakti azaad ho jata hai, rishtedari kamzor padti hai aur ek secular anonymity aati hai. Par Bharat ke sheharon par hue field studies ne is baat ko galat sabit kiya. Yahan shehar aakar jaati khatam nahi hoti, balki naye tareeqe se organise ho jati hai.

### Bharat Ke Sheharon Par Mukhya Field Studies
1. **Harold Gould Ka Lucknow Adhyayan**: Lucknow ke rickshaw pullers aur chhotte babuon (clerks) par study karke [[thinker:Harold Gould]] ne dikhaya ki shehar mein gaon ke log akele nahi bhatakte. Rickshaw ke addo se lekar karz lene aur kamra kiraye par lene tak sab kuch jaati aur biradari ke hisab se tay hota hai. Shehar ke asurakshit mahaul mein jaati ek safety-net ka kaam karti hai.
2. **M.S.A. Rao Ka Teen-Tarfa Vargikaran**: *Urbanization and Social Change* mein [[thinker:M.S.A. Rao]] ne shehari prabhav se gaon par padne wale 3 mukhya asar bataye:
   - **Fringe Gaon (Shehar Se Lage Gaon)**: Jo gaon shehar ke failav mein sama gaye (jaise Gurgaon ya Delhi ke Yadav gaon). Yahan zameen bikne se naya amir tabqa bana, par unki caste panchayat aur endogamy utni hi kattar rahi.
   - **Commuter Gaon**: Railway track ya highway ke kinare ke gaon jahan se log roz subah train pakadkar shehar kaam karne aate hain aur shaam ko wapas gaon lautte hain. Inka ghar aur jaati wahi gaon mein rehti hai.
   - **Out-Migration Gaon**: Jahan se mukhya purush dur ke sheharon (jaise Mumbai ya Ludhiana) mein majdoori karte hain. Wahan se aane wale paise (remittances) se gaon mein pakka makan aur shadi-byah mein kharch hota hai, jisse gaon mein *Sanskritization* badhta hai.
3. **Owen Lynch Ka Agra Ke Jatavs Par Adhyayan**: [[thinker:Owen Lynch]] ne dikhaya ki Agra ke chamde ka kaam karne wale Jatav (Dalit) shramikon ne shehar ke caste mohallon ke dam par sangathan banaya aur political mobility haasil ki.`,
  },
  {
    kind: 'keyTerm',
    term: 'Census Town',
    meaning:
      'Janganana ke anusaar shehar (5000 aabadi, 75% non-farm male labour, 400 density) par kanooni aur prashasanik roop se gaon ki Gram Panchayat ke adheen basti.',
  },
  {
    kind: 'keyTerm',
    term: 'Over-Urbanization (Bert Hoselitz)',
    meaning:
      'Aisi sthiti jahan shehari aabadi factory manufacturing ki rozgar kshamata se kahin zyada tezi se badh jati hai, jisse shehar mein kachhi bastiyan aur garibi failti hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Subaltern Urbanization',
    meaning:
      'Bade metro sheharon aur corporate planning se door chhote kasbon aur bazaron ka local level par aazaad aur natural vikas.',
  },
  {
    kind: 'keyTerm',
    term: 'Segmented Modernity',
    meaning:
      'Bharat ke sheharon ki wah samajik sthiti jahan vyakti bahar office aur metro mein modern dikhta hai par ghar aur parivar ke andar kattar jaati aur dharmik niyamon ko maanta hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Galti Mat Karna: Louis Wirth Banam Indian Reality',
    body: 'UPSC answer mein Louis Wirth ka "Urbanism as a Way of life" likh kar yeh zaroor explain karna ki Bharat mein anonymity nahi balki "Segmented Modernity" milti hai, jahan Harold Gould ke mutabiq jaati shehar mein zinda rehti hai.',
  },
  {
    kind: 'answerBox',
    intro:
      'Kya industrialization hi sheharikaran ki ekmaatra shart hai? UPSC Paper 2 ke liye model points:',
    points: [
      'Pashchimi industrial determinism ki seema: Louis Wirth aur Kingsley Davis ne udyog ko shehar ka aadhar mana, par Bharat ka aitihaasik aur vartaman vikas isse alag hai.',
      'Kheti ke sankat ka distress push: Bharat mein shehari aabadi factories ke aakarshan se kam, balki gaon mein fasal barbad hone, sookha aur jaati shoshan ke distress push se badh rahi hai.',
      'Tertiary aur informal sector ka uday: Sheharon ka vikas manufacturing ke bina bhi tertiary services (construction, delivery, thela, dukandari) ke zor par ho raha hai.',
      'Prashasanik, teerth aur shiksha kendra: Chandigarh jaise administrative shehar, Varanasi jaise dharmik kendra aur Kota jaise coaching hubs bina kisi heavy industry ke vishal nagar ban chuke hain.',
      'Census towns ka in-situ vikas: 2001 ke baad 2500 se zyada naye Census towns gramin bazaar, transport connectivity aur remittance ke sahare bane hain.',
    ],
    conclusion:
      'Udyogikaran ek bada factor zaroor hai, lekin Bharat mein sheharikaran kheti ke sankat, unorganized tertiary services, teerthan aur subaltern bazaar ke bahumukhi mel se aage badh raha hai.',
  },
]
