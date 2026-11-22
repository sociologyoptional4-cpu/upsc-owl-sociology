import type { NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3MindMapHi } from './topic-3-mindmaps'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Mazboot sociological research abstract concepts ko clear variables mein dhalti hai, testable hypotheses se disha chunti hai, representative probability ya purposive samples nikalti hai, aur repeatability (reliability) ke saath gehari sachai (validity) ko balance karti hai.'

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u03-02-variables-validity-bullseye.webp',
    alt: 'Infographic showing hypothesis types, independent dependent intervening variables, and 2x2 reliability versus validity bullseye targets',
    caption:
      'Reliability ko nishane ki baar-baar ek jaisi pakad samjho, aur validity ko seedha beech ka bullseye lagna—dono milkar hi raw data ko bharosemand gyaan banate hain.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 3 Visual 02',
  },
  {
    kind: 'md',
    body: `## Data, Information aur Operationalisation

Aasaan shabdon mein samjho: har research ki shuruat kachche tathyon se hoti hai—jaise police registry ke death slips, school attendance registers ya mazdoori ki parchi—jise ==data== (*tathya*) kehte hain. Akela data khamosh rehta hai; jab researcher use sort karke, jodne aur matlab nikalne ka kaam karta hai tab woh upyogi ==information== (*jankari*) banta hai—bilkul waise hi jaise [[thinker:Emile Durkheim]] ne French police records ko dharm aur shaadi ke hisab se jod kar suicide ki badi theory nikali.

Democracy, jaati-bhed ya gareebi jaise bade concepts ko seedhe scale se nahi naapa jaa sakta. Isliye sociologists pehle ==operationalisation== karte hain—yani ek abstract vichar ko dikhne wale, ginti layak indicators mein todte hain. [[eg:Economist Intelligence Unit ka Democracy Index democracy ko naapne ke liye electoral pluralism, voting participation aur civil liberties jaise 5 indicators use karta hai, aur Bharat ka Multidimensional Poverty Index health, padhai aur ghar ke indicators jodata hai.]]

## Variables: Prakar, Experiments aur Spurious Correlation

==Variable== koi bhi aisa gun ya halat hai—jaise umar, jaati, padhai, mahine ki kamai ya soch—jiski value alag logon ya halaton mein badalti rehti hai. Bina clear variables ke researcher na cause-effect dikha sakta hai aur na ittefaq ko kaaran se alag kar sakta hai.

Sociology mein variables ko mukhya roop se in hisson mein samjha jaata hai:

- **Quantitative vs Qualitative Variables:** Numeric variables ginti mein naape jaate hain (kamai ya padhai ke saal), jabki categorical variables group batate hain (shadi-shuda ya kunwara, jaati, gaon ya shehar).
- **Independent (IV), Dependent (DV) aur Intervening Variables:** ==Independent variable== badlaav ka kaaran hota hai, aur ==dependent variable== woh asar hai jo badalta hai. Interesting baat yeh hai ki aapke sawaal ke hisab se inki jagah palat sakti hai: agar aap poochhein ki padhai se kamai badhti hai toh education IV aur income DV hai; par agar poochhein ki ameer parivar bachon ko zyada padhata hai toh income IV ban jaati hai! In dono ke beech aksar ek ==intervening variable== aata hai jo batata hai asar kab aur kaise hoga. [[eg:Grameen Bharat mein gareebi (IV) bhookh (DV) laati hai, par MGNREGA rozgar aur PDS ration card beech mein intervening variable bankar bhookh rok dete hain.]]
- **Experimental vs Control Groups:** Bandura ke Bobo Doll jaise experiments mein ek group (experimental) ko naya factor diya jaata hai aur doosre **control group** ko usse door rakh kar **extraneous variables** rok kar asar dekha jaata hai. Par lab ke bahar Sisson ke street experiments mein baarish ya guzarti bheed jaise bina-control variables nateeje bigaad sakte hain.

[[trap:Correlation ka matlab causation nahi hota! Do cheezein ek saath badhein toh bhi unke beech teesra chhupa kaaran ho sakta hai jise spurious correlation kehte hain—jaise zyada kamai aur achhi sehat saath dikhti hai par dono ki asli wajah higher education hoti hai, aur bheed-bhaad aur crime dono ke peeche gareebi ka teesra variable hota hai.]]

## Hypothesis: Sources, Prakar aur Critical Evaluation

Aasaan shabdon mein samjho: ==hypothesis== koi hawai tukka ya bina jaancha assumption nahi hai—yeh do ya zyada variables ke beech ek saaf, testable rishta batane wala prastav hai jise sabooton se sahi ya galat sabit karna baaki hai. Robert Dubin ke mutabik theory aur zameeni sachai ke beech sabse nazdeeki pul hypothesis hi hai.

Iske sources mein purani studies (jaise Amartya Sen aur Jean Drèze ki padhai aur gareebi par research), theories se logical deduction (Durkheim, Marx), pilot studies, personal anubhav aur expert charcha shamil hain. Prakar dekhein toh: **simple hypothesis** (do variables), **complex hypothesis** (do se zyada variables), **directional hypothesis**, aur **Null Hypothesis (H0)** (koi rishta nahi hai) banaam **Alternative Hypothesis (H1)**.

[[eg:Gareebi aur niraksharata (illiteracy) ke beech relation check karne ke liye districts ki literacy rate aur Multidimensional Poverty scores compare kiye jaate hain—aur agar data hypothesis (H1) ko jhootha sabit karke H0 ko sahi maane, tab bhi Karl Popper ke mutabik hamara gyaan badhta hi hai.]]

Achhi hypothesis kam variables rakhti hai, seedhi relevant hoti hai, spasht hoti hai ("badh ya ghat sakti hai" jaisi gol-mol baat nahi), aur data se test ho sakti hai. **Critical Evaluation:** yeh research ko disha deti hai aur bekaar data bharne se bachati hai, lekin agar researcher pehle se tay hypothesis se chipka rahe toh **confirmation bias** ho sakta hai—isi wajah se Glaser aur Strauss ki ==Grounded Theory== aur exploratory ethnography bina fixed hypothesis ke shuru hoti hain.

## Sampling: Probability vs Non-Probability Strategies

Aasaan shabdon mein samjho: jaise doctor blood test ke liye poora khoon nikalne ke bajaye sirf ek chhoti si vial leta hai, ya chawal kharidne wala poori bori ke bajaye ek mutthi chawal dekhta hai—waise hi poore **Universe** par kharch aur samay bachane ke liye ek representative ==sample== liya jaata hai. Yeh sample jis poori list se nikalta hai use ==sampling frame== kehte hain (jaise Voter List, jismein aksar homeless ya migrant mazdoor chhoot jaate hain).

### Probability Sampling (Sabko Barabar aur Maloom Mauka)

Har vyakti ke chune jaane ki probability barabar aur pata hoti hai, jisse researcher ka pakshpat khatam hota hai aur statistical **reliability** wa **external validity** badhti hai:

- **Simple Random Sampling (SRS):** Sabko 1 se 200 tak number dekar lottery ya random number se chunna.
- **Systematic Sampling:** Ek random start chunnne ke baad har *n*-th vyakti lena (jaise list mein har 20th naam).
- **Stratified Random Sampling:** Population ko pehle groups (strata—jaise 25% ladkiyan aur 75% ladke) mein baant kar usi anupat mein random sample lena; yeh SRS se kahin zyada accurate hai par pehle se demographic data maangta hai.
- **Cluster & Multi-Stage Sampling:** Jab desh bahut bada ho (jaise Bharat ke ~90 crore voters), pehle kuch Lok Sabha constituencies (clusters) randomly chunte hain aur fir unke andar polling booths chun kar survey karte hain.

### Non-Probability Sampling (Zaroorat ya Hidden Groups ke Liye)

Jab poori list hi na mile ya sensitive groups samne na aayein, tab non-random tarike kaam aate hain:

- **Convenience & Volunteer Sampling:** Aasani se milne wale logon ko lena (apne coaching students) ya khud aage aane wale volunteers lena (Karol Bagh mess food ke liye 20 volunteers—jahan zyada gussa ya zyada utsahit log hi aate hain).
- **Purposive & Quota Sampling:** Jaankar logon (union leader) ko chunna ya apni research zaroorat se quota fix karna (jaise 20 ke sample mein 5 sociology graduates ya 15 minority students lena, bhale hi population mein unka share alag ho).
- **Snowball Sampling:** Jab group chhupa ho (ex-prisoners, undocumented migrants, LGBTQ+ networks), ek jaankar se shuru karke uske reference se 1 se 2, 2 se 4 logon tak badhna.

| Strategy | Chunav ka Tarika | Sabse Best Use | Mukhya Seema |
| --- | --- | --- | --- |
| Simple & Systematic | Lottery ya har n-th interval | Saaf list aur ek jaisa samaj | Chhote subgroups luck se chhoot sakte hain |
| Stratified Random | Pehle strata, fir anupat se random | Vividh samaj mein high accuracy | Pehle se sahi demographic data zaroori |
| Multi-Stage Cluster | Bade ilake se chhote clusters chunna | Desh-vyapi polls (Lok Sabha / NFHS) | Har stage par thoda sampling error |
| Snowball & Quota | Reference chain ya tay analytical quota | Chhupe ya khaas minority groups | Poore desh par generalise karna mushkil |

## Reliability, Validity aur Inequality Research

Socho aalu tolne ki do machines hain: Machine A pehle 70 kg, fir 100 kg, aur teesri baar 40 kg dikhati hai (bharose ke layak nahi), jabki Machine B baar-baar 70, 71, 69 kg dikhati hai. ==Reliability== ka matlab hai ek hi halat mein baar-baar ek jaisa natija aana; wahin ==validity== ka matlab hai ki aapka tool wahi cheez naap raha hai jiska woh daava karta hai—muh mein thermometer rakh kar wazan batana reliable ho sakta hai par bilkul invalid hai!

**Reliability** check karne ke chaar mukhya tests hain: **Test-Retest** (kuch hafte baad wahi test dohrana), **Parallel / Alternate Forms** (do barabar versions compare karna), **Inter-Rater / Inter-Observer** (do alag researchers ke scores milana), aur **Split-Half / Internal Consistency** (Likert scale ke sawaalon ka talmel check karna). **Validity** mein content, construct, internal causation aur external generalisability ke saath cultural bias dekhna zaroori hai. [[eg:CSAT jaisa abstract IQ test har baar consistent score (reliable) de sakta hai, par Jharkhand ke ek gaon ke kisan ke liye woh buddhimatta ka invalid scale hai kyunki use aise test formats ki aadat nahi.]]

**Inequality Research mein Reliability aur Validity kaise Suljhayein?** Jaati-bhed, chhupi daulat ya gharelu hinsa naapne mein log darr ya social desirability ke karan sach chhupate hain aur savarna researchers dard ko kam aankte hain ([[thinker:B.R. Ambedkar]] ki graded inequality). Ise suljhane ke upay: (1) NSS-SECC surveys ko gaon ethnography ke saath **triangulation** se jodo; (2) sirf cash income nahi balki zameen, dignity aur intersectionality jaise **multi-dimensional indicators** lo; (3) **standpoint reflexivity** apnao (Ann Oakley, Sharmila Rege); aur (4) **daily field diaries**, staff training, peer audit aur virodhabhasi sabooton ko khulkar likho.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Reliability (Consistency)',
    rightTitle: 'Validity (Satik Sachai)',
    rows: [
      {
        aspect: 'Mukhya Sawaal',
        left: 'Kya baar-baar ek jaisi sthiti mein wahi natija aata hai?',
        right: 'Kya tool sach mein wahi cheez naap raha hai jo daava karta hai?',
      },
      {
        aspect: 'Aasaan Misaal',
        left: 'Taraju baar-baar 70, 71, 69 kg bataye; teer ek hi jagah lagein',
        right: 'Teer seedha beech ke bullseye par lage; wazan taraju se naapein, thermometer se nahi',
      },
      {
        aspect: 'Check Karne ke Tests',
        left: 'Test-Retest, Parallel Forms, Inter-Rater, Split-Half',
        right: 'Construct, Content, Criterion, Internal & External validity',
      },
      {
        aspect: 'Kis Method mein Strong',
        left: 'Standardised surveys, Census aur closed questionnaires',
        right: 'Immersive ethnography, Verstehen aur life histories',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Operationalise', text: 'Gareebi ya status ko measurable indicators mein todo' },
      { label: 'Hypothesis Banao', text: 'Saaf IV, DV aur testable Null (H0) rishta tay karo' },
      { label: 'Sample Chuno', text: 'Frame ke hisab se probability ya purposive sample lo' },
      { label: 'Reliability Test', text: 'Test-Retest, Inter-Rater aur Split-Half checks lagao' },
      { label: 'Validity Bachao', text: 'Cultural bias todne ko survey aur fieldwork jodo' },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Operationalisation',
    meaning:
      'Democracy, socio-economic status ya jaati-bhed jaise abstract concepts ko dikhne wale, ginti layak indicators mein badalne ki prakriya.',
  },
  {
    kind: 'keyTerm',
    term: 'Spurious Correlation',
    meaning:
      'Do variables ke beech dikhta hua jhootha rishta jo asal mein kisi teesre chhupe hue variable ki wajah se paida hota hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Null Hypothesis (H0)',
    meaning:
      'Ek shuruati prastav jo maanta hai ki do variables ke beech koi khaas rishta nahi hai, jise empirical data se reject ya accept kiya jaata hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Universe vs Sampling Frame',
    meaning:
      'Universe poori target population ko kehte hain, jabki sampling frame woh asli list (jaise Voter List) hai jisse sample chuna jaata hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Reliability vs Validity',
    meaning:
      'Reliability matlab baar-baar ek jaisa consistent natija milna, jabki validity matlab sahi aur asli samajik reality ko naapna.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Sabse Zyada Repeat Zone: 11 PYQs (2025 mein 2 Sawaal!)',
    body: 'Unit 3 mein sabse zyada sawaal yahin se aate hain—2025 mein Hypothesis aur Reliability par do seedhe sawaal aaye! Har answer mein clean definition, ek chhota bullseye ya IV-Intervening-DV diagram, Durkheim (Suicide) aur Popper (falsification) zaroor daalein, aur Indian inequality, MGNREGA ya Voter List ki misaal dein.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Stratified Sampling aur Quota Sampling Ko Mix Mat Karo!',
    body: 'Dono mein population ko subgroups mein baanta jaata hai, par Stratified Random Sampling ek probability method hai jismein census anupat ke hisab se random log chune jaate hain; Quota Sampling non-probability hai jahan researcher apni zaroorat se fixed quota bhar leta hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Reliability ke 4 Tests ka Mantra: T-P-I-S',
    body: '2022 aur 2025 reliability PYQs ke liye T-P-I-S yaad rakho: Test-Retest (samay ke saath stability), Parallel Forms (do barabar test versions), Inter-Rater (alag coders ki ek-raay), aur Split-Half (Likert sawaalon ki internal ekta).',
  },
  {
    kind: 'answerBox',
    intro:
      'Variables, hypotheses, sampling, reliability aur validity woh mazboot neev hain jo abstract sociological theory ko bharosemand empirical sabooton se jodti hain.',
    points: [
      'Operationalised variables (IV, DV, intervening aur control) causal patterns pakadne aur spurious correlation se bachne mein madad karte hain.',
      'Hypotheses theory aur field data ko falsifiable predictions (H1 vs H0) se jodti hain, jabki Grounded Theory bias rokne ko bina fixed hypothesis shuru hoti hai.',
      'Probability sampling (SRS, systematic, stratified, cluster) selection bias hata kar reliability-validity badhati hai; non-probability sampling (snowball, purposive, quota) chhupe groups tak pahunchti hai.',
      'Reliability repeatable consistency (Test-Retest, Parallel Forms, Inter-Rater, Split-Half) deti hai, aur validity cultural bias se bach kar sach naapti hai.',
      'Indian inequality research mein triangulation, multi-dimensional indicators, daily field notes aur standpoint reflexivity repeatability aur gehare sach ko ek saath sadhte hain.',
    ],
    conclusion:
      'Sahi sampling, saaf variables aur mixed-method checks milkar raw facts ko aisi sociological jankari banate hain jis par policy aur theory dono bharosa kar sakein.',
  },
]

export const topic3Hi: TopicLangContent = {
  summary,
  mindMap: topic3MindMapHi,
  sections,
}