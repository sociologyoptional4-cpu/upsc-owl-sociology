import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 14.1 · Perspectives on Caste: Ghurye, Srinivas, Dumont, Béteille',
  center: 'Caste Par Nazariye',
  subtitle: 'Kitabi Indology • Zameeni Fieldwork • Purity-Pollution • Multi-dimensional Power',
  branches: [
    {
      title: 'Indological & Attributional',
      color: 'lavender',
      thinkers: ['G.S. Ghurye', 'Celestin Bougle', 'Herbert Risley'],
      points: [
        'Ghurye: Caste ke chhe mukhya lakshan — segmental division aur endogamy',
        'Book view: Sanskrit dharmashastron aur Smritis par gehra bharosa',
        'Caste ko Hindu sabhyata ka ek lamba chalne wala hissa mana',
        'Critique: Zameeni sangharsh aur Dalit virodh ko nazarandaz kiya',
      ],
    },
    {
      title: 'Structural-Functional & Field View',
      color: 'yellow',
      thinkers: ['M.N. Srinivas', 'McKim Marriott', 'S.C. Dube'],
      points: [
        'Kitabi model chhod kar gaon ke live fieldwork aur observation par zor',
        'Sanskritization: Upper caste ke customs copy karke positional mobility',
        'Dominant Caste: Zameen, sankhya aur local politics ki asali taqat',
        'Rigid Varna ke peeche hazaron fluid local Jatis ki sachhai dikhayi',
      ],
    },
    {
      title: 'Structuralist Hierarchy',
      color: 'mint',
      thinkers: ['Louis Dumont', 'Celestin Bougle', 'Dipankar Gupta'],
      points: [
        'Dumont: Caste system Pure aur Impure ke binary opposition par tika hai',
        'Homo Hierarchicus (Bharat) vs Egalitarian Homo Equalis (West)',
        'Dharmik status secular political aur economic power ko encompass karta hai',
        'Gupta counter: Koi universal consensus nahi, har caste ka apna garv hai',
      ],
    },
    {
      title: 'Weberian & Conflict Lenses',
      color: 'pink',
      thinkers: ['Andre Beteille', 'Max Weber', 'Dipankar Gupta'],
      points: [
        'Beteille: Caste (status), Class (wealth), aur Power (rajneeti) ka triad',
        'Harmonic system (norm matches reality) vs Disharmonic (norm clashes)',
        'Modern Bharat disharmonic hai: Sanvidhan ka barabari norm vs caste sachhai',
        'Traditional Brahmin supremacy se zameen aur political power ka alag hona',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u04-01-caste-thinkers-matrix.webp',
    alt: 'Perspectives on Caste System showing Ghurye, Srinivas, Dumont, and Beteille frameworks',
    caption:
      'Caste par chaar classical nazariye: Ghurye ke scriptural attributes se lekar Srinivas ka field view, Dumont ka purity-pollution structuralism aur Béteille ka multi-dimensional power model.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 14 Visual 01',
  },
  {
    kind: 'md',
    body: `## Caste Ko Samajhna: Shastron Se Gaon Ki Choupal Tak

Aasaan shabdon mein samjho: Caste koi purani kitabon mein band bejaan cheez nahi hai, aur na hi yeh sirf kaam-dhandhe ka batwara hai. Bharat mein caste ek aisa gehra samajik tana-bana hai jo janm se tay hone wali haisiyat, shuddhata-ashuddhata ke niyam, shadi ke bandhan aur zameen-daulat par kabze ko aapas mein jodta hai. Sociologists ise kaise dekhte hain, yeh is baat par nirbhar karta hai ki unhone library mein baith kar purane granth padhe ya gaon ki choupal par jaakar zameeni taqat ka khel dekha.

Pichle sau saalon mein Bharat ke caste system ko samajhne ke chaar mukhya nazariye ubhar kar aaye. Indological approach ne shastron ko padh kar timeless lakshan ginaye; structural-functionalists ne gaon mein jaakar live interaction note kiya; structuralists ne ise pure aur impure ki bhasha mein samjhaya; aur Weberian scholars ne dikhaya ki azaad loktantra mein caste, class aur political power kaise ek-doosre se alag ho rahe hain.

## Indological Aur Attributional Nazariya: G.S. Ghurye

[[thinker:G.S. Ghurye]] ne apni 1932 ki mashhoor kitab *Caste and Race in India* mein caste ke vishleshan ki shuruat ki. Sanskrit dharmagranthon, colonial census aur historical documents ka sahara lekar Ghurye ne ==attributional approach== diya — yaani caste ko uske mukhya lakshanon (attributes) ki soochi se samjha ja sakta hai.

Ghurye ne caste system ke chhe mukhya lakshan bataye:
1. **Segmental Division of Society:** Samaj alag-alag band tukdon mein banta hota hai, jahan sadasyata janm se milti hai, kisi ki mehnat ya gun se nahi.
2. **Hierarchy (Kramik Darja):** Ek tay shreni-kram hota hai jisme sabse upar Brahmin aur sabse neeche ashprishya (untouchable) jaatiyan aati hain.
3. **Restrictions on Feeding and Social Intercourse:** Khan-paan aur milne-julne par sakht pabandiyan hoti hain — jaise kaun kiske haath ka *kachha* (paani mein paka) khana khayega aur kiske haath ka *pakka* (ghee mein bana) khana.
4. **Civil and Religious Disabilities and Privileges:** Alag-alag bastiyon mein rehna, aam kuon se paani lene par rok, aur mandir-path ke vishashadhikar sirf unchi jaatiyon ke paas hona.
5. **Lack of Unrestricted Choice of Occupation:** Pustaini pesha — har jati ka kaam janm se lagbhag tay hota tha aur use badalna asaan nahi tha.
6. **Restrictions on Marriage (Endogamy):** Ghurye ne kaha ki apni hi jati ke andar shadi karna (endogamy) caste system ka sabse mazboot qila aur aakhiri sarankshan hai.

[[trap:Exam mein yeh galti mat karna ki Ghurye ke in lakshanon ko aakhiri sach maan lo; Srinivas jaise thinkers ne saaf kaha ki yeh 'book view' hai jo upper-caste nazariye se likha gaya hai, isme zameeni bagawat aur badlaav nazar nahi aata.]]

## Structural-Functional Aur Field-View Lens: M.N. Srinivas

Kitabon ke 'book view' se pareshan hokar [[thinker:M.N. Srinivas]] ne Rampur gaon (*The Remembered Village*) aur Coorgs ke beech reh kar ==field view== ki kranti shuru ki. Srinivas ne sabit kiya ki char varna wala model sirf kitabon mein sundar lagta hai, par zameen par hazaron local *Jatis* dynamic tarike se kaam karti hain.

Srinivas ne do behtareen concepts diye:

- **==Sanskritization==:** Woh prakriya jisme koi nichli ya madhyam jati kisi unchi, twice-born (*Dvija*) jati ke riti-riwaz, shakahar, aur dharmik aacharan apnakar ek ya do peedhiyon mein apna ritual darja uncha karne ka daawa karti hai. [[eg:Karnataka ke Lingayats, Gujarat ke Patidars, ya UP-Bihar ke Yadavs ne jab janeu dharan kiya aur Vedic rituals shuru kiye, toh unhone Sanskritization ke zariye ritual mobility haasil karne ki koshish ki.]]
- **==Dominant Caste==:** Srinivas ne dikhaya ki gaon mein asali taqat hamesha Brahmin ke paas nahi hoti. Dominant caste woh banti hai jiske paas chaar cheezein hon: gaon mein badi aabadi (numerical strength), zameen par kabza (land control), modern education aur rajneetik pahunch, aur aisi ritual status jo bohot neechi na ho. [[eg:Haryana ke Jaat, Karnataka ke Vokkaliga, aur Maharashtra ke Maratha gaon ki panchayat aur kheti par asali dabdaba banaye rakhte hain, chahe woh Brahmin na hon.]]

## Structuralist Sacerdotal Lens: Louis Dumont

French sociologist [[thinker:Louis Dumont]] ne apni kitab *Homo Hierarchicus* (1966) mein kaha ki caste koi aam social system nahi, balki ek anokha civilizational ideology hai. Dumont ne modern Western samaj ko ==Homo Equalis== (barabari aur vyaktivad par aadharit) aur traditional Bharatiya samaj ko ==Homo Hierarchicus== (samuhik kramikta par aadharit) kaha.

Dumont ke mukhya vichar:
- **==Binary Opposition of Pure and Impure==:** Caste ka poora hierarchy ek hi niyam se chalta hai: Shuddhata (Purity) aur Ashuddhata (Pollution) ka aamne-saamne hona. Sabse shuddh Brahmin aur sabse ashuddh Dalit maane gaye.
- **Status Encompasses Power:** Dumont ne kaha ki West mein daulat aur taqat se status banta hai, par Bharat mein dharmik status secular power se upar hai: Raja (*Kshatriya*) ke paas fauj aur taqat hai, par use bhi Pujari (*Brahmin*) ke dharmik rutbe ke aage jhukna padta hai.
- **Consensual Ideology:** Dumont ka yeh vivadaspad daawa tha ki sabhi jaatiyan, yahan tak ki nichli jaatiyan bhi, is shuddhata-ashuddhata ke hierarchy ko dil se sweekar karti hain.

| Nazariya | Mukhya Thinker | Method | Central Premise | Mukhya Kami |
| --- | --- | --- | --- | --- |
| **Indological / Attributional** | G.S. Ghurye | Granth aur Sanskrit texts | Chhe sthir lakshanon se caste banti hai | Static book view; ground reality ko ignore kiya |
| **Structural-Functional** | M.N. Srinivas | Gaon ka fieldwork & observation | Caste dynamic hai; Dominant Caste aur Sanskritization | Radical sangharsh aur Dalit gusse par kam dhyan |
| **Structuralist Sacerdotal** | Louis Dumont | Structural semiotics & ideology | Pure vs Impure ka binary opposition; status > power | Universal consensus ka jhootha daawa; exploitation ko cover kiya |
| **Weberian & Multidimensional** | André Béteille | Stratification field analysis (Sripuram) | Caste, Class aur Power milte bhi hain aur alag bhi hote hain | Regional vividhta ko macro level par balance karna zaroori |

## Weberian Multidimensional Lens: André Béteille

Tamil Nadu ke Sripuram gaon par apni mashhoor study *Caste, Class, and Power* (1965) mein [[thinker:André Béteille]] ne Dumont ke ek-tarfa model ko ch चुनौती di. Béteille ne [[thinker:Max Weber]] ka tri-fold model use kiya:

1. **Caste (Status / Ritual Honour):** Janm, khana-peena aur shuddhata se tay hone wala darja.
2. **Class (Economic Wealth):** Kheti ki zameen ka maalikana haq, jisme zameendar (*Mirashidars*), kisan, aur be-zameen mazdoor aate hain.
3. **Power (Political Authority):** Panchayat, political parties aur sarkar par asali control.

Purane Sripuram mein yeh teeno ek hi the: Brahmin ke paas hi zameen thi, wahi sabse uncha ritual status rakhta tha, aur wahi gaon par raaj karta tha. Par azadi ke baad, adult franchise aur Non-Brahmin dravidian movements ke chalte yeh teeno alag ho gaye: Backward castes ke paas vote bank aur political power aayi, non-Brahmins ne zameen khareedi, aur Brahmins shehron mein naukriyon ki taraf chale gaye.

### Harmonic Aur Disharmonic Social Systems

Apni 1971 ki kitab *Harmonic and Disharmonic Social Systems* mein Béteille ne Dumont ko aaina dikhaya:
- **Harmonic Social System:** Aisa samaj jahan par Normative Order (samaj ke niyam aur aadarsh) aur Existential Reality (zameeni haqeeqat) aapas mein mel khate hon. Purana Bharat ek ==harmonic system of inequality== tha: shastron ne kaha log barabar nahi hain, aur samaj sach mein asaman tha.
- **Disharmonic Social System:** Aisa samaj jahan par Normative Order aur Existential Reality mein aamne-saamne ki takkar ho. Aaj ka modern Bharat ek ==disharmonic system== hai: Hamara Sanvidhan (Article 14, 15, 17) barabari ka elaan karta hai, par zameeni haqeeqat caste bhedbhav aur asamanata se bhari hui hai. [[link:Ise Paper 1 Unit 5 ke Weberian status groups aur Davis-Moore functionalist theory se link karo.]]

## Dipankar Gupta Ka Counter-Critique: Hierarchy Nahi, Difference

Sociologist [[thinker:Dipankar Gupta]] (*Interrogating Caste*, 2000) ne Dumont ke model ko poori tarah kharij kiya. Gupta ne kaha ki Dumont ne Brahmin ke aatm-prashansa wale nazariye ko poore desh ka consensus maan liya.

- **Principle of Difference Over Hierarchy:** Aaj inter-caste relations hierarchy par nahi, balki ==difference (antar)== ke siddhant par chalte hain. Har caste ki apni utpatti katha (*Jati Purana*) hoti hai jisme woh khud ko shreshtha aur bahadur batati hai.
- **Multiple Hierarchies:** Bharat mein koi ek chadhayi wali seedhi nahi hai, balki utni hi hierarchies hain jitni jaatiyan hain. Ek Dalit ya pichhdi jati yeh nahi maanti ki woh ashuddh hai; woh Brahmin ke daawe ko shoshan aur zabardasti manti hai.
- **Muddled Hierarchies:** Upar ke Brahmin aur sabse neeche ke Dalit ke beech ka madhyam hissa bohot uljha hua (muddled) hai. Jaatiyan ab kramik hierarchy chhod kar horizontal pressure groups ban chuki hain jo loktantra mein bargaining karti hain.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Louis Dumont (Homo Hierarchicus)',
    rightTitle: 'Dipankar Gupta (Interrogating Caste)',
    rows: [
      {
        aspect: 'Mukhya Siddhant',
        left: 'Pure vs Impure par tiki ek pan-India single hierarchy',
        right: 'Multiple discrete castes jo horizontal difference par chalti hain',
      },
      {
        aspect: 'Consensus vs Virodh',
        left: 'Sabhi jaatiyan shuddhata ke is niyam ko dil se maanti hain',
        right: 'Koi consensus nahi; har jati ka apna garv aur origin myth hai',
      },
      {
        aspect: 'Status vs Power',
        left: 'Dharmik ritual status secular taqat ko poori tarah gher leta hai',
        right: 'Rajneetik taqat aur aarthik hit jati garv aur competition chalate hain',
      },
      {
        aspect: 'Methodological Basis',
        left: 'Purane shastron aur ritual codes ka structuralist vishleshan',
        right: 'Aaj ki chunavi rajneeti aur gaon ke sangharsh ka live adhyayan',
      },
      {
        aspect: 'Modernity Ka Nazariya',
        left: 'Caste ka substantialization bina basic structure tode',
        right: 'Caste competing ethnic vote banks aur pressure groups mein badal gayi',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Indology (Ghurye)', text: 'Sanskrit granthon se chhe sthir structural lakshanon ki pehchan' },
      { label: 'Field View (Srinivas)', text: 'Gaon ka live adhyayan: Sanskritization aur Dominant Caste ka asali roop' },
      { label: 'Structuralism (Dumont)', text: 'Pure vs Impure ka ideological binary jahan status taqat ko encompass kare' },
      { label: 'Weberian Triad (Béteille)', text: 'Caste, Class aur Power alag hokar disharmonic samaj banate hain' },
      { label: 'Difference & Pride (Gupta)', text: 'Single consensus ki jagah aapas mein ladti multiple hierarchies' },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Attributional Approach',
    meaning:
      'G.S. Ghurye ka tareeqa jisme caste ko uske tay shuda pustaini lakshanon (endogamy, khan-paan par rok) ki soochi ke zariye samjha jata hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Sacerdotal View',
    meaning:
      'Louis Dumont ka diya nazariya jiske anusaar caste ek pavitra dharmik hierarchy hai jahan ritual shuddhata ko secular taqat se uncha darja prapt hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Dominant Caste',
    meaning:
      'M.N. Srinivas ka concept jo us sthaniya jati ko darshata hai jiske paas zameen, badi aabadi, rajneetik pahunch aur theek-thaak ritual status ho.',
    thinkerSlug: 'mn-srinivas',
  },
  {
    kind: 'keyTerm',
    term: 'Disharmonic Social System',
    meaning:
      'André Béteille ka sankalp jahan samaj ke naitik aadarsh (samvidhanik barabari) aur zameeni sachhai (caste bhedbhav) ke beech gehra virodhabhas hota hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'mn-srinivas',
    quote:
      'Sanskritization is the process by which a low caste changes its customs, ritual, ideology, and way of life in the direction of a high caste.',
    context: 'Rampur aur Coorg ke adhyayan mein dynamic ritual mobility ko samjhane ke dauran.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Scoring Edge: Dumont ke Saath Béteille aur Gupta Zaroor Likho',
    body: 'Jab bhi UPSC caste hierarchy par sawaal pooche (2023, 2022, 2017), sirf Dumont ki tareef karke mat chhodna. Pehle Dumont ka Pure vs Impure model samjhao, fir turant Béteille ke Sripuram study (caste, class, power ka decoupling) aur Dipankar Gupta ke Multiple Hierarchies se use counter karo.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karna: Sanskritization vs Modernization',
    body: 'Sanskritization ko modernization mat samajh lena. Srinivas ne saaf kaha tha ki isse kisi ek jati ka darja thoda badal sakta hai (positional change), par poora caste structure waisa hi rehta hai (no structural change). Yeh traditional hierarchy ko aur pakka karta hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Béteille Ka Formula: Normative vs Existential',
    body: 'Harmonic = Normative Order aur Existential Reality ek jaise hon (Purana Bharat: asaman vichar, asaman samaj). Disharmonic = Normative Order aur Existential Reality aamne-saamne takrayen (Aaj ka Bharat: barabari ka Sanvidhan, par asaman samaj). Yeh disharmony hi samajik aandolanon ko janm deti hai.',
  },
  {
    kind: 'answerBox',
    intro:
      'Bharatiya caste system ka samajshastriya vishleshan granthon ke sthir lakshanon se aage badhkar dynamic empirical, structural aur political-economic frameworks tak pahuncha hai.',
    points: [
      'Indological aadhar (Ghurye): Sanskrit granthon se chhe sthir lakshan nikaale aur endogamy ko caste ka sabse mukhya ghera bataya.',
      'Field-view badlaav (Srinivas): Kitabi model ko todkar gaon mein Sanskritization aur Dominant Caste ki zameeni taqat ko samne laaye.',
      'Structuralist vichar (Dumont): Caste ko Pure aur Impure ke binary opposition par aadharit ek holistic ideology bataya jisme status taqat ko encompass karta hai.',
      'Multidimensional Weberian critique (Béteille): Sripuram ke fieldwork se sabit kiya ki caste, class aur power alag ho chuke hain, jisse disharmonic samaj banta hai.',
      'Samkaaleen mod (Gupta): Dikhaya ki hierarchy par koi aam-sahmati nahi hai; aaj jaatiyan horizontal difference aur aatmasamman ke sahare rajneetik dabdaba banati hain.',
    ],
    conclusion:
      'Aaj ka samajshastra caste ko kisi pavitra bejaan seedhi ke roop mein nahi, balki loktantrik rajneeti mein ladi ja rahi aatmasamman aur taqat ki dynamic ladayi ke roop mein dekhta hai.',
  },
]

export const topic1Hi: TopicLangContent = {
  summary:
    'Caste ke chaar classical nazariyon ki tafteesh—Ghurye ke Indological lakshan, Srinivas ka dynamic field-view, Dumont ka purity-pollution structuralism aur Béteille ka multi-dimensional Weberian model, saath hi Dipankar Gupta ka critique.',
  mindMap,
  sections,
}
