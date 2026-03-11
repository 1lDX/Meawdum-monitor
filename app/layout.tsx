import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

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
        
        <div className="flex min-h-screen">

          <Sidebar />

          <main className="flex-1 bg-[#191919]">
            {children}
          </main>

        </div>

      </body>
    </html>
  );
}