import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import Navbar from "./components/Navbar";
import { fonts } from "./fonts";

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
          {children}
        </Providers>
      </body>
    </html>
  );
}
