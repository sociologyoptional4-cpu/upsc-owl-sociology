import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 17.2 — Bharat Mein Kinship Systems Ke Prakar',
  center: 'Kinship Systems Ke Prakar',
  subtitle: 'Karve Ke Chaar Zones • North vs South Tulna • Dumont Ka Alliance Critique • Badalte Bandhan',
  branches: [
    {
      title: 'Karve Ke Chaar Kinship Zones',
      color: 'lavender',
      thinkers: ['Iravati Karve', 'Louis Dumont', 'T.N. Madan', 'Patricia Uberoi'],
      points: [
        'Northern Zone (Indo-Aryan): Sapinda/Gotra exogamy, gaon ka baharvivah, cousin vivah par sakht pabandi, hypergamy',
        'Southern Zone (Dravidian): Cross-cousin vivah, mama-bhaanji ka rishta, barabari ka gathbandhan, gaon ke andar shaadi sambhav',
        'Central Zone (Transitional): Maharashtra/Gujarat jahan North ke gotra niyam aur South ke cross-cousin vivah ka mishran hai',
        'Eastern Zone (Tribal): Santhal, Munda aur Khasi jahan vadhu-moolya (bride-price), youth dormitories aur matriliny milti hai',
      ],
    },
    {
      title: 'North vs South Structural Antar',
      color: 'yellow',
      thinkers: ['Iravati Karve', 'M.N. Srinivas', 'Pauline Kolenda', 'Leela Dube'],
      points: [
        'Vivah Ke Niyam: North mein negative rules (kisse shaadi NAHI karni); South mein positive rules (kisse shaadi karni chahiye)',
        'Uphaar Aur Daan: North mein ek-tarfa dahej aur Kanyadan; South mein dono parivaron ke beech barabari ka len-den',
        'Beti Ka Sthaan: North mein beti Paraya Dhan aur ghoonghat mein rehti hai; South mein beti maayke ke paas aur surakshit rehti hai',
        'Bhoogolik Doori: North mein door gaon mein rishta khoja jaata hai; South mein jaane-pehchane rishtedaaron mein hi rishta hota hai',
      ],
    },
    {
      title: 'Dumont Ka Alliance Critique',
      color: 'mint',
      thinkers: ['Louis Dumont', 'Claude Lévi-Strauss', 'Nur Yalman', 'Anthony Good'],
      points: [
        'Karve Ki Aalochna: Dumont ne kaha ki Karve ne South ke kinship ko sirf rivaajon ki list bana diya, uska structure nahi samjha',
        'Affinity As A Value: Dravidian bhashaon mein shaadi ka rishta (affinity) peedhi-dar-peedhi virasat ke roop mein chalta hai',
        'Bifurcate Merging: Samaj ko do hisson mein baanta jaata hai—Parallel kin (bhai-behen) aur Cross kin (hone wale in-laws/pati-patni)',
        'Peedhiyon Ka Rishta: Do vanshon ke beech shaadi ka gathbandhan ek peedhi par khatam nahi hota, dohrata rehta hai',
      ],
    },
    {
      title: 'Aadhunikta Aur Parivarik Bandhan',
      color: 'pink',
      thinkers: ['Yogendra Singh', 'Patricia Uberoi', 'Jan Breman', 'Bina Agarwal'],
      points: [
        'Bhoogolik Doori: Shehron aur videsh mein naukri ke chalte aamne-saamne ki rozana mulaqatein kam ho gayi hain',
        'Digital Kinship: Family WhatsApp groups aur video calls ne door rehne wale parivaron ko aapas mein jode rakha hai',
        'Dahej Ka Sanskritization: South aur tribal ilaaqon mein bhi ab North ki tarah cash dahej aur dikhave ki shaadiyan shuru ho gayi hain',
        'Functional Jointness: Akele flat mein rehne ke bawajood bachhon ki dekhbhaal ke liye dada-dadi par nirbharta barkarar hai',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u07-01-kinship-zones-karve.webp',
    alt: 'P2 Unit 7 infographic: Regional Kinship Zones of India — Regional Kinship Diversity & Descent Systems in India',
    caption: 'Regional Kinship Zones of India: Iravati Karve ka chaar kshetriya vargikaran jo Uttar ke pitravanshi baharvivah ko Dakshin ke aapsi rishton se jodta hai.',
    credit: 'UPSC OWL Sociology Visual Series',
  },
  {
    kind: 'md',
    body: `## Iravati Karve Ke Chaar Kinship Zones

Aasaan shabdon mein samjho: poore Bharat mein rishtedaari aur shaadi ke niyam ek jaise nahi hain. Kis rishtedaar ko kya keh kar bulana hai, kisse shaadi ho sakti hai aur kis se shaadi par paap mana jayega, yeh sab ilaaqe aur bhasha par nirbhar karta hai.

Bhartiya samajshastra ki agradoot ==Iravati Karve== ne apni mashhoor kitaab *Kinship Organization in India* (1953) mein bhasha, granthon aur fieldwork ke aadhar par Bharat ko chaar mukhya kinship zones mein baanta:

1. **Northern Kinship Zone (Indo-Aryan Bhasha Parivar):** Punjab, Haryana, UP, Bihar, Rajasthan aur Kashmir ka ilaaqa. Yahan pitravansh aur pitrasatta behad sakht hoti hai. Vivah ke niyam ==negative rules== par chalte hain—yani yeh bataya jaata hai ki aapko kis-kis se shaadi *nahi* karni hai (Gotra, Pravara, Sapinda aur poore gaon ka baharvivah). Sabhi cousins se shaadi haram maani jaati hai.
2. **Southern Kinship Zone (Dravidian Bhasha Parivar):** Tamil Nadu, Kerala, Karnataka aur Andhra/Telangana. Yahan shaadi ke niyam ==positive rules== par chalte hain—yani pehle se bane rishton ke andar hi shaadi ko badhava diya jaata hai. Fufere-mamere bhai-behan (cross-cousin) aur mama-bhaanji ki shaadi sabse uttam maani jaati hai.
3. **Central Kinship Zone (Transitional Ilaaqa):** Maharashtra, Gujarat, Madhya Pradesh aur Odisha. Yeh North aur South ke beech ka pul hai. Yahan dono ka ajeeb sangam milta hai. Jaise Maharashtra ke Maratha log North ki tarah gotra exogamy maante hain, par South ki tarah mama ki beti se shaadi kar lete hain [[eg:Maratha parivar mein gotra chhod kar mama ki beti ko bahu banana aam baat hai]].
4. **Eastern Kinship Zone (Adivasi Bhasha Parivar):** Chotanagpur ke tribal ilaaqe (Santhal, Munda, Oraon) aur Northeast ke pahaadi ilaaqe (Khasi, Garo). Yahan dahej ki jagah vadhu-moolya (*Pon*), yuva grih (*Ghotul/Dhumkuria*), aur matrivansh ke ahem lakshan milte hain jahan auraton ki aarthik sthiti mazboot hoti hai.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Northern Kinship Zone (Indo-Aryan)',
    rightTitle: 'Southern Kinship Zone (Dravidian)',
    rows: [
      {
        aspect: 'Vivah Ke Niyam',
        left: 'Negative niyam: Chaar gotra aur gaon chhod kar shaadi; kisi bhi cousin se shaadi ko paap maana jaata hai',
        right: 'Positive niyam: Cross-cousin (mamere/fufere) aur mama-bhaanji ki shaadi ko sabse aadarsh maana jaata hai',
      },
      {
        aspect: 'Rishtedaari Ki Bhasha',
        left: 'Descriptive: Maayke aur sasural ke rishton ke liye alag shabdon ka istemal (Chacha vs Mama; Saas vs Ma)',
        right: 'Classificatory: Ek jaise rishtedaaron ko ek hi naam se bulana aur affines ko saaf alag karna',
      },
      {
        aspect: 'Len-Den Aur Dahej',
        left: 'Asymmetrical: Ladki dene wale hamesha neeche rehte hain aur ek-tarfa dahej aur upharon ka bojh sehte hain',
        right: 'Symmetrical: Dono parivaron ke beech barabari ka len-den hota hai; koi ek parivar bada ya chhota nahi banta',
      },
      {
        aspect: 'Beti Ka Rutba',
        left: 'Beti ko Paraya Dhan maana jaata hai; sasural mein lamba ghoonghat aur maayke se taalluq kamzor pad jata hai',
        right: 'Beti jaane-pehchane rishtedaaron mein jaati hai; maayke se lagatar aana-jaana aur azaadi bani rehti hai',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Louis Dumont Ka Alliance Model Aur Karve Ki Aalochna

French scholar ==Louis Dumont== ne apni kitaab *Affinity as a Value* (1983) mein Iravati Karve ke adhyayan ki taareef karte hue ek bada sawal uthaya. Dumont ka kehna tha ki Karve ne Dakshin Bharat ke kinship ko sirf ajeeb-o-gareeb riwaajo ki list bana diya, par uske pichhe ka buniyaadi samajik tarka nahi samjha.

Dumont ne teen mukhya sidhant diye:

* **Affinity Ek Sthayi Virasat Hai:** North India mein shaadi do anjaan parivaron ke beech ek baar ka judav hoti hai. Lekin South India mein shaadi ka rishta (*affinity*) ek sthayi virasat hai jo peedhi-dar-peedhi chalti hai. Pita ke samdhi bete ke bhi rishtedaar bane rehte hain.
* **Bifurcate Merging Shadavali:** Dravidian bhashaon mein poore samaj ko do saaf hisson mein baant diya jaata hai:
  1. *Parallel Kin (Khoon Ke Sadasya):* Pita, Chacha/Tau, Mausi, aur unke sabhi bachhe bhai-behen kehlaate hain. Inke beech shaadi poori tarah haram hoti hai.
  2. *Cross Kin (Shaadi Wale Rishtedaar):* Mama, Bua, aur unke sabhi bachhe (cross-cousins). Yeh sabhi aapas mein potential pati-patni ya in-laws maane jaate hain.
* **Descent Par Alliance Ki Jeet:** Dumont ne saabit kiya ki Dakshin Bharat mein cross-cousin shaadi koi aam pasand nahi hai; yeh do vanshon ke beech barson se chale aa rahe gathbandhan ko zinda rakhne ka structural rasta hai [[eg:Tamil parivar mein zameen aur rishta bahar na jaane dene ke liye mama-bhaanji ka vivah karna]].`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Parallel vs Cross Bantwara', text: 'Dravidian shabdavali sabhi rishto ko bhai-behen (parallel) aur samdhi/in-laws (cross) mein baant deti hai' },
      { label: 'Tay Shuda Vivah', text: 'Cross-cousins (fufere/mamere) ya mama-bhaanji ko aapas mein sabse aadarsh jodi maana jaata hai' },
      { label: 'Peedhiyon Ka Dohraav', text: 'Wahi do vansh peedhi-dar-peedhi aapas mein shaadi karke rishton ko pakka karte hain' },
      { label: 'Beti Ka Aadar', text: 'Beti paraye logon mein nahi jaati, balki maayke ke kareeb reh kar aarthik aur mansik shanti paati hai' },
    ],
  },
  {
    kind: 'md',
    body: `## Kya Kinship Ke Badalte Daur Mein Parivarik Bandhan Toot Rahe Hain?

Aaj kal yeh sawal aam ho gaya hai ki kya shehrikaran, akele flat ka culture aur daudti zindagi ne hamare parivarik rishto ko khatam kar diya hai? Puraane pashchimi vidwan William J. Goode ka maanna tha ki factory aur shehar aane se sanyukta parivar toot kar chhota nuclear family ban jayega.

Lekin Bharat ke samajshastriya adhyayan ek alag hi tasveer pesh karte hain:

### 1. Rishton Par Padne Wala Dabaav
* **Bhoogolik Doori:** MNCs aur software jobs ke chalte yuva Bangalore, Mumbai ya America chale jaate hain, jisse rozana ka uthna-baithna ab sirf saal mein ek baar tyoharon par simat gaya hai.
* **Apni Marzi Ka Vivah:** Inter-caste aur arranged-cum-love shaadiyon ke badhne se khaan-daan ke buzurgo ka aakhiri faisla lene ka dabdaba thoda kamzor hua hai.
* **Buzurgo Ka Akelapan:** Metro shehron ke chhote 2-BHK flaton mein jagah na hone ke karan buzurga gaon ya Tier-2 shehron mein akele rehne par majboor hain [[eg:Bharat ke shehron mein private senior citizen homes ki maang tezi se badhna]].

### 2. Rishton Ki Nayee Mazbooti (Functional Jointness)
* **Door Rehkar Bhi Sanyukta:** [[thinker:Yogendra Singh]] aur Patricia Uberoi ne dikhaya ki ghar alag hone ka matlab rishte tootna nahi hai. Beta door reh kar bhi har mahine paise bhejta hai, bimari mein daud kar aata hai aur zameen ke faisle milkar liye jaate hain.
* **Digital Rishtedaari:** WhatsApp family groups aur daily video calls ne do hazar kilometer door baithe parivar ko aamne-saamne khada kar diya hai.
* **Dahej Ka Phailav:** [[thinker:MN Srinivas]] ne darj kiya tha ki modern paisa aane se puraane aapsi len-den wale ilaaqon (South aur tribes) mein bhi ab North India ki tarah cash dahej aur dikhave ki shaadiyon ka shauk badh gaya hai.`,
  },
  {
    kind: 'keyTerm',
    term: 'Northern Kinship Zone',
    meaning: 'Indo-Aryan bhasha ka ilaaqa jahan chaar-gotra aur gaon ka baharvivah, dahej aur cousins se shaadi par sakht pabandi hoti hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Southern Kinship Zone',
    meaning: 'Dravidian bhasha ka ilaaqa jahan cross-cousin aur mama-bhaanji ki shaadi, aapsi barabari ka len-den aur classificatory shabdavali milti hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Bifurcate Merging',
    meaning: 'Rishtedaari ka aisa niyam jo bhai-behen jaise rishto ko shadiyogya rishton (cross-kin) se saaf alag kar deta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Kanyadan Asymmetry',
    meaning: 'Uttar Bharat ka woh shastriya niyam jahan ladki daan karne wala parivar ladki lene wale parivar se naitik aur samajik roop se hamesha jhuka rehta hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Karve vs Dumont Ka Farak',
    body: 'UPSC answers mein Karve ke descriptive bhashayi model ko Louis Dumont ke structural alliance model se zaroor compare karein. Karve ne Bharat ke ilaaqon ka gehra vivaran diya, jabki Dumont ne Dravidian kinship ko unilineal descent theory ke barabar ek mahan vishleshan banaya.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Parallel vs Cross Cousin Ka Dhyan Rakhein',
    body: 'Kabhi mat likhna ki South India mein kisi bhi cousin se shaadi ho sakti hai. Do bhaiyon ke bachhe ya do behno ke bachhe (parallel cousins) aapas mein sage bhai-behen maane jaate hain aur unki shaadi poori tarah mana hoti hai. Sirf bhai aur behan ke bachho (cross-cousins) mein hi shaadi hoti hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Dahej Ka Sanskritization',
    body: 'M.N. Srinivas ka yeh mudda yaad rakhein: modern market ke aane se Dakshin Bharat aur adivasi samajon mein bhi bride-price ki jagah gair-barabar cash dahej ka chalan tezi se phail chuka hai.',
  },
  {
    kind: 'answerBox',
    intro: 'Uttar aur Dakshin Bharat ke kinship zones par 20-mark sawal ka structure is tarah tay karein:',
    points: [
      'Iravati Karve ke bhashayi aur bhoogolik vargikaran se uttar shuru karein (Indo-Aryan vs Dravidian sanskriti).',
      'Vivah ke niyam compare karein: North ke negative rules (chaar gotra aur gaon exogamy) banam South ke positive rules (cross-cousin aur mama-bhaanji alliance).',
      'Shabdavali ka antar dikhayein: North ki descriptive shabdavali banam South ki classificatory bifurcate merging vyavastha (Louis Dumont).',
      'Len-den aur dahej ka flow: North ka ek-tarfa Kanyadan dahej banam South ka aapsi barabari ka len-den.',
      'Beti ki samajik sthiti: North mein Paraya Dhan aur ghoonghat ki pabandi banam South mein maayke ke kareeb rehne ki azaadi.',
    ],
    conclusion: 'Nishkarsh mein likhein ki aadhunik kanoon aur shehrikaran ne antar zaroor kam kiya hai, lekin kshetriya sanskritik dharohar aaj bhi vivah ke aadarsho ko nirdharit karti hai.',
  },
]

export const topic2Hi: TopicLangContent = {
  summary:
    'Bharat mein kinship systems bhasha, bhoogol aur rivaajon ke aadhar par behad vibhinn hain. Iravati Karve ne Bharat ko chaar bade kinship zones—Northern, Southern, Central aur Eastern—mein baant kar dikhaya ki kaise Uttar Bharat mein shadiyon ke niyam sakht baharvivah (exogamy) par chalte hain, jabki Dakshin Bharat mein aapsi gathbandhan (cross-cousin alliance) ko badhava milta hai. Louis Dumont ne ise structural alliance ka darja diya. Aaj ke daur mein shehrikaran aur digital media ke aane se parivarik bandhan badal rahe hain par toot nahi rahe.',
  mindMap,
  sections,
}
