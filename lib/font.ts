import {
  Dancing_Script,
  Oswald,
  Irish_Grover,
  Inter,
  Playfair_Display,
} from "next/font/google";

export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
});

export const inter = Inter({
  subsets: ["latin"],
});

export const irishGrover = Irish_Grover({
  subsets: ["latin"],
  weight: ["400"],
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
