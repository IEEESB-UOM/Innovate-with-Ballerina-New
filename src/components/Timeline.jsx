import React from "react"
import TimeLineCard from "./TimeLineCard"
import '../stylesheets/timeline.css';
const Timeline = () => {
  return (
    <div className='relative h-screen w-full snap-start bg-gradient-to-b from-[#0A2324] via-[#0A2324] to-[#0F262A] flex items-center justify-center text-4xl font-bold'>
  
  <div className="bg-animation">
    <div id="stars"></div>
    <div id="stars2"></div>
  </div>

  {/* <div className="background-svg">
        <BackgroundLine/>
    </div> */}
    
  <div className="relative w-full flex flex-col items-center h-full md:block">
    {/* Decorative Images */}
    <img src="/Ellipse 7.png" className="absolute left-[0px] top-[250px] hidden md:block" />
    <img src="/Ellipse 8.png" className="absolute left-[200px] top-[600px] hidden md:block" />
    <img src="/Ellipse 9.png" className="absolute right-[-30px] top-[450px] hidden md:block" />
    
    {/* Background Text */}
    <div className='text-background-div1 hidden md:block'>
      <p className='text-background'>Stay Updated</p>
    </div>

    {/* Timeline Cards */}
    <div className="md:absolute md:left-[185px] md:top-[180px] timeline-container1">
      <TimeLineCard text={"Registrations Open"} month={"June"} day={"15"} />
    </div>

    <div className="md:absolute md:left-[885px] md:top-[387px] timeline-container">
      <TimeLineCard text={"Registrations Open"} month={"June"} day={"15"} />
    </div>

    <div className="md:absolute md:left-[435px] md:top-[575px] timeline-container">
      <TimeLineCard text={"Registrations Open"} month={"June"} day={"15"} />
    </div>
  </div>
</div>

  )
}

export default Timeline