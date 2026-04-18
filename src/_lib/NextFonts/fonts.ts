import localFont from "next/font/local";

const HalveticaNeue = localFont({
  src: [
    {
      path: "../../app/_fonts/Helvetica_Neue/Light.ttf",
      style: "normal",
      weight: "300",
    },
    {
      path: "../../app/_fonts/Helvetica_Neue/Regular.otf",
      style: "normal",
      weight: "400",
    },
  ],
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
  variable: "--font-sf-pro-text",
});

export const localFonts = {
  HalveticaNeue: HalveticaNeue.variable,
  SFProDisplay: SFProDisplay.variable,
  SFProText: SFProText.variable,
};
