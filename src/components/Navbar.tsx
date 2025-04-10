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
import MobileMenu from "./MobileMenu";

const CommandPalette = dynamic(() => import("./CommandPalette"), {
  ssr: false,
  loading: () => null,
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

const mobileMenuProps = {
  navItems: navItems,
  closeMobileMenu: () => closeMobileMenu(),
  NavLink: NavLink,
};

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

      {isMobileMenuOpen && (
        <MobileMenu
          navItems={navItems}
          closeMobileMenu={closeMobileMenu}
          mounted={mounted}
        />
      )}
    </div>
  );
};

export default memo(Navbar);
