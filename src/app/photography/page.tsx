"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import useSWR from "swr";
import Image from "next/image";

const folderName = "my-flicks";

const fetcher = async () => {
  const response = await fetch(
    `https://api.cloudinary.com/v2/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image/upload/${folderName}`
  );
  if (!response.ok) throw new Error("Failed to fetch images");
  const data = await response.json();
  return data.resources;
};

const Photography = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const { data, error, isLoading } = useSWR("cloudinary-images", fetcher);

  return (
    <div className="relative left-[50%] right-[50%] mx-[-50vw] w-screen">
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-8 px-4 my-10 md:px-8 lg:px-16"
      >
        <motion.h1
          variants={itemVariants}
          className="w-full max-w-screen-xl mx-auto my-4 text-xl font-bold"
        >
          My Flicks
        </motion.h1>

        {/* Full-width content */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          <div className="h-64 rounded-lg bg-muted"></div>
          <div className="h-64 rounded-lg bg-muted"></div>
          <div className="h-64 rounded-lg bg-muted"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photography;
