"use client";

import Image from "next/image";
import Profile from "../../public/profileme.webp";
import { PROFILE } from "../constants";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";
import {  FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const ProfileOverview = () => {
  return (
    <div className="my-24">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center gap-4"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.1 }}
          className="rounded-full border-2 border-slate-400"
        >
          <Image
            src={Profile}
            width={110}
            height={110}
            alt="profilepic"
            className="rounded-full"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl font-bold"
        >
          {PROFILE.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex items-center justify-center gap-8"
        >
          <motion.a
            href="mailto:kumarsatwik@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="opacity-50 hover:opacity-80"
          >
            <MdEmail fontSize={25} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/kumarsatwik/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="opacity-50 hover:opacity-80"
          >
            <FaLinkedin fontSize={25} />
          </motion.a>
          <motion.a
            href="https://github.com/Kumarsatwik"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="opacity-50 hover:opacity-80"
          >
            <FaGithub fontSize={25} />
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="tracking-tighter"
        >
          {PROFILE.city}
        </motion.p>

        <motion.p
          className="my-3 text-center text-5xl font-semibold tracking-tighter lg:text-[10rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {PROFILE.greet.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.15 }}
              whileHover={{ scale: 1.2, color: "#3b82f6" }} // Hover effect on each character
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 1.5 }}
          className="mb-10 max-w-2xl p-1 text-center text-slate-400 tracking-tight lg:text-3xl"
        >
          I am a passionate{" "}
          <span className="border-b font-medium text-slate-200 ">
            Full Stack Developer{" "}
          </span>
          with a knack for creating seamless, scalable, and user-friendly
          applications. Specialize in both
          <span className="font-medium text-slate-200"> Frontend and </span>
          <span className="font-medium text-slate-200">Backend </span>
          development, ensuring a cohesive and efficient user experience from
          start to finish.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ProfileOverview;
