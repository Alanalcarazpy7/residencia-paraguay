"use client";
import { useApp } from "../AppContext";
import FadeIn from "./FadeIn";

export default function Hero() {
  const { t, openWhatsApp } = useApp();

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-slider" aria-hidden="true">
        <div className="slide" style={{ backgroundImage: "url('/images/fondo1.webp')" }} />
        <div className="slide" style={{ backgroundImage: "url('/images/fondo2.webp')" }} />
        <div className="slide" style={{ backgroundImage: "url('/images/fondo3.png')" }} />
        <div className="slider-overlay" />
      </div>

      <div className="container hero-container">
        <FadeIn className="hero-content">
          <p className="languages-badges">
            <span>{t.badge_es}</span> • <span>{t.badge_en}</span> •{" "}
            <span>{t.badge_pt}</span>
          </p>
          <h1>
            {t.hero_title_line}
            <br />
            <span className="highlight">{t.hero_title_highlight}</span>
          </h1>
          <p>{t.hero_desc}</p>
          <div className="hero-features">
            <span>
              <i className="fa-solid fa-scale-balanced" /> {t.hero_feat1}
            </span>
            <span>
              <i className="fa-solid fa-user-shield" /> {t.hero_feat2}
            </span>
          </div>
          <div className="hero-cta-wrapper">
            <a
              href="#"
              className="btn-cta"
              onClick={(e) => {
                e.preventDefault();
                openWhatsApp(t.wa_general_msg);
              }}
            >
              {t.hero_cta} <i className="fa-solid fa-arrow-right" />
            </a>
            <p className="hero-trust-signal">
              <i className="fa-solid fa-check" /> {t.hero_trust}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
