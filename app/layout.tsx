

import Navigation from "./components/navigation/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "./components/topbar/TopBar";
import Footer from "./components/footer/Footer";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Palmier",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <TopBar />
          <Navigation toggle={toggleMenu} />
          <br />
          {children}
          <br />
          <Footer />
        </>
      </body>
    </html>
  );
}
