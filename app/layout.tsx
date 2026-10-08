import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AlgoraX — Top AI, Web & App Development in Barishal Division",
    template: `%s | AlgoraX`,
  },
  description:
    "AlgoraX is the premier AI, web development, and mobile app development software company in Barishal Division, Bangladesh. We build high-performance Next.js web applications, iOS/Android mobile apps, SaaS platforms, and intelligent software systems for businesses across Barishal Division and worldwide.",
  keywords: [
    "web development Barishal",
    "web development Barisal division",
    "app development Barishal",
    "app development Barisal division",
    "mobile app development Barishal",
    "software company Barishal",
    "software company in Barisal",
    "best software development company Barishal",
    "website design Barishal division",
    "iOS Android app development Barishal",
    "Next.js development company Bangladesh",
    "AI software development Barishal",
    "Patuakhali web development",
    "Bhola app development",
    "Pirojpur software agency",
    "Barguna digital agency",
    "Jhalokati IT firm",
    "top web developers in Barishal division",
    "custom software development Barishal",
    "AlgoraX",
    "enterprise AI",
    "full-stack engineering",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "AlgoraX — Top AI, Web & App Development in Barishal Division",
    description:
      "Premier AI, web and mobile app development studio in Barishal Division, Bangladesh. High-performance Next.js web apps, mobile apps, and scalable SaaS platforms.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "AlgoraX — AI, Web & App Development in Barishal Division",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlgoraX — Top AI, Web & App Development in Barishal Division",
    description:
      "Leading AI, web and mobile app development company in Barishal Division. We build intelligent software for ambitious businesses.",
    creator: "@algorax",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
  other: {
    "geo.region": "BD-02",
    "geo.placename": "Barishal, Barishal Division, Bangladesh",
    "geo.position": "22.7010;90.3535",
    ICBM: "22.7010, 90.3535",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-black text-white antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
