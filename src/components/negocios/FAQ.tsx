"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { getNegociosWhatsAppPath } from "@/config/contact";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const locale = useLocale();
  const t = useTranslations("Negocios.faq");
  const items = t.raw("items") as FAQItem[];
  const whatsappHref = getNegociosWhatsAppPath(locale);

  return (
    <section
      className="negocios-section negocios-final"
      aria-labelledby="negocios-faq-title"
    >
      <div className="negocios-container">
        <div className="negocios-section__header">
          <p className="negocios-eyebrow">{t("eyebrow")}</p>
          <h2 id="negocios-faq-title">{t("title")}</h2>
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
          <Link
            href={whatsappHref}
            className="negocios-button"
            data-cta="whatsapp"
            data-cta-location="final"
          >
            {t("finalCta")}
          </Link>
          <span>{t("responseTime")}</span>
        </div>
      </div>
    </section>
  );
}
