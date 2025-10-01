import type { Metadata } from "next";
import Header from "./components/Header";
import { Montserrat } from 'next/font/google';

import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],       // alphabet latin
  weight: ['400', '700'],   // poids utilisés
  display: 'swap',          // améliore le rendu
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={montserrat.className}>
      
      <body>
      <Header />  
        {children}
      </body>
    </html>
  );
}
