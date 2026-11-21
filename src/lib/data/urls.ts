export const urls = {
  caHub: () => '/current-affairs',
  issue: (date: string) => `/current-affairs/${date}`,
  article: (date: string, slug: string) => `/current-affairs/${date}/${slug}`,
  paper: (paper: string) => `/syllabus/${paper}`,
  unit: (paper: string, unit: string) => `/syllabus/${paper}/${unit}`,
  topic: (paper: string, unit: string, topic: string) => `/syllabus/${paper}/${unit}/${topic}`,
  thinker: (slug: string) => `/thinkers/${slug}`,
}
