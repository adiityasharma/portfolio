"use client";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  return (
    <div className="mt-10 flex w-full flex-wrap justify-between gap-7 px-5 sm:justify-center sm:px-0 md:mt-14 lg:justify-center">
      {skillsData.map(({ icon, name }, index) => (
        <motion.div
          key={name}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            // once: true,
          }}
          custom={index}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
