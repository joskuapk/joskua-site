import type { Metadata } from "next";
import { Silkscreen, Inter, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";
import Footer from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import IntlProviderWrapper from "@/components/common/IntlProviderWrapper";
import { notFound } from "next/navigation";

const fontDisplay = Silkscreen({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const fontBody = Inter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fontMono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Joskua | Developer Portfolio",
  description:
    "Developer based in Mexico City. I build clean, scalable web apps, automations, and digital tools with purpose.",
  metadataBase: new URL("https://joskua.space"),
  openGraph: {
    title: "Joskua | Developer Portfolio",
    description:
      "Developer based in Mexico City. I build clean, scalable web apps, automations, and digital tools with purpose.",
    url: "https://joskua.space",
    siteName: "Joskua",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joskua | Developer Portfolio",
    description:
      "Developer based in Mexico City. I build clean, scalable web apps, automations, and digital tools with purpose.",
    creator: "@joskua",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  let messages;
  try {
    messages = (await import(`../../../public/locales/${lang}/messages.json`))
      .default;
  } catch {
    notFound();
  }

  return (
    <html lang={lang}>
      <body
        className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable} antialiased`}
      >
        <IntlProviderWrapper messages={messages} lang={lang}>
          <Header />
          <main className="min-h-screen w-full flex flex-col items-center justify-start">
            {children}
          </main>
          <Footer />
        </IntlProviderWrapper>
      </body>
    </html>
  );
}
