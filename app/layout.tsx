import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const open = Open_Sans({subsets: ["latin"], weight: ["400", "600", "700"]})

export const metadata: Metadata = {
  title: "Huddle | FScode",
  description: "Solution for Huddle Landing Page Challenge from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${open.className} flex min-h-screen flex-col scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
