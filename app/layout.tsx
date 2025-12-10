import type { Metadata } from "next";
import { Orbitron, Fira_Code } from "next/font/google";
import "./globals.css";
import Logo from "@/components/Logo";

// Futuristic font for headings
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700"], 
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Lindsey Samson Portfolio",
  description: "Portfolio of Lindsey Samson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${firaCode.variable} antialiased text-white bg-[#060010]`}
      >
        <div className="fixed top-3 left-5 w-15 h-15 z-20">
            <Logo />
        </div>
        {children}
      </body>
    </html>
  );
}