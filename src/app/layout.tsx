import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

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
     default: "SoftIntel - Intelligent Software Solutions for Tomorrow",
     template: "%s | SoftIntel",
   },
   description: "Engineering intelligent software solutions for tomorrow. We design cutting-edge software, web applications, and business solutions that help companies innovate, grow, and scale globally.",
  keywords: [
    "software development",
    "web design",
    "mobile apps",
    "business software",
    "artificial intelligence",
    "intelligent solutions",
    "digital transformation",
    "compliance software",
    "IT consulting",
    "cloud solutions",
    "innovative technology",
    "software intelligence",
  ],
  authors: [{ name: "SoftIntel" }],
  creator: "SoftIntel",
  publisher: "SoftIntel",
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
    title: "SoftIntel | Professional Consulting Services",
    description: "SoftIntel provides innovative consulting and business advisory services, specializing in digital solutions and professional expertise.",
    siteName: "SoftIntel",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SoftIntel - Professional Consulting Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftIntel | Professional Consulting Services",
    description: "SoftIntel provides innovative consulting and business advisory services, specializing in digital solutions and professional expertise.",
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
        <title>SoftIntel | Professional Consulting Services</title>
        <meta name="description" content="SoftIntel provides innovative consulting and business advisory services, specializing in digital solutions and professional expertise." />
        <meta name="keywords" content="SoftIntel, Consulting, Business Advisory, Digital Solutions, Professional Services" />
        <meta name="author" content="SoftIntel" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.morokaandassociates.com/" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider>
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
