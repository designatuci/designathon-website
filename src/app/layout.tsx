import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UCI Design-a-thon | Design at UCI",
  description: "UCI Design-a-thon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
