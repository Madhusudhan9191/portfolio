export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  summary: string;
  responsibilities: string[];
  tech: string[];
}

export interface SkillNode {
  name: string;
  group: "language" | "ai" | "backend" | "frontend" | "database" | "data";
  description: string;
}

export interface PipelineStage {
  label: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  challenges: string[];
  decisions: string[];
  lessons: string;
  tech: string[];
  pipeline: PipelineStage[];
  features: string[];
  metrics: ProjectMetric[];
  github?: string;
  demo?: string;
  accent: "primary" | "secondary" | "accent";
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

export interface Publication {
  title: string;
  venue: string;
  blurb: string;
  url?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  status: "Completed" | "In Progress";
}
