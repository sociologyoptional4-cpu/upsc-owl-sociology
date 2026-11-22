import type { PyqAnswerItem } from '@/lib/notes/notebook-types'

export const topic3PyqsHiB: PyqAnswerItem[] = [
  {
    year: 2017,
    paper: 'P1',
    marks: 10,
    question: 'Illustrate with example the significance of variables in sociological research.',
    theme: 'Operationalisation, Causation & Spuriousness Control',
    intro:
      'Variable koi bhi aisa gun ya samajik halat hai—padhai, jaati, aamdani, shadi-shuda hona—jiska maan alag logon mein badalta hai; yeh empirical sociology ki sabse buniyaadi eent hai.',
    points: [
      'Abstract concepts ko operationalise karna: Democracy, gareebi ya social integration ko tab tak nahi naap sakte jab tak unhe variables mein na todein (Durkheim ne integration ko shaadi, bachon aur dharm se naapa).',
      'Hypothesis aur cause-effect disha tay karna: Independent (kaaran) aur dependent (asar) alag karne se saaf hota hai ki education se income badh rahi hai ya parivar ki income se education.',
      'Intervening variables pakadna: Gareebi aur bhookh ke beech MGNREGA ya PDS ration card jaise intervening variables dikhate hain ki sarkar ki madad asar ko kaise modti hai.',
      'Spurious correlation se bachav: Teesre hidden variable ko control karne se ittefaq (jaise education ki wajah se income aur health dono badhna) ko galat causation maan ne se bacha jaata hai.',
    ],
    thinkers: 'Émile Durkheim, Robert K. Merton, Karl Marx, Paul Lazarsfeld',
    example:
      'Durkheim ki Suicide mein marital status, bachon ki sankhya aur dharm measurable independent variables the jinhone suicide rate (dependent variable) ka badlaav samjhaya.',
    conclusion:
      'Saaf variables bade sociological vicharon ko thos measurement, statistical testing aur spasht policy samajh se jodte hain.',
  },
  {
    year: 2017,
    paper: 'P1',
    marks: 20,
    question:
      'How can one resolve the issue of reliability and validity in the context of sociological research on inequality?',
    theme: 'Measuring Caste, Class & Gender Inequality Accurately',
    intro:
      'Jaati, daulat aur gender inequality ki research mein reliability aur validity ke beech bhari takraav aata hai: sarkari surveys chhupa bhedbhaav aur informal sampatti miss karte hain, jabki chhoti kahaniyon par bias ka ilzam lagta hai.',
    points: [
      'Multi-dimensional operationalisation: Sirf cash salary ke bajaye zameen, chhupi sampatti, alag basti, poshan aur jaati-gender intersectionality naapein (B.R. Ambedkar ki graded inequality).',
      'Methodological triangulation (Alan Bryman, Norman Denzin): Bade surveys (NSS, IHDS, SECC, NFHS) ke saath gaon ya shehar ki ethnography (M.N. Srinivas, André Béteille) jodein taaki batayi gayi aamdani aur asli bhedbhaav verify ho.',
      'Cultural bias se mukt tools: CSAT-style tests jo sirf urban familiarity dikhate hain unki jagah local bhasha ke sawaal aur assets ke indirect indicators apnayein.',
      'Standpoint reflexivity aur dostana bharosa (Ann Oakley, Sharmila Rege): Gender-sensitive staff train karein aur bharosemand baat karein taaki gharelu hinsa ya jaati-apman ke shikar darr ke maare sach na chhupayein.',
      'Fieldwork discipline aur transparency: Rozana field diaries likhein, inter-rater audits karein aur virodhabhasi cases ko bina chhupaye report mein rakhein.',
    ],
    thinkers: 'B.R. Ambedkar, M.N. Srinivas, André Béteille, Ann Oakley, Sharmila Rege, Alan Bryman',
    example:
      'Sarkari land-records survey ke saath Sripuram ya Rampura jaisi village ethnography jodne se kanooni malikana aur parde ke peeche ka jaati-bahishkar dono dikhta hai.',
    conclusion:
      'Multi-dimensional indicators, empathetic fieldwork aur triangulation milakar inequality research ko repeatable bhi banate hain aur sachai ke kareeb bhi.',
  },
  {
    year: 2016,
    paper: 'P1',
    marks: 10,
    question:
      '"Hypothesis is a statement of the relationship between two or more variables." Elucidate by giving examples of poverty and illiteracy.',
    theme: 'Testing Variable Relationships via Poverty & Illiteracy',
    intro:
      'Hypothesis kisi aam chinta ko do ya zyada variables ke beech ek saaf, testable rishte mein badal deti hai—jise gareebi aur niraksharata (illiteracy) ki misaal se aasani se samjha jaa sakta hai.',
    points: [
      'Variables chunnna aur operationalise karna: Illiteracy (independent ya sah-karak variable, Census literacy/school years se naapi) aur poverty (dependent variable, Multidimensional Poverty Index ya kharch se naapi).',
      'Mukabale wali hypotheses banana: Research Hypothesis (H1) kehti hai ki niraksharata badhne se log kam-mazdoori ke informal kaam mein phans kar gareeb rehte hain, jise Null Hypothesis (H0: koi rishta nahi) ke khilaf test karte hain.',
      'Intervening aur ulta rishta dekhna: Jaati, gender aur rozgar ki kami jodne se pata chalta hai ki gareebi khud bachon ko school chhudwa kar illiteracy badhati hai (Sen aur Drèze ki capability approach).',
      'Falsification ka faida (Karl Popper): Agar kahin educated berozgari ke kaaran H1 galat bhi sabit ho jaaye, tab bhi usse hamari empirical samajh aur mazboot hoti hai.',
    ],
    thinkers: 'Robert Dubin, Karl Popper, Amartya Sen, Jean Drèze',
    example:
      'Bihar aur Kerala ke zilon mein literacy rate aur Multidimensional Poverty scores compare karke dekha jaa sakta hai ki padhai ki kami deprivation se kaise judi hai.',
    conclusion:
      'Gareebi aur illiteracy ko testable hypotheses mein dhalna aam common sense ko scientific sociological jaanch mein badal deta hai.',
  },
  {
    year: 2015,
    paper: 'P1',
    marks: 20,
    question: 'What are variables? Discuss their role in experimental research.',
    theme: 'Experimental Design: IV, DV, Control & Field Limitations',
    intro:
      'Variable koi bhi naapne layak gun ya halat hai jiski value cases ke saath badalti hai—yeh experimental research ka main engine hai jo cause-and-effect rishte ko sabooton se sabit karta hai.',
    points: [
      'Independent Variable (IV) ko badalna: Experiment mein researcher kaaran ko jaanbujh kar badalta hai—jaise Bandura ke Bobo Doll experiment mein violent TV clips ya Hawthorne mein factory ki roshni.',
      'Dependent Variable (DV) par asar naapna: Is badlaav se outcome variable mein aaya fark record kiya jaata hai—jaise bachon ka gussa, mazdooron ka production, ya Sisson experiment mein sadak par logon ki madad.',
      'Experimental vs Control Group alag karna: Ek jaisi halat wale ek group ko IV dena aur control group ko bina IV rakhna bahari shor hata kar asli kaaran dikhata hai.',
      'Extraneous aur confounding variables rokna: Mausam, umar aur mahol ko constant rakhna spurious causation rokta hai—yeh lab mein aasaan par khuli street field experiments mein behad mushkil hai.',
      'Reactivity aur ethics ki seema: Pata chalne par log vyavahar badal dete hain (Hawthorne effect), aur gareebi ya hinsa par ethics ke kaaran experiments nahi kar sakte.',
    ],
    thinkers: 'Albert Bandura, Émile Durkheim, Robert K. Merton, Elton Mayo',
    example:
      'Hawthorne factory test mein roshni (IV) kam karne par bhi output (DV) badha kyunki observe kiye jaane ka ehsas ek bada extraneous factor ban gaya.',
    conclusion:
      'Experiments mein variables saaf cause-effect dikhate hain, par naitik seemaon aur reactivity ke karan sociology ko surveys aur fieldwork ka sahara lena padta hai.',
  },
  {
    year: 2015,
    paper: 'P1',
    marks: 10,
    question: 'Why is random sampling said to have more reliability and validity in research?',
    theme: 'How Probability Selection Protects Rigour & Generalisability',
    intro:
      'Random (probability) sampling frame ke har member ko chune jaane ka barabar aur hisab-lagane layak mauka deti hai—jisse personal pakshpat ghatta hai aur reliability wa external validity dono mazboot hoti hain.',
    points: [
      'Researcher selection bias ka khatma: Convenience ya volunteer sampling ke ulta (jahan aasaan ya tez bolne wale log aate hain), lottery selection researcher ki pasand-napasand rok deti hai.',
      'External validity (generalisability) badhana: Random aur stratified random sample poore Universe ki asli banawat (anupat) ka aaina bante hain, jisse poore desh par lagbhag sahi anuman lagta hai.',
      'Teams ke beech reliability: Fixed random interval ya random table use karne se do alag teams ek hi Voter List se lagbhag ek jaise results nikal kar verify kar sakti hain.',
      'Zaroori seemayein yaad rakhein: Agar Voter List mein homeless ya migrants gayab hon, ya sawaal leading hon aur log social desirability se jhooth bolein, toh sirf random sampling validity nahi bacha sakti.',
    ],
    thinkers: 'P.V. Young, W.G. Cochran, Alan Bryman, Émile Durkheim',
    example:
      'Poore college roll se gender aur jaati ke adhar par stratified random sample lena canteen ke 20 volunteers poochhne se kahin zyada valid feedback deta hai.',
    conclusion:
      'Random sampling selection ke level par representativeness aur repeatability bachati hai, basharte sampling frame poora aur sawaal neutral hon.',
  },
]