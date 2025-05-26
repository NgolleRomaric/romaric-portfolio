//import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { ReactLenis } from "lenis/react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Romaric Ngolle",
  description:
    "Portfolio personnel de Romaric présentant ses projets et compétences",
  icons: {
    icon: "/logo 1.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        {/*
         <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          */}
        {children}
        {/* </ThemeProvider> */}
        <ReactLenis root />
        <SmoothCursor />
      </body>
    </html>
  );
}
