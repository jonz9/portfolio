"use client";
import { staggerContainer } from "@/utils/motion";
import { About } from "@/data/about";
import { Education } from "@/data/education";
import { Experiences } from "@/data/experiences";
import { motion } from "framer-motion";
import Image from "next/image";
import NextImage from "next/image";
import Photo from "@/components/PFP";
import { useEffect, useRef, useState } from "react";
import { LottieRefCurrentProps } from "lottie-react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [resumeAnimationData, setResumeAnimationData] = useState(null);
  const theme = useTheme();
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.1 } },
  };

  const resumeVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.1, delay: 0.4 } },
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const loadLottie = async () => {
        const file =
          theme.theme === "dark" ? "resume-white.json" : "resume-black.json";
        const response = await fetch(`/static/icons/${file}`);
        const json = await response.json();
        setResumeAnimationData(json);
      };

      loadLottie();
    }
  }, [mounted, theme.theme]);

  const resume =
    theme.theme === "dark"
      ? "/static/files/JohnZhangResume-dark.pdf"
      : "/static/files/JohnZhangResume.pdf";

  const openResume = () => {
    window.open("/static/files/JohnZhangResume.pdf", "_blank");
  };

  if (!mounted) {
    return (
      <div className="flex flex-col min-h-screen gap-5 my-20 items-left">
        {/* Name Loading */}
        <div className="h-6 w-48 bg-muted rounded animate-pulse" />

        {/* Bio Loading */}
        <div className="h-6 w-32 bg-muted rounded animate-pulse" />
        <div className="pl-5 space-y-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-muted rounded-full animate-pulse" />
              <div className="h-4 w-64 bg-muted rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* Resume Button Loading */}
        <div className="relative flex flex-col items-center justify-center w-full gap-8 mt-4 md:mt-10 md:flex-row">
          <div className="w-full h-20 bg-muted rounded-xl animate-pulse" />
        </div>

        {/* Experience Loading */}
        <div className="space-y-6">
          <div className="h-6 w-32 bg-muted rounded animate-pulse" />
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="flex items-start gap-4 md:items-center md:gap-6"
            >
              <div className="w-12 h-12 bg-muted rounded-md animate-pulse" />
              <div className="flex flex-col gap-2">
                <div className="h-4 w-48 bg-muted rounded animate-pulse" />
                <div className="h-3 w-32 bg-muted rounded animate-pulse" />
                <div className="h-3 w-64 bg-muted rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer(0.05, 0.1)}
      initial="hidden"
      animate="show"
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
            transition={{ delay: index * 0.05 }}
            className="text-sm transition-all duration-150 md:text-base hover:text-accent hover:pl-2"
          >
            {item.text}
          </motion.li>
        ))}
      </motion.ul>

      {/* Resume & Picture */}
      <motion.div
        variants={resumeVariants}
        initial="hidden"
        animate="show"
        className="relative flex flex-col items-center justify-center w-full gap-8 mt-4 md:mt-10 md:flex-row"
      >
        <button
          onMouseEnter={() => lottieRef.current?.goToAndPlay(0)}
          onMouseLeave={() => lottieRef.current?.goToAndStop(0)}
          onClick={openResume}
          className="group relative flex items-center gap-4 px-6 py-4 transition-colors duration-150 w-full rounded-xl cursor-pointer bg-background border border-accent/80 dark:border-accent/20 hover:border-accent/100 dark:hover:border-accent/40"
        >
          <div className="absolute inset-0 transition-opacity duration-150 opacity-0 bg-gradient-to-r from-accent/5 to-transparent rounded-xl group-hover:opacity-100" />
          {resumeAnimationData && (
            <Lottie
              lottieRef={lottieRef}
              animationData={resumeAnimationData}
              loop={false}
              style={{ width: 24, height: 24 }}
            />
          )}
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium text-muted-foreground">
              Open & Download
            </span>
            <div className="flex items-center gap-6">
              <h1 className="text-lg font-semibold">Resume</h1>
              <svg
                className="w-5 h-5 transition-opacity duration-150 opacity-0 text-accent right-4 group-hover:opacity-100"
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
        variants={staggerContainer(0.05, 0.1)}
        initial="hidden"
        animate="show"
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
            className="flex items-start gap-4 transition-all duration-150 md:items-center md:gap-6 hover:text-accent hover:scale-105"
          >
            <div className="relative flex-shrink-0 border-2 rounded-md border-accent-gray">
              <a href={exp.link} target="_blank" className="block">
                <NextImage
                  src={exp.icon}
                  alt={exp.name}
                  width={48}
                  height={48}
                  className="object-cover rounded-md"
                  priority={index < 2}
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
        variants={staggerContainer(0.05, 0.1)}
        initial="hidden"
        animate="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex items-center gap-6 mt-10 transition-all duration-150 hover:text-accent hover:scale-105"
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
              priority
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
