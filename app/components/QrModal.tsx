"use client";
import { useApp } from "../AppContext";

export default function QrModal() {
  const { t, qr, closeQr } = useApp();

  return (
    <div
      className={`qr-modal${qr.open ? " active" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeQr();
      }}
    >
      <div className="qr-content fade-in visible">
        <button className="qr-close-btn" onClick={closeQr} aria-label="Cerrar">
          <i className="fa-solid fa-xmark" />
        </button>
        <h3>{t.qr_title}</h3>
        <p>{t.qr_instruction}</p>
        <div className="qr-img-wrapper">
          {qr.imgUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={qr.imgUrl} alt="WhatsApp QR Code" width={200} height={200} />
          ) : null}
        </div>
        <a
          href={qr.waLink || "#"}
          className="btn-outline qr-alt-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.qr_alt_btn}
        </a>
      </div>
    </div>
  );
}
