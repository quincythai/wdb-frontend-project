import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair_display",
});

export const fonts = {
  playfair_display,
};
