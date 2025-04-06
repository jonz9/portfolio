"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer } from "@/utils/motion";
import { ProjectsList } from "@/data/index";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={staggerContainer(0.1, 0.5)}
      initial="hidden"
      animate="show"
      className="flex flex-col min-h-screen gap-8 my-10"
    >
      <motion.h1
        variants={itemVariants}
        className="mt-10 mb-4 text-xl font-mediu"
      >
        just creating to see what I like.
      </motion.h1>

      <div className="flex flex-col gap-18">
        {ProjectsList.map((project, id) => (
          <motion.div key={id} variants={itemVariants} className="w-full">
            <div className="relative w-full h-[40vh] mb-4 overflow-hidden rounded-lg bg-muted">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority={id === 0}
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-muted-foreground">
                  In the works...
                </div>
              )}
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="flex flex-row gap-5 align-middle">
                <h2 className="text-2xl font-semibold">{project.name}</h2>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <FaGithub
                    size={22}
                    className="transition-all duration-300 text-accent hover:scale-110"
                  />
                </a>
              </div>
              <p className="mb-3 text-muted-foreground">{project.caption}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 text-sm transition-all duration-200 rounded-full bg-accent/10 hover:bg-accent/20 "
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.9 + 0.15 * index,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, 6, 0, -6, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
