import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Non-positivist methodologies reject treating conscious human beings like mechanical matter, exploring instead how actors interpret symbols, stage everyday impressions, classify lifeworlds through phenomenology, and construct fragile social order through ethnomethodology.'

const mindMap: MindMapData = {
  title: 'Unit 2.5 · Non-Positivist Methodologies',
  center: 'Non-Positivist Inquiry',
  subtitle: 'Verstehen • Symbolic Interaction & Dramaturgy • Phenomenology & Ethnomethodology',
  branches: [
    {
      title: 'Interpretive Foundation & Interactionism',
      color: 'lavender',
      thinkers: ['Max Weber', 'G.H. Mead', 'Herbert Blumer', 'Anthony Giddens'],
      points: [
        'Weber: conscious meaning, Verstehen & Ideal Types reject mechanical physics copy',
        'Matter vs Human: fire or a shove triggers varied meanings, never one equation',
        'Mead & Blumer: shared symbols (coffee, rings, flags) shape self and action',
        'Giddens Double Hermeneutic: scholars interpret lay meanings, reshaping society',
      ],
    },
    {
      title: 'Goffman: Dramaturgy & Emotional Scripts',
      color: 'yellow',
      thinkers: ['Erving Goffman', 'Arlie Hochschild', 'C.H. Cooley'],
      points: [
        'Everyday life as theatre: status is character part, role is script, dress is prop',
        'Front Stage: impression management before audience (interviews, classrooms)',
        'Back Stage: private solitude or close kin where masks drop & roles are rehearsed',
        'Hochschild extension: flight-attendant smiles as commercial emotional labour',
      ],
    },
    {
      title: 'Phenomenology: Husserl & Schutz',
      color: 'mint',
      thinkers: ['Edmund Husserl', 'Alfred Schutz', 'Peter Berger', 'Aaron Cicourel'],
      points: [
        'Green-leaves analogy: no pure external reality apart from human perception',
        'Intersubjectivity: shared common-sense stock builds stable classroom/street life',
        'Typifications: language categories ("dog", "delinquent", third gender) guide action',
        'Cicourel: juvenile delinquency stats mirror officials’ stereotypes, not raw crime',
      ],
    },
    {
      title: 'Ethnomethodology & Assessment',
      color: 'pink',
      thinkers: ['Harold Garfinkel', 'J.M. Atkinson', 'Émile Durkheim'],
      points: [
        'Indexicality ("looking nice" shifts by speaker) + Reflexivity (random Yes/No test)',
        'Breaching tests (supermarket haggling, lodger at home) reveal fragile moral rules',
        'Atkinson: coroners construct suicide verdicts via hanging, note, age & stigma',
        'Verdict: supreme qualitative validity; weaker reliability & macro-power reach',
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
      'While Post-Positivism revises scientific testing rules, Non-Positivist interpretive traditions step inside human consciousness, everyday theatre, and common-sense order-making.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 2 Visual 01',
  },
  {
    kind: 'md',
    body: `## Understanding the Non-Positivist Umbrella

Whenever students hear "non-positivism", they often lump everything into one basket. In reality, ==Non-Positivism== is a broad umbrella covering any tradition rejecting classical Comtean positivism — dividing into **Post-Positivism** (Popper and Kuhn reforming scientific logic) and **Anti-Positivism / Interpretivism**, which insists social reality cannot be studied like inanimate nature because humans act through consciousness, symbols, and subjective meanings.

Picture two scenes side by side: if you hold a plastic pen over a flame, it melts mechanically every time; if humans encounter fire, some kneel reverently before a sacred ritual *havan*, others cook dinner, and others sprint for fire extinguishers. Four major interpretive methodologies unpack this human world of meaning.

## 1. Weber’s Interpretive Sociology and Symbolic Interactionism

[[thinker:Max Weber]] launched non-positivist sociology by defining the discipline as an effort to interpret social action empathetically and explain its course. Instead of treating caste, bureaucracy, or capitalism as giant machines controlling helpless puppets, Weber insisted every institution emerges from meaningful individual actions. To study them rigorously without collapsing into guesswork, Weber paired ==Verstehen== (stepping imaginatively into the actor’s shoes to grasp inner motives) with ==Ideal Types== (sharp analytical yardsticks) and causal checking.

Extending this insight to everyday encounters, [[thinker:G.H. Mead]] and [[thinker:Herbert Blumer]] founded ==Symbolic Interactionism==. Humans do not respond to raw biological urges or external structures automatically; they interact through shared symbols whose meanings shift inside conversation. [[eg:Morning coffee is biologically caffeine, yet symbolically signals workplace focus or café prestige; similarly, two people living together become "married" only through shared cultural symbols like wedding rings, sindoor, mangalsutra, and invitation cards, while unfurling versus burning a national flag triggers opposite moral emotions.]]

## 2. Erving Goffman’s Dramaturgy: Everyday Life as Theatre

Have you ever joked loudly with hostel friends, only to freeze into a respectful, straight-faced posture the instant your parents or a strict professor walked through the door? Extending interactionism in *The Presentation of Self in Everyday Life*, [[thinker:Erving Goffman]] compared everyday social life to a stage play (**Dramaturgy**), showing how actively people manage others’ impressions rather than acting like pre-programmed robots.

- **Stage, Script & Props:** A social status (doctor, UPSC aspirant, parent) resembles a character part, while role expectations supply the script; dress, accent, stethoscopes, textbooks, and smartphones serve as physical and symbolic **props**.
- **Front Stage vs Back Stage:** On the ==Front Stage== — a job interview board, college classroom, or curated Instagram profile — actors consciously perform ==Impression Management==, adjusting tone and posture to audience feedback. In the ==Back Stage== — alone in one’s room or relaxed with intimate family — masks come off, props rest aside, and actors rehearse future roles through socialisation.
- **Emotional Labour Extension:** Sociologist [[thinker:Arlie Hochschild]] extended Goffman by studying airline flight attendants: their warm cabin smile is not spontaneous joy, but commercially scripted **emotional labour** involving both surface and deep acting. [[trap:Critics note dramaturgy can portray people as overly calculating performers while overlooking deep structural constraints like caste stigma or wage poverty.]]

## 3. Phenomenology: Alfred Schutz, Typifications, and Intersubjectivity

Originating with philosopher [[thinker:Edmund Husserl]] and adapted into sociology by [[thinker:Alfred Schutz]], ==Phenomenology== goes even further than Weber by questioning whether an objective social reality exists "out there" independent of human perception. Consider green leaves on a mango tree: leaves are not absolutely green in physics; they look green only because human retinal cones filter light wavelengths, whereas a bat or cat senses that same tree quite differently.

If every individual has a unique mind and biography, why doesn’t social communication collapse into total chaos? Schutz identified two collective anchors:

- **Intersubjectivity & Stock of Knowledge:** Through language, community members build a shared common-sense pool (**intersubjectivity**) — an agreed "shared illusion" of reality. [[eg:Classrooms work smoothly only because thirty students and one lecturer intersubjectively recognise the room as a sociology lecture rather than a railway ticket counter.]]
- **Typifications:** Because sensory experience is overwhelming, humans file people and things into cultural categories called ==Typifications==. Diverse animals from tiny Pomeranians to fierce Rottweilers share barking and tails, so we label them all "dog"; similarly, societies typify "normal", "crime", "teacher", or expand binary gender classifications to recognise third genders.
- **Critique of Official Statistics:** Studies by [[thinker:Aaron Cicourel]] showed juvenile delinquency rates do not reflect raw youth crime, but police officers’ and judges’ mental stereotypes of a "typical delinquent" — [[eg:much like debates in India over how officials classify "unlawful" messages under IT Rules or interpret shifting PLFS unemployment categories]].

## 4. Harold Garfinkel’s Ethnomethodology: Unmasking Everyday Order

Taking phenomenology straight into live experiments, [[thinker:Harold Garfinkel]] coined ==Ethnomethodology== (*ethnos* = people, *method* = practical techniques, *logy* = study) to investigate the hidden everyday methods ordinary people use to sustain an orderly world. Rather than assuming social norms govern us effortlessly, Garfinkel uncovered three striking mechanisms:

- **Indexicality:** No word, smile, or gesture holds one fixed standalone meaning; every expression depends totally on context. [[eg:Hearing "You are looking very nice today" feels flattering from an old crush, deeply sarcastic from a classroom bully, and affectionate from a parent.]]
- **Reflexivity & Random Counselling:** Humans fiercely crave order and actively weave coherent logic into ambiguous talk (**reflexivity**). In Garfinkel’s famous telephone counselling test, students asked personal advice while a hidden machine replied strictly with **random "Yes" or "No"** answers — yet students walked away praising the "psychologist’s" deep wisdom, connecting random dots themselves!
- **Breaching Experiments:** To prove fragile social order is actively performed minute by minute, Garfinkel sent students to violate unspoken rules — [[eg:bargaining aggressively over biscuit prices at a fixed-price supermarket, behaving like polite paying guests inside their own parents’ home, or standing backwards inside an elevator]]. Victims grew visibly anxious or angry and scrambled to restore normalcy, exposing how relentlessly ordinary people construct order.
- **Atkinson vs Durkheim on Suicide:** Challenging Durkheim’s positivist suicide tables, ethnomethodologist [[thinker:J.M. Atkinson]] studied coroners’ courts and showed "suicide" is a **negotiated verdict** built on common-sense cues: prior depression, a handwritten note, hanging or poisoning rather than a suspicious gunshot, locked indoor rooms rather than highways, age (an 80-year-old death is presumed natural vs a 30-year-old’s), and family efforts to avoid social stigma.

## Double Hermeneutic and Balanced Appraisal

Finally, [[thinker:Anthony Giddens]] highlighted the ==Double Hermeneutic== separating human sciences from physics: sociologists interpret actors’ already-meaningful worlds (for instance, interpreting why a young woman touches her elder’s feet via functionalist respect or feminist patriarchy), and sociological concepts like *identity*, *sanskritisation*, or *stigma* circulate back into public speech to transform how people live. While non-positivist traditions deliver unrivalled **validity** on lived consciousness and agency, balancing them with macro surveys prevents overlooking state power, class exploitation, and demographic trends.

| Tradition | Key Thinkers | Core Methodological Lens | Strengths & Limitations |
| --- | --- | --- | --- |
| Interpretive Sociology | Max Weber | Verstehen + Ideal Types + causal adequacy | Links meaning & structure; risks type rigidity |
| Symbolic Interactionism | G.H. Mead, Herbert Blumer | Shared symbols, self & ongoing interaction | Captures agency; misses macro state & class |
| Dramaturgy | Erving Goffman, A. Hochschild | Front/back stage & impression management | Vivid micro insight; portrays overly cynical self |
| Phenomenology | E. Husserl, Alfred Schutz | Lifeworld, intersubjectivity & typifications | Exposes hidden categories; neglects power inequality |
| Ethnomethodology | Harold Garfinkel, J.M. Atkinson | Indexicality, reflexivity & breaching tests | Deconstructs official stats; low statistical reliability |`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1904–1922',
        title: 'Max Weber — Verstehen & Social Action',
        text: 'Defined sociology as interpretive understanding of meaningful social action paired with Ideal Types.',
      },
      {
        year: '1932–1934',
        title: 'Alfred Schutz & G.H. Mead',
        text: 'Schutz mapped phenomenology of the lifeworld; Mead founded symbolic interactionism of self and symbols.',
      },
      {
        year: '1959',
        title: 'Erving Goffman — Presentation of Self',
        text: 'Launched dramaturgical analysis of front stage, back stage, props, and impression management.',
      },
      {
        year: '1967–1969',
        title: 'Garfinkel & Blumer',
        text: 'Garfinkel published Studies in Ethnomethodology (breaching, indexicality); Blumer codified Symbolic Interactionism.',
      },
      {
        year: '1978–1984',
        title: 'J.M. Atkinson & Anthony Giddens',
        text: 'Atkinson deconstructed suicide statistics; Giddens formulated Double Hermeneutic and Structuration.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Indexical Context', text: 'Gestures and words carry fluid meaning inside specific settings' },
      { label: 'Typification', text: 'Actors classify people and acts using language-learned mental labels' },
      { label: 'Intersubjectivity', text: 'Shared stock of common-sense assumptions enables smooth coordination' },
      { label: 'Front/Back Staging', text: 'Individuals manage impressions using props and audience cues' },
      { label: 'Reflexive Order', text: 'Conversation and negotiation continually repair a stable social world' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Positivist Study of Suicide (Durkheim)',
    rightTitle: 'Ethnomethodological Critique (J.M. Atkinson)',
    rows: [
      {
        aspect: 'Status of Official Stats',
        left: 'Objective social facts measuring real structural suicide rates',
        right: 'Socially constructed verdicts produced by coroners and police',
      },
      {
        aspect: 'Sociological Question',
        left: 'Why do integration and regulation alter group suicide rates?',
        right: 'What common-sense methods do officials use to label a death suicide?',
      },
      {
        aspect: 'Role of Family & Stigma',
        left: 'Treated as background noise outside causal statistical rates',
        right: 'Active negotiations by families shape whether suicide is recorded',
      },
      {
        aspect: 'Key Evidence Cues',
        left: 'Comparative demographic tables across religion, marriage, crisis',
        right: 'Depression history, suicide note, hanging vs gunshot, locked room, age',
      },
      {
        aspect: 'Theoretical Takeaway',
        left: 'Macro social forces constrain private acts externally',
        right: 'Social order and "facts" are everyday interpretive accomplishments',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Verstehen',
    meaning:
      'Max Weber’s method of empathetic interpretive understanding in which a sociologist steps imaginatively into the actor’s context to grasp the subjective meaning behind social action.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'Dramaturgy & Impression Management',
    meaning:
      'Erving Goffman’s perspective viewing everyday life as theatrical performance across Front Stage (controlled impression using props) and Back Stage (private relaxation and mask removal).',
  },
  {
    kind: 'keyTerm',
    term: 'Typification & Intersubjectivity',
    meaning:
      'Alfred Schutz’s phenomenological terms describing how people use shared cultural categories and common-sense pools of knowledge to experience an orderly shared reality.',
  },
  {
    kind: 'keyTerm',
    term: 'Indexicality & Reflexivity',
    meaning:
      'Harold Garfinkel’s core ethnomethodological concepts showing meanings depend strictly on situational context (indexicality) while actors actively weave coherent order into daily talk (reflexivity).',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'max-weber',
    quote: 'Sociology is a science concerning itself with the interpretive understanding of social action.',
    context: 'Foundational opening definition in Economy and Society launching the interpretive non-positivist tradition.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2023 & 2017 PYQ Strategy: Keep Vivid Micro-Examples Ready!',
    body: 'Questions on Dramaturgy (2023) and Interpretative Perspective (2017) reward concrete everyday examples over dry jargon. Pair Goffman’s front/back stage with UPSC mock interviews and Arlie Hochschild’s emotional labour; pair Garfinkel with the supermarket breaching test and random Yes/No counselling; and always close by noting macro-structural blind spots (class, caste, state power).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Blurring Phenomenology With Ethnomethodology',
    body: 'Students frequently treat Schutz and Garfinkel as identical. Keep them crisp: Phenomenology (Schutz) studies how human consciousness mentally classifies the lifeworld via typifications and intersubjectivity, whereas Ethnomethodology (Garfinkel) empirically observes the practical conversational methods and breaching repairs people use in real interactions.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: '5-School Non-Positivist Ladder (V-S-D-P-E)',
    body: 'Remember all five micro-interpretive strands in exact order using V-S-D-P-E: Verstehen (Weber), Symbolic Interactionism (Mead & Blumer), Dramaturgy (Goffman), Phenomenology (Husserl & Schutz), and Ethnomethodology (Garfinkel & Atkinson).',
  },
  {
    kind: 'answerBox',
    intro:
      'Non-positivist methodologies shift sociology from observing external behavioural patterns to decoding how conscious human actors create meaning, perform roles, and build fragile social order.',
    points: [
      'Weber’s Verstehen: Bridges interpretive understanding of subjective motives with analytical Ideal Types and causal adequacy.',
      'Symbolic Interactionism & Dramaturgy: Mead, Blumer, and Goffman trace how shared symbols, front/back stages, and Hochschild’s emotional labour shape everyday interaction.',
      'Phenomenology (Husserl, Schutz): Demonstrates that reality rests on intersubjectivity and language-transmitted typifications rather than raw external facts.',
      'Ethnomethodology (Garfinkel, Atkinson): Exposes indexicality, reflexivity, and negotiated official verdicts behind seemingly hard suicide or crime data.',
      'Critical balance: While unmatched in qualitative validity, non-positivist strands suffer weaker reliability and neglect macro structures unless paired with surveys and political economy.',
    ],
    conclusion:
      'Non-positivist methodologies restore human consciousness, creativity, and everyday agency to the heart of sociological analysis.',
  },
]

export const topic5En: TopicLangContent = {
  summary,
  mindMap,
  sections,
}