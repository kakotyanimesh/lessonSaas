import "./globals.css";
import "@repo/ui/styles.css";
import { url } from "inspector";
import type { Metadata } from "next";
import localFont from 'next/font/local'


const myFont = localFont({src : "./fonts/JE_font.ttf"})


export const metadata: Metadata = {
  title: "Lesson Flow",
  description: "an ai saas product that will help teachers to create lesson plans, lesson summary on the basis of ncert guidelines",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${myFont.className} bg-slate-300`}>{children}</body>
    </html>
  );
}
