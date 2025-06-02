import React from "react";
import { motion } from "framer-motion";

interface NavigationDotsProps {
  activeIndex: number;
  totalDots: number;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({
  activeIndex,
  totalDots,
}) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-4">
        {Array.from({ length: totalDots }).map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === activeIndex
                ? "bg-teal-300"
                : "bg-gray-400 bg-opacity-40"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.8 + index * 0.1,
                duration: 0.5,
              },
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NavigationDots;
