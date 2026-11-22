import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 7.4 · Protest, Agitation, Social Movements, Collective Action & Revolution',
  center: 'Collective Mobilisation',
  subtitle: 'Blumer & Smelser • Life Cycle • Old vs New Movements • Digital & Revolution',
  branches: [
    {
      title: 'Collective Action & Theories',
      color: 'lavender',
      thinkers: ['Herbert Blumer', 'Gustave Le Bon', 'Neil J. Smelser', 'Charles Tilly'],
      points: [
        'Blumer ke 4 roop: Crowd (emotion), Public (issue), Mass (media), Social Movement',
        'Le Bon Deindividuation (bheed ka nasha) & Merton/Runciman Relative Deprivation',
        'Resource Mobilization (McCarthy, Zald, Jenkins): leaders as entrepreneurs',
        'Smelser ki 6 Value-Added shartein + Tilly/McAdam ka Political Opportunity model',
      ],
    },
    {
      title: 'Life Cycle, Ideology & End',
      color: 'yellow',
      thinkers: ['Herbert Blumer', 'Armand Mauss', 'Charles Tilly', 'Mancur Olson'],
      points: [
        'Stages: Emergence -> Coalescence -> Bureaucratization -> Outcomes -> Decline',
        '5 Endings: Success, Failure, Co-optation (Kejriwal/IAC), Repression, Mainstreaming',
        'Ideology as "social glue" (Fevicol): reality ka chashma aur sadhan ka justification',
        'Chunautiyan: Free-rider problem (Olson), inertia ("sah lenge"), fatigue & phoot',
      ],
    },
    {
      title: 'New Social Movements (NSM)',
      color: 'mint',
      thinkers: ['Alain Touraine', 'Jürgen Habermas', 'Anthony Giddens', 'Ramachandra Guha'],
      points: [
        '1960s ke baad shift: aarthik batware se post-materialist quality of life/identity',
        'Support base: young (18–30) educated new middle class aur decentralized networks',
        'Critique (Jean Cohen) & Guha: Bharat ka environmentalism rozi-roti ("empty belly")',
        'Indian paradox: Primordial means (jaati/dharm/dharna) se Progressive constitutional maang',
      ],
    },
    {
      title: 'Digital Era, Dalits & Revolution',
      color: 'pink',
      thinkers: ['Manuel Castells', 'B.R. Ambedkar', 'Theda Skocpol', 'Pitirim Sorokin'],
      points: [
        'Social media: tez global hashtag mobilisation vs slacktivism & internet shutdowns',
        'Dalit protests: Bhakti -> Phule/Ambedkar (Mahad) -> Dalit Panthers -> BSP satta',
        'Revolution (Skocpol): samajik-aarthik rishton ka poora badlaav (Industrial/1789/1917)',
        'Revolution nahi hain: Military coup, 15 Aug 1947 transfer of power, Green Revolution',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u07-02-state-citizenship-movements.webp',
    alt: 'P1 Unit 7 infographic: State, Citizenship & Movements — State-Society Pipeline & Collective Mobilization',
    caption: 'State-Society Pipeline & Collective Mobilization — State, Citizenship & Movements ka visual saransh.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 7 Visual 02',
  },
  {
    kind: 'md',
    body: `## Sadak ki Bheed se Social Movement Tak ka Safar

Aasaan shabdon mein samjho: jab bhi kuch log kisi maqsad ke liye milkar koi kadam uthate hain, toh use ==Collective Action== kehte hain. Lekin har bheed social movement nahi hoti! [[thinker:Herbert Blumer]] ne collective action ke 4 roop bataye: **1. Crowd** (jo kisi tatkalik emotion jaise dar ya gusse se judti hai [[eg:Delhi mein bus se bache ka accident hone par bheed dwara pathrav karna aur shaam tak bikhar jaana — yeh crowd outburst hai, movement nahi]]), **2. Public** (kisi mudde par behas karne wale log), **3. Mass** (ek hi TV ya akhbar dekhne wale alag-alag log), aur **4. Social Movement**.

**Protest, Agitation aur Social Movement** mein kya farak hai? [[thinker:Ralph Turner]] ke mutabik **Protest** kisi niti ya vyavastha ke khilaf apni aapatti ya na-pasandgi jatana hai jise ek akela insaan rok nahi paata [[eg:college hostel ke kharab mess food ya JNU fee hike ke khilaf students ka virodh, ya Mumbai ke Aarey Forest mein ped katne ke khilaf protest]]. **Agitation** kisi maqsad ko paane ke liye kiya gaya dharna ya hulchul hai. Lekin ==Social Movement (Jan Andolan)== inse kahin bada hai: yeh ek **sustained (lamba chalne wala) collective effort** hai, jiske paas **formal ya informal organisation** aur **ideology** hoti hai, aur jo samajik vyavastha mein **badlaav laane ya kisi galat badlaav ko rokne** ke liye lada jaata hai [[eg:formal Congress ke netritva mein Azaadi ki ladai se lekar informal #MeToo movement tak, ya badlaav rokne wale Narmada Bachao aur Farm Bill protests]].

## Collective Action Kab Social Movement Banta Hai? (5 Mukhya Theories)

Narazgi toh har samaj mein roz hoti hai, par har narazgi andolan kyun nahi banti? Sociology ki 5 theories iska jawab deti hain:

- **1. Deindividuation Theory ([[thinker:Gustave Le Bon]]):** Apni kitab *The Crowd* mein Le Bon ne bataya ki bheed mein ghuste hi insaan ki vyaktigat pehchan aur darr khatam ho jaata hai (**deindividuation**); bheed ki apni ek ugra psychology aur **contagion effect** (bhavnaon ka aag ki tarah failna) hota hai, jismein shant padosi bhi dange ya mob lynching kar baith-ta hai.
- **2. Relative Deprivation Theory ([[thinker:Robert K. Merton]], [[thinker:W.G. Runciman]], [[thinker:M.S.A. Rao]]):** Sirf garibi se andolan nahi hota; jab koi varg doosre group se apni tulna karke mehsoos karta hai ki use uske haq se kam mil raha hai, tab vidroha ki chingari uthti hai.
- **3. Resource Mobilization Theory ([[thinker:John McCarthy]], [[thinker:Mayer Zald]], [[thinker:J. Craig Jenkins]]):** Jenkins aur McCarthy kehte hain ki sirf gusse ya dukh se andolan nahi chalta! Andolan tabhi banta hai jab leaders ek **business entrepreneur** ki tarah Social Movement Organizations (SMOs) banakar zaroori resources — paisa, bheed, pandal, aur media coverage — jutate hain. [[eg:Bhrashtachar se desh sadiyon se pareshan tha, par 2011 mein Anna Hazare aur Arvind Kejriwal ne entrepreneurs ki tarah funding, Ramlila Maidan aur 24x7 TV media juta kar India Against Corruption khada kar diya.]]
- **4. Political Opportunity Structure ([[thinker:Charles Tilly]], [[thinker:Doug McAdam]]):** Andolan tabhi safal hota hai jab **insurgent consciousness** aur sangathan ke saath political system mein koi kamzori ya mauka mile (jaise chunav aana ya elites mein phoot).
- **5. Structural Strain / Value-Added Theory ([[thinker:Neil J. Smelser]]):** Smelser ne **6 anivarya shartein** batayin jo ek ke baad ek judne par hi collective action ko social movement banati hain:
  1. **Structural Conduciveness:** Samaj ka dhancha movement-friendly hona chahiye [[eg:1,000 aabadi wale gaon ya North Korea ki tanashahi ke muqable 1.5 crore aabadi wala democratic Delhi — jahan media houses aur aware university students hain — andolan ke liye kahin zyada conducive hai]].
  2. **Structural Strain:** Samaj ke kisi tabke mein gehra asantosh ("sab changa si" na hona).
  3. **Generalized Belief:** Sabhi logon mein samasya ke kaaran par ek sanjhi samajh banna [[eg:Anna andolan ne rickshaw wale ke ₹50 police hafta aur bade corporate ghotalon ko ek hi shabd "Corruption" ke neeche jod diya]].
  4. **Precipitating Factor:** Ek achanak chingari ya ghatna jo logon ko ghar se sadak par nikaal de [[eg:Rosa Parks ko bus se utarna (US Civil Rights), George Floyd/Trayvon Martin ki hatya (Black Lives Matter), ya 2012 ka Nirbhaya kand]].
  5. **Mobilization for Action:** Rallies, dharna aur resources ka zameeni sanchalan.
  6. **Failure of Social Control:** Police ya samajik-parivarik bandishon ka dheela padna [[eg:Nirbhaya protest mein maa-baap ki patriarchal rok-tok tootna aur ladkiyon ka raat mein India Gate par utarna]].

## Social Movement ka Life Cycle, Ideology aur Andolan Khatam Kaise Hote Hain?

[[thinker:Herbert Blumer]], [[thinker:Armand Mauss]] aur [[thinker:Charles Tilly]] ke mutabik har social movement ek **Life Cycle** se guzarta hai: **1. Emergence** (chingari) $\rightarrow$ **2. Coalescence** (mudde tay hona aur shuruati pradarshan) $\rightarrow$ **3. Bureaucratization** (formal trust/society, office-bearers aur funding banna) $\rightarrow$ **4. Outcomes & Decline (Ant)**.

Koi bhi social movement hamesha nahi chalta; uska ant **5 tarikon (Outcomes)** se hota hai:

1. **Success (Safalta):** Maang poori ho jaaye aur andolan samapt ho [[eg:2021 mein kendra sarkar dwara teeno Farm Bills wapas lene par Samyukta Kisan Morcha ka ghar wapas jaana]].
2. **Failure / Fatigue (Asafalta):** Sarkar na jhuke aur log thak kar ghar baith jaayein [[eg:Anti-CAA protests ka bina kanoon badle samapt hona]].
3. **Co-optation (Satta mein Shamil Hona):** Jab andolan ke netaon ko sarkar kisi committee/pad mein shamil kar le ya woh khud satta ka hissa ban jaayein [[eg:sabhi netaon ko chor batane wale India Against Corruption se Arvind Kejriwal ka khud political party (AAP) banakar CM banna]].
4. **Repression (Daman):** Jab State apni police aur fauj (RSA) se andolan ko kuchal de [[eg:Khalistan ya Naxalite movement par state ka sakht daman]].
5. **Mainstreaming:** Jab andolan ki maang ko poora samaj apna naitik moolya maan le [[eg:Nirbhaya andolan ke baad women safety par poore desh mein aam sehmati aur naye kanoon banna]].

### Ideology ka Role aur Movements ki Chunautiyan

Har andolan ke dil mein ==Ideology== hoti hai — yeh ek rangin chashme ki tarah reality ko samjhati hai (Marxist ko har jagah class shoshan dikhta hai, Ambedkarite ko caste shoshan), alag-alag logon ko jodne wale **Fevicol (social glue)** ka kaam karti hai, aur **tarike (means)** ko jayaz thahrati hai [[eg:Naxal ideology hinsa ko jayaz maanti hai, jabki Gandhian ideology sirf ahimsa aur satyagraha ko]]. Fir bhi andolanon ke saamne badi chunautiyan hoti hain: aam insaan ka inertia (*"sah lenge thoda"*), purani prathaon ki samajik legitimacy [[eg:dahej ko beti ka "movable property share" kehkar sahi thahrana]], [[thinker:Mancur Olson]] ka ==Free-Rider Problem== (log AC kamre mein baith kar Facebook post like karke bhrashtachar-mukt Bharat chahte hain par sadak par police ka danda doosron ke hisse chhod dete hain), participant fatigue (jisse bachne ke liye Gandhi ji ne **Struggle–Truce–Struggle** apnaya), aur netaon ke ego clashes.

## Old vs New Social Movements (NSMs) aur Digital Era Protests

1960s–70s ke baad Western post-industrial samajon mein [[thinker:Alain Touraine]], [[thinker:Jürgen Habermas]], [[thinker:Simon Howarth]] aur [[thinker:Anthony Giddens]] ne ==New Social Movements (NSMs)== ka uday dekha:

| Feature | Old Social Movements (OSMs) | New Social Movements (NSMs) |
| --- | --- | --- |
| Core Focus & Issues | Aarthik batwara, mazdoori, zameen aur roti-kapda (Materialist) | Quality of life, environment, peace, LGBTQ+, animal rights (Post-materialist) |
| Support Base | Mazdoor, kisan aur shoshit lower classes | Young (18–30), padhe-likhe "new middle class" professionals |
| Target & Structure | State par kendrit; rigid, bureaucratic trade unions aur parties | Civil society aur lifestyle par kendrit; decentralized, informal networks |
| Reach | Local ya national seema ke andar | Social media aur technology ke zariye global (#MeToo, BLM, Earth Day) |

- **NSM ki Aalochana aur Bharat ka Context:** Pehla, [[thinker:Jean L. Cohen]] kehte hain ki Old aur New ki deewar dhundhli hai kyunki feminist aur LGBTQ+ movements aaj bhi equal pay aur naukri (economic rights) maangte hain. Doosra, Bharat mein [[thinker:Ramachandra Guha]] aur [[thinker:Madhav Gadgil]] نے dikhaya ki **Chipko** ya **Narmada Bachao Andolan** ameer deshon ka shaukiya "post-materialist" movement nahi hai — yeh **"Environmentalism of the Poor"** hai jahan Adivasi aur kisan paryavaran ke saath apni rozi-roti (*jal, jangal, zameen*) bacha rahe hain! Teesra, Bharat mein movements aksar ==Primordial Means aur Progressive Agenda== ka anokha mel dikhate hain — yaani bheed jutane ke liye purani jaati ya dharm ki pehchan aur dharna/chakka-jam use karte hain, par maangte modern secular rights (reservation, naukri, equal citizenship) hain.
- **Digital Era aur Social Media Protests ([[thinker:Manuel Castells]]):** Aaj WhatsApp, X aur Instagram ne protest ka chehra badal diya hai — bina kisi bade office ke chand ghanton mein global hashtags (#MeToo, #BlackLivesMatter, Digital Kisan Tractor Rally) millions ko jod dete hain. Lekin iske bade khatre bhi hain: **"Slacktivism / Clicktivism"** (Mancur Olson ka digital free-rider jo sirf reel share karta hai par zameen par nahi utarta), bina netritva ke andolan ka jaldi bikharna, fake news aur echo chambers se dange bhadakna, gaon-shaher ka **digital divide**, aur sarkar dwara **internet shutdowns** ya cyber-surveillance.

## Dalit Protest Movements aur Sociological Revolution

- **Dalit Status Badalne mein Protest Movements ka Yogdaan:** Dalit andolanon ne 4 charanon mein jaati-vyavastha ko hilaya: (1) **Bhakti Movement** (Sant Ravidas, Kabir, Chokhamela dwara adhyatmik barabari), (2) **Phule-Ambedkarite Kranti** ([[thinker:Jyotirao Phule]] ka Satyashodhak Samaj aur [[thinker:B.R. Ambedkar]] ka 1927 Mahad Satyagraha, Kalaram Mandir entry aur *"Educate, Agitate, Organize"* ka mantra jisne untouchability ko Article 17 se khatam karwaya), (3) **1970s Dalit Panthers & Sahitya** (Maharashtra mein ugra aatmasamman aur shoshan ke khilaf pratirodh), aur (4) **Political Power & Digital Dalit Assertion** (Kanshi Ram aur Mayawati ki BSP dwara UP ki satta paana, aur Rohit Vemula / 2018 SC-ST Act Bharat Bandh mein yuva digital mobilization).
- **Sociological Revolution (Kranti) Kya Hai?** Sociology mein ==Revolution== ka matlab sirf neta ya sarkar badalna nahi hai! [[thinker:Theda Skocpol]] ke mutabik Revolution woh durlabh ghatna hai jo samaj ke **economic, political aur social rishton ko jad se palat kar bilkul naya social order** khada kar de. Ismein aksar hinsa hoti hai (**1789 French Revolution** ya **1917 Bolshevik Revolution**, jise Lenin ne *"festivals of the oppressed"* kaha), par hinsa anivarya nahi hai — **Industrial Revolution** bina bandook ke ek sachchi sociological revolution thi kyunki usne parivar, dharm aur economy sab badal diye. Iske baraks **Pakistan ke military coups**, **15 August 1947 ki Bharat ki azaadi** (jahan angrezon ki jagah Bharatiya elite aaye par caste, class aur bureaucracy waisi hi rahi), aur **Green Revolution** sociological revolutions NAHI hain. Ant mein [[thinker:Pitirim Sorokin]] ko yaad rakho jinhone revolution ko samaj ki khatarnak bimari batakar shantipoorna reform ki vakaalat ki.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: '1. Emergence', text: 'Structural strain + precipitating spark (Nirbhaya / Rosa Parks) se shuruat' },
      { label: '2. Coalescence', text: 'Generalized belief aur SMOs ke zariye sangathit rallies aur maang' },
      { label: '3. Bureaucratization', text: 'Formal sangathan, office-bearers, rules aur regular funding banna' },
      { label: '4. Five Endings', text: 'Success (SKM), Failure, Co-optation (IAC->AAP), Repression, ya Mainstreaming' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Social Movement (Jan Andolan)',
    rightTitle: 'Sociological Revolution (Kranti)',
    rows: [
      {
        aspect: 'Badlaav ka Dayra',
        left: 'Maujooda vyavastha ke bheetar kisi kanoon, policy ya pratha mein sudhar/virodh',
        right: 'Poore samaj ke economic, political aur class structure ka jad se badlaav',
      },
      {
        aspect: 'Raftar aur Aavritti',
        left: 'Loktantra mein aam baat hai; mahino-saalon tak dharna aur abhiyan chalta hai',
        right: 'Itihas mein behad durlabh (rare) aur tez structural ulat-pulat (Theda Skocpol)',
      },
      {
        aspect: 'State se Rishta',
        left: 'State par dabav banata hai ya samvidhanik/satyagraha ke raste bargain karta hai',
        right: 'Purane State aur mode of production ko dhwast karke naya order banata hai',
      },
      {
        aspect: 'Mukhya Examples',
        left: 'Chipko, RTI Movement, Samyukta Kisan Morcha, #MeToo',
        right: 'French Revolution (1789), Bolshevik Revolution (1917), Industrial Revolution',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Value-Added / Structural Strain Theory',
    meaning:
      'Neil J. Smelser ka 6-charan model (conduciveness, strain, generalized belief, precipitating spark, mobilization, failure of social control) jo batata hai ki collective action kab movement banta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Resource Mobilization Theory',
    meaning:
      'McCarthy, Zald aur Jenkins ka siddhant ki sirf asantosh kafi nahi; andolan tabhi chalta hai jab leaders entrepreneurs ki tarah paisa, media aur sangathan (SMOs) jutate hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Free-Rider Problem',
    meaning:
      'Mancur Olson dwara batayi gayi samasya jahan log ghar baithe social media like ("slacktivism") karke badlaav ka fayda toh chahte hain, par sadak par utarne ka jokhim doosron par chhod dete hain.',
  },
  {
    kind: 'keyTerm',
    term: 'New Social Movements (NSMs)',
    meaning:
      '1960s ke baad ubhre decentralized movements (Touraine, Habermas) jahan padha-likha new middle class post-materialist quality-of-life, environment aur identity ke liye ladta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Sociological Revolution',
    meaning:
      'Theda Skocpol ke mutabik woh durlabh kranti jo samaj ke class, state aur samajik rishton ko poori tarah badal de — yeh fauji coup ya sarkar badalne se bilkul alag hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'br-ambedkar',
    quote: 'Educate, Agitate, Organize; have faith in yourself and never lose hope.',
    context: 'All-India Depressed Classes Conference (1942) — Dalit jan-andolan ki vaicharik aatma.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2025, 2024, 2023 Hat-Trick: Social Media & Digital Movements!',
    body: 'UPSC ne lagatar teen saal (2023, 2024, 2025) social media aur digital era protests par sawaal poochha hai! Answer mein hamesha dono sides do: (1) Taqat (Manuel Castells ke "Networks of Outrage and Hope", bina sarhad tez mobilization, traditional media censorship todna jaise #MeToo, BLM aur Kisan andolan mein), aur (2) Chunautiyan (Mancur Olson ka "Clicktivism/Slacktivism", leaderless hone se bargaining mein kamzori, fake news/echo chambers, rural digital divide, aur state dwara internet shutdowns).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Bharat ke Environmental Movements ko Sirf "Post-Materialist" Mat Kehna!',
    body: 'PYQ 2022 aur 2018 (Environmentalism & NSMs in India) mein Western NSM theory ko aankh moond kar copy mat karna. Ramachandra Guha aur Madhav Gadgil ("Environmentalism of the Poor") tatha Jean Cohen ko quote karke likho ki Bharat mein Chipko ya Narmada Bachao Andolan ameer middle-class ka lifestyle shauk nahi, balki Adivasiyon aur kisanon ki rozi-roti (material survival) aur paryavaran raksha ka sangam hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Smelser ke 6 Steps (CS-GP-MF) & Movement End ke 5 Raste (SF-CRM)',
    body: 'PYQ 2015 (collective action kab movement banta hai) ke liye Neil Smelser ka CS-GP-MF yaad rakho: Conduciveness, Strain, Generalized belief, Precipitating spark, Mobilization, Failure of social control. Aur PYQ 2020 (movement khatam kaise hota hai) ke liye SF-CRM: Success, Failure/fatigue, Co-optation, Repression, aur Mainstreaming!',
  },
  {
    kind: 'answerBox',
    intro:
      'Chhote local protests se lekar samaj ko badalne wali revolutions tak, collective action woh loktantrik hathiyar hai jisse haashiye ke log satta ki hierarchy ko chunauti dete hain.',
    points: [
      'Blumer aur Smelser ka Model: Momentary crowd tabhi sustained social movement banti hai jab Smelser ki 6 shartein Resource Mobilization (McCarthy & Zald) aur Political Opportunity (Tilly) se milti hain.',
      'Life Cycle aur 5 Endings: Har movement Emergence, Coalescence aur Bureaucratization se guzar kar Success (Farm laws repeal), Failure, Co-optation (IAC -> AAP), Repression ya Mainstreaming (Nirbhaya norms) par khatam hota hai.',
      'Ideology aur Chunautiyan: Ideology Fevicol ki tarah logon ko jodti aur sadhan tay karti hai, jabki Free-Rider problem (Olson), thakan aur state repression badi rukawatein hain.',
      'NSMs aur Bharatiya Visheshta: Western NSMs post-materialist identity aur ecology par tikte hain, jabki Bharat mein "Environmentalism of the Poor" (Guha) aur primordial means se progressive constitutional maangein uthayi jaati hain.',
      'Digital Protests aur Revolution: Social media ne hashtag activism (Castells) ko tez kiya hai par slacktivism ka khatra bhi laaya hai, jabki asli Revolution (Skocpol) coup se alag poore samajik dhanche ko badalti hai.',
    ],
    conclusion:
      'Chahe Ambedkarite Dalit andolan ho, Chipko ki jal-jangal-zameen ladai ho ya digital hashtags — social movements loktantra ko Parliament ke bahar se zinda rakhte hain.',
  },
]

export const topic4Hi: TopicLangContent = {
  summary:
    'Yeh topic samjhata hai ki collective action kaise social movement mein badalta hai (Smelser, McCarthy & Zald, Tilly), movements ka life cycle aur ant kaise hota hai, New Social Movements aur social media protests Bharat aur West mein kaise kaam karte hain, aur sociological revolution regime change se kaise alag hai.',
  mindMap,
  sections,
}