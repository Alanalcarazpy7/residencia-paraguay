"use client";
import { useApp } from "../AppContext";
import FadeIn from "./FadeIn";

export default function WelcomeVideo() {
  const { t } = useApp();

  return (
    <section className="welcome-video-section">
      <div className="container text-center">
        <FadeIn>
          <h2>{t.video_title}</h2>
          <div className="video-wrapper">
            <video controls playsInline>
              <source src="/videos/bienvenida.mp4" type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
