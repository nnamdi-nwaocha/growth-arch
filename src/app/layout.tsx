import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Growth Arc - Learn and Teach Skills",
  description: "An interactive platform to learn and teach skills effectively.",
  icons: {
    icon: "/icons/favicon.png", // Path relative to the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/forex_banner.webp" type="image/x-icon" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-[#000]`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
