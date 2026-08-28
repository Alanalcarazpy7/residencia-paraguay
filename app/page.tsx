"use client";
import { AppProvider, useApp } from "./AppContext";
import { Lang, langNames } from "./i18n";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WelcomeVideo from "./components/WelcomeVideo";
import Services from "./components/Services";
import Process from "./components/Process";
import Requirements from "./components/Requirements";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import About from "./components/About";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import QrModal from "./components/QrModal";

function MobileLangFab() {
  const { lang, setLang } = useApp();
  return (
    <div className="lang-selector mobile-lang-fab">
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as Lang)}
        aria-label="Idioma"
      >
        {(Object.keys(langNames) as Lang[]).map((code) => (
          <option key={code} value={code}>
            {langNames[code]}
          </option>
        ))}
      </select>
    </div>
  );
}

function SiteContent() {
  const { view } = useApp();

  return (
    <main>
      <Navbar />

      {view === "home" ? (
        <div id="home-view">
          <Hero />
          <WelcomeVideo />
          <Services />
          <Process />
          <Requirements />
          <Testimonials />
          <Faq />
        </div>
      ) : (
        <div id="about-view">
          <About />
        </div>
      )}

      <LeadForm />
      <Footer />

      <MobileLangFab />
      <FloatingButtons />
      <QrModal />
    </main>
  );
}

export default function Home() {
  return (
    <AppProvider>
      <SiteContent />
    </AppProvider>
  );
}
