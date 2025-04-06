"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = memo(() => {
  return (
    <div className="relative flex items-center justify-center h-full transition-all duration-300 cursor-pointer hover:scale-105 hover:brightness-130">
      {/* Circle */}
      <motion.svg
        className="absolute w-[105px] h-[105px] lg:w-[125px] lg:h-[125px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="text-accent"
        />
      </motion.svg>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
          }}
          className="relative w-[99px] h-[99px] lg:w-[119px] lg:h-[119px] mix-blend-darken dark:mix-blend-lighten"
        >
          <Image
            src="/static/images/pfp.jpeg"
            priority
            quality={100}
            alt="photo"
            fill
            className="object-contain rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
});

Photo.displayName = "Photo";

export default Photo;
