import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic1HiMindMap: MindMapData = {
  title: 'Paper 2 · Unit 20.1 — Grameen Vikas Karyakram',
  center: 'Rural Development & Schemes',
  subtitle: 'CDP • Sahakari Samitiyan • Garibi Unmoolan • MGNREGA & SHGs',
  branches: [
    {
      title: 'Community Development (CDP 1952)',
      color: 'lavender',
      thinkers: ['S.C. Dube', 'A.R. Desai', 'Oscar Lewis', 'Balwant Rai Mehta'],
      points: [
        'Nehruvian top-down model: bureaucratic engineers ke zariye gaon ko modern banane ka vishwas',
        'S.C. Dube (India’s Changing Villages): administrative dushwariyan, training ki kami aur caste blind spots',
        'A.R. Desai: Marxist critique — gaon ko harmonious community maanna ek dhokha tha jisme class divide chhip gaya',
        'Balwant Rai Mehta (1957): top-down failure dekh kar Democratic Decentralization (Panchayati Raj) ki sifarish',
      ],
    },
    {
      title: 'Cooperatives: Elite Capture vs Collective Taqats',
      color: 'yellow',
      thinkers: ['Daniel Thorner', 'B.S. Baviskar', 'Donald Atwood', 'M.N. Srinivas'],
      points: [
        'Daniel Thorner: cooperatives par rural oligarchs aur dominant castes ka kabza (elite capture)',
        'B.S. Baviskar & Atwood: Maharashtra ke sugar cooperatives ne inclusive regional development create kiya',
        'Amul & Anand dairy model: doodh sangathan ne chhote kissano ko daily cash diya par landless chhoot gaye',
        'Naye sudhar: 97th Constitutional Amendment aur Union Ministry of Cooperation (2021) PACS modernisation ke liye',
      ],
    },
    {
      title: 'Garibi Unmoolan: IRDP se MGNREGA Tak',
      color: 'mint',
      thinkers: ['Jean Drèze', 'Robert K. Merton', 'Amartya Sen', 'Reetika Khera'],
      points: [
        'Targeted approach (IRDP 1978): asset subsidies par afsaron aur dalalon ke cut aur cattle scams',
        'Rights-based badlaav (MGNREGA 2005): 100 din ka statutory wage rozgar, self-targeting aur equal wages',
        'Robert K. Merton lens: manifest aim garibi kam karna, latent function rural wage floor badhana aur migration rokna',
        'Structural mushkilein: delayed wage payments, biometric Aadhaar (ABPS) ke chakkar mein exclusion',
      ],
    },
    {
      title: 'Mahila SHGs & Micro-Finance',
      color: 'pink',
      thinkers: ['Bina Agarwal', 'Reetika Khera', 'Muhammad Yunus', 'Max Weber'],
      points: [
        'DAY-NRLM: 10 crore gaon ki auraton ko Self-Help Groups mein jod kar social capital taiyar kiya',
        'Kudumbashree (Kerala) & Mission Shakti (Odisha): micro-enterprises, rasoi catering aur panchayat netritva',
        'Bina Agarwal: collective bargaining ne mahilaon ko soodkhor mahajanon se azaad karaya',
        'Seemayein: debt recycling ka khatra, micro-credit saturation aur domestic patriarchal dushmani',
      ],
    },
  ],
}

export const topic1HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u10-01-rural-schemes-green-rev.webp',
    alt: 'P2 Unit 10 infographic: CDP, Cooperatives & Green Revolution — State Programmes & the Paradoxes of Green Revolution',
    caption:
      'State Programmes & the Paradoxes of Green Revolution: Top-down CDP bureaucracy se lekar cooperatives aur rights-based welfare tak ka samajshastriya safar.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 20 Visual 01',
  },
  {
    kind: 'md',
    body: `## Grameen Vikas Ka Asli Samajshastra

Aasaan shabdon mein samjho: azaadi ke baad Bharat sarkar ne gaon ke vikas ko sirf paisa baantne ka kaam nahi maana, balki ek naya aadhunik samaj banane ka sapna dekha. Nehruvian state ko poora bharosa tha ki sarkari afsarshahi aur scientific planning ke zariye zamindari, jaati-bhed aur purani garibi ko jad se khatam kiya ja sakta hai. Lekin samajshastriyon ne zameen par ja kar dekha ki sarkari yojanaayein kisi khaali maidan mein nahi utartin; gaon ke andar pehle se baithi jaati-vavastha aur zameendar tabqa un resources ko ya toh apne faayde ke liye mod leta hai ya fir daboch leta hai.

Grameen vikas ko samajhne ke liye humein dekhna hoga ki sarkari taqat aur gaon ki social structure — khas taur par caste, class, land ownership aur gender — aapas mein kaise takraate hain.

## Community Development Programme (CDP, 1952)

2 October 1952 ko shuru hua ==Community Development Programme (CDP)== azaad Bharat ka pehla comprehensive rural blueprint tha. Isme kheti, pashupalan, paani, health, safai aur gaon ke raaste sab shaamil the. Isko chalane ke liye District Magistrate se lekar Block Development Officer (BDO) aur gaon ke level par Village Level Worker (VLW) tak ki poori afsarshahi khadi ki gayi.

### CDP Ki Samajshastriya Critique

Sociologists ne field studies karke dikhaya ki CDP ke structure mein hi badi kamiyan thin:

- **[[thinker:S.C. Dube]] (*India’s Changing Villages*, 1958):** Western UP ke Shamirpet aur Saharanpur ke gaon mein Dube ne dekha ki CDP afsaron ke ghamand aur rigid rules mein phans gaya tha. Village Level Worker (VLW) aksar upper-caste ya shahar ke parhe-likhe background se aate the. Wo seedhe gaon ke Rajput aur Brahmin zameendaron ki haveli par jaate the aur unhi se baat karte the. Nateeja yeh hua ki Dalit aur pichhde khetihar mazdooron ko laga ki yeh yojana sirf bade logon ke liye aayi hai.
- **[[thinker:A.R. Desai]] Ka Marxist Vishleshan:** Desai ne likha ki CDP ki sabse badi galti yeh maanna thi ki gaon ek aapsi prem aur bhaichare wali "harmonious community" hai. Gaon ke andar landlord aur tenant ke beech ka class antagonism itna gehra tha ki sarkar ne jo bhi tractor, beej ya subsidy bheji, wo sab gaon ke ameer kisanon ne hadap li aur gareeb kisan pehle se zyada kamzor ho gaya.
- **Oscar Lewis:** Delhi ke paas ke gaon ka adhyayan karke Lewis ne bataya ki development officers aur revenue officers ke beech aapsi ladai chalti rehti thi aur aam grameen ka koi active involvement nahi tha.
- **Balwant Rai Mehta Committee (1957):** Jab CDP ke fail hone ki jaanch hui, toh Mehta committee ne saaf kaha ki bina gaon ke logon ko taqat diye vikas nahi ho sakta. Yahan se ==Democratic Decentralisation== yaani 3-tier Panchayati Raj ka janm hua, taaki babu-raj ki jagah elected neta faisle karein.

## Sahakari Samitiyan (Cooperatives): Barabari Ya Elite Capture?

Cooperatives ka matlab tha ki gaon ke kisan aapas mein milkar ek democratic sangathan banayein jahan "one man, one vote" ho. Iska maqsad tha gaon ke gareeb kisan ko soodkhor mahajanon (moneylenders) ke jaal se nikalna. Lekin Bharat ke alag-alag hisson mein iska nateeja bilkul alag raha.

### Baviskar vs. Thorner Ki Badi Behas

Agrarian sociology mein cooperatives ko lekar do bilkul ulti tasveerein milti hain:

- **[[thinker:Daniel Thorner]] (*Agricultural Cooperatives in India*, 1964):** Thorner ne North aur East India ke gaon dekh kar saaf kaha ki cooperatives par gaon ke purane dabangon aur zameendaron ne kabza kar liya hai. In zameendaron ne apne parivaar ke logon ko cooperative society ka chairman aur director bana diya. Sarkar se saste byaaj par loan liya aur wahi paisa apne gareeb bataidaron (tenants) ko bhaari byaaj par udhaar de diya. Thorner ne ise ==Elite Capture== ka naam diya.
- **[[thinker:B.S. Baviskar]] & Donald Atwood (*Finding the Middle Path*, 1995):** Maharashtra ke sugar cooperatives ka adhyayan karke Baviskar ne dikhaya ki cooperatives sach mein vikas la sakte hain. Kyunki sugarcane factory chalane ke liye factory ko lagaatar ganna chahiye hota hai, isliye bade Maratha kisan chhotey kisanon ke sath bhedbhav nahi kar sakte the; unhein chhotey kisanon ko bhi sahi daam aur barabar tulai deni padti thi.
- **Cooperative Capitalism Aur Rajneeti:** Lekin Baviskar ne iska political paksh bhi dikhaya: Maharashtra mein sugar cooperatives aage chal kar "Sugar Barons" ke launchpad ban gaye. Inhi sahakari karkhanon ke paise aur gaadiyon se bade kisanon ne regional politics par kabza kiya.
- **Doodh Kranti (Amul Model):** Gujarat ke Anand mein Amul ne bicholiye ko hata kar har roz kisanon ke haath mein cash pahunchaya. Lekin jaisa ki sociologists ne note kiya, jin Dalit parivaaron ke paas gay-bhains nahi thi, unhe iska seedha faayda nahi mila.

| Samajshastriya Pehlu | Daniel Thorner Ki Critique | B.S. Baviskar & Atwood Ka Paksh |
| --- | --- | --- |
| Mukhya Mulyankan | Amiron ke kabze aur soodkhori ka naya zariya | Grameen udyog aur aarthik loktantra ka engine |
| Power Structure | Caste oligarchs ka board par ekchhatra raj | Dominant caste (*Marathas*) lead karti hai par chhote kisan ko labh |
| Aarthik Mechanism | Sirf kagazi samitiyan jo sarkari subsidy kaat leti hain | Factory chalane ke liye chhote aur bade sabhi kisanon ka zaroori jurav |
| State Se Sambandh | Sarkari dushwariyon se feudal dominance mazboot hui | Relative autonomy aur local democratic jawabdehi |

## Khairat Se Adhikar Tak: IRDP Se MGNREGA Ka Safar

1980 ke dashak mein shuru hui ==Integrated Rural Development Programme (IRDP)== jaisi schemes mein sarkar gareebon ko gay-bhains khareedne ke liye subsidy aur loan deti thi. Lekin isme itna bhrashtachar hua ki zameen par "paper par gay khareedi aur bechi jaati thi" aur doctor nakli certificate deta tha. Is asafalta ke baad 2000 ke dashak mein sarkar ne approach badli — khairat ki jagah kanooni adhikar (rights-based approach) laya gaya.

### MGNREGA (2005): Grameen Mazdoori Ka Turning Point

MGNREGA ne har grameen parivaar ko saal mein 100 din ke unskilled physical kaam ki kanooni guarantee di. Agar sarkar kaam nahi degi, toh berozgari bhatta dena hoga.

- **Patron-Client Ties Ka Tootna:** [[thinker:Jean Drèze]] ke mutabiq, MGNREGA ne khetihar mazdoor ko zameendar ke aage hath phailane se bacha liya. Sarkar ne ek minimum wage tay kar di, jisse zameendaron ko bhi kheti ki mazdoori badhani padi. [[eg:Bihar aur Eastern UP mein pehle zameendar khetihar mazdoor ko din ke 80 rupaye dete the, par MGNREGA aane ke baad unhe mazbooran 200 rupaye se zyada dena pada, jisse purani begari tooti.]]
- **Mahila Mazdoori Aur Barabari:** MGNREGA mein 55% se zyada kaam karne wali mahilaayein hain. Paisa seedhe aurat ke bank account mein aane se parivaar ke andar uski aawaaz mazboot hui aur distress migration mein kami aayi.
- **Latent Dysfunctions (Robert K. Merton Lens):** Scheme ka manifest function garibi kam karna tha, par latent dysfunction yeh hua ki wage payment mein mahinon ki deri aane lagi, aur biometric Aadhaar payment system (ABPS) ki wajah se kayi buzug kisanon ke thumb impression na milne par unke paise atak gaye.

### Mahila Self-Help Groups (DAY-NRLM)

National Rural Livelihoods Mission ke tehat gaon ki mahilaon ko 10-15 ke groups mein jod kar ==Social Capital== banaya gaya.

- **Aapsi Bachat Aur Mahajan Se Azaadi:** Har hafte thoda paisa jama karke aapsi zaroorat ke liye saste byaaj par udhaar lene se gaon ki auratein soodkhor mahajanon ke shikanje se bahar niklin.
- **Micro-Finance Se Aage:** Kerala ke *Kudumbashree* aur Odisha ke *Mission Shakti* ne dikhaya ki SHG sirf paisa jama karne tak seemit nahi rahe; unhone midday meal chalaya, gaon ke bazaar sambhale aur aage chalkar Panchayati Raj chunav mein pradhan aur sarpanch bankar ubhrin. [[link:Ise Paper 2 Unit 7 ke Women's Movement se relate karo.]]`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1952',
        title: 'Community Development Programme (CDP)',
        text: '55 blocks mein Ford Foundation ke sahyog se shuru, Nehruvian state ka pehla bureaucratic rural blueprint.',
      },
      {
        year: '1957',
        title: 'Balwant Rai Mehta Committee',
        text: 'CDP ki bureaucratic naakami parakh kar 3-tier Panchayati Raj ki historic sifarish ki.',
      },
      {
        year: '1978–1980',
        title: 'Integrated Rural Development Programme (IRDP)',
        text: 'Individual household subsidy model, jo bhrashtachar aur cattle scams ki bhent chadh gaya.',
      },
      {
        year: '2005',
        title: 'MGNREGA Ka Kanoon',
        text: 'Rights-based rozgar ka daur shuru hua; 100 din ke statutory work ne grameen mazdoori ka base badla.',
      },
      {
        year: '2011–Ab Tak',
        title: 'DAY-NRLM Aur Ministry of Cooperation (2021)',
        text: '10 crore mahilaon ka SHG network bana aur PACS digitization ke liye alag Cooperation Ministry aayi.',
      },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Purani Bureaucratic Schemes (CDP / IRDP)',
    rightTitle: 'Rights-Based & Sahakari Models (MGNREGA / NRLM)',
    rows: [
      {
        aspect: 'Nagarik Ki Position',
        left: 'Sarkari kripa aur khairat lene wala laabharthi (beneficiary)',
        right: 'Kanooni adhikar mangne wala haqdaar (rights-holder)',
      },
      {
        aspect: 'Delivery Mechanism',
        left: 'Afsarshahi (BDO, VLW) ki marzi aur files par nirbhar',
        right: 'Gram Sabha social audits, direct bank transfer aur self-managed SHGs',
      },
      {
        aspect: 'Caste & Class Par Asar',
        left: 'Upper caste zameendar aur ameer kisan sari subsidy hadap lete the',
        right: 'Self-targeting: kudal chalana hone se ameer log kaam nahi mangte',
      },
      {
        aspect: 'Gender Dimension',
        left: 'Ghar ke mard mukhiya ko hi poora parivaar maan liya jaata tha',
        right: 'Direct mahila bank accounts, barabar mazdoori aur mahila samooh',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Elite Capture',
    meaning:
      'Ek aisi samajik prakriya jisme gaon ke dabang aur ameer log sarkari vikas ke funds, saste loans aur sahakari samitiyon par apna kabza jama lete hain.',
    thinkerSlug: 'mn-srinivas',
  },
  {
    kind: 'keyTerm',
    term: 'Democratic Decentralisation',
    meaning:
      'Dilli aur rajdhaniyon ki afsarshahi se taqat chheen kar gaon ki chuni hui panchayaton aur logon ke haath mein saupna.',
  },
  {
    kind: 'keyTerm',
    term: 'Social Capital in SHGs',
    meaning:
      'Gaon ki mahilaon ke beech aapsi vishwas, sahyog aur sangathan ka wo network jisse wo aarthik aur political taqat banti hain.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'mn-srinivas',
    quote: 'The dominant caste yields decisive economic and political power and occupies a fairly high position in the local caste hierarchy.',
    context: 'Samjhane ke liye ki kyun sarkari yojanaayein aur cooperative societies aksar gaon ki dominant caste ke kabze mein chali jaati hain.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'robert-k-merton',
    quote: 'Social structures produce both manifest, intended objectives and latent, unforeseen dysfunctions within state-planned development projects.',
    context: 'Sarkari yojanaon ke lakshya aur zameen par nikalne wale asar ke beech ke faasle ko decode karte hue.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Trap: Sirf Schemes Ki List Mat Banao!',
    body: 'UPSC jab bhi rural development par sawaal puche, toh government press release jaisi list mat likho. Answer ko rural sociology se jodo: dikhao ki kaise caste hierarchy, dominant caste ki patronage (M.N. Srinivas) aur class conflict (A.R. Desai) ke kaaran scheme ka nateeja badal jaata hai.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Baviskar vs Thorner: Cooperatives Ko Ek Tarazu Mein Mat Tolo',
    body: 'Yeh mat likho ki cooperatives poori tarah fail ho gaye ya poori tarah pass ho gaye. Thorner ne UP-Bihar ke credit cooperatives dekhe jahan feudalism aur soodkhori thi; Baviskar ne Maharashtra ke sugar mills dekhe jahan sugarcane kheti ne aapsi zaroorat paida ki thi.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Beneficiary Se Rights-Holder Ka Safar',
    body: 'Indian rural welfare ka sabse bada badlaav yeh hai ki pehle kisan sarkari afsar ke aage bhikhari bankar khada hota tha (IRDP), jabki ab MGNREGA aur NRLM mein wo kanooni taur par apna kaam aur credit mangta hai.',
  },
  {
    kind: 'answerBox',
    intro:
      'Azaadi ke baad Bharat ke grameen vikas karyakram sarkari aadhunikikaran ke sapne aur gaon ki pehle se maujood jaati-varg sanrachna ke beech ek lagaatar sangharsh rahe hain.',
    points: [
      'Top-down afsarshahi ki naakami: CDP (1952) ne gaon ko bina varg-sangharsh ka ek parivaar maan liya (A.R. Desai), jisse upper-caste zameendaron ne resources hadap liye aur khetihar mazdoor door reh gaye (S.C. Dube).',
      'Cooperatives ki do tasveerein: Daniel Thorner ne North India mein elite capture aur soodkhori dekhi, jabki B.S. Baviskar ne Maharashtra mein agro-processing sugar cooperatives ke zariye regional development dikhaya.',
      'Khairat se adhikar tak: IRDP ke bhrashtachar aur nakli cattle purchase ke baad MGNREGA (2005) aaya, jisne statutory wage floor banakar gaon ki purani begari todi (Jean Drèze).',
      'Mahilaon ka sashaktikaran: DAY-NRLM aur Self-Help Groups ne micro-finance ko social capital mein badal diya, jisse auratein parivaar se nikal kar panchayat ki neta banin.',
      'Maujuda chunautiyan: Biometric surveillance (ABPS), mazdoori milne mein mahinon ki deri aur PACS ka rajneetikaran yeh saabit karte hain ki bina land reforms aur caste barabari ke sirf technical schemes kafi nahi hain.',
    ],
    conclusion:
      'Grameen badlaav tabhi sambhav hoga jab gaon ke caste-class gathjod ko todkar loktantrik decentralisation ko sach mein aakhiri khetihar mazdoor tak pahunchaya jaye.',
  },
]
