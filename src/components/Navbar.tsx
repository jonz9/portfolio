"use client";
import Link from "next/link";
import { cn } from "@/utils/cn";
import React, { memo, useEffect, useState } from "react";
import CommandPalette from "./CommandPalette";
import { usePathname } from "next/navigation";
import ThemeSwitch from "@/components/ThemeSwitcher";
import Image from "next/image";
import { useTheme } from "next-themes";

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
  }: {
    href: string;
    label: string;
    mounted: boolean;
  }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <Link
        href={href}
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
    console.log(resolvedTheme);
    if (mounted) {
      setSignature(
        resolvedTheme === "dark" ? "signature-white.png" : "signature-black.png"
      );
    }
  }, [resolvedTheme, mounted]);

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
      <div className="flex items-center gap-4">
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
    </div>
  );
};

export default memo(Navbar);
