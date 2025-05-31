import React from "react"
import TimeLineCard from "./TimeLineCard"
const Timeline = () => {
  return (
    <div className='relative h-screen w-full snap-start bg-gradient-to-b from-[#0F262A] via-[#0F262A] to-[#153f41] flex items-center justify-center text-4xl font-bold'>
        <img src="/Ellipse 9.png" className="absolute right-[-30px] top-[-300px]"/>
        <img src="/Ellipse 10.png" className="absolute right-[250px] top-[550px] h-36"/>
        <div className='text-background-div2'>
          <p className='text-background'>Stay Updated</p>
        </div>
      <div className="absolute left-[185px] top-[90px]">
        <TimeLineCard text={"Registrations Open"} month={"June"} day={"15"} />
      </div>
      <div className="absolute left-[755px] top-[227px]">
        <TimeLineCard text={"Opening Registration"} month={"June"} day={"15"} />
      </div>
      <div className="absolute left-[485px] top-[487px]">
        <TimeLineCard text={"Opening Registration"} month={"June"} day={"15"} />
      </div>
    </div>
  )
}

export default Timeline