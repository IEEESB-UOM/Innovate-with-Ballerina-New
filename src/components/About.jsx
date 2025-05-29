const About = () => {
   const Bold = ({ children }) => <strong className="font-semibold text-white">{children}</strong>; 
    return (
    <div className="bg-gradient-to-b from-[#0A2324] via-[#0A2324] to-[#153f41] snap-start h-screen w-full flex items-center justify-center p-4 font-sans relative">
      {/* Background Vector - Left Bottom */}
      <img 
        src="/Vector.svg" 
        alt="Background Vector" 
        className="absolute bottom-10 left-4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 md:opacity-80 opacity-25 z-11"
      />
      
      {/* Terminal Window main container */}
      <div className="bg-[#0A2324] w-full max-w-4xl rounded-lg overflow-hidden relative z-10">
        <div className="bg-[#05383C] h-9 flex items-center justify-end px-3 sm:px-4"> 
          <div className="flex space-x-1.5 sm:space-x-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <div className="w-3 h-3 bg-teal-500 rounded-full"></div> 
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 md:p-10 text-slate-300">         
           {/* Logo Section */}
          <div className="text-center mb-6 sm:mb-6">
            <img 
              src="/b1.png" 
              alt="Innovate with Ballerina Logo" 
              className="mx-auto max-w-65 sm:max-w-52 md:max-w-80 w-full h-auto"
            />
          </div>

          {/* Text Content Section */}
          <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose">
            Innovate with Ballerina is an idea hackathon organized by the <Bold>IEEE Student Branch</Bold> in collaboration with the <Bold>IEEE CS Student Branch Chapter</Bold> of <Bold>University of Moratuwa</Bold>, and proudly powered by <Bold>WSO2</Bold>. The competition is open to <Bold>university undergraduates</Bold> across Sri Lanka, where participants are challenged to integrate their innovative ideas using the <Bold>Ballerina programming language</Bold>. The journey features expert-led workshop guiding teams from concepts to implementation, and the <Bold>top 10 teams</Bold> will advanced to the finals which will be held at WSO2 premises.
          </p>
        </div>
      </div>
    </div>
  
  )
}

export default About


