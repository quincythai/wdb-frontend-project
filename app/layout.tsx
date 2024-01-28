import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import Navbar from "./components/Navbar";
import { fonts } from "./fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Taylor Swift Eras Tour Homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.playfair_display.variable}>
      <body>
        <Providers>
          <Navbar />
        </Providers>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
