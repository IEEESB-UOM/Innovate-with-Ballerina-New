const About = () => {
  const Bold = ({ children }) => <strong className="font-semibold text-white">{children}</strong>;
      return (
        <div className="bg-gradient-to-b from-[#0A2324] via-[#0A2324] to-[#153f41] snap-start h-screen w-full flex items-end md:items-center justify-center p-4 pb-15 md:pb-4 font-sans relative">
          {/* Background Vector - Left Bottom */}
          <img 
            src="/Vector.svg"
            alt="Background Vector"
            className="absolute bottom-7 left-1 md:bottom-48 md:left-28 w-16 h-16 sm:w-40 sm:h-40 md:w-28 md:h-28 md:opacity-80 opacity-80 z-11000000 animate-spin"
            style={{ animationDuration: '25s' }}
          />

          {/* Background Vector - Top Left Corner */}
          <img
            src="./about_Vector.png" 
            alt="Background Star"
            className="absolute -bottom-15 -left-15 w-36 h-72 sm:w-20 sm:h-20 md:w-44 md:h-[550px] md:bottom-24 md:left-0 opacity-80 z-0"
          />
            {/* Terminal Window main container */}
          <div className="bg-[#0A2324] w-11/12 md:w-full max-w-4xl rounded-lg overflow-hidden relative z-10 h-auto md:h-auto">
            <div className="bg-[#05383C] h-9 flex items-center justify-end px-3 sm:px-4">
              <div className="flex space-x-1.5 sm:space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              </div>
            </div>
            
            {/* Content Area - Different layouts for mobile vs desktop */}
            
            {/* Mobile Layout */}
            <div className="block md:hidden px-2 py-8 text-slate-300">
              {/* Logo Section - Mobile */}
              <div className="text-center mb-8">
                <img 
                  src="/b1.png"
                  alt="Innovate with Ballerina Logo"
                  className="mx-auto max-w-48 w-full h-auto"
                />
              </div>
              
              {/* Mobile Terminal Text Content */}
              <div className="text-[13px] text-justify">
                <p className="text-center">
                  <Bold>"Innovate With Ballerina"</Bold> <br/>Provides An Exclusive Platform <br/>For University Students To<br/> Elevate Their Coding Passion <br/> With The Ballerina <br/> Programming Language. This <br/>Pioneering Competition Aims <br/> To Drive The Future Of <br/>Technology By Fostering <br/> Teamwork, Innovation, And <br/>Outstanding Performance.<br/>
                </p>
                
                <p className="text-center">
                  Projects Can Be Submitted Via <br/> GitHub And Will Be Evaluated <br/> By The WSO2 Ballerina Team.<br/> Compelling Rewards And <br/> Certificates Will Be Awarded<br/> For Exceptional Contributions.
                </p>
              </div>
            </div>
            
            {/* Desktop Layout (md and above) */}
            <div className="hidden md:block px-12 sm:px-16 md:px-32 py-6 sm:py-8 md:py-14 text-slate-300">
              {/* Logo Section - Desktop */}
              <div className="text-center mb-6 sm:mb-6">
                <img 
                  src="/b1.png"
                  alt="Innovate with Ballerina Logo"
                  className="mx-auto max-w-65 sm:max-w-52 md:max-w-80 w-full h-auto"
                />
              </div>           
                 {/* Desktop Text Content Section */}
              <p className="text-xs sm:text-sm md:text-lg  sm:leading-loose text-center">
                Innovate with Ballerina is an idea hackathon organized by the <Bold>IEEE Student<br/> Branch</Bold> in collaboration with the <Bold>IEEE CS Student Branch Chapter</Bold> of <Bold><br/>University of Moratuwa</Bold>, and proudly powered by <Bold>WSO2</Bold>. The competition is<br/> open to <Bold>university undergraduates</Bold> across Sri Lanka, where participants are <br/>challenged to integrate their innovative ideas using the <Bold>Ballerina <br/> programming language</Bold>. The journey features expert-led workshop guiding <br/> teams from concepts to implementation, and the <Bold>top 10 teams</Bold> will <br/> advanced to the finals which will be held at WSO2 premises.
              </p>
            </div>
          </div>
        </div>
      )
}

export default About