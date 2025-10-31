import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { MetaThemeColor } from "@/components/theme/meta-theme-color";

import "./globals.css";
import "leaflet/dist/leaflet.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
});

export const metadata: Metadata = {
  title: "PLN | Diesel Replacement Program",
  description:
    "Transforming Indonesia's energy landscape through renewable solar PV and battery energy storage systems",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "hsl(0 0% 100%)" },
    { media: "(prefers-color-scheme: dark)", color: "hsl(240 10% 4%)" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <MetaThemeColor />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
