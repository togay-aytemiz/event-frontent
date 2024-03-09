"use client";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Showcase from "./components/Showcase";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {pathName === "/" && <Showcase />}
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
