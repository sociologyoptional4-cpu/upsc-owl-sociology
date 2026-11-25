import type { StarterBlogSpec } from './types'

export const STARTER_BLOGS_PART_1: StarterBlogSpec[] = [
  {
    slug: 'mn-srinivas-sanskritization-dominant-caste-upsc',
    title: 'M. N. Srinivas: Sanskritization, Dominant Caste aur Field View',
    excerpt: 'M. N. Srinivas ke field view, Sanskritization, Westernization aur Dominant Caste concepts ko UPSC Paper 2 answer writing ke liye detail mein samjho.',
    categorySlug: 'thinkers',
    tagTitles: ['M.N. Srinivas', 'Sanskritization', 'Dominant Caste', 'Field View'],
    papers: ['P2'],
    unitSlugs: ['perspectives-on-indian-society', 'caste-system', 'rural-and-agrarian-social-structure'],
    topicSlugs: ['structural-functionalism-mn-srinivas', 'perspectives-on-caste', 'indian-village-and-village-studies'],
    thinkerSlugs: ['mn-srinivas', 'yogendra-singh'],
    coverFilename: 'p2-u01-02-book-field-synthesis.webp',
    coverAlt: 'Book View versus Field View synthesis in Indian Sociology',
    featured: true,
    publishedAt: '2026-11-25T10:00:00.000Z',
    seo: {
      title: 'M. N. Srinivas: Sanskritization & Dominant Caste Notes',
      description: 'Complete UPSC Sociology Paper 2 notes on M. N. Srinivas: Field View vs Book View, Sanskritization, Dominant Caste, critiques, and Mains model answers.',
      focusKeyword: 'M. N. Srinivas Sanskritization',
    },
    faq: [
      {
        question: 'Book View aur Field View mein kya farq hai?',
        answer: 'Book View (G. S. Ghurye, Louis Dumont) dharmashastras aur texts ke aadhar par Indian society ko samajhta hai, jabki Srinivas ka Field View Rampura aur Coorg jaise villages ke participant observation se real lived reality dikhata hai.',
      },
      {
        question: 'Kya Sanskritization se caste structure badalta hai?',
        answer: 'Nahi. Srinivas ke mutabik Sanskritization sirf positional change laata hai, structural change nahi — yaani koi caste hierarchy mein thoda upar ja sakti hai par poora caste system bana rehta hai.',
      },
      {
        question: 'Dominant Caste ke 3 main criteria kya hain?',
        answer: 'Numerical strength (badi population), economic and political power (zameen aur local politics par pakad), aur local hierarchy mein non-low ritual status.',
      },
    ],
    quiz: [
      {
        question: 'M. N. Srinivas ke mutabik Sanskritization kis tarah ka change laata hai?',
        options: ['Structural change only', 'Positional change without structural change', 'Complete abolition of hierarchy', 'Purely economic class mobility'],
        answerIndex: 1,
        explanation: 'Srinivas ne Religion and Society Among the Coorgs of South India (1952) mein bataya ki Sanskritization positional change hai, structural change nahi.',
      },
      {
        question: 'Rampura village study mein Srinivas ne kaun sa concept empirical roop se develop kiya?',
        options: ['Historical materialism', 'Dominant caste aur vote bank', 'Mechanical solidarity', 'Iron law of oligarchy'],
        answerIndex: 1,
        explanation: 'Mysore ke Rampura gaon ki fieldwork se Srinivas ne Dominant Caste aur Vote Bank jaise concepts diye.',
      },
      {
        question: 'Srinivas ke Field View par Sabse bada critique kisne diya ki woh upper-caste perspective par zyada focus karta hai?',
        options: ['Subaltern aur Dalit sociologists (e.g. Kancha Ilaiah, Gail Omvedt)', 'Auguste Comte', 'Vilfredo Pareto', 'Robert K. Merton'],
        answerIndex: 0,
        explanation: 'Critics aur subaltern scholars ne kaha ki Srinivas ke functionalist field view mein Dalit resistance aur conflict dimensions kam dikhte hain.',
      },
    ],
    sections: [
      {
        block: {
          blockType: 'blogCallout',
          variant: 'tip',
          title: 'Ek line me',
          body: 'M. N. Srinivas ne Indian Sociology ko Sanskrit texts (Book View) se nikal kar real villages (Field View) mein utaara, aur dikhaya ki caste static nahi balki dynamic institution hai.',
        },
      },
      {
        markdown: `## Book View se Field View ki yatra\n\nBritish colonial writings aur early Indology ne Indian village ko ek **unchanging little republic** aur caste ko ek rigid, frozen hierarchy bataya tha. **M. N. Srinivas** ne Radcliffe-Brown aur Evans-Pritchard ke structural-functionalism ko apnate hue *participant observation* par zor diya.\n\n- **Coorgs study (1952):** Karnataka ke Coorgs par unki monograph *Religion and Society Among the Coorgs of South India* ne Sanskritization ka base rakha.\n- **Rampura study:** *The Remembered Village* (1976) mein unhone dikhaya ki kaise local agrarian economy, landownership aur factional politics gaon ki power decide karti hai.`,
      },
      {
        block: {
          blockType: 'compare',
          leftTitle: 'Book View (Indology)',
          rightTitle: 'Field View (Srinivas)',
          rows: [
            { aspect: 'Source of data', left: 'Vedas, Manusmriti, classical texts', right: 'Ethnography & village fieldwork' },
            { aspect: 'View of caste', left: 'Rigid Varna hierarchy', right: 'Fluid local Jati dynamics' },
            { aspect: 'Key limitation', left: 'Upper-caste textual bias', right: 'Micro-focus can miss macro history' },
          ],
        },
      },
      {
        markdown: `## Sanskritization vs Westernization\n\nSrinivas ke mutabik jab koi lower ya middle jati apni status badhane ke liye kisi higher caste (aksar local dominant caste) ke rituals, vegetarianism, ya lifestyle ko adopt karti hai, toh use **Sanskritization** kehte hain. Iske ulta, **Westernization** British rule ke baad aaye modern values, education, secular law aur technology ke impact ko dikhata hai.\n\n- **De-Sanskritization:** Aaj ke India mein kai dominant castes reservation benefits paane ke liye OBC ya lower ritual status claim kar rahi hain — UPSC mein is contemporary twist ko zaroor likhna chahiye.`,
      },
      {
        block: {
          blockType: 'keyTerm',
          term: 'Dominant Caste & Vote Bank',
          meaning: 'Wo caste jiske paas numerical strength, cultivable land aur local political power teeno hon (jaise Patidar, Maratha, Jat, Lingayat). Yeh local patronage ke zariye elections mein Vote Bank control karti hai.',
        },
      },
      {
        block: {
          blockType: 'answerBox',
          intro: 'UPSC Paper 2 mein Srinivas par sawaal aaye toh hamesha "Book View vs Field View" tension aur empirical Indian village examples se start karo.',
          points: [
            { text: 'Define Sanskritization as positional mobility within the Jati framework (Coorgs study, 1952) and link Dominant Caste to land + numbers (Rampura).' },
            { text: 'Add critiques: Yogendra Singh pointed out structural limitations; feminist & Dalit scholars noted neglect of gender and anti-caste assertions.' },
            { text: 'Connect to current India: Patidar/Maratha/Jat quota agitations (De-Sanskritization) and Panchayati Raj local politics.' },
          ],
          conclusion: 'Is tarah Srinivas Indian Sociology ko textual stereotypes se azaad karke dynamic empirical discipline banate hain.',
        },
      },
    ],
  },
  {
    slug: 'karl-marx-alienation-gig-economy-upsc',
    title: 'Karl Marx ki Alienation Theory aur Aaj ki Gig Economy (Paper 1 + 2)',
    excerpt: 'Zomato-Swiggy gig workers aur IT burnout par Karl Marx ke 4 types of alienation aur commodity fetishism ko kaise apply karein — UPSC Mains guide.',
    categorySlug: 'thinkers',
    tagTitles: ['Karl Marx', 'Alienation', 'Gig Economy', 'Paper 1'],
    papers: ['P1', 'P2'],
    unitSlugs: ['sociological-thinkers', 'works-and-economic-life'],
    topicSlugs: ['karl-marx-historical-materialism', 'formal-and-informal-organisation-of-work', 'labour-and-society'],
    thinkerSlugs: ['karl-marx', 'max-weber'],
    coverFilename: 'p1-u04-01-marx-durkheim-weber.webp',
    coverAlt: 'Classical sociological thinkers Marx, Durkheim, and Weber comparison',
    publishedAt: '2026-11-24T14:00:00.000Z',
    seo: {
      title: 'Karl Marx Alienation Theory in Gig Economy | UPSC Notes',
      description: 'Apply Karl Marx 4 types of alienation (product, act, species-being, others) to Indian gig workers and IT sector for high-scoring UPSC Sociology answers.',
      focusKeyword: 'Karl Marx Alienation',
    },
    faq: [
      {
        question: 'Marx ke 4 dimensions of alienation kaun se hain?',
        answer: '1) Alienation from the product, 2) Alienation from the act of production, 3) Alienation from species-being (human creativity), aur 4) Alienation from fellow workers.',
      },
      {
        question: 'Kya gig economy Marx ke alienation ko kam karti hai?',
        answer: 'Upper surface par flexible hours freedom lagti hai, par algorithmic rating, surge targets aur zero job security worker ko aur zyada alienated banati hai.',
      },
      {
        question: 'Marx aur Durkheim ke division of labour mein kya antar hai?',
        answer: 'Marx isey exploitation aur alienation ka karan maante hain, jabki Durkheim normal division of labour ko organic solidarity ka source maante hain.',
      },
    ],
    quiz: [
      {
        question: 'Marx ne "Economic and Philosophic Manuscripts of 1844" mein kaun sa concept diya?',
        options: ['Bureaucratic rationality', 'Fourfold alienation of labour', 'Collective conscience', 'Circulation of elites'],
        answerIndex: 1,
        explanation: '1844 Manuscripts mein Marx ne capitalist production ke andar worker ke 4 types of alienation ko explain kiya.',
      },
      {
        question: 'Algorithmic management in food delivery apps kis form of alienation ko sabse zyada dikhata hai?',
        options: ['Alienation from act of production & species-being', 'Mechanical solidarity', 'Charismatic authority', 'Sanskritization'],
        answerIndex: 0,
        explanation: 'Har route, timing aur penalty app algorithm decide karta hai, jisse kaam par worker ka control khatam ho jaata hai.',
      },
      {
        question: 'Marx ke mutabik alienation khatam karne ka ultimate raasta kya hai?',
        options: ['More welfare schemes under capitalism', 'Abolition of private ownership of means of production', 'Moral education of capitalists', 'Urban migration control'],
        answerIndex: 1,
        explanation: 'Marx ke hisaab se jab tak private property aur wage labour rahega, alienation bani rahegi.',
      },
    ],
    sections: [
      {
        block: {
          blockType: 'blogCallout',
          variant: 'tip',
          title: 'Ek line me',
          body: 'Marx ka **Alienation** sirf 19th-century factory ka concept nahi hai — aaj ke algorithmic gig worker aur target-driven corporate employee par yeh aur bhi sharp tareeke se fit baithta hai.',
        },
      },
      {
        markdown: `## Alienation kya hai? (1844 Manuscripts)\n\nCapitalism mein worker apni creativity ke liye nahi balki survival wage ke liye kaam karta hai. **Karl Marx** ke mutabik jab labour ek *commodity* ban jaata hai, tab insaan apne hi kaam se paraya (**estranged**) ho jaata hai.\n\n1. **Alienation from the Product:** Worker jo banata hai us par uska haq nahi hota.\n2. **Alienation from the Act of Production:** Kaam khushi nahi, majboori aur mechanical repetition ban jaata hai.\n3. **Alienation from Species-Being (*Gattungswesen*):** Human nature creative hai, par capitalist division of labour insaan ko machine ka hissa bana deta hai.\n4. **Alienation from Fellow Workers:** Competition aur incentive structures workers ko ek doosre ke khilaf khada kar dete hain.`,
      },
      {
        block: {
          blockType: 'compare',
          leftTitle: 'Traditional Factory (1844)',
          rightTitle: 'Indian Gig Economy (2026)',
          rows: [
            { aspect: 'Supervisor', left: 'Floor manager & clock punch', right: 'GPS tracking & black-box algorithm' },
            { aspect: 'Status of worker', left: 'Wage labourer without capital', right: '"Partner" label without social security' },
            { aspect: 'Solidarity hurdle', left: 'Factory competition', right: 'Dispersed workers & rating anxiety' },
          ],
        },
      },
      {
        markdown: `## Critical evaluation: Kya Marx ke baad bhi counter-trends hain?\n\n- **Robert Blauner (Alienation and Freedom, 1964):** Blauner ne dikhaya ki saari industries mein alienation barabar nahi hoti — printing ya automated continuous-process plants mein workers ko zyada autonomy milti hai.\n- **Durkheim vs Marx:** Durkheim ne kaha problem capitalism ki ownership nahi balki **anomic division of labour** (lack of moral regulation) hai.`,
      },
      {
        block: {
          blockType: 'answerBox',
          intro: 'Contemporary labour ya gig economy par UPSC sawaal pooche toh Marx ke 4 pillars ko direct NITI Aayog gig worker context se link karo.',
          points: [
            { text: 'Outline the 4 forms of alienation from Economic and Philosophic Manuscripts (1844) concisely.' },
            { text: 'Apply to platform capitalism: algorithmic control (loss of act), zero ownership, and worker atomisation.' },
            { text: 'Balance with Robert Blauner (technological variation) and Max Weber (iron cage of rationalization).' },
          ],
          conclusion: 'Code on Social Security aur algorithmic transparency jaise steps alienation ke symptoms kam karte hain, par Marx ke structural sawal aaj bhi relevant hain.',
        },
      },
    ],
  },
  {
    slug: 'emile-durkheim-social-fact-anomie-suicide-upsc',
    title: 'Émile Durkheim: Social Fact, Suicide Types aur Anomie ka UPSC Guide',
    excerpt: 'Durkheim ne kaise Suicide jaise personal act ko sociology se joda? Social Fact ke 2 rules, 4 suicide types aur exam-ready critiques.',
    categorySlug: 'paper-1-concepts',
    tagTitles: ['Emile Durkheim', 'Social Fact', 'Suicide', 'Anomie'],
    papers: ['P1'],
    unitSlugs: ['sociological-thinkers', 'sociology-as-science'],
    topicSlugs: ['emile-durkheim-social-fact-suicide', 'positivism-and-its-critique'],
    thinkerSlugs: ['emile-durkheim', 'robert-k-merton'],
    coverFilename: 'p1-u02-02-objectivity-methods.webp',
    coverAlt: 'Positivism, Social Fact and Objectivity in Sociology',
    publishedAt: '2026-11-24T09:00:00.000Z',
    seo: {
      title: 'Emile Durkheim Social Fact & Suicide Types | UPSC Sociology',
      description: 'Master Emile Durkheim Social Fact rules, 4 suicide types (egoistic, altruistic, anomic, fatalistic), and J.D. Douglas critiques for UPSC Paper 1.',
      focusKeyword: 'Emile Durkheim Social Fact',
    },
    faq: [
      {
        question: 'Social Fact ki pehchan karne ke 2 main features kya hain?',
        answer: 'Exteriority (individual consciousness ke bahar exist karna) aur Constraint (individual par samajik dabav daalna, jaise language, law, ya currency).',
      },
      {
        question: 'Anomic suicide aur Egoistic suicide mein kya antar hai?',
        answer: 'Egoistic suicide low social integration (akelaapan) se hota hai, jabki Anomic suicide low social regulation (sudden economic boom ya crisis mein norms tootne) se hota hai.',
      },
      {
        question: 'Durkheim ki Suicide study ka sabse bada methodological critique kya hai?',
        answer: 'J. D. Douglas (1967) aur Atkinson ne kaha ki official suicide statistics socially constructed hote hain (kuch communities deaths ko suicide classify hi nahi karti), isliye raw data biased ho sakta hai.',
      },
    ],
    quiz: [
      {
        question: 'Durkheim ke mutabik ek student coaching city mein sudden academic failure aur normlessness ke baad kis type ke suicide risk mein hota hai?',
        options: ['Altruistic', 'Anomic', 'Fatalistic', 'Mechanical'],
        answerIndex: 1,
        explanation: 'Jab achanak expectations aur social norms ka balance toot jaata hai (low regulation), tab Anomic situation banti hai.',
      },
      {
        question: '"Treat social facts as things" Durkheim ne kis book mein kaha?',
        options: ['The Division of Labour in Society', 'The Rules of Sociological Method (1895)', 'The Protestant Ethic', 'Das Kapital'],
        answerIndex: 1,
        explanation: '1895 ki The Rules of Sociological Method mein Durkheim ne sociology ka objective scientific method diya.',
      },
      {
        question: 'High social integration par extreme sacrifice (jaise war hero ya sati) ko Durkheim kya kehte hain?',
        options: ['Egoistic suicide', 'Altruistic suicide', 'Anomic suicide', 'Fatalistic suicide'],
        answerIndex: 1,
        explanation: 'Over-integration jab individual life ko group ke saamne kamzor kar de, tab Altruistic suicide hota hai.',
      },
    ],
    sections: [
      {
        block: {
          blockType: 'blogCallout',
          variant: 'tip',
          title: 'Ek line me',
          body: 'Durkheim ne prove kiya ki **Sociology psychology nahi hai** — jo chiz sabse personal lagti hai (Suicide), uske peeche bhi **Social Integration** aur **Social Regulation** ke patterns kaam karte hain.',
        },
      },
      {
        markdown: `## Social Facts ko "Things" ki tarah dekhna\n\n*The Rules of Sociological Method* (1895) mein **Émile Durkheim** ne sociology ko ek independent science banaya. Unke mutabik social fact woh ways of acting, thinking aur feeling hain jo individual ke bahar hain aur un par **moral coercion** rakhte hain.\n\n- **Material Social Facts:** Law, architecture, population density.\n- **Non-material Social Facts:** Morality, collective conscience, religious norms.`,
      },
      {
        block: {
          blockType: 'compare',
          leftTitle: 'Integration Axis (Belonging)',
          rightTitle: 'Regulation Axis (Norms & Limits)',
          rows: [
            { aspect: 'Too Low', left: 'Egoistic Suicide (weak social ties)', right: 'Anomic Suicide (normlessness in crisis/boom)' },
            { aspect: 'Too High', left: 'Altruistic Suicide (group over self)', right: 'Fatalistic Suicide (excessive control/oppression)' },
          ],
        },
      },
      {
        markdown: `## Contemporary India & Critiques\n\n- **Student & Farmer Suicides:** Kota mein student suicides **anomic + egoistic** pressures dikhate hain, jabki agrarian distress mein unexpected market shocks anomie paida karte hain.\n- **Interpretivist Critique:** **J. D. Douglas** ne kaha ki Durkheim ne coroners ke statistics ko bina question kiye sach maan liya, jabki families stigma ke dar se suicide ko accident report karwati hain.\n- **Max Weber:** Social action bina *Verstehen* (actor ke subjective meaning) ko samjhe adhura hai.`,
      },
      {
        block: {
          blockType: 'answerBox',
          intro: 'Durkheim ke sawaal mein 2x2 matrix (Integration vs Regulation) banana aapko turant extra marks dilata hai.',
          points: [
            { text: 'Define Social Fact via Exteriority and Constraint (1895) and explain Sui Generis social reality.' },
            { text: 'Present the 4 suicide types clearly with contemporary Indian examples (farmer distress, Kota, cyber isolation).' },
            { text: 'Evaluate with J.D. Douglas (social construction of statistics) and Merton (anomie reformulated as strain).' },
          ],
          conclusion: 'Critiques ke bawajood Durkheim ka structural method aaj bhi quantitative aur public-health sociology ki neev hai.',
        },
      },
    ],
  },
]
