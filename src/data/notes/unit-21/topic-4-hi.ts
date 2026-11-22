import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic4HiMindMap: MindMapData = {
  title: 'Topic 4 · Informal Sector Aur Child Labour',
  center: 'Informal Sector & Child Labour',
  subtitle: 'Keith Hart & Jan Breman • Distressed Migration • Feminization • Neera Burra Ka Child Labour Vishleshan',
  branches: [
    {
      title: 'Informal Sector Ki Samajh',
      color: 'lavender',
      thinkers: ['Keith Hart', 'Jan Breman', 'Sharit Bhowmik', 'Karl Marx'],
      points: [
        'Keith Hart (1973): petty trading aur self-employed guzara karne ki aarthik tarkeeb',
        'Jan Breman ka dualism critique: informal sector formal capital ke munafey ke liye zaroori hai',
        '90%+ shramik aabadi: temporary daur nahi balki Bharat ki economy ki permanent buniyad',
        'Kanooni suraksha shunya: bina contract, bina minimum wage aur bina pension ke shramik',
      ],
    },
    {
      title: 'Distressed Migration Ka Asar',
      color: 'yellow',
      thinkers: ['Jan Breman', 'Bina Agarwal', 'Utsa Patnaik', 'Ashish Bose'],
      points: [
        'Kheti ke sankat ka push: chhota khet, karz, sookha aur fasal ke girte daam',
        'Footloose circular migration: gaon ke sookhe aur shehar ke construction site ke beech daud',
        'Informal absorptive sink: thela, rikshaw, palledari aur e-rickshaw mein shramik ka khapna',
        'Shehari nagrikta se bahi-shkar: bina pakke makan aur bina sthaniya ration card ke lachari',
      ],
    },
    {
      title: 'Feminization Of Precarity',
      color: 'mint',
      thinkers: ['Maria Mies', 'Nirmala Banerjee', 'Bina Agarwal', 'Renana Jhabvala'],
      points: [
        'Housewifization (Maria Mies): mahila ke vetan ko "supplementary" kehkar sasti majdoori dena',
        'Ghar-baithe piece-rate kaam: beedi roll karna, agarbatti aur kapde par kadhai ka shoshan',
        'Gharelu nokraniyon ka sangharsh: aath ghante se zyada kaam par bina kisi minimum wage ke',
        'Suraksha ki kami: maternity benefits aur sexual harassment kanoon informal sector se gayab',
      ],
    },
    {
      title: 'Child Labour Ke Structural Karan',
      color: 'pink',
      thinkers: ['Neera Burra', 'Myron Weiner', 'Kailash Satyarthi', 'B.R. Ambedkar'],
      points: [
        'Neera Burra (*Born to Work*): Sivakasi aur Firozabad mein "nimble fingers" jhooth ka parda-faash',
        'Buniyaadi karan: bado ki berozgari, karz ka bandhan, jaati shoshan aur sarkari school ki kami',
        '2016 Kanoon ki kami: "family enterprises" mein school ke baad kaam karne ki chhoot ek bada loophole',
        'RTE Act 2009 ka sath: child labour tabhi mitega jab har bachhe ko behtar school aur bado ko sahi vetan mile',
      ],
    },
  ],
}

export const topic4HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u11-02-slums-informal-child-labour.webp',
    alt: 'P2 Unit 11 infographic: Slums, Informality & Child Labour — Spatial Deprivation, Urban Informality & Child Labour',
    caption:
      'Bharat mein informal sector 90% se zyada shramikon ko absorb karta hai, jahan gaon ke aarthik sankat se paida hone wala migration, mahilaon ki precarity aur child labour ka shoshan aapas mein jude hain.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 21 Visual 02',
  },
  {
    kind: 'md',
    body: `## Informal Sector Ka Samajshastriya Arth: Keith Hart Banam Jan Breman

Aasaan shabdon mein samjho: Informal sector (asanggathit kshetra) kisi temporary bhatkav ka naam nahi hai jo udyog aane par gayab ho jayega. Bharat mein yeh poori aarthiki ka sabse bada aadhar hai, jahan desh ke 90% se zyada majdoor bina kisi kanooni suraksha, bina pakke contract aur bina kisi pension ke kaam karte hain.

Is shabd ka prayog sabse pehle 1973 mein economic anthropologist [[thinker:Keith Hart]] ne Ghana ke sheharon par research karte hue kiya tha. Hart ke anusaar informal sector aam logon ke swa-rozgar (self-employment) aur chhote-mote vyapar se pet bharne ka ek dynamic zariya tha. Unka manna tha ki jaise-jaise modern factories aayengi, informal sector apne aap formal sector mein badal jayega.

Lekin Dutch samajshastri [[thinker:Jan Breman]] (*Footloose Labour*, *At Work in the Informal Economy*) ne is soch ki dhajjiya uda di:
- **Formal Aur Informal Ka Judaav**: Jan Breman ne saabit kiya ki formal aur informal do alag-alag duniya nahi hain. Corporate capital jan-boojhkar factories ke kaam ko subcontract karke informal chhotte thekedaron ko bhejti hai taaki minimum wage, provident fund aur trade union se bacha ja sake.
- **Permanent Reserve Army**: Bharat mein informal sector temporary nahi balki permanent hai. Yeh saste shramikon ki ek aisi fauj (reserve army of labour) hai jiske shoshan par poori corporate aur shehari vyavastha tikkhi hai.
- **Kanooni Haq Se Vanchhana**: Informal majdooron ke paas na to likhit contract hota hai, na fixed ghante, na bima aur na hi retirement fund. Thekedar jab chahe unhe bina kisi notice ke kaam se nikal deta hai.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Formal Sector Ki Naukri',
    rightTitle: 'Informal Sector Ka Kaam',
    rows: [
      {
        aspect: 'Naukri Ka Contract',
        left: 'Likhit appointment letter hota hai jisme kanooni tenure aur notice period tay hota hai.',
        right: 'Kewal maukhik baat hoti hai; thekedar apni marzi se kisi bhi din nikal deta hai.',
      },
      {
        aspect: 'Vetan Niyam (Wages)',
        left: 'Sarkari minimum wage aur samay-samay par mehangai bhatta (DA) milta hai.',
        right: 'Sasti daily piece-rate majdoori, jo zyadatar minimum wage kanoon se niche hoti hai.',
      },
      {
        aspect: 'Social Security',
        left: 'Provident Fund (EPFO), gratuity, ESI hospital aur pension ki kanooni guarantee.',
        right: 'Khatarnak hadse ya budhape ke liye koi employer bima ya sarkari pension nahi milti.',
      },
      {
        aspect: 'Union Ka Adhikar',
        left: 'Trade union banana aur samuhik roop se mang rakhne ka sanvaidhanik adhikar.',
        right: 'Bikhre hue majdoor jinhe thekedar dhamka kar kisi bhi sangathan se door rakhta hai.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Kheti Ka Sankat Aur Shehari Informal Sector Ka Vistar

Bharat ke sheharon mein informal sector ka itna bada aakar shehar ke kisi udyogik aakarshan se nahi, balki gaon mein kheti ke barbad hone ke darr se paida hua hai. Gaon se nikalne wala shramik apni khushi se shehar nahi aata, balki kheti ke sankat se dhakel (push factor) kar shehar laya jata hai.

Samajshastri [[thinker:Jan Breman]] ne in shramikon ko **"footloose labour"** kaha hai:
1. **Gaon Ke Push Factors**: Desh mein 85% kisan chhote aur simant (marginal) hain jinke paas 2 hectare se kam zameen hai. Lagataar sookha, be-mausam barsaat, beej-khad ke badhte daam, local sahookar ka bhari byaaj aur kheti mein fasal ka sahi daam na milna kisan parivaron ko tabah kar deta hai.
2. **Jaati-Gat Shoshan**: Gaon mein Dalit aur pichhdi jaatiyon ke khet-majdooron par dabang jaatiyon ka dabdaba aur chhua-chhoot rehta hai. Shehar aane par kam se kam unhe aisi sidhi samajik beizzati se thodi azaadi milti hai.
3. **Shehar Ka Absorptive Sink**: Bina degree aur English ke gaon se aane wale shramik kewal informal sector ke gande aur kathin kamo mein khapte hain—jaise building construction, eent-pathar dhona, thela lagana, rickshaw chalana aur kothi mein jhadu-pocha karna.
4. **Shehari Suvidhaon Se Bahi-shkar**: Shehar mein in shramikon ko nagrik nahi balki sasta shram samjha jata hai. *One Nation One Ration Card* aane se pehle unka ration card shehar mein chalta hi nahi tha, aur unhe jhuggi-jhopdiyon mein bina bijli-paani ke rehna padta hai.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Step 1: Gramin Krishi Sankat',
        text: 'Zameen ke chhote tukde, fasal barbad hona, sahookar ka karz aur jaati-gat beizzati.',
      },
      {
        label: 'Step 2: Thekedaari Circular Migration',
        text: 'Labour sardar ke zariye shehar ya eent-bhatte par bina kisi likhit agreement ke aana.',
      },
      {
        label: 'Step 3: Shehari Informal Sector',
        text: 'Kam majdoori par construction, palledari, thela aur gharelu kaam mein khapna.',
      },
      {
        label: 'Step 4: Garibi Ka Chakravyuh',
        text: 'Kachhi bastiyon mein rehna, ration aur aawas se vanchhana aur agali peedhi ka school chhootna.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Informal Sector Mein Mahila Shramikon Ka Shoshan (Feminization of Precarity)

Informal sector ka ek sabse dardnak pehlu yeh hai ki mahilaon ka shram sabse sasta aur asurakshit kar diya gaya hai, jise samajshastra mein ==Feminization of Precarity== kehte hain.

Feminist samajshastri [[thinker:Maria Mies]] aur [[thinker:Nirmala Banerjee]] ne is shoshan ke parde ko uthaya hai:
- **Housewifization (Maria Mies)**: Capitalist vyavastha yeh dharana banati hai ki mahila ka asli kaam to ghar sambhalna hai aur uska vetan sirf "supplementary" (parivar ke thode kharch ke liye) hai. Is soch ke dam par factory aur thekedar mahilaon ko purushon se aadhi majdoori dete hain.
- **Ghar Par Baith Kar Piece-Rate Kaam**: Lakhon mahilaen ghar mein baith kar beedi roll karti hain, agarbatti banati hain, kaju chhilti hain aur export ke kapdon par sitara-motiyan lagati hain. Ghar ki bijli aur jagah unki lagti hai, aur unhe prat hazar beedi ke hisab se mamuli paise diye jate hain.
- **Gharelu Kaamgar (Domestic Workers)**: Shehar ke middle class parivaron mein kaam karne wali bai, cook aur aayah bina kisi weekly holiday, bina maternity leave aur bina sexual harassment kanoon ke shoshan jhelti hain.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Trap: Mahilaon Ka Informal Kaam Kya Empowerment Hai?',
    body: 'Exam mein kabhi mat likhna ki informal sector mein mahilaon ka kaam karna unhe aazad bana raha hai. Maria Mies aur Nirmala Banerjee ke hawale se dikhao ki yeh aarthik lachari (distress survival) hai jahan unpaid care work aur low-wage exploitation ka dohra bojh hota hai.',
  },
  {
    kind: 'md',
    body: `## Bharat Mein Child Labour: Neera Burra Ka Structural Vishleshan Aur Kanooni Seemayein

Kanoon banne ke dasakon baad bhi Bharat mein child labour (bal shram) ek gehra kalank bana hua hai. Samajshastri [[thinker:Neera Burra]] ne apni prasiddh pustak *Born to Work: Child Labour in an Unkind World* mein desh ke khatarnak karkhanon ka ground reality study kiya:
- **Sivakasi (Tamil Nadu)**: Machis aur patakha factories;
- **Firozabad (Uttar Pradesh)**: Kaanch ki chudiyan aur bhatti ka kaam;
- **Khurja (Uttar Pradesh)**: Ceramic aur mitti ke bartan ki bhattiyan;
- **Moradabad (Uttar Pradesh)**: Peetal ke bartan dhalne aur polish ka kaam;
- **Jaipur (Rajasthan)**: Heere-jawharat (gemstones) ki cutting aur polishing.

### "Nimble Fingers" Ke Jhooth Ka Parda-Faash
Karkhana malik hamesha yeh jhooth bolte the ki chudiyan banane ya patakhe bharne ke liye chhote bachhon ki "nazuk ungliyan" (nimble fingers) zaroori hain jo bade logon ke paas nahi hoti. Neera Burra ne is jhooth ko poori tarah be-naqab kiya:
1. Adult karigar har wahi kaam bachhon se zyada tezi aur behtar dhang se kar sakte hain.
2. Asli karan aarthik shoshan hai: bachhe chupchap bhatti ke dhuen mein 12 ghante kaam karte hain, koi union nahi banate aur unhe bado se aadhe se bhi kam paise diye ja sakte hain.

### Child Labour Ke Buniyaadi Structural Karan
1. **Bado Ki Berozgari Aur Kam Vetan**: Jab Firozabad ya Sivakasi mein bado ko sahi vetan nahi milta, to parivar ko bhookhmari se bachane ke liye chhote bachhon ko bhatti par bhejna padta hai.
2. **Karz Ka Bandhan (Debt Bondage)**: Garib maa-baap thekedar se ilaj ya shadi ke liye karz lete hain aur uske badle bachhe ko girvi rakh dete hain.
3. **Jaati-Gat Bhedbhav**: Neera Burra ne dikhaya ki 80% se zyada child labourers Dalit, Adivasi aur pichhdi jaatiyon ke hote hain.
4. **School Vyavastha Ka Dhwast Hona**: *The Child and the State in India* mein [[thinker:Myron Weiner]] ne dikhaya ki pashchimi deshon ki tarah Bharat ne shuruat se sabke liye compulsory school lagu nahi kiya, kyunki elite varg garib lower-caste bachhon ke majdoori karne ko natural maanta tha.

### Kanoon Ki Kami: 2016 Ka Amendment Act
Halaanki *Child Labour (Prohibition and Regulation) Amendment Act, 2016* ne 14 saal se kam umra ke bachhon ke sabhi kamo par rok lagayi, lekin isme ek bada chhal chhupa diya gaya: bachhon ko school ke baad **"family enterprises" (parivarik dhandhe) mein madad karne ki chhoot** de di gayi! Aaj kal karkhane carpet weaving, beedi aur kadhai ka kaam theke par garibon ke gharon mein bhej dete hain, jahan kanoon ke samne bachha "parivar ki madad" ke naam par din-raat ghul raha hota hai. Child labour tabhi mitega jab **Right to Education (RTE) Act 2009** sakhti se chale aur bado ko living wage mile.`,
  },
  {
    kind: 'keyTerm',
    term: 'Informal Sector (Keith Hart)',
    meaning:
      'Ghair-sarkari aarthik gatividhiyan jahan bina kisi registration aur kanooni niyam ke log swa-rozgar aur thele-majdoori se apna pet bharte hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Dualism Critique (Jan Breman)',
    meaning:
      'Jan Breman ka yeh tarq ki formal aur informal do alag kshetra nahi hain, balki formal corporate sector sasta munafa kamane ke liye shramikon ko informal banata hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Housewifization (Maria Mies)',
    meaning:
      'Wah samajik dharana jisme mahila ke vetan ko kewal parivar ka extra kharch bata kar unhe behad kam majdoori aur asuraksha mein rakha jata hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Nimble Fingers Fallacy (Neera Burra)',
    meaning:
      'Karkhana malikon ka wah jhooth ki bachhon ki ungliyan nazuk kaam ke liye zaroori hain, jise Neera Burra ne saste shoshan ka bahana saabit kiya.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Galti Mat Karna: RTE Act Ka Saal',
    body: 'RTE Act hamesha 2009 likhna (2019 bilkul nahi!). RTE Act 2009 ko 2016 ke Child Labour Amendment Act ke family enterprise loophole se jod kar critical analysis karo.',
  },
  {
    kind: 'answerBox',
    intro:
      'Informal migrant shramikon ki samasyaon aur child labour kanoon ki seemaon par model framework:',
    points: [
      'Informal shramikon ki asuraksha: Likhit contract ki kami, minimum wage na milna, kachhi bastiyon mein asurakshit aawas aur non-portable social entitlements.',
      'Distressed migration ka chakra: Kheti ke sankat (sookha, karz, jote ka chhota hona) se nikal kar shramik shehar ke unorganized sector mein sasta shram dene par majboor hote hain.',
      'Feminization of precarious labour: Mahilaen ghar-baithe piece-rate dhandhon aur domestic work mein bina maternity benefit aur bina barabar vetan ke shoshit hoti hain.',
      'Child labour ke structural karan (Neera Burra): Bado ki berozgari, karz ka bandhan aur lower-caste shramikon ka shoshan (Sivakasi, Firozabad); nimble fingers ek chalaki-bhara jhooth hai.',
      'Child Labour Kanoon (2016) ki seemayein: "Family enterprises" mein school ke baad kaam karne ki chhoot ne ghar-baithe karpete aur beedi udyog mein child labour ko chhipa diya hai.',
    ],
    conclusion:
      'Child labour aur informal precarity sirf kanoon se nahi mit sakti; iske liye bado ko living wage, sabhi informal shramikon ko social security aur RTE Act 2009 ke tehat shandar sarkari school chahiye.',
  },
]
