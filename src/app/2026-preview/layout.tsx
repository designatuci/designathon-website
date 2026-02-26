import { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";

const inriaSans = localFont({
  src: "./fonts/InriaSans-Regular.woff2",
  display: "swap",
  variable: "--font-inria-sans",
});

export const metadata: Metadata = {
  title: "UCI Design-a-thon 2026 | Lost & Found",
  description: "UCI Design-a-thon",
};

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <body data-theme="2026" className={inriaSans.variable}>
      {children}
    </body>
  );
}

export default Layout;
