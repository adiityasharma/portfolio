import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { fonts } from "@/lib/fonts";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans", ...fonts)}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
