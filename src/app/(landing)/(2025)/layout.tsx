import localFont from "next/font/local";
import React from "react";

// Font files can be colocated inside of `app`
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
    <div data-theme="2025" className={`${satoshi.variable}`}>
      {children}
    </div>
  );
}

export default Layout;
