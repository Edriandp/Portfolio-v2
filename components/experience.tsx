"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";

const technologies = [
  ["Next.js", "TypeScript", "PostgreSQL", "Redis", "AWS"],
  ["React", "Node.js", "MongoDB", "GraphQL", "Docker"],
  ["React", "JavaScript", "SCSS", "Jest", "Git"],
  ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
];

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24">
      <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
        <span className="text-primary font-mono text-lg md:text-xl">02.</span>
        {t.experience.title}
        <span className="h-px bg-border flex-1 max-w-xs" />
      </h2>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Tab List */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-border">
          {t.experience.jobs.map((exp, index) => (
            <button
              key={exp.company}
              onClick={() => setActiveTab(index)}
              className={cn(
                "px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all duration-200",
                "hover:bg-secondary hover:text-primary",
                "border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px",
                activeTab === index
                  ? "text-primary border-primary bg-secondary"
                  : "text-muted-foreground border-transparent"
              )}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        <div className="py-4 md:py-0 md:px-4 min-h-[400px]">
          {t.experience.jobs.map((exp, index) => (
            <div
              key={exp.company}
              className={cn(
                "transition-opacity duration-200",
                activeTab === index ? "opacity-100" : "opacity-0 hidden"
              )}
            >
              <h3 className="text-xl font-medium text-foreground">
                {exp.role}{" "}
                <span className="text-primary">@ {exp.company}</span>
              </h3>
              <p className="font-mono text-sm text-muted-foreground mt-1 mb-6">
                {exp.period}
              </p>
              <ul className="space-y-4">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4 text-muted-foreground leading-relaxed"
                  >
                    <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                {technologies[index]?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
