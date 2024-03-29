import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jenkins infra-statistics",
  description: "Jenkins infra-statistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          type="module"
          src="https://unpkg.com/@jenkinsci/jenkins-io-components?module"
          strategy="beforeInteractive"
        ></Script>
        <jio-navbar />
        {children}
        <jio-footer />
      </body>
    </html>
  );
}
