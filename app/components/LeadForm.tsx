"use client";
import { useRef } from "react";
import { useApp } from "../AppContext";
import FadeIn from "./FadeIn";

export default function LeadForm() {
  const { t, lang, openWhatsApp } = useApp();
  const formRef = useRef<HTMLFormElement>(null);

  const serviceOptions: [string, string][] = [
    [t.form_service_opt1, t.form_service_opt1],
    [t.form_service_opt2, t.form_service_opt2],
    [t.form_service_opt3, t.form_service_opt3],
    [t.form_service_opt4, t.form_service_opt4],
    [t.form_service_opt5, t.form_service_opt5],
    [t.form_service_opt6, t.form_service_opt6],
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "").trim();

    let waMessage = `*Nuevo Contacto Web*\n\n`;
    waMessage += `*Nombre:* ${name}\n`;
    waMessage += `*Correo:* ${email}\n`;
    waMessage += `*Teléfono:* ${phone}\n`;
    waMessage += `*Interés:* ${service}\n`;
    if (message) waMessage += `*Mensaje:* ${message}\n`;

    waMessage = `${t.wa_lead_greeting}\n\n${waMessage}`;

    form.reset();
    openWhatsApp(waMessage);

    const isMobile =
      typeof window !== "undefined" &&
      (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
        window.innerWidth <= 768);
    if (isMobile) {
      window.alert(t.form_success_mobile);
    }
  }

  return (
    <section className="lead-capture-section">
      <div className="container lead-container">
        <FadeIn className="lead-text">
          <h2>{t.contact_section_title}</h2>
          <p>{t.contact_section_subtitle}</p>
        </FadeIn>
        <FadeIn className="lead-form-wrapper">
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                required
                placeholder={t.form_name}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                required
                placeholder={t.form_email}
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                className="form-control"
                required
                placeholder={t.form_phone}
              />
            </div>
            <div className="form-group">
              <select
                name="service"
                className="form-control"
                required
                defaultValue=""
                key={lang}
              >
                <option value="" disabled>
                  {t.form_service}
                </option>
                {serviceOptions.map(([value, label]) => (
                  <option value={value} key={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                rows={3}
                placeholder={t.form_message}
              />
            </div>
            <button type="submit" className="btn-submit">
              <span>{t.form_submit}</span> <i className="fa-solid fa-paper-plane" />
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
