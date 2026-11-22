import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Science observation, verification aur causal logic par tika gyaan hai — par insaanon ke conscious samaj par physics ki lab methods seedhe laagu karne mein practical dikkatein aati hain, jinhone post-positivist, realist aur feminist critiques ko janm diya.'

const mindMap: MindMapData = {
  title: 'Unit 2.1 · Science, Scientific Method & Its Critique',
  center: 'Sociology as Science',
  subtitle: 'Empirical Aadhar • Practical Dikkatein • Post-Positivist & Realist Critique',
  branches: [
    {
      title: 'Science ki Pehchan kya hai?',
      color: 'lavender',
      thinkers: ['Francis Bacon', 'Robert K. Merton', 'Auguste Comte', 'Émile Durkheim'],
      points: [
        'Empirical data, verification, replicability, causality aur cumulative logic',
        'Merton CUDOS norms: Communalism, Universalism, Disinterestedness, Skepticism',
        'Induction (Bacon: specific se general) vs Hypothetico-Deductive (Popper)',
        'Exploratory (naya topic) vs Explanatory (kaaran) vs Historical designs',
      ],
    },
    {
      title: 'Sociology Science Kyun Hai?',
      color: 'yellow',
      thinkers: ['Émile Durkheim', 'Max Weber', 'Andrew Sayer', 'Elton Mayo'],
      points: [
        'Social behaviour mein patterns dikhte hain (Durkheim Suicide statistics)',
        'Field experiments bina lab ke real duniya mein variable test karte hain',
        'Sayer Open Systems: meteorology ki tarah sociology probability aur mechanisms pakadti hai',
        'Biology ya psychology mein variation hone se bhi science khatam nahi hoti',
      ],
    },
    {
      title: 'Research ki Practical Dikkatein',
      color: 'mint',
      thinkers: ['Max Weber', 'C. Wright Mills', 'Gunnar Myrdal'],
      points: [
        'Conscious insaan pathar nahi hai; har event par alag meaning lagata hai',
        'Lab control asambhav: dange nahi karwa sakte, caste aur income alag karna mushkil',
        'Pyar, dharm ya rashtravad naapne ki kilogram ya joule jaisi unit nahi hai',
        'Social desirability bias, Hawthorne effect aur culture-specific rules',
      ],
    },
    {
      title: 'Philosophical aur Feminist Critiques',
      color: 'pink',
      thinkers: ['Karl Popper', 'Thomas Kuhn', 'Paul Feyerabend', 'Ann Oakley'],
      points: [
        'Popper: black swan se induction fail; falsifiability hi asli science ki kasauti',
        'Kuhn: science paradigm shift se badalti hai; sociology abhi pre-paradigmatic hai',
        'Feyerabend: rigid method nahi, pluralism ("anything goes") se khoj hoti hai',
        'Feminist critique: science mein male bias (Darwin, Freud, ghar ka unpaid kaam)',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u02-01-science-spectrum.webp',
    alt: 'Paper 1 Unit 2 poster comparing Positivism (Comte Durkheim), Post-Positivism (Popper Kuhn), and Non-Positivism (Weber Schutz Garfinkel Goffman)',
    caption:
      'Sociology science hai ya nahi, yeh bahas teen nazariyon par chalti hai: Positivist objectivity, Post-positivist falsification aur Interpretive Verstehen.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 2 Visual 01',
  },
  {
    kind: 'md',
    body: `## Science aur Scientific Method aakhir hai kya?

Aasaan shabdon mein samjho: jab bhi hum poochhte hain ki kya Sociology ek science hai, toh sabse pehle humein yeh saaf karna padega ki "science" ka matlab kya hai. Science sirf safed coat pehne lab mein test-tube hilaana nahi hai, balki gyaan paane ka ek aisa ==systematic aur evidence-based tareeka== hai jo aankhon dekhe sabooton, tark aur baar-baar jaanch par tika hota hai. Dharm ya jaadu-tone ke ulta, science mein kisi bade scholar ki baat par bhi aankh band karke bharosa nahi kiya jaata — har daave ko saboot ke saath verify ya galat saabit kiya jaa sakta hai.

Science ki is neev ko chheh pillars aur [[thinker:Robert K. Merton]] ke chaar institutional rules se samajh sakte hain:

- **Chheh Scientific Pillars:** Scientific gyaan ==empirical== (observation par aadharit), ==testable aur provisional== (galat saabit hone ke liye khula), ==cumulative== (purane gyaan par aage badhne wala), ==causal== (kaaran-parinaam jodne wala), ==objective== (vyaktigat pakshpaat se door) aur ==replicable== (dobara test karne par wahi nateeja dene wala) hota hai.
- **Merton ka CUDOS Ethos:** Scientists ke samuday ko chaar usool baandhte hain — **Communalism** (khoj sabki saanjhi property hai, koi chhupa nahi sakta), **Universalism** (scientist ki jaati, dharm ya gender dekh kar nahi balki saboot dekh kar baat maani jaayegi), **Disinterestedness** (personal munafe ke bajaye sach ki khoj) aur **Organized Skepticism** (har daave par sawal uthana).
- **Inductive vs Deductive Raasta:** [[thinker:Francis Bacon]] ki **inductive logic** mein hum chhote-chhote examples dekh kar bada niyam banate hain (jaise sau seb girte dekh gravity ka niyam). Iske ulta **hypothetico-deductive method** pehle ek hypothesis banata hai aur phir neeche aakar data se use test karta hai ki kahin woh galat toh nahi.

## Research Designs: Exploratory, Explanatory aur Historical Method

Aasaan shabdon mein samjho: jaise doctor har bimari ke liye ek hi machine use nahi karta, waise hi sociologist har sawal ke liye alag research design chunta hai. Jab kisi naye samajik mudde ke baare mein kuch pata nahi hota tab pehle ground explore kiya jaata hai, jab kaaran dhoondhna hota hai tab explanatory test hota hai, aur jab sadiyon purane badlaav samajhne hon tab history ki madad li jaati hai.

- **Exploratory Design:** Jab koi mudda bilkul naya ho aur clear hypothesis na ho, tab open interviews ya chhote pilot surveys se shuruati samajh banayi jaati hai. [[eg:Jab Bharat mein 2021 ke baad Blinkit-Zepto jaise 10-minute delivery apps achanak faile, toh ek sociologist ne pehle dark stores par riders se khuli baatcheet karke unki problems ko explore kiya.]]
- **Explanatory Design:** Jab samasya pata ho aur humein uske asli kaaran (*cause and effect*) test karne hon, tab structured data se variables check kiye jaate hain. [[eg:Explanatory study check karegi ki rural Bihar ya Maharashtra mein school dropout ke peeche gareebi, jaati bhedbhaav ya mehangi coaching mein se kaunsa kaaran kitna zimmedar hai.]]
- **Historical Method:** Family, capitalism, patriarchy ya caste jaise institutions ek din mein nahi bante, isliye 30 din ka survey unka poora sach nahi bata sakta. Archives, purane records, inscriptions aur comparative itihas padh kar — jaise [[thinker:Karl Marx]] ne capitalism par, [[thinker:Max Weber]] ne *Protestant Ethic* par aur [[thinker:Irawati Karve]] ya [[thinker:Ranajit Guha]] ne Bharat ke kinship aur kisan andolanon par kiya — bade badlaavon ki jad pakdi jaati hai. [[trap:Historical method ki dikkat yeh hai ki itihas ke kagazon mein aksar rajaon aur upper-caste logon ki baatein zyada milti hain, gareeb mazdooron ki nahi — aur aap itihas ko lab mein dobara repeat nahi kar sakte.]]

| Feature | Exploratory Design | Explanatory Design | Historical Method |
| --- | --- | --- | --- |
| Asli Maqsad | Naye topic ki shuruati samajh banana | Cause-and-effect hypothesis test karna | Samay ke saath badalte institutions samajhna |
| Mukhya Sawal | Yahan ho kya raha hai? | X ki wajah se Y kyun ho raha hai? | Yeh vyavastha itihas mein kaise bani? |
| Tools | Open interviews, pilot field visits | Surveys, statistics, field tests | Archives, manuscripts, census history |
| Indian Example | Gig delivery riders ka naya stress | Jaati-gender ke hisaab se wage gap | Colonial zamindari se gaon ka badlaav |

## Kya Natural Science ke Methods Sociology par Laagu Ho Sakte Hain?

Yahin se Sociology ki sabse badi bahas shuru hoti hai. Positivists ka kehna tha ki samaj bhi niyamon se chalta hai isliye use physics ki tarah naapa jaa sakta hai; jabki anti-positivists ne yaad dilaya ki insaan ke paas dimaag, bhavna aur sochne ki taqat hai. Dono pakshon ko samajhne par tasveer bilkul saaf ho jaati hai.

### Sociological Research mein Aane Wali Practical Dikkatein

Jab koi sociologist physics-chemistry jaisa lab method lagane jaata hai, toh zameen par paanch badi mushkilein saamne aati hain:

- **Insaani Consciousness aur Badalte Meanings:** Aag ke upar rakha ek plastic pen har baar ek hi tareeke se pighalta hai, kyunki pen sochta nahi; par insaan kisi ghatna par react karne se pehle uska matlab nikalta hai. [[eg:India-Pakistan cricket match mein dost ka dhakka mazaak lagta hai, par sunsaan gali mein wahi dhakka darr, jaati apmaan ya police complaint ki wajah ban jaata hai.]]
- **Controlled Lab Experiments ki Seema:** Hum samaj ko petri dish mein band nahi kar sakte, na hi research ke liye dange bhadka sakte hain ya kisi ka ghar tudwa sakte hain. Iske alawa samaj mein ek saath itne variables uljhe hote hain — jaise Bharat mein education aur income ke beech caste, maata-pita ki daulat aur school quality sab ghule hote hain — aur log dekhe jaane par apna behaviour badal lete hain (==Hawthorne Effect==).
- **Standardized Measurement Units ki Kami:** Physics mein wazan ke liye kilogram aur energy ke liye joule hai, par sociology mein yeh nahi keh sakte ki 1850 mein dharmikta "10 joule" thi aur aaj "3 joule" bachi hai. Survey ka 1 se 10 wala love scale bhi subjective hai — kisi sharmile insaan ka "6" dusre ke "8" se zyada gehra ho sakta hai.
- **Respondent Bias aur Culture-Specific Rules:** Log samaj ki sharam ya interviewer ko khush karne ke liye sach chhupa lete hain. [[eg:Agar ek mahila interviewer kisi purush se Delhi Metro ke ladies coach ya Parliament reservation par poochhe, toh shayad woh asli virodh chhupa kar achha dikhne wala jawab de; waise hi marital violence ya LGBTQ muddon par log sharam se chup rehte hain, ya ek raat pehle movie dekh aane par pati-patni rishte ko achha bata dete hain.]] Phir jo niyam America mein sahi ho woh Bharat mein ulta pad sakta hai — US mein domestic violence badhne se divorce badhta hai, par Bharat mein parivaar ki izzat aur dependency ke kaaran divorce kam rehta hai.

### Phir Bhi Sociology Ek Science Kyun Hai?

In sab rukawaton ke bawajood yeh keh dena ki Sociology science nahi hai, "lab physics" ko hi poori science maan lene ki galti hai. Biology mein bhi har insaan ke blood cells ek jaise nahi hote, aur astronomy ya earthquake science (seismology) bina lab mein taare ya bhukamp banaye science maani jaati hain. Realist thinker [[thinker:Andrew Sayer]] ne bataya ki science do tarah ki hoti hai: **closed-system science** (chemistry lab jahan sab control ho) aur **open-system science** (mausam vigyan ya sociology jahan khule mahaul mein asali patterns dhoondhe jaate hain). Jaise mausam vigyani aasmaan ko control kiye bina monsoon ki bhavishyavani karte hain, waise hi [[thinker:Émile Durkheim]] ne *Suicide* (1897) mein data se dikhaya ki akelapan aur norms tootna suicide rate ko kaise badhate hain, aur Elton Mayo ke Hawthorne factory study jaise field experiments real jagah par variables test karte hain.

## Classical Scientific Method ki Badi Critiques

Beeswin sadi mein philosophers aur feminist scholars ne sirf Sociology hi nahi, balki poori modern science ke "parcham aur garv" par hi sawaal khade kar diye:

- **[[thinker:Karl Popper]] — Falsification aur Black Swan:** Delhi ke taalaab mein 2,000 safed hans (*white swans*) dekh kar bhi aap yeh pakka niyam nahi bana sakte ki "saare hans safed hote hain", kyunki ek kala hans dikhte hi aapka niyam toot jaayega. *The Logic of Scientific Discovery* mein Popper ne kaha ki sachcha science har jagah confirm karne ke bajaye galat saabit hone ka risk (**falsification**) uthata hai — isliye scientific gyaan hamesha temporary aur provisional rehta hai.
- **[[thinker:Thomas Kuhn]] — Paradigms aur Scientific Revolutions:** *The Structure of Scientific Revolutions* mein Kuhn ne dikhaya ki scientists bilkul nishpaksh sant nahi hote; woh apne daur ke ek bade nazariye (**paradigm**) ke andar kaam karte hain aur apna career bachane ke liye ulte data ko "exception" keh kar daba dete hain. Jab anomalies had se zyada badh jaati hain tab purana paradigm toot kar **paradigm shift** hota hai — jaise Newton se Quantum physics aana ya Pluto ka planet list se hatna aur Zealandia ka naya continent maana jaana. Sociology mein Marxist, Functionalist aur Interactionist ek dusre se ladte rehte hain, isliye Kuhn ne ise ==pre-paradigmatic== kaha.
- **[[thinker:Paul Feyerabend]] — Methodological Pluralism:** Feyerabend ne kaha ki science mein koi ek pakka universal method hota hi nahi — Pasteur ya Nobel ki badi khojein bhi ittefaq, tukke aur alag raaston se huin, isliye *"anything goes"* wala plural nazariya zaroori hai.
- **Feminist aur Postmodern Critiques:** [[thinker:Ann Oakley]] aur Antoinette Brown Blackwell ne dikhaya ki science khud male bias se bhari rahi hai — Darwin ne mardon ko evolution mein aage maana, Freud ne Oedipus complex banaya, aur 1960s tak mahilaon ke ghar ke bina-tankhwah kaam ko sociology ne "work" maana hi nahi. [[thinker:Jean-François Lyotard]] ne yaad dilaya ki jab tel companiyan climate research ko fund karti hain, tab science bhi power aur paise ka ek khel ban jaati hai.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1620',
        title: 'Francis Bacon — Novum Organum',
        text: 'Inductive empiricism ka usool: niyam banane se pehle systematic observations ikattha karo.',
      },
      {
        year: '1838–1895',
        title: 'Comte aur Durkheim — Positivist Sociology',
        text: 'Comte ne Sociology ko Queen of Sciences kaha; Durkheim ne Suicide (1897) mein scientific method dikhaya.',
      },
      {
        year: '1934',
        title: 'Karl Popper — Falsificationism',
        text: 'Sirf confirm karne ki jagah galat saabit hone ki kshamta (falsifiability) ko science ki pehchan banaya.',
      },
      {
        year: '1942',
        title: 'Robert K. Merton — CUDOS Ethos',
        text: 'Science ko dogmas se bachane wale 4 norms: Communalism, Universalism, Disinterestedness, Organized Skepticism.',
      },
      {
        year: '1962',
        title: 'Thomas Kuhn — Paradigm Shifts',
        text: 'Normal science apna paradigm bachati hai jab tak crisis naya revolution na laaye; sociology abhi pre-paradigmatic hai.',
      },
      {
        year: '1975–1981',
        title: 'Feyerabend, Oakley aur Critical Realism',
        text: 'Plural methods ("anything goes"), feminist critique of male bias aur Sayer ka open-system science.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: '1. Research Puzzle', text: 'Samasya chuno aur purani literature ka gap dekho' },
      { label: '2. Falsifiable Hypothesis', text: 'Test hone layak variable relationship tay karo' },
      { label: '3. Design Selection', text: 'Exploratory, explanatory, historical ya field design chuno' },
      { label: '4. Empirical Data', text: 'Survey, observation ya archives se bias control karke data lo' },
      { label: '5. Provisional Theory', text: 'Peer review aur replication ke liye khule nateeje rakho' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Closed-System Science (Physics)',
    rightTitle: 'Open-System Science (Sociology)',
    rows: [
      {
        aspect: 'Subject Matter',
        left: 'Bejaan padarth jo fixed mechanical laws maante hain',
        right: 'Conscious insaan jo har cheez par apna matlab lagate hain',
      },
      {
        aspect: 'Lab Control',
        left: 'Beaker ya lab mein saare variables roke jaa sakte hain',
        right: 'Real samaj mein caste, class, gender sab saath ghule hote hain',
      },
      {
        aspect: 'Measurement',
        left: 'Universal SI units (kilogram, metre, joule)',
        right: 'Subjective Likert scales, proxies aur qualitative meanings',
      },
      {
        aspect: 'Generalisations',
        left: 'Har jagah aur har waqt ek jaise universal laws',
        right: 'Culture aur itihas ke hisaab se badalne wale probabilistic trends',
      },
      {
        aspect: 'Observer Effect',
        left: 'Atom scientist ko dekh kar apna behaviour nahi badalta',
        right: 'Hawthorne effect, sharam aur researcher bias data badal dete hain',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Scientific Method',
    meaning:
      'Observation, hypothesis, empirical testing aur logical analysis ka aisa systematic raasta jo provisional causal rules deta hai aur har kisi ke check ke liye khula rehta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'CUDOS Norms',
    meaning:
      'Merton ke chaar scientific niyam — Communalism, Universalism, Disinterestedness aur Organized Skepticism — jo research ko pakshpaat se bachate hain.',
    thinkerSlug: 'robert-k-merton',
  },
  {
    kind: 'keyTerm',
    term: 'Falsification Principle',
    meaning:
      'Karl Popper ka niyam ki koi baat tabhi scientific kehlaati hai jab saboot use galat saabit karne ka mauka dein, na ki andhi haan mein haan milayein.',
  },
  {
    kind: 'keyTerm',
    term: 'Paradigm Shift',
    meaning:
      'Thomas Kuhn ka concept jab purane scientific nazariye ko anomalies tod deti hain aur naya worldview uski jagah le leta hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'robert-k-merton',
    quote: 'Most institutions demand unqualified faith; but the institution of science makes skepticism a virtue.',
    context: 'Merton batate hain ki dharm ke ulta, science mein har baat par tark aur sandeh karna hi uski taqat hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2025 aur 2023 PYQ Formula: Haan ya Naa mein Mat Fanso!',
    body: 'Jab bhi UPSC poochhe "Is Sociology a Science?", seedha Haan ya Naa mat likho. Science ko broad tareeke se define karo (empirical, verifiable, Sayer ka open-system), Durkheim aur field experiments ke example do, fir consciousness/measurement/ethics ki rukawatein batao, Popper-Kuhn-feminist critiques se natural science ka ghamand todo, aur balance ke saath sociology ko ek reflexive social science bata kar conclude karo.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Lab Nahi toh Science Nahi',
    body: 'Bahut aspirants likh dete hain ki lab na hone se sociology science nahi ban sakti. Iska turant jawab do: Astronomy, Geology aur Meteorology bina lab ke science hain (Sayer ka open-system model), aur sociology mein field experiments aur statistical controls use hote hain.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Practical Limits Yaad Rakhne ka Mnemonic: CEMOR',
    body: 'Sociology mein scientific method ki 5 practical rukawatein CEMOR se yaad rakho: Consciousness & meanings, Ethical/lab experiment limits, Measurement mein SI units ki kami, Observer/respondent bias (Delhi Metro/stigma), aur Regional/cultural variety.',
  },
  {
    kind: 'answerBox',
    intro:
      'Science sabooton aur tark par tika self-correcting gyaan hai; sociology physics ki lab ki copy nahi kar sakti, par ek open-system social science zaroor hai.',
    points: [
      'Scientific base & CUDOS: Empiricism, falsifiability (Popper), replicability aur Merton ke institutional norms sociology ko common sense se alag karte hain.',
      'Empirical proof: Durkheim ki Suicide (1897), NFHS/PLFS surveys aur field experiments dikhate hain ki samajik patterns ko naapa jaa sakta hai.',
      'Asli rukawatein: Insaani consciousness, ethical lab limits, SI units ki kami, Hawthorne reactivity aur culture-specific rules universal laws rok dete hain.',
      'Natural science ki apni critique: Popper, Kuhn aur feminist scholars ne dikhaya ki khud physics-biology bhi provisional, paradigm-bound aur biased ho sakti hai.',
      'Balanced conclusion: Andrew Sayer ke open-system science aur Weber ke Verstehen ke mel se sociology rigour aur human meaning dono pakadti hai.',
    ],
    conclusion:
      'Sociology ek alag kism ka reflexive science hai jo statistical patterns ko samajik meaning ke saath jod kar samaj ko samajhta hai.',
  },
]

export const topic1Hi: TopicLangContent = {
  summary,
  mindMap,
  sections,
}