import { Education, Experience, FeaturedProject, Profile, SideProject, SkillGroup } from './portfolio.models';

/**
 * ✏️  All portfolio content lives here.
 *     Edit this file to update the site — no component changes needed.
 */

export const PROFILE: Profile = {
  name: 'Abhraneel Khan',
  firstName: 'Abhraneel',
  roles: ['Angular Developer', 'Frontend Developer', 'TypeScript Enthusiast', 'Problem Solver'],
  location: 'Kolkata, West Bengal, India',
  phone: '+91 8777697241',
  email: 'abhraneelkhan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abhraneel-khan',
  github: 'https://github.com/', // TODO: add your GitHub profile URL
  resumeUrl: 'Abhraneel_Khan_Resume.pdf',
  summary:
    'Angular Developer building and maintaining enterprise web applications with Angular, TypeScript, RxJS and SCSS. ' +
    'I enjoy designing reusable components, Reactive Forms, routing, REST API integration, HTTP interceptors and authentication flows. ' +
    'I have shipped user-configurable data tables with drag-and-drop column reordering, column visibility settings, server-side ' +
    'pagination, sorting and infinite scroll — and I like digging into production issues across APIs, CORS, cookies/sessions and ' +
    'browser network behaviour in Agile/Scrum teams.',
  stats: [
    { value: '1+', label: 'Years of experience' },
    { value: '10+', label: 'Configurable list screens' },
    { value: '8.5', label: 'B.Tech CGPA' },
  ],
};

export const SKILL_GROUPS: SkillGroup[] = [
  { title: 'Languages', icon: '⌨️', skills: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS', 'Node.js', 'Java', 'SQL'] },
  {
    title: 'Frameworks & Libraries',
    icon: '🧩',
    skills: ['Angular', 'RxJS', 'Angular Material', 'Angular CDK (Drag & Drop)', 'Bootstrap', 'ng-bootstrap', 'ng-select', 'Spring Boot', 'Hibernate'],
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
    role: 'Angular Developer / Trainee Consultant',
    company: 'TechOxileo Technologies Pvt. Ltd.',
    location: 'West Bengal',
    start: '2025-07',
    end: '2026-10',
    points: [
      'Develop enterprise Angular modules with TypeScript, HTML5, SCSS and Bootstrap — reusable components, services, Reactive Forms, tables and modals.',
      'Integrate REST APIs using Angular HttpClient and RxJS, managing request parameters, payloads, loading states and error handling.',
      'Implement routing, route parameters and child routes for order, quote, customer and partner workflows.',
      'Diagnose and resolve production issues involving API failures, CORS, cookies/sessions, routing and UI rendering using Chrome DevTools and Postman.',
      'Manage feature branches, merges, cherry-picks and conflict resolution in Git; collaborate with developers and QA in Agile sprints.',
    ],
  },
];

export const FEATURED_PROJECT: FeaturedProject = {
  name: 'ShipCarte',
  tagline: 'Enterprise Logistics & Order Management Platform',
  overview:
    'Admin web portal for a freight and shipping business to manage orders (including call-in and parent/child orders), ' +
    'quotes and spot quotes, customers, partners and carriers, sales representatives, invoices and billing, shipment tracking and POD/BOL documents.',
  stack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'Angular CDK', 'Angular Material', 'Bootstrap', 'ng-bootstrap', 'ng-select', 'SCSS'],
  features: [
    'User-configurable tables with drag-and-drop column reordering (Angular CDK) and a column visibility selector, persisting each user’s preferences through REST APIs across 10+ list screens.',
    'Skeleton loaders and infinite-scroll pagination with server-side sorting, filtering and date-range search for large datasets.',
    'Order action menus (view, edit, copy, status updates, cancellation, POD upload/view, tracking share) plus billing and terms-document views with download.',
  ],
  integrations: [
    'Authentication & OTP verification',
    'Order listing & status updates',
    'Quotes & spot quotes',
    'Invoices',
    'Customer & partner order history',
    'User column settings',
    'POD & document upload/download',
    'Shipment tracking',
  ],
  challenges: [
    {
      title: '401 Unauthorized after password login',
      detail:
        'Traced the root cause: multiple session cookies were combined into a single Set-Cookie header and the SESSION cookie path did not match the API route. Documented the fix for the backend team.',
    },
    {
      title: 'Skeleton loader not rendering',
      detail: 'Corrected the loading-state logic and an unclosed table row in the template.',
    },
    {
      title: 'Hidden columns vanishing after reorder',
      detail: 'Fixed hidden columns disappearing from the column selector after drag-and-drop reordering.',
    },
  ],
};

export const SIDE_PROJECTS: SideProject[] = [
  {
    name: 'Professional Portfolio',
    description: 'Personal portfolio site with dynamic content loading and a responsive, mobile-first layout.',
    stack: ['React.js', 'Axios', 'Bootstrap 5.3'],
  },
  {
    name: 'E-commerce Web',
    description: 'Shopping UI with product listing, cart and checkout flow built with Angular components and services.',
    stack: ['Angular', 'TypeScript', 'Bootstrap 5.3'],
  },
  {
    name: 'Employee Management System',
    description: 'CRUD application for managing employee records using Hibernate ORM and the Java Collections Framework.',
    stack: ['Java', 'Hibernate', 'Collections Framework', 'SQL'],
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
    degree: 'Higher Secondary & Secondary',
    institute: 'Uttarpara Govt High School',
    period: '2018 – 2020',
  },
];

export const CERTIFICATIONS: string[] = [
  'Java Full Stack Software Development — QSpiders & JSpiders, Kolkata',
  'Published documentation of a Facial Recognition System in GIS Science Journal',
];
