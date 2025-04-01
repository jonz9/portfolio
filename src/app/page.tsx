"use client";
import { staggerContainer } from "@/utils/motion";
import { About } from "@/data/index";
import { motion } from "framer-motion";

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
      className="flex flex-col min-h-screen gap-5 mt-20 items-left"
    >
      <motion.h1 variants={itemVariants} className="font-bold text-md">
        {About.name}
      </motion.h1>
      <motion.p variants={itemVariants} className="text-md">
        I'm currently...
      </motion.p>
      <motion.ul className="pl-5 list-disc list-inside">
        {About.bio.map((item, index) => (
          <motion.li
            key={item.text}
            variants={itemVariants}
            // Adding custom delay based on index for more pronounced staggering
            transition={{ delay: index * 0.1 }}
          >
            {item.text}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
