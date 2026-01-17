"use client";
import { useTranslations } from "next-intl";

export default function Results() {
  const t = useTranslations("results");

  const results = [
    { value: t("1.value"), description: t("1.label") },
    { value: t("2.value"), description: t("2.label") },
    { value: t("3.value"), description: t("3.label") },
    { value: t("4.value"), description: t("4.label") },
    { value: t("5.value"), description: t("5.label") },
  ];

  return (
    <section className="w-full px-6  max-w-5xl mx-auto text-left">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">{t("title")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {results.map((item, index) => (
          <div
            key={index}
            className="p-6 border border-lemon-green rounded-lg hover:bg-primary-500 hover:text-background-500 transition"
          >
            <p className="text-2xl font-bold mb-2">{item.value}</p>
            <p className="text-light-blue">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
