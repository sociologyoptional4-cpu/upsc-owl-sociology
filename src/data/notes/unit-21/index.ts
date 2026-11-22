import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1ModernIndustry } from './topic-1'
import { topic2UrbanSettlements } from './topic-2'
import { topic3WorkingClass } from './topic-3'
import { topic4InformalChildLabour } from './topic-4'
import { topic5SlumsDeprivation } from './topic-5'

const unitMindMap: MindMapData = {
  title: 'Paper 2 · Unit 21 — Industrialization and Urbanisation in India',
  center: 'Industry & Urbanisation',
  subtitle: 'Modern Industry • Urban Settlements • Working Class • Informality & Child Labour • Slums',
  branches: [
    {
      title: '21.1 & 21.2 Industry & Urban Settlements',
      color: 'lavender',
      thinkers: ['Dadabhai Naoroji', 'P.C. Mahalanobis', 'Harold Gould', 'M.S.A. Rao'],
      points: [
        'Colonial deindustrialization: Drain Theory, raw-material railway grid, and port enclave capitalism',
        'Nehruvian PSUs: heavy capital goods "temples of modern India" and state capitalism (A.R. Desai)',
        'Urban trajectory: top-heavy Class-I metropolises, distressed rural push, and Census town explosion',
        'Persistence of tradition: rural caste and kinship imprints reproduced inside urban settlements',
      ],
    },
    {
      title: '21.3 The Working Class in India',
      color: 'yellow',
      thinkers: ['B.R. Ambedkar', 'Clark Kerr', 'R.D. Lambert', 'N.R. Sheth'],
      points: [
        'Ambedkar’s lens: caste as a division of labourers; subaltern clustering in hazardous manual work',
        'Committed labour thesis: Lambert and Sheth prove dual factory-rural commitment as rational safety net',
        'Trade union decline: post-1982 Bombay strike collapse, aggressive contractualization, and outsourcing',
        'Neoliberal precarity: COVID-19 migrant exodus and the 2020 Labour Codes easing retrenchment',
      ],
    },
    {
      title: '21.4 Informal Sector & Child Labour',
      color: 'mint',
      thinkers: ['Keith Hart', 'Jan Breman', 'Maria Mies', 'Neera Burra'],
      points: [
        'Breman’s dualism critique: over 90% informal workforce permanently subsidizing formal capital',
        'Distressed rural push: land fragmentation, agrarian crisis, and circular "footloose labour"',
        'Feminization of precarity: housewifization and low piece-rate wages in home-based subcontracting',
        'Neera Burra (*Born to Work*): adult wage depression, debt bondage, and the 2016 Act family loophole',
      ],
    },
    {
      title: '21.5 Slums & Urban Deprivation',
      color: 'pink',
      thinkers: ['Oscar Lewis', 'David Harvey', 'Amita Baviskar', 'Patrick Geddes'],
      points: [
        'Theories of slums: Culture of Poverty (Lewis), Slums of Hope (Stokes), and Planet of Slums (Davis)',
        'Socio-spatial exclusion: tenurial precarity, toxic environmental apartheid, and bourgeois environmentalism',
        'The urban paradox: extreme civic disenfranchisement coexisting with indispensable economic engine',
        'Policy debate: failure of vertical builder towers (SRA) vs community-led in-situ upgradation',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 2 · Unit 21 — Bharat Mein Udyogikaran Aur Sheharikaran',
  center: 'Udyog Aur Sheharikaran',
  subtitle: 'Aadhunik Udyog • Shehari Bastiyan • Shramik Varg • Informal Sector & Bal Shram • Kachhi Bastiyan',
  branches: [
    {
      title: '21.1 Aur 21.2 Udyog Aur Shehari Bastiyan',
      color: 'lavender',
      thinkers: ['Dadabhai Naoroji', 'P.C. Mahalanobis', 'Harold Gould', 'M.S.A. Rao'],
      points: [
        'Colonial deindustrialization: Drain Theory, railway extractivism aur coastal port enclave udyog',
        'Nehruvian PSUs: Mahalanobis heavy capital model, aadhunik Bharat ke mandir aur State Capitalism',
        'Sheharikaran ka naksha: million-plus metros ka bojh, kheti ka distress push aur Census towns ka uday',
        'Parampara ka dohraav: shehar ke andar gaon ke jaati-biradari rishton ka naya sangathan',
      ],
    },
    {
      title: '21.3 Bharat Ka Shramik Varg (Working Class)',
      color: 'yellow',
      thinkers: ['B.R. Ambedkar', 'Clark Kerr', 'R.D. Lambert', 'N.R. Sheth'],
      points: [
        'Ambedkar ka nazariya: jaati shram ka nahi shramikon ka vibhajan hai; Daliton par khatarnak kaam ka bojh',
        'Committed labour bahas: Lambert aur Sheth ne saabit kiya factory commitment aur gaon judav sath-sath',
        'Unions ka patan: 1982 Bombay strike, mill bandi, bhari thekedaari aur platform gig economy ka asar',
        'Precarity aur kanoon: COVID-19 lockdown mein migrant shramikon ki lachari aur Char Naye Labour Codes',
      ],
    },
    {
      title: '21.4 Informal Sector Aur Bal Shram',
      color: 'mint',
      thinkers: ['Keith Hart', 'Jan Breman', 'Maria Mies', 'Neera Burra'],
      points: [
        'Jan Breman ka critique: 90%+ informal shramik formal corporate munafey ki permanent reserve army',
        'Distressed migration: kheti ke sankat se bhatakta "footloose labour" aur shehar mein sasta shram',
        'Feminization of precarity: housewifization aur ghar-baithe piece-rate kamo mein mahilaon ka shoshan',
        'Neera Burra (*Born to Work*): nimble fingers ka jhooth, bado ki berozgari aur 2016 kanoon ka chhal',
      ],
    },
    {
      title: '21.5 Slums Aur Shehari Vanchhana',
      color: 'pink',
      thinkers: ['Oscar Lewis', 'David Harvey', 'Amita Baviskar', 'Patrick Geddes'],
      points: [
        'Slums ke siddhant: Culture of Poverty (Lewis), Slums of Hope (Stokes) aur Planet of Slums (Davis)',
        'Socio-spatial vanchhana: zameen ke patte ki asuraksha, bulldozer demolition aur bourgeois environmentalism',
        'Shehari virodhabhas: nagrik adhikar se bahi-shkar par shehar ko chalane wali sabse zaroori shramik machine',
        'Aawas nitiyan: builder-centric vertical redevelopment (SRA) banam Geddes ka In-Situ Upgradation',
      ],
    },
  ],
}

export const unit21Notebook: UnitNotebookSpec = {
  paperCode: 'P2',
  unitSlug: 'industrialization-and-urbanisation',
  overview:
    'Comprehensive sociological analysis of industrialization and urbanization in India, covering colonial deindustrialization, Nehruvian state capitalism, post-1991 neoliberal IT corridors, trends in top-heavy urbanization and Census towns, working-class formation and precarity, the informal sector and child labour, and socio-spatial deprivation in urban slums.',
  overviewHinglish:
    'Bharat mein udyogikaran aur sheharikaran ka poora samajshastriya adhyayan: Angrezi shoshan aur deindustrialization se lekar Nehruvian PSUs, 1991 ke IT boom, Census towns ka tezi se uday, shramik varg ki lachari aur thekedaari, informal sector mein mahilaon aur bal shram ka shoshan, tatha kachhi bastiyon (slums) ki socio-spatial vanchhana.',
  studySequence: [
    {
      step: '1. Trace Industrial Evolution',
      detail:
        'Contrast colonial deindustrialization, Drain of Wealth (Naoroji), and railway freight tariffs with Nehruvian PSU-led heavy industrialization (Mahalanobis model) and post-1991 IT service clusters.',
    },
    {
      step: '2. Understand Urban Patterns & Census Towns',
      detail:
        'Analyze top-heavy urbanization, distress-driven rural push factors, the explosion of Census towns post-2001, and the replication of rural caste-kinship ties in cities (Harold Gould, M.S.A. Rao).',
    },
    {
      step: '3. Examine Working-Class Precarity',
      detail:
        'Debunk Clark Kerr’s committed labour thesis using Lambert and Sheth, evaluate the decline of trade unions, assess COVID-19 migrant vulnerability, and critique the Four New Labour Codes.',
    },
    {
      step: '4. Deconstruct Informality & Child Labour',
      detail:
        'Master Jan Breman’s dualism critique of Keith Hart, analyze the feminization of precarious labour (Maria Mies), and evaluate Neera Burra’s structural causes of child labour and the 2016 Act loopholes.',
    },
    {
      step: '5. Analyze Slums & Housing Policies',
      detail:
        'Explore socio-spatial deprivation, David Harvey’s Right to the City, Amita Baviskar’s Bourgeois Environmentalism, and contrast vertical developer redevelopment with Patrick Geddes’s in-situ upgradation.',
    },
    {
      step: '6. Practise 20 Solved PYQs',
      detail:
        'Master all 20 previous years’ examination questions (2014–2025) across English and Hinglish with balanced introductions, empirical examples, thinker citations, and structured conclusions.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Udyogik Itihaas Samjho',
      detail:
        'Colonial deindustrialization, Dadabhai Naoroji ki Drain Theory aur railway freight policy ko Nehruvian PSUs aur 1991 ke post-reform IT services ke sath tulna karo.',
    },
    {
      step: '2. Shehari Naksha Aur Census Towns Dekho',
      detail:
        'Top-heavy urbanization, kheti ke sankat se distress migration, 2001 ke baad Census towns ka dhamaka aur shehar mein gaon ke jaati-biradari rishton ka dohraav (Harold Gould, M.S.A. Rao) samjho.',
    },
    {
      step: '3. Shramik Varg Aur Thekedaari Ka Adhyayan',
      detail:
        'Clark Kerr ke thesis ko Lambert aur Sheth se challenge karo, trade union density ke patan ko dekho, COVID-19 migrant sankat aur Char Naye Labour Codes ka mulyankan karo.',
    },
    {
      step: '4. Informal Sector Aur Bal Shram Master Karo',
      detail:
        'Keith Hart aur Jan Breman ke dualism critique ko samjho, Maria Mies ke housewifization aur Neera Burra ke hawale se child labour ke structural karan tatha 2016 kanoon ki kami revise karo.',
    },
    {
      step: '5. Slums Aur Aawas Nitiyon Ka Vishleshan',
      detail:
        'Socio-spatial vanchhana, Amita Baviskar ka bourgeois environmentalism aur builder-led vertical towers banam Patrick Geddes ke In-Situ Upgradation ke fayde revise karo.',
    },
    {
      step: '6. 20 PYQs Ki Practice Karo',
      detail:
        'Sabhi 20 previous year questions (2014–2025) ko English aur Roman-script Hinglish mein intro, thinkers, ground examples aur balanced conclusion ke sath solve karo.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p2-u11-01-urbanization-industry-flow.webp',
      title: 'Industry & Urban Settlements in India',
      titleHinglish: 'Industry & Urban Settlements in India — Quick Visual',
      badge: '01/02 · Visual Map',
      badgeHinglish: '01/02 · Visual Map',
      alt: 'P2 Unit 11 infographic: Industry & Urban Settlements in India — Colonial Deindustrialization to Over-Urbanization',
      caption:
        'Colonial Deindustrialization to Over-Urbanization (Industry & Urban Settlements in India).',
      captionHinglish:
        'Colonial Deindustrialization to Over-Urbanization — Industry & Urban Settlements in India ka visual saransh.',
    },
    {
      assetFile: 'p2-u11-02-slums-informal-child-labour.webp',
      title: 'Slums, Informality & Child Labour',
      titleHinglish: 'Slums, Informality & Child Labour — Quick Visual',
      badge: '02/02 · Visual Map',
      badgeHinglish: '02/02 · Visual Map',
      alt: 'P2 Unit 11 infographic: Slums, Informality & Child Labour — Spatial Deprivation, Urban Informality & Child Labour',
      caption:
        'Spatial Deprivation, Urban Informality & Child Labour (Slums, Informality & Child Labour).',
      captionHinglish:
        'Spatial Deprivation, Urban Informality & Child Labour — Slums, Informality & Child Labour ka visual saransh.',
    },
  ],
  topics: [
    topic1ModernIndustry,
    topic2UrbanSettlements,
    topic3WorkingClass,
    topic4InformalChildLabour,
    topic5SlumsDeprivation,
  ],
}

export default unit21Notebook
