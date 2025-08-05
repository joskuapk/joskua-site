"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="mt-16 w-full border-t border-light-blue text-light-blue text-sm text-center py-6">
      <img
        src="/joskuaBanner.svg"
        alt="Joskua logo"
        className="mx-auto mb-4 h-8"
      />
      <p>
        {t("madeWith")}{" "}
        <span className="text-lemon-green font-semibold">Joskua</span>
      </p>
      <p className="mt-1">
        {t("shortVersion")}{" "}
        <a
          href="/CV_Joskua_Olivares.pdf"
          className="underline hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("downloadCV")}
        </a>
        |
        <a
          href="mailto:joskua.olivares@gmail.com"
          className="underline hover:text-white"
        >
          {t("emailMe")}
        </a>
      </p>
    </footer>
  );
}
