import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import BallerinModel from "./BallerinModel";
import NavigationDots from "./NavigationDots";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPercent = window.scrollY / window.innerHeight;
        setScrollY(scrollPercent);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 50 : 100,
      rotateX: isMobile ? 30 : 45,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: isMobile ? 0.8 : 1.2,
        ease: [0.6, 0.05, 0, 0.9],
        type: "spring",
        stiffness: isMobile ? 120 : 100,
      },
    },
    hover: {
      scale: isMobile ? 1.02 : 1.05,
      transition: {
        duration: isMobile ? 0.15 : 0.2,
        ease: "easeInOut",
      },
    },
  };
  const taglineVariants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 30 : 50,
      rotateX: isMobile ? -30 : -45,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: isMobile ? 0.6 : 0.8,
        duration: isMobile ? 0.8 : 1,
        type: "spring",
        stiffness: isMobile ? 100 : 80,
        damping: isMobile ? 12 : 15,
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
    <motion.div
      ref={heroRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-[100svh] w-full overflow-hidden bg-gradient-to-b from-[#0A2324] via-[#0A2324] to-[#153f41]"
      style={{
        perspective: "1000px",
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="relative h-full"
        style={{ translateY: scrollY * (isMobile ? -25 : -50) }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center -mt-24 sm:-mt-12" // Increased negative margin
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            translateY: scrollY * 100,
            scale: 1 - scrollY * 0.1,
          }}
        >
          <motion.div
            className="w-full h-3/5 max-w-[280px] sm:h-full -translate-y-12 sm:-translate-y-16 lg:-translate-y-20" // Adjusted translate-y
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <BallerinModel />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-end text-center z-10 px-4 pb-32 sm:pb-28"
          style={{
            translateY: scrollY * -30,
          }}
        >
          {" "}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="max-w-4xl"
            style={{
              translateY: scrollY * (isMobile ? -50 : -100),
              translateZ: scrollY * (isMobile ? 25 : 50),
              scale: 1 + scrollY * (isMobile ? 0.05 : 0.1),
              perspective: isMobile ? 500 : 1000,
              transformStyle: "preserve-3d",
            }}
          >
            <motion.h1
              variants={titleVariants}
              whileHover="hover"
              className="text-4xl text-[2.6rem] md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 cursor-pointer tracking-tight"
            >
              {" "}
              <motion.span
                className="block bg-gradient-to-r from-[#FBB934] to-[#10C3BD] text-transparent bg-clip-text"
                initial={{
                  opacity: 0,
                  y: -50,
                  x: -100,
                  rotateX: 45,
                  rotateY: -30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                  rotateX: 0,
                  rotateY: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.2,
                  duration: 1.5,
                }}
                whileHover={{ scale: 1.05 }}
                style={{
                  translateX: scrollY * (isMobile ? -25 : -50),
                  translateZ: scrollY * (isMobile ? 35 : 75),
                }}
              >
                The Ultimate
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-[#FBB934] to-[#10C3BD] text-transparent bg-clip-text"
                initial={{
                  opacity: 0,
                  y: 50,
                  x: 100,
                  rotateX: -45,
                  rotateY: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                  rotateX: 0,
                  rotateY: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.4,
                  duration: 1.5,
                }}
                whileHover={{ scale: 1.05 }}
                style={{
                  translateX: scrollY * (isMobile ? 25 : 50),
                  translateZ: scrollY * (isMobile ? 35 : 75),
                }}
              >
                C✽ding Challenge
              </motion.span>
            </motion.h1>{" "}
            <motion.p
              variants={taglineVariants}
              whileHover={{ scale: isMobile ? 1.05 : 1.1 }}
              whileTap={{ scale: isMobile ? 0.98 : 0.95 }}
              className="text-base sm:text-lg md:text-xl text-white tracking-widest mt-2 sm:mt-4 cursor-pointer"
              // style={{
              //   background:
              //     "linear-gradient(to right, rgba(255,255,255,0.8) 0%, #10C3BD 50%, rgba(255,255,255,0.8) 100%)",
              //   backgroundSize: "200% auto",
              //   WebkitBackgroundClip: "text",
              //   WebkitTextFillColor: "transparent",
              //   translateY: scrollY * -150,
              //   translateZ: scrollY * 100,
              //   scale: 1 + scrollY * 0.2,
              // }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: isMobile ? 3 : 5,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              Let the Ballet Code the Future!
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      <NavigationDots activeIndex={0} totalDots={4} />
    </motion.div>
  );
};

export default Hero;
