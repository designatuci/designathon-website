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
