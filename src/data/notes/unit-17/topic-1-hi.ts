import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 17.1 — Bharat Mein Lineage Aur Descent',
  center: 'Lineage Aur Descent (Bharat)',
  subtitle: 'Descent vs Alliance • Pitravanshi Ekta • Matrivanshi System Aur Male Authority',
  branches: [
    {
      title: 'Descent vs Alliance Theory',
      color: 'lavender',
      thinkers: ['Meyer Fortes', 'E.E. Evans-Pritchard', 'Claude Lévi-Strauss', 'Louis Dumont'],
      points: [
        'Descent theory: Khoon aur unilineal vansh ke zariye property, status aur dharmik niyam peedhi-dar-peedhi chalte hain',
        'Alliance theory: Shaadi ke gathbandhan aur rishton ka adan-pradan do parivaron ko aapas mein jodta hai',
        'North India mein pitravanshi descent haavi hai, jabki South India mein cross-cousin alliance ka bolbala hai',
        'Dumont ka kehna tha ki Bharat ke kinship ko bina caste aur alliance samjhe sirf African tribal model se nahi samjha ja sakta',
      ],
    },
    {
      title: 'Pitravanshi Ekta Aur Purkhe',
      color: 'yellow',
      thinkers: ['M.N. Srinivas', 'T.N. Madan', 'A.M. Shah', 'Patricia Uberoi'],
      points: [
        'Lineage (Vansh/Khandan): 5 se 7 peedhiyon tak ka saaf genealogical hisaab jahan har purkhe ka naam yaad hota hai',
        'Clan (Gotra): Ek kaalpanik ya rishi purkhe se judi pehchan jo shaadi ke exogamy niyamon ko nirdharit karti hai',
        'Purkhon ki pooja: Pinda-daan aur Shraddha ke karmakand sabhi bhaiyon ko ek naitik aur aadhyaatmik daayre mein baandhte hain',
        'Mitakshara coparcenary: Janm lete hi bete ko pushtaini zameen mein barabar ka hissa milta hai',
      ],
    },
    {
      title: 'Matrilineal Systems: Khasi Aur Nair',
      color: 'mint',
      thinkers: ['Tiplut Nongbri', 'Bina Agarwal', 'Kathleen Gough', 'Robin Fox'],
      points: [
        'Khasi Kur aur Kpoh: Maa ke vansh se pehchan chalti hai aur sabse chhoti beti (Ka Khadduh) pushtaini ghar sambhalti hai',
        'Nair Tharavad: Kerala ka matrilineal joint parivar jahan zameen behno aur unke bachhon ke beech rehti hai',
        'Matrilineal Puzzle: Maa ke vansh ka matlab auraton ka raaj (matriarchy) nahi hai; aakhiri faisla mama ka hota hai',
        'Karanavan (Nair) aur Kni (Khasi): Kanooni aur aarthik dabdaba hamesha purush rishtedaaron ke haath mein hi rehta hai',
      ],
    },
    {
      title: 'Modern Badlaav Aur Kanoon',
      color: 'pink',
      thinkers: ['Hindu Succession Amendment 2005', 'Reetika Khera', 'Flavia Agnes'],
      points: [
        'HSAA 2005 ne betiyon ko bhi Mitakshara coparcenary mein beto ke barabar hissa de diya',
        'Zameeni sach: Gaon ki Khap aur samaaj betiyon par bhaiyon ke haq mein zameen chhodne ka dabav banata hai',
        'Matriliny ka khatma: Kerala ke 1975 kanoon ne Tharavad ki sansthagat zameen ko baant kar chhota kar diya',
        'Migration aur shehrikaran ne pushtaini khaan-daano ko akele nuclear gharaano mein baant diya hai',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u07-01-kinship-zones-karve.webp',
    alt: 'P2 Unit 7 infographic: Regional Kinship Zones of India — Regional Kinship Diversity & Descent Systems in India',
    caption: 'Regional Kinship Diversity & Descent Systems in India: Bharat ke alag-alag ilaaqon mein pitravanshi aur matrivanshi parivaron ka bhent.',
    credit: 'UPSC OWL Sociology Visual Series',
  },
  {
    kind: 'md',
    body: `## Lineage Aur Descent: Buniyaadi Samajik Sidhant

Aasaan shabdon mein samjho: ==descent== ka matlab hai yeh tay karna ki aap ka janm kis parivar ya vansh mein hua hai aur aapko kaun se adhikar pushtaini roop se milenge. Wahi ==lineage== (vansh ya khaan-daan) aise rishtedaaron ka ek saakshaat samooh hota hai jo apne sabhi pichhle purkhon ka naam peedhi-dar-peedhi gina sakte hain.

Samajshastra ke andar kinship ko samajhne ke do bade theoretical school aapas mein takraate hain:

1. **Descent Theory (British Functionalism):** [[thinker:Emile Durkheim]], Meyer Fortes aur Evans-Pritchard jaise vidwano ne Africa ki tribes ka adhyayan karke bataya ki *unilineal descent groups* (sirf pita ya sirf maa ke vansh wale samooh) samaj ki aarthik zameen aur raajneetik taqat ko sambhalte hain. Yahan khaan-daan ek permanent corporation ki tarah hota hai jo naye sadasyon ko janm se jodta hai aur purkhon ki aatmaon ko poojta hai.
2. **Alliance Theory (French Structuralism):** Claude Lévi-Strauss aur unke baad Bharat mein Louis Dumont ne yeh saaf kiya ki kinship sirf khoon ke rishton ka hisaab nahi hai. Asli samaj tab banta hai jab do alag-alag vansh aapas mein *shaadi ke gathbandhan* banate hain. Betiyon ka adan-pradan aur rishtedaari samajik taalmeyl aur solidarity banati hai [[link:Paper 1 ↔ Paper 2 Link: Descent Theory vs Alliance Theory]].

| Samajik Pehlu | Descent Theory (Fortes, Evans-Pritchard) | Alliance Theory (Lévi-Strauss, Dumont) |
| :--- | :--- | :--- |
| **Mukhya Rishta** | Consanguineal (khoon aur pita-bachhe ka rishta) | Affinal (shaadi aur sasural ke gathbandhan) |
| **Buniyaadi Unit** | Ek-vanshiya corporate samooh (Lineage/Khandan) | Shaadi se jude hue clans ka aapsi network |
| **Zameen Aur Adhikar** | Pushtaini vansh ke hisaab se seedhe milte hain | Vivah ke daan aur upharon ke zariye tay hote hain |
| **Bharat Mein Roop** | North India ka pitravanshi Vansh aur Gotra | South India mein cross-cousin marriage ke gathbandhan |`,
  },
  {
    kind: 'compare',
    leftTitle: 'Lineage (Vansh / Khandan)',
    rightTitle: 'Clan (Gotra)',
    rows: [
      {
        aspect: 'Purkhon Ki Jaankaari',
        left: 'Demonstrated descent: 5 se 7 peedhiyon tak ke asal purkhon ka naam zabaani yaad hota hai',
        right: 'Stipulated descent: Ek kaalpanik rishi ya mukhya purkhe se shuruat maani jaati hai',
      },
      {
        aspect: 'Sajhi Sampatti',
        left: 'Saath milkar kheti ki zameen aur makaan par pushtaini hissa aur sootak share karte hain',
        right: 'Koi sajhi zameen nahi hoti; yeh sirf shaadi ke baharvivah (exogamy) ko tay karta hai',
      },
      {
        aspect: 'Dharmik Karmakand',
        left: 'Lineage ke mandir par Shraddha, Pinda-daan aur kuldevi ki pooja milkar ki jaati hai',
        right: 'Rishi ke naam par gotra hota hai, par rozmarrah ke koi saanjhe karmakand nahi hote',
      },
      {
        aspect: 'Aapas Ki Doori',
        left: 'Aamtaur par ek hi gaon ya aas-paas ke ilaaqe mein rehne wali aamne-saamne ki biradari',
        right: 'Hazaron gaon aur shehron mein phaila hua ek vishaal sanskritik daayra',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Uttar Bharat Mein Pitravansh Aur Purkhon Ki Ekta

North India ke dehaati samaj mein pitravansh sirf rishton ka naam nahi hai, balki gaon ki zameen aur dabdabe ka kanoon hai. Har ladka jab paida hota hai toh uska naam, uski jaati, gaon ki zameen aur samaaj mein izzat seedhe uske pita ke vansh se jud jaati hai.

Is pitravanshi vyavastha ke chaar mukhya aadhar hain:

* **Purkhon Ki Pooja Aur Pinda-Daan:** [[thinker:MN Srinivas]] ne Coorg samaj ke *Okka* mein aur T.N. Madan ne Kashmiri Panditon ke *Kotra* mein dikhaya ki mare hue purkhon ki pooja (Shraddha) zinda bhaiyon ko ek dhage mein piro kar rakhti hai. Janm aur maut ke waqt poora khaan-daan *sootak* (ritual pollution) jhelta hai. Pitron ko moksha dilane ke liye bete (*putra*) ka hona dharmik roop se zaroori maana gaya.
* **Mitakshara Coparcenary:** Hindu kanoon ke Mitakshara niyam ke mutabiq, ladke ko paida hote hi pita aur dada ki pushtaini zameen mein birth-right hissa mil jata hai [[eg:Haryana ke kisan parivar mein pota paida hote hi zameen ke hisse ka kanooni daavedar ban jaata hai]].
* **Sapinda Aur Gotra Exogamy:** Apne vansh ki pavitrata bachane ke liye Sapinda niyam ke tehat pita ki taraf se 7 peedhiyan aur mata ki taraf se 5 peedhiyan chhod kar hi shaadi ki ja sakti hai.
* **Gaon Ka Bhaichara Aur Khap:** Ek hi gotra ke ladke-ladki aapas mein bhai-behen maane jaate hain. Western UP aur Haryana mein poore gaon ko ek hi khaan-daan maankar gaon ke andar shaadi par mukammal pabandi hoti hai [[eg:Khap Panchayaton dwara same-gotra shaadiyon par himsatmak pabandi lagana]].`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Janm Ka Adhikar', text: 'Bete ka vansh mein janm lete hi pushtaini zameen mein coparcenary hissa tay ho jata hai' },
      { label: 'Sapinda Niyam', text: '7 peedhi pita aur 5 peedhi mata ke niyam se shaadi ki bahari seemaen baandhi jaati hain' },
      { label: 'Karta Ka Niyantran', text: 'Khaan-daan ka sabse bada purush zameen aur kheti ke saare sanyukta faisle leta hai' },
      { label: 'Shraddha & Pinda', text: 'Pinda-daan ke karmakand se mrit purkhon aur zinda bhaiyon ka sanyukta rishta mazboot rehta hai' },
    ],
  },
  {
    kind: 'md',
    body: `## Matrilineal Vyavastha: Khasi Aur Nair Samaj Ka Zameeni Sach

Bharat ke matrivanshi samaj UPSC ke sabse pasandeeda vishayon mein se ek hain, lekin yahan aksar chhatra galati kar baithte hain. ==Matriliny== ka seedha matlab yeh hai ki vansh, kul aur sampatti mata ke zariye aage badhegi, lekin iska yeh bilkul matlab nahi hai ki auraton ke haath mein raajneetik hukumat hoti hai.

Anthropologist Robin Fox ne ise ==Matrilineal Puzzle== kaha tha: vansh aur zameen aurat ke naam se chalti hai, par kanooni aur samajik hukumat hamesha mardon ke haath mein hi rehti hai.

### 1. Meghalaya Ka Khasi Samaj
* **Kur Aur Ka Khadduh:** Khasi samaj mein vansh maa ke parivar (*Kur*) se chalta hai jo aadi-mata (*Ka Iawbei*) se juda hota hai.
* **Sabse Chhoti Beti Ka Haq:** Khasi parampara ke mutabiq parivar ka mukhya makaan aur pushtaini zameen sabse chhoti beti (==Ka Khadduh==) ko milti hai. Wahi boorhe maa-baap ki dekhbhaal karti hai aur dharmik rasmein sambhalti hai.
* **Mama (Kni) Ki Taqat:** Sociologist Tiplut Nongbri batati hain ki Ka Khadduh sirf pushtaini sampatti ki custodian (dekhbhaal karne wali) hoti hai, absolute maalik nahi. Asli aarthik faisle aur zameen bechne ki manzoori uska mama (==Kni==) deta hai, aur gaon ki Dorbar Shnong panchayat mein sirf purush baithte hain [[eg:Khasi aurat ke naam par zameen hone ke bawajood gaon ki raajneeti mein mardon ka ekchhatra dabdaba rehna]].

### 2. Kerala Ka Nair Tharavad
* **Tharavad Ki Sajhedari:** Kerala ke Nair parivar ek vishaal matrivanshi joint estate mein rehte the jise ==Tharavad== kaha jaata tha. Isme maa, uske bete-betiyan aur unki betiyon ke bachhe ek chhat ke neeche rehte the.
* **Sambandham Vivah:** Nair auraton ka vivaah Sambandham kehlaata tha jisme pati sirf raat ko milne aata tha aur subah wapas apne maa ke ghar chala jaata tha.
* **Karanavan Ka Shasan:** Tharavad ki hazaaron acre zameen, fasal aur kanooni mamlo par sabse bade mama (==Karanavan==) ka poora niyamakadhikar hota tha. Kathleen Gough ne saabit kiya ki yeh vyavastha mama se bhaanjo ke beech sampatti ka batwara thi, jisme faisle lene ki taqat hamesha purush ke paas hi rahi.`,
  },
  {
    kind: 'keyTerm',
    term: 'Lineage (Vansh / Khandan)',
    meaning: 'Aisa ek-vanshiya samooh jiske sabhi sadasya apne aamne-saamne ke purkhon ka kramvaar naam aur genealogical rishta saaf-saaf bata sakte hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Descent vs Alliance',
    meaning: 'Descent vansh aur pushtaini property ki niyamawali hai, jabki alliance do alag parivaron ke beech shaadi ke pakke gathbandhan par zor deta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Ka Khadduh',
    meaning: 'Khasi matrivanshi parampara mein sabse chhoti beti jo pushtaini chulha aur sampatti sambhalti hai, par mama ki salah par nirbhar rehti hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Karanavan',
    meaning: 'Nair Tharavad ka sabse senior purush (mama) jo poori parivarik zameen, hisaab-kitab aur faislo ka akele maalik aur sanchalak hota tha.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Matriliny Matriarchy Nahi Hai',
    body: 'UPSC ke answers mein kabhi bhi matriliny ko matriarchy mat likhna. Matriliny ka matlab sirf vansh aur zameen ka maa ke zariye aage badhna hai. Matriarchy ka matlab mahilaon ka raajneetik shasan hota hai. Khasi aur Nair dono samaajon mein faisla lene ki aakhiri kanooni taqat mama ya bhai ke paas hi thi.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Dharwad Nahi, Tharavad!',
    body: 'Kerala ke matrivanshi ghar ko hamesha Tharavad likho. Karnataka ke shehar Dharwad ke sath ise mix mat karna; aisi galati par examiner seedhe number kaatta hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Hindu Succession Amendment Act 2005',
    body: '2005 ke kanooni badlaav ne Hindu Succession Act mein betiyon ko bhi Mitakshara coparcenary mein beto ke barabar janm se hissedar bana diya. Par Bina Agarwal ke field studies dikhate hain ki samajik dabav ke chalte zyadatar ladkiyan bhaiyon ke haq mein apna hissa chhod deti hain.',
  },
  {
    kind: 'answerBox',
    intro: 'UPSC 15-mark sawal: "Gramin Uttar Bharat mein pitravansh aur purkhon ki ekta sampatti aur vivah ke niyamon ko kaise nirdharit karti hai?" Answer ka flow is tarah rakhein:',
    points: [
      'Pitravansh ko define karo jahan vansh aur pehchan pita ke purkhon se chalti hai aur khaan-daan ek sthayi sanstha banta hai.',
      'Mitakshara coparcenary rights samjhao jahan ladke ko janm se zameen ka haq milta hai jabki ladki ko Paraya Dhan maana jaata hai.',
      'Purkhon ki ekta (Shraddha, Pinda-daan aur sootak) dikhao jo bhaiyon ko aapas mein naitik roop se baandh kar rakhti hai.',
      'Sapinda exogamy aur gotra/gaon ke baharvivah ke kade niyamon par charcha karo jo auraton ki aazadi par samajik pehra baandhte hain.',
      'HSAA 2005 ke kanooni adhikar aur gaon ki Khap panchayaton ke zameeni virodh ka aapas mein takraav darj karo.',
    ],
    conclusion: 'Nishkarsh mein likhein ki kanooni taur par betiyon ko barabari mil chuki hai, lekin dehaati Bharat mein purkhon ki pavitrata aur pitravanshi soch aaj bhi zameen aur vivah ke faislo par bhaari padti hai.',
  },
]

export const topic1Hi: TopicLangContent = {
  summary:
    'Lineage aur descent pariksha ki drishti se Bharatiya samaj ke sabse buniyaadi stambh hain. Descent yeh nirdharit karta hai ki ek vyakti kis kul ka hissa hai aur rights kaise aage badhte hain, jabki lineage zameen, purkhon ki pooja aur shaadi ke niyam tay karti hai. Chahe Uttar Bharat ka pitravanshi khaan-daan ho ya Meghalaya ke Khasi aur Kerala ke Nair jaise matrivanshi udharan, descent system power ko organise karta hai bina mardon ke adhikar ko khatam kiye.',
  mindMap,
  sections,
}
