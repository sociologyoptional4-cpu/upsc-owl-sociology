import type { NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1MindMapHi } from './topic-1-mindmaps'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Sociological research teen badi epistemologies—Positivism, Interpretivism aur Critical Feminism—par tiki hai; aaj Alan Bryman aur Norman Denzin ke mixed-methods triangulation ke zariye quantitative scale aur qualitative depth ko ek saath joda jaata hai.'

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u03-01-quant-qual-sampling.webp',
    alt: 'Infographic comparing Quantitative surveys and probability sampling with Qualitative ethnography and Alan Bryman triangulation',
    caption:
      'Quantitative methods bade scale par numbers aur trends dikhate hain, qualitative methods asli feelings samjhate hain—aur triangulation dono ko jodta hai.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 3 Visual 01',
  },
  {
    kind: 'md',
    body: `## Method vs Methodology: Tool Chunnne se Pehle Soch Samjho

Aasaan shabdon mein samjho: aksar students "method" aur "methodology" ko ek hi cheez maan lete hain, jabki UPSC answer writing mein yeh farak seedha marks dilata hai. ==Research method== ka matlab woh specific auzar hai jisse aap data laate hain—jaise survey, interview, ya field diary. Wahin ==methodology== woh bada philosophical roadmap aur tark hai jo batata hai ki aapne wahi tool kyun chuna aur aap samaj ko kis nazariye se dekhte hain.

Koi bhi researcher questionnaire ya ethnography chunnne se pehle yeh tay karta hai ki samaj ka sach kaise jaana jaa sakta hai (Epistemology). Sociology mein iske teen mukhya raste hain:

- **Positivist Epistemology:** [[thinker:Auguste Comte]] aur [[thinker:Emile Durkheim]] ki parampara mein yeh indriyon se dekhe gaye sabooton par bharosa karta hai aur maanta hai ki insaan ka vyavahar bahari ==social facts== se chalta hai. Ismein hypothetico-deductive testing, stats aur thandi objectivity par zor hota hai—jaise Durkheim ki *Suicide* (1897) ya [[thinker:Karl Marx]] ki 1880 wali *Workers' Inquiry* jo 25,000 French mazdooron ko bheji gayi.
- **Interpretivist Epistemology:** [[thinker:Max Weber]], Alfred Schutz, Harold Garfinkel aur Erving Goffman maante hain ki insaan robot nahi hai; woh har ghatna ko apna matlab deta hai. Context (*indexicality* aur *reflexivity*), rozmarra ke mental labels (*typifications*), aur front-stage vs back-stage abhinay (*dramaturgy*) ko samajhne ke liye researcher ko ==Verstehen== yani sahanubhooti-bhari samajh chahiye.
- **Critical & Feminist Epistemology:** Marxist aur feminist scholars sirf ginti ya chupchaap observation ko nakarte hain aur research ko samajik anyay kholne ka madhyam maante hain. [[thinker:Ann Oakley]], Carol Smart, Michelle Stanworth aur Margaret Eichler ke mutabik mainstream sociology "malestream" rahi—jismein sirf mardon ke samples liye gaye, auraton ki class unke pati se jod di gayi, aur ghar ke unpaid kaam ko nazarandaz kiya gaya; isliye Oakley ne thandi doori chhod kar barabar ke dostana dialogue ko apnaya.

[[trap:Post-positivist thinkers ne bhi pure science ki andhi puja tod di: Karl Popper ne white-swan misaal se dikhaya ki hazaron safed hans dekh kar bhi aap ek kaale hans ki sambhavna khatam nahi kar sakte, aur Thomas Kuhn ne bataya ki science paradigm shifts se chalta hai jahan sociology abhi pre-paradigmatic daur mein hai.]]

| Parampara | Samajik Reality ki Samajh | Research ka Asli Goal | Pasandida Saboot |
| --- | --- | --- | --- |
| Positivism | Objective aur external social facts | Universal rules aur prediction | Numbers, Census, surveys |
| Interpretivism | Logon dwara banayi subjective meanings | Motives aur feelings ki samajh | Words, diaries, life stories |
| Critical & Feminist | Class aur patriarchy se dabi vyavastha | Bhedbhaav kholna aur badlaav laana | Standpoint dialogue aur narratives |

## Quantitative Methods: Bade Scale par Samaj ko Naapna

Aasaan shabdon mein samjho: agar sarkar ya researcher yeh jaanna chahta hai ki Bharat mein fertility rate kitni ghati ya kis rajya mein youth berozgari zyada hai, toh sirf das logon ki kahani kaafi nahi hogi. ==Quantitative methodology== samajik vyavahar ko ginti, percentages, charts aur statistical correlations mein badal deti hai taaki laakhon logon ka bada chitra bina personal bias ke dikh sake.

Iske mukhya auzar aur unka practical istemal dekho:

- **Surveys aur Census:** NFHS, IHDS aur Pew surveys chhote samples se samay ke saath aane wale badlaav dikhate hain, jabki Decennial Census desh ke har vyakti ke ghar, shauchalay, gas aur rozgar ka poora hisab leta hai. [[eg:NFHS-1 se NFHS-5 ke beech data compare karke Bharatiya sociologists dekh paate hain ki hospital deliveries aur garbh-nirodh ka upyog kitna badha.]]
- **Official Statistics (Hard vs Soft):** Durkheim ne French police files se suicide data nikala, par aaj scholars ==hard statistics== (janm-vivah) aur ==soft statistics== (gareebi, crime, berozgari jinke formula sarkar badal sakti hai) mein farak karte hain. Interpretivists J. Maxwell Atkinson aur Jack Douglas ne dikhaya ki suicide ke aakde bhi coroner ki cultural soch par nirbhar karte hain.
- **Experiments aur Comparative Method:** Bandura ke Bobo Doll jaise lab tests sociology mein naitik taur par mushkil hain, isliye log **field experiments** karte hain—jaise 1924 ke Western Electric Hawthorne plant tests jahan roshni ghatane-badhane par bhi production badha kyunki workers ko pata tha ki unhe dekha jaa raha hai (==Hawthorne effect== aur [[thinker:Robert K. Merton]] ki *serendipity*). Wahin **comparative method** mein ek jaisi categories ki tulna hoti hai (Durkheim aur Weber ki tarah), jabki Sisson ke street-helpfulness tests mein baarish ya bheed jaise bina-control variables nateeje bigaad sakte hain.
- **Quantitative Content Analysis:** TV serials, speeches ya social media par shabdon aur gender screen-time ki ginti karke bhedbhaav napna—jaise yeh dekhna ki commercials mein mahilayein zyada kitchen mein aur mard office ya court mein kyun dikhaye jaate hain.

### Taakat, Kamiyan aur Census ki Zameeni Chunautiyan

Quantitative methods ki sabse badi taakat hai **generalisability**, **replicability**, policy planning (Swachh Bharat ya Ujjwala LPG tracking), aur clean correlation testing. Lekin inki bhari kamiyan bhi hain:

- **Reductionism:** Jaati-bhed, dard ya dharmik aastha ko sirf haan-naa ke dibbon mein band karne se asli wajah gayab ho jaati hai.
- **Abstracted Empiricism:** [[thinker:C. Wright Mills]] ne chetaya ki bina history aur power structure samjhe sirf aakdon ki puja karna bekaar hai.
- **Census ki Asli Mushkilein:** Bharat mein Census par hazaron crore kharch hote hain, thake hue school teachers se enumeration karwaya jaata hai, samajik izzat ke darr se log sach chhupate hain (social desirability bias), ghumantu aur migrant mazdoor chhoot jaate hain, aur 2021 ka Census talne se rajyon ko alag caste surveys karne pade.

## Qualitative Methods: Parde ke Peeche ki Sachai Sunna

Aasaan shabdon mein samjho: ek table aapko yeh bata degi ki coaching ke 40% students stress mein hain, par yeh nahi batayegi ki kamre mein akele baithe student ke dil par kya beet rahi hai. ==Qualitative methodology== logon ke shabdon, awaaz ke utaar-chadhav, chuppi, riti-riwazon aur bhavnaon ko unke apne mahol mein padhti hai aur thandi ginti ke bajaye ==gehari validity== par zor deti hai.

Iske mukhya roop aur techniques niche samjho:

- **Ethnography & Participant Observation:** Mahinon tak kisi samuday ke saath rehkar unke andekhe niyam samajhna—jaise Malinowski ne Trobriand Islands mein, [[thinker:M.N. Srinivas]] ne Karnataka ke Rampura mein, aur André Béteille ne Tamil Nadu ke Sripuram mein kiya.
- **Unstructured & Semi-Structured Interviews:** Khuli baatcheet jahan sawaal jawab ke hisab se badlein—jaise Arlie Hochschild ne *The Second Shift* mein 50 working couples aur 45 caregivers se baat karke ghar ke dohare bojh ko khola, ya [[thinker:Ann Oakley]] ne maon ke saath apne anubhav baant kar bharosa jeeta.
- **Focus Groups, Case Studies & Life Histories:** 5–15 logon ki charcha (FGD), kisi ek factory strike ya riot ki 360-degree case study, aur Thomas-Znaniecki ke *The Polish Peasant* ya Maria Mies ki domestic-violence survivors wali life histories.
- **Qualitative Content Analysis & Grounded Theory:** Baatcheet mein kaun kisko tokta hai yeh dekh kar power pakadna, ya Barney Glaser aur Anselm Strauss ki ==Grounded Theory== se bina purani theory thope seedhe interviews ki coding karke nayi theory paida karna.

[[eg:Bharatiya consumer behaviour samajhne mein UPI data batata hai ki kya kharida gaya, par qualitative focus group batata hai ki baby-food kharidne mein maa ke saath Nani aur doctor ka bharosa kaise kaam karta hai.]]

### Qualitative Critiques aur Objectivity / Value-Neutrality ka Sawaal

Qualitative research par do bade ilzam lagte hain: chhote samples se poori duniya par niyam nahi lagaye jaa sakte (**low generalisability**), aur zyada ghulne-milne se researcher apne feelings mein beh sakta hai ("going native"). **Barry Hindess** ne toh ethnomethodology par teekha hamla karte hue kaha ki agar objective structure ko maana hi na jaaye toh aisi research aam kissa-kahani se alag nahi rehti.

Isi ke saath juda hai **objectivity aur value neutrality** ka gambhir mudda. [[thinker:Max Weber]] ne saaf kiya ki topic chunnne mein researcher ki personal values kaam karti hain (*value relevance*), par data analyse karte waqt use imaandar aur neutral rehna chahiye (*value neutrality*). Lekin **Alvin Gouldner** ne "value-free sociology" ko ek jhootha myth kaha jo takatwar logon ka paksh chhupata hai, aur **Gunnar Myrdal** ne kaha ki neutral dikhne ka natak karne se behtar hai apni values shuru mein hi saaf bata dena.

## Mixed Methods & Triangulation: Dono Aankhon se Dekhna

Aasaan shabdon mein samjho: ek zamane mein numbers aur kahaniyon ke supporters ek doosre se ladte the, par aaj ke sociologists jaante hain ki poore shehar ka map aur ek ghar ki gali—dono zaroori hain. **Alan Bryman** is sangam ko ==methodological pluralism== kehte hain, aur **Norman Denzin** ne iske liye ==triangulation== shabd ko mashhoor kiya jahan ek hi mudde ko kai angles se cross-check kiya jaata hai.

Denzin ke chaar triangulation tarike yaad rakho: **data triangulation** (alag samay, jagah aur logon se data), **investigator triangulation** (ek se zyada researchers), **theory triangulation** (ek hi data par alag theories test karna), aur **methodological triangulation** (ya toh ek hi stream ke do tools, jaise observation + interview, ya survey + ethnography ka sangam). [[eg:Eileen Barker ne Moonies cult par research karte waqt unke saath rehkar participant observation ki aur saath mein structured questionnaires bhi bharwaye taaki dono saboot ek doosre ki jaanch kar sakein.]]

[[link:Paper 2 Unit 3 mein Bharatiya village studies ko dekho—aaj scholars Srinivas jaisi ethnography ke saath Census aur NSS ke aakde jod kar poori tasveer banate hain.]]

Lekin mixed methods ki bhi apni seemayein hain: ismein double samay aur paisa lagta hai, researcher ko statistics aur fieldwork dono mein mahir hona padta hai, aur kabhi-kabhi survey ke numbers aur interview ki kahani ek doosre ke bilkul ulte aa jaate hain.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Quantitative Methodology',
    rightTitle: 'Qualitative Methodology',
    rows: [
      {
        aspect: 'Epistemological Base',
        left: 'Positivism: external social facts aur causal laws',
        right: 'Interpretivism & Feminism: subjective meanings aur lived experiences',
      },
      {
        aspect: 'Data Format & Tools',
        left: 'Numbers aur stats (Census, surveys, structured schedules)',
        right: 'Words aur narratives (ethnography, interviews, FGD, life history)',
      },
      {
        aspect: 'Scale & Reach',
        left: 'Bade probability samples aur macro generalisation',
        right: 'Chhote purposive groups aur gehari local samajh',
      },
      {
        aspect: 'Core Rigour Focus',
        left: 'Reliability, replicability aur statistical patterns',
        right: 'Validity, empathetic rapport (Verstehen) aur backstage sach',
      },
      {
        aspect: 'Mukhya Khatra',
        left: 'Reductionism, soft-stats manipulation, abstracted empiricism',
        right: 'Researcher bias, going native, kam generalisability',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Qualitative Khoj', text: 'Ethnography ya FGD se local bhasha aur asli mudde pakdo' },
      { label: 'Hypothesis & Scale', text: 'Zameeni samajh ke adhar par accurate sawaal banao' },
      { label: 'Quantitative Survey', text: 'Bade representative sample par data test karo' },
      { label: 'Cross-Check', text: 'Denzin & Bryman triangulation se virodhabhas pakdo' },
      { label: 'Poora Sach', text: 'Macro trends aur insani feelings dono saath samjho' },
    ],
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1880–1897',
        title: 'Marx Workers’ Inquiry & Durkheim Suicide',
        text: 'Mazdoor questionnaires aur official suicide statistics ke saath quantitative sociology ki shuruat.',
      },
      {
        year: '1922–1924',
        title: 'Malinowski Ethnography & Hawthorne Study',
        text: 'Trobriand Islands ne gehara fieldwork sikhaya aur Hawthorne ne observer reactivity dikhayi.',
      },
      {
        year: '1967',
        title: 'Glaser & Strauss — Grounded Theory',
        text: 'Data coding ke zariye neeche se upar (inductive) nayi theory banane ka systematic tarika.',
      },
      {
        year: '1979–1988',
        title: 'Ann Oakley & Alan Bryman Synthesis',
        text: 'Feminist collaborative interviewing aur mixed-methods triangulation ne purani deewar todi.',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Method vs Methodology',
    meaning:
      'Method data jama karne ka specific tool hai (jaise survey ya interview), jabki methodology woh poori philosophical soch aur logic hai jo us tool ko chunne ka karan batati hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Methodological Triangulation',
    meaning:
      'Ek hi study mein quantitative aur qualitative tools, alag researchers ya theories ko mila kar natijon ko cross-verify karna taaki har method ki kami poori ho sake.',
  },
  {
    kind: 'keyTerm',
    term: 'Hawthorne Effect & Serendipity',
    meaning:
      'Logon ka sirf isliye apna vyavahar badal lena kyunki unhe pata hai unhe dekha jaa raha hai—yeh Merton ki serendipity (bina soche mili khoj) ka classic example hai.',
    thinkerSlug: 'robert-k-merton',
  },
  {
    kind: 'keyTerm',
    term: 'Value Relevance vs Value Neutrality',
    meaning:
      'Max Weber ka niyam ki topic chunnne mein researcher ki values chalti hain, par data analysis ke waqt personal bias ko door rakhna zaroori hai.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'emile-durkheim',
    quote: 'The first and most fundamental rule is: Consider social facts as things.',
    context: 'Durkheim ka Positivist niyam ki samajik ghatnaon ko thos aur objective cheez maan kar padha jaaye.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Exam Mantra: Quant vs Qual mein Kisi Ek ko Jeetao Mat!',
    body: 'Chahe UPSC mixed method (2024), qualitative dimensions (2023) ya quantitative limits (2013) pooche, ek side ko superior mat batao. Positivism vs Interpretivism ke saath Feminist critique (Ann Oakley) aur Indian consumer/village examples dikhao, aur Alan Bryman + Norman Denzin ke triangulation par balanced end karo.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Value Relevance aur Objectivity mein Galti Mat Karna',
    body: 'Kai students likh dete hain ki Max Weber ne research ko 100% value-free kaha. Sahi baat yeh hai: Weber ne maana ki topic chunnne mein values hoti hain (value relevance), par analysis mein value neutrality rakhni chahiye—jise baad mein Alvin Gouldner ne myth kaha.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Norman Denzin ke 4 Triangulation Pillars (D-I-T-M)',
    body: 'Kisi bhi mixed-method answer mein D-I-T-M chipkao: Data (alag log, samay, jagah), Investigator (ek se zyada fieldworkers), Theory (plural theories), aur Method (within-method qualitative pairing ya between-method quant + qual sangam).',
  },
  {
    kind: 'answerBox',
    intro:
      'Quantitative aur qualitative methodologies alag philosophical vichardharaon se nikli hain, par aaj ki sociology unhe ek doosre ka dushman nahi balki poorak maanti hai.',
    points: [
      'Quantitative methods (surveys, Census, structured interviews, experiments) Positivist objectivity, reliability aur bade scale ke macro patterns dete hain.',
      'Qualitative methods (ethnography, unstructured interviews, FGDs, Grounded Theory) Interpretivist Verstehen, emotions aur parde ke peeche ki asliyat kholte hain.',
      'Ann Oakley jaise feminist scholars ne thandi doori ko nakar kar dostana dialogue se unpaid care aur patriarchy ko samne laane par zor diya.',
      'Jahan quantitative mein reductionism aur Mills ke abstracted empiricism ka khatra hai, wahin qualitative mein researcher bias aur kam generalisability ki seema hai.',
      'Alan Bryman aur Norman Denzin ne triangulation (mixed methods) ke zariye survey ke aakdon aur ethnographic depth ko jodne ka rasta dikhaya.',
    ],
    conclusion:
      'Behtareen sociological research sawaal ki zaroorat ke hisab se dono tools ko milati hai taaki structural trends aur insani anubhav dono samne aa sakein.',
  },
]

export const topic1Hi: TopicLangContent = {
  summary,
  mindMap: topic1MindMapHi,
  sections,
}