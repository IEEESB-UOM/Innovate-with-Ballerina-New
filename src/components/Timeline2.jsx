import React from "react"
import TimeLineCard from "./TimeLineCard"
import '../stylesheets/timeline.css';
const Timeline = () => {
  return (
    <div className='relative h-screen w-full snap-start bg-gradient-to-b from-[#0F262A] via-[#0F262A] to-[#153f41] flex items-center justify-center text-4xl font-bold'>
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
      </div>
      <div className="relative w-full flex flex-col items-center h-full md:block">
        <img src="/Ellipse 9.png" className="absolute right-[-30px] top-[-300px] hidden md:block"/>
        <img src="/Ellipse 10.png" className="absolute right-[250px] top-[550px] h-36 hidden md:block"/>
        <div className='text-background-div2 hidden md:block'>
          <p className='text-background'>Stay Updated</p>
        </div>
      <div className="md:absolute md:left-[185px] md:top-[90px] timeline-container1">
        <TimeLineCard text={"Registrations Open"} month={"June"} day={"15"} />
      </div>
      <div className="md:absolute md:left-[755px] md:top-[227px] timeline-container">
        <TimeLineCard text={"Registrations Open"} month={"June"} day={"15"} />
      </div>
      <div className="md:absolute md:left-[485px] md:top-[487px] timeline-container">
        <TimeLineCard text={"Registrations Open"} month={"June"} day={"15"} />
      </div>
      </div>
    </div>
  )
}

export default Timeline