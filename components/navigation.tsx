"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";
import { LanguageSwitcher } from "./language-switcher";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg py-4"
          : "py-6"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-primary font-bold text-2xl hover:opacity-80 transition-opacity"
        >
          AC
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-foreground hover:text-primary transition-colors font-mono"
                >
                  <span className="text-primary">0{index + 1}.</span> {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/resume.pdf"
            className="border border-primary text-primary px-4 py-2 rounded text-sm font-mono hover:bg-primary/10 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.nav.resume}
          </Link>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <button
            className="text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md md:hidden transition-transform duration-300 z-40",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <ul className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-lg text-foreground hover:text-primary transition-colors font-mono"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-primary block text-center text-sm mb-1">
                    0{index + 1}.
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/resume.pdf"
                className="border border-primary text-primary px-8 py-4 rounded text-sm font-mono hover:bg-primary/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.resume}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
