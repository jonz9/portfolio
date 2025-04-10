"use client";
import { Socials } from "@/data/about";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pt-3 border-t border-slate-500">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-md text-muted-foreground">John Zhang © 2025</p>
        <div className="flex gap-6 items-center">
          {Socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                href={social.url}
                className="group relative flex items-center"
              >
                <div className="flex items-center gap-4">
                  <span className="hidden group-hover:block left-8 whitespace-nowrap text-sm font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out translate-x-0 group-hover:translate-x-1">
                    {social.name}
                  </span>
                  <Icon
                    size={20}
                    className="text-muted-foreground transition-all duration-300 ease-out group-hover:text-accent group-hover:scale-110"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
