import type { Metadata } from "next";
import "./globals.css";
import { NeueHaas } from "@/utils/custom-font";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Container from "@/layouts/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "@aryaadrh",
  description: "aryadira Personal Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${NeueHaas.className} flex items-center flex-col w-screen`}>
        <Header />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
