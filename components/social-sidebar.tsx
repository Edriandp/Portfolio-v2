"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
];

export function SocialSidebar() {
  return (
    <>
      {/* Left Side - Social Links */}
      <div className="hidden md:flex fixed bottom-0 left-6 lg:left-12 flex-col items-center gap-6">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="w-5 h-5" />
          </Link>
        ))}
        <div className="w-px h-24 bg-muted-foreground" />
      </div>

      {/* Right Side - Email */}
      <div className="hidden md:flex fixed bottom-0 right-6 lg:right-12 flex-col items-center gap-6">
        <Link
          href="mailto:alex@example.com"
          className="font-mono text-xs text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200"
          style={{ writingMode: "vertical-rl" }}
        >
          alex@example.com
        </Link>
        <div className="w-px h-24 bg-muted-foreground" />
      </div>
    </>
  );
}
