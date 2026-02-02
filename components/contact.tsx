"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 text-center max-w-2xl mx-auto">
      <p className="font-mono text-primary text-sm mb-4">{t.contact.label}</p>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
        {t.contact.title}
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-12">
        {t.contact.description}
      </p>
      <Link
        href="https://mail.google.com/mail/?view=cm&fs=1&to=edriandiazperez3@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-primary text-primary px-8 py-4 rounded font-mono text-sm hover:bg-primary/10 transition-colors duration-200 animate-bounce"
      >
        {t.contact.cta}
      </Link>
    </section>
  );
}
