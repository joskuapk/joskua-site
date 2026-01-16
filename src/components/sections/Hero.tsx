"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import GlassCard from "../common/GlassCard";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="hero-section flex flex-col items-center justify-center p-20">
<GlassCard className="flex flex-col items-center justify-center p-15">
        <h1 aria-label="Hero title" className="hero-title py-8 max-w-250 text-center">
          <span>{t("hero.titleLine1")}</span>
          <span>{t("hero.titleLine2")}</span>
        </h1>
        <p aria-label="Hero description" className="hero-description max-w-250">
          {t.rich("hero.description", {
            name: (chunks) => (
              <span className="name">{chunks}</span>
            ),
            accent: (chunks) => (
              <span className="accent">{chunks}</span>
            ),
          })}
        </p>
        <p className="py-4">
          {t("hero.tagline")}
        </p>
        <div aria-label="Hero actions" className="inline-flex gap-4 py-4">
          <div className="hero-action-btn">
            <a
              href="#contact"
              className="nav-button contact-btn px-4 py-2"
            >
              {t("hero.cta.work")}
            </a>
          </div>
          <div className="hero-action-btn">
            <Link
              href="/CV_Joskua_Olivares.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-button"
            >
              <span>
                {t("hero.cta.cv")}
              </span>
            </Link>
          </div>
        </div>
</GlassCard>
    </section>
  );

}
