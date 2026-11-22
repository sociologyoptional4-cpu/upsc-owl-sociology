import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Paper 2 · Unit 2.1 — Indian Nationalism ka Samajik Prishthabhoomi',
  center: 'Social Background of Indian Nationalism',
  subtitle: 'Colonial Unification • Desai ke Paanch Phases • Subaltern aur Dalit Sangharsh',
  branches: [
    {
      title: 'Colonial Modernity aur Infrastructure',
      color: 'lavender',
      thinkers: ['A.R. Desai', 'Benedict Anderson', 'Bernard Cohn'],
      points: [
        'Railways (1853), telegraph aur post ne kshetriya duri khatam ki',
        'Vernacular aur English press ne ek imagined national community banayi',
        'Colonial state ne caste aur religion codify karke traditionalism banaya',
        'English education ne naye modern intellectual aur vakeel varg ko janam diya',
      ],
    },
    {
      title: 'Desai ka Historical Materialism',
      color: 'yellow',
      thinkers: ['A.R. Desai', 'Karl Marx'],
      points: [
        'Materialist soch: colonial arthik badlaav se naye social classes paida huye',
        'Phase 1–2: Liberal intelligentsia aur emerging industrial bourgeoisie (INC 1885)',
        'Phase 3–4: Militant Swadeshi middle class se lekar Gandhian kisan andolan',
        'Phase 5: Post-1934 radical class polarisation, mazdoor unions aur communalism',
      ],
    },
    {
      title: 'Subaltern aur Dalit Nazariya',
      color: 'mint',
      thinkers: ['B.R. Ambedkar', 'Ranajit Guha', 'Partha Chatterjee'],
      points: [
        'Ranajit Guha: Elite itihaskar kisan aur tribal azaadi ko bhool gaye',
        'Ambedkar: Bina social democracy ke Swaraj matlab Brahmin-bourgeois dabdaba',
        'Non-Brahmin aawazein (Periyar, Phule) ne upper-caste rashtravad ko challenge kiya',
        'Subaltern chetna direct action, traditional prateek aur solidarity se chali',
      ],
    },
    {
      title: 'Exam Angles aur Historiographical Debates',
      color: 'pink',
      thinkers: ['Nicholas Dirks', 'Sumit Sarkar', 'Bipan Chandra'],
      points: [
        'Cambridge School ne rashtravad ko elite groups ki aapsi ladai bataya',
        'Marxist school ne capitalist class ke dohri chaal par ungli uthayi',
        'Nationalist school ne aam jan-andolan aur unity par zor diya',
        'Risley ke 1901 Census ne jatiyon ko rank dekar hierarchy ko sakht kiya',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u02-01-colonial-modernization-chain.webp',
    alt: 'P2 Unit 2 infographic: Colonialism & Indian Modernization — Colonial Impact & Yogendra Singh Tradition-Modernity',
    caption:
      'Angrezi shasan ke prashasanik ekikaran, transport aur arthik badlaav ne anjaane mein Indian nationalism ki zameen tayyar ki.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 2 Visual 01',
  },
  {
    kind: 'md',
    body: `## Indian Nationalism ka Samajik Prishthabhoomi kya tha?

Aasaan shabdon mein samjho: Bharat mein rashtravad koi raaton-raat paida hua chamatkar nahi tha, aur na hi yeh kisi purane zamane ka achanak jaag uthna tha. Angrezon ke aane se pehle, yeh upmahadweep alag-alag riyasaton, aatmanirbhar gaon aur local pehchanon mein bata hua tha — log pehle apni jati, biradari, bhasha ya dharmik sampraday se pehchaane jaate the. ==Indian nationalism== ek aisa lamba aitihasik aur samajik process tha jisme alag-alag vargon aur samudayon ne dhire-dhire yeh mehsoos kiya ki unka sabse bada dushman British colonialism hai aur unhe ek hokar ladna hoga.

Mazedaar virodhabhas yeh hai ki Angrezon ne Bharat ko lootne aur kabze mein rakhne ke liye jo sadhan banaye, unhone hi anjaane mein rashtriya ekta ki neev rakh di. Jab colonial state ne railway track bichhaye, printing press lagaye, ek jaisa kanoon laya aur English schools khole, unka maksad munafa kamana aur administrative control tha. Lekin inhi sadhanon ne alag-alag pranton ke logon ko aapas mein joda aur ek rashtra ki kalpana di. [[trap:Yeh sochna galat hai ki rashtravad sirf angrezi padhe-likhe babuon ki den tha, ya phir poora desh ek sath ek hi din azaadi ke liye khada ho gaya; yeh ek varg-bhed se bhara asaman samajik process tha.]]

## Material Transformation: Infrastructure, Print Media aur Education

British rule ne Bharat ke purane gaon ke akelepan ko teen bade institutional tools se toda:

### 1. Modern Transport aur Communication Networks
1853 mein Indian Railways aur postal-telegraph system ne Bharat ki lambi duriyon ko samet diya. Hazaron saal se bhaugolik akelepan ne jati ke bhedbhav aur chhuachhut ko banaye rakha tha. Lekin train ke dibbe ne alag-alag jatiyon aur dharmon ke logon ko ek sath baithne par majboor kar diya. [[eg:Jab ek Bengali babu, Punjabi vyapari aur Tamil clerk train ke third-class dabbe mein sath baithe, tab chhuachhut ke purane niyam modern safar ke aage dheele padne lage.]]

### 2. Print Media aur Vernacular Public Sphere
Sociologist [[thinker:Benedict Anderson]] ne samjhaya tha ki modern rashtra ==imagined communities== hote hain jo print-capitalism se bante hain. Bharat mein regional bhashaon aur English ke akhbaron — jaise Tilak ke *Kesari* aur Surendranath Banerjee ke *The Bengalee* — ne Madras ke nagrik ko Punjab ke kisanon ke dukh se subah ke akhbar ke zariye jod diya. Print ne ek aisi aawaz banayi jisme Angrezi loot ko har bhasha mein benaqab kiya gaya.

### 3. English Education aur Naya Intelligentsia
Macaulay ke 1835 ke Minute on Education ka maksad aise log taiyyar karna tha jo "khoon aur rang se Hindustani hon, par pasand, vichar aur dimag se Angrez", taaki ve saste clerk ban sakein. Lekin is education ne ulta asar dikhaya — bhartiya yuvaon ne Western philosophy ke azaadi, barabari aur democracy ke vichar padhe aur unhi vicharon se British hukumat par sawaal uthane shuru kar diye.

## A.R. Desai ka Marxist Model: Paanch Dialectical Phases

Apni mashhoor kitaab *Social Background of Indian Nationalism* (1948) mein Marxist sociologist [[thinker:A.R. Desai]] ne bataya ki rashtravad naye samajik vargon ka rajnitik astitva tha jo colonial capitalism ke asar se ubhre the. Desai ne paanch phases ka frame diya:

| Phase | Samay Kaal | Mukhya Samajik Varg Base | Ideological aur Political Swaroop |
| --- | --- | --- | --- |
| Phase 1 | 19th Century se 1885 | Chhota Western-educated intelligentsia | Raja Rammohan Roy dwara prarambh; liberal sudharvad, British insaaf mein vishwas |
| Phase 2 | 1885 se 1905 | Modern bourgeois intelligentsia aur vakeel | Indian National Congress (1885) ka gathan; prarthana aur petition ki rajniti |
| Phase 3 | 1905 se 1918 | Lower middle class, chhatra aur shehri yuva | Swadeshi movement, ugra rashtravad (Lal-Bal-Pal), videshi kapdon ka boycott |
| Phase 4 | 1918 se 1934 | Bada kisan varg aur shehri mazdoor | Gandhian mass movements (Asahayog, Civil Disobedience); capitalist varg ka control |
| Phase 5 | 1934 se 1947 | Batte huye varg: trade unions, socialists vs capitalists | Radical socialist-communist andolan ke sath-sath communalism ka ubhar |

Desai ne dikhaya ki bhartiya poonjipati varg ne rashtriya andolan ko lead toh kiya, par saath hi radical kisan krantiyon ko dabaya taaki unka apna munafa surakshit rahe. [[link:Isko Paper 2 Unit 1 mein Desai ke capitalist state analysis ke sath jod kar dekhein.]]

## Colonial Administrators aur "Backward Tradition" ka Nirman

Kya Angrez sirf wahi likh rahe the jo Bharat mein pehle se maujood tha, ya unhone aisi traditionalism banayi jisse Bharat pichhda dikhe? Post-colonial sociologists [[thinker:Bernard Cohn]] aur [[thinker:Nicholas Dirks]] ne sabit kiya ki Angrezon ne apne kabze ko sahi thehrane ke liye ek khas tarah ka gyaan banaya:

- **1901 ka Risley Census:** H.H. Risley ne naak-kaan naap kar (anthropometry) hazaron fluid jatiyon ko varna ke char dabbon mein baandh diya. Is ranking se alag-alag jati sabhaon mein aapas mein unchi rank paane ki hod lag gayi, jisse jatiwad aur gehra ho gaya.
- **Anglo-Hindu Law ka Codification:** British jajjone local riti-riwazon ko chhod kar Brahminical granthon (jaise *Manusmriti*) ko kanoon bana diya, jisse rigid rules poore samaj par thop diye gaye.
- **Civilizing Mission ka Dhong:** Bharat ko ek sthir aur andhvishvasi samaj dikha kar yeh claim kiya gaya ki sirf British danda hi yahan shanti laa sakta hai.

## Subaltern aur Dalit Nazariya: Mainstream Rashtravad par Sawaal

Mainstream itihaskar hamesha yeh dikhate rahe ki Congress ke jhande tale poora desh ek sath khush hokar lad raha tha. Lekin ground reality aisi nahi thi:

- **Subaltern School ([[thinker:Ranajit Guha]]):** Guha ne bataya ki elite itihas ne aam kisan aur adivasi ke sangharsh ko nazarandaz kiya. Kisanon ka apna ek swatantra daayra (autonomous domain) tha, jo Congress ke ahimsa ke niyam ya petition par nahi, balki seedhe vidroh aur paramparik ekta par chalta tha.
- **[[thinker:B.R. Ambedkar]] ki Dalit Chetna:** Baba Saheb Ambedkar ne chetavani di thi ki bina samajik barabari ke Swaraj ka matlab sirf itna hoga ki gore Angrez chale jayenge aur unki jagah unchi jatiyon ke neta baith jayenge. Unhone maang ki ki jati ka ant aur shoshiton ke adhikar azaadi ke sath-sath milne chahiye. [[eg:Poona Pact (1932) ke dauran Ambedkar aur Gandhi ke beech ka virodh dikhata hai ki Daliton ke liye samajik azaadi utni hi zaroori thi jitni deshi azaadi.]]`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1835',
        title: 'Macaulay ka Minute on Education',
        text: 'Clerk banane ke liye English education shuru hui, par isne anti-colonial intellectuals ko janam de diya.',
      },
      {
        year: '1853',
        title: 'Railways aur Telegraph ki Shuruat',
        text: 'Kachha maal nikalne ke liye bichhi rail ne gaon ka akelapan tod kar logon ko aapas mein joda.',
      },
      {
        year: '1885',
        title: 'Indian National Congress ki Sthapna',
        text: 'Desai ka Phase 2: Moderate vakeelon aur vyapariyon ne pehla pan-Indian political platform banaya.',
      },
      {
        year: '1901',
        title: 'Risley ka Caste Census',
        text: 'Colonial raj ne jatiyon ko rank dekar formal kiya, jisse aapas mein jatiwad aur gehra ho gaya.',
      },
      {
        year: '1905–1908',
        title: 'Swadeshi Andolan',
        text: 'Desai ka Phase 3: Lower-middle-class aur chhatron ne Bengal vibhajan ke khilaf videshi maal ka boycott kiya.',
      },
      {
        year: '1920–1934',
        title: 'Gandhian Jan Andolan',
        text: 'Desai ka Phase 4: Asahayog aur Civil Disobedience ke zariye laakhon gaon ke kisan rashtriya rajniti mein jude.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Colonial Loot', text: 'Lagari taxation, railway aur English administrative machine shuru hui' },
      { label: 'Naye Classes', text: 'Industrial poonjipati, middle class intelligentsia, aur kisan varg ubhre' },
      { label: 'Rashtriya Chetna', text: 'Akhbar aur transport ne alag-alag gusse ko ek national pehchan di' },
      { label: 'Bourgeois Hegemony', text: 'Congress ne andolan ko lead kiya par kisan kranti par lagaam rakhi' },
      { label: 'Subaltern Challenge', text: 'Daliton (Ambedkar) aur kisanon ne elite dominance par sawal khade kiye' },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Social Background of Nationalism',
    meaning:
      'A.R. Desai ka materialist framework jo batata hai ki Indian nationalism colonial capitalism aur purane feudal samaj ke takraav se janma tha.',
  },
  {
    kind: 'keyTerm',
    term: 'Colonial Construction of Tradition',
    meaning:
      'Colonial census aur kanoon dwara fluid aur badalte samajik niyamon ko ek rigid aur pichhde traditionalism mein badalne ka process.',
  },
  {
    kind: 'keyTerm',
    term: 'Print-Capitalism',
    meaning:
      'Benedict Anderson ka concept jisme local bhashaon ke akhbaron ne dur-dur baithe logon ko ek rashtra ki kalpana mein piroya.',
  },
  {
    kind: 'keyTerm',
    term: 'Subaltern Autonomy',
    meaning:
      'Ranajit Guha ka concept jiske anusaar kisan aur adivasi vidroh elite netaon se alag apni aazad chetna se lade the.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Angle: Rashtravad ko kabhi ek akela monolith mat likho',
    body: '20-mark ke answer mein hamesha alag-alag nazariye dikhao: Marxist (Desai ke class phases), Subaltern (Guha ka swatantra kisan daayra), Anti-caste (Ambedkar ka samajik loktantra), aur Cambridge School (elite netaon ki aapsi seat ladai).',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Desai ke 5 Phases ka Revision Mnemonic (I-B-S-M-P)',
    body: 'A.R. Desai ke paanch daur yaad rakhein: Intelligentsia reform (pre-1885) -> Bourgeois moderates (1885) -> Swadeshi militants (1905) -> Mass Gandhian peasantry (1920) -> Polarized class struggles (post-1934).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Risley ke Census ko neutral data collection mat samjho',
    body: 'Herbert Risley ka 1901 census koi aam ginti nahi thi; yeh colonial satta ka hathiyar tha jisne jatiyon ko unchi-neechi rank dekar unke beech ladai badhayi aur rashtriya ekta ko kamzor kiya.',
  },
  {
    kind: 'answerBox',
    intro:
      'Indian nationalism colonial institutional badlaav, naye capitalist varg sambandh aur subaltern sangharsh ke aapas ke takraav se janma tha.',
    points: [
      'Material infrastructure: Railways, daak-taar aur print media ne bikhre huye pranton ko ek imagined community mein baandha.',
      'Class dynamics (A.R. Desai): Capitalist badlaav se vyapari varg, modern intelligentsia aur kisan ubhre jinhone paanch phases mein andolan chalaya.',
      'Traditionalism ka nirman: Risley ke 1901 Census aur Anglo-Hindu law ne fluid jatiyon ko rigid pichhda roop diya taaki colonial raj bana rahe.',
      'Subaltern swatantrata (Ranajit Guha): Kisanon aur adivasiyon ne elite constitutional tareeqon se alag hokar direct action se ladai ladi.',
      'Dalit chetna (B.R. Ambedkar): Mainstream rashtravad ko aaina dikhaya ki bina jati vinash aur aam nagrik barabari ke Swaraj adhoora hai.',
    ],
    conclusion:
      'Is tarah Indian nationalism koi ek elite manch nahi tha, balki azaadi ke sath samajik nyay paane ki ek lamba samajik andolan tha.',
  },
]

export const topic1Hi: TopicLangContent = {
  summary:
    'Indian nationalism colonial prashasanik ekikaran, print-capitalism aur naye class sambandhon ke takraav se ubhra, jisme elite constitutional andolan ke sath-sath swatantra subaltern sangharsh bhi shamil the.',
  mindMap,
  sections,
}
