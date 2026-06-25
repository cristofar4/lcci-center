import localFont from "next/font/local";

export const fontDisplay = localFont({
  src: [
    {
      path: "../fonts/Fraunces.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../fonts/Fraunces-Italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

export const fontSans = localFont({
  src: [
    {
      path: "../fonts/Manrope.woff2",
      weight: "200 800",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});
