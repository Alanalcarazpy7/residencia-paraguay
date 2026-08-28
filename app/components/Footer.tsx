"use client";
import Link from "next/link";
import { useApp, WHATSAPP_NUMBER } from "../AppContext";

export default function Footer() {
  const { t } = useApp();

  return (
    <footer id="contacto">
      <div className="container footer-grid">
        <div className="footer-info">
          <h3>Lic. Roberto Morinigo Alvarenga</h3>
          <p>{t.footer_desc}</p>
        </div>
        <div className="footer-contact">
          <h4>{t.footer_contact}</h4>
          <p>
            <i className="fa-solid fa-location-dot" /> <span>{t.footer_loc}</span>
          </p>
          <p>
            <i className="fa-solid fa-phone" />{" "}
            <a href={`tel:+${WHATSAPP_NUMBER}`}>+595 974 317 461</a>
          </p>
          <p>
            <i className="fa-solid fa-envelope" />{" "}
            <a href="mailto:ruppertmorinigo1@hotmail.com">
              ruppertmorinigo1@hotmail.com
            </a>
          </p>
          <p>
            <i className="fa-brands fa-whatsapp" />{" "}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.footer_wa}
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t.footer_copy}</p>
        <p>
          <Link href="/politica-de-privacidad" className="footer-legal-link">
            {t.privacy_policy_link}
          </Link>
        </p>
        <a
          href="https://solvatech.com.py/"
          target="_blank"
          rel="noopener noreferrer"
          className="dev-credit"
        >
          <span className="dev-credit-icon">
            <i className="fa-solid fa-arrow-up-right-from-square" />
          </span>
          {t.dev_credit_by} <strong>SolvaTech</strong>
        </a>
      </div>
    </footer>
  );
}
