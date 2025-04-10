"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React, { useEffect, useId, useRef, useState } from "react";

/**
 *  DotPattern Component Props
 * @param {number} [width=16] - The horizontal spacing between dots
 * @param {number} [height=16] - The vertical spacing between dots
 * @param {number} [x=0] - The x-offset of the entire pattern
 * @param {number} [y=0] - The y-offset of the entire pattern
 * @param {number} [cx=1] - The x-offset of individual dots
 * @param {number} [cy=1] - The y-offset of individual dots
 * @param {number} [cr=1] - The radius of each dot
 * @param {string} [className] - Additional CSS classes to apply to the SVG container
 * @param {boolean} [glow=false] - Whether dots should have a glowing animation effect
 */
interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  glow?: boolean;
  [key: string]: unknown;
}

export function DotPattern({
  width = 22,
  height = 22,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1.2,
  className,
  glow = false,
  ...props
}: DotPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    // Initial checks
    checkMobile();
    updateDimensions();

    // Event listeners
    window.addEventListener("resize", () => {
      checkMobile();
      updateDimensions();
    });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const dots = React.useMemo(() => {
    const cols = Math.ceil(dimensions.width / width);
    const rows = Math.ceil(dimensions.height / height);
    const totalDots = cols * rows;

    // Reduce number of dots on mobile
    const dotCount = isMobile ? Math.floor(totalDots * 0.5) : totalDots;

    return Array.from({ length: dotCount }, (_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      return {
        x: col * width + cx,
        y: row * height + cy,
        delay: isMobile ? Math.random() * 1 : Math.random() * 5,
        duration: isMobile ? Math.random() * 1 + 0.5 : Math.random() * 3 + 2,
      };
    });
  }, [dimensions, width, height, cx, cy, isMobile]);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
      {...props}
    >
      <defs>
        <radialGradient id={`${id}-gradient`}>
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      {dots.map((dot, index) => (
        <motion.circle
          key={`${dot.x}-${dot.y}`}
          cx={dot.x}
          cy={dot.y}
          r={cr}
          fill={glow ? `url(#${id}-gradient)` : "currentColor"}
          className="text-neutral-400/80"
          initial={glow ? { opacity: 0.4, scale: isMobile ? 1 : 1 } : {}}
          animate={
            glow
              ? {
                  opacity: [0.4, 1, 0.4],
                  scale: isMobile ? [1, 1.2, 1] : [1, 1.5, 1],
                }
              : {}
          }
          transition={
            glow
              ? {
                  duration: dot.duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: dot.delay,
                  ease: isMobile ? "linear" : "easeInOut",
                }
              : {}
          }
        />
      ))}
    </svg>
  );
}
