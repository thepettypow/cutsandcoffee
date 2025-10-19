import type { Metadata } from "next";
import { Cardo } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const cardo = Cardo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cardo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cuts & Coffee — Trust Your Barber",
    template: "%s — Cuts & Coffee",
  },
  description:
    "Modern barber shop offering haircuts, beard grooming, skin fades, hot shaves, and more in Calgary. Book fast and look sharp.",
  keywords: [
    "Cuts & Coffee",
    "barber",
    "Calgary",
    "haircut",
    "beard",
    "skin fade",
    "hot shave",
    "kids haircut",
    "buzzcut",
    "barbershop",
  ],
  metadataBase: new URL("https://cutsandcoffee.vercel.app"),
  alternates: {
    canonical: "https://cutsandcoffee.vercel.app",
  },
  openGraph: {
    title: "Cuts & Coffee — Trust Your Barber",
    description:
      "Barber shop in Calgary: modern, stylish cuts, sharp beard trims, skin fades, and hot shaves.",
    url: "https://cutsandcoffee.ca",
    siteName: "Cuts & Coffee",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuts & Coffee — Trust Your Barber",
    description:
      "Modern barber shop in Calgary offering haircuts, beard grooming, skin fades, and hot shaves.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Barbershop",
    name: "Cuts & Coffee",
    url: "https://cutsandcoffee.ca",
    telephone: "+1-825-882-4884",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1136 8 Ave SW",
      addressLocality: "Calgary",
      addressRegion: "AB",
      postalCode: "",
      addressCountry: "CA",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    sameAs: [],
    priceRange: "$$",
  };

  return (
    <html lang="en">
      <body className={`${cardo.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        {children}
        <footer className="py-0">
          <div className="container text-center text-white/60">
            © Cuts & Coffee, all rights reserved — Designed by <a href="https://easylifeassociates.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">ELA</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
