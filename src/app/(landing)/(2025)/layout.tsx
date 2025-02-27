import React from "react";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return <div data-theme="2025">{children}</div>;
}

export default Layout;
