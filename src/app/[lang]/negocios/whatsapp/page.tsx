import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWhatsAppHref } from "@/config/contact";
import WhatsAppRedirect from "./WhatsAppRedirect";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export const metadata: Metadata = {
  title: "WhatsApp | Joskua",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function NegociosWhatsAppPage({ params }: PageProps) {
  const { lang } = await params;

  let messages;
  try {
    messages = (
      await import(`../../../../../public/locales/${lang}/messages.json`)
    ).default;
  } catch {
    notFound();
  }

  const negocios = messages.Negocios;

  return (
    <WhatsAppRedirect
      href={getWhatsAppHref(negocios.contact.whatsappMessage)}
      label={negocios.header.whatsappCta}
    />
  );
}
