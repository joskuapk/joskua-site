"use client";

import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

export default function IntlProviderWrapper({
  children,
  messages,
  locale,
}: {
  children: ReactNode;
  messages: Record<string, string>;
  locale: string;
}) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
