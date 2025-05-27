import { useEffect, useRef, useState } from 'react';
import './App.css';

import Hero from './components/Hero';
import About from './components/About';
import Prizes from './components/Prizes';
import Timeline from './components/Timeline';
import RegisterNow from './components/RegisterNow';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';

function App() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const numSections = 7; // Update if you add/remove sections

  useEffect(() => {
    const container = containerRef.current;
    let isScrolling = false;

    const scrollToSection = (index) => {
      const targetY = index * window.innerHeight;
      container.scrollTo({
        top: targetY,
        behavior: 'smooth',
      });
    };

    const onWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;
      isScrolling = true;

      if (e.deltaY > 0) {
        setCurrentIndex((prev) => Math.min(prev + 1, numSections - 1));
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }

      setTimeout(() => {
        isScrolling = false;
      }, 600); // Match smooth scroll duration
    };

    const onKeyDown = (e) => {
      if (isScrolling) return;
      if (e.key === 'ArrowDown') {
        setCurrentIndex((prev) => Math.min(prev + 1, numSections - 1));
      } else if (e.key === 'ArrowUp') {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
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
    <div
      ref={containerRef}
      className="h-screen w-screen overflow-hidden"
      style={{ scrollSnapType: 'y mandatory', overflowY: 'scroll' }}
    >
      <section className="h-screen w-full flex items-center justify-center bg-red-200">
        <Hero />
      </section>
      <section className="h-screen w-full flex items-center justify-center bg-blue-200">
        <About />
      </section>
      <section className="h-screen w-full flex items-center justify-center bg-green-200">
        <Prizes />
      </section>
      <section className="h-screen w-full flex items-center justify-center bg-yellow-200">
        <Timeline />
      </section>
      <section className="h-screen w-full flex items-center justify-center bg-purple-200">
        <RegisterNow />
      </section>
      <section className="h-screen w-full flex items-center justify-center bg-pink-200">
        <FAQ />
      </section>
      <section className="h-screen w-full flex items-center justify-center bg-orange-200">
        <ContactUs />
      </section>
    </div>
  );
}

export default App;
