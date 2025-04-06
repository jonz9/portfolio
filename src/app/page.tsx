"use client";
import { staggerContainer } from "@/utils/motion";
import { About, Education, Experiences } from "@/data/index";
import { motion } from "framer-motion";
import Image from "next/image";
import NextImage from "next/image";
import Photo from "@/components/PFP";
import { useEffect, useRef, useState } from "react";
import { LottieRefCurrentProps } from "lottie-react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import resumeWhite from "../../public/static/icons/resume-white.json";
import resumeBlack from "../../public/static/icons/resume-black.json";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
  ),
});

export default function Home() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const theme = useTheme();

  // Resume Button
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [resumeAnimationData, setResumeAnimationData] = useState(null);

  useEffect(() => {
    const loadLottie = async () => {
      const file =
        theme.theme === "dark" ? "resume-white.json" : "resume-black.json";
      const response = await fetch(`/static/icons/${file}`);
      const json = await response.json();
      setResumeAnimationData(json);
    };

    loadLottie();
  }, [theme.theme]);

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
            transition={{ delay: index * 0.1 }}
            className="text-sm transition-all duration-300 md:text-base hover:pl-2"
          >
            {item.text}
          </motion.li>
        ))}
      </motion.ul>

      {/* Resume & Picture */}
      <motion.div
        variants={itemVariants}
        className="relative flex flex-col items-center justify-center w-full gap-8 mt-4 md:mt-10 md:flex-row"
      >
        <button
          onMouseEnter={() => lottieRef.current?.goToAndPlay(0)}
          onMouseLeave={() => lottieRef.current?.goToAndStop(0)}
          onClick={openResume}
          className="group relative flex items-center gap-4 px-6 py-4 transition-all w-full duration-300 rounded-xl cursor-pointer hover:scale-[1.02] bg-background border border-accent/20 hover:border-accent/40"
        >
          <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-accent/5 to-transparent rounded-xl group-hover:opacity-100" />
          <Lottie
            lottieRef={lottieRef}
            animationData={resumeAnimationData}
            loop={false}
            style={{ width: 24, height: 24 }}
          />
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium text-muted-foreground">
              Open & Download
            </span>
            <div className="flex items-center gap-6">
              <h1 className="text-lg font-semibold">Resume</h1>
              <svg
                className="w-5 h-5 transition-opacity duration-300 opacity-0 text-accent right-4 group-hover:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </button>
      </motion.div>

      {/* Experience */}
      <motion.div
        id="experiences"
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-6"
      >
        <motion.h2
          variants={itemVariants}
          className="my-4 font-bold md:my-8 text-md"
        >
          Experience
        </motion.h2>
        {Experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start gap-4 transition-all duration-300 md:items-center md:gap-6 hover:scale-105"
          >
            <div className="relative flex-shrink-0 w-12 h-12 border-2 rounded-md border-accent-gray">
              <a
                href={exp.link}
                target="_blank"
                className="block w-full h-full"
              >
                <NextImage
                  src={exp.icon}
                  alt={exp.name}
                  width={48}
                  height={48}
                  className="object-cover rounded-md"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-sm font-medium md:text-base">{exp.name}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                <p className="text-sm text-muted-foreground">{exp.jobTitle}</p>
                <div className="hidden w-1 h-1 bg-gray-500 rounded-full sm:block" />
                <p className="text-sm text-muted-foreground">{exp.date}</p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Education */}
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex items-center gap-6 mt-10 transition-all duration-300 hover:scale-105"
      >
        <motion.div
          variants={itemVariants}
          className="relative w-12 h-12 border-2 rounded-md"
        >
          <a href={Education.link} target="_blank">
            <NextImage
              src={Education.icon}
              alt={Education.name}
              fill
              className="object-cover rounded-md"
            />
          </a>
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col gap-0.5">
          <h3 className="font-medium">{Education.name}</h3>
          <div className="flex items-center gap-3">
            <p className="text-sm text-muted-foreground">{Education.program}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
