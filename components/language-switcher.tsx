"use client";

import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 border border-border rounded-full p-1">
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "px-3 py-1 text-xs font-mono rounded-full transition-all duration-200",
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("es")}
        className={cn(
          "px-3 py-1 text-xs font-mono rounded-full transition-all duration-200",
          language === "es"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
}
