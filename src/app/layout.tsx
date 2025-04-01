import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import { DotPattern } from "@/components/DotBackground";
import { cn } from "@/utils/cn";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "John Zhang",
  description: "ya my portfolio",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="relative min-h-screen antialiased">
        <div className="fixed inset-0">
          <DotPattern className={cn("opacity-15")} glow={true} />
        </div>
        <div className="relative flex flex-col min-h-screen antialiased w-[40%] mx-auto py-[10em]">
          <Providers
            attribute="class"
            defaultTheme="light"
            themes={["light", "dark"]}
          >
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
