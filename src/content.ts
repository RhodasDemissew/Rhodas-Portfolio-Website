// Public-facing copy and asset references live here for easy updates.
export const profile = {
  name: 'Rhodas Demissew',
  fullName: 'Rhodas Demissew Tadesse',
  role: 'Full-Stack Developer · AI Enthusiast',
  location: 'Addis Ababa, Ethiopia',
  email: 'rhodasdemissew@gmail.com',
  phone: '+251993802012',
  github: 'https://github.com/RhodasDemissew',
  linkedin: 'https://www.linkedin.com/in/rhodas-demissew-b75915242/',
  cv: 'https://docs.google.com/document/d/1BdXh47CFW1JrdnwLdEw8dOtvufyZXrwyNeWt4tv6RPI/edit?usp=sharing',
  portrait: '/images/portrait-cutout.png',
  headline: 'Practical software for your business, built around the people who use it.',
  introduction: 'I build web applications, APIs, and learning platforms that turn operational needs into clear, dependable tools. My work spans enterprise systems in .NET and Angular, as well as Moodle platforms used for learning and administration.'
};

export const projects = [
  {
    number: '01',
    title: 'UNICEF Bill Management System',
    category: 'Enterprise application',
    role: 'Full-Stack Developer · DAFTech Social ICT Solutions',
    description: 'Developed billing and customer management features, including flexible billing rules, automated penalties, organizational modules, and REST APIs. Supported deployment on IIS.',
    stack: ['.NET 8', 'EF Core', 'SQL Server', 'Angular', 'TypeScript'],
    note: 'Source code is private due to organizational confidentiality.',
    repository: null as string | null,
    image: '/images/billing.jpg',
    imageAlt: 'DAFTech billing system showing meter rates and consumption tariffs'
  },
  {
    number: '02',
    title: 'Learning Platform & Student Information System',
    category: 'Education technology',
    role: 'LMS Developer & Administrator',
    description: 'Customized a Moodle learning platform through course setup, roles, permissions, workflows, interface changes, backups, security, and reporting. Built a connected student information workflow that brings grade data into clear views for administrators, teachers, and students.',
    stack: ['Moodle', 'PHP', 'JavaScript', 'MySQL'],
    note: '',
    repository: 'https://github.com/RhodasDemissew/SIS' as string | null,
    image: '/images/sis.png',
    imageAlt: 'Student information system dashboard with grade and school activity overview'
  },
  {
    number: '03',
    title: 'HiLCoE Research Management System',
    category: 'Capstone project',
    role: 'Backend Developer · HiLCoE',
    description: 'Contributed backend services for researcher management and submission tracking, alongside requirements analysis and system design in a team project.',
    stack: ['Node.js', 'MongoDB', 'REST APIs'],
    note: '',
    repository: 'https://github.com/RhodasDemissew/HiLCoE-RMS' as string | null,
    image: '/images/rms.png',
    imageAlt: 'HiLCoE research management system showing the submission flow and history'
  }
] as const;

export const recommendations = [
  { source: 'Dr. Nega Education Center', context: 'Learning platform & student information system', url: 'https://docs.google.com/document/d/1t1ugo-3tvpsZou5OU5dEmfMFBLVoyYLR2PzbQ33T71k/edit?usp=sharing' },
  { source: 'HiLCoE School of Computer Science & Technology', context: 'Academic work & collaboration', url: 'https://docs.google.com/document/d/1FivAUeYTPAD18G26OgZaW7dH-U5th6VQHlpbSSxYCaE/edit?usp=sharing' }
] as const;

export const services = [
  { number: '01', title: 'Web applications & business systems', description: 'Purpose-built tools for the workflows your team uses every day.' },
  { number: '02', title: 'APIs & integrations', description: 'Backend services that connect data, people, and existing systems.' },
  { number: '03', title: 'Moodle & learning platforms', description: 'Course workflows, customization, administration, and ongoing support.' },
  { number: '04', title: 'Maintenance & deployment', description: 'Improvements, troubleshooting, and support for systems already in use.' }
] as const;

export const experience = [
  { period: 'Feb 2026 — Present', role: 'Full-Stack Developer', organization: 'Systems Edge Solutions', description: 'Developing social security pension applications and APIs with ASP.NET Core and React. Architected an Nx microfrontend platform using Webpack Module Federation with independent domains and shared runtime configuration. Implemented CQRS with MediatR pipelines and DTOs to separate API controllers from business logic and align frontend remotes.' },
  { period: 'Jul 2025 — Present', role: 'LMS Developer', organization: 'E-Camel Education / EthioEducation', description: 'Maintaining Moodle-based learning platforms, with customization, troubleshooting, and system support.' },
  { period: 'Aug 2025 — Feb 2026', role: 'Full-Stack Developer', organization: 'DAFTech Social ICT Solutions', description: 'Built and maintained enterprise applications with .NET 8, Angular, EF Core, and SQL Server.' }
] as const;

export const certifications = [
  { title: 'AI Career Essentials · ALX Ethiopia, 2024', url: 'https://savanna.alxafrica.com/certificates/c7mBs6eCEP' },
  { title: 'CCNA: Enterprise Networking, Security & Automation · Cisco, 2023', url: 'https://www.credly.com/badges/def64ce4-c54b-4d23-a143-0b8f9136eab4/linked_in_profile' },
  { title: 'CCNA: Switching, Routing & Wireless Essentials · Cisco, 2023', url: 'https://www.credly.com/badges/623d7898-3259-47e2-a64c-191903b6be46/linked_in_profile' }
] as const;
