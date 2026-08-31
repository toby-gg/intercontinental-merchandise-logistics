import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.shortName} | Merchandise & Logistics Nigeria`, template: `%s | ${site.shortName}` },
  description: site.description,
  applicationName: site.shortName,
  keywords: ["logistics company Nigeria", "general merchandise Nigeria", "procurement Nigeria", "haulage services", "warehousing and distribution", "supply chain Nigeria"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_NG", url: site.url, siteName: site.shortName, title: site.name, description: site.description },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  robots: { index: true, follow: true },
};

const schema = { "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, email: site.email, telephone: site.phone, address: { "@type": "PostalAddress", addressCountry: "NG", addressLocality: site.address }, identifier: { "@type": "PropertyValue", name: "Company Registration Number", value: site.registrationNumber } };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-NG"><body><a className="skip-link" href="#content">Skip to content</a><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><Header /><main id="content">{children}</main><Footer /></body></html>;
}
