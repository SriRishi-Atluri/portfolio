export const site = {
  name: "Sri Rishi Atluri",
  shortName: "Rishi",
  title: "Data & Software Engineer",
  tagline:
    "I build data pipelines, research tools, and software that turns messy information into clear decisions.",
  email: "sririshi.atluri@gmail.com",
  location: "College Park, MD",
  url: "https://sririshi-atluri.vercel.app",
  social: {
    github: "https://github.com/SriRishi-Atluri",
    linkedin: "https://linkedin.com/in/sririshiatluri",
  },
  about: [
    "I'm a builder at the intersection of data, research, and software. I like work where analysis meets real decisions — from prediction markets to automated pipelines.",
    "I'm studying computer science and mathematics at the University of Maryland, where I'm focused on algorithms, systems, and building tools that hold up under real data.",
    "Outside of code, I'm drawn to systems thinking: how markets price uncertainty, how models fail gracefully, and how good tools stay out of your way.",
  ],
  currently: {
    basedIn: "College Park, MD",
    studying: "CS & Math at University of Maryland",
    workingOn: "Data pipelines and research projects",
    openTo: "Internships and interesting opportunities",
  },
  experience: [
    {
      role: "Software Engineer",
      company: "State Street",
      period: "July 2026 -",
      description:
        "Designing and building data pipelines, research tooling, and full-stack applications — with a focus on reproducible analysis and clean interfaces.",
      logo: "/logos/state-street-logo.svg",
    },
  ],
  education: [
    {
      degree: "B.S. Computer Science & Mathematics",
      school: "University of Maryland",
      logo: "/logos/umd-logo.svg",
    },
  ],
  skills: [
    { category: "Languages", items: ["Python", "TypeScript", "SQL", "R"] },
    { category: "Data", items: ["Pandas", "PostgreSQL", "Matplotlib", "ETL Pipelines"] },
    { category: "Web", items: ["Next.js", "React", "Tailwind CSS", "REST APIs"] },
    { category: "Tools", items: ["Git", "Cursor", "Vercel", "Jupyter"] },
  ],
  projects: [
    {
      title: "Prediction Market Research",
      description:
        "End-to-end research pipeline for analyzing prediction market data — ingestion, cleaning, modeling, and comparative analysis with reproducible outputs.",
      tags: ["Python", "Data Pipeline", "Research"],
      href: "#",
      featured: true,
    },
    {
      title: "This site",
      description:
        "My personal home on the web — built with Next.js and Tailwind, designed to be fast, minimal, and easy to maintain.",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      href: "https://sririshi-atluri.vercel.app",
      featured: false,
    },
  ],
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
