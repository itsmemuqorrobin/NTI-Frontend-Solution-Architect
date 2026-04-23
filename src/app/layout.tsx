import type { Metadata } from "next";
import "./globals.css";
import { localFonts } from "@/_lib/NextFonts/fonts";

export const metadata: Metadata = {
  title: "Airpods - Apple",
  description: "NTI Frontend Solution Architect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${localFonts.HalveticaNeue} ${localFonts.SFProDisplay} ${localFonts.SFProText} h-full antialiased `}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
