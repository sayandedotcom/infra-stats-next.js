import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jenkins infra-statistics",
  description: "Jenkins infra-statistics",
};

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <jio-navbar /> */}
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
      {/* <jio-footer /> */}
    </html>
  );
}
