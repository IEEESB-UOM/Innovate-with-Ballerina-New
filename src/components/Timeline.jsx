import React from "react"
import TimeLineCard from "./TimeLineCard"
import '../stylesheets/timeline.css';
const Timeline = () => {
  return (
    <div className='relative h-screen w-full snap-start bg-gradient-to-b from-[#0A2324] via-[#0A2324] to-[#0F262A] flex items-center justify-center text-4xl font-bold'>
      {/* <div className="background-svg">
                        <BackgroundLine/>
                    </div> */}
        <img src="/Ellipse 7.png" className="absolute left-[0px] top-[250px]"/>
        <img src="/Ellipse 8.png" className="absolute left-[200px] top-[600px]"/>
        <img src="/Ellipse 9.png" className="absolute right-[-30px] top-[450px]"/>
        <div className='text-background-div1'>
          <p className='text-background'>Stay Updated</p>
        </div>
        {/* <div className='text-background-div2'>
          <p className='text-background'>Updated  </p>
        </div> */}
      <div className="absolute left-[185px] top-[180px]">
        <TimeLineCard text={"Registrations Open"} month={"June"} day={"15"} />
      </div>
      <div className="absolute left-[885px] top-[387px]">
        <TimeLineCard text={"Opening Registration"} month={"June"} day={"15"} />
      </div>
      <div className="absolute left-[435px] top-[575px]">
        <TimeLineCard text={"Opening Registration"} month={"June"} day={"15"} />
      </div>
    </div>
  )
}

export default Timeline