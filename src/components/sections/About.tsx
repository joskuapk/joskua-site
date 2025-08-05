"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section className="w-full px-6 max-w-5xl mx-auto text-left">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("title")}</h2>
      <p className="text-base md:text-lg mb-4 text-light-blue">
        {t("description1")}
      </p>
      <p className="text-base md:text-lg mb-4 text-light-blue">
        {t("description2")}
      </p>
      <p className="text-base md:text-lg mb-4 text-light-blue">
        {t("description3")}
      </p>
      <p className="text-base md:text-lg font-semibold text-lemon-green">
        {t("languages")}
      </p>
    </section>
  );
}
