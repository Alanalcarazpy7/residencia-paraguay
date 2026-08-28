"use client";
import { useApp } from "../AppContext";
import { Translations } from "../i18n";
import MobileCollapsible from "./MobileCollapsible";
import FadeIn from "./FadeIn";

const STEPS: { titleKey: keyof Translations; descKey: keyof Translations }[] = [
  { titleKey: "process_step1_title", descKey: "process_step1_desc" },
  { titleKey: "process_step2_title", descKey: "process_step2_desc" },
  { titleKey: "process_step3_title", descKey: "process_step3_desc" },
  { titleKey: "process_step4_title", descKey: "process_step4_desc" },
];

export default function Process() {
  const { t } = useApp();

  return (
    <section id="proceso" className="process-section">
      <div className="container">
        <FadeIn as="h2" className="section-title">
          {t.process_title}
        </FadeIn>
        <FadeIn as="p" className="section-subtitle">
          {t.process_subtitle}
        </FadeIn>

        <MobileCollapsible>
          <FadeIn className="process-timeline">
            {STEPS.map((s, i) => (
              <div className="process-step" key={s.titleKey}>
                <div className="step-number">{i + 1}</div>
                <div className="step-content">
                  <h3>{t[s.titleKey]}</h3>
                  <p>{t[s.descKey]}</p>
                </div>
              </div>
            ))}
          </FadeIn>
        </MobileCollapsible>
      </div>
    </section>
  );
}
