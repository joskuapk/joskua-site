"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import FAQ from "@/components/negocios/FAQ";
import Features from "@/components/negocios/Features";
import Hero from "@/components/negocios/Hero";
import PortfolioCard from "@/components/negocios/PortfolioCard";

type PortfolioItem = {
  title: string;
  description: string;
  metric: string;
  emphasis: string;
};

export default function NegociosLanding() {
  const t = useTranslations("Negocios");
  const portfolio = t.raw("portfolio.items") as PortfolioItem[];

  return (
    <div className="consulting-landing">
      <Hero />

      <Features namespace="painPoints" variant="pain" />
      <Features namespace="services" />

      <section
        className="negocios-section negocios-section--portfolio"
        aria-labelledby="negocios-portfolio-title"
      >
        <div className="negocios-container">
          <div className="negocios-section__header">
            <p className="negocios-eyebrow">{t("portfolio.eyebrow")}</p>
            <h2 id="negocios-portfolio-title">{t("portfolio.title")}</h2>
            <p>{t("portfolio.intro")}</p>
          </div>

          <div className="negocios-portfolio-grid">
            {portfolio.map((item) => (
              <PortfolioCard
                key={item.title}
                title={item.title}
                description={item.description}
                metric={item.metric}
                emphasis={item.emphasis}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="negocios-section negocios-about"
        aria-labelledby="negocios-about-title"
      >
        <div className="negocios-container negocios-about__grid">
          <div className="negocios-about__visual">
            <Image
              src="/technology-consulting-mexican-businesses.webp"
              alt={t("about.imageAlt")}
              width={1440}
              height={960}
              sizes="(min-width: 900px) 42vw, calc(100vw - 2rem)"
              className="negocios-about__image"
            />
          </div>

          <div className="negocios-about__copy">
            <p className="negocios-eyebrow">{t("about.eyebrow")}</p>
            <h2 id="negocios-about-title">{t("about.title")}</h2>
            <p>{t("about.description")}</p>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}
