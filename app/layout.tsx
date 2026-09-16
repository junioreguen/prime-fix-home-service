import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { MobileContactBar } from "@/components/global/mobile-contact-bar";
import { SiteFooter } from "@/components/global/site-footer";
import { SiteHeader } from "@/components/global/site-header";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Reliable Home Repairs in Lagos`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    title: `${SITE_NAME} | Reliable Home Repairs in Lagos`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/images/og/primefix-og.webp",
        width: 1200,
        height: 630,
        alt: "PrimeFix Home Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Reliable Home Repairs in Lagos`,
    description: SITE_DESCRIPTION,
    images: ["/images/og/primefix-og.webp"],
  },
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/images/brand/primefix-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <SiteHeader />

        <main className="pb-14 lg:pb-0">{children}</main>

        <SiteFooter />
        <MobileContactBar />
      </body>
    </html>
  );
}