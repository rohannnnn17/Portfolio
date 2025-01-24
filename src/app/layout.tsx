// app/layout.tsx
import React from "react";
import "./globals.css";

const Layout: React.FC = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default Layout;
