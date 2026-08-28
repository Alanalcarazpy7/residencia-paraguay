"use client";
import { useApp } from "../AppContext";
import MobileCollapsible from "./MobileCollapsible";
import FadeIn from "./FadeIn";

export default function Requirements() {
  const { t } = useApp();

  const civilItems = [
    { label: t.req_col2_1_label, text: t.req_col2_1_text },
    { label: t.req_col2_2_label, text: t.req_col2_2_text },
    { label: t.req_col2_3_label, text: t.req_col2_3_text },
  ];

  const basicDocs = [
    t.req_col1_1,
    t.req_col1_2,
    t.req_col1_3,
    t.req_col1_4,
    t.req_col1_5,
    t.req_col1_6,
  ];

  return (
    <section id="cedula" className="requirements-section">
      <div className="container">
        <FadeIn as="h2" className="section-title text-white">
          {t.req_title}
        </FadeIn>
        <FadeIn as="p" className="section-subtitle text-light">
          {t.req_subtitle}
        </FadeIn>

        <MobileCollapsible>
          <FadeIn className="requirements-box">
            <div className="req-column">
              <h3>
                <i className="fa-solid fa-file-invoice" /> {t.req_col1_title}
              </h3>
              <ul className="req-list">
                {basicDocs.map((item, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-check" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="req-column">
              <h3>
                <i className="fa-solid fa-heart" /> {t.req_col2_title}
              </h3>
              <ul className="req-list">
                {civilItems.map((item) => (
                  <li key={item.label}>
                    <strong>{item.label}</strong> {item.text}
                  </li>
                ))}
              </ul>

              <div className="important-notes">
                <h4>
                  <i className="fa-solid fa-triangle-exclamation" /> {t.req_notes_title}
                </h4>
                <p>• {t.req_notes_1}</p>
                <p>• {t.req_notes_2}</p>
                <p>
                  •&nbsp;{t.req_notes_3_pre}
                  <strong>{t.req_notes_3_strong}</strong>
                  {t.req_notes_3_post}
                </p>
              </div>
            </div>
          </FadeIn>
        </MobileCollapsible>
      </div>
    </section>
  );
}
