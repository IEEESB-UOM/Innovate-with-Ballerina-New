import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import BallerinModel from "./BallerinModel";
import ParticleBackground from "./ParticleBackground";
import NavigationDots from "./NavigationDots";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0, 0.9],
      },
    },
  };

  const taglineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
      },
    },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-teal-950 to-emerald-950"
    >
      <ParticleBackground />

      <div className="relative h-full">
        <div className="absolute inset-0 flex items-center justify-center -mt-20">
          <div className="w-full h-full max-w-3xl">
            <BallerinModel />
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-end text-center z-10 px-4 pb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="max-w-4xl"
          >
            <motion.h1
              variants={titleVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="block bg-gradient-to-r from-[#FBB934] to-[#10C3BD] text-transparent bg-clip-text mb-2">
                The Ultimate
              </span>
              <span className="bg-gradient-to-r from-[#FBB934] to-[#10C3BD] text-transparent bg-clip-text">
                C*ding Challenge
              </span>
            </motion.h1>

            <motion.p
              variants={taglineVariants}
              className="text-lg md:text-xl text-white/80 tracking-widest mt-4"
            >
              Code . Compete . Conquer
            </motion.p>
          </motion.div>
        </div>
      </div>

      <NavigationDots activeIndex={0} totalDots={4} />
    </div>
  );
};

export default Hero;
