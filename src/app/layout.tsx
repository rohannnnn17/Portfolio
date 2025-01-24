import React, { ReactNode } from "react";
import "./globals.css";

interface LayoutProps {
  children: ReactNode; // ReactNode type ensures proper typing for children
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default Layout;
