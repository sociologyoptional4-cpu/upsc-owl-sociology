import type { NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic5MindMapHi } from './topic-5-mindmaps'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u04-02-parsons-merton-mead.webp',
    alt: 'Paper 1 Unit 4 poster summarizing Talcott Parsons AGIL pattern variables, Robert K Merton 5 strain modes, and GH Mead Preparatory Play Game stages',
    caption:
      'Robert K. Merton ne functionalism ko hawai baaton se nikaal kar dysfunctions, latent functions, structural strain aur middle-range reference groups se zameen par utara.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 4 Visual 02',
  },
  {
    kind: 'md',
    body: `## Robert K. Merton ne Functionalism ko kaise badla?

Aasaan shabdon mein samjho: do mechanics ko ek gaadi dekhte hue socho. Pehla mechanic ek moti philosophy kitab padh kar kehta hai ki gaadi ka har purza shanti se apna kaam kar raha hai; doosra bonnet khol kar dekhta hai ki kaunsa bolt dheela hai, kaunsa purza nuksan kar raha hai, aur uski jagah koi doosra part lag sakta hai ya nahi. Harvard mein Parsons ke hi student rahe [[thinker:Robert K. Merton]] wahi practical mechanic the jinhone functionalism ko andar se sudhara.

Merton ne Parsons ki "Grand Theory" aur bina soch wale "abstracted empiricism" dono ko chhod kar ==Middle-Range Theory== di—aisi chhoti par testable theories jo bureaucracy, deviance ya reference groups jaise khaas muddon ko zameen par test karein. *Social Theory and Social Structure* (1949/1968) mein unhone [[thinker:Bronislaw Malinowski]] aur [[thinker:A.R. Radcliffe-Brown]] ke teen purane assumptions tode:

- **Functional Unity par Chot:** Zaroori nahi har institution sabke saath milkar chale; ek hi dharm chhote kabiley ko jodta hai par kai dharmon wale Bharat mein communal jhagda bhi kara sakta hai.
- **Universal Functionalism par Chot:** Har parampara acchi nahi hoti; Merton ne **Dysfunctions** (nuksan), **Non-functions** (bekar bache riwaj) aur **Net Balance** joda—aur sawaal poochha *"kiske liye functional?"* (ghulami malikon ke liye faydemand thi par ghulamon ke liye tabahi).
- **Indispensability par Chot:** Bachon ki parvarish ya naitikta jaise kaam zaroori hain, par koi ek sanstha majboori nahi—samaj mein hamesha ==Functional Alternatives== hote hain (maa ke saath crèche, dharm ke saath civic ethics).

## Manifest Functions, Latent Functions aur Unanticipated Consequences

Aam log sirf wahi dekhte hain jo sabke saamne bola jaata hai, jabki sociologist parde ke peeche chhipe nateeje pakadta hai. Merton ne **objective observer** ke nazar se ==Manifest Functions== (soch-samajh kar aur jaante hue nikle positive fayde) ko ==Latent Functions== (anjaane aur bin-soche nikle positive fayde—[[thinker:Peter Berger]] ke debunking jaisa) se alag kiya.

- **Classic aur Indian Udaharan:** Hopi tribe barish laane ke liye rain dance karti hai (manifest maksad fail), par anjaane mein poora kabila dar bhool kar ekjut ho jaata hai (latent function). Waise hi board exams ya coaching ka manifest kaam merit check karna hai, par latently yeh hostel-PG economy chalate hain aur laakhon youth ko berozgari ke bazaar se bahar rok kar rakhte hain. [[eg:Bharat mein CVC aur Lokpal ke bawajood corruption isliye tikta hai kyunki manifest rishwat-kamai aur tez file clearance ke alawa yeh latently real estate, chunav kharch aur patronage networks ko cash deta hai—bhale hi aam nagrik ke liye bhari dysfunction laaye.]]
- **Unanticipated Consequences vs Latent Functions:** [[trap:In dono ko ek mat samjho!]] *Unanticipated Consequences* ek bada chhata hai jisme kisi kaam ke sabhi anjaane nateeje aate hain—iske teen hisse hain: **Latent Functions** (anjaana + faydemand), **Latent Dysfunctions** (anjaana + nuksandeh, jaise bureaucrats ki job-security se aane wali lal-fita-shahi) aur **Non-functional** (beasar). Baad mein [[thinker:Colin Campbell]] ne kaha ki official aims aur actor ke asli iradon mein antar hamesha saaf nahi hota.

## Structural Strain, Conformity aur Deviant Subcultures

Ameer deshon mein bhi crime kyun badhta hai? Purane theories sharir ke aakar (Lombroso) ya [[thinker:Émile Durkheim]] ke temporary norm-breakdown (**Anomie**) ko dosh dete the. 1938 ke mashhoor lekh *Social Structure and Anomie* mein Merton ne dikhaya ki modern samaj mein anomie **samaj ke dhanche mein permanent basi hoti hai**—kyunki samaj sabko ek hi **Cultural Goal** (paisa aur safalta, jaise American Dream) dekhne ko kehta hai, par unhe paane ke **Institutionalised Means** (acchi padhai, paise, connections) barabar nahi baant-ta.

Is goal–means ki khaai se **Structural Strain** paida hota hai aur insaan paanch raston mein se ek chunta hai—dikhate hue ki imaandari aur crime ek hi samaj ki upaj hain:

| Adaptation ka Rasta | Cultural Goals | Legal Means | Vyavahar aur Indian Udaharan |
| --- | --- | --- | --- |
| Conformity | Maan-na (+) | Maan-na (+) | Akela non-deviant rasta: mehnat se job ya UPSC tayari karne wale |
| Innovation | Maan-na (+) | Thukrana (−) | Paisa paane ko shortcut: scam, exam paper leak, rishwat, taskari |
| Ritualism | Thukrana (−) | Maan-na (+) | Bade sapne chhod kar sirf office rules se chipke rehna (red tape) |
| Retreatism | Thukrana (−) | Thukrana (−) | Goal aur rasta dono chhodna: nasha, bhatakna, samaj se katna |
| Rebellion | Badalna (±) | Badalna (±) | Purane system ko tod kar naya lakshya-niyam laana: krantikari, baaghi |

[[eg:Ise Bharat ke shehri traffic par lagao: bheed wali sadkon par jab sabka goal jaldi pahunchna ho par acchi sadak-niyam na hon, toh conformist line mein khada rehta hai, innovator red-light todta ya footpath par bike chadhata hai, ritualist bina matlab rule ke peeche horn bajata hai, retreatist safar chhod deta hai aur rebel sadak jam karta hai.]]

Baad ke criminologists ne isme gahrai jodi: [[thinker:Albert Cohen]] ne kaha Merton chori samjhate hain par bina paise wale youth vandalism ("status frustration") ko nahi; [[thinker:Richard Cloward aur Lloyd Ohlin]] ne dikhaya ki galat kaam karne ke mauke bhi sabko barabar nahi milte (Criminal, Conflict aur Retreatist "double failure" gangs); [[thinker:Edwin Sutherland]] ne amiron ke **White-Collar Crime** pakde; aur Marxist [[thinker:Laurie Taylor]] ne kaha Merton yeh poochhna bhool gaye ki khel ke niyam amiron ne hi apne fayde se banaye hain!

## Reference Groups, Relative Deprivation aur Digital Identity

Insaan apni kamyabi khali kamre mein nahi tolta—hum hamesha kisi na kisi group se apni tulna karte hain, jise Merton (Herbert Hyman aur [[thinker:Samuel Stouffer]] ke *American Soldier* adhyayan se) ne ==Reference Group Theory== mein bandha. Hum **Membership Groups** (parivar, dost) ya **Non-Membership Groups** (IAS toppers, celebrities), **Positive** adarshon ya **Negative Reference Groups** (angrez shasak ya aise groups jinke bilkul ulta banna ho), ya kisi ek **Reference Individual** se tulna karte hain.

Jab upar dekhne par kami dikhti hai, tab ==Relative Deprivation== mehsoos hota hai—yahi wajah hai ki zyada promotion milne wali army unit zyada dukhi thi kyunki unki ummid aur comparison group bada ho gaya tha! Is kami ko bharne ko log **Anticipatory Socialisation** karte hain—yaani jis group mein jana hai, pehle se unke kapde, bhasha aur aadat seekhna. [[eg:Bharat mein M.N. Srinivas ka Sanskritisation nichli jaatiyon ka oonchi jaati ko positive reference group manna hai, college youth celebrities se fashion copy karte hain, aur aaj Instagram-LinkedIn par digital identity-making influencer groups dekh kar hoti hai.]]

Lekin yeh tabhi kaam aata hai jab samaj **khula (open)** ho; band jaati ya elite circle mein nakal karne par na naya group apnata hai na purana group izzat deta hai—aur insaan bechara **Marginal Man** ban kar latak jaata hai. Saath hi Merton ne **Status-Set / Role-Set** (ek saath kai bhoomikaon ka tanav), **Matthew Effect** (pehle se mashhoor professor ko student ki khoj ka credit milna—"rich get richer") aur **Self-Fulfilling / Self-Defeating Prophecies** (W.I. Thomas theorem—bank run se lekar Western welfare sudharon dwara Marx ki kranti talne tak) diye. [[link:Merton ke Sanskritisation link ko Paper 2 Unit 4 mein aur bureaucratic ritualism ko Unit 4.3 ke Weber se jodo.]]`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1936',
        title: 'Unanticipated Consequences of Purposive Action',
        text: 'Purposive action ke anjaane natijon ko specifically positive latent functions se alag kiya.',
      },
      {
        year: '1938',
        title: 'Social Structure and Anomie',
        text: 'Deviance ko universal cultural goals aur unequal legitimate means ki khaai se joda.',
      },
      {
        year: '1940',
        title: 'Bureaucratic Structure and Personality',
        text: 'Bureaucracy ke andar rule-obsession (ritualism) aur trained incapacity ki dysfunction dikhayi.',
      },
      {
        year: '1948–1949',
        title: 'Self-Fulfilling Prophecy & Social Theory and Social Structure',
        text: 'Malinowski–Radcliffe-Brown ke postulates tode aur Middle-Range Theory sthapit ki.',
      },
      {
        year: '1955–1960',
        title: 'Cohen aur Cloward–Ohlin Subcultures',
        text: 'Status frustration aur differential illegitimate opportunity structures ka vistaar kiya.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Universal Goal', text: 'Sanskriti har kisi ko paisa aur safalta paane ko kehti hai' },
      { label: 'Blocked Means', text: 'Class, jaati aur school legal raste asaman baant-te hain' },
      { label: 'Structural Strain', text: 'Chahat aur mauke ki khaai se permanent anomie paida hoti hai' },
      { label: '5 Adaptations', text: 'Log Conformity, Innovation, Ritualism, Retreatism ya Rebellion chunte hain' },
      { label: 'Deviant Subculture', text: 'Legal darwaze band hone par peer gangs naye rivaaj banate hain' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Durkheim ka Anomie',
    rightTitle: 'Merton ka Anomie',
    rows: [
      {
        aspect: 'Mool Kaaran',
        left: 'Belagaam ichhaon par samajik naitik lagam tootna',
        right: 'Universal goals aur unequal legal means ke beech darar',
      },
      {
        aspect: 'Samay aur Sthiti',
        left: 'Tez aarthik boom-bust ya badlaav ke beech asthayi daur',
        right: 'Asaman modern samaj ke dhanche mein sthayi structural strain',
      },
      {
        aspect: 'Sabse Zyada Shikar',
        left: 'Ameer ya naye ameer jinki khwahishein bekaabu ho jaayein',
        right: 'Lower/working classes jinke paas legal sadhan kam hain',
      },
      {
        aspect: 'Vyakhya ka Daayra',
        left: 'Mukhya roop se suicide aur sankat ki dishaheenta',
        right: 'Crime, bureaucratic ritualism, nasha, corruption aur kranti',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Middle-Range Theory',
    meaning:
      'Merton ki woh strategy jo bina soche data ikattha karne aur Parsons ki hawai Grand Theory ke beech tay muddon par testable theories banati hai.',
    thinkerSlug: 'robert-k-merton',
  },
  {
    kind: 'keyTerm',
    term: 'Manifest vs Latent Functions',
    meaning:
      'Manifest functions soch-samajh kar aur jaante hue nikle fayde hain; Latent functions anjaane aur bin-soche nikle positive fayde hain jinhe sociologist pakadta hai.',
    thinkerSlug: 'robert-k-merton',
  },
  {
    kind: 'keyTerm',
    term: 'Structural Strain & Five Adaptations',
    meaning:
      'Cultural success goals aur asaman legal means ki takkar se paida strain, jiske 5 jawab Conformity, Innovation, Ritualism, Retreatism aur Rebellion hain.',
    thinkerSlug: 'robert-k-merton',
  },
  {
    kind: 'keyTerm',
    term: 'Reference Group & Anticipatory Socialisation',
    meaning:
      'Woh group jisse hum khud ko tolte hain; naye group ke tareeke pehle se seekhna khule samaj mein madadgar par band samaj mein Marginal Man banata hai.',
    thinkerSlug: 'robert-k-merton',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'robert-k-merton',
    quote: 'Theories of the middle range lie between the minor working hypotheses of day-to-day research and the all-inclusive systematic speculations.',
    context: 'Andhe empiricism aur Parsonian grand theory ke beech sociology ki sahi jagah tay karna (1949).',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2025–2014 PYQ Pattern: Application King of Paper 1!',
    body: 'UPSC sabse zyada practical sawal Merton par poochhta hai: digital identity aur Reference Groups (2025), urban traffic deviance (2014), bureaucrat tenure security (2016), Bharat mein corruption (2014), fashion (2014), aur Durkheim vs Merton Anomie (2018, 2022). 5-adaptation table aur Marginal Man ko ungliyon par rakho!',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Nuksan ko "Latent Function" mat Likhna!',
    body: 'Kai guidebooks kala dhan ya exam stress ko galat tareeke se "latent function" likh deti hain. Yaad rakho: FUNCTIONS hamesha positive hote hain! Anjaane mein hone wale nuksan LATENT DYSFUNCTIONS kehlate hain, aur yeh dono bade chhate Unanticipated Consequences ka hissa hain (2019 PYQ ka asli test!).',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: '3 Tode Gaye Postulates (U-U-I) + 5 Strain Raste (C-I-R-R-R)',
    body: 'Anthropological postulates: Unity, Universalism, Indispensability (U-U-I). Strain modes: Conformity (+/+), Innovation (+/-), Ritualism (-/+), Retreatism (-/-), Rebellion (±/±).',
  },
  {
    kind: 'answerBox',
    intro:
      'Robert K. Merton ne structural functionalism ko middle-range empiricism se jod kar dysfunctions, latent results, structural strain aur reference groups ki samajh di.',
    points: [
      'Revised functionalism: Unity, universalism aur indispensability todkar dysfunctions, functional alternatives aur objective Manifest–Latent farak joda.',
      'Unanticipated consequences: Sabhi anjaane natijon ko specifically positive latent functions aur nuksandeh latent dysfunctions mein alag kiya.',
      'Strain & deviance: Durkheim ke asthayi anomie ko universal goals aur asaman legal means ki sthayi structural khaai (5 adaptations) mein badla.',
      'Reference groups: Relative deprivation, anticipatory socialisation aur marginality ko Sanskritisation, fashion aur digital identity se joda.',
      'Aalochna aur mahatva: Cohen, Cloward–Ohlin, Sutherland aur Campbell ke sawalon ke bawajood Merton applied sociology ke sabse tez vishleshak hain.',
    ],
    conclusion:
      'Sarkari lal-fita-shahi aur corruption se lekar social-media influencer culture tak, Merton ke middle-range concepts aaj ke Bharat par seedhe lagte hain.',
  },
]

export const topic5Hi: TopicLangContent = {
  summary:
    'Robert K. Merton ne Middle-Range Theory, Manifest–Latent functions aur dysfunctions, 5 adaptations wali Structural Strain theory aur Reference Group dynamics ke zariye functionalism ko zameen se joda.',
  mindMap: topic5MindMapHi,
  sections,
}