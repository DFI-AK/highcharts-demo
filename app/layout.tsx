import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChartProvider from "./_lib/redux/provider/ChartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <ChartProvider>
          {children}
        </ChartProvider>
      </body>
    </html>
  );
}