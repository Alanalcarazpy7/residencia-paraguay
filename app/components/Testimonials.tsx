"use client";
import { useApp } from "../AppContext";
import { Translations } from "../i18n";
import FadeIn from "./FadeIn";

const ITEMS: {
  name: string;
  initial: string;
  countryKey: keyof Translations;
  textKey: keyof Translations;
}[] = [
  { name: "Michael B.", initial: "M", countryKey: "test1_country", textKey: "test1_text" },
  { name: "Julia S.", initial: "J", countryKey: "test2_country", textKey: "test2_text" },
  {
    name: "Carlos y Maria",
    initial: "C",
    countryKey: "test3_country",
    textKey: "test3_text",
  },
];

export default function Testimonials() {
  const { t } = useApp();

  return (
    <section id="testimonios" className="testimonials-section">
      <div className="container">
        <FadeIn as="h2" className="section-title">
          {t.test_title}
        </FadeIn>
        <FadeIn as="p" className="section-subtitle">
          {t.test_subtitle}
        </FadeIn>

        <div className="testimonials-grid">
          {ITEMS.map((item) => (
            <FadeIn className="testimonial-card" key={item.name}>
              <div className="test-header">
                <div className="test-avatar">{item.initial}</div>
                <div className="test-info">
                  <h4>{item.name}</h4>
                  <span className="test-country">{t[item.countryKey]}</span>
                </div>
              </div>
              <div className="test-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i className="fa-solid fa-star" key={i} />
                ))}
              </div>
              <p>&ldquo;{t[item.textKey]}&rdquo;</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
