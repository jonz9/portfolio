import "./globals.css";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DotPattern } from "@/components/DotBackground";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
      <body className="relative min-h-screen antialiased">
        <div className="fixed inset-0">
          <DotPattern className={cn("opacity-20")} glow={true} />
        </div>
        <div className="relative flex flex-col min-h-screen antialiased w-[90%] sm:w-[70%] md:w-[50%] lg:w-[45%] xl:w-[35%] 2xl:w-[30%] mx-auto py-[1em] md:py-[2em] lg:py-[4em]">
          <Providers
            attribute="class"
            defaultTheme="dark"
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
