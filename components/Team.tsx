"use client";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import React, { useEffect, useRef } from "react";

import Image, { StaticImageData } from "next/image";
import girl1 from "../public/girl1.jpg";
import girl2 from "../public/girl2.jpg";
import girl3 from "../public/girl3.jpg";
import man1 from "../public/man1.jpg";

const people: { name: string; role: string; img: StaticImageData }[] = [
  {
    name: "Natalie",
    role: "CEO & Founder",
    img: girl2,
  },

  {
    name: "Eric",
    role: "Lead Developer",
    img: man1,
  },

  {
    name: "Sarah",
    role: "Social Media Manager",
    img: girl1,
  },

  {
    name: "Emily",
    role: "SEO Expert",
    img: girl3,
  },
];

const meetTeamVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.25 } },
};

const teamImagesVariant: Variants = {
  hidden: { opacity: 0, y: 20 },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      staggerChildren: 1,
      duration: 1,
    },
  },
};

export default function Team() {
  const meetTeamControls = useAnimation();
  const teamImagesControls = useAnimation();

  const meetTeamRef = useRef(null);
  const teamImagesRef = useRef(null);

  const isMeetTeamInView = useInView(meetTeamRef, { once: true });
  const isTeamImagesInView = useInView(teamImagesRef, { once: true });

  useEffect(() => {
    if (isMeetTeamInView) {
      // Fire animation
      meetTeamControls.start("visible");
    }

    if (isTeamImagesInView) {
      // Fire animation
      teamImagesControls.start("visible");
    }
  }, [isMeetTeamInView, isTeamImagesInView]);

  return (
    <section id="team" className="flex flex-col items-center container mt-32">
      <motion.div
        ref={meetTeamRef}
        variants={meetTeamVariant}
        initial="hidden"
        animate={meetTeamControls}
        className="max-w-[520px] text-center"
      >
        <h1 className="text-4xl font-ubuntu">Meet The Team</h1>

        <p className="mt-3 text-gray-600">
          A diverse group of passionate professionals, each bringing unique
          skills and expertise to the table. Together, we collaborate to create
          innovative solutions that drive success for our clients.
        </p>
      </motion.div>

      <motion.div
        ref={teamImagesRef}
        variants={teamImagesVariant}
        initial="hidden"
        animate={teamImagesControls}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-10"
      >
        {people.map((person, index) => (
          <motion.div
            variants={teamImagesVariant}
            key={index}
            className={`w-80 h-[400px] xl:h-[500px] relative rounded-xl overflow-hidden`}
          >
            <Image
              src={person.img}
              alt={person.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 p-4">
              <h2 className="text-xl text-gray-200 font-semibold">
                {person.name}
              </h2>
              <p className="mt-1 text-gray-300">{person.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
