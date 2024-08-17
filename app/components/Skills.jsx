"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { SKILLS } from "../constants";
const Skills = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the section is visible
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="mt-20">
      <div className="flex flex-col items-center justify-center">
        {/* Animate the heading */}
        <motion.h2
          className="my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-100"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          Skills
        </motion.h2>

        {/* Animate the list of skills */}
        <motion.ul
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2, // Stagger each list item by 0.2s
              },
            },
          }}
        >
          {SKILLS.map((skill, index) => (
            <motion.li
              key={index}
              className="m-10 border-b border-slate-400 py-2 text-2xl tracking-tighter lg:py-10 lg:text-4xl"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Skills;
