import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { fonts } from "@/lib/fonts";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { ThemeProvider } from "next-themes";
import { ActiveSectionProvider } from "@/components/context/active-section-provider";

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
        <ActiveSectionProvider>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
