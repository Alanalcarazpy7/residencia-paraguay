"use client";
import { useApp } from "../AppContext";
import { Translations } from "../i18n";
import MobileCollapsible from "./MobileCollapsible";
import FadeIn from "./FadeIn";

const SERVICES: {
  icon: string;
  titleKey: keyof Translations;
  descKey: keyof Translations;
}[] = [
  { icon: "fa-passport", titleKey: "serv_1_title", descKey: "serv_1_desc" },
  {
    icon: "fa-house-chimney-user",
    titleKey: "serv_2_title",
    descKey: "serv_2_desc",
  },
  {
    icon: "fa-building-columns",
    titleKey: "serv_3_title",
    descKey: "serv_3_desc",
  },
  {
    icon: "fa-earth-americas",
    titleKey: "serv_4_title",
    descKey: "serv_4_desc",
  },
  { icon: "fa-id-card-clip", titleKey: "serv_5_title", descKey: "serv_5_desc" },
  {
    icon: "fa-briefcase",
    titleKey: "serv_suace_title",
    descKey: "serv_suace_desc",
  },
];

export default function Services() {
  const { t, openWhatsApp } = useApp();

  return (
    <section id="servicios" className="services-section">
      <div className="container">
        <FadeIn as="h2" className="section-title">
          {t.serv_title}
        </FadeIn>
        <FadeIn as="p" className="section-subtitle">
          {t.serv_subtitle}
        </FadeIn>

        <MobileCollapsible>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <FadeIn className="service-card" key={s.titleKey}>
                <div className="service-icon">
                  <i className={`fa-solid ${s.icon}`} />
                </div>
                <h3>{t[s.titleKey]}</h3>
                <p>{t[s.descKey]}</p>
                <button
                  className="btn-service-wa"
                  onClick={() => openWhatsApp(`${t.wa_prefix}${t[s.titleKey]}`)}
                >
                  <i className="fa-brands fa-whatsapp" /> {t.btn_asesorarme}
                </button>
              </FadeIn>
            ))}
          </div>
        </MobileCollapsible>
      </div>
    </section>
  );
}
