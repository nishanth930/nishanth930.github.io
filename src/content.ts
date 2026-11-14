// All site copy lives here. Edit this file to update the portfolio;
// components only handle layout.
import type {
  About,
  Education,
  NavItem,
  Profile,
  Project,
  Role,
  SkillGroup,
  Stat,
} from './types'

export const profile: Profile = {
  name: 'Nishanth Parthiban',
  eyebrow: 'AI Product Leader · Principal Engineer at PepsiCo',
  headline: 'I build AI products that move real business numbers.',
  lede:
    '18+ years taking enterprise AI from idea to production, from intelligent document processing at PepsiCo to ML-driven bot support with Radium.ai. Now focused on product-led AI: owning the problem, the roadmap and the metric, backed by an MBA in AI in Business (BITS Pilani, in progress).',
  location: 'Bengaluru, India',
  email: 'nishanth930@gmail.com',
  linkedin: {
    url: 'https://www.linkedin.com/in/nishanth-parthiban',
    label: 'linkedin.com/in/nishanth-parthiban',
  },
  resume: {
    href: '/assets/Nishanth_Parthiban_Resume.pdf',
    filename: 'Nishanth_Parthiban_Resume.pdf',
  },
}

export const nav: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const stats: Stat[] = [
  { value: '18+', label: 'years in IT' },
  { value: '7+', label: 'years as a cloud architect' },
  { value: '5+', label: 'years in RPA & automation' },
  { value: '3', label: 'Centres of Excellence built' },
]

export const about: About = {
  paragraphs: [
    'My career started as a developer on large CRM platforms for British Telecom, Vodafone and Verifone. From there I moved into architecture and delivery leadership. Today I am a Principal Engineer at PepsiCo. Before that I was a Senior Manager at Cognizant and Delivery Manager at Acronotics, where I ran programmes for clients such as Honeywell, ArcelorMittal, Coca-Cola, AB InBev and Bajaj Finserv.',
    "I work where technology meets the business: shaping strategy and roadmaps, writing and reviewing proposals and RFPs, designing cloud and automation architectures, and leading cross-functional teams through delivery. I'm also pursuing an MBA in AI in Business at BITS Pilani.",
  ],
  facts: [
    { label: 'Focus', value: 'Enterprise & cloud architecture, digital transformation, delivery leadership' },
    { label: 'Cloud', value: 'Azure (expert), AWS, SAP Cloud, IBM Watson' },
    { label: 'Languages', value: 'English, Hindi, Telugu, Tamil' },
    {
      label: 'Education',
      value: 'MBA, AI in Business (BITS Pilani, in progress) · BE, Computer Science (CBIT)',
    },
  ],
}

export const experience: Role[] = [
  {
    period: 'Apr 2024 — Present',
    title: 'Principal Engineer',
    org: 'PepsiCo',
    bullets: [
      'Build and run supply-chain and corporate platforms across Requisition-to-Pay (R2P), Procure-to-Pay (P2P), Order-to-Cash (O2C) and HR Payroll.',
      'Lead full-stack engineering on Java Spring Boot and React.',
      'Bring AI into finance and supply-chain workflows with OCR and Intelligent Document Processing.',
    ],
  },
  {
    period: 'Dec 2023 — Apr 2024',
    title: 'Senior Manager',
    org: 'Cognizant',
    bullets: [
      'Built an automated loan-processing application for a large US bank.',
      'Designed interfaces to US government portals for tax and SSN validation inside the loan workflow.',
    ],
  },
  {
    period: 'Feb 2020 — Dec 2023',
    title: 'Delivery Manager & Enterprise Architect',
    org: 'Acronotics',
    sub: 'Previously Portfolio Manager (EMEA) & Global Solution Architect, Feb 2020 — Jun 2021',
    bullets: [
      'Ran digitisation and cloud programmes for Honeywell, ArcelorMittal, Coca-Cola, Bajaj Finserv, AB InBev, Hitachi Vantara, Valor and Claranet.',
      'Was a key stakeholder and technical architect for [Radium.ai](http://radium-ai.io/), an ML-powered support product for digital workers on all major RPA platforms, used by several Fortune 1000 clients.',
      'Set up RPA, Full-stack and Cloud Centres of Excellence. Evaluated new technologies and partners, and hired for key roles.',
    ],
  },
  {
    period: 'Oct 2018 — Feb 2020',
    title: 'Practice Head — RPA & Solutions Architect',
    org: 'Vaizva',
    bullets: [
      'Led RPA delivery and programme management for Puma, Velcro, L Brands, SWJ Technologies and Shreepa Logistics.',
      'Ran R&D on IoT and cloud technologies, including a predictive transport-tracking solution.',
    ],
  },
  {
    period: 'Jan 2015 — Oct 2018',
    title: 'Senior Consultant',
    org: 'Infosys',
    summary: 'CRM product expert on Amdocs and Microsoft technologies for Microsoft.',
  },
  {
    period: '2008 — 2014',
    title: 'Earlier roles',
    earlier: true,
    summary:
      'Technology Analyst at **IBM** (Vodafone Spain) · CRM Tech Analyst at **Verifone** · Senior Engineer at **Virtusa** (British Telecom) · Senior Software Engineer at **Infosys** (British Telecom). Worked on Amdocs/Clarify CRM, Oracle, Sybase and database administration.',
  },
]

export const projects: Project[] = [
  {
    tag: 'PepsiCo · Supply chain & finance',
    title: 'Intelligent document processing at enterprise scale',
    body: 'Engineering for R2P, P2P, O2C and HR Payroll. Uses OCR and Intelligent Document Processing to cut manual handling of procurement, invoicing and payroll documents.',
    stack: 'Java Spring Boot · React · OCR · IDP',
  },
  {
    tag: 'Cognizant · US banking',
    title: 'Automated loan processing',
    body: 'An automated loan-processing application for a large US bank, with interfaces to US government portals for tax and SSN validation built into the workflow.',
    stack: 'Workflow automation · Government API integration',
  },
  {
    tag: 'Product · Acronotics',
    title: 'Radium.ai: support for digital workers',
    body: 'An ML-powered product that monitors and supports bots on all major RPA platforms. I was a technical architect and key stakeholder. Several Fortune 1000 clients use it.',
    stack: 'Custom ML engine · Azure · RPA platforms',
  },
  {
    tag: 'Operating model',
    title: 'Building Centres of Excellence',
    body: 'Founded RPA (Automation Anywhere), Full-stack and Cloud CoEs. Defined the governance, reusable frameworks, training and certification paths that teams scaled on.',
    stack: 'Governance · Frameworks · Enablement',
  },
  {
    tag: 'Bajaj Finserv · Financial services',
    title: '24×7 bot operations & phase-2 build',
    body: 'Ran a 24×7 support engagement covering 33 automated processes across lending, insurance and cards. Used bot-utilisation analytics and ROI forecasts to guide the next wave of development.',
    stack: 'Automation Anywhere · Analytics · Delivery management',
  },
  {
    tag: 'Puma · Retail',
    title: 'Starting an enterprise RPA journey',
    body: "Ran the feasibility study, prioritised processes and designed the solution behind Puma India's first ten automations across e-commerce, sales operations and SAP finance.",
    stack: 'Automation Anywhere · SAP · SQL Server',
  },
  {
    tag: 'Velcro · Manufacturing',
    title: 'Cognitive invoice automation',
    body: 'Automated end-to-end invoice creation in Oracle EBS R12. Purchase-order PDFs arriving by email were read with IQ Bot, and invoices were checked with a two-way match against the PO.',
    stack: 'IQ Bot · Oracle EBS · C# · REST/SOAP',
  },
  {
    tag: 'Hitachi Vantara',
    title: 'Platform migration & upgrade',
    body: 'Architected the move of the Automation Anywhere and IQ Bot infrastructure to the latest versions, including the feasibility study and business-continuity / disaster-recovery planning.',
    stack: 'Architecture · BCP/DR · Infrastructure',
  },
]

export const skills: SkillGroup[] = [
  {
    group: 'Product & AI',
    items: ['Product discovery', 'Roadmaps & prioritisation', 'Outcome metrics & ROI cases', 'Stakeholder alignment', 'Intelligent document processing', 'OCR', 'ML-powered products'],
  },
  {
    group: 'Architecture & leadership',
    items: ['Technology strategy', 'RFPs & proposals', 'TOGAF', 'Systems integration', 'Delivery risk & recovery', 'Programme management', 'Team leadership'],
  },
  {
    group: 'Cloud',
    items: ['Azure App Service', 'AKS', 'Azure SQL', 'Entra ID (AAD)', 'Networking', 'Data Factory', 'Data Lake', 'Azure DevOps', 'AWS', 'SAP Cloud', 'IBM Watson'],
  },
  {
    group: 'Automation & AI',
    items: ['Automation Anywhere (A360/A2019)', 'UiPath', 'Power Platform (Power Automate, Power Apps, Power BI, Power Virtual Agents)', 'NLP', 'Kore.ai', 'Yellow.ai'],
  },
  {
    group: 'Engineering & data',
    items: ['Node.js', 'React', 'Angular', '.NET', 'PL/SQL', 'SQL Server', 'PostgreSQL', 'MySQL', 'Oracle', 'Cosmos DB', 'MongoDB', 'IIS', 'Nginx'],
  },
]

export const certifications: string[] = [
  'Microsoft Certified: Azure Fundamentals (AZ-900)',
  'Automation Anywhere — Master Certified RPA Professional',
  'Automation Anywhere — Certified RPA Solution Architect',
  'Automation Anywhere — Certified Sales Engineer',
  'Automation Anywhere — Advanced Certification',
  'Agile Project Leadership',
  'Cybersecurity Foundations',
  'IT Security Foundations: Core Concepts',
]

export const education: Education[] = [
  {
    school: 'Birla Institute of Technology and Science, Pilani',
    detail: 'MBA, AI in Business · 2026 — 2028 (in progress)',
  },
  {
    school: 'Chaitanya Bharathi Institute of Technology',
    detail: 'BE, Computer Science · 2004 — 2008',
  },
]

export const contactBlurb =
  "I'm happy to talk about enterprise architecture, cloud transformation, automation strategy or a role you think I'd fit."
