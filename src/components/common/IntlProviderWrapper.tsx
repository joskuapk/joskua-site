"use client";

import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

export default function IntlProviderWrapper({
  children,
  messages,
  lang,
}: {
  children: ReactNode;
  messages: Record<string, string>;
  lang: string;
}) {
  return (
    <NextIntlClientProvider messages={messages} locale={lang}>
      {children}
    </NextIntlClientProvider>
  );
}
