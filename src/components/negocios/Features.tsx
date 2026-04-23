"use client";

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
    <section className="negocios-section">
      <div className="negocios-container">
        <div className="negocios-section__header">
          <p className="negocios-eyebrow">{t("eyebrow")}</p>
          <h2>{t("title")}</h2>
          <p>{t("intro")}</p>
        </div>

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
