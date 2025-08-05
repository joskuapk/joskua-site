"use client";
import { useTranslations } from "next-intl";

export default function WhatIDo() {
  const t = useTranslations();
  const services = [
    t("whatIDo.services.1"),
    t("whatIDo.services.2"),
    t("whatIDo.services.3"),
    t("whatIDo.services.4"),
    t("whatIDo.services.5"),
    t("whatIDo.services.6"),
  ];

  return (
    <section className="w-full px-6 max-w-5xl mx-auto text-left">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        {t("whatIDo.title")}
      </h2>
      <p className="text-base md:text-lg mb-10 text-light-blue">
        {t("whatIDo.description")}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border border-lemon-green rounded-lg hover:bg-lemon-green hover:text-deep-blue transition"
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}
