import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 17.5 — Pitrasatta, Adhikar Aur Shram Ka Batwara',
  center: 'Pitrasatta Aur Shram Batwara',
  subtitle: 'Brahminical Patriarchy • Beej-Dharti Ka Prateek • Honour Killing • FLFP Aur Care Work',
  branches: [
    {
      title: 'Brahminical Patriarchy Aur Ambedkar',
      color: 'lavender',
      thinkers: ['Uma Chakravarti', 'B.R. Ambedkar', 'M.N. Srinivas', 'Kumkum Roy'],
      points: [
        'Chakravarti Ka Siddhant: Jaati hierarchy aur auraton par pabandi dono ek sath shuru hue taaki unche khaan-daan pavitra rahein',
        'Sexual Surveillance: Unchi jaati ki aurat agar neechi jaati ke mard se shaadi (Pratiloma) kar le toh poori jaati apavitra maani jaati hai',
        'Ambedkar Ka Vichar (1916): Endogamy ko bachane ke liye "surplus aurat" par Sati, bal vivah aur vidhwa pratha thopi gayi',
        'Dalit Aurat Ka Dukh: Unchi jaati ki aurat ko ghar mein band kiya gaya, jabki Dalit aurat ko khet mein majdoori aur shoshan jhelna pada',
      ],
    },
    {
      title: 'Beej Aur Dharti Ka Prateek',
      color: 'yellow',
      thinkers: ['Leela Dube', 'Patricia Uberoi', 'Bina Agarwal', 'Veena Das'],
      points: [
        'Beej-Kshetr Metaphor: Mard taqatwar "Beej" hai jo jaati, vansh aur naam deta hai; aurat sirf poshan dene wali "Dharti" hai',
        'Bachhe Par Haq: Bachha poori tarah pita ke vansh ka maana jaata hai; aurat ka apne bachhe par koi akele kanooni haq nahi hota',
        'Paraya Dhan Ka Dabaav: Beti ko shuru se sikhaya jaata hai ki yeh uska ghar nahi hai, use doosre ke khet banna hai',
        'Zameen Se Be-dakhal: Aurat ko sirf mitti maankar pushtaini kheti ki zameen mein hissa dene se saaf mana kar diya jaata hai',
      ],
    },
    {
      title: 'Honour Killing Aur Hinsa',
      color: 'mint',
      thinkers: ['Prem Chowdhry', 'Pratiksha Baxi', 'Shakti Vahini (2018)', 'Reetika Khera'],
      points: [
        'Izzat Ka Bojh: Khaan-daan aur jaati ki izzat aurat ki sharirik pavitrata aur shaadi ke niyam par laad di jaati hai',
        'Khap Panchayaten: Gaon ke chadh-baadhe mard inter-caste ya same-gotra shaadiyon par boycott aur maut ke farman sunate hain',
        'Dominant Caste Ka Dabdaba: Prem vivah ko mardana dabdabe par hamla maankar jode ki hatya karke khaan-daani roab banaya jaata hai',
        'Supreme Court Faisla: Shakti Vahini (2018) case mein court ne saaf kaha ki do baalig apni marzi se shaadi karne ke liye swatantra hain',
      ],
    },
    {
      title: 'FLFP Sankat Aur Care Economy',
      color: 'pink',
      thinkers: ['Hanna Papanek', 'Claudia Goldin', 'Bina Agarwal', 'Amrita Pande'],
      points: [
        'Status Production: Parivar mein thoda paisa aate hi aurat ko bahar kaam se hata liya jaata hai taaki samaj mein rutba dikhe',
        'Unpaid Care Work: NSSO Time Use Survey (2019) dikhata hai ki Bharatiya aurat roz 299 minute bina paise ka gharelu kaam karti hai',
        'Surrogacy Act 2021: Commercial surrogacy par rok laga kar sirf altruistic bacha diya, jisse gareeb aurat ki aamdani chhini',
        'Triple Talaq Ban (2019): Instant talaq ko criminal jurm banaya gaya, jisse mahilaon ke adhikar aur personal law par nayi bahas chhidi',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u07-02-indian-family-patriarchy.webp',
    alt: 'P2 Unit 7 infographic: Family, Marriage & Patriarchy in India — Joint Family Debate, Brahminical Patriarchy & Entitlements',
    caption: 'Family, Marriage & Patriarchy in India: Uma Chakravarti ka Brahminical Patriarchy, Beej-Dharti ka prateek aur unpaid care work ka asantulan.',
    credit: 'UPSC OWL Sociology Visual Series',
  },
  {
    kind: 'md',
    body: `## Uma Chakravarti Ka Brahminical Patriarchy Ka Siddhant

Aasaan shabdon mein samjho: Bharat mein pitrasatta (patriarchy) sirf mard ka aurat par dabdaba nahi hai. Asal mein Bharat mein pitrasatta ko jaati vyavastha (caste hierarchy) ko zinda rakhne ke liye banaya gaya tha. Jaati jitni unchi hogi, uski auraton par pabandiyan utni hi sakht hongi.

Feminist historian ==Uma Chakravarti== ne apne 1993 ke mashhoor lekh *Conceptualising Brahmanical Patriarchy in Early India* mein yeh saabit kiya ki jaati aur gender ki gulamie ek sath paida hui thin:

1. **Vansh Ki Pavitrata (Caste Purity):** Jaati ki shuddhata tabhi bachti hai jab shaadi jaati ke andar hi ho (*endogamy*). Agar kisi unchi jaati ki aurat ne neechi jaati ke purush se sambandh bana liya (jise shastron mein *Pratiloma* kaha gaya), toh us khaan-daan ki pavitrata hamesha ke liye mit jaati thi. Is dar se unchi jaati ki mahilaon ke sharir, chal-chalan aur aane-jaane par kade pehre baandh diye gaye.
2. **Shastriya Niyam (Manusmriti Aur Stridharma):** *Manusmriti* jaise granthon ne yeh niyam banaya ki aurat ko kabhi azaad nahi chhodna chahiye—bachpan mein pita, jawani mein pati aur budhape mein beta uska maalik hoga. *Pativrata* dharma aur *Sati* pratha ko dharmik roop dekar auraton ko yeh vishwas dila diya gaya ki pati ki gulami mein hi unka moksha hai.
3. **Dalit Mahilaon Ka Dukh:** Jahan ek taraf unchi jaati ki auraton ko char-deewari ke andar qaid kiya gaya, wahi doosri taraf Dalit aur pichhdi jaati ki auraton ko khet mein bina mazdoori ke mehnat karni padi aur unhe gaon ke kisan-zamindaro ke shoshan ka shikar banna pada [[eg:Feudal ilaaqon mein dabang zamindaro dwara landless Dalit khet-mazdoor mahilaon par shoshan karna]].

Yeh sidhant seedhe Dr. [[thinker:BR Ambedkar]] ke 1916 ke paper *Castes in India* se milta hai, jahan unhone bataya tha ki jaati endogamy ko banaye rakhne ke liye hi Sati, vidhwa pratha aur bal-vivah jaise zulm shuru kiye gaye the [[link:Paper 1 ↔ Paper 2 Link: Stratification and Gender]].`,
  },
  {
    kind: 'compare',
    leftTitle: 'Brahminical (Unchi Jaati) Pitrasatta',
    rightTitle: 'Dalit / Subaltern Zameeni Sach',
    rows: [
      {
        aspect: 'Mukhya Tareeqa',
        left: 'Char-deewari mein qaid, ghoonghat aur aane-jaane par pehra taaki jaati ki pavitrata bachi rahe',
        right: 'Khet aur sadak par majdoori; char-deewari aur pavitrata ke niyam se bahar rakha gaya',
      },
      {
        aspect: 'Vidhwa Aur Vivah',
        left: 'Vidhwa ka sir mundwana, jale hue kapde aur Sati pratha taaki zameen mein hissa na maang sake',
        right: 'Punar-vivah (Natra / Chadar Andazi) aam baat thi kyunki majdoori ke liye aurat ka hona zaroori tha',
      },
      {
        aspect: 'Dharmik Hathiyar',
        left: 'Pativrata, Stridharma aur tyaag ki taareef karke aurat ke dimaag ko ghulam banana',
        right: 'Sidha sharirik aur aarthik shoshan; unchi jaati ke mardon dwara dabdaba',
      },
      {
        aspect: 'Kaam Aur Labour',
        left: 'Aurat ko ghar ke andar baithana rutbe ki nishani maana gaya (Status Production)',
        right: 'Khet, factory aur gharon mein jhadu-pocha karke aarthik bojh uthana',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Leela Dube Ka "Beej Aur Dharti" (Beej-Kshetr) Siddhant

Anthropologist ==Leela Dube== ne apni kitaab *On the Construction of Gender* (1986) mein dikhaya ki kaise hamare samaj ke rozmarrah ke muhavare aur kheti ke prateek mard aur aurat ke gair-barabar rishte ko "natural" (kudrati) bana dete hain.

Hamare samaj mein sabse bada prateek hai ==Beej Aur Dharti== (*Beej-Kshetr*):

* **Mard Ka Beej (Seed):** Mard ke veerya ko ek taqatwar "Beej" maana jaata hai. Yeh beej hi tay karta hai ki fasal kis cheez ki hogi—yani paida hone wale bachhe ki jaati, gotra, khaan-daan, naam aur pushtaini virasat sirf aur sirf baap ke beej se tay hoti hai.
* **Aurat Ki Dharti (Kshetr / Mitti):** Aurat sirf ek nishkriya (passive) zameen ya mitti hai. Uska kaam sirf beej ko sechna, paalna aur 9 mahine bachhe ko pet mein rakhna hai. Us mitti ka bachhe ki jaati ya vansh par koi azaad asar nahi maana jaata.

### Is Prateek Ke Buraayein:
1. **Bachhe Par Pita Ka Poora Haq:** Kyunki beej mard ka hai, isliye fasal (bachha) bhi mard ki maani jaati hai. Talaq ya ladai hone par gaon ki panchayat bachhe ko maa se chheen kar baap ke parivar ko de deti hai, yeh keh kar ki mitti ka fasal par koi haq nahi hota [[eg:Gaon ki panchayaton mein algaav ke waqt bachho ki custody pita ke khaan-daan ko saupna]].
2. **Putra-Prapti Aur Paraya Dhan:** Vansh ke beej ko aage sirf beta badha sakta hai. Beti ko doosre ki amaanat (*Paraya Dhan*) maana jaata hai jo kisi doosre khaan-daan ke khet banne ke liye paida hui hai.
3. **Zameen Se Be-dakhal Karna:** Kyunki aurat sirf dharti hai, beej dene wali nahi, isliye bhai aur khaan-daan ke log use kheti ki pushtaini zameen mein hissa nahi lene dete, yeh keh kar ki aurat ko zameen dena parivar ko barbaad karna hai (Bina Agarwal).`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Jaati Endogamy Ka Niyam', text: 'Jaati ki shuddhata bachane ke liye jaati ke bahar shaadi par sakht pabandi lagayi jaati hai' },
      { label: 'Beej-Dharti Ka Prateek', text: 'Mard ko beej aur aurat ko sirf mitti bata kar vansh par pita ka ekchhatra dabdaba thehrate hain' },
      { label: 'Aurat Par Pehra', text: 'Ladkiyon ke milne-julne aur azaadi par pehra baandhte hain taaki Pratiloma shaadi na ho' },
      { label: 'Khap Ka Himsak Farman', text: 'Marzi se shaadi karne wale jode ko honour killing ke zariye maar kar jaati ka dabdaba dohrate hain' },
    ],
  },
  {
    kind: 'md',
    body: `## Honour Killing: Khaan-daan Ki Izzat Banam Kanoon

Uttar Bharat ke dehaati ilaaqon (Haryana, Punjab, Western UP aur Rajasthan) mein jab koi ladka-ladki apni marzi se antar-jaatiye vivah (khaaskar unchi jaati ki ladki aur Dalit ladka) ya same-gotra shaadi karte hain, toh parivar aur khaan-daan ke log milkar unki hatya kar dete hain—jise ==honour killing== kaha jaata hai.

Samajshastri Prem Chowdhry aur Pratiksha Baxi dikhati hain ki yeh koi gusse mein kiya gaya aam jurm nahi hai:

* **Aurat Ka Sharir Aur Izzat:** Poore khaan-daan aur biradari ki "Izzat" ladki ke sharir aur uske shaadi ke niyam par laad di jaati hai. Jab koi ladki apni marzi se pati chunti hai, toh purush pradhan samaj ise apni mardangi aur dabdabe par hamla maanta hai.
* **Khap Panchayaton Ki Hukumat:** Gaon ki gair-kanooni Khap panchayaten jode ko gaon se nikaalne, unka hukka-paani band karne ya unhe jaan se maarne ka farman sunati hain taaki aage koi aur ladki aisi himmat na kare.
* **Supreme Court Ka Faisla (Shakti Vahini v. Union of India, 2018):** Supreme Court ne aitihasik faisla sunate hue kaha ki do baalig logon ko apni marzi se shaadi karne ka sanvidhanik adhikar (Article 19 aur 21) hai, aur Khap panchayaton dwara di gayi aisi sabhi sazaayein gair-kanooni aur jurm hain.`,
  },
  {
    kind: 'md',
    body: `## FLFP Ki Girawat Aur Unpaid Care Work Ka Bojh

Bharat mein aarthik tarakki aur ladkiyon ki padhai badhne ke bawajood Female Labour Force Participation (FLFP) rate lagbhag **25% se 32%** ke beech atka hua hai.

Samajshastri iske teen mukhya kaaran batate hain:

1. **Status Production (Hanna Papanek):** Jaise hi kisan ya madhyavargi parivar ke paas thoda paisa aata hai, woh apni auraton ko bahar kaam karne se rok dete hain. Yeh samaj ko dikhane ka tareeqa hai ki "hum ameer aur unchi jaati ke hain, hamari auratein bahar majduri nahi kartin" (*Sanskritization of domesticity*).
2. **Unpaid Care Work Ka Pahad:** NSSO Time Use Survey (2019) ke aakdon ke mutabiq, Bharatiya auratein rozana ausatan **299 minute** (lagbhag 5 ghante) bina paise ka gharelu kaam (khana, bartan, bachhe, buzurga) karti hain, jabki mard sirf **25 minute** dete hain. Is 10-guna farak ke chalte aurat ke paas bahar naukri karne ka waqt aur taqat hi nahi bachti.
3. **Surrogacy Act, 2021 Aur Aurat Ka Sharir:** Sociologist Amrita Pande batati hain ki commercial surrogacy par ban laga kar sarkar ne gareeb mahilaon ki kamai ka zariya chheen liya aur sirf "altruistic surrogacy" ki ijazat dekar parivar ke heteronormative aadarsh ko thop diya, jisme single aur queer logon ko bahar rakha gaya hai.`,
  },
  {
    kind: 'keyTerm',
    term: 'Brahminical Patriarchy',
    meaning: 'Uma Chakravarti ka siddhant jo dikhata hai ki jaati ki unch-neech aur auraton par sakht pehra dono ek sath unchi jaati ki shuddhata bachane ke liye banaye gaye the.',
  },
  {
    kind: 'keyTerm',
    term: 'Beej-Kshetr (Seed & Earth)',
    meaning: 'Leela Dube ka sanskritik prateek jisme mard ka beej pehchan deta hai aur aurat sirf ek mitti hai, jisse bachho aur zameen par pita ka ekchhatra haq banta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Status Production',
    meaning: 'Hanna Papanek ka concept jo dikhata hai ki aurat ko bahar kaam se hata kar ghar mein baithana unchi jaati aur amiri ka dikhava karne ka hathiyar hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Honour Crime',
    meaning: 'Khaan-daan ya jaati ke kanoon todkar apni marzi se shaadi karne wale yuvaon par pitrasattatmak biradari dwara ki gayi yojana-baddh hinsa.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Ambedkar Aur Uma Chakravarti Ka Mel',
    body: 'Answers mein Uma Chakravarti ke sath Dr. B.R. Ambedkar ke 1916 ke paper Castes in India ka hawala zaroor dein. Ambedkar ne saabit kiya tha ki jaati ki endogamy bachane ke liye surplus auraton par bal vivah, vidhwa banakar rakhna aur Sati pratha lagayi gayi thi.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Honour Killing Gusse Ka Khel Nahi Hai',
    body: 'Honour killing ko kabhi achanak hua gussa mat likhein. Yeh biradari aur Khap dwara milkar ki gayi yojana-baddh hatya hoti hai jiska maqsad jaati ki boundary aur zameen par mardana kabza barkarar rakhna hota hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Time Use Survey 2019 Ka Aakda',
    body: 'NSSO 2019 Time Use Survey ka aakda yaad rakhein: Mahilaayein roz 299 minute unpaid care work karti hain jabki mard sirf 25 minute. Yeh 10-guna farak division of labour ka sabse thos saboot hai.',
  },
  {
    kind: 'answerBox',
    intro: 'Patriarchy, honour killing aur caste endogamy ke judav par 20-mark sawal ka structure is tarah tay karein:',
    points: [
      'Caste endogamy aur gender control ke aapsi rishte se shuruat karein (Uma Chakravarti aur Dr. B.R. Ambedkar ka Castes in India).',
      'Izzat ke sanskritik prateek ko tod kar samjhao ki kaise aurat ke sharir ko khaan-daan ki maryada ka theka bana diya jaata hai.',
      'Khap Panchayaton ke gair-kanooni dabdabe aur Pratiloma vivah (Dalit ladka + unchi jaati ki ladki) par unke atyachar darj karein (Prem Chowdhry).',
      'Honour killing ko ek aisi hinsa ke roop mein dikhayein jiska maqsad yuvaon ki azaadi ko kuchalna aur kisan mardon ka dabdaba bachana hai.',
      'Sanvidhan ke Article 14, 19, 21 aur Supreme Court ke landmark Shakti Vahini (2018) faisle ke hawale se aadhunik loktantrik sangharsh dikhayein.',
    ],
    conclusion: 'Nishkarsh mein likhein ki honour killing asal mein aadhunik loktantra ke niji azaadi ke adhikar aur kheti-badi ki purani pitrasattatmak jaati vyavastha ke beech ka ek khun-kharaba takraav hai.',
  },
]

export const topic5Hi: TopicLangContent = {
  summary:
    'Bharat mein pitrasatta (patriarchy) sirf mard aur aurat ka aapsi jhagra nahi hai, balki yeh jaati vyavastha ki shuddhata, sampatti ke kanoon aur gharelu kaam ke batware se seedhe judi hui hai. Uma Chakravarti ka "Brahminical Patriarchy" aur Leela Dube ka "Beej aur Dharti" (Seed and Earth) ka prateek yeh saaf karta hai ki kaise auraton ke sharir par pehra laga kar jaati ki boundary ko bachaya gaya. Aaj ke daur mein honour killings, mahilaon ki kam labour force participation, surrogacy kanoon aur unpaid care work isi buniyaadi soch ki aadhunik ladaaiyan hain.',
  mindMap,
  sections,
}
