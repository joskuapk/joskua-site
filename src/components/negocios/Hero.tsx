"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getWhatsAppHref } from "@/config/contact";

export default function Hero() {
  const t = useTranslations("Negocios.hero");
  const whatsappHref = getWhatsAppHref();

  return (
    <section className="negocios-hero">
      <div className="negocios-container negocios-hero__grid">
        <div className="negocios-hero__copy">
          <p className="negocios-eyebrow">{t("eyebrow")}</p>
          <h1>{t("headline")}</h1>
          <p className="negocios-lede">{t("subheadline")}</p>

          <div className="negocios-hero__actions">
            <Link href={whatsappHref} className="negocios-button">
              {t("cta")}
            </Link>
            <span>{t("responseTime")}</span>
          </div>
        </div>

        <div className="negocios-hero__visual" aria-label={t("visualLabel")}>
          <Image
            src="/joskuaBanner.svg"
            alt={t("logoAlt")}
            width={360}
            height={92}
            priority
            className="negocios-hero__logo"
          />
          <div className="negocios-signal-grid">
            <div>
              <strong>{t("signals.automation.value")}</strong>
              <span>{t("signals.automation.label")}</span>
            </div>
            <div>
              <strong>{t("signals.commerce.value")}</strong>
              <span>{t("signals.commerce.label")}</span>
            </div>
            <div>
              <strong>{t("signals.support.value")}</strong>
              <span>{t("signals.support.label")}</span>
            </div>
          </div>
        </div>
      </div>

      <Link
        href={whatsappHref}
        className="negocios-whatsapp"
        aria-label={t("floatingCta")}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          width="26"
          height="26"
          fill="currentColor"
        >
          <path d="M16.04 3C9.42 3 4.05 8.3 4.05 14.83c0 2.22.63 4.38 1.82 6.25L4 28l7.12-1.84a12.18 12.18 0 0 0 4.92 1.02C22.66 27.18 28 21.87 28 15.34S22.66 3 16.04 3Zm0 22.06c-1.62 0-3.2-.43-4.58-1.25l-.33-.2-4.22 1.09 1.12-4.05-.22-.35a9.8 9.8 0 0 1-1.52-5.21c0-5.36 4.38-9.72 9.76-9.72s9.76 4.36 9.76 9.72-4.38 9.97-9.77 9.97Zm5.35-7.28c-.29-.15-1.72-.84-1.98-.94-.27-.1-.46-.15-.66.15-.19.29-.75.94-.92 1.13-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.76-1.45-1.7-1.62-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.58-.9-2.16-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43s1.05 2.82 1.19 3.02c.15.2 2.07 3.12 5.01 4.38.7.3 1.25.48 1.67.61.7.22 1.34.19 1.85.12.56-.08 1.72-.69 1.96-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34Z" />
        </svg>
      </Link>
    </section>
  );
}
