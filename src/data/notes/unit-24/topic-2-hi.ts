import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic2HiMindMap: MindMapData = {
  title: 'Topic 2 · Jansankhya Vridhi Ke Ghatak: Janam, Mrityu, Pravasan',
  center: 'Demographic Ghatak Aur Gatishilta',
  subtitle: 'Davis-Blake Variables • Circular Labour Migration • Gendered Mobility • Regional Interlocking',
  branches: [
    {
      title: 'Davis-Blake Intermediate Variables',
      color: 'lavender',
      thinkers: ['Kingsley Davis', 'Judith Blake', 'Ronald Freedman', 'John Bongaarts'],
      points: [
        '11 madhyavarti char (intermediate variables): sambhog, garbh-dharan aur garbh-kal mein vibhajit',
        'Samajik sanrachna biology ko nirdharit karti hai: jati, shiksha aur patriarchy inhi charon se asar dalti hai',
        'Intercourse ghatak: shadi ki umra mein badhotari, celibacy, vidhwa punarvivah ke niyam',
        'Garbh-dharan aur garbh-kal: aadhunik garbhnirodhak (NFHS-5 67%), abortion, aur son meta-preference',
      ],
    },
    {
      title: 'Antar-Rajya Shram Pravasan',
      color: 'yellow',
      thinkers: ['Amitabh Kundu', 'Jan Breman', 'Chinmay Tumbe', 'Ravi Srivastava'],
      points: [
        'Census 2011: ~45.3 crore aantarik pravasi (37% aabadi); mukhyatah gaon se shahar ya gaon se gaon',
        'Amitabh Kundu: exclusionary urbanization, saste aawas ka abhav aur mausam-aadhrit circular pravasan',
        'Jan Breman ka "Footloose Labour": construction, eent-bhattha aur asangathit kshetra mein sthayi anishchitta',
        '2020 reverse migration: shahri nagrikta ka abhav, asangathit majdooron ki bebasi, gaon ka kinship safety net',
      ],
    },
    {
      title: 'Pravasan Ka Gender Pehlu',
      color: 'mint',
      thinkers: ['Irawati Karve', 'Patricia Uberoi', 'Neetha N.', 'Indrani Mazumdar'],
      points: [
        'Vivah pravasan ka dabdaba: kul pravasan ka ~46–49%; gaon se bahar shadi ka niyam (village exogamy)',
        'Swatantra mahila labour migration: gharelu kaam, caregiving aur garment udyog mein akeli mahilaon ka aana',
        'Kshetriya corridors: Kerala ki nurses metro/Gulf mein; Jharkhand/Bengal ki ladkiyan Delhi ke gharon mein',
        'Shoshan aur chunautiyan: placement agencies ki thagi, kam majdoori, akelepan aur POSH ka abhav',
      ],
    },
    {
      title: 'Prajanan-Mrityu Kshetriya Mel',
      color: 'pink',
      thinkers: ['Amartya Sen', 'Jean Drèze', 'Abdel Omran', 'K.S. James'],
      points: [
        'Teen aapas mein jude tatva: mahila saksharta, shishu jeevan-raksha aur vivah ki umra ek doosre ko badhate hain',
        'Drèze & Sen: 1 saal ki extra mahila shiksha TFR ko aamdani se zyada tezi se kam karti hai',
        'Child survival hypothesis: IMR girne se parivar "insurance bacche" paida karna band kar dete hain',
        'Epidemiological transition: kuposhan aur sankarmi rog banam lifestyle bimariyon ka dohra bojh',
      ],
    },
  ],
}

export const topic2HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u14-02-emerging-population-issues.webp',
    alt: 'P2 Unit 14 infographic: Sex Ratio, Ageing, Health & Migration — Missing Girls, Ageing Feminization, Health & Migration',
    caption:
      'Jansankhya vridhi prajanan ke samajik niyamon, mrityu dar ke badlav aur gender v vargiya pravasan ke aapas mein milne se tay hoti hai.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 24 Visual 02',
  },
  {
    kind: 'md',
    body: `## Prajanan Ke Samajik Niyamak: Davis Aur Blake Ka Framework

Aasaan bhasha mein samjhein toh kisi bhi samaj mein bacche paida hona sirf ek biological (jeev-vaigyanik) ghatna nahi hoti, balki yeh poori tarah se us samaj ke sanskritik niyam, parivar ki sanrachna aur arthik halat par nirbhar karta hai. 1956 mein prasiddha samajshastri [[thinker:Kingsley Davis]] aur [[thinker:Judith Blake]] ne bataya ki jati, dharm ya garibi jaise samajik tatva aabadi par seedhe asar nahi dalte. Yeh samajik tatva **11 Madhyavarti Charon (Intermediate Variables)** ke madhyam se hi biological process ko prabhavit karte hain, jise baad mein [[thinker:John Bongaarts]] ne proximate determinants kaha.

Davis aur Blake ne in 11 charon ko teen mukhya charnon mein baanta:
1. **Sambhog Ko Prabhavit Karne Wale Char (Intercourse Variables)**: Vivah ki umra (entry into sexual unions), ajeevan brahmacharya, shadi-shuda jeevan mein dharmik tithi par brahmacharya ya bachhe ke janam ke baad post-partum abstinence.
2. **Garbh-Dharan Ko Prabhavit Karne Wale Char (Conception Variables)**: Kuposhan ya bimari ke karan prajanan kshamata (fecundity), garbhnirodhak tarike (condoms, pills, copper-T) aur swayam chuni gayi nasbandi.
3. **Garbh-Kal Ko Prabhavit Karne Wale Char (Gestation Variables)**: Anachahi abortion (miscarriage) aur ichhit abortion ya sex-selective female foeticide.

Aaj ke Bharat mein fertility decline inhi charon ke zariye kaam karta hai. Ladkiyon ki padhai badhne se shadi ki umra badhi hai (exposure variable), garbhnirodhak ka prayog badh kar ==NFHS-5 mein 67% tak pahuñch gaya hai== (conception variable), aur behtar aspatalon se garbhwati mahilaon ki suraksha badhi hai.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Samajik Sanrachna',
        text: 'Jati, dharm, mahila saksharta, patriarchal parivarik dabav aur kheti-badi ka aakar.',
      },
      {
        label: '11 Madhyavarti Char',
        text: 'Vivah ki umra, sambhog ki aavritti, garbhnirodhak ka prayog aur abortion ke niyam.',
      },
      {
        label: 'Biological Prakriya',
        text: 'Garbh-dharan ki sambhavna aur surakshit janam ki prakritik kshamata ka niyamit hona.',
      },
      {
        label: 'Prajanan Natija (TFR)',
        text: 'Desh mein jansankhya sthirikaran, replacement TFR (2.0) ya unchi prajanan dar.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Circular Labour Migration Aur 2020 Lockdown Ka Sach

Bharat mein aantarik pravasan (internal migration) bahut bada hai lekin sath hi behad kamzor aur asurakshit hai. Census 2011 ke anusar desh mein lagbhag **45.3 crore aantarik pravasi** the (jo kul aabadi ka 37% hai). Demographer aur shahri arthshastri [[thinker:Amitabh Kundu]] ne ujagar kiya ki Bharat ka shahrikaran "exclusionary" (bahishkar-kari) hai: hamare shahar gaon ke majdooron ka shram toh nichod lete hain, lekin unhe na toh sasta aawas dete hain, na safai aur na hi sthayi nagrikta ke adhikar. Is wajah se karodon log **circular ya seasonal migration** (chakriya pravasan) karne par majboor hain.

Samajshastri [[thinker:Jan Breman]] ne is asangathit varg ko **footloose labour** (bhatakta shram) kaha hai. Yeh majdoor thekedaron ke zariye gaon se laaye jate hain aur construction sites, eent-bhatthon, pathar ki khadaano aur kapda factory mein temporary kaam karte hain [[eg:Surat ke textile mills mein Odisha ke majdoor aur Delhi metro ke nirman mein Bihar-UP ke shramik]]. Shaharon mein unhe basne nahi diya jata, isliye woh jhopadiyon mein rehte hain aur fasal katai ya tyohar par wapas apne gaon laut jate hain.

March 2020 ke COVID-19 lockdown ne is circular shramik varg ki samajshastriya sachhai ko nanga kar diya:
- **Shahri Nagrikta Ka Ant**: Ek hi jhatke mein factory aur construction band hote hi thekedaron aur landlords ne majdooron ko sadak par chhod diya. Isne sabit kiya ki shahar unhe sirf saste shram ke roop mein dekhte hain, nagrik ke roop mein nahi [[trap:Yeh samajhna ki shahrikaran pravasiyon ko assimilate kar leta hai; Kundu ne dikhaya ki shahar unhe bahar rakhte hain]].
- **Kinship Asal Suraksha Kawach Hai**: Jab sarkar aur shahar ki sahayata band ho gayi, toh lakhon majdoor paidal hi apne gaon ki ore chal pade. Isne dikhaya ki Bharat mein aakhiri samajik suraksha aaj bhi unke gaon ke parivar aur jati ke sambandh (kinship networks) hi hain.
- **Portability Ka Abhav**: Gaon ke ration card shahar mein bekar the, jiske baad sarkar ko *One Nation One Ration Card* (ONORC) aur *e-Shram* portal jaise kadam uthane pade.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Vivah Aadharit Pravasan',
    rightTitle: 'Swatantra Mahila Shram Pravasan',
    rows: [
      {
        aspect: 'Mukhya Karan',
        left: 'Patrilocal gaon-exogamy aur shadi ke baad pati ke ghar jana',
        right: 'Arthik aatmanirbharta, parivar chalana aur khud ki azaadi',
      },
      {
        aspect: 'Aabadi Ka Hissa',
        left: 'Kul aantarik pravasan ka ~46–49%; gaon-se-gaon pravasan mein 80% se zyada',
        right: 'Shahron ki ore tezi se badhta hua varg (shahri mahila pravasiyon ka >15%)',
      },
      {
        aspect: 'Stree Ki Agency',
        left: 'Khandan ke buzurgon dwara tay; pati ke parivar ke adheen jeevan',
        right: 'Khudi kamaai, akele rehna aur parivar ko paise bhejkar decision-making power pana',
      },
      {
        aspect: 'Samajik Khatre',
        left: 'Gharelu akelepan ka shikar, mayke ki social capital se doori, dahej hinsa',
        right: 'Placement agencies dwara thagi, sexual harassment aur maternity leaves ka na milna',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Pravasan Ka Gender Pehlu: Shadi Ka Niyam Banam Mahila Shramik

Data dekhne par pata chalta hai ki Bharat mein lagbhag 70% pravasi mahilaayein hain. Lekin aamtaur par log ise mahila shaktikaran samajh lete hain, jo ki galat hai. Samajshastri [[thinker:Irawati Karve]] ne dikhaya tha ki Uttar Bharat ke rishtedari niyam **village exogamy aur patrilocality** par aadharit hain: ladki apne gaon mein shadi nahi kar sakti aur shadi ke baad use pati ke gaon jana hi padta hai. Isliye aantarik pravasan ka kareeb aadha hissa sirf paramparik shadi ki rasmon ka nateeja hai [[link:Unit 07 Systems of Kinship in India]].

Lekin pichle do dashako mein ek bahut bada samajik badlav aaya hai: **swatantra mahila shram pravasan** (autonomous female labour migration). Samajshastri [[thinker:Neetha N.]] aur [[thinker:Indrani Mazumdar]] ke shodh batate hain ki ab kunwari, talaqshuda aur vidhwa mahilaayein bina kisi purush sanrakshak ke akele shahar ja rahi hain:
- **Gharelu Kaam Aur Caregiving**: Jharkhand, Chhattisgarh aur Bengal ki Adivasi v Dalit yuva mahilaayein Delhi-NCR aur Mumbai mein full-time domestic workers aur aaya/nanny ke roop mein kaam kar rahi hain.
- **Nursing Corridors**: Kerala ki Christian aur lower-middle class mahilaon ka desh bhar ke private aspatalon aur Gulf desho mein ja kar nursing karna, jisne unhe parivar ka mukhya breadwinner bana diya.
- **Export Garment Factories**: Tamil Nadu ke Tirupur aur Hosur ke textile mills mein gaon ki ladkiyon ka aakar hostel-based factory systems (jaise *Sumangali* scheme) mein kaam karna.

Halanki yeh pravasan mahilaon ko aazaadi deta hai, lekin yeh unhe behad asurakshit bhi banata hai: bina registration wali placement agencies, minimum wage na milna, aspatalo aur gharon mein suraksha ka abhav aur shahri landlords ka shaq bhara dhyan.`,
  },
  {
    kind: 'keyTerm',
    term: 'Madhyavarti Char (Davis & Blake)',
    meaning: 'Woh 11 biological niyamak jinke madhyam se samajik, sanskritik aur arthik halat manav prajanan (fertility) par asar daalte hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Footloose Labour (Jan Breman)',
    meaning: 'Shahar aur gaon ke beech lagatar bhatakne wale asangathit shramik, jo sthayi nagrik bane bina hamesha anishchitta aur saste shram mein jeete hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Circular Migration (Amitabh Kundu)',
    meaning: 'Gaon aur shahar ke beech baar-baar hone wala temporary aana-jana, jo shahron mein saste ghar aur sthayi naukari na hone ke karan hota hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Son Meta-Preference',
    meaning: 'Bete ki chahat mein lagatar bacche paida karte rehna jab tak ki beta na ho jaye, jisse lakho "unwanted" ladkiyan paida hoti hain.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Drèze Aur Sen Ka Tri-Factor Siddhant',
    body: 'UPSC ke uttar mein kshetrīya prajanan antar par Jean Drèze aur Amartya Sen ka tarka zaroor likhein: Mahila saksharta, shishu jeevan-raksha aur vivah ki umra, kisi desh ki per-capita aamdani se zyada tezi se prajanan dar ko kam karte hain. Punjab ki tulna mein garib Kerala ne pehle replacement rate hasil kiya.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Shadi Karke Gayi Mahilaon Ko Berozgar Mat Samjho',
    body: 'Yeh galatfehmi mat rakhein ki vivah ke baad dusre gaon ya shahar jane wali mahilaayein koi arthik kaam nahi karti. Woh kheti, doodh utpadan aur gharelu sub-contracting mein 14-14 ghante kaam karti hain, jise sarkari census mein register nahi kiya jata.',
  },
  {
    kind: 'answerBox',
    intro:
      'Bharat ke shahron mein circular migrant majdooron ko qanooni suraksha aur sammanjanak adhikar dene ka policy roadmap:',
    points: [
      'Shahari Pravasi Kalyan Board: Kerala ke Inter-State Migrant Welfare Board ki tarah sabhi udyogic shahron mein pravasiyon ke liye registration aur swasthya bima yojana lagoo karna.',
      'Sasta Aawas Aur Portable Ration: Affordable Rental Housing Complexes (ARHC) ka vistar karna aur One Nation One Ration Card ko asani se sabhi PDS dukaano par uphlabdh karana.',
      'Thekedari Aur Placement Agencies Ka Registration: Occupational Safety Code ke tahat thekedaron aur gharelu kaamwali agencies par kadi nigrani aur minimum wage sunishchit karna.',
      'Mahila Pravasiyon Ke Liye Vishisht Sahayata: Shramik mahilaon ke liye saste crèches, 24x7 crisis helpline aur Working Women Hostels banwana.',
      'Shahri Nagrikta Ka Adhikar: Pravasi majdooron ko shahar mein local identity card dena taaki woh bina mool gaon ke praman-patra ke aspatal aur bacchon ke school mein dakhila le sakein.',
    ],
    conclusion:
      'Circular migrant hamare shahron ko banate hain lekin unhi shahron mein be-ghar bhoot bankar jeete hain. Sachha vikas tabhi hoga jab bhatakte shramikon ko unki mehnat ka samman aur nagrik adhikar milenge.',
  },
]
