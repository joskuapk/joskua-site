"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="w-full px-6 py-24 max-w-5xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        {t("hero.title")}
      </h1>
      <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-light-blue">
        {t("hero.description")}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="#contact"
          className="px-6 py-3 bg-lemon-green text-deep-blue rounded font-semibold hover:opacity-90 transition"
        >
          {t("hero.cta.work")}
        </a>
        <Link
          href="/CV_Joskua_Olivares.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="px-6 py-3 border border-lemon-green text-lemon-green rounded font-semibold hover:bg-lemon-green hover:text-deep-blue transition">
            {t("hero.cta.cv")}
          </span>
        </Link>
      </div>
    </section>
  );
}
