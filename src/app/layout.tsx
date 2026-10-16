import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_NAME, siteUrl } from "@/lib/site";
import Script from "next/script";
import "./globals.css";

// Fonts are self-hosted from src/fonts (SIL Open Font License).
const rozha = localFont({
  src: "../fonts/rozha-one-latin-400-normal.woff2",
  weight: "400",
  variable: "--font-rozha",
  display: "swap",
});

const mukta = localFont({
  src: [
    { path: "../fonts/mukta-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/mukta-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/mukta-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/mukta-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-mukta",
  display: "swap",
});

const kalam = localFont({
  src: "../fonts/kalam-latin-400-normal.woff2",
  weight: "400",
  variable: "--font-kalam",
  display: "swap",
  preload: false,
});

const description =
  "Jungle Diaries is a travel and wildlife company in Jim Corbett, Uttarakhand. Stay at Amaltas Villa or Destinn Dhela Retreat on Dhela Road, Ramnagar, and plan safaris and journeys with people who know the forest.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "Jungle Diaries | Stays, Safaris & Journeys in Jim Corbett",
    template: `%s | ${SITE_NAME}`,
  },
  description,
  applicationName: SITE_NAME,
  keywords: [
    "Jim Corbett",
    "Ramnagar",
    "Dhela safari zone",
    "Corbett resort",
    "Amaltas Villa",
    "Destinn Dhela Retreat",
    "Uttarakhand tours",
    "jungle safari",
  ],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    title: "Jungle Diaries | Stays, Safaris & Journeys in Jim Corbett",
    description,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1f3824" },
    { media: "(prefers-color-scheme: dark)", color: "#15261a" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${rozha.variable} ${mukta.variable} ${kalam.variable}`}>
       <head>
        <!-- Google tag (gtag.js) -->
<Script id="google-analytics" strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-XELKDTE04Q"></Script>
<Script id="google-analytics" strategy="afterInteractive">
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XELKDTE04Q');`}
</Script>
      </head>
      <body>
        <a
          href="#main"
          className="sr-only rounded-full bg-gold px-3.5 py-2 text-gold-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
