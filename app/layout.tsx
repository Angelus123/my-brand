import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IZERE Ange Felix - Senior Software Engineer | Full-Stack Developer",
  description: "Experienced software engineer with 5+ years specializing in modern web development. Expertise in React, Node.js, Python, and cloud technologies. Passionate about building scalable solutions and leading engineering teams.",
  keywords: [
    "software engineer", 
    "full-stack developer", 
    "React expert", 
    "Node.js developer", 
    "Python programmer",
    "cloud architecture",
    "technical lead",
    "web development",
    "REST APIs",
    "AWS certified",
    "DevOps engineer",
    "agile methodology"
  ].join(", "),
  authors: [{ name: "IZERE Ange Felix" }],
  openGraph: {
    title: "IZERE Ange Felix - Senior Software Engineer Portfolio",
    description: "Portfolio of IZERE Ange Felix, a senior software engineer specializing in full-stack development and cloud technologies.",
    type: "website",
    url: "https://johndoe-portfolio.com",
    siteName: "IZERE Ange Felix Portfolio",
    images: [{
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "IZERE Ange Felix - Senior Software Engineer"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@johndoe_dev",
    creator: "@johndoe_dev",
    title: "IZERE Ange Felix - Senior Software Engineer",
    description: "Portfolio of IZERE Ange Felix, a senior software engineer specializing in full-stack development.",
    images: ["/images/twitter-image.jpg"]
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#059669",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
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
