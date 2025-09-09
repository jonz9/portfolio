import "./globals.css";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DotPattern } from "@/components/DotBackground";
import { About } from "@/data/about";

// Optimize font loading by preloading only necessary subsets and weights
// export const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
//   variable: "--font-inter",
//   preload: true,
// });

// export const grotesk = Space_Grotesk({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
//   variable: "--font-grotesk",
//   preload: true,
// });

// export const mono = Space_Mono({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   display: "swap",
//   variable: "--font-mono",
//   preload: true,
// });

export const metadata: Metadata = {
  title: "John Zhang",
  description: "Personal portfolio website",
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
          <DotPattern className={cn("opacity-30")} glow={true} />
        </div>
        <div className="relative flex flex-col min-h-screen antialiased w-[90%] sm:w-[70%] md:w-[50%] lg:w-[45%] xl:w-[35%] 2xl:w-[30%] mx-auto py-[1em] md:py-[2em] lg:py-[4em]">
          <Providers
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            themes={["light", "dark"]}
          >
            <Navbar />
            <main>{children}</main>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
