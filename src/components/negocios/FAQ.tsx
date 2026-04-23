"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

const whatsappHref =
  "https://wa.me/525545707659?text=Hola%20Joskua,%20vi%20tu%20sitio%20de%20negocios%20y%20me%20interesa%20un%20diagn%C3%B3stico.";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const t = useTranslations("Negocios.faq");
  const items = t.raw("items") as FAQItem[];

  return (
    <section className="negocios-section negocios-final">
      <div className="negocios-container">
        <div className="negocios-section__header">
          <p className="negocios-eyebrow">{t("eyebrow")}</p>
          <h2>{t("title")}</h2>
        </div>

        <div className="negocios-faq-list">
          {items.map((item) => (
            <details key={item.question} className="negocios-faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="negocios-final-cta">
          <h2>{t("finalTitle")}</h2>
          <p>{t("finalIntro")}</p>
          <Link href={whatsappHref} className="negocios-button">
            {t("finalCta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
