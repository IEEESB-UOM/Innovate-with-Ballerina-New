import { useState } from "react";

const Preloader = ({ onLoaded }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle when the video ends
  const handleVideoEnd = () => {
    setIsLoaded(true);
    setTimeout(() => onLoaded(), 500); // Brief delay for smooth fade-out
  };

  // Handle skip button click
  const handleSkip = () => {
    setIsLoaded(true);
    setTimeout(() => onLoaded(), 500);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black z-[1000] transition-opacity duration-500 ${
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        autoPlay
        muted
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
      >
        <source src="/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 text-white bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition"
      >
        Skip
      </button>
    </div>
  );
};

export default Preloader;
