"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { Moon, Sun } from "lucide-react";

const ThemeSwitch = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "w-8 h-8 border border-accent-gray",
        "flex items-center justify-center",
        "rounded-lg",
        "transition-all duration-300 ease-in-out",
        "hover:scale-110",
        isDark ? "text-primary-foreground" : "text-secondary-foreground",
        "shadow-md hover:shadow-lg"
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
};

export default ThemeSwitch;
