import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import JLogoCanvas from "@/components/visuals/JLogoCanvas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-deep-blue text-lemon-green`}
      >
        <Header />
        <main className="min-h-screen w-full flex flex-col items-center justify-start">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
