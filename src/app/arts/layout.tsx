import type { Metadata } from "next";
import { NeueHaas } from "@/utils/custom-font";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/layouts/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Art | @aryaadrh",
  description: "aryadira Personal Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${NeueHaas.className} flex items-center flex-col w-screen relative`}>
        <Header />
        <div className='container mx-auto px-[50px] lg:px-[200px] w-full'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
