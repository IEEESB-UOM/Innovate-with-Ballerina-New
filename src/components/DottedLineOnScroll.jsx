import React, { useEffect, useRef, useState } from 'react';

export default function DottedLineOnScroll() {
  const point1Ref = useRef(null);
  const point2Ref = useRef(null);
  const lineRef = useRef(null);
  const triggerRef = useRef(null);
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowLine(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      if (triggerRef.current) observer.unobserve(triggerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!showLine) return;

    const getCenter = (el) => {
      const rect = el.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 + window.scrollX,
        y: rect.top + rect.height / 2 + window.scrollY,
      };
    };

    const p1 = getCenter(point1Ref.current);
    const p2 = getCenter(point2Ref.current);

    const line = lineRef.current;
    if (line) {
      line.setAttribute('x1', p1.x);
      line.setAttribute('y1', p1.y);
      line.setAttribute('x2', p2.x);
      line.setAttribute('y2', p2.y);
    }
  }, [showLine]);

  return (
    <div className="relative w-full min-h-screen">
      {/* Points to connect */}
      <div
        ref={point1Ref}
        className="absolute w-4 h-4 bg-red-500 rounded-full"
        style={{ top: '200px', left: '100px' }}
      />
      <div
        ref={point2Ref}
        className="absolute w-4 h-4 bg-blue-500 rounded-full"
        style={{ top: '600px', left: '300px' }}
      />

      {/* Section that triggers line */}
      <section ref={triggerRef} className="mt-[700px] h-[300px] bg-gray-100">
        <h2 className="text-center text-xl font-semibold pt-10">
          Scroll Target Section
        </h2>
      </section>

      {/* SVG Overlay */}
      {showLine && (
        <svg
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            ref={lineRef}
            stroke="black"
            strokeDasharray="5,5"
            strokeWidth="2"
            x1="0"
            y1="0"
            x2="0"
            y2="0"
          />
        </svg>
      )}
    </div>
  );
}
