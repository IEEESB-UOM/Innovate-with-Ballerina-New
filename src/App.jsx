import { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Prizes from './components/Prizes';
import Timeline from './components/Timeline';
import RegisterNow from './components/RegisterNow';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import NavigationDots from './components/NavigationDots';
import GradientBorderButton from './components/common/GradientBorderButton';

function App() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const numSections = 7;
  const scrollLock = useRef(false);

  useEffect(() => {
    const container = containerRef.current;

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
      }, 1000);
    };

    const onWheel = (e) => {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      handleScroll(direction);
    };

    const onKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        handleScroll(1);
      } else if (e.key === 'ArrowUp') {
        handleScroll(-1);
      }
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      container.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [numSections]);

  useEffect(() => {
    const container = containerRef.current;
    const targetY = currentIndex * window.innerHeight;
    container.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  }, [currentIndex]);

  return (
    <div className="relative font-space-grotesk">
      <div className="fixed top-8 left-8 z-50">
        <img src="./ballerina_icon.svg" alt="Ballerina Icon" className="w-auto" />
      </div>
      <div className="fixed top-9 right-8 z-50">
        <GradientBorderButton onClick={() => setCurrentIndex(4)}>
          REGISTER NOW
        </GradientBorderButton>
      </div>
      <div
        ref={containerRef}
        className="h-screen w-screen overflow-hidden overflow-y-scroll snap-y snap-mandatory"
      >
        <NavigationDots currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} numSections={numSections} />        <section className="h-screen flex items-center justify-center">
          <Hero isActive={currentIndex === 0} />
        </section>
        <section className="h-screen flex items-center justify-center">
          <About isActive={currentIndex === 1} />
        </section>
        <section className="h-screen flex items-center justify-center">
          <Prizes isActive={currentIndex === 2} />
        </section>
        <section className="h-screen flex items-center justify-center">
          <Timeline isActive={currentIndex === 3} />
        </section>
        <section className="h-screen flex items-center justify-center">
          <RegisterNow isActive={currentIndex === 4} />
        </section>
        <section className="h-screen flex items-center justify-center">
          <FAQ isActive={currentIndex === 5} />
        </section>
        <section className="h-screen flex items-center justify-center">
          <ContactUs isActive={currentIndex === 6} />
        </section>
      </div>
    </div>
  );
}

export default App;
