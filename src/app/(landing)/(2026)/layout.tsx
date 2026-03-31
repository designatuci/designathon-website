import { Metadata } from "next";
import { Lekton } from "next/font/google";
import localFont from "next/font/local";
import React from "react";

const inriaSans = localFont({
  src: "./fonts/InriaSans-Regular.woff2",
  display: "swap",
  variable: "--font-inria-sans",
});

const lekton = Lekton({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lekton",
});

const luxuriousScript = localFont({
  src: "./fonts/LuxuriousScript-Regular.woff2",
  display: "swap",
  variable: "--font-luxurious-script",
});

export const metadata: Metadata = {
  title: "UCI Design-a-thon 2026 | Lost & Found",
  description: "UCI Design-a-thon",
  openGraph: {
    title: "UCI Design-a-thon 2026 | Lost & Found",
    description: "UCI Design-a-thon",
    images: [
      {
        url: "https://ucidesignathon.com/images/seasons/2026/seo/banner.png",
      },
    ],
  },
};

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div
      data-theme="2026"
      className={`${inriaSans.variable} ${lekton.variable} ${luxuriousScript.variable}`}
    >
      {children}
    </div>
  );
}

export default Layout;
