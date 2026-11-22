import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Classical Positivism ne social facts ko physical cheezon ki tarah naap kar samaj ke pakke niyam khojne ki koshish ki, par Interpretive, Phenomenological, Critical, Post-Positivist aur Humanist critiques ne sociology ko falsification, reflexivity aur triangulation ki taraf mod diya.'

const mindMap: MindMapData = {
  title: 'Unit 2.3 · Positivism and Its Critique',
  center: 'Positivism & Critiques',
  subtitle: 'Comte & Durkheim • 4 Postulates • 5 Badi Critiques • Aaj ka Upyog',
  branches: [
    {
      title: 'Classical Positivist Architecture',
      color: 'lavender',
      thinkers: ['Auguste Comte', 'Saint-Simon', 'Émile Durkheim', 'Vilfredo Pareto'],
      points: [
        'Comte: Law of Three Stages, Social Statics & Dynamics, Queen of Sciences',
        'Durkheim: prenotions chhodo, social facts ko things maano (Suicide 1897)',
        '4 pillars: method ki ekta, empiricism, causal laws, value-freedom',
        'Pareto ka logico-experimental method aur Marx ke materialist itihas niyam',
      ],
    },
    {
      title: 'Interpretive & Phenomenological Var',
      color: 'yellow',
      thinkers: ['Max Weber', 'Alfred Schutz', 'Harold Garfinkel', 'J.M. Atkinson'],
      points: [
        'Weber: conscious insaan meaning lagate hain; sirf numbers "kyun" nahi batate',
        'Schutz: green-leaves analogy, typifications & saanjhi intersubjectivity',
        'Garfinkel: indexicality & breaching dikhate hain order roz banaya jaata hai',
        'Atkinson: suicide figures coroners aur police ki negotiation se bante hain',
      ],
    },
    {
      title: 'Critical, Post-Positivist & Humanist',
      color: 'mint',
      thinkers: ['Theodor Adorno', 'Karl Popper', 'Thomas Kuhn', 'C. Wright Mills'],
      points: [
        'Adorno & Horkheimer: positivism status-quo bachati hai; Culture Industry jhoothi zaroorat banati hai',
        'Popper: induction & verification chhodo; falsifiability & tentative sach apnao',
        'Kuhn: paradigms aur scientists ke vested interests; sociology pre-paradigmatic hai',
        'Mills: abstracted empiricism + Heidegger/Dewey/Lyotard ka metanarrative critique',
      ],
    },
    {
      title: 'Post-Positivism aur Aaj ki Justification',
      color: 'pink',
      thinkers: ['Karl Popper', 'Andrew Sayer', 'Norman Denzin', 'M.N. Srinivas'],
      points: [
        'Post-positivism objective sach chahata hai par fallible test & triangulation se',
        'Quantitative stats aur qualitative meanings dono ko barabar darja milta hai',
        'Macro upyog: Census, NFHS, PLFS jaati-gender-gareebi ke gaps dikhate hain',
        'Sabse behtar raasta: macro patterns ko local Verstehen ke saath milana',
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
      'Classical Positivism ki aalochana do raaston par gayi: Post-Positivists ne science ke niyam sudhare (Popper, Kuhn), jabki Anti-Positivists ne insaani meaning par zor diya (Weber, Schutz, Garfinkel).',
    credit: 'UPSC OWL Studio · Paper 1 Unit 2 Visual 01',
  },
  {
    kind: 'md',
    body: `## Positivism kya hai aur Shuruati Sociologists iske Deewane Kyun The?

Aasaan shabdon mein samjho: 1820 ke aaspaas France mein rajtantra aur Church tootne ke baad har taraf dange aur political uthal-puthal thi. [[thinker:Auguste Comte]] ne apne guru [[thinker:Henri de Saint-Simon]] ke vicharon ko aage badhate hue ek aisa bharosemand raasta dhoondha jo bina andh-vishwas ke samaj mein shanti aur pragati laa sake. Isi philosophy ko ==Positivism== kaha gaya — French shabd *positif* se, jiska matlab hai "aankhon dekhe empirical sabooton par tika gyaan" — yani samaj bhi physical nature ki tarah pakke niyamon se chalta hai.

Jaise cyclone ya baadh ki pehle se bhavishyavani karke gaon bachaye jaate hain, Comte ka maanna tha ki berozgari ya gareebi ke niyam pakad kar samaj ko sudhara (**social engineering**) jaa sakta hai. Teen bade pillars ne Positivism ko sociology ki pehli pehchan banaya:

- **Comte ka Grand Blueprint:** *Positive Philosophy* mein Comte ne ==Law of Three Stages== diya (soch *Theological* dharm se *Metaphysical* tark aur fir *Positive* science mein aati hai), sociology ko **Social Statics** (order bachane wale rules) aur **Social Dynamics** (badlaav ke niyam) mein baanta, aur sociology ko sabhi vigyanon ke upar **"Queen of Sciences"** kaha.
- **Durkheim ke Empirical Niyam:** [[thinker:Émile Durkheim]] ne *The Rules of Sociological Method* (1895) mein Comte ke sapne ko zameen par utara: common-sense *prenotions* chhodo, ==social facts ko things== maano jo vyakti ke bahar maujood hain, aur har social fact ko dusre social fact se samjhao — jise unhone *Suicide* (1897) mein saabit kiya.
- **Marx aur Pareto:** Bhale hi rajneeti alag thi, [[thinker:Karl Marx]] ne mode of production ke itihasik niyamon ko scientific maana, aur [[thinker:Vilfredo Pareto]] ne verified observation par tika ==logico-experimental method== diya.
- **Chaar Core Postulates:** (1) **Unity of Method** (physics aur sociology ka ek hi scientific method), (2) **Sensory Empiricism** (sirf bahari dikhne wala data maanna, andar ki bhavna chhodna), (3) **Universal Causal Laws aur Prediction**, aur (4) **Value-Free Objectivity** (test tube dekhte chemist jaisi cold nishpakshata).

## Classical Positivism ke Khilaaf Paanch Badi Critiques

Beeswin sadi mein sociologists aur philosophers ne Positivism ke is bharam ko tod diya ki insaanon ko patthar ya grahon ki tarah naapa jaa sakta hai. Paanch alag-alag critiques ne milkar non-positivist aur post-positivist sociology ki neev rakhi:

### 1. Interpretive Critique: Consciousness, Meaning aur Reactivity

Taaron par doorbeen lagane se taare apni chal nahi badalte, par kisi insaan ko ghoor kar dekho toh woh turant nervous ya natakiya ho jaata hai. Isse bhi bada sach yeh hai ki bahari aankde andar ka kaaran nahi batate: [[eg:Positivist survey keh sakta hai ki kisi samaj mein 98% logon ki shaadi 30 tak ho jaati hai, par yeh nahi batata ki kisi ne companionship ke liye shaadi ki, kisi ne dahej ke dabav mein, ya maa-baap ki izzat ke liye.]] [[thinker:Max Weber]] aur interpretivists ke mutabik insaan react karne se pehle matlab nikalta hai aur culture badalne par niyam badal jaate hain.

### 2. Phenomenological aur Ethnomethodological Critique: Aankde Banaye Jaate Hain

Positivists crime, gareebi ya suicide ke official aankdon ko pakka sach maan lete the. [[thinker:Alfred Schutz]] aur [[thinker:Harold Garfinkel]] ne ispar poori tarah sawal uthaya aur dikhaya ki social order aam logon ke dimaag ki ==typifications==, ==intersubjectivity== aur context-based ==indexicality== se roz banaya jaata hai. Durkheim ko sidha challenge karte hue [[thinker:J.M. Atkinson]] ne dikhaya ki official suicide stats koi raw fact nahi hain: police, doctor aur parivaar milkar common-sense clues — jaise suicide note, depression ka itihas, phansi banaam goli, band kamra aur umar (30 saal ki maut par shak, 80 par natural death) — se tay karte hain ki kise "suicide" likha jaaye. [[eg:Waise hi Bharat mein COVID-19 maut ke aankde, PLFS berozgari dar ya IT Rules mein "unlawful" message ki ginti officials ke common-sense decisions par tiki hoti hai.]]

### 3. Critical Theory (Frankfurt School): Status-Quo ki Raksha

[[thinker:Theodor Adorno]] aur [[thinker:Max Horkheimer]] ne Positivism par political hamla kiya. Jab aap yeh maante hain ki samaj bhi gravity ki tarah fixed natural niyamon se chalta hai, toh aap maujooda capitalism aur inequality ko "natural" maan kar status-quo ka samarthan karte hain — yeh poochhne ke bajaye ki *"kya yeh anyaaypoorna samaj badalna chahiye?"*. Unka maanna tha ki ==Culture Industry== (films, celebrity gossip, ads) logon mein jhoothi zarooratein paida karke gareebi aur berozgari jaise asli sawaalon ko daba deti hai.

### 4. Post-Positivist Critique: Science ko Todna Nahi, Sudharna

Anti-positivists ke ulta, ==Post-Positivism== — jiske hero [[thinker:Karl Popper]] aur [[thinker:Thomas Kuhn]] hain — science ko poori tarah kharij nahi karti, balki uske ghamand ko sudhar kar naya roop deti hai. Popper ne white-swan logic se verification aur naive induction ko tod kar **falsifiability** rakhi (har scientific gyaan temporary hai). Kuhn ne dikhaya ki scientists vested interests mein **paradigms** bachate hain. Isliye post-positivism kehti hai ki 100% objectivity asambhav hai, aur quantitative ke saath qualitative methods milana (**triangulation**) hi sahi raasta hai.

### 5. Humanist aur Sociological Imagination Critiques

Martin Heidegger aur John Dewey ne chetavani di ki har cheez ko science ke tarazu mein tolne se insaan ka naitik, dharmik aur philosophical anubhav dab jaata hai. [[thinker:C. Wright Mills]] ne bhi survey tables ke jaal mein fansi sociology ko **abstracted empiricism** keh kar aalochana ki jo power aur itihas ko bhool jaati hai.

| Feature | Classical Positivism | Post-Positivism |
| --- | --- | --- |
| Sach ka Roop | Bahar fixed, pakke niyam khoje jaa sakte hain | Gyaan temporary, fallible aur samajik context se juda hai |
| Testing Logic | Inductivism aur verification (confirm karne par zor) | Hypothetico-deductive falsifiability (galat saabit karne ki koshish) |
| Values ki Bhoomika | Researcher poori tarah value-free reh sakta hai | Researcher ki cultural positioning asar dalti hai; use track karo |
| Pasandeeda Methods | Sirf quantitative surveys, stats aur external data | Quantitative aur qualitative dono ka mel (triangulation) |
| Paradigm View | Ek pakka universal scientific method | Kuhn ke paradigm shifts; sociology abhi multi-paradigmatic hai |

## Aaj ke Samay mein Positivism Kitna Justified Hai?

Kya itni aalochanaon ke baad Positivism ko kachre mein daal dena chahiye? Bilkul nahi! Agar hum surveys aur statistics chhod dein toh poore desh mein chhupe structural bhedbhaav kabhi nahi dikhenge. [[eg:Bharat mein NFHS-5 jab zila-wise bacchon ka kuposhan dikhata hai, PLFS mahilaon ki labour force bhagidari ginta hai, ya Census-surveys jaati aur shiksha ka farq pakadte hain, tab positivist quantitative tools 140 crore logon ke beech badi asamaanta saaf dikhate hain.]] Jab inhi macro stats ko [[thinker:M.N. Srinivas]] jaisi field ethnography aur Weber ke *Verstehen* ke saath joda jaata hai, tab sociology sabse taqatwar banti hai.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1838–1842',
        title: 'Auguste Comte — Positive Philosophy',
        text: 'Sociology naam diya, Law of Three Stages banaya aur order-progress ke liye positive method rakha.',
      },
      {
        year: '1895–1897',
        title: 'Émile Durkheim — Rules aur Suicide',
        text: 'Social facts as things rule banaya aur European data se suicide ke structural niyam dikhaye.',
      },
      {
        year: '1904–1922',
        title: 'Max Weber — Interpretive Mod',
        text: 'Subjective meaning, Verstehen aur value relevance laakar andhi natural-science copy roki.',
      },
      {
        year: '1934–1947',
        title: 'Popper aur Frankfurt School Critiques',
        text: 'Popper ne falsification diya; Adorno & Horkheimer ne positivism par status-quo ideology ka aarop lagaya.',
      },
      {
        year: '1962–1978',
        title: 'Kuhn, Garfinkel aur Atkinson',
        text: 'Paradigm shifts, ethnomethodology aur Atkinson ke coroner study ne "raw facts" ka bharam toda.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Classical Positivism', text: 'Comte & Durkheim social facts ko pakke niyam maante hain' },
      { label: 'Interpretive Turn', text: 'Weber & Interactionists consciousness aur Verstehen laate hain' },
      { label: 'Phenomenology/Ethno', text: 'Schutz, Garfinkel & Atkinson dikhate hain stats socially constructed hain' },
      { label: 'Critical Theory', text: 'Adorno & Mills status-quo bias aur abstracted empiricism todte hain' },
      { label: 'Post-Positivism', text: 'Popper & Kuhn se humble, falsifiable aur triangulated sociology banti hai' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Positivist Approach',
    rightTitle: 'Interpretive / Non-Positivist Approach',
    rows: [
      {
        aspect: 'Samaj vs Vyakti',
        left: 'External structures insaanon ka vyavahar tay karti hain',
        right: 'Conscious insaan meaning lagakar apni duniya khud banate hain',
      },
      {
        aspect: 'Research Focus',
        left: 'Macro rates, correlations, causation aur general laws',
        right: 'Motives, bhavna, symbols aur haalat ka matlab (Verstehen)',
      },
      {
        aspect: 'Researcher ka Role',
        left: 'Door khada neutral, clinical observer',
        right: 'Actor ke joote mein kadam rakhne wala empathetic participant',
      },
      {
        aspect: 'Official Stats par Soch',
        left: 'Pakke objective facts (Durkheim on Suicide)',
        right: 'Common-sense negotiation se bane labels (Atkinson on Suicide)',
      },
      {
        aspect: 'Mukhya Methods',
        left: 'Quantitative surveys, official records, statistical tables',
        right: 'Unstructured interviews, ethnography, dramaturgy, breaching',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Positivism',
    meaning:
      'Auguste Comte ki philosophy ki asli gyaan sirf aankhon dekhe empirical sabooton se aata hai aur sociology natural sciences ki tarah samaj ke laws khoj sakti hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Social Statics & Social Dynamics',
    meaning:
      'Comte ke do hisse: Statics samajik shanti aur order banaye rakhne wale institutions padhti hai, jabki Dynamics itihasik badlaav aur pragati ke niyam dekhti hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Social Facts as Things',
    meaning:
      'Durkheim ka usool ki norms, kanoon, suicide rates aur dharm ko vyakti ke bahar maujood objective cheezon ki tarah bina bias ke padha jaaye.',
    thinkerSlug: 'emile-durkheim',
  },
  {
    kind: 'keyTerm',
    term: 'Post-Positivism',
    meaning:
      'Popper aur Kuhn ka sudhara hua scientific nazariya jo sach ki khoj rakhta hai par maanta hai ki gyaan fallible hai aur quantitative-qualitative triangulation zaroori hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'emile-durkheim',
    quote: 'The first and most fundamental rule is: Consider social facts as things.',
    context: 'Durkheim ki Rules of Sociological Method (1895) ka sabse mashhoor usool jo classical positivism ki neev bana.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2025, 2022 aur 2017 PYQ Blueprint: 5 Waves Mein Critiques Likho!',
    body: 'Chahe UPSC "arguments against positivism" (2025) poochhe ya "shortfalls giving rise to non-positivist methods" (2022), apni critiques ko 5 saaf hisson mein baanto: (1) Weberian Consciousness/Verstehen, (2) Schutz-Garfinkel-Atkinson stats construction, (3) Adorno Critical Theory status-quo critique, (4) Popper-Kuhn Post-Positivist Falsification, aur (5) Feminist/Mills abstracted-empiricism — fir end mein NFHS/PLFS se dikhao ki balanced positivism aaj bhi kaam aata hai!',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Post-Positivism aur Anti-Positivism ko Ek Mat Maano',
    body: 'Kabhi mat likho ki Karl Popper aur Thomas Kuhn science ke khilaaf the! Anti-Positivists (Garfinkel, Schutz) natural science methods ko samaj par laagu karne se mana karte hain, jabki Post-Positivists science ke tareeqe ko sudharte hain — verification ki jagah falsification aur mixed triangulation laate hain.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Durkheim vs Atkinson: Ek Example Jo Har Answer Chamka De',
    body: 'Positivism banaam Phenomenology/Ethnomethodology (2020, 2014 PYQs) mein Suicide compare karo: Durkheim ne state ke figures ko objective social facts maana, jabki J.M. Atkinson ne dikhaya ki coroners band kamra, depression, phansi aur umar jaise common-sense clues se "suicide" label banate hain. Is ek contrast se topper marks pakke!',
  },
  {
    kind: 'answerBox',
    intro:
      'Positivism ne sociology ko philosophy se nikaal kar empirical science banaya, par paanch badi aalochanaon ne fact, method aur objectivity ki samajh ko poori tarah badal diya.',
    points: [
      'Positivist base (Comte, Durkheim): Method ki ekta, empirical observation, social facts as things, causal laws aur social engineering par zor.',
      'Interpretive kami (Weber, Mead): Conscious insaan ko pathar maan ne se motives, reactivity aur cultural badlaav chhoot jaate hain.',
      'Phenomenology & Ethnomethodology (Schutz, Garfinkel, Atkinson): Saabit kiya ki social reality aur suicide/crime ke stats bhi typifications aur negotiation se bante hain.',
      'Critical & Humanist var (Adorno, Mills): Status-quo ki raksha, Culture Industry ki jhoothi zarooratein aur bina-soch number-crunching (abstracted empiricism) par hamla.',
      'Post-positivist mod & ahamiyat: Popper aur Kuhn ke baad triangulation aur falsification aayi; Verstehen ke saath milkar NFHS/PLFS jaise positivist surveys aaj bhi macro inequality dikhane ke liye zaroori hain.',
    ],
    conclusion:
      'Andhe dogma ke roop mein Classical Positivism khatam ho chuka hai, par namra aur triangulated empirical science ke roop mein aaj bhi sociology ki reedh hai.',
  },
]

export const topic3Hi: TopicLangContent = {
  summary,
  mindMap,
  sections,
}