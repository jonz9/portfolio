"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { staggerContainer } from "@/utils/motion";
import { ProjectsList } from "@/data/projects";
import { Github } from "lucide-react";

const Projects = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={staggerContainer(0.05, 0.3)}
      initial="hidden"
      animate="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col gap-8 my-10"
    >
      <motion.h1
        variants={shouldReduceMotion ? undefined : itemVariants}
        className="mt-10 mb-4 font-light"
      >
        just creating whatever i'm into at the moment.
      </motion.h1>

      <div className="flex flex-col gap-18">
        {ProjectsList.map((project, id) => (
          <motion.div
            key={id}
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="w-full"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative w-full h-[30vh] md:h-[40vh] mb-4 overflow-hidden bg-muted">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform rounded-lg border-1 border-accent-gray duration-300 hover:scale-103"
                  priority={id === 0}
                  loading={id === 0 ? "eager" : "lazy"}
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
                  <Github
                    size={22}
                    className="transition-all duration-200 text-accent hover:scale-110"
                  />
                </a>
              </div>
              <p className="mb-3 text-muted-foreground">{project.caption}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 text-sm transition-all duration-150 rounded-full bg-accent/20 hover:bg-accent/30"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.1,
                      delay: 0.3 + 0.05 * index,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
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
