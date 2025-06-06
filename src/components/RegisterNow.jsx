/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import GradientBorderButton from "./common/GradientBorderButton";
import ParticleBackground from "./ParticleBackground";

const RegisterNow = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#0A2324] via-[#0A2324] to-[#153f41] flex items-center justify-center overflow-hidden px-4 py-16 sm:px-6">
      <ParticleBackground />
      {/* Background decorative elements */}
      <motion.img
        src="/Wrinkle.svg"
        alt="Decorative wrinkle"
        className="absolute right-0 top-[80%] w-[200px] sm:w-[300px] opacity-50 z-[1] hidden sm:block"
        initial={{ opacity: 0, x: 200 }}
        whileInView={{
          opacity: 0.5,
          x: 0,
          y: [0, -5, 0],
        }}
        viewport={{ once: true }}
        transition={{
          x: { duration: 1, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 1 },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          },
        }}
      />
      <motion.img
        src="/Spring1.png"
        alt="Decorative spring"
        className="absolute left-0 top-[10%] w-[120px] sm:w-[200px] opacity-70 z-[1] hidden sm:block"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{
          opacity: 0.7,
          x: 0,
          y: [0, 5, 0],
        }}
        viewport={{ once: true }}
        transition={{
          x: { duration: 1, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 1 },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          },
        }}
      />
      {/* Main content container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 w-full max-w-4xl mx-auto text-center px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#FBB934] to-[#10C3BD] bg-clip-text text-transparent"
        >
          Register Now
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0"
        >
          Join the "Innovate with Ballerina" competition to empower your coding
          proficiency and entrepreneurial spirit! Gain invaluable experience and
          contribute to shaping the future of technology. Secure your spot today
          and embark on an inspiring journey of learning and discovery.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full sm:w-auto"
          >
            <GradientBorderButton
              onClick={() => window.open("#", "_blank")}
              className="w-full sm:w-auto"
            >
              REGISTER NOW
            </GradientBorderButton>
          </motion.div>
          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full sm:w-auto"
          >
            <GradientBorderButton
              onClick={() => window.open("#", "_blank")}
              filled={true}
              className="w-full sm:w-auto"
            >
              DOWNLOAD BOOKLET
            </GradientBorderButton>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A1B23] to-transparent z-0"></div>
    </div>
  );
};

export default RegisterNow;
