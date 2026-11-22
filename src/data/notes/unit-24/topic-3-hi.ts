import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic3HiMindMap: MindMapData = {
  title: 'Topic 3 · Jansankhya Neeti Aur Parivar Niyojan',
  center: 'Jansankhya Neeti Aur Adhikar',
  subtitle: 'Policy Evolution • Coercive Two-Child Debates • Gender Contraceptive Skew • Age of Marriage',
  branches: [
    {
      title: 'Neeti Ka Vikas: Target Se Adhikar',
      color: 'lavender',
      thinkers: ['Pravin Visaria', 'Leela Visaria', 'M.S. Swaminathan', 'Ashish Bose'],
      points: [
        '1952: Bharat duniya ka pehla desh bana jisne sarkari National Family Planning Programme shuru kiya',
        '1976–77 Emergency: jabran nasbandi targets, police ka aatyachar aur janta ka zabardast aakrosh',
        'Emergency ke baad badlav: "Family Welfare" naamkaran, voluntary approach aur MCH swasthya seva',
        'Cairo ICPD (1994) aur NPP 2000: Target-Free Approach (TFA), prajanan adhikar aur mahila agency',
      ],
    },
    {
      title: 'Do-Bacche Ke Jabran Qanoon Ki Aalochna',
      color: 'yellow',
      thinkers: ['Alka Basu', 'S.Y. Quraishi', 'Nirmala Buch', 'Jean Drèze'],
      points: [
        'Rajyon ke prastav (Assam, UP draft): panchayat chunav, sarkari naukari aur ration se bedakhal karna',
        'Alka Basu: ulta asar; female foeticide badhega, log biwi ko chhodenge ya baccha chhupayenge',
        'S.Y. Quraishi ("The Population Myth"): aabadi khud ghat rahi hai; dharmiya dushprachar ko kharij kiya',
        'Nirmala Buch: panchayat disqualification garib aur Dalit mahilaon ko sabse zyada saza deta hai',
      ],
    },
    {
      title: 'Nasbandi Ka Bhedbhav-Purna Asantulan',
      color: 'mint',
      thinkers: ['Leela Visaria', 'Kavita Bhatia', 'Kamla Bhasin', 'Mary John'],
      points: [
        'NFHS-5 chaukane wale aakde: 37.9% mahila nasbandi (tubectomy) banam sirf 0.3% purush vasectomy',
        'Patriarchal andhvishwas: vasectomy se mardangi khatam hone aur sharirik kamzori ka jhootha darr',
        'Sarkari laparwahi: garib mahilaon ke sterilization camps lagana (jaise 2014 Bilaspur tragedy)',
        'Spacing methods ki andekhi: condoms (~9.5%) aur pills (~5.1%) ko badhava na milna',
      ],
    },
    {
      title: 'Shadi Ki Umra Ka Vivad (18 Se 21)',
      color: 'pink',
      thinkers: ['Jaya Jaitly', 'Mary John', 'Flavia Agnes', 'Madhu Kishwar'],
      points: [
        'Prohibition of Child Marriage Amendment Bill: ladkiyon ki shadi ki umra 18 se 21 karne ka prastav',
        'Samarthak (Jaitly committee): kam MMR/IMR, ladkiyon ki college padhai aur rojgari ke avsar',
        'Samajshastriya aalochna (Mary John & Agnes): kattarpanthi mata-pita prem vivah rokne ke liye use karenge',
        'Asli hal: muft secondary school, sasta transport aur ladkiyon ko naukari dena sabse bada sahara hai',
      ],
    },
  ],
}

export const topic3HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u14-01-demographic-transition-policy.webp',
    alt: 'P2 Unit 14 infographic: Demographic Transition & Policy — Population Growth, Dividend & Shift from Targets to NPP 2000',
    caption:
      'Bharat ki jansankhya neeti ka itihas Emergency ke jabran target-system se nikal kar NPP 2000 ke aam nagrik ke prajanan adhikar aur mahila shaktikaran tak pahuñchne ki kahani hai.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 24 Visual 01',
  },
  {
    kind: 'md',
    body: `## Jabran Target Se Prajanan Adhikar Tak: Jansankhya Neeti Ka Vikas

Bharat duniya ka pehla aisa desh tha jisne **1952 mein rashtriya star par Family Planning Programme** ki shuruat ki thi. Shuruat mein sarkari neeti "clinical approach" par aadharit thi, jahan bade shaharon mein clinics khole gaye aur yeh umeed ki gayi ki log khud aakar garbhnirodhak mangenge. Lekin gaon mein iska asar na hone par 1960s mein sarkar ne "extension approach" apnaya, jismein cafeteria approach (condoms, Lippes loop, pills) ka prachar kiya gaya.

Lekin 1975–77 ke Emergency ke dauran jansankhya neeti ne ek behad aatankkari roop le liya. Afsaron aur netaon ko zabardasti ke targets diye gaye, jiske chalte police aur prashasan ne garib, pichhde aur minority purushon ko pakad-pakad kar forced nasbandi (vasectomy) camps mein daal diya [[eg:Delhi ke Turkman Gate par police ki barbarta aur zabardasti ki nasbandi]]. 1977 mein jab sarkar giri, toh yeh baat saaf ho gayi ki aabadi niyantran ke naam par janta ki azaadi nahi chhini ja sakti. Iske baad parivar niyojan ka naam badal kar **Family Welfare** kar diya gaya aur rajneeti agle 20 saal tak aabadi par baat karne se darti rahi.

Asli badlav 1990 ke dashak mein aaya jab ==1994 mein Cairo ICPD Conference== hui. Demographers [[thinker:Pravin Visaria]] aur [[thinker:Leela Visaria]] ne dikhaya ki Cairo ne us purani soch ko poori tarah khatam kar diya jahan auraton ke sharir ko aabadi kam karne ki machine samjha jata tha. Cairo ne yeh sidhant sthapit kiya ki jab tak mahilaon ko unke prajanan adhikar, sharirik azaadi aur shiksha nahi milegi, tab tak jansankhya sthir nahi hogi. Isi soch par Bharat ki **National Population Policy (NPP 2000)** bani, jise M.S. Swaminathan committee ne taiyar kiya tha.

| Neeti Ka Charan | Karya Pranali | Mukhya Madhyam | Samajshastriya Mulyankan |
| :--- | :--- | :--- | :--- |
| **First Plan (1952)** | Clinical Approach | Shahri static clinics | Gaon tak nahi pahuñcha; aam janta se door raha |
| **1960s–1970s** | Extension & Target Model | Sarkari targets aur paise ka lalach | ANMs aur swasthya kramiyon par upar se dabav |
| **Emergency (1975–77)** | Coercive Nasbandi | Forced vasectomy camps | Manavadhikar hanan; sarkari aspatalo par se bharosa utha |
| **Cairo ICPD (1994)** | Rights-Based Framework | Bodily autonomy aur voluntary choice | Demography ko aurat ki azaadi se joda |
| **NPP 2000** | Target-Free Approach (TFA) | Unmet needs ko poora karna, PRIs | Number ginne ke bajaye swasthya aur samanta par focus |`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1952',
        title: 'National Family Planning Programme Ka Aagaz',
        text: 'Bharat duniya ka pehla desh bana jisne rashtriya sthar par sarkari parivar niyojan shuru kiya.',
      },
      {
        year: '1976',
        title: 'Emergency Aur Jabran Nasbandi Quotas',
        text: 'Sarkari afsaron aur police dwara purushon ki jabran nasbandi karwayi gayi, jisse loktantrik aakrosh paida hua.',
      },
      {
        year: '1977',
        title: 'Family Welfare Ke Roop Mein Nayi Shuruat',
        text: 'Jabran quotas ko band kiya gaya aur parivar niyojan ko maa aur bacche ke swasthya (MCH) se joda gaya.',
      },
      {
        year: '1996',
        title: 'Target-Free Approach (TFA) Ki Ghoshna',
        text: 'Sarkar ne ANMs aur gaon ke health workers ke sir se nasbandi ke mandatory targets ko hamesha ke liye hata diya.',
      },
      {
        year: '2000',
        title: 'National Population Policy (NPP 2000)',
        text: 'Mahilaon ki voluntary choice, Panchayati Raj Institutions dwara sewayen aur contraception ki kami ko poora karne ka sankalp liya.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Do-Bacche Ke Jabran Qanoon Ka Vivad: Basu Aur Quraishi Ki Aalochna

Jahan ek taraf Bharat ki Total Fertility Rate gir kar 2.0 (NFHS-5) par aa chuki hai, wahi doosri taraf kayi rajyon mein Do-Bacche ka qanoon (two-child norm) laane ki maang uthti rehti hai [[eg:Assam ki population policy aur UP ka draft population control bill]]. In qanoono ke mutabiq do se zyada bacche hone par panchayat chunav ladne, sarkari naukari pane ya sarkari yojanaon ke labh lene par rok lagane ka prastav hota hai.

Lekin samajshastri aur vishleshak iski kadi aalochna karte hain:
- **Alka Basu Ka Unintended Consequences Tarka**: Demographer [[thinker:Alka Basu]] ne bataya ki jab tak samaj mein bete ki chahat (son preference) barkarar hai, tab tak do-bacche ka qanoon mahilaon ke liye maut ka farman ban jata hai. Parivar do bacchon mein se kam se kam ek beta chahte hain, isliye woh ladkiyon ki bhrun-hatya (sex-selective abortion) aur tezi se karte hain. Sath hi, mard panchayat chunav ladne ke liye apni patniyon ko talaq de dete hain ya chhod dete hain [[trap:Yeh sochna ki kanoon aabadi rok dega; Basu ne dikhaya ki isse female foeticide aur mahila utpeedan badhta hai]].
- **Nirmala Buch Ka Panchayat Shodh**: Nirmala Buch ke ground studies ne darshaya ki do-bacche ke niyam se gaon ki garib, kam-umra aur Dalit mahilaayein sabse zyada disqualification ka shikar hoti hain, jabki bacche paida karne ka faisla unka apna nahi hota.
- **S.Y. Quraishi Ki Kitab 'The Population Myth'**: Purva Chief Election Commissioner [[thinker:S.Y. Quraishi]] ne apni 2021 ki pustak mein aakdon se sabit kiya ki aabadi ka badhna ya ghatna dharm se nahi, balki mahila ki padhai aur garibi se tay hota hai. Kerala mein Muslim mahilaon ka TFR (2.25) Bihar ki Hindu mahilaon (2.88) se kafi kam hai, isliye aabadi par dharmiya vivad ek jhootha political myth hai.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Target-Driven Zabardasti Ka Daur (1970s)',
    rightTitle: 'Cairo Aur NPP 2000 Ka Adhikar Daur',
    rows: [
      {
        aspect: 'Mool Soch',
        left: 'Malthusian darr: aabadi ko sansadhano ke liye sankat manna',
        right: 'Manavadhikar: har nagrik ka apne sharir aur parivar par azaad faisla',
      },
      {
        aspect: 'Health Workers Ki Sthiti',
        left: 'ANMs aur doctors par nasbandi quotas poora karne ka dabav',
        right: 'ASHAs aur ANMs parivar ko sahi jankari aur suvidha deti hain',
      },
      {
        aspect: 'Karyashaili',
        left: 'Zabardasti ke mass sterilization camps aur cash lalach',
        right: 'Voluntary cafeteria approach: condoms, pills, copper-T aur injections',
      },
      {
        aspect: 'Mahila Ka Sthan',
        left: 'Auraton ko sarkari medical interference ka target manna',
        right: 'Ladkiyon ki padhai, der se shadi aur aatmanirbharta ko badhana',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Nasbandi Ka Gender Asantulan: 37.9% Mahila Banam 0.3% Purush

Bharat ke parivar niyojan ki sabse sharmnak haqeeqat yeh hai ki parivar rokne ka 99% bojh akele mahilaon ke kandhon par daal diya gaya hai. NFHS-5 ke official aakde batate hain ki **mahila nasbandi (tubectomy) kul contraception ka 37.9% hai**, jabki **purush nasbandi (vasectomy) girte-girte sirf 0.3% par atki hui hai**. Yeh tab hai jab vasectomy medically behad saral, bina taanke wali aur surakshit hoti hai, jabki tubectomy ek bada abdominal operation hai jismein jaan ka khatra rehta hai.

Samajshastri is ghor asamanata ke mukhya karan batate hain:
1. **Mardangi Ka Jhootha Bhram**: Bharatiya patriarchal samaj mein purushon mein yeh galatfehmi hai ki vasectomy karwane se unka sharir kamzor ho jayega, unki "mardangi" chali jayegi aur woh mehnat-mazdoori nahi kar payenge.
2. **Prajanan Ko Sirf Aurat Ka Kaam Samjhna**: Purush pradhaan soch mein baccha paida karna aur baccha rokna dono sirf aurat ki zimmedari maan li gayi hai [[link:Unit 18 Patriarchy, Entitlements & Division of Labour]]. Mard garbhnirodhak ko "aurat ka jhanjhat" samajh kar palla jhad lete hain.
3. **Sarkari Sterilization Camps Ki Laparwahi**: Prashasan ke liye gaon ki garib mahilaon ko bus mein bhar kar sterilization camps mein laana sabse aasan hota hai. Is sarkari andhadhundpan ke karan kayi hadse hue [[eg:Chhattisgarh ke Bilaspur mein 2014 ka sterilization hadsa jahan ghatiya dawaiyon aur gandagi ke karan kuch hi ghanton mein 13 garib mahilaon ki tadap-tadap kar maut ho gayi]].
4. **Spacing Tariko Ka Abhav**: Sarkar ne hamesha permanent nasbandi par dhyan diya, jabki condoms (~9.5%) aur pills (~5.1%) jaise aasan tariko ko garib gaon tak nahi pahuñchaya.`,
  },
  {
    kind: 'keyTerm',
    term: 'Target-Free Approach (TFA)',
    meaning: '1996 mein shuru ki gayi policy jismein health workers ke liye nasbandi ke mandatory targets ko samapt karke voluntary swasthya seva ko aage laya gaya.',
  },
  {
    kind: 'keyTerm',
    term: 'National Population Policy 2000 (NPP 2000)',
    meaning: 'Bharat ki rashtriya aabadi neeti jiska uddeshya prajanan adhikar, mahila shiksha, aur shishu v mata mrityu dar ko kam karna hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Cairo ICPD 1994',
    meaning: 'Jansankhya v vikas par antarrashtriya sammelan jisne coercive targets ko hamesha ke liye kharij karke reproductive rights aur female agency ko sthapit kiya.',
  },
  {
    kind: 'keyTerm',
    term: 'Nasbandi Ka Gender Asantulan',
    meaning: 'Bharat mein parivar niyojan ki woh vishamta jahan 37.9% mahilaayein tubectomy karwati hain lekin sirf 0.3% purush vasectomy karwate hain.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'S.Y. Quraishi Aur Aabadi Ka Dharmik Sach',
    body: 'UPSC ke uttar mein dharmiya prajanan antar par S.Y. Quraishi ki kitaab "The Population Myth" ka hawala dein: aabadi ka badhav dharm se nahi, balki garibi aur mahila saksharta se nirdharit hota hai. Jaise-jaise shiksha badhti hai, sabhi samudayon ki prajanan dar barabar hoti ja rahi hai.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Shadi Ki Umra Badhane Par Feminist Aalochna Likhein',
    body: 'Jaya Jaitly committee ki sifarish (ladkiyon ki shadi ki umra 18 se 21 saal) par sirf sarkar ki tareef mat karein. Mary John aur Flavia Agnes ki feminist aalochna zaroor likhein ki qanooni rok lagane se kattarpanthi mata-pita prem vivah karne wale ladke-ladkiyon par case thok dete hain; asli zaroorat muft college aur rojgari ki hai.',
  },
  {
    kind: 'answerBox',
    intro:
      'Bharat mein parivar niyojan ko purush-uttardayi aur gender-equal banane ka policy framework:',
    points: [
      'Non-Scalpel Vasectomy (NSV) Ka Prachar: Purushon ke mardangi aur sharirik kamzori ke andhvishwas ko todne ke liye bade paimane par social campaigns chalana.',
      'Spacing Contraception Ko Muft Aur Aasan Banana: Condoms, DMPA injections aur oral pills ko sabhi primary health centres aur chemist shops par bina jhijhak ke uplabdh karana.',
      'Mass Sterilization Camps Par Purna Rok: Supreme Court ke Devika Biswas case (2016) ke faisle ko sakhti se lagoo karna taaki gaon ki auraton ko ghatiya camps mein surgery ka shikar na banaya jaye.',
      'Purushon Ki Counselling: ASHA aur ANM dwara gharon mein jakar patiyon aur yuva ladkon ko parivar niyojan mein hissedari ke liye samjhana.',
      'Ladkiyon Ko Muft Uchh Shiksha: Gaon ki ladkiyon ke liye safe bus transport aur college tak muft padhai sunishchit karna taaki shadi ki umra bina dande ke swabhavik roop se badhe.',
    ],
    conclusion:
      'Parivar niyojan tab tak adhoora aur anyaypurna rahega jab tak 99% dard sirf auratein sahegi. Asli badlav tab aayega jab contraception ek mahila ka balidan na hokar pati-patni ki barabar zimmedari banega.',
  },
]
