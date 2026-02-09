import { Metadata } from "next";
import { Sour_Gummy } from "next/font/google";
import localFont from "next/font/local";
import React from "react";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  display: "swap",
  variable: "--font-satoshi",
});

const radey = localFont({
  src: "./fonts/Radey-Regular.otf",
  display: "swap",
  variable: "--font-radey",
});

const permanentMarker = Sour_Gummy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
});

export const metadata: Metadata = {
  title: "UCI Design-a-thon 2025 | Beyond Our Horizons",
  description: "UCI Design-a-thon",
  openGraph: {
    title: "UCI Design-a-thon 2025 | Beyond Our Horizons",
    description: "UCI Design-a-thon",
    images: [
      {
        url: "https://ucidesignathon.com/images/seasons/2025/seo/banner.png",
      },
    ],
  },
};

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <body
      data-theme="2025"
      className={`${satoshi.variable} ${radey.variable} ${permanentMarker.variable}`}
    >
      {children}
    </body>
  );
}

export default Layout;
