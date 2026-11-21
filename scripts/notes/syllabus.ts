/**
 * Official UPSC Sociology Optional syllabus (public UPSC text), in exam order.
 * Paper 2's A/B/C sections are flattened into numbered units (A-i = 1 … C-vii = 15);
 * `section` keeps the original label for display.
 * Slugs that already exist in the DB are reused on purpose (see `existing` notes) so nothing is duplicated.
 */

export type SyllabusTopic = { slug: string; title: string }
export type SyllabusUnit = { slug: string; title: string; section?: string; topics: SyllabusTopic[] }
export type SyllabusPaper = { code: 'P1' | 'P2'; units: SyllabusUnit[] }

const t = (slug: string, title: string): SyllabusTopic => ({ slug, title })

export const SYLLABUS: SyllabusPaper[] = [
  {
    code: 'P1',
    units: [
      {
        slug: 'sociology-the-discipline', // existing
        title: 'Sociology – The Discipline',
        topics: [
          t('modernity-and-emergence-of-sociology', 'Modernity, social change in Europe and the emergence of Sociology'), // existing (batch 1)
          t('scope-and-other-social-sciences', 'Scope of Sociology and comparison with other social sciences'), // existing
          t('sociology-and-common-sense', 'Sociology and common sense'), // existing
        ],
      },
      {
        slug: 'sociology-as-science', // existing (batch 1)
        title: 'Sociology as Science',
        topics: [
          t('science-and-scientific-method', 'Science, scientific method and its critique'),
          t('theoretical-strands-of-methodology', 'Major theoretical strands of research methodology'),
          t('positivism-and-its-critique', 'Positivism and its critique'),
          t('fact-value-and-objectivity', 'Fact, value and objectivity'),
          t('non-positivist-methodologies', 'Non-positivist methodologies'),
        ],
      },
      {
        slug: 'research-methods', // existing
        title: 'Research Methods and Analysis',
        topics: [
          t('qualitative-and-quantitative-methods', 'Qualitative and quantitative methods'),
          t('techniques-of-data-collection', 'Techniques of data collection'),
          t('variables-sampling-hypothesis-reliability-validity', 'Variables, sampling, hypothesis, reliability and validity'),
        ],
      },
      {
        slug: 'sociological-thinkers', // existing
        title: 'Sociological Thinkers',
        topics: [
          t('karl-marx-historical-materialism', 'Karl Marx: historical materialism, mode of production, alienation, class struggle'),
          t('emile-durkheim-social-fact-suicide', 'Émile Durkheim: division of labour, social fact, suicide, religion and society'),
          t('max-weber-social-action-bureaucracy', 'Max Weber: social action, ideal types, authority, bureaucracy, Protestant ethic'),
          t('talcott-parsons-social-system', 'Talcott Parsons: social system, pattern variables'),
          t('robert-merton-functions-deviance', 'Robert K. Merton: latent and manifest functions, conformity and deviance, reference groups'),
          t('mead-self-and-identity', 'G.H. Mead: self and identity'),
        ],
      },
      {
        slug: 'stratification-and-mobility', // existing
        title: 'Stratification and Mobility',
        topics: [
          t('equality-inequality-hierarchy-exclusion', 'Concepts: equality, inequality, hierarchy, exclusion, poverty and deprivation'),
          t('theories-of-stratification', 'Theories of social stratification: structural-functionalist, Marxist, Weberian'), // existing (seed)
          t('dimensions-of-stratification', 'Dimensions: class, status groups, gender, ethnicity and race'),
          t('social-mobility', 'Social mobility: open and closed systems, types, sources and causes'),
        ],
      },
      {
        slug: 'works-and-economic-life',
        title: 'Works and Economic Life',
        topics: [
          t('social-organisation-of-work', 'Social organisation of work: slave, feudal and industrial-capitalist society'),
          t('formal-and-informal-organisation-of-work', 'Formal and informal organisation of work'),
          t('labour-and-society', 'Labour and society'),
        ],
      },
      {
        slug: 'politics-and-society',
        title: 'Politics and Society',
        topics: [
          t('sociological-theories-of-power', 'Sociological theories of power'),
          t('power-elite-bureaucracy-pressure-groups', 'Power elite, bureaucracy, pressure groups and political parties'),
          t('nation-state-citizenship-democracy', 'Nation, state, citizenship, democracy, civil society, ideology'),
          t('protest-social-movements-revolution', 'Protest, agitation, social movements, collective action, revolution'),
        ],
      },
      {
        slug: 'religion-and-society',
        title: 'Religion and Society',
        topics: [
          t('sociological-theories-of-religion', 'Sociological theories of religion'),
          t('types-of-religious-practices', 'Types of religious practices: animism, monism, pluralism, sects, cults'),
          t('religion-in-modern-society', 'Religion in modern society: science, secularisation, revivalism, fundamentalism'),
        ],
      },
      {
        slug: 'systems-of-kinship',
        title: 'Systems of Kinship',
        topics: [
          t('family-household-marriage', 'Family, household, marriage'),
          t('types-and-forms-of-family', 'Types and forms of family'),
          t('lineage-and-descent', 'Lineage and descent'),
          t('patriarchy-and-sexual-division-of-labour', 'Patriarchy and sexual division of labour'),
          t('contemporary-trends-in-kinship', 'Contemporary trends'),
        ],
      },
      {
        slug: 'social-change-in-modern-society',
        title: 'Social Change in Modern Society',
        topics: [
          t('theories-of-social-change', 'Sociological theories of social change'),
          t('development-and-dependency', 'Development and dependency'),
          t('agents-of-social-change', 'Agents of social change'),
          t('education-and-social-change', 'Education and social change'),
          t('science-technology-and-social-change', 'Science, technology and social change'),
        ],
      },
    ],
  },
  {
    code: 'P2',
    units: [
      {
        slug: 'perspectives-on-indian-society',
        title: 'Perspectives on the study of Indian society',
        section: 'A · Introducing Indian Society',
        topics: [
          t('indology-gs-ghurye', 'Indology (G.S. Ghurye)'),
          t('structural-functionalism-mn-srinivas', 'Structural functionalism (M.N. Srinivas)'),
          t('marxist-sociology-ar-desai', 'Marxist sociology (A.R. Desai)'),
        ],
      },
      {
        slug: 'impact-of-colonial-rule',
        title: 'Impact of colonial rule on Indian society',
        section: 'A · Introducing Indian Society',
        topics: [
          t('social-background-of-indian-nationalism', 'Social background of Indian nationalism'),
          t('modernization-of-indian-tradition', 'Modernization of Indian tradition'),
          t('protests-and-movements-colonial-period', 'Protests and movements during the colonial period'),
          t('social-reforms', 'Social reforms'),
        ],
      },
      {
        slug: 'rural-and-agrarian-social-structure',
        title: 'Rural and Agrarian Social Structure',
        section: 'B · Social Structure',
        topics: [
          t('indian-village-and-village-studies', 'The idea of Indian village and village studies'),
          t('agrarian-social-structure-land-reforms', 'Agrarian social structure: land tenure system, land reforms'),
        ],
      },
      {
        slug: 'caste-system', // existing
        title: 'Caste System',
        section: 'B · Social Structure',
        topics: [
          t('perspectives-on-caste', 'Perspectives on the study of caste: Ghurye, Srinivas, Dumont, Béteille'), // existing (seed)
          t('features-of-caste-system', 'Features of caste system'),
          t('untouchability-forms-and-perspectives', 'Untouchability: forms and perspectives'),
        ],
      },
      {
        slug: 'tribal-communities-in-india',
        title: 'Tribal communities in India',
        section: 'B · Social Structure',
        topics: [
          t('tribes-definitional-problems', 'Definitional problems'),
          t('tribes-geographical-spread', 'Geographical spread'),
          t('colonial-policies-and-tribes', 'Colonial policies and tribes'),
          t('tribal-integration-and-autonomy', 'Issues of integration and autonomy'),
        ],
      },
      {
        slug: 'social-classes-in-india',
        title: 'Social Classes in India',
        section: 'B · Social Structure',
        topics: [
          t('agrarian-class-structure', 'Agrarian class structure'),
          t('industrial-class-structure', 'Industrial class structure'),
          t('middle-classes-in-india', 'Middle classes in India'),
        ],
      },
      {
        slug: 'kinship-in-india',
        title: 'Systems of Kinship in India',
        section: 'B · Social Structure',
        topics: [
          t('lineage-and-descent-in-india', 'Lineage and descent in India'),
          t('types-of-kinship-systems', 'Types of kinship systems'),
          t('family-and-marriage-in-india', 'Family and marriage in India'),
          t('household-dimensions-of-family', 'Household dimensions of the family'),
          t('patriarchy-entitlements-division-of-labour', 'Patriarchy, entitlements and sexual division of labour'),
        ],
      },
      {
        slug: 'religion-and-society-india',
        title: 'Religion and Society (India)',
        section: 'B · Social Structure',
        topics: [
          t('religious-communities-in-india', 'Religious communities in India'),
          t('problems-of-religious-minorities', 'Problems of religious minorities'),
        ],
      },
      {
        slug: 'visions-of-social-change-in-india',
        title: 'Visions of Social Change in India',
        section: 'C · Social Changes in India',
        topics: [
          t('development-planning-mixed-economy', 'Idea of development planning and mixed economy'),
          t('constitution-law-and-social-change', 'Constitution, law and social change'),
          t('education-and-social-change-india', 'Education and social change'),
        ],
      },
      {
        slug: 'rural-and-agrarian-transformation',
        title: 'Rural and Agrarian transformation in India',
        section: 'C · Social Changes in India',
        topics: [
          t('rural-development-programmes', 'Rural development programmes: CDP, cooperatives, poverty alleviation schemes'),
          t('green-revolution-and-social-change', 'Green revolution and social change'),
          t('changing-modes-of-production-agriculture', 'Changing modes of production in Indian agriculture'),
          t('rural-labour-bondage-migration', 'Problems of rural labour, bondage, migration'),
        ],
      },
      {
        slug: 'industrialization-and-urbanisation',
        title: 'Industrialization and Urbanisation in India',
        section: 'C · Social Changes in India',
        topics: [
          t('evolution-of-modern-industry', 'Evolution of modern industry in India'),
          t('growth-of-urban-settlements', 'Growth of urban settlements in India'),
          t('working-class-in-india', 'Working class: structure, growth, class mobilization'),
          t('informal-sector-child-labour', 'Informal sector, child labour'),
          t('slums-and-urban-deprivation', 'Slums and deprivation in urban areas'),
        ],
      },
      {
        slug: 'politics-and-society-india',
        title: 'Politics and Society (India)',
        section: 'C · Social Changes in India',
        topics: [
          t('nation-democracy-citizenship-india', 'Nation, democracy and citizenship'),
          t('political-parties-pressure-groups-elite', 'Political parties, pressure groups, social and political elite'),
          t('regionalism-and-decentralization', 'Regionalism and decentralization of power'),
          t('secularization-india', 'Secularization'),
        ],
      },
      {
        slug: 'social-movements-in-modern-india',
        title: 'Social Movements in Modern India',
        section: 'C · Social Changes in India',
        topics: [
          t('peasants-and-farmers-movements', 'Peasants and farmers movements'),
          t('womens-movement', "Women's movement"),
          t('backward-classes-and-dalit-movement', 'Backward classes and Dalit movement'),
          t('environmental-movements', 'Environmental movements'),
          t('ethnicity-and-identity-movements', 'Ethnicity and identity movements'),
        ],
      },
      {
        slug: 'population-dynamics',
        title: 'Population Dynamics',
        section: 'C · Social Changes in India',
        topics: [
          t('population-size-growth-composition', 'Population size, growth, composition and distribution'),
          t('components-of-population-growth', 'Components of population growth: birth, death, migration'),
          t('population-policy-family-planning', 'Population policy and family planning'),
          t('emerging-population-issues', 'Emerging issues: ageing, sex ratios, child and infant mortality, reproductive health'),
        ],
      },
      {
        slug: 'challenges-of-social-transformation',
        title: 'Challenges of Social Transformation',
        section: 'C · Social Changes in India',
        topics: [
          t('crisis-of-development-displacement', 'Crisis of development: displacement, environmental problems and sustainability'),
          t('poverty-deprivation-inequalities', 'Poverty, deprivation and inequalities'),
          t('violence-against-women', 'Violence against women'),
          t('caste-conflicts', 'Caste conflicts'),
          t('ethnic-conflicts-communalism', 'Ethnic conflicts, communalism, religious revivalism'),
          t('illiteracy-and-educational-disparities', 'Illiteracy and disparities in education'),
        ],
      },
    ],
  },
]

/** Legacy seed unit whose only topic is not an official sub-topic; kept, but sorted last. */
export const LEGACY_UNIT_SLUGS = ['social-change-modern-india']

export const countTopics = (): number => SYLLABUS.reduce((n, p) => n + p.units.reduce((m, u) => m + u.topics.length, 0), 0)
