import type { Metadata } from "next";
import { Silkscreen, Inter, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "../../styles/globals.css";
import Footer from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import IntlProviderWrapper from "@/components/common/IntlProviderWrapper";

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
  title: "Joskua Olivares | Contact Card",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function VcfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = (await import("../../../public/locales/es/messages.json"))
    .default;

  return (
    <html lang="es">
      <body
        className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable} antialiased`}
      >
        <IntlProviderWrapper messages={messages} lang="es">
          <Header />
          <main className="w-full flex flex-col items-center justify-start pt-[4.5rem] sm:pt-20">
            {children}
          </main>
          <Footer />
        </IntlProviderWrapper>
        <Analytics />
      </body>
    </html>
  );
}
