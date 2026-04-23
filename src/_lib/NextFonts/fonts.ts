import localFont from "next/font/local";

const HalveticaNeue = localFont({
  src: [
    {
      path: "../../app/_fonts/Helvetica_Neue/Regular.otf",
      style: "normal",
      weight: "400",
    },
  ],
  display: "swap",
  variable: "--font-halvetica-neue",
});

const SFProDisplay = localFont({
  src: [
    {
      path: "../../app/_fonts/SF-Pro-Display/Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../app/_fonts/SF-Pro-Display/Bold.otf",
      style: "normal",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-sf-pro-display",
});

const SFProText = localFont({
  src: [
    {
      path: "../../app/_fonts/SF-Pro-Text/Regular.otf",
      style: "normal",
      weight: "400",
    },
  ],
  display: "swap",
  variable: "--font-sf-pro-text",
});

export const localFonts = {
  HalveticaNeue: HalveticaNeue.variable,
  SFProDisplay: SFProDisplay.variable,
  SFProText: SFProText.variable,
};
