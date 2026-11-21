/**
 * Batch 1 topic notes: Paper 1, Units 1-2. Written fresh in Hinglish
 * (no text copied from any coaching handout). PYQs are attached at import time
 * from data/pyq/paper1-2013-2025.jsonl via the `pyqKeywords` below.
 */

export type NoteSeed = {
  unit: { number: number; slug: string; title: string }
  title: string
  slug: string
  summary: string
  points: string[]
  body: string
  keyTerms: { term: string; meaning: string; thinker?: string }[]
  answerTip: string
  thinkerSlugs: string[]
  /** Lower-case keywords used to attach PYQs of this unit to this topic. */
  pyqKeywords: string[]
}

const UNIT_1 = { number: 1, slug: 'sociology-the-discipline', title: 'Sociology – The Discipline' }
const UNIT_2 = { number: 2, slug: 'sociology-as-science', title: 'Sociology as Science' }

export const NOTES: NoteSeed[] = [
  {
    unit: UNIT_1,
    title: 'Modernity, social change in Europe and the emergence of Sociology',
    slug: 'modernity-and-emergence-of-sociology',
    summary: 'Sociology Europe ki teen badi krantiyon ka bachcha hai: Enlightenment, French Revolution aur Industrial Revolution. Inse jo naya "modern" samaj bana, use samajhne ke liye ek nayi science chahiye thi.',
    points: [
      'Renaissance aur Scientific Revolution ne sawaal karne ki aadat di: duniya ko reason aur observation se samjho, sirf Church ki baat se nahi.',
      'Enlightenment ne reason, progress aur individual rights ko kendra mein rakha. Yahi soch baad mein samaj ke "science" ki maang banti hai.',
      'French Revolution (1789) ne purani political order (monarchy, aristocracy, Church) tod di. Sawaal uthaa: ab social order kaise banega?',
      'Industrial Revolution ne factory, shehar, mazdoor class, slums aur alienation diye. Gaon se shehar aur community se individual ki taraf shift hua.',
      'Comte, Marx, Durkheim aur Weber, sab ne isi badlaav ko apne tareeke se samjhaya. Isliye classical sociology asal mein "modernity ki sociology" hai.',
    ],
    body: `## Modernity kya hai?
Modernity ek aisi samajik vyavastha hai jisme **reason, science, individualism, industrial economy, nation-state aur urban life** kendra mein aa jaate hain. Traditional samaj mein status janm se tay hota tha aur dharm sab kuch samjhata tha. Modern samaj mein status achievement se banta hai aur knowledge ka source science ban jaata hai.

## Teen krantiyan jinse Sociology bani
- **Intellectual kranti (Enlightenment):** Voltaire, Rousseau, Montesquieu jaise thinkers ne kaha ki samaj bhi niyamon se chalta hai jinhe reason se samjha ja sakta hai. Isi ne *social science* ka idea diya.
- **Political kranti (French Revolution):** liberty, equality aur fraternity ke naare ne purani hierarchy tod di. Conservatives (jaise de Bonald, de Maistre) ko anarchy ka darr tha. Isi tension se **social order** sociology ka central sawaal bana. Comte ki "order and progress" wali soch yahin se aati hai.
- **Economic kranti (Industrial Revolution):** factory system, wage labour, urbanisation aur class conflict aaye. Marx ne isme **exploitation aur alienation** dekha, Durkheim ne **division of labour aur anomie**, aur Weber ne **rationalisation aur bureaucracy**.

## Founding fathers ka response
- **Auguste Comte:** "Sociology" shabd diya. **Law of three stages** (theological → metaphysical → positive). Samaj ko natural science ki tarah padhne ki baat ki.
- **Karl Marx:** modernity = capitalism. Isme class struggle aur alienation hai, aur ye ek din badlega.
- **Émile Durkheim:** mechanical se organic solidarity ki taraf badlaav. Tez badlaav mein anomie (normlessness) aati hai.
- **Max Weber:** modernity = rationalisation aur disenchantment. Bureaucracy ek **iron cage** ban sakti hai.

## Aaj ke liye relevance
Bharat mein bhi colonialism, industrialisation aur urbanisation ne modernity laayi. Yogendra Singh ke "Modernization of Indian Tradition" jaise kaam isi framework ko Indian context mein aage badhate hain. Aaj **globalisation aur digital revolution** ko kuch sociologists "late" ya "liquid" modernity kehte hain.`,
    keyTerms: [
      { term: 'Modernity', meaning: 'Reason, science, individualism, industrial economy aur nation-state par tiki samajik vyavastha.' },
      { term: 'Enlightenment', meaning: '18th century ka intellectual movement jisne reason aur progress ko kendra mein rakha.' },
      { term: 'Law of three stages', meaning: 'Theological → metaphysical → positive: soch ke vikas ke teen charan.', thinker: 'Auguste Comte' },
      { term: 'Anomie', meaning: 'Tez badlaav ke waqt norms ka kamzor pad jaana (normlessness).', thinker: 'Durkheim' },
      { term: 'Rationalisation', meaning: 'Tradition ki jagah calculation, efficiency aur rules ka badhta raj.', thinker: 'Weber' },
    ],
    answerTip: 'Intro mein "sociology is a child of modernity" likho. Body ko teen krantiyon (intellectual, political, economic) mein baanto, har ek ke saath ek thinker ka response. Conclusion mein Indian ya contemporary modernity (globalisation) se jodo.',
    thinkerSlugs: ['karl-marx', 'emile-durkheim', 'max-weber'],
    pyqKeywords: ['modern', 'enlightenment', 'revolution', 'emergence', 'industrial', 'renaissance', 'europe', 'comte', 'origin'],
  },
  {
    unit: UNIT_1,
    title: 'Scope of Sociology and comparison with other social sciences',
    slug: 'scope-and-other-social-sciences',
    summary: 'Sociology ka scope do schools mein samjha jaata hai: formal (Simmel, Weber) aur synthetic (Durkheim, Sorokin, Hobhouse). Saath hi ye economics, political science, history, psychology aur anthropology se kaise alag aur kaise judi hai.',
    points: [
      'Formal school: sociology social relationships ke "forms" (competition, cooperation, conflict) padhe. Content doosre subjects pe chhod de.',
      'Synthetic school: sociology saare social sciences ka synthesis ho, aur samaj ko ek whole ki tarah padhe.',
      'Aaj ka consensus: sociology ka scope bahut bada hai, aur iski khaasiyat iska "perspective" hai (sociological imagination), sirf subject matter nahi.',
      'Doosre social sciences society ke ek pehlu ko padhte hain. Sociology un pehluon ke beech ke rishton aur unke social context ko padhti hai.',
      'Interdisciplinary fields (economic sociology, political sociology, historical sociology) ab boundaries ko dheela kar rahe hain.',
    ],
    body: `## Scope: do purane schools
**Formalistic (specialistic) school:** Georg Simmel, Max Weber, Vierkandt, von Wiese. Inke hisaab se sociology ko *social interaction ke forms* padhne chahiye, jaise domination, competition aur cooperation. Content economics ya politics jaise subjects ka hai.
*Critique:* form aur content ko alag karna mushkil hai, aur ye sociology ko bahut sankra bana deta hai.

**Synthetic school:** Durkheim, Hobhouse, Sorokin. Sociology ko *general science of society* hona chahiye, jo baaki sab social sciences ke findings ko jod ke samaj ki poori tasveer de. Durkheim ne iske teen hisse bataye: social morphology, social physiology aur general sociology.
*Critique:* sab kuch padhne ki koshish mein sociology ka apna focus kho sakta hai.

## Sociology aur doosre social sciences
- **Economics:** economics rational choice aur market ko padhta hai. Sociology dikhati hai ki market bhi social norms, trust, caste aur networks se bana hai (*embeddedness*, Granovetter). Weber ki Protestant Ethic ek classic example hai.
- **Political science:** state, sarkar aur institutions ki padhai. Political sociology power ke social roots padhti hai: elites, class aur caste politics.
- **History:** history unique events ko time ke saath batati hai (idiographic). Sociology patterns aur generalisations dhoondhti hai (nomothetic). Dono milke **historical sociology** banate hain, jaise Weber, Marx aur Subaltern studies.
- **Psychology:** individual ke mind aur behaviour ki padhai. Sociology kehti hai ki individual behaviour bhi social facts se tay hota hai. Durkheim ki *Suicide* yahi dikhati hai. Social psychology (G.H. Mead) dono ke beech ka pul hai.
- **Social anthropology:** pehle "simple" ya tribal samaj, fieldwork aur participant observation. Bharat mein dono lagbhag ek ho gaye (Srinivas, Dube): village studies anthropology ke method se hui, par sociology ke sawaalon pe.

## Sociological imagination
C. Wright Mills ka concept hai: *personal troubles* (jaise meri berozgaari) ko *public issues* (jaise economic structure) se jodna. Yahi sociology ka asli scope hai. Ye ek nazariya hai, sirf ek subject nahi.`,
    keyTerms: [
      { term: 'Formal school', meaning: 'Sociology sirf social relations ke forms padhe.', thinker: 'Simmel' },
      { term: 'Synthetic school', meaning: 'Sociology saare social sciences ka synthesis kare.', thinker: 'Durkheim, Sorokin' },
      { term: 'Sociological imagination', meaning: 'Personal troubles ko public issues aur history se jodne ki kshamata.', thinker: 'C. Wright Mills' },
      { term: 'Idiographic / Nomothetic', meaning: 'Unique events ki padhai vs general laws ki khoj.' },
      { term: 'Embeddedness', meaning: 'Economic action social relations ke andar dhanka hota hai.', thinker: 'Granovetter / Polanyi' },
    ],
    answerTip: 'Comparison wale sawaal mein ek chhoti table banao: subject matter, method, focus. Har comparison ke saath ek thinker ka example do (jaise Weber: economics + sociology). Conclusion mein interdisciplinarity aur "perspective as scope" likho.',
    thinkerSlugs: ['max-weber', 'emile-durkheim'],
    pyqKeywords: ['scope', 'history', 'economics', 'political', 'psychology', 'anthropology', 'social sciences', 'social science', 'discipline', 'interdisciplinary'],
  },
  {
    unit: UNIT_1,
    title: 'Sociology and common sense',
    slug: 'sociology-and-common-sense',
    summary: 'Common sense roz ke anubhav se bana, bina jaanch ka gyaan hai. Sociology systematic, evidence-based aur critical tareeke se wahi sawaal poochhti hai, aur kai baar common sense ko galat saabit karti hai.',
    points: [
      'Common sense: subjective, local, unexamined, aksar biased aur kabhi-kabhi contradictory ("door ke dhol suhane" vs "ghar ki murgi daal barabar").',
      'Sociology: systematic observation, concepts, theory aur evidence. Har baat ko test karti hai.',
      'Durkheim ne Suicide study mein dikhaya ki suicide jaisa "personal" faisla bhi social integration se tay hota hai. Ye common sense ke ulta tha.',
      'Par rishta sirf virodh ka nahi hai: phenomenology aur ethnomethodology common sense ko hi study ka vishay banate hain.',
      'Giddens ka double hermeneutic: sociology ke concepts wapas common sense mein ghul jaate hain, jaise "generation gap" aur "status".',
    ],
    body: `## Common sense kya hai?
Common sense woh knowledge hai jo hum roz ki zindagi mein bina soche maan lete hain: "gareeb log aalsi hote hain", "shaadi pyaar se hoti hai", "ladkiyan maths mein kamzor hoti hain". Ye **anubhav, parampara aur samaj ke prejudices** se banta hai, aur iski koi jaanch nahi hoti.

## Sociology kaise alag hai
- **Aadhaar:** common sense personal experience pe tika hai; sociology systematic data aur evidence pe.
- **Sawaal:** common sense ko cheezein "natural" lagti hain; sociology har "natural" cheez ke social roots dhoondhti hai.
- **Daayra:** common sense local aur limited hai; sociology comparative hai, samajon ke beech tulna karti hai.
- **Consistency:** common sense aksar contradictory hota hai; sociology concepts aur theory se consistent rehti hai.

**Example:** Common sense kehta hai ki suicide ek nijee, psychological faisla hai. Durkheim ne data se dikhaya ki Protestants mein, unmarried logon mein aur economic crisis ke dauraan suicide rate zyada hota hai. Matlab social integration aur regulation kaam karte hain.

**Indian example:** "Caste ab khatam ho gayi hai" ek aam common sense hai. Par marriage ads, residential patterns aur elections ke data dikhate hain ki caste naye roop mein zinda hai (Srinivas: *dominant caste*, *vote bank*).

## Sociology aur common sense ka rishta: sirf virodh nahi
- **Positivists** (Comte, Durkheim): sociology ko common sense ke *prenotions* se door rehna chahiye. Social facts ko "things" ki tarah dekho.
- **Interpretivists** (Weber, Schutz, Garfinkel): common sense hi samaj ki buniyaad hai. Log apni duniya ko isi se meaningful banate hain, isliye ise samajhna zaroori hai. Garfinkel ke breaching experiments common sense ke chhupe niyam dikhate hain.
- **Giddens (double hermeneutic):** sociology common sense ko interpret karti hai, aur fir sociology ke concepts wapas logon ki soch mein aa jaate hain.
- **Peter Berger ("debunking motif"):** sociology ka kaam hai jo "obvious" lagta hai, uske peeche dekhna.

## Nishkarsh
Sociology common sense se shuru hoti hai, par wahin ruk nahi jaati. Wo use **jaanchti, sudhaarti aur samjhaati** hai.`,
    keyTerms: [
      { term: 'Common sense', meaning: 'Roz ke anubhav se bana, bina jaanch ka maana hua gyaan.' },
      { term: 'Prenotions', meaning: 'Pehle se bane vichaar jo scientific study mein rukawat daalte hain.', thinker: 'Durkheim' },
      { term: 'Double hermeneutic', meaning: 'Social science aur lay knowledge ka do-tarfa asar.', thinker: 'Giddens' },
      { term: 'Debunking motif', meaning: 'Obvious lagne wali baaton ke peeche ka sach dikhana.', thinker: 'Peter Berger' },
      { term: 'Breaching experiment', meaning: 'Roz ke niyam jaan-boojh ke todna taaki chhupe niyam dikhen.', thinker: 'Garfinkel' },
    ],
    answerTip: 'Do-column table common sense vs sociology bahut score karti hai. Durkheim (suicide) ka example zaroor do, aur ek Indian example (caste ya gender). Conclusion mein balanced view likho: rishta virodh ka bhi hai aur sahyog ka bhi (Giddens).',
    thinkerSlugs: ['emile-durkheim', 'max-weber', 'mn-srinivas'],
    pyqKeywords: ['common sense', 'commonsense', 'common knowledge', 'everyday'],
  },
  {
    unit: UNIT_2,
    title: 'Science, scientific method and its critique',
    slug: 'science-and-scientific-method',
    summary: 'Science ek systematic, empirical aur testable tareeke se gyaan banane ki prakriya hai. Sociology ne isi method ko apnaane ki koshish ki, par Popper, Kuhn aur Feyerabend ne science ki "objective" chhavi pe bhi sawaal uthaye.',
    points: [
      'Scientific method: observation → problem → hypothesis → data collection → analysis → generalisation/theory.',
      'Science ki khaasiyatein: empirical, objective, verifiable, ethically neutral, systematic aur cumulative.',
      'Merton ka CUDOS: Communism (shared knowledge), Universalism, Disinterestedness, Organised Scepticism. Ye science ke norms hain.',
      'Popper: science verification se nahi, falsification se aage badhta hai. Jo theory galat saabit hi na ho sake, wo science nahi.',
      'Kuhn: science paradigm shifts se badalta hai (normal science → anomalies → crisis → revolution). Isliye science bhi ek social process hai.',
    ],
    body: `## Science kya hai?
Science sirf labs aur formulas nahi hai. Ye **gyaan banane ka ek tareeka** hai: duniya ko dekho, sawaal banao, use test karo, aur jo saboot mile uske hisaab se apni soch badlo.

## Scientific method ke steps
1. Problem chunna aur concepts saaf karna
2. Literature review
3. **Hypothesis** banana: do variables ke rishte ka testable anumaan
4. Research design aur data collection (survey, experiment, observation)
5. Analysis aur hypothesis ko test karna
6. Generalisation, theory banana aur use publish karna

## Merton ke science ke norms (CUDOS)
- **Communism:** gyaan sabka hai, koi secret nahi.
- **Universalism:** claim ko uske saboot se jaancho, bolne wale ki caste, race ya desh se nahi.
- **Disinterestedness:** scientist nijee faayde ke liye kaam na kare.
- **Organised scepticism:** har claim pe sawaal uthao.

## Sociology science kaise hai?
Comte aur Durkheim ke hisaab se samaj bhi niyamon se chalta hai, isliye sociology ek *positive science* hai. Durkheim ki *Rules of Sociological Method* aur *Suicide* iska model hain.
**Dikkatein:** insaan self-aware hote hain (Hawthorne effect), lab experiment mushkil hai, values ko alag rakhna mushkil hai, aur samaj lagatar badalta rehta hai.

## Science ki critique
- **Karl Popper:** induction se universal truth nahi milta (kaale hans ki misaal). Science ka gyaan **falsifiable** aur provisional hota hai. Unhone Marxism aur Freud ko is aadhar pe "non-science" kaha.
- **Thomas Kuhn:** *Structure of Scientific Revolutions*: science ek **paradigm** ke andar chalta hai. Anomalies jama hoti hain, crisis aata hai, aur paradigm shift hota hai. Matlab science bhi community ki sahmati par tika hai.
- **Paul Feyerabend:** "anything goes". Koi ek fixed scientific method hai hi nahi.
- **Feminist critique** (Sandra Harding): science aksar male perspective se bana hai. "Strong objectivity" ki maang.
- **Frankfurt School:** science aur technology domination ka zariya ban sakte hain (instrumental reason).`,
    keyTerms: [
      { term: 'Hypothesis', meaning: 'Do variables ke rishte ka testable anumaan.' },
      { term: 'CUDOS', meaning: 'Communism, Universalism, Disinterestedness, Organised Scepticism: science ke norms.', thinker: 'Merton' },
      { term: 'Falsification', meaning: 'Theory ko galat saabit karne ki koshish hi science ki kasauti hai.', thinker: 'Popper' },
      { term: 'Paradigm shift', meaning: 'Ek dominant framework ki jagah naya framework aana.', thinker: 'Kuhn' },
      { term: 'Strong objectivity', meaning: 'Haashiye ke logon ke nazariye se shuru karke zyada objective gyaan.', thinker: 'Sandra Harding' },
    ],
    answerTip: '"Is sociology a science?" type sawaal mein pehle science ki khaasiyatein likho, fir sociology mein unki possibility aur limitations, fir Popper/Kuhn ki critique se dikhao ki natural science bhi utna "pure" nahi hai. Conclusion: sociology ek distinct kind of science hai.',
    thinkerSlugs: ['emile-durkheim', 'robert-k-merton'],
    pyqKeywords: ['science', 'scientific', 'popper', 'kuhn', 'paradigm', 'falsif', 'hypothesis'],
  },
  {
    unit: UNIT_2,
    title: 'Major theoretical strands of research methodology',
    slug: 'theoretical-strands-of-methodology',
    summary: 'Research methodology ke peeche teen badi soch hain: positivist (samaj ko bahar se, numbers se), interpretivist (andar se, meaning se) aur critical (samaj ko badalne ke liye). Har strand ki apni ontology, epistemology aur methods hain.',
    points: [
      'Methodology = gyaan kaise milega, uska darshan. Method = data ikattha karne ke tools (survey, interview).',
      'Positivism: social facts objective hain. Quantitative methods, large samples, causal laws (Comte, Durkheim).',
      'Interpretivism: action ka meaning samjho (Verstehen). Qualitative methods, small samples, depth (Weber, Schutz, Mead).',
      'Critical/conflict strand: research ka maqsad samaj ko badalna bhi hai (Marx, Frankfurt School, feminist research).',
      'Aaj ka trend: mixed methods aur triangulation. Numbers aur meaning dono.',
    ],
    body: `## Methodology vs Method
- **Methodology:** research ke peeche ki philosophy. Reality kya hai (*ontology*) aur use kaise jaana ja sakta hai (*epistemology*).
- **Method:** data lene ke tools, jaise questionnaire, interview, observation, case study.

## Teen badi strands
**1. Positivist / Quantitative**
- Ontology: samaj ek objective reality hai, insaanon se bahar.
- Epistemology: observation aur measurement se gyaan.
- Methods: survey, statistics, comparative method, experiments.
- Thinkers: Comte, Durkheim (*Suicide*), Lazarsfeld.
- Taakat: reliability, generalisation. Kamzori: meaning chhoot jaata hai.

**2. Interpretivist / Qualitative**
- Ontology: reality logon ke meanings se banti hai (socially constructed).
- Epistemology: **Verstehen** (Weber), yaani actor ki jagah khade hoke samjho.
- Methods: participant observation, in-depth interview, life history, ethnography.
- Thinkers: Weber, Schutz, G.H. Mead, Blumer, Garfinkel, Goffman.
- Taakat: validity, depth. Kamzori: generalisation aur reliability kam.

**3. Critical / Emancipatory**
- Maqsad: samaj ko samajhna aur badalna, dono.
- Marx: "philosophers have only interpreted the world; the point is to change it."
- Frankfurt School, feminist methodology (Dorothy Smith: *standpoint*), participatory action research.

## Indian context
Indian sociology mein **book view vs field view** ka debate isi se juda hai. G.S. Ghurye ne texts (Indology) se samaj padha, aur M.N. Srinivas ne fieldwork se. Aaj zyaadatar studies dono ko milate hain.

## Triangulation
Denzin ka idea: ek hi sawaal ko alag-alag methods, data aur researchers se jaancho, taaki result zyada bharosemand ho.`,
    keyTerms: [
      { term: 'Ontology', meaning: 'Reality ki prakriti ke baare mein maanyata.' },
      { term: 'Epistemology', meaning: 'Gyaan kaise banta aur jaancha jaata hai.' },
      { term: 'Verstehen', meaning: 'Actor ke subjective meaning ko andar se samajhna.', thinker: 'Weber' },
      { term: 'Standpoint', meaning: 'Haashiye ke logon ki jagah se samaj ko dekhna.', thinker: 'Dorothy Smith' },
      { term: 'Triangulation', meaning: 'Kai methods/data se ek hi finding ko jaanchna.', thinker: 'Denzin' },
    ],
    answerTip: 'Teen strands ko ek comparison table mein do (ontology, epistemology, methods, thinker, critique). Book view vs field view ka Indian example dalo. Conclusion mein mixed methods/triangulation se balance karo.',
    thinkerSlugs: ['max-weber', 'emile-durkheim', 'karl-marx', 'mn-srinivas'],
    pyqKeywords: ['methodolog', 'qualitative', 'quantitative', 'strand', 'triangulation', 'mixed'],
  },
  {
    unit: UNIT_2,
    title: 'Positivism and its critique',
    slug: 'positivism-and-its-critique',
    summary: 'Positivism kehta hai ki samaj ko bhi natural science ki tarah observable facts, measurement aur causal laws se padho. Comte ne ise shuru kiya, Durkheim ne method diya, aur interpretivists, Popper aur Frankfurt School ne iski kadi critique ki.',
    points: [
      'Comte: positive stage mein gyaan observation aur experiment se aata hai. Sociology "queen of sciences" hai.',
      'Durkheim: social facts ko "things" ki tarah treat karo. Wo individual se bahar hain aur us par dabaav daalte hain (exteriority, constraint).',
      'Logical positivism (Vienna Circle): sirf woh statement meaningful hai jo empirically verify ho sake.',
      'Critique: meaning ignore karta hai, values ko chhupata hai, aur status quo ko sahi thehrata hai (Frankfurt School).',
      'Post-positivism: objectivity ek lakshya hai, guarantee nahi. Evidence zaroori hai, par sab gyaan provisional hai.',
    ],
    body: `## Positivism ke mool siddhant
1. **Naturalism:** samaj aur prakriti, dono ek jaise niyamon se chalte hain, isliye ek hi method lagega.
2. **Empiricism:** sirf observable aur measurable hi gyaan hai.
3. **Objectivity aur value-neutrality:** researcher ki values data se door rahen.
4. **Causal laws aur prediction:** "savoir pour prévoir", yaani jaano taaki pehle se bata sako (Comte).

## Durkheim ka positivism
*Rules of Sociological Method (1895):*
- **Social facts:** soch, kaam aur feeling ke tareeke jo individual se *bahar* hain aur us par *dabaav* daalte hain (law, language, religion).
- "Social facts ko things ki tarah dekho", aur prenotions chhod do.
- Social fact ki explanation doosre social fact se do, psychology se nahi.
- *Suicide (1897):* official statistics se dikhaya ki suicide rate social integration aur regulation se badalta hai.

## Positivism ki critique
- **Interpretivists (Weber, Schutz):** insaan cheezein nahi hain. Unke actions ke **meaning** hote hain jo numbers mein nahi aate.
- **Statistics ki samasya:** J. Maxwell Atkinson ne dikhaya ki suicide statistics khud coroners ki social interpretation se bante hain. Matlab "fact" bhi socially constructed hai.
- **Popper:** verification se universal law saabit nahi hota. Falsification chahiye.
- **Frankfurt School (Adorno, Horkheimer, Habermas):** positivism "jo hai" ko hi sach maanta hai, isliye wo status quo ka samarthan ban jaata hai. Habermas: knowledge ke peeche interests hote hain (technical, practical, emancipatory).
- **Feminists:** "objective" science aksar male view hota hai.

## Defence aur aaj ka view
Positivism ne sociology ko **empirical anushasan, data aur comparison** diya. Aaj ke large surveys (NFHS, NSSO, Census) isi parampara se hain. **Post-positivism** (Popper ke baad) maanta hai ki objectivity ek *regulative ideal* hai, ek lakshya hai, guarantee nahi.`,
    keyTerms: [
      { term: 'Positivism', meaning: 'Samaj ko natural science ke method se padhne ka darshan.', thinker: 'Comte' },
      { term: 'Social fact', meaning: 'Individual se bahar aur us par dabaav daalne wale soch/aacharan ke tareeke.', thinker: 'Durkheim' },
      { term: 'Naturalism', meaning: 'Natural aur social science mein ek hi method ki maanyata.' },
      { term: 'Knowledge-constitutive interests', meaning: 'Gyaan ke peeche technical, practical aur emancipatory interests.', thinker: 'Habermas' },
      { term: 'Post-positivism', meaning: 'Evidence zaroori hai, par sab gyaan provisional aur falsifiable hai.' },
    ],
    answerTip: 'Positivism ke 4 principles likho, Durkheim ko main example banao, fir 3-4 critiques (interpretivist, Atkinson, Frankfurt, feminist). Conclusion mein uska yogdaan maano (NFHS/Census jaise data) aur post-positivism se balance karo.',
    thinkerSlugs: ['emile-durkheim', 'max-weber'],
    pyqKeywords: ['positiv', 'durkheim', 'social fact', 'comte'],
  },
  {
    unit: UNIT_2,
    title: 'Fact, value and objectivity',
    slug: 'fact-value-and-objectivity',
    summary: 'Kya sociologist apni values se mukt hokar objective ho sakta hai? Weber ne value-relevance aur value-neutrality mein farq kiya. Gunnar Myrdal ne kaha ki values ko chhupao mat, saaf likho. Gouldner ne value-free sociology ko ek "myth" bataya.',
    points: [
      'Fact: jo hai (is). Value: jo hona chahiye (ought). Positivists dono ko alag rakhna chahte the.',
      'Weber: topic chunne mein values aati hain (value-relevance), par analysis mein value-neutrality honi chahiye.',
      'Myrdal: values se bachna namumkin hai, isliye apni value-premises ko saaf-saaf likho.',
      'Gouldner: value-free sociology ek myth hai. Sociologist ko apni values ke prati reflexive hona chahiye.',
      'Objectivity = bias ko minimise karne ki prakriya: peer review, transparent method, reflexivity aur triangulation.',
    ],
    body: `## Fact aur value ka sawaal
Positivists ke hisaab se sociologist ek scientist ki tarah sirf *facts* bataye, kya sahi hai aur kya galat (*values*) nahi. Par samaj ko padhne wala khud samaj ka hissa hai, uski caste, class, gender aur ideology hai. To kya pure objectivity sambhav hai?

## Alag-alag nazariye
- **Durkheim:** social facts ko things ki tarah dekho aur prenotions chhodo. Phir bhi wo sociology ko moral education aur social reform ke liye upyogi maante the.
- **Max Weber:**
  - **Value-relevance:** kya padhna hai, ye hamari values tay karti hain, aur isme koi burai nahi.
  - **Value-neutrality:** ek baar topic chun liya, to analysis aur conclusion mein apni pasand ko mat ghusao.
  - Classroom mein professor ko prophet ya demagogue nahi banna chahiye ("Science as a Vocation").
- **Gunnar Myrdal (An American Dilemma):** values se bacha nahi ja sakta, isliye **value-premises ko explicitly likho**, taaki reader khud judge kare.
- **Alvin Gouldner ("Anti-Minotaur: The Myth of a Value-Free Sociology"):** value-free hone ka daawa khud ek value hai, jo aksar power ke saath khada hota hai. **Reflexive sociology** chahiye.
- **Marxists aur Feminists:** gyaan hamesha kisi position se banta hai. Haashiye ka standpoint zyada sach dikha sakta hai.
- **Karl Mannheim:** gyaan social location se bandha hai. Par "free-floating intelligentsia" relatively objective ho sakti hai.

## Objectivity kaise badhe?
- Research design aur data public ho, taaki doosre jaanch sakein (replicability).
- **Peer review** aur organised scepticism (Merton).
- **Reflexivity:** researcher apni position (caste, gender) ko likhe.
- **Triangulation** aur multiple perspectives.

## Indian example
Indian sociology mein **"insider vs outsider"** debate (Srinivas, Béteille) yahi sawaal hai. Kya apne samaj ka sociologist zyada samajhta hai ya zyada biased hota hai? Dalit aur feminist scholars ne dikhaya ki upper-caste, male nazariya bhi ek "value" tha jo pehle objectivity lagta tha.`,
    keyTerms: [
      { term: 'Value-relevance', meaning: 'Research topic ka chunav values se hota hai.', thinker: 'Weber' },
      { term: 'Value-neutrality', meaning: 'Analysis mein nijee pasand-napasand se bachna.', thinker: 'Weber' },
      { term: 'Value-premises', meaning: 'Apni values ko research mein khule taur par likhna.', thinker: 'Gunnar Myrdal' },
      { term: 'Reflexive sociology', meaning: 'Sociologist apni position aur values pe khud sawaal kare.', thinker: 'Gouldner' },
      { term: 'Sociology of knowledge', meaning: 'Gyaan aur social location ka rishta.', thinker: 'Karl Mannheim' },
    ],
    answerTip: 'Weber ka value-relevance vs value-neutrality distinction har answer mein lagao. Uske baad Myrdal aur Gouldner ko counterpoint banao. Indian insider/outsider debate ek strong example hai. Conclusion: objectivity ek process hai, ek manzil nahi.',
    thinkerSlugs: ['max-weber', 'emile-durkheim', 'mn-srinivas'],
    pyqKeywords: ['value', 'objectiv', 'fact', 'neutral', 'bias', 'subjectiv'],
  },
  {
    unit: UNIT_2,
    title: 'Non-positivist methodologies',
    slug: 'non-positivist-methodologies',
    summary: 'Non-positivist methodologies kehti hain ki samaj ko samajhne ke liye logon ke meanings, interpretations aur roz ke interaction ko andar se samajhna hoga. Isme Weber ka Verstehen, symbolic interactionism, phenomenology aur ethnomethodology aate hain.',
    points: [
      'Weber: social action ka subjective meaning samjho (Verstehen), phir uski causal explanation do. Ideal type ek analytical tool hai.',
      'Symbolic interactionism (Mead, Blumer): self aur society interaction aur symbols se bante hain.',
      'Phenomenology (Husserl, Schutz): roz ki "taken-for-granted" duniya aur typifications ko samjho.',
      'Ethnomethodology (Garfinkel): log roz ke social order ko kaise banate hain. Breaching experiments.',
      'Methods: participant observation, in-depth interview, life history, case study, discourse analysis.',
    ],
    body: `## Non-positivism ki buniyaad
Insaan *cheezein* nahi hain. Wo **soch-samajh ke kaam karte hain**, apni duniya ko meaning dete hain, aur un meanings ke hisaab se chalte hain. Isliye sociology ko bahar se ginne ke saath-saath **andar se samajhna** bhi chahiye.

## Pramukh dhaarayein
**1. Weber ki interpretive sociology**
- **Verstehen:** actor ke motive ko samajhna. Ye do tarah ka hai: direct (aktuelles) aur explanatory (erklärendes).
- **Ideal type:** reality ka exaggerated model, comparison ke liye (jaise bureaucracy ka ideal type).
- Weber dono chahte the: *meaning ka adequacy* aur *causal adequacy*.

**2. Symbolic interactionism**
- **G.H. Mead:** self do hisson mein hai, "I" (spontaneous) aur "Me" (society ka internalised hissa). Self *role-taking* se banta hai (play → game → generalised other).
- **Herbert Blumer:** log cheezon ke prati unke *meaning* ke hisaab se kaam karte hain, aur ye meaning interaction mein banta aur badalta hai.
- **Erving Goffman:** *dramaturgy*. Zindagi ek stage hai: front stage, back stage, aur impression management.

**3. Phenomenology**
- **Alfred Schutz:** roz ki duniya (*lifeworld*) *typifications* se chalti hai ("doctor aise hote hain").
- **Berger aur Luckmann:** *Social Construction of Reality* ke teen steps hain: externalisation → objectivation → internalisation.

**4. Ethnomethodology**
- **Harold Garfinkel:** log roz ka order kaise banate aur samjhate hain. *Breaching experiments* (jaise ghar pe mehmaan ki tarah behave karna) chhupe niyam dikhate hain.
- *Indexicality:* har baat ka meaning context par nirbhar karta hai.

## Methods
Participant observation (Whyte, *Street Corner Society*), in-depth interview, life history, case study, narrative aur discourse analysis.
**Indian examples:** M.N. Srinivas ki *Remembered Village* (participant observation), aur caste ya gender pe life-history studies.

## Critique
- Generalisation mushkil, aur researcher ka bias zyada ho sakta hai.
- Power aur structure ko ignore karta hai (Marxist critique).
- Reliability kam hoti hai, kyunki doosra researcher same result nahi bhi la sakta.`,
    keyTerms: [
      { term: 'Ideal type', meaning: 'Reality ka exaggerated analytical model, comparison ke liye.', thinker: 'Weber' },
      { term: 'I and Me', meaning: 'Self ke do pehlu: spontaneous aur socially internalised.', thinker: 'G.H. Mead' },
      { term: 'Dramaturgy', meaning: 'Social life ko stage performance ki tarah samajhna.', thinker: 'Goffman' },
      { term: 'Typifications', meaning: 'Roz ki zindagi ke ready-made categories.', thinker: 'Schutz' },
      { term: 'Indexicality', meaning: 'Har baat ka meaning context se tay hota hai.', thinker: 'Garfinkel' },
    ],
    answerTip: 'Har dhaara ke liye ek line ka concept aur ek example likho (Mead: I/Me, Goffman: front stage). Positivism se ek chhoti comparison table do. Conclusion mein dono ke combination (mixed methods) ki baat karo.',
    thinkerSlugs: ['max-weber', 'mn-srinivas'],
    pyqKeywords: ['non-positiv', 'interpret', 'phenomenolog', 'ethnomethod', 'verstehen', 'interaction', 'qualitative', 'participant observation', 'meaning'],
  },
]
