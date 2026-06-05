// Single source of truth for all portfolio content (from CV + GitHub README).

export const site = {
  name: 'Luis Ibarra',
  fullName: 'Luis Sebastian Ibarra Villamil',
  title: 'DevOps & Cloud Engineer',
  subtitle: 'AWS Solutions Architect – Associate',
  location: 'Neiva, Colombia',
  availability: 'Remote-first',
  email: 'hello@luisibarra.dev',
  url: 'https://luisibarra.dev',
  description:
    'DevOps & Cloud Engineer with hands-on experience in container infrastructure, CI/CD automation, and observability. Full-stack background, infrastructure focus.',
} as const;

export const socials = [
  { label: 'GitHub', handle: 'sebastianiv21', href: 'https://github.com/sebastianiv21' },
  { label: 'LinkedIn', handle: 'luis-sebastian-ibarra', href: 'https://linkedin.com/in/luis-sebastian-ibarra' },
  { label: 'Linktree', handle: 'sebastianiv21', href: 'https://linktr.ee/sebastianiv21' },
  { label: 'Email', handle: site.email, href: `mailto:${site.email}` },
] as const;

// Short narrative for the About section.
export const about = [
  "I'm a DevOps engineer who started out building full-stack applications. Somewhere between shipping my first production app and debugging a broken web server at 2am, I realized I cared more about *how software runs* than what it does. That's what brought me to DevOps.",
  'Today I work daily with Docker and Kubernetes deployments, Linux environments, and infrastructure troubleshooting — keeping distributed systems healthy for global developer communities. Along the way I’ve kept 200+ mission-critical banking apps alive across 55+ countries and shipped Go and Python backends for a fleet platform serving 1,000+ vehicles.',
  'My full-stack background means I can read application code, debug at the app layer, and collaborate with developers without friction.',
];

export const focus = [
  'Engineering reliability & developer tooling',
  'Going deeper on Kubernetes ops & platform engineering',
];

export type SkillGroup = { label: string; items: string[] };
export const skills: SkillGroup[] = [
  { label: 'Infrastructure & Cloud', items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Linux'] },
  { label: 'CI/CD & Automation', items: ['GitHub Actions', 'CI/CD Pipelines'] },
  { label: 'Observability', items: ['Grafana', 'Prometheus', 'Loki'] },
  { label: 'Languages & Frameworks', items: ['Python', 'FastAPI', 'Node.js', 'Go'] },
  { label: 'Databases', items: ['PostgreSQL', 'MongoDB'] },
];

export type Job = {
  company: string;
  role: string;
  location: string;
  period: string;
  context: string;
  highlights: string[];
};

export const experience: Job[] = [
  {
    company: 'Appsmith',
    role: 'Technical Support Engineer (DevOps Focus)',
    location: 'Remote',
    period: 'Apr 2025 – Present',
    context:
      'Open-source low-code platform for building internal apps, deployed across AWS, GCP, and Azure by teams worldwide.',
    highlights: [
      'Troubleshoot production incidents in distributed, containerized (Docker/Kubernetes) environments — diagnosing failures across application and cloud infrastructure layers (AWS, GCP, Azure) for a global developer community.',
      'Implement third-party datasource integrations into the platform, expanding available connectors so customers can use external services directly within their workflows.',
      'Integrate a debugging SDK into the support workflow, enabling richer diagnostic data capture and reducing investigation time for complex issues.',
      'Build AI-powered log analysis tooling using LLM-based prompts to automate log investigation and improve operational visibility.',
      'Analyze logs and metrics in Grafana Cloud to identify root causes, performance bottlenecks, and system instability in production.',
      'Contribute to internal runbooks, incident documentation, and support articles — reducing recurrence of common issues across a cross-timezone team.',
    ],
  },
  {
    company: 'Professional Industrial Services SAS',
    role: 'Full Stack Developer',
    location: 'Remote',
    period: 'Mar 2023 – Mar 2025',
    context:
      'Vehicle tracking and fleet management platform serving 1,000+ users and vehicles across Colombia and the Dominican Republic.',
    highlights: [
      'Designed and deployed Go and Python backend services and APIs for the logistics platform, handling real-time tracking and fleet operations at scale.',
      'Migrated backend services to Docker containers, improving deployment consistency, fault tolerance, and environment parity across dev and production.',
      'Migrated manual deployments to automated CI/CD pipelines with GitHub Actions, eliminating manual errors and improving release velocity.',
      'Operated and optimized PostgreSQL databases across multiple environments, ensuring data integrity, performance, and availability.',
      'Investigated and resolved production issues across application and infrastructure layers, minimizing downtime.',
    ],
  },
  {
    company: 'Scotiatech',
    role: 'Technical Support Analyst',
    location: 'Remote',
    period: 'Jul 2023 – Jan 2025',
    context:
      'Technology arm of Scotiabank, operating across 55+ countries in a regulated banking environment.',
    highlights: [
      'Maintained 200+ mission-critical banking applications across 55+ countries and 3,000+ branches, ensuring service delivery and system stability at enterprise scale.',
      'Diagnosed and resolved database and infrastructure issues, minimizing downtime across a globally distributed environment.',
      'Managed support requests through ServiceNow, documenting solutions to build a reusable knowledge base.',
    ],
  },
];

export type Project = {
  name: string;
  period: string;
  tagline: string;
  description: string;
  stack: string[];
  href: string;
};

export const projects: Project[] = [
  {
    name: 'LogPilot',
    period: '2025 – Present',
    tagline: 'Local-first, AI-powered log investigation platform',
    description:
      'Upload a compressed log archive and LogPilot ships and parses the logs via Vector into Loki, derives metrics for Prometheus, auto-provisions Grafana dashboards, indexes your docs in PostgreSQL + pgvector, searches your source on demand, and turns an AI agent loose to correlate all of it into an evidence-backed incident report. Full stack — FastAPI backend, React frontend, and the whole observability pipeline — runs end-to-end via Docker Compose. Reports export as Markdown or PDF.',
    stack: ['Docker', 'Vector', 'Loki', 'Prometheus', 'Grafana', 'PostgreSQL + pgvector', 'FastAPI', 'React'],
    href: 'https://github.com/sebastianiv21/logpilot',
  },
];

export type Education = { school: string; credential: string; period: string };
export const education: Education[] = [
  {
    school: 'Universidad Surcolombiana',
    credential: 'B.S. in Electronic Engineering',
    period: '2015 – 2021',
  },
  {
    school: 'SENA',
    credential: 'Technologist in Analysis & Development of Information Systems',
    period: '2020 – 2023',
  },
];

export type Certification = { name: string; issuer: string; date: string };
export const certifications: Certification[] = [
  { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', date: 'May 2026' },
  { name: 'Bootcamp DevOps', issuer: 'CloudCamp', date: 'Apr 2026' },
  { name: 'DevOps and Software Engineering Specialization', issuer: 'IBM / Coursera', date: 'Jan 2024' },
  { name: 'Application Security for Developers and DevOps Professionals', issuer: 'IBM / Coursera', date: 'Jan 2024' },
];

export type Language = { name: string; level: string; flag: string };
export const languages: Language[] = [
  { name: 'Spanish', level: 'Native', flag: '🇪🇸' },
  { name: 'English', level: 'C1', flag: '🇬🇧' },
  { name: 'Portuguese', level: 'B1', flag: '🇧🇷' },
];

export const nav = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Work', href: '/#work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];
