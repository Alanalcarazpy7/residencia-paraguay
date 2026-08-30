"use client";
import { useEffect, useRef, useState } from "react";
import { useApp } from "../AppContext";
import { Lang } from "../i18n";

const LANGS: { code: Lang; flag: string; label: string }[] = [
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "pt", flag: "🇧🇷", label: "Português" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useApp();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  useEffect(() => {
    if (!open) return;
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        type="button"
        className="lang-switcher-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Cambiar idioma / Change language / Mudar idioma"
      >
        <i className="fa-solid fa-globe" aria-hidden="true" />
        <span>
          {current.flag} {current.code.toUpperCase()}
        </span>
        <i
          className={`fa-solid fa-chevron-down lang-switcher-chevron${open ? " open" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul className="lang-switcher-menu" role="listbox">
          {LANGS.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                className={`lang-switcher-option${l.code === lang ? " active" : ""}`}
                role="option"
                aria-selected={l.code === lang}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
              >
                <span className="lang-switcher-flag">{l.flag}</span>
                <span>{l.label}</span>
                {l.code === lang && <i className="fa-solid fa-check" aria-hidden="true" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
