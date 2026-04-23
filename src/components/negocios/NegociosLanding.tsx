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

      <section className="negocios-section negocios-section--portfolio">
        <div className="negocios-container">
          <div className="negocios-section__header">
            <p className="negocios-eyebrow">{t("portfolio.eyebrow")}</p>
            <h2>{t("portfolio.title")}</h2>
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

      <section className="negocios-section negocios-about">
        <div className="negocios-container negocios-about__grid">
          <div className="negocios-about__mark">
            <Image
              src="/JLetter.svg"
              alt={t("about.imageAlt")}
              width={220}
              height={220}
              className="negocios-about__image"
            />
          </div>

          <div>
            <p className="negocios-eyebrow">{t("about.eyebrow")}</p>
            <h2>{t("about.title")}</h2>
            <p>{t("about.description")}</p>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}
