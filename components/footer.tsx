"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 text-center">
      {/* Mobile Social Links */}
      <div className="flex justify-center gap-6 mb-6 md:hidden">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="w-5 h-5" />
          </Link>
        ))}
      </div>

      <p className="font-mono text-xs text-muted-foreground">{t.footer.credit}</p>
    </footer>
  );
}
