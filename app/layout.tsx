import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { fonts } from "@/lib/fonts";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen font-sans", ...fonts)}>{children}</body>
    </html>
  );
}
