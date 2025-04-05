"use client";
import { staggerContainer } from "@/utils/motion";
import { About, Education, Experiences } from "@/data/index";
import { motion } from "framer-motion";
import Image from "@heroui/react";
import NextImage from "next/image";
import Photo from "@/components/PFP";
import { useRef, useState } from "react";
import { LottieRefCurrentProps } from "lottie-react";
import resumeBlack from "../../public/static/icons/resume-black.json";
import resumeWhite from "../../public/static/icons/resume-white.json";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const theme = useTheme();

  // Resume Button
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const resume = theme.theme === "dark" ? resumeWhite : resumeBlack;
  const openResume = () => {
    window.open("/static/files/JohnZhangResume.pdf", "_blank");
  };

  return (
    <motion.div
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col min-h-screen gap-5 my-20 items-left"
    >
      {/* Name & Bio */}
      <motion.h1 variants={itemVariants} className="font-bold text-md">
        {About.name}
      </motion.h1>
      <motion.p variants={itemVariants} className="text-md">
        I'm currently...
      </motion.p>
      <motion.ul className="pl-5 space-y-2 list-disc list-inside">
        {About.bio.map((item, index) => (
          <motion.li
            key={item.text}
            variants={itemVariants}
            // Adding custom delay based on index for more pronounced staggering
            transition={{ delay: index * 0.1 }}
            className="transition-all duration-300 hover:pl-2"
          >
            {item.text}
          </motion.li>
        ))}
      </motion.ul>

      {/* Resume & Picture */}
      <motion.div
        variants={itemVariants}
        className="relative flex flex-row items-center justify-between px-8 py-5 mt-10 rounded-md"
        style={{
          background: "transparent",
          position: "relative",
        }}
      >
        {/* Top-left corner */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-md"></div>
        {/* Bottom-right corner */}
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-md"></div>
        <button
          onMouseEnter={() => lottieRef.current?.goToAndPlay(0)}
          onMouseLeave={() => lottieRef.current?.goToAndStop(0)}
          onClick={openResume}
          className="flex items-center justify-between gap-2 px-20 py-6 transition-all duration-300 border-2 rounded-md cursor-pointer hover:scale-105 bg-gradient-to-br from-black to-gray-900 hover:border-gray-400"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={resume}
            loop={false}
            style={{ width: 30, height: 30 }}
          />
          <h1 className="text-lg">My Resume</h1>
        </button>
        <Photo />
      </motion.div>

      {/* Experience & Education */}
      <motion.div variants={itemVariants} transition={{ delay: 0.8 }}>
        <h2 className="my-8 font-bold text-md">Experience</h2>
        <div className="space-y-6">
          {Experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-6 transition-all duration-300 hover:scale-105"
            >
              <div className="relative w-12 h-12 border-2 rounded-md">
                <a href={exp.link} target="_blank">
                  <NextImage
                    src={exp.icon}
                    alt={exp.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </a>
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="font-medium">{exp.name}</h3>
                <div className="flex items-center gap-3">
                  <p className="text-sm text-muted-foreground">
                    {exp.jobTitle}
                  </p>
                  <div className="w-1 h-1 bg-gray-500 rounded-full" />
                  <p className="text-sm text-muted-foreground">{exp.date}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        transition={{ delay: 0.9 }}
        className="flex items-center gap-6 mt-10 transition-all duration-300 hover:scale-105"
      >
        <div className="relative w-12 h-12 border-2 rounded-md">
          <a href={Education.link} target="_blank">
            <NextImage
              src={Education.icon}
              alt={Education.name}
              fill
              className="object-cover rounded-md"
            />
          </a>
        </div>
        <div className="flex flex-col gap-0.5">
          <h3 className="font-medium">{Education.name}</h3>
          <div className="flex items-center gap-3">
            <p className="text-sm text-muted-foreground">{Education.program}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
