"use client";
import { useState, useEffect } from "react";
import { Kbd } from "@heroui/react";

export default function CommandBtn() {
  const [os, setOS] = useState("unknown");

  useEffect(() => {
    // Move OS detection to useEffect to avoid hydration mismatch
    const detectOS = () => {
      return window.navigator.userAgent.includes("Mac") ? "mac" : "windows";
    };

    setOS(detectOS());
  }, []);

  return (
    <div className="flex items-center gap-1 px-2 mt-1 py-0.65 font-mono rounded-md text-md text-muted-foreground bg-muted hover:bg-gray-700 transition-all duration-200 hover:scale-110 cursor-pointer">
      <Kbd
        keys={os === "mac" ? ["command"] : ["ctrl"]}
        className="no-underline"
      />
      <Kbd className="no-underline">K</Kbd>
    </div>
  );
}
