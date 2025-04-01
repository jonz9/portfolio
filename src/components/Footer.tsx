"use client";
import { About } from "@/data";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-between">
      <p className="text-sm text-muted-foreground">John Zhang © 2025</p>
      <div className="flex gap-5 items-right">
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
            {hoveredSocial === social.name ? (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 text-sm font-bold text-muted-foreground"
              >
                <social.icon size={22} color="lightgray" />
                {social.name}
              </motion.span>
            ) : (
              <social.icon size={22} color="lightgray" />
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
