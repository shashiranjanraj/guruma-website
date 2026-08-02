"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import translations from "./translations";

type Lang = "en" | "hi";

interface LangContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextValue | undefined>(undefined);

const STORAGE_KEY = "guruma-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("hi");
  const [mounted, setMounted] = useState(false);

  // Read saved preference from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "hi") {
        setLang(saved);
      }
    } catch {
      // localStorage unavailable (SSR, private browsing, etc.) — keep default
    }
    setMounted(true);
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === "en" ? "hi" : "en";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore storage errors
      }
      return next;
    });
  }, []);

  const t = useCallback(
    (key: string): string => {
      const dict = translations[lang];
      if (dict && key in dict) {
        return dict[key];
      }
      // Fallback: try the other language, then return the key itself
      const fallback = translations[lang === "en" ? "hi" : "en"];
      if (fallback && key in fallback) {
        return fallback[key];
      }
      return key;
    },
    [lang]
  );

  // Prevent hydration mismatch: render children only after mount
  // so the server-rendered "hi" default matches the first client render
  if (!mounted) {
    return (
      <LangContext.Provider value={{ lang: "hi", toggleLang, t }}>
        {children}
      </LangContext.Provider>
    );
  }

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used within a <LangProvider>");
  }
  return ctx;
}
