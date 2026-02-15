import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import UnderNavbar from "@/components/layout/UnderNavbar";

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "Meawdum Monitor",
  description: "Server monitoring dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${prompt.variable} ${prompt.className} antialiased`}>
        <Navbar />
        <UnderNavbar />

        <main className="p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
