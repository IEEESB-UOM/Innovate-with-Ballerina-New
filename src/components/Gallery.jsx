/* eslint-disable */
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = ({ isActive }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = [
    {
      src: "/past-events/10.jpg",
    },
    {
      src: "/past-events/11.jpg",
    },
    {
      src: "/past-events/3.jpg",
    },
    {
      src: "/past-events/4.jpg",
    },
    {
      src: "/past-events/5.jpg",
    },
    {
      src: "/past-events/6.jpg",
    },
    {
      src: "/past-events/7.jpg",
    },
    {
      src: "/past-events/8.jpg",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);
  useEffect(() => {
    if (isActive && !isHovered) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isActive, nextSlide, isHovered]);

  const slideIndices = {
    center: currentIndex,
    left: (currentIndex - 1 + images.length) % images.length,
    leftMost: (currentIndex - 2 + images.length) % images.length,
    right: (currentIndex + 1) % images.length,
    rightMost: (currentIndex + 2) % images.length,
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#0A2324] via-[#0A2324] to-[#153f41] flex flex-col items-center justify-center overflow-hidden py-8">
      {/* Background Particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-[#FBB934] to-[#10C3BD]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#FBB934] to-[#10C3BD] bg-clip-text text-transparent px-4 text-center"
      >
        Gallery
      </motion.h2>

      {/* Main Gallery Container */}
      <div className="relative w-full max-w-7xl h-[400px] sm:h-[450px] md:h-[500px] px-4">
        <div className="relative h-full flex items-center justify-center">
          <AnimatePresence mode="sync">
            {/* Left Most Card */}
            <motion.div
              key={`leftmost-${slideIndices.leftMost}`}
              className="absolute w-[10rem] sm:w-[15rem] md:w-[25rem] lg:w-[35rem] h-[12rem] sm:h-[16rem] md:h-[20rem] lg:h-[24rem] rounded-2xl overflow-hidden shadow-2xl hidden sm:block"
              style={{ filter: "brightness(0.3)" }}
              initial={{ x: "-80%", scale: 0.8, zIndex: 1 }}
              animate={{ x: "-65%", scale: 0.6, zIndex: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                mass: 0.5,
              }}
            >
              <img
                src={images[slideIndices.leftMost].src}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Left Card */}
            <motion.div
              key={`left-${slideIndices.left}`}
              className="absolute w-[12rem] sm:w-[18rem] md:w-[28rem] lg:w-[35rem] h-[14rem] sm:h-[18rem] md:h-[22rem] lg:h-[24rem] rounded-2xl overflow-hidden shadow-2xl hidden sm:block"
              style={{ filter: "brightness(0.5)" }}
              initial={{ x: "-45%", scale: 0.9, zIndex: 2 }}
              animate={{ x: "-35%", scale: 0.8, zIndex: 2 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                mass: 0.5,
              }}
            >
              <img
                src={images[slideIndices.left].src}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Center Card */}
            <motion.div
              key={`center-${slideIndices.center}`}
              className="absolute w-[16rem] sm:w-[24rem] md:w-[32rem] lg:w-[40rem] h-[16rem] sm:h-[20rem] md:h-[24rem] lg:h-[24rem] rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform-gpu"
              initial={{ scale: 0.8, zIndex: 3 }}
              animate={{ scale: 1, zIndex: 5 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
              }}
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <img
                src={images[slideIndices.center].src}
                alt=""
                className="w-full h-full object-cover transform transition-all duration-500"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-100"
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Right Card */}
            <motion.div
              key={`right-${slideIndices.right}`}
              className="absolute w-[12rem] sm:w-[18rem] md:w-[28rem] lg:w-[35rem] h-[14rem] sm:h-[18rem] md:h-[22rem] lg:h-[24rem] rounded-2xl overflow-hidden shadow-2xl hidden sm:block"
              style={{ filter: "brightness(0.5)" }}
              initial={{ x: "45%", scale: 0.9, zIndex: 2 }}
              animate={{ x: "35%", scale: 0.8, zIndex: 2 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                mass: 0.5,
              }}
            >
              <img
                src={images[slideIndices.right].src}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right Most Card */}
            <motion.div
              key={`rightmost-${slideIndices.rightMost}`}
              className="absolute w-[10rem] sm:w-[15rem] md:w-[25rem] lg:w-[35rem] h-[12rem] sm:h-[16rem] md:h-[20rem] lg:h-[24rem] rounded-2xl overflow-hidden shadow-2xl hidden sm:block"
              style={{ filter: "brightness(0.3)" }}
              initial={{ x: "80%", scale: 0.8, zIndex: 1 }}
              animate={{ x: "65%", scale: 0.6, zIndex: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                mass: 0.5,
              }}
            >
              <img
                src={images[slideIndices.rightMost].src}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-1 sm:space-x-2 mt-4 sm:mt-8">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-4 sm:w-6 bg-gradient-to-r from-[#FBB934] to-[#10C3BD]"
                  : "bg-gray-400/30 hover:bg-gray-400/50"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
