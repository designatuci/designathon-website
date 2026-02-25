import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "UCI Design-a-thon 2026 | Lost & Found",
  description: "UCI Design-a-thon",
};

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return <body data-theme="2026">{children}</body>;
}

export default Layout;
