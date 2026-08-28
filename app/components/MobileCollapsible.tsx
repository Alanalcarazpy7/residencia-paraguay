"use client";
import { useState, ReactNode } from "react";
import { useApp } from "../AppContext";

export default function MobileCollapsible({ children }: { children: ReactNode }) {
  const { t } = useApp();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`mobile-toggle-btn${open ? " active" : ""}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{t.btn_view_details}</span> <i className="fa-solid fa-chevron-down" />
      </button>
      <div className={`mobile-collapsible-content${open ? " active" : ""}`}>
        {children}
      </div>
    </>
  );
}
