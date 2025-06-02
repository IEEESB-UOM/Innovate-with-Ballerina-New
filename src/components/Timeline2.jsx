import TimeLineCard from "./TimeLineCard"

const Timeline = () => {
  return (
    <div className='relative h-screen w-full bg-gradient-to-b from-[#0F262A] via-[#0F262A] to-[#153f41] flex items-center justify-center text-4xl font-bold'>
      <div className="relative w-full flex flex-col items-center h-full md:block">
        <img src="/Ellipse 9.png" className="absolute right-[-30px] top-[-300px] hidden md:block"/>
        <img src="/Ellipse 10.png" className="absolute right-[250px] top-[550px] h-36 hidden md:block"/>
        <div className='absolute top-[10%] left-[45%] w-full hidden md:block'>
          <p className='text-[184px] font-bold leading-[101%] tracking-[3.44px] capitalize bg-gradient-to-r from-[rgba(14,159,154,0.305)] via-[rgba(143,193,143,0.305)] to-[rgba(255,179,74,0.305)] bg-clip-text text-transparent absolute'>
            Stay Updated
          </p>
        </div>
      <div className="md:absolute md:left-[185px] md:top-[90px] md:w-auto w-4/5 mx-auto mt-[150px] md:mt-0">
        <TimeLineCard text={"Registrations Open"} month={"June"} day={"15"} />
      </div>
      <div className="md:absolute md:left-[755px] md:top-[227px] w-4/5 mx-auto md:w-auto">
        <TimeLineCard text={"Registrations Open"} month={"June"} day={"15"} />
      </div>
      <div className="md:absolute md:left-[485px] md:top-[487px] w-4/5 mx-auto md:w-auto">
        <TimeLineCard text={"Registrations Open"} month={"June"} day={"15"} />
      </div>
      </div>
    </div>
  )
}

export default Timeline