import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const About = () => {
  const Bold = ({ children }) => <strong className="font-semibold text-white">{children}</strong>;
  
  // Refs for animations
  const vectorRef = useRef(null);
  const aboutVectorRef = useRef(null);
  const logoRef = useRef(null);
  const logoMobileRef = useRef(null);
  const terminalRef = useRef(null);
  
  // State for typing animation
  const [typedText, setTypedText] = useState('');
  const [isDesktop, setIsDesktop] = useState(false);
  
  // Text content for typing animation
  const mobileText = '"Innovate With Ballerina" \n Provides An Exclusive Platform \n For University Students To \n Elevate Their Coding Passion \n With The Ballerina \n Programming Language. This \n Pioneering Competition Aims \n To Drive The Future Of \n Technology By Fostering \n Teamwork, Innovation, And \n Outstanding Performance.\nProjects Can Be Submitted Via \n GitHub And Will Be Evaluated \n By The WSO2 Ballerina Team.\n Compelling Rewards And \n Certificates Will Be Awarded \n For Exceptional Contributions.';  
  const desktopText = 'Innovate with Ballerina is an idea hackathon organized by the IEEE Student Branch in collaboration with the IEEE CS Student Branch Chapter of University of Moratuwa, and proudly powered by WSO2. The competition is open to university undergraduates across Sri Lanka, where participants are challenged to integrate their innovative ideas using the Ballerina programming language. The journey features expert-led workshop guiding teams from concepts to implementation, and the top 10 teams will advanced to the finals which will be held at WSO2 premises.';

  // Check if desktop view
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);  
  useEffect(() => {
    // Small delay to ensure elements are rendered
    const timer = setTimeout(() => {
      const elements = [vectorRef.current, aboutVectorRef.current, logoRef.current, logoMobileRef.current].filter(Boolean);
      
      if (elements.length === 0) return;

      const tl = gsap.timeline();
      
      
      gsap.set(elements, {
        opacity: 0,
        scale: 0,
        transformOrigin: 'center center'
      });

    
      if (terminalRef.current) {
        gsap.set(terminalRef.current, {
          opacity: 0,
          y: 50,
          scale: 0.9
        });
      }

     
      if (terminalRef.current) {
        tl.to(terminalRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.out'
        });
      }

    
      if (vectorRef.current) {
        tl.to(vectorRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          delay: 0.3
        }, '-=0.5');
      }

      if (aboutVectorRef.current) {
        tl.to(aboutVectorRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)'
        }, '-=0.4');
      }

      const logoElements = [logoRef.current, logoMobileRef.current].filter(Boolean);
      if (logoElements.length > 0) {
        tl.to(logoElements, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)'
        }, '-=0.2');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Typing animation
  useEffect(() => {
    const textToType = isDesktop ? desktopText : mobileText;
    let currentIndex = 0;
    
    const typeText = () => {
      if (currentIndex < textToType.length) {
        setTypedText(textToType.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, 12); 
      }
    };

    // Start typing after images are loaded
    const timer = setTimeout(() => {
      setTypedText('');
      currentIndex = 0;
      typeText();
    }, 2000);

    return () => clearTimeout(timer);
  }, [isDesktop, mobileText, desktopText]);


  const renderTypedText = (text) => {
  
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <Bold key={index}>{part.slice(2, -2)}</Bold>;
      }
      return part;
    });
  };

  // Format text for typing animation
  const formatTextForTyping = (text) => {
    return text
      .replace(/IEEE Student Branch/g, '**IEEE Student Branch**')
      .replace(/IEEE CS Student Branch Chapter/g, '**IEEE CS Student Branch Chapter**')
      .replace(/University of Moratuwa/g, '**University of Moratuwa**')
      .replace(/WSO2/g, '**WSO2**')
      .replace(/university undergraduates/g, '**university undergraduates**')
      .replace(/Ballerina programming language/g, '**Ballerina programming language**')
      .replace(/top 10 teams/g, '**top 10 teams**')
      .replace(/"Innovate With Ballerina"/g, '**"Innovate With Ballerina"**');
  };      return (
        <div className="bg-gradient-to-b from-[#0A2324] via-[#0A2324] to-[#153f41] snap-start h-screen w-full flex items-end md:items-center justify-center p-4 pb-15 md:pb-4 font-sans relative">
          {/* Background Vector - Left Bottom */}
          <img 
            ref={vectorRef}
            src="/Vector.svg"
            alt="Background Vector"
            className="absolute bottom-7 left-1 md:bottom-48 md:left-28 w-16 h-16 sm:w-40 sm:h-40 md:w-28 md:h-28 md:opacity-80 opacity-80 z-11000000 animate-spin"
            style={{ animationDuration: '25s' }}
          />

          {/* Background Vector - Top Left Corner */}
          <img
            ref={aboutVectorRef}
            src="./about_Vector.png" 
            alt="Background Star"
            className="absolute -bottom-15 -left-15 w-36 h-72 sm:w-20 sm:h-20 md:w-44 md:h-[550px] md:bottom-24 md:left-0 opacity-80 z-0"
          />
            {/* Terminal Window main container */}
          <div ref={terminalRef} className="bg-[#0A2324] w-11/12 md:w-full max-w-4xl rounded-lg overflow-hidden relative z-10 h-[530px] md:h-auto">
            <div className="bg-[#05383C] h-9 flex items-center justify-end px-3 sm:px-4">
              <div className="flex space-x-1.5 sm:space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              </div>
            </div>
            
            {/* Content Area - Different layouts for mobile vs desktop */}
              {/* Mobile Layout */}
            <div className="block md:hidden px-2 py-8 text-slate-300 h-full">
              {/* Logo Section - Mobile */}
              <div className="text-center mb-8">
                <img 
                  ref={logoMobileRef}
                  src="/b1.png"
                  alt="Innovate with Ballerina Logo"
                  className="mx-auto max-w-48 w-full h-auto"
                />
              </div>
              
              {/* Mobile Terminal Text Content with Typing Animation */}
              <div className="text-[13px] text-justify h-full overflow-y-auto">
                <div className="text-center whitespace-pre-line">
                  {renderTypedText(formatTextForTyping(typedText))}
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            </div>
              {/* Desktop Layout */}
            <div className="hidden md:block px-12 sm:px-16 md:px-32 py-6 sm:py-8 md:py-14 text-slate-300">
              {/* Logo Section - Desktop */}
              <div className="text-center mb-6 sm:mb-6">
                <img 
                  ref={logoRef}
                  src="/b1.png"
                  alt="Innovate with Ballerina Logo"
                  className="mx-auto max-w-65 sm:max-w-52 md:max-w-80 w-full h-auto"
                />
              </div>           
                 {/* Desktop Text Content Section with Typing Animation */}
              <div className="text-xs sm:text-sm md:text-lg sm:leading-loose text-center">
                {renderTypedText(formatTextForTyping(typedText))}
                <span className="animate-pulse">|</span>
              </div>
            </div>
          </div>
        </div>
      )
}

export default About