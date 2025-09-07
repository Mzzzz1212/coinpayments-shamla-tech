import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const mont = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coin Payments",
  description: "Replicated by Mahizh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mont.className} bg-[#010101] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
