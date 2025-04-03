"use client";
import { staggerContainer } from "@/utils/motion";
import { About, Education, Experiences } from "@/data/index";
import { motion } from "framer-motion";
import Image from "@heroui/react";
import NextImage from "next/image";
import Photo from "@/components/PFP";

export default function Home() {
  // Define animation variants for child elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      variants={staggerContainer(0.1, 0.2)} // Reduced values for more noticeable staggering
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
        className="flex flex-row items-center justify-between p-5 mt-10 border-2 rounded-md"
      >
        <p>Resume</p>
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
