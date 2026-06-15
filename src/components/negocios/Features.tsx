"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

type TextItem = {
  title: string;
  description: string;
};

type FeaturesProps = {
  namespace: "painPoints" | "services";
  variant?: "pain" | "services";
};

export default function Features({
  namespace,
  variant = "services",
}: FeaturesProps) {
  const t = useTranslations(`Negocios.${namespace}`);
  const items = t.raw("items") as TextItem[];

  return (
    <section
      className={`negocios-section negocios-section--${variant}`}
      aria-labelledby={`negocios-${namespace}-title`}
    >
      <div className="negocios-container">
        <div className="negocios-section__header">
          <p className="negocios-eyebrow">{t("eyebrow")}</p>
          <h2 id={`negocios-${namespace}-title`}>{t("title")}</h2>
          <p>{t("intro")}</p>
        </div>

        {variant === "services" && (
          <div className="negocios-services__visual">
            <Image
              src="/negocios-service-outcomes.png"
              alt={t("imageAlt")}
              width={1536}
              height={1024}
              sizes="(min-width: 900px) 72rem, calc(100vw - 2rem)"
              className="negocios-services__image"
            />
          </div>
        )}

        <div
          className={
            variant === "pain"
              ? "negocios-card-grid negocios-card-grid--pain"
              : "negocios-card-grid"
          }
        >
          {items.map((item) => (
            <article className="negocios-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
