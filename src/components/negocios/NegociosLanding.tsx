"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import FAQ from "@/components/negocios/FAQ";
import Features from "@/components/negocios/Features";
import Hero from "@/components/negocios/Hero";
import PortfolioCard from "@/components/negocios/PortfolioCard";
import { getWhatsAppHref } from "@/config/contact";

type PortfolioItem = {
  title: string;
  metric: string;
  emphasis: string;
  projectLabel: string;
  projectResult: string;
  clientContextLabel: string;
  clientContext: string[];
  href: string;
  linkLabel: string;
};

type ProcessItem = {
  title: string;
  description: string;
};

export default function NegociosLanding() {
  const t = useTranslations("Negocios");
  const portfolio = t.raw("portfolio.items") as PortfolioItem[];
  const process = t.raw("process.items") as ProcessItem[];
  const whatsappHref = getWhatsAppHref(t("contact.whatsappMessage"));

  return (
    <div className="consulting-landing">
      <Hero />

      <Features namespace="painPoints" variant="pain" />
      <Features namespace="services" />

      <section
        className="negocios-section negocios-conversion"
        aria-labelledby="negocios-mid-cta-title"
      >
        <div className="negocios-container">
          <div className="negocios-conversion__panel">
            <div>
              <p className="negocios-eyebrow">{t("midCta.eyebrow")}</p>
              <h2 id="negocios-mid-cta-title">{t("midCta.title")}</h2>
              <p>{t("midCta.description")}</p>
            </div>
            <div className="negocios-conversion__action">
              <Link
                href={whatsappHref}
                className="negocios-button"
                target="_blank"
                rel="noreferrer"
                data-cta="whatsapp"
                data-cta-location="mid-page"
              >
                {t("midCta.cta")}
              </Link>
              <span>{t("hero.responseTime")}</span>
            </div>
          </div>
        </div>
      </section>

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
                metric={item.metric}
                emphasis={item.emphasis}
                projectLabel={item.projectLabel}
                projectResult={item.projectResult}
                clientContextLabel={item.clientContextLabel}
                clientContext={item.clientContext}
                href={item.href}
                linkLabel={item.linkLabel}
              />
            ))}
          </div>
          <p className="negocios-portfolio-disclaimer">
            {t("portfolio.disclaimer")}
          </p>
        </div>
      </section>

      <section
        className="negocios-section negocios-process"
        aria-labelledby="negocios-process-title"
      >
        <div className="negocios-container">
          <div className="negocios-section__header">
            <p className="negocios-eyebrow">{t("process.eyebrow")}</p>
            <h2 id="negocios-process-title">{t("process.title")}</h2>
            <p>{t("process.intro")}</p>
          </div>

          <ol className="negocios-process__grid">
            {process.map((item, index) => (
              <li key={item.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
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
