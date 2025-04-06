"use client";
import Link from "next/link";
import { cn } from "@/utils/cn";
import React, { memo, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
// import ThemeSwitch from "@/components/ThemeSwitcher";
// import CommandPalette from "./CommandPalette";

const CommandPalette = dynamic(() => import("./CommandPalette"), {
  ssr: false,
  loading: () => null,
});

const ThemeSwitch = dynamic(() => import("./ThemeSwitcher"), {
  ssr: false,
});

const navItems = [
  {
    label: "About",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Photos",
    href: "/photography",
  },
  //   {
  //     label: "Writing",
  //     href: "/writing",
  //   },
];

const NavLink = memo(
  ({
    href,
    label,
    mounted,
    onClick,
  }: {
    href: string;
    label: string;
    mounted: boolean;
    onClick?: () => void;
  }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "font-medium text-md relative transition-opacity duration-300",
          "after:absolute after:bottom-0 after:left-0",
          "after:h-[2px] after:bg-accent",
          isActive
            ? "after:w-full after:opacity-50"
            : "after:w-0 hover:after:w-full hover:after:transition-all hover:after:duration-1000",
          { "opacity-0": !mounted, "opacity-100": mounted }
        )}
      >
        {label}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

const Navbar = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [signature, setSignature] = useState("signature-black.png");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const preloadImages = () => {
      const images = ["signature-white.png", "signature-black.png"];
      images.forEach((src) => {
        const img = new window.Image();
        img.src = `/static/images/${src}`;
      });
    };
    preloadImages();
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setSignature(
        resolvedTheme === "dark" ? "signature-white.png" : "signature-black.png"
      );
    }
  }, [resolvedTheme, mounted]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex items-center justify-between">
      <a href="/" className="flex items-center gap-2">
        <Image
          src={`/static/images/${signature}`}
          alt="signature"
          width={100}
          height={100}
          priority
          className="transition-opacity duration-300"
          style={{ opacity: mounted ? 1 : 0 }}
        />
      </a>

      {/* Desktop Navigation */}
      <div className="items-center hidden gap-4 md:flex">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            mounted={mounted}
          />
        ))}
        {/* <ThemeSwitch /> */}
        <div
          className={`transition-opacity duration-300 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <CommandPalette />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="p-2 transition-colors rounded-md md:hidden hover:bg-muted"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={closeMobileMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 400,
                mass: 0.5,
              }}
              className="fixed top-0 right-0 z-50 w-64 h-full border-l bg-background border-muted md:hidden"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-8">
                  <ThemeSwitch />
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 transition-colors rounded-md hover:bg-muted active:scale-95"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                    >
                      <NavLink
                        href={item.href}
                        label={item.label}
                        mounted={mounted}
                        onClick={closeMobileMenu}
                      />
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(Navbar);
