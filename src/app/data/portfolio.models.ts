export interface Profile {
  name: string;
  firstName: string;
  roles: string[];
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  summary: string;
  stats: { value: string; label: string }[];
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  start: string; // ISO yyyy-mm
  end: string | null; // null = present
  points: string[];
}

export interface FeaturedProject {
  name: string;
  tagline: string;
  overview: string;
  stack: string[];
  features: string[];
  integrations: string[];
  challenges: { title: string; detail: string }[];
}

export interface SideProject {
  name: string;
  description: string;
  stack: string[];
  link?: string;
}

export interface Education {
  degree: string;
  institute: string;
  period: string;
  detail?: string;
}
