import { Education, Experience, FeaturedProject, Profile, SideProject, SkillGroup } from './portfolio.models';

/**
 * ✏️  All portfolio content lives here.
 *     Edit this file to update the site — no component changes needed.
 */

export const PROFILE: Profile = {
  name: 'Abhraneel Khan',
  firstName: 'Abhraneel',
  roles: ['Frontend Developer', 'Angular Developer', 'TypeScript Enthusiast', 'Problem Solver'],
  location: 'Kolkata, West Bengal, India',
  phone: '+91 8777697241',
  email: 'abhraneelkhan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abhraneel-khan',
  github: 'https://github.com/', // TODO: add your GitHub profile URL
  resumeUrl: 'Abhraneel_Khan_Front_End_Resume.pdf',
  summary:
    'Frontend Developer with 1 year and 3 months of experience building enterprise web applications using Angular, TypeScript, ' +
    'JavaScript, RxJS, HTML5, CSS3 and SCSS. Skilled in reusable components, Reactive Forms, routing and REST API integration. ' +
    'Built order history with status tabs, search, sorting and pagination, user management, registration flows, Google Maps ' +
    'address lookup, audit history and invoice email features for the admin and customer portals of a logistics platform. ' +
    'Works in Agile/Scrum teams with developers and QA.',
  stats: [
    { value: '1+', label: 'Years of experience' },
    { value: '2', label: 'Angular portals (Admin & Customer)' },
    { value: '8.5', label: 'B.Tech CGPA' },
  ],
};

export const SKILL_GROUPS: SkillGroup[] = [
  { title: 'Languages', icon: '⌨️', skills: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS', 'Node.js', 'Java', 'SQL'] },
  {
    title: 'Frameworks & Libraries',
    icon: '🧩',
    skills: ['Angular', 'RxJS', 'Angular Material', 'React.js', 'Bootstrap', 'ng-bootstrap', 'ng-select', 'Hibernate'],
  },
  {
    title: 'Angular Core',
    icon: '🅰️',
    skills: ['Components', 'Services & DI', 'Lifecycle Hooks', 'Directives', 'Pipes', 'Routing & Child Routes', 'Modules', 'Reactive Forms', 'Custom Validators'],
  },
  {
    title: 'API Integration',
    icon: '🔌',
    skills: ['REST APIs', 'HttpClient', 'HTTP Interceptors', 'HTTP Headers', 'Cookies & Sessions', 'JSON', 'Error Handling'],
  },
  { title: 'Tools', icon: '🛠️', skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Chrome DevTools'] },
  {
    title: 'Practices',
    icon: '✅',
    skills: ['Responsive Design', 'Authentication & Authorization', 'Debugging', 'Production Support', 'Agile / Scrum'],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'Trainee Consultant',
    company: 'TechOxileo Technologies Pvt. Ltd.',
    location: 'West Bengal',
    start: '2025-07',
    end: '2026-10',
    points: [
      'Develop Angular modules for the admin and customer portals of a logistics platform using TypeScript, HTML5, SCSS and Bootstrap.',
      'Integrate REST APIs using Angular HttpClient and RxJS, handling request payloads, query parameters, loading states and errors.',
      'Build reusable components, Reactive Forms with custom validation, and modal dialogs shared across screens.',
      'Debug UI and API issues using Chrome DevTools and Postman.',
      'Manage feature branches, merges and conflict resolution in Git; collaborate with developers and QA in Agile sprints.',
    ],
  },
];

export const FEATURED_PROJECT: FeaturedProject = {
  name: 'ShipCarte',
  tagline: 'Logistics and Order Management Platform (Admin and Customer Portals)',
  overview:
    'Freight and shipping platform with two Angular apps: a Customer Portal for sign-up, orders, shipment tracking, users and invoices, ' +
    'and an Admin Portal for managing orders, customers, partners, invoices, users and audit logs.',
  responsibilities:
    'Built and maintained feature modules in both portals; integrated REST APIs with HttpClient and RxJS; created reusable components ' +
    'and modals; debugged UI and API issues with Chrome DevTools and Postman in Agile sprints.',
  stack: [
    'Angular 19',
    'TypeScript',
    'RxJS',
    'Reactive Forms',
    'Angular Material',
    'Bootstrap 5',
    'ng-bootstrap',
    'ng-select',
    'Google Maps & Places API',
    'REST APIs',
    'SCSS',
  ],
  features: [
    {
      title: 'Order History',
      detail:
        'API-driven order lists with status tabs (All, Scheduled, In Transit, Completed, Failed), server-side pagination, search, sorting and date-range filters.',
    },
    {
      title: 'User Management',
      detail: 'User list, add, edit, delete and reset password for admin and customer users, using one shared Add/Edit form.',
    },
    { title: 'Registration', detail: 'Customer sign-up and partner registration forms with validation and API integration.' },
    {
      title: 'Address Entry',
      detail: 'Google Places autocomplete and manual address entry, with country and state dropdowns loaded from APIs.',
    },
    { title: 'Audit', detail: 'Audit history screens for settings, customer and order actions.' },
    { title: 'Email Invoice', detail: 'Reusable dialog to email invoices and shipment documents to customers.' },
  ],
  integrations: [
    'Order listing, status update & cancel',
    'User add, update, delete & reset password',
    'Customer sign-up & partner registration',
    'Country & state lookup',
    'Address book & billing locations',
    'Audit event logs',
    'Email invoices & documents',
  ],
  challenges: [
    {
      title: 'Order list state lost on navigation',
      detail: 'Kept the order list’s tab, search and sort state when users returned from order details, using a shared service.',
    },
    {
      title: 'Google Places → API mapping',
      detail: 'Mapped Google Places results to the API’s country and state values, with manual entry as a fallback.',
    },
    {
      title: 'Wrong state values',
      detail: 'Fixed wrong state values by reloading the state list whenever the country changed, including in edit mode.',
    },
    {
      title: 'One form for Add & Edit',
      detail: 'Made one Add/Edit user form pre-fill API data in edit mode and send the correct request in each mode.',
    },
  ],
};

export const SIDE_PROJECTS: SideProject[] = [
  {
    name: 'Professional Portfolio',
    description: 'This personal portfolio site, with dynamic content loading and a responsive, mobile-first layout.',
    stack: ['Angular', 'Axios', 'Bootstrap 5.3'],
    link: 'https://abhraneel-portfolio.vercel.app/',
  },
  {
    name: 'E-commerce Web',
    description: 'Shopping UI with product listing, cart and checkout flow built with Angular components and services.',
    stack: ['Angular', 'Axios', 'Bootstrap 5.3'],
  },
  {
    name: 'Employee Management System',
    description: 'CRUD application for managing employee records using Hibernate ORM and the Java Collections Framework.',
    stack: ['Hibernate', 'Collections Framework', 'SQL'],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'B.Tech in Information Technology',
    institute: 'Guru Nanak Institute of Technology',
    period: '2020 – 2024',
    detail: 'CGPA 8.5',
  },
  {
    degree: 'Higher Secondary',
    institute: 'Uttarpara Govt High School',
    period: '2020',
    detail: 'Grade 78%',
  },
  {
    degree: 'Secondary',
    institute: 'Uttarpara Govt High School',
    period: '2017',
    detail: 'Grade 71%',
  },
];

export const CERTIFICATIONS: string[] = [
  'Java Full Stack Software Development — QSpiders & JSpiders, Kolkata',
  'Published documentation of a Facial Recognition System in GIS Science Journal',
];
