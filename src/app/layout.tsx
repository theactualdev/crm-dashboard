import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRM Dashboard",
  description: "Built with sweat by theactualdev",
  keywords: "CRM, Dashboard, Management, Business",
  authors: [{name: "theactualdev", url: "https://theactualdev.me"}],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://schoolcrm-dashboard.vercel.app/",
    title: "School CRM Dashboard",
    description: "Built with sweat by theactualdev",
    siteName: "School CRM Dashboard",
    images: [
      {
        url: "https://schoolcrm-dashboard.vercel.app/logo.png",
        width: 800,
        height: 600,
        alt: "School CRM Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@theactualdev",
    creator: "@theactualdev",
    images: "https://schoolcrm-dashboard.vercel.app/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
