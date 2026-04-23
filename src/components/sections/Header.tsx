"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const englishHref = localizedHref(pathname, "en");
  const spanishHref = localizedHref(pathname, "es");

  return (
    <header className="fixed top-0 left-0 w-full h-20 px-6 py-4 flex items-center justify-between z-50 bg-deep-blue">
      <img src="/joskuaBanner.svg" alt="Joskua logo" className="h-10 w-auto" />

      <div
        aria-label="Language selector"
        className="flex items-center gap-3 text-sm"
      >
        <Link
          href={englishHref}
          className="flex items-center gap-3 hover:opacity-80"
        >
          <img src="/us-flag.png" alt="US flag" className="h-6 w-6" />
          <span>EN</span>
        </Link>

        <span className="opacity-50">|</span>

        <Link
          href={spanishHref}
          className="flex items-center gap-3 hover:opacity-80"
        >
          <img src="/mexico-flag.png" alt="Mexico flag" className="h-6 w-6" />
          <span>ES</span>
        </Link>
      </div>
    </header>
  );
}
