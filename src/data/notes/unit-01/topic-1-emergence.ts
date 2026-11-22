import type { MindMapData, NotebookSection, PyqAnswerItem, TopicNotebookSpec } from '@/lib/notes/notebook-types'

const mindMap: MindMapData = {
  title: 'Unit 1.1 · Modernity & Emergence of Sociology',
  center: 'Birth of Sociology',
  subtitle: 'Teen Krantiyan → Naya Samaj → Naya Vigyan',
  branches: [
    {
      title: 'Intellectual Forces',
      color: 'lavender',
      thinkers: ['Montesquieu', 'Rousseau', 'Auguste Comte', 'Irving Zeitlin'],
      points: [
        'Renaissance humanism & printing press broke Church monopoly',
        'Scientific Revolution proved nature follows empirical laws',
        'Enlightenment championed reason, progress & individual rights',
        'Conservative reaction (Bonald, Maistre) stressed order & tradition',
      ],
    },
    {
      title: 'Material & Political Shocks',
      color: 'yellow',
      thinkers: ['Karl Marx', 'Émile Durkheim', 'Max Weber', 'F. Tönnies'],
      points: [
        'French Revolution (1789) ended divine monarchy → crisis of order',
        'Industrial Revolution shifted work from home to factories',
        'Urban slums, wage labour & class conflict replaced village ties',
        'Joint family shrank into nuclear household; rising divorce/anomie',
      ],
    },
    {
      title: 'Founding Thinkers & Lenses',
      color: 'mint',
      thinkers: ['Auguste Comte', 'Karl Marx', 'Émile Durkheim', 'Max Weber'],
      points: [
        'Comte coined Sociology (1839); Law of Three Stages',
        'Marx: modernity = capitalism, alienation & class struggle',
        'Durkheim: mechanical → organic solidarity; risk of anomie',
        'Weber: rationalisation, bureaucracy & iron cage of modernity',
      ],
    },
    {
      title: 'Beyond Europe: USA & India',
      color: 'pink',
      thinkers: ['Robert Park', 'G.S. Ghurye', 'M.N. Srinivas', 'Yogendra Singh'],
      points: [
        'USA (Chicago School): urban crime, slums & social reformism',
        'Eurocentrism critique: colonialism & Ibn Khaldun ignored',
        'India: Bombay & Lucknow Schools blended Indology + fieldwork',
        'Modernity today: Swiggy/Zomato gig economy & digital caste',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u1-02-emergence.webp',
    alt: 'Timeline showing Enlightenment, French Revolution, Industrial Revolution leading to Sociology and Auguste Comte portrait',
    caption: 'Sociology kisi ek thinker ka khayal nahi tha — Europe ki teen badi krantiyon ke takraav se janmi ek nayi jaroorat thi.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 1 Visual 02',
  },
  {
    kind: 'md',
    body: `## Modernity kya hai aur Sociology ki zaroorat kyun padi?

Purane traditional Europe mein har cheez ka jawab dharm, raja aur parampara ke paas tha. Janm se hi tay hota tha ki kaun kisan banega aur kaun jaagirdar. Jab 18th–19th century mein ye purana dhancha toota, tab ==Modernity== aayi — ek aisi vyavastha jahan ==reason, science, individualism, capitalism, nation-state aur shehri zindagi== centre mein aa gaye.

Is tezi se badalte samaj ko samajhne ke liye philosophy ya theology kaafi nahi thi. [[trap:Sirf European Enlightenment ko credit dena adhoora sach hai — colonialism aur non-Western traditions jaise Ibn Khaldun ka Asabiyyah bhi samaj-shastra ki neev mein the.]] Phir bhi modern academic discipline ke roop mein sociology teen Europe-wide krantiyon ka result thi.

## Teen Krantiyan jinse Sociology nikli

- **1. Intellectual Kranti (Renaissance → Scientific Revolution → Enlightenment):** [[thinker:Montesquieu]], [[thinker:Voltaire]] aur [[thinker:Rousseau]] ne kaha ki insaan tark (reason) aur observation se samaj ke niyam khoj sakta hai. [[thinker:Irving Zeitlin]] kehte hain ki sociology sirf Enlightenment se nahi, balki ==Conservative Reaction== ke takraav se bhi bani: [[thinker:Louis de Bonald]] aur [[thinker:Joseph de Maistre]] ko darr tha ki zyada individualism samaj ko tod dega. Yahi se sociology ko community, authority aur moral order ke concepts mile.
- **2. Political Kranti (French Revolution, 1789):** Liberty, equality aur fraternity ne monarchy aur feudal estates ko ukhada. Naya sawaal khada hua: jab raja aur Church ka darr khatam ho gaya, tab ==social order== kaise banega? [[thinker:Auguste Comte]] ka poora project *"Order and Progress"* isi political crisis ka jawab tha.
- **3. Economic Kranti (Industrial Revolution):** Steam engine aur factories ne gaon se mazdooron ko shehron mein bheja. [[eg:Jaise aaj UP-Bihar se youth Gurgaon ya Surat ki factories aur gig-work mein migrate karta hai]], waise hi Europe mein slums, wage labour aur alienation badhe.

### Industrial Society ne Western European Family ko kaise badla?

- **Production se Consumption Unit:** Pehle poora parivar khet ya craft workshop mein saath kaam karta tha; factory system ne mard ko bahar wage labour mein bheja aur aurat par unpaid domestic care ka bojh daala ([[thinker:Friedrich Engels]]).
- **Extended se Nuclear Shift:** Shehri chhote makaan aur geographic mobility ne joint kinship ties kamzor kiye, [[thinker:Talcott Parsons]] ke mutabik *isolated nuclear family* industrial economy ke liye zyada fit bani — haalanki [[thinker:Peter Laslett]] ne dikhaya ki nuclear households Europe mein industrialisation se pehle bhi maujood the.
- **Authority & Marriage:** Baap ki zameen par control ghatne se arranged authority kam hui aur romantic/companionate marriage badhi, par saath hi family instability aur divorce bhi dikhe. [[link:Paper 2 Unit 9 mein dekho ki Bharat mein urbanisation ne joint family ko poora khatam karne ke bajaye functional jointness mein kaise badla (I.P. Desai, A.M. Shah).]]

## Classical Thinkers: Ek Hi Modernity, Chaar Alag Diagnosis

| Thinker | Modernity ka Central Engine | Sabse Bada Khatra | Key Concept |
| --- | --- | --- | --- |
| Auguste Comte | Scientific & moral evolution | Intellectual anarchy | Law of Three Stages |
| Karl Marx | Industrial capitalism | Exploitation & dehumanisation | Alienation & Class Struggle |
| Émile Durkheim | Rising division of labour | Normlessness in fast change | Anomie & Organic Solidarity |
| Max Weber | Bureaucratic calculation | Loss of meaning & freedom | Rationalisation & Iron Cage |

## Europe se USA aur Bharat tak ka Safar

[[thinker:Albion Small]] aur [[thinker:Robert Park]] ke daur mein jab sociology America pahunchi, tab wahan Europe jaisi feudalism-todne wali kranti nahi hui thi. USA mein tez industrialisation, European immigration, racial segregation aur Chicago slums ki problems thin — isliye wahan sociology ne ==social reformist orientation== apnaya ([[thinker:Jane Addams]] ka Hull House, empirical city surveys). Baad mein [[thinker:G.S. Ghurye]], [[thinker:Radhakamal Mukerjee]] aur [[thinker:Yogendra Singh]] ne isi lens ko India ki colonial modernity aur caste-village reality par apply kiya. [[eg:Aaj Bharat mein Swiggy-Zomato riders ki algorithmic surveillance Weber ke Iron Cage aur Marx ke Alienation ko ek saath zinda dikhati hai.]]`,
  },
  {
    kind: 'timeline',
    items: [
      { year: '1377', title: 'Ibn Khaldun — Muqaddimah', text: 'Ilm al-umran aur Asabiyyah (social cohesion) ke zariye non-European proto-sociology ki shuruat.' },
      { year: '1400–1600', title: 'Renaissance & Humanism', text: 'Religious dogma par sawaal, printing press aur human reason ka ubhaar.' },
      { year: '1543–1687', title: 'Scientific Revolution', text: 'Copernicus se Newton tak: observation aur universal natural laws ka bharosa.' },
      { year: '1715–1789', title: 'European Enlightenment', text: 'Montesquieu, Voltaire, Rousseau: reason, empiricism aur social contract.' },
      { year: '1789', title: 'French Revolution', text: 'Monarchy & Church privilege khatam; citizenship aur social order ka naya crisis.' },
      { year: '1760–1840', title: 'Industrial Revolution', text: 'Factories, urbanisation, working class aur traditional family ka tootna.' },
      { year: '1838–1839', title: 'Comte coins "Sociology"', text: 'Social Physics se Positive Philosophy: samaj ka scientific study shuru.' },
      { year: '1892–1920s', title: 'USA Chicago School', text: 'Urban surveys, crime, race aur social reformist sociology ka ubhaar.' },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Enlightenment', text: 'Reason + empiricism ne sikhaya ki samaj badla ja sakta hai' },
      { label: 'French Rev (1789)', text: 'Old political hierarchy tooti → Order ka sawaal utha' },
      { label: 'Industrial Rev', text: 'Factories, slums & nuclear family ne naye crises paida kiye' },
      { label: 'Conservative Push', text: 'Bonald-Maistre ne community & moral order bachane par zor diya' },
      { label: 'Sociology Born', text: 'Comte, Marx, Durkheim, Weber ne systematic discipline banaya' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Pre-Modern / Traditional Society',
    rightTitle: 'Modern Industrial Society',
    rows: [
      { aspect: 'Authority & Knowledge', left: 'Church, sacred tradition, divine kingship', right: 'Reason, science, secular constitutional law' },
      { aspect: 'Social Status', left: 'Ascribed by birth (estate, caste)', right: 'Achieved via education, market & merit' },
      { aspect: 'Economy & Work', left: 'Agrarian, household craft, guild ties', right: 'Factory wage labour, high division of labour' },
      { aspect: 'Solidarity (Durkheim)', left: 'Mechanical (likeness, strong collective conscience)', right: 'Organic (interdependence, individual autonomy)' },
      { aspect: 'Family & Residence', left: 'Rural community (Gemeinschaft), extended kin', right: 'Urban cities (Gesellschaft), nuclear units' },
      { aspect: 'Key Risk', left: 'Stagnation, dogma, rigid hierarchy', right: 'Anomie, alienation, bureaucratic iron cage' },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Modernity',
    meaning: '18th–19th century ke baad ubhri samajik vyavastha jo reason, science, industrial capitalism, nation-state aur individual rights par tiki hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Law of Three Stages',
    meaning: 'Auguste Comte ka niyam ki manav soch Theological (supernatural) se Metaphysical (abstract forces) aur fir Positive (scientific observation) stage mein jaati hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Anomie',
    meaning: 'Tez industrial ya economic badlaav ke dauraan jab purane norms kamzor pad jaayein aur naye rules na banein — normlessness ki sthiti.',
    thinkerSlug: 'emile-durkheim',
  },
  {
    kind: 'keyTerm',
    term: 'Rationalisation & Iron Cage',
    meaning: 'Tradition aur values ki jagah efficiency, rules aur bureaucracy ka badhna — jo azaadi dene ke bajaye insaan ko naye pinjre mein band kar sakta hai.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'The philosophers have only interpreted the world, in various ways; the point is to change it.',
    context: 'Enlightenment philosophy ko real industrial class struggle aur social transformation se jodne ka ailaan.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'yogendra-singh',
    quote: 'Indian tradition is not frozen; it adapts to modernisation through selective synthesis of old and new institutions.',
    context: 'Paper 1 ki European modernity theory ko Indian social transformation se jodne wala bridge.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2024–2013 PYQ Pattern: Sirf Enlightenment mat likhna!',
    body: 'Har teesre saal UPSC poochta hai ki Sociology Enlightenment/Renaissance ka product hai. 20-marker mein hamesha dono sides dikhao: (1) Enlightenment ka reason + progress, (2) Zeitlin ka Conservative Reaction (order & community), aur (3) Material shocks (French + Industrial Rev). Last mein non-Western critique (colonialism, Ibn Khaldun) add karne se topper marks milte hain.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Comte ne sab banaya!',
    body: 'Students likh dete hain ki Comte ne akela Sociology shuru kiya. Yaad rakho: Comte ne naam diya (1839), par Saint-Simon ne foundation rakhi, aur real empirical & theoretical pillars Marx, Durkheim aur Weber ne khade kiye.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Robert Nisbet ke 5 Unit-Ideas (Revision Mnemonic: CASAS)',
    body: 'Enlightenment + Conservative reaction ke takraav se Sociology ko 5 foundational ideas mile: Community (Tönnies), Authority (Weber), Status (Marx/Weber), Sacred (Durkheim), aur Alienation (Marx). Exam mein kisi bhi Emergence answer mein ye 5 words bullet point bana do!',
  },
  {
    kind: 'answerBox',
    intro: 'Sociology 18th–19th century Europe ke "Great Transformation" ki aulad hai, jab feudalism tootne se intellectual, political aur economic crisis ek saath aaye.',
    points: [
      'Intellectual base: Renaissance humanism aur Scientific Revolution ne empirical enquiry di; Enlightenment ne reason & progress ko centre mein rakha.',
      'Conservative reaction (Zeitlin): Bonald aur Maistre ne chaos ke darr se tradition, community aur moral order par dhyan khincha.',
      'Political shock (French Rev 1789): Monarchy khatam hone se citizenship badhi par social order ka crisis aaya — Comte ke Positivism ka trigger.',
      'Economic shock (Industrial Rev): Factories, urbanisation, slums aur nuclear family ke ubhaar par Marx (alienation), Durkheim (anomie) aur Weber (rationalisation) ne respond kiya.',
      'Critical nuance: Eurocentric narrative se aage dekhein toh colonialism aur Ibn Khaldun jaisi traditions bhi samaj-shastra ki history ka hissa hain.',
    ],
    conclusion: 'Aaj bhi digital capitalism aur globalisation ke daur mein Sociology nayi "late modernity" ke sawaalon ko samajhne ka sabse zaroori auzar bani hui hai.',
  },
]

const pyqAnswers: PyqAnswerItem[] = [
  {
    year: 2024,
    paper: 'P1',
    marks: 20,
    question: 'Sociology is the product of European enlightenment and renaissance. Critically examine this statement.',
    theme: 'Intellectual Antecedents vs Material & Global Critiques',
    intro: 'Renaissance aur Enlightenment ne Europe ko reason, humanism aur scientific temper diya, jisse samaj ko bina dogma ke padhne ki zameen taiyar hui — par sociology sirf inhi do intellectual movements ka natija nahi thi.',
    points: [
      'Renaissance & Scientific Revolution ka yogdaan: Printing press, secular humanism aur Galileo-Newton ke natural laws ne Church authority todi aur empirical observation ki aadat daali.',
      'Enlightenment ka core push: Montesquieu, Voltaire aur Rousseau ne reason, progress aur social contract ke zariye dikhaya ki society insaan-nirmit niyamon se chalti hai.',
      'Irving Zeitlin ka counter-point (Conservative Reaction): Bonald aur Maistre ne Enlightenment ke hyper-individualism ka virodh kiya; community, sacred aur hierarchy ki chinta wahin se aayi.',
      'Material forces zaroori the: Bina French Revolution (political disorder) aur Industrial Revolution (factories, slums, class struggle) ke Enlightenment sirf armchair philosophy rehti.',
      'Eurocentric limit (Gurminder Bhambra, Syed Hussein Alatas): Ye statement colonialism ki bhoomika aur 14th century ke Ibn Khaldun (Asabiyyah) ko nazarandaz karta hai.',
    ],
    thinkers: 'Auguste Comte, Montesquieu, Rousseau, Irving Zeitlin, Louis de Bonald, Gurminder Bhambra, Ibn Khaldun',
    example: 'Industrial slums aur French Revolution ke baad social order tootne par hi Comte ne Positivism aur Durkheim ne Anomie jaise concepts diye.',
    conclusion: 'Enlightenment aur Renaissance ne sociology ko intellectual toolkit diya, lekin asli janam material revolutions, conservative reaction aur colonial modernity ke takraav se hua.',
  },
  {
    year: 2022,
    paper: 'P1',
    marks: 20,
    question: 'What aspects of Enlightenment do you think paved way for the emergence of sociology? Elaborate.',
    theme: 'Core Enlightenment Pillars & Counter-Enlightenment Synthesis',
    intro: '18th century ke European Enlightenment ("Age of Reason") ne aisi intellectual shift laayi jisme blind faith ki jagah scientific rationality aur human agency ne li, jo seedhe sociology ki buniyaad bani.',
    points: [
      'Primacy of Reason & Empiricism: Truth ab revelation se nahi, observation aur logic se prove hota tha (John Locke, David Hume), jisne Comte aur Durkheim ke empirical sociology ka rasta khola.',
      'Belief in Universal Social Laws: Montesquieu ("The Spirit of the Laws") ne dikhaya ki jaise physics ke laws hain, waise hi laws, climate aur institutions mein patterns hote hain.',
      'Idea of Progress & Perfectibility: Condorcet aur Saint-Simon ne maana ki gyaan se samaj behtar banaya ja sakta hai — yahi sociology ko reformist mission deta hai.',
      'Individualism & Secular Citizenship: Rousseau ke Social Contract ne samaj ko divine order se hata kar human-made association maana, jisse inequality par sawaal utha.',
      'Dialectical Reaction (Zeitlin): Enlightenment ke radical rationalism ne conservative thinkers ko daraya, aur dono ke synthesis se Robert Nisbet ke 5 unit-ideas (community, authority, status, sacred, alienation) ubhre.',
    ],
    thinkers: 'Montesquieu, Rousseau, Voltaire, Condorcet, Irving Zeitlin, Robert Nisbet, Auguste Comte',
    example: 'Raja Rammohan Roy aur Phule jaise Indian reformers ne bhi 19th century mein Enlightenment rationality se sati aur jaati-bhed par sawaal uthaye.',
    conclusion: 'Enlightenment ne sociology ko sirf "kya hai" nahi balki "kyun aur kaise badle" poochhne ka rational temper diya.',
  },
  {
    year: 2020,
    paper: 'P1',
    marks: 20,
    question: 'How did the Intellectual forces lead to the emergence of Sociology? Discuss.',
    theme: 'Enlightenment, Counter-Enlightenment & Classical Theoretical Response',
    intro: 'Industrial aur political upheavals ne Europe ko badla, lekin us badlaav ko ek scientific discipline ka roop dene ka kaam 18th–19th century ki intellectual forces ne kiya.',
    points: [
      'Enlightenment Rationalism: Reason aur observation ko supreme maan kar purani feudal ideologies ko challenge kiya gaya; Comte aur Saint-Simon ne isi se "Social Physics" banayi.',
      'Conservative Counter-Enlightenment: Burke, Bonald aur Maistre ne traditions, religion aur family ko bachane par zor diya — jisse Durkheim ke collective conscience ko bal mila.',
      'Positivist & Evolutionary Currents: Darwin ke evolution aur natural sciences se prabhavit ho kar Herbert Spencer ne organic analogy aur Comte ne Law of Three Stages diya.',
      'Hegelian Dialectics & Political Economy: Adam Smith aur Hegel ke vicharon ko palat kar Karl Marx ne Historical Materialism aur capitalism ki scientific critique banayi.',
      'German Idealism & Historicism: Dilthey aur Neo-Kantians ke saath dialogue mein Max Weber ne natural science ki copy karne ke bajaye Verstehen (interpretive understanding) diya.',
    ],
    thinkers: 'Auguste Comte, Saint-Simon, Edmund Burke, Herbert Spencer, Karl Marx, Émile Durkheim, Max Weber',
    example: 'Weber ka Protestant Ethic Marx ke pure economic determinism ke saath ek seedha intellectual debate tha.',
    conclusion: 'Sociology ek single philosophy nahi, balki Enlightenment positivism, conservative order-chinta, Hegelian dialectics aur German humanism ke creative dialogue ka product hai.',
  },
  {
    year: 2019,
    paper: 'P1',
    marks: 20,
    question: 'Discuss the historical antecedents of the emergence of Sociology as a discipline.',
    theme: 'Long-term Historical Shifts + Twin Revolutions',
    intro: 'Sociology 19th century mein ek distinct discipline bani, lekin iske historical antecedents 14th century ke Renaissance se lekar 18th century ki twin political-economic revolutions tak faile the.',
    points: [
      'Commercial Revolution & Colonial Expansion: Sea trade aur non-European samajon ke contact ne dikhaya ki European customs "natural" ya iklaute nahi hain.',
      'Renaissance & Reformation: Printing press aur Protestant Reformation ne individual conscience aur questioning spirit ko badhava diya.',
      'Scientific Revolution & Enlightenment: Empirical method aur Montesquieu-Rousseau ke ideas ne society ko systematic study ke layak banaya.',
      'French Revolution (1789): Aristocracy ke patan ne political legitimacy aur social cohesion ka crisis paida kiya, jise Comte ne positive science se suljhana chaha.',
      'Industrial Revolution & Urbanisation: Factories, class polarisation aur family breakup ne Marx, Engels, Durkheim aur Tönnies ko empirical social problems diye.',
    ],
    thinkers: 'Auguste Comte, Karl Marx, Émile Durkheim, Max Weber, Ferdinand Tönnies, R.K. Merton',
    example: 'Charles Booth aur Engels ("Condition of the Working Class in England") ke 19th-century poverty surveys industrial urban crisis ki seedhi upaj the.',
    conclusion: 'Jab history ne purane religious aur feudal sahare chheen liye, tab naye industrial samaj ko samajhne aur sambhalne ke liye sociology anivarya ban gayi.',
  },
  {
    year: 2017,
    paper: 'P1',
    marks: 20,
    question: 'Explain how sociology has emerged as a distinct discipline based on rationality and scientific temper.',
    theme: 'From Social Philosophy to Empirical & Rational Science',
    intro: 'Aristotle aur Kautilya ke zamane se samaj par charcha hoti rahi, par sociology tabhi ek distinct discipline bani jab usne normative philosophy chhod kar rationality aur scientific temper ko apnaya.',
    points: [
      'Shift from "Ought" to "Is": Traditional philosophy batati thi samaj kaisa hona chahiye; sociology ne systematic observation se samjhaya samaj kaise kaam karta hai.',
      'Comte’s Positive Philosophy: Theology aur metaphysics ko chhod kar observation, experimentation aur comparative historical method ko sociology ka base banaya.',
      'Durkheim’s Methodological Autonomy: Rules of Sociological Method mein social facts ko things maan kar sociology ko psychology aur biology se alag independent domain diya.',
      'Weber’s Rational & Value-Neutral Lens: Interpretive Verstehen ke bawajood Weber ne value neutrality aur ideal types ke zariye causal precision par zor diya.',
      'Critique & Evolution: C.W. Mills ke abstracted empiricism ke khilaf caution aur Kuhn/Popper ke scientific debates ke baad bhi systematic evidence-based enquiry sociology ki pehchan hai.',
    ],
    thinkers: 'Auguste Comte, Émile Durkheim, Max Weber, Robert K. Merton, C. Wright Mills',
    example: 'Durkheim ki Suicide (1897) ne statistical rates ke zariye dikhaya ki personal dikhne wala suicide bhi social integration ke niyamon se bandha hai.',
    conclusion: 'Rationality aur scientific temper ne sociology ko armchair speculation se nikaal kar ek verifiable, self-correcting academic discipline banaya.',
  },
  {
    year: 2016,
    paper: 'P1',
    marks: 20,
    question: '"Sociology is pre-eminently study of modern societies." Discuss.',
    theme: 'Sociology as Science of Modernity vs Broader Scope',
    intro: 'Anthony Giddens kehte hain ki sociology primarily modern industrial institutions ki samajh hai, kyunki iska janam hi traditional se modern samaj mein transition ke dauran hua.',
    points: [
      'Classical Focus on Modernity: Marx (capitalism), Durkheim (organic solidarity & anomie), Weber (rationalisation & bureaucracy) aur Simmel (metropolis) sabne modern Western institutions ko centre rakha.',
      'Division from Anthropology: Colonial era mein "primitive" ya tribal samaj Social Anthropology ko diye gaye, jabki sociology ne urban-industrial modern societies ko chuna.',
      'Contemporary Expansion (Late Modernity): Ulrich Beck ("Risk Society"), Zygmunt Bauman ("Liquid Modernity") aur Manuel Castells ("Network Society") dikhate hain ki sociology aaj bhi modernity ke naye roop padhti hai.',
      'Counter-Argument (Traditional & Comparative Lens): Sociology sirf modern societies tak seemit nahi hai — Durkheim ne Australian totemism ("Elementary Forms") padha, aur Weber ne Hinduism, Confucianism aur ancient Judaism par likha.',
      'Indian Synthesis (Yogendra Singh, M.N. Srinivas): Bharat mein sociology traditional caste, kinship aur village institutions ko modernity ke saath interact karte hue padhti hai.',
    ],
    thinkers: 'Anthony Giddens, Karl Marx, Max Weber, Émile Durkheim, Ulrich Beck, Yogendra Singh, M.N. Srinivas',
    example: 'Indian matrimonial platforms par modern app technology aur traditional gotra/jaati preferences ka saath chalna dikhata hai ki sociology modernity aur tradition dono ke intersection ko padhti hai.',
    conclusion: 'Sociology modernity ke garbh se nikli aur modern institutions iska core focus hain, lekin yeh comparative roop se traditional aur hybrid societies ko bhi barabar samajhti hai.',
  },
  {
    year: 2015,
    paper: 'P1',
    marks: 20,
    question: 'How had enlightenment contributed to the emergence of Sociology?',
    theme: 'Enlightenment Principles & Rise of Sociological Thought',
    intro: '18th century ka Enlightenment woh intellectual turning point tha jisne manav samaj ko "God-given destiny" se hata kar "humanly intelligible system" bana diya.',
    points: [
      'Human Reason over Dogma: Blind obedience ki jagah critical questioning aayi, jisse inequalities (feudalism, slavery) natural nahi balki social problems dikhne lage.',
      'Empirical & Scientific Method: Locke aur Hume ki empiricist parampara ne social theorists ko data aur observation ke base par claims test karne ki prerna di.',
      'Social Determinism vs Individual Will: Montesquieu aur Adam Ferguson ne dikhaya ki law, economy aur customs ke peeche structural patterns kaam karte hain.',
      'Reform & Progress Ethos: Society ko sudharne ka bharosa Comte ke "savoir pour prévoir, prévoir pour pouvoir" (know to predict, predict to control) mein dikhta hai.',
      'Catalysing Conservative Response: Zeitlin ke mutabik Enlightenment ke extreme individualism ka reaction hi Comte aur Durkheim mein moral consensus ki khoj bana.',
    ],
    thinkers: 'Montesquieu, Rousseau, Adam Ferguson, Auguste Comte, Irving Zeitlin, Émile Durkheim',
    example: 'Enlightenment ke baad hi crime ko "paap" maan ne ke bajaye poverty, urban crowding aur weak norms ke social lens se dekha jaane laga.',
    conclusion: 'Enlightenment ne sociology ko uski core spirit di — ki samaj ko reason aur evidence se samajh kar zyada just banaya ja sakta hai.',
  },
  {
    year: 2014,
    paper: 'P1',
    marks: 10,
    question: 'Write short answer of the following in about 150 words: How did the emergence of industrial society change the family life in Western Europe?',
    theme: 'Industrial Revolution & Transformation of European Family',
    intro: 'Industrial Revolution ne Western European family ko sirf size mein chhota nahi kiya, balki uske economic, emotional aur authority structure ko poori tarah badal diya.',
    points: [
      'Loss of Production Function: Craft aur kheti ke ghar se bahar factory mein jaane se family production unit se consumption aur emotional care unit ban gayi.',
      'Structural Isolation & Nuclearisation: Workers ko jobs ke liye industrial towns migrate karna pada, jisse extended kin ties weak hue aur nuclear family dominant hui (Parsons, William Goode).',
      'Gendered Division of Labour: Mardon ko bahar paid factory work aur auraton ko unpaid domestic sphere mein simatne se patriarchal dependence badhi (Engels), baad mein working-class women ke factory entry ne double burden laaya.',
      'Decline of Kin Authority & Historical Caveat: Inherited land kam mahatvapurna hone se mate selection individual choice par tika; haalanki Peter Laslett ne dikhaya ki nuclear families pehle bhi common thin.',
    ],
    thinkers: 'Talcott Parsons, William J. Goode, Friedrich Engels, Michael Anderson, Peter Laslett',
    example: '19th century Manchester aur London ke mill towns mein young migrants ne gaon ke extended kin se door chhote nuclear tenements basaye.',
    conclusion: 'Industrialisation ne Western family ko economic survival ki jagah privacy, companionate intimacy aur specialised socialisation ka centre bana diya.',
  },
  {
    year: 2013,
    paper: 'P1',
    marks: 20,
    question: '“Sociology emerged in Europe and flourished to begin with on social reformist orientation in the U.S.A.” - Comment.',
    theme: 'European Theoretical Roots vs American Pragmatic Reformism',
    intro: 'Sociology ka theoretical janam Europe ke feudalism-to-industrialism sankat mein hua, lekin 19th–20th century ke daur mein iska sabse tez institutional expansion USA mein urban social problems sudharne ke maqsad se hua.',
    points: [
      'European Macro-Theoretical Context: Europe mein French & Industrial Revolutions ke beech grand historical questions the — Comte (positivism), Marx (capitalism), Durkheim (solidarity), Weber (rationalisation).',
      'American Socio-Historical Context: USA mein feudal aristocracy nahi thi; wahan rapid urbanisation, massive immigration, slums, labour unrest aur race relations immediate practical challenges the.',
      'Chicago School & Social Reformism: 1892 mein University of Chicago mein pehla full department khula; Albion Small, Robert Park, Ernest Burgess aur Jane Addams (Hull House) ne city slums aur crime par empirical fieldwork kiya.',
      'Pragmatism & Micro-Sociology: William James, John Dewey aur G.H. Mead ke pragmatism ne problem-solving aur symbolic interactionism ko badhava diya.',
      'Later Evolution: 1940s–60s mein Parsons aur Merton ke structural functionalism ne reformism ko grand/middle-range theory mein badla, jise baad mein C.W. Mills ne radical critique kiya.',
    ],
    thinkers: 'Auguste Comte, Robert Park, Ernest Burgess, Jane Addams, G.H. Mead, Talcott Parsons, C. Wright Mills',
    example: 'Chicago School ke W.I. Thomas aur Znaniecki ki "The Polish Peasant in Europe and America" ne immigration adjustment par landmark empirical research ki.',
    conclusion: 'Europe ne sociology ko macro-theoretical aatma di, toh USA ne use university departments, urban fieldwork aur social reformist practical auzar diye.',
  },
]

export const topic1Emergence: TopicNotebookSpec = {
  topicSlug: 'modernity-and-emergence-of-sociology',
  summary: 'Sociology Europe ki teen krantiyon — Enlightenment, French Revolution aur Industrial Revolution — ke takraav se janmi, aur baad mein USA ke reformism aur India ke postcolonial context mein phaili.',
  thinkerSlugs: ['karl-marx', 'emile-durkheim', 'max-weber', 'yogendra-singh'],
  relatedTopicSlugs: [
    'scope-and-other-social-sciences',
    'sociology-and-common-sense',
    'positivism-and-its-critique',
    'karl-marx-historical-materialism',
    'modernization-of-indian-tradition',
  ],
  mindMap,
  sections,
  pyqAnswers,
}
