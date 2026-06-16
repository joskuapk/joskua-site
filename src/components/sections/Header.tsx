"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { getNegociosWhatsAppPath } from "@/config/contact";

const locales = ["en", "es"];

function localizedHref(pathname: string, locale: string) {
  const segments = pathname.split("/");
  const currentLocale = segments[1];

  if (locales.includes(currentLocale)) {
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return `/${locale}${pathname === "/" ? "" : pathname}`;
}

export function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Negocios.header");
  const englishHref = localizedHref(pathname, "en");
  const spanishHref = localizedHref(pathname, "es");
  const homeHref = `/${locale}`;
  const isNegocios = pathname.endsWith("/negocios");

  return (
    <header className="site-header">
      <Link href={homeHref} className="site-header__logo" aria-label={t("home")}>
        <Image
          src="/joskuaBanner.svg"
          alt={t("logoAlt")}
          width={360}
          height={92}
          className="site-header__logo-image"
        />
      </Link>

      <div className="site-header__actions">
        {isNegocios && (
          <Link
            href={getNegociosWhatsAppPath(locale)}
            className="site-header__cta"
            data-cta="whatsapp"
            data-cta-location="header"
          >
            {t("whatsappCta")}
          </Link>
        )}

        <nav aria-label={t("languageSelector")} className="site-language">
        <Link
          href={englishHref}
          className="site-language__link"
          aria-current={locale === "en" ? "page" : undefined}
        >
          <Image
            src="/us-flag.png"
            alt=""
            width={24}
            height={24}
            className="site-language__flag"
          />
          <span>EN</span>
        </Link>

        <span className="site-language__divider" aria-hidden="true">
          /
        </span>

        <Link
          href={spanishHref}
          className="site-language__link"
          aria-current={locale === "es" ? "page" : undefined}
        >
          <Image
            src="/mexico-flag.png"
            alt=""
            width={24}
            height={24}
            className="site-language__flag"
          />
          <span>ES</span>
        </Link>
        </nav>
      </div>
    </header>
  );
}
