"use client";

import { NextIntlClientProvider } from "next-intl";

export default function IntlProviderWrapper({
  children,
  messages,
  lang,
}: {
  children: React.ReactNode;
  messages: Record<string, any>;
  lang: string;
}) {
  return (
    <NextIntlClientProvider locale={lang} messages={messages} timeZone="UTC">
      {children}
    </NextIntlClientProvider>
  );
}
