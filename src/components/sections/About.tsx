"use client";

import { useTranslations } from "next-intl";
import ScrambleOnView from "../common/ScrambleOnView";

export default function About() {
  const t = useTranslations("about");

  return (
    <section className="w-full px-6 max-w-5xl mx-auto text-left">
      <h2 className="mb-6">
        <ScrambleOnView text={t("title")} />
      </h2>
      <p className="mb-4">{t("description1")}</p>
      <p className="mb-4">{t("description2")}</p>
      <p className="mb-4">{t("description3")}</p>
      <p className="mb-4">{t("languages")}</p>
    </section>
  );
}
