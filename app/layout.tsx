import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import ParallaxProviderWrapper from "@/components/ParallaxProviderWrapper";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import Footer from "@/components/layout/Footer";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Wilmington",
  description: "Wilmington Mental Health & Medical Care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased  `}>
        <span className="fixed h-72 w-72 -z-50 bottom-[25%]  left-[80%] -translate-x-1/2 translate-y-1/2 opacity-30 blur-[2px]  pointer-events-none transform scale-x-[-1]">
          <Image
            src="/favicon.webp"
            fill
            alt="Logo Image"
            className="object-contain grayscale brightness-150 contrast-125"
            priority
          />
        </span>

        <Header />
        <ParallaxProviderWrapper>{children}</ParallaxProviderWrapper>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
