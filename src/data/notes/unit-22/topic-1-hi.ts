import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

export const topic1Hi: Pick<
  TopicNotebookSpec,
  'summary' | 'mindMap' | 'sections'
> = {
  summary:
    'Aasaan bhasha mein samjhein toh yeh topic Bharat ke rashtra-nirman (state-nation model) ko samjhata hai, jahan dharamik aur bhashayi vividhta ko dabane ke bajaye loktantrik sanvidhan ke zariye joda gaya. Isme dekhenge ki kaise Dalit aur pichhdi jatiyon ke rajnitik astitva ne loktantra ko gahra banaya (Yogendra Yadav ka Second Democratic Upsurge), B.R. Ambedkar ne samajik loktantra ko aavashyak shart kyun bataya, aur nagrikta tatha dastavez-aadhrit niyam (NRC/CAA) par samajshastriya bahas kya hai.',
  mindMap: {
    title: 'Rashtra, Loktantra aur Nagrikta',
    center: 'Rashtra aur Nagrikta',
    subtitle: 'State-Nation • Loktantrik Lahrein • Ambedkar ka Samajik Loktantra • Dastavezi Niyam',
    branches: [
      {
        title: 'Rashtra-Nirman aur Vividhta',
        color: 'lavender',
        thinkers: ['Alfred Stepan', 'Juan Linz', 'Yogendra Yadav', 'T.K. Oommen'],
        points: [
          'State-Nation model: Vividh sanskritik pehchanon ko ek hi sanvidhanik chhat ke neeche sthan mila',
          'Western nation-state ke ek-sanskriti dabav ke viprit Bharat ne bahulata ko apnaya',
          'Dharamik vividhta ko samasya nahi balki buniyad banaya gaya (Articles 25–30)',
          'Nagrik pehchan kisi ek bhasha ya dharam se nahi, sanvidhanik naitikta se bandhi hai',
        ],
      },
      {
        title: 'Loktantra ka Vistar aur Lahrein',
        color: 'yellow',
        thinkers: ['Yogendra Yadav', 'Christophe Jaffrelot', 'B.R. Ambedkar'],
        points: [
          'Pehli lehar (1950s–60s): Congress pranali, sarvbhaumik matadhikar aur elite netritva',
          'Doosri lehar (1990s): Mandal daur, Dalit-Pichhda matdan aur sansad mein aam jan ki entry',
          'Silent revolution: Bina kisi hinsa ke satta ka uchh jatiyon se pichhde vargon tak hastantaran',
          'Teesri lehar (2000s–aaj): Haq-aadhrit kanoon (RTI, MGNREGA) aur labharthi-varg',
        ],
      },
      {
        title: 'Ambedkar aur Samajik Loktantra',
        color: 'mint',
        thinkers: ['B.R. Ambedkar', 'Gail Omvedt', 'Eleanor Zelliot'],
        points: [
          'Virodhabhaso bhara jeevan: Rajnitik barabari (ek vyakti, ek vote) banam samajik as समानता',
          'Samajik loktantra ka arth: Sanjhi sajhedari aur aapsi bhaichara (fraternity)',
          'Jati ka vinash (Annihilation of Caste) bina sachha loktantra asambhav hai',
          'Rajniti mein vyakti-puja (bhakti) tanashahi aur vinash ka seedha rasta hai',
        ],
      },
      {
        title: 'Nagrikta aur Dastavez ki Rajniti',
        color: 'pink',
        thinkers: ['Niraja Gopal Jayal', 'Kamal Sadiq', 'T.H. Marshall'],
        points: [
          'Jus soli (janm-bhoomi) se jus sanguinis (vansh-aadhar) ki taraf badhta jhukav',
          'Paper citizens: Kagazi dastavez substantive nagrikta ka kamzor vikalp ban jate hain',
          'Dastavezi niyam: NRC aur CAA ke dauran kagaz-heen garib vargon ki chinta',
          'Marshall ka ulta kram: Bharat mein samajik suraksha se pehle vote ka adhikar mil gaya',
        ],
      },
    ],
  },
  sections: [
    {
      kind: 'figure',
      assetFile: 'p2-u12-01-politics-caste-federalism.webp',
      alt: 'P2 Unit 12 infographic: Democracy, Caste & Decentralization — Party Phases, Vote Banks, PRIs & Asymmetric Federalism',
      caption: 'Party Phases, Vote Banks, PRIs & Asymmetric Federalism — Democracy, Caste & Decentralization ka visual saransh.',
    },
    {
      kind: 'md',
      body: `## Bharat Mein Rashtra-Nirman: State-Nation Banam Nation-State

Aasaan shabdon mein samjho toh Europe mein rashtra tab bane jab ek bhasha, ek dharam aur ek jati ne baki sabhi ko daba diya ya bahar nikal diya. Par aazad Bharat ne bilkul alag rasta chuna. Yahan rashtra-nirman ka matlab kisi ek sanskriti ko thopna nahi tha, balki saikdon bhashaon aur vividh dharmo ko ek sanvidhanik dor mein pirona tha.

Samajshastri [[thinker:Alfred Stepan]], Juan Linz aur [[thinker:Yogendra Yadav]] samjhate hain ki Bharat ek conventional nation-state nahi, balki ek ==State-Nation== hai. Nation-state sabhi nagrikon ko ek hi sanskritik saanche mein dhalne ki koshish karta hai. Iske viprit, state-nation aisi sansthayein banata hai jahan ek vyakti bina kisi hichkichahat ke ek hi samay mein garv se Bengali, Muslim aur Bharatiya teeno ek saath ho sakta hai.

Dharamik aur bhashayi bahulata rashtra-nirman mein rukaavat nahi, balki uski sabse badi takat sabit hui. Sociologist [[thinker:T.K. Oommen]] dikhate hain ki jab bhi kendra ne zabardasti ek bhasha ya dharam thopne ki koshish ki, tabhi vidroh bhadke [[eg:1960s mein Tamil Nadu mein Hindi virodhi andolan]]. Jab Sanvidhan ne minority rights (Articles 25–30) surakshit kiye, toh alag-alag samudayon ka bharosa bharatiya loktantra par pakka ho gaya.

| Aayam | Western Nation-State Model | Indian State-Nation Model |
| :--- | :--- | :--- |
| **Sanskritik Ranniti** | Sabhi ko ek jaisa banana (Assimilation) | Gehri vividhta ka sanvidhanik samman |
| **Pehchan ki Bnavat** | Keval ek mukhya rashtriya pehchan | Kayi sanjhi pehchanon ka aapsi mel |
| **Bhashayi Niti** | Keval ek aadhikarik rashtrabhasha | 8th Schedule (22 manyata-prapt bhashayein) |
| **Dharamik Dancha** | Strict separation ya state religion | Sabhi dharmo ka aadar aur principled distance |
| **Samajshastriya Saar** | Pehle sanskritik samanta, phir nagrikta | Loktantrik nagrikta vividhta ko jodti hai |`,
    },
    {
      kind: 'callout',
      variant: 'upscAngle',
      title: 'UPSC Point of View: State-Nation Lens',
      body: 'Answer likhte waqt Bharat ko bikhra hua ya kamzor rashtra-state mat kaho. Hamesha Stepan, Linz aur Yadav ka State-Nation framework use karo, jisme dikhao ki sanvidhan ne vividhta ko dabane ke bajaye usko shaktishali sansthagat aadhar diya hai.',
    },
    {
      kind: 'md',
      body: `## Loktantra ka Vistar: Elite Varg se Aam Jan ki Bhagidari Tak

Aazadi ke shuruati saalon mein bharatiya loktantra ko mukhyatah angrezi-padhe-likhe, shahar-aadhrit aur uchh-jatiye neta chalate the jise Congress System kaha gaya. Par jaise-jaise sarvbhaumik vayask matadhikar (universal adult franchise) ki takat gaon-dehat tak pahunchi, dharatal par bada badlav aaya. Garib aur pichhde vargon ne samjha ki unka vote hi unke astitva aur samman ka sabse bada hathiyar hai.

[[thinker:Yogendra Yadav]] ne is aitihasik badlav ko ==Democratic Upsurges== ka naam diya. Pashchimi vicharak sochte the ki gareebi aur anpadhta loktantra ko barbad kar degi, lekin Bharat mein ulta hua: garib aur shoshit vargon ne ameer vargon se zyada utsah se matdan karna shuru kiya [[eg:Gramin kshetro mein Dalit aur OBC voter turnout shahri posh colonies se hamesha zyada rehna]].

[[thinker:Christophe Jaffrelot]] is badlav ko ==India's Silent Revolution== (Khamosh Kranti) kehte hain. 1980s aur 1990s ke Mandal daur ke baad North India ki vidhansabhaon mein pichhdi aur Dalit jatiyon ke netaon ki taadad achanak badh gayi, jisse sadiyon purana uchh-jati dabdaba bina kisi khuni kranti ke toot gaya.`,
    },
    {
      kind: 'flow',
      direction: 'horizontal',
      steps: [
        {
          label: 'Pehli Lehar (1950s–60s)',
          text: 'Universal adult franchise lagu hua; Congress system ke tahat elite netaon aur patron-client riston ka raj raha.',
        },
        {
          label: 'Doosri Lehar (1990s)',
          text: 'Mandal aayog aur Bahujan rajniti ka uday; OBC aur Dalit vargon ne chunav jeet kar satta par kabza kiya.',
        },
        {
          label: 'Teesri Lehar (2000s–Aaj)',
          text: 'Haq-aadhrit niyam (RTI, MGNREGA), digital delivery aur aakankshi labharthi varg ki nayi rajnitik chetna.',
        },
      ],
    },
    {
      kind: 'thinkerQuote',
      thinkerSlug: 'br-ambedkar',
      quote: 'On the 26th of January 1950, we are going to enter into a life of contradictions.',
      context: 'Sanvidhan Sabha mein 25 November 1949 ka aakhiri aitihasik bhashan.',
    },
    {
      kind: 'md',
      body: `## Ambedkar Ki Chetavni: Samajik Loktantra Hi Asli Buniyad Hai

25 November 1949 ko Sanvidhan Sabha mein bolte hue [[thinker:B.R. Ambedkar]] ne saaf chetavni di thi. Unhone kaha ki 26 January 1950 se hum ek virodhabhaso bhare jeevan mein pravesh kar rahe hain. Rajniti mein humare paas ==Ek Vyakti, Ek Vote== aur ek vote ka ek moolya hoga; lekin samajik aur aarthik jeevan mein hum ek vyakti ke ek saman moolya ko nakar rahe honge.

Ambedkar ke anusar jab tak ==Samajik Loktantra== sthapit nahi hota, tab tak rajnitik loktantra ret ke teele par khada mahal hai jo kabhi bhi gir sakta hai. Unhone samajik loktantra ko keval sansad tak seemit nahi mana, balki ise aapsi sajhedari (associated living) aur bandhutva (fraternity) ki jeevan-shaili bataya. Jati-vyavastha bandhutva ki dushman hai kyunki yeh 'graded inequality' par chalti hai jahan har jati apne se neeche wale ko nicha dikhati hai [[eg:Gramin ilaqon mein Daliton ko aam kuon ya handpump se paani lene par rok lagana]].

Sociologist [[thinker:Gail Omvedt]] batati hain ki Ambedkar ke liye aarakshan aur kanooni adhikar keval naukri pane ka zariya nahi the, balki sadiyon se vanchit varg ko rajnitik astitva aur aatmasamman dilane ka hathiyar the. Jab pichhde varg rajniti mein aate hain, toh yeh rashtra ko todta nahi balki Ambedkar ke adhoore sapne ko poora karta hai.`,
    },
    {
      kind: 'compare',
      leftTitle: 'Kewal Rajnitik Loktantra',
      rightTitle: 'Vastavik Samajik Loktantra',
      rows: [
        {
          aspect: 'Mukhya Lakshya',
          left: 'Niyamit chunav, kagazi vote ka adhikar aur kanooni niyam',
          right: 'Samajik aatmasamman, aarthik suraksha aur jati-bhedbhav ka ant',
        },
        {
          aspect: 'Satta ki Bnavat',
          left: 'Paramprik elite varg dabe hue vargo par asar banaye rakhta hai',
          right: 'Shoshit aur vanchit varg faisle lene ki prakriya mein hissedar bante hain',
        },
        {
          aspect: 'Bhaichare ka Star',
          left: 'Kamzor samajik mel-jol; jatiye aur dharamik dooriyan kayam',
          right: 'Associated living, aapsi sahanubhuti aur graded inequality ka safaya',
        },
        {
          aspect: 'Ambedkar ka Nazariya',
          left: 'Bina samajik samanta ke kisi bhi din dharashayi ho sakta hai',
          right: 'Ek mazboot loktantrik rashtra jo sanvidhanik naitikta par chalta hai',
        },
      ],
    },
    {
      kind: 'callout',
      variant: 'galtiMat',
      title: 'Answer Writing Galti Se Bachein',
      body: 'Chunav mein jati ke istemal ko seedhe taur par loktantra ka patan mat likho. Rajni Kothari aur Christophe Jaffrelot dikhate hain ki jatiye mobilization ne gaon ke aakhiri aadmi ko bataya ki uske vote mein kitni takat hai, jisse loktantra vastav mein mazboot hua.',
    },
    {
      kind: 'keyTerm',
      term: 'Samajik Loktantra (Social Democracy)',
      meaning:
        'Aisa loktantrik samaj jahan aazadi, samanta aur bandhutva rozmarra ke jeevan ka hissa hon aur samajik-aarthik bhedbhav ko vastav mein khatam kiya jaye.',
      thinkerSlug: 'br-ambedkar',
    },
    {
      kind: 'keyTerm',
      term: 'State-Nation',
      meaning:
        'Aisa rajnitik model jo vividh sanskritiyon, bhashaon aur dharmo ko bina unhe mitaye ek loktantrik sanvidhanik chhat ke neeche jodta hai.',
    },
    {
      kind: 'keyTerm',
      term: 'Second Democratic Upsurge',
      meaning:
        '1980s aur 1990s ke dauran OBC aur Dalit vargon ka bhari sankhya mein chunav ladna aur jeetna, jisse bharatiya sansad aur vidhansabhaon ka chehra badal gaya.',
    },
    {
      kind: 'keyTerm',
      term: 'Paper Citizens',
      meaning:
        'Samajshastriya avdharna jo batati hai ki vikas-sheel deshon mein kagazi dastavez (ration card, voter id) aam logon ke liye vastavik nagrikta ka sahara bante hain.',
    },
    {
      kind: 'md',
      body: `## Samkaleen Nagrikta Debates: Dastavezi Niyam aur Chintayein

Aaj ke Bharat mein nagrikta ka mudda keval ek kanooni adhikar nahi raha, balki kagazat aur identity documents ki ek kathin ladai ban chuka hai. Political sociologist [[thinker:Niraja Gopal Jayal]] batati hain ki Bharatiya Sanvidhan ne shuruat mein nagrikta ko *jus soli* (Bharat ki mitti par janm) ke aadhar par tay kiya tha, par samay ke sath kanoon mein vansh aur dharam (*jus sanguinis*) ke tatva badhte gaye.

Sociologist [[thinker:Kamal Sadiq]] ne ==Paper Citizens== ka concept diya. Unka kehna hai ki South Asia ke garib samaj mein jahan sadiyon se janm-praman-patra banane ka koi riwaj nahi tha, wahan ration card, voter card aur zameen ke kagaz hi vyakti ke astitva ka praman hote hain. Jab sarkar rigid dastavez mangti hai [[eg:Assam NRC prakriya mein 1971 se pehle ke vanshavali kagazat mangna]], toh iska sabse zyada asar garib, anpadh, nadi kinare basne wale aur mahilaon par padta hai.

Samkaleen nagrikta se judi teen badi samajshastriya chintayein hain:
1. **Dastavezi Kamzori:** Baadh-prabhavit ilaqon ke majdoor aur khana-badosh parivar pichhli peedhiyon ke kanooni kagaz sambhal kar nahi rakh pate.
2. **Dharamik Suraksha ki Chinta:** Nagrikta ke niyam mein dharam ko jodna minority samudayon ke andar astitva ka darr paida karta hai.
3. **Digital Pehchan aur Nigrani:** Aadhaar aur biometrics ne nagrikta ko ek rajnitik astitva se badalkar digital ration lene wale labharthi mein badal diya hai.`,
    },
    {
      kind: 'callout',
      variant: 'yaadRakho',
      title: 'Paper 1 ↔ Paper 2 Ka Link Yaad Rakhein',
      body: 'Paper 1 mein T.H. Marshall ne kaha tha ki pehle Civil Rights aaye, phir Political Rights, aur aakhiri mein Social Rights. Bharat (Paper 2) mein iska theek ulta hua: 1950 mein sabhi ko Universal Vote ek raat mein mil gaya, jabki samajik suraksha aur aarthik aazadi ki ladai garib aaj bhi lad rahe hain.',
    },
    {
      kind: 'answerBox',
      intro:
        'Dalit aur pichhdi jatiyon ke rajnitik uday ne bharatiya loktantra ko gahra banaya ya bikhra diya, iska mulyankan dono pehluon se kiya jaana chahiye:',
      points: [
        'Pratinidhitva ka vistar: Vidhansabhaon aur Sansad mein Dalit aur pichhde netaon ki hissedari tezi se badhi, jisse uchh jatiyon ka ekaadhikar toota.',
        'Aatmasamman mein vriddhi: Vanchit varg ke log kisi bade zameendar ke aage hath jodne ke bajaye apne haq se vote mangne aur prashasan se sawal puchhne lage.',
        'Nitiyon mein badlav: Sabhi rajnitik partiyon ko aarakshan, welfare schemes aur pichhde vargon ke liye naye aayog banane par majboor hona pada.',
        'Sub-caste vivad: Pichhdi jatiyon ke andar jo apekshakrit mazboot sub-castes the unhone faida utha liya, jabki atipichhde (EBCs) aur Mahadalit pichhe chhoot gaye.',
        'Parivarwad aur elite capture: Kayi kshetriya partiyan aage chalkar parivar-chalit sangathan ban gayi, jisse unki internal democracy kamzor hui.',
      ],
      conclusion:
        'Nishkarshatah, Dalit aur pichhda rajnitik mobilization ne bharatiya loktantra ko vastav mein aam janta ka loktantra banaya hai, bhale hi aantarik hissedari ki ladai abhi poori tarah sulajh nahi payi hai.',
    },
  ],
}
