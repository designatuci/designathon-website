import localFont from "next/font/local";
import React from "react";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  display: "swap",
  variable: "--font-satoshi",
});

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <body data-theme="2025" className={`${satoshi.variable}`}>
      {children}
    </body>
  );
}

export default Layout;
