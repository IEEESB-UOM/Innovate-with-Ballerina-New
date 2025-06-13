import { useState, useEffect } from "react";

const Preloader = ({ onLoaded }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Handle when the video/gif media ends
  const handleMediaEnd = () => {
    setIsLoaded(true);
    setTimeout(() => onLoaded(), 500); // Brief delay for smooth fade-out
  };

  // Handle skip button click
  const handleSkip = () => {
    setIsLoaded(true);
    setTimeout(() => onLoaded(), 500);
  };  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isMobile ? 'bg-gradient-to-b from-[#0A2324] via-[#0A2324] to-[#0A2324]' : 'bg-black'
      } z-[1000] transition-opacity duration-500 ${
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
        {isMobile ? (
        /* Use GIF for mobile devices */
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A2324] opacity-40 z-10" />
          <img
            src="/intro1.gif"
            alt="Loading animation"
            onLoad={() => {
              // Set a timeout to simulate the end of the gif animation
              setTimeout(handleMediaEnd, 3500); // Adjust timeout based on actual GIF duration
            }}
            className="max-w-full max-h-full object-contain z-0"
          />
        </div>
      ) : (
        /* Use video for desktop */
        <video
          autoPlay
          muted
          onEnded={handleMediaEnd}
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}{" "}
      <button
        onClick={handleSkip}
        className={`absolute ${
          isMobile ? "bottom-6 right-6" : "bottom-8 right-8"
        } text-white bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition text-sm sm:text-base`}
      >
        {isMobile ? "Skip Intro" : "Skip"}
      </button>
    </div>
  );
};

export default Preloader;
