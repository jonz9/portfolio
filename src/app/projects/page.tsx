"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer } from "@/utils/motion";
import { ProjectsList } from "@/data/index";

const Projects = () => {
  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col min-h-screen gap-8 my-10"
    >
      <motion.h1 variants={itemVariants} className="mb-8 text-3xl font-bold">
        Projects
      </motion.h1>

      <div className="flex flex-col gap-24">
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
                  No image available
                </div>
              )}
            </div>

            <div className="max-w-3xl mx-auto">
              <h2 className="mb-2 text-2xl font-semibold">{project.name}</h2>
              <p className="mb-3 text-muted-foreground">{project.caption}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-accent/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-accent hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
