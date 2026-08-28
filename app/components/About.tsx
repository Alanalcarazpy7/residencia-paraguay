"use client";
import Image from "next/image";
import { useApp } from "../AppContext";
import FadeIn from "./FadeIn";

export default function About() {
  const { t, goHome, openWhatsApp } = useApp();

  return (
    <section id="sobre-mi" className="about-section">
      <div className="container about-container">
        <FadeIn className="about-image">
          <Image
            src="/images/roberto.jpeg"
            alt="Lic. Roberto Morinigo Alvarenga"
            className="profile-img"
            width={380}
            height={507}
            unoptimized
          />
        </FadeIn>
        <FadeIn className="about-text">
          <span className="badge-alert">{t.about_badge}</span>
          <h2>Lic. Roberto Morinigo Alvarenga</h2>
          <h3>{t.about_subtitle}</h3>
          <p dangerouslySetInnerHTML={{ __html: t.about_p1 }} />
          <p dangerouslySetInnerHTML={{ __html: t.about_p2 }} />
          <div style={{ display: "flex", gap: 15, marginTop: 20, flexWrap: "wrap" }}>
            <a
              href="#"
              className="btn-dark-cta"
              onClick={(e) => {
                e.preventDefault();
                openWhatsApp(t.wa_general_msg);
              }}
            >
              {t.about_cta} <i className="fa-solid fa-arrow-right" />
            </a>
            <button
              type="button"
              className="btn-outline"
              onClick={() => goHome()}
            >
              {t.btn_back_home}
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
