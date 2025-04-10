"use client";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";

const ThemeSwitch = dynamic(() => import("./ThemeSwitch"), {
  ssr: false,
});

interface MobileMenuProps {
  navItems: Array<{ label: string; href: string }>;
  closeMobileMenu: () => void;
  mounted: boolean;
}

const NavLink = ({
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
};

const MobileMenu = ({
  navItems,
  closeMobileMenu,
  mounted,
}: MobileMenuProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
        onClick={closeMobileMenu}
      />
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
  );
};

export default MobileMenu;
