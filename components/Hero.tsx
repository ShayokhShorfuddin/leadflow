"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import analytics from "../public/analytics.svg";

const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: 5,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      staggerChildren: 1,
      duration: 1,
    },
  },
};

export default function Hero() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeInUpAnimation}
      className="flex flex-col items-center mt-16 p-7"
    >
      <motion.h1
        variants={fadeInUpAnimation}
        className="text-center text-4xl md:text-6xl xl:text-8xl font-ubuntu"
      >
        A Fluid Approach
        <br />
        To Marketing Excellence.
      </motion.h1>

      <motion.p
        variants={fadeInUpAnimation}
        className="text-lg text-center font-ubuntu text-gray-700 mt-5"
      >
        Crafting seamless campaigns that resonate with your audience.
      </motion.p>

      <motion.div variants={fadeInUpAnimation}>
        <Image
          src={analytics}
          height={600}
          width={600}
          alt="analytics"
          className=""
        />
      </motion.div>
    </motion.div>
  );
}
