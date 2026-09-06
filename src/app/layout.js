import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kaplanlarfig.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kaplanlar Dried Fruits | Premium Turkish Dried Figs & Fruits",
    template: "%s | Kaplanlar Dried Fruits",
  },
  description:
    "Kaplanlar is a Turkish exporter of premium sun-dried figs, apricots, dates, raisins and pistachios from Aydın. Trusted quality from harvest to packaging.",
  keywords: [
    "dried figs",
    "Aydın figs",
    "Turkish dried fruits",
    "dried fruit export",
    "sun-dried figs",
    "Kaplanlar",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Kaplanlar Dried Fruits",
    title: "Kaplanlar Dried Fruits | Premium Turkish Dried Figs & Fruits",
    description:
      "Premium sun-dried figs and dried fruits from Aydın, Türkiye. Consistent quality you can trust, from harvest to packaging.",
    url: siteUrl,
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Basket of premium dried figs from Kaplanlar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaplanlar Dried Fruits",
    description:
      "Premium sun-dried figs and dried fruits from Aydın, Türkiye.",
    images: ["/hero.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
