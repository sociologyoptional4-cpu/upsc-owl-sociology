/** Ready-made post skeletons: Markdown sections + blog blocks with Hinglish placeholders. Drafts only. */

export type TemplateKey = 'concept' | 'thinker' | 'pyq' | 'answer'
export type Segment = { md: string } | { block: string; fields: Record<string, unknown> }

const P = (text: string) => `[${text}]`

export const TEMPLATE_LABELS: Record<TemplateKey, string> = {
  concept: 'Concept explainer',
  thinker: 'Thinker profile',
  pyq: 'PYQ analysis',
  answer: 'Answer-writing guide',
}

export const TEMPLATES: Record<TemplateKey, Segment[]> = {
  concept: [
    { md: `${P('2-3 line mein concept kya hai, simple Hinglish mein')}\n\n## Definition\n${P('Standard definition + kis thinker ne diya')}\n\n## Samjho example se\n${P('Ek Indian example: gaon, sheher, family, caste ya khabar se')}` },
    { block: 'compare', fields: { leftTitle: P('Concept A'), rightTitle: P('Concept B'), rows: [{ aspect: P('Basis'), left: P('A kya kehta hai'), right: P('B kya kehta hai') }] } },
    { md: `## Critique\n${P('Kaun is concept ki aalochna karta hai aur kyun')}` },
    { block: 'blogCallout', fields: { variant: 'galtiMat', title: 'Galti mat karo', body: P('Students yahan kya confuse karte hain') } },
    { block: 'answerBox', fields: { intro: P('Answer ka intro: definition + context'), points: [{ text: P('Point 1 + thinker') }, { text: P('Point 2 + Indian example') }], conclusion: P('Balanced conclusion') } },
  ],
  thinker: [
    { md: `${P('Thinker kaun the, kis daur aur school se')}\n\n## Mukhya vichaar\n${P('3-4 key ideas, har ek 2 line mein')}` },
    { block: 'keyTerm', fields: { term: P('Key term'), meaning: P('Term ka matlab, thinker ke shabdon mein nahi, apne shabdon mein') } },
    { block: 'timeline', fields: { items: [{ year: P('Saal'), title: P('Kitab ya ghatna'), text: P('Kyun zaroori') }] } },
    { md: `## Aaj ke India mein\n${P('Is thinker ke idea ko aaj ki ek khabar se jodo')}\n\n## Critique\n${P('Kaun aur kyun aalochna karta hai')}` },
    { block: 'blogCallout', fields: { variant: 'upscAngle', title: 'UPSC angle', body: P('Kaun se PYQ is thinker se aaye, kaise use karein') } },
  ],
  pyq: [
    { md: `## Sawal\n${P('PYQ yahan likho (saal, marks)')}\n\n## Sawal kya maang raha hai\n${P('Directive word (critically examine, discuss...) ka matlab')}` },
    { block: 'flow', fields: { direction: 'horizontal', steps: [{ label: 'Intro', text: P('Kya likhna') }, { label: 'Body', text: P('2-3 dimensions') }, { label: 'Conclusion', text: P('Way forward') }] } },
    { block: 'answerBox', fields: { intro: P('Model intro'), points: [{ text: P('Dimension 1 + thinker') }, { text: P('Dimension 2 + data/example') }, { text: P('Counter view') }], conclusion: P('Model conclusion') } },
    { block: 'blogCallout', fields: { variant: 'tip', title: 'Marks kahan milte hain', body: P('Examiner kya dekhta hai') } },
  ],
  answer: [
    { md: `${P('Is guide se student kya seekhega')}\n\n## Structure\n${P('150/250 words ke answer ka dhaancha')}` },
    { block: 'flow', fields: { direction: 'vertical', steps: [{ label: 'Intro (2-3 lines)', text: P('Definition ya context') }, { label: 'Body', text: P('Thinkers + examples + data') }, { label: 'Conclusion', text: P('Balanced, aage ka rasta') }] } },
    { block: 'blogCallout', fields: { variant: 'yaadRakho', title: 'Yaad rakho', body: P('3 cheezein jo har answer mein honi chahiye') } },
    { md: `## Common galtiyan\n${P('Galti 1, Galti 2, Galti 3')}` },
    { block: 'answerBox', fields: { intro: P('Sample intro'), points: [{ text: P('Sample point') }], conclusion: P('Sample conclusion') } },
  ],
}
