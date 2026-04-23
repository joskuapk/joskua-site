import type { Metadata } from "next";
import NegociosLanding from "@/components/negocios/NegociosLanding";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const messages = (
    await import(`../../../../public/locales/${lang}/messages.json`)
  ).default;
  const meta = messages.Negocios.meta;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}/negocios`,
      languages: {
        es: "/es/negocios",
        en: "/en/negocios",
      },
    },
    keywords: [
      "Consultoria Tecnologica",
      "Automatizacion para negocios",
      "E-commerce Mexico",
      "Asistentes IA WhatsApp",
      "Software para PyMEs",
    ],
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/${lang}/negocios`,
      siteName: "Joskua",
      locale: lang === "es" ? "es_MX" : "en_US",
      type: "website",
    },
  };
}

export default function NegociosPage() {
  return <NegociosLanding />;
}
