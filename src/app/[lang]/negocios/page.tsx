import type { Metadata } from "next";
import NegociosLanding from "@/components/negocios/NegociosLanding";

const SITE_URL = "https://joskua.space";
const OG_IMAGE = `${SITE_URL}/negocios-og.png`;

type PageProps = {
  params: Promise<{ lang: string }>;
};

type FAQItem = {
  question: string;
  answer: string;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const messages = (
    await import(`../../../../public/locales/${lang}/messages.json`)
  ).default;
  const meta = messages.Negocios.meta;
  const canonicalUrl = `${SITE_URL}/${lang}/negocios`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: `${SITE_URL}/es/negocios`,
        en: `${SITE_URL}/en/negocios`,
        "x-default": `${SITE_URL}/es/negocios`,
      },
    },
    keywords:
      lang === "es"
        ? [
            "consultoría tecnológica",
            "automatización para negocios",
            "e-commerce México",
            "software para PyMEs",
            "desarrollo web Ciudad de México",
          ]
        : [
            "technology consulting Mexico",
            "business automation",
            "e-commerce development Mexico",
            "software for SMBs",
            "web development Mexico City",
          ],
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonicalUrl,
      siteName: "Joskua",
      locale: lang === "es" ? "es_MX" : "en_US",
      alternateLocale: lang === "es" ? ["en_US"] : ["es_MX"],
      type: "website",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: meta.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
  };
}

export default async function NegociosPage({ params }: PageProps) {
  const { lang } = await params;
  const messages = (
    await import(`../../../../public/locales/${lang}/messages.json`)
  ).default;
  const negocios = messages.Negocios;
  const canonicalUrl = `${SITE_URL}/${lang}/negocios`;
  const faqItems = negocios.faq.items as FAQItem[];

  const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${canonicalUrl}#service`,
    name: "Joskua Olivares Technology Consulting",
    url: canonicalUrl,
    image: OG_IMAGE,
    description: negocios.meta.description,
    email: negocios.contact.email,
    founder: {
      "@type": "Person",
      name: "Joskua Olivares",
      jobTitle:
        lang === "es" ? "Consultor tecnológico" : "Technology consultant",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mexico City",
        addressRegion: "Ciudad de México",
        addressCountry: "MX",
      },
    },
    areaServed: {
      "@type": "Country",
      name: lang === "es" ? "México" : "Mexico",
    },
    serviceType: negocios.services.items.map(
      (item: { title: string }) => item.title,
    ),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceJsonLd).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <NegociosLanding />
    </>
  );
}
