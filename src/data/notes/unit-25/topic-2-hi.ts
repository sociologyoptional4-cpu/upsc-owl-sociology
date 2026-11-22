import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic2HiMindMap: MindMapData = {
  title: 'Topic 2 · Bharat Mein Garibi, Vanchana Aur Asamanta',
  center: 'Garibi Aur Asamanta',
  subtitle: 'Calorie Banam Capability • Multidimensional Poverty (MPI) • Billionaire Raj • Caste-Gender Chakravyuh',
  branches: [
    {
      title: '1. Calorie Line Se Aage: Kshamata Ki Kami',
      color: 'lavender',
      thinkers: ['Amartya Sen', 'Sabina Alkire', 'James Foster', 'Jean Drèze'],
      points: [
        'Calorie ki seema: Dandekar-Rath aur Tendulkar line sirf pet bharne tak seemit thi',
        'Capability Deprivation (Sen): Garibi ka asli matlab hai garimapoorna jeevan jeene ki aazadi ka chhinna',
        'Multidimensional Poverty (MPI): Alkire-Foster formula ke 12 samajik indicators',
        'NITI Aayog National MPI: Poshan, swasthya, aur saaf cooking gas ki kami ko darshata hai',
      ],
    },
    {
      title: '2. Daulat Ka Dhabba: The Billionaire Raj',
      color: 'yellow',
      thinkers: ['Thomas Piketty', 'Lucas Chancel', 'Karl Marx', 'Utsa Patnaik'],
      points: [
        'World Inequality Lab: Top 1% aabadi ke paas desh ki 40% se zyada daulat hai (British raj se bhi zyada)',
        'K-shaped badlav: Corporate munafa aasman par aur asangathit majdoor ki kamayi wahi ki wahi',
        'Utsa Patnaik ka vishleshan: Gaon mein khetihar majdooron ke bhojan mein calorie ki giravat',
        'Relative Deprivation (Runciman): Ameeron ki chamak-dhamak dekhkar garibon mein badhta gussa',
      ],
    },
    {
      title: '3. Jaati Aur Class Ka Chakravyuh',
      color: 'mint',
      thinkers: ['B.R. Ambedkar', 'Jan Breman', 'Sukhadeo Thorat', 'Paul Attewell'],
      points: [
        'Ambedkar ka vichar: Jaati sirf kaam ka batwara nahi balki majdooron ka jabran vibhajan hai',
        'Footloose Labour (Breman): Gujarat ke bhatta-mazdoor jo karz ke bojh tale ghoomte rehte hain',
        'Market mein bhedbhav: Thorat aur Attewell ke field audit ne dikhaya ki Dalit naam dekhkar naukri nahi milti',
        'Peedhidar-peedhi garibi: Musahar aur Madiga parivaron ke paas zameen na hona unhe majdoor banaye rakhta hai',
      ],
    },
    {
      title: '4. Garibi Ka Strikaran Aur Care Economy',
      color: 'pink',
      thinkers: ['Ashwini Deshpande', 'Bina Agarwal', 'Diane Elson'],
      points: [
        'Gender wage gap: Mahilaon ko kam vetan aur asangathit kheti/domestic kaam mein dhakela jata hai',
        'Zameen ka adhikar (Bina Agarwal): Mahilaon ke naam zameen na hone se bank se loan nahi milta',
        'Pandemic ka jhatka (Deshpande): Lockdown mein sabse pehle mahilaon ki naukri gayi aur wapsi dheemi rahi',
        'Unpaid care work: Ghar ka khana, paani lana aur bacchon ki dekhbhal unka samay nichod leta hai',
      ],
    },
  ],
}

export const topic2HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u15-02-social-transformation-challenges.webp',
    alt: 'P2 Unit 15 infographic: Challenges of Social Transformation — Poverty, Violence, Caste-Communal Strife & Literacy Gaps',
    caption:
      'Poverty, Violence, Caste-Communal Strife & Literacy Gaps — Garibi, Vanchana aur Asamanta ka visual saransh.',
  },
  {
    kind: 'md',
    body: `## Garibi Aur Vanchana: Calorie Line Se Aage Ka Sach

Aasaan shabdon mein samjho: Lambe samay tak sarkar yeh manti rahi ki agar kisi insaan ko gaon mein 2,400 calorie aur shehar mein 2,100 calorie ka khana mil raha hai, to wo gareeb nahi hai (Tendulkar aur Rangarajan line). Lekin samajshastri puchte hain: kya sirf saans lena aur zinda rehna hi jeevan hai? Agar kisi ke paas padhai nahi, beemari ka ilaaj nahi, aur samaan mein izzat nahi, to kya wo gareeb nahi hai?

Samajshastra mein garibi ko sirf rupaye-paise ki kami nahi, balki ==Structural Deprivation== maana jata hai. Yeh aisi lachari hai jo jaati-vyavastha, zameen ki kami aur samajik shoshan se peedhidar-peedhi banaye rakhi jaati hai.

### Amartya Sen Ka Capability Deprivation Sidhhant

Nobel puraskar vijeta [[thinker:Amartya Sen]] ne garibi dekhne ka nazariya hi badal diya. Unhone ==Capability Deprivation== ka vichar diya. Sen ke anusaar paisa ya aamdani to sirf ek sadhan hai; asli vikas tab hai jab insaan ke paas aisi aazadi ho ki wo apni manpasand zindagi jee sake (functionings and capabilities).

Garibi ka matlab hai aisi buniyaadi kshamataon ka chhinna—jaise bimari se bachna, padhna-likhna, surakshit rehna, aur samaj mein sir uthakar jeena. Agar kisi ko saste ration se chawal mil bhi gaya, lekin gaon mein school aur hospital nahi hain, to wo structural taur par garib hi rahega.

[[eg:Bihar ke gaon mein agar ek Musahar pariwar ko PDS se ration mil bhi jata hai, to bhi achhe school aur zameen na hone ke kaaran uske bacche khetihar majdoor banne par majboor hote hain.]]

### Multidimensional Poverty Index (MPI)

Sen ke sidhhant par aadharit hokar Sabina Alkire aur James Foster ne ==Multidimensional Poverty Index (MPI)== banaya, jise Bharat mein NITI Aayog ne National MPI ke roop mein apnaya. Yeh sirf aamdani nahi, balki 3 aayamon aur 12 sanketakon (indicators) par garibi naapta hai:

| Aayam | Mukhya Indicators | Samajshastriya Mahatva |
| :--- | :--- | :--- |
| **Swasthya (Health)** | Poshan (Nutrition), Bal-mrityu dar, Matri swasthya | Sharirik kamzori aur biological reproduction ka aakalan |
| **Shiksha (Education)** | School jane ke saal, School attendance | Samajik gyan (Cultural Capital) aur nayi generation ki mobility |
| **Rehan-Sehan (Living Standards)** | Cooking gas, Shauchalaya, Saaf paani, Bijli, Makan, Assets, Bank khata | Buniyaadi suvidhaon se bedakhali aur gharelu shram ka bojh |

NITI Aayog ke MPI report ke anusaar multidimensional garibi mein giravat aayi hai, parantu central aur eastern Bharat (UP, Bihar, MP, Odisha) ke gramin ilaqon mein saaf cooking fuel, shauchalaya aur poshan ki kami abhi bhi bhyankar roop se qayam hai.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Angle: Absolute Poverty Banam Relative Deprivation',
    body: 'Mains ke uttar mein absolute poverty (pet bharne ke sadhano ki kami) aur W.G. Runciman ke "Relative Deprivation" ( doosron se tulna karke aane wala anyay ka ehsaas) mein fark spasht karo. Aaj ke Bharat mein social media dekhkar aane wala relative deprivation zyada bhyankar samajik aakrosh paida karta hai.',
  },
  {
    kind: 'compare',
    leftTitle: 'Purana Calorie/Aamdani Model',
    rightTitle: 'Modern Capability / MPI Model',
    rows: [
      {
        aspect: 'Mukhya Aadhar',
        left: 'Sharirik zinda rehne ke liye zaroori minimum calorie',
        right: 'Amartya Sen ki kshamata (capabilities) aur garimapoorna aazadi',
      },
      {
        aspect: 'Measurement',
        left: 'Sirf per capita kharch (MPCE) par aadharit unidimensional line',
        right: 'Swasthya, shiksha aur rehan-sehan ke 12 multidimensional sanketak',
      },
      {
        aspect: 'Sarkari Hal',
        left: 'Sasta anaj (PDS) ya direct bank account mein thoda nakad paisa',
        right: 'Sabhi ke liye behtareen sarkari school, hospital aur permanent asset',
      },
      {
        aspect: 'Garib Ka Nazariya',
        left: 'Lachar beneficiary jise zinda rakhne ke liye daan chahiye',
        right: 'Loktantrik naagrik jiska buniyaadi haq hai izzat se jeena',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Vaishvikaran Aur Daulat Ka Dhabba: The Billionaire Raj

1991 ke economic reforms ke baad desh ki GDP to tezi se badhi, lekin daulat ka batwara behad asaman ho gaya. World Inequality Lab ke Thomas Piketty aur Lucas Chancel ne apni report mein dikhaya ki aadhunik Bharat mein daulat ki asamanta British Raj ke daur se bhi zyada ho gayi hai, jise unhone ==Billionaire Raj== ka naam diya.

Aakdon ke mutabiq desh ki top 1% aabadi ke paas lagbhag 40% se zyada daulat jama ho chuki hai, jabki neeche ki 50% janta ke paas sirf 6.5% daulat bachi hai. Isse ek "K-shaped" arthvyavastha ban gayi hai: bade corporate aur digital startup ke malik ameer hote ja rahe hain, jabki asangathit majdoor ki asal aamdani mehngai ke aage wahi thami hui hai.

[[link:Paper 1 Stratification: Piketty ke is vishleshan ko Karl Marx ke "Law of Capitalist Accumulation" aur "Reserve Army of Labour" se connect karo.]]

### Relative Deprivation Aur Aspiration Ka Takrav

Samajshastri [[thinker:Robert K. Merton]] ne reference group theory mein samjhaya tha ki log apni sthiti ki tulna doosron se karte hain. W.G. Runciman ne bataya ki jab logon ko lagta hai ki unhe wo sab milna chahiye jo doosron ke paas hai par mil nahi raha, to ==Relative Deprivation== paida hota hai.

Smartphone aur saste internet ne gaon ke jhopde tak ameer shehari zindagi ke sapne pahuncha diye hain. Lekin jab degree lene ke baad bhi achhi naukri nahi milti, to yeh bhedbhav yuvaon mein gahra niraashapan, gussa aur jaati-dharmiya tanav paida karta hai.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Informal Kaam Ka Dabdaba', text: '90% se zyada log asangathit kshetra mein majdoor' },
      { label: 'Top 1% Ka Munafa', text: 'Billionaires ke paas 40%+ rashtriya daulat jama' },
      { label: 'Social Media Ka Sapna', text: 'Mobile par chamakdar lifestyle dekhkar ummeedein badhin' },
      { label: 'Relative Deprivation', text: 'Naukri na milne se subaltern yuvaon mein gussa aur tanav' },
    ],
  },
  {
    kind: 'md',
    body: `## Jaati, Varg Aur Gender: Vanchana Ka Chakravyuh

Bharat mein garibi sirf aarthik kami nahi hai; yeh jaati aur patriarchy ke taane-baane se poori tarah juri hui hai.

### Jaati Aur Class Ka Aapsi Sambandh

Samajshastri [[thinker:Jan Breman]] ne Gujarat ke khetihar majdooron par 50 saal tak field study karke *Footloose Labour* kitaab likhi. Unhone dikhaya ki zameen se bedakhal khetihar majdoor (jo mukhyatatah Dalit aur Adivasi hain) eent-bhatton aur khet-khalihan mein ghoomte rehte hain. Contractor (mukadam) unhe peshgi karz (advance) dekar bandhua majdoor jaisi sthiti mein phansa leta hai.

Iske alawa, private naukriyon mein bhi jaati bhedbhav qayam hai. Samajshastri [[thinker:Sukhadeo Thorat]] aur Paul Attewell ne lakho identical resumes private companiyon ko bheje jisme sirf naam badla gaya tha. Result yeh nikla ki savarna naam wale candidates ko interview call aane ke chances Dalit candidates se kahin zyada the. Isse saabit hota hai ki modern corporate sector mein bhi caste cultural capital gatekeeper ka kaam karta hai.

[[eg:Gaon mein Dalit parivaron ke paas kheti ki zameen na hone ke kaaran unhe dominant caste zameendaron se karz lena padta hai, jisse unki agli peedhi bhi khetihar majdoori mein bandhi rehti hai.]]

### Garibi Ka Strikaran Aur Pandemic Ka Asar

Samajshastri [[thinker:Ashwini Deshpande]] aur arthshastri [[thinker:Bina Agarwal]] ne Bharat mein ==Feminization of Poverty== ko ujagar kiya hai. Mahilaon ke paas sampatti ka ghor abhav hai: desh mein kheti karne wali zameenon mein se 14% se bhi kam par mahilaon ka kanooni naam hai. Zameen na hone se unhe kheti ke liye bank se loan nahi milta.

COVID-19 pandemic ke baad yeh asamanta aur gahri ho gayi. Ashwini Deshpande ke empirical data ne dikhaya ki lockdown ke dauran mahilaon ki naukriyan purushon ki tulna mein zyada tezi se chheen li gayin, aur unki wapsi behad dheemi aur lachar rahi. Mahilaon ko unpaid care work—paani bharna, khana banana, buzurgon ki sewa—mein itna samay lagana padta hai ki unke paas padhai ya nayi skill seekhne ka koi samay (time poverty) nahi bachta.`,
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Yaad Rakho: Ashwini Deshpande Ke Teen Traps',
    body: 'Ashwini Deshpande mahilaon ki kam aamdani ke teen kaaran batati hain: "Sticky Floor" (sabse neeche ke asangathit kamo mein phansa rehna), "Care Penalty" (gharelu bina vetan ka kaam), aur "Distress Work" (sirf tab kaam dhoondhna jab pariwar bhookha mar raha ho).',
  },
  {
    kind: 'keyTerm',
    term: 'Capability Deprivation',
    meaning: 'Amartya Sen ka concept jisme garibi ko aamdani ki kami ki jagah buniyaadi manav aazadi aur kshamataon ke chhinne ke roop mein dekha jata hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Multidimensional Poverty Index (MPI)',
    meaning: 'Alkire-Foster aur NITI Aayog ka aisa framework jo swasthya, shiksha aur jeevan star ke 12 sanketakon par garibi ka aakalan karta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Relative Deprivation',
    meaning: 'W.G. Runciman ka samajshastriya vichar jisme log doosron ke rutbe aur daulat se tulna karke apne andar anyay aur kami mehsoos karte hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Feminization of Poverty',
    meaning: 'Aisa dhancha jisme zameen na hone aur bina vetan ke gharelu shram ke kaaran mahilaayein purushon ke mukable zyada garibi jhelti hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Footloose Labour',
    meaning: 'Jan Breman ka term jo asangathit, beghar aur karz mein dube un khetihar majdooron ke liye hai jo kaam ki talaash mein dar-badar bhatakate hain.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karo: Garibi Ko Sirf Sarkari Aakdon Tak Seemit Mat Rakho',
    body: 'Yeh galti mat karo ki calorie ya ration milne se garibi khatam ho gayi. Samajshastriya uttar mein jaati bhedbhav, zameen ki kami aur mahilaon par unpaid care burden ko samjhao.',
  },
  {
    kind: 'answerBox',
    intro:
      'Bharat mein garibi, vanchana aur asamanta par ek shreshth samajshastriya model answer ke mukhya aadhar:',
    points: [
      'Calorie-based line (Tendulkar) se aage badhkar Amartya Sen ki Capability Deprivation aur NITI Aayog ke MPI ke 12 indicators par garibi ko samjhao.',
      'Thomas Piketty aur Lucas Chancel ke "Billionaire Raj" ka data do: top 1% ke paas 40% daulat jama ho chuki hai jabki aam janta asangathit shram mein phas gayi hai.',
      'Robert K. Merton aur W.G. Runciman ke Relative Deprivation se dikhao ki aspirational mobile screen aur unemployment ka takrav samajik aakrosh paida karta hai.',
      'Jan Breman ke "Footloose Labour" aur Sukhadeo Thorat ke hiring audit studies se saabit karo ki jaati bhedbhav market mein bhi barqarar hai.',
      'Ashwini Deshpande aur Bina Agarwal ke hawale se "Feminization of Poverty" aur post-pandemic mahila shram ki lachari par baat karo.',
    ],
    conclusion:
      'Garibi mitaane ke liye freebies nahi, balki behtar public health, standard quality shiksha, zameen ka pattan aur shram ka aupcharikikaran (formalization) zaroori hai.',
  },
]
