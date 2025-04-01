// src/app/layout.js
import { Inter, Manrope, Rosarivo } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/theme.css";
import { Providers } from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const rosarivo = Rosarivo({
  variable: "--font-rosarivo",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "BookMarket - Votre bibliothèque en ligne",
  description: "Parcourez, achetez et gérez vos livres préférés",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${manrope.variable} ${rosarivo.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
