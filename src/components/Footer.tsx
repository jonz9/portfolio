"use client";
import { About } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-between">
      <p className="text-sm text-muted-foreground lg:text-md">
        John Zhang © 2025
      </p>
      <div className="flex gap-4 items-right">
        {About.socials.map((social) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={social.url}
            key={social.name}
            className="relative flex items-center"
            onMouseEnter={() => setHoveredSocial(social.name)}
            onMouseLeave={() => setHoveredSocial(null)}
          >
            <AnimatePresence mode="wait">
              {hoveredSocial === social.name ? (
                <motion.span
                  key="expanded"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 text-sm font-bold text-muted-foreground"
                >
                  <social.icon size={22} className="text-accent" />
                  {social.name}
                </motion.span>
              ) : (
                <motion.div
                  key="icon"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <social.icon size={22} color="text-muted-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
