import type { NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic6MindMapEn } from './topic-6-mindmaps'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u04-02-parsons-merton-mead.webp',
    alt: 'Paper 1 Unit 4 poster summarizing Talcott Parsons AGIL pattern variables, Robert K Merton 5 strain modes, and GH Mead Preparatory Play Game stages',
    caption:
      'G.H. Mead reversed classical psychology by proving that our inner Self and Mind are born inside everyday language, childhood play, and symbolic social interaction.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 4 Visual 02',
  },
  {
    kind: 'md',
    body: `## Who Was G.H. Mead, and Why Is "Myself" Hard to Describe?

Try a simple thought experiment: writing three paragraphs about your best friend or a national leader feels effortless, yet writing honestly about "Myself" suddenly makes most people pause. Why is it so tricky to step outside your own skin and judge yourself as if you were someone else? Chicago philosopher-sociologist George Herbert Mead dedicated his career to explaining this unique human miracle—how social interaction gives birth to the ==Self==.

Teaching at the University of Chicago during the early twentieth century without publishing a single book himself, Mead’s lecture notes were compiled posthumously by students into *Mind, Self, and Society* (1934), and his pupil [[thinker:Herbert Blumer]] coined the school’s name: ==Symbolic Interactionism==. Against [[thinker:Émile Durkheim]]’s external social facts and Talcott Parsons’ top-down scripts, Mead built bottom-up **Social Behaviourism**, inspired by [[thinker:Max Weber]]’s focus on subjective meanings and [[thinker:C.H. Cooley]]’s **Looking-Glass Self** (where others’ imagined reactions mirror who we think we are).

## Communication, Significant Symbols, and Reversing Psychology

Traditional psychology assumed an isolated brain first possesses a "Mind," discovers a "Self," and later enters "Society." Mead completely inverted this sequence: **Society (Interaction) -> Self -> Mind**. Without social interaction—as tragically shown in cases of severely isolated children—a human body grows physically yet fails to develop language, self-awareness, or reflective thought.

Why can humans communicate ideas while dogs mostly react instinctively? Mead distinguished two pathways of communication:

- **Unconscious Communication (Conversation of Gestures):** Automatic cues shared with animals—two dogs snarling instinctively, or friends unconsciously tightening their circle when an unwelcome acquaintance walks up.
- **Conscious Communication (Significant Symbols & Language):** Uniquely human gestures, words, or emblems (such as waving hello, the word "mango," or a heart emoji) that evoke the **identical shared meaning** in both sender and receiver.
- **Role-Taking & Reflexivity:** Because we understand shared symbols, we mentally step into another person’s shoes (**Role-Taking**) and view ourselves from outside—making the human Self uniquely both **Subject** (the speaker/thinker) and **Object** (the person being evaluated). Neither stones, pets, nor newborn infants possess this reflexive self at birth.

## Three Stages of Self Development and Gender Identity

Human infants are not born knowing who they are; the Self emerges gradually as children master language and progressively wider ==Role-Taking== across three stages:

- **1. Preparatory Stage (Birth to ~3 Years):** Toddlers mechanically mimic parents’ smiles, frowns, or phone gestures without grasping underlying social meanings—there is pure imitation, not yet a distinct self.
- **2. Play Stage (~3 to 6 Years):** Once language sparks imagination, the child pretends to be one specific **Significant Other** at a time—mother, father, doctor, or teacher. [[eg:Playing ghar-ghar with a doll, scolding or feeding it exactly as mother does, teaches the child to see herself through a single significant caregiver’s eyes.]]
- **3. Game Stage (~6 Years Onwards):** Entering school brings complex, multi-player, rule-bound games like cricket, *kho-kho*, or *chor-police*. To bat or field properly, a child must hold everyone else’s roles (bowler, wicketkeeper, captain, umpire) plus shared rules in mind simultaneously—internalising the collective attitude of the ==Generalized Other==. At this stage, full **Selfhood** is attained!

Mead’s framework powerfully explains **Gender Identity Formation** (2014 PYQ): children are not biologically hardwired to prefer pink or blue roles; rather, toddlers absorb parental gender cues (Preparatory), rehearse mothering or breadwinning scripts through dolls, toy kitchens, or cricket bats (Play), and later internalise wider peer, school, and media gender norms as a gendered **Generalized Other** (Game), while still retaining agency to question stereotypes later!

## "I" and "Me": Why We Shape Our Own Socialisation

If society plants the Generalized Other inside us, why are human beings not identical obedient robots? Mead answered through his famous dialectical twin components inside every ==Self==:

| Dimension | The "Me" (Socialised Object) | The "I" (Creative Subject) |
| --- | --- | --- |
| Sociological Source | Internalised expectations of Generalized Others | Spontaneous, novel, impulsive personal response |
| Indian Everyday Echo | Anxiety of *"Char log kya kahenge?"* | Defiant assertion: *"This is who I choose to be"* |
| Cognitive Sequence | Monitors, edits, and channels action socially | Initiates first reaction; known only after acting |
| Impact on Society | Preserves social control, conformity, and predictability | Drives creativity, non-conformity, and social change |

What Mead calls ==Mind== is literally the continuous internal conversation between the impulsive **"I"** and the socialised **"Me"** before we speak or act. [[eg:When a hungry student’s "I" wants to grab a friend’s tiffin or blurt out an angry reply in class, the "Me" weighs peer respect and teacher norms—shaping how the act finally comes out.]] Because adults keep entering new roles (college, job, marriage, parenting) and actively filter competing norms via this inner debate, **"Self and Society are twin-born"** and **"We play a key role in our own socialisation."** Later interactionist [[thinker:Erving Goffman]] extended this into **Dramaturgy**—front-stage impression management versus backstage relaxation.

## Critical Evaluation of Mead’s Symbolic Interactionism

Mead revolutionised sociology by restoring human consciousness, language, and active agency against crude biological determinism and Parsonian "cultural dopes," bridging sociology and social psychology seamlessly. Yet four balanced critiques sharpen any 20-mark UPSC evaluation:

- **Macro-Structural Blind Spot:** [[thinker:Gary Fine]] critiqued symbolic interactionism as apolitical and "astructural"—focusing on face-to-face micro meanings while ignoring coercive class exploitation, caste monopolies, state violence, and economic power.
- **Feminist Critique:** [[thinker:Anne Kaspar]] argued Mead’s unified Generalized Other reflects male public experience better than women’s lives, which endure sharp friction between lived domestic realities and patriarchal cultural expectations.
- **Biological & Unconscious Omissions:** Freudian and Piagetian critics note Mead left the origin of the impulsive "I" unexplained and ignored bodily drives, hormones, and genetics alongside downplaying powerful non-verbal body language (first impressions formed in seconds!).
- **Multiple Selves Nuance:** [[thinker:William James]] pointed out individuals maintain multiple distinct empirical selves (material, social, spiritual) across fragmented circles rather than one unified core. [[link:Link Mead’s active self with Weber’s Verstehen in Unit 4.3 and non-positivist interactionist methods in Unit 2.5.]]`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1902–1922',
        title: 'C.H. Cooley — Looking-Glass Self',
        text: 'Coined the three-step mirror self (appearance -> imagined judgement -> feeling), inspiring Chicago interactionism.',
      },
      {
        year: '1900–1931',
        title: 'Mead’s Chicago Lectures',
        text: 'Developed social behaviourism, role-taking, Play/Game stages, and the dialectical "I" and "Me".',
      },
      {
        year: '1934',
        title: 'Mind, Self, and Society (Posthumous)',
        text: 'Students compiled Mead’s lectures proving interaction generates the Self and reflective Mind.',
      },
      {
        year: '1937–1969',
        title: 'Herbert Blumer — Symbolic Interactionism',
        text: 'Coined the term "Symbolic Interactionism" and codified its three core interpretive premises.',
      },
      {
        year: '1959',
        title: 'Erving Goffman — Dramaturgical Self',
        text: 'Extended Mead into everyday stagecraft, front/back stage, and strategic impression management.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Preparatory (0–3)', text: 'Mechanical imitation of gestures without shared meaning; no Self' },
      { label: 'Play Stage (3–6)', text: 'Language starts; child plays one Significant Other (mother, doctor)' },
      { label: 'Game Stage (6+)', text: 'Multi-player rule-bound games build collective Generalized Other' },
      { label: 'Reflexive Self', text: 'Actor becomes self-conscious Subject ("I") & Object ("Me")' },
      { label: 'Active Mind', text: 'Lifelong inner dialogue reshapes both personal identity and society' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Significant Other (Play Stage)',
    rightTitle: 'Generalized Other (Game Stage)',
    rows: [
      {
        aspect: 'Who It Represents',
        left: 'Specific intimate individuals (mother, father, elder sister)',
        right: 'Organised collective rules and norms of team or wider society',
      },
      {
        aspect: 'Developmental Stage',
        left: 'Play Stage (~3–6 years): single-role make-believe',
        right: 'Game Stage (6+ years): coordinated multi-role team rules',
      },
      {
        aspect: 'Indian Example',
        left: 'Child scolding a doll exactly like her mother scolds',
        right: 'Player anticipating bowler, fielders & LBW rules in gully cricket',
      },
      {
        aspect: 'Outcome for Self',
        left: 'Partial awareness of distinct others’ viewpoints',
        right: 'Full selfhood attained; internalisation of the socialised "Me"',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Significant Symbols',
    meaning:
      'Words, gestures, or signs that carry identical shared meaning for both sender and receiver, enabling conscious human communication and role-taking.',
  },
  {
    kind: 'keyTerm',
    term: 'Role-Taking',
    meaning:
      'Mentally stepping into another person’s perspective to understand intentions and see oneself as others do—the core engine building self-consciousness.',
  },
  {
    kind: 'keyTerm',
    term: 'Generalized Other',
    meaning:
      'Internalised composite of organised roles, rules, and attitudes of a whole group or society acquired during the Game Stage.',
  },
  {
    kind: 'keyTerm',
    term: 'The "I" and the "Me"',
    meaning:
      'Two interacting facets of the Self: "Me" is the conforming internalised socialised self, while "I" is the spontaneous, creative, unpredictable responding self.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2024–2013 PYQ Focus: Direct Conceptual Prompts + Gender Application!',
    body: 'UPSC asks sharply focused questions on Mead: Generalized Other (2024), self-consciousness (2022), "We play a key role in our own socialisation" (2019), "I" and "Me" (2018), "Self and Society are twin-born" (2015), gender identity stages (2014), and Symbolic Interactionism evaluation (2013). Draw the 3-stage flow and "I"/"Me" comparison table cleanly!',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Saying Mead Coined "Symbolic Interactionism" or Ignored Society',
    body: 'Be precise: G.H. Mead called his framework Social Behaviourism—his student Herbert Blumer coined "Symbolic Interactionism" after Mead died. Also, never write that Mead rejected society! His signature claim is that society precedes Mind ("Self and Society are twin-born").',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Mead’s Signature Formulation (Use in Intros!)',
    body: 'Remember Mead’s three-step reversal: Interaction (Society) -> Self -> Mind, and his core axiom: "Self and society are twin-born; we know ourselves only by taking the role of the other." Keep Preparatory (Imitate) -> Play (One Significant Other) -> Game (Many Rules / Generalized Other) crystal sharp.',
  },
  {
    kind: 'answerBox',
    intro:
      'George Herbert Mead anchored Symbolic Interactionism by showing that human self-consciousness, language, and reflective thought emerge dynamically out of social interaction.',
    points: [
      'Reversing psychology: Prioritised Society -> Self -> Mind through shared Significant Symbols and empathetic Role-Taking rather than innate biology.',
      'Developmental stages: Traced self-formation from unmeaning Preparatory mimicry to single-role Play (Significant Others) and rule-bound Game stage (Generalized Other).',
      'Dialectical "I" and "Me": Balanced conforming social expectations ("Me") against spontaneous creative agency ("I") so individuals actively shape their own socialisation.',
      'Applied reach: Illuminates Cooley’s Looking-Glass Self, Goffman’s dramaturgy, and gendered childhood socialisation.',
      'Critical balance: While weak on macro-structural power (Gary Fine), patriarchal tensions (Anne Kaspar), and biological drives, Mead remains vital for explaining human agency.',
    ],
    conclusion:
      'Against rigid determinism, Mead showed human beings are active, symbol-making agents whose identities continually evolve in dialogue with society.',
  },
]

export const topic6En: TopicLangContent = {
  summary:
    'G.H. Mead laid the foundations of Symbolic Interactionism by proving that self-consciousness and reflective thought emerge through language, role-taking across Preparatory–Play–Game stages, and the lifelong dialogue between "I" and "Me".',
  mindMap: topic6MindMapEn,
  sections,
}