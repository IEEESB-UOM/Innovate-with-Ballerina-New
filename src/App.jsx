import { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Prizes from "./components/Prizes";
import Timeline from "./components/Timeline";
import Timeline2 from "./components/Timeline2";
import RegisterNow from "./components/RegisterNow";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import NavigationDots from "./components/NavigationDots";
import GradientBorderButton from "./components/common/GradientBorderButton";
import ParticleBackground from "./components/ParticleBackground";
import Gallery from "./components/Gallery";
import Preloader from "./components/Preloader";

function App() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const numSections = 9;
  const scrollLock = useRef(false);

  // Handle pre-loader completion
  const handlePreloaderDone = () => {
    setIsPreloaderDone(true);
  };

  useEffect(() => {
    // Disable scroll during pre-loader
    if (!isPreloaderDone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const container = containerRef.current;

    // Only add event listeners if pre-loader is done and container exists
    if (isPreloaderDone && container) {
      const handleScroll = (direction) => {
        if (scrollLock.current) return;
        scrollLock.current = true;

        setCurrentIndex((prev) => {
          let next = prev + direction;
          if (next < 0) next = 0;
          if (next >= numSections) next = numSections - 1;
          return next;
        });

        setTimeout(() => {
          scrollLock.current = false;
        }, 1500);
      };

      const onWheel = (e) => {
        if (!(isSafari || isMobile)) {
          e.preventDefault();
        }
        const direction = e.deltaY > 0 ? 1 : -1;
        handleScroll(direction);
      };

      const onKeyDown = (e) => {
        if (e.key === "ArrowDown") {
          handleScroll(1);
        } else if (e.key === "ArrowUp") {
          handleScroll(-1);
        }
      };

      container.addEventListener("wheel", onWheel, { passive: false });
      window.addEventListener("keydown", onKeyDown);

      // Cleanup event listeners
      return () => {
        if (container) {
          container.removeEventListener("wheel", onWheel);
        }
        window.removeEventListener("keydown", onKeyDown);
        document.body.style.overflow = "auto"; // Cleanup
      };
    }
  }, [isPreloaderDone]);

  useEffect(() => {
    if (isPreloaderDone && containerRef.current && !(isSafari || isMobile)) {
      const targetY = currentIndex * window.innerHeight;
      containerRef.current.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  }, [currentIndex, isPreloaderDone]);

  return (
    <div className="relative font-space-grotesk">
      {/* Show pre-loader */}
      <Preloader onLoaded={handlePreloaderDone} />
      <div>
        <div className="fixed top-8 left-8 z-100 md:w-auto w-12">
          <img
            src="./ballerina_icon.svg"
            alt="Ballerina Icon"
            className="w-auto"
            onClick={() => setCurrentIndex(0)}
          />
        </div>
        <div className="fixed top-9 right-8 z-100">
          {currentIndex !== 5 && (
            <GradientBorderButton onClick={() => window.location.href = '/register'}>
              REGISTER NOW
            </GradientBorderButton>
          )}
        </div>
        <div
          ref={containerRef}
          className="h-screen w-screen overflow-hidden overflow-y-scroll snap-y snap-mandatory"
        >
          <NavigationDots
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            numSections={numSections}
          />
          <section className="snap-start h-screen flex items-center justify-center">
            <Hero isActive={currentIndex === 0} />
          </section>
          <section className="snap-start h-screen flex items-center justify-center">
            <About isActive={currentIndex === 1} />
          </section>
          <section className="snap-start h-screen flex items-center justify-center">
            <Prizes isActive={currentIndex === 2} />
          </section>
          <section className="snap-start h-screen flex items-center justify-center">
            <Timeline isActive={currentIndex === 3} />
          </section>
          <section className="snap-start h-screen flex items-center justify-center">
            <Timeline2 isActive={currentIndex === 4} />
          </section>
          <section className="snap-start h-screen flex items-center justify-center">
            <RegisterNow isActive={currentIndex === 5} />
          </section>
          <section className="snap-start h-screen flex items-center justify-center">
            <Gallery isActive={currentIndex === 6} />
          </section>
          <section className="snap-start h-screen flex items-center justify-center">
            <FAQ isActive={currentIndex === 7} />
          </section>
          <section className="snap-start h-screen flex items-center justify-center">
            <ContactUs isActive={currentIndex === 8} />
          </section>
        </div>
        <ParticleBackground />
      </div>
    </div>
  );
}

export default App;
