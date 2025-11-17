import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// Import CSS with priority for critical styles
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  // Only load the weights we actually use
  weight: ["400", "500", "600", "700"],
});

// Defer mono font - only load when needed (not critical for first paint)
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Don't preload - defer it
  adjustFontFallback: true,
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Studios - Learning Platform",
    template: "%s | Studios",
  },
  description: "Learn and explore topics like React, AWS, and more",
  keywords: ["learning", "React", "AWS", "web development", "tutorials"],
  authors: [{ name: "Studios" }],
  creator: "Studios",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Studios - Learning Platform",
    description: "Learn and explore topics like React, AWS, and more",
    siteName: "Studios",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studios - Learning Platform",
    description: "Learn and explore topics like React, AWS, and more",
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
