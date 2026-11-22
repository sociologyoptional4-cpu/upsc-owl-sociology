import type { NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic4MindMapHi } from './topic-4-mindmaps'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u04-02-parsons-merton-mead.webp',
    alt: 'Paper 1 Unit 4 poster summarizing Talcott Parsons AGIL pattern variables, Robert K Merton 5 strain modes, and GH Mead Preparatory Play Game stages',
    caption:
      'Talcott Parsons ne mid-century sociology ki sabse badi systems theory banayi—jisme micro-level action choices (Pattern Variables) aur macro equilibrium (AGIL) ek saath judte hain.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 4 Visual 02',
  },
  {
    kind: 'md',
    body: `## Talcott Parsons kaun the aur unka mukhya Sawaal kya tha?

Aasaan shabdon mein samjho: agar aap ek computer ke keyboard, screen, battery aur motherboard ko alag-alag table par rakh dein toh woh bekaar purze hain—lekin jab woh ek circuit mein jud kar kaam karte hain tab ek system banta hai. Harvard ke sociologist [[thinker:Talcott Parsons]] ne samjhaya ki samaj bhi aisa hi ek ==Social System== hai jahan parivar, school, economy aur kanoon milkar santulan banaye rakhte hain.

1930s–1950s ke daur mein likhte hue aur [[thinker:Max Weber]] ki kitabon ko angrezi mein translate karne wale Parsons ne **Problem of Order** suljhaya: agar har insaan apna fayda dhoondh raha hai, toh duniya roz ladayi mein kyun nahi bikhar jaati? Unhone Weber ke conscious actor aur [[thinker:Émile Durkheim]] ke shared moral norms ko jod kar ek badi "Grand Theory" banayi.

## Voluntaristic Unit Act se Social System tak

*The Structure of Social Action* (1937) mein Parsons ne biology aur swarthi economics dono ko nakaar kar ==Voluntaristic Theory of Action== di. Iski sabse chhoti ikai **Unit Act** hai: ek jaagrook actor samajik values aur situational rukawaton (paisa, jagah, samay) ke beech soch-samajh kar apne lakshya aur tareeke chunta hai.

Baad mein *The Social System* (1951) mein unhone dikhaya ki jab kayi log shared rules ke andar lagatar interact karte hain, toh ek **Social System** banta hai. Isme har insaan ke paas ek **Status** (jaise teacher, maa, ya IAS) aur usse juda **Role** hota hai. Yeh order do tareekon se tikta hai:

- **Socialisation:** Parivar aur school bachon ke andar ==Value Consensus== bhar dete hain taaki niyam manna aadat ban jaaye.
- **Social Control:** Taane, badnaami, kanoon, police aur courts bhatke hue logon ko wapas equilibrium mein laate hain.

## AGIL Paradigm: System Zinda rehne ki 4 Shartein

Chahe poora desh ho, ek university campus ho ya ek aspatal—kisi bhi social system ko tikne ke liye chaar buniyadi kaam ya **Functional Prerequisites** poore karne padte hain, jinhe ==AGIL== kehte hain:

- **Adaptation (A — Economy):** Bahari duniya se food, fund, bijli aur sansadhan jutakar system chalana. [[eg:Ek university mein UGC grants, student fees, smart classrooms aur library Adaptation poora karte hain.]]
- **Goal Attainment (G — Polity):** Samuhik lakshya tay karna aur unhe haasil karne ke liye resources lagana. [[eg:University mein Vice-Chancellor, Academic Council aur Deans padhai-research ke targets tay karte hain.]]
- **Integration (I — Law & Courts):** Andar ke hisson mein talmel banana aur jhagde shanti se suljhana. [[eg:Campus par student unions, proctorial board aur anti-ragging committees aman rakhte hain.]]
- **Latency (L — Family, Religion, Education):** **Pattern Maintenance** (parampara-values aage badhana) aur **Tension Management** (stress kam karna). [[eg:Hostel dosti, cultural fests aur counselling cells students ka tanav ghatate hain.]]

[[eg:ISI tarah UPSC ke jawab mein Naxalism jaisi samasya ko AGIL se dekha jaa sakta hai: rozgar ki kami Adaptation failure hai, weak governance Goal Attainment ki kami hai, tribal–police bharosa tootna Integration sankat hai, aur samvidhanik mulyaon se doori Latency ki kamzori hai.]]

## Cybernetic Hierarchy aur Moving Equilibrium

Aalochak kehte hain ki functionalism badlaav nahi samjha sakta, par Parsons ne **Social Change** ke do saaf tareeke bataye. Pehla hai ==Cybernetic Hierarchy of Control==: insaani system mein chaar layers hain—**Organismic** (shareer ki urja) -> **Personality** -> **Social** -> **Cultural System** (values). Zaroorat aur energy neeche se upar jaati hai, jabki sabse zyada niyantran aur disha (high information) upar Culture se neeche aati hai.

Doosra niyam hai ==Dynamic / Moving Equilibrium==. Jab bahar se koi bada badlaav—jaise nayi AI tech, mahamari ya jalvayu badlaav—economy par takrata hai, toh uske asar se rajneeti, kanoon aur parivar bhi dheere-dheere khud ko dhal kar ek **naye santulan (new equilibrium)** mein aa jaate hain. Saath hi **Structural Differentiation** (purane parivar se alag school-factory ka nikalna) aur **Adaptive Upgrading** samaj ko aage badhate hain.

## Pattern Variables: Role Uljhanein aur Modernisation

Har samajik samna karte waqt ek actor ke saamne paanch buniyadi value choices aati hain jinhe Parsons ==Pattern Variables== kehte hain—yeh batati hain ki koi vyakti aur poora samaj traditional hai ya modern.

| Pattern Variable | Type A (Expressive / Traditional) | Type B (Instrumental / Modern) | Rozmarra ka Indian Udaharan |
| --- | --- | --- | --- |
| Pehchan ka Aadhar | Ascription (janm, jaati, vansh) | Achievement (merit, exam, skill) | Gaon ka choudhary vs UPSC merit |
| Zimmedari ka Daayra | Diffuseness (bada aur khula rishta) | Specificity (tay aur seemit kaam) | Maa ki mamta vs dentist ki appointment |
| Niyam ka Paimana | Particularism (apne paraye ka farak) | Universalism (sabke liye ek kanoon) | Rishtedar ko marks vs blind RTI niyam |
| Bhavukta ka Star | Affectivity (khuli bhavukta) | Affective Neutrality (tatasthta) | Parivarik utsav vs OT mein surgeon |
| Kiska Fayda Pehle | Collectivity (samuh ki bhalai) | Self-Orientation (apna personal labh) | Joint family pool vs corporate bonus |

Parsons ke mutabik jab samaj **Type A** se **Type B** ki taraf badhta hai, tab modernisation hota hai—jaise Bharat mein jaati-ascription se samvidhanik universalism ki yatra. Lekin zameeni haqiqat itni seedhi nahi: [[trap:Bharat mein ek accha doctor neutrality ke saath hamdardi bhi dikhata hai, aur bade Indian family businesses corporate specificity ke saath parivarik bharose (particularism) ko mila kar chalte hain!]]

## Parsons ki Theory ki Mukhya Aalochna

1960s ke baad conflict aur interactionist thinkers ne Parsons par teekhe sawaal uthaye:

- **Satta, Takraav aur Kranti ki Andekhi:** Har jagah value consensus maan kar Parsons ne shoshan aur violent krantiyon ko sirf chhoti system-garbadi bata diya ([[thinker:Ralf Dahrendorf]] aur Marxists ki badi aalochna).
- **American Bias aur Gender Stereotypes:** Unhone 1950s ke American capitalism ko sabse shreshth maana (yahan tak ki high divorce rates ko bhi shaadi ke prati pyaar bataya!) aur mahilaon ko ghar ke "expressive" kaam mein baandh diya.
- **Bhari Jargon aur Grand Theory:** [[thinker:C. Wright Mills]] ne mazak mein kaha ki Parsons ki moti kitabon ko seedhi English mein translate karne par sirf aam common sense bachta hai; [[thinker:Robert K. Merton]] ne unke bajaye testable **Middle-Range Theories** par zor diya. [[link:Unit 4.5 mein dekho Merton ne Parsons ke functionalism ko kaise sudhara, aur Paper 2 Unit 9 mein nuclear family ki aalochna padho.]]`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1937',
        title: 'The Structure of Social Action',
        text: 'Weber aur Durkheim ko jod kar Voluntaristic Theory of Action aur Unit Act diya.',
      },
      {
        year: '1951',
        title: 'The Social System',
        text: 'Status-role equilibrium, socialisation aur paanch Pattern Variables ka poora model rakha.',
      },
      {
        year: '1953–1956',
        title: 'AGIL Paradigm (Bales & Smelser ke saath)',
        text: 'Adaptation, Goal Attainment, Integration aur Latency ke chaar subsystems samjhaye.',
      },
      {
        year: '1959',
        title: 'C. Wright Mills — Sociological Imagination',
        text: 'Parsons ki "Grand Theory" par bhari jargon aur power-blindness ki classic aalochna ki.',
      },
      {
        year: '1966',
        title: 'Societies: Evolutionary Perspectives',
        text: 'Cybernetic Hierarchy, structural differentiation aur dynamic equilibrium se badlaav samjhaya.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Bahari Jhatka', text: 'Nayi technology ya crisis system boundary se takrata hai' },
      { label: 'Adaptation Badlaav', text: 'Economy subsystem resources aur roles ko dhalta hai' },
      { label: 'Subsystems Talmel', text: 'Polity, kanoon aur parivar apni bhoomika adjust karte hain' },
      { label: 'Cybernetic Control', text: 'Cultural values naye niyamon ko disha aur manyata dete hain' },
      { label: 'Moving Equilibrium', text: 'Samaj ek naye aur differentiated santulan par tikta hai' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Pattern Variables Type A (Traditional)',
    rightTitle: 'Pattern Variables Type B (Modern)',
    rows: [
      {
        aspect: 'Role ka Chunaav',
        left: 'Ascription: janm, jaati, umar ya khandaan',
        right: 'Achievement: exam merit, kshamta aur qualification',
      },
      {
        aspect: 'Zimmedari ki Seema',
        left: 'Diffuseness: poora aur asimit dayitva',
        right: 'Specificity: likhit contract ke hisaab se tay kaam',
      },
      {
        aspect: 'Niyam ka Istemal',
        left: 'Particularism: niji rishte dekh kar bhedbhav',
        right: 'Universalism: sabhi nagrikon par ek hi kanoon',
      },
      {
        aspect: 'Bhavnaon ka Role',
        left: 'Affectivity: turant aur khuli bhavnaatmak abhivyakti',
        right: 'Affective Neutrality: kaam ke waqt shant tatasthta',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Social System & Unit Act',
    meaning:
      'Parsons ka woh model jisme kai actors shared moral values ke daayre mein statuses aur roles nibhate hue interact karte hain.',
  },
  {
    kind: 'keyTerm',
    term: 'AGIL Paradigm',
    meaning:
      'Har social system ko zinda rakhne wali chaar zaroori shartein: Adaptation (Economy), Goal Attainment (Polity), Integration (Law) aur Latency (Family/Culture).',
  },
  {
    kind: 'keyTerm',
    term: 'Pattern Variables',
    meaning:
      'Role nibhate waqt actor ke saamne aane wali paanch do-tarfa value uljhanein (Ascription–Achievement, Diffuseness–Specificity, Particularism–Universalism, Affectivity–Neutrality, Collectivity–Self).',
  },
  {
    kind: 'keyTerm',
    term: 'Cybernetic Hierarchy & Moving Equilibrium',
    meaning:
      'Control ki woh seedhi jisme sabse upar Cultural values baaki systems ko guide karti hain aur bahari badlaav par system naya santulan dhoondhta hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2022–2015 PYQ Pattern: Parsons par Applied Sawaal Aate Hain!',
    body: 'UPSC Parsons par practical application maangta hai: AGIL ko desh ki samasyaon (2018) ya ek University (2016) par lagao, Pattern Variables se social change samjhao (2020), aur Moving Equilibrium ki kranti samjhane ki kshamta parakho (2021). Hamesha Indian examples + Mills aur Dahrendorf ki aalochna jodo.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: "Parsons ne Social Change par Kuch Nahi Likha"',
    body: 'Yeh ghisi-piti baat mat likhna ki Parsons change nahi maante the. Asal mein unhone Moving Equilibrium, Cybernetic Hierarchy, Structural Differentiation aur Pattern Variables se social change ki poori theory di—bas unki kami violent revolution aur class conflict ko na samajh paana thi.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: '5 Pattern Variables (A-D-P-A-C) aur AGIL Subsystems',
    body: 'Pattern Variables ka short-cut — A-D-P-A-C: Ascription/Achievement, Diffuseness/Specificity, Particularism/Universalism, Affectivity/Neutrality, Collectivity/Self. AGIL — A=Economy, G=Polity, I=Law/Courts, L=Family/Religion/Education.',
  },
  {
    kind: 'answerBox',
    intro:
      'Talcott Parsons ne Weber ke social action aur Durkheim ke moral consensus ko milakar structural functionalism ka sabse bada systems model taiyar kiya.',
    points: [
      'System order: Socialisation (parivar/school) aur social control dwara chalne wale status-role scripts samaj mein shanti aur order banaye rakhte hain.',
      'AGIL prerequisites: Desh se lekar university tak har system ko Adaptation, Goal Attainment, Integration aur Latency poore karne hote hain.',
      'Pattern Variables: Paanch value dilemmas samaj ko traditional Type A se modern Type B ki taraf badalte dikhate hain.',
      'Badlaav ka siddhant: Cybernetic control aur Moving Equilibrium shant evolutionary badlaav samjhate hain, par khooni krantiyon par kamzor padte hain.',
      'Aalochna aur upyog: Mills ke jargon critique aur US/gender bias ke bawajood AGIL aur Pattern Variables aaj bhi institutional analysis mein behad upyogi hain.',
    ],
    conclusion:
      'Shant santulan ka pakka niyam maanne ke bajaye ek diagnostic toolkit ke roop mein Parsons ka model aaj ke institutions aur transitional Bharat ko samajhne mein madad karta hai.',
  },
]

export const topic4Hi: TopicLangContent = {
  summary:
    'Talcott Parsons ne voluntaristic action aur paanch Pattern Variables ko AGIL framework aur Cybernetic Hierarchy ke saath jod kar structural functionalism ki sabse badi Social System theory banayi.',
  mindMap: topic4MindMapHi,
  sections,
}