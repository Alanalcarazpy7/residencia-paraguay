"use client";
import { useApp } from "../AppContext";

export default function FloatingButtons() {
  const { t, openWhatsApp } = useApp();

  return (
    <a
      href="#"
      className="wa-float"
      aria-label={t.wa_float_label}
      onClick={(e) => {
        e.preventDefault();
        openWhatsApp(t.wa_general_msg);
      }}
    >
      <i className="fa-brands fa-whatsapp" />
      <span className="wa-float-tooltip">{t.wa_tooltip}</span>
    </a>
  );
}
