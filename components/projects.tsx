"use client";

import { ExternalLink, Github, Folder } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

const featuredProjectsMeta = [
  {
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "AWS"],
    github: "https://github.com",
    external: "https://example.com",
    image: "dashboard",
  },
  {
    technologies: ["React", "Socket.io", "Node.js", "Monaco Editor", "WebRTC"],
    github: "https://github.com",
    external: "https://example.com",
    image: "collab",
  },
  {
    technologies: ["Next.js", "Python", "FastAPI", "OpenAI", "Plaid API"],
    github: "https://github.com",
    external: "https://example.com",
    image: "finance",
  },
];

const otherProjectsMeta = [
  {
    technologies: ["Go", "SQLite", "Cobra"],
    github: "https://github.com",
  },
  {
    technologies: ["Node.js", "Express", "Redis"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    technologies: ["TypeScript", "MDX", "Tailwind"],
    github: "https://github.com",
  },
  {
    technologies: ["Next.js", "Stripe", "Prisma"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    technologies: ["React Native", "Firebase", "Node.js"],
    github: "https://github.com",
  },
  {
    technologies: ["Astro", "TypeScript", "SCSS"],
    github: "https://github.com",
    external: "https://example.com",
  },
];

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24">
      <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
        <span className="text-primary font-mono text-lg md:text-xl">03.</span>
        {t.projects.title}
        <span className="h-px bg-border flex-1 max-w-xs" />
      </h2>

      {/* Featured Projects */}
      <div className="space-y-24 mb-24">
        {t.projects.featured.map((project, index) => {
          const meta = featuredProjectsMeta[index];
          return (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`md:col-span-7 relative group ${
                  index % 2 === 1 ? "md:col-start-6" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded bg-secondary aspect-video">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/50">
                      {meta.image.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`md:col-span-6 md:absolute ${
                  index % 2 === 1 ? "md:left-0" : "md:right-0"
                } z-10`}
              >
                <p className="font-mono text-primary text-sm mb-2">
                  {t.projects.featuredLabel}
                </p>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <div className="bg-card p-6 rounded shadow-lg mb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 font-mono text-sm text-muted-foreground mb-4 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  {meta.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  <Link
                    href={meta.github}
                    aria-label="GitHub Repository"
                    className="text-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href={meta.external}
                    aria-label="External Link"
                    className="text-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Other Projects */}
      <h3 className="text-xl font-bold text-foreground text-center mb-8">
        {t.projects.otherTitle}
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.projects.other.map((project, index) => {
          const meta = otherProjectsMeta[index];
          return (
            <div
              key={project.title}
              className="group bg-card p-6 rounded hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-4">
                  {meta.github && (
                    <Link
                      href={meta.github}
                      aria-label="GitHub Repository"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  )}
                  {meta.external && (
                    <Link
                      href={meta.external}
                      aria-label="External Link"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                {meta.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
