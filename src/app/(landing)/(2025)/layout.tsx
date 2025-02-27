import React from "react";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return <main data-theme="2025">{children}</main>;
}

export default Layout;
