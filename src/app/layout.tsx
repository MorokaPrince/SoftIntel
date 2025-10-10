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
      default: "NovaTek - Advanced Technology Solutions",
      template: "%s | NovaTek",
    },
    description: "South Africa's premier technology partner specializing in innovative digital solutions, cloud infrastructure, custom software development, and business transformation services that drive growth across Africa.",
   keywords: [
     "NovaTek",
     "technology solutions",
     "digital transformation",
     "cloud infrastructure",
     "custom software development",
     "system integration",
     "business intelligence",
     "South Africa",
     "African businesses",
     "technology consulting",
     "enterprise solutions",
     "process automation",
     "digital strategy",
     "enterprise software",
     "innovation",
     "technology partner",
   ],
   authors: [{ name: "NovaTek" }],
   creator: "NovaTek",
   publisher: "NovaTek",
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
    title: "NovaTek - Advanced Technology Solutions",
    description: "South Africa's premier technology partner specializing in innovative digital solutions, cloud infrastructure, custom software development, and business transformation services.",
    siteName: "NovaTek",
    images: [
      {
        url: "/og-image-novatek.jpg",
        width: 1200,
        height: 630,
        alt: "NovaTek - Advanced Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaTek - Advanced Technology Solutions",
    description: "South Africa's premier technology partner specializing in innovative digital solutions, cloud infrastructure, custom software development, and business transformation services.",
    images: ["/og-image-novatek.jpg"],
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
                "name": "NovaTek",
                "url": "https://www.morokaandassociates.com",
                "logo": "https://www.morokaandassociates.com/logo-novatek.svg",
                "description": "South Africa's premier technology partner specializing in innovative digital solutions, cloud infrastructure, custom software development, and business transformation services that drive growth across Africa.",
                "foundingDate": "2024",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+27-79-448-4159",
                  "contactType": "customer service",
                  "email": "info@novatek.co.za",
                  "areaServed": "ZA",
                  "availableLanguage": "English"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "ZA"
                },
                "sameAs": [
                  "https://www.linkedin.com/company/novatek-south-africa"
                ],
                "serviceType": [
                  "Technology Solutions",
                  "Digital Transformation",
                  "Custom Software Development",
                  "Cloud Infrastructure",
                  "System Integration",
                  "Business Intelligence",
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
                  "Cloud Computing",
                  "Enterprise Software",
                  "Business Intelligence",
                  "System Integration",
                  "Technology Innovation",
                  "Business Process Optimization"
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
