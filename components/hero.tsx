"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

const socialLinks = [
  { icon: Github, href: "https://github.com/Edriandp", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/edrian-díaz-pérez-4471032bb/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:edriandiazperez3@gmail.com", label: "Email" },
];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="space-y-6">
        <p className="text-primary font-mono text-sm md:text-base">
          {t.hero.greeting}
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
          {t.hero.name}
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground">
          {t.hero.tagline}
        </h2>
        <p className="max-w-xl text-muted-foreground leading-relaxed">
          {t.hero.description}
        </p>
        <div className="flex gap-6 pt-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-6 h-6" />
            </Link>
          ))}
        </div>
        <div className="pt-8">
          <Link
            href="#projects"
            className="inline-block border border-primary text-primary px-6 py-3 rounded font-mono text-sm hover:bg-primary/10 transition-colors duration-200"
          >
            {t.hero.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
