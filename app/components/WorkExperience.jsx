"use client";
import Image from "next/image";
import { EXPERIENCES } from "../constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ExperienceCard = ({ experience }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (inView) {
    controls.start("visible");
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
      }}
      className="flex flex-wrap items-center p-4 lg:mb-23 lg:justify-center"
    >
      {/* Uncomment if you want to use the image */}
      {/* <div className="mx-4">
        <Image
          src={experience.img}
          alt={experience.company}
          width={80}
          height={80}
          className="mb-2 mr-2 rounded-full border border-slate-400"
        />
      </div> */}
      <div className="w-full max-w-xl lg:w-3/4 mb-2 mr-2">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.2 } }}
          className="mb-2 text-sm"
        >
          {experience.year}
        </motion.p>
        <motion.h6
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.4 } }}
          className="text-xl font-semibold"
        >
          {experience.role}
        </motion.h6>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.6 } }}
          className="text-sm"
        >
          {experience.company}
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.8 } }}
          className="my-4"
          dangerouslySetInnerHTML={{ __html: experience.description }}
        />
        <div className="flex flex-wrap">
          {experience.technologies.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, delay: index * 0.1 },
              }}
              className="mr-2 mt-4 rounded-full border border-slate-400 px-2 py-1 font-medium text-slate-400 "
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const WorkExperience = () => {
  return (
    <div>
      <motion.h2
        className="my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut",delay:1.2 }}
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
