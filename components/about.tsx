"use client";

import { useLanguage } from "@/contexts/language-context";

const skills = [
  "N8N",
  "Java",
  "spring boot",
  "React.js",
  "Angular",
  "tailwind CSS",
  "JavaScript (ES6+)",
  "TypeScript",
  "Python",
  "MongoDB",
  "Docker",
  "github",
];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24">
      <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-8">
        <span className="text-primary font-mono text-lg md:text-xl">01.</span>
        {t.about.title}
        <span className="h-px bg-border flex-1 max-w-xs" />
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
          <p className="pt-2">{t.about.techTitle}</p>
          <ul className="grid grid-cols-2 gap-2 pt-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-2 font-mono text-sm"
              >
                <span className="text-primary">▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative group w-full max-w-sm mx-auto">
  {/* Image on top */}
  <div className="relative z-10 rounded overflow-hidden">
    <img
      src="/portrait.jpg"
      alt="Edrian Díaz"
      className="w-full h-auto block rounded"
    />
  </div>

  {/* Decorative offset border behind */}
  <div className="absolute inset-0 border-2 border-primary rounded translate-x-4 translate-y-4 z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
</div>
      </div>
    </section>
  );
}
