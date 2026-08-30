"use client";
import { useState } from "react";
import Image from "next/image";
import { useApp } from "../AppContext";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV_LINKS: { id: string; key: "nav_inicio" | "nav_servicios" | "nav_cedula" }[] = [
  { id: "inicio", key: "nav_inicio" },
  { id: "servicios", key: "nav_servicios" },
  { id: "cedula", key: "nav_cedula" },
];

export default function Navbar() {
  const { t, view, goHome, goAbout, openWhatsApp } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollToId(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  function handleNavClick(e: React.MouseEvent, id: string) {
    e.preventDefault();
    setMenuOpen(false);
    if (view === "about") {
      goHome();
      setTimeout(() => scrollToId(id), 60);
    } else {
      scrollToId(id);
    }
  }

  function handleLogoClick(e: React.MouseEvent) {
    e.preventDefault();
    setMenuOpen(false);
    goHome();
  }

  function handleAboutClick(e: React.MouseEvent) {
    e.preventDefault();
    setMenuOpen(false);
    goAbout();
  }

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#" className="logo" onClick={handleLogoClick}>
          <Image
            src="/images/logo2.png"
            alt="Logo Integración"
            className="logo-img"
            width={45}
            height={45}
          />
          <div className="logo-text">
            <span className="logo-title">Integración</span>
            <span className="logo-subtitle">{t.logo_subtitle}</span>
          </div>
        </a>

        <div className="nav-right">
          <nav className={`nav-menu${menuOpen ? " active" : ""}`}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="nav-link"
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {t[link.key]}
              </a>
            ))}
            <a href="#sobre-mi" className="nav-link" onClick={handleAboutClick}>
              {t.nav_sobre_mi}
            </a>
            <a
              href="#"
              className="btn-contacto-nav"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                openWhatsApp(t.wa_general_msg);
              }}
            >
              <i className="fa-brands fa-whatsapp" /> {t.nav_contacto}
            </a>
          </nav>

          <div className="nav-actions">
            <LanguageSwitcher />
            <button
              className="nav-toggle"
              aria-label={t.menu_open_label}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
