"use client";
import { useState } from "react";
import { useApp } from "../AppContext";
import { Translations } from "../i18n";
import FadeIn from "./FadeIn";

const ITEMS: { qKey: keyof Translations; aKey: keyof Translations }[] = [
  { qKey: "faq_q1", aKey: "faq_a1" },
  { qKey: "faq_q2", aKey: "faq_a2" },
  { qKey: "faq_q3", aKey: "faq_a3" },
  { qKey: "faq_q4", aKey: "faq_a4" },
];

export default function Faq() {
  const { t } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="faq-section">
      <div className="container faq-container">
        <FadeIn className="section-header text-center" style={{ marginBottom: 30 }}>
          <span className="badge-alert">{t.faq_badge}</span>
          <h2>{t.faq_title}</h2>
        </FadeIn>
        <FadeIn className="faq-list">
          {ITEMS.map((item, i) => {
            const active = openIndex === i;
            return (
              <div className={`faq-item${active ? " active" : ""}`} key={item.qKey}>
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(active ? null : i)}
                >
                  <span>{t[item.qKey]}</span>
                  <i className="fa-solid fa-chevron-down" />
                </button>
                <div className="faq-answer">
                  <p>{t[item.aKey]}</p>
                </div>
              </div>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
}
