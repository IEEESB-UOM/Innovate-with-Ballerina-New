import { useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';

const About = () => {
  const Bold = ({ children }) => <strong className="font-semibold text-white">{children}</strong>;

  // Function to format date for terminal login message
  const formatLoginDate = () => {
    const now = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const date = now.getDate().toString().padStart(2, ' ');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${dayName} ${monthName} ${date} ${hours}:${minutes}:${seconds}`;
  };

  // Refs for animations
  const vectorRef = useRef(null);
  const aboutVectorRef = useRef(null);
  const logoRef = useRef(null);
  const logoMobileRef = useRef(null);
  const terminalRef = useRef(null);
  const sectionRef = useRef(null);

  // State for typing animation
  const [typedText, setTypedText] = useState('');
  const [isDesktop, setIsDesktop] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentlyTyping, setCurrentlyTyping] = useState(false); const [loadingDots, setLoadingDots] = useState('');

  // Terminal commands and responses for realistic terminal behavior
  const terminalCommands = useMemo(() => [
    {
      type: 'init',
      content: isDesktop
        ? `Last login: ${formatLoginDate()} on ttys000\n`
        : ""
    },
    {
      type: 'prompt',
      content: "user@MacBook-Pro ~ %"
    },
    {
      type: 'command',
      content: "bal run iwb_25.bal",
      delay: 80
    },
    {
      type: 'loading',
      content: "Compiling source 'iwb_25.bal'\nRunning executable",
      delay: 1200
    },
    {
      type: 'output',
      content: "Innovate with Ballerina is an idea hackathon organized by the IEEE Student Branch in collaboration with the IEEE CS Student Branch Chapter of University of Moratuwa, and proudly powered by WSO2. The competition is open to university undergraduates across Sri Lanka, where participants are challenged to integrate their innovative ideas using the Ballerina programming language.",
      delay: 30
    },
    {
      type: 'prompt',
      content: "user@MacBook-Pro ~ %"
    }
  ], [isDesktop]);
  // Check if desktop view
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);
  // Intersection Observer to detect when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationCompleted) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [animationCompleted]);
  useEffect(() => {
    // Small delay
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
  }, []);  // Typing animation with realistic terminal behavior
  useEffect(() => {
    // Don't run animation if it has already completed or component is not visible
    if (animationCompleted || !isVisible) return;

    let commandIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let timeoutId;

    // Variable typing speeds for more realistic feel
    const getTypingSpeed = (char, isCommand = false) => {
      if (isCommand) {
        // Faster typing for commands
        if (char === ' ') return 150;
        if (char === '.') return 200;
        return Math.random() * 40 + 60;
      }
      return Math.random() * 30 + 20;
    };

    const typeTerminal = () => {
      if (commandIndex >= terminalCommands.length) {
        setAnimationCompleted(true);
        setCurrentlyTyping(false);
        return;
      }

      const currentCommand = terminalCommands[commandIndex];

      if (charIndex === 0) {
        // Starting new command/output
        if (currentCommand.type === 'init') {
          // Display init instantly
          currentText += currentCommand.content;
          setTypedText(currentText);
          commandIndex++;
          charIndex = 0;
          timeoutId = setTimeout(typeTerminal, 300);
          return;
        } else if (currentCommand.type === 'prompt') {
          // Display prompt instantly
          currentText += currentCommand.content + ' ';
          setTypedText(currentText);
          commandIndex++;
          charIndex = 0;
          timeoutId = setTimeout(typeTerminal, 200);
          return;
        } else if (currentCommand.type === 'loading') {
          // Display loading with animated dots
          setCurrentlyTyping(true);
          let cycleCount = 0;

          // Animate loading dots
          const animateLoadingDots = () => {
            cycleCount++;
            const dotCount = (cycleCount % 4);
            const dotsAnimation = '.'.repeat(dotCount);
            setLoadingDots(dotsAnimation);

            if (cycleCount >= 8) {

              timeoutId = setTimeout(() => {

                const loadingIndex = currentText.lastIndexOf('Loading');
                if (loadingIndex !== -1) {
                  currentText = currentText.substring(0, loadingIndex);
                }
                currentText += currentCommand.content + '\n\n';
                setTypedText(currentText);
                setLoadingDots('');
                commandIndex++;
                charIndex = 0;
                setCurrentlyTyping(false);
                timeoutId = setTimeout(typeTerminal, 800);
              }, 200);
              return;
            }
            timeoutId = setTimeout(animateLoadingDots, 300);
          };

          // Show loading message immediately
          currentText += 'Loading';
          setTypedText(currentText);

          timeoutId = setTimeout(() => {
            animateLoadingDots();
          }, 400);
          return;
        } else if (currentCommand.type === 'output') {
          // Show output instantly without typing effect
          currentText += currentCommand.content + '\n\n';
          setTypedText(currentText);
          commandIndex++;
          charIndex = 0;
          timeoutId = setTimeout(typeTerminal, 600);
          return;
        }
      }
      if (currentCommand.type === 'command' && charIndex < currentCommand.content.length) {
        // Type command character by character with realistic speed
        setCurrentlyTyping(true);

        currentText += currentCommand.content[charIndex];
        setTypedText(currentText);
        charIndex++;

        const char = currentCommand.content[charIndex - 1];
        const typingSpeed = getTypingSpeed(char, true);
        timeoutId = setTimeout(typeTerminal, typingSpeed);
      } else if (currentCommand.type === 'command') {
        // Finished typing command, pause before executing
        setCurrentlyTyping(false);
        currentText += '\n';
        setTypedText(currentText);
        commandIndex++;
        charIndex = 0;
        timeoutId = setTimeout(typeTerminal, 500);
      }
    };

    // Start terminal animation after initial delay
    const timer = setTimeout(() => {
      setTypedText('');
      currentText = '';
      commandIndex = 0;
      charIndex = 0;
      setCurrentlyTyping(false);
      typeTerminal();
    }, 1000);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [terminalCommands, animationCompleted, isVisible]); const renderTerminalText = (text) => {
    const lines = text.split('\n');
    return lines.map((line, lineIndex) => {
      // Handle login info
      if (line.startsWith('Last login:')) {
        return (
          <div key={lineIndex} className="text-gray-400 font-mono text-sm animate-fadeIn">
            {line}
          </div>
        );
      }

      // Handle command prompts
      if (line.startsWith('user@MacBook-Pro ~ %')) {
        const promptPart = 'user@MacBook-Pro ~ %';
        const commandPart = line.substring(promptPart.length).trim();

        return (
          <div key={lineIndex} className="font-mono flex items-start animate-slideInLeft">
            <span className="text-green-400 font-bold text-sm md:text-lg">{promptPart}</span>
            {commandPart && (
              <span className="ml-2 text-white text-sm md:text-lg">{commandPart}</span>
            )}
          </div>
        );
      }        // Handle loading/compilation messages
      if (line.includes('Compiling source') || line.includes('Running executable') || line.includes("'iwb_25.bal'")) {
        return (
          <div key={lineIndex} className="text-gray-400 font-mono text-sm italic">
            {line}
          </div>
        );
      }

      // Handle loading state with dots
      if (line.includes('Loading')) {
        return (
          <div key={lineIndex} className="text-gray-300 font-mono text-sm italic">
            {line}{loadingDots}
          </div>
        );
      }

      // Handle regular output text (long paragraphs)
      if (line.trim() && line.length > 50) {
        return (
          <div key={lineIndex} className="text-gray-200 font-mono text-sm tracking-tighter md:tracking-normal md:text-lg leading-relaxed text-left md:text-justify animate-typewriter">
            {line}
          </div>
        );
      }

      // Handle regular output text (short lines)
      if (line.trim()) {
        return (
          <div key={lineIndex} className="text-gray-200 font-mono text-sm leading-relaxed animate-fadeIn">
            {line}
          </div>
        );
      }

      // Handle empty lines
      return <div key={lineIndex} className="h-4"></div>;
    });
  };
  return (
    <div ref={sectionRef} className="bg-gradient-to-b from-[#0A2324] via-[#0A2324] to-[#0A2324] snap-start h-screen w-full flex items-center md:items-center justify-center p-4 pb-15 md:pb-4 font-sans relative">
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
        className="absolute -bottom-15 -left-15 w-36 h-72 sm:w-20 sm:h-20 md:w-44 md:h-[550px] md:bottom-24 md:left-0 opacity-80 z-0" />
      {/* Terminal Window main container */}
      <div
        ref={terminalRef}
        className="w-full md:w-full max-w-4xl overflow-hidden relative mt-20 md:mt-5 z-10 h-[530px] md:h-[550px]"
        style={{
          background: 'rgba(255, 255, 255, 0.19)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)'
        }}
      >
        {/* Terminal Header */}
        <div className="h-9 flex items-center justify-between px-3 sm:px-4 border-b border-white/30" style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)'
        }}>
          {/* Left side - Terminal control dots */}
          <div className="flex space-x-1.5 sm:space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full shadow-sm hover:bg-red-500 transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm hover:bg-yellow-500 transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full shadow-sm hover:bg-green-500 transition-colors cursor-pointer"></div>
          </div>
          {/* Center - Terminal title */}
          <div className="text-white/90 text-xs font-medium tracking-wide flex items-center">
            <span className="text-gray-300 mr-2">●</span>
            <span>Terminal</span>
          </div>

          {/* Right side - Empty space for balance */}
          <div className="w-12"></div>
        </div>

        {/* Content Area - Different layouts for mobile vs desktop */}        {/* Mobile Layout */}
        <div className="block md:hidden px-1 py-1 text-white h-full">
          {/* ASCII Art Logo Section - Mobile */}
          <div className="text-left mt-2">
            <pre
              // ref={logoMobileRef}
              className="text-gray-300 font-mono whitespace-pre overflow-x-auto overflow-y-hidden w-full drop-shadow-lg"
              style={{ fontSize: '1.5px', lineHeight: '1.65px', maxWidth: '100%',textAlign: 'center' }}
            >
              {`,c.                                        
                                                                                                                                                                                                                                                                ,0O'  .;llc;.  ,ccccc:.                     
                                                                                                                                                                                                               ...                             ...              .:.  ,O0oco0O'.OXxlllc'                     
                                                                                                                                                                                                         'cdkO00K0c                          .oK000Oxo:.             ':.  .kX:'OKocll,.                     
                                                                                                                                                                                                       ,xNMMMMMMMWo                          .kMMMMMMMWKd.            .;ldkkc..cdl::xKo.                    
                                                                                                                                                                                                      :KMMMMMWXK00:                          .o0KKXWMMMMWO,          ,00o:'.  .ol.  ;Kk.                    
                                                                                                                                                                                                     '0MMMMNx;....                             ....:kWMMMMx.         lK0xdddo'.cOkdxOk,                     
                                                                                                                                                                                                     cNMMMWx.                                       .OMMMMK,         ........   ..,'.                       
                                                                                      ',.                                                 .                              .:,    .    .,.             dWMMMNc                   ..,c'                 dWMMMN:                                                
                                                                                     .kK,                                                :Oc                             'xl. .lk,  .xK;            .xMMMMX:                 .xKKNNl                 oWMMMNl                                                
                                                                                     .OK, ;dllddl. .cdlldd:.  ,odddo, .o:. .co..:dddd;..l0W0o, .cdddo,.     .cl..oxo..lc..dc.,dKNOl..xNxlddl.       .xMMMMX:                 lNMMMNc                 oWMMMWl                                                
                                                                                     .OK,.dNx,.lXx..ONo''xXl ;Kk;.,kK:.xK; :Kx..lxllKK;..dNx'..kNkodKXO:    .dK:l0k0l:Kd.,Kx..,kXo. .xNx'.oXd.      .xMMMMX:                 ,kKWNo.                 oWMMMWl                                                
                                                                                     .OK,.dX:  '0k..O0'  :Xo.lXo.  oXl ,0x;k0, :OxloKX:  cXo  '0Nxclddo,     cKdkk:kkdKc ,Kx. .dX:  .xX;  ,Kk.      .xMMMMX;               ..,cOWW0ol:'              oWMMMWo                                                
                                                                                     .k0, oK;  'Ox..kO'  :Ko .dOxoxOd.  l000l  c0kllkKx. ;00o'.:Okodxc'.     ,OK0l.l0KO, ,0x.  lKkc..d0;  ,0x.      .kMMMMX;             .lOXNWMMMMX0KKOl,.          oWMMMWd.                                               
                                                                                      ..  ...   ..  ..   ...   .,;,.     .'.    .,;...'.  .''.  .';,.         .''. .''.   ..    .'.  ..    ..       .OMMMMK,         .'cdOkolOWMMMWk..,codddooc;.    cNMMMMx.                                               
                                                                                                                                                                                                    ,KMMMMO.      .:odxo:.   .kMMMNl      ..',:ldd,  ;KMMMMO.                                               
                                                                                                                                                                                                    oNMMMNo    .:ool;.       .dWMMXc            .,'. .kMMMMX:                                               
                       ';;;;;;;;;;;;;;;,'.                               .;;;;.    .,;;;'                                           .;loc'                                                        .lXMMMWk.    ':'   ..,;cldkKNMMMMXkddddddoc.        ;KMMMM0:                                              
                      .kWWWWWWWWWWWMMWWWNKOl.                            :XWWWx.   ,KWWWO'                                         .xWMMMX:                                                   ..,lOWMMMNx.           ,ONWMMMMMMMMMMMMMMMMWKxc.         ,OWMMMNkc,..                                         
                      .xXXNWMMMMWNNNNNWMMMMMKc                           :NMMMx.   ,KMMM0'                                         .xWMMMX:                                                  ,OXWMMMWKx;              .:lkKNWMMMMMMMWKOkdc.             .:kXWMMMWXx.                                        
                       ...cXMMMXl''''',cOWMMMK;                          :NMMMx.   ,KMMM0'                                          .:ddo,                                                   :XMMMMWO;                    .'lKMMMMMWk'                    .c0WMMMM0'                                        
                          ,KMMMK;       ,0MMMNc       .';:cc:;'.         :NMMMx.   ,KMMM0'        ..,:cc:;'.         ...'.  ..'''.   .'''.     ...'.    .',;;'.             .';:cc:;'.       ,ONWMMMWKd,                    .dWMMMMX:                   .:kXWMMMNXk.                                        
                          ,KMMMK;       :KMMMK,    .:xKNWMMMMWNKx;.      :NMMMx.   ,KMMM0'      ,d0XWMMMMWNKx:.     .xNNN0ccOXNNK;  ,0NNNx.   .kNNNk,;oxKNWWWNXOl.       .:xKNWMMMMWNKx;      ..;l0WMMMNx.                   ;XMMMWx.                  ,kWMMMNkc,..                                         
                          ,KMMMNxccccclxXMMNO;    'kWMMWKkxxkXWMMNd.     :NMMMx.   ,KMMM0'    .xNMMMNKOO0XWMMWO;    .kMMMWNWMWNNK;  ;XMMMk.   '0MMMNKNMNK00KNWMMW0:     'OWMMWKkxxkXWMMNd.        .oXMMMWk.                  .OMMM0'                  ,0MMMMK:                                              
                          ,KMMMMMMMMMMMMMNk;.     ,dOXKl.    'xWMMNc     :NMMMx.   ,KMMM0'   'OWMMXd,.  ..c0MMMK;   .kMMMMNx:,'..   ;XMMMk.   '0MMMMNxc,.. .'dNMMMK,    ,dOXKl.    'kWMMNc         .dWMMMNl                  .OMMK;                  .xWMMMX:                                               
                          ,KMMMWNXXXXXNWMWKx:.      .';'.....'oNMMWd.    :NMMMx.   ,KMMM0'   oWMMMO:,,,,,,;dNMMMk.  .kMMMNo         ;XMMMk.   '0MMMK,         oWMMWo    .;dOKXNNNNNNWMMMWd          '0MMMMK,                .OMMMO.                  :NMMMMx.                                               
                          ,KMMMXc......;xNMMWk.   .;dOKXNNNNNNWMMMWd.    :NMMMx.   ,KMMM0'  .kMMMMWWWWWWWWWWMMMM0'  .kMMMX;         ;XMMMk.   '0MMMK,         oWMMWo   'kWMMWX0OOOOOKWMMWd.         .OMMMMX;                ,KMMMK;                  lNMMMWd                                                
                          ,KMMMK;       .kMMMNl  .kWMMWX0OOOOOKWMMWd.    :NMMMx.   ,KMMM0'  .kMMMWKxxxxxxxxxxxxxl.  .kMMMX;         ;XMMMk.   '0MMMK,         oWMMWo   oWMMWx.     .oWMMWd          .kMMMMX:                '0WNWNl                  lWMMMWo                                                
                       '::dNMMMNxccccllxKWMMMK;  oWMMWk'   .'oXMMMMO;.   :NMMMx.   ,KMMM0'   .kWMMWOc'....:ONNOl.   .kMMMX;         ;XMMMk.   '0MMMK,         oWMMWo  .dWMMWx'   .'oXMMMMO;..       .kMMMMX:                .x0lkNl                  oWMMMWl                                                
                      .OMMMMMMMMMMMMMMMMMMMNO;   'OWMMWXOkO0XW00WMMWNK:  :NMMMx.   ,KMMM0'    .oXMMMWNKKKXWMMW0:    .kMMMX;         ;XMMMk.   '0MMMK,         oWMMWo   ,OWMMWXOkO0XWK0WMMWNK:       .kMMMMX:                ;Ol.cKc                  oWMMMWl                                                
                      .dXXXXXXXXXXXXXXKK0ko,.     .ckXNWWWWN0l..oOKXK0:  ;0XXKo.   'kXXXx.      'lkKNWWWWWNKx:.     .dXXXO,         ,OXXXd.   .xXXXk'         cKXXKc    .lkXNWWWWN0l..o0KXX0:       .xMMMMX:                dX: ;Oc                  oWMMMWl                                                
                       .................             .',;;,..     ....    .....     .....          .',;;;,'.         .....           .....     .....           ....        .',;;,..     ....         dWMMMNc                lK: 'Od.                 dWMMMNc                                                
                                                                                                                                                                                                     lNMMMWd.               ;d' 'Ok.                'OMMMMX;                                                
                                                                                                                                                                                                     ,0MMMMNd,....              .l:            ....:OWMMMWx.                                                
                                                                                                                                                                                                      cXMMMMMNXK00:                          .o0KKNWMMMMWO,                                                 
                                                                                                                                                                                                       ,kNMMMMMMMWo                          .kMMMMMMMWKo.                                                  
                                                                                                                                                                                                         'cdkO0000c                          .o0000Oko:.                                                    
                                                                                                                                                                                                              ....                             ...                                                          
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            `}
            </pre>          </div>
          {/* Terminal Text Content - Mobile */}
          <div className="text-[14px] font-mono text-white overflow-y-auto h-[calc(100%-100px)] px-1.5 pt-1 pb-1.5 custom-scrollbar-mobile">
            {renderTerminalText(typedText)}
            {currentlyTyping && <span className="animate-blink">_</span>}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block px-4 py-2 text-white h-full">
          {/* ASCII Art Logo Section - Desktop */}
          <div className="text-center mt-2"> {/* Changed mb-2 to mt-2 */}
            <pre
              // ref={logoRef}
              className="text-gray-400 font-mono whitespace-pre overflow-x-auto overflow-y-hidden w-full drop-shadow-lg"
              style={{ fontSize: '3px', lineHeight: '3.5px', maxWidth: '100%', textAlign: 'center' }} // Changed textAlign to center and removed paddingLeft
            >
              {`,c.                                        
                                                                                                                                                                                                                                                                ,0O'  .;llc;.  ,ccccc:.                     
                                                                                                                                                                                                               ...                             ...              .:.  ,O0oco0O'.OXxlllc'                     
                                                                                                                                                                                                         'cdkO00K0c                          .oK000Oxo:.             ':.  .kX:'OKocll,.                     
                                                                                                                                                                                                       ,xNMMMMMMMWo                          .kMMMMMMMWKd.            .;ldkkc..cdl::xKo.                    
                                                                                                                                                                                                      :KMMMMMWXK00:                          .o0KKXWMMMMWO,          ,00o:'.  .ol.  ;Kk.                    
                                                                                                                                                                                                     '0MMMMNx;....                             ....:kWMMMMx.         lK0xdddo'.cOkdxOk,                     
                                                                                                                                                                                                     cNMMMWx.                                       .OMMMMK,         ........   ..,'.                       
                                                                                      ',.                                                 .                              .:,    .    .,.             dWMMMNc                   ..,c'                 dWMMMN:                                                
                                                                                     .kK,                                                :Oc                             'xl. .lk,  .xK;            .xMMMMX:                 .xKKNNl                 oWMMMNl                                                
                                                                                     .OK, ;dllddl. .cdlldd:.  ,odddo, .o:. .co..:dddd;..l0W0o, .cdddo,.     .cl..oxo..lc..dc.,dKNOl..xNxlddl.       .xMMMMX:                 lNMMMNc                 oWMMMWl                                                
                                                                                     .OK,.dNx,.lXx..ONo''xXl ;Kk;.,kK:.xK; :Kx..lxllKK;..dNx'..kNkodKXO:    .dK:l0k0l:Kd.,Kx..,kXo. .xNx'.oXd.      .xMMMMX:                 ,kKWNo.                 oWMMMWl                                                
                                                                                     .OK,.dX:  '0k..O0'  :Xo.lXo.  oXl ,0x;k0, :OxloKX:  cXo  '0Nxclddo,     cKdkk:kkdKc ,Kx. .dX:  .xX;  ,Kk.      .xMMMMX;               ..,cOWW0ol:'              oWMMMWo                                                
                                                                                     .k0, oK;  'Ox..kO'  :Ko .dOxoxOd.  l000l  c0kllkKx. ;00o'.:Okodxc'.     ,OK0l.l0KO, ,0x.  lKkc..d0;  ,0x.      .kMMMMX;             .lOXNWMMMMX0KKOl,.          oWMMMWd.                                               
                                                                                      ..  ...   ..  ..   ...   .,;,.     .'.    .,;...'.  .''.  .';,.         .''. .''.   ..    .'.  ..    ..       .OMMMMK,         .'cdOkolOWMMMWk..,codddooc;.    cNMMMMx.                                               
                                                                                                                                                                                                    ,KMMMMO.      .:odxo:.   .kMMMNl      ..',:ldd,  ;KMMMMO.                                               
                                                                                                                                                                                                    oNMMMNo    .:ool;.       .dWMMXc            .,'. .kMMMMX:                                               
                       ';;;;;;;;;;;;;;;,'.                               .;;;;.    .,;;;'                                           .;loc'                                                        .lXMMMWk.    ':'   ..,;cldkKNMMMMXkddddddoc.        ;KMMMM0:                                              
                      .kWWWWWWWWWWWMMWWWNKOl.                            :XWWWx.   ,KWWWO'                                         .xWMMMX:                                                   ..,lOWMMMNx.           ,ONWMMMMMMMMMMMMMMMMWKxc.         ,OWMMMNkc,..                                         
                      .xXXNWMMMMWNNNNNWMMMMMKc                           :NMMMx.   ,KMMM0'                                         .xWMMMX:                                                  ,OXWMMMWKx;              .:lkKNWMMMMMMMWKOkdc.             .:kXWMMMWXx.                                        
                       ...cXMMMXl''''',cOWMMMK;                          :NMMMx.   ,KMMM0'                                          .:ddo,                                                   :XMMMMWO;                    .'lKMMMMMWk'                    .c0WMMMM0'                                        
                          ,KMMMK;       ,0MMMNc       .';:cc:;'.         :NMMMx.   ,KMMM0'        ..,:cc:;'.         ...'.  ..'''.   .'''.     ...'.    .',;;'.             .';:cc:;'.       ,ONWMMMWKd,                    .dWMMMMX:                   .:kXWMMMNXk.                                        
                          ,KMMMK;       :KMMMK,    .:xKNWMMMMWNKx;.      :NMMMx.   ,KMMM0'      ,d0XWMMMMWNKx:.     .xNNN0ccOXNNK;  ,0NNNx.   .kNNNk,;oxKNWWWNXOl.       .:xKNWMMMMWNKx;      ..;l0WMMMNx.                   ;XMMMWx.                  ,kWMMMNkc,..                                         
                          ,KMMMNxccccclxXMMNO;    'kWMMWKkxxkXWMMNd.     :NMMMx.   ,KMMM0'    .xNMMMNKOO0XWMMWO;    .kMMMWNWMWNNK;  ;XMMMk.   '0MMMNKNMNK00KNWMMW0:     'OWMMWKkxxkXWMMNd.        .oXMMMWk.                  .OMMM0'                  ,0MMMMK:                                              
                          ,KMMMMMMMMMMMMMNk;.     ,dOXKl.    'xWMMNc     :NMMMx.   ,KMMM0'   'OWMMXd,.  ..c0MMMK;   .kMMMMNx:,'..   ;XMMMk.   '0MMMMNxc,.. .'dNMMMK,    ,dOXKl.    'kWMMNc         .dWMMMNl                  .OMMK;                  .xWMMMX:                                               
                          ,KMMMWNXXXXXNWMWKx:.      .';'.....'oNMMWd.    :NMMMx.   ,KMMM0'   oWMMMO:,,,,,,;dNMMMk.  .kMMMNo         ;XMMMk.   '0MMMK,         oWMMWo    .;dOKXNNNNNNWMMMWd          '0MMMMK,                .OMMMO.                  :NMMMMx.                                               
                          ,KMMMXc......;xNMMWk.   .;dOKXNNNNNNWMMMWd.    :NMMMx.   ,KMMM0'  .kMMMMWWWWWWWWWWMMMM0'  .kMMMX;         ;XMMMk.   '0MMMK,         oWMMWo   'kWMMWX0OOOOOKWMMWd.         .OMMMMX;                ,KMMMK;                  lNMMMWd                                                
                          ,KMMMK;       .kMMMNl  .kWMMWX0OOOOOKWMMWd.    :NMMMx.   ,KMMM0'  .kMMMWKxxxxxxxxxxxxxl.  .kMMMX;         ;XMMMk.   '0MMMK,         oWMMWo   oWMMWx.     .oWMMWd          .kMMMMX:                '0WNWNl                  lWMMMWo                                                
                       '::dNMMMNxccccllxKWMMMK;  oWMMWk'   .'oXMMMMO;.   :NMMMx.   ,KMMM0'   .kWMMWOc'....:ONNOl.   .kMMMX;         ;XMMMk.   '0MMMK,         oWMMWo  .dWMMWx'   .'oXMMMMO;..       .kMMMMX:                .x0lkNl                  oWMMMWl                                                
                      .OMMMMMMMMMMMMMMMMMMMNO;   'OWMMWXOkO0XW00WMMWNK:  :NMMMx.   ,KMMM0'    .oXMMMWNKKKXWMMW0:    .kMMMX;         ;XMMMk.   '0MMMK,         oWMMWo   ,OWMMWXOkO0XWK0WMMWNK:       .kMMMMX:                ;Ol.cKc                  oWMMMWl                                                
                      .dXXXXXXXXXXXXXXKK0ko,.     .ckXNWWWWN0l..oOKXK0:  ;0XXKo.   'kXXXx.      'lkKNWWWWWNKx:.     .dXXXO,         ,OXXXd.   .xXXXk'         cKXXKc    .lkXNWWWWN0l..o0KXX0:       .xMMMMX:                dX: ;Oc                  oWMMMWl                                                
                       .................             .',;;,..     ....    .....     .....          .',;;;,'.         .....           .....     .....           ....        .',;;,..     ....         dWMMMNc                lK: 'Od.                 dWMMMNc                                                
                                                                                                                                                                                                     lNMMMWd.               ;d' 'Ok.                'OMMMMX;                                                
                                                                                                                                                                                                     ,0MMMMNd,....              .l:            ....:OWMMMWx.                                                
                                                                                                                                                                                                      cXMMMMMNXK00:                          .o0KKNWMMMMWO,                                                 
                                                                                                                                                                                                       ,kNMMMMMMMWo                          .kMMMMMMMWKo.                                                  
                                                                                                                                                                                                         'cdkO0000c                          .o0000Oko:.                                                    
                                                                                                                                                                                                              ....                             ...                                                          
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            `}
            </pre>          </div>
          {/* Terminal Text Content - Desktop */}
          <div className="text-sm sm:text-sm md:text-lg font-mono text-white overflow-y-auto h-[calc(100%-160px)] px-4 pt-2 pb-0 custom-scrollbar">
            {renderTerminalText(typedText)}
            {currentlyTyping && <span className="animate-blink">|</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;