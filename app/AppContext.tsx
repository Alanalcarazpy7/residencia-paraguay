"use client";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { Lang, Translations, translations } from "./i18n";

export const WHATSAPP_NUMBER = "595974317461";

interface AppContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
  view: "home" | "about";
  goHome: () => void;
  goAbout: () => void;
  openWhatsApp: (message: string) => void;
  qr: { open: boolean; imgUrl: string; waLink: string };
  closeQr: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

function isMobileDevice() {
  if (typeof navigator === "undefined") return false;
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth <= 768
  );
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");
  const [view, setView] = useState<"home" | "about">("home");
  const [qr, setQr] = useState({ open: false, imgUrl: "", waLink: "" });

  useEffect(() => {
    try {
      const saved = localStorage.getItem("userLang") as Lang | null;
      if (saved && translations[saved]) {
        setLangState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      /* localStorage no disponible */
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    document.documentElement.lang = next;
    try {
      localStorage.setItem("userLang", next);
    } catch {
      /* ignore */
    }
  };

  const openWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    if (isMobileDevice()) {
      window.open(waLink, "_blank");
    } else {
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
        waLink
      )}`;
      setQr({ open: true, imgUrl: qrUrl, waLink });
    }
  };

  const closeQr = () => setQr((prev) => ({ ...prev, open: false }));

  const value = useMemo<AppContextValue>(
    () => ({
      lang,
      setLang,
      t: translations[lang],
      view,
      goHome: () => {
        setView("home");
        if (typeof window !== "undefined") window.scrollTo(0, 0);
      },
      goAbout: () => {
        setView("about");
        if (typeof window !== "undefined") window.scrollTo(0, 0);
      },
      openWhatsApp,
      qr,
      closeQr,
    }),
    [lang, view, qr]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp debe usarse dentro de <AppProvider>");
  return ctx;
}
