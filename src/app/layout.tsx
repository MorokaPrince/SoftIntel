import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { ThemeScript } from "@/components/ui/ThemeScript";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
   title: {
     default: "Moroka & Associates - Professional Digital Business Solutions",
     template: "%s | Moroka & Associates",
   },
   description: "South Africa's leading digital transformation partner. We provide professional business solutions, custom software development, system integration, and cloud infrastructure services that drive sustainable growth across Africa.",
  keywords: [
    "digital transformation",
    "business solutions",
    "custom software development",
    "system integration",
    "cloud infrastructure",
    "business intelligence",
    "South Africa",
    "African businesses",
    "digital consulting",
    "enterprise solutions",
    "process automation",
    "technology consulting",
    "business process optimization",
    "digital strategy",
    "enterprise software",
  ],
  authors: [{ name: "Moroka & Associates" }],
  creator: "Moroka & Associates",
  publisher: "Moroka & Associates",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.morokaandassociates.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.morokaandassociates.com",
    title: "Moroka & Associates - Professional Digital Business Solutions",
    description: "South Africa's leading digital transformation partner. We provide professional business solutions, custom software development, system integration, and cloud infrastructure services.",
    siteName: "Moroka & Associates",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moroka & Associates - Professional Digital Business Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moroka & Associates - Professional Digital Business Solutions",
    description: "South Africa's leading digital transformation partner. We provide professional business solutions, custom software development, system integration, and cloud infrastructure services.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Moroka & Associates | Professional Business Solutions</title>
        <meta name="description" content="Moroka & Associates provides innovative consulting and business advisory services, specializing in digital solutions and professional expertise." />
        <meta name="keywords" content="Moroka & Associates, Consulting, Business Advisory, Digital Solutions, Professional Services" />
        <meta name="author" content="Moroka & Associates" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.morokaandassociates.com/" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider>
          <ThemeScript />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Moroka & Associates",
                "url": "https://www.morokaandassociates.com",
                "logo": "https://www.morokaandassociates.com/logo.svg",
                "description": "South Africa's leading digital transformation partner providing professional business solutions, custom software development, system integration, and cloud infrastructure services.",
                "foundingDate": "2024",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+27-79-448-4159",
                  "contactType": "customer service",
                  "email": "itsolutions@morokaandassociates.com",
                  "areaServed": "ZA",
                  "availableLanguage": "English"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "ZA"
                },
                "sameAs": [
                  "https://www.linkedin.com/company/moroka-associates"
                ],
                "serviceType": [
                  "Digital Transformation",
                  "Custom Software Development",
                  "System Integration",
                  "Business Intelligence",
                  "Cloud Infrastructure",
                  "Process Automation",
                  "Technology Consulting",
                  "Enterprise Solutions"
                ],
                "areaServed": {
                  "@type": "Country",
                  "name": "South Africa"
                },
                "knowsAbout": [
                  "Digital Transformation",
                  "Business Process Optimization",
                  "Cloud Computing",
                  "Enterprise Software",
                  "Business Intelligence",
                  "System Integration"
                ]
              })
            }}
          />
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
