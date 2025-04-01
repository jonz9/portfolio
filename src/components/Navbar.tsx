"use client";

import Link from "next/link";
import React, { memo } from "react";
import ThemeSwitch from "@/components/ThemeSwitcher";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";

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
    href: "/photos",
  },
  {
    label: "Scripts",
    href: "/scripts",
  },
];

const NavLink = memo(({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "font-medium text-md relative",
        "after:absolute after:bottom-0 after:left-0",
        "after:h-[2px] after:bg-accent",
        isActive
          ? "after:w-full after:opacity-50"
          : "after:w-0 after:transition-all after:duration-1000 hover:after:w-full"
      )}
    >
      {label}
    </Link>
  );
});

NavLink.displayName = "NavLink";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div>Here is signature</div>
      <div className="flex items-center gap-4">
        {navItems.map((item) => (
          <NavLink key={item.href} href={item.href} label={item.label} />
        ))}
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default memo(Navbar);
