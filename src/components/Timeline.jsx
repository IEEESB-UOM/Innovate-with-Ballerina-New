import TimeLineCard from "./TimeLineCard"

const Timeline = () => {
  return (
    <div className='relative h-screen w-full bg-gradient-to-b from-[#0A2324] via-[#0A2324] to-[#0F262A] flex items-center justify-center text-4xl font-bold'>

      <div className="relative w-full flex flex-col items-center h-full md:block">
        {/* Decorative Images */}
        <img src="/Ellipse 7.png" className="absolute left-[0px] top-[250px] hidden md:block" />
        <img src="/Ellipse 8.png" className="absolute left-[200px] top-[600px] hidden md:block" />
        <img src="/Ellipse 9.png" className="absolute right-[-30px] top-[450px] hidden md:block" />

        {/* Background Text */}
        <div className='absolute top-[10%] left-[45%] w-full hidden md:block'>
          <p className='text-[184px] font-bold leading-[101%] tracking-[3.44px] capitalize bg-gradient-to-r from-[rgba(14,159,154,0.305)] via-[rgba(143,193,143,0.305)] to-[rgba(255,179,74,0.305)] bg-clip-text text-transparent absolute'>
            Stay Updated
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="md:absolute md:left-[185px] md:top-[180px] md:w-auto w-4/5 mx-auto mt-[150px] md:mt-0">
          <TimeLineCard text={"Registrations Open"} month={"June"} day={"15"} />
        </div>

        <div className="md:absolute md:left-[885px] md:top-[387px] w-4/5 mx-auto md:w-auto">
          <TimeLineCard text={"Registrations Open"} month={"June"} day={"15"} />
        </div>

        <div className="md:absolute md:left-[435px] md:top-[575px] w-4/5 mx-auto md:w-auto">
          <TimeLineCard text={"Registrations Open"} month={"June"} day={"15"} />
        </div>
      </div>
    </div>
  )
}

export default Timeline